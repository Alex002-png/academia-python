# N1.M5.T1 — El entorno real

*Construido bajo DOC-12 v1.0.0. Investigación pedagógica: `docs/investigacion/n1-m5-t1-entorno-real.md`. Primer laboratorio de entorno real de la Academia — construido antes que M1.T6 (venvs) y M4 (Git), que ya lo declaran como prerrequisito en SYL-N1.*

**La gran pregunta de este laboratorio:** ¿qué es exactamente lo que cambia — y qué es lo que NO cambia — cuando tu código deja de vivir en el navegador?

**Entorno objetivo:** terminal local — Windows, macOS o Linux, con las diferencias de instalación marcadas explícitamente en cada paso.

**Fluencia de terminal asumida:** ninguna todavía — este es, junto con M5.T2, el primer contacto real del estudiante con una terminal fuera del Campus. M5.T2 construye la fluencia de navegación; este laboratorio se limita a instalar y confirmar que el entorno responde.

**Prerrequisitos técnicos:** ninguno — el propósito de este laboratorio es precisamente crearlos.

**Prerrequisitos conceptuales:** N1.M1.T1-T5 (fluidez de Python que ahora se ejecuta en un lugar distinto, no un Python distinto).

**Duración estimada — desglosada:** contexto y explicación conceptual del cambio de modelo mental (~15 min, lectura activa) + instalación guiada con verificación (~20-30 min, variable según el sistema y si ya hay algo instalado) + error inducido en vivo y su diagnóstico (~10 min) + mini laboratorio independiente (~10 min) + desafío (~10 min) + evaluación y cierre (~10 min) → **total realista: 75-90 min.** Es más largo que un laboratorio típico porque incluye una instalación real, con su variabilidad inherente — no es contenido inflado, es tiempo de instalación genuino.

**Nivel de dificultad:** introductorio, pero con fricción real esperada — instalar software en tu propia máquina rara vez sale perfecto a la primera, y eso es parte deliberada de la experiencia, no un defecto del laboratorio.

**Fuera de alcance de este laboratorio (y por qué):** Git, entornos virtuales, gestión de paquetes con pip. Se cubren en M1.T6/T9 y M4, una vez que el entorno base ya existe y el estudiante ya navega con soltura (M5.T2). Mezclarlos aquí obligaría a aprender varias cosas nuevas a la vez.

**Conexión con el laboratorio anterior y el siguiente:** el capstone de N0/M1-M3 dejó al estudiante dominando Python dentro de Pyodide, sin nunca haber cuestionado dónde "vive" ese código; este laboratorio abre esa pregunta y la resuelve. Deja abierta la pregunta que M5.T2 resuelve a continuación: ya tienes el entorno — ¿cómo te mueves en él?

---

## 1. Objetivo

Al terminar este laboratorio vas a poder: explicar con precisión qué era el Campus y qué garantizaba mientras aprendías; instalar Python y un editor de código en tu propio sistema; ejecutar un programa propio fuera del navegador, por primera vez; y explicar exactamente qué cambió y qué no cambió al hacerlo.

## 2. Contexto

Vas a pasar los últimos meses escribiendo Python dentro del Campus, en tu navegador, sin instalar nada. Eso no fue una limitación temporal ni un atajo de principiante — fue una decisión de diseño deliberada (la misma razón por la que pudiste equivocarte mil veces sin miedo a romper tu computadora: nunca hubo nada real que romper). Pyodide, el motor que corría tu código, es Python compilado para ejecutarse dentro del navegador — el mismo lenguaje, pero encerrado en una caja de arena (*sandbox*) sin acceso al disco real de tu máquina, sin poder abrir una conexión de red real, sin poder instalar nada permanente. Esa caja de arena es exactamente lo que te permitió aprender rápido y sin fricción de infraestructura.

Pero un desarrollador profesional no vive en una caja de arena. Vive en su propia máquina, con su propio sistema de archivos, sus propias instalaciones, sus propios errores reales que nadie preparó para él de antemano. Hoy sales de la caja de arena. No porque el Campus haya fallado — hizo exactamente lo que tenía que hacer —, sino porque ya aprendiste el lenguaje, y ahora te toca aprender el lugar donde ese lenguaje realmente se usa.

## 3. Requisitos

- **Sistema operativo:** cualquiera de los tres contemplados (Windows, macOS, Linux).
- **Permisos:** capacidad de instalar software en tu cuenta de usuario (una cuenta de administrador propia normalmente la tiene).
- **Conexión a internet:** necesaria solo para la descarga inicial.
- **Tiempo:** 75-90 minutos, sin prisa — la instalación puede tener imprevistos y está bien que los tenga.

☐ **Checkpoint 0 —** tienes permisos para instalar software en tu sistema (si usas una cuenta gestionada por un tercero — trabajo, institución —, confírmalo antes de empezar).

## 4. Explicación conceptual

Repasemos, con precisión, qué era el Campus y qué era Pyodide — porque no vas a entender lo que cambia si no tienes claro, primero, lo que había.

**El Campus** era la aplicación web donde estudiaste — el lugar donde leíste lecciones, resolviste ejercicios y viste tu progreso. **Pyodide** era, específicamente, el motor que corría dentro de esa página y ejecutaba tu código Python de verdad, en tu navegador, sin mandarlo a ningún servidor. Cuando escribías `print("hola")` y lo veías aparecer, ese Python se ejecutó realmente — no fue una simulación visual. Lo que tenía de especial es *dónde* ocurría: en una zona aislada del navegador, sin acceso al sistema de archivos real de tu computadora, sin poder abrir procesos del sistema operativo, sin poder tocar nada fuera de esa página.

**Qué garantizaba eso (y por qué fue la decisión correcta para empezar):** el mismo entorno exacto para cualquier estudiante, sin instalar nada, sin poder romper nunca nada real de tu sistema por accidente, sin depender de qué computadora tuvieras. Ideal para aprender el lenguaje sin ruido.

**Qué nunca pudo hacer, ni estuvo diseñado para hacer:** guardar un archivo que sobreviva más allá de la sesión del navegador; ejecutar un programa como un proceso real del sistema operativo; instalar una librería de verdad, con todo lo que eso implica; hablar con hardware, con la red, con otros programas de tu máquina.

**Lo que NO cambia hoy, y es la parte que más tranquilidad debería darte:** el Python que ya dominas — funciones, listas, diccionarios, excepciones, todo T1-T5 — es exactamente el mismo lenguaje. No vas a aprender "otro Python". Lo único que cambia es la habitación donde ese Python vive y se ejecuta.

💡 Piensa en esto como aprender a conducir en un simulador excelente y ahora sentarte, por primera vez, frente al volante real. Los mandos son los mismos. Lo que cambia son las consecuencias.

## 5. Ejecución paso a paso

**Paso 1 — Verifica si ya tienes Python instalado**

Antes de instalar nada, comprueba si tu sistema ya trae Python. Abre tu terminal (en Windows, busca "PowerShell" o "Símbolo del sistema" en el menú de inicio; en macOS, busca "Terminal" en Spotlight; en Linux, normalmente `Ctrl+Alt+T`) y escribe:

```
python --version
```

Si no responde, prueba también `python3 --version` — en macOS y Linux, `python` a veces apunta a una versión antigua de Python 2 que no vas a usar; `python3` suele ser la forma correcta ahí.

Vas a ver una de tres cosas: una versión reciente de Python 3 (perfecto, puedes saltar al Paso 3 y solo instalar el editor), una versión de Python 2 o muy antigua (vas a instalar una versión moderna igual), o directamente un error de "comando no encontrado" (totalmente normal, es justo lo que este laboratorio existe para resolver).

**Paso 2 — Instala Python**

Ve a [python.org/downloads](https://www.python.org/downloads/) y descarga la versión estable más reciente para tu sistema operativo.

⚠️ En Windows específicamente: durante la instalación vas a ver una casilla que dice **"Add Python to PATH"** — actívala. Si no lo haces, tu terminal no va a saber dónde encontrar Python después, y vas a terminar exactamente en el error más común de este laboratorio (ver §8). En macOS/Linux el instalador oficial ya deja Python accesible desde la terminal sin este paso extra.

Al terminar, cierra tu terminal por completo y ábrela de nuevo — los cambios de instalación no siempre se reflejan en una terminal que ya estaba abierta. Repite el Paso 1 para confirmar.

☐ **Checkpoint 1 —** `python --version` (o `python3 --version`) responde con Python 3.x, en una terminal recién abierta.

**Paso 3 — Instala un editor de código**

Si no tienes uno todavía, instala Visual Studio Code desde [code.visualstudio.com](https://code.visualstudio.com/) — es gratuito, funciona igual en los tres sistemas, y es, con amplio margen, el editor más usado en la industria hoy. No es el único válido, pero sí el que vas a poder buscar ayuda para más fácilmente si algo falla.

**Paso 4 — Escribe y ejecuta tu primer programa fuera del Campus**

Crea una carpeta en un lugar que reconozcas fácilmente (tu Escritorio o Documentos sirven por ahora), y dentro de ella un archivo llamado `hola.py` con este contenido:

```python
print("Este programa está corriendo fuera del navegador.")
print("El intérprete de Python es el mismo que ya conoces.")
```

Guárdalo, abre tu terminal, navega hasta esa carpeta (si todavía no sabes moverte con soltura, no te preocupes — es exactamente el contenido del siguiente laboratorio, M5.T2; por ahora, en la mayoría de editores puedes hacer clic derecho sobre la carpeta y elegir "Abrir en terminal") y ejecuta:

```
python hola.py
```

Deberías ver tus dos líneas impresas directamente en la terminal — sin ninguna página web de por medio.

☐ **Checkpoint 2 —** tu programa `hola.py` se ejecutó y mostró su salida directamente en la terminal.

## 5bis. Ahora vas a provocar un error real, a propósito

Ejecuta esto en tu terminal, deliberadamente mal escrito:

```
python archivo_que_no_existe.py
```

⚠️ Va a fallar, y quiero que lo veas antes de que te lo explique. Vas a obtener algo parecido a:

```
python: can't open file 'archivo_que_no_existe.py': [Errno 2] No such file or directory
```

No sigas todavía — antes de pasar a la sección de comprensión, respóndete: ¿por qué crees que apareció exactamente este mensaje, y no otro?

## 6. Comprensión

- En tus propias palabras: ¿qué hacía Pyodide que ahora tu instalación local también hace? ¿Qué hacía Pyodide que tu instalación local nunca podría haber hecho, ni con el mejor diseño del mundo?
- ¿Por qué crees que "Add Python to PATH" es tan importante en Windows? (Pista: relaciona esto con cómo tu terminal encuentra el comando `python` cuando lo escribes.)
- El error que provocaste en §5bis, ¿es un error de Python o un error de la terminal? Justifica tu respuesta.

## 7. Puntos de verificación (resumen)

☐ Permisos de instalación confirmados (§3) · ☐ Python instalado y verificado en terminal nueva (§5, Paso 2) · ☐ Editor instalado (§5, Paso 3) · ☐ `hola.py` ejecutado con éxito, salida visible en terminal (§5, Paso 4) · ☐ Error de archivo inexistente provocado y presenciado en vivo (§5bis).

## 8. Diagnóstico de errores

**Categorías revisadas para este laboratorio:** comando no encontrado/PATH (sí aplica, es el error central) · permisos (aplica en sistemas gestionados por terceros) · diferencias de versión (aplica — Python 2 vs 3) · diferencias entre sistemas operativos (aplica — PATH en Windows) · configuración ausente (aplica — variable PATH) · estado previo inconsistente (aplica — instalaciones previas conflictivas) · interferencia de software externo (antivirus bloqueando el instalador, ocasional).

| Error | Por qué aparece | Cómo se diagnostica | Cómo se comprueba la hipótesis | Solución | Cómo se previene |
|---|---|---|---|---|---|
| `'python' no se reconoce como un comando interno o externo` (Windows) / `python: command not found` (macOS/Linux) | Python no está instalado, o está instalado pero no está en el PATH del sistema | Sospecha: "está instalado pero la terminal no lo encuentra" si recuerdas haber completado la instalación | Busca el instalador o la carpeta de Python manualmente en tu sistema (en Windows: `C:\Users\<tú>\AppData\Local\Programs\Python\`) — si existe pero el comando falla, confirma que es un problema de PATH, no de instalación | Windows: reinstalar marcando "Add Python to PATH", o añadir la ruta manualmente a las variables de entorno. macOS/Linux: reinstalar con el instalador oficial o verificar con `which python3` | Marcar siempre "Add Python to PATH" durante la instalación en Windows; cerrar y reabrir la terminal después de instalar, siempre |
| `python` funciona pero ejecuta una versión muy antigua (2.x) | El sistema (frecuente en macOS/Linux) trae una versión de Python 2 preinstalada bajo el nombre `python`, y la nueva quedó como `python3` | `python --version` muestra `2.x` en vez de `3.x` | Ejecuta `python3 --version` — si esa sí muestra la versión nueva, la hipótesis queda confirmada: son dos instalaciones distintas conviviendo | Usa `python3` de forma consistente en este sistema, en vez de `python` | Verificar la versión exacta con `--version` como parte del Checkpoint 1, siempre, en vez de asumir que "responde" es suficiente |
| El instalador de Python se bloquea o el antivirus lo marca como sospechoso | Algunos antivirus, por defecto, desconfían de instaladores descargados recientemente sin "reputación" acumulada todavía | El bloqueo suele venir acompañado de una notificación explícita del antivirus, no de un error de Python | Verifica que descargaste el instalador desde `python.org` (nunca de un sitio de terceros) — si la fuente es la oficial, la sospecha del antivirus es un falso positivo | Permite la excepción específicamente para el instalador de python.org, nunca desactives el antivirus por completo | Descargar software solo desde la fuente oficial, siempre — es también la buena práctica que evita instalar software malicioso disfrazado |

## 9. Mini laboratorio

Sin repetir literalmente los pasos anteriores: crea un segundo programa, con otro nombre, que imprima tu nombre y la versión de Python que tienes instalada (investiga cómo obtener la versión desde dentro de un programa Python — pista: el módulo `sys`), y ejecútalo desde tu terminal.

## 10. Desafío

Sin volver a instalar nada: ¿cómo podrías comprobar, en una computadora que no es la tuya, si ya tiene Python instalado y cuál es exactamente su ubicación en el sistema de archivos (no solo si el comando responde)? Encuentra la forma y anota qué evidencia exacta usaste.

## 11. Buenas prácticas profesionales

- Instala software siempre desde la fuente oficial del proyecto — nunca desde un buscador genérico que te lleve a un sitio de terceros.
- Guarda tus programas en una ubicación consistente y fácil de encontrar desde el principio — vas a acumular muchos, y "dónde puse esto" es una fricción real que se evita con un hábito simple desde el día uno.
- Verificar la versión de una herramienta después de instalarla (`--version`) es un reflejo profesional, no un paso de desconfianza — te ahorra horas de diagnóstico más adelante.

## 12. Recursos recomendados

| | Título | Autor/canal | Idioma | Duración | Nivel | Motivo |
|---|---|---|---|---|---|---|
| 🟢 Antes | "Course Overview + the Shell" | MIT / missing.csail.mit.edu | EN | ~50 min | Introductorio | Primera lección real del curso del MIT dedicado exactamente a este tipo de transición — situar la terminal frente a la interfaz gráfica antes de tocar comandos | [missing.csail.mit.edu/2020/course-shell/](https://missing.csail.mit.edu/2020/course-shell/) |
| 🔵 Durante | Using Python — guía oficial de instalación | Python Software Foundation / docs.python.org | EN | ~15 min lectura | Introductorio | Documentación oficial; referencia definitiva si tu instalación diverge de lo descrito aquí | [docs.python.org/3/using/](https://docs.python.org/3/using/) |
| 🟣 Después | Visual Studio Code — Python en 5 minutos | Microsoft / code.visualstudio.com | EN | ~15 min | Introductorio | Documentación oficial del editor recomendado; útil para configurar el entorno de trabajo más allá de lo mínimo cubierto aquí | [code.visualstudio.com/docs/python/python-tutorial](https://code.visualstudio.com/docs/python/python-tutorial) |

## 13. Evaluación

**Cierre — lo esencial en una frase:** el Python que ya sabes no cambió; lo único nuevo es que ahora se ejecuta en tu propio sistema, con consecuencias reales y sin la red de seguridad del sandbox.

- **Explicar:** en tus propias palabras, ¿qué era Pyodide, qué garantizaba, y qué nunca pudo hacer por diseño?
- **Predecir:** si abrieras una terminal completamente nueva en una computadora donde nunca instalaste Python, ¿qué esperarías que pasara al escribir `python --version`?
- **Detectar y corregir errores:** se te entrega una captura de pantalla con `'python' no se reconoce como un comando interno o externo` en Windows. Diagnostica la causa más probable, comprueba tu hipótesis, y describe la corrección.
- **Modificar / repetir desde cero, sin guía:** cierra esta guía y, de memoria, verifica tu instalación de Python, crea un programa nuevo con otro nombre, y ejecútalo.
- **Aplicar a un contexto nuevo:** un amigo te dice que instaló Python pero "no le funciona nada" en la terminal. ¿Qué le preguntarías primero, y en qué orden, para diagnosticar el problema sin verlo en persona?
- **Reflexión de proceso (no de contenido):** ¿qué parte de este laboratorio te generó más incertidumbre — la instalación en sí, o soltar la idea de que "el código vive en el navegador"? ¿Qué harías distinto la próxima vez que instales una herramienta nueva?
