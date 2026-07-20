# N1.M1.T1 — Funciones a fondo

> **Estado:** Desarrollo ✅ · Validación ⏳ Pendiente · Investigación ✅ [`n1-m1-t1-funciones-a-fondo.md`](../../investigacion/n1-m1-t1-funciones-a-fondo.md) — construida bajo DOC-11 v2.0.1 (Estándar de Excelencia Mundial). Corrige y reemplaza el intento anterior mal dirigido de "N1.M1.T1 — Decoradores y closures" (ver EVT-030); ese contenido se conserva como semilla real para N2 en `docs/reservado-n2/`.
>
> Primera lección real de N1. Motor de ejecución: **Pyodide (Python real en el navegador)** — a diferencia de N0, aquí no hay restricciones artificiales: funciones, `def`, `return`, y todo lo que el lenguaje real permite.

## Ficha de control

| Campo | Valor |
|---|---|
| **Dirección** | N1.M1.T1 |
| **Gran pregunta del módulo (M1)** | ¿Cómo organizamos programas para que sigan siendo comprensibles cuando crecen? |
| **Gran pregunta de esta lección** | Si una función es una caja negra que "hace algo" y devuelve un resultado, ¿qué significa exactamente que ese resultado exista fuera de la función? |
| **Prerrequisitos** | N0 íntegro (variables, tipos, control de flujo) |
| **Competencias** | C-N1-01 |
| **Duración** | Heurística, no plazo. Bajo DOC-11 v2.0.1: escalera densa (7 categorías) + mini-proyecto integrador + desafío final — varias sesiones reales, no una tarde. |
| **Conexión con N0** | N0 construyó programas de principio a fin, sin poder nombrar ni reutilizar un bloque de lógica — cada "receta" se repetía si se necesitaba dos veces. |
| **Conexión con N1.M1.T2 (Listas y tuplas)** | Las funciones son el primer "valor que se pasa" con nombre propio; las listas serán la primera estructura que agrupa muchos valores — ambas construyen la idea de que un programa se compone de piezas con contrato, no de una sola secuencia lineal. |

## Bloque 0 — Preparación del Tutor

**Recuperación (cierre de N0):** 1) ¿Cómo se lee un traceback? 2) ¿Qué distingue un `SyntaxError` de un error de ejecución? 3) En N0 repetiste el mismo patrón de cálculo varias veces en distintos "días" (validar, convertir, calcular) — ¿alguna vez sentiste que estabas copiando el mismo bloque de lógica dos veces?

**Diagnóstico relámpago:** *"¿Qué crees que hace `print()` que `return` no hace, y qué hace `return` que `print()` no hace? No expliques con jerga — con tus palabras."*

**Problema motivador:** *"Necesito calcular el área de un círculo tres veces en mi programa, con radios distintos, y usar cada resultado en un cálculo posterior distinto — no solo mostrarlo en pantalla."* No resoluble con lo de N0: `print()` no te devuelve nada que puedas guardar y reutilizar.

**Errores deliberados a inyectar:**
1. `def area(radio): print(3.1416 * radio ** 2)` — usado como `resultado = area(5); print(resultado + 10)` → falla porque `resultado` es `None` (la función imprime, pero no devuelve nada que sumar). Clase: **confundir `print` con `return`** — documentado como sección propia en CMU 15-112 ("Print versus Return"), no un error menor.
2. Una variable creada DENTRO de una función, usada fuera de ella → `NameError`. Clase: **scope — lo que nace dentro de una función muere con ella**.

## Bloque 1 — Intuición, analogía e historia

**Hook:** *"Hasta hoy, tu código era una receta larga escrita de una sola vez. Hoy aprendes a escribir la receta UNA vez y usarla las veces que quieras, con ingredientes distintos cada vez."*

**Analogía (desarrollada, verificada como predictiva):** una función es una **máquina expendedora con contrato**: metes exactamente lo que el contrato pide (los parámetros), la máquina hace su proceso interno sin que lo veas, y te entrega exactamente lo que prometió (el `return`) — nunca "muestra" el producto por su cuenta en la calle, te lo entrega a ti para que hagas lo que quieras con él. **Prueba de que es predictiva:** un estudiante que solo recuerde esta imagen puede predecir correctamente que `resultado = area(5)` guarda el producto entregado, mientras que si la función solo "muestra" el producto en un cartel (`print`), `resultado` se queda con las manos vacías (`None`) — exactamente el error deliberado del Bloque 0.

**Historia (costo real):** antes de que los lenguajes tuvieran subrutinas (FORTRAN, 1957, entre los primeros en popularizarlas), los programadores copiaban y pegaban el mismo bloque de instrucciones cada vez que lo necesitaban — y cuando ese bloque tenía un error, había que corregirlo en cada copia, una por una. La función no es una comodidad moderna: es la respuesta directa a un problema real y costoso de la historia de la programación.

## Bloque 2 — Conflicto cognitivo

```python
def area(radio):
    print(3.1416 * radio ** 2)

resultado = area(5)
print(resultado + 10)
```

**Predicción esperada:** ¿qué imprime la primera llamada, y qué pasa con la segunda línea?

La sorpresa: la primera llamada SÍ muestra `78.54` en pantalla — parece que "funcionó". Pero `resultado` no vale `78.54`: vale `None`, porque la función nunca usó `return`. La segunda línea explota con `TypeError: unsupported operand type(s) for +: 'NoneType' and 'int'`. El estudiante que ve la salida correcta de la primera línea asume que la función "devolvió" ese número — pero mostrarlo y devolverlo son dos acciones completamente distintas.

## Bloque 3 — Explicación rigurosa con la máquina a la vista

**El modelo de funciones (con respaldo de MIT 6.0001 L4):** una función tiene cero o más entradas (parámetros) y algo que devuelve. Solo se ejecuta cuando se **llama**, y toda la llamada se reemplaza por su valor de retorno — como si esa línea del programa se transformara, en el momento exacto de la llamada, en el valor que la función entregó.

**`print` vs. `return` — la distinción central (CMU la trata como sección propia):** `print()` muestra algo en pantalla, para que un humano lo lea — y no le da al resto del programa nada que usar. `return` entrega un valor al lugar exacto donde se llamó la función, para que el programa lo use — sin mostrar nada en pantalla por sí mismo. Una función puede hacer ambas cosas, ninguna, o solo una — pero confundirlas es el error más citado en la investigación de este tema.

```python
def area(radio):
    return 3.1416 * radio ** 2

resultado = area(5)
print(resultado + 10)   # 88.54 — ahora sí funciona
```

**Modelo mental en una frase memorable:** *"Una función tiene su propio espacio de nombres, que nace cuando la llamas y muere cuando termina — lo único que sobrevive es lo que explícitamente le pediste que devolviera con `return`."*

**Scope — el entorno que nace y muere (con respaldo de UC Berkeley, CS61A):** cuando llamas una función, Python crea un **entorno nuevo y separado** — las variables que creas DENTRO de la función viven solo ahí, y desaparecen cuando la función termina. Es un concepto formal (Berkeley lo llama "frame", con su propio diagrama) — aquí lo trazamos sin la notación gráfica completa, pero con la misma idea: cada llamada tiene su propia "habitación" de variables, que se cierra al salir.

```python
def calcular():
    numero_secreto = 42
    return numero_secreto * 2

print(calcular())        # 84
print(numero_secreto)    # NameError — numero_secreto nunca existió fuera de calcular()
```

## Bloque 4 — Escalera de práctica

*Nota de densidad (DOC-11 v2.0.1): siete categorías.*

**Predecir:**
1. El conflicto del Bloque 2.
2. `def saluda(nombre): return "Hola, " + nombre` — ¿qué imprime `print(saluda("Alex"))`? ¿Y qué imprime `saluda("Alex")` sola, en una línea, sin `print`? *(caso real: en un script, una llamada sin print ni asignación no muestra nada — solo el REPL interactivo lo haría; distingue "devolver" de "mostrar automáticamente")*.
3. Dado `def duplicar(x): x = x * 2` (sin `return`), ¿qué imprime `print(duplicar(5))`?

**Leer código:**
```python
def procesar(precio, descuento):
    precio_final = precio - (precio * descuento)
    return precio_final

def aplicar_impuesto(monto):
    return monto * 1.18

total = aplicar_impuesto(procesar(100, 0.1))
print(total)
```
Sin ejecutar: ¿qué hace cada función por separado, y qué significa que el resultado de una se use directamente como entrada de la otra? Este patrón (composición de funciones) no fue enseñado explícitamente — se infiere leyendo.

**Investigar / trazar:** dado un programa con una función que tiene una variable local con el MISMO NOMBRE que una variable global (`total = 100` fuera; `def calcular(): total = 5; return total` dentro), trazar qué valor tiene `total` en cada punto del programa — pone a prueba si el estudiante entendió que son dos variables distintas que comparten nombre, no la misma variable.

**Modificar:**
1. Dada una función `es_par(n)` que usa `print()`, modificarla para que use `return` y el programa siga funcionando con el resultado.
2. Dada una función con un solo parámetro, modificarla para aceptar un segundo parámetro con un valor por defecto (`def saluda(nombre, saludo="Hola"):`) — un patrón nunca mostrado explícitamente, se infiere del propio nombre "valor por defecto".

**Refactorizar:** se entrega un programa con el mismo bloque de tres líneas repetido tres veces con distintos números — el estudiante lo convierte en una función llamada tres veces. Este es el refactor central del tema: literalmente la razón histórica de que existan las funciones (Bloque 1).

**Escribir:** función `es_primo(n)` que devuelve `True`/`False` (reutilizando el algoritmo ya diseñado en N0.T7, ahora empaquetado con nombre y contrato propios — integración real, no ejercicio aislado).

**Depurar (tres ejercicios, dificultad creciente):**
1. El error de `print` vs. `return` del Bloque 2.
2. El `NameError` de scope (variable local usada fuera).
3. *(compuesto)* Una función que **modifica un parámetro con `=` pensando que eso cambia el valor original fuera de la función** (`def resetear(x): x = 0` — llamarla no cambia la variable externa) — un error real y documentado que exige combinar el modelo de "etiquetas, no cajas" de N0.T2 con el modelo de scope de esta lección: reasignar el parámetro dentro de la función solo mueve la etiqueta local, nunca afecta a la variable de afuera.

## Bloque 5 — Laboratorio: mini-proyecto integrador

**Integración real (con N0 completo):** el proyecto reutiliza explícitamente el algoritmo de números primos de N0.T7 y el patrón de validación de entrada de N0.T6, ahora reorganizados en funciones con nombre y contrato propio — la primera vez que el estudiante reestructura conocimiento previo en piezas reutilizables, no solo lo repite.

**El proyecto — Caja de herramientas matemática:** construir tres funciones (`es_primo(n)`, `es_par(n)`, `factorial(n)`) cada una con su propio contrato claro (qué recibe, qué devuelve, qué NO hace — ninguna debe usar `print()` internamente), y un programa principal que las combine: pide un número, y usando las tres funciones, construye e imprime un reporte de una sola vez (`print()` solo aparece en el programa principal, nunca dentro de las funciones — separación real de responsabilidades).

**Trade-off explícito:** ¿debería cada función validar que su entrada es válida (por ejemplo, que `n` sea positivo), o debería confiar en que quien la llama ya validó? Costo real en ambas direcciones: validar en cada función es más seguro pero duplica lógica; confiar en el llamador es más simple pero frágil si la función se reutiliza en otro contexto que no valide.

**Argumento de corrección:** ¿las tres funciones funcionan correctamente con `n=0` y `n=1` (casos límite reales, no solo los números "bonitos" de en medio)?

**Confrontación de soluciones:** comparar dos versiones de `factorial(n)` — una iterativa (con `while` o `for`) y otra recursiva (mencionada como puente hacia N1.M3.T5) — ¿cuál es más clara para este caso concreto?

**Fase 2 — transferencia sin instrucciones repetidas:** añadir una cuarta función (`suma_digitos(n)`) sin que se le explique el patrón — debe inferir, del contrato ya practicado en las tres anteriores, que tampoco debe usar `print()` internamente y debe integrarse igual en el reporte del programa principal.

## Bloque 6 — Consolidación

**Defensa socrática:**
1. ¿Por qué `print(area(5))` puede mostrar el número correcto en pantalla aunque la función esté mal escrita (sin `return`)?
2. ¿Qué significa que una variable "muera" cuando termina una función?
3. *(inédita)* Si tuvieras que explicarle a alguien que nunca programó qué es una función, sin usar la palabra "función" ni "código", ¿qué dirías?

**Seis preguntas de excelencia:**
1. ¿Qué aprendí? Que una función tiene su propio espacio de variables, y que solo lo que se devuelve explícitamente sobrevive fuera de ella.
2. ¿Por qué existe este concepto? Porque copiar el mismo bloque de lógica muchas veces es costoso de mantener y corregir.
3. ¿Qué problema resuelve? Nombrar y reutilizar lógica, y separar "qué hace" (el contrato) de "cómo lo hace" (la implementación).
4. ¿Cómo lo usan los profesionales? Cada función de una librería real es exactamente este contrato — nunca ves su interior, solo confías en su `return`.
5. ¿Cómo se conecta con lo anterior? N0 construyó programas lineales; las funciones son el primer paso de descomposición en piezas.
6. ¿Qué pasaría si no existiera? Cada programa sería una sola secuencia gigante, sin nombres para sus partes — imposible de mantener a partir de cierto tamaño.

**Reflexión metacognitiva:**
- ¿En qué ejercicio confundiste "se ve bien en pantalla" con "funciona correctamente"?
- ¿Cómo cambiaría tu forma de escribir programas de N0 si tuvieras que reescribirlos hoy, con funciones?
- ¿Qué se sintió distinto entre razonar sobre una variable global y una variable local con el mismo nombre?

**Desafío final inédito:** dada una función `contador()` que usa una variable local para contar llamadas (`def contador(): veces = 0; veces = veces + 1; return veces`), predecir qué imprime si se llama tres veces seguidas (`print(contador()); print(contador()); print(contador())`) — y explicar por qué NO cuenta acumulativamente como uno esperaría de un contador real, conectando el resultado con el modelo de scope de esta misma lección (cada llamada crea una `veces` nueva, no reutiliza la anterior). Ningún ejercicio anterior mostró una función que "debería" acumular estado entre llamadas y no puede — prepara, sin resolverlo, el problema que los objetos (N1.M2) resolverán.

**Lectura dirigida:** [Python docs — Defining Functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions) · [CMU 15-112, Writing Functions — sección "Print versus Return"](https://www.cs.cmu.edu/~rdriley/112/notes/notes-writing-functions.html).

**Beyond the Curriculum:** *"Lo que hoy sientes como una limitación (una función 'olvida' todo entre llamadas) es exactamente el problema que los objetos van a resolver en N1.M2 — y que los decoradores (N2) resolverán de otra forma distinta, envolviendo funciones con memoria propia."*

## 4. Criterio de dominio — siete capacidades

| # | Capacidad | Instrumento en esta lección |
|---|---|---|
| 1 | Explicar | Bloque 6, defensa + pregunta de excelencia |
| 2 | Predecir | Bloque 4, "predecir" (3) |
| 3 | Detectar errores | Bloque 4, "leer código" + Bloque 0, errores deliberados |
| 4 | Corregir | Bloque 4, "depurar" (3, incluido el caso compuesto de reasignación de parámetro) |
| 5 | Modificar | Bloque 4, "modificar" (2) + "refactorizar" |
| 6 | Aplicar en contexto nuevo | Bloque 6, desafío final (función-contador que no acumula, puente a N1.M2) |
| 7 | Usar en un proyecto | Bloque 5, caja de herramientas matemática integrando N0.T6/T7 |

**Instrumento DOC-02:** RM-03 + TD-01 (SYL-N1: estándar de tema). Evidencia observable: ante un problema nuevo, propone la división en funciones antes de codificar, y predice la salida de código con ámbitos anidados sin ejecutarlo (evidencia de dominio ya declarada en SYL-N1).

## 4bis. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Clasificación |
|---|---|---|---|---|---|---|
| [MIT 6.0001 — Lecture 4](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/6ba59859535f1566dd57a7279aeba5d1_MIT6_0001F16_Lec4.pdf) | MIT OpenCourseWare | EN | ~50 min | Introductorio | Fuente directa del modelo de scope-como-entorno de esta lección | 🟢 Antes de estudiar |
| [Python docs — Defining Functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions) | Python Software Foundation | EN | ~15 min | Introductorio | Referencia oficial exacta de `def`, parámetros y `return` | 🔵 Durante la lección |
| [CMU 15-112 — Writing Functions](https://www.cs.cmu.edu/~rdriley/112/notes/notes-writing-functions.html) | Carnegie Mellon | EN | ~20 min | Introductorio | Origen de la sección "Print versus Return" que respalda el conflicto central | 🟣 Después de terminar |
| [CS61A — Environment Diagrams](https://cs61a.org/study-guide/environments-hof/) | UC Berkeley | EN | ~20 min | Intermedio | Para quien quiera ver la notación formal completa de frames, más allá de lo enseñado aquí | ⭐ Profundización opcional |

## Registro de observaciones

| # | Fecha | Observación | Categoría |
|---|---|---|---|
| — | *(pendiente)* | — | — |
