# ZOMBIE-404 · Tierra Muerta

**Versión 0.19.0 · Luces en la niebla**. Supervivencia isométrica en un valle ficticio del Vallès Oriental, otoño de 1998.

La historia de **Los últimos días** empieza en la masía de Can Lluc. Los actos I–III siguen una señal, conectan a la comunidad con otros supervivientes y descubren el origen de las mutaciones. En el IV, una decisión de evacuación define quién recibe ayuda primero. En el V, el grupo decide si alertar al exterior o aislar el valle. Los finales dependen de tus alianzas, decisiones y supervivientes aún con vida. También puedes empezar en **Supervivencia libre**.

En la v0.18.0, los asedios que te sorprenden en Can Lluc se convierten en combates: las mejoras defensivas reducen el tamaño de la horda y derrotarla evita pérdidas y recupera suministros. Las decisiones de advertir a otros refugios y acoger a Núria ayudan en las defensas posteriores. Cada seis bajas obtienes hasta dos cartuchos y cada doce una venda. En móvil, el HUD y los controles se adaptan a vertical y horizontal.

En la v0.19.0, la linterna y los faros iluminan el camino hasta chocar con un obstáculo. De noche y en interiores, la linterna facilita que los infectados te vean. El mapa marca cuatro hallazgos donde puedes arriesgarte a hacer ruido para llevarte más suministros. Los brutos avisan antes de cargar: puedes apartarte o interrumpirlos con un impacto. En **Imagen y efectos**, elige iluminación Cinematográfica, Suave o Desactivada.

## Lanzadores para Windows y Linux

El ZIP incluye `JUGAR-WINDOWS.bat` y `JUGAR-LINUX.sh`. Descomprime la carpeta completa y asegúrate de tener **Node.js 22 o superior** instalado. El juego se sirve desde `dist/` y no necesita descargar paquetes de npm.

- **Windows:** haz doble clic en `JUGAR-WINDOWS.bat`. Se abrirá el navegador y una ventana de servidor; mantenla abierta mientras juegas. Cierra esa ventana para detenerlo.
- **Linux Mint:** ejecuta `JUGAR-LINUX.sh`. Si el gestor de archivos no lo inicia al hacer doble clic, abre una terminal en la carpeta y ejecuta `./JUGAR-LINUX.sh` (o `bash JUGAR-LINUX.sh`). El lanzador abre el navegador y espera en la terminal; pulsa Enter para detener el servidor.

Ambos lanzadores usan `http://127.0.0.1:4040/` y guardan la partida en el almacenamiento del navegador. Si el puerto ya está ocupado, cierra el otro servidor local antes de volver a abrir el juego.

## Inicio manual

Si prefieres iniciarlo desde una terminal, abre la carpeta `ZOMBIE-404` y usa Node.js 22 o superior.

```sh
node scripts/play.mjs
```

Abre [http://127.0.0.1:4040/](http://127.0.0.1:4040/). La compilación incluida en `dist/` funciona con el servidor local sin descargar dependencias de npm. Para usar otro puerto, ejecuta, por ejemplo, `node scripts/play.mjs 4045`. Mantén el mismo puerto y navegador para continuar una partida anterior.

En un alojamiento estático puedes servir el contenido completo de `dist/`, incluido `sw.js`, con HTTPS. Para GitHub Pages, configura el origen de publicación para que los archivos del build queden en la raíz del sitio del proyecto. La compilación usa rutas relativas y se ha probado bajo un subdirectorio. Para jugar sin conexión, abre la PWA una primera vez con el servidor disponible para que termine de cargar y almacenar sus archivos.

## Novedades de la v0.16.0

El cruce de Can Lluc queda libre y los muros marcan los bloqueos del terreno. Cada capítulo abre con una frase de los supervivientes y el pulso grave aumenta al acercarse un infectado. En **Imagen y efectos**, desde el menú o la pausa, puedes ajustar color, brillo, CRT, grano, viñeta, salpicaduras y movimiento.

Empiezas con pistola y una carga de área. La escopeta se abre al llegar a la segunda etapa del Acto I o neutralizar cuatro infectados. La carabina se abre al completar el Acto II o neutralizar diez. Las armas comparten cartuchos y la escopeta consume dos por disparo. Las cargas se reponen con hitos de campaña y por cada ocho bajas, hasta el límite de la partida. Un estallido atrae a los infectados a su posición.

Historia ofrece más recursos y retirada tras una herida crítica. Supervivencia mantiene la muerte permanente. Pesadilla reduce los cartuchos iniciales y aumenta detección, velocidad, daño, patrullas y presión de asedio.

## Controles

| Tecla | Acción |
| --- | --- |
| WASD o flechas | Moverse en las direcciones de la pantalla |
| L o botón Linterna | Encender o apagar la linterna |
| Mayús | Correr. Consume energía y hace ruido |
| Espacio | Golpear cuerpo a cuerpo |
| G o botón táctil Disparar | Disparo asistido al infectado visible más próximo |
| Clic en la escena | Apuntar y disparar en la dirección del cursor |
| T | Recargar con los cartuchos de la mochila |
| E | Entrar, saquear, salir o interactuar con el objetivo |
| F | Usar una venda. Cura salud, corta la hemorragia y reduce la infección |
| Tab | Abrir el cuaderno de campo |
| Q | Cambiar de superviviente en la masía |
| B / R | Abrir el refugio / depositar provisiones en la masía |
| V | Subir al coche o bajar cuando esté parado |
| P / Esc | Guardar / pausar |
| W, S, A y D en el coche | Acelerar, frenar o retroceder, girar a la izquierda y a la derecha |
| C | Cambiar entre armas desbloqueadas |
| X | Lanzar una carga de área contra un infectado visible. La onda puede herirte si estás cerca |

El cuaderno reúne mochila, comunidad, instalaciones, coche, mapa y diario. Los dispositivos con puntero táctil muestran botones de movimiento, combate e interacción. La pausa también permite ajustar el volumen o silenciar el juego.

## Primera expedición

1. En la masía, abre el cuaderno con **Tab**. En Comunidad puedes escoger superviviente. Usa **T** para cargar el arma si la persona elegida lleva el cargador vacío.
2. Busca la marca ámbar de la gasolinera y pulsa **E** para recuperar el transmisor. El mapa muestra tus coordenadas y la situación de las entradas.
3. Entra en el taller del polígono. Usa **E** cerca del contenedor iluminado con bidones, vuelve al umbral y sal. Pulsa **E** junto al portón otra vez para usar un bidón en el transmisor.
4. Regresa a la masía con las provisiones sobrantes. Pulsa **R** para depositarlas y usa el apartado Refugio para elegir una mejora.
5. En el refugio forestal, pulsa **E** para decidir el destino de la transmisión.
6. Tras el desenlace, localiza la central telefónica señalada en el mapa. Entra, recupera el registro de llamadas y elige si invitas a Núria, la radiooperadora del grupo, a Can Lluc o si intercambias rutas sin revelar la masía. La decisión se guarda en el diario; si la invitas, Núria pasa a formar parte de la comunidad.
7. Tras resolver el contacto, sigue las coordenadas hasta el centro de investigación. Recupera el protocolo y las muestras. Cuando hayas reunido ambas pruebas, decide si difundir la advertencia o reservarlas para estudiar una respuesta.
8. En el perímetro del repetidor, recupera el mapa de cables y los fusibles. Elige si abrir la ruta para la estación o asegurar primero Can Lluc.
9. En el puesto de evacuación, recupera el manifiesto y las baterías. Decide si emitir una última alerta o aislar el valle; las vidas y alianzas conservadas cambian el desenlace.

Aina obtiene más salud al vendarse. Pau saca más partido a las reparaciones. Laia tiene una mochila más grande. El depósito entrega comida, vendas, chatarra y bidones al almacén de la comunidad. Los cartuchos se quedan en la mochila y cada superviviente conserva su cargador. Las provisiones se pueden retirar de una en una en la masía. Un disparo o un coche en marcha pueden atraer infectados de otras calles.

En Historia, una herida crítica provoca una retirada. En Supervivencia y Pesadilla, la muerte del personaje se guarda y pasa el control al siguiente miembro vivo. Al amanecer se consumen provisiones. Cada tercer día se resuelve un asedio según las defensas de la masía. En el modo libre aparecen nuevas patrullas, mientras que el botín de los contenedores sigue siendo finito.

## Correcciones de la v0.16.1

Las casas ahora tienen zócalos visibles que llegan al plano del terreno. Se añadieron sombras de apoyo a los muros y a las instalaciones de huerto y enfermería para evitar que parezcan suspendidos. La campaña, los controles y el formato de los guardados no cambian.

## Código fuente y escritorio

```sh
npm ci
npm run check
npm run dev
```

`npm run check` ejecuta las pruebas y reconstruye `dist/`. `npm run desktop` abre esa compilación en Electron en un equipo con sesión gráfica. Para generar paquetes, ejecuta `npm run desktop:dist -- --win` en Windows o `npm run desktop:dist -- --linux` en Linux. La configuración incluye NSIS y portátil en Windows, y AppImage y DEB en Linux. Esta entrega contiene la configuración y la compilación web. El inicio gráfico de Electron y los instaladores quedan pendientes de validación en sus sistemas de destino.

## Documentación

- [Alcance y pruebas](docs/QA.md)
- [Entrega 0.18.0](docs/V0.18.md)
- [Arquitectura y guardados](docs/ARQUITECTURA.md)
- [Campaña y contenido pendiente](docs/CAMPANA.md)
- [Arte y créditos](docs/ARTE.md)
- [Cambios y correcciones](CHANGELOG.md)
- [Entrega 0.13.0](docs/V0.13.md)
- [Entrega 0.14.0](docs/V0.14.md)
- [Lanzadores 0.14.1](docs/V0.14.1.md)
- [Corrección visual 0.16.1](docs/V0.16.1.md)
- [Previsualización de edificios y apoyos 0.16.1](capturas/v0.16.1/edificios-y-apoyos.png)
- [Cambios y comprobaciones 0.16.0](docs/V0.16.md)
- [Vistas del banco de render 0.16.0](capturas/v0.16/)
- [Migración visual 0.15.0](docs/V0.15.md)
- [Vistas del banco de render 0.15.0](capturas/v0.15/)
- [Capturas históricas de Chrome](capturas/)
