# Investigación Pedagógica de N1.M5.T2 — La terminal

*Construida bajo DOC-12 §0bis. Objetivo: fundamentar el laboratorio de fluencia básica de terminal — prompt, directorio actual, navegación, listar, crear/eliminar carpetas, ejecutar Python, interpretar errores. Explícitamente fuera de alcance: Git, venv, pip (mandato del Director) — este laboratorio es, por diseño, el único prerrequisito de fluencia que todo laboratorio DOC-12 futuro puede asumir sin volver a explicarlo.*

## 1. Cómo enseñan este concepto exacto — orientación a la shell

**MIT Missing Semester**, lección "Course Overview + the Shell" (`missing.csail.mit.edu/2020/course-shell/`): introduce el prompt, el directorio de trabajo, y los comandos de navegación (`cd`, `ls`, `pwd`) mostrando primero *qué pregunta le estás haciendo al sistema* con cada uno, no solo su sintaxis — `pwd` es "¿dónde estoy?", `ls` es "¿qué hay aquí?", `cd` es "quiero ir allá". Cierra con ejercicios que exigen navegar una estructura de directorios real, no solo memorizar los tres comandos.

**The Carpentries — "The Unix Shell" / shell-novice** (`swcarpentry.github.io/shell-novice/`): estructura su primer episodio exactamente como "Introducing the Shell" antes de tocar archivos — la misma secuencia que Missing Semester, con la adición de su convención de "Instructor Notes" documentando errores reales de estudiantes principiantes (confusión de ruta en Windows/Cygwin, quedar "atrapado" dentro de un editor de terminal) — precedente directo ya usado para fundamentar DOC-12 §2.8.

**Documentación oficial de Python** (`docs.python.org`, "Using Python on Unix/Windows"): trata ejecutar un script (`python nombre.py`) como el primer contacto entre el lenguaje que el estudiante ya conoce y el sistema operativo — útil como puente directo, ya que en este laboratorio el estudiante no está aprendiendo Python, está aprendiendo dónde vive ahora.

## 2. Qué dice la investigación en CS Education sobre este concepto específico

El error de novato más documentado y replicado en el ecosistema de fuentes de enseñanza de shell (Carpentries Instructor Notes, foros de Missing Semester) es la **pérdida de referencia espacial**: el estudiante ejecuta comandos sin saber "dónde está", y cada error posterior (archivo no encontrado, ruta relativa que no resuelve) se vuelve indiagnosticable porque la causa raíz — no saber la ubicación actual — nunca se hizo consciente. Esto no es anecdótico: es la razón por la que tanto Missing Semester como Carpentries fuerzan `pwd`/`ls` como reflejo casi antes que cualquier otro comando.

## 3. Síntesis crítica

**Decisión adoptada, con traza:** el modelo mental "puerta de servicio" que ya declara la ficha de SYL-N1 M5.T2 (la GUI como fachada, la terminal como acceso directo) se conserva íntegro — está bien anclado y coincide con la retórica de Missing Semester ("cincuenta años sobreviviendo a todas las ventanas"). Lo que se añade, por mandato explícito del Director y por el hallazgo del error de novato de arriba, es que la referencia espacial (`pwd`, saber "dónde estoy" en todo momento) se trata como **el primer hábito del laboratorio**, antes que cualquier otro comando, en vez de mencionarse de pasada.

**Autocrítica — ¿por qué excluir Git/venv/pip si son "también terminal"?** Podría objetarse que separar la terminal de sus usos reales (Git, entornos) es artificial. Se rechaza esa objeción con traza concreta: el error de novato documentado arriba (pérdida de referencia espacial) es previo e independiente de cualquier herramienta — ocurre igual si el comando siguiente es `git status` o `ls`. Enseñar la referencia espacial mezclada con Git obligaría al estudiante a aprender dos cosas nuevas a la vez (el concepto de repositorio Y el concepto de ubicación), exactamente la sobrecarga cognitiva que DOC-03 (P9/PED-10) ya identifica como nociva. Separarlos es la decisión correcta, no una limitación de alcance arbitraria.

## 4. Estrategia propuesta

Práctica intensiva y repetida de los comandos de navegación y manipulación (crear, entrar, listar, borrar) sobre una estructura de carpetas construida por el propio estudiante — nunca sobre una ya dada —, con `pwd` como reflejo instalado desde el primer minuto. Ejecutar un script Python propio desde la terminal cierra el laboratorio como demostración de que el "mismo Python de siempre" ahora vive en un lugar navegable. Al menos un error real (ruta inexistente, archivo no encontrado) se induce en vivo, conforme a DOC-12 §2.5bis.

## Clasificación y falsabilidad

**Evidencia sólida:** el error de "pérdida de referencia espacial" y el patrón `pwd`-como-reflejo están documentados de forma consistente en al menos dos fuentes independientes (Missing Semester, Carpentries). **Falsabilidad:** si el registro de ejecución muestra que el estudiante nunca pierde la referencia espacial incluso sin este énfasis, el peso dado a `pwd` se reduce en la próxima revisión del laboratorio.
