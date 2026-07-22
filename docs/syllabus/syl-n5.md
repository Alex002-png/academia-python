# SYL-N5 — Syllabus del Nivel 5 · Deep Learning

## Control del documento (conforme a DOC-00 §15.4)

| Campo | Valor |
|---|---|
| **Document Key** | SYL-N5 · Tier T2 |
| **Versión / Estado** | **0.5.0** · Paso 1 (diseño) + **M1-M4 completos — contenido curricular íntegro de N5 cerrado** (M1: 56 ejercicios Pyodide; M2: 4 laboratorios DOC-12/Colab; M3: 5 temas mixtos, CNN/RNN/LSTM/atención; M4: 3 temas, método científico/reproducibilidad/análisis honesto) — pendiente capstone, compuertas, Herencias Declaradas, auditoría adversarial y v1.0.0-candidato (Pasos 4-9) |
| **Autoridad de origen** | DOC-10 §7 (interior de N5) · DOC-00 14.8.3 · DOC-01 (C-N5-01…04) |
| **Depende de** | DOC-10 v1.0.3 (mapa) · DOC-00 (§13, §14, §16, 17.6) · DOC-01 · DOC-02 (instrumentos) · DOC-03 (método) · DOC-11 (autoría Pyodide) · **DOC-12 v1.0.0 (autoría de laboratorios de entorno real — primer nivel de la Academia que lo usa de verdad)** · SYL-N3 (mejor plantilla estructural disponible, referenciada explícitamente en `docs/mision-n5.md`) · **Herencias entrantes de SYL-N4 (borrador — N4 se construye en paralelo, no congelado; ver §2bis)** |
| **Produce / desarrolla** | La estructura docente completa de N5: fichas pedagógicas por tema (mixtas DOC-11/DOC-12, primera vez en la Academia), proyecto de nivel (red entrenada end-to-end reproducible + explicación a dos audiencias), compuerta, y las Herencias Declaradas hacia SYL-N6 |
| **Estándar de calidad** | El mismo de SYL-N1/N2/N3: *"Si otro profesor excepcional impartiera este nivel utilizando únicamente el syllabus, ¿obtendría prácticamente la misma calidad formativa?"* |
| **Historial** | **0.1.0-draft (2026-07-21): Documento de Diseño.** Verificación empírica directa (no asumida) de que **PyTorch y TensorFlow NO están en el catálogo de paquetes de la build real de Pyodide ya fijada en el Campus** (`v0.26.4`, confirmado leyendo `index.html:9`) — se descargó y se inspeccionó `pyodide-lock.json` real de esa build exacta: ninguna clave `torch`/`pytorch`/`torchvision`/`tensorflow` aparece en el registro de paquetes. Esto confirma la hipótesis de `docs/mision-n5.md` y fija la arquitectura de M2 como DOC-12, no una alternativa. **Decisión de entorno externo para M2 y los temas DOC-12 de M3: Google Colab**, verificada (no asumida) con investigación real: cuenta de Google (Gmail) suficiente, sin tarjeta de crédito ni proceso de aprobación, GPU T4 gratuita (~15-30 h/semana, dinámico, sin disponibilidad garantizada), sesiones de hasta 12h — exactamente lo que DOC-10 §7 insinuaba con "GPU gratuita en nube". Investigación pedagógica real de la bibliografía oficial de DOC-10 §7, verificada por WebSearch (no de memoria): **DL Specialization (Ng)** — 5 cursos (Neural Networks and Deep Learning · Improving Deep Neural Networks · Structuring ML Projects · Convolutional Neural Networks · Sequence Models), confirmado vía el repositorio de referencia de la especialización; **Karpathy *Zero to Hero*** — estructura real confirmada en `github.com/karpathy/nn-zero-to-hero`: micrograd (motor de autograd escalar desde cero) → makemore (partes 2-5: MLP, activaciones/batchnorm, backprop manual, WaveNet) → construcción de un GPT → tokenización; **Fast.ai** (`course.fast.ai`) — enfoque top-down confirmado (lección 1 ya entrena un clasificador de imágenes real vía transfer learning; lecciones 6-9 bajan a backprop/optimizers/batchnorm/ResNets/construcción desde cero); **PyTorch docs** (`pytorch.org/tutorials`) — confirmado el patrón oficial tensores→autograd (grafo acíclico dirigido de `Function`, `.backward()`, `requires_grad`). Mapeo de modalidad DOC-11/DOC-12 decidido **por tema, no por módulo** (criterio DOC-12 §5), documentado en §3. Estructura de 4 módulos/16 temas propuesta (heurística de partida, sin cifras de ejercicios/tema prometidas todavía — mismo error que N3 cometió y que este documento evita deliberadamente, ver §3.6). Pendiente: revisión módulo por módulo del Director, construcción real en `index.html`, capstone, compuertas, `docs/investigacion/n5-*.md`, auditoría integral, Herencias Declaradas finales, auditoría adversarial, v1.0.0. · **0.2.0 (2026-07-21): M1 · Redes desde cero completo — 4 temas, 12 días, 56 ejercicios/retos/desafíos verificados** (T1 La neurona artificial —perceptrón de Rosenblatt 1958, activaciones sigmoide/ReLU, compuertas lógicas, desafío final: el límite real de XOR ante una sola neurona, Minsky-Papert 1969—; T2 La red como grafo —capas, MLP, forward pass, desafío final: `zip()` trunca en silencio ante dimensiones incompatibles, produciendo un resultado numéricamente plausible pero incorrecto sin ningún error—; T3 Backpropagation —regla de la cadena de N3.M2.T2 aplicada a un grafo, motor de autograd propio patrón micrograd, desafío final: acumulación de gradiente vía `+=` cuando un valor se reutiliza en dos ramas—; T4 MLP entrenado desde cero, cierra M1 —ciclo de entrenamiento de 4 pasos, `Neurona`/`Capa`/`MLP` entrenables, entrenamiento real de 500 épocas que resuelve XOR verificado carácter por carácter contra la salida real, desafío final: el mismo entrenamiento sin resetear gradientes se estanca en pérdida ~0.17 sin converger nunca, verificado con ejecución real—). **Disciplina de verificación aplicada durante la construcción, no solo al cierre** (mismo patrón institucionalizado en N3): cada valor de cada `check()` se generó ejecutando la solución real en Python (`verify_n5m1t*.py`) antes de escribirse; un harness de Node por tema comparó el `check()` real extraído de `index.html` contra la salida real de esa misma solución — 56/56 pass. Encontrado y corregido un bug real antes de comitear: T3.Ejercicio 10 esperaba `b.grad=3.0` de memoria; la ejecución real dio `1.0` (derivada local de la suma, no el valor del otro operando) — evidencia directa de por qué la guía §9 prohíbe escribir un valor sin ejecutarlo primero. Verificado: `node --check` limpio sobre el bloque `<script>` completo; 68 ids `n5` en total, 0 duplicados contra todo el Campus. M1 es 100% DOC-11 (Pyodide), conforme a lo decidido en §3. Sigue: M2 · PyTorch (DOC-12/Colab). · **0.3.0 (2026-07-21): M2 · PyTorch completo — 4 laboratorios DOC-12 en Google Colab, primer módulo 100% entorno real de N5** (Laboratorio 6 Tensores —creación/operaciones/broadcasting, comparado contra numpy; error inducido: mensaje real de PyTorch para forma incompatible—; Laboratorio 7 Autograd —torch.autograd comparado NÚMERO POR NÚMERO contra el motor propio de M1.T3 sobre los mismos 2 ejemplos ya verificados ahí, coincidencia exacta; error inducido: RuntimeError real de backward() duplicado—; Laboratorio 8 nn.Module y optimizador —reimplementa el MLP/ciclo de entrenamiento de M1.T4 con la API real, mismo problema XOR, conteo de parámetros verificado contra M1.T2; error inducido: mismo bug de zero_grad con optimizer real—; Laboratorio 9 GPU y reproducibilidad, cierra M2 —primer uso real de GPU del Campus, con dos hallazgos empíricos no anticipados en el diseño original: (a) medir aceleración GPU sin 'warmup' da una cifra engañosamente baja (4.9x vs. 29.9x real, verificado); (b) `torch.Tensor.index_add_()` es genuinamente no determinista en GPU incluso con semilla fija —verificado con 5 corridas reales, no asumido de documentación—, y `torch.use_deterministic_algorithms(True)` lo corrige, también verificado). **Ventaja de verificación no anticipada:** PyTorch con CUDA real disponible en el entorno de construcción permitió verificar CADA comportamiento citado (mensajes de error literales, tiempos de aceleración, determinismo) con ejecución real, misma disciplina de la guía §9 aplicada por primera vez a un entorno DOC-12. Las 13 secciones de DOC-12 completas en los 4 laboratorios. Investigación pedagógica completa en `docs/investigacion/n5-m2-pytorch.md` (12 secciones, una por hallazgo/tema). Verificado: `node --check` limpio; 72 ids `n5` en total, 0 duplicados nuevos (checkpoints cp0-cp4 siguen el patrón institucional ya usado en N1.M4-M5, con id local no-único por diseño). Sigue: M3 · Arquitecturas (mixto DOC-11/DOC-12). · **0.4.0 (2026-07-21): M3 · Arquitecturas completo — 5 temas mixtos, primer módulo de N5 con modalidad decidida por TEMA en vez de por módulo completo** (T1 Convoluciones —mecanismo en Python puro, DOC-11: producto_ventana→convolución 2D→kernel detector de bordes real→cifras de ahorro de parámetros (9 vs. 234)→múltiples kernels/padding/stride→desafío final: invariancia traslacional verificada—; T2 CNN entrenada de verdad —DOC-12/Colab, primer dataset real de N5 (MNIST, 70,000 imágenes descargadas y verificadas con torchvision), precisión sube de ~11% a 75% en 3 épocas sobre un subconjunto pequeño, cifra deliberadamente modesta y honesta; error inducido: RuntimeError real de dimensión mal calculada al aplanar—; T3 RNN/LSTM —mecanismo en Python puro, DOC-11: celda recurrente→forward_rnn→estado vectorial→BPTT verificado como la misma regla de la cadena de M1.T3→LSTM simplificada con compuertas→desafío final: el estado de una secuencia de 21 pasos converge a 0.0, perdiendo el recuerdo del primer elemento—; T4 RNN/LSTM entrenada de verdad —DOC-12/Colab, generación de texto carácter por carácter en el espíritu de *makemore* de Karpathy (ya citado desde M1), modelo nn.Embedding+nn.LSTM+nn.Linear entrenado sobre 8 palabras, resultado documentado honestamente como probable memorización, no generalización, con datasets tan pequeños—; T5 Introducción a la atención, cierra M3 —mecanismo en Python puro, DOC-11: producto punto→softmax→suma ponderada→self-attention completo con escalado √d_k→laboratorio integrador sobre una "oración" de 4 palabras→desafío final: dos apariciones idénticas de un vector en posiciones distintas dan salidas IDÉNTICAS, verificado, la limitación exacta que motiva positional encoding en N6). **2 bugs reales de valores no verificados encontrados y corregidos por los harnesses antes de comitear** (T3.Ejercicio 10: gradiente BPTT estimado por intuición en vez de ejecutado; T5.Ejercicio 9: salida de self-attention no verificada — ambos en ejercicios de código "ya completo", patrón de riesgo identificado y documentado en `docs/investigacion/n5-m3-arquitecturas.md` §18 para vigilar en niveles futuros). Verificado: `node --check` limpio; 122 ids `n5` en total, 0 duplicados. Investigación pedagógica completa (20 secciones acumulativas) en `docs/investigacion/n5-m3-arquitecturas.md`. Sigue: M4 · Rigor experimental. · **0.5.0 (2026-07-21): M4 · Rigor experimental completo — 3 temas, cierra el contenido curricular íntegro de N5** (T1 El método científico aplicado a deep learning —hipótesis/variable aislada/múltiples corridas/ablation study, aplicado a resultados YA reales de M2-M3; desafío final: "n=1 miente", verificado con ejecución real—; T2 Reproducibilidad —semillas en múltiples fuentes independientes (bug real: fijar solo `random.seed` no fija `numpy.random`), registro estructurado de experimentos; desafío final: CPU/Pyodide es 100% determinista con semilla fija, contrastado honestamente con el hallazgo de M2.T4 en GPU—; T3 Análisis honesto de resultados, cierra M4 y el nivel —detectar cherry-picking, reporte honesto (media/peor/mejor/num_corridas), explicación a dos audiencias (C-N5-04), informe comparativo integrador de T1-T3; desafío final: la conclusión de un experimento cambia al agregar una tercera corrida, la misma lección de T1 demostrada una vez más). Los 3 temas de M4 forman un ciclo verificable completo: diseñar (T1) → garantizar reproducibilidad (T2) → reportar con honestidad (T3). **Segundo bug real, de categoría NUEVA, encontrado y corregido por el harness:** T2.Ejercicio 3 esperaba un valor EXACTO de `numpy.random` sin semilla propia — pero ese valor es inherentemente no-reproducible entre procesos (se inicializa desde entropía real del sistema operativo), no una cifra que pueda fijarse; corregido para verificar el patrón (`r1 != r2`, siempre `False`) en vez del valor imposible, verificado ejecutando el harness 3 veces seguidas. Verificado: `node --check` limpio; 156 ids `n5` en total, 0 duplicados. Investigación pedagógica completa en `docs/investigacion/n5-m4-rigor-experimental.md`. **Con esto, el contenido curricular completo de N5 (M1-M4, 27 días/laboratorios) queda cerrado.** Sigue: Paso 4 (capstone de nivel). |

---

## 1. Tabla resumen

| Módulo | Temas | Modalidad dominante | Competencias | Quiebre de intuición |
|---|---|---|---|---|
| M1 · Redes desde cero | 4 | 100% DOC-11 (Pyodide) | C-N5-01 | T3: el gradiente de una red de mil parámetros no es mil cálculos distintos — es la MISMA regla de la cadena de N3.M2.T2, aplicada mecánicamente hacia atrás por el grafo |
| M2 · PyTorch | 4 | 100% DOC-12 (Google Colab) | C-N5-02 | T2: `.backward()` no es magia nueva — es exactamente el motor de M1.T3, ahora automático y sobre tensores en vez de escalares |
| M3 · Arquitecturas | 5 | Mixto DOC-11 (mecanismo) + DOC-12 (entrenamiento real, Colab) | C-N5-01, C-N5-02 | T1/T3: una capa convolucional o recurrente no es "una capa distinta" — es la MISMA neurona de M1 con una restricción deliberada (pesos compartidos / estado persistente) que explota una estructura del dato que una capa densa ignora |
| M4 · Rigor experimental | 3 | Mayormente DOC-11 (metodología/escritura) + análisis sobre resultados reales de M2/M3 (Colab) | C-N5-03, C-N5-04 | T2: "funcionó una vez" y "es reproducible" son afirmaciones distintas — la GPU (cuDNN no determinista por defecto) puede darte un resultado ligeramente distinto cada vez que entrenas, aunque el código no cambie |
| Proyecto de nivel | — | DOC-12 (Colab) + defensa | Todas | Integración: red entrenada end-to-end reproducible y documentada, explicada a dos audiencias distintas |

*Heurística de partida (§3.6): 3-4 días/tema en M1 (práctica procedimental pesada, patrón N3 §8), 2-3 días/tema en M2-M3 (laboratorios DOC-12, cuya duración se mide distinto — ver DOC-12 §1, desglosada por componente, no en "días" de la misma forma que Pyodide), 2 días/tema en M4 (metodológico, no procedimental repetido). **Ninguna cifra de ejercicios/laboratorio se promete aquí antes de construirse y verificarse real** — mismo principio que DOC-10 §7/guía §8 exigen explícitamente para N4-N12, y que SYL-N3 §3.8/1 ya identificó como su propio error si se hace al revés.*

## 2. Identidad del nivel

Por referencia a DOC-10 §7: **N5 · Deep Learning** es donde el estudiante deja de razonar sobre "un modelo que aprende parámetros" en abstracto (N4: regresiones, clasificadores, scikit-learn) y empieza a construir la maquinaria que hace posible que ese aprendizaje escale a millones de parámetros: redes de unidades simples compuestas en capas, entrenadas por descenso de gradiente propagado hacia atrás. Entrada: N4 Superado (NNR-01) — la cadena de dependencia técnica real es N3→N4→N5: N3.M2 (cálculo, regla de la cadena, descenso de gradiente desde cero) es el prerrequisito matemático directo de M1; N4.M2 (modelos desde cero con su matemática) es la última vez que el estudiante implementó un algoritmo de aprendizaje sin un framework, exactamente el hábito que M1 extiende de una neurona a una red. Salida: examen + proyecto + defensa → habilita N6 (Transformers), que according a DOC-10 §7 reutiliza literalmente la atención introducida al cierre de M3. Si N4 enseñó a implementar el aprendizaje automático clásico desde su matemática, N5 enseña **la unidad de cómputo (la neurona) y la regla de aprendizaje (backpropagation) que, apiladas y escaladas, son el mecanismo real detrás de todo sistema de IA que el estudiante construirá desde N6 en adelante.**

## 2bis. Herencia entrante (borrador — N4 en construcción paralela)

Basado en el alcance ya aprobado de DOC-10 §7 para N4 (Machine Learning): manejo de datos con NumPy/pandas, EDA, modelos "desde cero" con su matemática (regresiones/clasificadores), scikit-learn aplicado, metodología de evaluación (splits/métricas/overfitting, diagnóstico datos/features/capacidad). Este syllabus trata como punto de partida razonable para M1: (a) el estudiante ya implementó regresión logística desde cero con su matemática (N4.M2) — M1.T1 la reinterpreta explícitamente como "una neurona" en vez de introducir el concepto desde cero; (b) el estudiante ya practicó la disciplina de splits/métricas/overfitting (N4.M4) — M4 de este nivel la extiende con el vocabulario propio de deep learning (ablation, variables aisladas), no la reenseña. **Declarado explícitamente como "pendiente de confirmación cuando N4 congele"** (mismo patrón que exige `docs/guia-construccion-niveles.md` §13 paso 7) — no bloquea el avance de este documento.

## 3. Principios de ejecución

1. **Principio "mixto por tema" — primera vez en la Academia que un nivel completo se construye así, no como excepción puntual** (a diferencia de N3, 100% Pyodide, y de N1.M4-M5, que eran DOC-12 dentro de un nivel mayormente Pyodide): aplicando el criterio de frontera de DOC-12 §5 tema por tema, N5 resuelve así — **M1 → 100% DOC-11** (perceptrón/MLP/backprop en numpy/Python puro, sin dependencia de hardware ni cuenta externa, continuación directa de N3.M2/N4.M2); **M2 → 100% DOC-12** (PyTorch no está instalable en el sandbox — verificado empíricamente, ver Historial — el estudiante sale del Campus hacia Colab); **M3 → mixto por tema**: el mecanismo/forward-pass de CNN y RNN es Pyodide-construible (numpy puro, mismo principio que Karpathy usa en micrograd/makemore antes de tocar un framework), pero entrenar esas arquitecturas a una escala que demuestre algo real requiere GPU (DOC-12/Colab, extendiendo el entorno ya introducido en M2); la introducción a la atención que cierra M3 es conceptual (DOC-11), siembra N6 sin implementar un transformer completo; **M4 → mayormente DOC-11** (metodología, hipótesis, escritura), con análisis que opera directamente sobre resultados ya producidos en Colab durante M2/M3 (sin abrir una sesión Colab nueva propia, ver T3).
2. **PyTorch NO está disponible en Pyodide — verificado empíricamente, no asumido de la documentación de terceros** (Historial 0.1.0-draft): inspección directa de `pyodide-lock.json` de la build `v0.26.4` fijada en `index.html:9`. Ninguna lección de M2 en adelante puede intentar `pyodide.loadPackage("torch")` — es un error de diseño detectado antes de construir, no algo a descubrir a mitad de módulo.
3. **Entorno externo fijado para todo tema DOC-12 de este nivel: Google Colab**, verificado (Historial): cuenta Gmail (sin proceso de aprobación adicional), sin tarjeta de crédito, GPU T4 gratuita con cuota semanal dinámica (~15-30h) y sesiones de hasta 12h, sin disponibilidad garantizada. **Consecuencia de diseño obligatoria para M2.T1 (Requisitos, DOC-12 §2.3):** el laboratorio declara explícitamente la cuota no garantizada como parte de "Fuera de alcance (y por qué)" — un estudiante que agote su cuota semanal no tiene un bug que diagnosticar, tiene una limitación real del servicio gratuito, y el laboratorio debe distinguir ambos casos para no generar frustración mal dirigida.
4. **Continuidad matemática explícita con N3, nunca reenseñada desde cero** (resuelve la herencia técnica real, más fuerte que la declarada en §2bis): N3.M2.T2 (regla de la cadena, "multiplicar razones de cambio en serie") es, literalmente, el mecanismo de M1.T3 (backpropagation) — el syllabus de M1.T3 cita la ficha exacta de N3.M2.T2 en vez de re-derivar la regla de la cadena. N3.M2.T3 (gradiente como vector) es el mecanismo de "los pesos de una capa completa se actualizan a la vez". N3.M1.T3 (matriz como transformación) es el mecanismo exacto de una capa densa (`y = Wx + b`, ya nombrado en notación de papers por N3.M4.T2).
5. **Motor de autograd propio como columna vertebral pedagógica de M1** (decisión de diseño explícita, no una elección de contenido cualquiera): siguiendo el patrón verificado de Karpathy *Zero to Hero* (micrograd: motor de autograd escalar construido antes de cualquier framework) — mismo principio que `docs/mision-n5.md` ya señala como "pedagógicamente más fuerte" — M1.T3 no se limita a "explicar" backpropagation con texto: el estudiante implementa un motor mínimo (una clase `Valor` con `.backward()` propio, sobre escalares) que M1.T4 usa para entrenar una MLP real. Esto hace el "quiebre de intuición" de M2.T2 (§1 de esta tabla) literal y verificable: el estudiante compara su propio `.backward()` contra `torch.Tensor.backward()` sobre el mismo cálculo.
6. **Densidad — heurística de partida, nunca cifra prometida antes de construir** (mismo principio de guía §8, y corrección deliberada del propio error que SYL-N3 §1 nota sobre sí mismo): M1 (práctica procedimental pesada, Pyodide) sigue el patrón de N3 — 3-4 días/tema, ejercicios que escalan en dificultad dentro del día, sin fijar "12-15 ejercicios" hasta construir y verificar T1 completo. M2-M3(DOC-12) se miden por la disciplina de DOC-12 §1 (duración desglosada por componente: contexto + ejecución guiada + mini-laboratorio + desafío + debugging real + reflexión), no por "días" al estilo Pyodide — un laboratorio DOC-12 de M2 puede razonablemente ocupar una sola sesión larga con las 13 secciones completas, en vez de fragmentarse en 3 días artificiales. M4 es metodológico — 2 días/tema, sin práctica procedimental repetida que lo justifique.
7. **Verificación numérica heredada, con un matiz nuevo para M2-M3(DOC-12)**: toda comparación de floats usa tolerancia explícita (nunca `==`); todo valor de un `check()` de ejercicio DOC-11 se copia de ejecución real (nunca de memoria), disciplina heredada sin cambio de N3/N4 (guía §9). **Matiz nuevo:** los laboratorios DOC-12 de M2-M3 no usan `check()` de Pyodide — su verificación de aprendizaje vive en los puntos de verificación (DOC-12 §2.7) y el diagnóstico de errores (§2.8) del propio laboratorio, verificados por el autor ejecutando el laboratorio real en Colab antes de publicarlo (mismo principio de verificación empírica de DOC-12 §2.8, "reproducible deliberadamente por el autor antes de escribirlo", trasladado del terreno Git/Linux de N1 al terreno GPU/notebooks de N5).
8. **Explicación a dos audiencias como hilo transversal, no solo del proyecto final** (C-N5-04, DOC-01 línea 125): cada tema de M1-M3 incluye, dentro de su práctica, al menos una instancia de "explica este resultado a alguien que no sabe qué es un gradiente" — no se reserva exclusivamente para la defensa del capstone, se entrena progresivamente desde M1.

## 4. Estructura y grafo local

Troncal: `M1 → M2 → M3 → M4`. M2 depende con fuerza de M1 (el "quiebre de intuición" de M2.T2 exige que el estudiante ya haya construido su propio motor de autograd en M1.T3 — sin eso, `.backward()` de PyTorch es magia en vez de automatización de algo ya entendido). M3 depende con fuerza de M1 (el mecanismo/forward-pass de CNN y RNN en numpy puro reutiliza directamente la maquinaria de M1) y de M2 (entrenar esas arquitecturas a escala real usa el framework, el bucle de entrenamiento y el entorno Colab ya introducidos en M2). M4 depende de M2-M3 (analiza resultados reales ya producidos ahí) y se construye secuencial al final — mismo patrón de M4 en SYL-N3 (mezcla contenido de módulos anteriores, no hay nada real que auditar metodológicamente hasta que existan experimentos reales que auditar).

**Nota de implementación (obligatoria, mismo texto institucional que rige todo SYL-Nx desde EVT-034):** el Campus presenta un recorrido lineal único, sin bifurcaciones de navegación (DOC-07 §Adenda, EVT-034). La implementación resuelve siempre a la secuencia lineal fija M1→M2→M3→M4.

## 5. Fichas pedagógicas por tema

*Plantilla heredada de SYL-N3 §5 (10 campos + condicionales), con un campo nuevo obligatorio en este nivel: **Modalidad** (DOC-11/Pyodide o DOC-12/Colab, decidida por tema conforme a §3). Los 5 estándares narrativos se aplican igual que en N3: **gran pregunta** (por módulo) y **gran idea** (universales), **el supuesto que destruye** y **la limitación humana que compensa** (se mantienen donde encajan), **el quiebre de intuición** (un instante preciso, no un tema entero), **la garantía que el sistema adquiere** (declarada presente o ausente honestamente, tema por tema — a diferencia de N3, N5 SÍ produce un artefacto persistente con propiedades tipo contrato: el modelo entrenado y reproducible del proyecto de nivel, así que esta categoría no se descarta de entrada).*

### M1 · Redes desde cero

> **La gran pregunta de este módulo: ¿cómo puede una red de operaciones aritméticas simples aprender una función que nadie programó explícitamente?**

**N5.M1.T1 · La neurona artificial — del perceptrón a la neurona con activación**
- **Modalidad:** DOC-11 (Pyodide).
- **Objetivo:** implementa una neurona artificial (combinación ponderada + sesgo + función de activación) desde cero, y explica por qué la función de activación es indispensable.
- **Prerrequisitos:** N4.M2 (regresión logística desde cero); N3.M1.T6 (producto punto).
- **Competencias:** C-N5-01.
- **Errores habituales:** creer que la neurona es "una fórmula nueva" en vez de reconocerla como el producto punto + sesgo ya visto en N3.M1.T6 con una función aplicada encima; olvidar que sin activación no lineal, cualquier número de neuronas apiladas colapsa algebraicamente a una única transformación lineal.
- **Modelo mental:** la neurona como **una votación ponderada con un umbral suave** — cada entrada "vota" con un peso, el sesgo desplaza el umbral, la activación decide qué tan "decidido" está el voto final.
- **Por qué:** existe porque es la unidad de cómputo mínima de toda red / ahora porque N4.M2 ya implementó una regresión logística (que ES, literalmente, una sola neurona con activación sigmoide) / habilita T2 (apilar neuronas).
- **Evidencia de dominio:** dada una neurona con pesos y sesgo conocidos, calcula su salida a mano para una entrada dada, y explica qué pasaría si se eliminara la función de activación.
- **Práctica principal:** implementar una neurona (perceptrón simple y neurona con activación sigmoide/ReLU) en Python puro, verificada contra un cálculo de referencia con tolerancia explícita.
- **Evaluación:** estándar (RM-03).
- **Pregunta ingenieril:** si reemplazas la activación sigmoide por la función identidad (`f(x)=x`) en TODAS las neuronas de una red de 10 capas, ¿qué le pasa a la capacidad expresiva de la red completa, sin importar cuántas capas tenga?
- **El supuesto que destruye:** "una red neuronal con más capas es automáticamente más potente que una con menos" — se destruye al ver que, sin no-linealidad, N capas densas se reducen algebraicamente a 1.

**N5.M1.T2 · La red como grafo — apilar neuronas en capas (forward pass del MLP)**
- **Modalidad:** DOC-11 (Pyodide).
- **Objetivo:** ensambla neuronas individuales en capas y capas en un perceptrón multicapa (MLP), calculando el forward pass completo de entrada a salida.
- **Prerrequisitos:** T1.
- **Competencias:** C-N5-01.
- **Errores habituales:** confundir el número de neuronas de una capa con el número de capas; no verificar que las dimensiones de salida de una capa coincidan con las de entrada de la siguiente (mismo error de compatibilidad dimensional ya visto en N3.M1.T3 para multiplicación de matrices).
- **Modelo mental:** el MLP como **una tubería de transformaciones**, donde cada capa es la "máquina que mueve el espacio" de N3.M1.T3 (`y = Wx + b`), seguida de una no-linealidad que le da a la siguiente capa algo genuinamente nuevo que transformar.
- **Por qué:** existe porque ninguna red útil tiene una sola neurona / ahora porque T1 ya dio la unidad / habilita T3 (backpropagation necesita el grafo completo para propagar el error hacia atrás).
- **Evidencia de dominio:** dada una arquitectura simple (ej. 2 entradas → capa oculta de 3 neuronas → 1 salida), calcula el forward pass completo a mano para una entrada dada.
- **Práctica principal:** implementar un MLP de al menos 2 capas en Python puro (listas de neuronas de T1, sin matrices todavía), verificado contra numpy con tolerancia.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** si una capa oculta tiene menos neuronas que la capa de entrada, ¿qué le está pasando a la información que fluye por la red, en términos del "span" que N3.M1.T2 ya enseñó?

**N5.M1.T3 · Backpropagation — la regla de la cadena aplicada al grafo, gradiente a gradiente**
- **Modalidad:** DOC-11 (Pyodide).
- **Objetivo:** implementa un motor mínimo de diferenciación automática (autograd escalar) que calcula gradientes propagando la regla de la cadena hacia atrás por el grafo computacional, y lo usa para entrenar los parámetros de una neurona/capa simple.
- **Prerrequisitos:** T2; N3.M2.T2 (regla de la cadena); N3.M2.T3 (gradiente).
- **Competencias:** C-N5-01.
- **Errores habituales:** intentar derivar la red completa "de una vez" en vez de propagar gradientes localmente nodo por nodo (exactamente el error que un motor de autograd previene por diseño); olvidar acumular gradientes cuando un mismo valor se usa en más de un lugar del grafo (regla de la suma de caminos en la regla de la cadena multivariable).
- **Modelo mental:** backpropagation como **la regla de la cadena de N3.M2.T2, aplicada mecánicamente hacia atrás, un nodo a la vez** — no es un algoritmo nuevo, es la misma multiplicación de razones de cambio en serie, ahora automatizada sobre un grafo en vez de calculada a mano sobre una fórmula.
- **Por qué:** existe porque calcular a mano el gradiente de una red de miles de parámetros es inviable (siembra directa hacia por qué frameworks como PyTorch, M2, son indispensables en la práctica) / ahora porque T2 ya dio el grafo completo / habilita T4 (entrenar la MLP real) y M2 completo.
- **Evidencia de dominio:** dado un grafo computacional pequeño (3-4 operaciones), calcula a mano el gradiente de la salida respecto a cada entrada usando la regla de la cadena, y luego verifica con el motor propio implementado.
- **Práctica principal:** implementar una clase `Valor` (patrón micrograd) con `.backward()` propio sobre operaciones escalares (suma, producto, potencia, activación), verificada contra derivadas calculadas a mano con tolerancia explícita.
- **Evaluación:** estándar (RM-03/RM-05).
- **Pregunta ingenieril:** si una red tiene 50 capas y cada derivada local es un número menor que 1 (pregunta ya sembrada en N3.M2.T2), ¿qué gradiente le llega a los pesos de la primera capa después de propagarse por las 50? ¿Qué problema práctico de entrenamiento anticipa esto?
- **El quiebre de intuición de M1:** el instante donde el estudiante ejecuta `.backward()` de su propio motor sobre un grafo con un valor reutilizado en dos ramas distintas, obtiene el gradiente correcto sin haberlo programado explícitamente para ese caso, y entiende que la acumulación de gradientes en cada nodo — no un algoritmo separado para "casos especiales" — es lo que lo resuelve automáticamente.

**N5.M1.T4 · MLP entrenado desde cero — laboratorio integrador, cierra M1**
- **Modalidad:** DOC-11 (Pyodide).
- **Objetivo:** entrena un MLP completo (usando el motor de T3) sobre un problema de clasificación no separable linealmente, con un bucle de entrenamiento completo (forward → loss → backward → actualización de pesos), y explica el resultado a una audiencia no técnica.
- **Prerrequisitos:** T1, T2, T3.
- **Competencias:** C-N5-01; siembra C-N5-04 (explicación a dos audiencias, práctica temprana).
- **Errores habituales:** actualizar los pesos sin poner a cero los gradientes acumulados del paso anterior (bug real y frecuente en frameworks reales — PyTorch exige `zero_grad()` explícito por esta misma razón, siembra directa hacia M2.T3); elegir una tasa de aprendizaje sin justificar la elección (conecta con N3.M2.T4, divergencia por tasa de aprendizaje excesiva).
- **Modelo mental:** el entrenamiento como **un ciclo de 4 pasos que se repite**: predecir, medir qué tan mal, calcular hacia dónde ajustar cada peso, ajustar un poquito — nunca de una sola vez.
- **Por qué:** existe porque es la primera vez que el estudiante ve una red completa aprender un patrón no lineal de principio a fin, con su propio código / ahora porque T1-T3 dieron cada pieza por separado / habilita M2 completo (el mismo ciclo, ahora con PyTorch).
- **Evidencia de dominio:** entrena la red propia sobre un problema no linealmente separable (ej. XOR o una variante 2D equivalente) y demuestra, con métricas antes/después, que aprendió.
- **Práctica principal (laboratorio integrador, ≥2 lecciones previas citadas):** MLP completo con motor de T3, entrenado con descenso de gradiente (reutiliza explícitamente N3.M2.T4) sobre un dataset sintético reproducible (`random.seed`, mismo patrón de N3.M2), con curva de pérdida registrada.
- **Evaluación:** RM-03/RM-05 + defensa breve ("explica a alguien sin formación técnica qué significa que la curva de pérdida vaya bajando").
- **Pregunta ingenieril:** si entrenas la misma red 5 veces con distinta inicialización aleatoria de pesos, ¿por qué el resultado final puede variar, y qué te dice eso sobre lo que "aprender" significa aquí (siembra directa hacia M4)?
- **Idea universal (cierre de M1):** una red neuronal no es más que composición de transformaciones simples (T1-T2) ajustadas por un procedimiento mecánico de propagación de error (T3), repetido miles de veces (T4) — todo lo que sigue en el nivel (PyTorch, CNN, RNN, atención) es una variación de este mismo ciclo, nunca un mecanismo distinto.
- **La limitación humana que compensa M1:** la imposibilidad de calcular a mano el gradiente de una red con miles o millones de parámetros — el motor de autograd (T3) generaliza la regla de la cadena a cualquier tamaño de grafo sin que el humano tenga que rederivar nada.
- **Lo que deja de sorprender (M1):** que un framework como PyTorch "simplemente funcione" al llamar `.backward()` deja de sentirse como magia — es exactamente el motor de T3, mismo mecanismo, con mejor ingeniería (tensores en vez de escalares, GPU, ver M2).

### M2 · PyTorch

> **La gran pregunta de este módulo: ¿qué gana la industria al reemplazar el motor propio de M1 por un framework, y qué se pierde al dejar de verlo por dentro?**

**N5.M2.T1 · Tensores — el objeto central de PyTorch**
- **Modalidad:** DOC-12 (Google Colab).
- **Entorno objetivo:** notebook Colab con runtime CPU (este tema no requiere GPU todavía — se introduce en T4).
- **Objetivo:** crea, manipula y razona sobre tensores de PyTorch (forma, tipo, broadcasting), relacionándolos explícitamente con las listas/numpy ya usados en N3-N5.M1.
- **Prerrequisitos:** M1 completo; cuenta de Google.
- **Competencias:** C-N5-02.
- **Errores habituales:** tratar un tensor como una lista de Python (sin aprovechar operaciones vectorizadas); errores de forma (`shape mismatch`) por no verificar dimensiones antes de operar — mismo error de compatibilidad dimensional ya visto en N3.M1.T3 y N5.M1.T2, ahora en su tercera aparición con una herramienta distinta cada vez.
- **Por qué:** existe porque todo el resto de M2-M3 se construye sobre tensores / ahora porque el estudiante ya maneja numpy (N3-N4) y listas de Python puro (M1) / habilita T2-T4.
- **Práctica principal:** primer laboratorio DOC-12 real de N5 — crear cuenta/abrir Colab, crear tensores, operar, comparar explícitamente contra el numpy ya usado en N3/N4 (mismas operaciones, sintaxis distinta, resultado idéntico salvo tolerancia de precisión).
- **Nota de diseño DOC-12 (§2.3, Requisitos):** este laboratorio declara explícitamente, como parte de "Fuera de alcance", que la cuota de GPU gratuita de Colab NO es garantizada — y que este tema en particular no la necesita (CPU basta), reservando la primera exposición a esa limitación real para T4.
- **Pregunta ingenieril:** si `numpy.array` y `torch.Tensor` tienen una API casi idéntica para estas operaciones, ¿qué justifica que exista un objeto nuevo en vez de que PyTorch use numpy directamente? (siembra hacia T2: la respuesta es autograd, no velocidad).

**N5.M2.T2 · Autograd — el motor de M1.T3, ahora automático**
- **Modalidad:** DOC-12 (Google Colab, CPU).
- **Objetivo:** usa `torch.autograd` (`requires_grad`, `.backward()`, `.grad`) para calcular gradientes automáticamente, y verifica que coincide exactamente con el resultado que el motor propio de M1.T3 ya daba a mano.
- **Prerrequisitos:** T1; N5.M1.T3 (motor de autograd propio — prerrequisito directo, no solo temático).
- **Competencias:** C-N5-02.
- **Errores habituales:** olvidar `requires_grad=True` y obtener `None` en `.grad` sin entender por qué; llamar `.backward()` más de una vez sobre el mismo grafo sin `retain_graph` y obtener un error críptico; no llamar `zero_grad()` entre iteraciones (bug ya anticipado en M1.T4).
- **Por qué:** existe porque re-derivar gradientes a mano para redes reales es inviable (ya sembrado en M1.T3) / ahora porque M1.T3 dio el mecanismo exacto que este tema automatiza / habilita T3 (entrenamiento real).
- **Práctica principal (error inducido en vivo, obligatorio DOC-12 §2.5bis):** reproducir en vivo el error de gradientes no reseteados (`zero_grad` omitido) sobre un caso mínimo, ver el resultado numérico incorrecto con los propios ojos, diagnosticarlo, corregirlo.
- **Pregunta ingenieril:** ejecuta el mismo cálculo con tu motor de M1.T3 y con `torch.autograd` — si los gradientes no coinciden hasta el último decimal, ¿qué deberías sospechar primero: un bug en tu motor, o una diferencia de precisión de punto flotante (float32 vs. la aritmética de Python)?
- **El quiebre de intuición de M2:** el instante donde el estudiante confirma, número por número, que `.backward()` de PyTorch da EXACTAMENTE el mismo resultado que su propio motor de M1.T3 sobre el mismo cálculo — la "magia" del framework se vuelve, verificablemente, la misma regla de la cadena ya dominada, con mejor ingeniería debajo.

**N5.M2.T3 · Construir y entrenar una red con `nn.Module` y un optimizador**
- **Modalidad:** DOC-12 (Google Colab, CPU).
- **Objetivo:** construye una red con `torch.nn.Module`, entrena con un optimizador (`SGD`/`Adam`) sobre un bucle de entrenamiento completo, y compara la ergonomía frente al MLP manual de M1.T4.
- **Prerrequisitos:** T2; N5.M1.T4 (bucle de entrenamiento manual — mismo ciclo de 4 pasos, ahora con herramientas de framework).
- **Competencias:** C-N5-02.
- **Errores habituales:** confundir "época" con "paso de optimización" (batch); usar una tasa de aprendizaje copiada sin verificar que tenga sentido para el optimizador elegido (Adam y SGD no comparten la misma escala típica).
- **Práctica principal:** reimplementar el problema ya resuelto a mano en M1.T4 (mismo dataset, mismo objetivo) usando `nn.Module` + optimizador, comparando curvas de pérdida y verificando que ambos enfoques convergen a una solución equivalente.
- **Pregunta ingenieril:** si `Adam` converge en muchas menos épocas que `SGD` puro sobre el mismo problema, ¿qué le está costando eso en memoria o cómputo por paso, y por qué esa diferencia importaría en una red con cientos de millones de parámetros?

**N5.M2.T4 · GPU y reproducibilidad — cierra M2**
- **Modalidad:** DOC-12 (Google Colab, runtime GPU T4 — primer uso real de GPU del Campus).
- **Objetivo:** mueve el entrenamiento a GPU, mide la aceleración real frente a CPU sobre el mismo problema, y fija semillas para obtener corridas reproducibles (o documenta honestamente cuándo no lo son).
- **Prerrequisitos:** T3.
- **Competencias:** C-N5-02; siembra C-N5-03 (rigor experimental, M4).
- **Errores habituales:** olvidar mover tanto el modelo como los datos a GPU (`.to("cuda")` en ambos, no solo uno — error de "tensores en dispositivos distintos" real y frecuente); asumir que fijar `torch.manual_seed()` garantiza reproducibilidad total en GPU sin verificarlo.
- **Hallazgo técnico a verificar empíricamente antes de escribir este tema (mismo principio de disciplina numérica de la guía §9, trasladado a GPU):** operaciones de cuDNN en GPU pueden ser no deterministas por defecto incluso con semilla fija, a menos que se fuercen explícitamente modos deterministas (con coste de rendimiento) — se verifica en Colab real antes de comprometer cualquier afirmación del tema a texto.
- **Práctica principal:** entrenar el mismo modelo de T3 en CPU y en GPU, medir tiempo real de ambos, y ejecutar la misma corrida dos veces con semilla fija para verificar (o refutar honestamente) la reproducibilidad exacta.
- **Pregunta ingenieril:** si tu resultado en GPU varía ligeramente entre dos corridas con la misma semilla, ¿es esto un bug que debes corregir, o una propiedad real del hardware que debes documentar? (siembra directa hacia M4.T2).
- **La garantía que el sistema adquiere (M2):** a partir de este tema, cualquier red que el estudiante entrene en el nivel puede acelerarse en GPU y (con las precauciones de este tema) reportarse con una cifra de reproducibilidad honesta — no una promesa vaga de "funciona", sino un procedimiento verificable.

### M3 · Arquitecturas

> **La gran pregunta de este módulo: ¿por qué no basta con apilar más capas densas — qué estructura del dato (imagen, secuencia) puede una arquitectura especializada explotar que una MLP genérica ignora?**

**N5.M3.T1 · Convoluciones — el mecanismo, en numpy puro**
- **Modalidad:** DOC-11 (Pyodide).
- **Objetivo:** implementa una operación de convolución 2D desde cero (numpy puro) y explica por qué comparte pesos entre posiciones de la imagen, a diferencia de una capa densa.
- **Prerrequisitos:** N5.M1 completo; N3.M1.T6 (producto punto, mecanismo interno de cada posición de la convolución).
- **Competencias:** C-N5-01.
- **Errores habituales:** creer que una convolución "mira toda la imagen a la vez" (en realidad opera sobre una ventana local, deslizada); no entender por qué compartir pesos entre posiciones reduce drásticamente los parámetros frente a una capa densa equivalente.
- **Modelo mental:** el filtro convolucional como **una plantilla que se pasea por la imagen preguntando "¿cuánto se parece esta ventana a lo que busco?"** en cada posición — la misma pregunta de similitud (producto punto, N3.M1.T6), repetida con la MISMA plantilla en todas partes.
- **Por qué:** existe porque una imagen de 784 píxeles conectada densamente a una capa oculta de tamaño razonable ya tiene cientos de miles de parámetros por capa, y ninguno de ellos aprovecha que un borde se ve igual en la esquina que en el centro / ahora porque M1 ya dio la neurona y el forward pass / habilita T2 (entrenamiento real).
- **Práctica principal:** implementar convolución 2D con un kernel simple (ej. detector de bordes) sobre una imagen pequeña sintética, verificado contra el resultado esperado con tolerancia.
- **Pregunta ingenieril:** si entrenas la MISMA arquitectura convolucional sobre imágenes donde el objeto de interés puede aparecer en cualquier posición, ¿por qué el compartir pesos entre posiciones (en vez de una capa densa) hace que la red generalice mejor con menos ejemplos de entrenamiento?

**N5.M3.T2 · CNN entrenada de verdad — laboratorio DOC-12**
- **Modalidad:** DOC-12 (Google Colab, GPU).
- **Objetivo:** construye y entrena una CNN pequeña (tipo LeNet) en PyTorch sobre un dataset de imágenes real, aplicando el bucle de entrenamiento de M2 completo.
- **Prerrequisitos:** T1; M2 completo.
- **Competencias:** C-N5-02.
- **Errores habituales:** dimensiones de salida mal calculadas al apilar capas convolucionales y de pooling (mismo error de compatibilidad dimensional recurrente desde N3.M1.T3, ahora en su cuarta aparición); no normalizar los datos de entrada, ralentizando o impidiendo la convergencia.
- **Práctica principal:** `nn.Conv2d` + `nn.MaxPool2d` + capas densas de cierre, entrenado sobre un dataset estándar pequeño, con métricas de precisión reales reportadas.
- **Pregunta ingenieril:** si la CNN entrenada aquí logra buena precisión con muchos menos parámetros que la MLP de M1/M2 sobre un problema de imagen comparable, ¿qué evidencia concreta de esta corrida real respalda la afirmación conceptual de T1?

**N5.M3.T3 · RNN/LSTM — el mecanismo, en numpy puro**
- **Modalidad:** DOC-11 (Pyodide).
- **Objetivo:** implementa el forward pass de una RNN simple desde cero (numpy puro), explicando el estado oculto como memoria que persiste entre pasos de una secuencia, y por qué una LSTM añade compuertas para mitigar el olvido/explosión de gradiente en secuencias largas.
- **Prerrequisitos:** N5.M1 completo; pregunta sembrada en N5.M1.T3 sobre gradientes que se desvanecen a través de muchas capas (aquí, "capas" = pasos de tiempo).
- **Competencias:** C-N5-01.
- **Errores habituales:** tratar cada paso de la secuencia como independiente (perdiendo el estado oculto, que es exactamente lo que distingue una RNN de aplicar la misma MLP N veces por separado); no reconocer que backpropagation a través del tiempo (BPTT) es la MISMA regla de la cadena de M1.T3, aplicada ahora a través de pasos temporales en vez de capas.
- **Modelo mental:** el estado oculto de una RNN como **una nota que la red se pasa a sí misma de un paso al siguiente** — cada palabra/paso de la secuencia no solo produce una salida, actualiza esa nota para el siguiente paso.
- **Por qué:** existe porque texto, series temporales y audio tienen una estructura secuencial que ni una MLP ni una CNN modelan directamente / ahora porque M1 dio la neurona y T1 dio la idea de compartir un mecanismo a través de una dimensión estructural del dato (posición espacial → posición temporal) / habilita T4 y siembra la necesidad de atención (T5).
- **Práctica principal:** implementar el forward pass de una RNN simple (celda recurrente) sobre una secuencia corta sintética, verificado contra un cálculo de referencia paso a paso.
- **Pregunta ingenieril:** si la misma matriz de pesos recurrente se aplica en cada paso de una secuencia de 100 elementos (mismo mecanismo de M1.T3 pregunta ingenieril, ahora en el eje temporal), ¿qué le pasa al gradiente que llega al primer paso de la secuencia, y qué arquitectura (LSTM) se diseñó específicamente para mitigarlo?
- **El supuesto que destruye:** "una RNN procesa una secuencia completa a la vez, como una CNN procesa una imagen completa" — se destruye al ver que procesa un elemento a la vez, y que TODO lo que "recuerda" de los elementos anteriores vive comprimido en un único vector de estado oculto de tamaño fijo — una limitación real que T5 (atención) existe para resolver.

**N5.M3.T4 · RNN/LSTM entrenada de verdad — laboratorio DOC-12**
- **Modalidad:** DOC-12 (Google Colab, GPU).
- **Objetivo:** construye y entrena una RNN/LSTM en PyTorch sobre una tarea secuencial real (ej. clasificación de secuencias o modelado de texto a nivel de carácter, en el espíritu de *makemore* de Karpathy), aplicando el framework completo de M2.
- **Prerrequisitos:** T3; M2 completo.
- **Competencias:** C-N5-02.
- **Errores habituales:** longitudes de secuencia inconsistentes en un mismo batch sin relleno (`padding`) explícito; confundir la dimensión de batch con la dimensión temporal al definir las capas (`nn.LSTM` tiene una convención de forma específica que hay que verificar, no asumir).
- **Práctica principal:** `nn.LSTM` (o `nn.RNN` simple primero, como contraste) entrenada sobre una tarea secuencial real, con generación de muestra tras entrenamiento (ver qué "aprendió" la red produciendo salida nueva).
- **Pregunta ingenieril:** si generas texto nuevo con la LSTM entrenada y compara su coherencia local (pocas palabras) frente a coherencia global (una oración larga), ¿qué te dice eso sobre el límite práctico de comprimir todo el contexto en un único estado oculto de tamaño fijo (mismo supuesto que T3 ya destruyó)?

**N5.M3.T5 · Introducción a la atención — cierra M3 y siembra N6**
- **Modalidad:** DOC-11 (Pyodide) — conceptual, sin entrenar un transformer completo (eso es N6).
- **Objetivo:** implementa el mecanismo básico de self-attention (query/key/value, producto punto escalado, softmax) desde cero en numpy puro, y explica por qué resuelve la limitación de estado fijo de las RNN (T3).
- **Prerrequisitos:** T3, T4; N3.M1.T6 (producto punto/similitud); N3.M4 (notación de papers — este tema usa notación real, `Q`, `K`, `V`, sembrada explícitamente en N3.M4.T2).
- **Competencias:** C-N5-01.
- **Errores habituales:** creer que la atención "reemplaza" a las RNN por ser más compleja, en vez de entender que resuelve una limitación estructural concreta (acceso directo a cualquier posición de la secuencia, sin pasar por un cuello de botella de estado fijo); olvidar el escalado por `√d_k` y no entender por qué existe (estabilidad numérica del softmax con vectores de alta dimensión — mismo principio general de "verificar comportamientos numéricos reales" ya nombrado en SYL-N3 §3).
- **Modelo mental:** la atención como **cada posición de la secuencia preguntando directamente a todas las demás "¿cuánto te pareces a lo que necesito ahora?"** (producto punto, ya dominado desde N3.M1.T6) y promediando sus valores según esa relevancia — sin pasar la información por una única "nota" comprimida como en T3.
- **Por qué:** existe porque el estado oculto de tamaño fijo de una RNN (T3) es un cuello de botella real para secuencias largas / ahora porque T3-T4 ya mostraron esa limitación de forma verificable, no solo anunciada / habilita N6 completo (self-attention es, literalmente, el mecanismo central del transformer).
- **Práctica principal (laboratorio integrador, cierra M3):** implementar self-attention de una sola cabeza desde cero (numpy puro) sobre una secuencia pequeña, verificado paso a paso (scores → softmax → suma ponderada de valores) contra un cálculo de referencia.
- **Evaluación:** RM-03/RM-05 + explicación a dos audiencias (C-N5-04).
- **Pregunta ingenieril:** a diferencia de una RNN, que procesa la secuencia en orden y por eso "sabe" implícitamente qué posición es cuál, la atención pura no distingue posiciones por sí misma — ¿qué tendría que añadirse a este mecanismo para que supiera diferenciar "el gato come al ratón" de "el ratón come al gato"? (siembra directa hacia el positional encoding de N6.M1).
- **Idea universal (cierre de M3):** CNN, RNN y atención no son tres mecanismos independientes — son tres formas distintas de responder a la misma pregunta ("¿qué parte del dato es relevante para esta neurona ahora?") explotando tres estructuras distintas del dato (localidad espacial, orden secuencial, relevancia global) sobre la misma unidad de cómputo que M1 ya estableció.
- **Lo que deja de sorprender (M3):** que un modelo "entienda" que dos palabras lejanas en una oración están relacionadas deja de sentirse como comprensión humana — es, mecánicamente, un producto punto alto entre sus representaciones, exactamente el mismo cálculo de similitud que N3.M1.T6 enseñó sobre vectores de 2 o 3 dimensiones, ahora sobre embeddings de cientos.

### M4 · Rigor experimental

> **La gran pregunta de este módulo: ¿cómo sabes que tu red aprendió algo real, y no que tuviste una corrida afortunada?**

**N5.M4.T1 · El método científico aplicado a deep learning — hipótesis, variable aislada, control**
- **Modalidad:** DOC-11 (Pyodide/escritura) — metodológico, sin nuevo entrenamiento propio; usa como material los resultados ya producidos en M2-M3.
- **Objetivo:** formula un experimento de deep learning con hipótesis explícita, una única variable aislada por comparación, y una condición de control, distinguiendo esto de "probar cosas hasta que funcione".
- **Prerrequisitos:** M2-M3 completos (provee los resultados reales sobre los que este tema opera); DOC-03 A6 (experimento hipótesis→predicción→conclusión, ya practicado desde niveles anteriores — este tema lo formaliza con vocabulario propio de DL: *ablation study*).
- **Competencias:** C-N5-03.
- **Errores habituales:** cambiar dos hiperparámetros a la vez y atribuir la mejora/empeoramiento a uno solo sin poder aislarlo; confundir "until it works" con experimentación real (ausencia de hipótesis previa a probar).
- **Modelo mental:** el *ablation study* como **quitar una pieza a la vez y medir qué se rompe** — la única forma honesta de saber qué parte de tu arquitectura o configuración es responsable de un resultado.
- **Por qué:** existe porque un resultado de deep learning sin metodología es indistinguible de suerte / ahora porque M2-M3 ya produjeron resultados reales sobre los que practicar esto, no ejemplos de juguete / habilita T2-T3.
- **Práctica principal:** diseñar (y ejecutar sobre resultados/reentrenos ya disponibles de M2-M3) al menos una comparación con variable aislada real — ej. mismo modelo con y sin una capa, o dos tasas de aprendizaje, reportando la diferencia con su hipótesis previa explícita.
- **Pregunta ingenieril:** si cambias la arquitectura Y el optimizador al mismo tiempo entre dos corridas y la segunda es mejor, ¿qué puedes concluir legítimamente sobre cuál de los dos cambios causó la mejora?

**N5.M4.T2 · Reproducibilidad — semillas, determinismo real, registro de experimentos**
- **Modalidad:** DOC-12 ligero (Google Colab, verificación empírica sobre corridas reales) + DOC-11/escritura.
- **Objetivo:** distingue "funcionó una vez" de "es reproducible", fija semillas correctamente en todas las fuentes de aleatoriedad relevantes, y documenta honestamente cuándo la reproducibilidad exacta no es alcanzable (GPU, ver M2.T4).
- **Prerrequisitos:** N5.M2.T4 (hallazgo real de determinismo en GPU, verificado ahí); T1.
- **Competencias:** C-N5-03.
- **Errores habituales:** fijar la semilla de Python/numpy pero olvidar la de PyTorch (o viceversa) — tres fuentes de aleatoriedad distintas en el mismo experimento; declarar "reproducible" sin haber ejecutado la corrida dos veces para comprobarlo.
- **Modelo mental:** la reproducibilidad como **una afirmación que se demuestra ejecutando dos veces, nunca se asume por fijar una semilla y no verificar**.
- **Por qué:** existe porque un resultado que nadie más (ni tú mismo, mañana) puede reproducir no es evidencia de nada / ahora porque M2.T4 ya mostró el caso real y verificado en GPU / habilita T3 (el reporte honesto necesita esta disciplina).
- **Práctica principal:** tomar el experimento de T1 y ejecutarlo dos veces con semillas fijas en las tres fuentes relevantes (Python `random`, `numpy`, `torch`), reportando si el resultado es idéntico, casi idéntico (GPU) o distinto, con la causa correcta identificada.
- **Pregunta ingenieril:** si publicas un resultado de investigación y otro laboratorio no puede reproducirlo con tu mismo código y semilla, ¿qué tres explicaciones legítimas (no sospechosas) podrían justificar la diferencia, basándote en lo que ya verificaste en M2.T4?

**N5.M4.T3 · Análisis honesto de resultados — cierra M4 y el nivel**
- **Modalidad:** DOC-11 (Pyodide/escritura), operando sobre los resultados reales ya producidos en M2-M3.
- **Objetivo:** compara configuraciones experimentales con honestidad metodológica, reportando tanto lo que funcionó como las limitaciones reales, sin inflar resultados ni ocultar fallos — mismo estándar de "honestidad si una fuente/resultado no aporta nada citable" ya practicado en investigación pedagógica (DOC-11 §0bis).
- **Prerrequisitos:** T1, T2; resultados reales de M2-M3.
- **Competencias:** C-N5-03, C-N5-04 (explicación a dos audiencias, culminación del hilo transversal sembrado desde M1.T4).
- **Errores habituales:** reportar solo la mejor corrida entre varios intentos sin mencionar la variabilidad real (mismo problema de honestidad que N4.M5 ya exige para proyectos de ML clásico, ahora con la variabilidad adicional de GPU no determinista); usar lenguaje que sugiere certeza donde solo hay una corrida de evidencia.
- **Práctica principal (laboratorio integrador, cierra el nivel):** informe comparativo de al menos 2 configuraciones entrenadas en M2 o M3, con hipótesis (T1), verificación de reproducibilidad (T2), resultado numérico real, e interpretación honesta de qué se puede y qué NO se puede concluir de esa evidencia — este informe es, directamente, el material base del proyecto de nivel.
- **Evaluación:** RM-03/RM-05 + defensa (explicación a audiencia técnica Y no técnica del mismo resultado).
- **Pregunta ingenieril:** si tu mejor configuración solo fue probada una vez y tu configuración base fue probada tres veces con resultados consistentes, ¿en cuál deberías confiar más para una decisión real, incluso si el número aislado de la primera es mejor?
- **La limitación humana que compensa M4:** la tendencia natural a creer el primer resultado favorable sin cuestionarlo — el método de este módulo (hipótesis explícita, variable aislada, verificación de reproducibilidad) es, literalmente, la disciplina que compensa ese sesgo.
- **Lo que deja de sorprender (M4, cierre del nivel):** que un paper o un modelo publicado "simplemente funcione" deja de leerse con fe ciega — el estudiante ahora sabe exactamente qué preguntas hacerle a cualquier resultado de deep learning (¿variable aislada? ¿reproducible? ¿cuántas corridas?) antes de creerlo.

## 6. Proyecto de nivel — Capstone ET3, completo (Paso 4)

`n5et3` en `index.html`, modalidad `"proyecto"` (mismo esquema técnico que N1/N2/N3: `S.ph[id]`, `renderProyectoDay`, desbloqueo secuencial). Por referencia a DOC-10 §7 (**red entrenada end-to-end reproducible y documentada + explicación a audiencia técnica y no técnica**), integrado en 5 hitos que recorren M1→M4 en orden:

1. **Propuesta** — arquitectura (MLP/CNN/RNN, M1-M3) + problema + hipótesis explícita (M4.T1) + variable aislada entre dos configuraciones a comparar, ANTES de entrenar.
2. **El mecanismo desde cero, verificado (M1)** — el estudiante confirma, con un cálculo relevante a SU proyecto (no el ejemplo genérico ya resuelto en M2.T2), que su motor de autograd propio y `torch.autograd` coinciden número por número — la prueba de que entiende lo que el framework hace antes de confiarle el entrenamiento real.
3. **Entrenamiento real en Colab (M2-M3) con reproducibilidad (M4.T2)** — ambas configuraciones, mínimo 3 corridas cada una, semillas documentadas en las fuentes relevantes.
4. **Informe honesto (M4.T3)** — `reporte_honesto`/`informe_comparativo` aplicados a las 6+ corridas reales, conclusión calificada por la evidencia real disponible, nunca solo la mejor corrida.
5. **Cierre y defensa a dos audiencias (C-N5-04)** — explicación técnica y no técnica del mismo proyecto, ambas honestas sobre limitaciones, más la narrativa de cómo M1-M4 se integraron.

**Adaptación deliberada frente a N3 (100% Pyodide):** a diferencia de N3, N5 SÍ incluye el campo `flujoDeGit` (notebook + README en un repositorio propio) — consistente con que N5 es el primer nivel de ET3 con módulos DOC-12 reales (M2 completo, mitad de M3), no una excepción de diseño. **Fuera de alcance declarado explícitamente:** no se espera superar el estado del arte ni reimplementar el motor de autograd completo para la arquitectura final del capstone — se espera un proyecto modesto pero honesto, con la cadena metodológica completa (M1→M2→M3→M4) sostenida y defendible.

## 7. Herencias Declaradas

### 7.1 Resolución de la herencia entrante (borrador de §2bis, contra el contenido REAL de M1-M4 construido)

El borrador de §2bis (basado en el alcance de DOC-10 §7 para N4, no confirmado contra el N4 real — N4 se construyó en paralelo) se confirma parcialmente resuelto: M1.T1 reinterpretó explícitamente la regresión logística de N4.M2 como "una neurona" (conexión declarada en la ficha de M1.T1), y M4 extendió la disciplina de splits/métricas/overfitting de N4.M4 con vocabulario propio de deep learning (variable aislada, ablation study, múltiples corridas). **Declarado explícitamente, igual que en §2bis: pendiente de confirmación formal cuando SYL-N4 congele con sus propias Herencias Declaradas finales** — este documento no bloqueó su avance esperando esa confirmación, conforme a la instrucción de `docs/guia-construccion-niveles.md` §13 paso 7.

### 7.2 Borrador de Herencias hacia SYL-N6 (H-N6-xx — a consolidar formalmente en el Paso 9 de este mismo documento, no ahora; N6 se construye en paralelo, no congelado)

| # | N5 siembra | N6 deberá recoger |
|---|---|---|
| H-N6-01 | M1.T3 completo: backpropagation y motor de autograd propio, dominado a fondo (no solo ejecutado) | N6.M1 (transformer desde cero) asume fluidez completa con backpropagation — no se reenseña, se aplica directamente a un grafo computacional mucho más grande |
| H-N6-02 | M3.T5 completo: self-attention de una cabeza (producto punto→softmax→escalado √d_k→suma ponderada), verificado con ejecución real | N6.M1 reutiliza este mecanismo LITERALMENTE como el núcleo del transformer, extendiéndolo con proyecciones Q/K/V aprendidas por separado (en vez de Q=K=V=entrada) y atención multi-cabeza — la generalización directa de lo ya dominado, no un mecanismo nuevo |
| H-N6-03 | M3.T5 retoFinal (verificado con ejecución real): la atención pura no distingue posición — dos apariciones idénticas de un vector en posiciones distintas dan salidas idénticas | N6.M1 introduce positional encoding como respuesta DIRECTA y ya motivada a esta limitación — el estudiante llega con la pregunta ya formulada por su propia evidencia, no con el concepto presentado sin motivación |
| H-N6-04 | M2 completo: fluidez real con PyTorch (tensores, autograd, nn.Module, optimizadores, GPU) en Google Colab | N6 asume esta fluidez sin reenseñar la API básica de PyTorch — todo laboratorio DOC-12 de N6 puede empezar directamente en la arquitectura específica del transformer, no en "cómo se usa PyTorch" |
| H-N6-05 | M4 completo: disciplina de rigor experimental (hipótesis, variable aislada, semillas en múltiples fuentes, reporte honesto con media/peor/mejor) | N6 asume que el estudiante reporta resultados de entrenar/evaluar un transformer con esta misma disciplina, sin necesidad de re-explicar por qué una sola corrida no basta |
| H-N6-06 | M3.T1-T4: CNN y RNN/LSTM entrenadas de verdad en datos reales (MNIST, generación de texto), con el contraste explícito de qué estructura del dato explota cada arquitectura | N6.M3 (familias de modelos) puede comparar el transformer contra CNN/RNN ya conocidas de primera mano por el estudiante, no como arquitecturas descritas solo en prosa |

**Prerrequisitos ocultos verificados (preliminar, a confirmar formalmente en el Paso 9 real):** N6.M2 (Tokenización y embeddings) y N6.M4 (Papers fundacionales) son contenido mayormente nuevo, con dependencia técnica de N5 limitada al vocabulario general (H-N6-01/04/05) — consistente con el grafo de DOC-10, sin huérfanos detectados desde N5.

## 8. Paso 8 · Revisión global del Capstone ET3 y las compuertas

### El capstone — verificación de síntesis (mismo criterio adversarial que N1/N2/N3 ya aplicaron)

**¿Podría un estudiante completar el capstone entregando las 4 piezas (M1/M2/M3/M4) por separado, sin integrarlas de verdad?** No, por diseño: el hito 2 exige verificar el motor de autograd propio (M1.T3) contra `torch.autograd` sobre un cálculo RELEVANTE AL PROYECTO ELEGIDO, no el ejemplo genérico ya resuelto en M2.T2 — obliga a re-aplicar la comparación, no a copiarla. El hito 4 exige que el informe honesto (M4.T3) se calcule sobre las corridas REALES del hito 3 (M2-M3), no datos de ejemplo. El hito 5 exige narrar explícitamente "qué pieza de cada módulo usaste, y por qué era necesaria" — la integración está en el propio diseño del capstone, no confiada a la buena fe del estudiante.

**Diferencia estructural real frente a N3 (declarada honestamente):** N3 es 100% DOC-11/Pyodide; su capstone no tiene `flujoDeGit`. N5 SÍ lo tiene, porque a diferencia de N3, el capstone de N5 se entrena de verdad en un entorno real (Colab) y necesita documentación reproducible por otra persona — mismo principio de honestidad estructural que ya exigió `docs/mision-n5.md` desde el diseño.

### Cobertura de competencias — verificación explícita

| Competencia | Verificada por |
|---|---|
| C-N5-01 (implementa redes neuronales y backpropagation desde cero, explicando cada paso del flujo de gradientes) | M1 completo (4 temas, 56 ejercicios) + ítems 1-2 del banco de examen + Capstone hito 2 |
| C-N5-02 (entrena arquitecturas —convolucionales, recurrentes— en PyTorch con hardware de consumo y nube gratuita, con resultados reproducibles y documentados) | M2 completo (4 laboratorios) + M3.T2/T4 (CNN/LSTM entrenadas de verdad) + ítems 3-4 del banco de examen + Capstone hito 3 |
| C-N5-03 (experimenta con rigor: hipótesis explícitas, variables aisladas, comparaciones reproducibles entre configuraciones) | M4 completo (3 temas) + ítems 5-6 del banco de examen + Capstone hitos 1 y 4 |
| C-N5-04 (explica el funcionamiento de una red neuronal a una audiencia no técnica y a una técnica, ajustando el registro) | Practicada progresivamente desde M1.T4 (defensa breve) hasta M4.T3 (resumen no técnico); ítems 7-8 del banco de examen + Capstone hito 5 |

**Hallazgo de la revisión:** las 4 competencias de N5 mapean 1:1 con los 4 módulos, igual que en N3 — cobertura completa, sin competencia huérfana. A diferencia de N3 (donde C-N3-04 se practicaba solo en M4), C-N3-04's análogo aquí (C-N5-04) se practica de forma DISTRIBUIDA desde M1.T4, no reservada al último módulo — decisión de diseño explícita de §3.principio 8, verificada aquí como efectivamente cumplida en el contenido real construido.

### Banco de examen — ítems rotables (≥3 variantes por ítem, NNR-02)

*Formato oral, con derivación en vivo cuando aplique — el examinador elige UNA variante por ítem al azar en cada aplicación.*

**Ítem 1 (C-N5-01 · gradiente de una neurona).** "Dada esta neurona (x1, x2, w1, w2, b), calcula z y el gradiente respecto a cada peso y el sesgo."
- Variante A: x=(2,3), w=(0.5,-1), b=1 → z=**-1.0**, ∂z/∂w1=**2.0**, ∂z/∂w2=**3.0**, ∂z/∂b=**1**.
- Variante B: x=(1,-2), w=(2,3), b=0.5 → z=**-3.5**, ∂z/∂w1=**1.0**, ∂z/∂w2=**-2.0**, ∂z/∂b=**1**.
- Variante C: x=(4,0), w=(-1,1), b=2 → z=**-2.0**, ∂z/∂w1=**4.0**, ∂z/∂w2=**0.0**, ∂z/∂b=**1**.

**Ítem 2 (C-N5-01 · regla de la cadena, backpropagation manual).** "Calcula la salida y el gradiente de (ax+b)² respecto a x, propagando la regla de la cadena paso a paso."
- Variante A: a=2, b=3, x=4 → salida=**121**, gradiente=**44**.
- Variante B: a=3, b=-1, x=2 → salida=**25**, gradiente=**30**.
- Variante C: a=-1, b=5, x=1 → salida=**16**, gradiente=**-8**.

**Ítem 3 (C-N5-02 · contar parámetros de una arquitectura).** "¿Cuántos parámetros entrenables tiene esta arquitectura MLP (lista de tamaños de capa)?"
- Variante A: [3, 4, 1] → **21**.
- Variante B: [2, 5, 5, 2] → **57**.
- Variante C: [10, 8, 3] → **115**.

**Ítem 4 (C-N5-02 · forward pass de un MLP con pesos dados).** "Calcula la salida de este MLP (capa oculta ReLU, capa de salida sigmoide) para la entrada dada."
- Variante A: x=[1,1], pesos_oc=[[1,1],[1,-1]], sesgos_oc=[0,0], pesos_sal=[[1,1]], sesgo_sal=[-1] → **[0.7311]**.
- Variante B: x=[2,0], pesos_oc=[[0.5,0.5],[-1,1]], sesgos_oc=[0,-0.5], pesos_sal=[[0.5,0.5]], sesgo_sal=[0] → **[0.6225]**.
- Variante C: x=[0,1], pesos_oc=[[1,0],[0,1]], sesgos_oc=[0.5,0.5], pesos_sal=[[1,-1]], sesgo_sal=[0] → **[0.2689]**.

**Ítem 5 (C-N5-03 · ¿es un experimento válido?).** "¿Estas dos configuraciones aíslan exactamente una variable? Si no, ¿cuáles cambiaron?"
- Variante A: {lr:0.1,opt:sgd,epocas:300} vs {lr:0.2,opt:sgd,epocas:300} → **Válido** (solo lr).
- Variante B: {lr:0.1,opt:sgd,arq:"2-4-1"} vs {lr:0.2,opt:adam,arq:"2-8-1"} → **NO válido** (arq, lr, opt cambiaron los 3).
- Variante C: {batch:32,lr:0.01} vs {batch:64,lr:0.01} → **Válido** (solo batch).

**Ítem 6 (C-N5-03 · media/varianza y decisión honesta).** "Con estas corridas de dos configuraciones, ¿cuál reportarías como mejor, y con qué confianza?"
- Variante A: A=[0.80,0.55,0.90], B=[0.75,0.74,0.76] → media A=**0.75**, media B=**0.75** (empate en media, pero var A=**0.021667** vs var B=**0.000067** — B es mucho más confiable pese a la misma media).
- Variante B: A=[0.60,0.62,0.59], B=[0.60,0.40,0.80] → media A=**0.6033**, media B=**0.6** (casi iguales, pero var A=**0.000156** vs var B=**0.026667** — A es mucho más confiable).
- Variante C: A=[0.91,0.89,0.90], B=[0.85,0.86,0.84] → media A=**0.90**, media B=**0.85**, varianzas casi iguales (**0.000067** ambas) — A es mejor de forma clara y confiable.

**Ítem 7 (C-N5-04 · pesos de atención, explicar el resultado).** "Calcula los pesos de atención de esta query contra estas keys, y explica en una frase qué significa el resultado."
- Variante A: q=(1,1), keys=[(1,1),(1,-1)] → pesos=**[0.8044, 0.1956]** (la query se parece mucho más a la primera key).
- Variante B: q=(0.5,0.5), keys=[(1,0),(0,1),(0.5,0.5)] → pesos=**[0.3333, 0.3333, 0.3333]** (las tres keys reciben atención exactamente igual — caso de simetría perfecta).
- Variante C: q=(2,0), keys=[(1,0),(-1,0)] → pesos=**[0.9442, 0.0558]** (la query apunta casi exactamente hacia la primera key, casi nada hacia la opuesta).

**Ítem 8 (C-N5-04 · explicar a dos audiencias).** "Traduce esta precisión técnica a una frase honesta para una audiencia no técnica."
- Variante A: 92% → **"El modelo acierta casi siempre"**.
- Variante B: 78% → **"El modelo acierta la mayoría de las veces, pero se equivoca con cierta frecuencia"**.
- Variante C: 45% → **"El modelo todavía comete errores frecuentes"**.

**Nota de diseño:** los 8 ítems cubren las 4 competencias con 2 ítems cada una, 3 variantes cada ítem (24 variantes totales) — todos los valores verificados por ejecución real de Python (`verify_n5_banco_examen.py`) antes de fijarse aquí, misma disciplina que rigió cada ejercicio de M1-M4. El examinador puede generar variantes adicionales cambiando los valores numéricos sin cambiar la estructura del ítem, siempre que re-verifique el resultado por ejecución real antes de usarlo.

---

*Paso 8 — pendiente de aprobación por el Director. Siguiente paso: `docs/informes/n5-auditoria-integral.md` (Paso 6), Herencias Declaradas finales y auditoría adversarial (Paso 9).*
