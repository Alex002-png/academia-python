# N0 · T2 — Variables: etiquetas, no cajas

> **Estado:** Desarrollo ✅ · Validación 🔶 En curso (recuperación de T1 ya impartida — ver §6; Bloques 2–6 aún no impartidos en vivo) · Investigación ✅ [`n0-t2-variables.md`](../../investigacion/n0-t2-variables.md) — reconstrucción bajo **DOC-11 v2.0.1 (Estándar de Excelencia Mundial)**. 2 ajustes reales: matiz honesto sobre el modelo de "caja" en asignación simple (Hermans & Swidan, 2018); nuevo error deliberado de nombres que sombrean funciones incorporadas (CMU).
>
> Primera lección real de la Academia construida bajo DOC-11 (v1.0.0, julio 2026). Con su aprobación se inauguró la etapa de construcción del contenido vivo. Esta versión la reconstruye bajo el estándar de excelencia mundial sin descartar nada de lo que ya funcionaba — lo eleva.

*El contenido de los Bloques 1, 3 y 4 conserva y eleva el material ya publicado y validado en producción (campus, "Día 2"); DOC-03 §7 ya estableció que N0 no se reescribe — este documento formaliza y densifica esa lección bajo el nuevo estándar sin sustituir lo que ya funciona. El registro de observaciones reales (§6) se conserva íntegro: es evidencia real de Alex, nunca se reescribe.*

## Ficha de control

| Campo | Valor |
|---|---|
| **Dirección** | N0.M1.T2 |
| **Título** | Variables: etiquetas, no cajas |
| **La gran pregunta de la lección** | ¿Qué significa realmente que un programa "recuerde" algo? |
| **Prerrequisitos** | N0.M1.T1 (el intérprete ejecuta línea por línea; `print()`; strings vs. expresiones) |
| **Competencias servidas** | C-N0-01 |
| **Duración** | Heurística, no plazo (14.2). Bajo DOC-11 v2.0.1: la escalera de esta lección ronda 16 ejercicios reales entre sus siete categorías, más un laboratorio en dos fases — varias sesiones reales, no una tarde. |
| **Conexión con la lección anterior** | T1 dejó al estudiante ejecutando instrucciones aisladas, una detrás de otra, sin que ninguna recuerde nada de la anterior — la tensión que T2 resuelve. |
| **Conexión con la siguiente lección (T3, Tipos de datos)** | T2 enseña a **nombrar** un valor; deja abierta la pregunta de qué *es* ese valor por dentro — la confusión entre `10` y `"10"` que esta misma lección provoca deliberadamente es, literalmente, el conflicto cognitivo con el que T3 abre. |

## Bloque 0 — Preparación del Tutor

**Preguntas de recuperación activa** (de memoria, sin material a la vista):
1. ¿Qué muestra cada una de estas líneas, y qué hace Python de manera diferente en cada caso? `print("4 * 2")` / `print(4 * 2)` — *respuesta esperada: la primera imprime literalmente el texto "4 * 2"; la segunda evalúa la expresión y muestra 8.*
2. Desde que pulsas Ejecutar hasta que aparece el resultado: ¿quién lee tu programa y en qué orden lo procesa? — *el intérprete, línea por línea, en el orden en que están escritas.*
3. Sin ejecutarlo: `print("hola` (falta la comilla y el paréntesis de cierre) — ¿qué hará Python y por qué? ¿Cómo lo corrige? — *SyntaxError; se corrige añadiendo `")`.*

**Diagnóstico relámpago:** *"Si te dijera que en programación existen las 'variables', ¿qué crees que son?"* — la respuesta casi universal en un principiante absoluto es alguna versión de "una caja donde guardas un valor". Se anota sin corregir: es exactamente la intuición que el Bloque 2 va a poner a prueba — y, según la investigación de esta versión, una intuición que no está simplemente "mal": está incompleta.

**El problema antes que nada:** *"Quiero que tu programa recuerde tu nombre y lo salude dos veces, cambiándolo una vez en el medio — y quiero que lo haga sin escribir el nombre tres veces."* No resoluble aún con T1. Regresa resuelto en el Bloque 5.

**Errores deliberados a inyectar:**
1. **Error de tipo (evidencia real, SYL-N0, Observación O-01):** al pedir crear `contador` con valor `10`, el estudiante escribió `contador = "10"` (comillas incluidas). Clase: **confusión string/entero en la frontera de asignación** — la misma que T3 formaliza. Se usa deliberadamente en el Bloque 2.
2. **Error de modelo (`x = x + 1`):** quien piensa "caja" objeta que la ecuación "no tiene sentido". Clase: **confundir asignación con ecuación matemática**.
3. **Nuevo (v2.0.1 — hallazgo de la investigación, respaldo CMU):** `list = "mi lista de compras"`. No produce ningún error visible — Python lo acepta sin quejarse. Clase: **sombrear (shadow) un nombre incorporado del lenguaje** — silenciosa y más peligrosa que las dos anteriores precisamente porque no truena: `list` deja de significar lo que significaba, y el efecto solo aparece más adelante, cuando el estudiante intente usar `list()` de verdad y falle con un mensaje que no menciona esta línea.

## Bloque 1 — Intuición, analogía e historia

**Hook:** *"Un programa sin variables es una calculadora de un solo uso. Hoy aprendes a darle MEMORIA: nombrar valores, guardarlos y transformarlos — el primer ladrillo de todo sistema que construirás en los próximos años. Sin variables no hay memoria; sin memoria no hay programas: ni un videojuego que recuerde tu puntaje, ni un carrito de compras, ni una IA que recuerde tu pregunta."*

**Historia real:** en los años 50, las "variables" eran direcciones crudas de memoria — `MOV AX, [0x4F2A]` — y los programadores memorizaban números hexadecimales. FORTRAN y ALGOL introdujeron nombres simbólicos y liberaron al programador de esa carga. Python heredó esa línea y añadió su modelo propio: todo es un objeto, y los nombres son etiquetas hacia ellos.

**Analogía (verificada como predictiva):** una variable es como el número de turno de la farmacia — una etiqueta que *apunta* a ti, no una copia tuya. Si te llaman por otro número, tu turno no cambió: cambió a quién apunta la etiqueta. Un estudiante que solo recuerde esta imagen ya puede predecir correctamente qué pasa cuando dos variables "apuntan" al mismo valor.

## Bloque 2 — Conflicto cognitivo

> Alguien te pide crear una variable `contador` con el valor diez y luego cambiarla a veinticinco. Escribe: `contador = "10"`. Ejecuta `print(contador + 1)`. Python no dice "11" — lanza `TypeError: can only concatenate str (not "int") to str`.

El estudiante, con el modelo de "caja" todavía activo, esperaría que "10" y 10 fueran básicamente lo mismo dentro de la caja. **No lo son.** La variable no guardó un número: guardó una etiqueta apuntando a un objeto *string* que por casualidad se ve como un número. Aquí se corrige el modelo, no el síntoma (que T3 resolverá del todo).

## Bloque 3 — Explicación rigurosa con la máquina a la vista

**El modelo mental correcto:**

> Una variable NO es una caja que guarda un valor — es una **etiqueta** que apunta a un objeto en memoria.

`precio = 100` significa: crea el objeto `100` en memoria, y ponle la etiqueta `precio`. Si luego escribes `precio = 200`, la etiqueta se mueve a otro objeto — el `100` original no se modifica, solo deja de tener esa etiqueta puesta encima.

```python
precio = 100
precio_final = precio   # otra etiqueta al MISMO objeto
precio = 200             # solo se mueve la etiqueta precio
print(precio)            # 200
print(precio_final)      # 100 — no cambió
```

Traza en la máquina nocional: tras la línea 1, existe un objeto `100` con la etiqueta `precio`. Tras la línea 2, `precio_final` es una *segunda* etiqueta sobre ese *mismo* objeto — no una copia. Tras la línea 3, se crea un objeto nuevo `200` y la etiqueta `precio` se despega del `100` y se pone sobre el `200`; `precio_final` nunca se movió. De ahí que impriman valores distintos.

**Honestidad sobre el modelo de "caja"** *(ajuste real de la investigación — Hermans & Swidan, 2018, experimento controlado con 496 programadores novatos)*: pensar en una caja no te perjudica cuando solo hay **una** asignación aislada — en ese caso, incluso funciona un poco mejor en la evidencia real. El problema aparece exactamente aquí, cuando hay una **segunda** asignación o una **segunda** etiqueta sobre el mismo valor — el escenario exacto de arriba. Esta lección no rechaza "caja" por dogma: la evidencia real dice que falla justo donde esta lección necesita que aciertes, y por eso se enseña "etiqueta" desde el principio.

**Nombres profesionales (PEP 8):** convención `snake_case` — minúsculas con guiones bajos, descriptivos. `precio_total` ✓ · `PrecioTotal` ✗ · `pt` ✗ · `x` ✗. Un programa se lee muchas más veces de las que se escribe.

**Nombres prohibidos en la práctica (v2.0.1 — CMU):** nunca nombres una variable igual que algo que Python ya usa (`list`, `str`, `type`, `id`, `input`, `int`, `len`, `sum`, `dict`, `set`, entre otros) — no produce error, pero sombrea silenciosamente esa función para el resto del programa.

## Bloque 4 — Práctica en escalera

*Nota de densidad (DOC-11 v2.0.1): siete categorías, ~16 ejercicios reales — cada uno prueba una variación que los anteriores no probaron.*

**Predecir:**
1. `x = 5; x = x + 1; print(x)` — ¿qué imprime, y cómo puede `x` ser igual a `x + 1`?
2. `a = 3; b = a; a = 9; print(b)` — ¿cambió `b`?
3. `nombre = "Alex"; nombre = nombre + " Guerra"; print(nombre)` — ¿es esto el mismo tipo de operación que `x = x + 1`, con otro tipo de dato?

**Leer código** *(categoría propia, v2.0.1 — dos fragmentos)*:

*Fragmento 1:*
```python
saldo = 500
retiro = 150
saldo = saldo - retiro
mensaje = "Saldo actual: " + str(saldo)
print(mensaje)
```
Explicar, sin ejecutar: qué valor tiene `saldo` al final, por qué `str(saldo)` es necesario ahí y qué pasaría si se omitiera (conecta con el `TypeError` del Bloque 2).

*Fragmento 2 (con el error silencioso del Bloque 0, para detectar sin que se le avise):*
```python
list = ["pan", "leche"]
total = len(list)
print(total)
```
El estudiante debe reconocer que, aunque este fragmento específico "funciona", `list` ya no significa lo que significaba para el resto de cualquier programa que lo reutilice — un riesgo, no un error visible.

**Investigar / trazar:**
1. `x = 5; y = x; x = 9` → ¿cuánto vale `y`? Traza objeto por objeto.
2. `a = 1; b = 2; a = b; b = 3` → ¿cuánto valen `a` y `b` al final? *(dos reasignaciones cruzadas — más denso que el caso anterior)*.

**Modificar:**
1. Dado `precio = 100`, crear `precio_final` que apunte al valor de `precio` (usando la variable) e imprimir ambas.
2. Dado un programa de tres variables (`nombre`, `edad`, `ciudad`) impresas por separado, modificarlo para construir una sola variable `resumen` que las combine en un string, sin cambiar los valores originales.

**Refactorizar** *(categoría propia, v2.0.1)*: el siguiente código funciona pero repite la misma variable de forma innecesaria —
```python
temperatura = 20
temperatura = temperatura + 0
print(temperatura)
```
identificar por qué la segunda línea no cumple ninguna función real, y refactorizar un segundo caso entregado ya roto en el mismo estilo (una reasignación a sí mismo sin operación real).

**Escribir (escalera con transferencia genuina):**
1. *Primera etiqueta:* crear `nombre` con el valor `"Alex"` e imprimirla usando la variable.
2. *La etiqueta se mueve:* crear `contador` con valor `10`, reasignarla a `25`, imprimir — la salida debe ser `25` y el `10` debe seguir presente en el código.
3. *Dos etiquetas:* dado `precio = 100`, crear `precio_final` que apunte a `precio` e imprimir ambas.
4. *Combinar tres variables:* crear `producto`, `precio_unitario` y `cantidad`, e imprimir un mensaje que combine las tres sin repetir ningún valor literal dos veces.

**Depurar** *(tres ejercicios, dificultad creciente)*:
1. El error real del Bloque 0 (`contador = "10"`) — diagnosticar por qué `print(contador + 1)` falla sin que se diga de antemano que es un problema de tipo.
2. Un `NameError` por usar una variable antes de crearla (`print(saldo); saldo = 100` en ese orden) — conecta con el modelo del intérprete secuencial de T1: el error no está en la línea que falla, está en el orden.
3. *(compuesto)* El caso `list = [...]` del Bloque 0/4 — el programa "funciona" pero el estudiante debe predecir en qué escenario futuro (usar `list()` más adelante en el mismo programa) este código dejaría de funcionar, sin que ese escenario se le muestre todavía ejecutándose.

## Bloque 5 — Laboratorio: mini-proyecto integrador

**Excepción parcial justificada (DOC-11 v2.0.1 exige integrar ≥2 lecciones previas; T2 solo tiene una lección anterior, T1):** se integra T1 (literales, `print()`, expresiones) en profundidad con el contenido propio de T2, en vez de dos lecciones distintas — la primera vez en la Academia en que la integración cruzada real (T1+T2+T3...) es posible sin excepción será a partir de T3.

**El proyecto — Intercambio de monedas, con recibo:** partiendo de `moneda_izquierda = "sol"` y `moneda_derecha = "dolar"`, (1) intercambiar sus valores usando una **variable auxiliar** — prohibido reasignar los textos a mano — y (2) imprimir el resultado como un recibo con bordes, reutilizando literalmente el formato de bordes de `=` del laboratorio de T1 (integración real y citable: N0.M1.T1, Bloque 5).

**Confrontación de soluciones — no aplica en esta lección, con justificación explícita (se mantiene de la versión anterior, sigue siendo válida):** el intercambio mediante tuplas (`a, b = b, a`) es la alternativa real en Python, pero usa asignación múltiple que T2 todavía no enseñó — no existe, en este punto del recorrido, una segunda solución legítima sin adelantar contenido.

**Trade-off explícito:** usar una variable auxiliar cuesta una línea y un nombre más que "hacerlo a mano" — pero es la única forma honesta de resolverlo sin ya saber el resultado de antemano.

**Argumento de corrección:** el estudiante debe enumerar qué pasaría si las variables empezaran con otros valores — la solución debe funcionar para cualquier par, no solo para "sol"/"dolar".

**Fase 2 — transferencia sin instrucciones repetidas:** con el mismo método, sin repetir el procedimiento, intercambiar dos variables numéricas propias (elegidas por el estudiante, no texto) y verificar que el mismo patrón de variable auxiliar funciona igual para números que para strings — prueba directa de que el estudiante generalizó el mecanismo y no memorizó el ejemplo de monedas.

## Bloque 6 — Consolidación

**Defensa socrática:**
1. Explica con tus palabras qué significa `precio_final = precio`. ¿Se copió el valor, o pasó otra cosa?
2. Si `x = 5` y luego `x = x + 1`, ¿por qué eso no es una contradicción matemática?
3. *(inédita)* Si tuvieras que explicarle a alguien que nunca programó por qué `contador = "10"` es un error diferente a `contador = 10`, ¿qué le dirías sin usar la palabra "tipo"?

**Seis preguntas de excelencia:**
1. ¿Qué aprendí? Que una variable es una etiqueta sobre un objeto, no un contenedor.
2. ¿Por qué existe este concepto? Porque un programa sin memoria es una calculadora de un solo uso.
3. ¿Qué problema resuelve? Nombrar y reutilizar valores sin repetirlos, y permitir que cambien.
4. ¿Cómo lo usan los profesionales? Cada estado de un sistema real vive en variables; PEP 8 gobierna cómo se nombran.
5. ¿Cómo se conecta con lo anterior? T1 ya ejecutaba instrucciones; T2 les da algo que persiste entre ellas.
6. ¿Qué pasaría si no existiera? Cada valor tendría que reescribirse literalmente cada vez.

**Reflexión metacognitiva** *(v2.0.1)*:
- ¿En qué momento de esta lección tu modelo de "caja" dejó de alcanzar para predecir correctamente?
- Si tuvieras que enseñarle "etiqueta, no caja" a alguien en un minuto, ¿qué ejemplo usarías — el mismo de esta lección u otro tuyo?
- ¿Qué error del Bloque 4 te costó más aceptar como error, aunque ya sabías la regla?

**Desafío final inédito:** dado el código
```python
a = 10
b = 20
a = b
b = a
```
predecir el valor final de `a` y `b` **antes de ejecutar**, y explicar por qué este código, que parece un intercambio, en realidad no intercambia nada (`b` termina apuntando al mismo valor que `a`, porque para cuando se ejecuta la línea 4, `a` ya se movió). Ningún ejercicio anterior mostró un intento de intercambio *fallido* — solo el correcto (con variable auxiliar) — el estudiante debe usar el modelo de etiquetas para diagnosticar por qué esta versión, más corta y aparentemente razonable, no funciona.

**Lectura dirigida:** [MIT 6.0001, Lecture 2 — slides](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/pages/lecture-slides-code/) · PEP 8, sección de convenciones de nombres.

**Beyond the Curriculum:** *"¿Y si dos variables apuntan al mismo objeto y ese objeto pudiera cambiarse desde adentro (no reasignarse, sino mutarse)? Eso es exactamente lo que vuelve interesantes —y peligrosas— a las listas, en N1.M1.T2."*

## 4. Criterio de dominio — siete capacidades

| # | Capacidad | Instrumento en esta lección |
|---|---|---|
| 1 | Explicar | Bloque 6, defensa + pregunta de excelencia 1 |
| 2 | Predecir | Bloque 4, "predecir" (3) |
| 3 | Detectar errores | Bloque 4, "leer código" (2, incluido el error silencioso de nombre) |
| 4 | Corregir | Bloque 4, "depurar" (3, dificultad creciente) |
| 5 | Modificar | Bloque 4, "modificar" (2) + "refactorizar" |
| 6 | Aplicar en contexto nuevo | Bloque 6, desafío final (intercambio fallido) + Bloque 5, Fase 2 |
| 7 | Usar en un proyecto | Bloque 5, mini-proyecto de intercambio con recibo integrado a T1 |

**Instrumento DOC-02:** escalera + reto autocorregidos (RM-03) + defensa breve TD-01 (RM-05) — compuerta de tema conforme a SYL-N0 §4.

## 4bis. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Clasificación |
|---|---|---|---|---|---|---|
| [MIT 6.0001 — Lecture 2](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/pages/lecture-slides-code/) | MIT OpenCourseWare | EN | ~50 min video | Introductorio | Fuente directa del vocabulario "ligar un nombre a un valor" que esta lección usa como respaldo técnico de "etiqueta" | 🟢 Antes de estudiar |
| [CS61A — Environment Diagrams](https://cs61a.org/study-guide/environments-hof/) | UC Berkeley | EN | ~20 min lectura | Introductorio | Muestra el mismo modelo con notación gráfica formal — útil para visualizar la traza del Bloque 3 de otra forma | 🔵 Durante la lección |
| [Hermans & Swidan — "Thinking out of the Box"](https://www.semanticscholar.org/paper/Thinking-out-of-the-box:-comparing-metaphors-for-in-Hermans-Swidan/871d4c052a06e2caab0f577aa1c0818c8a3fb50f) | F. Hermans, A. Swidan (TU Delft) | EN | ~25 min lectura | Avanzado | El estudio real detrás del matiz sobre "caja" del Bloque 3 — para quien quiera ver la evidencia completa, no solo la conclusión | 🟣 Después de terminar |
| [CMU 15-112 — Style Guide](https://www.cs.cmu.edu/~112-f22/notes/notes-style.html) | Carnegie Mellon | EN | ~10 min lectura | Introductorio | Respaldo directo del error deliberado nuevo de esta versión (nombres que sombrean funciones incorporadas) | ⭐ Profundización opcional |

## Registro de observaciones de ejecución *(DOC-11 §6 — práctica permanente; se completa tras cada sesión real)*

| # | Fecha | Observación | Categoría |
|---|---|---|---|
| 1 | 2026-07-19 | En la recuperación de T1 (Bloque 0), Alex respondió correctamente `print(4 * 2)` → 8, correctamente el diagnóstico de `print("hola` (SyntaxError, se arregla con `")`), y con precisión menor "quién ejecuta el programa" (dijo "la computadora"; se afinó a "el intérprete"). **Pero respondió `print("4 * 2")` → "42"**, no el texto literal esperado — reveló una confusión real no anticipada exactamente en esta forma: parece tratar el contenido de un string como si aun así se evaluara/concatenara, perdiendo el `*` y los espacios. Se le pidió explicar su razonamiento (Socrático) antes de corregir; respuesta pendiente al momento de este registro. | Error espontáneo no previsto en el Bloque 0 original — candidato a incorporarse como bug deliberado adicional en una futura revisión de T1/T2 si se repite con otros estudiantes (DOC-03 §8bis, validación ascendente). También referenciado desde el §6 de N0·T1. |

*Categorías de referencia: mayor conflicto cognitivo real · explicación con mayor cambio de modelo mental · ejercicio demasiado fácil/difícil · pregunta socrática más productiva · duración real por bloque · errores espontáneos no previstos.*
