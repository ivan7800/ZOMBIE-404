// Pure functions: resources must survive an expedition before reaching the base.
export const RESOURCE_ITEM = {
  food: "ration",
  medicine: "bandage",
  materials: "scrap",
  fuel: "fuelcan",
};
const RESOURCE_NAMES = {
  food: "comida",
  medicine: "medicina",
  materials: "materiales",
  fuel: "combustible",
};
export const ITEM_RESOURCE = Object.fromEntries(
  Object.entries(RESOURCE_ITEM).map(([resource, item]) => [item, resource]),
);
export const WEIGHT = { ration: 2, bandage: 1, scrap: 2, fuelcan: 3, ammo: 1 };
export const LIMIT = { ration: 6, bandage: 5, scrap: 10, fuelcan: 4, ammo: 20 };
export function weight(inv) {
  return Object.entries(inv?.items ?? {}).reduce(
    (total, [k, n]) => total + (WEIGHT[k] ?? 0) * Math.max(0, Number(n) || 0),
    0,
  );
}
export function capacityFor(inv, item) {
  if (!inv || !WEIGHT[item] || !Number.isFinite(inv.capacity)) return 0;
  return Math.max(
    0,
    Math.min(
      (LIMIT[item] ?? 0) - (inv.items[item] ?? 0),
      Math.floor((inv.capacity - weight(inv)) / WEIGHT[item]),
    ),
  );
}
export function packResource(community, resource, amount) {
  const item = RESOURCE_ITEM[resource],
    inv = community?.survivors?.[community.active]?.inventory;
  if (!item || !Number.isInteger(amount) || amount <= 0 || !inv)
    return { ok: false, amount: 0, message: "Carga inválida" };
  const carried = Math.min(amount, capacityFor(inv, item));
  if (!carried)
    return {
      ok: false,
      amount: 0,
      message: "Mochila llena: deposita suministros en la masía",
    };
  inv.items[item] = (inv.items[item] ?? 0) + carried;
  return {
    ok: true,
    amount: carried,
    message: `Recogido: ${carried} · ${RESOURCE_NAMES[resource]}${carried < amount ? " · queda material por recoger" : ""}`,
  };
}
export function depositBackpack(community) {
  const inv = community?.survivors?.[community.active]?.inventory;
  if (!inv) return { ok: false, message: "Sin mochila" };
  let count = 0;
  for (const [item, resource] of Object.entries(ITEM_RESOURCE)) {
    const qty = Math.max(0, Math.floor(inv.items[item] ?? 0));
    if (!qty) continue;
    community.resources[resource] = (community.resources[resource] ?? 0) + qty;
    inv.items[item] = 0;
    count += qty;
  }
  if (!count)
    return { ok: false, message: "No llevas suministros para depositar" };
  community.logs?.push(
    `Día ${community.day}: ${count} unidades depositadas en la masía.`,
  );
  return {
    ok: true,
    amount: count,
    message: `Depositados ${count} suministros en la base`,
  };
}
