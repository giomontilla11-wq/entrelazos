# ENTRELAZOS · Guardianes de la convivencia

**Prototipo funcional de plataforma transmedia educativa** basado en el anteproyecto «Fortalecimiento de habilidades sociales, a través de la gamificación en estudiantes de grado cuarto de la Institución Educativa INEM de Pasto, sede Agualongo», de Leidy Johanna Zambrano Salazar (Maestría en Educación Virtual, Universidad de Nariño, 2026).

## Contenido

- **Historia y mapa:** Villa Entrepuentes y sus cuatro barrios narrativos.
- **8 misiones interactivas**, dos para cada dimensión del estudio: cooperación; empatía y escucha activa; comunicación asertiva; autocontrol y resolución de conflictos. Cada misión incluye historieta ilustrada, decisiones con retroalimentación, reto colaborativo presencial y orientación para observar conductas.
- **4 microepisodios de radio**, originales, con archivos MP3 y transcripción accesible, que aportan pistas narrativas para la construcción del acuerdo final.
- **8 cartas imprimibles** con desafíos presenciales complementarios, más cinco piezas de un rompecabezas cooperativo.
- **Laboratorio de acuerdos**, donde el grupo puede escribir, imprimir o guardar un compromiso. Su contenido nunca se envía a un servidor.
- **Guía docente**, con secuencia pedagógica de ocho sesiones y acceso a **plantillas imprimibles** de bitácora, matriz de conductas y escala pretest–postest, adaptadas a partir de los anexos del documento.

## Cómo abrir

**Opción sencilla:** descargar o extraer todos los archivos del ZIP a una misma carpeta y abrir `index.html` en Chrome, Edge o Firefox. Los archivos de audio se incluyen en `assets/audio/`; conservar la estructura de carpetas.

**Opción recomendada para publicar / probar en varios equipos:** servir la carpeta con un servidor estático HTTPS (GitHub Pages, Netlify o un servidor de la institución). También es posible probar localmente con `python -m http.server 8000` en la carpeta del proyecto y visitar `http://localhost:8000`.

**GitHub Pages:** subir todo el contenido de la carpeta a la raíz de un repositorio (o a `docs/`) y habilitar GitHub Pages en *Settings → Pages*. No requiere base de datos, instalaciones, claves API ni compilación. El acceso sin conexión se activa tras la primera visita servida por HTTP(S) y la instalación del service worker. Los MP3 se produjeron con voz sintética.

## Consideraciones pedagógicas

La interfaz de estudiantes no recopila nombres ni hace login. La marca de avance en cada misión se almacena en `sessionStorage`, **solo en el navegador y durante la sesión**; puede reiniciarse manualmente. No se almacena ningún dato de evaluación ni se transmite información a servicios externos. El acuerdo redactado se mantiene solo en la memoria de la pestaña hasta que se imprime o se guarda como texto en el dispositivo que lo está usando.

**Las misiones no equivalen a instrumentos de investigación:** pulsar «Ya conversamos» no prueba que una conducta se haya desarrollado. El proyecto propone observación participante y triangulación con la escala pretest–postest, bitácora, matriz de registro, encuesta, grupo focal y entrevista. La participación de menores requiere **autorización institucional, consentimiento informado de acudientes y asentimiento**, de acuerdo con el anteproyecto, y la revisión de instrumentos con el asesor.

Los tiempos por sesión, la metáfora «Villa Entrepuentes», las misiones, los guiones originales de radio, las cartas y la estética visual son **propuestas de diseño desarrolladas para este prototipo**; no se presentan como contenido ya aprobado o validado por la institución.

## Archivos principales

| Archivo | Función |
|---|---|
| `index.html` | Plataforma web principal |
| `styles.css` | Diseño adaptable y estilos de impresión |
| `app.js` | Narrativa, decisiones interactivas y navegación |
| `tarjetas.html` | Ocho cartas para el aula y pistas recortables |
| `instrumentos.html` | Plantillas de observación y valoración para revisión docente |
| `assets/audio/*.mp3` | Cuatro mensajes narrativos originales |
| `assets/illustrations/icon.svg` | Icono propio |
| `manifest.webmanifest`, `sw.js` | Soporte instalable y uso sin conexión después de carga inicial en servidor |

## Alcance y pasos sugeridos antes de la implementación

1. Validar con investigadora, asesor y docente de informática la secuencia de las misiones y su relación con los contenidos concretos de informática de cuarto grado.
2. Revisar con el asesor la equivalencia de instrumentos de investigación y los criterios de puntuación provisionales que presenta el documento.
3. Pilotear con población autorizada la comprensión de consignas, legibilidad, accesibilidad y tiempos.
4. Ajustar textos, representaciones y mecánicas desde los ciclos de planificación, acción, observación y reflexión de IAP.
5. Usar un repositorio institucional aprobado para los registros de investigación; este prototipo no dispone de gestión de datos sensibles ni de usuarios autenticados.

**Créditos de contenidos:** investigación base: Leidy Johanna Zambrano Salazar, Universidad de Nariño (2026). Desarrollo prototípico de narrativa, interfaz, audios sintéticos y recursos de práctica: propuesta didáctica elaborada a partir del documento aportado. No representa un producto institucional autorizado.
