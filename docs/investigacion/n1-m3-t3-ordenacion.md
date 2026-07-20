# Investigación Pedagógica de N1.M3.T3 — Ordenación

*Investigación + revisión crítica integradas. Construida bajo DOC-11 v2.0.1.*

## 1–2. Fuentes y evidencia

**MIT 6.0001 Lecture 12 (la misma de T2, "Searching and Sorting") cubre ordenaciones elementales explícitamente: bubble sort, selection sort, y merge sort** como introducción a la eficiente — el mismo trío que la ficha de SYL-N1 pide (burbuja/inserción elementales, comprensión conceptual de las eficientes). *(Fuente: [MIT OCW, Lecture 12](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/resources/lecture-12-searching-and-sorting/).)*

**CS50x (Week 3) confirma el mismo trío elemental** (bubble sort, selection sort) más merge sort como la eficiente de referencia, con su complejidad exacta: O(n²) en el peor y mejor caso para las elementales, O(n log n) para merge sort. *(Fuente: [CS50x — Week 3, Algorithms](https://cs50.harvard.edu/x/weeks/3/).)*

**Hallazgo real, ya anticipado por la propia ficha de SYL-N1:** la ficha señala explícitamente que usar `sorted(lista, key=una_funcion)` es "usar una función como valor" — la semilla declarada de los decoradores que N2 abrirá. Esto conecta directamente con N0.M3.T3 (donde `sorted(key=)` ya se usó sin nombrarlo) y con N1.M1.T1 (Funciones a fondo, donde "funciones como valores" sí se nombró formalmente). Esta lección es el tercer encuentro con la misma idea, ahora aplicada a un caso de uso real y profesional.

## 3. Síntesis crítica

**Decisión:** el modelo mental de la ficha ("ordenar como inversión que compra búsquedas baratas: pagas O(n log n) una vez para preguntar O(log n) muchas") se mantiene íntegro — conecta directamente con T2: la búsqueda binaria CREA la necesidad de datos ordenados, y ordenar es el costo que se paga una vez para habilitarla.

**Autocrítica — ¿implementar merge sort completo, o solo entenderlo conceptualmente?** La ficha es explícita: "implementa ordenaciones elementales (burbuja/inserción), **entiende conceptualmente** las eficientes" — no pide implementar merge sort desde cero. **Ajuste real:** merge sort se enseña por su IDEA (dividir, ordenar las mitades, mezclar) con una traza visual, no como ejercicio de código propio — coherente con el alcance ya definido por la ficha, sin exceso ni recorte.

**El criterio "cuándo reimplementar vs. cuándo usar la librería" (pregunta ingenieril de la ficha, textual) tiene un ancla real:** las ordenaciones elementales (burbuja/inserción) son O(n²) — simples de escribir, pésimas para producción. `sorted()` de Python usa Timsort (una variante muy optimizada de merge sort, con O(n log n) garantizado) — implementar burbuja en producción cuando `sorted()` ya existe es exactamente el error habitual que la ficha señala ("reimplementar en producción lo que la librería hace mejor").

**Clasificación:** evidencia sólida — MIT y CS50x coinciden en el mismo trío de algoritmos y el mismo orden de introducción. **Falsabilidad:** se reconsideraría implementar merge sort desde cero si el registro muestra que "entenderlo conceptualmente" sin código propio no basta para el criterio que la ficha exige en la evidencia de dominio.

## Estado
✅ Completa con revisión crítica. 1 decisión de alcance confirmada (merge sort conceptual, no implementado). No bloquea T4.
