# N1.M2.T2 — Atributos, métodos y estado

> **Estado:** Desarrollo ✅ · Validación ⏳ Pendiente · Investigación ✅ [`n1-m2-t2-atributos-metodos-estado.md`](../../investigacion/n1-m2-t2-atributos-metodos-estado.md) — construida bajo DOC-11 v2.0.1 (Estándar de Excelencia Mundial). Enseña protección de estado con métodos explícitos (MIT), no con `@property` (CS50P) — decisión documentada: los decoradores están excluidos de N1 por H-01 (SYL-N1), ver EVT-030.
>
> Motor de ejecución: **Pyodide (Python real en el navegador)**.

## Ficha de control

| Campo | Valor |
|---|---|
| **Dirección** | N1.M2.T2 |
| **Gran pregunta del módulo (M2)** | ¿Cómo modelamos el mundo dentro del software? |
| **Gran pregunta de esta lección** | Si cualquiera puede cambiar el estado de un objeto desde cualquier parte del programa, ¿qué garantiza que ese estado siga teniendo sentido? |
| **Prerrequisitos** | N1.M2.T1 (clases y objetos) |
| **Competencias** | C-N1-01, C-N1-02 |
| **Duración** | Heurística. Escalera densa (7 categorías) + laboratorio de invariantes + desafío final. |
| **Conexión con T1** | T1 ya mostró un adelanto de esto: `Producto.vender()` validaba el stock antes de mutar. Hoy ese patrón se nombra formalmente — **invariante** — y se aplica con disciplina. |
| **Conexión con N1.M1.T5 (Excepciones)** | Romper un invariante es exactamente el tipo de situación donde lanzar una excepción propia (`raise ValueError(...)`) es la respuesta correcta — la primera vez que se lanza una excepción propia, no solo se captura una ajena. |

## Bloque 0 — Preparación del Tutor

**Recuperación (T1):** 1) ¿Por qué la segunda llamada a `vender()` en el conflicto de Clases y objetos truena? 2) ¿Qué diferencia real hay entre un atributo de instancia y uno de clase?

**Diagnóstico relámpago:** *"Si una CuentaBancaria tiene un atributo `self.saldo`, y CUALQUIER parte del programa puede hacer `cuenta.saldo = -500` directamente, ¿qué le pasa a la idea de que 'una cuenta nunca debería tener saldo negativo'?"*

**Problema motivador:** *"Quiero que la única forma de cambiar el saldo de una cuenta sea a través de `depositar()` y `retirar()`, y que `retirar()` rechace dejar el saldo en negativo — sin que nadie pueda saltarse esa regla asignando directo."*

**Errores deliberados a inyectar:**
1. Mutar el estado directamente desde fuera de la clase (`cuenta.saldo = -500`), sin pasar por ningún método — rompe cualquier regla que el objeto debiera cumplir, sin que nadie lo note.
2. Un método que recibe como parámetro algo que YA tiene en `self` (`def duplicar(self, valor_actual): return valor_actual * 2` en vez de usar `self.valor` directo) — señal de que no se entendió bien qué hace `self`.

## Bloque 1 — Intuición, analogía e historia

**Hook:** *"Hasta ahora, un objeto era solo un lugar donde guardar datos. Hoy decides quién tiene permiso para cambiarlos — y qué reglas debe cumplir ese cambio."*

**Analogía (ficha SYL-N1, verificada como predictiva):** un objeto es una **máquina con panel de mandos**. El estado interno de la máquina no es un cajón abierto donde cualquiera puede meter la mano — son los **botones** (métodos) los que definen qué transformaciones son legales. Apretar "depositar" siempre suma; simplemente no existe ningún botón que deje la máquina en un estado imposible, porque nunca se construyó ese botón. **Prueba de que es predictiva:** un estudiante que recuerde esta imagen predice correctamente que una clase bien diseñada nunca necesita "prohibir" un estado inválido con un mensaje de error genérico — ese estado nunca llega a ser alcanzable, porque ningún método permite llegar ahí.

**Historia (costo real):** el término **invariante** en programación viene de la lógica formal, popularizado en el diseño de software por Tony Hoare en los años 60-70, a partir de su trabajo en verificación formal de programas. La idea de que un objeto debe mantener una propiedad verdadera **siempre**, en cada punto observable de su vida, es una de las ideas más antiguas y más citadas del diseño de software serio — no una invención pedagógica de esta lección.

## Bloque 2 — Conflicto cognitivo

```python
class CuentaBancaria:
    def __init__(self, titular, saldo):
        self.titular = titular
        self.saldo = saldo

    def retirar(self, monto):
        self.saldo -= monto

cuenta = CuentaBancaria("Alex", 100)
cuenta.retirar(500)
print(cuenta.saldo)
```

**Predicción esperada:** ¿`retirar(500)` debería "funcionar" si la cuenta solo tiene 100? ¿Qué imprime?

La sorpresa: **sí "funciona"** — no hay ningún error, y se imprime `-400`. Un saldo negativo, algo que no debería ser posible en una cuenta real, y nada en el código lo impide.

## Bloque 3 — Explicación rigurosa

**Métodos como única vía de cambio, con validación explícita (el enfoque de MIT — sin decoradores, por H-01):**
```python
class CuentaBancaria:
    def __init__(self, titular, saldo):
        self.titular = titular
        self._saldo = saldo        # guion bajo: convencion, "no lo toques directo"

    def get_saldo(self):
        return self._saldo

    def retirar(self, monto):
        if monto > self._saldo:
            raise ValueError("Fondos insuficientes")
        self._saldo -= monto
```

**`raise ValueError(...)` — lanzar una excepción propia:** cuando un método detecta que se le pide romper el invariante, no debe "hacerlo silenciosamente ni fallar de forma extraña" — lanza una excepción con un mensaje claro, exactamente lo que Excepciones (T5) preparó, ahora usado por primera vez para PRODUCIR un error propio, no solo capturar uno ajeno.

**El guion bajo NO es magia — es una convención, un matiz honesto:** Python no impide técnicamente que alguien escriba `cuenta._saldo = -500` desde afuera; el guion bajo es una señal para quien lee el código de que ese atributo no debería tocarse directo. La protección real viene de que la única forma **razonable y documentada** de cambiar el saldo son los métodos — la disciplina es del diseño, no del intérprete.

**Invariante:** una propiedad que debe ser verdadera SIEMPRE, en todo momento observable del objeto — "el saldo nunca es negativo" se enuncia explícitamente, y cada método que pudiera romperla la defiende.

## Bloque 4 — Escalera de práctica

*Nota de densidad (DOC-11 v2.0.1): siete categorías.*

**Predecir:**
1. El conflicto del Bloque 2.
2. Acceder a `cuenta._saldo` directo desde afuera de la clase (versión corregida) — ¿funciona igual que `cuenta.get_saldo()`, o Python lo bloquea?
3. `retirar(1000)` sobre una cuenta con 70 (versión corregida) — ¿qué excepción exacta lanza?

**Leer código:**
```python
class Producto:
    def __init__(self, precio):
        self.precio = precio
    def con_descuento(self, precio_actual, porcentaje):
        return precio_actual * (1 - porcentaje)
```
Sin ejecutar: ¿por qué `precio_actual` como parámetro es redundante, si el método ya tiene acceso a `self.precio`?

**Investigar / trazar:** dado un `Inventario` con `cantidad`, trazar TODOS los métodos que podrían dejarlo en negativo, y cuáles ya lo protegen.

**Modificar:** la `CuentaBancaria` del Bloque 2 (`retirar` sin validar) → agregar la validación que lanza `ValueError`.

**Refactorizar:** un método con un parámetro redundante (recibe `self.valor` como argumento explícito en vez de usarlo directo) → eliminar el parámetro innecesario.

**Escribir:** clase `Inventario` con `capacidad`, `agregar(n)` y `quitar(n)` que nunca dejan la cantidad negativa ni por encima de la capacidad — `raise ValueError` en ambos casos límite.

**Depurar (tres ejercicios, dificultad creciente):**
1. Mutación directa del estado sin pasar por un método (Bloque 0).
2. Parámetro redundante que ya vive en `self` (Bloque 0).
3. *(compuesto)* Un método "de mantenimiento" (`ajustar(n)`) de la MISMA clase que olvida usar la validación que otros métodos sí respetan — el invariante se rompe no por un ataque externo, sino por un descuido interno del propio diseño de la clase.

## Bloque 5 — Laboratorio: mini-proyecto integrador

**Integración real (con T1):** el laboratorio retoma la clase `Producto` de T1 y la generaliza a `Inventario`, con un invariante más estricto (dos límites, no uno).

**El proyecto — Inventario con invariante de capacidad:** `Inventario(capacidad)` empieza en cero; `agregar(n)` lanza `ValueError` si excede la capacidad; `quitar(n)` lanza `ValueError` si no hay suficiente cantidad; `transferir(otro_inventario, n)` mueve cantidad de un inventario a otro reutilizando `quitar()`/`agregar()` ya escritos.

**Trade-off explícito:** ¿`agregar()`/`quitar()` deberían devolver un booleano de éxito, o lanzar una excepción cuando se viola el invariante? Ambos son válidos — conecta directo con EAFP/LBYL de T5, ahora aplicado al diseño de una clase, no solo a `try/except` sobre funciones sueltas.

**Argumento de corrección:** ¿el inventario funciona correctamente en los bordes exactos — agregar hasta llenar exactamente la capacidad, quitar hasta dejar exactamente cero?

**Confrontación de soluciones:** comparar la versión sin proteger del Bloque 2 contra la protegida — ¿cuántas líneas de más cuesta la protección, y qué se gana exactamente a cambio?

**Fase 2 — transferencia sin instrucciones repetidas:** `transferir(otro, n)` se infiere del patrón ya practicado — reutiliza `quitar()` y `agregar()` en vez de duplicar su lógica de validación.

## Bloque 6 — Consolidación

**Defensa socrática:**
1. ¿Por qué `retirar(500)` del Bloque 2 no debería "funcionar" silenciosamente?
2. ¿El guion bajo (`_saldo`) impide técnicamente el acceso directo, o es solo una convención?
3. *(inédita)* Si tuvieras que diseñar una clase donde romper el invariante fuera literalmente **imposible** (no solo desalentado), ¿qué harías distinto?

**Seis preguntas de excelencia:**
1. ¿Qué aprendí? Que el valor real de una clase no está en juntar datos, sino en que sus métodos son las únicas puertas legales para cambiarlos.
2. ¿Por qué existe este concepto? Porque el estado mutado sin control, desde cualquier parte de un programa grande, es una fuente constante de bugs difíciles de rastrear.
3. ¿Qué problema resuelve? Permite enunciar una regla ("el saldo nunca es negativo") y hacer que el propio diseño de la clase la haga cumplir.
4. ¿Cómo lo usan los profesionales? Nombran y defienden invariantes explícitamente, y lanzan excepciones propias claras en vez de dejar que el objeto quede en un estado incoherente.
5. ¿Cómo se conecta con lo anterior? Usa `raise` de Excepciones (T5) para producir errores propios por primera vez, no solo capturar los del sistema.
6. ¿Qué pasaría si no existiera? Cualquier parte del programa podría dejar cualquier objeto en un estado sin sentido, y el bug aparecería mucho después, lejos de donde realmente ocurrió.

**Reflexión metacognitiva:**
- ¿En qué ejercicio mutaste el estado directo en vez de pasar por un método, y qué te hizo notar el riesgo?
- ¿Cómo se conecta el guion bajo de hoy con el modelo mental de "convención, no imposición" del lenguaje?
- ¿Qué invariante tendría una clase de un proyecto propio (fuera de esta lección)?

**Desafío final inédito:** un método "de mantenimiento" rompe el invariante que otros métodos de la misma clase sí respetan:
```python
class InventarioRoto:
    def __init__(self, capacidad):
        self.capacidad = capacidad
        self._cantidad = 0
    def agregar(self, n):
        if self._cantidad + n > self.capacidad:
            raise ValueError("Excede capacidad")
        self._cantidad += n
    def ajustar(self, n):
        self._cantidad = n
    def cantidad(self):
        return self._cantidad

ir = InventarioRoto(10)
ir.agregar(5)
ir.ajustar(999)
print(ir.cantidad())
```
Predecir, ANTES de ejecutar, qué imprime — ¿`ajustar(999)` respeta la capacidad de 10, igual que `agregar()`? Explicar por qué: el invariante no se rompió por un ataque externo (nadie tocó `_cantidad` desde afuera), sino porque un método de la propia clase simplemente **olvidó** aplicar la misma validación que los demás — la pregunta ingenieril de la ficha, en su forma más real: el enemigo del invariante no es siempre alguien de afuera.

**Lectura dirigida:** [MIT 6.0001 — Lecture 9, Getters and Setters](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/in-class-questions-and-video-solutions/lecture-9/getters-and-setters/).

**Beyond the Curriculum:** *"Lo que hoy escribiste a mano (validar antes de mutar, con un guion bajo como convención) tiene una versión más elegante en Python real: el decorador `@property`, que hace que `cuenta.saldo` se vea como un atributo normal pero ejecute validación por detrás. Lo verás en N2 — hoy construiste la disciplina; ahí construirás la sintaxis que la hace más cómoda de usar."*

## 4. Criterio de dominio — siete capacidades

| # | Capacidad | Instrumento en esta lección |
|---|---|---|
| 1 | Explicar | Bloque 6, defensa + pregunta de excelencia |
| 2 | Predecir | Bloque 4, "predecir" (3) |
| 3 | Detectar errores | Bloque 4, "leer código" + Bloque 0, errores deliberados |
| 4 | Corregir | Bloque 4, "depurar" (3, incluido el caso compuesto de método sin validar) |
| 5 | Modificar | Bloque 4, "modificar" (validación) + "refactorizar" (parámetro redundante) |
| 6 | Aplicar en contexto nuevo | Bloque 6, desafío final (invariante roto desde dentro de la propia clase) |
| 7 | Usar en un proyecto | Bloque 5, Inventario con invariante de capacidad, integrando T1 |

**Instrumento DOC-02:** RM-03 + TD-01. Evidencia observable: enuncia el invariante de su clase y muestra qué método podría romperlo y cómo lo impide (evidencia de dominio ya declarada en SYL-N1).

## 4bis. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Clasificación |
|---|---|---|---|---|---|---|
| [MIT 6.0001 — Lecture 9, Getters and Setters](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/in-class-questions-and-video-solutions/lecture-9/getters-and-setters/) | MIT OpenCourseWare | EN | ~15 min | Introductorio | Fuente directa del enfoque de getters/setters como métodos, sin decoradores | 🟢 Antes de estudiar |
| [Python docs — 9. Classes](https://docs.python.org/3/tutorial/classes.html) | Python Software Foundation | EN | ~30 min | Introductorio | Referencia oficial de atributos y métodos, ya usada en T1 | 🔵 Durante la lección |

## Registro de observaciones

| # | Fecha | Observación | Categoría |
|---|---|---|---|
| — | *(pendiente)* | — | — |
