# Investigación Pedagógica de N1.M3.T7-T8 — Árboles y Tablas Hash

*Construida bajo DOC-11 v2.0.1. Temas nuevos añadidos por instrucción directa del Director, ronda de profundización de N1 (EVT-053). M3 pasa de 6 a 8 temas.*

## 1–2. Fuentes y evidencia

**CS50 (Harvard), Week 5 — Data Structures, verificado por WebFetch directo del syllabus oficial (cs50.harvard.edu/x/weeks/5/).** Confirmado que la semana cubre explícitamente, en este orden: structs, pilas (stacks), colas (queues), listas enlazadas, **árboles (incluido BST)**, y **tablas hash**. T7-T8 instancian directamente estos dos últimos contenidos, ya identificados con precisión desde la investigación previa de la excepción de reapertura (EVT-053) — no una conexión genérica a "CS50" sino a la semana y al contenido exacto.

**Hallazgo real, no asumido, encontrado durante la construcción y verificación con ejecución real de Python:** al construir el ejemplo de colisión de T8 (`n1m3t8e4`), se buscó deliberadamente un caso con tres claves colisionando en la misma tabla pequeña. La suma de códigos Unicode confirmó que "ab", "ba" y "cc" colisionan las tres en una tabla de tamaño 3 (195, 195 y 198, los tres módulo 3 = 0) — un ejemplo de colisión real y verificable, no fabricado a mano sin comprobar.

**Conexión honesta con contenido ya construido, no aislada:** T7 reutiliza explícitamente T4 (pilas/colas, como contraste de estructura lineal) y T5 (recursión, como mecanismo de recorrido) — el propio ejercicio 5 de T7 (`ordenar_con_bst`) conecta con T3 (Ordenación) construyendo un algoritmo de ordenación completo sobre la estructura del día. T8 reutiliza T1 (Big-O) y T2 (Búsqueda) para MEDIR la ganancia real de una tabla hash contra búsqueda lineal, en vez de solo prometerla.

## 3. Síntesis crítica

**Decisión de diseño: simulación de "coste amortizado" con conteo real de comparaciones, no con medición de tiempo real.** Medir microsegundos de ejecución en un sandbox de navegador (Pyodide) sería frágil y no reproducible entre máquinas — en cambio, T8 mide comparaciones REALES contadas dentro del propio código del estudiante (`buscar_contando`), una métrica determinista y 100% verificable con `check()`, que enseña el mismo principio (O(1) vs. O(n)) sin depender de la velocidad del hardware.

**El desafío final de T8 (`hash_terrible`) es deliberadamente el peor caso posible** (una función hash que siempre devuelve 0) — no una simplificación conveniente, sino la forma más directa de mostrar que una tabla hash mal diseñada degenera exactamente a una lista sin ordenar, mismo O(n) que T2 (Búsqueda) ya enseñó como el caso a evitar.

## 4. Clasificación y falsabilidad

**Evidencia sólida:** CS50 Week 5 verificado por fetch directo, con el contenido exacto (árboles, hash tables) confirmado antes de diseñar T7/T8, no asumido de memoria. **Hallazgo propio verificado con ejecución real:** el ejemplo de colisión triple de T8. **Ausencia declarada:** Missing Semester no cubre estructuras de datos (es un curso de herramientas de desarrollo, no de CS fundamentals) — no se fuerza esa conexión para T7/T8. **Falsabilidad:** si el Campus alguna vez necesita medir rendimiento real (no solo conteo de comparaciones), este enfoque debería revisarse — hoy es la opción correcta para un entorno sandbox sin garantías de hardware consistente.

## Estado
✅ Completa. 2 temas nuevos (T7, T8), 7 ejercicios cada Parte 1 + 2 ejercicios cada Parte 2 + laboratorio + desafío final cada uno, todos verificados con ejecución real de Python antes de insertarse en `index.html`. M3 pasa de 6 a 8 temas (Días 25-40) y ahora cierra con T8 (antes cerraba con T6).
