# Registro de cambios

## 0.18.0 · La defensa de Can Lluc

- Los asedios que alcanzan al jugador en la masía pasan a ser oleadas combatibles; derrotarlas conserva provisiones y aporta comida, materiales y moral.
- Las barricadas y el puesto de vigilancia reducen el tamaño del asalto; fallar la defensa o estar fuera de Can Lluc mantiene el coste de recursos.
- La presión de asedio queda limitada y las patrullas aumentan gradualmente en partidas largas hasta un máximo controlado.
- La comunidad entrega dos cartuchos cada seis bajas y una venda adicional cada doce, si queda espacio en la mochila.
- La advertencia del Acto III y Núria si sigue viva aportan apoyo real frente a asedios posteriores. Las oleadas se conservan al guardar y continuar.
- Interfaz táctil ajustada para móvil en vertical y horizontal, con zonas táctiles mínimas, márgenes seguros y HUD más legible.
- Verificación: 76 pruebas automatizadas y build de producción aprobados. El navegador headless no pudo abrirse por la restricción de sockets del entorno; falta la comprobación en un móvil físico.

## 0.17.0 · Ecos de Can Lluc

- Edificios con base de contacto, profundidad según el cimiento y colisión en el terreno. Los accesos conservan sus coordenadas.
- Las decisiones se pueden confirmar al recuperar la última prueba o reabrir desde el interior. Las pruebas de campaña se anotan en el cuaderno aunque la mochila esté llena.
- Clic para apuntar, disparo asistido en teclado y móvil, escopeta con dispersión y caída de daño, impactos que frenan a los infectados y cargas con daño de proximidad.
- Menor visibilidad nocturna, chilladores que alertan al grupo, mensajes de ambientación al descubrir interiores y pantallas de pausa, derrota y cierre con títulos propios.
- Control táctil para correr y controles adaptados a la pantalla en vertical y horizontal.

## 0.16.1 · Cimientos firmes

- Se añadieron zócalos de piedra bajo las casas para cerrar la separación visual con el suelo.
- Se añadieron sombras de contacto a los muros de piedra, el huerto y la enfermería.
- Se revisaron los demás elementos del atlas: árboles, vehículos, contenedores, instalaciones y atrezo ya cuentan con base, sombra o ambas.
- Sin cambios en la campaña, los controles, las colisiones ni los guardados.


## 0.16.0 · Noche en Can Lluc

- Masía y edificios desplazados al margen de los accesos. Muros de piedra sobre obstáculos, vegetación espaciada y atrezo en arcenes.
- Pistola, escopeta, carabina y cargas de área con recompensas, ruido espacial y salpicaduras opcionales.
- Chilladores, acechadores, patrullas y asedios ajustados por dificultad.
- Filtros de imagen, brillo, ajustes persistentes de movimiento y controles táctiles de arsenal.
- Cartelas de los cinco actos, disparos con sonidos propios y pulso de sintetizador adaptado al peligro.

## 0.15.0 · Pixel art isométrico de 16 bits

- Atlas de suelo, vegetación, arquitectura, mobiliario, botín y vehículos para el valle y los siete interiores.
- Nuevos sprites para los cuatro supervivientes y las tres clases de infectados. El coche tiene ocho orientaciones gráficas.
- Orden de dibujo por profundidad, transparencia de edificios que ocultan al personaje, lluvia en píxeles y marcadores de objetivos.
- Interfaz con marcos y contraste acordes al arte del valle y Can Lluc como fondo del menú.
- Se conservan los guardados v2, los cinco actos, los finales, los controles, la PWA y los lanzadores.

## 0.14.1 · Lanzadores Windows y Linux

- Se añaden lanzadores de doble clic para Windows y Linux, con comprobación de Node.js 22, arranque del servidor local y apertura del navegador.
- El lanzador Linux mantiene abierta la terminal mientras el servidor está activo; en Windows, el servidor permanece en su ventana dedicada.
- Se actualizan las instrucciones de distribución del ZIP. No se generan instaladores nativos en esta entrega.

## 0.14.0 · El último amanecer

- Se completó la campaña con los actos IV y V: perímetro del repetidor, evacuación y decisión final.
- Dos nuevos interiores con botín y progreso persistente; cada capítulo requiere recuperar sus pruebas antes de abrir la decisión.
- La prioridad de evacuación refleja el contacto del Acto II. El final combina alianzas, decisión del Acto III, elección del Acto IV y supervivientes vivos.
- Se conservan guardados v2; los actos IV y V se desbloquean al cargar una partida que ya completó el acto anterior.
- Se añadieron finales diferenciados y persistentes en el diario, tests de ramas y datos de campaña, además de documentación actualizada.

## 0.13.0 · La enfermedad

- Se añadió el Acto III con un centro de investigación explorable, una paleta y un edificio propios.
- El jugador debe recuperar el protocolo y las muestras; ambos hallazgos se guardan por separado y habilitan la decisión final del acto.
- Difundir la advertencia eleva la moral; guardar las pruebas aporta medicinas para investigar una respuesta. Ambas consecuencias quedan en el diario y la partida.
- Se actualizaron la guía, la campaña, la hoja de ruta y las expectativas de cobertura existentes.

## 0.12.0 · Los supervivientes

- Se añadió el Acto II: una central telefónica explorable, con interior, botín persistente y una llamada que conecta Can Lluc con el grupo de Núria.
- Se añadieron dos decisiones persistentes: ofrecer refugio incorpora a Núria y aporta comida; mantener la distancia aporta materiales y reduce la moral.
- Los guardados v2 del Acto I se completan automáticamente con el nuevo estado de campaña; no se cambia la clave ni el esquema de guardado.
- El mapa, los objetivos, el diario y la comunidad reflejan el progreso y la decisión del nuevo acto.
- Se añadieron pruebas de migración, acceso al objetivo, saqueo y persistencia de ambas ramas.

## 0.11.0 · El silencio

- Se corrigieron tres errores de tipos que impedían compilar la entrega anterior.
- Se resolvió el conflicto de interacción que hacía entrar al taller antes de poder completar el objetivo de combustible. El objetivo ahora consume un bidón real.
- Se corrigió el reloj que dejaba de avanzar en el navegador de prueba y se sincronizó la pausa del cuaderno con el estado de los diálogos.
- Se corrigieron mordidas a través de esquinas, un punto de aparición exterior dentro de una pared, pérdida de unidades al recoger munición parcial y desajustes entre salud, equipo y mochila.
- Se añadieron ataque cuerpo a cuerpo independiente, cargadores, recarga, ruido, persecución, heridas, infección, dificultades y evacuación en modo Historia.
- Se añadieron coche, nueve instalaciones mejorables, resolución de asedios, patrullas de día y reclutamiento de Mar.
- Se cerró el primer acto con dos resultados persistentes y se añadió Supervivencia libre.
- Se remasterizaron los interiores, se añadieron sprites originales, se mejoró el audio y se creó un cuaderno de campo con inventario, comunidad, refugio, mapa y diario.
- Se incluyeron guardados v2 con recuperación, compilación estática con PWA offline, fuentes locales, servidor de juego local y un lockfile reproducible.

Los archivos `docs/V0.*.md` documentan las entregas anteriores. Sus resultados corresponden a sus respectivas versiones.
