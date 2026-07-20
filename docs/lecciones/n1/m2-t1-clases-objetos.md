# N1.M2.T1 — Clases y objetos

> **Estado:** Desarrollo ✅ · Validación ⏳ Pendiente · Investigación ✅ [`n1-m2-t1-clases-objetos.md`](../../investigacion/n1-m2-t1-clases-objetos.md) — construida bajo DOC-11 v2.0.1 (Estándar de Excelencia Mundial). Primera lección de M2 (POO).
>
> Motor de ejecución: **Pyodide (Python real en el navegador)**.

## Ficha de control

| Campo | Valor |
|---|---|
| **Dirección** | N1.M2.T1 |
| **Gran pregunta del módulo (M2)** | ¿Cómo modelamos el mundo dentro del software? |
| **Gran pregunta de esta lección** | Si un diccionario ya puede agrupar datos relacionados con nombre propio, ¿qué le falta para representar de verdad una entidad del mundo real? |
| **Prerrequisitos** | M1 completo — especialmente M1.T3 (diccionarios: "un objeto es un dict con oficio") |
| **Competencias** | C-N1-01 |
| **Duración** | Heurística. Escalera densa (7 categorías) + laboratorio integrador + desafío final. |
| **Conexión con M1.T3** | Un diccionario ya podía representar un producto o un usuario — pero cualquier función podía hacerle cualquier cosa, incluso pasarle un diccionario mal formado. Hoy ese mismo dato gana un molde propio que impone forma y comportamiento. |
| **Conexión con N1.M2.T2 (Atributos, métodos y estado)** | Hoy se aprende a CREAR el molde; T2 enseña a proteger y transformar lo que vive dentro de él con disciplina. |

## Bloque 0 — Preparación del Tutor

**Recuperación (cierre de M1):** 1) ¿Por qué `with` garantiza el cierre real de un archivo? 2) ¿Qué diferencia real hay entre el texto de un JSON y la estructura Python que representa?

**Diagnóstico relámpago:** *"Si quisieras representar un producto de una tienda (nombre, precio, stock) y una función para venderlo que baje el stock, ¿lo harías con un diccionario y una función aparte, o hay algo que uniría mejor los datos con el comportamiento?"*

**Problema motivador:** *"Tengo diez productos, cada uno un diccionario, y una función `vender(producto, cantidad)` que cualquiera puede llamar con CUALQUIER diccionario — incluso uno mal formado, sin 'stock'. Quiero que sea imposible crear un producto sin todos sus datos, y que 'vender' sea algo que el producto SABE hacer, no una función suelta a la que le pasas cualquier cosa."*

**Errores deliberados a inyectar:**
1. Confundir la CLASE con una instancia — intentar usar el molde mismo como si fuera una pieza concreta.
2. Olvidar `self` en la definición de un método → `TypeError` real al llamarlo (el número de argumentos no coincide, porque Python siempre pasa la instancia como primer argumento automáticamente).

## Bloque 1 — Intuición, analogía e historia

**Hook:** *"Hasta ahora, cada 'entidad' de tu programa vivía como un diccionario suelto, y cualquier función podía hacerle cualquier cosa. Hoy le das a esa entidad un molde propio — con sus propios datos Y su propio comportamiento, unidos."*

**Analogía (ficha SYL-N1, con coincidencia independiente confirmada en CS50P):** una clase es un **molde**, y un objeto es la **pieza fundida** de ese molde: mismo plano, estado propio. `self` significa *"esta pieza en concreto, no el molde"*. **Prueba de que es predictiva:** un estudiante que recuerde esta imagen predice correctamente que cambiar un atributo de UNA instancia no afecta a las demás creadas del mismo molde — cada pieza fundida es la suya propia, aunque comparta la forma.

**Historia (costo real):** la programación orientada a objetos surge en los años 60-70 (Simula 67, y después Smalltalk) precisamente para modelar sistemas donde los datos y el comportamiento que los transforma debían vivir juntos, no dispersos en funciones sueltas que cualquiera podía llamar con cualquier cosa. Python adoptó el paradigma desde su diseño original — hasta un entero o un string, en Python, ya es técnicamente un objeto.

## Bloque 2 — Conflicto cognitivo

```python
producto = {"nombre": "pan", "precio": 5, "stock": 10}

def vender(item, cantidad):
    item["stock"] -= cantidad

vender(producto, 3)
vender({"nombre": "error"}, 1)
```

**Predicción esperada:** ¿la primera llamada a `vender()` funciona? ¿Y la segunda?

La sorpresa: la primera funciona (el stock baja a 7) — pero la **segunda truena con `KeyError`**, porque nada impide llamar `vender()` con un diccionario mal formado que ni siquiera tiene `"stock"`. El diccionario no impone ningún contrato sobre lo que debe contener.

## Bloque 3 — Explicación rigurosa

**Sintaxis esencial:**
```python
class Producto:
    def __init__(self, nombre, precio, stock):
        self.nombre = nombre
        self.precio = precio
        self.stock = stock

    def vender(self, cantidad):
        self.stock -= cantidad

p = Producto("pan", 5, 10)   # instanciar: crear una pieza a partir del molde
p.vender(3)
print(p.stock)                # 7
```
`self` no es una palabra mágica — es simplemente el primer parámetro que Python pasa automáticamente con la instancia sobre la que se llamó el método. `__init__` es el método que se ejecuta al instanciar, y define qué datos necesita OBLIGATORIAMENTE cada pieza para existir — ya no hay forma de crear un `Producto` sin `stock`.

**Atributos de instancia vs. de clase (el error habitual #2 de la ficha, nombrado así en la documentación oficial):**
```python
class Contador:
    total_creados = 0        # atributo de CLASE -- compartido por TODAS las instancias

    def __init__(self, nombre):
        self.nombre = nombre  # atributo de INSTANCIA -- propio de cada objeto
        Contador.total_creados += 1
```
Un atributo de instancia (`self.x` dentro de `__init__`) es propio de cada pieza fundida. Un atributo de clase (definido directo en el cuerpo de la clase, fuera de cualquier método) es una sola variable compartida por el molde entero — cambiar uno afecta a todas las instancias a la vez.

## Bloque 4 — Escalera de práctica

*Nota de densidad (DOC-11 v2.0.1): siete categorías.*

**Predecir:**
1. El conflicto del Bloque 2.
2. Crear dos instancias de `Producto` y modificar el stock de una — ¿afecta a la otra?
3. Un método definido sin `self` como primer parámetro, llamado normalmente (`obj.metodo(3)`) — ¿qué error exacto lanza?

**Leer código:**
```python
class Empleado:
    empresa = "TechCorp"          # atributo de clase
    def __init__(self, nombre, salario):
        self.nombre = nombre      # atributo de instancia
        self.salario = salario
```
Sin ejecutar: si cambias `Empleado.empresa` después de crear varios empleados, ¿todos los empleados ya creados "ven" el cambio? ¿Y si cambias `empleado1.salario`, afecta a `empleado2`?

**Investigar / trazar:** dado el `producto` (dict) del Bloque 2 y su versión-clase equivalente, trazar exactamente qué gana la clase (imposibilidad del bug del Bloque 2) y qué paga (más líneas de código para representar lo mismo).

**Modificar:** la función suelta `vender(item, cantidad)` del Bloque 2, que puede recibir cualquier diccionario → convertirla en el método `Producto.vender(self, cantidad)`, que solo puede operar sobre una instancia real.

**Refactorizar:** código con variables sueltas (`nombre_producto`, `precio_producto`, `stock_producto`) que siempre viajan juntas → una clase `Producto` con esos tres como atributos.

**Escribir:** clase `CuentaBancaria` con `__init__(self, titular, saldo)` y un método `depositar(self, monto)` que suma al saldo.

**Depurar (tres ejercicios, dificultad creciente):**
1. Confundir la clase con una instancia (Bloque 0).
2. Olvidar `self` en la definición de un método (Bloque 0).
3. *(compuesto)* Un atributo definido como atributo de CLASE (fuera de `__init__`) cuando en realidad debía ser de instancia — mutarlo desde una instancia cambia lo que ven TODAS las demás instancias, un bug real y muy documentado en Python.

## Bloque 5 — Laboratorio: mini-proyecto integrador

**Integración real (con M1):** el laboratorio retoma directamente el `producto` (dict) del Bloque 2 y lo convierte en la clase completa.

**El proyecto — Clase Producto con validación de stock:** `__init__(self, nombre, precio, stock)`; `vender(self, cantidad)` que devuelve `"Vendido"` y descuenta el stock si hay suficiente, o `"Stock insuficiente"` sin modificar nada si no lo hay; `reponer(self, cantidad)` que suma al stock.

**Trade-off explícito (la pregunta ingenieril de la ficha, directa):** si un dict y una clase pueden representar lo mismo, ¿qué señales del problema te harían pagar el costo extra de la clase — y cuándo sería sobre-ingeniería usar una clase para algo que un dict simple ya resolvía bien?

**Argumento de corrección:** ¿`vender()` rechaza correctamente vender más unidades de las que hay en stock, sin modificar el stock en ese caso?

**Confrontación de soluciones:** comparar la versión-dict del Bloque 2 (donde el bug del `KeyError` era posible) contra la versión-clase — ¿la clase hace **imposible** ese bug, o solo lo hace menos probable? (Imposible: `__init__` exige los tres datos siempre; no hay forma de crear un `Producto` incompleto.)

**Fase 2 — transferencia sin instrucciones repetidas:** el método `reponer(self, cantidad)` se infiere del patrón ya practicado en `vender()`, sin que se explique paso a paso.

## Bloque 6 — Consolidación

**Defensa socrática:**
1. ¿Por qué la segunda llamada a `vender()` en el Bloque 2 truena y la primera no?
2. ¿Qué diferencia real hay entre un atributo de instancia y uno de clase?
3. *(inédita)* Si tuvieras que explicarle `self` a alguien sin usar la palabra "objeto" ni "instancia", ¿qué dirías?

**Seis preguntas de excelencia:**
1. ¿Qué aprendí? Que una clase une datos y comportamiento en un molde propio, y que `__init__` hace imposible crear una pieza incompleta.
2. ¿Por qué existe este concepto? Porque los diccionarios no imponen ningún contrato sobre lo que deben contener, y las funciones sueltas pueden recibir cualquier cosa.
3. ¿Qué problema resuelve? Une el dato con el comportamiento que lo transforma, en un solo lugar con reglas propias.
4. ¿Cómo lo usan los profesionales? Casi toda librería seria de Python (desde Django hasta PyTorch) se usa instanciando clases — es el paradigma dominante del lenguaje.
5. ¿Cómo se conecta con lo anterior? Un objeto es, literalmente, "un dict con oficio" — M1.T3 ya sembró la idea de agrupar datos con nombre; hoy esa idea gana forma obligatoria y comportamiento propio.
6. ¿Qué pasaría si no existiera? Cada entidad seguiría siendo un diccionario sin garantías, y cada función que la toca podría recibir datos incompletos o mal formados sin ningún aviso.

**Reflexión metacognitiva:**
- ¿En qué ejercicio confundiste la clase con una instancia, y qué te hizo notar la diferencia?
- ¿Cómo se conecta el atributo de clase compartido de hoy con el aliasing de Listas y tuplas?
- ¿En qué parte de un proyecto propio (fuera de esta lección) convertirías un diccionario en una clase?

**Desafío final inédito:** un atributo de lista definido como atributo de CLASE, no de instancia:
```python
class Carrito:
    items = []              # atributo de CLASE -- el bug
    def __init__(self, dueno):
        self.dueno = dueno
    def agregar(self, item):
        self.items.append(item)

c1 = Carrito("Ana")
c2 = Carrito("Luis")
c1.agregar("pan")
print(c2.items)
```
Predecir, ANTES de ejecutar, qué imprime — ¿el carrito de Luis (`c2`), que nunca agregó nada, sigue vacío? Explicar por qué `items = []` fuera de `__init__` crea UNA sola lista compartida por todas las instancias, no una por cada carrito — el mismo tipo de sorpresa que el aliasing de Listas y tuplas, ahora escondida dentro de una clase.

**Lectura dirigida:** [MIT 6.0001 — Lecture 9, Python Classes and Inheritance](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/resources/lecture-9-python-classes-and-inheritance/) · [CS50P — Week 8, Object-Oriented Programming](https://cs50.harvard.edu/python/weeks/8/).

**Beyond the Curriculum:** *"Esto es la base de prácticamente todo lo que usarás en el resto de tu carrera — FastAPI y Django (N2) se usan definiendo clases; PyTorch (N5 en adelante) define redes neuronales completas como clases con `__init__` y métodos. El molde que aprendiste hoy es literalmente el mismo mecanismo detrás de esas librerías."*

## 4. Criterio de dominio — siete capacidades

| # | Capacidad | Instrumento en esta lección |
|---|---|---|
| 1 | Explicar | Bloque 6, defensa + pregunta de excelencia |
| 2 | Predecir | Bloque 4, "predecir" (3) |
| 3 | Detectar errores | Bloque 4, "leer código" + Bloque 0, errores deliberados |
| 4 | Corregir | Bloque 4, "depurar" (3, incluido el caso compuesto de atributo de clase mutable) |
| 5 | Modificar | Bloque 4, "modificar" (función→método) + "refactorizar" |
| 6 | Aplicar en contexto nuevo | Bloque 6, desafío final (atributo de clase compartido por accidente) |
| 7 | Usar en un proyecto | Bloque 5, clase Producto con validación de stock |

**Instrumento DOC-02:** RM-03 + TD-01. Evidencia observable: convierte un dict-entidad de M1 en clase y explica qué ganó y qué pagó — trade-off explícito (evidencia de dominio ya declarada en SYL-N1).

## 4bis. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Clasificación |
|---|---|---|---|---|---|---|
| [MIT 6.0001 — Lecture 9](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/resources/lecture-9-python-classes-and-inheritance/) | MIT OpenCourseWare | EN | ~50 min | Introductorio | Lección dedicada exactamente al arranque de POO en Python | 🟢 Antes de estudiar |
| [CS50P — Week 8, Object-Oriented Programming](https://cs50.harvard.edu/python/weeks/8/) | Harvard (CS50) | EN | ~1h | Introductorio | Semana completa dedicada a POO; coincide independientemente en la metáfora del "molde" | 🔵 Durante la lección |
| [Python docs — 9. Classes](https://docs.python.org/3/tutorial/classes.html) | Python Software Foundation | EN | ~30 min | Introductorio | Referencia oficial completa, incluida la distinción atributos de clase vs. de instancia | 🔵 Durante la lección |

## Registro de observaciones

| # | Fecha | Observación | Categoría |
|---|---|---|---|
| — | *(pendiente)* | — | — |
