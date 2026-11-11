import { clamp, distance, validPosition } from "./rules.mjs";
import { addItem, consumeItem } from "./survival.mjs";

export const PARKING = { x: 13.6, y: 12.8 };
export function prepareVehicle(vehicle, blocked) {
  const valid =
    vehicle &&
    Number.isFinite(vehicle.x) &&
    Number.isFinite(vehicle.y) &&
    canDriveAt(vehicle.x, vehicle.y, blocked);
  const number = (value, min, max, fallback) =>
    Number.isFinite(value) ? clamp(value, min, max) : fallback;
  const trunk = { capacity: 26, items: {} };
  for (const [id, qty] of Object.entries(vehicle?.trunk?.items ?? {}))
    addItem(trunk, id, qty);
  return {
    ...(valid ? { x: vehicle.x, y: vehicle.y } : PARKING),
    angle: number(vehicle?.angle, -Math.PI, Math.PI, 0),
    speed: 0,
    fuel: number(vehicle?.fuel, 0, 100, 62),
    condition: number(vehicle?.condition, 0, 100, 80),
    driving: !!valid && vehicle.driving === true,
    trunk,
  };
}

function canDriveAt(x, y, blocked) {
  return [
    [0, 0],
    [0.21, 0.21],
    [0.21, -0.21],
    [-0.21, 0.21],
    [-0.21, -0.21],
  ].every(([dx, dy]) => validPosition(x + dx, y + dy, blocked));
}
export function stepVehicle(vehicle, throttle, steer, dt, blocked) {
  const v = vehicle;
  const powered = v.fuel > 0 && v.condition > 0;
  const desired = powered ? throttle * (throttle > 0 ? 6.6 : 2.7) : 0;
  v.speed += clamp(desired - v.speed, -dt * 10, dt * 6.5);
  if (Math.abs(v.speed) < 0.04) return false;
  v.angle += steer * dt * 2.1 * Math.sign(v.speed);
  v.angle = Math.atan2(Math.sin(v.angle), Math.cos(v.angle));
  if (powered && throttle)
    v.fuel = Math.max(0, v.fuel - dt * (0.6 + Math.abs(v.speed) * 0.24));
  const x = v.x + Math.cos(v.angle) * v.speed * dt;
  const y = v.y + Math.sin(v.angle) * v.speed * dt;
  if (canDriveAt(x, y, blocked)) {
    v.x = x;
    v.y = y;
    return false;
  }
  v.condition = Math.max(0, v.condition - Math.abs(v.speed) * 0.9);
  v.speed = 0;
  return true;
}

export function toggleVehicle(state) {
  const v = state.vehicle;
  if (state.inside || distance(state.player, v) >= 1.65)
    return "Acércate al coche.";
  if (v.driving) {
    if (Math.abs(v.speed) > 0.35) return "Detén el coche para bajar.";
    v.speed = 0;
    v.driving = false;
    return "Has bajado del coche.";
  }
  if (v.condition <= 0 || v.fuel <= 0)
    return "El coche necesita combustible o reparación.";
  v.driving = true;
  state.player.x = v.x;
  state.player.y = v.y;
  return "En el coche · W acelera · S frena o retrocede · A/D gira.";
}

export function transferCargo(vehicle, inventory, item, loading) {
  const from = loading ? inventory : vehicle.trunk;
  const to = loading ? vehicle.trunk : inventory;
  if (!(from.items[item] > 0) || !addItem(to, item, 1)) return false;
  return consumeItem(from, item, 1);
}

export function serviceVehicle(vehicle, survivor, operation, workshop = 0) {
  if (
    operation === "fuel" &&
    vehicle.fuel < 100 &&
    consumeItem(survivor.inventory, "fuelcan")
  ) {
    vehicle.fuel = Math.min(100, vehicle.fuel + 38);
    return true;
  }
  if (
    operation === "repair" &&
    vehicle.condition < 100 &&
    consumeItem(survivor.inventory, "scrap")
  ) {
    vehicle.condition = Math.min(
      100,
      vehicle.condition +
        (survivor.skill === "Mecánico" ? 38 : 20) +
        workshop * 5,
    );
    return true;
  }
  return false;
}
