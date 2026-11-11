# Informe de verificación · 0.14.0

## Revalidación de 0.14.0

| Comprobación | Resultado |
| --- | --- |
| TypeScript y producción | `npm run build` completado: TypeScript, Vite y generación del service worker |
| Pruebas Node | **71/71 aprobadas** (`npm test`) |
| Navegador / móviles | No recorrido manualmente; Chromium headless no pudo iniciar por la restricción de socket del entorno y el navegador remoto no alcanza el servidor local |
| Guardados v2 | Se conserva el esquema; se añaden estados normalizados y migración de desbloqueo por acto completado |
| Finales | Cinco resultados previstos según alianzas, decisiones y supervivientes vivos; pendientes de validar en el juego completo |

El bundle JavaScript es **1,57 MB sin comprimir / 369,1 kB gzip**; Vite mantiene su aviso de chunk superior a 500 kB. Las rutas de HTML, JavaScript, CSS, manifiesto y service worker respondieron HTTP 200 en la prueba local. No se certifica el equilibrio narrativo sin jugar la campaña completa.

## Revalidación de 0.12.0 (histórica)

| Comprobación | Resultado observado |
| --- | --- |
| Pruebas Node | **65/65 aprobadas**, incluidas cuatro pruebas del Acto II |
| TypeScript y producción | `npm run build` completó `tsc --noEmit`, Vite y generación del service worker offline |
| Guardados existentes | La carga normaliza el campo opcional de campaña; una partida v2 con Acto I terminado abre el Acto II sin cambiar la clave o el esquema |
| Decisiones del Acto II | Ambas ramas se guardan; invitar a Núria incorpora a la superviviente, la alternativa conserva la comunidad actual |
| Chrome / móvil / hardware | No ejecutado en esta revalidación |

El bundle JavaScript de producción queda en **1,55 MB sin comprimir / 365,9 kB gzip**. Vite conserva el aviso de chunk superior a 500 kB; no impide la compilación, pero la división de código queda como mejora de rendimiento.

La cobertura del acto nuevo verifica la lógica y la persistencia. No equivale a un recorrido manual de campaña dentro del navegador.

## Línea base histórica · 0.11.0

## Resultado reproducible

| Comprobación | Resultado observado |
| --- | --- |
| ZIP de origen | Integridad comprobada con `unzip -t` |
| Línea base | 48/48 pruebas de Node. La compilación fallaba con tres errores de TypeScript en `GameScene.ts` |
| Lógica de la entrega | 61/61 pruebas de Node, incluidas las 48 existentes |
| Producción | Instalación limpia con `npm ci`, pruebas y build completados. El build limpio coincide con `dist/`. Vite indica que el JS principal supera 500 kB sin compresión. El JS ronda 365 kB con gzip |
| Servidor incluido | HTML y manifiesto idénticos a los archivos del build. Service worker servido con MIME JavaScript |
| Alojamiento estático | Arranque en Chrome bajo un subdirectorio con rutas relativas |
| Offline | Tras detener el servidor, Chrome recargó la PWA y Continuar recuperó la partida dentro del taller |
| Escritorio | Electron 35.7.5 se instaló. El lanzamiento no pudo inicializar la plataforma gráfica por falta de DISPLAY/X11 y acceso al bus. No se verificaron paquetes nativos |

## Recorridos ejecutados en Chrome

1. **Expedición y recuperación.** Masía → selección de Laia → retirada de una venda → recarga → gasolinera → taller → disparo, saqueo de dos bidones y salida → uso de un bidón en la radio → retorno a la masía → depósito de dos suministros → huerto nivel 1 → guardado → recarga → comprobación del huerto, el depósito y el objetivo activo.
2. **Final de capítulo.** Continuación hasta el refugio forestal, decisión de emitir y comprobación del desenlace en el diario de la compilación final tras recargar. El desenlace de cortar la señal se ejecutó en pruebas de lógica.
3. **Supervivencia y vehículo.** Nueva partida libre, carga de un cartucho en el maletero, entrada al coche, desplazamiento y giro, consumo de combustible, daño por colisión, descenso y viaje a pie al taller. Se guardó en el interior.
4. **Controles y preferencias.** Menú, selección de modo y dificultad, teclas de movimiento y acción, cuaderno, compra de mejora, pausa y persistencia de silencio verificados durante las sesiones.

La comprobación de escritorio web usó Chrome con el renderizador Canvas en un viewport de 1363 × 936. Las capturas proceden de esas sesiones. Se verificó respuesta de juego durante las expediciones y después de recargar. No se realizó una prueba prolongada con perfilador, una medición de FPS, una sesión en WebGL ni una prueba física en iOS o Android.

## Estado histórico de los sistemas en 0.12.0

### Estado de sistemas · 0.12.0

| Estado | Funcionalidades |
| --- | --- |
| **Implementado y verificado por pruebas** | Actos I y II, cuatro interiores, ramas y guardado del contacto, combate, mochila, expediciones, comunidad, vehículo, PWA y recuperación de guardados v2 |
| **Implementado, pendiente de validación física** | Controles táctiles, empaquetado nativo, sonido en altavoces, partida prolongada en Pesadilla |
| **Parcialmente implementado** | Valle compacto, comunidad con relaciones básicas, asedios resueltos sin escena táctica, arte estilizado y procedimental |
| **No implementado** | Actos III a V, instalación de investigación, desafíos separados, relaciones complejas, daño por zonas del cuerpo y otros vehículos |

La tabla siguiente conserva el registro de aceptación de 0.11.0.

| Estado | Funcionalidades |
| --- | --- |
| **Implementado y verificado** | Bucle de expedición, tres interiores, combate, mochila y saqueo parcial, depósitos, cambio de personaje, guardados y migración, campaña del acto I, modo libre, vehículo y PWA offline. La resolución de asedios y el desenlace alternativo tienen pruebas automatizadas |
| **Implementado, pendiente de validación** | Controles táctiles en dispositivos físicos, empaquetado nativo, prueba de sonido por escucha en hardware real, partida prolongada de dificultad Pesadilla |
| **Parcialmente implementado** | El mapa es un valle compacto con distritos y tres interiores. Los asedios aplican pérdidas persistentes según las defensas, sin combate de defensa en una escena propia. La comunidad tiene moral, especializaciones y reclutamiento básico. El arte y las animaciones son estilizados y procedimentales |
| **No implementado** | Actos II a V, instalación de investigación jugable, desafíos independientes, relaciones complejas entre personajes, daño por partes del cuerpo y vehículos adicionales |

Las pruebas de lógica incluyen navegación alrededor de obstáculos, prohibición de mordidas a través de paredes, munición por superviviente, migración, recuperación del guardado anterior, evacuación, muerte permanente, gastos de instalación, combustible, colisión y conservación de carga. El objetivo de calidad 9/10 queda sin evaluar externamente.
