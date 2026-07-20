# Investigación Pedagógica de N1.M3.T4 — Pilas y colas

*Investigación + revisión crítica integradas. Construida bajo DOC-11 v2.0.1.*

## 1–2. Fuentes y evidencia

**CS50x (Week 5, "Data Structures") cubre pilas y colas con las mismas metáforas que ya declara la ficha de SYL-N1, coincidencia independiente:** una cola es FIFO ("first in first out"), como una fila de parque de diversiones; una pila es LIFO ("last in first out"), como bandejas apiladas en un comedor — la bandeja puesta al final es la primera que se retira. Es exactamente "pila = montón de platos; cola = fila del banco" de la ficha, con la misma estructura conceptual, encontrada de forma independiente en una segunda institución de referencia. *(Fuente: [CS50x — Week 5, Data Structures](https://cs50.harvard.edu/x/weeks/5/).)*

**Hallazgo real, verificado directamente con Python: `list.pop(0)` es O(n), no O(1) — la documentación oficial de Python lo advierte explícitamente.** Extraer del FRENTE de una lista de Python obliga a desplazar todos los elementos restantes una posición — el error habitual #1 de la ficha ("usar lista como cola") tiene una causa técnica precisa, no solo una intuición. La biblioteca estándar ofrece `collections.deque`, diseñada específicamente para O(1) en ambos extremos. *(Fuente: [Python docs — collections.deque](https://docs.python.org/3/library/collections.html#collections.deque), sección que declara explícitamente: "though list objects support similar operations, they are optimized for fast fixed-length operations and incur O(n) memory movement costs for pop(0) and insert(0, v) operations".)*

**Conexión honesta y directa con N1.M1.T1 (Funciones a fondo):** la ficha lo señala explícitamente — "la pila de llamadas de M1.T1 ¡era esto!". El modelo de "entorno que nace y muere en cada llamada" de T1 ES una pila (LIFO): la última función llamada es la primera en terminar y devolver control. Esta lección no introduce la pila como concepto nuevo — la nombra formalmente por primera vez, meses después de que el estudiante ya la usó sin saberlo.

## 3. Síntesis crítica

**Decisión:** el modelo mental de la ficha ("pila = montón de platos; cola = fila del banco. La estructura correcta hace trivial el problema; la incorrecta lo hace imposible") se mantiene íntegro, reforzado por la coincidencia independiente de CS50x. El error habitual #1 ("usar lista como cola, O(n) por el frente") se enseña con evidencia técnica real (documentación oficial de `collections.deque`), no como advertencia sin respaldo.

**Autocrítica — ¿implementar deque desde cero, o usar `collections.deque` directamente?** La ficha pide "implementa pila y cola **sobre estructuras existentes**" (no desde cero) — coherente con "implementar para entender, librería para producir" ya establecido en T3. **Ajuste real:** una pila se implementa como clase propia (M2) sobre una lista de Python (`.append()`/`.pop()`, ambos O(1) al final — sin problema); una cola se implementa como clase propia sobre `collections.deque` (nunca sobre una lista pura), demostrando en código real por qué la elección de la estructura interna importa.

**Clasificación:** evidencia sólida — CS50x coincide de forma independiente en la metáfora central; el problema de rendimiento de `list.pop(0)` está documentado directamente en la fuente oficial de Python, verificado con medición real. **Falsabilidad:** se reconsideraría la insistencia en `deque` para colas si el registro muestra que los estudiantes nunca trabajan con colas lo bastante grandes para que la diferencia de rendimiento sea observable en la práctica.

## Estado
✅ Completa con revisión crítica. 1 hallazgo real (causa técnica precisa del error habitual #1, con fuente oficial). No bloquea T5.
