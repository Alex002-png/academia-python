# Informe Final de Nivel — N0 v2.1 (pasada SCA v1.0)

*Rama: `nivel/n0-scav1`. Complementa a `n0-informe-final-de-nivel.md`. Documenta la auditoría-y-corrección bajo el Sistema de Calidad Académica v1.0.*

## 1. Veredicto de la auditoría

**N0 tenía prosa correcta pero DOS muros estructurales que lo hacían IMPOSIBLE de completar.** Una auditoría independiente (subagente lector) más verificación empírica directa sobre el motor confirmaron que el nivel, tal como estaba, se paraba en seco alrededor del Día 16-17 — ningún estudiante podía terminarlo, llegar al Proyecto, ni aprobar el nivel. Corregir esto era la prioridad #1 absoluta: un nivel incompletable no puede "avanzar".

## 2. Correcciones P0 (bloqueadores reales de completitud)

**P0-1 — Días 17-20 usaban sintaxis que el motor de N0 bloquea.** N0 corre sobre un mini-intérprete JS propio (`runScripted`) con un "gate de futuro" (línea 492) que lanza `SyntaxError` ante `def`/`return`/`for`/`in`/listas, reservándolos para más adelante. Pero los Días 17-20 (Funciones, Lectura de código) están construidos enteramente sobre esos constructos, y ningún ejercicio de N0 tenía `py:true` — así que **cada ejercicio afectado lanzaba SyntaxError antes de siquiera evaluar la respuesta**, y la progresión (secuencial) se detenía en el Día 17.
- **Fix:** `py:true` en los 12 ejercicios que requieren sintaxis real (d9e1-e5, d9r, d9e6-e7, d10e5, d10r, d10e6-e7) → ahora corren en Pyodide/Python real, igual que todo N1+. Verificado: los 12 PASS contra Python real.

**P0-2 — El motor hace ECHO del input, y 5 checks lo comparaban con `===` exacto.** Ambos motores (mini-intérprete Y Pyodide) escriben `prompt + valor + "\n"` a la salida al llamar `input()` (simulan un terminal). Cinco checks comparaban la salida COMPLETA con igualdad exacta, así que **cualquier solución que de verdad llamara `input()` fallaba**; peor, d8e6/d8e7 (Día 16) formaban un muro absoluto que bloqueaba Proyecto/Repaso/Examen.
- **Fix:** checks echo-aware (comparar la ÚLTIMA línea, tras el eco) + exigir `input()` donde una sola corrida permitía hacer trampa hardcodeando (d6e5, d6x, d8e6, d8e7, drp1). Verificado replicando el motor real de echo (`__academia_run`) en local: los 5 PASS con solución de input, hardcodes rechazados.

## 3. Mejora de contenido (P2) — el hueco crítico de currículo

**Tema nuevo: "El bucle for y range" (Día 14b, `d7c`, py:true).** N0 enseñaba iteración solo con `while` y bloqueaba `for`; pero N1 USA `for ... in range()` desde su Día 3 (Listas) sin enseñarlo en ningún lado — un estudiante desde cero chocaba con `for` sin instrucción previa. Se añade un tema completo: `for` sobre secuencias, `range(n)`/`range(a,b)`/`range(a,b,paso)` y el off-by-one, acumular en N vueltas, y el truco `break`/`continue`. 4 ejercicios + desafío final, verificados contra Python real. Resuelve además la contradicción de diseño (los Días 19-20 ya usaban `for`). El gate `FUTURE` se actualizó para que `for/in/def/return` apunten a "más adelante en este mismo nivel" en vez de "Nivel 1" (ahora inexacto).

## 4. Correcciones menores de calidad

- **d4e6**: título mal etiquetado ("Horas y minutos sobrantes" → "Días y horas sobrantes"; calcula 100//24=4 días, 100%24=4 horas).
- **d5x**: lista de vocales incompleta "(a, e, i, o)" → "(a, e, i, o, u)".
- **3 desafíos de descubrimiento (d3x, d4x, d5x)** se pasaban con un literal hardcodeado; ahora exigen la expresión real (`"10"*3`, `and`+`or`, `.replace()`).

## 5. Disciplina de verificación aplicada

Cada fix se verificó ejecutando la solución intencionada contra el intérprete real (o replicando exactamente la lógica de echo del motor cuando aplicaba a exercises del mini-intérprete) + una prueba negativa. Un error propio de cálculo (conteo de "a" en "cazadora amarilla": 6, no 4) fue detectado y corregido precisamente por esta verificación. `node --check` OK, 123 ids, 0 duplicados.

## 6. Veredicto de avance

**N0 v2.1 pasa de INCOMPLETABLE a completable, correcto y con la base de iteración que N1 presupone.** Los dos muros estructurales están derribados, las trampas de hardcode cerradas, y el hueco de `for`/`range` — que habría frenado al alumno en el Día 3 de N1 — cubierto desde cero. **Procede el avance.**
