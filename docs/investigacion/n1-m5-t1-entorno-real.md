# Investigación Pedagógica de N1.M5.T1 — El entorno real

*Construida bajo DOC-12 §0bis. Objetivo: fundamentar el laboratorio del cambio de modelo mental Campus/Pyodide → entorno local, sin enseñar todavía ninguna herramienta específica (Git, venv, pip quedan fuera de alcance — mandato explícito del Director).*

## 1. Cómo enseñan este concepto exacto — la transición sandbox → entorno real

**MIT Missing Semester** (`missing.csail.mit.edu/2020/course-shell/`), su primera lección, no empieza con comandos: empieza situando la terminal como interfaz de texto al sistema operativo, en contraste explícito con las interfaces gráficas que el estudiante ya usa a diario — el mismo movimiento retórico "esto que ya conoces, ahora desde otro ángulo" que el Director pide para este laboratorio ("cómo se relacionan ambos mundos").

**Documentación oficial de Python** (`docs.python.org`, guía de instalación y "Using Python") separa deliberadamente instalar el intérprete de aprender el lenguaje — nunca asume que el estudiante ya sabe qué es una ruta de sistema o una variable de entorno; lo declara como paso 0, aparte.

**Hallazgo específico de este laboratorio, no genérico:** ninguna de las fuentes de referencia investigadas para DOC-12 (Missing Semester, Carpentries, Pro Git, Stanford CS107, Berkeley CS61B/CS61C) enseña primero en un sandbox de navegador y migra después a terminal real — parten directamente de la terminal real, porque sus estudiantes nunca tuvieron un Pyodide. **Esto es un problema pedagógico propio de esta Academia, sin precedente directo en las fuentes** — se declara la ausencia con honestidad en vez de forzar una cita: ninguna institución de referencia necesitó nunca gestionar la transición específica "de un sandbox de código en el navegador a un sistema operativo real", porque ninguna usó un sandbox de navegador como los primeros meses de plataforma.

## 2. Qué dice la investigación en Learning Sciences sobre este tipo de transición

El fenómeno más cercano documentado en Computer Science Education es la **transferencia de aprendizaje entre contextos** (near vs. far transfer): el conocimiento adquirido en un contexto controlado (aquí, Pyodide) no se transfiere automáticamente a un contexto con más grados de libertad (aquí, un sistema operativo real) — el estudiante necesita un puente explícito que le diga qué sigue siendo válido y qué cambia. No se localizó un estudio específico sobre "sandboxes de navegador educativos → entorno real" (honestidad metodológica, DOC-11 §0bis principio 2): la conclusión se apoya en el principio general de transferencia, no en un estudio dedicado a este caso exacto.

## 3. Síntesis crítica

El riesgo real no es que el estudiante no sepa instalar Python — es que, tras meses de Pyodide, tenga un modelo mental implícito de "el código vive en una página web" que nunca se hizo explícito porque nunca hizo falta cuestionarlo. Un laboratorio que solo "instala Python" no toca ese modelo mental; uno que lo nombra, lo pone en tensión, y lo reemplaza, sí. Mismo principio que DOC-03 usa para todo conflicto cognitivo (P3/P9), aplicado aquí a la infraestructura, no a un concepto de Python.

**Decisión de diseño respaldada por el mandato explícito del Director**: el laboratorio abre con el modelo mental "Campus/Pyodide" hecho explícito antes de instalar nada — qué era, qué garantizaba (mismo entorno para todos, sin instalación, sin poder romper nada del sistema real), y qué NUNCA pudo hacer (no hay disco real, no hay proceso real, no hay red real) — para que instalar Python después se sienta como una consecuencia lógica ("ahora sí existen esas cosas"), no como un trámite aislado.

## 4. Estrategia propuesta

Estructura de tres actos dentro del Bloque de contexto/explicación conceptual del laboratorio: (1) qué fue Pyodide, con sus garantías y sus límites nombrados explícitamente — no como crítica, sino como diseño deliberado que cumplió su función (AC-06, techo del navegador); (2) qué cambia exactamente al salir — sistema de archivos real, procesos reales, instalación real, consecuencias reales, sin red de seguridad automática; (3) qué NO cambia — el Python que el estudiante ya domina (T1-T5) es el mismo lenguaje, solo se ejecuta en un lugar distinto. Este tercer punto es el que más ansiedad reduce y el que ninguna fuente de referencia necesita explicitar (porque ninguna tuvo un "antes" en sandbox) — es la contribución pedagógica propia de esta Academia a este laboratorio.

## Clasificación y falsabilidad

**Evidencia sólida** para el patrón general "concepto explícito antes de instalar" (Python docs, Missing Semester). **Decisión de diseño por ausencia de evidencia específica** para la transición sandbox-navegador→real, dado que ninguna fuente de referencia enfrenta este caso exacto — se documenta la ausencia en vez de forzarla. **Falsabilidad:** si el registro de ejecución (§6 de DOC-12) muestra que el estudiante ya tenía este modelo mental claro sin necesidad de hacerlo explícito, esta sección del laboratorio se recorta en la próxima revisión.
