# Hoja de ruta · estado 0.18.0

## Base jugable actual

- Actos I a V de **Los últimos días**, con decisiones persistentes y una nueva integrante opcional de la comunidad.
- Supervivencia libre, gestión básica de refugio, saqueo, siete interiores, combate, infectados, coche y guardados v2 migrables.
- PWA offline y compilación web estática incluidas.
- Lanzadores locales para Windows (`.bat`) y Linux (`.sh`) incluidos en la distribución.
- Build y pruebas de campaña confirmados con TypeScript, Vite, service worker y pruebas unitarias; se requiere recorrido manual completo en navegador.
- Asedios combatibles en Can Lluc, apoyo de decisiones anteriores, presión limitada y oleadas persistentes al guardar.
- HUD y controles táctiles adaptados a orientación vertical y horizontal; pendiente comprobar en un móvil físico.

## Próximos hitos

| Prioridad | Hito | Trabajo pendiente |
|---|---|---|
| 1 | **Validación de experiencia** | Jugar la campaña completa y probar todas las ramas; medir equilibrio de suministros, ritmo y accesibilidad |
| 2 | **Móvil físico** | Validar botones, legibilidad y rendimiento en iOS/Android en vertical y horizontal |
| 3 | **Distribución nativa** | Verificar Electron y generar instaladores Windows/Linux en sistemas de destino; los lanzadores web locales ya están incluidos |
| 4 | **Rendimiento** | Dividir el bundle principal y perfilar el juego en un hardware de referencia |

## Límites conocidos

La campaña de cinco actos está implementada, pero aún requiere una partida manual completa para validar ritmo, balance y accesibilidad. Las decisiones de contacto y advertencia apoyan ahora la defensa; las muertes siguen influyendo en el final y la gestión de la comunidad. No se han validado dispositivos físicos ni el empaquetado nativo.
