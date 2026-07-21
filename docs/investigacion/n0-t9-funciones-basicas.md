# Investigación Pedagógica de N0·T9 — Funciones básicas: tu primera receta reutilizable

*Conforme a DOC-11 §0bis. Tema nuevo, añadido en la ronda de profundización de N1/N0 (excepción de reapertura, SYL-N0 v1.1.0) tras verificar que N0 nunca introducía funciones antes de que N1.M1.T1 ("Funciones a fondo") las exigiera de golpe.*

## 1. Cómo enseñan este concepto exacto las instituciones de referencia

**Harvard (CS50P), verificado por fetch directo.** Introduce funciones con un ejemplo de refactorización concreta (`cat.py`, código repetitivo `print("meow")` tres veces → abstraído en una función) y declara explícitamente la razón de ser: *"Bringing in our prior learning, we can use functions to further improve our code"* — funciones como mejora de código ya funcional, no como característica aislada. La primera aparición de `return` se hace explícita en el contexto de una función `get_number()`: *"Notice how... we also used a return statement to return the value of n back to the main function."*

**UC Berkeley (CS61A / Composing Programs), verificado por fetch directo — la distinción central de este tema.** El material oficial confirma, con cita textual, el mecanismo exacto que motiva el ejercicio 7/retoFinal de este tema: *"all Python functions return a value"* y, cuando no se especifica un `return` explícito, *"it implicitly returns None when no other value is returned."* El ejemplo oficial (`r_val = f("hi")`, donde `f` solo imprime) demuestra que `r_val` termina conteniendo `None`, no el resultado visible en pantalla — exactamente el bug que `d9e7` pide reparar.

**CMU (15-112).** Búsqueda dirigida a sus notas de funciones encontró únicamente material de funciones AVANZADAS (`notes-functions-redux.html`: `*args`, funciones como parámetros, lambdas) — verificado por fetch directo que esa página no cubre la distinción return/print para principiantes. Se declara la ausencia honestamente en vez de forzar una cita fuera de contexto (DOC-11, principio 2).

## 2. Síntesis crítica

**Decisión de diseño: NO se importa la profundidad de N1.M1.T1.** Este tema se diseñó deliberadamente MÁS simple que su equivalente de N1 — sin closures, sin múltiples valores de retorno, sin argumentos por posición/keyword avanzados. Su único objetivo es cerrar el salto de dificultad verificado durante la planificación de esta ronda: que un estudiante llegue a N1.M1.T1 habiendo escrito al menos una función propia antes.

**El bug de "olvidar el return" (T9b, `d9e7`) se ancla en evidencia institucional real, no en una ocurrencia arbitraria.** Es exactamente el mecanismo que Berkeley documenta como el error central de esta etapa: una función sin `return` no falla con una excepción, simplemente entrega `None` en silencio — el tipo de error "silencioso" que más confunde a un principiante absoluto, porque el programa no se detiene a explicar qué salió mal.

## 3. Clasificación y falsabilidad

**Evidencia sólida:** CS50P y Berkeley CS61A, ambos verificados por fetch directo, con citas textuales que anclan exactamente el contenido del tema (introducción con refactorización, distinción return/None). **Ausencia declarada:** CMU no tiene, en el material encontrado, un tratamiento equivalente para principiantes — declarado explícitamente, no inventado. **Falsabilidad:** si la evidencia real de ejecución (Hipótesis pendiente del Informe Final de N0 v2) muestra que este tema resulta redundante con N1.M1.T1 en vez de complementario, debería fusionarse o eliminarse — hoy se construye porque el salto de dificultad es verificable leyendo el propio `intuit` de `n1d1`, no una suposición.

## Estado
✅ Completa. 2 temas (Parte 1 y 2), 7+2 ejercicios + laboratorio + desafío final, todos verificados con ejecución real de Python. Cierra hacia N1.M1.T1 sin duplicar su profundidad.
