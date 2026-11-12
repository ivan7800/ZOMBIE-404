import Phaser from "phaser";
import {
  WEAPONS,
  availableWeapons,
  chargeStock,
  combatSupplyReward,
  shotTargets,
} from "../core/arsenal.mjs";
import { buildActorAtlas } from "../art/actorAtlas";
import { buildWorldAtlas, PIXEL, WORLD_ATLAS } from "../art/pixelWorld";
import {
  stepVehicle,
  toggleVehicle,
  transferCargo,
  serviceVehicle,
} from "../core/vehicle.mjs";
import {
  syncEquipment,
  consumeEquipment,
  pickupEquipment,
} from "../core/equipment.mjs";
import { packResource, depositBackpack } from "../core/logistics.mjs";
import { beamEdge, lightStrength, outdoorLight } from "../core/atmosphere.mjs";
import { fieldEvents, resolveFieldEvent } from "../core/fieldEvents.mjs";
import { SceneLighting } from "../art/sceneLighting";
import {
  INTERIOR_W,
  INTERIOR_H,
  getInterior,
  interiorBlocked,
  canEnterInterior,
  enterInterior,
  canExitInterior,
  exitInterior,
  scavengeContainer,
} from "../core/interiors.mjs";
import {
  ITEMS,
  inventoryWeight,
  consumeItem,
  hasLineOfSight,
  nextStep,
} from "../core/survival.mjs";
import {
  BASE,
  SITES,
  FACILITIES,
  switchSurvivor,
  upgrade,
} from "../core/community.mjs";
import { visualProps } from "../core/visuals.mjs";
import {
  MAP_SIZE,
  TILE_H,
  TILE_W,
  PLAYER_SPEED,
  ZOMBIE_SPEED,
  iso,
  clamp,
  distance,
} from "../core/rules.mjs";
import { generateWorld, landmarks, locations } from "../core/world.mjs";
import { saveGame, loadGame } from "../core/save.mjs";
import {
  DIFFICULTIES,
  CHAMBER,
  activeSurvivor,
  newRun,
  prepareRun,
  reload,
  combatTarget,
  canBite,
  applyInjury,
  advanceCommunity,
  issueSupply,
  recoverTransmitter,
  refuelRadio,
  recruitGuide,
  resolveBroadcast,
  resolveContact,
  resolveResearch,
  resolveEvacuation,
  resolveLastDawn,
  resolveSiege,
} from "../core/expedition.mjs";

type Position = { x: number; y: number };
type FieldEvent = Position & {
  id: string;
  name: string;
  detail: string;
  quiet: string;
  loud: string;
};
type Weapon = keyof typeof WEAPONS;
type Impact = {
  at: Position;
  room: string;
  time: number;
  kind: "blood" | "blast";
};

type Zombie = Position & {
  id: number | string;
  hp: number;
  alive: boolean;
  attackCooldown: number;
  role: string;
  siegeDay?: number;
  resolved?: boolean;
};
type Container = Position & { id: string; kind: string; amount: number };
type Room = {
  name: string;
  door: Position;
  supplies: Container[];
  obstacles: [number, number][];
};
type Loot = Position & {
  kind: "ammo" | "med";
  taken: boolean;
  remaining: number;
};
type Difficulty = "story" | "survival" | "nightmare";
type Survivor = {
  id: string;
  name: string;
  skill: string;
  hp: number;
  alive: boolean;
  fatigue: number;
  bleed: number;
  infection: number;
  xp: number;
  loaded: number;
  inventory: { capacity: number; items: Record<string, number> };
};
type State = {
  version: number;
  mode: "campaign" | "free";
  difficulty: Difficulty;
  player: Position & { hp: number; ammo: number; med: number; stamina: number };
  zombies: Zombie[];
  loot: Loot[];
  stage: number;
  campaign: {
    act2: "locked" | "lead" | "decision" | "complete";
    act2Choice: "invite" | "observe" | null;
    act3: "locked" | "lead" | "decision" | "complete";
    act3Choice: "warn" | "conceal" | null;
    act4: "locked" | "lead" | "decision" | "complete";
    act4Choice: "station" | "masia" | null;
    stationEvacuated: boolean;
    act5: "locked" | "lead" | "decision" | "complete";
    act5Choice: "alarm" | "isolate" | null;
    ending:
      | "rescue"
      | "costly_signal"
      | "last_voice"
      | "closed_valley"
      | "buried_signal"
      | null;
  };
  arsenal: { selected: Weapon; spent: number };
  kills: number;
  fieldEvents: string[];
  time: number;
  community: {
    active: number;
    day: number;
    elapsed: number;
    morale: number;
    survivors: Survivor[];
    resources: Record<string, number>;
    facilities: Record<keyof typeof FACILITIES, number>;
    sites: string[];
    logs: string[];
    siege: number;
  };
  inside: (Position & { siteId: string }) | null;
  interiors: Record<
    string,
    { zombies: Zombie[]; taken: string[]; remaining: Record<string, number> }
  >;
  finale: "signal" | "silence" | null;
  gameOver: boolean;
  vehicle: Position & {
    angle: number;
    speed: number;
    fuel: number;
    condition: number;
    driving: boolean;
    trunk: { capacity: number; items: Record<string, number> };
  };
};
type Intent = {
  destination: Position;
  until: number;
  recalc: number;
  waypoint?: Position | null;
};
const chapters = [
  [
    "Acto I · Can Lluc",
    "Aina: «Si la radio vuelve a sonar, que nos pille despiertos.»",
  ],
  [
    "Acto II · La llamada",
    "Pau: «La central lleva semanas muerta. Alguien ha cogido el teléfono.»",
  ],
  [
    "Acto III · La muestra",
    "Laia: «Cada puerta tiene un número. En ninguna pone salida.»",
  ],
  [
    "Acto IV · El repetidor",
    "Aina: «Tenemos una línea y dos sitios a los que llamar. Hay que elegir.»",
  ],
  [
    "Acto V · El último amanecer",
    "Pau: «Ya se ve el cielo. No sé si eso es buena señal.»",
  ],
];
const objectives = [
  "Recupera el transmisor en la gasolinera.",
  "Entra en el taller del polígono y recoge un bidón. Llévalo al portón para alimentar la radio.",
  "Sigue la señal hasta el refugio forestal y decide qué transmitir.",
  "Vuelve al refugio para decidir qué transmitir.",
];
function currentObjective(s: State) {
  if (s.mode === "free")
    return "Recupera provisiones y prepara la masía para el siguiente asedio.";
  if (s.finale) {
    if (s.campaign.act5 === "lead")
      return "ACTO V · Llega al puesto de evacuación y transmite la decisión final.";
    if (s.campaign.act5 === "decision")
      return "ACTO V · Elige entre alertar al exterior o aislar el valle.";
    if (s.campaign.act5 === "complete")
      return "CAMPAÑA COMPLETADA · El último amanecer queda registrado en el diario.";
    if (s.campaign.act4 === "lead")
      return "ACTO IV · Sigue el cableado hasta el perímetro del repetidor.";
    if (s.campaign.act4 === "decision")
      return "ACTO IV · Decide a quién evacuar primero: al grupo de la estación o a Can Lluc.";
    if (s.campaign.act4 === "complete")
      return "ACTO IV COMPLETADO · La prioridad de evacuación ya está decidida.";
    if (s.campaign.act3 === "lead")
      return "ACTO III · Sigue las coordenadas del registro hasta el centro de investigación.";
    if (s.campaign.act3 === "decision")
      return "ACTO III · Decide qué hacer con las pruebas sobre las mutaciones.";
    if (s.campaign.act3 === "complete")
      return "ACTO III COMPLETADO · La comunidad ha tomado una posición sobre las pruebas.";
    if (s.campaign.act2 === "lead")
      return s.community.survivors.some((person) => person.id === "mar")
        ? "ACTO II · Sigue el código de Mar hasta la central telefónica de la Serra."
        : "ACTO II · Sigue el indicativo de la Serra hasta la central telefónica.";
    if (s.campaign.act2 === "decision")
      return "ACTO II · Vuelve al cuadro de llamadas y decide si ofrecer refugio al grupo.";
    if (s.campaign.act2 === "complete")
      return "ACTO II COMPLETADO · La decisión sobre el grupo queda registrada en el diario.";
    return "Recupera provisiones y prepara la masía para el siguiente asedio.";
  }
  return objectives[clamp(s.stage, 0, objectives.length - 1)];
}
function activeGoalStage(s: State) {
  if (s.mode !== "campaign") return -1;
  if (!s.finale) return Math.min(2, s.stage);
  if (s.campaign.act5 === "lead" || s.campaign.act5 === "decision") return 6;
  if (s.campaign.act4 === "lead" || s.campaign.act4 === "decision") return 5;
  if (s.campaign.act3 === "lead" || s.campaign.act3 === "decision") return 4;
  return s.campaign.act2 === "lead" || s.campaign.act2 === "decision" ? 3 : -1;
}
const originY = (-MAP_SIZE * TILE_H) / 2;
const roomOriginY = -165;
const farmhouse = landmarks.find(
  (site: Position & { kind: string }) => site.kind === "masia",
)!;
const roomDecisions = {
  central: { act: "act2", event: "act2-choice", ids: ["registro"] },
  laboratorio: {
    act: "act3",
    event: "act3-choice",
    ids: ["protocolo", "muestras"],
  },
  repetidor: {
    act: "act4",
    event: "act4-choice",
    ids: ["mapa_cables", "fusibles"],
  },
  evacuacion: {
    act: "act5",
    event: "act5-choice",
    ids: ["manifiesto", "baterias_radio"],
  },
} as const;
const roomFirstLines: Record<string, string> = {
  farmacia: "El cartel de guardia sigue encendido. Qué detalle.",
  mercado: "«Vuelva pronto», dice el cartel. Nadie ha vuelto a cambiarlo.",
  taller: "Queda gasolina. El mecánico también.",
  central: "Un teléfono suena detrás del mostrador.",
  laboratorio: "Alguien numeró las puertas por fuera. Y las cerró por dentro.",
  repetidor: "Los cables vibran. El viento no explica ese ritmo.",
  evacuacion: "Han dejado una lista de pasajeros. Hay nombres tachados a mano.",
};

export class GameScene extends Phaser.Scene {
  private state!: State;
  private lighting!: SceneLighting;
  private torch = true;
  private heading = Math.PI / 4;
  private chargeAttack = new WeakMap<
    Zombie,
    { windup: number; rush: number; recovery: number; target: Position }
  >();
  private shotTrail: { from: Position; to: Position } | null = null;
  private running = false;
  private get panelOpen() {
    return !!document.querySelector("dialog[open]");
  }
  private keys!: Record<string, Phaser.Input.Keyboard.Key>;
  private gfx!: Phaser.GameObjects.Graphics;
  private effects!: Phaser.GameObjects.Graphics;
  private worldAtlas!: Phaser.Textures.CanvasTexture;
  private outdoor: Phaser.GameObjects.Image[] = [];
  private occluders: Phaser.GameObjects.Image[] = [];
  private streetLights: Phaser.GameObjects.Image[] = [];
  private rooms = new Map<string, Phaser.GameObjects.Image[]>();
  private activeArt = new Map<string, Phaser.GameObjects.Image>();
  private visibleRoom = "";
  private lastChapter = -1;
  private get reducedMotion() {
    return this.registry?.get("reducedMotion") === true;
  }
  private sprites = new Map<string, Phaser.GameObjects.Image>();
  private actorTexture!: string;
  private back = false;
  private blocked!: Set<string>;
  private roads!: Set<string>;
  private roomBlocks = new Map<string, Set<string>>();
  private intents = new Map<Zombie, Intent>();
  private impacts: Impact[] = [];
  private blastCd = 0;
  private cries = new WeakMap<Zombie, number>();
  private heardAt: Position | null = null;
  private attackCd = 0;
  private aim: Position | null = null;
  private shotDirection = 0;
  private staggered = new WeakMap<Zombie, number>();
  private noise = 0;
  private biteCd = 0;
  private messageUntil = 0;
  private lastAutosave = 0;
  private lastHud = -1;
  private actions = new Set<string>();
  private moving = false;
  private visualClock = 0;
  private lastFootstep = 0;
  private attackPulse = 0;
  private hurtPulse = 0;
  private facing = 1;
  private worldProps = visualProps();
  private staticTiles = Array.from({ length: MAP_SIZE * MAP_SIZE }, (_, i) => {
    const x = i % MAP_SIZE,
      y = Math.floor(i / MAP_SIZE);
    return { x, y, screen: iso(x + 0.5, y + 0.5) };
  });
  constructor() {
    super("GameScene");
  }
  create() {
    const world = generateWorld();
    this.blocked = world.blocked;
    this.roads = world.roads;
    this.actorTexture = buildActorAtlas(this.textures);
    this.worldAtlas = buildWorldAtlas(this.textures);
    this.gfx = this.add.graphics();
    this.effects = this.add.graphics().setDepth(1000);
    this.cameras.main.roundPixels = true;
    this.lighting = new SceneLighting(
      document.querySelector<HTMLElement>("#game")!,
    );
    this.events.once(Phaser.Scenes.Events.SHUTDOWN, () =>
      this.lighting.destroy(),
    );
    const keyboard = this.input.keyboard!;
    this.keys = keyboard.addKeys(
      "W,A,S,D,UP,DOWN,LEFT,RIGHT,SPACE,E,F,P,ESC,Q,B,R,T,G,V,X,C,L,SHIFT",
      false,
    ) as Record<string, Phaser.Input.Keyboard.Key>;
    const onResize = () => {
      this.adjustZoom();
      this.draw();
    };
    this.scale.on("resize", onResize);
    this.events.once(Phaser.Scenes.Events.SHUTDOWN, () =>
      this.scale.off("resize", onResize),
    );
    this.input.on("pointerdown", (pointer: Phaser.Input.Pointer) => {
      if (
        !pointer.wasTouch &&
        pointer.leftButtonDown() &&
        pointer.downElement instanceof HTMLCanvasElement &&
        this.running &&
        !this.panelOpen
      ) {
        const origin = this.state.inside ?? this.state.player;
        const screen = iso(origin.x, origin.y);
        const world = this.cameras.main.getWorldPoint(pointer.x, pointer.y);
        const horizontal = (world.x - screen.x) / TILE_W;
        const vertical =
          (world.y -
            screen.y -
            (this.state.inside ? roomOriginY : originY) +
            24) /
          TILE_H;
        this.aim = { x: vertical + horizontal, y: vertical - horizontal };
        this.actions.add("shoot");
      }
    });
    this.adjustZoom();
    this.buildTerrain(world.walls);
    this.draw();
    this.game.events.emit("ready-to-play");
  }

  private adjustZoom() {
    this.cameras.main.setZoom(
      clamp(
        Math.min(this.scale.width / 1050, this.scale.height / 650),
        0.58,
        1.25,
      ),
    );
  }

  startRun(resume: boolean, mode: string, difficulty: string) {
    const loaded = resume ? loadGame() : null;
    if (resume && !loaded) return false;
    this.state = loaded ? prepareRun(loaded) : newRun(mode, difficulty);
    for (const image of this.sprites.values()) image.destroy();
    this.sprites.clear();
    for (const image of this.activeArt.values()) image.destroy();
    this.activeArt.clear();
    this.running = !this.state.gameOver;
    this.keysReset();
    this.intents.clear();
    this.lastChapter = -1;
    this.torch = true;
    this.heading = Math.PI / 4;
    this.chargeAttack = new WeakMap();
    this.shotTrail = null;
    this.impacts = [];
    this.blastCd = 0;
    this.cries = new WeakMap();
    this.staggered = new WeakMap();
    this.heardAt = null;
    this.attackCd =
      this.biteCd =
      this.noise =
      this.attackPulse =
      this.hurtPulse =
        0;
    this.visualClock = this.lastAutosave = this.lastFootstep = this.state.time;
    this.flash(
      loaded
        ? "Partida recuperada."
        : "Prepara la mochila en la masía. Abre el cuaderno para orientarte.",
      4200,
    );
    this.persist(false);
    this.updateHud();
    this.draw();
    return true;
  }

  keysReset() {
    this.actions.clear();
    this.aim = null;
    this.input.keyboard?.resetKeys();
  }

  pause() {
    if (!this.running) return;
    this.running = false;
    this.keysReset();
    const saved = this.persist(false);
    this.game.events.emit(
      "show-overlay",
      saved
        ? "Partida en pausa. El progreso está guardado."
        : "Partida en pausa. No se pudo guardar.",
      "pause",
    );
  }

  resume() {
    if (!this.state || this.state.gameOver) return;
    this.keysReset();
    this.running = true;
  }

  closePanel() {
    this.keysReset();
  }

  action(name: string) {
    if (this.running && !this.panelOpen) this.actions.add(name);
  }

  isAtBase() {
    return (
      !this.state.inside &&
      !this.state.vehicle.driving &&
      distance(this.state.player, BASE) < 2.5
    );
  }

  private obstacles() {
    const siteId = this.state.inside?.siteId;
    if (!siteId) return this.blocked;
    if (!this.roomBlocks.has(siteId))
      this.roomBlocks.set(siteId, interiorBlocked(siteId));
    return this.roomBlocks.get(siteId)!;
  }

  private flash(message: string, ms = 2600) {
    this.messageUntil = this.time.now + ms;
    const element = document.querySelector("#message")!;
    element.textContent = message;
    element.classList.add("visible");
  }

  private updateHud() {
    const s = this.state;
    if (!s) return;
    this.lastHud = s.time;
    const lamp = document.querySelector<HTMLButtonElement>(
      '[data-action="lamp"]',
    )!;
    lamp.setAttribute("aria-pressed", String(this.torch));
    lamp.disabled = s.vehicle.driving;
    document
      .querySelector<HTMLElement>("#hud")!
      .style.setProperty(
        "--darkness",
        String((1 - lightStrength(s.time)) * 0.36),
      );
    this.game.events.emit("ambience", !!s.inside, lightStrength(s.time) < 0.34);
    const p = s.player;
    const position = s.inside ?? p;
    let nearest = 8;
    for (const enemy of this.enemies()) {
      if (enemy.alive) nearest = Math.min(nearest, distance(position, enemy));
    }
    this.game.events.emit("tension", (8 - nearest) / 8);
    if (s.mode === "campaign") {
      const chapter =
        s.campaign.act5 !== "locked"
          ? 4
          : s.campaign.act4 !== "locked"
            ? 3
            : s.campaign.act3 !== "locked"
              ? 2
              : s.campaign.act2 !== "locked"
                ? 1
                : 0;
      if (chapter !== this.lastChapter) {
        this.lastChapter = chapter;
        this.game.events.emit("chapter", ...chapters[chapter]);
      }
    }
    const active = s.community.survivors[s.community.active];
    const seconds = Math.floor(s.time % 60)
      .toString()
      .padStart(2, "0");
    document.querySelector("#stats")!.innerHTML =
      `<b>${Math.ceil(p.hp)}%</b> SALUD <span class="status-meter"><i style="width:${Math.ceil(p.hp)}%"></i></span>` +
      `<b>${active.loaded}/${p.ammo}</b> CARTUCHOS · <b>${p.med}</b> VENDAS<br>` +
      `${active.bleed > 0 ? "HEMORRAGIA · " : ""}${active.infection ? "INFECCIÓN " + Math.ceil(active.infection) + "% · " : ""}DÍA ${s.community.day} · ${Math.floor(s.time / 60)}:${seconds}`;
    const arsenal = document.querySelector("#arsenal");
    if (arsenal)
      arsenal.textContent = `${WEAPONS[s.arsenal.selected].name} [C] · Cargas ${chargeStock(s)} [X]`;
    document.querySelector("#community")!.textContent = s.vehicle.driving
      ? `Combustible ${Math.ceil(s.vehicle.fuel)}% · Motor ${Math.ceil(s.vehicle.condition)}%`
      : `${active.name} · Mochila ${inventoryWeight(active.inventory)}/${active.inventory.capacity} · Energía ${Math.floor(p.stamina)}%`;
    document.querySelector("#place")!.textContent = s.inside
      ? getInterior(s.inside.siteId).name
      : this.isAtBase()
        ? "Masía de Can Lluc"
        : this.district();
    document.querySelector("#objective")!.textContent = s.inside
      ? "E para saquear. Regresa a la puerta para salir."
      : currentObjective(s);
    const event = this.nearFieldEvent();
    if (event)
      document
        .querySelector("#objective")!
        .append(document.createElement("br"), `${event.name} · Usar`);
    const goal = locations.find((loc) => loc.stage === activeGoalStage(s));
    if (goal && !s.inside) {
      const meters = Math.round(distance(p, goal) * 10);
      const label =
        meters < 20 && hasLineOfSight(p, goal, this.blocked)
          ? "E · Interactuar"
          : `${goal.name} · ${meters} m`;
      document
        .querySelector("#objective")!
        .append(document.createElement("br"), label);
    }
  }

  private district() {
    const { x, y } = this.state.player;
    if (x < 10 && y < 12) return "La Plaça · Comercios";
    if (x > 15 && y < 12) return "Polígono de les Comes";
    if (x < 10 && y > 13) return "Urbanización dels Pins";
    if (y > 17) return "Bosque de la Serra";
    return "Camí de la Masía";
  }

  persist(notify = true) {
    if (!this.state) return false;
    const saved = saveGame(this.state);
    if (notify)
      this.flash(
        saved ? "Partida guardada." : "No se pudo guardar la partida.",
      );
    if (saved) this.lastAutosave = this.state.time;
    return saved;
  }

  private move(obj: Position, dx: number, dy: number, blocked: Set<string>) {
    const width = this.state.inside ? INTERIOR_W : MAP_SIZE;
    const height = this.state.inside ? INTERIOR_H : MAP_SIZE;
    const nx = obj.x + dx;
    const ny = obj.y + dy;
    if (
      nx >= 0.5 &&
      nx < width - 0.5 &&
      !blocked.has(`${Math.floor(nx)},${Math.floor(obj.y)}`)
    )
      obj.x = nx;
    if (
      ny >= 0.5 &&
      ny < height - 0.5 &&
      !blocked.has(`${Math.floor(obj.x)},${Math.floor(ny)}`)
    )
      obj.y = ny;
  }

  private enemies(): Zombie[] {
    const s = this.state;
    return s.inside ? s.interiors[s.inside.siteId].zombies : s.zombies;
  }

  private impact(at: Position, kind: Impact["kind"]) {
    this.impacts.push({
      at: { ...at },
      room: this.state.inside?.siteId ?? "",
      time: this.state.time,
      kind,
    });
  }

  private damageEnemy(target: Zombie, damage: number, stun: number) {
    target.hp = Math.max(0, target.hp - damage);
    this.impact(target, "blood");
    if (target.hp > 0) {
      target.attackCooldown = Math.max(target.attackCooldown, stun);
      this.staggered.set(target, this.state.time + stun * 0.55);
      return false;
    }
    target.alive = false;
    this.intents.delete(target);
    this.state.kills++;
    const active = activeSurvivor(this.state);
    active.xp = Math.min(9999, active.xp + 6);
    this.grantKillRewards(target);
    return true;
  }

  private grantKillRewards(target: Zombie) {
    const supply = combatSupplyReward(this.state.kills);
    if (supply.ammo) pickupEquipment(this.state, "ammo", supply.ammo);
    if (supply.bandage) pickupEquipment(this.state, "medicine", supply.bandage);
    if (
      target.siegeDay !== undefined &&
      resolveSiege(this.state, target.siegeDay)
    ) {
      this.game.events.emit("sound", "loot");
      this.flash(
        "Can Lluc resiste. La horda deja suministros en la entrada.",
        5000,
      );
      this.persist(false);
    }
  }

  private cycleWeapon() {
    const s = this.state;
    const options: Weapon[] = availableWeapons(s);
    if (options.length < 2) {
      this.flash("Desbloquea armas en la campaña o neutralizando infectados.");
      return;
    }
    s.arsenal.selected =
      options[(options.indexOf(s.arsenal.selected) + 1) % options.length];
    const weapon = WEAPONS[s.arsenal.selected];
    this.flash(`${weapon.name} · ${weapon.cost} por disparo`);
    this.updateHud();
  }

  private useCharge() {
    const s = this.state;
    if (this.blastCd > 0) return;
    if (!chargeStock(s)) {
      this.flash(
        "Sin cargas. Avanza o neutraliza infectados para conseguir más.",
      );
      return;
    }
    const origin = s.inside ?? s.player;
    const enemies = this.enemies();
    const blocked = this.obstacles();
    const target: Zombie | undefined = combatTarget(
      origin,
      enemies,
      blocked,
      6.5,
    );
    if (!target) {
      this.flash("Necesitas un infectado visible al alcance.");
      return;
    }
    if (distance(origin, target) < 1.4) {
      this.flash("Demasiado cerca para usar una carga.");
      return;
    }
    s.arsenal.spent++;
    this.blastCd = 1.7;
    this.attackCd = Math.max(this.attackCd, 0.65);
    this.heardAt = { ...target };
    this.noise = 22;
    this.impact(target, "blast");
    let hits = 0;
    for (const enemy of enemies) {
      if (
        !enemy.alive ||
        distance(enemy, target) > 2.05 ||
        !hasLineOfSight(target, enemy, blocked)
      )
        continue;
      this.damageEnemy(enemy, 4, 1.25);
      hits++;
    }
    const nearBlast = distance(origin, target) < 2.4;
    if (nearBlast) {
      applyInjury(s, s.difficulty === "story" ? 8 : 14, false);
      this.hurtPulse = 0.35;
    }
    this.game.events.emit("sound", "blast");
    this.flash(
      `Carga detonada · ${hits} impactos. ${nearBlast ? "La onda te ha alcanzado." : "Los infectados han oído el estruendo."}`,
      2300,
    );
    this.updateHud();
    this.persist(false);
  }

  private attack(fire: boolean) {
    if (this.attackCd > 0) return;
    const s = this.state;
    const active = activeSurvivor(s);
    const weapon = WEAPONS[s.arsenal.selected];
    if (fire && active.loaded < weapon.cost) {
      this.flash("Faltan cartuchos en el cargador. T para recargar.");
      return;
    }
    if (!fire && s.player.stamina < 10) {
      this.flash("Recupera el aliento.");
      return;
    }
    if (fire) active.loaded -= weapon.cost;
    else s.player.stamina -= 10;
    this.attackCd = fire ? weapon.delay : 0.52;
    this.attackPulse = fire ? 0.22 : 0.13;
    const origin = s.inside ?? s.player;
    if (fire || this.noise < 2.3) {
      this.noise = fire ? weapon.noise : 2.3;
      this.heardAt = { ...origin };
    }
    const blocked = this.obstacles();
    const enemies = this.enemies();
    const aim = this.aim;
    const melee: Zombie | undefined = fire
      ? undefined
      : combatTarget(origin, enemies, blocked, 1.85);
    const hits: { enemy: Zombie; damage: number }[] = fire
      ? shotTargets(origin, enemies, blocked, s.arsenal.selected, aim)
      : melee
        ? [{ enemy: melee, damage: 1 + Number(active.xp >= 30) }]
        : [];
    const direction = hits[0]?.enemy;
    const east = direction
      ? direction.x - origin.x - (direction.y - origin.y)
      : aim
        ? aim.x - aim.y
        : 0;
    if (east) this.facing = Math.sign(east);
    if (fire && (direction || aim)) {
      const delta = direction
        ? { x: direction.x - origin.x, y: direction.y - origin.y }
        : aim!;
      this.heading = Math.atan2(delta.y, delta.x);
    }
    this.shotTrail =
      fire && direction ? { from: { ...origin }, to: { ...direction } } : null;
    this.shotDirection = fire ? this.facing : 0;
    this.game.events.emit("sound", fire ? weapon.sound : "melee");
    let kills = 0;
    for (const { enemy, damage } of hits) {
      if (this.damageEnemy(enemy, damage, fire ? weapon.stun : 0.55)) {
        kills++;
        continue;
      }
      const push =
        (fire ? weapon.push : 0.24) /
        Math.max(0.01, distance(origin, enemy)) /
        4;
      const dx = (enemy.x - origin.x) * push;
      const dy = (enemy.y - origin.y) * push;
      for (let step = 0; step < 4; step++) this.move(enemy, dx, dy, blocked);
    }
    this.flash(
      hits.length > 1
        ? `${hits.length} impactos · ${kills} bajas.`
        : kills
          ? "Amenaza neutralizada."
          : hits.length
            ? "Impacto."
            : fire
              ? "Disparo perdido."
              : "Sin objetivo al alcance.",
      850,
    );
    this.updateHud();
  }

  private nearFieldEvent(): FieldEvent | undefined {
    const s = this.state;
    if (s.inside || s.vehicle.driving) return undefined;
    return fieldEvents.find(
      (event: FieldEvent) =>
        !s.fieldEvents.includes(event.id) &&
        distance(s.player, event) < 1.65 &&
        hasLineOfSight(s.player, event, this.blocked),
    );
  }

  finishFieldEvent(id: string, loud: boolean) {
    if (this.nearFieldEvent()?.id !== id) return;
    const result = resolveFieldEvent(this.state, id, loud);
    if (!result) return;
    if (result.noise) {
      this.heardAt = { ...this.state.player };
      this.noise = result.noise;
      this.game.events.emit("sound", "danger");
    } else if (result.amount) this.game.events.emit("sound", "loot");
    if (result.amount) this.persist(false);
    this.flash(result.message, 3300);
    this.updateHud();
  }

  private interact() {
    const s = this.state;
    if (s.vehicle.driving) {
      this.flash("Baja del coche para interactuar.");
      return;
    }
    if (s.inside) {
      if (canExitInterior(s)) {
        exitInterior(s);
        this.intents.clear();
        this.noise = 0;
        this.heardAt = null;
        this.game.events.emit("sound", "door");
        this.flash("Has salido al exterior.");
        this.persist(false);
        this.updateHud();
        return;
      }
      const room: Room = getInterior(s.inside.siteId);
      const saved = s.interiors[s.inside.siteId];
      const pos = s.inside;
      const decision = roomDecisions[pos.siteId as keyof typeof roomDecisions];
      if (decision && s.campaign[decision.act] === "decision") {
        this.game.events.emit(decision.event);
        return;
      }
      const near = room.supplies.find((item) => {
        const target = { x: item.x + 0.5, y: item.y + 0.5 };
        return (
          !saved.taken.includes(item.id) &&
          distance(pos, target) < 1.6 &&
          hasLineOfSight(pos, target, this.obstacles())
        );
      });
      if (near) {
        const isEvidence =
          decision?.ids.some((id) => id === near.id) &&
          s.campaign[decision.act] === "lead";
        const result = scavengeContainer(
          s,
          near.id,
          isEvidence
            ? (_community: unknown, _kind: string, amount: number) => ({
                ok: true,
                amount,
                message: "Prueba anotada en el cuaderno.",
              })
            : packResource,
        );
        if (result.ok) {
          const active = s.community.survivors[s.community.active];
          active.xp = Math.min(9999, active.xp + 2);
          syncEquipment(s);
          this.game.events.emit("sound", "loot");
        }
        if (
          result.ok &&
          decision &&
          s.campaign[decision.act] === "lead" &&
          decision.ids.every((id) => saved.taken.includes(id))
        ) {
          s.campaign[decision.act] = "decision";
          s.community.logs.push(
            `${room.name}: se han reunido las pruebas. Queda una decisión pendiente.`,
          );
          this.persist(false);
          this.updateHud();
          this.game.events.emit(decision.event);
          return;
        }
        this.flash(result.message);
        if (result.ok) this.persist(false);
        this.updateHud();
      } else
        this.flash(
          "Acércate a un contenedor con suministros o vuelve a la puerta.",
        );
      return;
    }
    const p = s.player;
    if (s.mode === "campaign" && !s.finale) {
      const loc = locations[Math.min(s.stage, 2)];
      if (distance(p, loc) < 2 && hasLineOfSight(p, loc, this.blocked)) {
        if (recoverTransmitter(s)) {
          this.flash(
            "«Can Lluc, aquí la Serra. Necesitamos corriente. Busca un bidón en el taller.»",
            5000,
          );
          this.persist(false);
          return;
        }
        if (s.stage === 1 && refuelRadio(s)) {
          this.flash(
            "La radio vuelve a emitir. Alguien responde desde el refugio de la Serra.",
            4500,
          );
          this.persist(false);
          return;
        }
        if (s.stage >= 2) {
          this.keysReset();
          this.game.events.emit("radio-choice");
          return;
        }
      }
    }
    const loot = s.loot.find(
      (item) =>
        !item.taken &&
        distance(p, item) < 1.7 &&
        hasLineOfSight(p, item, this.blocked),
    );
    if (loot) {
      const amount = pickupEquipment(
        s,
        loot.kind === "ammo" ? "ammo" : "medicine",
        loot.remaining,
      );
      if (amount) {
        loot.remaining -= amount;
        loot.taken = loot.remaining === 0;
        this.game.events.emit("sound", "loot");
        this.persist(false);
        this.flash(
          `+${amount} ${loot.kind === "ammo" ? "cartuchos" : "vendas"}${loot.taken ? "" : " · queda botín"}`,
        );
        this.updateHud();
        return;
      }
    }
    for (const site of SITES) {
      if (site.id === "central" && s.mode === "campaign" && !s.finale) {
        if (distance(p, site) < 2)
          this.flash(
            "La central no tiene corriente. Sigue primero la señal de la Serra.",
          );
        continue;
      }
      if (
        site.id === "laboratorio" &&
        s.mode === "campaign" &&
        s.campaign.act3 === "locked"
      ) {
        if (distance(p, site) < 2)
          this.flash(
            "Las coordenadas del laboratorio aún no aparecen en el registro.",
          );
        continue;
      }
      if (
        site.id === "repetidor" &&
        s.mode === "campaign" &&
        s.campaign.act4 === "locked"
      ) {
        if (distance(p, site) < 2)
          this.flash(
            "El repetidor sigue sin corriente. Recupera antes las pruebas del laboratorio.",
          );
        continue;
      }
      if (
        site.id === "evacuacion" &&
        s.mode === "campaign" &&
        s.campaign.act5 === "locked"
      ) {
        if (distance(p, site) < 2)
          this.flash("El puesto de evacuación aún no está activo.");
        continue;
      }
      if (
        canEnterInterior(s, site.id, distance(p, site)) &&
        hasLineOfSight(p, site, this.blocked)
      ) {
        enterInterior(s, site.id);
        this.intents.clear();
        this.noise = 0;
        this.heardAt = null;
        this.game.events.emit("sound", "door");
        const firstVisit = !s.community.logs.includes(
          "Explorado: " + getInterior(site.id).name + ".",
        );
        if (firstVisit) {
          s.community.logs.push(
            "Explorado: " + getInterior(site.id).name + ".",
          );
        }
        this.flash(
          firstVisit
            ? roomFirstLines[site.id]
            : "Entras en " + getInterior(site.id).name + ".",
          3600,
        );
        this.persist(false);
        this.updateHud();
        return;
      }
    }
    const event = this.nearFieldEvent();
    if (event) {
      this.keysReset();
      this.game.events.emit("field-event", event);
      return;
    }
    if (loot) this.flash("La mochila está llena.");
    else if (this.isAtBase()) this.openPanel("base");
    else this.flash("No hay nada al alcance.", 1000);
  }

  finishAct(choice: "signal" | "silence") {
    const s = this.state;
    if (s.inside || s.vehicle.driving || distance(s.player, locations[2]) >= 2)
      return;
    const ending = resolveBroadcast(s, choice);
    if (!ending) return;
    this.closePanel();
    this.persist(false);
    this.running = false;
    this.game.events.emit(
      "show-overlay",
      ending + " · Fin del acto I.",
      "ending",
    );
  }

  finishActTwo(choice: "invite" | "observe") {
    const s = this.state;
    if (
      !s.inside ||
      s.inside.siteId !== "central" ||
      s.campaign.act2 !== "decision"
    )
      return;
    const result = resolveContact(s, choice);
    if (!result) return;
    this.closePanel();
    this.flash(result, 6000);
    this.persist(false);
    this.updateHud();
  }

  finishActThree(choice: "warn" | "conceal") {
    const s = this.state;
    if (
      !s.inside ||
      s.inside.siteId !== "laboratorio" ||
      s.campaign.act3 !== "decision"
    )
      return;
    const result = resolveResearch(s, choice);
    if (!result) return;
    this.closePanel();
    this.flash(result, 6000);
    this.persist(false);
    this.updateHud();
  }

  finishActFour(choice: "station" | "masia") {
    const s = this.state;
    if (
      !s.inside ||
      s.inside.siteId !== "repetidor" ||
      s.campaign.act4 !== "decision"
    )
      return;
    const result = resolveEvacuation(s, choice);
    if (!result) return;
    this.closePanel();
    this.flash(result, 6500);
    this.persist(false);
    this.updateHud();
  }

  finishActFive(choice: "alarm" | "isolate") {
    const s = this.state;
    if (
      !s.inside ||
      s.inside.siteId !== "evacuacion" ||
      s.campaign.act5 !== "decision"
    )
      return;
    const ending = resolveLastDawn(s, choice);
    if (!ending) return;
    this.closePanel();
    this.persist(false);
    this.running = false;
    this.game.events.emit("show-overlay", ending.result, "complete");
  }

  private deposit() {
    if (!this.isAtBase()) {
      this.flash("Regresa a la masía para depositar la mochila.");
      return "";
    }
    const result = depositBackpack(this.state.community);
    if (result.ok) {
      syncEquipment(this.state);
      this.game.events.emit("sound", "loot");
      this.persist(false);
    }
    this.flash(result.message);
    this.updateHud();
    return result.message;
  }

  private heal() {
    const s = this.state;
    const active = s.community.survivors[s.community.active];
    if (
      (active.hp < 100 || active.bleed > 0 || active.infection > 0) &&
      consumeEquipment(s, "bandage")
    ) {
      this.game.events.emit("sound", "heal");
      const previous = active.hp;
      active.hp = clamp(
        active.hp + (active.skill === "Sanitaria" ? 45 : 32),
        0,
        100,
      );
      active.bleed = 0;
      active.infection = Math.max(0, active.infection - 16);
      s.player.hp = active.hp;
      this.flash(
        `Herida tratada · +${Math.round(active.hp - previous)} salud.`,
      );
      this.updateHud();
    } else this.flash("Necesitas una venda y una herida que tratar.", 1000);
  }

  private switchActive(id?: string) {
    if (!this.isAtBase()) {
      this.flash("Cambia de superviviente en la masía.");
      return;
    }
    const c = this.state.community;
    if (id) {
      const index = c.survivors.findIndex((s) => s.id === id && s.alive);
      if (index < 0) return;
      c.active = index;
    } else switchSurvivor(c);
    this.state.player.hp = c.survivors[c.active].hp;
    this.state.player.stamina = 100 - c.survivors[c.active].fatigue * 0.45;
    syncEquipment(this.state);
    this.game.events.emit("sound", "switch");
    this.flash("Controlas a " + c.survivors[c.active].name + ".");
    this.persist(false);
    this.updateHud();
  }

  private openPanel(tab: string) {
    this.keysReset();
    this.game.events.emit("open-notebook", tab);
  }

  notebook(tab: string) {
    const s = this.state;
    const c = s.community;
    const current = c.survivors[c.active];
    const atBase = this.isAtBase();
    const resources: Record<string, string> = {
      food: "Comida",
      medicine: "Medicina",
      materials: "Materiales",
      fuel: "Combustible",
    };
    if (tab === "base") {
      return {
        summary: atBase
          ? "Prepara la expedición o mejora el refugio."
          : "Regresa a la masía para usar estas instalaciones.",
        rows: (Object.keys(FACILITIES) as (keyof typeof FACILITIES)[]).map(
          (id) => {
            const level = c.facilities[id];
            return {
              title: FACILITIES[id].name,
              detail: `Nivel ${level}/3 · ${FACILITIES[id].effect}`,
              action: "upgrade:" + id,
              button:
                level === 3
                  ? "Nivel máximo"
                  : `Mejorar · ${FACILITIES[id].cost + level * 2} materiales`,
              disabled:
                !atBase ||
                level >= 3 ||
                c.resources.materials < FACILITIES[id].cost + level * 2,
            };
          },
        ),
      };
    }
    if (tab === "community")
      return {
        summary: `Moral ${c.morale}/100 · Día ${c.day} · Asedios sufridos ${c.siege}`,
        rows: [
          ...c.survivors.map((person) => ({
            title: person.name,
            detail: person.alive
              ? `${person.skill} · Salud ${Math.ceil(person.hp)}% · Fatiga ${Math.ceil(person.fatigue)}% · XP ${person.xp}`
              : "Falleció durante la expedición",
            action: "switch:" + person.id,
            button: person === current ? "En activo" : "Seleccionar",
            disabled: !atBase || !person.alive || person === current,
          })),
          ...((s.finale === "signal" || c.day >= 3) &&
          !c.survivors.some((person) => person.id === "mar")
            ? [
                {
                  title: "Mar, guardabosques",
                  detail:
                    "Pide alimento y medicina. Tiene experiencia cuerpo a cuerpo.",
                  action: "recruit",
                  button: "Acoger · 2 comida, 1 medicina",
                  disabled:
                    !atBase || c.resources.food < 2 || c.resources.medicine < 1,
                },
              ]
            : []),
        ],
      };
    if (tab === "vehicle") {
      const v = s.vehicle;
      const near = !s.inside && !v.driving && distance(s.player, v) < 1.65;
      return {
        summary: `Coche · Combustible ${Math.floor(v.fuel)}% · Motor ${Math.floor(v.condition)}% · Maletero ${inventoryWeight(v.trunk)}/${v.trunk.capacity}${near ? "" : " · Acércate a pie para usarlo"}`,
        rows: [
          {
            title: "Combustible",
            action: "car:fuel",
            button: "Usar bidón",
            disabled:
              !near || !current.inventory.items.fuelcan || v.fuel >= 100,
          },
          {
            title: "Motor",
            action: "car:repair",
            button: "Usar chatarra",
            disabled:
              !near || !current.inventory.items.scrap || v.condition >= 100,
          },
          ...Object.keys(ITEMS)
            .filter((id) => current.inventory.items[id] || v.trunk.items[id])
            .flatMap((id) => [
              {
                title: ITEMS[id as keyof typeof ITEMS].name + " en la mochila",
                detail: `×${current.inventory.items[id] ?? 0}`,
                action: "stow:" + id,
                button: "Guardar 1",
                disabled: !near || !current.inventory.items[id],
              },
              {
                title: ITEMS[id as keyof typeof ITEMS].name + " en el maletero",
                detail: `×${v.trunk.items[id] ?? 0}`,
                action: "take:" + id,
                button: "Sacar 1",
                disabled: !near || !v.trunk.items[id],
              },
            ]),
        ],
      };
    }
    if (tab === "inventory")
      return {
        summary: `${current.name} · Mochila ${inventoryWeight(current.inventory)}/${current.inventory.capacity} · Cargador ${current.loaded}/${CHAMBER}`,
        rows: [
          ...Object.entries(current.inventory.items)
            .filter(([, qty]) => qty > 0)
            .map(([id, qty]) => ({
              title: ITEMS[id as keyof typeof ITEMS].name,
              detail: `×${qty}`,
              ...(id === "ration" ? { action: "eat", button: "Comer" } : {}),
            })),
          ...Object.entries(c.resources).map(([id, qty]) => ({
            title: resources[id] + " en la masía",
            detail: `×${qty}`,
            action: "issue:" + id,
            button: "Coger 1",
            disabled: !atBase || qty === 0,
          })),
          {
            title: "Provisiones de la expedición",
            action: "deposit",
            button: "Depositar",
            disabled: !atBase,
          },
        ],
      };
    if (tab === "map")
      return {
        summary: `Posición exterior ${s.player.x.toFixed(1)}, ${s.player.y.toFixed(1)} · Verde: puertas. Ámbar: objetivo. Cobre: botín. Azul: coche. Celeste: hallazgos.`,
        map: {
          player: s.player,
          sites: SITES,
          loot: s.loot.filter((item) => !item.taken),
          fieldEvents: (fieldEvents as FieldEvent[]).filter(
            (item) => !s.fieldEvents.includes(item.id),
          ),
          vehicle: s.vehicle,
          base: BASE,
          goals: locations,
          stage: activeGoalStage(s),
        },
        rows: [
          {
            title: "Masía de Can Lluc",
            detail: "Centro · Refugio y suministros",
          },
          ...SITES.map((site: { name: string; x: number; y: number }) => ({
            title: site.name,
            detail: `Coordenadas ${site.x}, ${site.y}`,
          })),
        ],
      };
    return {
      summary: currentObjective(s),
      rows: c.logs
        .slice(-9)
        .reverse()
        .map((log) => ({ title: log })),
    };
  }

  notebookAction(action: string) {
    const [name, id] = action.split(":");
    let message = "";
    if (name === "eat") {
      const active: Survivor = activeSurvivor(this.state);
      if (consumeItem(active.inventory, "ration")) {
        active.fatigue = Math.max(0, active.fatigue - 12);
        this.state.player.stamina = Math.min(
          100,
          this.state.player.stamina + 30,
        );
        message = "Has comido una ración.";
      }
    } else if (["car", "stow", "take"].includes(name)) {
      const s = this.state;
      if (
        s.inside ||
        s.vehicle.driving ||
        distance(s.player, s.vehicle) >= 1.65
      )
        return "Acércate al coche a pie.";
      const active: Survivor = activeSurvivor(s);
      const changed =
        name === "car"
          ? serviceVehicle(
              s.vehicle,
              active,
              id,
              s.community.facilities.workshop,
            )
          : transferCargo(s.vehicle, active.inventory, id, name === "stow");
      if (changed) syncEquipment(s);
      message = changed
        ? "Coche actualizado."
        : "No hay espacio o suministros suficientes.";
    } else if (!this.isAtBase()) return "Regresa a la masía.";
    else if (name === "switch") {
      this.switchActive(id);
      return "Superviviente seleccionado.";
    } else if (name === "deposit") return this.deposit();
    else if (name === "upgrade") {
      const result = upgrade(this.state.community, id);
      message = result.message;
      if (result.ok)
        this.state.community.logs.push(
          "Día " + this.state.community.day + ": " + message + ".",
        );
      this.draw();
    } else if (name === "recruit")
      message = recruitGuide(this.state)
        ? "Mar se ha unido a la comunidad."
        : "Mar todavía no puede unirse.";
    else if (name === "issue")
      message = issueSupply(this.state, id)
        ? "Suministro añadido a la mochila."
        : "No hay espacio o existencias.";
    this.persist(false);
    this.updateHud();
    return message;
  }

  private updateEnemies(dt: number, blocked: Set<string>) {
    const s = this.state;
    const pos = s.inside ?? s.player;
    const diff = DIFFICULTIES[s.difficulty];
    const threats = this.enemies();
    const darkness = lightStrength(s.time) < 0.34;
    const visibility = s.inside ? 1 : 0.66 + lightStrength(s.time) * 0.4;
    const lit = this.torch && !s.vehicle.driving && (darkness || !!s.inside);
    for (const z of threats) {
      if (
        !z.alive ||
        z.role !== "screecher" ||
        (this.cries.get(z) ?? 0) > s.time
      )
        continue;
      if (distance(z, pos) > 5.5 || !hasLineOfSight(z, pos, blocked)) continue;
      this.cries.set(z, s.time + 12);
      for (const ally of threats) {
        if (!ally.alive || distance(ally, z) >= 16 * diff.hearing) continue;
        this.intents.set(ally, {
          destination: { x: z.x, y: z.y },
          until: s.time + 5,
          recalc: 0,
        });
      }
      this.game.events.emit("sound", "scream");
      this.flash("Un chillador ha dado la alarma.", 1800);
      break;
    }
    for (const z of this.enemies()) {
      if (!z.alive) continue;
      z.attackCooldown = Math.max(0, z.attackCooldown - dt);
      if ((this.staggered.get(z) ?? 0) > s.time) continue;
      const d = distance(z, pos);
      const sight =
        d <
          diff.sight * visibility +
            (z.role === "lurker" ? 1 : 0) +
            (lit ? 0.85 : 0) && hasLineOfSight(z, pos, blocked);
      const heard =
        this.heardAt && distance(z, this.heardAt) < this.noise * diff.hearing;
      const stimulus = sight ? pos : heard ? this.heardAt : null;
      let intent = this.intents.get(z);
      if (
        stimulus &&
        (!intent ||
          distance(intent.destination, stimulus) > 0.6 ||
          intent.until - s.time < 0.3)
      ) {
        intent = {
          destination: { ...stimulus },
          until: s.time + 2.8,
          recalc: 0,
        };
        this.intents.set(z, intent);
      }
      if (!s.vehicle.driving && z.role === "brute") {
        let charge = this.chargeAttack.get(z);
        if (
          sight &&
          d > 1.35 &&
          d < 3.35 &&
          z.attackCooldown === 0 &&
          (!charge || charge.recovery <= s.time)
        ) {
          charge = {
            windup: s.time + 0.66,
            rush: s.time + 1.13,
            recovery: s.time + 3.7,
            target: { x: pos.x, y: pos.y },
          };
          this.chargeAttack.set(z, charge);
          this.game.events.emit("sound", "danger");
        }
        if (charge && s.time < charge.windup) continue;
        if (charge && s.time < charge.rush && d > 0.9) {
          const gap = distance(z, charge.target);
          if (gap > 0.08) {
            const fraction = Math.min(gap, dt * 4.9) / gap;
            this.move(
              z,
              (charge.target.x - z.x) * fraction,
              (charge.target.y - z.y) * fraction,
              blocked,
            );
          }
          if (!canBite(z, pos, blocked)) continue;
        }
      }
      if (
        this.biteCd === 0 &&
        z.attackCooldown === 0 &&
        canBite(z, pos, blocked)
      ) {
        if (s.vehicle.driving && s.vehicle.condition > 0) {
          s.vehicle.condition = Math.max(0, s.vehicle.condition - 5);
          z.attackCooldown = 1.6;
          this.biteCd = 0.75;
          this.flash("Los infectados golpean la carrocería.");
          continue;
        }
        const result = applyInjury(
          s,
          diff.damage + (z.role === "brute" ? 5 : 0),
        );
        z.attackCooldown = z.role === "runner" ? 0.9 : 1.45;
        this.biteCd = 0.75;
        this.hurtPulse = 0.4;
        this.game.events.emit("sound", "bite");
        this.flash(
          result.lost
            ? `${result.lost} ha muerto.`
            : result.incapacitated
              ? "Has logrado volver a Can Lluc."
              : "Mordedura · hemorragia e infección.",
        );
        if (result.lost || result.incapacitated) {
          s.vehicle.driving = false;
          this.intents.clear();
          this.persist(false);
          return;
        }
      }
      if (!intent || intent.until < s.time || d < 0.85) continue;
      if (!sight && intent.recalc <= s.time) {
        intent.waypoint = nextStep(
          z,
          intent.destination,
          blocked,
          s.inside ? INTERIOR_W : MAP_SIZE,
        );
        intent.recalc = s.time + 0.28;
      }
      const target = sight ? pos : intent.waypoint;
      if (!target) continue;
      const gap = distance(z, target);
      if (gap < 0.04) {
        intent.recalc = 0;
        continue;
      }
      const speed =
        ZOMBIE_SPEED *
        diff.speed *
        (z.role === "runner"
          ? 1.55
          : z.role === "brute"
            ? 0.78
            : z.role === "lurker"
              ? d < 2.8
                ? 1.9
                : 0.64
              : 1);
      const fraction = Math.min(gap, speed * dt) / gap;
      this.move(
        z,
        (target.x - z.x) * fraction,
        (target.y - z.y) * fraction,
        blocked,
      );
    }
  }

  update(_time: number, delta: number) {
    if (!this.running || this.panelOpen) return;
    const s = this.state;
    const p = s.player;
    const c = s.community;
    const dt = Math.min(delta / 1000, 0.05);
    const just = (key: string, action: string) =>
      Phaser.Input.Keyboard.JustDown(this.keys[key]) ||
      this.actions.has(action);
    if (just("ESC", "pause")) {
      this.pause();
      return;
    }
    if (this.actions.has("notebook")) {
      this.openPanel("inventory");
      return;
    }
    if (just("B", "base")) {
      this.openPanel("base");
      return;
    }
    s.time += dt;
    this.visualClock += dt;
    c.elapsed += dt;
    if (c.elapsed >= 180) {
      const summary = advanceCommunity(s);
      const ids = new Set(
        [
          ...s.zombies,
          ...Object.values(s.interiors).flatMap((room) => room.zombies),
        ].map((enemy) => String(enemy.id)),
      );
      for (const [key, image] of this.sprites) {
        if (key.startsWith("z:") && !ids.has(key.slice(2))) {
          image.destroy();
          this.sprites.delete(key);
        }
      }
      for (const [key, image] of this.activeArt) {
        if (key.startsWith("corpse:") && !ids.has(key.slice(7))) {
          image.destroy();
          this.activeArt.delete(key);
        }
      }
      this.flash(
        summary.siege === undefined
          ? `Amanece el día ${c.day}.`
          : "Asedio nocturno · consulta el diario.",
        3500,
      );
      if (summary.siege !== undefined) this.game.events.emit("sound", "danger");
      if (summary.siegeEncounter)
        this.flash(
          "¡ASALTO A CAN LLUC! Acaba con la horda para salvar las provisiones.",
          6500,
        );
      if (c.day % 3 === 2 && c.facilities.lookout > 0)
        this.flash("El vigía ha visto una horda. Refuerza la masía.", 4000);
      this.persist(false);
    }
    this.attackPulse = Math.max(0, this.attackPulse - dt);
    this.hurtPulse = Math.max(0, this.hurtPulse - dt);
    this.attackCd = Math.max(0, this.attackCd - dt);
    this.blastCd = Math.max(0, this.blastCd - dt);
    this.impacts = this.impacts.filter(
      (effect) => s.time - effect.time < (effect.kind === "blast" ? 0.65 : 2.2),
    );
    this.biteCd = Math.max(0, this.biteCd - dt);
    this.noise = Math.max(0, this.noise - dt * 3);
    const survivor = c.survivors[c.active];
    if (survivor.bleed > 0) {
      survivor.bleed = Math.max(0, survivor.bleed - dt);
      const result = applyInjury(s, dt * 0.45, false);
      if (result.lost || result.incapacitated) {
        s.vehicle.driving = false;
        this.persist(false);
      }
      if (s.gameOver) {
        this.endRun();
        return;
      }
    }
    const touch = this.registry.get("touch") as Set<string> | undefined;
    const down = (a: string, b: string) =>
      this.keys[a].isDown ||
      this.keys[b].isDown ||
      !!touch?.has(b.toLowerCase());
    const east = Number(down("D", "RIGHT")) - Number(down("A", "LEFT"));
    const south = Number(down("S", "DOWN")) - Number(down("W", "UP"));
    const len = Math.hypot(east, south);
    const sprint =
      !s.vehicle.driving &&
      len > 0 &&
      (this.keys.SHIFT.isDown || touch?.has("sprint")) &&
      p.stamina > 8;
    const energyCap = 100 - survivor.fatigue * 0.45;
    p.stamina = clamp(p.stamina + dt * (sprint ? -19 : 12), 0, energyCap);
    this.moving = false;
    if (just("V", "vehicle")) {
      this.flash(toggleVehicle(s), 3800);
      this.updateHud();
    }
    if (s.vehicle.driving) {
      const v = s.vehicle;
      if (stepVehicle(v, -south, east, dt, this.blocked)) {
        this.flash("Colisión · carrocería dañada.");
        this.game.events.emit("sound", "melee");
      }
      p.x = v.x;
      p.y = v.y;
      if (Math.abs(v.speed) > 1 && this.noise <= 7) {
        this.noise = 7;
        this.heardAt = { x: v.x, y: v.y };
      }
      if (Math.abs(v.speed) > 3) {
        for (const z of s.zombies) {
          if (!z.alive || distance(v, z) > 0.52) continue;
          z.alive = false;
          z.hp = 0;
          s.kills++;
          this.grantKillRewards(z);
          v.condition = Math.max(
            0,
            v.condition - (z.role === "brute" ? 13 : 5),
          );
          v.speed *= 0.55;
          this.game.events.emit("sound", "melee");
          break;
        }
      }
      if (
        this.visualClock - this.lastFootstep > 0.28 &&
        Math.abs(v.speed) > 1
      ) {
        this.game.events.emit("sound", "engine");
        this.lastFootstep = this.visualClock;
      }
    } else if (len) {
      if (east) this.facing = Math.sign(east);
      if (south) this.back = south < 0;
      this.heading = Math.atan2(south - east, south + east);
      const pos = s.inside ?? p;
      const previous = { ...pos };
      const speed =
        PLAYER_SPEED *
        (sprint ? 1.5 : 1) *
        (1 - survivor.fatigue * 0.002 - survivor.infection * 0.001);
      this.move(
        pos,
        (((east + south) * Math.SQRT1_2) / len) * speed * dt,
        (((south - east) * Math.SQRT1_2) / len) * speed * dt,
        this.obstacles(),
      );
      this.moving = distance(pos, previous) > 0.001;
      survivor.fatigue = clamp(
        survivor.fatigue + dt * (sprint ? 0.26 : 0.065),
        0,
        100,
      );
      if (sprint && this.noise <= 4.7) {
        this.noise = 4.7;
        this.heardAt = { ...pos };
      }
      if (this.moving && s.time - this.lastFootstep > (sprint ? 0.24 : 0.39)) {
        this.game.events.emit("sound", s.inside ? "step-indoor" : "step");
        this.lastFootstep = s.time;
      }
    }
    if (just("L", "lamp") && !s.vehicle.driving) {
      this.torch = !this.torch;
      this.flash(
        this.torch ? "Linterna encendida." : "Linterna apagada.",
        1250,
      );
      this.updateHud();
    }
    if (just("C", "weapon")) this.cycleWeapon();
    if (!s.vehicle.driving && just("X", "charge")) this.useCharge();
    if (!s.vehicle.driving && just("SPACE", "attack")) this.attack(false);
    if (!s.vehicle.driving && just("G", "shoot")) this.attack(true);
    this.aim = null;
    if (s.gameOver) {
      this.endRun();
      return;
    }
    if (just("T", "reload")) {
      const changed = reload(s);
      if (changed) this.game.events.emit("sound", "reload");
      this.flash(
        changed ? "Arma recargada." : "Cargador lleno o sin cartuchos.",
      );
      this.updateHud();
    }
    if (just("E", "interact")) this.interact();
    if (this.panelOpen) return;
    if (just("F", "heal")) this.heal();
    if (just("Q", "switch")) this.switchActive();
    if (just("R", "deposit")) this.deposit();
    if (just("P", "save")) this.persist();
    this.actions.clear();
    this.updateEnemies(dt, this.obstacles());
    if (s.gameOver) {
      this.endRun();
      return;
    }
    if (this.time.now > this.messageUntil)
      document.querySelector("#message")!.classList.remove("visible");
    if (s.time - this.lastAutosave > 20) {
      if (!this.persist(false)) this.lastAutosave = s.time;
    }
    if (s.time - this.lastHud > 0.18) this.updateHud();
    this.draw();
  }

  private endRun() {
    this.running = false;
    this.persist(false);
    this.keysReset();
    this.updateHud();
    this.game.events.emit(
      "show-overlay",
      "La masía se ha quedado sin supervivientes.",
      "dead",
    );
  }

  private artDepth(y: number) {
    return 500 + y / 4;
  }

  private groundLayer(
    key: string,
    cells: { x: number; y: number; frame: string }[],
  ) {
    const padding = 16 * PIXEL;
    const left =
      Math.floor((Math.min(...cells.map((c) => c.x)) - padding) / PIXEL) *
      PIXEL;
    const top =
      Math.floor((Math.min(...cells.map((c) => c.y)) - padding) / PIXEL) *
      PIXEL;
    const width = Math.ceil(
      (Math.max(...cells.map((c) => c.x)) + padding - left) / PIXEL,
    );
    const height = Math.ceil(
      (Math.max(...cells.map((c) => c.y)) + padding - top) / PIXEL,
    );
    const texture = this.textures.exists(key)
      ? (this.textures.get(key) as Phaser.Textures.CanvasTexture)
      : this.textures.createCanvas(key, width, height)!;
    const source = this.worldAtlas.getSourceImage() as HTMLCanvasElement;
    for (const cell of cells) {
      const frame = this.worldAtlas.get(cell.frame);
      texture.context.drawImage(
        source,
        frame.cutX + 16,
        frame.cutY + 24,
        32,
        16,
        Math.round((cell.x - left) / PIXEL) - 16,
        Math.round((cell.y - top) / PIXEL) - 8,
        32,
        16,
      );
    }
    texture.refresh();
    texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
    return this.add
      .image(left, top, key)
      .setOrigin(0)
      .setScale(PIXEL)
      .setDepth(-10);
  }

  private newArt(frame: string, x: number, y: number) {
    return this.add
      .image(x, y, WORLD_ATLAS, frame)
      .setOrigin(0.5, 0.75)
      .setScale(PIXEL)
      .setDepth(this.artDepth(y));
  }

  private art(id: string, frame: string, x: number, y: number) {
    let image = this.activeArt.get(id);
    if (!image) {
      image = this.newArt(frame, x, y);
      this.activeArt.set(id, image);
    }
    return image
      .setFrame(frame)
      .setPosition(Math.round(x), Math.round(y))
      .setDepth(this.artDepth(y))
      .setVisible(true);
  }

  private buildTerrain(walls: Set<string>) {
    const cells = this.staticTiles.map(({ x, y, screen }) => {
      const surface = this.roads.has(`${x},${y}`)
        ? "road"
        : y > 17
          ? "woods"
          : x > 15 && y < 12
            ? "verge"
            : "grass";
      const dash =
        surface !== "road"
          ? 0
          : y === 12 && x % 3 === 0 && Math.abs(x - 12) > 2
            ? 1
            : x === 12 && y % 3 === 0 && Math.abs(y - 12) > 2 && y !== 6
              ? -1
              : 0;
      return {
        x: screen.x,
        y: screen.y + originY,
        frame: dash
          ? `road-mark:${dash}`
          : `floor:${surface}:${(x * 17 + y * 23 + x * y) % 6}`,
      };
    });
    const fringe = [];
    for (let y = -3; y < MAP_SIZE + 3; y++) {
      for (let x = -3; x < MAP_SIZE + 3; x++) {
        if (x >= 0 && y >= 0 && x < MAP_SIZE && y < MAP_SIZE) continue;
        const p = iso(x + 0.5, y + 0.5);
        fringe.push({
          x: p.x,
          y: p.y + originY,
          frame: `floor:fringe:${Math.abs(x * 13 + y * 23) % 6}`,
        });
      }
    }
    this.outdoor = [
      this.groundLayer("pixel-ground-valles", [...fringe, ...cells]),
    ];
    for (const [index, p] of fringe.entries()) {
      if (index % 11 !== 0) continue;
      this.outdoor.push(
        this.newArt(`tree:${index % 3}`, p.x, p.y)
          .setTint(0x799785)
          .setScale(PIXEL * 0.78),
      );
    }
    const occupied: Position[] = [];
    const reserved = [
      ...landmarks,
      ...SITES,
      ...locations,
      ...fieldEvents,
      BASE,
    ];
    const separated = (p: Position, space: number) =>
      !reserved.some((site) => distance(p, site) < 1.85) &&
      !occupied.some((other) => distance(p, other) < space);
    for (const { x, y, screen } of this.staticTiles) {
      const atY = screen.y + originY;
      if (walls.has(`${x},${y}`)) {
        this.outdoor.push(
          this.newArt(`stone-wall:${(x + y) % 3}`, screen.x, atY),
        );
        continue;
      }
      const center = { x: x + 0.5, y: y + 0.5 };
      if (
        this.roads.has(`${x},${y}`) ||
        (x * 13 + y * 19) % (y > 17 ? 8 : 14) !== 0 ||
        !separated(center, 1.9)
      )
        continue;
      occupied.push(center);
      const tree = this.newArt(`tree:${(x * 3 + y * 5) % 3}`, screen.x, atY);
      this.outdoor.push(tree.setScale(PIXEL * (0.78 + ((x * y) % 4) * 0.07)));
    }
    for (const prop of this.worldProps) {
      const { x, y } = prop;
      const point = { x: x + 0.5, y: y + 0.5 };
      // Roadside objects sit on the shoulder and never occupy the crossroad.
      if (this.roads.has(`${x},${y}`)) {
        if (Math.abs(x - 12) < 2 && Math.abs(y - 12) < 2) continue;
        if (Math.abs(y - 12) <= 1) point.y = y < 12 ? 10.65 : 14.35;
        else if (Math.abs(x - 12) <= 1) point.x = x < 12 ? 10.65 : 14.35;
        else point.y = 7.25;
      }
      if (
        !separated(point, 1.6) ||
        this.blocked.has(`${Math.floor(point.x)},${Math.floor(point.y)}`)
      )
        continue;
      occupied.push(point);
      const a = iso(point.x, point.y);
      const frame = prop.kind === "car" ? `wreck:${prop.variant}` : prop.kind;
      this.outdoor.push(
        this.newArt(frame, a.x, a.y + originY).setScale(
          PIXEL * (prop.kind === "rubble" ? 0.68 : 0.86),
        ),
      );
    }
    for (const landmark of landmarks) {
      const a = iso(landmark.x, landmark.y);
      this.outdoor.push(
        this.newArt(`building:${landmark.kind}`, a.x, a.y + originY)
          .setOrigin(0.5, 41 / 64)
          .setDepth(this.artDepth(a.y + originY + 11 * PIXEL)),
      );
    }
    this.streetLights = this.outdoor.filter(
      (image) => image.frame.name === "lamp",
    );
    this.occluders = this.outdoor.filter((image) =>
      /^(building|tree):/.test(image.frame.name),
    );
  }

  private roomArt(site: string, room: Room, offset: number) {
    const existing = this.rooms.get(site);
    if (existing) return existing;
    const cells = [];
    for (let y = 0; y < INTERIOR_H; y++)
      for (let x = 0; x < INTERIOR_W; x++) {
        const point = iso(x + 0.5, y + 0.5);
        cells.push({
          x: point.x,
          y: point.y + offset,
          frame: `floor:${site}:${(x * 7 + y * 11 + x * y) % 6}`,
        });
      }
    const items = [this.groundLayer(`pixel-room-${site}`, cells)];
    const wall = (x: number, y: number, axis: number, high: boolean) => {
      const p = iso(x, y);
      const art = this.newArt(
        `wall:${site}:${axis}:${Number(high)}`,
        p.x,
        p.y + offset,
      );
      items.push(
        high ? art.setDepth(2) : art.setDepth(this.artDepth(p.y + offset + 24)),
      );
    };
    for (let x = 1; x < INTERIOR_W - 1; x++) {
      wall(x, 1, 1, true);
      if (x !== room.door.x) wall(x, INTERIOR_H - 1, 1, false);
    }
    for (let y = 1; y < INTERIOR_H - 1; y++) {
      wall(1, y, -1, true);
      wall(INTERIOR_W - 1, y, -1, false);
    }
    for (const [x, y] of room.obstacles) {
      const p = iso(x + 0.5, y + 0.5);
      items.push(
        this.newArt(`fixture:${site}:${(x + y) % 3}`, p.x, p.y + offset),
      );
    }
    this.rooms.set(site, items);
    return items;
  }

  private marker(x: number, y: number, color: number, strong = false) {
    const size = strong ? 12 : 9;
    this.gfx.fillStyle(color, strong ? 0.95 : 0.7);
    for (const side of [-1, 1]) {
      this.gfx.fillRect(
        Math.round(x + side * size) - 3,
        Math.round(y) - 3,
        6,
        3,
      );
      this.gfx.fillRect(
        Math.round(x + side * (size - 5)) - 3,
        Math.round(y) + 3,
        6,
        3,
      );
    }
  }

  private draw() {
    if (!this.outdoor.length) return;
    this.gfx.clear();
    this.effects.clear();
    const s = this.state;
    const site = s?.inside?.siteId ?? "";
    if (site !== this.visibleRoom) {
      this.rooms
        .get(this.visibleRoom)
        ?.forEach((image) => image.setVisible(false));
      this.outdoor.forEach((image) => image.setVisible(!site));
      if (site)
        this.roomArt(site, getInterior(site), roomOriginY).forEach((image) =>
          image.setVisible(true),
        );
      this.visibleRoom = site;
    }
    for (const image of this.sprites.values()) image.setVisible(false);
    for (const image of this.activeArt.values()) image.setVisible(false);
    if (s?.inside) {
      this.drawInterior(s);
      return;
    }
    const base = iso(BASE.x, BASE.y);
    if (!s) {
      const camera = this.cameras.main;
      const pan = camera.width >= 960 ? camera.width / (4 * camera.zoom) : 0;
      const house = iso(farmhouse.x, farmhouse.y);
      camera.centerOn(house.x - pan, house.y + originY - 45);
      this.paintLight();
      return;
    }
    for (const entrance of SITES) {
      const a = iso(entrance.x, entrance.y);
      const room: Room = getInterior(entrance.id);
      const stocked =
        s.interiors[entrance.id].taken.length < room.supplies.length;
      this.marker(a.x, a.y + originY + 5, stocked ? 0x86bca8 : 0x7f8773);
    }
    this.marker(base.x, base.y + originY + 8, 0xe6b374, true);
    const facilities = s.community.facilities;
    const house = iso(farmhouse.x, farmhouse.y);
    const houseY = house.y + originY;
    if (facilities.barricades)
      this.art("base:barrier", "barrier", house.x - 42, houseY + 10);
    if (facilities.infirmary)
      this.art("base:med", "infirmary", house.x + 24, houseY - 39).setDepth(
        this.artDepth(houseY) + 0.1,
      );
    if (facilities.workshop)
      this.art("base:tools", "fixture:taller:0", house.x - 64, houseY + 11);
    for (let i = 0; i < facilities.garden; i++)
      this.art(
        `base:garden:${i}`,
        "garden",
        house.x + 53 + i * 13,
        houseY + 7 + i * 6,
      );
    s.loot.forEach((loot, i) => {
      if (loot.taken) return;
      const p = iso(loot.x, loot.y);
      this.marker(p.x, p.y + originY + 2, 0xd2bd8b);
      this.art(`loot:${i}`, `crate:${loot.kind}:0`, p.x, p.y + originY);
    });
    for (const loc of locations) {
      const a = iso(loc.x, loc.y);
      const active = loc.stage === activeGoalStage(s);
      if (active) {
        this.marker(a.x, a.y + originY + 12, 0xf3bc6f, true);
        const marker = landmarks.find((site) => site.kind === loc.kind) ?? loc;
        const roof = iso(marker.x, marker.y);
        const y = roof.y + originY - (loc.kind === "relay" ? 143 : 103);
        this.effects.fillStyle(0x151b1c);
        this.effects.fillRect(roof.x - 8, y - 2, 16, 12);
        this.effects.fillStyle(0xf3bc6f);
        this.effects.fillRect(roof.x - 6, y, 12, 3);
        this.effects.fillRect(roof.x - 3, y + 3, 6, 3);
      }
    }
    for (const event of fieldEvents as FieldEvent[]) {
      if (s.fieldEvents.includes(event.id)) continue;
      const point = iso(event.x, event.y);
      this.art(
        `find:${event.id}`,
        "crate:materials:0",
        point.x,
        point.y + originY,
      );
      this.marker(point.x, point.y + originY + 5, 0x94cad1);
    }
    const car = iso(s.vehicle.x, s.vehicle.y);
    const angle = s.vehicle.angle;
    const frame = ((Math.round(angle / (Math.PI / 4)) % 8) + 8) % 8;
    this.art("car", `car:${frame}`, car.x, car.y + originY);
    this.drawActors(this.gfx, s.player, s.zombies, originY);
    const p = iso(s.player.x, s.player.y);
    const foot = p.y + originY;
    for (const image of this.occluders) {
      const building = image.frame.name.startsWith("building:");
      const depth = image.y + (building ? 11 * PIXEL : 0) - foot;
      const hidden =
        depth > 1 &&
        depth < (building ? 77 : 48) &&
        Math.abs(image.x - p.x) < (building ? 55 : 26);
      image.setAlpha(hidden ? 0.43 : 1);
    }
    this.cameras.main.centerOn(Math.round(p.x), Math.round(foot - 80));
    this.weather(p.x, p.y + originY);
    this.combatPixels(p.x, p.y + originY);
    this.drawImpacts(originY);
    this.paintLight();
  }

  private drawInterior(s: State) {
    const inside = s.inside!;
    const room: Room = getInterior(inside.siteId);
    const offset = roomOriginY;
    for (const box of room.supplies) {
      const p = iso(box.x + 0.5, box.y + 0.5);
      const taken = s.interiors[inside.siteId].taken.includes(box.id);
      this.art(
        `container:${box.id}`,
        `crate:${box.kind}:${Number(taken)}`,
        p.x,
        p.y + offset,
      );
      if (!taken) this.marker(p.x, p.y + offset + 4, 0xe6b374);
    }
    const door = iso(room.door.x + 0.5, room.door.y - 0.2);
    this.marker(door.x, door.y + offset, 0x86bca8, true);
    this.drawActors(
      this.gfx,
      inside,
      s.interiors[inside.siteId].zombies,
      offset,
    );
    const p = iso(inside.x, inside.y);
    this.combatPixels(p.x, p.y + offset);
    this.drawImpacts(offset);
    const center = iso(INTERIOR_W / 2, INTERIOR_H / 2);
    this.cameras.main.centerOn(center.x, center.y + offset - 26);
    this.paintLight();
  }

  private paintLight() {
    const s = this.state;
    const room = s?.inside?.siteId;
    const offset = room ? roomOriginY : originY;
    const project = ({ x, y }: Position) => {
      const at = iso(x, y);
      return { x: at.x, y: at.y + offset };
    };
    const ambient = outdoorLight(s?.time ?? 102);
    const level = this.registry.get("lighting") ?? "full";
    if (level === "off") {
      this.lighting.draw(
        this.cameras.main,
        { ...ambient, glows: [] },
        level,
        this.visualClock * 1000,
      );
      return;
    }
    const glows: {
      x: number;
      y: number;
      radius: number;
      color: string;
      power: number;
    }[] = [];
    const glow = (
      at: Position,
      radius: number,
      color: string,
      power: number,
      height = 0,
    ) => {
      const p = project(at);
      glows.push({ ...p, y: p.y - height, radius, color, power });
    };
    if (room) {
      const emergency = ["central", "repetidor", "evacuacion"].includes(room);
      const color = emergency
        ? "#ea6044"
        : room === "laboratorio"
          ? "#81d8d0"
          : "#ffd496";
      glow({ x: 3.7, y: 2.4 }, 122, color, 0.68);
      glow({ x: 6.6, y: 4.4 }, 76, color, 0.5);
      glow({ x: 4.5, y: 5.7 }, 68, "#92c7d8", 0.64);
    } else {
      for (const landmark of landmarks as (Position & { kind: string })[]) {
        const color =
          landmark.kind === "research"
            ? "#8fdedc"
            : ["relay", "evacuation"].includes(landmark.kind)
              ? "#f47c54"
              : "#ffca81";
        glow(landmark, landmark.kind === "masia" ? 158 : 94, color, 0.54, 13);
      }
      for (const lamp of this.streetLights) {
        glows.push({
          x: lamp.x + 7 * lamp.scaleX,
          y: lamp.y - 22 * lamp.scaleY,
          radius: 106,
          color: "#ffd08e",
          power: 0.62,
        });
        glows.push({
          x: lamp.x + 12,
          y: lamp.y + 7,
          radius: 70,
          color: "#d7aa71",
          power: 0.4,
        });
      }
      for (const event of fieldEvents as FieldEvent[])
        if (!s?.fieldEvents.includes(event.id))
          glow(event, 58, "#8dc0d0", 0.42);
      if (s?.community.facilities.lookout) glow(BASE, 145, "#f4d192", 0.63);
    }

    let beam;
    if (s) {
      const origin = s.inside ?? s.player;
      glow(origin, 58, "#b1c5d0", 0.52);
      const inCar = s.vehicle.driving;
      if (inCar || this.torch) {
        const reach = inCar ? 5.8 : 3.7;
        const angle = inCar ? s.vehicle.angle : this.heading;
        beam = {
          ...project(origin),
          radius: reach * 67,
          color: inCar ? "#ffcc80" : "#fbdda4",
          power: room || ambient.shade > 0.3 ? 0.94 : 0.53,
          edge: beamEdge(
            origin,
            angle,
            reach,
            inCar ? 0.41 : 0.46,
            this.obstacles(),
          ).map(project),
        };
      }
      if (!this.reducedMotion && this.shotDirection && this.attackPulse > 0) {
        const p = project(origin);
        glows.push({
          x: p.x + this.shotDirection * 20,
          y: p.y - 23,
          radius: 84,
          color: "#ffbc78",
          power: Math.min(1, this.attackPulse * 5),
        });
      }
      for (const effect of this.impacts) {
        if (
          effect.kind !== "blast" ||
          effect.room !== (room ?? "") ||
          this.reducedMotion
        )
          continue;
        glow(
          effect.at,
          150,
          "#ffa862",
          Math.max(0, 0.85 - (s.time - effect.time) * 1.45),
        );
      }
    }
    const frame = room
      ? { tint: "#111b26", shade: 0.47, haze: 0.045 }
      : ambient;
    this.lighting.draw(
      this.cameras.main,
      { ...frame, glows, beam },
      level,
      this.visualClock * 1000,
    );
  }

  private weather(x: number, y: number) {
    if (this.reducedMotion) return;
    const camera = this.cameras.main;
    const w = Math.ceil(camera.width / camera.zoom) + 24;
    const h = Math.ceil(camera.height / camera.zoom) + 24;
    const count = Math.min(96, Math.max(35, Math.round((w * h) / 13000)));
    const t = this.visualClock;
    this.effects.fillStyle(0xa5c0b6, 0.24);
    for (let i = 0; i < count; i++) {
      const a = Math.round(((i * 227 + t * 49) % w) - w / 2 + x);
      const b = Math.round(((i * 131 + t * 189) % h) - h / 2 + y - 80);
      this.effects.fillRect(a, b, 2, 5);
      this.effects.fillRect(a - 2, b + 5, 2, 4);
    }
  }

  private drawImpacts(offset: number) {
    const s = this.state;
    const room = s.inside?.siteId ?? "";
    const blood = this.registry.get("blood") !== false;
    for (const impact of this.impacts) {
      if (impact.room !== room || (!blood && impact.kind === "blood")) continue;
      const p = iso(impact.at.x, impact.at.y);
      const age = s.time - impact.time;
      const blast = impact.kind === "blast";
      const count = this.reducedMotion ? 5 : blast ? 24 : 10;
      for (let i = 0; i < count; i++) {
        const angle = i * 2.39996;
        const radius = this.reducedMotion
          ? 12
          : (blast ? 21 : 12) + Math.min(age, 0.5) * (blast ? 140 : 30);
        const x = Math.round(
          p.x + (Math.cos(angle) * radius * ((i % 4) + 1)) / 4,
        );
        const y = Math.round(
          p.y +
            offset +
            Math.sin(angle) * radius * 0.57 -
            (blast ? 5 : Math.max(0, 24 - age * 100)),
        );
        const alpha = Math.max(0, blast ? 1 - age / 0.65 : 0.8 - age / 3);
        this.effects.fillStyle(
          blast
            ? [0xffd994, 0xb95638, 0x938477][i % 3]
            : [0x772c2f, 0xb84542, 0xde6050][i % 3],
          alpha,
        );
        this.effects.fillRect(x, y, blast ? 6 : 3, blast ? 5 : 3);
      }
    }
  }

  private combatPixels(x: number, y: number) {
    if (this.shotTrail && this.attackPulse > 0.1 && !this.reducedMotion) {
      const from = iso(this.shotTrail.from.x, this.shotTrail.from.y);
      const to = iso(this.shotTrail.to.x, this.shotTrail.to.y);
      const offset = this.state.inside ? roomOriginY : originY;
      this.effects.lineStyle(2, 0xf4ca8d, this.attackPulse * 2.3);
      this.effects.lineBetween(
        from.x,
        from.y + offset - 25,
        to.x,
        to.y + offset - 20,
      );
    }
    if (this.attackPulse > 0) {
      this.effects.fillStyle(0xf2c787, Math.min(1, this.attackPulse * 2));
      if (this.shotDirection) {
        const side = this.shotDirection;
        this.effects.fillRect(
          Math.round(x + 17 * side) - 3,
          Math.round(y - 27),
          7,
          4,
        );
        this.effects.fillRect(
          Math.round(x + 26 * side) - 2,
          Math.round(y - 30),
          5,
          2,
        );
      } else
        for (const [dx, dy] of [
          [-28, -29],
          [19, -36],
          [29, -24],
          [-14, -37],
        ])
          this.effects.fillRect(Math.round(x + dx), Math.round(y + dy), 6, 3);
    }
    if (this.hurtPulse > 0 && this.registry.get("blood") !== false) {
      this.effects.fillStyle(0xb64d42, Math.min(1, this.hurtPulse * 2));
      for (const [dx, dy] of [
        [-23, -3],
        [17, 1],
        [-14, 8],
        [23, -13],
      ])
        this.effects.fillRect(Math.round(x + dx), Math.round(y + dy), 6, 4);
    }
  }
  private drawActors(
    g: Phaser.GameObjects.Graphics,
    player: Position,
    zombies: Zombie[],
    offset: number,
  ) {
    const active = this.state.community.survivors[this.state.community.active];
    for (const z of zombies) {
      if (z.alive) continue;
      const at = iso(z.x, z.y);
      this.art("corpse:" + z.id, "corpse", at.x, at.y + offset).setDepth(1);
    }
    const actors = [
      ...zombies
        .filter((z) => z.alive)
        .map((z) => ({
          key: "z:" + z.id,
          position: z,
          palette: z.role,
          intent: this.intents.get(z),
        })),
      {
        key: "survivor",
        position: player,
        palette: ["aina", "pau", "laia", "mar"].includes(active.id)
          ? active.id
          : "aina",
        intent: undefined,
      },
    ];
    for (const actor of actors) {
      if (actor.key === "survivor" && this.state.vehicle.driving) continue;
      const at = iso(actor.position.x, actor.position.y);
      const y = at.y + offset;
      const isPlayer = actor.key === "survivor";
      const charge = isPlayer
        ? undefined
        : this.chargeAttack.get(actor.position as Zombie);
      if (charge && charge.windup > this.state.time) {
        this.effects.fillStyle(0x58241e);
        this.effects.fillRect(Math.round(at.x) - 7, Math.round(y) - 66, 14, 9);
        this.effects.fillStyle(0xffc081);
        this.effects.fillRect(Math.round(at.x) - 1, Math.round(y) - 65, 3, 4);
        this.effects.fillRect(Math.round(at.x) - 1, Math.round(y) - 59, 3, 2);
      }
      const moving = isPlayer
        ? this.moving
        : !!actor.intent && actor.intent.until > this.state.time;
      const walk = moving
        ? 1 +
          (Math.floor(
            this.visualClock * 7 + (isPlayer ? 0 : actor.position.x),
          ) %
            2)
        : 0;
      const destination = actor.intent?.destination;
      const back = isPlayer
        ? this.back
        : !!destination &&
          destination.x + destination.y < actor.position.x + actor.position.y;
      const flip = isPlayer
        ? this.facing < 0
        : !!destination && iso(destination.x, destination.y).x < at.x;
      let sprite = this.sprites.get(actor.key);
      if (!sprite) {
        sprite = this.add
          .image(0, 0, this.actorTexture)
          .setOrigin(0.5, 0.91)
          .setScale(2);
        this.sprites.set(actor.key, sprite);
      }
      g.fillStyle(0x040806, 0.6);
      g.fillRect(Math.round(at.x) - 10, Math.round(y), 20, 5);
      if (isPlayer) {
        this.marker(at.x, y + 4, 0xe8c98e);
      }
      sprite
        .setFrame(
          actor.palette +
            ":" +
            (isPlayer && this.attackPulse > 0
              ? back
                ? 7
                : 6
              : walk + (back ? 3 : 0)),
        )
        .setPosition(Math.round(at.x), Math.round(y))
        .setDepth(this.artDepth(y))
        .setFlipX(flip)
        .setTint(isPlayer && this.hurtPulse > 0 ? 0xef9d8b : 0xffffff)
        .setVisible(true);
    }
  }
}
