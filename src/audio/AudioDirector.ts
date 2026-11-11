import { soundRecipe } from "../core/atmosphere.mjs";

export class AudioDirector {
  private context: AudioContext | null = null;
  private master: GainNode | null = null;
  private wind: BiquadFilterNode | null = null;
  private windLevel: GainNode | null = null;
  private bassLevel: GainNode | null = null;
  private noiseBuffer: AudioBuffer | null = null;
  private enabled = true;
  private volume = 0.65;
  private location = "";

  constructor() {
    try {
      this.enabled = localStorage.getItem("zombie404-muted") !== "true";
      const stored = localStorage.getItem("zombie404-volume");
      if (stored !== null && Number.isFinite(Number(stored)))
        this.volume = Math.max(0, Math.min(1, Number(stored)));
    } catch {
      /* Storage can be unavailable. */
    }
  }

  get isEnabled() {
    return this.enabled;
  }
  get level() {
    return this.volume;
  }

  toggle() {
    this.enabled = !this.enabled;
    try {
      localStorage.setItem("zombie404-muted", String(!this.enabled));
    } catch {}
    this.applyVolume();
  }

  setLevel(value: number) {
    this.volume = Math.max(0, Math.min(1, value));
    try {
      localStorage.setItem("zombie404-volume", String(this.volume));
    } catch {}
    this.applyVolume();
  }

  private applyVolume() {
    if (this.context && this.master)
      this.master.gain.setTargetAtTime(
        this.enabled ? this.volume : 0,
        this.context.currentTime,
        0.025,
      );
  }

  unlock() {
    if (!this.enabled) return;
    try {
      if (!this.context) {
        const context = new AudioContext();
        this.context = context;
        this.master = context.createGain();
        this.master.gain.value = this.volume;
        this.master.connect(context.destination);
        const buffer = context.createBuffer(
          1,
          context.sampleRate * 3,
          context.sampleRate,
        );
        const samples = buffer.getChannelData(0);
        for (let i = 0; i < samples.length; i++)
          samples[i] = Math.random() * 2 - 1;
        this.noiseBuffer = buffer;
        const source = context.createBufferSource();
        source.buffer = buffer;
        source.loop = true;
        this.wind = context.createBiquadFilter();
        this.wind.type = "lowpass";
        this.wind.frequency.value = 360;
        this.windLevel = context.createGain();
        this.windLevel.gain.value = 0.055;
        source.connect(this.wind).connect(this.windLevel).connect(this.master);
        source.start();
        const bass = context.createOscillator();
        bass.type = "triangle";
        bass.frequency.value = 55;
        const pulse = context.createOscillator();
        pulse.frequency.value = 1.65;
        const envelope = context.createGain();
        const depth = context.createGain();
        depth.gain.value = 0.37;
        envelope.gain.value = 0.52;
        this.bassLevel = context.createGain();
        this.bassLevel.gain.value = 0;
        pulse.connect(depth).connect(envelope.gain);
        bass.connect(envelope).connect(this.bassLevel).connect(this.master);
        bass.start();
        pulse.start();
      }
      if (this.context.state === "suspended")
        void this.context.resume().catch(() => {});
    } catch {
      /* Audio is optional if Web Audio is unavailable. */
    }
  }

  ambience(inside: boolean, night: boolean) {
    const next = (inside ? "inside" : "outside") + (night ? "-night" : "-day");
    if (
      next === this.location ||
      !this.context ||
      !this.wind ||
      !this.windLevel
    )
      return;
    this.location = next;
    this.wind.frequency.setTargetAtTime(
      inside ? 210 : night ? 460 : 900,
      this.context.currentTime,
      0.3,
    );
    this.windLevel.gain.setTargetAtTime(
      inside ? 0.024 : night ? 0.12 : 0.075,
      this.context.currentTime,
      0.3,
    );
  }

  tension(level: number) {
    if (!this.context || !this.bassLevel) return;
    const gain = Math.max(0, Math.min(1, level)) * 0.1;
    this.bassLevel.gain.setTargetAtTime(gain, this.context.currentTime, 0.25);
  }

  private transient(ctx: AudioContext, output: GainNode, name: string) {
    if (
      !this.noiseBuffer ||
      !["shot", "shotgun", "carbine", "blast"].includes(name)
    )
      return;
    const source = ctx.createBufferSource();
    const filter = ctx.createBiquadFilter();
    const gain = ctx.createGain();
    const now = ctx.currentTime;
    const blast = name === "blast",
      shotgun = name === "shotgun";
    const duration = blast ? 0.44 : shotgun ? 0.24 : 0.11;
    source.buffer = this.noiseBuffer;
    filter.type = "lowpass";
    filter.frequency.value = blast ? 640 : shotgun ? 1100 : 1850;
    gain.gain.setValueAtTime(blast ? 0.32 : 0.21, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    source.connect(filter).connect(gain).connect(output);
    source.start(now);
    source.stop(now + duration);
    source.onended = () => {
      source.disconnect();
      filter.disconnect();
      gain.disconnect();
    };
  }

  play(name: string) {
    const ctx = this.context;
    if (!this.enabled || !ctx || ctx.state !== "running" || !this.master)
      return;
    const recipe = soundRecipe(
      name === "step-indoor"
        ? "step"
        : name === "reload"
          ? "door"
          : name === "engine"
            ? "bite"
            : name,
    );
    if (!recipe) return;
    this.transient(ctx, this.master, name);
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();
    const now = ctx.currentTime;
    const pitch =
      name === "step-indoor"
        ? 1.7
        : name === "reload"
          ? 2.5
          : name === "engine"
            ? 0.68
            : 1;
    oscillator.type = recipe.wave as OscillatorType;
    oscillator.frequency.setValueAtTime(recipe.start * pitch, now);
    oscillator.frequency.exponentialRampToValueAtTime(
      recipe.end * pitch,
      now + recipe.duration,
    );
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(
      recipe.volume * (name === "engine" ? 0.3 : 1),
      now + 0.012,
    );
    gain.gain.exponentialRampToValueAtTime(0.0001, now + recipe.duration);
    oscillator.connect(gain).connect(this.master);
    oscillator.start(now);
    oscillator.stop(now + recipe.duration + 0.015);
    oscillator.onended = () => {
      oscillator.disconnect();
      gain.disconnect();
    };
  }
}
