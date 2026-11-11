import "@fontsource/barlow-condensed/latin-700.css";
import "@fontsource/ibm-plex-mono/latin-400.css";
import Phaser from "phaser";
import { setupDisplay } from "./ui/display";
import { AudioDirector } from "./audio/AudioDirector";
import { GameScene } from "./scenes/GameScene";
import { clearGame, loadGame } from "./core/save.mjs";
import "./style.css";

const element = <T extends HTMLElement>(id: string) =>
  document.getElementById(id) as T;
const game = new Phaser.Game({
  type: Phaser.AUTO,
  parent: "game",
  backgroundColor: "#111916",
  scale: {
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1280,
    height: 800,
  },
  render: {
    pixelArt: true,
    antialias: false,
    roundPixels: true,
    powerPreference: "low-power",
  },
  fps: { target: 60, forceSetTimeOut: true },
  scene: [GameScene],
});
const scene = () => game.scene.getScene("GameScene") as GameScene;
const audio = new AudioDirector();
const touch = new Set<string>();
game.registry.set("touch", touch);
setupDisplay(game.registry);
const overlay = element("overlay");
const hud = element("hud");
const intro = element("intro");
const newGame = element<HTMLButtonElement>("newGame");
const continueGame = element<HTMLButtonElement>("continueGame");
const subtitle = element("game-subtitle");
const difficultyHint = element("difficultyHint");
const difficulty = element<HTMLSelectElement>("difficulty");
const notebook = element<HTMLDialogElement>("notebook");
const radio = element<HTMLDialogElement>("radio");
const act2 = element<HTMLDialogElement>("act2");
const act3 = element<HTMLDialogElement>("act3");
const act4 = element<HTMLDialogElement>("act4");
const act5 = element<HTMLDialogElement>("act5");
const volume = element<HTMLInputElement>("volume");
const sound = element<HTMLButtonElement>("soundToggle");

let menu = "title";
let tab = "inventory";
let ready = false;
function refreshMenu() {
  const inProgress = ["pause", "ending", "complete"].includes(menu);
  newGame.disabled = !ready;
  const saved = loadGame();
  continueGame.textContent =
    menu === "complete"
      ? "Seguir explorando"
      : inProgress
        ? "Reanudar"
        : "Continuar";
  continueGame.disabled = !ready || (!inProgress && (!saved || saved.gameOver));
}
function showMenu(message: string, reason: string) {
  touch.clear();
  audio.tension(0);
  menu = reason;
  subtitle.textContent =
    {
      pause: "PARTIDA EN PAUSA",
      ending: "FIN DEL ACTO I",
      complete: "CAMPAÑA COMPLETADA",
      dead: "CAN LLUC HA CAÍDO",
    }[reason] ?? "TIERRA MUERTA";
  intro.textContent = message;
  hud.hidden = true;
  overlay.classList.add("show");
  refreshMenu();
  (continueGame.disabled ? newGame : continueGame).focus();
}
function hideMenu() {
  menu = "playing";
  overlay.classList.remove("show");
  hud.hidden = false;
  (document.activeElement as HTMLElement | null)?.blur();
}

game.events.on("ready-to-play", () => {
  ready = true;
  refreshMenu();
});
game.events.on("show-overlay", showMenu);
game.events.on("sound", (name: string) => audio.play(name));
game.events.on("tension", (level: number) => audio.tension(level));
let chapterTimer = 0;
game.events.on("chapter", (title: string, line: string) => {
  const card = element("chapter-card");
  element("chapter-title").textContent = title;
  element("chapter-line").textContent = line;
  card.hidden = false;
  window.clearTimeout(chapterTimer);
  chapterTimer = window.setTimeout(() => {
    card.hidden = true;
  }, 4200);
});
game.events.on("ambience", (inside: boolean, night: boolean) =>
  audio.ambience(inside, night),
);

newGame.addEventListener("click", () => {
  const saved = loadGame();
  if (
    saved &&
    !saved.gameOver &&
    !window.confirm("¿Sustituir la partida guardada?")
  )
    return;
  if (!clearGame()) {
    intro.textContent =
      "El navegador impide borrar el guardado. Puedes seguir jugando durante esta sesión.";
  }
  audio.unlock();
  if (
    scene().startRun(
      false,
      element<HTMLSelectElement>("mode").value,
      difficulty.value,
    )
  )
    hideMenu();
});
continueGame.addEventListener("click", () => {
  audio.unlock();
  if (["pause", "ending", "complete"].includes(menu)) {
    scene().resume();
    hideMenu();
  } else if (scene().startRun(true, "campaign", "survival")) hideMenu();
  else {
    intro.textContent = "No se ha podido recuperar la partida.";
    refreshMenu();
  }
});
difficulty.addEventListener("change", () => {
  difficultyHint.textContent =
    {
      story:
        "Más suministros, menos patrullas y retirada a la masía tras una herida crítica.",
      survival: "Muerte permanente de los supervivientes.",
      nightmare:
        "Los infectados ven y oyen más lejos. Menos cartuchos, más patrullas y asedios más duros.",
    }[difficulty.value] ?? "";
});

function refreshAudio() {
  sound.textContent = audio.isEnabled ? "Sonido activo" : "Sonido silenciado";
  sound.setAttribute("aria-pressed", String(!audio.isEnabled));
  volume.value = String(Math.round(audio.level * 100));
}
sound.addEventListener("click", () => {
  audio.toggle();
  audio.unlock();
  refreshAudio();
});
volume.addEventListener("input", () => {
  audio.setLevel(Number(volume.value) / 100);
  audio.unlock();
});
refreshAudio();

for (const button of document.querySelectorAll<HTMLButtonElement>(
  "[data-move]",
)) {
  const direction = button.dataset.move!;
  button.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    touch.add(direction);
    button.setPointerCapture(event.pointerId);
  });
  for (const event of ["pointerup", "pointercancel", "lostpointercapture"]) {
    button.addEventListener(event, () => touch.delete(direction));
  }
}
for (const button of document.querySelectorAll<HTMLButtonElement>(
  "[data-action]",
)) {
  button.addEventListener("click", () =>
    scene().action(button.dataset.action!),
  );
}

function renderNotebook(focusAction?: string) {
  const data = scene().notebook(tab);
  element("notebookSummary").textContent = data.summary;
  for (const button of document.querySelectorAll<HTMLButtonElement>(
    "[data-tab]",
  )) {
    button.setAttribute("aria-pressed", String(button.dataset.tab === tab));
  }
  const list = element("notebookRows");
  list.replaceChildren();
  for (const row of data.rows as {
    title: string;
    detail?: string;
    action?: string;
    button?: string;
    disabled?: boolean;
  }[]) {
    const entry = document.createElement("li");
    const text = document.createElement("span");
    const title = document.createElement("strong");
    title.textContent = row.title;
    text.append(title);
    if (row.detail) {
      const detail = document.createElement("small");
      detail.textContent = row.detail;
      text.append(detail);
    }
    entry.append(text);
    if (row.action) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "secondary";
      button.textContent = row.button ?? "";
      button.disabled = !!row.disabled;
      const action = row.action;
      button.addEventListener("click", () => {
        element("notebookNotice").textContent =
          scene().notebookAction(action) ?? "";
        renderNotebook(action);
      });
      entry.append(button);
      list.append(entry);
      if (action === focusAction)
        (button.disabled
          ? notebook.querySelector<HTMLButtonElement>('[aria-pressed="true"]')
          : button
        )?.focus();
    } else list.append(entry);
  }
  const canvas = element<HTMLCanvasElement>("fieldMap");
  canvas.hidden = !data.map;
  if (data.map) {
    const ctx = canvas.getContext("2d")!;
    const m = data.map;
    const size = canvas.width / 26;
    ctx.fillStyle = "#26372b";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#596057";
    ctx.fillRect(11 * size, 0, 3 * size, canvas.height);
    ctx.fillRect(0, 11 * size, canvas.width, 3 * size);
    ctx.fillRect(3 * size, 6 * size, 20 * size, size);
    const marker = (x: number, y: number, color: string, radius: number) => {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x * size, y * size, radius, 0, Math.PI * 2);
      ctx.fill();
    };
    for (const site of m.sites) marker(site.x, site.y, "#9cba9e", 6);
    for (const goal of m.goals)
      marker(
        goal.x,
        goal.y,
        goal.stage === m.stage ? "#f4bd73" : "#8b856f",
        goal.stage === m.stage ? 8 : 4,
      );
    for (const loot of m.loot) marker(loot.x, loot.y, "#ad835f", 3);
    marker(m.vehicle.x, m.vehicle.y, "#93b6ba", 5);
    marker(m.base.x, m.base.y, "#efe0b9", 7);
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2;
    const x = m.player.x * size,
      y = m.player.y * size;
    ctx.beginPath();
    ctx.moveTo(x - 9, y);
    ctx.lineTo(x + 9, y);
    ctx.moveTo(x, y - 9);
    ctx.lineTo(x, y + 9);
    ctx.stroke();
  }
}
game.events.on("open-notebook", (section: string) => {
  touch.clear();
  tab = section;
  element("notebookNotice").textContent = "";
  renderNotebook();
  notebook.showModal();
});
for (const button of document.querySelectorAll<HTMLButtonElement>(
  "[data-tab]",
)) {
  button.addEventListener("click", () => {
    tab = button.dataset.tab!;
    element("notebookNotice").textContent = "";
    renderNotebook();
  });
}
game.events.on("radio-choice", () => {
  touch.clear();
  radio.showModal();
});
game.events.on("act2-choice", () => {
  touch.clear();
  act2.showModal();
});
game.events.on("act3-choice", () => {
  touch.clear();
  act3.showModal();
});
game.events.on("act4-choice", () => {
  touch.clear();
  act4.showModal();
});
game.events.on("act5-choice", () => {
  touch.clear();
  act5.showModal();
});
for (const panel of [notebook, radio, act2, act3, act4, act5]) {
  panel.querySelector("[data-close]")!.addEventListener("click", () => {
    panel.close();
    scene().closePanel();
  });
  panel.addEventListener("close", () => scene().closePanel());
}
element("transmit").addEventListener("click", () => {
  radio.close();
  scene().finishAct("signal");
});
element("disconnect").addEventListener("click", () => {
  radio.close();
  scene().finishAct("silence");
});
element("inviteGroup").addEventListener("click", () => {
  act2.close();
  scene().finishActTwo("invite");
});
element("observeGroup").addEventListener("click", () => {
  act2.close();
  scene().finishActTwo("observe");
});
element("warnRefuges").addEventListener("click", () => {
  act3.close();
  scene().finishActThree("warn");
});
element("concealResearch").addEventListener("click", () => {
  act3.close();
  scene().finishActThree("conceal");
});
element("evacuateStation").addEventListener("click", () => {
  act4.close();
  scene().finishActFour("station");
});
element("evacuateMasia").addEventListener("click", () => {
  act4.close();
  scene().finishActFour("masia");
});
element("signalOutside").addEventListener("click", () => {
  act5.close();
  scene().finishActFive("alarm");
});
element("isolateValley").addEventListener("click", () => {
  act5.close();
  scene().finishActFive("isolate");
});

window.addEventListener("keydown", (event) => {
  if (
    menu === "playing" &&
    !notebook.open &&
    !radio.open &&
    !act2.open &&
    !act3.open &&
    !act4.open &&
    !act5.open &&
    ["Tab", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(
      event.key,
    )
  ) {
    if (
      event.key === "Tab" &&
      !event.shiftKey &&
      document.activeElement === document.body
    ) {
      event.preventDefault();
      scene().action("notebook");
    }
    if (event.key.startsWith("Arrow")) event.preventDefault();
  }
});
window.addEventListener("blur", () => {
  touch.clear();
  if (ready) scene().keysReset();
});
document.addEventListener("visibilitychange", () => {
  if (document.hidden && ready && menu === "playing") {
    touch.clear();
    scene().keysReset();
    scene().persist(false);
  }
});
window.addEventListener("pagehide", () => {
  if (ready && menu === "playing") scene().persist(false);
});

if (
  "serviceWorker" in navigator &&
  /^https?:$/.test(location.protocol) &&
  import.meta.env.PROD
) {
  navigator.serviceWorker
    .register("./sw.js")
    .catch((error) => console.warn("Modo sin conexión no disponible.", error));
}
