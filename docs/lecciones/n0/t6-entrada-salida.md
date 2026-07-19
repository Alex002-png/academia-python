# N0 · T6 — Entrada y salida

> **Estado:** Desarrollo ✅ · Validación ⏳ Pendiente · Investigación ✅ [`n0-t6-entrada-salida.md`](../../investigacion/n0-t6-entrada-salida.md)

*Bloques 1, 3, 4 conservan el material de producción ("Día 6").*

## Ficha de control

| Campo | Valor |
|---|---|
| **Dirección** | N0.M1.T6 |
| **Gran pregunta** | Si tu programa va a escuchar al mundo exterior, ¿en qué forma exacta le llega lo que escucha? |
| **Conexión con T2** | **La misma familia de error que el `contador = "10"` real de Alex** — allí escribió comillas de más; aquí `input()` las pone invisibles y hay que quitarlas con conversión. Direcciones opuestas, mismo problema de fondo: string vs. número. |
| **Conexión con T7 (Decisiones y repetición)** | Con datos de entrada ya confiables, T7 les da el poder de decidir y repetir sobre ellos. |

## Bloque 0

**Recuperación (T5):** 1) ¿Por qué `palabra[0] = "x"` falla? 2) ¿Qué hace `.strip().upper()` encadenado? 3) ¿Por qué un string es "un documento notariado"?

**Diagnóstico relámpago:** *"El usuario escribe `21` en un `input()`. ¿Qué imprime `print(edad + edad)`?"* — expone si el estudiante ya generalizó "todo lo que entra por input es texto" o sigue asumiendo que Python "sabe" que es un número.

**Problema motivador:** *"Necesito que tu programa sume dos números que el usuario escribe — de verdad los sume, no los pegue."* No resoluble sin conversión.

**Errores deliberados:** 1) `edad = input("Edad: "); print(edad + edad)` con `21` → `"2121"` (ya en producción) — clase: **input() sin convertir, la misma familia que el error real de Alex en T2**. 2) Convertir con `int()` cuando el dato puede traer decimales (ya en producción, errores).

## Bloque 1

**Hook (producción):** *"Hasta hoy tus programas hablaban solos. Hoy aprenden a ESCUCHAR."*

## Bloque 2 — Conflicto cognitivo

`edad = input("Edad: ")` con el usuario escribiendo `21`; `print(edad + edad)` da `"2121"`, no `42`. **Se conecta explícitamente con T2:** *"¿Recuerdas cuando escribiste `contador = "10"` con comillas por accidente? Aquí Python pone esas comillas por ti, siempre, aunque el usuario escriba solo dígitos — la misma confusión, en la dirección contraria."*

## Bloque 3

**`input()` siempre devuelve str (producción):** sin excepción. Todo número que entra por `input()` pasa por `int()` o `float()`.

```python
numero_1 = float(input("Primer número: "))
numero_2 = float(input("Segundo número: "))
print(f"Suma: {numero_1 + numero_2}")
```

**`print()` con opciones (producción):** `sep` (separador, default espacio), `end` (default salto de línea).

**Modelo mental (producción, ya sr):** `input()` es una **frontera de confianza** — todo lo que cruza es `str` no confiable que se valida y convierte antes de tocar la lógica, igual que una API valida cada request (conexión directa con lo que N2 formalizará).

## Bloque 4

**Predecir:** el propio conflicto del Bloque 2. **Escribir (producción):** saludo interactivo, la suma real (4+8=12 no "48"), calculadora de edad (año de nacimiento → edad en 2026). **Depurar:** diagnosticar por qué una suma da `"48"` en vez de `12`.

## Bloque 5 — Laboratorio

**Reto (producción):** pedir nombre y nota (0-20), imprimir `ALEX: 15 puntos` con el nombre en mayúsculas.

**Trade-off:** ¿validar el rango de la nota (0-20) ahora, o confiar en que el usuario escribe bien? — anticipa T8 (errores) sin resolverlo del todo aún.

**Argumento de corrección:** ¿qué pasa si el usuario escribe la nota con espacios de más?

## Bloque 6

**Defensa:** 1) ¿Por qué `input()` nunca devuelve directamente un número, ni siquiera si el usuario escribe solo dígitos? 2) Compara esto con tu propio error de T2 (`contador = "10"`): ¿en qué se parecen y en qué no? 3) *(inédita)* Si `input()` intentara "adivinar" el tipo automáticamente, ¿qué nuevo problema crearía?

**Beyond the Curriculum:** *"input→procesar→print es el esqueleto de todo sistema conversacional — hasta un chatbot con IA."*

## Evidencia e instrumento

Predice la trampa de concatenación antes de ejecutar; conecta explícitamente su propio error de T2 con esta lección en la defensa; corrige sin pista. RM-03 + TD-01.

## Registro de observaciones

| # | Fecha | Observación | Categoría |
|---|---|---|---|
| — | *(pendiente)* | — | — |
