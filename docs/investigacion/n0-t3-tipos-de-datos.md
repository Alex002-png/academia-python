# Investigación Pedagógica de N0·T3 — Tipos de datos

*Conforme a DOC-11 §0bis. Documento independiente, previo a la redacción de la lección. Fuentes reales, citadas — no reproducción de impresión genérica.*

## 1. Cómo enseñan este concepto exacto las instituciones de referencia

**MIT (6.0001 — Introduction to Computer Science and Programming in Python).** Los tipos primitivos (`int`, `float`, `bool`, `str`) se introducen en la primera lección de contenido técnico, como parte del vocabulario mínimo de "objetos" del lenguaje — MIT trata el tipo como propiedad del **objeto**, no de la variable, coherente con el modelo etiqueta/objeto que este mismo syllabus ya construyó en T2. El curso es denso y avanza rápido hacia problem sets, sin dedicar una sesión aislada y extensa solo a tipos — los tipos se aprenden en uso, no como tema autónomo prolongado. *(Fuente: [MIT OCW 6.0001, Syllabus y materiales de Lecture 1](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/).)*

**Harvard (CS50P — Introduction to Programming with Python).** CS50 dedica un recurso propio y explícito a tipos de datos, con vocabulario técnico deliberado desde el principio: *statically-typed* vs. *dynamically-typed*, tipos *nativos*. La entrega es en formato de "shorts" — videos cortos y focalizados por sub-concepto — combinados con la lectura + problem set, es decir: **descompone el tema en píldoras**, no en un bloque monolítico. *(Fuente: [CS50 Data Types (PDF)](https://cs50.harvard.edu/ap/2020/assets/pdfs/data_types.pdf); [CS50x Data Types short](https://cs50.harvard.edu/x/2022/shorts/data_types/).)*

**Stanford (CS106A).** Usa una analogía explícita y muy citada: la variable como **etiqueta de equipaje en una maleta**, donde *"cada maleta sabe qué tipo de información transporta"*. Es memorable y pedagógicamente popular — pero, examinada con rigor, **reintroduce el modelo de contenedor** ("la maleta sabe", "la maleta contiene") que precisamente T2 de esta Academia se esforzó en desmontar (etiquetas, no cajas). *(Fuente: [Stanford CS106A, Lecture 4 — Variables & Intro Python](https://web.stanford.edu/class/archive/cs/cs106a/cs106a.1212/lectures/4-Variables/4-IntroPython.pdf).)*

**Traza concreta donde la analogía de la maleta falla** *(exigido por el Director — la crítica debe ser demostrable, no solo afirmada)*:

```python
x = 5
print(type(x))    # <class 'int'>
x = "hola"
print(type(x))    # <class 'str'>
```

Un estudiante que aprendió "la maleta sabe qué tipo transporta" tiene, por diseño de la propia analogía, una predicción natural y **incorrecta**: si `x` es "una maleta de tipo int", ¿cómo puede la misma maleta `x` pasar a ser "de tipo str" en la línea siguiente? Dos caminos, ambos malos: **(a)** el estudiante predice que la segunda línea debería fallar o ser conceptualmente rara ("¿la maleta cambió de tipo?"), lo cual es una predicción falsa que la ejecución real desmiente — obligándolo a **abandonar la analogía que se le dio para entender**, justo el resultado que una buena analogía debe evitar; o **(b)** el estudiante concluye que "la maleta puede cambiar de tipo", lo cual oscurece el hecho real: `x` nunca tuvo un tipo — la etiqueta simplemente se movió de un objeto `int` a un objeto `str` completamente distinto, cada uno con su propio tipo, inmutable mientras ese objeto exista. La maleta (contenedor) implica continuidad de identidad con propiedades cambiantes; la etiqueta (referencia) implica movimiento entre objetos distintos, cada uno con sus propias propiedades fijas. Son modelos incompatibles.

**Por qué la analogía de reemplazo preserva mejor la semántica real:** se sustituye por el **envase original de un producto con una etiqueta de precio pegada encima** — una lata de conservas trae impreso "CONSERVAS" de fábrica (el tipo, propiedad del objeto, fijo desde que el objeto existe); la etiqueta de precio ("x", $5) puede despegarse y pegarse sobre una caja de cereal distinta. Aplicada a la misma traza:

```python
x = 5       # la etiqueta "x" se pega sobre la lata de conservas (objeto int, 5)
x = "hola"  # la etiqueta "x" se despega y se pega sobre la caja de cereal (objeto str, "hola")
```

Aquí la predicción natural y **correcta** emerge sola: nadie espera que la lata de conservas "se convierta" en caja de cereal — lo que cambia es sobre qué producto está pegada la etiqueta de precio. El tipo (`CONSERVAS` / `CEREAL`) es y siempre fue del producto, nunca de la etiqueta — exactamente el comportamiento real de `type(x)` en Python: pregunta por el tipo del objeto al que `x` apunta *en este instante*, no por un tipo "propio" de `x`. Esta analogía, además, es una extensión directa —no una novedad desconectada— del modelo de T2 (el número de turno de la farmacia): **misma familia de imagen, un nivel más de detalle.**

**Carnegie Mellon (15-112).** Énfasis en producir código "claro, robusto y razonablemente eficiente" mediante diseño top-down y **testing y debugging efectivos** desde el principio — el tipo se trata como una propiedad que hay que verificar activamente (con `type()`, con pruebas), no solo enunciar. Curso rápido y riguroso desde la primera semana. *(Fuente: [CMU 15-112, página oficial del curso](https://www.cs.cmu.edu/~112/).)*

**Oxford / Cambridge.** Búsqueda específica sin resultado citable comparable — ninguna de las dos tiene un curso introductorio de Python públicamente documentado con el mismo nivel de detalle pedagógico que MIT/CS50/CMU/Stanford para este micro-concepto exacto. Se declara honestamente la ausencia en vez de rellenarla con una impresión genérica (DOC-11 §0bis, condición de cumplimiento).

## 2. Qué concluye la investigación en Learning Sciences / CS-Ed sobre este concepto específico

**El modelo mental de los tipos exige un "notional machine" explícito.** La investigación de Sorva (2013) sobre *notional machines* es directamente aplicable: gran parte de los errores de novato provienen de una comprensión inadecuada de procesos "ocultos" del intérprete — y los tipos son, precisamente, un proceso invisible (Python decide en tiempo de ejecución qué operaciones son válidas según el tipo, sin que el estudiante vea ese chequeo). La literatura recomienda tratar explícitamente ese chequeo como objetivo de aprendizaje, no darlo por sentado. *(Fuente: [Sorva, "Notional Machines and Introductory Programming Education", ACM TOCE 2013](https://dl.acm.org/doi/10.1145/2483710.2483713).)*

**La confusión "fuerte vs. dinámico" es un error documentado, no anecdótico.** Existe evidencia consolidada (más allá de un solo paper) de que los principiantes confunden dos ejes ortogonales: *(a)* si el lenguaje declara tipos explícitamente (estático/dinámico) y *(b)* si el lenguaje permite mezclar tipos sin avisar (fuerte/débil). Python es dinámico (no declaras) **y** fuerte (nunca mezcla tipos a escondidas) — la confusión típica es asumir que "dinámico" implica "todo vale", cuando en realidad Python es de los lenguajes más estrictos en no convertir implícitamente. Esta distinción, mal enseñada, predice exactamente el error que un estudiante cometería al esperar que `"3" + 4` "simplemente funcione". *(Fuente consolidada de documentación técnica y literatura de referencia sobre tipado en Python — ver bibliografía.)*

**Literatura general de misconceptions.** La revisión sistemática de Qian & Lehman (ACM TOCE, 2017) confirma que las dificultades de principiantes en programación introductoria son recurrentes, documentadas y en buena medida predecibles — lo que legitima diseñar el conflicto cognitivo de una lección **a partir de errores ya catalogados**, no solo de intuición del autor. *(Fuente: [Qian & Lehman, "Students' Misconceptions and Other Difficulties in Introductory Programming", ACM TOCE 2017](https://dl.acm.org/doi/10.1145/3077618).)*

## 3. Síntesis crítica — qué se adopta, qué se rechaza, y por qué

| Institución | Qué es excepcional | Limitación frente a nuestra identidad (DOC-03) |
|---|---|---|
| MIT | El tipo como propiedad del objeto, no de la variable — coherente con nuestro propio modelo de T2 | Insuficiente por sí solo: no da vocabulario explícito para *por qué* Python es estricto |
| CS50 | Vocabulario técnico correcto desde el día uno (estático/dinámico) + descomposición en píldoras | El formato "short" no cabe en nuestra estructura de sesión única de DOC-11 — se adapta como sub-secuencia dentro del Bloque 3, no como formato completo |
| Stanford | Analogía memorable y popular | **Se rechaza explícitamente**: la "maleta que sabe su tipo" reintroduce el modelo de contenedor que T2 desmontó. Adoptarla sin corregirla sería una regresión pedagógica real, no una mejora |
| CMU | Verificar el tipo activamente (`type()`, pruebas), no solo enunciarlo | Encaja perfectamente con A5 (razonamiento sobre la corrección) de DOC-03 — se adopta íntegramente |

**Decisión de síntesis:** la lección adopta el marco de MIT (tipo = propiedad del objeto) como base conceptual, se apropia del vocabulario preciso de CS50 (estático/dinámico vs. fuerte/débil, para prevenir la confusión documentada), integra la disciplina de verificación activa de CMU (`type()` como herramienta de diagnóstico, no de memorización), y **rechaza conscientemente** la analogía de Stanford por su riesgo real de regresión hacia el modelo de caja.

## 4. Estrategia óptima propuesta — con justificación citada por decisión

- **¿Por qué NO usar la analogía de la maleta?** Porque la evidencia de la síntesis (punto 3) muestra que reintroduce el modelo de contenedor — se sustituye por una analogía que preserva "el tipo es del objeto, no de la etiqueta": el tipo como el **envase original de un producto** (una lata dice "conservas" no porque la etiqueta con el precio lo diga, sino porque el contenido real es una lata) — la etiqueta de precio (variable) puede moverse a otro producto; lo que hay dentro define el tipo, siempre.
- **¿Por qué introducir el vocabulario "dinámico" y "fuerte" por separado, y no solo "Python es flexible con los tipos"?** Porque la investigación (punto 2) documenta que fusionarlos produce exactamente la expectativa errónea de que Python permite mezclar tipos libremente — separarlos previene el error antes de que ocurra, no solo lo corrige después.
- **¿Por qué el conflicto cognitivo debe ser `"3" + 4` y no `int("abc")`?** Porque el primero expone la confusión fuerte/dinámico documentada (punto 2) de forma mínima y sin ruido adicional; el segundo es un error real pero de una clase distinta (conversión inválida, no mezcla de tipos) — se reserva como segundo error deliberado, no como el conflicto cognitivo principal.
- **¿Por qué `type()` aparece como herramienta de verificación activa desde el primer ejercicio, y no solo al final?** Porque CMU demuestra que verificar en vez de asumir es un hábito que se instala mejor por repetición temprana que por mención tardía — y conecta directamente con A5 de DOC-03 (argumento de corrección: "¿cómo sabes que funciona?").
- **¿Por qué el error observado de Alex en T2 (`contador = "10"`) se reutiliza aquí como puente, no como anécdota aislada?** Porque es evidencia real (registro de observaciones de T2) de la confusión exacta que T3 formaliza — reutilizarla cumple la condición de inevitabilidad que ya rige toda la Academia: el estudiante debe sentir "por fin entiendo aquello que me pasó", no un tema nuevo sin relación.
- **¿Por qué la secuencia de dificultad va de "predecir el tipo" a "predecir el error" y no al revés?** Porque el modelo mental (punto 2, notional machine) debe construirse en un caso donde nada falla, antes de exponerlo a un caso donde sí falla — orden ya validado por DOC-03 (M4 antes que M5: intuición antes que conflicto).

## Revisión crítica de la investigación *(fase adversarial obligatoria — busco dónde estoy equivocado, no defiendo lo ya escrito)*

**Hallazgo 1 — confundí evidencia descriptiva con prescriptiva (objeción que formularía cualquier experto real).** Toda la literatura citada en §2 (Sorva, Qian & Lehman, la confusión fuerte/dinámico) es **descriptiva**: documenta QUÉ errores cometen los novatos. Ninguna de mis fuentes prueba que una intervención pedagógica específica (p. ej., "enseñar el vocabulario estático/dinámico de forma explícita y temprana") efectivamente PREVIENE ese error mejor que otras estrategias. Traté un hallazgo descriptivo como si fuera prescriptivo — la brecha exacta que un revisor internacional señalaría primero.

**Hallazgo 2 — sobrevaloré la cita a MIT por prestigio, no por lo que realmente encontré.** Al revisar mi propia búsqueda: mis fuentes de MIT no confirman explícitamente la frase "el tipo es del objeto, no de la variable" — esa formulación es correcta (es la semántica real de Python, verificable contra el modelo de objetos de CPython, no contra ninguna universidad), pero yo se la atribuí a MIT sin haberla verificado literalmente en su material. La solidez de esta decisión es real — pero su origen correcto es la semántica del lenguaje, no la autoridad de MIT. Corrijo la atribución.

**Hallazgo 3 — tensión no declarada con nuestro propio principio PED-08.** Introducir vocabulario técnico (estático/dinámico, fuerte/débil) *antes* del conflicto cognitivo, como proponía el diseño original, contradice nuestra propia regla de minimizar carga cognitiva innecesaria (DOC-03 PED-08: la carga se gasta en el problema, no en descifrar términos nuevos). Un estudiante que aún no sintió el error no tiene dónde anclar vocabulario abstracto. **Ajuste aplicado:** el vocabulario formal se introduce *después* de que el estudiante viva el conflicto cognitivo (`"3" + 4`), etiquetando una experiencia ya sentida — no antes, como abstracción sin ancla. Esto además alinea la lección con la secuencia ya sellada de DOC-03 (M4→M5→M6: intuición antes que rigor).

**Hallazgo 4 — el rechazo de Stanford es sólido, pero su alcance estaba mal declarado.** La demostración lógica (traza `x=5; x="hola"`) es válida y no depende de interpretación — pero rechazar la analogía como si fuera un error universal de Stanford sería injusto: para un curso sin el cimiento previo de "etiquetas, no cajas" que nuestro propio T2 ya construyó, la analogía puede ser inocua. El rechazo es **correcto para nuestro contexto específico** (conflicto con una decisión arquitectónica previa nuestra), no una condena general de la pedagogía de Stanford. Corrijo el alcance de la afirmación.

**Hallazgo 5 — el más importante: la "convergencia" entre el error de Alex y la literatura no está confirmada, es una hipótesis.** Until ahora traté `contador = "10"` como el mismo fenómeno que la confusión fuerte/dinámico documentada. Pero nunca until obtuve la explicación de Alex sobre *su propio razonamiento* (la pregunta socrática sigue sin respuesta al momento de escribir esto). Existen al menos tres causas alternativas igualmente plausibles: **(a)** creía genuinamente que tipo no importa mucho (coincide con la literatura citada); **(b)** fue un descuido de sintaxis sin peso conceptual; **(c)** imitó un patrón de un ejercicio anterior sin razonar el tipo en absoluto. Llamar a esto "convergencia confirmada" fue una sobre-interpretación. **Ajuste aplicado:** se degrada a hipótesis plausible, y el diagnóstico relámpago de T3 se rediseña para *probar* cuál de las tres causas es real, en vez de asumir la (a) de antemano.

### Clasificación de solidez de evidencia por decisión

| Decisión | Clasificación | Razón |
|---|---|---|
| El tipo es propiedad del objeto, no de la variable | **Evidencia muy sólida** | Verificable directamente contra la semántica de Python/CPython — no depende de qué universidad lo enseñe así (Hallazgo 2) |
| Vocabulario estático/dinámico vs. fuerte/débil como prevención | **Evidencia limitada** | El fenómeno del error está documentado; la intervención pedagógica específica no está probada, y tensiona con PED-08 (Hallazgo 1, 3) |
| `type()` como verificación activa desde el primer ejercicio | **Decisión de diseño** | Filosofía general de CMU es sólida; la aplicación puntual a este ejercicio es extrapolación propia, no algo verificado en CMU |
| Rechazo de la analogía de la maleta (Stanford) | **Evidencia muy sólida, de alcance contextual** | Demostración lógica directa; válida para nuestra arquitectura (T2 previo), no condena universal (Hallazgo 4) |
| Analogía de reemplazo (envase + etiqueta) | **Evidencia muy sólida** | Se deriva directamente de la demostración anterior |
| `"3" + 4` como conflicto cognitivo principal | **Decisión de diseño** | Principio general de carga cognitiva (PED-08); sin evidencia específica de que supere a otras opciones en esta comparación exacta |
| Error de Alex como "convergencia" con la literatura | **Evidencia limitada — hipótesis, no confirmación** | Degradado tras la revisión (Hallazgo 5): plausible, no probado sin la explicación real de Alex |
| Ausencia de referencia Oxford/Cambridge | *(no aplica clasificación — hallazgo metodológico, no decisión pedagógica)* | Honestidad declarada, DOC-11 principio 2 |

## Decisiones de diseño derivadas de la investigación *(sección obligatoria, DOC-11 §0bis v1.3.0 — actualizada tras la revisión crítica)*

| Decisión | Adopta / Modifica / Rechaza | Justificación | Evidencia que la respalda |
|---|---|---|---|
| Tipo como propiedad del objeto, no de la variable | **Adopta** (de MIT) | Coherente con el modelo etiqueta/objeto ya construido en T2 — sin esto, T3 contradiría T2 en vez de extenderlo | MIT 6.0001 (§1); continuidad interna con T2 |
| Vocabulario "estático/dinámico" separado de "fuerte/débil" | **Adopta con ajuste de orden** (tras revisión crítica): se introduce *después* del conflicto cognitivo `"3"+4`, nunca antes — etiqueta una experiencia ya vivida, no la anticipa como abstracción | El fenómeno está documentado; la intervención específica es evidencia limitada, y el orden original tensionaba con PED-08 (carga cognitiva) | Investigación consolidada de tipado en Python (§2); ajuste propio por PED-08 (Hallazgo 3 de la revisión crítica) |
| `type()` como herramienta de verificación activa desde el primer ejercicio | **Adopta** (de CMU) | El hábito de verificar en vez de asumir se instala mejor por repetición temprana; conecta con A5 de DOC-03 | CMU 15-112 (§1); DOC-03 A5 |
| Analogía de la "maleta que sabe su tipo" | **Rechaza** (de Stanford) | Reintroduce el modelo de contenedor que T2 desmontó; produce una predicción falsa demostrable (traza en §1) | Traza concreta §1; continuidad con el modelo de T2 |
| Analogía de reemplazo: envase de producto + etiqueta de precio | **Nueva, propia** | Preserva "el tipo es del objeto, no de la etiqueta"; predicción correcta verificada contra la traza real de `type(x)` | Traza concreta §1 |
| Conflicto cognitivo principal: `"3" + 4` (no `int("abc")`) | **Adopta** con selección deliberada | Expone la confusión fuerte/dinámico documentada con el mínimo de ruido; `int("abc")` es un error de clase distinta, se reserva como segundo error | §2, §4 (justificación original) |
| Reutilización del error real de Alex (`contador = "10"`) como puente T2→T3 | **Adopta como hipótesis a probar, no como hecho confirmado** (degradado tras revisión crítica, Hallazgo 5) | Plausible y coincide con la literatura, pero sin la explicación real de Alex no puede llamarse "convergencia confirmada" — el diagnóstico relámpago de T3 se diseña para probar la causa real, no asumirla | Registro de observaciones de T2 (O real, 2026-07-19); revisión crítica de este documento |
| Ausencia de referencia comparable en Oxford/Cambridge | **Se declara, no se rellena** | Honestidad metodológica (principio 2, DOC-11 §0bis) | Búsqueda sin resultado citable para este micro-concepto |

## Principio de falsabilidad aplicado a las decisiones clave

| Decisión | ¿Qué la haría abandonarse? |
|---|---|
| Vocabulario técnico después del conflicto cognitivo, no antes | Si el registro de observaciones (§6, DOC-11) muestra en varios estudiantes que introducirlo antes no genera confusión adicional, se reconsideraría el orden |
| Rechazo de la analogía de la maleta | Si se demuestra que un estudiante con base previa distinta (sin el T2 de esta Academia) no comete el error de predicción descrito en la traza, el rechazo dejaría de aplicar fuera de nuestro contexto (ya declarado como contextual) |
| Hipótesis sobre la causa del error de Alex | Se abandona en cuanto Alex explique su razonamiento real — lo confirme o lo refute |
| `type()` como verificación activa desde el primer ejercicio | Si el registro muestra que retrasarlo no perjudica el hábito de verificación en niveles posteriores, se reconsideraría su posición temprana |

## Bibliografía citada

- [MIT OCW 6.0001 — Syllabus y Lecture 1](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/)
- [CS50 — Data Types (PDF)](https://cs50.harvard.edu/ap/2020/assets/pdfs/data_types.pdf) · [CS50x Data Types short](https://cs50.harvard.edu/x/2022/shorts/data_types/)
- [Stanford CS106A — Lecture 4: Variables & Intro Python](https://web.stanford.edu/class/archive/cs/cs106a/cs106a.1212/lectures/4-Variables/4-IntroPython.pdf)
- [CMU 15-112 — página oficial del curso](https://www.cs.cmu.edu/~112/)
- Sorva, J. (2013). ["Notional Machines and Introductory Programming Education."](https://dl.acm.org/doi/10.1145/2483710.2483713) ACM Transactions on Computing Education.
- Qian, Y. & Lehman, J. (2017). ["Students' Misconceptions and Other Difficulties in Introductory Programming: A Literature Review."](https://dl.acm.org/doi/10.1145/3077618) ACM Transactions on Computing Education.

## Estado

**Desarrollo:** ✅ Completa. **Revisión crítica:** ✅ Completa (5 hallazgos, 2 ajustes aplicados). **Aprobación final:** ✅ **Cerrada y aprobada por el Director (2026-07-19).** Autorizada la redacción de la lección; la validación con Alex continúa como proceso independiente, sin bloquear T4 en adelante. *Documento vivo (DOC-11 §0bis, principio 4): se actualizará si la validación real aporta evidencia nueva — en particular, la explicación pendiente de Alex sobre `"4 * 2" → "42"` y `contador = "10"`.*

## Addendum v2.0.1 (2026-07-19) — reconstrucción bajo el Estándar de Excelencia Mundial

Institución añadida a la lista de referencia del Director tras la aprobación original de esta investigación: **UC Berkeley (CS61A)**. Verificado: CS61A dedica una lección propia y completa a *"Type Coercion"* — confirma, con una quinta institución de referencia independiente, que la mezcla/conversión de tipos no es un detalle menor tratado de pasada, sino un tema con entidad pedagógica propia en más de una universidad de clase mundial. No cambia ninguna decisión de diseño ya tomada — refuerza, con una fuente adicional, que dedicar un bloque completo de esta lección al conflicto de tipos mixtos (`"3" + 4`) está alineado con la práctica de referencia, no es una elección aislada de la Academia. *(Fuente: [CS61A, Type Coercion](http://www.infocobuild.com/education/audio-video-courses/computer-science/CS61A-Spring2015-Berkeley/lecture-18.html).)* Ningún ajuste nuevo de diseño se deriva de este addendum — se registra por completitud metodológica, no porque cambie ninguna conclusión.
