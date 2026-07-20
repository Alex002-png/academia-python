# N1.M1.T2 — Listas y tuplas

> **Estado:** Desarrollo ✅ · Validación ⏳ Pendiente · Investigación ✅ [`n1-m1-t2-listas-tuplas.md`](../../investigacion/n1-m1-t2-listas-tuplas.md) — construida bajo DOC-11 v2.0.1 (Estándar de Excelencia Mundial). Reemplaza una versión anterior más ligera cuyo Bloque 0 aún citaba el T1 incorrecto ("Decoradores y closures", corregido por EVT-030) — reconstruida para citar el T1 real (Funciones a fondo) y para completar la escalera de 7 categorías, el §4bis de Recursos y el Bloque 6 completo que el estándar v2.0.1 exige. **Autocorrección posterior:** el objetivo de T2 en SYL-N1 promete "recorrido" (traversal) pero la primera versión de esta reconstrucción usaba `for` en el Bloque 0 y en un ejercicio sin haberlo enseñado nunca como sintaxis nueva — detectado al preparar T3 y corregido aquí, añadiendo el bloque de teoría "Recorrido — el for sobre una lista" antes de que la deuda se propagara a T3-T8.
>
> Motor de ejecución: **Pyodide (Python real en el navegador)**.

## Ficha de control

| Campo | Valor |
|---|---|
| **Dirección** | N1.M1.T2 |
| **Gran pregunta del módulo (M1)** | ¿Cómo organizamos programas para que sigan siendo comprensibles cuando crecen? |
| **Gran pregunta de esta lección** | Si dos nombres distintos pueden apuntar exactamente a la misma lista, ¿qué significa realmente "copiar" una colección? |
| **Prerrequisitos** | N1.M1.T1 (funciones); N0.T5 (strings — el slicing transfiere directo); N0.T2 (etiquetas, no cajas) |
| **Competencias** | C-N1-01 |
| **Duración** | Heurística. Escalera densa (7 categorías) + laboratorio integrador + desafío final. |
| **Conexión con N0** | N0.T5 ya usó indexado y slicing — pero sobre strings, **inmutables**. Hoy la misma sintaxis exacta se aplica a listas, **mutables** — mismo mecanismo, consecuencia completamente distinta. N0.T2 ya sembró "etiquetas, no cajas" con enteros; hoy esa idea se vuelve visible y peligrosa por primera vez. |
| **Conexión con N1.M1.T3 (Diccionarios y sets)** | Las listas fueron la primera colección ordenada por posición; los diccionarios serán la primera colección ordenada por clave propia — ambas heredan el mismo riesgo de aliasing por ser mutables. |

## Bloque 0 — Preparación del Tutor

**Recuperación (T1):** 1) ¿Qué diferencia exactamente `print` de `return`? 2) ¿Qué significa que una variable "muera" cuando termina una función?

**Diagnóstico relámpago:** *"Si haces `b = a` con dos números y luego cambias `a`, ¿cambia `b`? ¿Crees que pasaría lo mismo con una lista?"*

**Problema motivador:** *"Quiero que una función agregue un producto a mi carrito de compras, y que ese cambio se vea reflejado en el programa principal, sin tener que hacer `return` de nada."* No resoluble sin entender mutabilidad — con lo de N0/T1 (todo inmutable) esto sería imposible sin `return`.

**Errores deliberados a inyectar:**
1. `a = [1, 2, 3]; b = a; a.append(4); print(b)` → sorpresa: `b` también tiene el `4`. Clase: **aliasing — `b = a` no copia, apunta al mismo objeto**.
2. Eliminar elementos de una lista mientras se recorre con `for` (`for x in lista: if cond: lista.remove(x)`) → salta elementos silenciosamente. Clase: **mutar una colección mientras se itera sobre ella es peligroso, aunque no siempre truene**.

## Bloque 1 — Intuición, analogía e historia

**Hook:** *"Hasta ahora, cada dato vivía solo. Hoy agrupas muchos datos bajo un solo nombre — y descubres que ese nombre puede tener 'compañeros de cuarto' que no esperabas."*

**Analogía (verificada como predictiva):** una lista es una **libreta compartida**, no una libreta fotocopiada. Si le das tu libreta a alguien (`b = a`), le diste la MISMA libreta física — si esa persona tacha una línea, tú ves el tachón la próxima vez que la abras, porque es literalmente el mismo objeto. Sacarle una fotocopia (`b = a[:]`) es una acción **deliberada y distinta** de simplemente prestarla. **Prueba de que es predictiva:** un estudiante que recuerde solo esta imagen predice correctamente que `b.append(x)` después de `b = a` también afecta a `a` — es la misma libreta — mientras que después de `b = a[:]` no la afecta — son libretas distintas.

**Historia (costo real):** en C, los arrays son de tamaño fijo, reservado de antemano — agregar un elemento de más exige pedir memoria nueva y copiar todo a mano, línea de código explícita incluida. Las listas dinámicas de Python esconden ese manejo de memoria por ti — pero el precio exacto de esa comodidad es que los nombres pasan a ser **referencias**, no copias: el aliasing no es un defecto de diseño, es la contraparte directa de no tener que gestionar memoria a mano.

## Bloque 2 — Conflicto cognitivo

```python
carrito_alex = ["manzana", "pan"]
carrito_compartido = carrito_alex
carrito_compartido.append("leche")
print(carrito_alex)
```

**Predicción esperada:** ¿`carrito_alex` tiene 2 o 3 elementos?

La sorpresa: **3**. `carrito_compartido` nunca fue una copia — es otro nombre para exactamente la misma lista. Modificarla desde cualquiera de los dos nombres modifica "la" lista, porque solo hay una.

## Bloque 3 — Explicación rigurosa

**El modelo (ficha SYL-N1):** una lista es una **secuencia de referencias**, no de valores — dos nombres pueden apuntar a la misma lista al mismo tiempo.

**Indexado y slicing (transfieren de N0.T5, ahora también asignables):**
```python
letras = ["a", "b", "c", "d", "e", "f"]
print(letras[0])      # 'a'
print(letras[-1])     # 'f'
print(letras[:3])     # ['a', 'b', 'c']
print(letras[-2:])    # ['e', 'f']
letras[0] = "z"        # asignar por índice — esto NO existía con strings (inmutables)
```

**Recorrido — el `for` sobre una lista (parte explícita del objetivo de esta lección):** para procesar cada elemento sin manejar índices a mano, Python ofrece `for elemento in lista:` — `elemento` toma, en cada vuelta, el valor de la siguiente posición, en orden, hasta que no quedan más. A diferencia del `while` (donde decides tú cuándo parar), un `for` sobre una lista se detiene solo, exactamente cuando la lista se agota — no hace falta ninguna condición explícita ni contador manual.

```python
frutas = ["manzana", "pera", "uva"]
for fruta in frutas:
    print(fruta)
# manzana
# pera
# uva
```

**Destructivo vs. no destructivo — el ajuste real de la investigación (respaldo directo de CMU 15-110):** algunas operaciones **modifican la lista en el sitio** (mismo objeto, mismo aliasing de siempre le afecta): `.append()`, `.remove()`, `.sort()`, `.clear()`, asignar por índice. Otras **crean una lista nueva** y dejan la original intacta: `+`, `sorted()`, el slicing completo `lista[:]`. Saber a cuál de las dos categorías pertenece un método es, literalmente, saber si tu código es seguro frente al aliasing del Bloque 2.

```python
numeros = [5, 2, 8, 1]
ordenados = sorted(numeros)   # no destructivo: numeros queda igual
print(numeros)                # [5, 2, 8, 1]
print(ordenados)              # [1, 2, 5, 8]
```

**Tuplas — la misma lectura, sin mutación posible:**
```python
coordenadas = (3, 7)
x, y = coordenadas            # unpacking
print(x, y)                   # 3 7
coordenadas[0] = 9             # TypeError: 'tuple' object does not support item assignment
```
El acceso e incluso el slicing funcionan igual que en una lista — lo único que una tupla no permite es cambiar su contenido después de creada. Por eso una tupla nunca sufre el bug del Bloque 2 de la misma forma: aunque dos nombres apunten a la misma tupla, ninguno puede mutarla.

## Bloque 4 — Escalera de práctica

*Nota de densidad (DOC-11 v2.0.1): siete categorías.*

**Predecir:**
1. El conflicto del Bloque 2.
2. `b = a[:]; a.append(9); print(b)` — con copia real, ¿cambia `b`?
3. `t = (1, 2); t[0] = 5` — ¿qué tipo de error, exactamente?

**Leer código:**
```python
def agregar_urgente(lista_tareas):
    lista_tareas.append("URGENTE: revisar")

tareas = ["comprar pan"]
agregar_urgente(tareas)
print(tareas)
```
Sin ejecutar: ¿por qué el cambio hecho DENTRO de la función se ve afuera, a diferencia de lo que pasaba en T1 cuando una función reasignaba un parámetro entero?

**Investigar / trazar:** dado un programa con `historial = actual` (alias, no copia) seguido de varias mutaciones a `actual`, trazar en qué momento exacto `historial` "cambia" — la respuesta correcta es que no cambia nunca por sí solo: siempre fue la misma lista que `actual`, así que cada mutación de `actual` ya era, al mismo tiempo, una mutación de `historial`.

**Modificar:**
1. Una función que "vacía" una lista con `lista = []` dentro de la función — no funciona (reasigna localmente, igual que en T1). Corregirla para que sí vacíe la lista original, con `lista.clear()` o `lista[:] = []`.
2. Una función que ordena una lista con `.sort()` cuando el programa necesitaba conservar el orden original — cambiarla a `sorted()`.

**Refactorizar:** código con índices mágicos sueltos (`punto[0]`, `punto[1]` repetidos varias veces) → una tupla desempaquetada una sola vez (`x, y = punto`) al principio del bloque.

**Escribir:** función `duplicar_pares(lista)` que devuelve una **lista nueva** con el doble de cada número par de la lista original (sin mutar la original) — refuerza el patrón no destructivo.

**Depurar (tres ejercicios, dificultad creciente):**
1. El aliasing del Bloque 2.
2. Eliminar elementos de una lista mientras se itera con `for` (salta elementos — el error deliberado del Bloque 0).
3. *(compuesto)* Un programa construye `historial = actual` esperando que `historial` quede "fijo" en el estado de ese momento, y sigue modificando `actual` — el estudiante debe diagnosticar por qué `historial` también cambió y corregirlo con una copia real (`actual[:]`). Combina el aliasing de esta lección con la expectativa — natural pero incorrecta — de que asignar es copiar.

## Bloque 5 — Laboratorio: mini-proyecto integrador

**Integración real (con T1):** el laboratorio reutiliza el patrón de funciones con contrato claro de T1, ahora operando sobre una colección.

**El proyecto — Registro de temperaturas:** leer temperaturas por teclado con `input()` hasta que el usuario escriba `"fin"`, guardarlas en una lista, y construir un reporte con: la lista completa, el promedio, la máxima, la mínima, y una **lista nueva, no destructiva**, con las temperaturas que superan el promedio. Al menos una función debe recibir la lista y **no mutarla** (devuelve algo nuevo); ninguna función debe usar `print()` internamente — igual que en T1, el programa principal es el único que imprime.

**Trade-off explícito:** ¿cuándo es correcto que una función mute la lista que recibió como parámetro, y cuándo eso viola lo que espera quien la llama? Costo real: mutar en el sitio ahorra memoria y es más rápido, pero sorprende a quien no lo espera (el mismo bug del Bloque 2, ahora como decisión de diseño en vez de accidente).

**Argumento de corrección:** ¿el reporte funciona con una sola temperatura? (la lista "sobre el promedio" debería quedar vacía, porque ningún valor supera su propio promedio).

**Confrontación de soluciones:** comparar calcular el promedio con un `for` manual acumulando una suma, contra `sum(lista) / len(lista)` — ¿cuál comunica mejor la intención a quien lo lee?

**Fase 2 — transferencia sin instrucciones repetidas:** el reporte debe incluir también la lista ordenada de menor a mayor, **sin alterar el orden de lectura original** — se infiere, del patrón ya practicado en el resto del laboratorio, que la herramienta correcta es `sorted()`, no `.sort()`.

## Bloque 6 — Consolidación

**Defensa socrática:**
1. ¿Por qué `b = a` seguido de `a.append(x)` también cambia lo que ves al imprimir `b`?
2. ¿Qué diferencia exactamente a `.append()` de `+` cuando ambas "agregan" algo a una lista?
3. *(inédita)* Si tuvieras que explicarle el aliasing a alguien sin usar la palabra "referencia" ni la palabra "memoria", ¿qué dirías?

**Seis preguntas de excelencia:**
1. ¿Qué aprendí? Que dos nombres pueden apuntar a la misma lista, y que copiar una colección es una acción deliberada, no automática.
2. ¿Por qué existe este concepto? Porque gestionar listas de tamaño variable sin referencias compartidas obligaría a copiar constantemente, con un costo real en memoria y velocidad.
3. ¿Qué problema resuelve? Permite que funciones y variables compartan y modifiquen la misma colección sin tener que devolverla explícitamente.
4. ¿Cómo lo usan los profesionales? Deciden con intención cuándo mutar en el sitio (rendimiento) y cuándo copiar (seguridad) — nunca por accidente.
5. ¿Cómo se conecta con lo anterior? T1 enseñó que las funciones tienen su propio entorno; hoy se descubre que ese aislamiento no protege el CONTENIDO de una lista que se le pasó como argumento.
6. ¿Qué pasaría si no existiera? Cada colección tendría que copiarse por completo en cada asignación o llamada a función — mucho más lento y mucho más memoria, incluso cuando nadie necesitaba una copia.

**Reflexión metacognitiva:**
- ¿En qué ejercicio asumiste que "asignar" era lo mismo que "copiar", y qué te hizo darte cuenta de que no lo era?
- ¿Cómo se conecta el aliasing de hoy con el modelo de scope que aprendiste en T1?
- ¿Qué harías distinto si tuvieras que revisar código ajeno buscando bugs de aliasing?

**Desafío final inédito:** un programa "protege" una configuración pasándola a una función, asumiendo que dentro de la función no se puede modificar:
```python
def crear_reporte(config):
    config.append("procesado")
    return len(config)

configuracion = ["modo_debug", "version_2"]
total = crear_reporte(configuracion)
print(configuracion)
print(total)
```
Predecir la salida exacta ANTES de ejecutar, y explicar por qué la "protección" asumida es falsa — y qué haría falta cambiar (pasar una copia, o convertir `configuracion` en una tupla si nunca debía cambiar) para que la función no pueda alterarla. Conecta directamente con la pregunta ingenieril de la ficha: ¿cuándo elegirías una tupla sabiendo que te quita flexibilidad?

**Lectura dirigida:** [MIT 6.0001 — Lecture 5, Tuples, Lists, Aliasing, Mutability, and Cloning](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/lecture-videos/lecture-5-tuples-lists-aliasing-mutability-and-cloning/) · [CMU 15-110 — Aliasing and Mutability](https://www.cs.cmu.edu/~15110-s20/slides/week6-2-aliasing.pdf).

**Beyond the Curriculum:** *"Este mismo problema — que mutar una colección compartida puede tener efectos que no esperabas — es la razón por la que muchos frameworks modernos de interfaces (React, en el mundo JavaScript) tratan 'nunca mutar el estado directamente' como una regla de oro. No es una manía del framework: es exactamente el bug del Bloque 2, a escala de una aplicación completa. Y es el mismo problema, otra vez a otra escala, que las bases de datos con transacciones (N2) resuelven: ¿qué pasa cuando dos 'nombres' del sistema apuntan al mismo dato compartido?"*

## 4. Criterio de dominio — siete capacidades

| # | Capacidad | Instrumento en esta lección |
|---|---|---|
| 1 | Explicar | Bloque 6, defensa + pregunta de excelencia |
| 2 | Predecir | Bloque 4, "predecir" (3) |
| 3 | Detectar errores | Bloque 4, "leer código" + Bloque 0, errores deliberados |
| 4 | Corregir | Bloque 4, "depurar" (3, incluido el caso compuesto historial/actual) |
| 5 | Modificar | Bloque 4, "modificar" (2) + "refactorizar" |
| 6 | Aplicar en contexto nuevo | Bloque 6, desafío final (configuración "protegida" que no lo estaba) |
| 7 | Usar en un proyecto | Bloque 5, registro de temperaturas integrando funciones de T1 |

**Instrumento DOC-02:** RM-03 + TD-01. Evidencia observable: predice correctamente los efectos del aliasing y justifica lista vs. tupla en un caso dado (evidencia de dominio ya declarada en SYL-N1).

## 4bis. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Clasificación |
|---|---|---|---|---|---|---|
| [MIT 6.0001 — Lecture 5](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/lecture-videos/lecture-5-tuples-lists-aliasing-mutability-and-cloning/) | MIT OpenCourseWare | EN | ~50 min | Introductorio | Lección dedicada exactamente a este alcance: tuplas, listas, aliasing, mutabilidad y clonado | 🟢 Antes de estudiar |
| [Python docs — More on Lists](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists) | Python Software Foundation | EN | ~15 min | Introductorio | Referencia oficial exacta de los métodos de lista usados en esta lección | 🔵 Durante la lección |
| [CMU 15-110 — Aliasing and Mutability](https://www.cs.cmu.edu/~15110-s20/slides/week6-2-aliasing.pdf) | Carnegie Mellon | EN | ~20 min | Introductorio | Origen directo del contraste destructivo/no-destructivo de esta lección | 🟣 Después de terminar |
| [Catalogs of C and Python Antipatterns by CS1 Students](https://arxiv.org/pdf/2104.12542) | Investigación CS-Ed (arXiv) | EN | ~30 min | Avanzado | Evidencia empírica real de que el aliasing es una fuente medida de bugs en estudiantes, no una preocupación teórica | ⭐ Profundización opcional |

## Registro de observaciones

| # | Fecha | Observación | Categoría |
|---|---|---|---|
| — | *(pendiente)* | — | — |
