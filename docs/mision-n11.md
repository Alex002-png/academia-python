# Ficha de Misión — N11 · Research Engineer

**Antes de nada:** lee completo `docs/guia-construccion-niveles.md` — este documento asume que ya lo hiciste. Aquí solo va lo específico de tu nivel. Nota especialmente su prioridad explícita de nivel/dificultad/profundidad (callout al inicio y §8) — tu nivel es, por diseño, el más exigente en lectura crítica de toda la carrera hasta este punto.

**Tu carpeta:** `C:\Users\USER\academia-python-n11\` · **Tu rama:** `nivel/n11`. Confirma ambas (`git branch --show-current`) antes de escribir nada.

## Tu alcance — DOC-10 §9, ya aprobado (instáncialo, no lo rediseñes)

| Campo | Contenido |
|---|---|
| Módulos | **M1 · Lectura de frontera** (papers actuales con autonomía, matemática incluida) · **M2 · Reproducción** (reimplementar un paper y contrastar resultados) · **M3 · Informe científico** (reporte fiel aunque contradiga lo esperado; atribución y licencias) · **M4 · Open source** (issues, PRs, code review en proyectos reales) |
| Competencias | C-N11-01…05 (ver DOC-01 para el texto exacto) |
| Proyecto | Reproducción publicada de un paper + contribuciones aceptadas en open source + defensa oral crítica |
| Compuerta | Proyecto + defensa (**el examen aquí ES la reproducción y su defensa** — no hay banco de examen separado del proyecto, a diferencia de todos los niveles anteriores) |
| Bibliografía oficial | arXiv · Papers With Code · reproducibility challenges |
| Carga estimada | ~6 meses · ~600 h — el nivel más largo hasta este punto (cifra de DOC-10, no auditada — verifica contra tu propio diseño real) |

**Nota de posición:** eres el primer nivel de **ET5 (N11-N12), "Maestría" — aprender a crear y a decidir.** El registro cambia respecto a N0-N10: no se trata ya de dominar herramientas y sistemas dados, sino de producir conocimiento nuevo (una reproducción real, un reporte científico honesto, contribuciones aceptadas por terceros) — la evidencia de dominio es más cercana a la de un investigador junior real que a la de un estudiante resolviendo ejercicios.

## Riesgo de diseño principal — este nivel no encaja bien en el esquema estándar de "día/tema"

A diferencia de todo nivel anterior, tu contenido es predominantemente **lectura crítica, escritura, y colaboración en proyectos reales de terceros** — no hay "ejercicios" en el sentido de `check()` verificable para la mayor parte de M1-M4. Antes de forzar el patrón de 3-días/tema con `ex:[{check:...}]` donde no encaja:

- **M1 (lectura de frontera)** — sí puede tener ejercicios reales de comprensión/traducción de notación (extensión directa de la disciplina de N3.M4 y N6.M4 — decodificar símbolos, verificar afirmaciones del paper con cálculo propio) — esta parte probablemente SÍ vive bien en el esquema estándar.
- **M2 (reproducción de un paper)** — es, en esencia, un proyecto de varias semanas por sí mismo, no una serie de ejercicios cortos. Considera representarlo con una estructura tipo "hitos" (igual que un capstone, ver `docs/guia-construccion-niveles.md` §4) en vez de forzar días/temas artificiales.
- **M3 (informe científico)** — evaluación de escritura y honestidad metodológica ("reporte fiel aunque contradiga lo esperado") — instrumentos de evaluación distintos a un `check()` de código; probablemente rúbricas de revisión, no ejecución.
- **M4 (open source: issues, PRs, code review en proyectos reales)** — DOC-12 puro, pero además depende de terceros reales (mantenedores de proyectos externos aceptando contribuciones) — un elemento fuera del control total del diseño curricular. Documenta esto honestamente como una limitación real del módulo, no la ocultes.

**Antes de comprometerte con una estructura de índice.html para este nivel, plantea explícitamente al Director (o documenta como decisión propia bien razonada, si no hay respuesta disponible cuando lo necesites) cómo se va a representar un nivel que es mayoritariamente proyecto/lectura/colaboración externa** — no asumas que el patrón de 24 temas × 3 días × 10-12 ejercicicios de N3 aplica aquí sin más. Esto es, en sí mismo, un hallazgo de diseño legítimo para tu propia auditoría de cierre si decides adaptarlo.

## Herencia entrante (borrador — N7-N10 se construyen en paralelo, no asumas que ya congelaron)

De ET4 completa: el estudiante ya construyó y operó sistemas reales de IA de extremo a extremo. Tu M1-M2 presuponen que puede leer y razonar sobre arquitecturas reales sin que se las reintroduzcas.

## Documentos a leer además de la guía maestra

`docs/10-plan-maestro-curriculo.md` §9 (tu ficha completa) · `docs/01-perfil-egreso-marco-competencias.md` (C-N11-01…05) · `docs/syllabus/syl-n3.md` §5 (M4, lectura matemática — tu precedente más cercano en espíritu de lectura crítica, aunque a escala mucho menor) · `docs/11-estandar-autoria-lecciones.md` (para lo que SÍ aplique de su esquema, aunque tu nivel se aparte del patrón estándar en varios módulos).

## Primer paso concreto

Antes de escribir `docs/syllabus/syl-n11.md`, decide y documenta explícitamente cómo vas a representar M2-M4 (¿esquema de hitos tipo proyecto? ¿rúbricas de revisión en vez de `check()`?) — es la decisión de diseño más importante de tu nivel, más importante incluso que la elección de modalidad DOC-11/DOC-12 que domina en niveles anteriores. Después, investigación pedagógica real de la bibliografía oficial ya citada arriba.
