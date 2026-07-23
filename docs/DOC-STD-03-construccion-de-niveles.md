# DOC-STD-03 — Estándar Institucional de Construcción de Niveles (SCA v1.0)

## Control del documento

| Campo | Valor |
|---|---|
| **Document Key** | DOC-STD-03 · Tier T1 |
| **Versión / Estado** | **1.0.0** · 🟡 Propuesta — clasificación tema por tema pendiente de confirmación final del Director antes de que cualquier ventana empiece a construir |
| **Depende de** | DOC-STD-01 (clasificación A/B/C) · DOC-STD-02 (composición de módulos) · DOC-10 (mapa curricular N0-N12) |
| **Produce / desarrolla** | La meta concreta, nivel por nivel, de temas/días/laboratorios/evaluaciones/proyectos bajo SCA v1.0 — el número real de `index.html` (actual) contra el número objetivo (propuesto), tema por tema, con la fuente de cada tema nuevo |
| **Naturaleza** | Referencia operativa para cada ventana de reconstrucción — cada ventana lee SOLO la sección de su nivel asignado, no necesita el resto del documento |
| **Historial** | 1.0.0 (2026-07-23): primera versión — clasificación automática (palabra clave + duración actual) de los 281 temas reales de `index.html`, más 29 temas nuevos (19 de amplitud, 10 de ciberseguridad) investigados contra Stanford CS229/CS230, MIT 6.824, Berkeley CS161, OWASP Top10:2025, OWASP GenAI LLM Top10 y papers primarios (ver §3 de cada nivel para la fuente exacta de cada tema nuevo) |

---

## 0. Cómo usar este documento (leer esto primero si eres una ventana nueva)

Si estás construyendo un nivel específico bajo SCA v1.0:

1. Lee DOC-STD-01 y DOC-STD-02 completos (son cortos) — definen el método.
2. Ve directo a la sección de **tu nivel** en este documento (§N que corresponda) — no necesitas leer los demás niveles.
3. La tabla de tu nivel te da, tema por tema: clasificación (A/B/C), días actuales, días objetivo. Los temas marcados **NUEVO** no existen todavía en `index.html` — literalmente hay que escribirlos desde cero, con su fuente ya investigada como punto de partida (no la única, profundiza más).
4. Sigue el flujo institucional de 9 pasos ya usado en niveles anteriores (`docs/guia-construccion-niveles.md`): investigación real → construcción módulo por módulo (DOC-STD-02) → capstone → compuertas → auditoría integral → Herencias Declaradas → auditoría adversarial → Informe Final de Nivel → candidato v1.1 (nunca autodeclarado, siempre "candidato" pendiente del Director).
5. Verificación empírica obligatoria antes de cualquier commit: `node --check` sobre el script extraído + harness real de `check()` contra Pyodide + barrido de unicidad de ids — mismo estándar que ya rige toda la Academia. Nunca copiar salidas a mano.
6. Al fusionar de vuelta a la rama de staging de tu oleada: verificar balance de llaves y orden real de `LEVELn` en el archivo fusionado, no solo la ausencia de marcadores de conflicto — dos bugs reales de Git (un `];` que desaparece silenciosamente, y un nivel insertado en la posición incorrecta) ya ocurrieron en la fusión de N4-N12 sin ninguna señal de conflicto.

---

## N0 — Fundamentos

**Meta:** 11 → **11 temas** · 23 → **33 días** · ~**3 laboratorios** · **3 evaluaciones** · **1 proyectos** (incluye capstone de nivel)

| Tema | Clasificación | Días actuales | Días objetivo | Título / fuente |
|---|---|---|---|---|
| Día 1 | A | 2 | **3** | Tu primer programa |
| Día 2 | A | 2 | **3** | Variables: etiquetas, no cajas |
| Día 3 | A | 2 | **3** | Tipos de datos |
| Día 4 | A | 2 | **3** | Operadores |
| Día 5 | A | 2 | **3** | Strings a fondo |
| Día 6 | A | 2 | **3** | Entrada y salida |
| Día 7 | A | 2 | **3** | Decisiones y repetición |
| Día 8 | A | 2 | **3** | Errores y tracebacks |
| Día 9 | A | 3 | **3** | Funciones básicas: tu primera receta reutilizable |
| Día 10 | A | 3 | **3** | Lectura y trazado de código ajeno |
| d_repaso | A | 1 | **3** | Repaso general integrador |

## N1 — Computer Science

**Meta:** 46 → **48 temas** · 81 → **267 días** · ~**42 laboratorios** · **8 evaluaciones** · **4 proyectos** (incluye capstone de nivel)

| Tema | Clasificación | Días actuales | Días objetivo | Título / fuente |
|---|---|---|---|---|
| Día 1 | A | 2 | **3** | Funciones a fondo |
| Día 2 | A | 2 | **3** | Listas y tuplas |
| Día 3 | A | 2 | **3** | Diccionarios y sets |
| Día 4 | A | 2 | **3** | Comprehensions |
| Día 5 | A | 2 | **3** | Excepciones |
| Día 7 | A | 2 | **3** | Iteradores y generadores |
| Día 8 | A | 2 | **3** | Ficheros y formatos |
| M1.T6 | B | 2 | **6** | Módulos y paquetes propios |
| M2.T1 | B | 2 | **6** | Clases y objetos |
| M2.T2 | B | 2 | **6** | Atributos, métodos y estado |
| M2.T3 | B | 2 | **6** | Composición vs. herencia |
| M2.T4 | B | 2 | **6** | Métodos dunder |
| M2.T5 | B | 2 | **6** | Diseño OOP: cuándo sí y cuándo no |
| M2.T6 | B | 2 | **6** | Clases abstractas y protocolos |
| M2.T7 | B | 2 | **6** | Testing de clases con pytest |
| M3.T1 | B | 2 | **6** | Complejidad: Big-O intuitivo |
| M3.T2 | B | 2 | **6** | Búsqueda |
| M3.T3 | B | 2 | **6** | Ordenación |
| M3.T4 | C | 2 | **12** | Pilas y colas |
| M3.T5 | B | 2 | **6** | Recursión |
| M3.T6 | B | 2 | **6** | Patrones de resolución |
| M3.T7 | B | 2 | **6** | Árboles y recorridos |
| M3.T8 | B | 2 | **6** | Tablas hash y coste amortizado |
| M4.T1 | B | 1 | **6** | Fundamentos y primer repositorio |
| M4.T2 | B | 1 | **6** | Ramas y merge |
| M4.T3 | B | 1 | **6** | El flujo Pull Request |
| M4.T4 | B | 1 | **6** | README profesional e historia legible |
| M5.T1 | B | 1 | **6** | El entorno real |
| M5.T2 | B | 1 | **6** | La terminal: hablar con el sistema sin intermediarios |
| M5.T3 | B | 1 | **6** | Procesos: los programas están vivos |
| M5.T4 | B | 1 | **6** | Memoria, archivos y permisos: el contrato de la máquina |
| M5.T5 | B | 1 | **6** | Automatización: componer el sistema |
| M6.T1 | B | 2 | **6** | El acuerdo imposible: cómo se entienden dos máquinas distantes |
| M6.T2 | B | 2 | **6** | La conversación: APIs, contratos y confianza |
| M6.T3 | B | 2 | **6** | La frontera de datos |
| M6.T4 | B | 2 | **6** | Cuando la comunicación falla |
| M6.T5 | B | 2 | **6** | Autenticación básica: API keys y tokens |
| M6.T6 | B | 2 | **6** | Límites y buenas prácticas: rate limiting, paginación e idempotencia |
| M7.T1 | B | 2 | **6** | La memoria que garantiza: el modelo relacional |
| M7.T2 | B | 2 | **6** | Preguntar sin recorrer: consultas declarativas |
| M7.T3 | B | 2 | **6** | El programa conversa con la memoria: CRUD y transacciones |
| M7.T4 | B | 2 | **6** | Diseñar memoria que perdure |
| M7.T5 | B | 2 | **6** | Índices y planes de consulta |
| M7.T6 | B | 2 | **6** | Normalización y claves foráneas avanzada |
| n1puente1 | A | 1 | **3** | Tu primera llamada real (puente hacia el Capstone) |
| n1et1 | A | 1 | **3** | La aplicación completa |
| NEW.1 | B | — | **6** | **NUEVO** — Grafos: BFS, DFS y el algoritmo de Dijkstra — _Extensión natural tras árboles/recorridos ya construidos — mismo nivel que Stanford CS161/CS61B._ |
| NEW.2 | B | — | **6** | **NUEVO** — Programación dinámica: memoización y tabulación — _Tras recursión ya construida — clásico de cualquier curso de estructuras de datos/algoritmos top._ |

## N2 — Software Engineering

**Meta:** 28 → **34 temas** · 29 → **186 días** · ~**28 laboratorios** · **6 evaluaciones** · **3 proyectos** (incluye capstone de nivel)

| Tema | Clasificación | Días actuales | Días objetivo | Título / fuente |
|---|---|---|---|---|
| M1.T1 | B | 2 | **6** | Decoradores y closures: funciones que fabrican comportamiento |
| M1.T2 | B | 1 | **6** | El primer servicio: FastAPI y el ciclo petición-respuesta |
| M1.T3 | B | 1 | **6** | Contratos con Pydantic: prometer, no solo aceptar |
| M1.T4 | B | 1 | **6** | Diseño de una API REST: el contrato que otros consumen a ciegas |
| M1.T5 | A | 1 | **3** | Errores como parte del contrato |
| M1.T6 | A | 1 | **3** | El contrato se documenta a sí mismo — cierre de B-M1 |
| M2.T1 | B | 1 | **6** | ¿Quién eres? — Identidad y autenticación |
| M2.T2 | B | 1 | **6** | ¿Cómo lo sé? — Tokens verificables (JWT) |
| M2.T3 | B | 1 | **6** | ¿Qué puedes hacer? — Autorización y permisos |
| M2.T4 | A | 1 | **3** | Pensar como quien ataca — el Momento Fundacional de M2 |
| M2.T5 | B | 1 | **6** | Secretos que no se cuentan |
| M2.T6 | A | 1 | **3** | Confiar entre sistemas — Bitácora se identifica (cierre B-M2) |
| M3.T1 | B | 1 | **6** | De uno a muchos: async/await |
| M3.T2 | B | 1 | **6** | La notaría se convierte en servidor: PostgreSQL |
| M3.T3 | A | 1 | **3** | Cuando dos quieren lo mismo a la vez — el Momento Fundacional de M3 |
| M3.T4 | A | 1 | **3** | Aislamiento: lo que la transacción promete y lo que no |
| M3.T5 | B | 1 | **6** | Invertir para no repetir: caché con Redis — cierre B-M3 |
| M4.T1 | A | 1 | **3** | El hábito que ya tenías: auditar la propia confianza |
| M4.T2 | B | 1 | **6** | TDD: la prueba antes que el código |
| M4.T3 | B | 1 | **6** | Cobertura: lo que tus pruebas no están viendo |
| M4.T4 | B | 1 | **6** | Clean code: el código que se lee es el código que se prueba |
| M4.T5 | B | 1 | **6** | Integración continua: el sistema avisa sin que preguntes — el Momento Fundacional de M4 |
| M5.T1 | B | 1 | **6** | Empaquetar: el sistema como unidad portable |
| M5.T2 | B | 1 | **6** | El pipeline completo: la calidad como puerta |
| M5.T3 | B | 1 | **6** | Desplegar sin detener |
| M5.T4 | B | 1 | **6** | Migrar sin romper — el Momento Fundacional de M5 |
| M5.T5 | B | 1 | **6** | El ciclo completo: la responsabilidad no termina al desplegar — cierre B-M5 |
| n2et2 | A | 1 | **3** | El backend que puede vivir sin ti |
| NEW.1 | B | — | **6** | **NUEVO** — Microservicios vs. monolito: cuándo dividir un sistema y cuándo NO — _Comparación explícita que la Métrica 8 exige — decisión real de arquitectura de software._ |
| NEW.2 | B | — | **6** | **NUEVO** — Observabilidad de aplicación: logging estructurado y tracing distribuido — _Hueco real — N9 ya cubre observabilidad de infraestructura, pero no a nivel de aplicación/request._ |
| SEC.1 | B | — | **6** | **NUEVO** — Criptografía aplicada: hashing, HMAC, cifrado simétrico/asimétrico y TLS |
| SEC.2 | B | — | **6** | **NUEVO** — Inyección: SQLi, command injection y por qué la validación de tipos no basta |
| SEC.3 | B | — | **6** | **NUEVO** — XSS, CSRF y same-origin policy: el navegador como frontera de confianza |
| SEC.4 | C | — | **12** | **NUEVO** — OWASP Top 10:2025 aplicado a tu propio backend — laboratorio de pentesting guiado |

## N3 — Matemáticas para IA

**Meta:** 25 → **26 temas** · 68 → **171 días** · ~**24 laboratorios** · **5 evaluaciones** · **2 proyectos** (incluye capstone de nivel)

| Tema | Clasificación | Días actuales | Días objetivo | Título / fuente |
|---|---|---|---|---|
| M1.T1 | B | 3 | **6** | Vectores: significado geométrico, suma y escalar |
| M1.T2 | B | 3 | **6** | Combinaciones lineales, span y base |
| M1.T3 | B | 3 | **6** | Matrices como transformaciones lineales; multiplicación como composición |
| M1.T4 | B | 3 | **6** | Transformaciones en 3D y el determinante |
| M1.T5 | B | 3 | **6** | Sistemas de ecuaciones, matriz inversa y espacio nulo |
| M1.T6 | B | 3 | **6** | Producto punto, proyecciones y dualidad |
| M1.T7 | B | 3 | **6** | Cambio de base, autovalores y autovectores |
| M2.T1 | B | 3 | **6** | La derivada: razón de cambio y significado geométrico |
| M2.T2 | B | 3 | **6** | Reglas de derivación: cadena y producto, explicadas geométricamente |
| M2.T3 | B | 3 | **6** | Derivadas parciales y el gradiente |
| M2.T4 | B | 3 | **6** | Optimización: descenso de gradiente desde cero |
| M2.T5 | B | 3 | **6** | Aproximación de funciones: series de Taylor |
| M2.T6 | B | 3 | **6** | Ajuste de funciones a datos: regresión como optimización |
| M3.T1 | B | 3 | **6** | Espacio muestral, eventos y probabilidad condicional |
| M3.T2 | A | 3 | **3** | Variables aleatorias y distribuciones |
| M3.T3 | B | 3 | **6** | Esperanza, varianza y covarianza |
| M3.T4 | B | 3 | **6** | Inferencia básica: muestreo |
| M3.T5 | B | 3 | **6** | Introducción a pruebas de hipótesis |
| M3.T6 | B | 3 | **6** | Estadística aplicada a un dataset real |
| M4.T1 | A | 2 | **3** | El alfabeto de la IA: griego, sumatorias y productorias |
| M4.T2 | C | 2 | **12** | Álgebra lineal en notación de papers |
| M4.T3 | C | 2 | **12** | Cálculo en notación de papers |
| M4.T4 | C | 2 | **12** | Probabilidad en notación de papers |
| M4.T5 | C | 2 | **12** | Lectura completa de un paper, de la ecuación al código |
| n3et3 | A | 1 | **3** | La matemática que puedes derivar en vivo |
| NEW.1 | B | — | **6** | **NUEVO** — Teoría de la información: entropía, entropía cruzada y divergencia KL — _Fundamenta las funciones de pérdida que N4/N5/N6/N7 usan sin introducción formal previa._ |

## N4 — Machine Learning

**Meta:** 32 → **34 temas** · 77 → **186 días** · ~**28 laboratorios** · **6 evaluaciones** · **3 proyectos** (incluye capstone de nivel)

| Tema | Clasificación | Días actuales | Días objetivo | Título / fuente |
|---|---|---|---|---|
| M1.T1 | A | 3 | **3** | NumPy a escala real: arrays 2D, indexado y broadcasting |
| M1.T2 | A | 3 | **3** | pandas: Series y DataFrame |
| M1.T3 | B | 3 | **6** | pandas: selección y filtrado avanzado |
| M1.T4 | B | 3 | **6** | pandas: agregación y agrupación |
| M1.T5 | B | 3 | **6** | EDA estadístico aplicado a un dataset real |
| M1.T6 | B | 3 | **6** | Visualización de datos con matplotlib |
| M1.T7 | B | 3 | **6** | Calidad y limpieza de datos |
| M2.T1 | B | 3 | **6** | Regresión lineal en notación matricial y la Ecuación Normal |
| M2.T2 | B | 3 | **6** | Escalado de features: por qué las escalas distintas rompen el descenso de gradiente |
| M2.T3 | B | 3 | **6** | Regularización (Ridge): penalizar pesos grandes |
| M2.T4 | B | 3 | **6** | Regresión logística: de predecir números a predecir probabilidades |
| M2.T5 | B | 3 | **6** | La frontera de decisión: dónde el modelo cambia de opinión |
| M2.T6 | B | 3 | **6** | Clasificación multiclase con softmax |
| M2.T7 | B | 3 | **6** | Cierre de M2: validar tus modelos desde cero contra scikit-learn |
| M3.T1 | B | 2 | **6** | La API de scikit-learn: fit/predict/score, ahora con propósito |
| M3.T2 | B | 2 | **6** | Árboles de decisión: aprender preguntando |
| M3.T3 | B | 2 | **6** | Ensembles: muchos árboles votando |
| M3.T4 | B | 2 | **6** | Máquinas de Vector Soporte (SVM): el truco del kernel |
| M3.T5 | B | 2 | **6** | Pipelines: encadenar preprocesamiento y modelo en un solo objeto |
| M3.T6 | B | 2 | **6** | Clustering: K-means y el regreso del centroide |
| M3.T7 | A | 2 | **3** | Cierre de M3: comparar modelos con criterio, no solo con accuracy |
| M4.T1 | A | 2 | **3** | Empieza M4 · Metodología: train/test split y por qué un accuracy puede ser una mentira |
| M4.T2 | B | 2 | **6** | Validación cruzada k-fold: reemplazar un número por una distribución de números |
| M4.T3 | B | 2 | **6** | Métricas de clasificación: por qué accuracy engaña, y qué medir en su lugar |
| M4.T4 | B | 2 | **6** | Métricas de regresión: MSE, MAE, R² — el mismo problema, ahora con números continuos |
| M4.T5 | B | 2 | **6** | Overfitting y underfitting: sesgo-varianza con curvas reales |
| M4.T6 | B | 2 | **6** | Cierre de M4: permutation importance y el diagnóstico completo de por qué falla un modelo |
| M5.T1 | A | 2 | **3** | Empieza M5: el plan antes que el código — heurísticas, baseline, y criterio de éxito |
| M5.T2 | C | 2 | **12** | Registro de experimentos: reproducibilidad como contrato |
| M5.T3 | A | 2 | **3** | Comunicación honesta de limitaciones: rendimiento por subgrupo |
| M5.T4 | A | 2 | **3** | Cierre de M5 y puente al proyecto de nivel: la checklist completa |
| n4et4 | A | 1 | **3** | El proyecto de ML que puedes defender de principio a fin |
| NEW.1 | B | — | **6** | **NUEVO** — Reducción de dimensionalidad: PCA y sus límites — _Stanford CS229 (Ng/Ma) — unidad de aprendizaje no supervisado, PCA/ICA._ |
| NEW.2 | B | — | **6** | **NUEVO** — Series de tiempo: por qué rompen el supuesto i.i.d. — _Hueco real frente a un curso de ML generalista — dato secuencial no es intercambiable._ |

## N5 — Deep Learning

**Meta:** 17 → **20 temas** · 142 → **211 días** · ~**19 laboratorios** · **5 evaluaciones** · **2 proyectos** (incluye capstone de nivel)

| Tema | Clasificación | Días actuales | Días objetivo | Título / fuente |
|---|---|---|---|---|
| M1.T1 | C | 17 | **17** | La neurona artificial: combinación ponderada y escalón |
| M1.T2 | C | 18 | **18** | La red como grafo: apilar neuronas en capas |
| M1.T3 | C | 16 | **16** | Backpropagation: la regla de la cadena aplicada al grafo |
| M1.T4 | C | 16 | **16** | MLP entrenado desde cero |
| M2.T1 | B | 1 | **6** | Tensores: el objeto central de PyTorch |
| M2.T2 | C | 1 | **12** | Autograd: el motor de M1.T3, ahora automático |
| M2.T3 | B | 1 | **6** | Construir y entrenar una red con nn.Module y un optimizador |
| M2.T4 | C | 1 | **12** | GPU y reproducibilidad — cierra M2 |
| M3.T1 | C | 14 | **14** | Convoluciones: el mecanismo, en numpy puro |
| M3.T2 | A | 1 | **3** | CNN entrenada de verdad, sobre dígitos reales |
| M3.T3 | C | 13 | **13** | RNN/LSTM: el mecanismo, en Python puro |
| M3.T4 | C | 1 | **12** | RNN/LSTM entrenada de verdad — generación de texto carácter por carácter |
| M3.T5 | C | 13 | **13** | Introducción a la atención |
| M4.T1 | C | 10 | **12** | El método científico aplicado a deep learning |
| M4.T2 | C | 10 | **12** | Reproducibilidad: semillas, determinismo real, registro de experimentos |
| M4.T3 | B | 8 | **8** | Análisis honesto de resultados |
| n5et3 | A | 1 | **3** | Red entrenada end-to-end, reproducible y documentada |
| NEW.1 | B | — | **6** | **NUEVO** — Regularización: dropout, batch normalization y weight decay — _Stanford CS230 (Ng/Katanforoosh) — unidad dedicada de 'Improving Deep Neural Networks'._ |
| NEW.2 | B | — | **6** | **NUEVO** — Optimizadores modernos: momentum, RMSprop y Adam — _Stanford CS230 — misma unidad, más allá del descenso de gradiente puro ya construido en N3._ |
| NEW.3 | B | — | **6** | **NUEVO** — Introducción a modelos generativos: autoencoders y la idea detrás de las GAN — _Cierre natural de N5 antes de que N6 tome el relevo con los transformers generativos._ |

## N6 — Transformers

**Meta:** 18 → **20 temas** · 39 → **177 días** · ~**17 laboratorios** · **5 evaluaciones** · **2 proyectos** (incluye capstone de nivel)

| Tema | Clasificación | Días actuales | Días objetivo | Título / fuente |
|---|---|---|---|---|
| M1.T1 | C | 2 | **12** | El cuello de botella que la atención resuelve |
| M1.T2 | C | 3 | **12** | Self-attention: Q, K, V y el producto punto escalado |
| M1.T3 | C | 3 | **12** | Multi-head attention |
| M1.T4 | C | 3 | **12** | Por qué la atención no sabe de orden — positional encoding |
| M1.T5 | C | 3 | **12** | El bloque transformer completo |
| M2.T1 | B | 2 | **6** | Por qué tokenizar — de caracteres a subpalabras |
| M2.T2 | B | 3 | **6** | BPE (Byte-Pair Encoding) desde cero |
| M2.T3 | A | 2 | **3** | Embeddings: de índice a vector denso |
| M2.T4 | C | 1 | **12** | Embeddings y tokenizador reales — geometría fuera del Campus (Colab) |
| M3.T1 | A | 2 | **3** | Encoder-only: BERT y el pretraining bidireccional |
| M3.T2 | A | 2 | **3** | Decoder-only: GPT y el pretraining autorregresivo |
| M3.T3 | A | 2 | **3** | La familia decoder-only moderna: qué cambió de 2017 a Llama/Qwen |
| M3.T4 | A | 2 | **3** | Comparación fundamentada de tamaños y familias |
| M4.T1 | C | 2 | **12** | "Attention Is All You Need" (Vaswani et al., 2017) — la arquitectura completa, símbolo por símbolo |
| M4.T2 | C | 2 | **12** | BERT (Devlin et al., 2018) — el paper del pretraining bidireccional |
| M4.T3 | C | 2 | **12** | GPT-2/GPT-3 (Radford et al. / Brown et al.) — el paper de la escala |
| M4.T4 | C | 2 | **12** | Llama (Touvron et al., 2023) — arquitectura moderna real |
| n6et3 | C | 1 | **12** | Mini-GPT: de la matriz de atención al texto generado |
| NEW.1 | B | — | **6** | **NUEVO** — Vision Transformers (ViT): la misma arquitectura, aplicada a imágenes — _Dosovitskiy et al. 2020, arXiv:2010.11929 (ICLR 2021) — paper real, verificado._ |
| NEW.2 | C | — | **12** | **NUEVO** — Mixture-of-Experts: parámetros totales vs. parámetros activos — _Promovido desde la mención 'Beyond the Curriculum' ya existente en n6m3t4 (Mixtral 8x7B) a tema completo._ |

## N7 — LLM Engineering

**Meta:** 20 → **23 temas** · 201 → **245 días** · ~**23 laboratorios** · **5 evaluaciones** · **2 proyectos** (incluye capstone de nivel)

| Tema | Clasificación | Días actuales | Días objetivo | Título / fuente |
|---|---|---|---|---|
| M1.T1 | C | 16 | **16** | Onboarding real: tu cuenta, tu key, tu primer límite de gasto |
| M1.T2 | C | 14 | **14** | Streaming: la misma respuesta, entregada en fragmentos |
| M1.T3 | C | 16 | **16** | Tool calling: el modelo que pide ayuda a tu código |
| M1.T4 | B | 15 | **15** | El coste real: tokens, tarifas vigentes y el punto de equilibrio del caché |
| M2.T1 | C | 14 | **14** | Por qué RAG y el problema del contexto limitado |
| M2.T2 | C | 14 | **14** | Chunking real: recursive y sus trade-offs |
| M2.T3 | B | 14 | **14** | Embeddings de juguete y similitud coseno |
| M2.T4 | B | 13 | **13** | Primera vector DB real: indexar y consultar con Qdrant |
| M2.T5 | C | 12 | **12** | Recuperación híbrida: cuando el significado no basta |
| M2.T6 | C | 12 | **12** | Generación aumentada: el contexto correcto, en el lugar correcto |
| M2.T7 | C | 9 | **12** | Mini-proyecto integrador de M2: tu RAG completo, a prueba |
| M3.T1 | C | 12 | **12** | LoRA y QLoRA |
| M3.T2 | C | 10 | **12** | RLHF conceptual: por qué el pretraining y el SFT solos no bastan |
| M4.T1 | B | 3 | **6** | El mapa de riesgos: OWASP LLM Top 10 aplicado a tu propio sistema |
| M4.T2 | B | 6 | **6** | Evaluación basada en reglas: la primera línea de defensa |
| M4.T3 | B | 6 | **6** | LLM-as-judge: constrúyelo y valídalo, nunca uno sin el otro |
| M4.T4 | C | 5 | **12** | Evaluación específica de RAG: faithfulness, context relevance, answer relevance |
| M4.T5 | B | 6 | **6** | Guardrails de entrada y salida |
| M4.T6 | B | 3 | **6** | Cierre de N7: el design doc de tu Columna vertebral V1 |
| n7et4 | A | 1 | **3** | Columna vertebral V1 — el sistema que puedes defender con evidencia |
| NEW.1 | B | — | **6** | **NUEVO** — Full fine-tuning vs. LoRA: cuándo el ajuste eficiente no alcanza — _Tu propio ejemplo de Métrica 8 — comparación real ya presente en el paper original de LoRA (Hu et al. 2021)._ |
| SEC.1 | C | — | **12** | **NUEVO** — AI Red Teaming: prompt injection y jailbreaking, construidos y explotados por ti mismo |
| SEC.2 | B | — | **6** | **NUEVO** — Extracción de modelo y envenenamiento de datos: atacar tu propio pipeline de RAG/fine-tuning |

## N8 — AI Systems

**Meta:** 23 → **24 temas** · 23 → **162 días** · ~**18 laboratorios** · **6 evaluaciones** · **3 proyectos** (incluye capstone de nivel)

| Tema | Clasificación | Días actuales | Días objetivo | Título / fuente |
|---|---|---|---|---|
| M1.T1 | C | 1 | **12** | El bucle del agente — de completions a acciones |
| M1.T2 | C | 1 | **12** | Tool calling — el ciclo pedir→ejecutar→devolver |
| M1.T3 | C | 1 | **12** | Tool calling agnóstico — dos proveedores, una interfaz |
| M1.T4 | A | 1 | **3** | Ejecución segura de herramientas |
| M1.T5 | A | 1 | **3** | Laboratorio integrador — cierra M1 |
| M2.T1 | B | 1 | **6** | Grafos de estado — StateGraph, nodes, edges |
| M2.T2 | B | 1 | **6** | Persistencia y checkpointing |
| M2.T3 | B | 1 | **6** | MCP — el protocolo de conexión a herramientas y datos |
| M2.T4 | C | 1 | **12** | Patrones multi-agente — supervisor y swarm |
| M2.T5 | A | 1 | **3** | Laboratorio integrador — cierra M2 |
| M3.T1 | C | 1 | **12** | Memoria de largo plazo — Stores y la extensión de RAG |
| M3.T2 | A | 1 | **3** | Memoria episódica — qué recordar, qué olvidar |
| M3.T3 | B | 1 | **6** | Planning — descomposición de tareas y replanning |
| M3.T4 | A | 1 | **3** | Laboratorio integrador — cierra M3 |
| M4.T1 | B | 1 | **6** | Visión — modelos multimodales |
| M4.T2 | B | 1 | **6** | Voz — STT/TTS |
| M4.T3 | A | 1 | **3** | Laboratorio integrador multimodal — cierra M4 |
| M5.T1 | C | 1 | **12** | Taxonomía de fallos de agentes |
| M5.T2 | B | 1 | **6** | Mitigaciones en runtime — límites duros y circuit breakers |
| M5.T3 | B | 1 | **6** | Human-in-the-loop — aprobar, rechazar, editar |
| M5.T4 | A | 1 | **3** | Riesgos de mal uso — encuadre defensivo y gobernanza |
| M5.T5 | C | 1 | **12** | Laboratorio integrador — depurar un agente real que falla — cierra M5 (la integración de nivel completo se certifica en el proyecto) |
| n8proyecto | A | 1 | **3** | AI Systems Platform — V2 de la columna vertebral |
| NEW.1 | B | — | **6** | **NUEVO** — Evaluación de agentes: benchmarks reales más allá de 'funciona o no' — _AgentBench (Liu et al. 2023) y benchmarks equivalentes — métricas de éxito, eficiencia y seguridad._ |

## N9 — Sistemas Distribuidos

**Meta:** 5 → **10 temas** · 67 → **99 días** · ~**10 laboratorios** · **5 evaluaciones** · **2 proyectos** (incluye capstone de nivel)

| Tema | Clasificación | Días actuales | Días objetivo | Título / fuente |
|---|---|---|---|---|
| M1.T1 | C | 18 | **18** | Del proceso único al clúster: tu primer Kubernetes real |
| M2.T1 | C | 16 | **16** | El problema real detrás de servir un LLM: tu primer despliegue con vLLM |
| M3.T1 | C | 16 | **16** | Por qué una cola: el problema real de acoplar productor y consumidor |
| M4.T1 | C | 16 | **16** | Los 3 pilares de observabilidad: de consola a colector real |
| n9et9 | A | 1 | **3** | La Columna Vertebral que puedes operar, no solo demostrar |
| NEW.1 | B | — | **6** | **NUEVO** — CAP theorem y consenso distribuido (Raft): por qué no puedes tener las tres cosas a la vez — _MIT 6.824 — Gilbert & Lynch 2002 (prueba formal de CAP) + Raft (Ongaro & Ousterhout 2014)._ |
| NEW.2 | B | — | **6** | **NUEVO** — Chaos engineering: romper tu propio sistema a propósito, con hipótesis y métricas — _Netflix Chaos Monkey + 'Principles of Chaos Engineering' (2017) + Basiri et al., arXiv:1702.05843._ |
| SEC.1 | B | — | **6** | **NUEVO** — Seguridad de red: ARP/DHCP spoofing, TLS/DNS/DNSSEC y por qué cada capa puede mentir |
| SEC.2 | B | — | **6** | **NUEVO** — Denegación de servicio, firewalls y detección de intrusiones en un clúster real |
| SEC.3 | B | — | **6** | **NUEVO** — Hardening de Kubernetes: RBAC, network policies y superficie de ataque de un pod |

## N10 — IA Local

**Meta:** 17 → **18 temas** · 28 → **114 días** · ~**14 laboratorios** · **5 evaluaciones** · **2 proyectos** (incluye capstone de nivel)

| Tema | Clasificación | Días actuales | Días objetivo | Título / fuente |
|---|---|---|---|---|
| M1.T1 | B | 3 | **6** | Por qué correr un LLM en local — panorama y primer modelo vivo |
| M1.T2 | B | 2 | **6** | Ollama a fondo — Modelfile, API REST local y parámetros de generación |
| M1.T3 | B | 2 | **6** | Qué hay debajo de Ollama — llama.cpp |
| M1.T4 | B | 2 | **6** | El formato GGUF — cierra M1 |
| M2.T1 | C | 2 | **12** | Qué es cuantizar — de FP16/FP32 a enteros de baja precisión |
| M2.T2 | C | 2 | **12** | Tipos de cuantización en el ecosistema GGUF y cómo elegir |
| M2.T3 | A | 1 | **3** | Medición real en tu hardware — tamaño, VRAM, velocidad, antes/después |
| M2.T4 | A | 1 | **3** | Laboratorio integrador — elegir y justificar, cierra M2 |
| M3.T1 | C | 1 | **12** | Por qué la GPU es rápida — paralelismo masivo frente a cómputo secuencial |
| M3.T2 | A | 2 | **3** | Jerarquía de memoria — por qué la inferencia de LLMs está limitada por ancho de banda, no por cómputo |
| M3.T3 | C | 1 | **12** | CUDA básico — qué es un kernel y cómo lo usan las herramientas que ya conoces |
| M3.T4 | B | 2 | **6** | Medir tu propia GPU — VRAM, batching y saturación |
| M3.T5 | A | 1 | **3** | Laboratorio integrador — diagnosticar el límite de 12GB, cierra M3 |
| M4.T1 | B | 2 | **6** | Criterios de evaluación de herramientas del ecosistema local |
| M4.T2 | B | 2 | **6** | Prototipo comparativo con datos propios |
| M4.T3 | A | 1 | **3** | Decisión fundamentada — laboratorio integrador, cierra M4 y los 4 módulos de N10 |
| n10et4 | A | 1 | **3** | La columna vertebral, en tu propia máquina |
| NEW.1 | B | — | **6** | **NUEVO** — Fine-tuning local bajo restricciones de VRAM: adaptar LoRA a 12GB reales — _Síntesis real N7(LoRA)+N10(hardware) — hueco de integración cross-nivel, no un tema aislado._ |

## N11 — Research Engineer

**Meta:** 18 → **19 temas** · 18 → **147 días** · ~**16 laboratorios** · **5 evaluaciones** · **2 proyectos** (incluye capstone de nivel)

| Tema | Clasificación | Días actuales | Días objetivo | Título / fuente |
|---|---|---|---|---|
| M1.T1 | C | 1 | **12** | Anatomía de un paper — leer en capas, no de corrido |
| M1.T2 | B | 1 | **6** | Notación y matemática de frontera |
| M1.T3 | A | 1 | **3** | Verificar afirmaciones con cálculo o código propio |
| M1.T4 | C | 1 | **12** | Evaluar la calidad real de un paper — honestidad antes de creer |
| M1.T5 | A | 1 | **3** | Lectura completa autónoma — cierra M1 |
| M2.T1 | C | 1 | **12** | Elegir un paper reproducible — criterio de selección realista |
| M2.T2 | C | 1 | **12** | Leer código de investigación ajeno — la arqueología del software, a escala de research |
| M2.T3 | C | 1 | **12** | Diseñar un plan de reproducción |
| M2.T4 | C | 1 | **12** | Reproducir un resultado a pequeña escala — el flujo completo, de verdad, acotado |
| M2.T5 | A | 1 | **3** | Comparar y documentar divergencias honestamente — cierra M2 |
| M3.T1 | C | 1 | **12** | Anatomía de un reporte de reproducibilidad honesto |
| M3.T2 | A | 1 | **3** | Reportar cuando el resultado no coincide — atribución y licencias |
| M3.T3 | B | 1 | **6** | Escritura y revisión por pares — cierra M3 |
| M4.T1 | B | 1 | **6** | Leer las convenciones de un proyecto real antes de tocar una línea |
| M4.T2 | B | 1 | **6** | Encontrar y triar un issue abordable |
| M4.T3 | B | 1 | **6** | Preparar y enviar una contribución real pequeña |
| M4.T4 | A | 1 | **3** | Recibir feedback real y responder profesionalmente — cierra M4 |
| n11et11 | C | 1 | **12** | Reproducción, contribución y defensa — la culminación de investigar de verdad |
| NEW.1 | B | — | **6** | **NUEVO** — Diseño de experimentos: significancia estadística y por qué 'funcionó una vez' no es evidencia — _Extiende Henderson et al. 2018 (ya citado en N11) hacia diseño experimental formal._ |

## N12 — AI Systems Architect

**Meta:** 21 → **23 temas** · 121 → **209 días** · ~**23 laboratorios** · **6 evaluaciones** · **3 proyectos** (incluye capstone de nivel)

| Tema | Clasificación | Días actuales | Días objetivo | Título / fuente |
|---|---|---|---|---|
| M1.T1 | C | 17 | **17** | El framework de 4 pasos bajo presión |
| M1.T2 | C | 15 | **15** | Estimación de capacidad — el cálculo que restringe el diseño |
| M1.T3 | C | 11 | **12** | Trade-offs arquitectónicos fundamentales |
| M1.T4 | B | 4 | **6** | Simulacro completo de system design bajo repregunta — cierra M1 |
| M2.T1 | C | 7 | **12** | Arquitectura de sistemas LLM en producción |
| M2.T2 | C | 7 | **12** | Multi-GPU y estrategias de paralelismo |
| M2.T3 | B | 6 | **6** | Modelado de costos de sistemas de IA en producción |
| M2.T4 | C | 6 | **12** | Seguridad arquitectónica de sistemas de IA a escala |
| M2.T5 | B | 4 | **6** | Laboratorio integrador — primer borrador del design doc bajo restricciones — cierra M2 |
| M3.T1 | B | 5 | **6** | Cómputo y redes en AWS para sistemas de IA |
| M3.T2 | B | 5 | **6** | Datos y almacenamiento en AWS para sistemas de IA |
| M3.T3 | B | 4 | **6** | Serving de modelos en AWS — administrado vs. autogestionado, con costos reales comparados |
| M3.T4 | B | 5 | **6** | Seguridad e IAM aplicados al sistema real |
| M3.T5 | B | 3 | **6** | Laboratorio integrador — despliegue real bajo advertencia de costo — cierra M3 |
| M4.T1 | C | 4 | **12** | Coding interview en inglés — método y práctica bajo formato real |
| M4.T2 | C | 4 | **12** | System design interview en inglés — el mismo framework de M1, ahora en el idioma real |
| M4.T3 | C | 4 | **12** | Behavioral interview en inglés — STAR con evidencia verificable, no anécdota |
| M4.T4 | B | 3 | **6** | Simulacro completo de proceso de entrevista internacional — cierra M4 |
| M5.T1 | B | 4 | **6** | Vigencia autónoma — criterio para elegir un avance genuinamente reciente y relevante |
| M5.T2 | A | 2 | **3** | Comparación controlada — aislar la variable que realmente cambió |
| n12et5 | C | 1 | **12** | La arquitectura que puedes defender bajo restricciones que nunca viste |
| NEW.1 | B | — | **6** | **NUEVO** — SRE aplicado a sistemas de IA: SLIs, SLOs y presupuesto de error — _Google SRE Book/Workbook (sre.google) — el marco real que un Staff/Principal Engineer usa a diario._ |
| SEC.1 | C | — | **12** | **NUEVO** — Red Team de arquitectura: auditoría ofensiva completa de tu propio sistema de N7-N11 |

---

## Totales (los 13 niveles)

| Métrica | Actual | Objetivo |
|---|---|---|
| Temas | 281 | 310 |
| Días | 917 | 2207 (×2.41) |
| Laboratorios | — | ~265 |
| Evaluaciones | — | ~70 |
| Proyectos | — | ~31 |

## Aplicación

Este documento es una **propuesta pendiente de confirmación** — la clasificación de cada tema es un primer corte razonado (palabra clave + duración actual), no un veredicto final. Antes de que cualquier ventana empiece a construir un nivel, el Director confirma o ajusta la clasificación de ESE nivel específico. La construcción real procede oleada por oleada, nunca los 13 niveles en paralelo — ver `docs/procedimiento-reconstruccion-sca-v1.md` para la división en ventanas y el procedimiento exacto.
