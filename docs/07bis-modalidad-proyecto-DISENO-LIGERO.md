# Modalidad Proyecto — diseño ligero para el Capstone ET1

> **Naturaleza de este documento:** decisión de implementación, no decisión estructural (distinción que el Director fijó explícitamente). No reabre DOC-07 ni DOC-12 — se apoya en ambos. Sin auditoría UX propia: hereda los principios ya validados (voz de instructor, honestidad entre autodeclaración y evidencia, minimizar complejidad visible). Responde únicamente las 6 preguntas pedidas.

## 1. Diferencia pedagógica entre laboratorio y proyecto

Un laboratorio (DOC-12) enseña **una competencia nueva**, en una sesión, con andamiaje fuerte: pasos guiados, resultado esperado en cada uno, checkpoints frecuentes. El estudiante nunca está realmente perdido — el camino está marcado.

Un proyecto **no enseña nada nuevo**. Exige demostrar que lo ya aprendido por separado — Git, terminal, APIs, SQL, POO — se sostiene junto, bajo las condiciones reales de un producto: ambigüedad genuina (el estudiante decide la arquitectura, no se le entrega), varias sesiones de trabajo sostenido, y un requisito que cambia a mitad de camino porque así ocurre en el trabajo real. El andamiaje desaparece a propósito — esa ausencia es exactamente lo que se evalúa.

## 2. Qué evalúa un Capstone que ningún laboratorio aislado puede evaluar

- **Integración real entre módulos**, no uso aislado: SYL-N1 ya lo exige explícitamente — "M6→M7 encadenados, no dos características sueltas" (los datos de la API deben alimentar el esquema SQL propio).
- **Diseño propio sin guía**: qué clases, qué estructura de carpetas, qué esquema — decisiones que ningún laboratorio le entregó resueltas.
- **Diseño incremental bajo fuego real**: SYL-N1 exige un cambio de requisitos genuino a mitad de proyecto, introducido por el tutor en rol Cliente — algo que una sesión de 90 minutos no puede simular con autenticidad.
- **Constancia a lo largo del tiempo**: sostener un mismo producto durante varias semanas, no una sesión aislada.
- **Juicio de priorización**: qué construir primero, qué trade-off aceptar — visible solo cuando hay más de un camino posible y nadie lo marca.

## 3. Cómo progresa el estudiante — hitos, entregables, revisiones, criterios de cierre

El Capstone reutiliza, a escala de nivel completo, el mismo patrón ya validado de los **problemas de largo aliento B-M1...B-M7** (Blueprint §6): abrir temprano, registrar intentos, cerrar con triple vara + argumento de corrección. No es un patrón nuevo — es el mismo, aplicado una última vez a la síntesis total.

**Hitos (5, secuenciales, cada uno con checkpoint autodeclarado):**
1. **Propuesta de alcance** — dominio elegido o propuesto, plan de descomposición inicial, validado por el tutor en rol Cliente antes de escribir código.
2. **Esqueleto del producto** — estructura de módulos y clases, repositorio Git inicializado, primer commit real.
3. **Integración de datos** — consumo robusto de la API elegida (M6) que alimenta directamente el esquema propio en SQL (M7) — la integración es la entrega, no dos piezas sueltas.
4. **Cambio de requisitos a mitad de camino** *(obligatorio, no opcional — el tutor lo introduce de verdad)* — el estudiante documenta cómo lo absorbió sin rehacer todo desde cero.
5. **Cierre** — README ejemplar, historia Git legible, batería de pruebas propia, defensa oral final.

**Entregables por hito:** un checkpoint autodeclarado (el estudiante marca "completado este hito") + una entrada de bitácora de texto libre (qué decidió y por qué) — mismo mecanismo exacto ya construido para `modalidad:"real"` (`S.ph[id]`, checkpoints + evidencia de texto), sin inventar nada nuevo.

**Revisiones:** al menos una revisión de código real con el tutor en rol Revisor (mismo rol ya entrenado en M4.T3) antes del cierre.

**Criterio de finalización:** no "el programa corre" — la síntesis verificable de los 7 módulos que el propio Blueprint ya define palabra por palabra (§6): M1 en el flujo de datos, M2 como entidades con invariantes, M3 con ≥1 elección de estructura justificada por coste, M4 con historia que narra, M5 ejecutándose desde terminal, M6 con consumo robusto, M7 con esquema propio y transacciones donde el dominio lo exija. Este checklist ya existe — el Capstone solo lo instancia.

## 4. Cómo se mide el dominio — más allá de "funciona"

Cada dimensión pedida por el Director tiene un instrumento concreto, todos ya nombrados por el propio SYL-N1, ninguno inventado ahora:

| Dimensión | Instrumento |
|---|---|
| Arquitectura y toma de decisiones | ≥2 trade-offs documentados en formato **opciones → criterio → decisión → costo** (formato ya exigido literalmente por SYL-N1 para el Capstone) |
| Calidad y legibilidad | Historia de Git que narra el proyecto commit a commit (M4), no una foto final |
| Debugging | Bitácora de depuración real durante el proyecto (mismo patrón de B-M3, aplicado aquí a un producto propio en vez de código ajeno) |
| Documentación | README ejemplar (M4.T4) + documento de esquema verificable por un tercero sin ver código (M7.T4) |
| Autonomía | Cómo absorbió el cambio de requisitos del Hito 4 sin reescribir todo — evidencia de diseño incremental, no de pánico |
| Dominio integrado | Defensa oral final con el tutor — las mismas "seis preguntas de excelencia" y defensa socrática que DOC-11 ya usa para lecciones, aplicadas ahora al producto completo |

El instrumento y la rúbrica exactos (RM-XX, veredicto de 6 campos) ya están definidos en **DOC-02** — el Capstone no inventa un sistema de evaluación nuevo, lo instancia sobre este producto específico.

## 5. Cómo reutiliza DOC-07 y DOC-12 sin duplicar

**Se añade una entrada más al registro de modalidades ya existente** (`MODALIDADES.proyecto`), con el mismo contrato de tres funciones (`describe`/`evaluar`) que ya usan `pyodide` y `real` — cero cambios al motor central (`renderClases`, `dayDone`, `dayUnlocked` siguen delegando exactamente igual). El progreso vive en el mismo almacén (`S.ph[id]`), con la misma separación ya validada en DOC-12 §4: **autodeclaración de hitos** (gating, avance) vs. **evidencia de texto** (bitácora, trade-offs — para la defensa, nunca gating). Los primitivos visuales son los mismos (`.card`, `.chip`, `label.task`) — ninguno nuevo.

**Lo que NO se reutiliza, a propósito:** la estructura de 13 secciones de DOC-12 no aplica — un proyecto no es "un laboratorio largo", es una forma distinta (hitos de producto, no pasos de procedimiento). Forzar las 13 secciones aquí sería la misma sobre-ingeniería que el Director ya pidió evitar en la auditoría UX. El renderizador de la modalidad `proyecto` es nuevo pero deliberadamente más simple: ficha del producto (nombre, pitch, usuario imaginable) + los 5 hitos como tarjetas + bitácora + cierre — no un remix de DOC-12.

## 6. Cómo evita ser una lista de tareas

- **Identidad de producto, no lista de tickets:** la ficha de apertura no dice "Capstone ET1" como título burocrático — muestra el nombre que el propio estudiante eligió para su producto, su pitch de una línea, y el "usuario imaginable" que SYL-N1 ya exige — el mismo tratamiento que un README real, no una tarea del curso.
- **Los hitos se redactan como preguntas del producto, no como órdenes:** "¿tu aplicación ya guarda lo que consume de la API?", no "Haz el CRUD". Mismo principio de voz de instructor ya exigido en DOC-12, aplicado aquí a la narrativa del producto en construcción.
- **El cambio de requisitos real rompe cualquier sensación de checklist:** una lista de tareas no se reordena a mitad de camino porque un cliente cambió de opinión — un producto real sí. Ese único hito, por diseño, es lo que más se aleja de "ejercicio con pasos".
- **El cierre es una demo, no una casilla marcada:** la defensa final pide "muéstrame tu aplicación funcionando", no "confirma que completaste 5 hitos".

---

**Con este documento aprobado, el siguiente paso es construir directamente el Capstone ET1** (ficha de producto + investigación de los dominios de referencia ya calibrados por SYL-N1 — biblioteca personal, monitor de precios, tracker de hábitos — + implementación de `MODALIDADES.proyecto` + wiring). No se propone ninguna auditoría UX ni ciclo de arquitectura adicional — se hereda el ya validado.
