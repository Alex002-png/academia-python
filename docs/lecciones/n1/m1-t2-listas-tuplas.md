# N1.M1.T2 — Listas y tuplas

> **Estado:** Desarrollo ✅ · Validación ⏳ Pendiente · Investigación ✅ [`n1-m1-t2-listas-tuplas.md`](../../investigacion/n1-m1-t2-listas-tuplas.md) — 1 ajuste real: contraste destructivo/no-destructivo explícito.

## Ficha de control

| Campo | Valor |
|---|---|
| **Dirección** | N1.M1.T2 |
| **Gran pregunta** | Si dos nombres apuntan a la misma lista, ¿qué significa realmente "cambiar uno de ellos"? |
| **Prerrequisitos** | N1.M1.T1 (funciones como valores); N0.M1.T2 (etiquetas, no cajas — aquí se pone a prueba con un objeto mutable) |
| **Competencias** | C-N1-01 |
| **Conexión con N0.T2** | N0 estableció etiquetas sobre objetos inmutables (números, strings). Aquí el objeto SÍ puede cambiar por dentro — la primera vez que "etiquetas, no cajas" tiene consecuencias reales y sorprendentes. |
| **Conexión con T3 (Diccionarios y sets)** | Mismo problema de aliasing, ahora aplicado a otra estructura mutable — la lección se generaliza, no se repite. |

## Bloque 0

**Recuperación (T1):** 1) ¿Por qué `saluda2 = saluda` no ejecuta la función? 2) ¿Qué "recuerda" una closure? 3) ¿Cuándo se ejecuta realmente un decorador?

**Diagnóstico relámpago:** *"Si `a = [1]` y luego `b = a`, ¿son la misma lista o dos listas iguales pero separadas?"*

**Problema motivador:** *"Necesito una función que reciba una lista de tareas y le agregue una — pero descubro que también cambió la lista original fuera de la función, sin que yo lo pidiera."*

**Errores deliberados:** 1) `a=[1]; b=a; a.append(2); print(b)` → `[1,2]`, no `[1]` — el aliasing con mutación. 2) Mutar una lista mientras se itera sobre ella (produce saltos o resultados inesperados).

## Bloque 1

**Hook:** *"Una lista no es una copia — es un objeto que varios nombres pueden compartir. Hoy descubres qué significa eso de verdad."*

**Historia:** MIT dedica una lección entera a esto (Lecture 5, 6.0001) — no es un detalle menor del lenguaje: es uno de los conceptos que más bugs reales produce en código profesional (documentado en catálogos de antipatrones de estudiantes de CS1).

## Bloque 2 — Conflicto cognitivo

```python
a = [1]
b = a
a.append(2)
print(b)   # [1, 2] — ¡b también cambió!
```

El estudiante, con el modelo "etiqueta apunta a objeto" ya interiorizado de N0, predeciría (correctamente, si generaliza bien) que `b` sigue apuntando al MISMO objeto — pero la sorpresa real es que ahora, a diferencia de N0 (números y strings, inmutables), **ese objeto compartido puede cambiar por dentro**, y el cambio se ve desde cualquier etiqueta que apunte a él.

## Bloque 3 — Explicación rigurosa (con el ajuste de la investigación)

**El modelo:** la lista como **secuencia de referencias**, no de valores — dos nombres pueden apuntar a la misma lista.

**Contraste destructivo vs. no destructivo (nuevo, tras la investigación — CMU):**
```python
a = [1, 2]
a.append(3)      # DESTRUCTIVO: modifica el objeto en el sitio
b = a + [4]      # NO DESTRUCTIVO: crea una lista nueva, a no cambia
print(a)  # [1, 2, 3]
print(b)  # [1, 2, 3, 4]
```
`.append()`, `.remove()`, `.sort()` mutan el objeto existente; `+`, `+ nuevo elemento`, slicing (`a[:]`) crean uno nuevo. Saber cuál es cuál es la diferencia entre un bug de aliasing y código seguro.

## Bloque 4 — Escalera

**Predecir:** el conflicto del Bloque 2. **Investigar:** trazar qué objetos existen en memoria tras `a=[1]; b=a; a.append(2)`. **Escribir:** función que agrega un elemento a una copia de la lista, no al original (`a[:]` o `list(a)`). **Depurar:** el bug de mutar mientras se itera.

## Bloque 5 — Laboratorio

**Trade-off:** copiar una lista (`list(a)`) cuesta memoria y tiempo, pero evita el bug de aliasing — ¿cuándo vale la pena esa copia y cuándo es innecesaria?

**Argumento de corrección:** ¿la función que "no debería modificar el original" realmente no lo hace, en todos los casos, incluida una lista vacía?

## Bloque 6 — Consolidación

**Defensa:** 1) ¿Por qué `a.append()` afecta a `b` si `b=a`? 2) ¿Qué diferencia `.append()` de `a + [x]`? 3) *(inédita)* Si tuvieras que diseñar una función que NUNCA modifique accidentalmente lo que le pasan, ¿qué regla seguirías siempre?

**Idea universal:** la lista como secuencia de referencias — dos nombres pueden apuntar a la misma lista, y cambiarla desde uno se nota desde el otro.

**Beyond the Curriculum:** *"El aliasing es exactamente el problema que las bases de datos con transacciones (N2) resuelven a otra escala: ¿qué pasa cuando dos 'nombres' del sistema apuntan al mismo dato compartido?"*

## Evidencia e instrumento

Predice el efecto del aliasing con mutación sin ejecutar; distingue operaciones destructivas de no destructivas; escribe una función que evita el bug deliberadamente. RM-03 + TD-01.

## Registro de observaciones

| # | Fecha | Observación | Categoría |
|---|---|---|---|
| — | *(pendiente)* | — | — |
