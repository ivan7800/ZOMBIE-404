#!/usr/bin/env bash
set -Eeuo pipefail

ROOT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT_DIR"

PORT="${1:-4040}"
GAME_URL="http://127.0.0.1:${PORT}/"

if [[ ! -f dist/index.html ]]; then
  echo "No encuentro dist/index.html. Este ZIP está incompleto." >&2
  exit 1
fi

if ! command -v node >/dev/null 2>&1; then
  echo "Falta Node.js. Instala Node.js 22 o superior y vuelve a ejecutar este lanzador." >&2
  echo "https://nodejs.org/" >&2
  exit 1
fi

if ! node -e 'process.exit(Number(process.versions.node.split(".")[0]) >= 22 ? 0 : 1)'; then
  echo "Se necesita Node.js 22 o superior. Detectado: $(node --version)." >&2
  exit 1
fi

server_pid=""
owns_server=0
cleanup() {
  if [[ "$owns_server" == 1 && -n "$server_pid" ]] && kill -0 "$server_pid" 2>/dev/null; then
    kill "$server_pid" 2>/dev/null || true
    wait "$server_pid" 2>/dev/null || true
  fi
}
trap cleanup EXIT INT TERM

is_ready() {
  node --input-type=module -e 'const r=await fetch(process.argv[1]); process.exit(r.ok ? 0 : 1)' "$GAME_URL" >/dev/null 2>&1
}

if is_ready; then
  echo "Ya hay un servidor de ZOMBIE-404 en ${GAME_URL}"
else
  echo "Iniciando ZOMBIE-404 en ${GAME_URL}"
  node scripts/play.mjs "$PORT" &
  server_pid=$!
  owns_server=1

  ready=0
  for _ in {1..40}; do
    if is_ready; then
      ready=1
      break
    fi
    if ! kill -0 "$server_pid" 2>/dev/null; then
      break
    fi
    sleep 0.25
  done

  if [[ "$ready" != 1 ]]; then
    echo "El servidor no respondió. Comprueba si el puerto ${PORT} está ocupado." >&2
    exit 1
  fi
fi

if command -v xdg-open >/dev/null 2>&1; then
  xdg-open "$GAME_URL" >/dev/null 2>&1 &
elif command -v gio >/dev/null 2>&1; then
  gio open "$GAME_URL" >/dev/null 2>&1 &
else
  echo "No encuentro un abridor de navegador. Abre esta dirección: ${GAME_URL}"
fi

if [[ "$owns_server" == 1 ]]; then
  echo "El juego está abierto. Mantén esta terminal abierta; pulsa Enter para detener el servidor."
  read -r _ || true
else
  echo "Puedes cerrar este lanzador; el servidor ya estaba activo antes de ejecutarlo."
fi
