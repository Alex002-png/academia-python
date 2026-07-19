# DOC-11 — Estándar de Autoría de Lecciones

## Control del documento (conforme a DOC-00 §15.4)

| Campo | Valor |
|---|---|
| **Document Key** | DOC-11 · Tier T1 *(clave nueva incorporada al catálogo 15.3, mismo procedimiento que DOC-10)* |
| **Versión / Estado** | **1.2.0** · ✅ **Aprobado** por el Director (2026-07-19) — **estándar oficial de autoría de todas las lecciones futuras de la Academia**, con el registro de observaciones de ejecución (§6) y la investigación pedagógica específica previa (§0bis) institucionalizados |
| **Autoridad de origen** | DOC-03 §7bis/§16.7 (DOC-00): "plantillas, heurísticas, profundidades y checklist de conformidad" delegadas a DOC-03, que a su vez delega la operativa concreta de autoría — mismo patrón por el que DOC-02 desarrolla los principios de evaluación del Blueprint en instrumentos concretos |
| **Depende de** | DOC-03 (el modelo — 14 momentos, 5 actos, modelos A-E, checklist §6 — ley intocable) · DOC-01 (competencias que cada lección sirve) · DOC-02 (instrumentos de evaluación que cada lección instancia) · SYL-Nx (la ficha de tema, que esta plantilla desarrolla hasta el texto real) |
| **Produce / desarrolla** | El formato concreto en que se redacta **toda lección real** de la Academia — el texto que el Tutor conduce en sesión y que alimenta el contenido del Campus. Es el último eslabón de la cadena Blueprint→DOC-03→SYL-Nx→**DOC-11**→lección |
| **Naturaleza** | **No es un documento de planificación ni de arquitectura** (a diferencia de DOC-10): es el molde operativo de autoría. No decide qué se enseña (SYL) ni por qué así (DOC-03): decide **la forma exacta en que una lección se escribe** para que sea completa, verificable y reproducible por cualquier autor futuro |
| **Historial** | 0.1.0-draft (2026-07-19): redacción conforme a las 10 preguntas obligatorias del Director + la estructura completa de DOC-03 (14 momentos) llevada a granularidad de lección individual · 0.2.0-draft (2026-07-19): auto-auditoría de 7 preguntas del Director (plantilla vs. estándar) — cada bloque gana Principio + Condición de cumplimiento verificable + consecuencia de su ausencia; obligatoriedad diferenciada en 3 categorías (universal/condicional-contenido/condicional-libertad de diseño, con la confrontación de soluciones reclasificada de universal a condicional); 2 notas de no-redundancia (transformación cognitiva no es campo propio; evidencia de dominio ≠ defensa); generalización explícita del vocabulario de escalera más allá del código (matemática, diseño) · **1.0.0 (2026-07-19): aprobado por el Director tras la auto-auditoría de 7 preguntas — estándar oficial de autoría de lecciones. Decisión institucional asociada: con DOC-11 se cierra la fase de diseño de la infraestructura curricular (Blueprint+DOC-01/02/03/10/11+SYL-N0/N1/N2); comienza formalmente la Prioridad 2 — construcción del contenido vivo, empezando por N0·T2** · **1.1.0 (2026-07-19): aprobada la primera lección real (N0·T2) — DOC-11 supera su primera prueba de fuego sin romperse: conservó el contenido ya validado en producción, usó evidencia real del estudiante (O-01) como conflicto cognitivo, y su checklist marcó "no aplica" con justificación en vez de fingir cumplimiento. Se institucionaliza §6, el registro de observaciones de ejecución por lección, como práctica permanente** · **1.2.0 (2026-07-19): §0bis — investigación pedagógica específica (no genérica) obligatoria antes de diseñar toda lección nueva, aprobada como documento independiente previo a la autoría; aplica desde N0·T3 en adelante, sin exigir rehacer T1/T2** |

---

## 0. Por qué existe este documento y qué NO es

DOC-03 dicta **el modelo**: la secuencia de 14 momentos, los principios que la fundamentan, el checklist de conformidad de un tema. SYL-Nx dicta **qué temas** existen y su ficha resumen (objetivo, prerrequisitos, modelo mental, evaluación — ya construida para N0, N1 y N2). Pero ninguno de los dos contiene todavía **el texto real** que un estudiante lee, resuelve y defiende. Ese es exactamente el vacío que la Prioridad 2 debe llenar, y este documento es su molde: el formato mínimo obligatorio que toda lección real DEBE seguir para poder llamarse conforme.

**Esto no es un documento de planificación.** No decide duración, no decide currículo, no decide pedagogía — todo eso ya está decidido y sellado en DOC-10 y DOC-03. Esto es el **molde de autoría**: la forma exacta del contenedor donde el contenido real se escribe.

**Criterio de calidad que gobierna cada campo de esta plantilla** *(mandato del Director)*: la pregunta correcta nunca es "¿está suficientemente bien?" — es **"¿podría esta lección formar parte de la experiencia educativa de una de las mejores universidades del mundo?"**. Cada campo existe porque su ausencia dejaría un vacío real en la lección, no por completismo documental (E7, DOC-03 §3.F, aplicado aquí a la autoría misma).

## 0bis. Investigación pedagógica específica *(fase obligatoria previa al diseño de toda lección nueva — institucionalizado por el Director, 2026-07-19)*

*Aplica a toda lección diseñada desde este momento en adelante (N0·T3 y siguientes). No exige rehacer lecciones ya aprobadas bajo el proceso anterior (N0·T1, N0·T2) salvo que el Director lo ordene explícitamente para un caso concreto.*

Ninguna lección se diseña ya solo con el criterio del autor o con la experiencia acumulada de lecciones previas. Antes de redactar el contenido (Bloques 0–6), se produce y se aprueba, como documento independiente, una **"Investigación Pedagógica de N#·T#"**, con esta estructura mínima:

1. **Cómo enseñan este concepto exacto** — no el área general, el concepto específico — al menos: MIT, Carnegie Mellon, Harvard (CS50 cuando aplique), y Stanford/Oxford/Cambridge cuando aporten algo distintivo. Con fuente citable (curso, lectura, syllabus público) — nunca una impresión genérica de "así se enseña en las universidades".
2. **Qué concluye la investigación en Computer Science Education / Learning Sciences específicamente sobre este concepto** — no los principios generales ya incorporados a DOC-03 (P1–P12), sino evidencia puntual del tema exacto (¿hay estudios sobre el orden óptimo de enseñar esto frente a lo siguiente? ¿cuál es el error de novato más universal y documentado en este concepto preciso?).
3. **Síntesis crítica, nunca colección.** Qué hace excepcional a cada enfoque, qué evidencia lo respalda, y qué limitación tiene frente a la identidad pedagógica propia (DOC-03) — jamás copiar una institución entera: identificar el mecanismo específico que funciona, y por qué.
4. **La estrategia óptima propuesta**, con cada decisión de diseño justificada explícitamente y citando su respaldo (de esta investigación o de DOC-03): por qué este ejemplo y no otro, por qué este orden, por qué este laboratorio, por qué esta analogía, por qué esta pregunta socrática, por qué este error deliberado, por qué esta secuencia de dificultad.

**Este documento se presenta y se aprueba por separado, antes de redactar la lección bajo DOC-11.** Solo tras su aprobación comienza la autoría de los Bloques 0–6.

**Condición de cumplimiento:** una investigación que solo enumere "MIT hace X, CMU hace Y" sin la síntesis crítica del punto 3 no cumple su función — el objetivo nunca es coleccionar prácticas: es construir, con evidencia, la mejor versión posible, integrada en la identidad propia de la Academia, no en la de ninguna institución de referencia.

**Relación con la validación ascendente (DOC-03 §8bis):** un hallazgo de investigación que se repite en más de una lección y sobrevive a su propia síntesis crítica es exactamente el tipo de evidencia que puede, con el tiempo, ascender a principio permanente de DOC-03 — esta fase es, entre otras cosas, la fuente más probable de futuros ascensos.

## 1. Estructura de control de la lección

Toda lección abre con esta ficha de identidad — el resumen que un tercero necesita antes de leer una sola línea de contenido:

| Campo | Contenido |
|---|---|
| **Dirección** | `N#.M#.T#` (o el equivalente de SYL-N0), estable, nunca reutilizada |
| **Título** | El nombre de la lección tal como la ve el estudiante |
| **La gran pregunta de la lección** *(nueva — más granular que la gran pregunta del módulo, DOC-03 E1)* | Una única pregunta que esta lección específica responde — anidada dentro de la gran pregunta del módulo, nunca repetida de otra lección |
| **Prerrequisitos** | Temas concretos de los que depende (de este nivel o de niveles anteriores, citados por dirección exacta) |
| **Competencias servidas** | `C-Nx-##` exactas de DOC-01 |
| **Duración estimada** | Heurística, no plazo (14.2) |
| **Conexión con la lección anterior y la siguiente** *(pregunta 10 del Director)* | Qué tensión deja abierta la anterior que esta resuelve; qué tensión deja abierta esta que la siguiente resolverá — el mismo principio de "inevitabilidad" de las Herencias Declaradas, aplicado ahora entre lecciones consecutivas, no solo entre niveles |

## 2. El cuerpo de la lección — los 14 momentos de DOC-03, llevados a texto real

*Cada bloque corresponde exactamente a un momento o grupo de momentos de DOC-03 §2. La plantilla no reinterpreta el modelo: lo aterriza a la granularidad de autoría, exigiendo el **contenido real**, no la descripción de que ese contenido existirá.*

**Cómo leer cada bloque** *(estándar de verificación, no solo de formato — respuesta a la auditoría del Director sobre "plantilla vs. estándar")*: cada bloque se define por cuatro elementos — **Principio** (qué de DOC-03 lo fundamenta) · **Contenido exigido** (qué debe existir, en texto real) · **Condición de cumplimiento** (la propiedad verificable que ese contenido debe satisfacer — no "¿hay una analogía?" sino "¿qué debe ser capaz de hacer un estudiante con ella?") · **Si desaparece** (la carencia concreta y observable que produciría su ausencia). Un bloque que solo contiene texto pero no satisface su condición de cumplimiento **no está completo**, aunque la casilla del checklist parezca marcable.

**Obligatoriedad de los bloques — tres categorías, no una lista plana** *(hallazgo de la auditoría del Director — corrige la rigidez del borrador anterior)*:
- **Universal**: presente en toda lección sin excepción (Bloques 0, 2, 3, 4, 6 y la parte de trade-off + argumento de corrección de Bloque 5).
- **Condicional a que el contenido lo amerite** (DOC-03 ya lo declara así; aquí se hace explícito): la anécdota histórica de costo real (Bloque 1, "cuando exista" — C1); los 4 niveles de dificultad B1 (Bloque 4, solo cuando el tema admite escalar hasta Avanzado/Elite); la máquina nocional explícita (Bloque 3, cuando el tema tiene estado interno que trazar — no todo tema lo tiene).
- **Condicional a que exista libertad de diseño genuina**: la **confrontación de soluciones** (Bloque 5). Solo tiene función pedagógica cuando el problema admite más de un enfoque razonable — forzarla en una lección de sintaxis elemental (p. ej., el primer `print()`) produciría exactamente el relleno decorativo que este documento prohíbe. Cuando no exista esa libertad, el trade-off explícito y el argumento de corrección siguen siendo obligatorios; la confrontación se omite con justificación explícita, no en silencio.

**Generalización más allá del código** *(límite honesto encontrado en la auditoría del Director, pregunta 7)*: el vocabulario de la escalera (predecir/investigar/modificar/escribir/**depurar**) nació pensando en código, pero el andamiaje cognitivo que representa (PRIMM) es más general. En lecciones sin código —matemática pura en N3, un design doc en N7+— la correspondencia es: *predecir* = anticipar un resultado o una consecuencia antes de derivarla/verla · *investigar* = trazar un razonamiento o demostración ajena paso a paso · *modificar* = alterar una derivación o diseño existente con un objetivo dado · *escribir* = producir la derivación, la prueba o el diseño propio · *depurar* = encontrar el fallo en un razonamiento, no solo en código. Ningún autor de N3+ debe sentirse forzado a inventar un "bug de código" donde el tema es una demostración matemática.

### Bloque 0 — Preparación del Tutor *(material de conducción, no se muestra al estudiante como texto corrido)*

- **Preguntas de recuperación activa** *(pregunta 7 del Director; M1)*. **Principio:** PED-04, retrieval practice — la ciencia del aprendizaje exige activación específica de conocimiento previo, no repaso genérico. **Contenido exigido:** 3–5 preguntas concretas y ya redactadas, con su respuesta esperada; al menos una del mazo vivo del estudiante cuando exista registro (20.5). **Condición de cumplimiento:** cada pregunta debe ser respondible de memoria, sin material a la vista, y su fallo debe ser diagnósticamente útil (revela algo específico, no solo "no se acordaba"). **Si desaparece:** el tutor improvisa repaso genérico sesión a sesión, perdiendo la consistencia y la conexión exacta con lo que esta lección específica necesita que siga firme.
- **Diagnóstico relámpago** (M2). **Principio:** P3 (CMU) — enseñar sobre un modelo explícito del pensamiento del estudiante. **Condición de cumplimiento:** la pregunta debe poder fallar de una forma *informativa* — su respuesta incorrecta más probable debe anticipar exactamente el conflicto cognitivo del Bloque 2. **Si desaparece:** el conflicto cognitivo se construye a ciegas, sin saber qué intuición real hay que romper.
- **El problema antes que nada** (M3). **Condición de cumplimiento:** el estudiante debe entender el problema completo sin poder resolverlo aún — si puede resolverlo con lo que ya sabe, no es el problema correcto; si no entiende qué se le pide, la carga cognitiva se gastó en descifrar el enunciado, no en pensar (PED-08). **Si desaparece:** la lección empieza por la teoría, exactamente el orden que P9/PED-10 identifican como menos efectivo.
- **Errores deliberados a inyectar** *(pregunta 8 del Director; M11)*. **Condición de cumplimiento:** cada bug debe representar una *clase* de error (no un typo aislado) y su corrección debe requerir identificar el modelo mental incorrecto que lo produjo, no solo cambiar una línea. **Si desaparece:** B4 (el hilo curricular de debugging) se rompe — el estudiante depura solo los errores que comete por accidente, nunca los que el diseño de la lección anticipa que cometerá.

### Bloque 1 — Intuición, analogía e historia (M4)

**Principio:** C1 — el estudiante nunca aprende una herramienta, aprende la respuesta histórica a un problema. **Contenido exigido:** hook concreto, analogía desarrollada (no solo nombrada), contexto histórico con anécdota de costo real *(condicional: cuando exista — no toda idea tiene una)*. **Condición de cumplimiento:** la analogía debe sobrevivir sola — un estudiante que solo recuerde la analogía, sin ninguna sintaxis, debe poder predecir correctamente el comportamiento básico del sistema. Si la analogía es decorativa (bonita pero no predictiva), no cumple su función aunque esté escrita. **Si desaparece:** el concepto se aprende como dato arbitrario, no como solución a una tensión real — el modo de fallo que toda la Academia existe para evitar.

### Bloque 2 — Conflicto cognitivo (M5)

**Principio:** P3, P9, PED-10 — el momento de máxima atención de la sesión; aquí se corrige el modelo, no el síntoma. **Condición de cumplimiento:** el caso debe estar construido específicamente a partir del diagnóstico del Bloque 0 (no genérico), y debe producir una sorpresa genuina — el estudiante debe poder articular, después, *qué creía* y *por qué estaba mal*, no solo *qué es lo correcto*. **Si desaparece:** la lección explica el modelo correcto sin haber roto antes el incorrecto — el estudiante memoriza la versión nueva sin abandonar la vieja, y ambas conviven sin que él lo note (el patrón exacto que produce errores recurrentes).

### Bloque 3 — Explicación rigurosa con la máquina a la vista (M6)

**Principio:** P10 — el modelo mental de la máquina es la causa nº1 de confusión del novato. **Condición de cumplimiento (pregunta 4 del Director):** el modelo mental debe quedar enunciado en una única frase memorable, autosuficiente — verificable pidiéndole al estudiante, semanas después, que la recite y la aplique a un caso nuevo. **Nota de no-redundancia:** la "transformación cognitiva" (pregunta 2 del Director) **no es un campo propio de este bloque** — es lo que emerge de Bloque 2 (qué se rompió) + Bloque 3 (qué lo reemplaza) leídos juntos; un autor no debe escribir un campo adicional que repita esto. **Si desaparece:** la teoría queda como texto correcto pero sin ancla — el estudiante puede repetirla sin poder usarla para predecir un caso que no vio.

### Bloque 4 — Práctica en escalera (M7–M11)

**Principio:** P7 (PRIMM), P12 (intercalado), P1 (MIT — el aprendizaje ocurre en la distancia entre lo enseñado y lo exigido). **Contenido exigido:** predecir → investigar/reordenar → modificar → escribir → depurar, con ejercicios reales, no su descripción. **Condicional:** los 4 niveles de B1 solo cuando el tema admite escalar hasta Avanzado/Elite; el intercalado (P12) desde el peldaño normal, siempre que existan temas previos con los que intercalar (no aplica a la primerísima lección de un nivel). **Condición de cumplimiento:** el último ejercicio de la escalera debe exigir combinar esta lección con una anterior de una forma que ninguno de los dos ejemplos mostró — si el ejercicio más difícil es solo "más de lo mismo", la escalera no cumplió P1. **Si desaparece:** la práctica queda plana — el estudiante ejecuta la técnica en el único contexto en que la vio, sin haber sido nunca forzado a transferirla.

### Bloque 5 — Laboratorio (M12)

**Principio:** P4, P2 (triple vara), A2, A5. **Contenido exigido — universal:** el problema del Bloque 0 ahora resoluble, un trade-off explícito real, el argumento de corrección. **Condicional (libertad de diseño genuina):** la confrontación de soluciones — ver nota de obligatoriedad arriba. **Condición de cumplimiento:** el trade-off debe tener un costo real en ambas direcciones (si una opción es objetivamente mejor sin contrapartida, no es un trade-off, es la respuesta correcta disfrazada); el argumento de corrección debe obligar a enumerar casos concretos, no aceptar "funciona porque lo ejecuté una vez". **Si desaparece:** el estudiante practica ejecución, nunca criterio — exactamente la distinción entre operador de tecnología e ingeniero que toda la Academia existe para instalar.

### Bloque 6 — Consolidación (M13–M14)

**Principio:** P6 (Oxford — la defensa semanal es el mecanismo de aprendizaje más profundo), M14. **Contenido exigido:** defensa socrática con 3–5 preguntas de repregunta reales; las seis preguntas de excelencia aplicadas literalmente al contenido concreto; lectura dirigida con referencia exacta; puerta Beyond the Curriculum concreta *(universal por mandato de DOC-03 C3 — pero su profundidad puede ser mínima: un solo puntero bien elegido basta; lo que no se acepta es su ausencia total)*. **Nota de no-redundancia (pregunta 5 del Director):** la defensa (mecanismo) y la "evidencia de dominio" de §4 (criterio) no son el mismo campo dicho dos veces — §4 especifica *qué* cuenta como prueba; este bloque especifica *cómo* se obtiene esa prueba en vivo. **Condición de cumplimiento:** al menos una pregunta de defensa debe ser genuinamente inédita (no una variación previsible de lo ya practicado) — la defensa que solo repite el laboratorio no defiende nada nuevo. **Si desaparece:** el dominio queda sin verificar en su forma más exigente — el estudiante nunca tuvo que sostener su razonamiento ante una pregunta que no anticipó.

## 3. Respuesta explícita a las diez preguntas del Director

*Verificación de cobertura — ninguna queda sin campo asignado:*

| # | Pregunta del Director | Dónde vive en esta plantilla |
|---|---|---|
| 1 | ¿Cuál es la gran pregunta de esta lección? | §1, ficha de control |
| 2 | ¿Qué transformación cognitiva produce? | Bloque 3 (modelo mental enunciado) + Bloque 2 (el quiebre que la produce) |
| 3 | ¿Qué error previo corrige? | Bloque 2 (conflicto cognitivo) + Bloque 0 (diagnóstico relámpago) |
| 4 | ¿Qué modelo mental construye? | Bloque 3, frase memorable obligatoria |
| 5 | ¿Qué debe ser capaz de explicar el estudiante al terminar? | Bloque 6 (defensa) + evidencia de dominio (§4) |
| 6 | ¿Qué laboratorio demuestra que realmente aprendió? | Bloque 5 |
| 7 | ¿Qué preguntas de recuperación activa utilizará el tutor? | Bloque 0, redactadas literalmente |
| 8 | ¿Qué errores deliberados aparecerán durante la sesión? | Bloque 0 + Bloque 4 (M11), redactados literalmente |
| 9 | ¿Qué evidencia constituye dominio? | §4 (veredicto trazable) |
| 10 | ¿Cómo se conecta con la siguiente lección? | §1, ficha de control |

## 4. Evidencia de dominio y veredicto trazable

Toda lección declara, sin ambigüedad: **evidencia observable de dominio** (qué comportamiento concreto demuestra comprensión real — DOC-03, campo heredado de la ficha de SYL) y **el instrumento de DOC-02** que la produce (RM-XX aplicable, TD-01 si corresponde). El veredicto sigue el formato de 6 campos de 17.2.4 (instrumento · rúbrica y versión · evidencia · fecha · evaluador · versión normativa vigente) — esta plantilla no lo reinterpreta, solo asegura que la lección deja todo listo para producirlo.

## 5. Checklist de conformidad de la lección

*Verificación final antes de considerar una lección terminada — instancia el checklist de tema de DOC-03 §6. Marcado por categoría (§2): **[U]** universal, **[C]** condicional a que el contenido lo amerite, **[L]** condicional a que exista libertad de diseño genuina. Un ítem [C] o [L] omitido se marca como "no aplica, con justificación" — nunca se omite en silencio.*

☐ Ficha de control completa (§1) **[U]** · ☐ Las 10 preguntas del Director respondidas con contenido real, no descriptivo (§3) **[U]** · ☐ Preguntas de recuperación activa redactadas literalmente, con respuesta esperada **[U]** · ☐ Diagnóstico relámpago que anticipa el conflicto cognitivo **[U]** · ☐ Problema motivador con enunciado completo y no resoluble aún **[U]** · ☐ Errores deliberados con su código/razonamiento exacto y su clase **[U]** · ☐ Hook + analogía desarrollada, verificada como predictiva sin sintaxis **[U]** · ☐ Historia con anécdota de costo real **[C — si existe]** · ☐ Conflicto cognitivo construido específicamente desde el diagnóstico **[U]** · ☐ Teoría completa con modelo mental en una frase memorable **[U]** · ☐ Máquina nocional explícita **[C — si el tema tiene estado que trazar]** · ☐ Escalera de ejercicios reales con transferencia genuina en el último peldaño **[U]** · ☐ 4 niveles de dificultad (B1) **[C — si el tema admite Avanzado/Elite]** · ☐ Intercalado desde el peldaño normal (P12) **[C — si hay temas previos con que intercalar]** · ☐ Laboratorio con trade-off real (costo en ambas direcciones) + argumento de corrección **[U]** · ☐ Confrontación de soluciones **[L — solo con libertad de diseño genuina]** · ☐ Defensa con ≥1 pregunta genuinamente inédita **[U]** · ☐ Seis preguntas de excelencia aplicadas al contenido concreto **[U]** · ☐ Lectura dirigida con referencia exacta **[U]** · ☐ Puerta Beyond the Curriculum, mínimo un puntero concreto **[U, profundidad variable]** · ☐ Evidencia de dominio + instrumento DOC-02 declarados **[U]** · ☐ Conexión con lección anterior y siguiente explícita **[U]** · ☐ Checklist de DOC-03 §6 satisfecho en su totalidad **[U]**.

**Ninguna lección se considera terminada mientras un ítem [U] quede sin marcar, o un ítem [C]/[L] quede sin marcar Y sin justificación explícita de por qué no aplica.** No se acepta relleno, ejemplo decorativo ni teoría sin destino: cada campo existe porque su ausencia deja, verificablemente, una carencia en la experiencia del estudiante (E7) — y ningún campo se exige donde esa carencia no podría producirse.

## 6. Registro de observaciones de ejecución por lección

*(Institucionalizado por el Director, 2026-07-19, tras la aprobación de la primera lección real — N0·T2. Práctica permanente para toda lección futura.)*

Toda lección conforme a este estándar mantiene, además del contenido de los Bloques 0–6, un **registro vivo de observaciones de ejecución** — evidencia pedagógica real, no bitácora de errores de programación del estudiante. Se actualiza tras cada sesión real en que la lección se imparte; no requiere re-aprobación de la lección (patrón DP-15, igual que las Observaciones de ejecución de los SYL).

**Categorías mínimas a registrar:**
1. **Dónde se produjo el mayor conflicto cognitivo real** — coincidió o no con el diseñado en el Bloque 2.
2. **Qué explicación produjo el mayor cambio de modelo mental** — cuál frase, analogía o traza realmente "hizo clic".
3. **Qué ejercicio resultó demasiado fácil o demasiado difícil** frente a lo calibrado en el Bloque 4.
4. **Qué pregunta socrática produjo las mejores respuestas** — candidata a reemplazar o acompañar las preguntas de defensa del Bloque 6.
5. **Duración real por bloque**, contrastada con la estimación de la ficha de control.
6. **Errores espontáneos no previstos** — candidatos a incorporarse como nuevos errores deliberados (Bloque 0) en la próxima revisión de la lección, por el mismo principio de validación ascendente que rige DOC-03 (§8bis): una observación que se repite en más de una ejecución y demuestra mejorar el diagnóstico puede ascender de "observación" a "elemento de diseño".

Este registro es **la materia prima de toda mejora futura de la lección y, cuando corresponda, de este mismo estándar** — la Academia evoluciona por evidencia acumulada de la ejecución real, no por intuición ni por rediseño especulativo.

## 7. Cierre

Este documento no enseña nada por sí mismo — es el molde donde cada lección real se vierte. Su prueba de éxito no es este texto: es que la primera lección construida con él (N0·T2) alcance, verificablemente, el estándar que motivó todo este proyecto. A partir de su aprobación, ninguna lección de la Academia se escribe fuera de esta estructura.
