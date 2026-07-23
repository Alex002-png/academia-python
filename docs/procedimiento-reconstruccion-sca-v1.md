# Procedimiento de reconstrucción SCA v1.0 — división en ventanas

*No es un DOC-STD (no es un estándar permanente) — es el plan de ejecución de una sola vez para llevar N0-N12 desde su estado actual al objetivo de DOC-STD-03. Este documento vive fuera del catálogo Tier T1/T2 porque deja de tener sentido en cuanto la reconstrucción termine.*

## 0. Por qué dividir en oleadas y no en 13 ventanas simultáneas

La fusión de las 9 ramas `nivel/n4`...`nivel/n12` (ya ejecutada, ver `docs/informes/`) produjo dos clases de bug de Git invisibles, ninguna señalada por marcadores de conflicto:

1. Un `];` de cierre que dos ramas insertaban en el mismo punto — Git descarta uno silenciosamente al fusionar.
2. Un nivel entero (`nivel/n11`) insertado en la posición incorrecta del archivo, porque su rama divergió antes de que existieran ramas intermedias.

Con 13 ventanas simultáneas ese riesgo se multiplica por 13 puntos de fusión en vez de 9. Por eso: **oleadas de 2-3 ventanas activas a la vez, nunca más.**

## 1. Las 4 oleadas

| Oleada | Niveles | Días nuevos aprox. | Ventanas simultáneas recomendadas |
|---|---|---|---|
| **1 — Fundamentos** | N0, N1, N2, N3, N4 | ~700 | 2-3 (empezar por N1+N2, luego N3+N4, N0 al final o en paralelo por ser la más ligera) |
| **2 — Núcleo de IA moderna** | N5, N6, N7 | ~280 | 2-3 (N7 es el "gold standard" — dedicarle ventana propia, no compartirla) |
| **3 — Sistemas y producción** | N8, N9, N10 | ~290 | 2-3 |
| **4 — Investigación y arquitectura** | N11, N12 | ~215 | 2 |

Cada oleada empieza solo cuando la anterior está fusionada y verificada en su rama de staging — no en paralelo entre oleadas.

## 2. Setup técnico — worktrees por nivel

Estado real verificado (2026-07-23): `nivel/n5` a `nivel/n12` ya tienen worktree propio (`academia-python-n5`...`-n12`). **N0, N1, N2, N3 y N4 NO tienen worktree dedicado** — su contenido vive directamente en el historial de `main`/`nivel/n4`. Antes de abrir una ventana para cualquiera de estos, crear su worktree:

```bash
cd C:\Users\USER\academia-python-staging   # o cualquier checkout con acceso a origin
git worktree add ../academia-python-n0 -b nivel/n0-scav1 main
git worktree add ../academia-python-n1 -b nivel/n1-scav1 main
git worktree add ../academia-python-n2 -b nivel/n2-scav1 main
git worktree add ../academia-python-n3 -b nivel/n3-scav1 main
```

Para N5-N12, crear la rama de trabajo de esta ronda a partir de main actualizado (no reusar las ramas `nivel/nX` originales, que ya están fusionadas y cerradas):

```bash
cd C:\Users\USER\academia-python-n5
git fetch origin
git checkout -b nivel/n5-scav1 origin/main
```//(repetir para n6...n12)

## 3. El prompt de arranque para una ventana sin contexto

Cada ventana nueva (sin memoria de esta conversación) necesita este mensaje de arranque exacto, adaptado a su nivel:

```
Estás trabajando en el worktree C:\Users\USER\academia-python-nX, rama nivel/nX-scav1.

Contexto: la Academia Python adoptó un nuevo estándar de calidad, SCA v1.0. Antes de
tocar cualquier código, lee en este orden:
1. CLAUDE.md (raíz del repo)
2. docs/DOC-STD-01-construccion-de-temas.md
3. docs/DOC-STD-02-construccion-de-modulos.md
4. docs/DOC-STD-03-construccion-de-niveles.md — ve directo a la sección "N{X} — {nombre}"
5. docs/guia-construccion-niveles.md (el flujo institucional de 9 pasos)
6. docs/syllabus/syl-n{X}.md (el syllabus ya aprobado de este nivel)

Tu tarea: expandir el Nivel {X} desde su estado actual hasta la meta de DOC-STD-03 §N{X}.
Cada tema marcado NUEVO en esa tabla no existe todavía en index.html -- escríbelo desde
cero, usando la fuente citada como punto de partida de tu propia investigación (nunca la
única fuente ni una copia de ella). Cada tema existente se amplía hasta su columna
"Días objetivo" -- nunca se acorta, y ampliar nunca significa rellenar (DOC-STD-01 §2).

Sigue el flujo de 9 pasos completo. Verifica con node --check + harness real de check()
contra Pyodide + unicidad de ids antes de cada commit. Al terminar el nivel completo,
produce el Informe Final de Nivel y preséntalo como candidato v1.1 -- nunca autodeclarado.

No fusiones a main tú mismo -- al terminar, deja la rama lista y avisa para la fusión
de oleada.
```

## 4. Procedimiento de fusión

1. **Fin de ventana:** cada nivel termina en su propia rama `nivel/nX-scav1`, con Informe Final + candidato v1.1.
2. **Fin de oleada:** fusionar las ramas de esa oleada en una rama de staging propia (`release/scav1-oleada1`, etc.), verificando tras CADA merge: `node --check`, balance de llaves, orden real de `LEVELn` vía `grep -n "^const LEVEL[0-9]*=\["` — nunca confiar solo en la ausencia de marcadores de conflicto.
3. **Fin de las 4 oleadas:** fusionar las 4 ramas de staging en una única rama final, repetir toda la verificación (unicidad de ids total, `node --check`, harness completo de N0-N12).
4. **Solo entonces:** pedir confirmación explícita del Director antes de fusionar a `main` y desplegar — mismo protocolo ya usado para N4-N12.

## 5. Qué NO hacer

- No abrir las 13 ventanas a la vez.
- No dejar que una ventana toque `LEVELS`/`LEVEL_META` compartidos (`index.html`) — esa fusión de wiring se hace una sola vez, al final, igual que en la ronda anterior.
- No declarar un nivel "v1.1 final" sin Auditoría Integral + Informe Final — mismo estándar que ya rige toda la Academia.
