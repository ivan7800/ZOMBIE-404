import type Phaser from "phaser";

export function setupDisplay(registry: Phaser.Data.DataManager) {
  const get = (name: string) =>
    document.querySelector<HTMLInputElement>(`#screen-${name}`)!;
  const color = document.querySelector<HTMLSelectElement>("#screen-color")!;
  const lighting =
    document.querySelector<HTMLSelectElement>("#screen-lighting")!;
  const root = document.querySelector<HTMLElement>("#app")!;
  const brightness = get("brightness");
  const intensity = get("intensity");
  const switches = ["crt", "grain", "vignette", "blood", "motion"] as const;
  const systemMotion = matchMedia("(prefers-reduced-motion: reduce)");
  const key = "zombie404-display-v1";
  try {
    const saved = JSON.parse(localStorage.getItem(key) ?? "null");
    if (saved && typeof saved === "object") {
      if (
        Array.from(color.options).some((option) => option.value === saved.color)
      )
        color.value = saved.color;
      if (
        Array.from(lighting.options).some(
          (option) => option.value === saved.lighting,
        )
      )
        lighting.value = saved.lighting;
      if (Number.isFinite(saved.brightness))
        brightness.value = String(saved.brightness);
      if (Number.isFinite(saved.intensity))
        intensity.value = String(saved.intensity);
      for (const name of switches)
        if (typeof saved[name] === "boolean") get(name).checked = saved[name];
    }
  } catch {
    // The controls also work when local storage is unavailable.
  }

  const apply = () => {
    root.dataset.screenColor = color.value;
    root.style.setProperty(
      "--screen-brightness",
      String(brightness.valueAsNumber / 100),
    );
    root.style.setProperty(
      "--screen-intensity",
      String(intensity.valueAsNumber / 100),
    );
    for (const name of switches)
      root.classList.toggle(`screen-${name}`, get(name).checked);
    root.classList.toggle(
      "screen-still",
      systemMotion.matches || get("motion").checked,
    );
    registry.set(
      "reducedMotion",
      systemMotion.matches || get("motion").checked,
    );
    registry.set("blood", get("blood").checked);
    registry.set("lighting", lighting.value);
  };
  const save = () => {
    apply();
    const values = Object.fromEntries(
      switches.map((name) => [name, get(name).checked]),
    );
    try {
      localStorage.setItem(
        key,
        JSON.stringify({
          ...values,
          color: color.value,
          lighting: lighting.value,
          brightness: brightness.valueAsNumber,
          intensity: intensity.valueAsNumber,
        }),
      );
    } catch {
      // Settings still apply for this session.
    }
  };
  for (const input of [
    color,
    lighting,
    brightness,
    intensity,
    ...switches.map(get),
  ])
    input.addEventListener("input", save);
  systemMotion.addEventListener("change", apply);
  apply();
}
