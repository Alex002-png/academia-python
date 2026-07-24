# Consolidación SCA v1.0 — N0 a N4

*Rama: `staging/scav1-n0-n4` (worktree `academia-python-staging`), creada desde el merge-base común `7bfa978`. Fusiona las cinco ramas `nivel/nX-scav1` (N0-N4). **No fusionada a main ni a release/** — pendiente de confirmación del Director.*

## Resultado de la fusión

Las cinco ramas compartían el mismo merge-base (`7bfa978`) y cada una tocó solo la región de su propio nivel en `index.html` + sus propios documentos. **Fusión sin un solo conflicto.**

Verificación del `index.html` consolidado:
- `node --check`: **OK**.
- Wiring `LEVELS = [LEVEL0 … LEVEL12]`: **intacto**.
- **2895 ids en los 13 niveles, 0 duplicados** (confirma que no hubo colisión de ids entre niveles al fusionar).
- Conteos: N0 24 días/123 ids · N1 119/549 · N2 29/38 · N3 68/355 · N4 77/250 · N5-N12 sin tocar.
- Presencia de los fixes clave de cada nivel: **10/10 confirmados** (for/range + py:true + gate de N0; heap + dataclass de N1; login-por-cuerpo + OAuth2Bearer de N2; Monte Carlo reducido + gradiente precalculado de N3; typo de N4).

## Qué cambió por nivel

| Nivel | Estado previo | Correcciones críticas | Adiciones | Métrica |
|---|---|---|---|---|
| **N0** | INCOMPLETABLE (2 muros) | Días 17-20 bloqueados por el mini-intérprete → `py:true`; 5 checks rotos por el eco de input → echo-aware | Tema `for`/`range`/`break`/`continue`; nits + anti-hardcode | 117→123 ids |
| **N1** | Base élite con defectos | 6 P0 (BFS deque, dict(zip), `__eq__`, Full Jitter, B-tree, PATH) | 11 temas/labs (heap, merge sort, git-undo, requests, subconsultas SQL, 2NF/3NF, HOF, collections, dataclass, classmethod, tabla Big-O) + paridad PowerShell | 481→549 ids |
| **N2** | Enseñaba código roto/inseguro | 4 P0 (deadlock de concurrencia, credenciales en URL, handler que mentía, token en URL→header) | — (deuda documentada: SQLi, pooling, rate-limit) | 38 ids |
| **N3** | Matemática impecable, 2 retos rotos | 2 retos INCOMPLETABLES por límite de pasos + 1 error de enunciado | — (huecos documentados: SVD, correlación, MLE, Hessiano) | 349→355 ids |
| **N4** | ML técnicamente excelente | 0 errores; typo `accuncia`→`accuracy` | — (huecos documentados: ROC/AUC, Lasso, SGD) | 250 ids |

## Disciplina de verificación aplicada (todo el barrido)

- Cada ejercicio Pyodide corregido/nuevo se verificó ejecutando su solución contra **Python real** + una prueba negativa, antes de commitear.
- Los ejercicios de mini-intérprete/echo (N0) se verificaron **replicando el motor real** (`__academia_run`: compile+exec+StringIO, eco de input, tracer `max_steps=300000`) en local — así se confirmaron empíricamente los bugs de completabilidad de N0 y N3, no por suposición.
- Los labs `modalidad:"real"` (N2) se verificaron por corrección técnica frente al comportamiento real de FastAPI/psycopg/PostgreSQL (no ejecutables en Pyodide).
- Tras cada cambio: `node --check` sobre el script extraído + barrido de ids únicos. Se detectaron y corrigieron errores propios de cálculo (p. ej. conteo de "a" en N0, y varios en N1) gracias a la verificación contra Python real.

## Estado y siguiente paso

**Los cinco niveles (N0-N4) están congelados, verificados y consolidados en `staging/scav1-n0-n4`, sin tocar N5-N12 ni main.** Cada nivel tiene su Informe Final en `docs/informes/`. Todo defecto que impedía "avanzar" (niveles incompletables, código roto, prácticas inseguras, errores de cálculo/enunciado) está corregido. Los huecos de cobertura de nivel mundial (SQL injection en N2; SVD/MLE/correlación en N3; ROC-AUC/Lasso/SGD en N4) quedan documentados con su recomendación concreta para una expansión posterior.

**Pendiente de decisión del Director:** fusionar `staging/scav1-n0-n4` a la rama de release/main y desplegar.

---

## OLA 2 — Ampliación profunda (temas nuevos de nivel mundial)

Tras la Ola 1 (correcciones + consolidación), el Director pidió ir al límite: más días, más profundidad. Se construyeron **10 temas/labs nuevos** (26 días) para los niveles que en la Ola 1 solo recibieron correcciones, cada uno construido y **autoverificado por un agente dedicado contra Python/numpy/sklearn/sqlite real**, luego re-integrado y re-verificado (eval limpio, 0 colisiones de id, node --check, spot-checks manuales de la matemática/seguridad):

| Nivel | Temas nuevos | Días | Verificación |
|---|---|---|---|
| **N3** | SVD (3d) · Correlación de Pearson (2d) · MLE (2d) | +7 | sing[[3,1],[1,3]]=[4,2]; r=0.7746; MLE=proporción — contra numpy real |
| **N4** | ROC/AUC (3d) · Lasso L1 (2d) · SGD/mini-batch (2d) | +7 | AUC manual==sklearn; Lasso 3 ceros vs Ridge 0; SGD→[1,2] — contra sklearn real |
| **N2** | Inyección SQL · Pool de conexiones · Rate limiting (3 labs reales) | +3 | ataque `' OR '1'='1` ejecutado en sqlite: bypass en vulnerable, bloqueado en parametrizado |
| **N0** | Listas: fundamentos, métodos, split/join+truthiness (3d) | +3 | 8 ejercicios contra Python real |

**Métrica actualizada del consolidado:** N0 141 ids · N2 41 · N3 397 · N4 273. **2981 ids en los 13 niveles, 0 duplicados**, `node --check` OK. Los huecos de nivel mundial que la Ola 1 había *documentado* (SVD/correlación/MLE en N3; ROC-AUC/Lasso/SGD en N4; SQL injection/pooling/rate-limit en N2) quedan ahora **construidos y verificados**, no solo recomendados.

**Sigue pendiente de decisión del Director:** fusionar `staging/scav1-n0-n4` a release/main y desplegar.
