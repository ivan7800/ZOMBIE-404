# Arte y créditos

La vista 2.5D combina sprites pixelados originales con escenarios procedimentales. Las referencias visuales son las masías de piedra, el asfalto gastado, los bosques mediterráneos y los polígonos del Vallès. La lluvia, las farolas y la variación día/noche modifican la atmósfera durante la expedición.

- `src/art/actorAtlas.ts` dibuja el atlas al arrancar con paletas individuales y de infectados. Usa animaciones de reposo y marcha con variantes frontal y trasera y reflejo lateral.
- El exterior tiene una gasolinera con marquesina, un taller con portón, comercios, un refugio con antena, vegetación y un coche dibujado según su dirección. Los interiores se distinguen mediante colores, mobiliario y contenedores.
- El audio se sintetiza con Web Audio. Incluye ambiente exterior e interior, pasos, impactos, mordidas, recarga, motor y alertas.
- Phaser 3.90.0 se redistribuye en el bundle bajo licencia MIT. Las familias Barlow Condensed e IBM Plex Mono se incluyen localmente bajo SIL Open Font License 1.1. Las licencias están en `public/licenses/` y en `dist/licenses/`.

El arte sigue siendo estilizado y de escala pequeña. Una dirección realista con animación más extensa y oclusión por geometría de edificios sigue pendiente.
