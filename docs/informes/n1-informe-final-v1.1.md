# Informe Final de Nivel — N1 v1.1 (reconstrucción SCA v1.0)

*Rama: `nivel/n1-scav1`. Complementa a `n1-informe-final-de-nivel.md` (v1.0). Documenta la pasada de auditoría-y-enriquecimiento guiada por el Sistema de Calidad Académica v1.0 y la directiva del Director: cada N debe estar a "nivel mundial top" antes de avanzar; el alumno empieza desde cero; añadir trucos/fórmulas reales de practicantes; auditar si de verdad vale avanzar.*

## 1. Veredicto de la auditoría

**N1 era una base élite con defectos reales corregibles, no un nivel a rehacer.** La auditoría multi-agente (8 agentes + síntesis, evidencia real) encontró: (a) 6 errores de contenido genuinos —contradicciones internas y afirmaciones técnicamente incorrectas—, (b) ~11 huecos de tema donde faltaba una habilidad que el propio Capstone o la industria presuponen, y (c) oportunidades de trucos de experto reales con atribución. Ninguno exigía tirar y rehacer; todos se resolvieron con correcciones quirúrgicas + temas nuevos densos, sin relleno.

## 2. Métrica de crecimiento

| | v1.0 | v1.1 | Δ |
|---|---|---|---|
| Objetos-día (LEVEL1) | 104 | 119 | +15 |
| IDs únicos totales | 481 | 549 | +68 |
| Duplicados de id | 0 | 0 | — |
| `node --check` | OK | OK | — |

Todo el contenido nuevo verificado **contra Python/sqlite/git reales** (solución PASS + prueba negativa rechazada), no contra suposiciones.

## 3. Correcciones P0 (errores reales)

1. **P0.1 — BFS con `list.pop(0)` O(n)** → `collections.deque` con `.popleft()` O(1). Contradecía la propia lección de complejidad del módulo. (M3.T9 + días DFS/Dijkstra.)
2. **P0.2 — construcción de dict con `range(len(...))`** → `dict(zip(...))` idiomático. (M1.D3.)
3. **P0.3 — `__eq__` devolvía `False`** ante tipo incompatible → `return NotImplemented` (deja que Python pruebe el `__eq__` del otro operando). (M2.T4.)
4. **P0.4 — backoff exponencial sin jitter** → **Full Jitter** (`random.uniform(0, min(cap, base·2^intento))`), con atribución a Marc Brooker / AWS 2015 sobre el thundering herd. (M6.T4.)
5. **P0.5 — "el índice es un BST"** → es un **B-tree** (balanceado, alto fan-out, páginas de disco), + índice implícito de la PRIMARY KEY. (M7.T5.)
6. **P0.6 — se exigía criterio sobre el PATH sin explicarlo** → paso nuevo que enseña la resolución de comandos (`$PATH`, `where.exe`/`which`). (M5.T1.)

## 4. Temas y labs nuevos (P1 + P2)

| # | Módulo | Nuevo | Días | Truco de experto (con atribución) |
|---|---|---|---|---|
| P1.1 | M5 | Paridad PowerShell en T3/T4/T5 (desbloquea al alumno Windows) | — | ACLs/`icacls`, Execution Policy |
| P1.2 | M3 | Montículos y colas de prioridad (heap) | 2 | heap para top-K; max-heap negando |
| P1.3 | M3 | Divide y vencerás y merge sort | 2 | `sorted()` ES Timsort (Tim Peters); quickselect O(n); contar inversiones |
| P1.4 | M4 | Lab: inspeccionar/deshacer/.gitignore | 1 lab real | revert vs reset; `rm --cached`; secret scanning |
| P1.5 | M6 | Cliente `requests` de producción (timeout/raise_for_status/Session) | 2 | Session + HTTPAdapter+Retry (urllib3) |
| P1.6 | M7 | Subconsultas SQL | 2 | CTE (WITH) estándar dbt/BigQuery; trampa `NOT IN` con NULL |
| P1.7 | M7 | Normalización 2NF/3NF + dependencias funcionales | 1 | "the key, the whole key, and nothing but the key" (Bill Kent) |
| P2.1 | M1 | Funciones de orden superior (HOF) | 2 | map/filter vs comprehension (Guido); late-binding en bucle |
| P2.2 | M1 | `collections`: Counter/defaultdict/namedtuple | 1 | aritmética de Counter (histogramas) |
| P2.3 | M2 | `@dataclass` | 1 | `order=True` ordena por campos; attrs/pydantic |
| P2.4 | M2 | `@classmethod` y `@staticmethod` | 1 | patrón `from_x`/`desde_x` de la stdlib |
| P2.5 | M3 | Tabla de complejidad de operaciones built-in | +tabla+ex | `in` lista O(n) vs set/dict O(1) |

## 5. Decisiones de diseño declaradas honestamente

- **M6 sin red real:** el Campus corre Pyodide sin `pyfetch`/`pyodide-http` (documentado en `docs/investigacion/n1-m6-redes-apis.md`). El tema de `requests` enseña los idiomas de producción con un **simulador fiel inline** (mismos nombres de método que la librería real), coherente con la filosofía ya establecida del módulo. No se hacen llamadas en vivo.
- **Normalización con FDs declaradas, no muestreadas:** las dependencias funcionales se dan como reglas de negocio; inferirlas de una muestra pequeña genera FDs espurias. Esto es fiel a cómo se normaliza de verdad.
- **Anti-relleno explícito:** prefix-sums NO se añadió — su espacio pedagógico (consultas de rango eficientes) ya lo cubren los temas de ventana deslizante de M3.T6. Se documenta la ausencia en vez de forzar un día de relleno.

## 6. Verificación estructural final

- 119 días, **0 ids-día duplicados**; 549 ids totales, **0 duplicados**.
- Todo `ex` con `py:true` tiene función `check`; los `retoFinal` de predicción llevan `check` de salida.
- 13 labs `modalidad:"real"` (M4/M5) + 1 Capstone `modalidad:"proyecto"` (`n1et1`) — completables por su flujo propio.
- Wiring `LEVELS = [LEVEL0..LEVEL12]` intacto.
- Cada tema nuevo: solución verificada PASS contra el intérprete real + prueba negativa rechazada + `node --check` + barrido de ids único, antes de cada commit.

## 7. Veredicto de avance

**N1 v1.1 alcanza el estándar "nivel mundial top" y está listo para congelarse como candidato.** La densidad, la dificultad progresiva desde cero, los temas nuevos (estructuras de datos avanzadas, divide y vencerás, SQL analítico, normalización formal, HOF/closures, dataclasses, herramientas del módulo `collections`), y los trucos de practicantes con atribución real elevan el nivel al de un primer curso serio de programación de universidad top. **Procede el avance al siguiente nivel del alcance (N0/N2/N3/N4).**
