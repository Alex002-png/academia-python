# N0.T1 — Tu primer programa

> **Estado:** Desarrollo ✅ · Validación ⏳ Pendiente · Investigación ✅ [`n0-t1-tu-primer-programa.md`](../../investigacion/n0-t1-tu-primer-programa.md) — primera lección construida bajo **DOC-11 v2.0.0 (Estándar de Excelencia Mundial)**. Primera reconstrucción completa de N0.

*Primera lección real de toda la Academia. T1 nunca tuvo documento de lección propio bajo DOC-11 — su contenido vivía solo en producción. Esta versión lo formaliza y lo eleva, conservando íntegro lo ya validado (el conflicto `print("2+3")` vs. `print(2+3)`, el desafío del recibo) y añadiendo lo que la investigación y el nuevo estándar exigen: vocabulario técnico explícito, anatomía de errores, lectura y refactorización de código, y un mini-proyecto de cierre.*

## Ficha de control

| Campo | Valor |
|---|---|
| **Dirección** | N0.M1.T1 |
| **Gran pregunta** | ¿Qué significa realmente "ejecutar" un programa, y por qué el mismo tipo de símbolo (comillas) puede significar dos cosas completamente distintas? |
| **Prerrequisitos** | Ninguno — primera lección de contenido de toda la Academia (tras el onboarding de acceso al Campus) |
| **Competencias** | C-N0-01, C-N0-04 |
| **Duración** | Heurística, no plazo (14.2). Bajo DOC-11 v2.0.0 esta lección es deliberadamente más densa que su versión anterior: la densidad de aprendizaje prima sobre la brevedad. Un estudiante comprometido no la termina en una sesión de una hora — entre las 6 categorías de la escalera (15 ejercicios en total), el laboratorio en dos fases y la consolidación, dominarla de verdad ocupa varias sesiones reales, y eso es correcto, no un fallo de diseño: es exactamente lo que el mandato del Director pide — que la duración se *sienta* real. |
| **Conexión con la lección anterior** | No existe lección anterior — es la primera. La "activación de conocimientos previos" de Bloque 0 se sustituye, justificadamente, por activación de **expectativas**: qué cree el estudiante que pasa al "ejecutar" algo, antes de haber ejecutado nada él mismo. |
| **Conexión con T2 (Variables)** | T1 establece que los valores existen y que el intérprete los procesa en el momento en que los lee (`2 + 3` se evalúa, `"2 + 3"` no). T2 pregunta la siguiente pregunta inevitable: ¿cómo le doy un nombre a un valor para no perderlo apenas se calculó? |

## Bloque 0 — Preparación del Tutor

**Activación de expectativas** *(sustituye la recuperación activa — no hay lección previa; justificado explícitamente, no omitido en silencio)*: *"Antes de escribir una sola línea: cuando alguien 'ejecuta' un programa, ¿qué crees que pasa exactamente? ¿La computadora 'entiende' el código de golpe, o hace algo más parecido a leer un texto en voz alta?"* No hay respuesta incorrecta — el objetivo es capturar el modelo intuitivo antes de reemplazarlo, no evaluarlo.

**Diagnóstico relámpago:** *"Si te pidiera que imprimieras el texto `2 + 3` tal cual, con esos tres caracteres, ¿cómo se lo dirías a Python de forma que NO lo sume?"* — la respuesta más probable ("no sé", o intentar `print(2 + 3)` sin comillas) anticipa exactamente el conflicto del Bloque 2.

**Problema motivador:** *"Quiero que la computadora imprima un pequeño recibo, con el texto exacto que yo decida — ni una coma de más, ni una de menos."* No resoluble sin saber qué es `print()` ni qué son las comillas — el problema completo se entiende sin poder resolverlo aún.

**Errores deliberados a inyectar:**
1. Comillas o paréntesis sin cerrar (`print("hola"`) → `SyntaxError`. *Clase de error, no typo aislado*: según la investigación (Denny, Luxton-Reilly y Tempero), es uno de los errores de sintaxis más frecuentes y persistentes documentados en estudiantes de CS1 — no es una elección arbitraria de ejemplo.
2. `Print("hola")` con mayúscula → `NameError: name 'Print' is not defined`. Clase de error distinta y más engañosa que la anterior: el mensaje no menciona "mayúscula" en ningún lugar — el estudiante debe razonar que Python distingue mayúsculas de minúsculas en los nombres, no solo leer literalmente el mensaje.

## Bloque 1 — Intuición, analogía e historia

**Hook:** *"Hoy cruzas una frontera: dejas de ser alguien que USA programas y te conviertes en alguien que los ESCRIBE."*

**Analogía (nueva, desarrollada):** el intérprete de Python es como alguien que lee una receta de cocina **en voz alta, un paso a la vez, ejecutando cada paso en el momento exacto en que lo lee** — nunca memoriza la receta completa antes de empezar a cocinar. No sabe lo que dice el paso 5 mientras hace el paso 2. **Prueba de que la analogía es predictiva, no decorativa:** si dos líneas dicen `print("primero")` y `print("segundo")`, el cocinero-intérprete pronuncia "primero" y luego "segundo" — nunca al revés, y nunca los dos "a la vez" — porque lee y ejecuta en el mismo orden en que las líneas existen en el texto, de arriba hacia abajo, sin adelantarse. Un estudiante que solo recuerde esta analogía, sin haber visto una sola línea de sintaxis, puede predecir correctamente en qué orden aparece la salida de un programa con varios `print()`.

**Historia (costo real):** los `print()` que hoy parecen un juguete son, en la industria, la herramienta de depuración más antigua y más usada que existe: se llaman **logs**. Un sistema en producción que fallara sin dejar ningún rastro de texto sería casi imposible de diagnosticar — por eso incluso los sistemas de inteligencia artificial más sofisticados (el propio JARVIS de Alex, por ejemplo, emite el progreso de cada etapa de razonamiento por el mismo mecanismo) siguen apoyándose en imprimir texto para saber qué está pasando por dentro. `print()` no es el primer peldaño de una escalera que se abandona — es una herramienta que un ingeniero profesional sigue usando toda su carrera.

## Bloque 2 — Conflicto cognitivo

```python
print("2 + 3")
print(2 + 3)
```

**Predicción esperada:** sin ejecutar nada, ¿qué imprime exactamente cada línea?

La sorpresa: ambas líneas contienen los mismos caracteres `2 + 3`, pero producen salidas distintas — `2 + 3` (texto tal cual) y `5` (el resultado de sumar). El estudiante que espera que "el símbolo decide el significado" descubre que **las comillas son las que deciden**: dentro de comillas, todo es texto literal, tal cual, sin importar qué símbolos contenga; fuera de comillas, Python lo trata como algo que debe evaluar.

## Bloque 3 — Explicación rigurosa con la máquina a la vista

**El modelo del intérprete (con respaldo directo de MIT 6.0001, Lecture 1):** un archivo `.py` es solo texto. El intérprete lo lee de arriba hacia abajo y ejecuta cada instrucción, una por una, en el momento exacto en que la lee — nunca antes, nunca en otro orden. Python es un lenguaje *interpretado*: no se traduce entero de antemano a un ejecutable, se va leyendo y ejecutando en vivo.

**Modelo mental en una frase memorable:** *"Tu código es texto; el intérprete lo lee y lo ejecuta, orden por orden, de arriba hacia abajo — nada se ejecuta hasta que el intérprete llega exactamente a esa línea."*

**`print()` es una función**, no una palabra mágica del lenguaje: una orden con nombre que recibe datos entre paréntesis y hace algo con ellos — aquí, mostrarlos. Python distingue mayúsculas de minúsculas en los nombres: `print` y `Print` son, para el intérprete, dos nombres completamente distintos, y solo el primero existe.

**Vocabulario técnico explícito — expresión vs. literal de texto** *(ajuste de la investigación, con respaldo de UC Berkeley CS61A)*: lo que va entre comillas es un **string** — un literal de texto, se repite tal cual, jamás se evalúa. Lo que va sin comillas y contiene operadores (`2 + 3`) es una **expresión**: algo que el intérprete evalúa y reduce a un valor antes de usarlo. Esta distinción — string literal vs. expresión evaluada — es la misma que Berkeley nombra en su primerísima lección; no es jerga prematura, es el vocabulario correcto desde el primer día.

**Anatomía mínima de un error de Python** *(elemento nuevo, ajuste real de la investigación — Prather/Denny: leer un error no es una habilidad automática, hay que enseñarla)*: cuando algo sale mal, Python no solo "se rompe" — te dice tres cosas, siempre en este orden:
1. **Dónde** — en qué línea ocurrió (`File "programa.py", line 3`).
2. **Qué tipo de error es** — su nombre técnico (`SyntaxError`, `NameError`, y muchos más que verás en T8).
3. **Un mensaje** — una pista, a veces clara, a veces no, sobre qué esperaba el intérprete y no encontró.

Leer un error empieza siempre por identificar estas tres partes, en ese orden — no por leer el mensaje primero e ignorar la línea y el tipo.

## Bloque 4 — Escalera de práctica

**Ítems condicionales no aplicables, justificados explícitamente (DOC-11 v2.0.0, no se omiten en silencio):**
- **4 niveles de dificultad B1 (Avanzado/Elite):** no aplica en esta lección. El tema (literales, `print()`, expresiones aritméticas mínimas) no tiene todavía superficie conceptual para sostener un nivel Elite genuino sin adelantar contenido de T2–T4 (variables, tipos, operadores) — forzarlo produciría exactamente el "adelantar temas antes de tiempo" que el Director prohibió explícitamente. La escalera compensa esa ausencia con mayor densidad horizontal (más variaciones del mismo nivel conceptual) en vez de profundidad vertical prematura.
- **Intercalado desde el peldaño normal (P12):** no aplica. No existe ningún tema anterior en toda la Academia con el que intercalar — T1 es, por definición, el primero.

*Nota de densidad (DOC-11 v2.0.0 — mandato del Director de julio 2026: la duración debe sentirse real, no simbólica): esta escalera tiene deliberadamente más peldaños por categoría que la versión anterior de la Academia. Ningún ejercicio es relleno — cada uno prueba una variación del modelo que los anteriores no probaron.*

**Predecir:**
1. El conflicto del Bloque 2.
2. ¿Qué imprime `print("Hola")` seguido de `print('Mundo')`? *(confirma que comillas simples y dobles son intercambiables para strings — dato nuevo, verificable por predicción)*.
3. ¿Qué imprime `print("5 + 5")` tres veces seguidas? *(refuerza que un literal de texto no cambia nunca, sin importar cuántas veces se imprima)*.
4. ¿Qué imprime `print("10" + "20")` — y por qué NO es `30`? *(combina lo aprendido en Bloque 2 con un caso nuevo: dos literales que "parecen números" pero siguen siendo texto; anticipa, sin nombrarlo, el conflicto de tipos que T3 desarrollará a fondo)*.
5. ¿Qué imprime exactamente `print("línea uno\nlínea dos")` en una sola llamada? *(introduce por predicción, no por explicación directa, que `\n` dentro de un literal es un carácter especial — el estudiante debe intuir su función a partir del nombre "salto de línea" antes de que Bloque 5 lo use de forma central)*.

**Leer código** *(categoría propia, v2.0.0 — dos fragmentos, dificultad creciente)*:

*Fragmento 1 — estilo distinto, mismo nivel:*
```python
print('Reporte diario')
print("Ventas:" + ' ' + '120')
print('Ventas:', 120)
```
El estudiante debe explicar, sin ejecutar: qué imprime cada línea exactamente, por qué la línea 2 y la línea 3 producen un resultado visualmente parecido pero por mecanismos distintos (concatenación con `+` vs. separación automática por coma en `print`), y cuál de las tres formas preferiría un lector profesional y por qué.

*Fragmento 2 — más denso, con parámetros no explicados directamente en Bloque 3:*
```python
print("Procesando", "pedido", 42, sep="-")
print("Cargando", end="...")
print("listo")
```
Este fragmento usa `sep` y `end`, parámetros de `print()` que la lección **no explica en Bloque 3** — solo se mencionan de pasada en la Lectura dirigida (§ Recursos recomendados). El ejercicio exige que el estudiante infiera su comportamiento leyendo el nombre del parámetro y el resultado, exactamente la habilidad de "leer documentación con criterio" que un desarrollador profesional usa a diario — no memorización, inferencia.

**Investigar / trazar:** dado un programa con seis `print()` que combinan literales de texto y expresiones numéricas simples (`2*3`, `"2*3"`, `10-4`, `"10-4"`, `"10" + "4"`, `10 + 4`), el estudiante traza en papel, línea por línea, exactamente qué escribe el intérprete antes de ejecutar nada — y luego verifica. El sexto caso (`"10" + "4"`) es deliberado: obliga a distinguir concatenación de texto de suma numérica en un caso donde ambos operandos "parecen" números.

**Modificar:**
1. Dado un programa de tres líneas que imprime un saludo, agregar una cuarta línea que imprima la fecha actual como texto literal, sin alterar el formato de las tres anteriores.
2. Dado el mismo programa ya modificado, cambiarlo para que las cuatro líneas se impriman con una **sola** llamada a `print()`, usando `\n` — mismo resultado visible, mecanismo interno distinto. *(conecta directamente con el trade-off del Bloque 5, practicado antes de que el laboratorio lo exija).*

**Refactorizar** *(categoría propia, v2.0.0 — dos casos)*:

*Caso 1:* el siguiente código funciona, pero está mal escrito —
```python
print("Hola" + ", " + "mundo" + "!")
```
produce exactamente lo mismo que:
```python
print("Hola, mundo!")
```
El estudiante debe identificar por qué la segunda versión es preferible (menos propensa a errores de espaciado, más legible, sin perder ni un carácter del resultado).

*Caso 2 (más exigente — el estudiante refactoriza, no solo compara):* se entrega roto en el mismo estilo excesivo —
```python
print("Total" + ":" + " " + "45" + " " + "soles")
```
El estudiante debe reescribirlo en al menos dos versiones distintas igualmente correctas (una con un solo literal, otra usando `print()` con argumentos separados por coma) y decidir, con justificación propia, cuál integraría en un programa real.

**Escribir:** el problema motivador del Bloque 0 — el recibo — ahora resoluble con lo aprendido.

**Depurar** *(≥2 ejercicios de dificultad creciente, mandato DOC-11 v2.0.0 — aquí, tres)*:
1. **Error visible en el mensaje:** `print("hola"` sin cerrar — el `SyntaxError` señala casi directamente el problema; el ejercicio es aplicar la anatomía del Bloque 3 (dónde, qué tipo, qué dice) para localizarlo y corregirlo.
2. **Error que engaña (lógica silenciosa / mensaje no obvio):** `Print("hola")` — el `NameError` no menciona "mayúscula" en ningún lugar; el estudiante debe conectar el mensaje ("name 'Print' is not defined") con el hecho, ya enseñado en Bloque 3, de que Python distingue mayúsculas de minúsculas — un salto de razonamiento, no una lectura literal.
3. **Error compuesto (nivel más alto — combina dos ideas de la lección):** `print('No te preocupes, ya casi está')` lanza `SyntaxError` porque el apóstrofe de "No te" cierra el string antes de tiempo — un error que un principiante no anticipa porque "se ve" como un string normal de comillas simples. El estudiante debe aplicar simultáneamente la anatomía del error (Bloque 3) y el conocimiento de que comillas simples y dobles son intercambiables (Bloque 4, "predecir" #2) para elegir la reparación correcta — este caso prepara directamente el terreno del desafío final del Bloque 6.

## Bloque 5 — Laboratorio: mini-proyecto integrador

**Excepción justificada (DOC-11 v2.0.0 exige integrar ≥2 lecciones previas; T1 es la primera lección de toda la Academia y no tiene ninguna anterior):** la integración que exige este bloque se reescala, para este caso único, a integrar **todas las categorías de la escalera de esta misma lección** (predecir, leer, trazar, modificar, refactorizar, escribir y depurar) en un solo artefacto — el equivalente, en la primera lección, de lo que en T2 en adelante será integrar lecciones distintas.

**El proyecto — Tarjeta de recibo:** construir un programa que imprima exactamente:
```
======================
   TIENDA DE ALEX
======================
Producto: Cuaderno
Precio: 12 soles
======================
Gracias por tu compra
======================
```
con dos restricciones reales: (1) el resultado debe coincidir carácter por carácter, incluidas las líneas de `=` y los espacios de sangría del nombre de la tienda; (2) el programa entregado como punto de partida contiene un bug deliberado (una línea con comillas mal cerradas) que el estudiante debe encontrar y corregir **antes** de poder empezar a construir el resto — practica en el mismo laboratorio la depuración recién aprendida, no solo en el ejercicio aislado del Bloque 4.

**Trade-off explícito real:** el recibo puede construirse con **muchos `print()` cortos** (uno por línea) o con **un solo `print()` largo** usando saltos de línea internos (`\n`). Costo real en ambas direcciones: muchos `print()` cortos son más fáciles de editar línea por línea y de leer mientras se escribe, pero generan más código repetido; un solo `print()` con `\n` es más compacto, pero un error de conteo de `\n` es más difícil de localizar visualmente que un `print()` de más. Ninguna opción es objetivamente superior — el estudiante debe elegir y justificar su elección, no adivinar cuál "quiere" el tutor.

**Argumento de corrección:** el estudiante debe verificar, explícitamente, que su salida coincide con la esperada línea por línea — incluida la posibilidad, real y frecuente, de un espacio de más o de menos en la sangría de `TIENDA DE ALEX`, que a simple vista puede pasar inadvertido. No se acepta "se ve igual"; se exige comparación explícita carácter por carácter de al menos las líneas con sangría.

**Confrontación de soluciones** *(condicional [L] — aplica aquí porque el trade-off del párrafo anterior es una libertad de diseño genuina, no cosmética)*: se le muestran al estudiante dos soluciones completas y correctas del mismo recibo — una con siete `print()` cortos, otra con un único `print()` y `\n` — y se le pide señalar, línea por línea, dónde un error de un solo carácter sería más fácil de encontrar en cada una, y cuál elegiría si tuviera que mantener este programa dentro de un mes.

**Fase 2 — transferencia sin instrucciones repetidas:** con el mismo método, sin que se le repita el procedimiento paso a paso, el estudiante construye un **segundo recibo, de una tienda y producto distintos, elegidos por él**, con la misma estructura de bordes y secciones. El objetivo explícito de esta fase es verificar que aprendió el **método** (construir un bloque de texto delimitado, con secciones y separadores) y no memorizó el contenido literal del primer recibo — si solo puede reproducir "Tienda de Alex" y falla al cambiar el contenido, el dominio real todavía no existe.

## Bloque 6 — Consolidación

**Defensa socrática:**
1. ¿Por qué `print("2 + 3")` no suma, si `print(2 + 3)` sí?
2. ¿Qué tres cosas te dice siempre un error de Python, en qué orden, y por qué importa ese orden?
3. *(inédita)* Si vieras `print('5' + '5')`, ¿qué crees que imprime, y en qué se parece esa pregunta a la que ya respondiste sobre `"2 + 3"` vs. `2 + 3`?

**Seis preguntas de excelencia aplicadas:**
1. **Definir:** ¿qué es exactamente una expresión, y qué la distingue de un literal de texto?
2. **Predecir:** ¿qué imprimiría `print("Python" 'es' "genial")` (tres literales pegados, sin operador)? *(caso límite real de Python: concatenación implícita de literales adyacentes — invita a experimentar, no a memorizar)*
3. **Comparar:** ¿en qué se parecen y en qué se diferencian un `SyntaxError` y un `NameError`?
4. **Justificar:** ¿por qué Python distingue mayúsculas de minúsculas en los nombres, en vez de ser más "permisivo"?
5. **Generalizar:** si esta distinción (texto literal vs. algo que se evalúa) existe en `print()`, ¿dónde más del lenguaje esperarías encontrar la misma idea?
6. **Criticar:** ¿qué parte de tu modelo mental inicial (Bloque 0) resultó incompleta o incorrecta, y por qué crees que era razonable pensar así antes de esta lección?

**Reflexión metacognitiva** *(elemento propio, v2.0.0)*:
- ¿Qué fue lo más difícil de esta primera lección, y por qué crees que lo fue?
- Si tuvieras que explicarle a otra persona qué es un intérprete, sin usar la palabra "computadora", ¿qué dirías?
- ¿Qué error cometiste hoy que, mirándolo ahora, te enseñó más que un ejercicio que resolviste a la primera?

**Desafío final inédito** *(irresoluble por imitación directa de lo practicado)*: imprimir exactamente esta línea, incluidas las comillas dentro del texto:
```
Ella dijo "hola" y se fue
```
Ningún ejercicio anterior de la lección mostró cómo incluir comillas dentro de un string delimitado por el mismo tipo de comillas — el estudiante debe descubrir, por experimentación guiada por la anatomía del error (Bloque 3), que `print("Ella dijo "hola" y se fue")` produce un `SyntaxError`, y razonar una salida: usar comillas simples para delimitar el string completo (`'Ella dijo "hola" y se fue'`), o escapar las comillas internas (`\"`). No se le enseña la solución antes — se le entrega el problema y las herramientas de diagnóstico ya practicadas.

**Lectura dirigida:** [Python 3 — documentación oficial de `print()`](https://docs.python.org/3/library/functions.html#print) — leer específicamente la firma completa de la función (parámetros `sep` y `end`, ya vistos de pasada en el ejercicio de "leer código").

**Beyond the Curriculum:** *"Lo que hoy escribes como `print()` en tu pantalla, en un sistema real se escribe en un archivo de logs, o se envía por red a un sistema de monitoreo. La diferencia entre 'salida estándar' (stdout) y 'salida de error' (stderr) — que hoy no necesitas — la verás en T6 (Entrada y salida) y de nuevo, con consecuencias reales, cuando tu propio JARVIS separe sus respuestas de sus mensajes de diagnóstico."*

## 4. Criterio de dominio — siete capacidades

| # | Capacidad | Instrumento en esta lección |
|---|---|---|
| 1 | Explicar | Bloque 6, defensa + pregunta de excelencia 1 |
| 2 | Predecir | Bloque 4, categoría "predecir" (5 ejercicios) |
| 3 | Detectar errores | Bloque 4, "leer código" (2 fragmentos) + Bloque 0, errores deliberados |
| 4 | Corregir | Bloque 4, "depurar" (3 ejercicios de dificultad creciente, incluido un error compuesto) |
| 5 | Modificar | Bloque 4, "modificar" (2) + "refactorizar" (2 casos) |
| 6 | Aplicar en contexto nuevo | Bloque 6, desafío final (comillas internas) + Bloque 5, Fase 2 (transferencia sin instrucciones repetidas) |
| 7 | Usar en un proyecto | Bloque 5, mini-proyecto del recibo en dos fases (con bug propio a depurar + confrontación de soluciones) |

**Instrumento DOC-02:** RM-03 (predicción/ejecución mental) + TD-01 breve (SYL-N0). Evidencia observable de dominio: el estudiante predice correctamente la diferencia entre literal y expresión sin ejecutar, localiza y corrige ambas clases de error del Bloque 4 sin asistencia, y resuelve el desafío final razonando desde la anatomía del error, no por ensayo y error ciego.

## 4bis. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Clasificación |
|---|---|---|---|---|---|---|
| [CS50P — Week 0](https://cs50.harvard.edu/python/weeks/0/) | Harvard (CS50) | EN | ~1h video + notas | Introductorio | Confirma, desde una segunda fuente de referencia, que funciones, argumentos y bugs se tratan juntos desde el primer contacto — el mismo enfoque de esta lección | 🟢 Antes de estudiar |
| [`print()` — Python 3 official docs](https://docs.python.org/3/library/functions.html#print) | Python Software Foundation | EN | ~5 min lectura | Introductorio | Referencia oficial exacta de la función que esta lección enseña — la fuente de verdad, no una explicación de tercero | 🔵 Durante la lección |
| [MIT 6.0001 — Lecture 1](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/) | MIT OpenCourseWare | EN | ~50 min video | Introductorio | Refuerza el modelo del intérprete ya vivido en esta lección, con la autoridad de la fuente que lo originó en esta investigación | 🟣 Después de terminar |
| [Sorva — "Notional Machines and Introductory Programming Education"](https://dl.acm.org/doi/10.1145/2483710.2483713) | J. Sorva, ACM TOCE 2013 | EN | ~40 min lectura (denso) | Avanzado | Para quien quiera entender la teoría detrás de por qué esta lección enseña el modelo del intérprete de forma explícita, no solo intuitiva | ⭐ Profundización opcional |

## Registro de observaciones

| # | Fecha | Observación | Categoría |
|---|---|---|---|
| 1 | 2026-07-19 | Evidencia real indirecta (registrada originalmente en el §6 de T2, no fabricada aquí): durante la recuperación activa de T2 — misma forma exacta del conflicto de esta lección, pero con otros números — Alex respondió `print("4 * 2")` → **"42"**, no el texto literal `4 * 2` esperado. Es una instancia distinta de exactamente el conflicto del Bloque 2 de esta lección (`"2 + 3"` vs. `2 + 3`), y sugiere que el modelo no transfirió del todo a una variación trivial (mismo patrón, otro operador y otros números). | Errores espontáneos no previstos — candidato real a incorporar un caso adicional de predicción con `*` en el Bloque 4 de una futura revisión, si se repite con más estudiantes (DOC-03 §8bis, validación ascendente). No se actúa todavía sobre una sola observación — se registra y se deja pendiente de validación, nunca de desarrollo. |
