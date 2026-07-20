# N1.M5.T2 — La terminal: hablar con el sistema sin intermediarios

*Construido bajo DOC-12 v1.0.0. Investigación pedagógica: `docs/investigacion/n1-m5-t2-terminal.md`. Este laboratorio, junto con M5.T1, es el único prerrequisito de fluencia de terminal que la Academia exige — ningún laboratorio DOC-12 futuro (Git, venvs, Docker, SSH...) vuelve a explicar qué es el prompt, cómo cambiar de directorio o cómo ejecutar un comando básico.*

**La gran pregunta de este laboratorio:** si la interfaz gráfica desapareciera mañana, ¿qué parte de tu trabajo seguirías pudiendo hacer — y qué te dice eso de dónde vive realmente tu competencia?

**Entorno objetivo:** terminal local — Windows (PowerShell), macOS o Linux (bash/zsh), con las diferencias de comandos marcadas explícitamente donde existan.

**Fluencia de terminal asumida:** M5.T1 completo — Python instalado, una terminal abierta al menos una vez con éxito. Este laboratorio no repite esa instalación; parte de ahí.

**Prerrequisitos técnicos:** los de M5.T1 (Python instalado y verificado).

**Prerrequisitos conceptuales:** N1.M5.T1.

**Duración estimada — desglosada:** contexto y explicación conceptual (~10 min) + ejecución guiada de navegación y manipulación (~20 min, con práctica repetida deliberada) + error inducido en vivo (~10 min) + mini laboratorio independiente construyendo tu propia estructura de carpetas (~15 min) + desafío (~10-15 min) + evaluación y cierre (~10 min) → **total realista: 75-90 min**, con margen para que la práctica repetida realmente instale el hábito, no solo lo demuestre una vez.

**Nivel de dificultad:** introductorio en sintaxis, pero exige repetición real hasta perder el miedo — la dificultad genuina de este laboratorio es la incomodidad inicial de operar sin clics ni iconos, no la complejidad de los comandos en sí.

**Fuera de alcance de este laboratorio (y por qué):** Git, entornos virtuales, gestión de paquetes. Este laboratorio construye, deliberadamente, una sola competencia — moverte y operar con soltura en una terminal — sin mezclarla con ninguna herramienta que la use después. Mezclar objetivos aquí forzaría a aprender dos cosas nuevas a la vez, justo lo que DOC-03 (P9/PED-10) identifica como perjudicial para la carga cognitiva.

**Conexión con el laboratorio anterior y el siguiente:** M5.T1 te dejó con Python instalado y una terminal que respondió una vez; este laboratorio te deja moviéndote en ella con soltura real. Deja abierta la pregunta que M1.T9 (entornos virtuales) y M4 (Git) resuelven después: ya sabes moverte — ¿cómo organizas proyectos reales y colaboras en ellos?

---

## 1. Objetivo

Al terminar este laboratorio vas a poder: abrir una terminal y reconocer cada parte del prompt; saber en todo momento en qué directorio estás parado; navegar entre carpetas con confianza; listar, crear y eliminar directorios; ejecutar un programa Python propio desde cualquier ubicación; e interpretar, sin pánico, los mensajes de error más comunes de navegación.

## 2. Contexto

En M5.T1 abriste una terminal por primera vez para verificar una instalación y ejecutar un programa — pero probablemente lo hiciste con ayuda de tu editor, sin realmente moverte por tu cuenta. Este laboratorio existe para lo que viene después: cualquier herramienta profesional real —Git, Docker, servidores, bases de datos, y prácticamente todo lo que vas a tocar de aquí en adelante en esta Academia— asume que ya sabes moverte por un sistema de archivos desde la terminal, sin depender de un explorador gráfico. No te lo va a volver a explicar. Este es el único momento en que se explica a fondo.

La interfaz gráfica que usas todos los días —hacer doble clic en carpetas, arrastrar archivos— es, en realidad, una capa construida encima de un sistema mucho más antiguo y mucho más directo: un conjunto de comandos de texto que le piden al sistema operativo, sin intermediarios, que haga exactamente lo que le pides. Los servidores que vas a usar en el futuro, las máquinas virtuales, los contenedores — casi ninguno de ellos tiene pantalla ni mouse. Todos tienen terminal. La idea que hace posible todo esto viene de los años 70 (Unix): programas pequeños, que hacen una sola cosa bien, y que se combinan entre sí — una idea que, medio siglo después, sigue siendo la base de cómo se opera casi cualquier sistema real.

## 3. Requisitos

- Python instalado y verificado (M5.T1).
- Una terminal que puedas abrir sin ayuda (repite el Paso de apertura de M5.T1 si no lo recuerdas).
- 75-90 minutos sin prisa.

☐ **Checkpoint 0 —** puedes abrir tu terminal por tu cuenta, sin ayuda del editor.

## 4. Explicación conceptual

Cuando abres tu terminal, ves algo como esto (el formato exacto varía según tu sistema):

```
C:\Users\tu-usuario>
```

o

```
tu-usuario@tu-computadora ~ %
```

Eso es el **prompt** — literalmente, una invitación a hablar. No es decoración: contiene información real. Te dice, como mínimo, quién eres para el sistema y **dónde estás parado ahora mismo** — el **directorio actual** (o *directorio de trabajo*), el lugar exacto del sistema de archivos donde cualquier comando que escribas va a operar por defecto.

Esta es la idea que más se pierde al empezar, y la que vas a instalar como reflejo en este laboratorio: **en todo momento, estás "parado" en algún lugar concreto de tu sistema de archivos — exactamente igual que en el explorador gráfico, cuando haces doble clic y "entras" a una carpeta**. La diferencia es que la terminal no te lo dibuja: tienes que preguntarlo tú mismo. El comando para preguntarlo — `pwd` en macOS/Linux, o simplemente `cd` sin nada más en Windows — va a ser, a partir de hoy, tu reflejo antes de cualquier otra cosa cuando algo no salga como esperabas.

**Modelo mental de este laboratorio, en una frase: la terminal no hace nada mágico — cada comando es una pregunta o una orden concreta sobre el lugar exacto donde estás parado, y perder de vista ese lugar es la causa de casi todos los errores de un principiante.**

## 5. Ejecución paso a paso

**Paso 1 — Confirma dónde estás parado, ahora mismo, antes de moverte**

Abre tu terminal y ejecuta:

- **macOS/Linux:** `pwd`
- **Windows:** `cd` (sin nada después — a diferencia de bash, en Windows esto no te mueve, solo te muestra dónde estás)

Vas a ver una ruta completa — algo como `/Users/tu-usuario` o `C:\Users\tu-usuario`. Ese es tu punto de partida. Acostúmbrate a ejecutar esto cada vez que te sientas perdido — vas a hacerlo muchísimas veces en este laboratorio, a propósito.

**Paso 2 — Mira qué hay en tu directorio actual**

```
ls
```

(en Windows PowerShell, `ls` también funciona; el comando nativo equivalente es `dir`, y ambos hacen lo mismo aquí)

Vas a ver una lista de archivos y carpetas — exactamente lo mismo que verías si abrieras esa misma ubicación con el explorador gráfico. Es la misma información, presentada de otra forma.

**Paso 3 — Crea una estructura de carpetas y navega dentro de ella**

```
mkdir laboratorio-terminal
cd laboratorio-terminal
mkdir proyecto-a proyecto-b
cd proyecto-a
```

Después de cada comando, confirma con `pwd`/`cd` (según tu sistema) que tu ubicación cambió como esperabas. `mkdir` crea una carpeta; `cd nombre` te mueve dentro de ella.

💡 `cd ..` te mueve un nivel hacia arriba (al directorio que contiene al actual) — pruébalo ahora y confirma con `pwd`/`cd` a dónde llegaste.

☐ **Checkpoint 1 —** creaste `laboratorio-terminal/proyecto-a` y `laboratorio-terminal/proyecto-b`, y confirmaste tu ubicación en cada paso.

**Paso 4 — Ejecuta un programa Python desde una ubicación distinta a donde lo creaste**

Dentro de `proyecto-a`, crea un archivo `saludo.py` con:

```python
print("Puedo ejecutar esto desde cualquier lugar de mi sistema.")
```

Sal de la carpeta (`cd ..`) y, desde `laboratorio-terminal`, ejecútalo indicando la ruta:

```
python proyecto-a/saludo.py
```

(en Windows, si la barra no funciona, prueba `python proyecto-a\saludo.py`)

Esto demuestra algo importante: no necesitas estar *dentro* de una carpeta para ejecutar lo que hay en ella — solo necesitas decirle a la terminal dónde encontrarlo, en relación a dónde estás parado.

☐ **Checkpoint 2 —** ejecutaste `saludo.py` desde fuera de su propia carpeta, indicando la ruta relativa.

**Paso 5 — Elimina lo que ya no necesitas**

```
cd proyecto-b
```

⚠️ El siguiente comando borra la carpeta de forma permanente, sin pasar por una papelera de reciclaje — a diferencia de arrastrar una carpeta a la papelera en tu explorador gráfico, esto no se puede deshacer con un clic. Confirma que estás en el lugar correcto (`pwd`/`cd`) antes de ejecutarlo:

```
cd ..
rmdir proyecto-b
```

## 5bis. Ahora vas a provocar un error real, a propósito

Estando en `laboratorio-terminal`, ejecuta:

```
cd proyecto-que-no-existe
```

⚠️ Va a fallar. Vas a ver algo parecido a `cd: no such file or directory: proyecto-que-no-existe` (macOS/Linux) o `El sistema no puede encontrar la ruta especificada` (Windows). Antes de seguir: ¿por qué crees que apareció, si `proyecto-a` sí existía hace un momento?

## 6. Comprensión

- ¿Por qué `pwd`/`cd` se convirtió en tu primer reflejo de este laboratorio, antes que cualquier otro comando?
- ¿Qué diferencia hay entre ejecutar `python saludo.py` estando dentro de `proyecto-a`, y ejecutar `python proyecto-a/saludo.py` estando en `laboratorio-terminal`? ¿Por qué ambos funcionan?
- Si ejecutas `mkdir proyecto-a` de nuevo, ahora que ya existe, ¿qué crees que va a pasar? Pruébalo y compara tu predicción con el resultado real.

## 7. Puntos de verificación (resumen)

☐ Confirmas tu ubicación con `pwd`/`cd` antes de actuar (§5, Paso 1) · ☐ Estructura de carpetas creada y navegada (§5, Paso 3) · ☐ Programa ejecutado desde fuera de su carpeta, con ruta relativa (§5, Paso 4) · ☐ Carpeta eliminada de forma consciente, con ubicación confirmada antes (§5, Paso 5) · ☐ Error de ruta inexistente provocado y presenciado en vivo (§5bis).

## 8. Diagnóstico de errores

**Categorías revisadas para este laboratorio:** comando no encontrado/PATH (no aplica aquí — ya resuelto en M5.T1) · permisos (aplica — carpetas protegidas) · diferencias entre sistemas operativos (aplica de forma central — `ls`/`dir`, barras de ruta) · estado previo inconsistente (aplica — carpetas ya existentes, ubicación olvidada) · interferencia de software externo (aplica — ver OneDrive/sincronización en la nube).

| Error | Por qué aparece | Cómo se diagnostica | Cómo se comprueba la hipótesis | Solución | Cómo se previene |
|---|---|---|---|---|---|
| `No such file or directory` / `El sistema no puede encontrar la ruta especificada` al usar `cd` | Escribiste mal el nombre, o ese directorio no existe desde donde estás parado (el que acabas de provocar en §5bis) | Sospecha: "no estoy donde creo, o el nombre está mal escrito" | Ejecuta `ls`/`dir` para ver la lista real de lo que existe exactamente donde estás — compárala letra por letra con lo que escribiste | Corrige el nombre, o navega primero al lugar correcto con `pwd`/`cd` para reorientarte | Ejecutar `ls`/`dir` antes de un `cd` cuando no estés 100% seguro del nombre exacto |
| `rmdir` falla porque la carpeta no está vacía | `rmdir` (a diferencia de borrar desde el explorador gráfico) se niega, por diseño, a borrar una carpeta que todavía tiene contenido dentro | El mensaje de error suele decirlo explícitamente (`Directory not empty` o similar) | Ejecuta `ls`/`dir` dentro de la carpeta que intentas borrar para confirmar si de verdad tiene contenido | Vacía la carpeta primero, o usa el comando de borrado recursivo de tu sistema con extremo cuidado (fuera de alcance de este laboratorio introductorio) | Revisar el contenido antes de intentar borrar cualquier carpeta que no creaste tú mismo en esta sesión |
| `git status` (o cualquier comando futuro sobre archivos) muestra cambios que tú no hiciste, en una carpeta sincronizada por OneDrive | OneDrive puede tocar metadatos de archivos durante su sincronización en segundo plano | Sospecha si los cambios "fantasma" coinciden en el tiempo con el ícono de sincronización de OneDrive activo | Pausa la sincronización un momento y repite el comando — si el problema desaparece, la hipótesis queda confirmada | Trabaja tus carpetas de proyectos fuera de la carpeta sincronizada por OneDrive | Elegir, desde este mismo laboratorio en adelante, una ubicación de trabajo que no dependa de sincronización en la nube genérica |

## 9. Mini laboratorio

Sin repetir literalmente los comandos anteriores: crea una estructura nueva de al menos tres niveles de profundidad (una carpeta, dentro otra, dentro otra), navega hasta el fondo sin perderte, coloca ahí un programa Python que imprima en qué ruta se encuentra usando el módulo `os` (investígalo), ejecútalo, y luego regresa hasta el punto de partida usando `cd ..` las veces que haga falta — confirmando tu ubicación en cada paso.

## 10. Desafío

Sin usar el explorador gráfico en ningún momento: crea, desde la terminal, la estructura completa de un proyecto ficticio con al menos cuatro carpetas y dos archivos Python en ubicaciones distintas, ejecuta ambos programas desde una tercera ubicación usando rutas relativas, y luego elimina toda la estructura sin dejar nada atrás. Anota, en tus propias palabras, en qué momento te sentiste menos seguro y por qué.

## 11. Buenas prácticas profesionales

- Confirma tu ubicación (`pwd`/`cd`) antes de cualquier comando destructivo (`rmdir` y equivalentes) — sin excepción, siempre, incluso cuando estés seguro.
- Nombra tus carpetas y archivos sin espacios ni caracteres especiales (`mi-proyecto`, no `mi proyecto` ni `mi_proyecto!`) — los espacios en rutas son una fuente constante de errores confusos en la terminal.
- No trabajes tus proyectos de código dentro de carpetas sincronizadas automáticamente por servicios como OneDrive o Dropbox si puedes evitarlo — la sincronización en segundo plano puede interferir de formas difíciles de diagnosticar (ver §8).

## 12. Recursos recomendados

| | Título | Autor/canal | Idioma | Duración | Nivel | Motivo |
|---|---|---|---|---|---|---|
| 🟢 Antes | "Course Overview + the Shell" | MIT / missing.csail.mit.edu | EN | ~50 min | Introductorio | Misma lección recomendada en M5.T1; en este laboratorio cobra sentido completo porque ya vas a estar ejecutando los comandos que describe, no solo leyéndolos | [missing.csail.mit.edu/2020/course-shell/](https://missing.csail.mit.edu/2020/course-shell/) |
| 🔵 Durante | The Unix Shell — "Introducing the Shell" | The Carpentries / swcarpentry.github.io | EN | ~40 min | Introductorio | Organización reconocida por enseñar shell a principiantes reales; buena fuente de práctica adicional con el mismo enfoque que este laboratorio | [swcarpentry.github.io/shell-novice/](https://swcarpentry.github.io/shell-novice/) |
| 🟣 Después | Using Python on Unix/Windows | Python Software Foundation / docs.python.org | EN | ~15 min lectura | Introductorio | Documentación oficial sobre cómo Python y la terminal interactúan en cada sistema operativo | [docs.python.org/3/using/](https://docs.python.org/3/using/) |

## 13. Evaluación

**Cierre — lo esencial en una frase:** en todo momento estás parado en un lugar concreto de tu sistema de archivos, exactamente igual que en el explorador gráfico — la terminal solo deja de dibujártelo, y `pwd`/`cd` es siempre la forma de preguntarlo.

- **Explicar:** en tus propias palabras, ¿qué es el directorio actual, y por qué perderlo de vista es la causa más común de error para un principiante en terminal?
- **Predecir:** si ejecutas `mkdir` con el nombre de una carpeta que ya existe, ¿qué esperas que pase? ¿Y si ejecutas `rmdir` sobre una carpeta con archivos dentro?
- **Detectar y corregir errores:** se te entrega una sesión de terminal donde `cd proyectos` falla con "no existe". Diagnostica la causa más probable, comprueba tu hipótesis con el comando adecuado, y corrígela.
- **Modificar / repetir desde cero, sin guía:** cierra esta guía y, de memoria, crea una estructura de carpetas nueva, coloca un programa Python dentro, y ejecútalo desde otra ubicación usando una ruta relativa.
- **Aplicar a un contexto nuevo:** te conectas (en el futuro, no hoy) a un servidor remoto sin interfaz gráfica de ningún tipo. ¿Qué de lo que aprendiste hoy sigue siendo exactamente igual de válido ahí?
- **Reflexión de proceso (no de contenido):** ¿en qué momento de este laboratorio te sentiste más perdido, literalmente? ¿Qué hiciste (o deberías haber hecho) para reorientarte?
