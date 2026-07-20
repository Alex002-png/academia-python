# Investigación Pedagógica de N0.T2 — Variables: etiquetas, no cajas

*Primera investigación real de T2 — como T1, nunca había pasado por §0bis (construida antes de que la fase fuera obligatoria). Reconstrucción bajo DOC-11 v2.0.1 (Estándar de Excelencia Mundial).*

## 1. Cómo enseñan este concepto exacto las instituciones de referencia

**MIT 6.0001, Lecture 2:** una asignación **"liga" (binds)** un nombre a un valor — `radius = 2.2` liga el nombre `radius` al valor `2.2` en memoria; una variable "básicamente liga un nombre a un objeto en memoria". Confirma, con la autoridad de la fuente que originó gran parte de T1, que el vocabulario "ligar un nombre" (equivalente a nuestra "etiqueta") no es una simplificación de la Academia — es terminología técnica estándar. *(Fuente: [MIT OCW 6.0001, Lecture 2](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/pages/lecture-slides-code/).)*

**UC Berkeley CS61A — hallazgo real que matiza nuestra posición:** los diagramas de entorno de Berkeley (la herramienta central de CS61A para enseñar variables) usan, literalmente, **una caja con una etiqueta** — pero con una regla precisa: los valores primitivos (números, strings, booleanos) se escriben **directamente dentro de la caja**; los valores compuestos (lo que en N1 serán listas, objetos) se representan con una **flecha** desde la caja hacia el valor, en otro lugar del diagrama. Berkeley no rechaza la palabra "caja" — la usa para lo simple y reserva la flecha (nuestra "etiqueta que apunta") para lo compuesto. *(Fuente: [CS61A, Environment Diagrams](https://cs61a.org/study-guide/environments-hof/).)*

**Honestidad metodológica — Oxford y Cambridge:** no se encontró material académico específico (no comercial) sobre cómo estas instituciones introducen el concepto de variable en un curso de programación para principiantes absolutos — ninguna de las dos tiene, según lo investigado hasta ahora, un curso equivalente a un "CS1 con Python" de acceso público comparable a MIT/Berkeley/CS50. Se declara la ausencia en vez de forzar la comparación.

## 2. Qué concluye la investigación en CS-Ed / Learning Sciences — el hallazgo central de esta investigación

**Hermans & Swidan, "Thinking out of the Box: Comparing Metaphors for Variables in Programming Education" (2018):** un experimento controlado real, con **496 programadores novatos** (niños y adultos), dividió a los participantes en dos grupos — uno recibió la variable explicada como **caja** ("como una alcancía, como una caja de zapatos"), el otro como **etiqueta** ("algo que se coloca sobre un valor, como la edad de una persona"). El resultado **no es unidireccional** — y esto es exactamente el tipo de hallazgo que la revisión crítica de DOC-11 existe para no ocultar:
- En preguntas simples de **una sola asignación**, el grupo de la **caja** obtuvo mejores resultados.
- En preguntas con **dos asignaciones consecutivas** (`x = 5; x = 7` y variantes — el escenario donde aparece la "hipótesis de valores múltiples": creer que una variable puede contener más de un valor a la vez), el grupo de la **etiqueta** superó al de la caja, con menos incidencia de esa misconception específica.

*(Fuente: [Hermans & Swidan, "Thinking out of the Box"](https://www.semanticscholar.org/paper/Thinking-out-of-the-box:-comparing-metaphors-for-in-Hermans-Swidan/871d4c052a06e2caab0f577aa1c0818c8a3fb50f).)*

**Catálogo de misconceptions (Žanko et al., "Analysis of school students' misconceptions about basic programming concepts", Journal of Computer Assisted Learning, 2022):** documenta siete misconceptions recurrentes en variables, incluyendo — de forma directamente relevante para el laboratorio ya existente de esta lección — la **"swapping variable values" misconception** (dificultad genuina y documentada para intercambiar el valor de dos variables sin una tercera). *(Fuente: [Žanko et al. 2022](https://onlinelibrary.wiley.com/doi/abs/10.1111/jcal.12643).)*

**CMU — guía de estilo 15-112:** recomienda explícitamente evitar nombres de variable que coincidan con nombres ya usados por Python (`str`, `list`, `type`, `id`, `input`, `int`, `len`, `sum`, `dict`, `set`, entre otros) — porque sobrescriben silenciosamente la función original sin ningún error visible. **Hallazgo real, no presente en la ficha original de T2:** ningún error deliberado de T2 cubría esta clase de error — silenciosa, sin traceback inmediato, y documentada como práctica de referencia real de CMU. *(Fuente: [CMU 15-112, Style Guide](https://www.cs.cmu.edu/~112-f22/notes/notes-style.html).)*

## 3. Síntesis crítica — revisión adversarial explícita

**La pregunta que esta investigación se hace contra sí misma:** ¿"etiquetas, no cajas" —el título mismo de la lección, y una de las frases más repetidas de toda la Academia (T1, T3, y la base explícita de N1.M1.T2 sobre aliasing)— está en tensión con la evidencia real recién encontrada?

**Respuesta honesta: no lo contradice, lo refina — y el refinamiento fortalece la decisión, no la debilita.** El experimento de Hermans & Swidan muestra que la caja gana en preguntas de una sola asignación simple, y la etiqueta gana exactamente en el escenario de **reasignación y múltiples referencias al mismo objeto** — que es, sin ninguna ambigüedad, el conflicto cognitivo central que esta lección ya elegía enseñar (`precio = 100; precio_final = precio; precio = 200`) y el fundamento directo de la lección de aliasing de N1.M1.T2. La Academia no rechaza "caja" por dogma: la evidencia real dice que "caja" falla exactamente en el terreno donde esta lección más necesita que el estudiante acierte. Rechazar la caja sigue siendo la decisión correcta — pero ahora con la honestidad de reconocer que la caja no es "incorrecta" en general, solo insuficiente para el objetivo específico de esta lección.

**Ajuste real derivado:** el Bloque 3 debe reconocer explícitamente, con la misma honestidad que exige DOC-11, que pensar en una caja no perjudica una asignación simple aislada — y que el problema aparece exactamente cuando hay una segunda asignación o una segunda etiqueta sobre el mismo valor. Esto no es debilitar el modelo: es enseñar exactamente dónde y por qué "etiqueta" gana, en vez de presentarlo como una superioridad absoluta no matizada — más honesto y, según la evidencia, más memorable.

**Segundo ajuste real:** se añade un error deliberado nuevo — nombrar una variable igual que una función incorporada (`list = "compras"`) — inexistente en la ficha original, con respaldo directo de la práctica de CMU.

## Decisiones de diseño derivadas de la investigación

| Decisión | Adopta / Modifica / Rechaza | Por qué | Evidencia |
|---|---|---|---|
| Mantener "etiqueta, no caja" como modelo central de la lección | Adopta (reforzado, no debilitado) | Hermans & Swidan: la etiqueta gana específicamente en el escenario de reasignación/múltiples referencias, que es el conflicto cognitivo central de esta lección | Muy sólida (experimento controlado, n=496) |
| Reconocer explícitamente en Bloque 3 que "caja" no es dañina para una asignación simple aislada | Modifica (ajuste real) | Honestidad metodológica: la evidencia es mixta, no unidireccional; presentar el rechazo como absoluto sería menos preciso que la evidencia real | Muy sólida |
| Vocabulario "ligar" (bind) un nombre a un objeto, como respaldo técnico de "etiqueta" | Adopta | MIT 6.0001 L2 usa el mismo término técnico | Muy sólida |
| Adoptar el híbrido de Berkeley (caja para primitivos, flecha para compuestos) en esta lección | Rechaza, por ahora — con traza concreta | T2 aún no ha introducido objetos compuestos (listas, N1) — introducir la distinción primitivo/compuesto aquí adelantaría contenido de N1 antes de tiempo, exactamente lo que el Director prohíbe. Se reconsiderará explícitamente cuando N1.M1.T2 (ya construida) se revise, no aquí | Decisión de diseño, con fecha de reconsideración explícita |
| Añadir error deliberado: nombrar una variable como una función incorporada (`list`, `str`, `type`...) | Modifica (ajuste real, elemento nuevo) | CMU 15-112 lo documenta como práctica de referencia; la ficha original no lo cubría | Sólida (práctica de referencia institucional, no estudio empírico) |
| Mantener/reforzar el laboratorio de intercambio de variables (swap) | Adopta | Žanko et al. 2022: "swapping variable values" es una misconception documentada — el laboratorio ya ataca exactamente ese punto de fallo real | Sólida |

**Falsabilidad:** si el registro de observaciones (§6) muestra que reconocer explícitamente la utilidad parcial de "caja" en Bloque 3 confunde más de lo que clarifica (el estudiante empieza a dudar de cuándo aplica cada modelo), se abandonaría ese matiz y se volvería al rechazo directo sin nuance — la honestidad pedagógica no debe convertirse en ambigüedad que paralice.

## Estado
✅ Completa con revisión crítica adversarial. Dos ajustes reales (matiz honesto sobre "caja" en asignación simple; nuevo error deliberado de nombres que sombrean built-ins). Hallazgo significativo pero no bloqueante — refuerza la arquitectura existente en vez de contradecirla. No bloquea T3.
