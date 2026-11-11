import { pickupEquipment } from "./equipment.mjs";
import { packResource } from "./logistics.mjs";

export const fieldEvents = [
  {
    id: "ambulancia",
    x: 9.5,
    y: 13.5,
    name: "La ambulancia",
    detail:
      "La puerta lateral cede unos centímetros. Hay una venda al alcance. Para abrir el armario tendrás que romper el cierre.",
    quiet: "Sacar una venda",
    loud: "Forzar el armario · hasta 3 vendas",
    resource: "medicine",
    amount: 3,
    noise: 13,
  },
  {
    id: "furgon",
    x: 16.5,
    y: 9.5,
    name: "El furgón de la Guardia",
    detail:
      "El portón está atascado. Dos cartuchos han caído al asfalto. La caja de munición sigue dentro.",
    quiet: "Recoger 2 cartuchos",
    loud: "Forzar el portón · hasta 6 cartuchos",
    resource: "ammo",
    amount: 6,
    quietAmount: 2,
    noise: 16,
  },
  {
    id: "caseta",
    x: 10.5,
    y: 20.5,
    name: "La caseta del guarda",
    detail:
      "La luz sigue encendida. Hay una ración junto a la ventanilla y más comida tras una persiana oxidada.",
    quiet: "Sacar una ración",
    loud: "Levantar la persiana · hasta 3 raciones",
    resource: "food",
    amount: 3,
    noise: 11,
  },
  {
    id: "generador",
    x: 19.5,
    y: 14.5,
    name: "El generador abandonado",
    detail:
      "Un bidón está suelto. Hay un segundo bajo la carcasa del generador. El metal vibrará por toda la carretera.",
    quiet: "Llevar un bidón",
    loud: "Abrir la carcasa · hasta 2 bidones",
    resource: "fuel",
    amount: 2,
    noise: 14,
  },
];

export function prepareFieldEvents(value) {
  const source = Array.isArray(value) ? value : [];
  return fieldEvents.map(({ id }) => id).filter((id) => source.includes(id));
}

export function resolveFieldEvent(state, id, loud) {
  const event = fieldEvents.find((item) => item.id === id);
  if (!event || state.fieldEvents.includes(id)) return null;
  const requested = loud ? event.amount : (event.quietAmount ?? 1);
  const amount = ["ammo", "medicine"].includes(event.resource)
    ? pickupEquipment(state, event.resource, requested)
    : (packResource(state.community, event.resource, requested).amount ?? 0);
  if (!amount)
    return { amount: 0, noise: 0, message: "Haz espacio en la mochila." };
  state.fieldEvents.push(id);
  const units = {
    medicine: "vendas",
    ammo: "cartuchos",
    food: "raciones",
    fuel: "bidones",
  };
  const message = `${event.name} · +${amount} ${units[event.resource]}.`;
  state.community.logs.push(
    message + (loud ? " El ruido se oyó desde la carretera." : ""),
  );
  return { amount, noise: loud ? event.noise : 0, message };
}
