# N1.M2.T4 — Métodos dunder

> **Estado:** Desarrollo ✅ · Validación ⏳ Pendiente · Investigación ✅ [`n1-m2-t4-metodos-dunder.md`](../../investigacion/n1-m2-t4-metodos-dunder.md) — construida bajo DOC-11 v2.0.1 (Estándar de Excelencia Mundial).
>
> Motor de ejecución: **Pyodide (Python real en el navegador)**.

## Ficha de control

| Campo | Valor |
|---|---|
| **Dirección** | N1.M2.T4 |
| **Gran pregunta del módulo (M2)** | ¿Cómo modelamos el mundo dentro del software? |
| **Gran pregunta de esta lección** | Si `print()`, `==` y `len()` ya funcionan con listas y strings, ¿qué necesitarías para que también funcionen, con sentido, sobre tus propias clases? |
| **Prerrequisitos** | N1.M2.T2 (atributos, métodos y estado); N1.M1.T7 (protocolo de iteración) |
| **Competencias** | C-N1-01, C-N1-06 |
| **Duración** | Heurística. Escalera densa (7 categorías) + laboratorio integrador + desafío final. |
| **Conexión con T1-T3** | Toda la lección se ancla en la clase `Producto`, ya construida y familiar — nunca en ejemplos sueltos. |
| **Conexión con N1.M1.T7** | `__iter__`/`__next__` ya se vieron como protocolo puro sobre generadores; hoy se implementa el mismo protocolo en una clase propia, para que funcione con `for`. |

## Bloque 0 — Preparación del Tutor

**Recuperación (T3):** 1) ¿Por qué la explosión de subclases crece tan rápido? 2) ¿Cuál es la diferencia real entre "es-un" y "tiene-un"?

**Diagnóstico relámpago:** *"Si haces `print(mi_producto)`, ¿qué crees que se imprime por defecto? ¿Y si comparas dos productos con `==`, con los mismos datos pero construidos por separado, son 'iguales'?"*

**Problema motivador:** *"Quiero que `print(producto)` muestre algo legible como 'Producto: pan ($5)', no una dirección de memoria rara. Y quiero que dos productos con el mismo nombre y precio se consideren iguales con `==`, aunque sean objetos distintos en memoria."*

**Errores deliberados a inyectar:**
1. `print(objeto)` sin `__str__` muestra algo como `<__main__.Producto object at 0x...>` — una dirección de memoria, no información útil.
2. `producto1 == producto2` sin `__eq__` compara por **identidad** (¿son el mismo objeto en memoria?), no por **valor** — dos productos con los mismos datos pero construidos por separado son "distintos" por defecto, aunque parezcan iguales.

## Bloque 1 — Intuición, analogía e historia

**Hook:** *"Hasta ahora, `print()`, `==`, `len()` y `for` solo funcionaban con tipos que Python ya conocía. Hoy conectas tus propias clases a esa misma maquinaria."*

**Analogía (ficha SYL-N1, verificada como predictiva):** los métodos dunder son **enchufes estándar**. Tu objeto es un aparato eléctrico; `print`/`==`/`len`/`for` son los tomacorrientes de la pared, con una forma fija que no cambia. Implementar `__str__` es fabricar el enchufe correcto para conectarte al tomacorriente de `print()` — no cambias la pared (el lenguaje): haces que tu aparato encaje en ella. **Prueba de que es predictiva:** un estudiante que recuerde esta imagen predice correctamente que `len(mi_objeto)` funcionará SI Y SOLO SI implementaste `__len__` — el enchufe correcto para ESE tomacorriente específico, no para cualquier otro.

**Historia (costo real):** el término "dunder" (*double underscore*) es jerga de la comunidad Python, popularizada como forma corta y pronunciable de decir "double underscore method" — pero el mecanismo mismo (special methods) es parte del diseño original del lenguaje, documentado formalmente desde siempre en el Data Model oficial. No es un truco: es la forma en que Python decide, para cualquier tipo (incluidos los tuyos), qué hacer con `print`, `==`, `len`, `for`.

## Bloque 2 — Conflicto cognitivo

```python
class Producto:
    def __init__(self, nombre, precio):
        self.nombre = nombre
        self.precio = precio

p1 = Producto("pan", 5)
p2 = Producto("pan", 5)
print(p1)
print(p1 == p2)
```

**Predicción esperada:** ¿qué imprime `print(p1)`? ¿`p1 == p2` es `True` o `False`, si tienen exactamente los mismos datos?

La sorpresa: `print(p1)` muestra algo como `<__main__.Producto object at 0x7f...>` — una dirección de memoria, no información útil. Y `p1 == p2` es **`False`** — aunque tengan el mismo nombre y precio, Python los compara por **identidad** (son dos objetos distintos), no por valor.

## Bloque 3 — Explicación rigurosa

**`__str__` — conecta con `print()`/`str()`:**
```python
class Producto:
    def __init__(self, nombre, precio):
        self.nombre = nombre
        self.precio = precio
    def __str__(self):
        return f"Producto: {self.nombre} (${self.precio})"
```

**`__eq__` — conecta con `==`, y TÚ decides qué significa "igual" para tu dominio:**
```python
def __eq__(self, otro):
    return self.nombre == otro.nombre and self.precio == otro.precio
```
Para un `Producto`, "igual" puede significar "mismo nombre y precio" — una decisión de diseño, no una regla universal. El error habitual de la ficha (implementar `__eq__` sin pensar el significado real de igualdad para ese dominio) se evita preguntando explícitamente: *¿qué hace a dos instancias de esta clase "la misma cosa" para mi problema?*

**`__len__` — conecta con `len()`:**
```python
def __len__(self):
    return self.stock   # len(producto) devuelve el stock disponible
```

**`__iter__` — conecta con `for`, generaliza M1.T7:** implementar `__iter__` (devolviendo un iterador, como el de una lista interna) hace que la clase propia funcione directo con `for`, exactamente el mismo protocolo que T7 ya enseñó sobre generadores.

## Bloque 4 — Escalera de práctica

*Nota de densidad (DOC-11 v2.0.1): siete categorías.*

**Predecir:**
1. El conflicto del Bloque 2.
2. `print(p1)` DESPUÉS de agregar `__str__` — ¿qué imprime exactamente?
3. `p1 == p2` DESPUÉS de agregar `__eq__`, con datos DISTINTOS — ¿`True` o `False`?

**Leer código:** una clase con `__len__` implementado — identificar qué expresión activa exactamente ese dunder (`len(obj)`, aunque `obj.__len__()` directo también funcionaría — el dunder no es privado, es la forma explícita del mismo mecanismo).

**Investigar / trazar:** dado un `__eq__` que compara solo UN atributo cuando debería comparar dos, encontrar el caso concreto donde da un resultado incorrecto ("igual" cuando no debería serlo).

**Modificar:** la clase `Producto` del Bloque 2 (sin `__str__`) → agregarlo.

**Refactorizar:** código que compara manualmente `obj1.nombre == obj2.nombre and obj1.precio == obj2.precio` en VARIOS lugares del programa → mover esa lógica a `__eq__`, una sola vez.

**Escribir:** clase `Inventario` (de T2) con `__len__` (devuelve la cantidad) y `__iter__` (hace iterable la lista de productos que contiene).

**Depurar (tres ejercicios, dificultad creciente):**
1. `print` sin `__str__` (dirección de memoria, Bloque 0).
2. `==` sin `__eq__` (compara por identidad, no valor, Bloque 0).
3. *(compuesto)* `__eq__` implementado pero incompleto — compara solo un atributo de dos — dos objetos con datos DISTINTOS pero un atributo compartido resultan "iguales" por error.

## Bloque 5 — Laboratorio: mini-proyecto integrador

**Integración real (con T1-T3):** el laboratorio completa la clase `Producto` con los cuatro dunder de la ficha, anclados en la misma clase de toda la unidad.

**El proyecto — Producto completo y "pythónico":** `__str__` (representación legible), `__eq__` (mismo nombre y precio; debe manejar el caso de comparar contra algo que NO es un `Producto`, devolviendo `False` en vez de tronar), `__len__` (devuelve el stock).

**Trade-off explícito (la pregunta ingenieril de la ficha, textual):** ¿cuánta "magia" es demasiada — cuándo un dunder hace tu objeto más claro, y cuándo esconde lo que realmente ocurre a quien lee el código?

**Argumento de corrección:** ¿`__eq__` maneja el caso de comparar un `Producto` contra algo que no lo es (por ejemplo, `producto == 5`), sin lanzar una excepción?

**Confrontación de soluciones:** comparar código que usa dunder (`p1 == p2`, `len(p1)`) contra el equivalente con métodos nombrados (`p1.es_igual_a(p2)`, `p1.obtener_cantidad()`) — ¿cuál se integra mejor con el resto de Python (`sorted()`, `in`, comparaciones directas)?

**Fase 2 — transferencia sin instrucciones repetidas:** agregar `__iter__` sin que se explique paso a paso — se infiere del protocolo ya practicado en T7.

## Bloque 6 — Consolidación

**Defensa socrática:**
1. ¿Por qué `print(p1)` sin `__str__` muestra una dirección de memoria?
2. ¿Por qué `p1 == p2` es `False` por defecto, aunque tengan exactamente los mismos datos?
3. *(inédita, la pregunta ingenieril de la ficha, textual)* ¿Cuánta "magia" es demasiada — cuándo un dunder hace tu objeto más claro y cuándo esconde lo que realmente ocurre a quien lee el código?

**Seis preguntas de excelencia:**
1. ¿Qué aprendí? Que `print`, `==`, `len` y `for` son protocolos que cualquier clase puede implementar, no privilegios exclusivos de los tipos incorporados de Python.
2. ¿Por qué existe este concepto? Porque permite que objetos propios se comporten de forma consistente con el resto del lenguaje, sin inventar nombres de método nuevos para cada operación común.
3. ¿Qué problema resuelve? Evita que cada clase tenga su propio vocabulario (`.es_igual_a()`, `.obtener_texto()`) en vez de integrarse con el que Python ya conoce.
4. ¿Cómo lo usan los profesionales? Con moderación — solo implementan el dunder que corresponde a un uso real y esperado, no todos "porque se puede".
5. ¿Cómo se conecta con lo anterior? `__iter__` reutiliza directo el protocolo de M1.T7; el criterio de "qué significa igualdad" conecta con el pensamiento de invariantes de T2.
6. ¿Qué pasaría si no existiera? Cada clase necesitaría su propio conjunto de métodos con nombres distintos para cada operación, y ninguna funcionaría con las herramientas genéricas del lenguaje (`sorted()`, `sum()`, comparaciones).

**Reflexión metacognitiva:**
- ¿En qué ejercicio te sorprendió que `==` no comparara "lo que tú esperabas" por defecto?
- ¿Cómo se conecta `__iter__` de hoy con el protocolo de iteradores de Iteradores y generadores?
- ¿En qué clase de un proyecto propio (fuera de esta lección) implementarías `__str__` o `__eq__`?

**Desafío final inédito:** un `__eq__` incompleto que compara solo un atributo:
```python
class Punto:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def __eq__(self, otro):
        return self.x == otro.x

a = Punto(1, 2)
b = Punto(1, 999)
print(a == b)
```
Predecir, ANTES de ejecutar, qué imprime — ¿`a` y `b` deberían considerarse iguales, con coordenadas `y` tan distintas? Explicar por qué el `__eq__` de esta clase está incompleto, y qué comparación le falta agregar.

**Lectura dirigida:** [Python docs — 3.3. Special method names (Data Model)](https://docs.python.org/3/reference/datamodel.html#special-method-names) · [MIT 6.0001 — Lecture 9](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/resources/lecture-9-python-classes-and-inheritance/).

**Beyond the Curriculum:** *"Existe también `__repr__`, el respaldo universal de `__str__` (si no defines `__str__`, Python usa `__repr__` para `print()` también) — pensado para ser inequívoco y útil al depurar, no necesariamente legible. Lo verás con frecuencia leyendo código real; hoy basta con reconocer que existe. Y en N2/N4, librerías como FastAPI y pandas usan dunder constantemente por detrás, sin que casi nunca lo notes — hoy aprendiste el mecanismo que las hace posibles."*

## 4. Criterio de dominio — siete capacidades

| # | Capacidad | Instrumento en esta lección |
|---|---|---|
| 1 | Explicar | Bloque 6, defensa + pregunta de excelencia |
| 2 | Predecir | Bloque 4, "predecir" (3) |
| 3 | Detectar errores | Bloque 4, "leer código" + Bloque 0, errores deliberados |
| 4 | Corregir | Bloque 4, "depurar" (3, incluido el caso compuesto de `__eq__` incompleto) |
| 5 | Modificar | Bloque 4, "modificar" (`__str__`) + "refactorizar" (centralizar comparación en `__eq__`) |
| 6 | Aplicar en contexto nuevo | Bloque 6, desafío final (`__eq__` incompleto con coordenadas) |
| 7 | Usar en un proyecto | Bloque 5, Producto completo con los cuatro dunder |

**Instrumento DOC-02:** RM-03 + TD-01. Evidencia observable: predice qué dunder invoca una expresión dada y hace iterable una clase propia (evidencia de dominio ya declarada en SYL-N1).

## 4bis. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Clasificación |
|---|---|---|---|---|---|---|
| [Python docs — 3.3. Special method names](https://docs.python.org/3/reference/datamodel.html#special-method-names) | Python Software Foundation | EN | ~30 min | Introductorio | Fuente autoritativa y completa de todos los métodos dunder | 🟢 Antes de estudiar |
| [MIT 6.0001 — Lecture 9](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/resources/lecture-9-python-classes-and-inheritance/) | MIT OpenCourseWare | EN | ~50 min | Introductorio | Continúa la discusión de POO donde T1-T3 la dejaron | 🔵 Durante la lección |

## Registro de observaciones

| # | Fecha | Observación | Categoría |
|---|---|---|---|
| — | *(pendiente)* | — | — |
