# Investigación Pedagógica de N1.M2.T1 — Clases y objetos

*Investigación + revisión crítica integradas. Construida bajo DOC-11 v2.0.1.*

## 1–2. Fuentes y evidencia

**MIT dedica una lección al alcance exacto de esta lección:** 6.0001 Lecture 9, *"Python Classes and Inheritance"*, cubre exactamente el arranque de POO — definición de clases, `__init__`, getters/setters, y ya adelanta herencia (que esta Academia reserva para M2.T3, con más espacio propio). *(Fuente: [MIT OCW, Lecture 9: Python Classes and Inheritance](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/resources/lecture-9-python-classes-and-inheritance/).)*

**CS50P dedica una semana completa al tema** (Week 8, Object-Oriented Programming), y — hallazgo notable — **usa independientemente la misma metáfora que ya está en la ficha aprobada de SYL-N1**: describe una clase como "un molde para un tipo de dato" (*"a mold for a type of data"*). Esto no es una coincidencia de esta Academia citando CS50P: la ficha de SYL-N1 fue escrita antes de esta investigación, y la metáfora del "molde" ya coincide de forma independiente con cómo Harvard describe el mismo concepto — evidencia real de que es una analogía predictiva y no arbitraria. *(Fuente: [CS50P — Week 8, Object-Oriented Programming](https://cs50.harvard.edu/python/weeks/8/).)*

**La documentación oficial de Python** dedica el capítulo 9 completo de su tutorial a clases (9.1–9.7 cubren exactamente sintaxis, `self`, atributos de instancia vs. de clase — el error habitual #2 de la ficha, nombrado explícitamente ahí). *(Fuente: [Python docs — 9. Classes](https://docs.python.org/3/tutorial/classes.html).)*

## 3. Síntesis crítica

**Decisión:** el modelo mental de la ficha ("la clase como molde y el objeto como pieza fundida: mismo plano, estado propio") se mantiene íntegro — reforzado, no solo respaldado, por la coincidencia independiente con la metáfora de CS50P. `self` = "esta pieza en concreto" es una extensión natural de la misma imagen, no una analogía nueva que memorizar aparte.

**Autocrítica — ¿por qué el conflicto cognitivo debe ser dict→clase, y no clase desde cero?** La ficha ya lo declara ("existe porque los dicts de M1.T3 no imponen contrato ni comportamiento"). La documentación de Python 9.1–9.7 introduce clases de forma aislada, sin ese contraste — pero esta Academia tiene una ventaja que ni MIT ni CS50P tienen con sus propios estudiantes: M1.T3 (Diccionarios) ya está construido y fresco. **Ajuste real:** el conflicto cognitivo central se ancla en un dict-entidad ya usado en un ejercicio previo de M1 (o uno estructuralmente idéntico), para que la pregunta "¿qué gana la clase que el dict no tenía?" tenga una respuesta concreta y comparable, no abstracta.

**Clasificación:** evidencia muy sólida — MIT dedica la lección exacta, CS50P coincide independientemente en la metáfora central, y la documentación oficial nombra el error habitual #2 de la ficha con el mismo vocabulario ("class attributes" vs. "instance attributes"). **Falsabilidad:** se reconsideraría el anclaje en dict→clase si el registro muestra que el contraste confunde más de lo que aclara antes de que el estudiante domine bien el "por qué" de una clase por sí sola.

## Estado
✅ Completa con revisión crítica. 1 hallazgo real (coincidencia independiente de metáfora con CS50P, evidencia de que no es arbitraria) + 1 ajuste real (anclar el conflicto cognitivo en un dict-entidad ya construido en M1, no uno nuevo). Abre M2.
