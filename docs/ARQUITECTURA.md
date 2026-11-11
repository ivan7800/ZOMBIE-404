# Arquitectura

| Ubicación | Responsabilidad |
| --- | --- |
| `src/main.ts` | Inicio de Phaser, estado del menú, cuaderno, acciones táctiles y registro del service worker |
| `src/scenes/GameScene.ts` | Orquestación de la simulación, entrada, cámara isométrica, exterior e interiores |
| `src/core/` | Reglas sin navegador para combate, visibilidad, navegación, instalaciones, logística, campaña, vehículo y guardados |
| `src/art/actorAtlas.ts` | Atlas procedimental original. Paletas por personaje y rol, dos vistas con reflejo lateral y pasos animados |
| `src/audio/AudioDirector.ts` | Ganancia global, persistencia de volumen, efectos sintetizados y ambiente filtrado |
| `scripts/offline.mjs` | Genera el service worker desde los archivos reales de producción |
| `scripts/play.mjs` | Sirve el build incluido por HTTP en loopback |
| `desktop/main.cjs` | Ventana Electron local con aislamiento de contexto y sandbox |

El mapa usa coordenadas de rejilla para colisión y línea de visión y las proyecta a isometría para dibujar. Los personajes usan un atlas compartido y se ordenan por profundidad. El suelo exterior se dibuja una vez en una textura de renderizado. El HUD se actualiza a intervalos. Los infectados persiguen por visión u oído, mantienen una posición recordada durante unos segundos y recalculan rutas por rejilla a intervalos cuando pierden el contacto visual.

## Guardados

La partida actual se guarda con la clave `zombie404-save-v2` de `localStorage`. Si la lectura falla o la estructura de la partida principal es ilegible, se intenta recuperar la copia anterior y después una partida v1. La carga valida los datos básicos y normaliza inventarios, interiores, enemigos y valores opcionales antes de entregarlos a Phaser. Los niveles de instalaciones antiguas, supervivientes, objetos y objetivos se conservan. Se añaden valores iniciales para los sistemas nuevos. Los cargadores de una partida antigua empiezan vacíos, con la munición antigua en reserva. El coche conserva su posición y carga y arranca parado al recuperar la partida.

El autoguardado se ejecuta cada 20 segundos de simulación y al ocultar o cerrar la página. También se guarda al depositar, cambiar de personaje, pausar, elegir desenlace y en otros puntos de progreso. Los guardados pertenecen al origen del navegador. Cambiar de navegador, dominio o puerto puede impedir que aparezca el botón Continuar. Hay una única ranura principal.
