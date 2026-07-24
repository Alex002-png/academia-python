# Informe Final de Nivel — N4 (pasada SCA v1.0)

*Rama: `nivel/n4-scav1` (worktree principal `C:\Users\USER\academia-python`). Nivel: fundamentos de machine learning sobre NumPy (arrays/broadcasting, regresión lineal/logística, Ridge, softmax, descenso de gradiente, métricas, validación cruzada, fuga de datos, pipelines, árboles/ensembles/k-means, reproducibilidad, model cards). 77 días. Auditoría por subagente lector con re-derivación independiente de todas las fórmulas de ML.*

## 1. Veredicto

**N4 es técnicamente excelente: cero errores P0 de matemática/ML.** El auditor recomputó a mano decenas de valores esperados — MSE, sigmoide/logística, cross-entropy binaria y categórica, softmax (con truco de estabilidad), gradientes, coste/gradiente de Ridge (con exclusión del sesgo), ecuación normal, estandarización, IQR/z-score, correlación, precision/recall/F1, orientación de la matriz de confusión, R², splits de KFold/StratifiedKFold — y **todos coinciden**. La infraestructura Pyodide es sólida: un auto-cargador detecta y precalienta `numpy/pandas/sklearn/matplotlib`, y la disciplina de coma flotante (redondeo/tolerancia) está bien aplicada. El syllabus es incluso **más amplio** que un curso intro típico (tipología de fuga de datos, varianza de k-fold vs LOO, fairness por subgrupos con FNR, reproducibilidad de experimentos).

## 2. Corrección aplicada

- **Typo `n4m4t1` (intro):** "es un accuncia que MIENTE" → "es un accuracy que MIENTE". Único defecto de texto del nivel.

## 3. Riesgos documentados (no bloqueantes; el contenido funciona hoy)

- **Fragilidad de versión — checks sin `random_state` (`n4m5t2r`, `n4m5t2x`, `n4m5t2b`).** Entrenan `RandomForestClassifier(n_estimators=3)` SIN semilla y hardcodean el score exacto que produce, para enseñar la NO-reproducibilidad. Son deterministas solo porque la semilla global de numpy está fijada aguas arriba, así que dependen del patrón exacto de consumo del RNG de RandomForest en sklearn 1.5.x. *Recomendación:* que el check verifique la **propiedad** (`es_reproducible == False`, y que dos corridas difieran) en vez del literal del score — así la lección sobrevive a un bump de sklearn. No se cambió aquí para no arriesgar un ejercicio que hoy pasa; queda documentado.
- **Dependencia dura de Pyodide 0.26.4 (sklearn ~1.5).** ~170 checks comparan salidas de sklearn/numpy por igualdad exacta de string (mitigado con `round(...,4)`), computadas dentro del propio Campus. Valores cerca de una frontera de redondeo del 4.º decimal podrían voltearse con otra build de BLAS. `root_mean_squared_error` (sklearn ≥1.4) y `LogisticRegression(penalty=None)` (≥1.2) fallarían en Pyodide más viejos. *Recomendación:* fijar/anotar la dependencia de versión.
- **Hardcodabilidad (stdout-only).** Como en el resto de la Academia, muchos checks comparan solo la salida; los ejercicios "predice antes de ejecutar" traen la solución completa en el `starter` (por diseño). Baja prioridad.

## 4. Huecos de cobertura de nivel mundial (para expansión futura)

Priorizados; los tres primeros son los más conspicuos para el estándar "top-university" (Andrew Ng, Géron *Hands-On ML*, fast.ai):

1. **Curva ROC / AUC — ausente.** Precision/recall/F1/matriz de confusión están a fondo, pero las métricas de ranking independientes del umbral (ROC-AUC) no aparecen. **El hueco #1.** Construible desde cero con numpy sobre el contenido de métricas ya existente.
2. **Regularización L1 / Lasso — ausente como tema.** Solo Ridge (L2) está construido; Lasso y su propiedad de sparsity/selección de features solo se menciona de pasada.
3. **Variantes de descenso de gradiente (SGD / mini-batch, schedules de LR) — fino.** Solo hay full-batch GD; SGD/mini-batch es estándar y prerequisito para N5 (deep learning).
4. **KNN como modelo enseñado — usado pero nunca enseñado** (aparece solo como prop de fuga de datos).
5. **Feature engineering para no linealidad (PolynomialFeatures / términos de interacción) — ausente.**
6. **Búsqueda sistemática de hiperparámetros (GridSearchCV/RandomizedSearchCV) — diferida** (el log de experimentos manual es sustituto parcial).
7. **Ajuste del umbral de decisión / curva precision-recall — fino.**

Presente y fuerte (para no re-añadirlo): escalado/estandarización, disciplina train/val/test + fuga de datos (incl. grupo/temporal), matriz de confusión, validación cruzada + estratificación + varianza LOO, sesgo-varianza con curvas de aprendizaje/validación, one-hot, pipelines/ColumnTransformer a prueba de fuga, importancia por permutación.

## 5. Veredicto de avance

**N4 ya cumple el estándar "mundial top" en corrección: no tiene contenido roto ni errores de ML.** La corrección del typo era el único defecto real. Los huecos (ROC/AUC, Lasso, SGD como los tres principales) quedan documentados como las adiciones de mayor impacto para una expansión posterior. **Procede el avance.**
