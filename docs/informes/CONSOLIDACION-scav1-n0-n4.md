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

---

## OLA 3 — 2ª capa de temas de nivel mundial (N2/N3/N4)

Tercera pasada: los huecos "de 2ª capa" que la Ola 2 había documentado se **construyeron y verificaron**. **8 temas/labs nuevos** (13 días + 3 labs), cada uno construido y autoverificado por un agente dedicado, re-integrado y re-verificado por mí (eval limpio, 0 colisiones, node --check, verificadores re-ejecutados, y **KNN confirmado en el Pyodide REAL**).

| Nivel | Temas nuevos | Verificación |
|---|---|---|
| **N3** | Hessiano y convexidad (2d) · Ortogonalidad/Gram-Schmidt/QR/espacio nulo (2d) | numpy 1.26.4 exacto; verify_qr re-ejecutado 41 PASS; spot-checks manuales |
| **N4** | KNN (2d) · PolynomialFeatures (2d) · GridSearchCV + curva PR (2d) | agentes cross-verificaron en venv sklearn **1.4.2 exacto**; KNN confirmado en Pyodide REAL ([0]/[1]) |
| **N2** | Aislamiento de transacción · Observabilidad · Idempotencia (3 labs reales) | aislamiento verificado contra **PostgreSQL 16 REAL**; observabilidad e idempotencia con demos ejecutados en python |

**FIX CRÍTICO DE MOTOR (solo detectable en el runtime real):** los ejercicios de KNN importan `sklearn.neighbors`, que NO estaba en el warm-up de sklearn (línea 982). Medido en el Pyodide real: importar `sklearn.neighbors` en frío bajo el tracer cuesta **292 702 pasos (97,6% del límite de 300 000)** — sumado al código del ejercicio habría disparado un falso "bucle infinito". Con el warm-up (import fuera del tracer) baja a **6 pasos**. Bug que ni Python local ni la réplica del tracer podían atrapar.

**Métrica final del consolidado:** N2 44 ids · N3 423 ids · N4 296 ids. **3033 ids en los 13 niveles, 0 duplicados**, `node --check` OK. Con esto, **las dos capas de huecos de nivel mundial (N2/N3/N4) están construidas y verificadas**, no solo documentadas.

---

## 3ª CAPA — Cierre de los huecos remanentes (N2/N3/N4)

Cuarta pasada: los últimos huecos "de 3ª capa" que la Ola 3 había documentado se **construyeron y verificaron**, cerrando la lista de mejoras de nivel mundial pendientes. **5 temas/labs nuevos** (8 días-objeto), cada uno construido y autoverificado por un agente dedicado (orquestados en un solo workflow), re-integrado y re-verificado por mí (eval limpio, 0 colisiones, `node --check`, verificadores re-ejecutados, y **el tema sklearn confirmado en el Pyodide REAL con la versión 1.4.2 del Campus**).

| Nivel | Temas/labs nuevos | Verificación |
|---|---|---|
| **N2** | Problema N+1, índices y paginación (Lab 27c) · HTTPS/TLS y revocación de JWT (Lab 22c) | N+1 (1+N→1 con JOIN), SEQ SCAN→INDEX y OFFSET→keyset demostrados en **sqlite3 real** con EXPLAIN QUERY PLAN; denylist de `jti` demostrada con **pyjwt real** (token revocado sigue firmado-válido pero rechazado por estado) |
| **N3** | Distribución de Poisson (Día 45b) · Densidad continua / PDF (Día 45c) | PMF de Poisson, límite binomial→Poisson, área bajo la normal (68-95-99.7) por integración numérica — 10/10 contra **numpy 1.26.4 real**; sin `np.trapz` (robustez cross-version) |
| **N4** | Datos desbalanceados: class_weight y resampling (Día 62g/62h) · Schedules de learning-rate (Día 39d/39e) | recall de la clase rara 0.7333→0.9333 **confirmado en Pyodide real (sklearn 1.4.2)**, **29 305 pasos (9,8% del límite)**; schedules step/exp/1-t en numpy puro, 147 pasos |

**Disciplina de motor aplicada:** el tema de desbalanceados usa solo submódulos ya presentes en el warm-up (`linear_model`, `model_selection`, `metrics`) y hace el resampling con **numpy puro** (no `sklearn.utils`, que no está en el warm-up) — por eso `warmupNeeded=ninguno` en los 5 temas. El test en Pyodide real (misma versión 1.4.2 del Campus) reprodujo los valores de recall **exactos** y midió el costo bajo el tracer, lo único que Python local no puede medir.

**Métrica final del consolidado:** N0 141 · N1 549 · N2 46 · N3 435 · N4 311 ids. **3062 ids en los 13 niveles, 0 duplicados**, `node --check` OK. **N0-N4: 358 días, 1482 ids, 47 laboratorios reales, 282 pasos de laboratorio.** Con esto, **las tres capas de huecos de nivel mundial (N2/N3/N4) están cerradas** — no queda ningún hueco documentado sin construir.

**Sigue pendiente de decisión del Director:** fusionar `staging/scav1-n0-n4` a release/main y desplegar.
