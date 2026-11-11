# Hoja de ruta · estado 0.14.1

## Base jugable actual

- Actos I a V de **Los últimos días**, con decisiones persistentes y una nueva integrante opcional de la comunidad.
- Supervivencia libre, gestión básica de refugio, saqueo, siete interiores, combate, infectados, coche y guardados v2 migrables.
- PWA offline y compilación web estática incluidas.
- Lanzadores locales para Windows (`.bat`) y Linux (`.sh`) incluidos en la distribución.
- Build y pruebas de campaña confirmados con TypeScript, Vite, service worker y pruebas unitarias; se requiere recorrido manual completo en navegador.

## Próximos hitos

| Prioridad | Hito | Trabajo pendiente |
|---|---|---|
| 1 | **Validación de experiencia** | Jugar la campaña completa, probar todas las ramas y medir rendimiento en Chromium/WebGL y dispositivos táctiles |
| 2 | **Más consecuencias** | Profundizar las relaciones y apoyos derivados de contactos y bajas en los cinco actos |
| 3 | **Distribución nativa** | Verificar Electron y generar instaladores Windows/Linux en sistemas de destino; los lanzadores web locales ya están incluidos |
| 4 | **Rendimiento** | Dividir el bundle principal y perfilar el juego en un hardware de referencia |

## Límites conocidos

La campaña de cinco actos está implementada, pero aún requiere una partida completa para validar ritmo, balance y accesibilidad. La comunidad no incluye relaciones complejas; las defensas de la masía se resuelven sin una escena táctica. No se han validado dispositivos físicos ni el empaquetado nativo.
