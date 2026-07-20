# Investigación Pedagógica de N1.M1.T4 — Comprehensions

*Investigación + revisión crítica integradas. Construida bajo DOC-11 v2.0.1.*

## 1–2. Fuentes y evidencia

**CS50P trata las comprehensions en dos momentos distintos, no uno:** primero dentro de su unidad de *Loops* (junto a `while`/`for`), y más adelante en una unidad dedicada a estilo de código — confirmando, con la autoridad de una segunda institución de referencia, exactamente lo que la ficha de SYL-N1 ya declara: una comprehension es, a la vez, una herramienta de transformación Y una decisión de legibilidad, y merece tratarse en ambos planos. *(Fuente: [CS50P — Week 2, Loops](https://cs50.harvard.edu/python/weeks/2/).)*

**La documentación oficial de Python presenta las comprehensions explícitamente como azúcar sintáctica sobre el bucle, no como un concepto aparte:** la sección de comprehensions del tutorial oficial se ubica justo después de explicar `for` sobre listas, y las introduce como una forma más concisa de construir listas a partir de una secuencia — el mismo orden de enseñanza (bucle primero, comprehension después, como compresión de algo ya entendido) que esta Academia ya sigue en T2→T4. *(Fuente: [Python docs — 5.1.3 List Comprehensions](https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions).)*

**Honestidad metodológica — MIT 6.0001:** a diferencia de T1-T3, no encontré una lección dedicada de 6.0001 a comprehensions — el temario de esa edición del curso no le da tratamiento propio (las cubre, si acaso, de paso). Se declara la ausencia en vez de forzar una cita que no corresponde. Tampoco encontré un dato específico de PEP 8 sobre comprehensions: **se verificó directamente el texto de PEP 8** y NO contiene ninguna sección ni mención sobre comprehensions, su anidamiento o límites de legibilidad — una búsqueda inicial sugería lo contrario y se descartó tras leer la fuente primaria completa.

**La guía de estilo real y verificable sobre "cuándo para de ser Pythonic y empieza a ser críptico" es el Zen de Python (PEP 20):** "Beautiful is better than ugly", "Simple is better than complex", "Readability counts", "There should be one — and preferably only one — obvious way to do it". No es específico de comprehensions, pero es el documento de filosofía de diseño oficial del lenguaje, y es exactamente el criterio que un ingeniero real aplica al decidir si una comprehension aclara o esconde intención — la pregunta ingenieril de la ficha, con respaldo directo de la propia filosofía del lenguaje. *(Fuente: [PEP 20 — The Zen of Python](https://peps.python.org/pep-0020/).)*

## 3. Síntesis crítica

**Decisión:** el modelo mental de la ficha ("transformación declarativa: qué quiero, no cómo lo recorro") se mantiene como eje central — confirmado por el propio orden de la documentación oficial (comprehension como compresión de un `for` ya entendido, no un concepto nuevo desde cero). El error habitual de "anidar hasta lo ilegible" se aborda con el Zen de Python como ancla filosófica real, en vez de una regla arbitraria de esta Academia.

**Autocrítica — ¿cuánto anidamiento es aceptable de enseñar?** Dado que no existe una regla oficial numérica (se verificó que PEP 8 no la da), la decisión de diseño es: enseñar comprehensions de UN solo `for` como la herramienta estándar, mostrar el anidamiento de dos niveles como algo que EXISTE y se puede leer, pero nunca pedir escribir uno desde cero como ejercicio obligatorio — la pregunta ingenieril de la ficha ("código conciso vs. críptico, y quién debería decidirlo") se enseña mejor con un ejemplo real de comprehension anidada difícil de leer para discutir, no para producir.

**Clasificación:** evidencia sólida para la secuencia bucle→comprehension (Python docs + CS50P). Evidencia de diseño de lenguaje, no de pedagogía específica, para el criterio de legibilidad (PEP 20 — es la filosofía oficial, no un estudio empírico). Ausencia declarada de MIT 6.0001 y de un dato específico de PEP 8. **Falsabilidad:** se reconsideraría enseñar comprehensions anidadas como ejercicio productivo (no solo de lectura) si el registro muestra que los estudiantes las necesitan antes de N4 (pandas).

## Estado
✅ Completa con revisión crítica, incluida una verificación directa de fuente primaria que descartó una cita inicialmente sugerida (PEP 8) por no ser precisa. No bloquea T5.
