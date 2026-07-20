# N1.M2.T3 — Composición vs. herencia

> **Estado:** Desarrollo ✅ · Validación ⏳ Pendiente · Investigación ✅ [`n1-m2-t3-composicion-herencia.md`](../../investigacion/n1-m2-t3-composicion-herencia.md) — construida bajo DOC-11 v2.0.1 (Estándar de Excelencia Mundial).
>
> Motor de ejecución: **Pyodide (Python real en el navegador)**.

## Ficha de control

| Campo | Valor |
|---|---|
| **Dirección** | N1.M2.T3 |
| **Gran pregunta del módulo (M2)** | ¿Cómo modelamos el mundo dentro del software? |
| **Gran pregunta de esta lección** | Si heredar te ahorra veinte líneas hoy, ¿qué puede costarte dentro de seis meses cuando la clase padre cambie sin avisarte? |
| **Prerrequisitos** | N1.M2.T2 (atributos, métodos y estado) |
| **Competencias** | C-N1-02 |
| **Duración** | Heurística. Escalera densa (7 categorías) + laboratorio de confrontación de diseños + desafío final. |
| **Conexión con T1/T2** | Reutiliza `Producto` (T1) e `Inventario` (T2) como base concreta para el ejemplo — evita el dominio abstracto de logging que usa la fuente principal de esta investigación. |
| **Conexión con N1.M2.T4 (Métodos dunder)** | Hoy se aprende a relacionar clases entre sí; T4 enseña a hacer que esas clases se conecten con la maquinaria del propio lenguaje (`print`, `==`, `for`). |

## Bloque 0 — Preparación del Tutor

**Recuperación (T2):** 1) ¿Por qué `retirar(500)` no debería "funcionar" silenciosamente? 2) ¿El guion bajo impide técnicamente el acceso directo, o es solo una convención?

**Diagnóstico relámpago:** *"Si tuvieras una clase `ProductoConDescuento` que hereda de `Producto`, y DESPUÉS necesitas también `ProductoConEnvioGratis`, y luego un producto que tiene AMBAS cosas a la vez, ¿cuántas clases nuevas necesitarías con herencia?"*

**Problema motivador:** *"Tengo un `Producto`, y quiero productos que tengan descuento, o envío gratis, o garantía extendida — en CUALQUIER combinación. Con herencia, cada combinación nueva exige una clase nueva. Quiero una forma de combinar comportamientos sin que la cantidad de clases explote."*

**Errores deliberados a inyectar:**
1. Una jerarquía de tres niveles (`Producto` → `ProductoConDescuento` → `ProductoConDescuentoYEnvioGratis`) que se vuelve frágil e ilegible a medida que crece.
2. Heredar cuando la relación real es "tiene-un", no "es-un" — por ejemplo, un `Pedido` heredando de `Producto` por error, cuando un pedido no ES un producto: **tiene** productos.

## Bloque 1 — Intuición, analogía e historia

**Hook:** *"Hasta ahora, cada clase vivía sola. Hoy decides cómo relacionar dos clases entre sí — y descubres que hay dos formas distintas, con consecuencias muy distintas a largo plazo."*

**Analogía (ficha SYL-N1, con coincidencia independiente de vocabulario confirmada en la fuente):** herencia es **especialización de identidad** — "un Perro **ES UN** Animal", comparte su naturaleza. Composición es **ensamblaje de capacidades** — "un Auto **TIENE UN** Motor", el motor no es un tipo de auto, es una pieza que el auto usa. **Prueba de que es predictiva:** un estudiante que recuerde esta imagen predice correctamente que un `Pedido` que "tiene" una lista de productos no debería heredar de `Producto` — un pedido no es un producto.

**Historia (costo real, con origen documentado y verificable):** el principio **"favor object composition over class inheritance"** viene literalmente del libro *Design Patterns* (1994) de Gamma, Helm, Johnson y Vlissides — la "Gang of Four" — el texto más influyente de diseño orientado a objetos de la historia de la industria. No es una preferencia de esta Academia: es la conclusión de cuatro ingenieros documentando patrones ya observados en software real.

## Bloque 2 — Conflicto cognitivo

```python
class Producto:
    def __init__(self, nombre, precio):
        self.nombre = nombre
        self.precio = precio

class ProductoConDescuento(Producto):
    def __init__(self, nombre, precio, descuento):
        super().__init__(nombre, precio)
        self.descuento = descuento

class ProductoConEnvioGratis(Producto):
    def __init__(self, nombre, precio):
        super().__init__(nombre, precio)
        self.envio_gratis = True

# ¿y un producto con AMBAS cosas a la vez?
```

**Predicción esperada:** si quisieras agregar "con garantía extendida" como una tercera opción, combinable con las otras dos, ¿cuántas clases NUEVAS necesitarías con este enfoque?

La sorpresa: con herencia simple, necesitas una clase para **cada combinación posible** — con descuento, con envío, con garantía, con descuento+envío, con descuento+garantía, con envío+garantía, con las tres — la **explosión de subclases**: para *n* comportamientos independientes, hasta 2ⁿ clases.

## Bloque 3 — Explicación rigurosa

**Sintaxis de herencia:**
```python
class ProductoConDescuento(Producto):
    def __init__(self, nombre, precio, descuento):
        super().__init__(nombre, precio)   # reutiliza el constructor del padre
        self.descuento = descuento
```
`super().__init__(...)` llama al `__init__` de la clase padre — olvidarlo deja a la instancia sin los atributos que el padre debía inicializar.

**Cuándo SÍ tiene sentido heredar:** cuando la relación es genuinamente "es-un" y hay **una sola dimensión** de especialización (un `Gerente` es-un tipo de `Empleado`; no hay combinaciones múltiples que considerar).

**Composición — la herramienta por defecto del profesional (ficha):** en vez de heredar el comportamiento, el objeto **tiene** los datos que representan esas capacidades, como parámetros de la misma clase:
```python
class Producto:
    def __init__(self, nombre, precio, descuento=0, envio_gratis=False, garantia_meses=0):
        self.nombre = nombre
        self.precio = precio
        self.descuento = descuento
        self.envio_gratis = envio_gratis
        self.garantia_meses = garantia_meses
    def precio_final(self):
        return self.precio * (1 - self.descuento)
```
Cualquier combinación de las tres capacidades es posible sin ninguna clase nueva — **una** clase, no siete.

## Bloque 4 — Escalera de práctica

*Nota de densidad (DOC-11 v2.0.1): siete categorías.*

**Predecir:**
1. El conflicto del Bloque 2.
2. `super().__init__()` olvidado en una subclase — ¿qué le pasa a la instancia al intentar acceder a un atributo que el padre debía inicializar?
3. Dado un `Pedido` que "tiene" una lista de `Producto`, ¿debería heredar de `Producto`? ¿Por qué no?

**Leer código:** la jerarquía de tres niveles del Bloque 0 (`Producto`→`ProductoConDescuento`→`ProductoConDescuentoYEnvioGratis`) — identificar cuántos atributos hereda la clase más profunda, y qué tan frágil queda si `Producto` cambia su `__init__`.

**Investigar / trazar:** contar cuántas clases se necesitan, con composición (Bloque 3), para representar CUALQUIER combinación de las tres capacidades — comparar ese número (1) contra las 7 que exigiría la herencia simple.

**Modificar:** la jerarquía de subclases del Bloque 2 (para descuento + envío) → convertirla en una sola clase `Producto` con parámetros.

**Refactorizar:** una clase hija que solo existe para reutilizar dos métodos, sin que la relación "es-un" tenga sentido real → convertirla en un atributo de otra clase (composición).

**Escribir:** clase `Motor` con `caballos_fuerza`, y clase `Auto` que **tiene** un `Motor` como atributo (composición, no herencia).

**Depurar (tres ejercicios, dificultad creciente):**
1. `super().__init__()` olvidado — `AttributeError` real al acceder a un atributo del padre.
2. Heredar cuando la relación real es "tiene-un" (`Pedido` heredando de `Producto` por error).
3. *(compuesto)* Jerarquía de tres niveles donde cambiar un método en la clase RAÍZ podría romper silenciosamente el comportamiento esperado de la clase más profunda — la pregunta ingenieril de la ficha, en código real.

## Bloque 5 — Laboratorio: mini-proyecto integrador

**Integración real (con T1/T2):** el laboratorio confronta dos diseños completos del mismo problema — evidencia de dominio explícita de la ficha.

**El proyecto — Confrontación de diseños:** construir el catálogo de productos combinables (descuento / envío gratis / garantía) primero con la jerarquía de subclases del Bloque 2 (contando cuántas clases exige), y después con la versión de composición del Bloque 3 (una sola clase). Comparar directamente.

**Trade-off explícito y confrontación de soluciones (evidencia de dominio de la ficha, textual):** ante los dos diseños del mismo problema, argumentar cuál escala mejor y por qué, con el número real de clases como evidencia, no solo intuición.

**Argumento de corrección:** ¿la versión con composición calcula correctamente el precio final con las tres capacidades activas a la vez?

**Fase 2 — transferencia sin instrucciones repetidas:** agregar una CUARTA capacidad (por ejemplo, "producto frágil", con un recargo de empaque) sin que se explique el patrón — se infiere que la composición la absorbe con un parámetro más, mientras la herencia hubiera duplicado otra vez la explosión de subclases.

## Bloque 6 — Consolidación

**Defensa socrática:**
1. ¿Por qué la explosión de subclases del Bloque 2 crece tan rápido?
2. ¿Cuál es la diferencia real entre "es-un" y "tiene-un"?
3. *(inédita, la pregunta ingenieril de la ficha, textual)* Si heredar te ahorra veinte líneas hoy, ¿qué puede costarte dentro de seis meses cuando la clase padre cambie sin avisarte?

**Seis preguntas de excelencia:**
1. ¿Qué aprendí? Que hay dos formas de relacionar clases, y que elegir mal entre ellas cuesta mucho más a largo plazo que a corto plazo.
2. ¿Por qué existe este concepto? Porque la reutilización mal hecha es una de las formas más caras de deuda técnica.
3. ¿Qué problema resuelve? Permite combinar comportamientos independientes sin que la cantidad de clases crezca exponencialmente.
4. ¿Cómo lo usan los profesionales? Favorecen composición por defecto, y reservan la herencia para relaciones "es-un" genuinas, de una sola dimensión.
5. ¿Cómo se conecta con lo anterior? Reutiliza `super().__init__()` sobre el `__init__` de T1-T2, y el criterio "es-un"/"tiene-un" es una extensión directa del modelo mental del molde (T1).
6. ¿Qué pasaría si no existiera este criterio? Cada proyecto acumularía jerarquías de herencia cada vez más profundas y frágiles, sin ninguna alternativa consciente.

**Reflexión metacognitiva:**
- ¿En qué ejercicio heredaste cuando la relación real era "tiene-un", y qué te hizo notar el error?
- ¿Cómo se conecta la "explosión de subclases" de hoy con el criterio de simplicidad de Comprehensions (frontera entre conciso y críptico)?
- ¿Qué relación de un proyecto propio (fuera de esta lección) modelarías con composición en vez de herencia?

**Desafío final inédito:** `super().__init__()` olvidado, con el error real que produce:
```python
class Producto:
    def __init__(self, nombre, precio):
        self.nombre = nombre
        self.precio = precio

class ProductoConDescuento(Producto):
    def __init__(self, nombre, precio, descuento):
        self.descuento = descuento

p = ProductoConDescuento("pan", 5, 0.1)
print(p.nombre)
```
Predecir, ANTES de ejecutar, qué error exacto produce la última línea — y explicar por qué `descuento` sí existe en `p`, pero `nombre` no: `ProductoConDescuento.__init__` nunca llamó a `super().__init__()`, así que el `__init__` de `Producto` nunca se ejecutó.

**Lectura dirigida:** [MIT 6.0001 — Lecture 9, Python Classes and Inheritance](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/resources/lecture-9-python-classes-and-inheritance/) · [python-patterns.guide — The Composition Over Inheritance Principle](https://python-patterns.guide/gang-of-four/composition-over-inheritance/).

**Beyond the Curriculum:** *"Vas a encontrar el término 'Mixin' leyendo código real — una forma de herencia múltiple con un propósito muy específico (agregar UNA capacidad puntual, no una jerarquía completa). No se enseña a fondo aquí porque el criterio 'es-un'/'tiene-un' de hoy ya te da lo esencial para reconocer cuándo algo se te está yendo de las manos — cuando lo veas, ya sabrás que es un caso especial de esta misma decisión."*

## 4. Criterio de dominio — siete capacidades

| # | Capacidad | Instrumento en esta lección |
|---|---|---|
| 1 | Explicar | Bloque 6, defensa + pregunta de excelencia |
| 2 | Predecir | Bloque 4, "predecir" (3) |
| 3 | Detectar errores | Bloque 4, "leer código" + Bloque 0, errores deliberados |
| 4 | Corregir | Bloque 4, "depurar" (3, incluido el caso compuesto de jerarquía frágil) |
| 5 | Modificar | Bloque 4, "modificar" (subclases→composición) + "refactorizar" |
| 6 | Aplicar en contexto nuevo | Bloque 6, desafío final (`super().__init__()` olvidado, error real) |
| 7 | Usar en un proyecto | Bloque 5, confrontación de diseños del catálogo combinable |

**Instrumento DOC-02:** RM-03 + TD-01. Evidencia observable: ante dos diseños dados del mismo problema (uno heredado, uno compuesto), argumenta cuál escala mejor y por qué — confrontación de soluciones (evidencia de dominio ya declarada en SYL-N1).

## 4bis. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Clasificación |
|---|---|---|---|---|---|---|
| [MIT 6.0001 — Lecture 9](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/resources/lecture-9-python-classes-and-inheritance/) | MIT OpenCourseWare | EN | ~50 min | Introductorio | Da la base sintáctica de herencia (`super()`) que esta lección necesita | 🟢 Antes de estudiar |
| [python-patterns.guide — Composition Over Inheritance](https://python-patterns.guide/gang-of-four/composition-over-inheritance/) | Brandon Rhodes | EN | ~20 min | Intermedio | Explicación directa en Python del principio de la Gang of Four, con el mismo criterio "es-un"/"tiene-un" | 🔵 Durante la lección |

## Registro de observaciones

| # | Fecha | Observación | Categoría |
|---|---|---|---|
| — | *(pendiente)* | — | — |
