# Investigación Pedagógica de N1.M2.T4 — Métodos dunder

*Investigación + revisión crítica integradas. Construida bajo DOC-11 v2.0.1.*

## 1–2. Fuentes y evidencia

**La documentación oficial de Python (Data Model) es la fuente autoritativa y completa de los métodos dunder** — define exactamente qué protocolo activa cada uno (`__str__` para `print()`/`str()`, `__eq__` para `==`, `__len__` para `len()`, `__iter__`/`__next__` para `for`, ya vistos como protocolo puro en M1.T7). No es una lista arbitraria de esta Academia: es la referencia exacta que cualquier implementación de Python respeta. *(Fuente: [Python docs — 3.3. Special method names (Data Model)](https://docs.python.org/3/reference/datamodel.html#special-method-names).)*

**`__str__` vs. `__repr__` — un matiz real y bien documentado, más allá de la ficha:** `print(obj)` busca primero `__str__`; si no existe, usa `__repr__` como respaldo. `__str__` prioriza legibilidad para el usuario final; `__repr__` prioriza ser inequívoco (idealmente, una expresión que recrearía el objeto) y sirve de respaldo universal. La ficha de SYL-N1 solo pide `__str__` explícitamente — se declara `__repr__` como mención breve (Beyond the Curriculum), no como contenido evaluado, para no exceder el alcance ya definido. *(Fuente: síntesis de documentación técnica ampliamente replicada, contrastada contra la referencia oficial del Data Model.)*

**MIT 6.0001 Lecture 9 (la misma de T1-T3) continúa la discusión de POO** — cubre representación de objetos como parte natural de "hacer una clase completa", el mismo punto donde esta lección se ubica en la secuencia de la Academia. *(Fuente: [MIT OCW, Lecture 9](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/resources/lecture-9-python-classes-and-inheritance/) — honestidad metodológica: no se encontró una cita verificable de que MIT profundice en `__eq__`/`__len__`/`__iter__` con el mismo detalle que la documentación oficial; se cita por continuidad de módulo, no como fuente exhaustiva de dunder.)*

## 3. Síntesis crítica

**Decisión:** el modelo mental de la ficha ("los dunder como enchufes estándar: tu objeto se conecta a la maquinaria del lenguaje implementando la interfaz que esa maquinaria espera") se mantiene íntegro — es una descripción precisa y verificable del Data Model oficial, no una simplificación. El error habitual central de la ficha ("implementar dunder por moda, sin necesidad") tiene ahora una fuente formal detrás: cada dunder existe para conectar UN protocolo específico, no para "verse más Pythonic".

**Autocrítica — ¿cuántos dunder caben en una sola lección?** La ficha pide `__str__`, `__eq__`, `__len__`, `__iter__` "según el caso" — no los cuatro obligatoriamente para cada clase. **Ajuste real:** se ancla la lección en UNA clase reutilizada de T1-T3 (`Producto` o `Inventario`) donde los cuatro dunder tienen sentido real y verificable, evitando el error que la propia ficha señala (implementar `__eq__` sin pensar qué significa igualdad para ese dominio — para un `Producto`, ¿dos productos son iguales si tienen el mismo nombre, o si son literalmente el mismo objeto?).

**`__iter__` conecta directo con M1.T7 (protocolo de iteración), no lo repite:** T7 ya enseñó el protocolo `__iter__`/`__next__` sobre generadores. Esta lección lo reutiliza mostrando que una clase PROPIA puede implementar ese mismo protocolo para volverse iterable con `for` — la aplicación del conocimiento de T7, no un concepto nuevo.

**Clasificación:** evidencia sólida y verificable (Data Model oficial). MIT citado por continuidad de módulo, con honestidad explícita sobre el límite de esa cita. **Falsabilidad:** se reconsideraría incluir `__repr__` como contenido evaluado (no solo mención) si el registro muestra que los estudiantes lo necesitan antes de N2 (donde debuggear objetos reales lo hace indispensable).

## Estado
✅ Completa con revisión crítica. 1 ajuste real (anclar los 4 dunder en una sola clase reutilizada de M2, no ejemplos sueltos) + honestidad explícita sobre el límite de la cita de MIT. No bloquea T5.
