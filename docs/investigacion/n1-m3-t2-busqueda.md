# Investigación Pedagógica de N1.M3.T2 — Búsqueda

*Investigación + revisión crítica integradas. Construida bajo DOC-11 v2.0.1.*

## 1–2. Fuentes y evidencia

**MIT 6.0001 Lecture 12 ("Searching and Sorting") cubre exactamente búsqueda lineal y bisección** en la misma lección — confirmando el orden natural: primero la forma ingenua (lineal), después la que exige una precondición real (bisección/binaria). Bisección logra O(log n) porque reduce el problema a la mitad en cada paso. *(Fuente: [MIT OCW, Lecture 12: Searching and Sorting](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/resources/lecture-12-searching-and-sorting/).)*

**CS50x (Week 3) trata la búsqueda binaria con la misma metáfora que ya usa la ficha de SYL-N1 — "descartar la mitad del problema en cada pregunta":** el pseudocódigo de CS50x mira el elemento del medio de un arreglo, y si no es el buscado, descarta la mitad correspondiente — divide-y-vencerás en su forma más pura, exactamente como la ficha lo describe. *(Fuente: [CS50x — Week 3, Algorithms](https://cs50.harvard.edu/x/weeks/3/).)*

**Conexión directa y honesta con M1.T3 (Diccionarios y sets):** la ficha ya lo señala como error habitual — "no ver que el dict ya era búsqueda O(1)". Diccionarios enseñó el comportamiento observable de búsqueda por clave sin nombrar la complejidad formal; T1 (Big-O) le dio nombre; hoy T2 completa el cuadro comparando explícitamente tres velocidades de búsqueda: lineal O(n), binaria O(log n), y hash (dict) O(1) — las tres ya construidas o vistas en la Academia, ahora comparadas con el mismo lenguaje.

## 3. Síntesis crítica

**Decisión:** el modelo mental de la ficha ("la búsqueda binaria como descartar la mitad del problema en cada pregunta — el patrón divide-y-vencerás en su forma más pura") se mantiene íntegro — coincide con el pseudocódigo estándar de CS50x, no es una simplificación de esta Academia.

**Autocrítica — ¿por qué el error habitual "aplicar binaria a datos desordenados" merece tanto peso?** MIT y CS50x asumen el arreglo ordenado casi sin discutirlo (dan la precondición por hecha); la ficha de SYL-N1 la eleva explícitamente a evidencia de dominio ("enumera sus precondiciones — A5: qué exige"). **Ajuste real:** el conflicto cognitivo central de esta lección NO es la mecánica de la búsqueda binaria en sí (bien cubierta por las fuentes) — es la precondición que la binaria exige y que ninguna de las dos fuentes citadas problematiza con el mismo peso: aplicarla sobre datos desordenados no da un resultado "un poco peor", da un resultado **incorrecto y silencioso** (puede decir "no está" cuando sí está). Ese matiz se construye como el conflicto cognitivo propio de esta lección.

**Clasificación:** evidencia muy sólida (MIT dedica la lección exacta; CS50x coincide en la metáfora de "descartar la mitad"). El énfasis en precondiciones es un ajuste pedagógico propio, justificado por la propia ficha, no una desviación de las fuentes. **Falsabilidad:** se reconsideraría el peso dado a las precondiciones si el registro muestra que los estudiantes ya las respetan sin necesidad de énfasis extra.

## Estado
✅ Completa con revisión crítica. 1 ajuste real (el conflicto cognitivo se ancla en la precondición de orden, no solo en la mecánica). No bloquea T3.
