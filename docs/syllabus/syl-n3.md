# SYL-N3 — Syllabus del Nivel 3 · Matemáticas para IA

## Control del documento (conforme a DOC-00 §15.4)

| Campo | Valor |
|---|---|
| **Document Key** | SYL-N3 · Tier T2 |
| **Versión / Estado** | **0.8.0-draft** · Documento de Diseño + M1+M2+M3+M4 completos (24/24 temas) + Capstone ET3 + Paso 8 (compuertas + banco de examen) completos — primer paso del flujo institucional de 9 pasos (DOC-03 §8bis / EVT-022), pendiente: docs de investigación, Paso 9 (auditoría desde N4 + Herencias Declaradas finales), auditoría adversarial y v1.0.0 |
| **Autoridad de origen** | DOC-10 §6 (interior de N3) · DOC-00 14.8.3 · DOC-01 (C-N3-01…04) |
| **Depende de** | DOC-10 v1.0.2 (mapa, con la bibliografía de M3 ya ampliada con Seeing Theory) · DOC-00 (§13, §14, §16, 17.6) · DOC-01 · DOC-02 (instrumentos) · DOC-03 (método) · **SYL-N2 §15 (Herencias Declaradas H-N3-01…05 — el contrato de entrada que este documento resuelve)** |
| **Produce / desarrolla** | La estructura docente completa de N3: fichas pedagógicas por tema, proyecto de nivel (mini-librería + lectura de paper), compuerta, y las Herencias Declaradas hacia SYL-N4 |
| **Estándar de calidad** | El mismo de SYL-N1/SYL-N2: *"Si otro profesor excepcional impartiera este nivel utilizando únicamente el syllabus, ¿obtendría prácticamente la misma calidad formativa?"* |
| **Historial** | 0.1.0-draft (2026-07-21): Documento de Diseño — investigación real verificada por WebFetch (3Blue1Brown, Coursera "Mathematics for ML" de Imperial College/Deisenroth, Khan Academy, Seeing Theory), verificación empírica directa de `numpy` en la build real de Pyodide (v0.26.4) ya fijada en el Campus, y 3 decisiones de diseño confirmadas por el Director (M4 secuencial al final; bibliografía de M3 ampliada con Seeing Theory en vez de aceptar Khan Academy como único ancla real; los 5 estándares específicos de N2 adaptados sin narrativa interpersonal — "Momento Fundacional" pasa a ser "el quiebre de intuición", "la garantía que el sistema adquiere" se declara ausente) · 0.2.0-draft (2026-07-21): completados los 5 estándares en los 4 módulos (M1 ganó "lo que deja de sorprender"; M2 ganó "la limitación humana que compensa"; M3 ganó "lo que deja de sorprender"; M4 ganó "el quiebre de intuición" y "el supuesto que destruye", que la tabla resumen ya prometía sin haberlos escrito) — inconsistencia real encontrada por revisión propia antes de la revisión del Director, no señalada por él. **Densidad ampliada por instrucción directa del Director** ("más información, más ejercicios, más problemas, recordando el nivel"): §3.8 nueva, más días y ejercicios por tema que el estándar de N1/N2, justificado en la práctica distribuida que la literatura de educación matemática exige para fluidez procedimental (no en "más por más") · 0.2.1 (2026-07-21): **primer contenido real construido** — `LEVEL3` creado en `index.html`, M1.T1 (Vectores) completo bajo el nuevo estándar de densidad: 3 días, 12 ejercicios + laboratorio integrador (centroide, puente directo a k-means/N4) + desafío final inédito (aliasing de listas de vectores, mismo mecanismo de N1 aplicado a vectores). Primer uso real de `numpy` en todo el Campus (ejercicio 8, carga lazy agregada al runner de Pyodide). Todo verificado con ejecución real de Python antes de escribirse; `node --check` limpio; harness de Node con 20 aserciones (correcto + incorrecto), 0 fallos; 557 ids en todo el Campus, 0 duplicados. `LEVEL_META` ganó entrada `n3`. Pendiente: revisión módulo por módulo con el Director, capstone, compuertas, auditoría desde N4, Herencias Declaradas finales, auditoría adversarial, v1.0.0; construir M1.T2-T7 y M2-M4 completos · 0.3.0 (2026-07-21): **M1 · Álgebra lineal computacional completo — 7 temas, 21 días, 85 ejercicios verificados** (T2 Combinaciones lineales/span/base, T3 Matrices como transformaciones, T4 Determinante 3D, T5 Sistemas/inversa/espacio nulo — aplica directamente el hallazgo empírico de `numpy.linalg.inv()` de §3.3 —, T6 Producto punto/proyecciones/similitud coseno, T7 Autovalores/autovectores/mini-PCA, cerrando con reconstrucción `V·Λ·V⁻¹`). **Disciplina de verificación reforzada tras encontrar 5 errores reales en una auditoría propia antes de comitear**: construido un harness de Node que ejecuta la solución de referencia de cada ejercicio en Python real y la compara contra el `check()` real extraído de `index.html` (no solo contra números tecleados a mano) — encontró (a) el laboratorio de T2 esperaba `(2, [1, 3])` cuando el resultado real es `(2, [0, 1, 2, 3])`; (b) T3.e9 tenía una matriz de prueba con 1 fila en vez de 2, dando un mensaje de error distinto al esperado; (c) T4.e9 comparaba `mio == referencia` (flotante) exacto contra un determinante de numpy, violando el propio principio de tolerancia que el tema enseña — numpy usa eliminación LU y introduce error real de redondeo incluso en casos limpios (5 vs 5.000000000000001); (d) y (e) el laboratorio y ejercicio 10 de T7 (mini-PCA) tenían autovalores/autovectores/proyecciones inventados a mano en vez de calculados, corregidos con `numpy.cov`/`numpy.linalg.eig` reales. Los 3 ejercicios que tocan `numpy.linalg.inv()` sobre matriz singular (T5.e4, T5.e9, T5.x) se verificaron aparte contra Pyodide real (no Python nativo, que sí lanza `LinAlgError` y daría una falsa alarma). Verificado: `node --check` limpio en los 4 niveles; harness final 85/85 pass (3 omitidos, ya verificados en Pyodide real); 649 ids en todo el Campus, 0 duplicados. Sigue: M2 · Cálculo y optimización · 0.4.0 (2026-07-21): **M2 · Cálculo y optimización completo — 6 temas, 18 días, 70 ejercicios verificados** (T1 la derivada como límite/aproximación numérica, T2 reglas de derivación —cadena y producto—, T3 derivadas parciales y gradiente, T4 descenso de gradiente 1D/2D con tasa de aprendizaje/divergencia/mínimos locales vs. globales, T5 series de Taylor —orden 0/1/2 y radio de confianza—, T6 regresión lineal como descenso de gradiente sobre el MSE, cerrando M2 con datos sintéticos reproducibles vía `random.seed`). Todo derivado desde cero en Python puro (sin sympy), con numpy reservado solo para verificación puntual, conforme al principio de DOC-10. **Disciplina de verificación aplicada DURANTE la construcción (no solo al cierre)**: cada valor numérico se calculó primero con un script real (`verify_m2t*.py`) antes de teclearlo en un `check()` — este método propio, no un harness posterior, encontró y corrigió 5 errores reales antes de comitear: (a) T1.retoFinal esperaba `-1.0` para la derivada numérica de `abs(x)` en un punto simétrico alrededor de su vértice; el valor real es `0.0` (el muestreo simétrico cancela exactamente, un hallazgo más interesante que el error original: la derivada numérica sugiere falsamente un punto crítico donde la función ni siquiera es diferenciable); (b) T2.e10 esperaba `768` para un gradiente en cadena de 3 factores con objetivo=4; el valor real es `1536` (además corregido un razonamiento invertido en la pista: objetivo=4 está MÁS lejos de la salida real de la red que objetivo=10, luego produce un gradiente MAYOR, no menor); (c) un error real de sintaxis JavaScript en la pista de T4.e5 (comillas dobles sin escapar dentro de un string de comillas dobles, que habría roto la carga de la página — encontrado por `grep`, confirmado por `node --check`); (d) T5.retoFinal esperaba `9.7207/9.3891/0.3315` para una aproximación de Taylor de orden 1 de `exp(x)-5x` a distancia 1; los valores reales son `-0.2219/5.0855/5.3074` (un error de estimación más grande y más ilustrativo que el original); (e) T6.e2 esperaba el gradiente `(-10.0, -5.0)`; el valor real es `(-14.0, -10.0)`. **Harness comprehensivo de cierre (mismo patrón institucionalizado en EVT-067)** construido para los 70 ejercicios/retos/desafíos de M2: ejecuta la solución de referencia de cada uno en Python real y la compara contra el `check()` real extraído de `index.html`. Encontró un sexto bug, más severo que cualquiera de M1 — **T2.e4 tenía un `check()` que no podía aprobar NINGÚN envío, ni correcto ni incorrecto**: la expresión regular usaba `$` sin la bandera `m` (multilínea), por lo que solo coincidía con el final absoluto del string completo, nunca con el final de una línea intermedia; como la línea a verificar (`derivada_rota = df(g(x0))`) nunca es la última línea del código (le siguen más líneas), la condición era matemáticamente imposible de cumplir. Corregido añadiendo la bandera `m`. (Nota metodológica: el harness también señaló inicialmente T1.e10 como fallo por una discrepancia de "ó" vs. "�" — investigado y confirmado como un artefacto del propio harness, no del contenido: Python en Windows escribe su salida estándar en la página de códigos del sistema, no UTF-8, al ejecutarse mediante un pipe; se corrigió fijando `PYTHONIOENCODING=utf-8` en el arnés, sin tocar `index.html` — Pyodide en el navegador nunca pasa por esa ruta de codificación). Verificado: `node --check` limpio en los 4 niveles; harness final 70/70 pass; 0 duplicados de id en los 737 ids de todo el Campus. Sigue: M3 · Probabilidad y estadística · 0.5.0 (2026-07-21): **M3 · Probabilidad y estadística completo — 6 temas, 18 días, 72 ejercicios verificados** (T1 espacio muestral/probabilidad condicional/falacia del fiscal, T2 variables aleatorias y distribuciones —Bernoulli, binomial, normal, con Teorema del Límite Central—, T3 esperanza/varianza/covarianza, T4 inferencia básica —muestreo, error estándar, intervalos de confianza, verificación empírica de cobertura—, T5 pruebas de hipótesis por permutación —sin depender de fórmulas cerradas de distribuciones—, T6 estadística aplicada a un dataset real, cerrando M3 con un mini-proyecto EDA completo: inspección → limpieza → covarianza → regresión (M2.T6)). **Hallazgo técnico real verificado antes de escribir (mismo principio de §3.3 aplicado ahora a M3):** `numpy.var()` usa por defecto la convención POBLACIONAL (`ddof=0`, divide entre `n`), pero `numpy.cov()` usa por defecto la convención MUESTRAL (`ddof=1`, divide entre `n-1`) — dos funciones de la misma librería con defaults distintos; confirmado con ejecución real y convertido en lección explícita de T3 en vez de una fuente silenciosa de números que no coinciden. **Disciplina de verificación aplicada durante la construcción, reforzada con verificación de reproducibilidad en Pyodide real para cada primitivo nuevo de `random` usado por primera vez en el Campus** (`random.gauss`, `random.sample`, `random.shuffle`, `random.randint` — los 4 confirmados byte-idénticos entre Python nativo y Pyodide real antes de comitear cualquier valor a un `check()`). El harness comprehensivo de cierre (mismo patrón de EVT-067/EVT-068) encontró 1 error real: el desafío final de T6 usaba los coeficientes YA REDONDEADOS de un ejercicio anterior (m=2.834, b=4.7739) para una predicción, pero el `check()` esperaba el resultado de una regresión recalculada a precisión completa — una propagación de redondeo real (1421.77 vs. 1421.78, diferencia de 0.01) que el harness detectó comparando contra la salida REAL del código exacto del ejercicio, no contra un script de verificación separado; corregido ajustando el `check()` a la salida real y verificada del código tal como está escrito. Verificado: `node --check` limpio sobre el bloque `<script>` completo (no solo `LEVEL3`); harness final 72/72 pass; 827 ids en todo el Campus, 0 duplicados. Sigue: M4 · Lectura matemática · 0.6.0 (2026-07-21): **M4 · Lectura matemática completo — 5 temas, 10 días, 55 ejercicios verificados. Con esto, los 24 temas planificados de N3 están construidos por completo (M1:7 + M2:6 + M3:6 + M4:5).** Construidos T1 (El alfabeto de la IA — griego, sumatorias Σ y productorias Π como bucles for/acumuladores, con el desfase de índices 1..n matemático vs. 0..n-1 de Python como desafío final), T2 (Álgebra lineal en notación de papers — y=Wx+b, transposición Wᵀ, norma ‖x‖, con el bug real de olvidar transponer), T3 (Cálculo en notación de papers — ∇, ∂ vs. d, argmin/argmax como el punto que minimiza, no el valor mínimo), T4 (Probabilidad en notación de papers — E[·], Var[·], P(·|·) con múltiples condiciones, X~N(μ,σ²), con la identidad real Var(X)=E[X²]-(E[X])² verificada por ejecución), y T5 (Lectura completa de un paper — cierra M4 y TODO N3 con una lectura comentada real: la fórmula de un clasificador binario simple ŷ=σ(wᵀx+b) con σ(z)=1/(1+e⁻ᶻ), decodificada símbolo por símbolo y traducida a código verificado — la misma actividad que el proyecto de nivel declarado en DOC-10 §6). **Hallazgo pedagógico real, no forzado, para el cierre de T5:** el símbolo griego σ significa "desviación estándar" en M3.T3/M4.T4, pero "función sigmoide" en T5 — la MISMA letra, dos conceptos matemáticos completamente distintos; usado como desafío final para enseñar, en el último ejercicio de todo el nivel, que ni siquiera un símbolo ya familiar garantiza significado sin verificar el contexto. Densidad de 2 días/tema (no 3, según lo fijado en SYL-N3 §3.8 para M4 por ser habilidad de lectura, no práctica procedimental repetida). Verificado: `node --check` limpio sobre el bloque `<script>` completo; harness final 55/55 pass; 892 ids en todo el Campus, 0 duplicados. **Sigue: capstone de nivel detallado, compuertas, docs/investigacion/n3-*.md, auditoría integral, Herencias Declaradas finales, auditoría adversarial, v1.0.0.** · 0.7.0 (2026-07-21): **Capstone ET3 "La matemática que puedes derivar en vivo" completo**, siguiendo la modalidad `proyecto` ya institucionalizada en N1 (ET1, EVT-041) y N2 (ET2) — mismo esquema técnico (`modalidad:"proyecto"`, 5 hitos autodeclarados vía checkbox + evidencia en bitácora, registro en `S.ph[id]`, defensa oral como certificación real, no el checkbox). **Adaptación deliberada, no copia mecánica:** a diferencia de ET1/ET2 (nivel `real`, DOC-12), N3 es 100% Pyodide (§3.1) — el capstone NO incluye el campo `flujoDeGit` ni ninguna narrativa de ramas/Pull Requests, porque N3 nunca sale del Campus. Los 5 hitos integran los 4 módulos: h1 (propuesta: alcance de la mini-librería + elección de un paper distinto al ejemplo ya resuelto en M4.T5), h2 (núcleo M1+M2 verificado contra numpy con tolerancia explícita), h3 (núcleo M3 + una regresión de principio a fin usando la propia librería, no funciones sueltas), h4 (lectura comentada del paper elegido, aplicando M4 sistemáticamente), h5 (cierre + defensa con derivación en vivo de 3 funciones). Verificado: `node --check` limpio sobre el bloque `<script>` completo; 893 ids en todo el Campus, 0 duplicados; verificación adicional en navegador real (Playwright/Chromium) confirmando que `renderProyectoDay` renderiza el objeto sin excepciones, con sus 5 hitos y desbloqueo secuencial correcto (mismo patrón ya usado en EVT-066 para numpy). Sigue: compuertas, docs/investigacion/n3-*.md, auditoría integral, Herencias Declaradas finales, auditoría adversarial, v1.0.0. · 0.8.0 (2026-07-21): **Paso 8 ejecutado — Revisión global del Capstone ET3 y las compuertas (§8, nueva).** Diseño de síntesis del capstone documentado (por qué el hito 3 exige reutilizar las funciones del hito 2, no reimplementaciones sueltas); diferencia estructural declarada honestamente frente a N1/N2 (sin narrativa de ramas/PRs — N3 es 100% Pyodide); defensa con derivación en vivo de 3 funciones + pregunta de validación final. Tabla de cobertura de competencias: las 4 competencias C-N3-01…04 mapean 1:1 con los 4 módulos, cobertura completa sin hallazgos de omisión (a diferencia del caso C-N2-07 de SYL-N2). **Banco de examen rotable construido** (NNR-02): 8 ítems (2 por competencia) × 3 variantes cada uno = 24 variantes numéricas, todas verificadas por ejecución real de Python antes de fijarse en el documento — mismo principio de verificación empírica que rigió cada ejercicio de M1-M4. Pendiente de aprobación formal por el Director. Sigue: docs/investigacion/n3-*.md, Paso 9 (auditoría desde N4 + Herencias Declaradas finales), auditoría adversarial, v1.0.0. |

---

## 1. Tabla resumen

| Módulo | Temas | Días/tema | Ejercicios/tema* | Semanas est.** | Competencias | Quiebre de intuición |
|---|---|---|---|---|---|---|
| M1 · Álgebra lineal computacional | 7 | 3 | 12-15 | ~6 | C-N3-01 | T3: una matriz no es una tabla de números — es una transformación del espacio entero |
| M2 · Cálculo y optimización | 6 | 3 | 12-15 | ~5 | C-N3-02 | T4: el descenso de gradiente encuentra un mínimo sin "ver" la función completa, solo su pendiente local |
| M3 · Probabilidad y estadística | 6 | 3 | 12-15 | ~4,5 | C-N3-03 | T1: la intuición humana sobre el azar está sistemáticamente sesgada, y se puede demostrar con un solo ejemplo (la falacia del fiscal) |
| M4 · Lectura matemática | 5 | 2 | ~9 | ~2,5 | C-N3-04 | T5: un párrafo de notación que parecía ilegible es, letra por letra, exactamente el código que el estudiante ya sabe escribir |
| Proyecto de nivel | — | — | — | ~2 | Todas | Integración: mini-librería propia + lectura comentada de un paper |

*\*Densidad ampliada frente al estándar de N1/N2 (~9 ejercicios/tema, 2 días) — ver §3.8, justificada en práctica distribuida/intercalada (Rohrer & Taylor 2007; Rohrer, Dedrick & Stershic 2015), no en volumen por sí mismo.*
*\*\*~20 semanas totales (~4,6 meses) bajo esta densidad — supera la estimación original de DOC-10 (~3 meses/~300h). Se declara honestamente, mismo principio de transparencia que EVT-062 ya aplicó a N0-N2: el calendario estima, la compuerta decide (DOC-10 §1, 14.2).*

*\*~3 meses · ~300 h a dedicación pactada (25h/semana) — ver nota metodológica en §3.5 sobre qué cuenta como "hora construida" antes de comparar este número contra el patrón de gap ya documentado en EVT-062 para N0-N2.*

## 2. Identidad del nivel

Por referencia a DOC-10 §6: **N3 · Matemáticas para IA** no es "aprender matemáticas" en abstracto — es la **consolidación formal** de algo que ya viene goteando desde N1 (la pista 🧮, mencionada explícitamente en la bibliografía de N1 y en el CU-30 del Blueprint: "Matemáticas en goteo desde N1; N3 consolida, no presenta"). El estudiante no llega en blanco: llega con intuición visual sembrada y sin el aparato formal para operar con ella. Entrada: N2 Superado (NNR-01) — aunque la cadena de dependencia técnica real es N1→N3 (la auditoría de SYL-N2 §15 ya confirmó que N2 no exige ningún prerrequisito matemático propio). Salida: examen + proyecto + defensa (derivar y explicar en vivo) → habilita ET3 completa (N4-N6, Machine Learning/Deep Learning/Transformers). Si N1 enseñó a construir software y N2 a asumir responsabilidad sobre él, N3 enseña **el lenguaje en el que ese software, desde N4, empezará a razonar sobre datos e incertidumbre.**

## 3. Principios de ejecución

1. **Principio "100% Campus"** *(a diferencia de N1/N2 — decisión arquitectónica explícita, no un descuido)*: aplicando el criterio de frontera de DOC-12 §5 (¿el estudiante sale del navegador? ¿depende del SO? ¿necesita cuentas externas? ¿estado de archivo persistente?), N3 responde "no" a las tres — el proyecto declarado en DOC-10 ("mini-librería propia... numpy solo para verificar") no requiere nada que Pyodide no pueda dar. N3 vive íntegramente en Pyodide (DOC-11), sin ningún laboratorio de entorno real, igual que N0 y la mayor parte de N1.M1-M3.
2. **Primer paquete binario del Campus**: hasta N2, este Campus solo cargó la biblioteca estándar de Python dentro de Pyodide. N3.M1 es la primera vez que se llama `pyodide.loadPackage("numpy")`. Verificado empíricamente (2026-07-21, misma build v0.26.4 ya fijada en `index.html`): la carga funciona sin fricción real (≈ unos segundos adicionales la primera vez, cacheado después).
3. **Hallazgo técnico real que condiciona el diseño de M1 (verificado con ejecución directa, no documentación de terceros):** en esta build de Pyodide, `numpy.linalg.inv()` sobre una matriz singular **NO lanza `LinAlgError`** como en numpy nativo — devuelve silenciosamente una matriz de `nan` (WASM no soporta excepciones de punto flotante de la misma forma que CPython nativo; confirmado también en el issue público pyodide/pyodide#4859). Ninguna lección de M1 puede enseñar "captura el error con try/except" para detectar una matriz singular — la disciplina correcta, y la que este syllabus adopta, es verificar `np.isnan()` en el resultado o comparar `det() == 0` (con tolerancia) ANTES de invertir. Esto se declara explícitamente en la ficha de M1.T5.
4. **Intuición geométrica antes que formalismo** *(principio nuevo de este nivel, anclado en la bibliografía que DOC-10 cita primero)*: cada tema de M1/M2/M3 presenta el objeto matemático como imagen mental manipulable (vector como flecha, derivada como pendiente, matriz como transformación del espacio, distribución como forma) antes que su forma algebraica — invirtiendo el orden de "fórmula primero" que la mayoría de cursos usan, y que 3Blue1Brown/Seeing Theory combaten explícitamente por diseño.
5. **Verificación numérica como disciplina heredada** (resuelve H-N3-01 de SYL-N2 §15): toda operación implementada a mano se contrasta contra `numpy` con tolerancias explícitas (`abs(a-b) < 1e-9`, nunca `==` sobre flotantes) antes de darse por correcta.
6. **Triple justificación** y **Método DOC-03** — heredados sin cambio de N1/N2.
7. **Nota metodológica sobre horas declaradas** *(transparencia proactiva, dado el patrón ya documentado en EVT-062 para N0-N2)*: las ~300h/~3 meses de este nivel incluyen, de forma explícita y a diferencia de cómo se contabilizó N1/N2, el consumo real de la bibliografía externa citada — las ~58h ya verificadas de la especialización de Coursera (Parte A.2 de la investigación) más los ≈26 videos de 3Blue1Brown. El contenido que la Academia construye en el Campus (fichas + ejercicios) no pretende sustituir esas horas, sino andamiarlas y verificarlas — mismo principio que ya rige la cita de CS50/Missing Semester en N1, ahora hecho explícito en el cálculo de horas para no repetir una comparación desigual.
8. **Densidad de práctica ampliada frente al estándar de N1/N2** *(instrucción directa del Director — "más información, más ejercicios, más problemas, recordando el nivel")*, justificada con evidencia real, no por volumen en sí mismo: la investigación en educación matemática sobre práctica distribuida e intercalada (Rohrer & Taylor, 2007, "The shuffling of mathematics problems improves learning", *Instructional Science*; Rohrer, Dedrick & Stershic, 2015, "Interleaved practice improves mathematics learning", *Journal of Educational Psychology*) muestra consistentemente que la fluidez procedimental en matemáticas depende de práctica repartida en más sesiones y con problemas variados/intercalados, no concentrada en una sola sesión — a diferencia de la mayoría de temas de programación de N1/N2, donde 2 días (fundamentos + laboratorio) bastan porque la habilidad se ejercita una vez que el concepto se entiende. **Regla aplicada: M1/M2/M3 (los tres módulos de práctica procedimental pesada) usan 3 días por tema en vez de 2** (Día 1 · fundamentos e intuición; Día 2 · práctica extendida con problemas variados y graduados en dificultad; Día 3 · laboratorio integrador + desafío final inédito), con **12-15 ejercicios totales por tema** (frente a los ~9 del estándar de N1/N2). **M4 permanece en 2 días** (~9 ejercicios): es una habilidad de lectura/traducción, no de práctica procedimental repetida, y ya está correctamente escalada frente a su propio alcance (DOC-10 la declara el módulo más corto del nivel).

## 4. Estructura y grafo local

Troncal: `M1 → M2 → M3 → M4`. M2 depende realmente de M1 (el gradiente y el jacobiano necesitan la literatura vectorial de M1 — la propia especialización de Coursera lo confirma: su Curso 2 declara explícitamente que reutiliza las matrices y vectores del Curso 1). M3 depende débilmente de M1 (matrices de covarianza) y no depende de M2 de forma dura. M4 se construye secuencial y de cierre — decisión confirmada por el Director: M4 mezcla símbolos de M1+M2+M3 simultáneamente, así que no hay nada real que practicar hasta que los tres módulos anteriores existan completos.

**Nota de implementación (obligatoria, mismo texto institucional que rige todo SYL-Nx desde EVT-034):** el Campus presenta un recorrido lineal único, sin bifurcaciones de navegación (DOC-07 §Adenda, EVT-034). Ninguna referencia a "M3 depende débilmente de M2" debe interpretarse como alternancia real de navegación — la implementación siempre resuelve a una secuencia lineal fija (M1→M2→M3→M4), decidida antes de construir el contenido.

## 5. Fichas pedagógicas por tema

*Plantilla oficial heredada de SYL-N1/SYL-N2 (10 campos + condicionales). Los 5 estándares específicos de N2 se aplican adaptados por decisión confirmada del Director: **gran pregunta** y **gran idea de diez años** (universales desde N1, sin cambio), **el supuesto que destruye** y **la limitación humana que compensa** (encajan bien, se mantienen), **el quiebre de intuición** (adaptación de "Momento Fundacional" sin la narrativa de responsabilidad-hacia-otros — un instante preciso, no un tema entero), y **la garantía que el sistema adquiere** — declarada ausente en este nivel: N3 no construye un sistema persistente con propiedades tipo contrato estable, y forzar esta categoría sería relleno redundante con "idea universal".*

### M1 · Álgebra lineal computacional

> **La gran pregunta de este módulo: ¿qué significa, geométricamente, multiplicar por una matriz?**

**N3.M1.T1 · Vectores: significado geométrico, suma y escalar**
- **Objetivo:** representa vectores como flechas y como listas de números, opera suma y escala, y traduce entre ambas interpretaciones sin perderse en ninguna.
- **Prerrequisitos:** N2 Superado; álgebra de secundaria.
- **Competencias:** C-N3-01.
- **Errores habituales:** tratar un vector como "solo una lista de números", perdiendo el significado geométrico; sumar vectores de dimensiones distintas sin detectar el error; confundir un vector (dirección+magnitud, origen libre) con un punto (posición fija).
- **Modelo mental:** el vector como **flecha con origen libre** — lo que importa es dirección y magnitud, no dónde "vive" en la página.
- **Por qué:** existe porque cada dato de un modelo de IA (una imagen, una palabra, un perfil de usuario) se representa como vector / ahora porque el estudiante ya domina listas de N1 y puede reinterpretarlas geométricamente / habilita todo M1-M3.
- **Evidencia de dominio:** dado un par de vectores, calcula suma y escala a mano y explica el resultado geométricamente, no solo numéricamente.
- **Práctica principal:** implementar suma/escala de vectores como listas de Python puro, verificado contra `numpy` con tolerancia explícita.
- **Evaluación:** estándar (RM-03).
- **Pregunta ingenieril:** si un vector representa una imagen de 784 números (28×28 píxeles), ¿qué significa "sumar dos imágenes"? ¿El resultado sigue siendo una imagen válida?

**N3.M1.T2 · Combinaciones lineales, span y base**
- **Objetivo:** explica qué combinaciones de un conjunto de vectores son alcanzables (span), y qué hace que un conjunto sea una base.
- **Prerrequisitos:** T1.
- **Competencias:** C-N3-01.
- **Errores habituales:** creer que "más vectores siempre dan más span"; no distinguir vectores linealmente independientes de dependientes; confundir "base" con "cualquier conjunto de vectores".
- **Modelo mental:** el span como **el territorio alcanzable** combinando flechas con cualquier escala — una base es el conjunto más pequeño que cubre todo ese territorio, sin redundancia.
- **Por qué:** existe porque entender qué es "alcanzable" con un conjunto de vectores es la pregunta detrás de rango y dimensión / ahora porque T1 ya dio el vocabulario de suma/escala / habilita T3 (toda transformación lineal se define por dónde manda a la base).
- **Evidencia de dominio:** dado un conjunto de 3 vectores en 2D, determina si son linealmente independientes y describe el span resultante.
- **Práctica principal:** implementar un verificador de independencia lineal simple (2D/3D) contrastado contra `numpy.linalg.matrix_rank`.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** si tienes 784 píxeles pero las imágenes reales de dígitos manuscritos solo ocupan una fracción minúscula de ese espacio, ¿qué te dice eso sobre el "span real" de los datos frente al span teórico?

**N3.M1.T3 · Matrices como transformaciones lineales; multiplicación como composición**
- **Objetivo:** interpreta una matriz como una función que transforma el espacio (no como una tabla de números), y la multiplicación de matrices como composición de transformaciones.
- **Prerrequisitos:** T2.
- **Competencias:** C-N3-01.
- **Errores habituales:** ver una matriz como una "tabla" sin significado activo; creer que `AB = BA` siempre (conmutatividad falsa); aplicar la multiplicación mecánicamente sin verificar dimensiones compatibles.
- **Modelo mental:** la matriz como **una máquina que mueve el espacio entero** — cada columna dice dónde termina un vector base; multiplicar matrices es aplicar una máquina después de otra.
- **Por qué:** existe porque toda capa de una red neuronal, desde N5, ES una transformación lineal (más una no-linealidad) / ahora porque T1-T2 ya dieron vectores y base / habilita T4-T7 completos.
- **Evidencia de dominio:** dada una matriz 2×2, predice y dibuja (o describe) qué le pasa a un cuadrado unitario al transformarlo, antes de calcular numéricamente.
- **Práctica principal:** implementar multiplicación matriz-vector y matriz-matriz desde cero (bucles), verificado contra `numpy` con tolerancia.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** ¿por qué el orden en que compones dos transformaciones (rotar y luego escalar vs. escalar y luego rotar) puede dar resultados distintos, cuando sumar números nunca depende del orden?
- **El quiebre de intuición de M1:** el instante preciso donde `AB ≠ BA` deja de ser "una regla arbitraria que hay que memorizar" y se vuelve obvio geométricamente — rotar 90° y luego estirar en x no es lo mismo que estirar en x y luego rotar 90°. Se construye con un ejemplo dibujado/trazado a mano ANTES de calcular, para que el choque sea real, no anunciado.
- **El supuesto que destruye:** "una matriz es una tabla de números organizados en filas y columnas" — se destruye al ver que es, en realidad, una función.

**N3.M1.T4 · Transformaciones en 3D y el determinante**
- **Objetivo:** extiende la intuición de transformaciones a 3 dimensiones y calcula/interpreta el determinante como factor de escala de área/volumen.
- **Prerrequisitos:** T3.
- **Competencias:** C-N3-01.
- **Errores habituales:** memorizar la fórmula del determinante sin ninguna intuición de qué mide; no notar que un determinante 0 significa "colapsar una dimensión".
- **Modelo mental:** el determinante como **cuánto se estira o encoge el espacio** al aplicar la transformación — negativo significa que además se invierte la orientación.
- **Por qué:** existe porque el determinante decide si una matriz es invertible (T5) / ahora porque T3 ya dio la intuición de transformación / habilita T5 directamente.
- **Evidencia de dominio:** predice si el determinante de una matriz dada es positivo, negativo o cero SOLO mirando cómo transforma el espacio, antes de calcular.
- **Práctica principal:** implementar el cálculo del determinante 2×2 y 3×3 a mano (regla directa, sin librería), verificado contra `numpy.linalg.det`.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** si el determinante de la matriz de pesos de una capa es exactamente 0, ¿qué le pasó a la información que entró a esa capa?

**N3.M1.T5 · Sistemas de ecuaciones, matriz inversa y espacio nulo**
- **Objetivo:** resuelve sistemas de ecuaciones lineales interpretándolos como "deshacer" una transformación, calcula la inversa cuando existe, y reconoce cuándo no existe.
- **Prerrequisitos:** T4.
- **Competencias:** C-N3-01.
- **Errores habituales:** intentar invertir una matriz singular sin verificar primero el determinante; **usar `try/except LinAlgError` para detectar una matriz singular en este Campus — no funciona en esta build de Pyodide (ver Principio §3.3): `numpy.linalg.inv()` sobre una matriz singular devuelve `nan` en silencio, no lanza excepción.**
- **Modelo mental:** la matriz inversa como **la máquina que deshace exactamente lo que la original hizo** — existe solo si la transformación no colapsó ninguna dimensión (determinante ≠ 0).
- **Por qué:** existe porque resolver "¿qué entrada produjo esta salida?" es la pregunta detrás de toda regresión lineal (puente directo a N4) / ahora porque T4 ya dio el determinante como señal de invertibilidad / habilita T6-T7 y el proyecto de nivel.
- **Evidencia de dominio:** dado un sistema 2×2 o 3×3, decide si tiene solución única SOLO viendo el determinante, antes de resolver, y luego verifica resolviendo.
- **Práctica principal:** implementar eliminación gaussiana simple para sistemas pequeños; **verificación de singularidad correcta para este entorno: comparar `abs(det) < 1e-9` o revisar `np.isnan()` en el resultado de `inv()`, nunca `try/except`.**
- **Evaluación:** estándar (RM-03/RM-05).
- **Pregunta ingenieril:** si tu sistema de ecuaciones no tiene solución única, ¿qué decisión de diseño (no matemática) tomarías para seguir adelante de todos modos?

**N3.M1.T6 · Producto punto, proyecciones y dualidad**
- **Objetivo:** calcula e interpreta el producto punto como medida de similitud/proyección, y explica la idea de dualidad vector-función.
- **Prerrequisitos:** T1, T3.
- **Competencias:** C-N3-01.
- **Errores habituales:** ver el producto punto solo como "una fórmula que suma productos" sin la interpretación de similitud/proyección; confundir proyección con la resta de vectores.
- **Modelo mental:** el producto punto como **cuánto "apunta" un vector en la dirección de otro** — la base de toda medida de similitud en IA (embeddings, atención, en N6).
- **Por qué:** existe porque la similitud coseno (base de búsqueda semántica y de los embeddings de N6/N7) ES un producto punto normalizado / ahora porque T1 y T3 ya dieron vectores y transformaciones / habilita T3 de M3 (covarianza) y el proyecto de nivel.
- **Evidencia de dominio:** dados dos vectores, calcula su producto punto e interpreta el signo (positivo/negativo/cero) en términos de ángulo entre ellos, sin calcular el ángulo exacto.
- **Práctica principal:** implementar producto punto y proyección de un vector sobre otro, verificado contra `numpy.dot`.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** si dos vectores de embeddings de palabras tienen producto punto cercano a cero, ¿qué te dice eso sobre la relación entre esas dos palabras?

**N3.M1.T7 · Cambio de base, autovalores y autovectores — cierra M1**
- **Objetivo:** cambia la representación de un vector entre bases, y encuentra autovalores/autovectores explicando qué direcciones deja invariantes una transformación.
- **Prerrequisitos:** T3, T5, T6.
- **Competencias:** C-N3-01.
- **Errores habituales:** creer que un autovector cambia de dirección bajo la transformación (por definición, no lo hace — solo se escala); confundir autovalor con determinante.
- **Modelo mental:** el autovector como **la dirección que la transformación respeta** — todo lo que hace es estirarla o encogerla (por el autovalor), nunca girarla.
- **Por qué:** existe porque los autovalores/autovectores son el mecanismo exacto detrás de PCA (Curso 3 de la especialización de referencia, y una de las primeras técnicas reales de N4) / ahora porque T3-T6 ya dieron toda la maquinaria necesaria / habilita directamente el proyecto de nivel y N4.
- **Evidencia de dominio:** dada una matriz simple (diagonal o de reflexión), identifica sus autovectores por inspección geométrica antes de calcular algebraicamente.
- **Práctica principal:** implementar la búsqueda de autovalores para matrices 2×2 (ecuación característica), verificado contra `numpy.linalg.eig`.
- **Evaluación:** estándar (RM-03/RM-05).
- **Pregunta ingenieril:** si una matriz de transformación tiene un autovalor de magnitud mayor que 1 y aplicas esa transformación cientos de veces seguidas (como capas apiladas), ¿qué le pasa a cualquier vector que no sea exactamente ese autovector?
- **Idea universal (cierre de M1):** una matriz no son números — es una acción sobre el espacio, y esa acción tiene direcciones que respeta (autovectores) y una cantidad de estiramiento total (determinante). Todo lo demás de álgebra lineal es una consecuencia de esas dos ideas.
- **La limitación humana que compensa M1:** la incapacidad de visualizar más de 3 dimensiones — el álgebra lineal computacional permite operar correctamente en 784 dimensiones (o millones) sin necesitar "verlas", confiando en que la misma intuición 2D/3D generaliza algebraicamente.
- **Lo que deja de sorprender (M1):** que una red neuronal "entienda" imágenes o texto deja de sentirse como magia — cada capa es, mecánicamente, una transformación lineal (T3-T4) más una regla de invertibilidad (T5) y una dirección que respeta (T7), aplicada una y otra vez.

### M2 · Cálculo y optimización

> **La gran pregunta de este módulo: ¿cómo encuentras el mínimo de una función sin poder verla completa?**

**N3.M2.T1 · La derivada: razón de cambio y significado geométrico**
- **Objetivo:** interpreta la derivada como pendiente instantánea y como razón de cambio, y calcula derivadas de funciones simples desde la definición de límite.
- **Prerrequisitos:** M1 completo (no técnicamente dependiente, pero secuencial por diseño); cálculo de secundaria.
- **Competencias:** C-N3-02.
- **Errores habituales:** memorizar reglas de derivación sin la intuición de "pendiente de la recta tangente"; confundir la derivada en un punto con la función completa.
- **Modelo mental:** la derivada como **la pendiente que ves si haces zoom infinito** en un punto de la curva.
- **Por qué:** existe porque toda optimización (T4) necesita saber "hacia dónde bajar" / ahora porque el estudiante ya piensa geométricamente gracias a M1 / habilita T2-T6.
- **Evidencia de dominio:** dada una función simple graficada (descrita, no una imagen), predice el signo de la derivada en varios puntos con solo mirar dónde sube/baja.
- **Práctica principal:** implementar una aproximación numérica de la derivada (diferencia finita) y compararla contra la derivada simbólica calculada a mano, con tolerancia.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** si la derivada de una función de error respecto a un parámetro es exactamente 0 en el punto actual, ¿qué dos situaciones muy distintas podría significar eso (mínimo real vs. mínimo local vs. punto de silla)?

**N3.M2.T2 · Reglas de derivación: cadena y producto, explicadas geométricamente**
- **Objetivo:** deriva funciones compuestas y productos de funciones, entendiendo por qué cada regla funciona (no solo aplicándola).
- **Prerrequisitos:** T1.
- **Competencias:** C-N3-02.
- **Errores habituales:** aplicar la regla de la cadena olvidando algún factor intermedio; confundir derivada de un producto con el producto de las derivadas.
- **Modelo mental:** la regla de la cadena como **multiplicar razones de cambio en serie** — si A cambia el doble que B, y B cambia el triple que C, A cambia 6 veces más rápido que C.
- **Por qué:** existe porque toda red neuronal se entrena propagando la regla de la cadena capa por capa (backpropagation, sembrado directo hacia N5) / ahora porque T1 ya dio la derivada simple / habilita T3-T4.
- **Evidencia de dominio:** deriva una función compuesta de 3 niveles paso a paso, nombrando explícitamente cada factor de la cadena.
- **Práctica principal:** implementar la regla de la cadena para una composición simple de funciones Python, verificado numéricamente.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** si una red tiene 50 capas y cada derivada local es un número menor que 1, ¿qué le pasa al producto de las 50 al aplicar la regla de la cadena de punta a punta? (siembra directa hacia el problema de gradientes que se desvanecen, N5).

**N3.M2.T3 · Derivadas parciales y el gradiente**
- **Objetivo:** calcula derivadas parciales de funciones de varias variables y ensambla el vector gradiente, interpretándolo como dirección de mayor crecimiento.
- **Prerrequisitos:** T2; M1.T1 (vectores).
- **Competencias:** C-N3-02.
- **Errores habituales:** tratar las variables no derivadas como si no existieran, en vez de constantes; olvidar que el gradiente es un VECTOR, no un número.
- **Modelo mental:** el gradiente como **una flecha que señala cuesta arriba** en el punto exacto donde estás parado — su dirección opuesta es "cuesta abajo más pronunciada".
- **Por qué:** existe porque el gradiente es, literalmente, lo que "desciende" en descenso de gradiente (T4) / ahora porque T2 ya dio la mecánica de derivar y M1 dio vectores / habilita T4 directamente.
- **Evidencia de dominio:** dada una función de 2 variables, calcula el gradiente en un punto y predice en qué dirección crece más rápido la función desde ahí.
- **Práctica principal:** implementar cálculo de gradiente por diferencias finitas para funciones de 2-3 variables, verificado contra la derivada simbólica a mano.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** si tu función tiene un millón de parámetros (como una red pequeña real), ¿por qué calcular el gradiente por diferencias finitas (probar cada dirección una por una) sería inviable en la práctica?

**N3.M2.T4 · Optimización: descenso de gradiente desde cero**
- **Objetivo:** implementa descenso de gradiente desde cero para encontrar el mínimo de una función simple, y explica el rol de la tasa de aprendizaje.
- **Prerrequisitos:** T3.
- **Competencias:** C-N3-02 (mapea directo a la competencia).
- **Errores habituales:** elegir una tasa de aprendizaje demasiado grande (diverge) o demasiado pequeña (no converge en tiempo razonable) sin diagnosticar cuál de las dos está pasando; confundir "llegó a un mínimo" con "llegó AL mínimo global".
- **Modelo mental:** el descenso de gradiente como **bajar una montaña con niebla espesa** — solo puedes sentir la pendiente bajo tus pies (el gradiente local), nunca ves el valle completo.
- **Por qué:** existe porque este es, sin exagerar, el algoritmo que entrena todo modelo de N4 en adelante / ahora porque T3 ya dio el gradiente / habilita el proyecto de nivel y todo N4-N7.
- **Evidencia de dominio:** implementa descenso de gradiente sobre una función 1D o 2D simple, y diagnostica (con datos, no intuición) qué pasa con 3 tasas de aprendizaje distintas (muy alta, razonable, muy baja).
- **Práctica principal:** implementación completa desde cero (sin librerías de optimización), verificada comparando el mínimo encontrado contra el mínimo real conocido de la función de prueba.
- **Evaluación:** estándar (RM-03/RM-05).
- **Pregunta ingenieril:** si tu función de error tiene varios mínimos locales, ¿qué decisión práctica (no puramente matemática) tomarías para tener más confianza de encontrar uno bueno?
- **El quiebre de intuición de M2:** el instante en que el estudiante ve, con datos reales de su propia implementación, que el algoritmo converge a un mínimo SIN haber visto nunca la función completa — solo siguiendo la pendiente local, paso a paso. Se construye ejecutando el propio descenso de gradiente sobre una función con más de un mínimo local, y confirmando en qué mínimo terminó según el punto de partida.
- **El supuesto que destruye:** "para encontrar el mínimo de algo hay que examinar todas las posibilidades" — se destruye viendo que seguir la pendiente local, repetidamente, basta.

**N3.M2.T5 · Aproximación de funciones: series de Taylor**
- **Objetivo:** aproxima una función complicada con un polinomio simple alrededor de un punto, y explica qué tan buena es esa aproximación según cuántos términos se usan.
- **Prerrequisitos:** T1, T2.
- **Competencias:** C-N3-02.
- **Errores habituales:** creer que la aproximación de Taylor es exacta en todo el dominio (solo es buena CERCA del punto de expansión); olvidar que se necesita la derivada de orden N para el término N.
- **Modelo mental:** la serie de Taylor como **construir una réplica de la función usando solo información LOCAL** (su valor y sus derivadas en un punto) — mientras más términos, más se parece la réplica, pero solo cerca de ese punto.
- **Por qué:** existe porque la aproximación lineal (Taylor de primer orden) es, literalmente, la base de por qué el descenso de gradiente funciona (T4) — la función se comporta como un plano cerca de cualquier punto / ahora porque T1-T2 dan la maquinaria de derivadas / habilita una comprensión más profunda de T4, retroactivamente.
- **Evidencia de dominio:** aproxima una función simple con su expansión de Taylor de orden 1 y 2, y mide numéricamente el error de la aproximación a distintas distancias del punto de expansión.
- **Práctica principal:** implementar la expansión de Taylor de orden 1-2 para una función dada, comparada contra el valor real con distintos radios de distancia.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** ¿por qué el descenso de gradiente (que solo usa la aproximación de primer orden, un plano) a veces necesita muchísimos pasos pequeños en vez de "saltar directo" al mínimo?

**N3.M2.T6 · Ajuste de funciones a datos: regresión como optimización — cierra M2**
- **Objetivo:** plantea el ajuste de una línea a un conjunto de datos como un problema de optimización (minimizar el error), y lo resuelve con descenso de gradiente.
- **Prerrequisitos:** T4, T5.
- **Competencias:** C-N3-02.
- **Errores habituales:** implementar regresión lineal como "una fórmula mágica" sin conectar que es exactamente el mismo descenso de gradiente de T4 aplicado a una función de error específica.
- **Modelo mental:** ajustar una línea a datos como **encontrar el fondo del valle de error** — cada posible línea (pendiente, intersección) es un punto en ese paisaje, y el error total es la altura.
- **Por qué:** existe porque este es el primer modelo real de Machine Learning que el estudiante construye, aunque N4 todavía no haya empezado formalmente / ahora porque T4-T5 dan toda la maquinaria / habilita directamente el proyecto de nivel y N4.M2.
- **Evidencia de dominio:** implementa regresión lineal simple ajustando pendiente e intersección con descenso de gradiente propio, verificando el resultado contra una solución de referencia (por ejemplo, mínimos cuadrados calculados con `numpy`).
- **Práctica principal:** proyecto integrador del módulo — ajustar una línea a un conjunto de datos sintético con ruido conocido, y confirmar que el ajuste recupera aproximadamente los parámetros reales usados para generar los datos.
- **Evaluación:** estándar (RM-03/RM-05).
- **Pregunta ingenieril:** si añades más y más ruido a tus datos sintéticos, ¿en qué punto el descenso de gradiente ya no puede distinguir la señal real del ruido? (siembra directa hacia overfitting, N4.M4).
- **Idea universal (cierre de M2):** entrenar cualquier modelo, sin importar cuán complejo, es siempre la misma operación: definir un error y bajar su pendiente, un paso a la vez.
- **Lo que deja de sorprender (M2):** que un modelo "aprenda" deja de sentirse como magia — es, mecánicamente, la misma actualización de parámetros de T4, repetida millones de veces.
- **La limitación humana que compensa M2:** la incapacidad de sostener en la mente la superficie completa de una función de muchas variables — el descenso de gradiente no necesita "verla": solo necesita la pendiente en el punto donde ya está parado, un paso a la vez.

### M3 · Probabilidad y estadística

> **La gran pregunta de este módulo: ¿cómo se razona con rigor sobre algo que no se puede predecir con certeza?**

**N3.M3.T1 · Espacio muestral, eventos y probabilidad condicional**
- **Objetivo:** modela una situación incierta como espacio muestral y eventos, y calcula probabilidad condicional distinguiéndola de la probabilidad simple.
- **Prerrequisitos:** ninguno técnico; aritmética básica.
- **Competencias:** C-N3-03.
- **Errores habituales:** confundir P(A|B) con P(B|A) (la falacia del fiscal — probar que un sospechoso raramente sería inocente DADA la evidencia no es lo mismo que la probabilidad de que sea culpable); ignorar la tasa base al razonar sobre probabilidad condicional.
- **Modelo mental:** la probabilidad condicional como **reducir el universo de posibilidades** al espacio donde la condición ya es cierta, y preguntar qué fracción de ESE espacio reducido cumple lo que preguntas.
- **Por qué:** existe porque la intuición humana sobre el azar está sistemáticamente sesgada (documentado ampliamente en la literatura de cognición) / ahora porque es la base conceptual de todo lo que sigue en M3 / habilita T2-T6 y toda inferencia bayesiana futura (N7+).
- **Evidencia de dominio:** dado un escenario con una tasa base engañosa (ej. una prueba médica con falsos positivos), calcula P(evento real | resultado de la prueba) correctamente, distinguiéndolo de la precisión de la prueba misma.
- **Práctica principal:** implementar un simulador de Monte Carlo simple (miles de ensayos aleatorios) para verificar numéricamente un resultado de probabilidad condicional calculado a mano.
- **Evaluación:** estándar (RM-03).
- **Pregunta ingenieril:** si un modelo de detección de fraude tiene 99% de precisión pero el fraude real ocurre en 1 de cada 10.000 transacciones, ¿por qué la mayoría de las alertas del modelo podrían, aun así, ser falsas alarmas?
- **El quiebre de intuición de M3:** el instante en que un ejemplo numérico concreto (la falacia del fiscal, con números reales) demuestra que la intuición entrenada durante años sobre "qué tan probable es algo" puede estar sistemáticamente equivocada — no por descuido, sino porque el cerebro no está calibrado para tasas base. Se construye calculando el ejemplo ANTES de revelar la respuesta correcta, para que el error se sienta en carne propia.
- **El supuesto que destruye:** "mi intuición sobre qué tan probable es algo es, en general, confiable" — se destruye con un solo cálculo bien elegido.

**N3.M3.T2 · Variables aleatorias y distribuciones (Bernoulli, binomial, normal)**
- **Objetivo:** modela una cantidad incierta como variable aleatoria, y reconoce cuándo usar las distribuciones Bernoulli, binomial y normal según la naturaleza del fenómeno.
- **Prerrequisitos:** T1.
- **Competencias:** C-N3-03.
- **Errores habituales:** aplicar la distribución normal a cantidades que no pueden ser negativas o que son discretas, sin verificar que el supuesto tenga sentido; confundir la variable aleatoria (el proceso) con una de sus posibles realizaciones (un valor concreto).
- **Modelo mental:** una distribución como **la forma que toma la incertidumbre** — no un solo número, sino un mapa de qué tan probable es cada resultado posible.
- **Por qué:** existe porque casi todo dato real de N4 (edades, ingresos, píxeles con ruido) sigue, aproximadamente, alguna de estas formas / ahora porque T1 ya dio el vocabulario de probabilidad / habilita T3-T6.
- **Evidencia de dominio:** dado un fenómeno descrito en palabras (ej. "número de clientes que compran en una hora"), identifica qué distribución es razonable y justifica por qué, no solo por nombre.
- **Práctica principal:** implementar generadores simples de muestras Bernoulli/binomial desde un generador de números aleatorios uniforme, y comparar el histograma resultante contra la forma teórica esperada.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** si mides la altura de mil personas y grafica el histograma, ¿por qué se parece a una campana (normal) aunque nadie "diseñó" que fuera así? (siembra el Teorema del Límite Central sin nombrarlo formalmente todavía).

**N3.M3.T3 · Esperanza, varianza y covarianza**
- **Objetivo:** calcula esperanza (valor promedio esperado), varianza (dispersión) y covarianza (relación entre dos variables) de datos reales, e interpreta cada una.
- **Prerrequisitos:** T2; M1.T6 (producto punto, para la fórmula matricial de covarianza).
- **Competencias:** C-N3-03.
- **Errores habituales:** confundir varianza alta con "algo está mal" (a veces la dispersión real es así); calcular covarianza y no saber interpretar el signo (positiva = crecen juntas, negativa = una crece cuando la otra baja).
- **Modelo mental:** la esperanza como **el centro de masa** de la distribución; la varianza como **qué tan lejos, en promedio, se dispersan los datos de ese centro**; la covarianza como **si dos variables se mueven juntas o en direcciones opuestas**.
- **Por qué:** existe porque la matriz de covarianza es, exactamente, lo que PCA (Curso 3 de la especialización de referencia) usa para encontrar las direcciones de mayor varianza en los datos — puente directo hacia autovalores/autovectores de M1.T7 / ahora porque T2 ya dio distribuciones / habilita T4-T6 y el proyecto de nivel.
- **Evidencia de dominio:** dado un conjunto de datos de 2 variables, calcula su covarianza e interpreta, en una frase, qué relación describe.
- **Práctica principal:** implementar cálculo de esperanza/varianza/covarianza desde cero sobre un conjunto de datos, verificado contra `numpy.mean`/`numpy.var`/`numpy.cov` con tolerancia.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** si dos características de tus datos (por ejemplo, "años de experiencia" y "salario") tienen covarianza muy alta, ¿por qué podría ser mala idea usarlas ambas como entradas separadas de un modelo?

**N3.M3.T4 · Inferencia básica: muestreo e intervalos de confianza**
- **Objetivo:** distingue una muestra de una población completa, y calcula/interpreta un intervalo de confianza sobre un promedio estimado.
- **Prerrequisitos:** T3.
- **Competencias:** C-N3-03.
- **Errores habituales:** interpretar un intervalo de confianza del 95% como "hay 95% de probabilidad de que el valor real esté en este rango" (interpretación frecuentista incorrecta popular); creer que una muestra más grande siempre elimina el sesgo (no elimina el sesgo, solo reduce la varianza del estimador).
- **Modelo mental:** la muestra como **una ventana parcial y ruidosa** hacia la población completa — un intervalo de confianza describe cuánto confiar en esa ventana, no una certeza sobre el valor real.
- **Por qué:** existe porque todo modelo de N4 se entrena y evalúa sobre una MUESTRA de datos, nunca la población completa de casos posibles / ahora porque T3 ya dio varianza / habilita T5 y directamente la evaluación de modelos en N4.M4.
- **Evidencia de dominio:** dado un conjunto de muestras, calcula un intervalo de confianza para la media e interpreta correctamente qué significa (y qué NO significa).
- **Práctica principal:** implementar un simulador que toma muchas muestras de una población conocida, calcula el intervalo de confianza de cada una, y mide qué fracción de esos intervalos realmente contiene la media poblacional real — verificación empírica de la definición correcta.
- **Evaluación:** estándar (RM-03).
- **Pregunta ingenieril:** si evalúas tu modelo con solo 50 ejemplos de prueba, ¿qué tan seguro puedes estar de que su precisión medida (por ejemplo 92%) refleja su precisión real?

**N3.M3.T5 · Introducción a pruebas de hipótesis**
- **Objetivo:** plantea una hipótesis nula, calcula un estadístico simple, e interpreta un resultado en términos de significancia sin caer en la mala interpretación popular del p-valor.
- **Prerrequisitos:** T4.
- **Competencias:** C-N3-03.
- **Errores habituales:** interpretar un p-valor pequeño como "la probabilidad de que la hipótesis nula sea cierta" (no es lo que mide); confundir significancia estadística con importancia práctica.
- **Modelo mental:** una prueba de hipótesis como **preguntar "qué tan sorprendente sería este resultado si no hubiera ningún efecto real"** — un p-valor pequeño dice que el resultado sería muy sorprendente bajo esa suposición, no que la suposición sea falsa con certeza.
- **Por qué:** existe porque comparar si un modelo nuevo es "realmente mejor" que uno anterior, o si una diferencia en los datos es real y no ruido, requiere esta disciplina / ahora porque T4 ya dio intervalos de confianza / habilita T6 y decisiones reales de evaluación en N4 en adelante.
- **Evidencia de dominio:** dado un experimento simple (ej. comparar dos versiones de un modelo con datos de prueba), plantea la hipótesis nula correcta y decide si el resultado es estadísticamente significativo con un umbral dado.
- **Práctica principal:** implementar una prueba de permutación simple (remuestreo) para comparar dos grupos de datos, sin depender de fórmulas cerradas de distribuciones — más intuitivo y verificable por simulación.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** si pruebas 20 hipótesis distintas sobre el mismo conjunto de datos y usas un umbral de significancia del 5%, ¿cuántos "resultados significativos" esperarías encontrar solo por azar, aunque ningún efecto real exista?

**N3.M3.T6 · Estadística aplicada a un dataset real — cierra M3**
- **Objetivo:** aplica esperanza, varianza, covarianza, intervalos de confianza y regresión (M2.T6) a un conjunto de datos real, produciendo un análisis exploratorio (EDA) básico.
- **Prerrequisitos:** T1-T5; M2.T6 (regresión).
- **Competencias:** C-N3-03.
- **Errores habituales:** calcular estadísticas sin antes visualizar/inspeccionar los datos (verificar valores atípicos, datos faltantes); confundir correlación con causalidad al interpretar una covarianza alta.
- **Modelo mental:** el análisis exploratorio como **conocer a tus datos antes de confiar en cualquier número que calcules sobre ellos**.
- **Por qué:** existe porque este es, literalmente, el primer paso de cualquier proyecto real de N4 (EDA antes de modelar) — puente directo y declarado hacia N4.M1 (pandas/EDA) / ahora porque T1-T5 dan toda la maquinaria estadística / habilita el proyecto de nivel completo.
- **Evidencia de dominio:** dado un dataset pequeño real (ej. un CSV simple embebido), produce un resumen estadístico (medias, varianzas, correlaciones entre pares de variables) e identifica al menos un hallazgo real no obvio a simple vista.
- **Práctica principal:** proyecto integrador del módulo — análisis exploratorio completo de un dataset real pequeño, cerrando con una regresión simple (M2.T6) sobre la relación más interesante encontrada.
- **Evaluación:** estándar (RM-03/RM-05).
- **Pregunta ingenieril:** encontraste una correlación fuerte entre dos variables de tu dataset — ¿qué evidencia adicional necesitarías antes de afirmar que una causa la otra?
- **Idea universal (cierre de M3):** casi ningún dato real es determinista — razonar bien sobre IA significa razonar bien sobre incertidumbre, con las mismas herramientas con las que se razona sobre certezas: definiciones precisas y verificación numérica.
- **La limitación humana que compensa M3:** el sesgo cognitivo documentado y universal ante el azar (falacia del fiscal, descuido de tasas base, mala interpretación del p-valor) — la disciplina formal de este módulo compensa exactamente esos sesgos con procedimiento, no con "más cuidado".
- **Lo que deja de sorprender (M3):** que un modelo "se equivoque a veces" deja de sentirse como un defecto — cualquier sistema entrenado sobre datos con incertidumbre real (T1-T5) tiene, por diseño, un margen de error irreducible; la pregunta correcta pasa de "¿por qué falla?" a "¿su tasa de error medida es la que dice ser?" (T4).

### M4 · Lectura matemática

> **La gran pregunta de este módulo: ¿qué te impide leer la ecuación de un paper — de verdad, no la sensación de que "no eres capaz"?**

**N3.M4.T1 · El alfabeto de la IA: griego, sub/superíndices, sumatorias y productorias**
- **Objetivo:** lee y traduce a código el alfabeto griego usado en notación matemática, y la notación de sumatoria (Σ) y productoria (Π).
- **Prerrequisitos:** M1-M3 completos.
- **Competencias:** C-N3-04.
- **Errores habituales:** bloquearse ante un símbolo desconocido en vez de buscar su significado (θ, λ, μ, σ no son "misteriosos", son solo nombres); confundir el índice de una sumatoria con una variable libre.
- **Modelo mental:** la notación matemática como **un lenguaje de programación más denso, no más difícil** — cada símbolo tiene un significado preciso, exactamente como cada palabra clave de Python.
- **Por qué:** existe porque el "miedo a la notación" es, según la experiencia declarada del proyecto y la literatura de enseñanza de matemáticas, más un obstáculo de familiaridad que de dificultad real / ahora porque M1-M3 ya dieron todo el contenido matemático que esta notación describe / habilita T2-T5.
- **Evidencia de dominio:** traduce una expresión con sumatoria (ej. la fórmula de la media, Σxᵢ/n) a un bucle `for` de Python, y viceversa.
- **Práctica principal:** implementar en Python 5 expresiones matemáticas dadas en notación formal (sumatorias/productorias simples), verificando el resultado.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** ¿por qué los papers usan Σ en vez de escribir "suma esto para cada elemento" en palabras?

**N3.M4.T2 · Álgebra lineal en notación de papers**
- **Objetivo:** lee notación de álgebra lineal tal como aparece en papers reales (negrita para vectores/matrices, transposición, normas, subíndices de dimensión).
- **Prerrequisitos:** T1; M1 completo.
- **Competencias:** C-N3-04.
- **Errores habituales:** no distinguir un escalar de un vector o matriz solo por la notación (negrita/mayúscula vs. minúscula normal); confundir `‖x‖` (norma) con valor absoluto sin más.
- **Modelo mental:** la notación de álgebra lineal como **una convención tipográfica que ya conoces el contenido de** — M1 completo ya te dio el significado, esto solo da el símbolo.
- **Por qué:** existe porque toda arquitectura de N5-N7 (redes neuronales, transformers) se describe con esta notación exacta / ahora porque M1 ya construyó el significado / habilita T3-T5.
- **Evidencia de dominio:** dado un fragmento real de notación de un paper introductorio (ej. una capa lineal `y = Wx + b`), identifica qué es cada símbolo y su dimensión, y lo traduce a código.
- **Práctica principal:** traducir 3-4 fórmulas reales de álgebra lineal (extraídas de fuentes públicas, ej. la definición de una capa densa) a implementaciones de Python verificadas contra `numpy`.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** si ves `Wᵀ` en una fórmula, ¿por qué la transposición casi siempre aparece cuando se combinan vectores fila y columna, y qué pasaría si la olvidaras al programar?

**N3.M4.T3 · Cálculo en notación de papers**
- **Objetivo:** lee notación de cálculo tal como aparece en papers (∇ para gradiente, ∂ para derivada parcial, argmin/argmax).
- **Prerrequisitos:** T2; M2 completo.
- **Competencias:** C-N3-04.
- **Errores habituales:** confundir `∂f/∂x` (derivada parcial) con `df/dx` (derivada total) sin notar la diferencia de contexto; no saber leer `argmin`/`argmax` (devuelve el punto que minimiza/maximiza, no el valor mínimo/máximo mismo).
- **Modelo mental:** `∇` como **el vector de todas las derivadas parciales a la vez** — el mismo gradiente de M2.T3, ahora con su símbolo real.
- **Por qué:** existe porque la función de pérdida de cualquier modelo de N4+ se describe y minimiza con esta notación exacta / ahora porque M2 ya construyó el significado / habilita T4-T5.
- **Evidencia de dominio:** dado un fragmento real de notación (ej. la actualización de descenso de gradiente `θ ← θ - α∇L(θ)`), lo traduce línea por línea a código Python que ya escribió en M2.T4.
- **Práctica principal:** traducir 3-4 fórmulas reales de optimización/cálculo a implementaciones Python, verificadas contra la implementación propia de M2.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** cuando un paper escribe `argmin_θ L(θ)`, ¿qué diferencia hay entre eso y simplemente escribir `L(θ)`?

**N3.M4.T4 · Probabilidad en notación de papers**
- **Objetivo:** lee notación de probabilidad tal como aparece en papers (E[·], Var[·], P(·|·), distribuciones parametrizadas).
- **Prerrequisitos:** T3; M3 completo.
- **Competencias:** C-N3-04.
- **Errores habituales:** confundir `E[X]` (un número, la esperanza) con `X` (la variable aleatoria misma); no leer correctamente qué condiciona a qué en una expresión con múltiples barras de condicionalidad.
- **Modelo mental:** `E[·]` y `Var[·]` como **operadores que resumen una distribución completa en un solo número** — el mismo contenido de M3.T3, con su símbolo real.
- **Por qué:** existe porque funciones de pérdida probabilísticas (verosimilitud, entropía cruzada — de N4 en adelante) se escriben exactamente con esta notación / ahora porque M3 ya construyó el significado / habilita T5.
- **Evidencia de dominio:** dado un fragmento real de notación probabilística (ej. la definición de entropía cruzada), identifica qué representa cada símbolo antes de traducirlo a código.
- **Práctica principal:** traducir 2-3 fórmulas reales de probabilidad/estadística a implementaciones Python, verificadas contra las implementaciones propias de M3.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** ¿por qué casi todo paper de Machine Learning en algún punto minimiza un "valor esperado de una pérdida" en vez de la pérdida en un solo ejemplo?

**N3.M4.T5 · Lectura completa de un paper introductorio, de la ecuación al código — cierra M4 y el nivel**
- **Objetivo:** lee un paper introductorio real de principio a fin, identificando qué expresa cada símbolo y cada paso, y traduce al menos una fórmula central a código funcional.
- **Prerrequisitos:** T1-T4.
- **Competencias:** C-N3-04 (mapea directo).
- **Errores habituales:** intentar entender el paper completo en una sola pasada (los papers reales se leen en capas: resumen → figuras → método → detalles); rendirse ante la primera fórmula no reconocida en vez de aplicar T1-T4 sistemáticamente.
- **Modelo mental:** leer un paper como **descifrar, no adivinar** — cada símbolo tiene una definición encontrable (en el propio paper o en M1-M4), la lectura es un proceso sistemático, no un acto de genialidad repentina.
- **Por qué:** existe porque este es, literalmente, el proyecto de nivel declarado en DOC-10 ("lectura comentada de un paper introductorio") / ahora porque T1-T4 dieron cada pieza del alfabeto / habilita directamente el ingreso a N4-N12, donde leer papers reales es una actividad constante.
- **Evidencia de dominio:** produce una lectura comentada de un paper introductorio real, sección por sección, con al menos una fórmula central traducida a código Python funcional y verificado.
- **Práctica principal:** el propio proyecto de nivel (mini-librería + lectura de paper) — este tema y el proyecto son, deliberadamente, la misma actividad.
- **Evaluación:** escrito, lectura de paper (RM-02).
- **Pregunta ingenieril:** después de leer tu primer paper completo con esta disciplina, ¿qué cambió entre tu primera reacción al verlo y tu comprensión real después de aplicar M1-M4?
- **El quiebre de intuición de M4:** el instante preciso en que un párrafo de notación que a primera vista parecía ilegible (una mezcla de griego, subíndices y operadores) se traduce, símbolo por símbolo, en código que el estudiante ya sabe escribir desde M1-M3 — la barrera no era de dificultad, era de familiaridad. Se construye eligiendo, a propósito, la ecuación de aspecto más intimidante del paper para la primera pasada, no la más simple.
- **El supuesto que destruye:** "la notación de un paper de IA requiere formación matemática que no tengo" — se destruye viendo que cada símbolo, sin excepción, ya fue construido en M1-M3; lo único nuevo es la abreviatura tipográfica.
- **Idea universal (cierre de M4 y del nivel):** ningún símbolo matemático es magia — cada uno tiene una definición precisa, aprendible, y traducible a código. "No entender la notación" casi siempre significa "no haber visto todavía el significado detrás del símbolo", no una limitación permanente.
- **Lo que deja de sorprender (M4):** que un paper "parezca imposible de leer" a primera vista deja de sentirse como una barrera infranqueable — es, mecánicamente, una acumulación de símbolos ya conocidos (M1-M3) más una convención tipográfica (M4.T1-T4).

## 6. Proyecto de nivel

Por diseño de DOC-10 §6: **mini-librería propia de operaciones** (vectores, matrices, derivadas, descenso de gradiente, estadística básica — cada operación implementada a mano y verificada contra `numpy` con tolerancia explícita, integrando M1-M3) **+ lectura comentada de un paper introductorio** (M4.T5, la misma actividad que cierra el nivel). Compuerta: examen + proyecto + defensa (derivar y explicar en vivo) — mismo formato de rigor que N0-N2, adaptado al contenido matemático (la defensa incluye derivar en vivo, no solo ejecutar código).

## 7. Herencias Declaradas

### 7.1 Resolución de H-N3-01…05 (fijadas por SYL-N2 §15)

| # | Herencia recibida de N2 | Cómo la resuelve N3 |
|---|---|---|
| H-N3-01 | Verificar contra numpy | Principio §3.5 de este documento; disciplina aplicada en cada tema de M1-M3 |
| H-N3-02 | Coma flotante formal | M1.T5 (verificación de singularidad con tolerancia, nunca `==`); Principio §3.3 (hallazgo real de `nan` silencioso en `inv()`) |
| H-N3-03 | Coste computacional | M2.T3 (por qué las diferencias finitas no escalan) y M2.T4 (el coste real del descenso de gradiente) |
| H-N3-04 | Motivación de toda ET3 | §2 (Identidad del nivel) |
| H-N3-05 | Los múltiples observadores de N2.M3.T3 como ancla de la intuición probabilística | M3.T1 (el quiebre de intuición del módulo se ancla en la misma incomodidad ante el azar y la incertidumbre ya vivida en N2) |

### 7.2 Borrador de Herencias hacia SYL-N4 (H-N4-xx — a consolidar formalmente en el paso 9 de este mismo syllabus, no ahora)

| # | N3 siembra | N4 deberá recoger |
|---|---|---|
| H-N4-01 | M1 completo: vectores/matrices operados e implementados a mano | N4.M2 implementa modelos desde cero "explicando su matemática" — la literatura vectorial ya existe, no se reintroduce |
| H-N4-02 | M2.T4: descenso de gradiente derivado e implementado desde cero | N4.M2 lo reutiliza directamente como el algoritmo de entrenamiento — se aplica, no se re-enseña |
| H-N4-03 | Disciplina de verificar contra numpy en pequeña escala (H-N3-01 heredada y ejercitada) | N4.M1 usa numpy/pandas en escala real de producción — el hábito ya está instalado; falta enseñar por qué vectorizar importa a escala (Pyodide no lo demuestra limpiamente — nota abierta para el diseño de N4) |
| H-N4-04 | M3: distribuciones, esperanza, inferencia básica | N4.M3 (clasificadores probabilísticos) y N4.M4 (métricas, splits, overfitting) se apoyan en este vocabulario sin re-explicarlo |
| H-N4-05 | M4: lectura sistemática de notación matemática de papers | N4.M2 ("explicando su matemática") presupone que el estudiante ya puede leer la fórmula de un modelo tal como aparece en documentación real |

**Prerrequisitos ocultos verificados (preliminar, a confirmar formalmente en el paso 9 real):** N4.M1 (pandas/EDA) y N4.M3 (scikit-learn) son contenido enteramente nuevo en N4, sin dependencia técnica de N3 más allá del vocabulario de H-N4-01…05 — consistente con el grafo de DOC-10.

---

## 8. Paso 8 · Revisión global del Capstone ET3 y las compuertas

### El capstone — diseño de síntesis (no existía contenido concreto antes de este paso, igual que en SYL-N1/SYL-N2)

**Nombre:** *"La matemática que puedes derivar en vivo"* — la prueba de que M1-M4 se sostienen **juntos**, en un solo artefacto que el estudiante construyó y puede explicar derivando, no solo ejecutar.

**Por qué esta forma y no otra:** el riesgo — el mismo que las auditorías de SYL-N1 y SYL-N2 ya encontraron y corrigieron en sus capstones respectivos — es que el proyecto se convierta en cuatro entregas independientes ("aquí mi álgebra lineal, aquí mi cálculo, aquí mi estadística, aquí mi lectura de paper"). La corrección, igual que en N1/N2: el hito 3 exige explícitamente que la regresión final use las MISMAS funciones de la librería propia construidas en el hito 2 (M2, descenso de gradiente) combinadas con las de M3 (estadística) — no reimplementaciones sueltas por módulo. El hito 4 (lectura del paper) exige apoyarse en las funciones ya construidas, no reimplementar desde cero. La integración está en el propio diseño del capstone, no confiada a la buena fe del estudiante — mismo criterio adversarial que N1/N2 ya aplicaron.

**Diferencia estructural real frente a N1/N2 (declarada honestamente, no una omisión):** N1 y N2 son niveles DOC-12 ("real" — terminal, Git, servicios reales); sus capstones narran una historia de ramas y Pull Requests como evidencia de integración. N3 es 100% DOC-11/Pyodide (§3.1) — no hay terminal, no hay repositorio propio del estudiante. La evidencia de integración en N3 no puede ser "una rama por hito": es la reutilización real de funciones entre hitos (verificable en el propio código pegado en la bitácora) y la coherencia de la defensa oral.

**Defensa (equivalente a TD-02, con los tres momentos institucionalizados desde el capstone de N1, mismo estándar en N2):** derivar en vivo 3 funciones de módulos distintos (no ejecutar y leer el resultado — explicar el razonamiento matemático paso a paso); qué símbolo o fórmula de todo N3 pareció más intimidante al principio y qué cambió al decodificarlo sistemáticamente (M4); qué parte del diseño de la librería propia sería fácil o difícil de extender mañana. **La pregunta de validación final** (estándar permanente de todos los capstones de la Academia desde N2): ¿confiaría el examinador en que este estudiante puede leer y verificar la matemática de un paper real, no solo ejecutar código ya escrito? No se puntúa por criterios — se responde con la misma honestidad que un responsable técnico real.

**Verificación de síntesis (criterio adversarial aplicado en este paso, no solo al final):** ¿podría un estudiante completar esto entregando las cuatro piezas por separado, sin integrarlas? No — el hito 3 exige que la regresión de cierre use la MISMA función de descenso de gradiente del hito 2 más las funciones estadísticas del propio hito 3, y el hito 4 exige apoyarse en funciones ya construidas en vez de reimplementar la fórmula del paper desde cero. La dependencia entre módulos está en el propio diseño, no en la buena fe del estudiante.

### Revisión de las compuertas — cobertura de competencias

| Instrumento | Qué verifica | Norma |
|---|---|---|
| **Examen** (banco rotable ≥3 variantes/ítem, NNR-02 — ver banco completo abajo) | Conocimiento operativo y capacidad de derivar en vivo sobre las 4 competencias | DOC-02 |
| **Capstone (mini-librería + lectura de paper)** | Síntesis real: M1-M4 integrados en un artefacto propio, verificado contra numpy | OBJ-05 |
| **Defensa oral con derivación en vivo** | Comprensión real (no memorización), decisiones de diseño de la librería, lectura sistemática de notación | RM-05 |

**Cobertura de competencias — verificación explícita:**

| Competencia | Verificada por |
|---|---|
| C-N3-01 (álgebra lineal — vectores, matrices, transformaciones, implementa y explica el significado) | M1 completo (7 temas) + ítems 1-2 del banco de examen + Capstone hito 2 |
| C-N3-02 (deriva gradientes, explica e implementa descenso de gradiente desde cero) | M2 completo (6 temas) + ítems 3-4 del banco de examen + Capstone hitos 2-3 |
| C-N3-03 (modela incertidumbre con probabilidad/estadística sobre datos reales) | M3 completo (6 temas) + ítems 5-6 del banco de examen + Capstone hito 3 |
| C-N3-04 (lee notación matemática de un paper, identifica qué expresa cada símbolo) | M4 completo (5 temas) + ítems 7-8 del banco de examen + Capstone hitos 1 y 4 |

**Hallazgo de la revisión:** a diferencia de C-N2-07 en SYL-N2 (una competencia transversal sin instrumento propio dentro de la compuerta, por diseño), las 4 competencias de N3 mapean 1:1 con los 4 módulos y tienen cobertura completa y directa en examen + capstone — no se encontró ninguna competencia sin instrumento. Consistente con que N3, a diferencia de N1/N2, no tiene una pista transversal externa (DSA/inglés) declarada dentro de sus propias competencias de nivel — esas pistas siguen viviendo en el hito de etapa (14.6), no en la compuerta de N3.

### Banco de examen — ítems rotables (≥3 variantes por ítem, NNR-02)

*Formato oral, con derivación en vivo — el examinador elige UNA variante por ítem al azar en cada aplicación, nunca las tres a la vez.*

**Ítem 1 (C-N3-01 · independencia lineal).** "¿Son estos dos vectores linealmente independientes? Justifica con el determinante, no solo con la intuición visual."
- Variante A: `[2,3]` y `[4,6]` → determinante 0, **dependientes** (el segundo es 2× el primero).
- Variante B: `[1,2]` y `[3,1]` → determinante −5, **independientes**.
- Variante C: `[5,-2]` y `[-10,4]` → determinante 0, **dependientes**.

**Ítem 2 (C-N3-01 · determinante e inversa).** "Calcula el determinante de esta matriz 2×2. Si existe, calcula su inversa. Si no existe, explica qué significa geométricamente."
- Variante A: `[[2,1],[1,1]]` → det=1, inversa `[[1,-1],[-1,2]]`.
- Variante B: `[[4,2],[2,1]]` → det=0, **singular** (sus filas son paralelas — colapsa el plano a una recta).
- Variante C: `[[3,0],[0,5]]` → det=15, inversa `[[1/3,0],[0,1/5]]`.

**Ítem 3 (C-N3-02 · derivada).** "Deriva esta función a mano, y verifica tu resultado con la derivada numérica."
- Variante A: `f(x)=x²-4x+3` en x=1 → f'(x)=2x-4, f'(1)=**-2**.
- Variante B: `f(x)=3x²+2x` en x=2 → f'(x)=6x+2, f'(2)=**14**.
- Variante C: `f(x)=x³-3x` en x=-1 → f'(x)=3x²-3, f'(-1)=**0** (punto crítico).

**Ítem 4 (C-N3-02 · gradiente y un paso de descenso).** "Calcula el gradiente de esta función en el punto dado, y ejecuta UN paso de descenso de gradiente con la tasa indicada."
- Variante A: `f(x,y)=x²+3y²` en (2,1), tasa=0.1 → grad=(4,6), nuevo punto **(1.6, 0.4)**.
- Variante B: `f(x,y)=(x-1)²+(y-2)²` en (0,0), tasa=0.2 → grad=(-2,-4), nuevo punto **(0.4, 0.8)**.
- Variante C: `f(x,y)=2x²+y²-2x` en (1,1), tasa=0.15 → grad=(2,2), nuevo punto **(0.7, 0.7)**.

**Ítem 5 (C-N3-03 · Bayes y tasa base).** "Con esta tasa base, sensibilidad y falso positivo, calcula P(condición|positivo) y explica por qué no coincide con la sensibilidad."
- Variante A: base 2%, sensibilidad 95%, falso positivo 4% → P(condición|positivo)=**0.3265**.
- Variante B: base 0.5%, sensibilidad 90%, falso positivo 3% → P(condición|positivo)=**0.131**.
- Variante C: base 5%, sensibilidad 99%, falso positivo 10% → P(condición|positivo)=**0.3426**.

**Ítem 6 (C-N3-03 · esperanza/varianza/covarianza).** "Calcula la esperanza y varianza de x, y la covarianza entre x e y. Interpreta el signo de la covarianza en una frase."
- Variante A: x=[1,2,3,4], y=[3,5,4,8] → E[x]=2.5, Var[x]=1.25, Cov(x,y)=**1.75** (positiva: crecen juntas).
- Variante B: x=[2,4,6,8,10], y=[9,7,5,3,1] → E[x]=6.0, Var[x]=8.0, Cov(x,y)=**-8.0** (negativa: se mueven opuestas).
- Variante C: x=[5,5,5,5], y=[1,2,3,4] → E[x]=5.0, Var[x]=**0** (x nunca varía), Cov(x,y)=**0** (caso límite: si una variable no varía, su covarianza con cualquier otra es exactamente 0).

**Ítem 7 (C-N3-04 · decodificar una fórmula).** "Decodifica esta fórmula símbolo por símbolo (¿qué es escalar/vector/matriz? ¿qué operador es cada uno?) y trádúcela a pseudocódigo."
- Variante A: `∇f(θ) = [∂f/∂θ₁, ∂f/∂θ₂]` — el gradiente como vector de derivadas parciales (M2.T3/M4.T3).
- Variante B: `ŷ = σ(Wx+b)` — capa lineal seguida de sigmoide (M4.T2/M4.T5).
- Variante C: `θ ← θ - α·E[∇L(θ)]` — actualización de gradiente sobre el valor esperado de la pérdida (M2.T4/M4.T3/M4.T4 combinados).

**Ítem 8 (C-N3-04 · convención tipográfica).** "En este fragmento, identifica qué símbolos son escalares, cuáles vectores y cuáles matrices, solo por su tipografía — sin leer la explicación en palabras."
- Variante A: `y = Wx + b` (W matriz, x y b vectores, y vector resultado).
- Variante B: `L(θ) = (1/n)Σᵢ(yᵢ-ŷᵢ)²` (θ vector de parámetros, yᵢ/ŷᵢ escalares indexados, L(θ) escalar resultado).
- Variante C: `Cov(X,Y) = E[(X-μₓ)(Y-μᵧ)]` (X,Y variables aleatorias escalares, μₓ/μᵧ escalares, Cov un escalar resultado — ninguno de estos es vector ni matriz, a pesar de la notación densa).

**Nota de diseño:** los 8 ítems cubren las 4 competencias con 2 ítems cada una, 3 variantes cada ítem (24 variantes totales) — todos los valores numéricos verificados por ejecución real de Python antes de fijarse aquí, siguiendo la misma disciplina que rigió cada ejercicio de M1-M4. El examinador puede generar variantes adicionales cambiando los valores numéricos sin cambiar la estructura del ítem, siempre que re-verifique el resultado por ejecución real antes de usarlo — nunca a mano.

---

*Paso 8 — pendiente de aprobación por el Director.*
