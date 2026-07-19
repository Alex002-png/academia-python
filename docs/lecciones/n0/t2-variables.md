# N0 · T2 — Variables: etiquetas, no cajas

> **Estado:** ✅ **Aprobada por el Director (2026-07-19)** — primera lección real de la Academia construida bajo DOC-11. Con esta aprobación se inaugura oficialmente la etapa de construcción del contenido vivo: el primer artefacto de la Academia cuya finalidad ya no es describir cómo debería aprender un estudiante, sino hacer que un estudiante aprenda.

*El contenido de los Bloques 1, 3 y 4 conserva y eleva el material ya publicado y validado en producción (campus, "Día 2"); DOC-03 §7 ya estableció que N0 no se reescribe — este documento formaliza esa lección bajo el nuevo estándar sin sustituir lo que ya funciona.*

## Ficha de control

| Campo | Valor |
|---|---|
| **Dirección** | N0.M1.T2 |
| **Título** | Variables: etiquetas, no cajas |
| **La gran pregunta de la lección** | ¿Qué significa realmente que un programa "recuerde" algo? |
| **Prerrequisitos** | N0.M1.T1 (el intérprete ejecuta línea por línea; `print()`; strings vs. expresiones) |
| **Competencias servidas** | C-N0-01 (escribe y depura programas cortos explicando línea a línea) |
| **Duración estimada** | 3–5 h (registro vivo, SYL-N0 §1) |
| **Conexión con la lección anterior** | T1 dejó al estudiante ejecutando instrucciones aisladas, una detrás de otra, sin que ninguna recuerde nada de la anterior — la tensión que T2 resuelve. |
| **Conexión con la siguiente lección (T3, Tipos de datos)** | T2 enseña a **nombrar** un valor; deja abierta, sin resolver del todo, la pregunta de qué *es* ese valor por dentro — la confusión entre `10` y `"10"` que esta misma lección provoca deliberadamente es, literalmente, el conflicto cognitivo con el que T3 abre. La conexión no es temática solamente: es la misma herida, dejada abierta a propósito. |

---

## Bloque 0 — Preparación del Tutor *(conducción; no se muestra al estudiante como texto corrido)*

**Preguntas de recuperación activa** (de memoria, sin material a la vista — las mismas tres que ya han demostrado exponer exactamente lo que T1 debía dejar firme):

1. ¿Qué muestra cada una de estas líneas, y qué hace Python de manera diferente en cada caso? `print("4 * 2")` / `print(4 * 2)` — *respuesta esperada: la primera imprime literalmente el texto "4 * 2"; la segunda evalúa la expresión y muestra 8. Python distingue string literal de expresión a evaluar.*
2. Desde que pulsas Ejecutar hasta que aparece el resultado: ¿quién lee tu programa y en qué orden lo procesa? — *respuesta esperada: el intérprete, línea por línea, en el orden en que están escritas.*
3. Sin ejecutarlo: `print("hola` (falta la comilla y el paréntesis de cierre) — ¿qué hará Python y por qué? ¿Cómo lo corrige? — *respuesta esperada: SyntaxError, porque el string y la llamada quedan sin cerrar; se corrige añadiendo `")`.*

**Diagnóstico relámpago** (expone el modelo de partida sobre variables, sin corregir todavía): *"Si te dijera que en programación existen las 'variables', ¿qué crees que son?"* — la respuesta casi universal en un principiante absoluto es alguna versión de "una caja donde guardas un valor". Se anota sin corregir: es exactamente la intuición que el Bloque 2 va a romper.

**El problema antes que nada:** *"Quiero que tu programa recuerde tu nombre y lo salude dos veces, cambiándolo una vez en el medio — y quiero que lo haga sin escribir el nombre tres veces."* El estudiante no puede resolverlo aún con lo que sabe de T1 (solo tiene `print` con literales sueltos): necesita algo que "recuerde" un valor entre líneas. Ese "algo" es la variable — el problema regresa resuelto en el Bloque 5.

**Errores deliberados a inyectar (M11):**
1. **Error de tipo (evidencia real, observado con el estudiante de esta Academia — SYL-N0, Observación O-01):** al pedir crear `contador` con valor `10`, el estudiante escribió `contador = "10"` (comillas incluidas). Clase de error: **confusión string/entero en la frontera de asignación** — no un tropiezo aislado, sino el mismo error que T3 formaliza como su propio conflicto cognitivo. Se usa deliberadamente en el Bloque 2, no se oculta ni se trata como anécdota vergonzosa: es la lección misma.
2. **Error de modelo (`x = x + 1`):** el estudiante que piensa "caja" objeta que la ecuación "no tiene sentido" (matemáticamente `x` no puede igualar `x+1`). Clase de error: **confundir asignación con ecuación matemática** — revela directamente el modelo de "caja" que hay que reemplazar por "etiqueta".

## Bloque 1 — Intuición, analogía e historia

**Hook:** *"Un programa sin variables es una calculadora de un solo uso. Hoy aprendes a darle MEMORIA: nombrar valores, guardarlos y transformarlos — el primer ladrillo de todo sistema que construirás en los próximos 53 meses. Sin variables no hay memoria; sin memoria no hay programas: ni un videojuego que recuerde tu puntaje, ni un carrito de compras, ni una IA que recuerde tu pregunta."*

**Historia real (verificada como predictiva, ya en producción):** en los años 50, las "variables" eran direcciones crudas de memoria — `MOV AX, [0x4F2A]` — y los programadores memorizaban números hexadecimales. FORTRAN y ALGOL introdujeron nombres simbólicos y liberaron al programador de esa carga. Python heredó esa línea y añadió su modelo propio: **todo es un objeto, y los nombres son etiquetas hacia ellos** — no cajas que contienen valores.

**Analogía (condición de cumplimiento verificada: predictiva sin sintaxis):** una variable es como el número de turno de la farmacia — una etiqueta que *apunta* a ti, no una copia tuya. Si te llaman por otro número, tu turno no cambió: cambió a quién apunta la etiqueta. Un estudiante que solo recuerde esta imagen —sin ninguna sintaxis— ya puede predecir correctamente qué pasa cuando dos variables "apuntan" al mismo valor.

## Bloque 2 — Conflicto cognitivo

Se presenta el error real observado (Bloque 0, #1) como caso de estudio, no como corrección de un error del estudiante en vivo la primera vez que se imparte esta versión — como el caso construido para **todo** estudiante futuro:

> Alguien te pide crear una variable `contador` con el valor diez y luego cambiarla a veinticinco. Escribe: `contador = "10"`. Ejecuta `print(contador + 1)`. Python no dice "11" — lanza `TypeError: can only concatenate str (not "int") to str`.

El estudiante, con el modelo de "caja" todavía activo, esperaría que "10" y 10 fueran básicamente lo mismo dentro de la caja. **No lo son.** La variable no guardó un número: guardó una etiqueta apuntando a un objeto *string* que por casualidad se ve como un número. Este es el momento de máxima atención: aquí se corrige el modelo de caja, no el síntoma del error de tipo (ese síntoma se resuelve formalmente recién en T3 — aquí solo se siembra, con nombre e instrumento propio, lo que T3 resolverá del todo).

## Bloque 3 — Explicación rigurosa con la máquina a la vista

**El modelo mental correcto (frase memorable, verificable semanas después):**

> Una variable NO es una caja que guarda un valor — es una **etiqueta** que apunta a un objeto en memoria.

`precio = 100` significa: crea el objeto `100` en memoria, y ponle la etiqueta `precio`. Si luego escribes `precio = 200`, la etiqueta se mueve a otro objeto — el `100` original no se modifica, solo deja de tener esa etiqueta puesta encima.

```python
precio = 100
precio_final = precio   # otra etiqueta al MISMO objeto
precio = 200             # solo se mueve la etiqueta precio
print(precio)            # 200
print(precio_final)      # 100 — no cambió
```

Traza en la máquina nocional: tras la línea 1, existe un objeto `100` en memoria con la etiqueta `precio` puesta encima. Tras la línea 2, `precio_final` es una *segunda* etiqueta sobre ese *mismo* objeto — no una copia. Tras la línea 3, se crea un objeto nuevo `200` y la etiqueta `precio` se despega del `100` y se pone sobre el `200`; la etiqueta `precio_final` nunca se movió — sigue sobre el `100` original. De ahí que impriman valores distintos.

**Nombres profesionales (PEP 8):** convención `snake_case` — minúsculas con guiones bajos, descriptivos. `precio_total` ✓ · `PrecioTotal` ✗ · `pt` ✗ · `x` ✗. Un programa se lee muchas más veces de las que se escribe: los nombres son para quien lo lee después, incluido tu propio yo futuro.

## Bloque 4 — Práctica en escalera

**Predecir** *(compromiso escrito antes de ejecutar)*:
```python
x = 5
x = x + 1
print(x)
```
Pregunta: ¿qué imprime? Y piensa: ¿cómo puede `x` ser igual a `x + 1`? — *Respuesta tras comprometer la predicción:* imprime `6`. El `=` no es una ecuación matemática: primero se evalúa la derecha (`5 + 1 = 6`) y luego la etiqueta `x` se mueve al resultado. Por eso `x = x + 1` es legal y, además, el patrón más útil de la lección (es exactamente la forma de un contador).

**Investigar (trazar):** dado `x = 5; y = x; x = 9`, ¿cuánto vale `y`? — el estudiante traza objeto por objeto, no memoriza la respuesta: `y` quedó ligada al objeto `5`; mover la etiqueta `x` después no la afecta. Etiquetas, no cajas.

**Modificar:** dado `precio = 100`, crear `precio_final` que apunte al valor de `precio` (usando la variable, no repitiendo `100`) e imprimir ambas.

**Escribir (escalera con transferencia genuina en el último peldaño):**
1. *Ejercicio 1 — Primera etiqueta:* crear `nombre` con el valor `"Alex"` e imprimirla usando la variable (no el texto directo).
2. *Ejercicio 2 — La etiqueta se mueve:* crear `contador` con valor `10`, reasignarla a `25`, imprimir — la salida debe ser `25` y el `10` debe seguir presente en el código (verifica que el estudiante entendió reasignación, no solo asignación).
3. *Ejercicio 3 — Dos etiquetas:* dado `precio = 100`, crear `precio_final` que apunte al valor de `precio` e imprimir ambas — el peldaño que exige combinar "crear" y "apuntar a otra etiqueta" sin haberlo visto exactamente en ese orden antes.

**Depurar:** el error real del Bloque 0 (`contador = "10"` en vez de `contador = 10`) presentado como código ya escrito por "alguien" — el estudiante debe diagnosticar por qué `print(contador + 1)` falla, sin que se le diga de antemano que es un problema de tipo. Disciplina completa: síntoma (`TypeError`) → hipótesis → causa raíz (`"10"` es string, no int) → corrección → clase de error (confusión string/entero en la asignación, la misma que T3 nombrará formalmente).

## Bloque 5 — Laboratorio

**El problema del Bloque 0, ahora resoluble — el desafío final, sin pistas:**

> Intercambia los valores de dos variables (`moneda_izquierda = "sol"`, `moneda_derecha = "dolar"`) usando una **variable auxiliar** — prohibido reasignar los textos directamente a mano — e imprime ambas: primero la izquierda, luego la derecha.

**Trade-off explícito (costo real en ambas direcciones):** usar una variable auxiliar cuesta una línea y un nombre más que "hacerlo a mano" copiando los valores — pero es la única forma honesta de resolverlo sin ya saber el resultado de antemano (si reasignas a mano, ya sabías el valor: no programaste el intercambio, lo memorizaste). El costo de la variable auxiliar es memoria y una línea; el beneficio es que el intercambio funciona para *cualquier* par de valores, no solo para estos dos.

**Argumento de corrección ("¿cómo sabes que funciona?"):** el estudiante debe enumerar, antes de dar por terminado, qué pasaría si las variables empezaran con otros valores — su solución debe funcionar para cualquier par, no solo para "sol"/"dolar".

**Confrontación de soluciones — no aplica en esta lección, con justificación explícita:** el intercambio mediante tuplas (`a, b = b, a`) es la alternativa real en Python, pero usa una característica de asignación múltiple que T2 todavía no ha enseñado (NNR-10: ningún término se usa antes de definirse) — no existe, en este punto del recorrido, una segunda solución legítima que confrontar sin violar el propio orden curricular. Se marca `[L]` no aplicable, no se omite en silencio.

## Bloque 6 — Consolidación

**Defensa socrática (preguntas reales, al menos una genuinamente inédita):**
1. Explica con tus palabras qué significa `precio_final = precio`. ¿Se copió el valor, o pasó otra cosa?
2. Si `x = 5` y luego `x = x + 1`, ¿por qué eso no es una contradicción matemática?
3. *(inédita, no ensayada en la sesión)* Si tuvieras que explicarle a alguien que nunca programó por qué `contador = "10"` es un error diferente a `contador = 10`, ¿qué le dirías sin usar la palabra "tipo"?

**Las seis preguntas de excelencia, aplicadas al contenido concreto de esta lección:**
- ¿Qué aprendí? Que una variable es una etiqueta sobre un objeto, no un contenedor.
- ¿Por qué existe este concepto? Porque un programa sin memoria es una calculadora de un solo uso; las variables son la memoria de un sistema.
- ¿Qué problema resuelve? Nombrar y reutilizar valores sin repetirlos, y permitir que cambien durante la ejecución.
- ¿Cómo lo usan los profesionales? Cada estado de un sistema real — sesiones, contadores, cachés, configuración — vive en variables; PEP 8 gobierna cómo se nombran en cualquier equipo profesional.
- ¿Cómo se conecta con lo anterior? T1 ya ejecutaba instrucciones; T2 les da algo que persiste entre ellas.
- ¿Qué pasaría si no existiera? Cada valor tendría que reescribirse literalmente cada vez que se usa — ningún programa podría recordar ni transformar nada.

**Lectura dirigida:** docs.python.org, Tutorial §3.1 (asignación) · PEP 8, sección de convenciones de nombres.

**Puerta Beyond the Curriculum:** *"¿Y si dos variables apuntan al mismo objeto y ese objeto pudiera cambiarse desde adentro (no reasignarse, sino mutarse)? Eso es exactamente lo que vuelve interesantes —y peligrosas— a las listas, en N1."* Puntero concreto, profundidad mínima deliberada: la exploración real de mutabilidad pertenece a N1.

---

## Evidencia de dominio e instrumento

**Evidencia observable:** el estudiante predice correctamente el resultado de trazas con múltiples etiquetas sobre el mismo objeto (sin ejecutar primero), diagnostica el error real de tipo sin pista de que es "de tipo", y defiende con sus palabras la diferencia etiqueta/caja ante la pregunta inédita del Bloque 6. **Instrumento (DOC-02):** escalera de ejercicios + reto autocorregidos por el campus (RM-03) + defensa breve TD-01 conducida por el Tutor (RM-05) — compuerta de tema conforme a SYL-N0 §4.

## Checklist de conformidad de esta lección (DOC-11 §5)

☑ Ficha de control · ☑ Recuperación activa (las 3 preguntas de T1, con respuesta esperada) · ☑ Diagnóstico relámpago · ☑ Problema motivador no resoluble aún en el Bloque 0 · ☑ Errores deliberados con clase declarada (incluido un caso con evidencia real) · ☑ Hook + analogía verificada como predictiva + historia con anécdota real · ☑ Conflicto cognitivo construido desde el diagnóstico · ☑ Modelo mental en frase memorable + máquina nocional trazada · ☐ 4 niveles B1 — **no aplica** (tema de apertura de nivel, sin base aún para escalar a Avanzado/Elite) · ☐ Intercalado P12 — **no aplica** (solo existe T1 antes; sin masa crítica de temas previos para intercalar) · ☑ Laboratorio con trade-off real + argumento de corrección · ☐ Confrontación de soluciones — **no aplica, justificado** (sin libertad de diseño legítima en este punto del recorrido) · ☑ Defensa con pregunta inédita · ☑ Seis preguntas de excelencia aplicadas al contenido concreto · ☑ Lectura dirigida con referencia exacta · ☑ Puerta Beyond the Curriculum concreta · ☑ Evidencia de dominio + instrumento declarados · ☑ Conexión con T1 y T3 explícita · ☑ Checklist de DOC-03 §6 satisfecho.

**Los tres ítems marcados "no aplica" lo están con justificación explícita, no en silencio — exactamente como exige DOC-11 §5.**

## Registro de observaciones de ejecución *(DOC-11 §6 — práctica permanente; se completa tras cada sesión real)*

| # | Fecha | Observación | Categoría |
|---|---|---|---|
| — | *(pendiente de la primera sesión real)* | — | — |

*Categorías de referencia: mayor conflicto cognitivo real · explicación con mayor cambio de modelo mental · ejercicio demasiado fácil/difícil · pregunta socrática más productiva · duración real por bloque · errores espontáneos no previstos.*
