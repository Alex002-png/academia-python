# N1.M4.T2 — Laboratorio 6 · Ramas y merge

*Construido bajo DOC-12 v1.0.0. Investigación: `docs/investigacion/n1-m4-git-github.md`.*

**Gran pregunta:** ¿cómo experimentas sin arriesgar lo que ya funciona?

**Entorno objetivo:** terminal local + repositorio propio de T1. **Fluencia asumida:** Laboratorio 5. **Fuera de alcance:** Pull Requests (T3).

**Duración desglosada:** contexto (10) + explicación conceptual (10) + pasos guiados (25) + error/conflicto en vivo (15) + mini laboratorio (15) + desafío (10) + evaluación (10) → **~95 min**.

## Objetivo
Desarrollar en una rama sin tocar `main`; fusionarla; provocar y resolver tu primer conflicto de merge sin pánico.

## Contexto
El desarrollo real es paralelo — mientras arreglas un bug, alguien más (o tú mismo, otro día) añade una función nueva. Trabajar todo directamente en `main` significa que un experimento a medias puede romper lo único que funciona. Una rama es la solución: un universo paralelo barato donde experimentar no cuesta nada, hasta que decides traer los resultados de vuelta.

## Explicación conceptual
Una rama en Git **no es una copia** — es, literalmente, "un puntero móvil y liviano a uno de los commits" (Pro Git). Crearla toma una fracción de segundo, no copia archivos. Cuando fusionas (`merge`), Git intenta combinar automáticamente los cambios; si dos ramas modificaron la misma línea de forma distinta, aparece un **conflicto** — que no es una catástrofe, es simplemente Git diciendo "no sé cuál de los dos querías, decide tú", marcado con `<<<<<<<`, `=======`, `>>>>>>>` directamente en el archivo.

## Pasos
1. `git branch nueva-funcion` → `git checkout nueva-funcion` (o `git checkout -b nueva-funcion` en un solo paso).
2. Modifica un archivo, haz un commit en esta rama.
3. Vuelve a `main` (`git checkout main`) — nota que tu cambio desapareció visualmente: sigue ahí, solo en la otra rama.
4. `git merge nueva-funcion` — si no hay conflicto, se fusiona limpio.
5. Provoca un conflicto real: modifica la MISMA línea en `main` y en otra rama antes de fusionar, luego intenta el merge.

## Conflicto en vivo (equivalente al error inducido)
Verás algo como:
```
<<<<<<< HEAD
tu versión en main
=======
la versión de la otra rama
>>>>>>>
```
Edita el archivo a mano, decide qué texto final quieres (puede ser uno, el otro, o una combinación), borra los marcadores, y `git add` + `git commit` para cerrar el merge.

## Comprensión
- ¿Por qué crear una rama es casi instantáneo comparado con copiar toda la carpeta del proyecto?
- ¿Qué significa exactamente cada uno de los tres marcadores de conflicto?

## Puntos de verificación
☐ Rama creada y con al menos un commit propio · ☐ Merge limpio realizado (sin conflicto) · ☐ Conflicto provocado, visto con mis propios ojos, y resuelto a mano · ☐ Explico qué decidí conservar y por qué.

## Diagnóstico de errores
`error: Your local changes would be overwritten` (cambios sin commitear antes de cambiar de rama — commitea o descarta primero) · conflicto que "no se resuelve" tras editar (olvidaste borrar los marcadores `<<<<<<<`/`=======`/`>>>>>>>` — Git los deja como texto literal si no los quitas) · rama que nunca se fusiona ("rama eterna" — cuanto más tiempo pasa, más conflictos acumula; fusionar seguido es más barato que fusionar tarde).

## Mini laboratorio
Crea dos ramas distintas desde `main`, cada una con un cambio en un archivo diferente (sin conflicto), y fusiona ambas de vuelta.

## Desafío
Sin mirar la guía: provoca un conflicto real en un archivo tuyo, resuélvelo conservando partes de AMBAS versiones (no solo eligiendo una), y explica tu decisión.

## Buenas prácticas
Una rama por experimento o funcionalidad, nunca "una rama para todo" · fusionar seguido, no acumular ramas eternas · nunca resolver un conflicto sin entender ambas versiones primero.

## Recursos
🟢 Antes — Pro Git, "Branches in a Nutshell", EN, ~15 min · 🔵 Durante — Pro Git, "Basic Branching and Merging", EN, ~25 min · ⭐ Profundización — Pro Git, "Advanced Merging", EN, ~20 min.

## Evaluación
**Cierre:** una rama es un puntero barato, no una copia; un conflicto es texto a decidir, no una catástrofe. **Repetir sin guía:** provoca y resuelve un conflicto nuevo de memoria. **Metacognitiva:** ¿qué tan real fue el miedo antes de ver tu primer conflicto, comparado con resolverlo de verdad?
