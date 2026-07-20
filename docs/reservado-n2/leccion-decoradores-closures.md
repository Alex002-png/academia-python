# [RESERVADO PARA N2 — NO VIGENTE EN N1] Decoradores y closures: funciones que fabrican comportamiento

> **Aviso institucional (2026-07-20):** este documento se construyó originalmente como "N1.M1.T1", pero contradice el SYL-N1 v1.0.0 aprobado — su sección "Herencias declaradas a SYL-N2" (H-01) excluye decoradores y closures de N1 **deliberadamente**, reservándolos como el primer tema de FastAPI en N2 ("N1 los excluyó porque aquí fallaba el 'por qué ahora'; en N2 la necesidad es real e inmediata"). El M1.T1 real de N1 es **"Funciones a fondo"**. Este contenido no se descarta — es una semilla real y aprovechable para cuando se construya N2; se archiva aquí, fuera de `docs/lecciones/n1/`, hasta ese momento. Detectado y corregido por el Director tras auditar el SYL-N1 completo antes de reconstruir N1 bajo DOC-11 v2.0.1.

> **Estado original:** Desarrollo ✅ · Validación ⏳ Pendiente · Investigación ✅ [`investigacion-decoradores-closures.md`](investigacion-decoradores-closures.md) — 1 ajuste real: peldaño de closure simple añadido antes del decorador completo.

*Contenido original, conservado sin cambios como referencia para la futura construcción de N2.*

## Ficha de control

| Campo | Valor |
|---|---|
| **Dirección** | N1.M1.T1 |
| **Gran pregunta** | ¿Cómo puede una función "envolver" a otra sin tocar ni una línea de su interior? |
| **Prerrequisitos** | N0.M3.T3 (`sorted(key=)` — funciones como valores, ya sembrado); N0.M1.T1 (función como contrato) |
| **Competencias** | C-N1-01, C-N1-06 |
| **Conexión con N0** | N0 nunca nombró "funciones como valores" explícitamente — solo lo usó de pasada en `sorted(key=)`. Esta lección cosecha esa semilla con nombre propio. |
| **Conexión con N1.M1.T2 (Listas y tuplas)** | Las funciones fueron el primer "valor que se pasa"; las listas serán la primera estructura que agrupa muchos valores — ambas construyen la idea de que "todo en Python es un objeto que se puede mover". |

## Bloque 0

**Recuperación (N0.T8, cierre del nivel):** 1) ¿Cómo se lee un traceback? 2) ¿Qué distingue `SyntaxError` de un error de ejecución? 3) ¿Por qué el error se lee como información, no como fracaso?

**Diagnóstico relámpago:** *"¿Puedes asignar una función a una variable, igual que asignarías un número? ¿Qué pasaría si lo intentas?"*

**Problema motivador:** *"Quiero medir cuánto tarda cualquier función SIN modificar una sola línea de su código."* No resoluble sin funciones-como-valores.

**Errores deliberados:** 1) Creer que el decorador se ejecuta *cuando se llama* la función decorada (se ejecuta al *definirla*). 2) Anidar decoradores sin entender que el orden de aplicación importa (de abajo hacia arriba).

## Bloque 1 — Intuición, historia

**Hook:** *"Ya usaste una función como valor sin saberlo: `sorted(lista, key=una_funcion)`. Hoy nombras esa idea y la llevas hasta su forma más poderosa."*

**Analogía (conservada, ya aprobada):** el decorador como **caja que envuelve un regalo sin abrirlo** — la función original sigue intacta adentro; lo que cambia es lo que ocurre alrededor cuando se usa.

## Bloque 2 — Conflicto cognitivo

```python
def saluda():
    print("hola")

saluda2 = saluda   # sin paréntesis: es la función misma, no su resultado
saluda2()          # hola
```

Sorpresa: `saluda2 = saluda` no ejecuta nada — asigna la función como valor, igual que `x = 5`. El estudiante que espera que las funciones sean "solo acciones" descubre que también son objetos que se mueven con etiquetas (eco directo de N0.T2).

## Bloque 3 — Explicación rigurosa (con el ajuste de la investigación: peldaño de closure)

**Paso 1 — funciones como valores (ya sembrado, ahora nombrado):** una función se puede asignar, pasar como argumento, y **devolver** desde otra función.

**Paso 2 — closure, el peldaño nuevo (añadido tras la investigación):**
```python
def fabrica_saludo(nombre):
    def saludar():
        print(f"Hola, {nombre}")
    return saludar

saludo_alex = fabrica_saludo("Alex")
saludo_alex()   # Hola, Alex — "recuerda" nombre aunque fabrica_saludo ya terminó
```
La función interna **recuerda** el entorno donde nació, incluso después de que la función externa ya terminó de ejecutarse. Esto es un *closure* — el mecanismo real detrás de todo decorador.

**Paso 3 — el decorador completo:**
```python
def decorador(func):
    def envoltura():
        print("Antes de ejecutar")
        func()
        print("Después de ejecutar")
    return envoltura

@decorador
def saluda():
    print("hola")

saluda()
```

## Bloque 4 — Escalera

**Predecir:** el conflicto del Bloque 2 (`saluda2 = saluda`). **Investigar:** trazar la closure del Bloque 3, paso 2 — ¿qué valor "recuerda" `saludar` cuando se ejecuta? **Escribir:** un decorador propio que mida tiempo de ejecución (el problema motivador del Bloque 0), antes de usar el primero de FastAPI (N2). **Depurar:** diagnosticar por qué un decorador sin `*args, **kwargs` rompe con funciones que reciben argumentos.

## Bloque 5 — Laboratorio

**Trade-off:** un decorador simplifica el código que lo usa, pero esconde lógica de quien lee la función decorada sin ver el decorador — ¿cuándo vale la pena esa opacidad?

**Argumento de corrección:** ¿el decorador propio funciona con funciones que reciben argumentos? ¿Y con funciones que devuelven un valor (no solo que imprimen)?

## Bloque 6 — Consolidación

**Defensa:** 1) ¿Por qué `saluda2 = saluda` no ejecuta `saluda`? 2) ¿Qué "recuerda" una closure y por qué eso es posible? 3) *(inédita)* Si un decorador puede ejecutar código antes y después de la función que envuelve, ¿qué responsabilidades nunca deberían esconderse ahí?

**Idea universal (conservada):** puedes añadir comportamiento a algo sin tocar su interior — la envoltura es tan válida como la modificación.

**Beyond the Curriculum:** *"Los decoradores con argumentos propios (`@decorador(3)`) añaden una capa más de funciones anidadas — la misma idea, un nivel más profundo. Lo verás cuando FastAPI use `@app.get('/ruta')` en N2."*

## Evidencia e instrumento

Predice correctamente el comportamiento de asignar una función sin ejecutarla; traza qué recuerda una closure; escribe un decorador propio funcional. RM-03 + TD-01.

## Registro de observaciones

| # | Fecha | Observación | Categoría |
|---|---|---|---|
| — | *(pendiente)* | — | — |
