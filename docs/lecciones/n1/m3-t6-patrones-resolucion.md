# N1.M3.T6 — Patrones de resolución

> **Estado:** Desarrollo ✅ · Validación ⏳ Pendiente · Investigación ✅ [`n1-m3-t6-patrones-resolucion.md`](../../investigacion/n1-m3-t6-patrones-resolucion.md) — construida bajo DOC-11 v2.0.1 (Estándar de Excelencia Mundial). **Cierra M3 (Algoritmos y Estructuras de Datos I).**
>
> Motor de ejecución: **Pyodide (Python real en el navegador)**.

## Ficha de control

| Campo | Valor |
|---|---|
| **Dirección** | N1.M3.T6 |
| **Gran pregunta del módulo (M3)** | ¿Cómo elegimos soluciones que continúan siendo buenas cuando el problema escala? |
| **Gran pregunta de esta lección** | Ante un problema nuevo del que no sabes nada, ¿cuál es tu primer movimiento — y por qué "empezar a escribir código" casi nunca es la respuesta correcta? |
| **Prerrequisitos** | N1.M3.T1–T5 (todo el módulo) |
| **Competencias** | C-N1-02, C-N1-06 |
| **Duración** | Heurística. Escalera densa (7 categorías) + laboratorio tipo entrevista (rol Entrevistador) + desafío final. Cierre del largo aliento B-M3. |
| **Conexión con T1-T5** | Cada patrón de esta lección se ancla en algo YA resuelto: fuerza bruta = el O(n²) de T1; conteo con dict = el detector de duplicados de T1 y el contador de frecuencias de M1.T3; el desafío final conecta directo con la precondición de orden de T2. |

## Bloque 0 — Preparación del Tutor

**Recuperación (T5):** 1) ¿Por qué `suma_hasta(5)` del conflicto de Recursión truena? 2) ¿Qué significa "confiar en la hipótesis recursiva"?

**Diagnóstico relámpago:** *"Si te dieran un problema de programación que nunca viste, ¿cuál sería tu PRIMER movimiento, antes de escribir cualquier código?"*

**Problema motivador:** *"Quiero encontrar si dos números de una lista suman exactamente un objetivo dado — y quiero resolverlo primero de la forma más simple posible, aunque no sea la más rápida, antes de optimizar."*

**Errores deliberados a inyectar:**
1. **Codificar antes de entender** — lanzarse a escribir código sin haber articulado el plan, produciendo algo que "se ve" razonable pero no resuelve el problema real.
2. **Abandonar la fuerza bruta por vergüenza** — saltar directo a una solución "elegante" sin haber verificado primero que se entiende el problema con la versión simple.

## Bloque 1 — Intuición, analogía e historia

**Hook:** *"Hasta ahora aprendiste algoritmos y estructuras por separado. Hoy aprendes el método que los convierte en un resolutor real — el mismo método que se usa hace 80 años para resolver CUALQUIER problema, no solo de programación."*

**Analogía (ficha SYL-N1, verificada como predictiva):** el problema es una **cerradura**, y el repertorio de patrones es un **llavero**. No se prueban llaves al azar esperando que alguna funcione — se mira la cerradura, se identifica qué TIPO de llave podría servir, y se prueba con método.

**Historia (hallazgo real de gran peso, verificado):** el método "entender→plan→codificar→verificar" de la ficha **no es una invención de esta Academia** — es una adaptación directa del método de cuatro pasos de George Pólya, publicado en *How to Solve It* (1945): entender el problema, idear un plan, llevar a cabo el plan, revisar. Más de un millón de copias vendidas, en impresión continua desde entonces — uno de los libros de pedagogía matemática más influyentes jamás escritos. Hoy se aplica el mismo método, adaptado a código.

## Bloque 2 — Conflicto cognitivo

```python
def dos_suman(lista, objetivo):
    for i in range(len(lista)):
        if lista[i] + lista[i] == objetivo:
            return True
    return False

print(dos_suman([2, 7, 11, 15], 9))
```

**Predicción esperada:** `2 + 7 = 9` — ¿esta función lo encuentra?

La sorpresa: **no** — imprime `False`. El bug (`lista[i] + lista[i]`, sumando el MISMO elemento consigo mismo) hace que nunca se compare con ningún otro elemento distinto. El código "se ve" razonable a primera vista — precisamente porque se escribió sin haber entendido bien el problema primero.

## Bloque 3 — Explicación rigurosa

**El método de Pólya, adaptado a código:**
1. **Entender:** reformular el problema con tus propias palabras, identificar entradas/salidas, pensar en los casos borde ANTES de codificar.
2. **Planear:** elegir un enfoque — empezando por fuerza bruta si hace falta.
3. **Codificar:** llevar el plan a código, no al revés.
4. **Verificar:** probar contra casos concretos, incluidos los bordes.

**Fuerza bruta primero (el error habitual #2, con respaldo real):** probar TODAS las combinaciones posibles — O(n²) para "dos suman" — es el primer paso **legítimo**, no una vergüenza. Confirma que se entiende el problema antes de optimizar.

**Patrones reales, cada uno anclado en algo ya conocido:**
- **Conteo con dict/set (ya usado en T1 y M1.T3):** por cada elemento, verificar si `objetivo - elemento` ya se vio — O(n), sin necesitar orden.
- **Dos punteros (sobre datos ORDENADOS):** un puntero al inicio, otro al final, moviéndose según si la suma actual es muy chica o muy grande — O(n), sin memoria extra.
- **Ventana deslizante (para "subarreglo que cumple una condición"):** un rango que se expande y contrae en una sola pasada, sin recorrer combinaciones de más.

## Bloque 4 — Escalera de práctica

*Nota de densidad (DOC-11 v2.0.1): siete categorías.*

**Predecir:**
1. El conflicto del Bloque 2.
2. Qué complejidad tiene "dos suman" resuelto con dict.
3. Dado una lista ya ordenada, ¿dict o dos punteros conviene más (mismo O(n), pero uno sin memoria extra)?

**Leer código:** una implementación con dos punteros sobre lista ordenada — identificar cuándo el puntero izquierdo avanza y cuándo el derecho retrocede.

**Investigar / trazar:** comparar fuerza bruta (O(n²)) contra la versión con dict (O(n)) para "dos suman", contando comparaciones — consistente con T1.

**Modificar:** la función buggy del Bloque 2 → corregirla comparando `lista[i]` con `lista[j]` (`i ≠ j`), no consigo misma.

**Refactorizar:** la fuerza bruta O(n²) de "dos suman" → la versión con dict, O(n).

**Escribir:** implementar "dos suman" con dos punteros, dado que la lista YA está ordenada.

**Depurar (tres ejercicios, dificultad creciente):**
1. Codificar antes de entender — el bug del Bloque 2.
2. No verificar casos borde (lista vacía, un solo elemento, ningún par suma el objetivo).
3. *(compuesto)* Una solución con dos punteros aplicada a una lista NO ordenada — falla silenciosamente, exactamente igual que la búsqueda binaria de T2.

## Bloque 5 — Laboratorio: mini-proyecto integrador (rol Entrevistador, primera aparición)

**Integración real (con T1-T5):** una sesión guiada tipo entrevista amable — no un examen, una práctica del método completo.

**El proyecto — Subarreglo contiguo más corto con suma ≥ K (ventana deslizante):** dado un arreglo de enteros positivos y un número `K`, encontrar la longitud del subarreglo contiguo MÁS CORTO cuya suma sea al menos `K`.

**Trade-off explícito (la pregunta ingenieril de la ficha, textual):** ante un problema nuevo del que no sabes nada, ¿cuál es tu primer movimiento — y por qué "empezar a escribir código" casi nunca es la respuesta correcta?

**Argumento de corrección (evidencia de dominio, DOC-03 A5, textual):** enumerar los casos de prueba (incluidos bordes: ningún subarreglo alcanza `K`; el arreglo completo apenas alcanza `K`) ANTES de ejecutar.

**Confrontación de soluciones:** comparar resolver el problema con fuerza bruta (revisar todos los subarreglos posibles, O(n²)) contra ventana deslizante (O(n), una sola pasada).

**Fase 2 — transferencia sin instrucciones repetidas:** aplicar el método completo de Pólya a un problema nuevo sin patrón dado, articulando el plan antes de codificar.

## Bloque 6 — Consolidación

**Defensa socrática:**
1. ¿Por qué la función del conflicto no encuentra el par correcto, aunque "se ve" razonable?
2. ¿Por qué la fuerza bruta es un primer paso legítimo, no una vergüenza?
3. *(inédita, la pregunta ingenieril de la ficha, textual)* Ante un problema nuevo del que no sabes nada, ¿cuál es tu primer movimiento — y por qué "empezar a escribir código" casi nunca es la respuesta correcta?

**Seis preguntas de excelencia:**
1. ¿Qué aprendí? Que resolver problemas nuevos con método (entender→plan→codificar→verificar) es más confiable que confiar en la intuición o en empezar a escribir directo.
2. ¿Por qué existe este concepto? Porque los algoritmos sueltos no hacen un resolutor — hace falta un proceso consciente para elegir cuál usar y cuándo.
3. ¿Qué problema resuelve? Reduce el riesgo de escribir código que "se ve" razonable pero no resuelve el problema real, o que se abandona a mitad de camino.
4. ¿Cómo lo usan los profesionales? Empiezan por entender y por fuerza bruta cuando hace falta, sin vergüenza — optimizan después, con el problema ya entendido.
5. ¿Cómo se conecta con lo anterior? Cada patrón de hoy reutiliza algo de T1-T5: fuerza bruta es el O(n²) de T1, conteo con dict es el detector de duplicados de T1, la trampa del desafío final es la misma precondición de orden de T2.
6. ¿Qué pasaría si no existiera este método? Cada problema nuevo se atacaría al azar, sin ningún proceso confiable para verificar que la solución realmente resuelve lo que se pidió.

**Reflexión metacognitiva:**
- ¿En qué ejercicio codificaste antes de entender del todo el problema, y qué te costó ese atajo?
- ¿Cómo se conecta el método de Pólya de hoy con el criterio de diseño OOP de "cuándo sí y cuándo no" de M2?
- ¿Qué problema nuevo (fuera de esta lección) atacarías distinto ahora, con el método completo, en vez de por intuición?

**Desafío final inédito — la misma trampa de precondición, otra vez:**
```python
def dos_suman_punteros(lista, objetivo):
    izq, der = 0, len(lista) - 1
    while izq < der:
        suma = lista[izq] + lista[der]
        if suma == objetivo:
            return True
        elif suma < objetivo:
            izq += 1
        else:
            der -= 1
    return False

print(dos_suman_punteros([15, 2, 11, 7], 9))
```
Predecir, ANTES de ejecutar: `2 + 7 = 9`, y ambos están en la lista — ¿la función lo encuentra? Explicar por qué el patrón de "dos punteros" **también** exige una precondición (datos ordenados) — la lista `[15, 2, 11, 7]` no lo está, y el resultado es incorrecto y silencioso, exactamente el mismo tipo de trampa que la búsqueda binaria de T2. Ningún patrón está libre de sus propias condiciones de uso.

**Lectura dirigida:** [George Pólya — How to Solve It](https://en.wikipedia.org/wiki/How_to_Solve_It).

**Beyond the Curriculum:** *"Estos mismos patrones (fuerza bruta, dos punteros, ventana, conteo con dict) son el repertorio base de cualquier entrevista técnica de programación en la industria — y la pista ⚔️ de katas de este proyecto los va a seguir practicando. El método de Pólya, mientras tanto, sirve para CUALQUIER problema nuevo de tu carrera, tenga o no que ver con código."*

## 4. Criterio de dominio — siete capacidades

| # | Capacidad | Instrumento en esta lección |
|---|---|---|
| 1 | Explicar | Bloque 6, defensa + pregunta de excelencia |
| 2 | Predecir | Bloque 4, "predecir" (3) |
| 3 | Detectar errores | Bloque 4, "leer código" + Bloque 0, errores deliberados |
| 4 | Corregir | Bloque 4, "depurar" (3, incluido el caso compuesto de dos punteros sin orden) |
| 5 | Modificar | Bloque 4, "modificar" (comparación con otro elemento) + "refactorizar" (fuerza bruta→dict) |
| 6 | Aplicar en contexto nuevo | Bloque 6, desafío final (dos punteros exige orden, igual que binaria) |
| 7 | Usar en un proyecto | Bloque 5, subarreglo más corto con ventana deslizante (rol Entrevistador) |

**Instrumento DOC-02:** RM-03 + TD-01. Evidencia observable: en katas cronometradas suaves, articula el plan en voz alta antes de codificar y enumera los casos de prueba antes de ejecutar (evidencia de dominio ya declarada en SYL-N1, textual).

## 4bis. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Clasificación |
|---|---|---|---|---|---|---|
| [George Pólya — How to Solve It](https://en.wikipedia.org/wiki/How_to_Solve_It) | George Pólya, 1945 | EN | ~20 min (resumen) | Introductorio | Fuente original y verificada del método entender→plan→codificar→verificar de esta lección | 🟢 Antes de estudiar |

## Registro de observaciones

| # | Fecha | Observación | Categoría |
|---|---|---|---|
| — | *(pendiente)* | — | — |
