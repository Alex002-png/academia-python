# SYL-N11 — Syllabus del Nivel 11 · Research Engineer

## Control del documento (conforme a DOC-00 §15.4)

| Campo | Valor |
|---|---|
| **Document Key** | SYL-N11 · Tier T2 |
| **Versión / Estado** | 0.1.0-draft · en construcción, rama `nivel/n11` — candidato a v1.0.0 solo tras veredicto del Director |
| **Autoridad de origen** | DOC-10 §9 (interior de N11) · DOC-01 (C-N11-01…05) |
| **Depende de** | DOC-10 §9 (mapa) · DOC-01 · DOC-11 (para lo que aplique de su esquema) · DOC-12 (gobierna la mayoría de este nivel) · SYL-N1 §5 (plantilla de ficha) · SYL-N3 §5 (precedente de lectura crítica de notación) |
| **Produce / desarrolla** | Fichas pedagógicas de M1–M4, diseño del capstone del nivel, Herencias Declaradas (entrantes y salientes) |
| **Decisión de estructura previa a este documento** | Ver §3.1 — aprobada explícitamente por el Director antes de instanciar cualquier tema |

## 0. Por qué este syllabus no se parece a los anteriores

N11 es el primer nivel de ET5 y el primero cuyo contenido es predominantemente **lectura crítica, escritura y colaboración en proyectos reales de terceros**, no ejercicios verificables por `check()`. Antes de escribir una sola ficha, este syllabus resuelve la pregunta que la ficha de misión marcó como la más importante del nivel: dónde vive el trabajo de gran escala (reproducir un paper de verdad, conseguir que un mantenedor externo revise un PR de verdad).

## 1. Tabla resumen

| Módulo | Modalidad dominante | Temas | Competencia principal | Qué entrena (no qué "resuelve") |
|---|---|---|---|---|
| M1 · Lectura de frontera | DOC-11 hidbrido + DOC-12 | 5 | C-N11-02 | Leer papers actuales con autonomía, incluida su matemática |
| M2 · Reproducción (preparación) | DOC-12 (`real`) | 5 | C-N11-01 | El método de reproducir — no la reproducción de gran escala, que vive en el capstone |
| M3 · Informe científico | DOC-12 (`real`) | 3 | C-N11-04 | Reportar con fidelidad, incluida la fidelidad cuando el resultado no coincide |
| M4 · Open source (preparación) | DOC-12 (`real`) | 4 | C-N11-03 | El flujo de contribución real — no la contribución de gran escala, que vive en el capstone |
| Capstone N11 | `proyecto` (hitos) | — | Todas + C-N11-05 | Integración a escala real: reproducción seria + contribución seria + informe + defensa |

*Carga estimada total: ~6 meses / ~600 h (DOC-10, no auditada — ver §3.3 sobre por qué esta cifra es más incierta que en niveles anteriores). No se promete un número de "ejercicios/tema": la mayoría de M1-M4 usa modalidad `real` con checkpoints, no `ex:[{check:...}]` (ver §3.2).*

## 2. Identidad del nivel

Por referencia a DOC-10 §9: **N11 · Research Engineer** — primer nivel de ET5 ("aprender a crear y a decidir"). El registro cambia respecto a N0-N10: el estudiante deja de dominar herramientas y sistemas ya dados y empieza a **producir conocimiento nuevo** — una reproducción real, un reporte honesto, una contribución aceptada por terceros. La evidencia de dominio se parece más a la de un investigador junior real que a la de un estudiante resolviendo ejercicios. Entrada: N10 superado (ET4 completa — sistemas de IA reales operados de extremo a extremo). Salida: capstone N11 (reproducción + contribución open source + informe + defensa oral crítica) → perfil "Research Engineer (junior)".

## 3. Principios de ejecución

### 3.1 Decisión de estructura M2/M4 — preparación en el módulo, ejecución en el capstone (aprobada por el Director, 2026-07-21)

**El trabajo de gran escala real — reproducir el paper completo, conseguir una contribución open source aceptada — vive únicamente en el capstone del nivel (§6), como hitos de un objeto `modalidad:"proyecto"`.** M2 y M4 no repiten esa escala dentro del módulo: construyen, con prácticas **reales y de alcance controlado** (nunca artificiales ni de juguete), las competencias que el capstone exige después:

- **M2** practica elegir un paper reproducible, leer código de investigación ajeno, diseñar un plan de reproducción, y ejecutar una reproducción pequeña de verdad (un resultado acotado, no el paper completo) — antes de que el capstone exija reproducir un paper entero.
- **M4** practica leer las convenciones de un proyecto real, encontrar y triar un issue abordable, y preparar una contribución inicial pequeña con su primer PR real — antes de que el capstone exija una contribución de mayor peso.

Razón de la decisión (palabras del Director): "no quiero ejercicios artificiales ni simplificados... quiero prácticas reales, pero de alcance controlado... el Capstone debe ser el momento en que todo ese entrenamiento converge en un proyecto profesional de larga duración." Esto evita duplicar un proyecto de varias semanas tres veces en el nivel (M2, M4, capstone) y calza con cómo DOC-10 ya describe el campo "Proyecto" de N11 como una sola pieza integradora.

**M3** no tiene una fase de "gran escala" separada — el informe científico del capstone ES la aplicación a escala real de lo que M3 enseña; M3 practica sobre las reproducciones pequeñas de M2, no necesita una versión aparte.

### 3.2 Mecanismo técnico — confirmado leyendo `index.html`, no supuesto

El Campus ya declara tres modalidades (`docs/guia-construccion-niveles.md` no las documentaba porque N0-N10 apenas usan `real` y nunca `proyecto` fuera del capstone; N11 las usa como eje central):

| Modalidad | Evaluación (`dayDone`) | Uso en N11 |
|---|---|---|
| `pyodide` (por defecto) | `ex[].every(check pasa)` | Solo donde M1 traduce notación/afirmaciones de un paper a código ejecutable y verificable (extensión directa del patrón de N3.M4/N6.M4) |
| `real` (DOC-12, ya usado en N1.M4/M5 para Git/terminal) | checkpoints autodeclarados (`p.cps`) | M1 (lectura/síntesis no traducible a código), M2, M3, M4 completos — cada tema es un laboratorio con las 13 secciones de DOC-12 |
| `proyecto` (ya usado en los 3 capstones anteriores) | hitos autodeclarados (`p.hitos`) | El capstone del nivel, único |

Ningún mecanismo nuevo hace falta. Un tema `real` que no complete el patrón de 13 secciones de DOC-12 no está terminado — se revisa igual que cualquier laboratorio de N1/N2.

### 3.3 Por qué la carga estimada de DOC-10 es más incierta aquí que en niveles anteriores

A diferencia de N0-N10, dos piezas de este nivel dependen de terceros reales fuera del control curricular: (a) que un paper elegido resulte, al intentarlo, genuinamente reproducible en un tiempo razonable — un riesgo conocido y documentado en la propia literatura de reproducibilidad (ver bibliografía, MLRC); (b) que un mantenedor de un proyecto open source real revise y acepte un PR en un plazo previsible. Ninguna de las dos está garantizada por diseño pedagógico. §6.4 documenta la mitigación propuesta — no es una decisión autodeclarada en silencio, se marca explícitamente para conocimiento del Director.

### 3.4 Principio del entorno (heredado de SYL-N1 §3, sigue aplicando)

El entorno (cuentas de GitHub, acceso a cómputo para reproducción, arXiv) nunca debe convertirse en obstáculo para el aprendizaje real. Toda fricción de infraestructura se distingue explícitamente de dificultad conceptual y se registra en observaciones de ejecución (§10), igual que en SYL-N1.

## 4. Estructura y grafo local

Troncal `M1 → M2 → M3 → M4 → Capstone`, secuencial — a diferencia de N1, aquí no hay paralelismo declarado: M2 presupone M1 (leer el paper que se va a reproducir), M3 presupone M2 (hay algo que reportar), M4 es independiente en contenido pero se coloca al final porque comparte calendario con el capstone (encontrar y preparar una contribución real toma tiempo de espera de terceros que conviene solapar con el trabajo de reproducción del capstone). El capstone integra M1-M4 completos.

## 5. Fichas pedagógicas por tema

### M1 · Lectura de frontera

> **La gran pregunta de este módulo: ¿qué te impide leer, solo, un paper publicado esta semana — y qué de eso es de verdad falta de conocimiento, y qué es solo falta de método?**

**N11.M1.T1 · Anatomía de un paper — leer en capas, no de corrido**
- **Objetivo:** aplica un método sistemático de lectura en pasadas (no lineal, no de una sola sesión) para decidir en minutos si un paper merece su tiempo, y en qué orden extraer valor de él.
- **Prerrequisitos:** ninguno de N11 — presupone que el estudiante ya sabe leer documentación técnica en inglés (H heredada de N1.M1.T7/pista 🇬🇧) y arquitecturas reales de sistemas de IA (ET4 completa).
- **Competencias:** C-N11-02.
- **Errores habituales:** leer de la introducción a las conclusiones en una sola pasada lineal (agota antes de llegar al método); rendirse ante la primera fórmula no reconocida; confundir "no entiendo la notación" con "el paper es demasiado difícil para mí".
- **Modelo mental:** el método de las tres pasadas de Keshav — pasada 1 (5-10 min: título/resumen/introducción/encabezados/conclusiones, decide si vale la pena) → pasada 2 (~1 h: figuras, argumento completo, referencias no leídas anotadas) → pasada 3 (horas: re-derivar el trabajo, como si lo reimplementaras).
- **Por qué:** existe porque ET4 completa ya presupone razonar sobre arquitecturas reales, pero nunca exigió leer la fuente primaria que las originó / ahora porque es el primer acto de un investigador junior real / habilita T2-T5 y, en última instancia, la elección informada del paper del capstone.
- **Evidencia de dominio:** decide, en una pasada 1 cronometrada sobre un paper nunca visto, si lo reproduciría o no — y defiende esa decisión con evidencia concreta del propio paper, no con intuición.
- **Práctica principal:** laboratorio real (`modalidad:"real"`) — pasada 1 sobre 3 papers de frontera reales de distintas subáreas (elegidos por el estudiante desde arXiv/Hugging Face Papers), con bitácora de la decisión de cada uno.
- **Evaluación:** checkpoints DOC-12 (cronometraje real de la pasada 1, bitácora completa, justificación defendible).
- **Pregunta ingenieril:** si dos papers afirman lo mismo pero uno tiene muchas más estrellas/upvotes en su repositorio o en Hugging Face Papers, ¿qué te dice eso sobre la calidad del trabajo — y qué NO te dice?
- **Recursos [🟢 antes]:** S. Keshav, *"How to Read a Paper"*, ACM SIGCOMM CCR 2007 — https://ccr.sigcomm.org/online/files/p83-keshavA.pdf (el método completo, fuente primaria, no un resumen de terceros).

**N11.M1.T2 · Notación y matemática de frontera**
- **Objetivo:** lee la matemática de un paper actual (atención, optimización de frontera, teoría de la información aplicada, lo que el paper elegido use) sin bloquearse ante notación no vista antes en N3.M4/N6.M4, aplicando la misma disciplina de decodificación símbolo por símbolo.
- **Prerrequisitos:** T1; N3.M4 y N6.M4 completos (herencia entrante, ver §7).
- **Competencias:** C-N11-02.
- **Errores habituales:** asumir que notación nueva es matemática nueva (casi siempre es abreviatura de algo ya visto); no distinguir notación del paper vs. notación de su propio código cuando ambas coexisten en la lectura.
- **Modelo mental:** todo símbolo nuevo tiene una definición encontrable — en el propio paper (sección de notación, o la primera vez que aparece) o en un paper que cita. Nunca se adivina, se busca.
- **Por qué:** existe porque el "supuesto que destruye" de N3.M4 ("no tengo la formación matemática para esto") reaparece con papers reales, de mayor densidad, y hay que destruirlo otra vez a esta escala / ahora porque T1 ya dio el método de selección, falta el de comprensión profunda / habilita T3 (verificar afirmaciones).
- **Evidencia de dominio:** traduce, símbolo por símbolo, la ecuación de aspecto más intimidante de un paper elegido — con la definición exacta de cada símbolo citada por número de ecuación/sección.
- **Práctica principal:** laboratorio real — glosario de notación construido en vivo sobre un paper real, verificado contra el propio texto del paper (no contra una fuente externa que simplifique).
- **Evaluación:** checkpoints DOC-12.
- **Pregunta ingenieril:** cuando un paper reutiliza un símbolo con un significado distinto al de la convención que ya conoces (ocurre con frecuencia real, ej. `θ` como parámetros vs. como ángulo), ¿cómo lo detectas antes de que te confunda 10 páginas después?
- **Recursos [🔵 durante]:** el propio paper elegido por el estudiante en T1, más su propia bibliografía citada como fuente de definiciones.

**N11.M1.T3 · Verificar afirmaciones con cálculo o código propio**
- **Objetivo:** cuando un paper afirma un resultado numérico o una propiedad matemática, la verifica con su propio cálculo o código — no la acepta por autoridad de la publicación.
- **Prerrequisitos:** T2.
- **Competencias:** C-N11-02; siembra C-N11-01 (M2).
- **Errores habituales:** aceptar una cifra reportada sin reproducir el cálculo que la sostiene aunque sea trivial de verificar; confundir "no puedo verificarlo con mis recursos" con "no lo voy a intentar verificar en absoluto" (son afirmaciones distintas y ambas deben declararse honestamente).
- **Modelo mental:** extensión directa de N3.M4.T5 ("leer un paper es descifrar, no adivinar") a papers reales: cada afirmación verificable con los recursos del estudiante, se verifica; cada una que no, se marca explícitamente como no verificada, nunca como verificada por omisión.
- **Por qué:** existe porque la competencia C-N11-01 (reproducir) presupone que ya se practicó verificar afirmaciones pequeñas antes de comprometerse a reproducir un experimento completo / ahora porque T2 ya dio la lectura de la matemática / habilita M2 completo.
- **Evidencia de dominio:** produce al menos una verificación real (cálculo a mano o código corrido) de una afirmación matemática o numérica menor de un paper real, con el resultado propio contrastado explícitamente contra lo reportado.
- **Práctica principal:** laboratorio real — 2-3 verificaciones reales sobre afirmaciones de complejidad creciente (una derivación algebraica corta, un cálculo numérico con datos del propio paper si están disponibles, una propiedad citada de otra fuente que el paper da por sentada).
- **Evaluación:** checkpoints DOC-12; cada verificación debe declarar explícitamente su tolerancia y su fuente de datos.
- **Pregunta ingenieril:** ¿qué diferencia hay entre "no logré reproducir esta cifra" y "el paper tiene un error" — y qué evidencia adicional necesitas antes de poder afirmar la segunda?
- **Recursos [🔵 durante]:** arXiv API (`info.arxiv.org/help/api/user-manual.html`) para localizar versiones/erratas de un paper cuando una cifra no cuadra.

**N11.M1.T4 · Evaluar la calidad real de un paper — honestidad antes de creer**
- **Objetivo:** evalúa críticamente un paper (baselines elegidos, ablations presentes o ausentes, significancia estadística, amenazas a la validez, reproducibilidad declarada) en vez de aceptar sus conclusiones porque está publicado o tiene muchas citas.
- **Prerrequisitos:** T3.
- **Competencias:** C-N11-02; siembra C-N11-04 (M3).
- **Errores habituales:** equiparar "publicado en una venue de prestigio" con "sin defectos metodológicos"; ignorar la sección de limitaciones (cuando existe) por costumbre de leer solo resultados.
- **Modelo mental:** un paper es un argumento con evidencia, no un veredicto — el lector crítico pregunta qué evidencia falta, qué comparación no se hizo y por qué, qué generalización se afirma sin sostén suficiente.
- **Por qué:** existe porque C-N11-04 (reportar fielmente, incluso cuando contradice lo esperado) presupone que el estudiante ya practicó ejercer ese mismo criterio sobre el trabajo ajeno antes de aplicarlo al propio / ahora porque T1-T3 ya dieron con qué leer, falta con qué evaluar / habilita T5 y M3.
- **Evidencia de dominio:** escribe una evaluación crítica real de un paper real (no un resumen) que identifique al menos una limitación no declarada explícitamente por los autores, con evidencia textual concreta.
- **Práctica principal:** laboratorio real — revisión crítica estructurada sobre el checklist real de NeurIPS (adaptado como instrumento de lectura, no de escritura) aplicado retroactivamente a un paper ya publicado.
- **Evaluación:** checkpoints DOC-12; rúbrica de revisión (no `check()`).
- **Pregunta ingenieril:** si un paper no reporta barras de error ni desviación estándar, ¿qué puedes y qué no puedes concluir de una mejora del "2%"?
- **Recursos [🔵 durante]:** NeurIPS Paper Checklist Guidelines — https://neurips.cc/public/guides/PaperChecklist (instrumento real usado en la industria/academia, reutilizado aquí como lente de lectura).

**N11.M1.T5 · Lectura completa autónoma — cierra M1**
- **Objetivo:** lee un paper de frontera completo, elegido por el propio estudiante, aplicando T1-T4 de principio a fin sin guía, y produce notas críticas defendibles.
- **Prerrequisitos:** T1-T4.
- **Competencias:** C-N11-02 (evidencia integradora).
- **Errores habituales:** elegir un paper ya conocido de memoria (invalida la prueba de autonomía real); mezclar notas de comprensión con notas de crítica sin distinguirlas.
- **Modelo mental:** las tres pasadas + verificación + evaluación crítica, como un solo hábito, no cuatro pasos separados que se ejecutan por obligación.
- **Por qué:** existe porque es, literalmente, la puerta de entrada al capstone (elegir bien el paper a reproducir depende de esto) / ahora porque T1-T4 dieron cada pieza / habilita directamente M2.T1.
- **Evidencia de dominio:** defiende oralmente (ante el tutor, formato TD breve) por qué eligió ese paper y no otro de su lista corta, qué esperaría poder reproducir de él y qué no.
- **Práctica principal:** laboratorio real — lectura completa + notas + defensa breve.
- **Evaluación:** checkpoints DOC-12 + defensa breve (siembra directa del formato de defensa del capstone).
- **Pregunta ingenieril:** de los papers que descartaste en tu lista corta, ¿cuál te costó más descartar y por qué — qué criterio inclinó la balanza?
- **Recursos [🟣 después]:** Hugging Face Papers (huggingface.co/papers) para ver qué repositorio de código está asociado al paper elegido y su nivel de adopción real (estrellas de GitHub) — sucesor de Papers With Code, discontinuado por Meta en julio de 2025 (hallazgo verificado durante la construcción de este syllabus, no asumido de memoria); información relevante para M2.T1, no para esta lectura en sí.

*Cierre de M1 (síntesis del módulo).* El estudiante sale de M1 con un paper propio, ya elegido, leído en profundidad y evaluado con criterio — la materia prima real del capstone, no un ejercicio de práctica descartable.

### M2 · Reproducción (preparación metodológica — la reproducción de gran escala vive en el capstone, §3.1)

> **La gran pregunta de este módulo: ¿qué se necesita, de verdad, para que "yo obtuve el mismo resultado" sea una afirmación con evidencia — y no una coincidencia?**

**N11.M2.T1 · Elegir un paper reproducible — criterio de selección realista**
- **Objetivo:** evalúa la reproducibilidad práctica de un candidato a reproducción (código disponible o no, cómputo accesible con los recursos reales del estudiante, claim acotado y verificable) antes de comprometerse semanas de trabajo a él.
- **Prerrequisitos:** M1.T5 (paper ya elegido y leído).
- **Competencias:** C-N11-01.
- **Errores habituales:** elegir un paper por lo interesante del resultado sin verificar si el cómputo requerido es accesible; asumir que "tiene código en GitHub" es sinónimo de "reproducible" (el código puede estar incompleto, desactualizado, o depender de datos privados).
- **Modelo mental:** reproducibilidad como propiedad del *claim acotado*, no del paper entero — un paper puede tener un resultado principal inalcanzable con recursos de estudiante y, a la vez, un resultado secundario perfectamente reproducible en una laptop.
- **Por qué:** existe porque el capstone completo depende de esta elección / ahora porque M1 ya dio la lectura crítica necesaria para evaluar candidatos / habilita T2-T5 y el capstone entero.
- **Evidencia de dominio:** produce una comparación real de 2-3 candidatos con criterio de selección explícito (cómputo requerido, disponibilidad de código/datos, claim exacto a reproducir) y una decisión final defendible.
- **Práctica principal:** laboratorio real — búsqueda real en Hugging Face Papers + arXiv de candidatos, con matriz de comparación explícita.
- **Evaluación:** checkpoints DOC-12.
- **Pregunta ingenieril:** ¿qué harías si, ya avanzado el capstone, descubres que el paper elegido no es reproducible con tus recursos — cuál es tu plan B antes de que haga falta?
- **Recursos [🟢 antes]:** MLRC (ML Reproducibility Challenge) — https://reproml.org/challenge_resources/ (criterios reales usados por la comunidad de reproducibilidad para evaluar candidatos).

**N11.M2.T2 · Leer código de investigación ajeno — la arqueología del software, a escala de research**
- **Objetivo:** entiende un repositorio de investigación real (a menudo desordenado, con dependencias frágiles, poca documentación) lo suficiente para identificar qué partes corresponden a qué afirmaciones del paper.
- **Prerrequisitos:** T1; N1.M4.T4 (arqueología del software, herencia directa).
- **Competencias:** C-N11-01.
- **Errores habituales:** intentar entender el repo completo línea por línea antes de ejecutar nada; no distinguir código de investigación (prototipo, con atajos deliberados) de código de producción.
- **Modelo mental:** extensión directa de la "arqueología del software" de N1.M4 — investigar un repo ajeno para responder una pregunta específica ("¿dónde se calcula la métrica X?"), no leerlo de corrido.
- **Por qué:** existe porque reproducir sin entender el código de referencia (cuando existe) es copiar, no reproducir / ahora porque T1 ya dio el candidato elegido / habilita T3.
- **Evidencia de dominio:** localiza, en un repositorio real ajeno, el fragmento exacto de código que implementa una afirmación específica del paper, y explica cómo lo encontró.
- **Práctica principal:** laboratorio real — investigación guiada sobre el repositorio (si existe) del paper elegido en T1, o sobre un repositorio de referencia similar si el propio candidato no tiene código público.
- **Evaluación:** checkpoints DOC-12.
- **Pregunta ingenieril:** si el código público diverge del método descrito en el paper (ocurre con frecuencia real), ¿cuál de los dos documentos tratas como la fuente de verdad, y por qué?
- **Recursos [🔵 durante]:** el repositorio real asociado al paper elegido (si existe) vía Hugging Face Papers, o el propio GitHub/arXiv del paper cuando no aparezca ahí.

**N11.M2.T3 · Diseñar un plan de reproducción**
- **Objetivo:** escribe un plan concreto de reproducción antes de escribir código — qué experimento exacto, qué métrica, qué tolerancia de comparación, qué recursos de cómputo usará (local/Colab/equivalente).
- **Prerrequisitos:** T2.
- **Competencias:** C-N11-01.
- **Errores habituales:** empezar a programar sin plan y descubrir a mitad de camino que el experimento elegido no es el central del paper; no declarar tolerancia numérica de antemano (invita a "ajustar" el criterio después de ver el resultado, mismo error de honestidad que §9 de la guía maestra prohíbe en los `check()` — aquí aplicado a investigación real).
- **Modelo mental:** el plan de reproducción como pre-registro informal — declarar antes de ejecutar qué contaría como éxito, para no mover la meta después de ver el resultado.
- **Por qué:** existe porque reproducir sin plan es explorar, no reproducir (distinción real de la literatura de reproducibilidad) / ahora porque T2 ya dio el código de referencia / habilita T4 y el capstone.
- **Evidencia de dominio:** produce un documento de plan (experimento, métrica, tolerancia, recursos, plazo estimado) revisable por el tutor antes de ejecutar una sola línea del experimento.
- **Práctica principal:** laboratorio real — redacción del plan + revisión.
- **Evaluación:** checkpoints DOC-12; el plan se archiva y se contrasta después contra lo realmente ejecutado (honestidad, siembra M3).
- **Pregunta ingenieril:** si tu métrica reproducida cae dentro de tu tolerancia declarada pero "se siente" distinta a la reportada, ¿qué pesa más — el número o la sensación, y por qué?
- **Recursos [🔵 durante]:** MLRC — plantilla real de reporte de reproducibilidad (mismo recurso de T1, ahora para el formato del plan, no de la selección).

**N11.M2.T4 · Reproducir un resultado a pequeña escala — el flujo completo, de verdad, acotado**
- **Objetivo:** ejecuta el flujo completo de una reproducción (entorno, datos, ejecución, comparación) sobre un resultado pequeño y acotado — no el paper completo del capstone, sino una pieza real y verificable de menor alcance, para practicar el flujo antes de comprometerse a la escala completa.
- **Prerrequisitos:** T3.
- **Competencias:** C-N11-01 (evidencia parcial — la evidencia completa es el capstone).
- **Errores habituales:** subestimar el tiempo de configurar el entorno (versiones de librerías, dependencias fijadas) — la fricción real más común y menos anticipada en reproducibilidad; declarar éxito sin haber corrido el experimento del propio paper de referencia (usar solo el número reportado en vez del propio).
- **Modelo mental:** cada reproducción, sin importar la escala, pasa por las mismas etapas: fijar el entorno exacto → obtener/generar los datos → ejecutar → comparar contra la tolerancia ya declarada en T3 — practicar esas etapas en pequeño reduce el riesgo de fallar por primera vez a gran escala en el capstone.
- **Por qué:** existe porque el capstone no debe ser la primera vez que el estudiante ejecuta el flujo completo / ahora porque T3 ya dio el plan (a escala pequeña, análogo) / habilita T5 y directamente el capstone.
- **Evidencia de dominio:** reproduce un resultado pequeño real (puede ser una pieza acotada del propio paper elegido, o de un paper más pequeño elegido específicamente para esta práctica) y compara su número contra el reportado, con la tolerancia ya declarada.
- **Práctica principal:** laboratorio real — reproducción de punta a punta, acotada.
- **Evaluación:** checkpoints DOC-12.
- **Pregunta ingenieril:** de las horas que te tomó esta reproducción pequeña, ¿cuántas fueron el algoritmo en sí y cuántas fueron fijar el entorno? ¿Qué te dice esa proporción sobre cómo planear el capstone?
- **Recursos [🔵 durante]:** documentación de reproducibilidad de entorno (contenedores/entornos virtuales fijados) — reutiliza N1.M1.T6b (entornos virtuales) y N2.M5 (empaquetado), herencia directa.

**N11.M2.T5 · Comparar y documentar divergencias honestamente — cierra M2**
- **Objetivo:** contrasta el resultado propio contra lo reportado y documenta cualquier divergencia con honestidad metodológica — sin inflar el éxito ni ocultar el fracaso parcial.
- **Prerrequisitos:** T4.
- **Competencias:** C-N11-01; siembra C-N11-04 (M3 completo).
- **Errores habituales:** atribuir cualquier divergencia a "diferencias de hardware" sin investigar causas más probables (semillas aleatorias no fijadas, versión de librería distinta, hiperparámetro mal leído); el sesgo contrario, invalidar un resultado casi idéntico por una diferencia irrelevante dentro de la tolerancia ya declarada.
- **Modelo mental:** una divergencia es información, no un fracaso del estudiante — el objetivo de M2 nunca fue "obtener el número exacto", fue "practicar el método de averiguar por qué el número es el que es".
- **Por qué:** existe porque C-N11-04 exige reportar fielmente incluso cuando el resultado contradice lo esperado, y este es el primer lugar real donde eso puede ocurrir / ahora porque T4 ya produjo un resultado propio que comparar / habilita M3 completo.
- **Evidencia de dominio:** documento breve que compara número propio vs. reportado, identifica al menos una causa plausible de cualquier divergencia (o confirma coincidencia dentro de tolerancia), sin exagerar en ninguna dirección.
- **Práctica principal:** laboratorio real — comparación + documento de divergencia.
- **Evaluación:** checkpoints DOC-12.
- **Pregunta ingenieril:** si tuvieras que apostar a qué causó la divergencia antes de investigarla, ¿qué apostarías primero — y por qué esa y no otra?
- **Recursos [🟣 después]:** Semmelrock et al., *"Reproducibility in machine-learning-based research: Overview, barriers, and drivers"*, AI Magazine 2025 — https://onlinelibrary.wiley.com/doi/10.1002/aaai.70002 (barreras reales documentadas, útil para no inventar explicaciones ad hoc).

*Cierre de M2.* El estudiante practicó el método completo de reproducción a escala controlada. La reproducción de gran escala del paper elegido en M1 ocurre en el capstone (§6), no aquí.

### M3 · Informe científico

> **La gran pregunta de este módulo: ¿qué distingue un reporte honesto de uno que simplemente suena convincente?**

**N11.M3.T1 · Anatomía de un reporte de reproducibilidad honesto**
- **Objetivo:** estructura un reporte de reproducibilidad completo (qué se intentó, qué se obtuvo, qué se comparó, qué queda sin resolver) usando un instrumento real de la industria/academia como referencia.
- **Prerrequisitos:** M2 completo (hay algo real que reportar).
- **Competencias:** C-N11-04.
- **Errores habituales:** escribir el reporte como narrativa de éxito en vez de como evidencia verificable por un tercero; omitir la sección de limitaciones por costumbre (mismo error que M1.T4 detectó en papers ajenos, ahora en el propio).
- **Modelo mental:** el reporte como el mismo tipo de artefacto que el NeurIPS Paper Checklist exige de investigadores reales — cada afirmación con su evidencia citable, cada limitación declarada explícitamente, no descubierta por el lector.
- **Por qué:** existe porque C-N11-04 es una competencia de escritura y honestidad, no de código / ahora porque M2.T5 ya produjo el material bruto (comparación + causas de divergencia) / habilita T2.
- **Evidencia de dominio:** produce un primer borrador de reporte sobre la reproducción pequeña de M2, estructurado contra el checklist real, con al menos una limitación propia declarada explícitamente.
- **Práctica principal:** laboratorio real — redacción estructurada + autoevaluación contra el checklist.
- **Evaluación:** rúbrica de revisión (DOC-12, no `check()`).
- **Pregunta ingenieril:** si tu reporte y el paper original coinciden en la cifra pero por un camino distinto (otro método, no solo otro código), ¿es eso una reproducción exitosa? Defiende tu respuesta.
- **Recursos [🟢 antes]:** NeurIPS Paper Checklist (mismo recurso de M1.T4, ahora usado como instrumento de escritura, no de lectura) — https://neurips.cc/public/guides/PaperChecklist.

**N11.M3.T2 · Reportar cuando el resultado no coincide — atribución y licencias**
- **Objetivo:** redacta la sección de un reporte donde el resultado propio diverge claramente de lo reportado, sin minimizar ni exagerar, y aplica correctamente atribución del trabajo ajeno y respeto de licencias del código/datos usados.
- **Prerrequisitos:** T1.
- **Competencias:** C-N11-04.
- **Errores habituales:** presentar una divergencia real como "reproducción exitosa con matices" (eufemismo que oculta el hallazgo real); reutilizar código o datos ajenos sin atribución o en violación de su licencia declarada (falta de honestidad con consecuencias reales, no solo académicas).
- **Modelo mental:** la honestidad metodológica como su propia forma de rigor — un "no logré reproducir esto, y esta es mi mejor hipótesis de por qué" bien documentado vale más, como evidencia de competencia, que un éxito no verificable.
- **Por qué:** existe porque D5 (honestidad y seguridad) del marco de competencias sitúa exactamente aquí (D5.4) el reporte fiel aunque contradiga lo esperado / ahora porque T1 ya dio la estructura / habilita T3.
- **Evidencia de dominio:** produce la sección de divergencia de un reporte real (propio, sobre M2 o material preliminar del capstone) con al menos una hipótesis de causa raíz declarada con su nivel de confianza, y una nota de atribución/licencia correctamente aplicada sobre cualquier código o dato de terceros reutilizado.
- **Práctica principal:** laboratorio real — redacción + verificación cruzada de atribución/licencias reales del código/datos usados en M2.
- **Evaluación:** rúbrica de revisión.
- **Pregunta ingenieril:** ¿qué información necesitarías ver en el reporte de OTRO estudiante para confiar en que su "no pude reproducirlo" es honesto y no un intento fallido mal ejecutado?
- **Recursos [🔵 durante]:** licencias de código abierto más comunes (MIT, Apache-2.0, GPL) — comparación práctica de qué exige cada una al reutilizar código, no un curso legal completo.

**N11.M3.T3 · Escritura y revisión por pares — cierra M3**
- **Objetivo:** somete un informe propio a revisión por pares (el tutor u otro rol revisor) y revisa el informe de otro con el mismo criterio crítico entrenado en M1.T4.
- **Prerrequisitos:** T2.
- **Competencias:** C-N11-04 (evidencia integradora); ejercita C-N11-05 (defensa, siembra directa hacia el capstone).
- **Errores habituales:** tomar la revisión como ataque personal (mismo error ya corregido en N1.M4.T3, ahora sobre escritura de investigación en vez de código); revisar el trabajo ajeno con menos rigor del que se aplicaría al propio.
- **Modelo mental:** la revisión por pares como el mecanismo real que sostiene la confianza en la ciencia — no una formalidad, el filtro que separa "me convenzo a mí mismo" de "convenzo a alguien que no tiene motivos para creerme".
- **Por qué:** existe porque cierra la competencia de escritura honesta con el instrumento real que la valida (otro lector crítico) / ahora porque T1-T2 dieron el reporte a revisar / habilita directamente la defensa oral del capstone.
- **Evidencia de dominio:** incorpora al menos una corrección real recibida en la revisión, y produce una revisión ajena que el revisado reconoce como útil (no solo cortés).
- **Práctica principal:** laboratorio real — ciclo completo de revisión por pares sobre el reporte de M2/preliminar del capstone.
- **Evaluación:** checkpoints DOC-12 + rúbrica de revisión sobre la calidad de la revisión ajena producida (no solo del reporte propio).
- **Pregunta ingenieril:** ¿qué comentario de revisión te costó más aceptar — y qué te dice esa resistencia sobre qué parte de tu propio trabajo estabas menos dispuesto a cuestionar?
- **Recursos [🟣 después]:** ninguno nuevo — este tema integra M1.T4 (criterio crítico) y M3.T1-T2 (el propio reporte) en un solo ciclo.

*Cierre de M3.* El estudiante practicó reportar con honestidad metodológica sobre material real (M2), con un instrumento de revisión real. El informe del capstone reutiliza este mismo método a la escala completa del paper reproducido allí.

### M4 · Open source (preparación del flujo — la contribución de mayor peso vive en el capstone, §3.1)

> **La gran pregunta de este módulo: ¿qué hace falta para que un extraño, sin ninguna obligación contigo, decida revisar y aceptar tu trabajo?**

**N11.M4.T1 · Leer las convenciones de un proyecto real antes de tocar una línea**
- **Objetivo:** localiza y aplica las convenciones reales de contribución de un proyecto open source (CONTRIBUTING.md, code of conduct, plantillas de issue/PR, estilo de código) antes de proponer cualquier cambio.
- **Prerrequisitos:** N1.M4 completo (flujo Git/PR ya dominado en un contexto controlado).
- **Competencias:** C-N11-03.
- **Errores habituales:** abrir un PR sin haber leído CONTRIBUTING.md (la causa más común de rechazo inmediato en proyectos reales); asumir que las convenciones de un proyecto se parecen a las de otro sin verificar.
- **Modelo mental:** un proyecto open source real tiene su propia cultura escrita — leerla es el equivalente, en este contexto, a leer el paper antes de opinar sobre él (M1.T1): la fuente primaria manda, no la suposición.
- **Por qué:** existe porque C-N11-03 exige seguir las convenciones del proyecto, no las propias / ahora porque el estudiante ya domina el flujo técnico de Git/PR desde N1 / habilita T2.
- **Evidencia de dominio:** resume, de un proyecto real elegido, sus convenciones exactas de contribución citando la fuente (archivo/sección) de cada una.
- **Práctica principal:** laboratorio real — auditoría de convenciones de 2-3 proyectos reales candidatos, del mismo ecosistema que el paper elegido en M1 cuando sea posible (mayor probabilidad de relevancia real para el capstone).
- **Evaluación:** checkpoints DOC-12.
- **Pregunta ingenieril:** si dos proyectos que te interesan tienen convenciones contradictorias entre sí (uno exige commits atómicos pequeños, otro prefiere PRs consolidados), ¿qué te dice eso sobre cómo debes investigar antes de tu primer PR real?
- **Recursos [🟢 antes]:** Open Source Guides — "How to Contribute" — https://opensource.guide/how-to-contribute/ (fuente oficial, no un resumen de terceros).

**N11.M4.T2 · Encontrar y triar un issue abordable**
- **Objetivo:** identifica un issue real abordable (etiquetado "good first issue" o equivalente, o evaluado como tal con criterio propio) y confirma con los mantenedores, antes de empezar a trabajar, que la contribución es bienvenida.
- **Prerrequisitos:** T1.
- **Competencias:** C-N11-03.
- **Errores habituales:** empezar a programar una solución antes de confirmar con los mantenedores que el issue sigue vigente y que la solución propuesta es la esperada (trabajo real desperdiciado, error común documentado en las guías de primera contribución); elegir un issue por facilidad técnica sin verificar que de verdad aporta al proyecto.
- **Modelo mental:** el primer comentario en el issue ("¿puedo trabajar en esto? esta es mi idea de solución") es parte del trabajo, no un trámite — evita construir sobre un malentendido.
- **Por qué:** existe porque C-N11-03 exige seguir el flujo real (issues, no solo PRs) / ahora porque T1 ya dio las convenciones del proyecto elegido / habilita T3.
- **Evidencia de dominio:** obtiene una respuesta real de un mantenedor confirmando que puede trabajar en un issue concreto, con su propio plan de solución ya esbozado en el comentario.
- **Práctica principal:** laboratorio real — búsqueda en `goodfirstissue.dev` / etiquetas nativas del proyecto + comunicación real con mantenedores.
- **Evaluación:** checkpoints DOC-12; evidencia = captura/enlace real de la interacción.
- **Pregunta ingenieril:** si un mantenedor no responde en varios días, ¿qué opciones tienes que no sean simplemente esperar indefinidamente — y cuál elegirías primero?
- **Recursos [🔵 durante]:** Good First Issue — https://goodfirstissue.dev/ · firstcontributions.github.io — https://firstcontributions.github.io/contribute-to-opensource/.

**N11.M4.T3 · Preparar y enviar una contribución real pequeña**
- **Objetivo:** prepara una contribución real (código pequeño o documentación) siguiendo el flujo completo fork→branch→PR con descripción profesional, y la envía a revisión real de terceros.
- **Prerrequisitos:** T2 (issue confirmado).
- **Competencias:** C-N11-03.
- **Errores habituales:** un PR sin tests cuando el proyecto los exige (violación de convención ya leída en T1); descripción de PR vacía (mismo error ya corregido en N1.M4.T3, ahora con consecuencias reales — un mantenedor ajeno no tiene el contexto que un tutor sí tenía).
- **Modelo mental:** el PR real es el mismo "propuesta argumentada" de N1.M4.T3, pero ahora el lector no conoce al estudiante ni tiene ninguna obligación de ser paciente — la calidad de la comunicación importa más, no menos.
- **Por qué:** existe porque C-N11-03 exige la práctica real, no simulada / ahora porque T2 ya aseguró que el trabajo es bienvenido / habilita T4 y el capstone.
- **Evidencia de dominio:** un PR real enviado a un proyecto de terceros, siguiendo todas las convenciones ya auditadas en T1.
- **Práctica principal:** laboratorio real — preparación + envío del PR.
- **Evaluación:** checkpoints DOC-12; evidencia = enlace real al PR.
- **Pregunta ingenieril:** ¿qué parte de tu PR reescribirías si supieras que el mantenedor solo tiene dos minutos para decidir si vale la pena seguir revisándolo?
- **Recursos [🔵 durante]:** "Writing Your First Pull Request" — https://dev.to/opensauced/writing-your-first-pull-request-tips-best-practices-and-ai-powered-tools-for-success-3bg9.

**N11.M4.T4 · Recibir feedback real y responder profesionalmente — cierra M4**
- **Objetivo:** responde con profesionalismo al code review real recibido (cambios solicitados, preguntas, incluso rechazo), iterando sobre el PR hasta su resolución (aceptado, o cerrado con una razón entendida).
- **Prerrequisitos:** T3.
- **Competencias:** C-N11-03 (evidencia integradora del módulo).
- **Errores habituales:** tomar comentarios de revisión técnica como juicio personal; abandonar el PR ante la primera solicitud de cambios en vez de iterar (el patrón real más común de contribuciones que nunca se cierran).
- **Modelo mental:** igual que M3.T3 con informes, el code review es el filtro real que separa "funciona en mi máquina" de "un tercero exigente lo aprueba" — la iteración es parte esperada del proceso, no una señal de fracaso.
- **Por qué:** existe porque C-N11-03 no termina en "enviar un PR", termina en sostener el intercambio hasta su resolución real / ahora porque T3 ya generó el PR real / habilita el capstone, donde esta misma dinámica ocurre a mayor escala y con mayor peso.
- **Evidencia de dominio:** al menos una iteración real completada sobre el PR de T3 en respuesta a feedback real de un mantenedor, documentada con el razonamiento de cada cambio.
- **Práctica principal:** laboratorio real — ciclo de iteración real hasta resolución (aceptado o cerrado con causa entendida — ver §3.3 sobre por qué "aceptado" no siempre depende del estudiante).
- **Evaluación:** checkpoints DOC-12.
- **Pregunta ingenieril:** si el mantenedor rechaza tu PR por una razón que consideras injusta, ¿qué haces — y qué NO haces?
- **Recursos [🟣 después]:** ninguno nuevo — este tema es, en su totalidad, la práctica real del flujo ya leído en T1-T3.

*Cierre de M4.* El estudiante practicó el flujo real de contribución de punta a punta, a escala pequeña. La contribución de mayor peso del capstone reutiliza exactamente este mismo flujo, con más planificación previa dado el mayor riesgo de calendario (§6.4).

## 6. Capstone del nivel — diseño

**Objeto `modalidad:"proyecto"`, hitos, id `n11et11`** — la reproducción del paper elegido en M1, la contribución open source de mayor peso, el informe científico completo, y la defensa oral crítica, integrados como un solo proyecto de varios meses. *(Nomenclatura verificada contra el patrón real de `index.html`: `n1et1`/"Capstone ET1", `n2et2`/"Capstone ET2", `n3et3`/"Capstone ET3" — cada nivel numera su propio capstone secuencialmente, no por Etapa DOC-10; N11 sigue el mismo patrón: `n11et11`.)*

### 6.1 Qué certifica (nunca "obtuvo los números correctos")

Que el estudiante puede sostener, ante examen crítico oral sin guion, una pieza real de trabajo de investigación de principio a fin: elegir bien, ejecutar con honestidad, reportar con fidelidad, defender con criterio — incluyendo defender por qué un resultado no coincidió, si ese fue el caso real.

### 6.2 Hitos propuestos (a calibrar cuando exista contenido real de M1-M4, por la regla anti-cifra-prometida de §8 de la guía maestra)

1. **Paper elegido y plan de reproducción aprobado** — extensión directa de M1.T5 + M2.T1-T3, ahora a la escala completa del paper (no la pieza acotada de M2.T4).
2. **Reproducción ejecutada** — el experimento central del paper, corrido de verdad, con comparación contra lo reportado y tolerancia declarada de antemano (mismo método de M2, a escala completa).
3. **Contribución open source enviada y en proceso de revisión real** — extensión de M4 a un issue de mayor peso, idealmente relacionado con el ecosistema del paper reproducido (siembra de integración real entre ambos hitos, no dos proyectos sueltos).
4. **Informe científico completo** — reproducción + divergencias + atribución/licencias, con el mismo estándar de honestidad de M3, ahora sobre el trabajo de mayor peso del nivel.
5. **Defensa oral crítica** — C-N11-05: responde repreguntas sin guion sobre decisiones tomadas, errores cometidos, y qué haría distinto.

### 6.3 Fuera de alcance (declaración honesta)

No se espera que la reproducción alcance exactamente la cifra reportada en todos los casos (la literatura de reproducibilidad documenta que esto no siempre es posible incluso para investigadores experimentados — ver Semmelrock et al., M2.T5) — se espera el método correcto y el reporte honesto del resultado, coincida o no. No se espera que la contribución open source resuelva un issue de arquitectura mayor del proyecto elegido — se espera una contribución real, revisada por un tercero real, del tamaño apropiado para un investigador junior.

### 6.4 Riesgo de diseño documentado (no resuelto en silencio — para conocimiento del Director)

DOC-10 describe el proyecto de N11 como "reproducción publicada + contribuciones **aceptadas** en open source". La aceptación de un PR depende de un tercero real fuera del control curricular — un mantenedor puede tardar semanas, pedir cambios sustanciales, o rechazar el PR por razones ajenas a su calidad (falta de tiempo del mantenedor, proyecto con baja actividad, etc.). **Propuesta de mitigación, pendiente de confirmación del Director:** el hito 3 se satisface con un PR real enviado, con al menos una ronda de revisión real recibida y respondida profesionalmente (M4.T4) — la aceptación final es la evidencia ideal pero no bloqueante si, documentadamente, la demora es atribuible al mantenedor y no al estudiante. Se recomienda declarar esto explícitamente en la ficha de evaluación del capstone, no decidirlo caso por caso sin criterio escrito.

### 6.5 Modalidad de cómputo

Igual que N5/N6 (guía maestra §6), si la reproducción elegida requiere cómputo no disponible localmente, el estudiante usa un entorno externo (Colab u equivalente) — esto es DOC-12 puro, con sus 13 secciones aplicadas al entorno de cómputo elegido, no una excepción del nivel.

## 7. Compuertas — cobertura de competencias y evaluación del nivel (Paso 5)

**A diferencia de todos los niveles anteriores, N11 no lleva banco de examen separado** (DOC-10 §9, ya citado en la ficha de misión: "el examen aquí ES la reproducción y su defensa"). La compuerta de N11 es el capstone completo (§6) evaluado contra su checklist (§6, `evalu.checklist`) y sostenido en la defensa oral (`evalu.defensa`, hito 5) — no hay ítems rotables NNR-02 que diseñar para este nivel.

Lo que sí exige el Paso 5 (verificado, no solo declarado) es la **tabla de trazabilidad**: cada competencia de DOC-01 debe tener un lugar donde se enseña, se practica, se evalúa y se demuestra — ninguna competencia huérfana, ningún módulo sin competencia servida.

| Competencia | Se enseña | Se practica | Se evalúa | Se demuestra |
|---|---|---|---|---|
| C-N11-01 (reproduce un paper) | M2.T1-T3 (elegir, leer código, planificar) | M2.T4-T5 (reproducción pequeña, comparación honesta) | Checkpoints DOC-12 de M2 completos | Capstone hitos 1-2 (reproducción a escala completa) |
| C-N11-02 (lee papers de frontera con autonomía) | M1.T1-T2 (método de lectura, notación) | M1.T3-T4 (verificación, evaluación crítica) | Checkpoints DOC-12 de M1 completos | Capstone (elección y defensa del paper, hito 5) + M1.T5 (defensa breve, siembra directa) |
| C-N11-03 (contribuye a open source real) | M4.T1-T2 (convenciones, triage de issue) | M4.T3-T4 (PR real, iteración sobre feedback) | Checkpoints DOC-12 de M4 completos | Capstone hito 3 (contribución de mayor peso) |
| C-N11-04 (reporta fielmente, atribución y licencias) | M3.T1-T2 (estructura del reporte, divergencia/licencias) | M2.T5 (honestidad sobre la reproducción pequeña, materia prima directa de M3) | Rúbrica de revisión de M3 (no `check()`) | Capstone hito 4 (informe integrado) |
| C-N11-05 (defiende ante examen crítico oral) | Sembrada en M1.T1 (defender la elección de descarte) y M3.T3 (recibir/dar revisión por pares) | M1.T5 (defensa breve real) y M3.T3 (ciclo de revisión real) | — (no hay instrumento de "evaluación" previo al capstone; se acumula evidencia de práctica, nunca de examen) | Capstone hito 5 (defensa oral crítica completa, sin guion) |

**Verificación de cobertura, módulo por módulo (sin huérfanos):** M1→C-N11-02 · M2→C-N11-01 · M3→C-N11-04 · M4→C-N11-03 · Capstone→las 5, con C-N11-05 consolidada ahí por primera vez a escala completa. Ninguna competencia de DOC-01 (C-N11-01…05) queda sin módulo que la sirva; ningún módulo queda sin competencia principal declarada.

## 8. Herencia entrante (borrador — N7-N10 se construyen en paralelo, no asumida como congelada)

De ET4 completa: el estudiante ya construyó y operó sistemas reales de IA de extremo a extremo — M1.T1 presupone que puede razonar sobre arquitecturas reales sin reintroducirlas. De N3.M4/N6.M4: la disciplina de traducir notación de papers a código ya está instalada — M1.T2-T3 la extienden, no la repiten desde cero. De N1.M4: el flujo Git/PR técnico ya está dominado en contexto controlado — M4 lo extiende a terceros reales, no reenseña sintaxis de Git. **Pendiente de confirmación cuando N7-N10 congelen sus Herencias Declaradas finales** (mismo principio de SYL-N3 §7: no bloquea el avance de este syllabus).

## 9. Herencias declaradas hacia SYL-N12 (borrador — se consolida formalmente en el paso 9 del flujo institucional, no ahora)

| # | N11 siembra | N12 debe recoger |
|---|---|---|
| H-N12-01 (borrador) | Lectura crítica autónoma de fuentes primarias (M1) | N12.M1 (system design) presupone leer documentación/casos de arquitectura reales sin mediación |
| H-N12-02 (borrador) | Honestidad metodológica bajo presión de resultado (M3, capstone) | N12 exige la misma honestidad en design docs defendidos — declarar límites de una arquitectura propuesta, no solo sus fortalezas |
| H-N12-03 (borrador) | Contribución real a un proyecto de terceros con sus propias reglas (M4) | N12.M4 (entrevistas) exige un registro similar de desempeño real ante evaluadores externos, sin guion |
| H-N12-04 (borrador) | Defensa oral crítica sin guion (capstone N11) | N12.M4/M5 exigen exactamente esta habilidad a mayor escala (entrevista de sistema completo + defensa final integradora de la carrera) |

## 10. Bibliografía oficial del nivel *(registro vivo, verificada por búsqueda real, no de memoria)*

| Módulo | Eje | Complementos |
|---|---|---|
| M1 | S. Keshav, "How to Read a Paper" (CCR 2007) | arXiv API user manual · Hugging Face Papers (huggingface.co/papers) |
| M2 | ML Reproducibility Challenge — reproml.org/challenge_resources | Semmelrock et al. 2025 (barreras de reproducibilidad) · Desai et al. 2025 (qué es reproducibilidad en IA/ML) |
| M3 | NeurIPS Paper Checklist Guidelines | Licencias de código abierto (MIT/Apache-2.0/GPL, comparación práctica) |
| M4 | Open Source Guides — "How to Contribute" (opensource.guide) | firstcontributions.github.io · goodfirstissue.dev |

**Nota sobre DOC-11 §4bis (heredada de la guía maestra, no resuelta aquí):** igual que N3, este syllabus cita la bibliografía en esta tabla y en el campo `recursos` de cada ficha del contenido real cuando se construya — no hay campo `recursos` inline en el objeto "día" según el esquema actual verificado en `index.html`. Se documenta esta misma ambigüedad heredada en la auditoría de cierre, no se decide en silencio.

## 11. Observaciones de ejecución

| # | Fecha | Observación | Tipo |
|---|---|---|---|
| — | — | *(se inaugura con la construcción real de M1)* | — |

## 12. Cierre (de este paso, no del nivel)

17 temas con ficha pedagógica completa (5+5+3+4) más el diseño del capstone integrador. La decisión estructural más importante del nivel — preparación acotada en los módulos, integración de gran escala en el capstone — quedó explícita y aprobada antes de instanciar una sola ficha, con su mecanismo técnico confirmado contra el código real de `index.html`, no supuesto. Dos riesgos reales quedaron documentados para el Director en vez de resueltos en silencio: la incertidumbre de calendario del capstone (§3.3) y la dependencia de aceptación externa en M4/hito 3 (§6.4). Cobertura de competencias verificada sin huérfanos (§7).

**Actualización (misma jornada) — Paso 2 completo.** Los 17 temas descritos arriba ya no son solo diseño: existen como contenido real en `index.html` (`const LEVEL11=[...]`, ids `n11m1t1`…`n11m4t4` + capstone `n11et11`), cada uno cumpliendo las 13 secciones de DOC-12, con investigación pedagógica real documentada en `docs/investigacion/n11-m1-*.md` a `n11-m4-*.md`. Verificado: `node --check` limpio sobre el bloque `<script>` completo, 218 ids de nivel top-level únicos en todo el Campus, `LEVELS`/`LEVEL_META` sin tocar. Lo que sigue: Paso 9b (auditoría adversarial, §13) y el Informe Final de Nivel.
