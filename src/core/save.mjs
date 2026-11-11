import { validateSave } from "./rules.mjs";
export const SAVE_KEY = "zombie404-save-v1";
export const CURRENT_KEY = "zombie404-save-v2";
export const BACKUP_KEY = "zombie404-save-backup";

function read(storage, key) {
  try {
    const raw = storage.getItem(key);
    const parsed = raw ? JSON.parse(raw) : null;
    return validateSave(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export function loadGame(storage) {
  try {
    storage ??= globalThis.localStorage;
    return (
      read(storage, CURRENT_KEY) ??
      read(storage, BACKUP_KEY) ??
      read(storage, SAVE_KEY)
    );
  } catch {
    return null;
  }
}

export function saveGame(state, storage) {
  if (!validateSave(state)) return false;
  try {
    storage ??= globalThis.localStorage;
    const key = state.version === 2 ? CURRENT_KEY : SAVE_KEY;
    const next = JSON.stringify(state);
    const previous = state.version === 2 ? read(storage, key) : null;
    if (previous && !state.gameOver) {
      try {
        storage.setItem(BACKUP_KEY, JSON.stringify(previous));
      } catch {
        /* main slot still gets a write attempt */
      }
    }
    storage.setItem(key, next);
    return true;
  } catch {
    return false;
  }
}
export function clearGame(storage) {
  try {
    storage ??= globalThis.localStorage;
    for (const key of [SAVE_KEY, BACKUP_KEY, CURRENT_KEY])
      storage.removeItem(key);
    return true;
  } catch {
    return false;
  }
}
