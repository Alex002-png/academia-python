# SYL-N6 — Syllabus del Nivel 6 · Transformers

## Control del documento (conforme a DOC-00 §15.4)

| Campo | Valor |
|---|---|
| **Document Key** | SYL-N6 · Tier T2 |
| **Versión / Estado** | **0.1.0-draft** · Paso 1 del flujo institucional de 9 pasos (docs/guia-construccion-niveles.md §13): diseño de syllabus completo (identidad, principios, estructura, fichas pedagógicas M1-M4, proyecto de nivel, borrador de Herencias) — **pendiente de construir el contenido real en `index.html`** antes de fijar cifras de días/ejercicios como definitivas (mismo principio de guia-construccion-niveles.md §8: nunca prometer una cifra antes de verificarla contra al menos un tema completo) |
| **Autoridad de origen** | DOC-10 §7 (interior de N6) · DOC-01 (C-N6-01…04) · docs/mision-n6.md |
| **Depende de** | DOC-10 §7 (alcance ya aprobado, no rediseñado aquí) · DOC-01 · DOC-11 (autoría Pyodide) · DOC-12 (autoría entorno real, para las partes de M2/capstone que salen del Campus) · docs/syllabus/syl-n3.md (plantilla estructural, con atención especial a M4 — ver §3 de este documento) · docs/mision-n5.md (predecesor inmediato — asume backprop desde cero y primer contacto con PyTorch/GPU en nube) |
| **Produce / desarrolla** | La estructura docente completa de N6: fichas pedagógicas por tema, proyecto de nivel (Mini-GPT + ensayo comparativo, capstone de ET3 completa), compuerta (pendiente del Paso 8), y las Herencias Declaradas hacia N7 (borrador, a consolidar en el Paso 9) |
| **Estándar de calidad** | El mismo de SYL-N1…SYL-N5: *"Si otro profesor excepcional impartiera este nivel utilizando únicamente el syllabus, ¿obtendría prácticamente la misma calidad formativa?"* |
| **Historial** | 0.1.0-draft (2026-07-21): Documento de Diseño. Verificación empírica previa y propia (no de terceros) de la viabilidad de un transformer de juguete en numpy puro corriendo en Pyodide real v0.26.4 (misma build fijada en `index.html`, misma metodología que ya usó N3 para `numpy.linalg.inv()`): forward pass con `seq_len≤32, d_model≤64, 2-4 capas` corre en 1-12ms; hasta `seq_len=128, d_model=128, vocab=1000` se mantiene en ~175ms; solo configuraciones con `d_model≥256` y `vocab≥5000` cruzan el segundo por forward pass. Este rango de diseño (§3, hallazgo técnico) determina el tamaño real de los ejercicios de M1 y del capstone. Investigación bibliográfica real por WebSearch de las 4 fuentes oficiales de DOC-10 §7 (Karpathy *Let's build GPT: from scratch, in code, spelled out*, ene-2023, ~1h56min, construye un transformer siguiendo *Attention Is All You Need* hasta el núcleo de nanoGPT sobre tiny-Shakespeare; Stanford CS224N, Lecture "Self-Attention and Transformers", con Assignment 4 dedicado a "Self-Attention, Transformers, and Pretraining"; HF NLP/LLM Course, capítulos 1-4 arquitectura+uso, capítulo 6 tokenizadores incluyendo construcción de un tokenizador propio "block by block"). Decisión de modalidad DOC-11/DOC-12 confirmada módulo por módulo (§3). |

---

## 1. Tabla resumen

| Módulo | Temas | Días/tema (heurística de partida, sin confirmar aún) | Competencias | Modalidad |
|---|---|---|---|---|
| M1 · Atención y arquitectura | 5 | 3-4 (práctica procedimental pesada — implementación) | C-N6-01 | DOC-11/Pyodide |
| M2 · Tokenización y embeddings | 4 | 2-3 (mixto: T1-T3 procedimental, T4 exploración) | C-N6-01 | Mixto (T1-T3 DOC-11, T4 DOC-12) |
| M3 · Familias de modelos | 4 | 2 (lectura/comparación, no práctica repetida) | C-N6-04 | DOC-11 (lectura) + defensa oral |
| M4 · Papers fundacionales | 4 | 2 (lectura dirigida, continúa el patrón de N3.M4) | C-N6-02, C-N6-03 | DOC-11 (lectura) + defensa de lectura |
| Capstone ET3 · Mini-GPT | — | — | Todas | Mixto: arquitectura en Pyodide, entrenamiento real en DOC-12 (Colab) |

*Cifras de días/ejercicios por tema son heurística de partida (guia-construccion-niveles.md §8) — se confirman o corrigen únicamente después de construir al menos un tema completo de cada módulo, nunca prometidas de antemano como cifra final.*

## 2. Identidad del nivel

Por referencia a DOC-10 §7 y a la Nota de posición de `docs/mision-n6.md`: **N6 · Transformers** es el **capstone de ET3** (N4-N6 completa) — no solo cierra un nivel más, cierra la etapa de "aprender la disciplina" de IA. El estudiante llega con tres piezas ya construidas y verificadas: la matemática (N3 — vectores, producto punto, gradiente, notación), el pipeline de datos y modelos clásicos (N4), y las redes neuronales desde cero más el primer contacto con un framework real en la nube (N5 — backpropagation gradiente a gradiente, PyTorch/autograd, CNN/RNN/LSTM y una introducción ya sembrada a "atención"). N6 no vuelve a enseñar ninguna de esas tres piezas — las usa como herramienta ya disponible para responder una pregunta nueva y específica: **¿cómo un mecanismo de atención, sin recurrencia ni convolución, puede procesar una secuencia completa en paralelo y aun así modelar qué palabra depende de cuál?**

Si N3 enseñó el lenguaje en el que el software razona sobre datos, N4 el oficio de construir modelos sobre datos reales, y N5 cómo una red aprende ajustando millones de parámetros mediante gradientes, **N6 enseña la arquitectura específica que hizo posible todo LLM que el estudiante usará o construirá desde N7 en adelante** — el momento en que "modelo de lenguaje" deja de ser una caja negra y se vuelve una pila de operaciones de álgebra lineal (multiplicación de matrices + softmax, ambas ya dominadas desde N3.M1.T6 y N3.M2) que el propio estudiante puede escribir, entrenar y explicar.

Entrada: N5 Superado (backpropagation desde cero, PyTorch/autograd, arquitecturas CNN/RNN/LSTM). Salida: examen + proyecto (Mini-GPT) + defensa, que incluye explícitamente **defensa de lectura** (sostener un paper ante repreguntas, ver M4) → habilita ET4 completa (N7-N10, LLM Engineering/AI Systems/Sistemas Distribuidos/IA Local), donde "transformer" deja de explicarse y empieza a asumirse como herramienta ya dominada.

## 3. Principios de ejecución

1. **Modalidad mixta, decidida por tema, no por módulo** *(a diferencia de N3, 100% Pyodide — decisión arquitectónica explícita, no un descuido, mismo criterio de frontera DOC-12 §5 que ya aplicó N5)*:
   - **M1 completo — DOC-11/Pyodide.** El self-attention en su forma pedagógica mínima es multiplicación de matrices + softmax (M2 de N3) — nada aquí exige salir del navegador. Verificado empíricamente, no asumido (ver hallazgo técnico abajo).
   - **M2.T1-T3 — DOC-11/Pyodide** (tokenizador BPE en Python puro, embeddings como matriz de lookup, verificados contra `numpy`); **M2.T4 — DOC-12** (explorar la geometría de embeddings *preentrenados* reales requiere descargar pesos de un modelo real, fuera del sandbox).
   - **M3 — DOC-11**, pero de **modalidad lectura/comparación**, no de práctica procedimental repetida: no genera código nuevo de la misma forma que M1/M2, vive como contenido de lectura dirigida + análisis fundamentado + defensa oral, con algún ejercicio corto de exploración (p.ej. contar/comparar órdenes de magnitud de parámetros) en Pyodide donde aporte.
   - **M4 — DOC-11**, lectura dirigida pura, extensión directa de N3.M4 (decodificar notación símbolo por símbolo, sin ejecución de código como actividad principal).
   - **Capstone — mixto, con frontera explícita** (ver §6): la arquitectura del Mini-GPT se escribe y verifica en Pyodide con un dataset de juguete (mismo rango de tamaño confirmado abajo); "entrenado" a cualquier escala con pérdida real decreciente y muestras de texto generado coherentes por encima del azar, sale a DOC-12 (Colab, GPU gratuita), igual que N5.M2.

2. **Hallazgo técnico real que condiciona el diseño de M1 y del capstone (verificado con ejecución directa en Pyodide v0.26.4 real, no en Python nativo como proxy, ni en documentación de terceros — mismo estándar de verificación que N3 aplicó a `numpy.linalg.inv()`):** un forward pass de un transformer de juguete en numpy puro, con máscara causal, múltiples cabezas y varias capas, corre sin fricción perceptible en Pyodide dentro de un rango amplio: `seq_len=8..32, d_model=16..64, 2-4 capas` → 1-12ms; `seq_len=64, d_model=128, 6 capas, vocab=1000` → ~85ms; `seq_len=128, d_model=128, 6 capas, vocab=1000` → ~175ms. Solo al subir a `d_model=256` con `vocab=5000` el forward pass cruza el segundo (~1.26s). **Regla de diseño derivada, aplicada desde el primer ejercicio de M1:** los ejercicios interactivos (con `check()` que se ejecuta en cada intento) usan configuraciones en el rango `seq_len≤32, d_model≤64` para feedback instantáneo; el laboratorio integrador/capstone puede permitirse una configuración más grande (`seq_len≤128, d_model≤128`) como demo de "vista completa", siempre que se ejecute una sola vez por clic, no en un bucle de reintentos. Metodología de la medición documentada en `docs/investigacion/n6-m1-verificacion-pyodide.md` (a crear, ver Primer paso concreto de la misión).

3. **Continuidad directa con N3.M1.T6 (producto punto y proyecciones):** self-attention, similitud coseno entre embeddings, y "cuánto apunta un vector en la dirección de otro" son, literalmente, la misma operación matemática aplicada tres veces en tres niveles distintos (N3 → N5 introducción → N6 mecanismo completo). M1.T1/T2 lo hacen explícito en vez de tratarlo como coincidencia — mismo principio de conexión entre niveles que H-N4-01…06 (SYL-N3 §7) ya institucionalizó.

4. **La atención no reemplaza el gradiente — lo extiende.** N5.M1 ya construyó backpropagation gradiente a gradiente para MLP. M1 de N6 no reintroduce la mecánica de backprop desde cero: la aplica a un grafo de cómputo nuevo (Q/K/V, softmax, atención ponderada) usando exactamente la misma regla de la cadena de N3.M2.T2/N5.M1. Donde el cálculo manual de gradiente deje de ser razonable a mano (softmax multivariante encadenado con varias capas), el nivel se apoya explícitamente en la intuición ya construida ("el gradiente fluye hacia atrás multiplicando factores locales") en vez de forzar una derivación completa que ninguna fuente de referencia (ni siquiera Karpathy en *Zero to Hero*) hace a mano más allá de un ejemplo mínimo — honestidad metodológica, mismo principio de DOC-11 §0bis.

5. **Verificación numérica como disciplina heredada** (H-N4-01…03 vía N4/N5): toda operación implementada a mano (softmax, atención, BPE) se contrasta con tolerancia explícita contra una implementación de referencia (`numpy` para las operaciones numéricas; comparación determinista para BPE, que no es numérico) antes de darse por correcta. **Alerta de punto flotante propia de este nivel, a verificar empíricamente antes de fijar cualquier `check()`:** softmax sobre logits con valores grandes puede producir overflow (`exp()` de un número grande) si no se resta el máximo antes de exponenciar (el truco de estabilidad numérica que M1.T2 debe enseñar explícitamente, no solo implementar en silencio) — mismo principio unificador que SYL-N3 §3 ya nombró ("las implementaciones numéricas reales tienen comportamientos específicos que no siempre coinciden con la fórmula pura, y hay que verificarlos").

6. **Triple justificación y Método DOC-03** — heredados sin cambio.

7. **Los 5 estándares narrativos, aplicados desde el diseño (no como reserva pendiente)**: SYL-N3 dejó abierta, y luego resolvió por instrucción del Director, la pregunta de dónde viven "el quiebre de intuición", "el supuesto que destruye", "la idea universal", "lo que deja de sorprender" y "la limitación humana que compensa" — la resolución fue **visibles en prosa** (quiebre de intuición en el título del tema donde ocurre; los otros cuatro en el `intro` del cierre de módulo), no como campo de datos nuevo. Este syllabus adopta esa resolución **desde el inicio**, no como reserva a corregir después.

8. **Nota de densidad (guia-construccion-niveles.md §8):** N6, como capstone de ET3, sostiene la instrucción explícita del Director de más sustancia real en N4-N12 — pero M3/M4 son módulos de lectura/síntesis, no de práctica procedimental repetida, así que su densidad correcta es más días de análisis genuino (papers más largos, comparaciones con más fuentes), no más ejercicios de código. M1/M2.T1-T3 sí son procedimentales y siguen la regla de 3-4 días/tema con ejercicios que escalan en dificultad dentro del mismo día. Ninguna cifra de esta tabla se declara final hasta construir y verificar al menos un tema completo por módulo.

## 4. Estructura y grafo local

Troncal: `M1 → M2 → M3 → M4 → Capstone`. M2 depende realmente de M1 (los embeddings y la tokenización alimentan la entrada del transformer que M1 ya construyó — sin M1, "por qué tokenizar así" carece de consumidor). M3 depende de M1+M2 (comparar familias de modelos exige ya entender el mecanismo interno y cómo entra el texto). M4 se construye al final, igual que M4 de N3 — mezcla vocabulario y símbolos de M1-M3 simultáneamente (notación de atención, de embeddings, de arquitecturas completas), así que no hay nada real que leer con comprensión hasta que los tres módulos anteriores existan. El capstone integra los cuatro.

**Nota de implementación (mismo texto institucional que rige todo SYL-Nx desde EVT-034):** el Campus presenta un recorrido lineal único, sin bifurcaciones de navegación — la secuencia real siempre es M1→M2→M3→M4→Capstone.

## 5. Fichas pedagógicas por tema

*Plantilla heredada de SYL-N3 §5 (10 campos + condicionales), con los 5 estándares narrativos resueltos según §3.7 de este documento: quiebre de intuición visible en el título del tema donde ocurre; idea universal / lo que deja de sorprender / limitación humana que compensa / el supuesto que destruye, en la prosa de `intro` del cierre de cada módulo.*

### M1 · Atención y arquitectura

> **La gran pregunta de este módulo: ¿cómo puede un modelo saber qué palabra depende de cuál sin leer la secuencia en orden?**

**N6.M1.T1 · El cuello de botella que la atención resuelve**
- **Objetivo:** explica por qué RNN/LSTM (ya construidas en N5.M3) procesan secuencias de forma inherentemente secuencial y con memoria que se degrada a distancia larga, y qué significa "procesar toda la secuencia en paralelo, mirando directamente cualquier posición".
- **Prerrequisitos:** N5.M1 (backprop), N5.M3 (RNN/LSTM, introducción a atención).
- **Competencias:** C-N6-01.
- **Errores habituales:** creer que "atención" es solo una optimización de velocidad sobre RNN, sin ver que también cambia qué puede aprenderse (dependencias arbitrariamente lejanas sin degradación); asumir que "paralelo" significa "sin orden" (T3 corrige esto directamente).
- **Modelo mental:** la RNN como **un mensajero que solo puede pasar una nota a la vez, de mano en mano** — la información de la palabra 1 tiene que sobrevivir 50 traspasos para llegar a la palabra 50; la atención como **una sala donde todos pueden mirarse directamente**, sin traspasos intermedios.
- **Por qué:** existe porque el "vanishing gradient" que N5.M2.T2 ya sembró (50 capas, cada derivada <1, el producto se desvanece) es exactamente el mismo problema que sufre una RNN al propagarse en el tiempo / ahora porque N5 ya construyó RNN/LSTM y puede sentir su límite real / habilita T2 (el mecanismo concreto que reemplaza esto).
- **Evidencia de dominio:** dado un par de oraciones con una dependencia lejana ("El animal no cruzó la calle porque **estaba** cansado" vs. "...porque **estaba** llena de tráfico" — mismo ejemplo de ambigüedad de referencia que el paper original usa), explica por qué resolver a qué se refiere "estaba" requiere mirar directamente una palabra lejana, no propagar información paso a paso.
- **Práctica principal:** medir empíricamente (script Python) cuántos "pasos de traspaso" necesita una RNN para conectar el primer y el último token de secuencias de longitud creciente, versus el número constante de pasos que necesita atención — verificado por ejecución real, no argumentado en abstracto.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** si "más contexto" (una secuencia más larga) siempre fuera gratis en cómputo, ¿por qué los primeros LLM de producción limitaban la ventana de contexto a unos pocos miles de tokens?

**N6.M1.T2 · Self-attention: Q, K, V y el producto punto escalado**
- **Objetivo:** implementa self-attention desde cero (proyecciones Q/K/V, `softmax(QKᵀ/√d)V`) y explica cada componente en términos del producto punto ya dominado desde N3.M1.T6.
- **Prerrequisitos:** T1; N3.M1.T6 (producto punto, proyecciones); N3.M2 (softmax como generalización — verificar contra la definición real; si N3 no lo cubrió explícitamente, se enseña aquí desde la definición).
- **Competencias:** C-N6-01.
- **Errores habituales:** olvidar el factor de escala `1/√d_k` y no entender que existe para evitar que el softmax sature con dimensiones grandes (gradientes casi nulos); confundir Q, K y V (todas provienen de la misma entrada vía matrices distintas, no son "tres cosas diferentes" conceptualmente separadas de entrada); no restar el máximo antes de exponenciar en softmax (overflow numérico — hallazgo técnico de §3.5).
- **Modelo mental:** Query como **"qué estoy buscando"**, Key como **"qué tengo para ofrecer"**, Value como **"lo que realmente comparto si me eligen"** — el producto punto Q·K mide cuánto "encajan" una pregunta y una oferta (exactamente la interpretación de similitud de N3.M1.T6), y el softmax convierte esos encajes en pesos que suman 1.
- **Por qué:** existe porque es, literalmente, el mecanismo detrás de "cada token mira a todos los demás y con qué peso" (mision-n6.md) / ahora porque T1 ya estableció la necesidad y N3.M1.T6 ya dio el producto punto como similitud / habilita T3-T5 directamente.
- **Evidencia de dominio:** dada una secuencia corta de 4 tokens con vectores Q/K/V dados, calcula a mano los pesos de atención para un token y explica en una frase a qué "atiende" más y por qué.
- **Práctica principal:** implementar `scaled_dot_product_attention(Q,K,V)` en numpy puro, verificado contra una referencia (los pesos de atención deben sumar 1 por fila, con tolerancia explícita) y contra `torch.nn.functional.scaled_dot_product_attention` si es razonable verificarlo en Python nativo con PyTorch instalado (ver nota de verificación en `docs/investigacion/n6-m1-verificacion-pyodide.md`).
- **Evaluación:** estándar (RM-03).
- **Pregunta ingenieril:** si duplicas la dimensión `d_model` sin ajustar el factor de escala `1/√d_k`, ¿qué le pasa a la distribución de los pesos de atención antes de llegar al softmax, y por qué eso es un problema de entrenamiento, no solo de precisión numérica?

**N6.M1.T3 · Multi-head attention**
- **Objetivo:** explica por qué una sola "cabeza" de atención limita qué tipo de relaciones puede aprender un modelo, e implementa atención multi-cabeza dividiendo Q/K/V en subespacios paralelos.
- **Prerrequisitos:** T2.
- **Competencias:** C-N6-01.
- **Errores habituales:** creer que más cabezas es estrictamente "más capacidad" sin límite (el costo computacional y la dimensión por cabeza importan); reshape incorrecto de `(seq_len, d_model)` a `(n_heads, seq_len, d_head)` (bug de implementación real y frecuente, digno de un error inducido en vivo).
- **Modelo mental:** cada cabeza como **un lector distinto de la misma página**, cada uno entrenado a fijarse en un patrón distinto (uno en concordancia sujeto-verbo, otro en referencia pronominal, otro en proximidad posicional) — el resultado final combina lo que todos vieron.
- **Por qué:** existe porque restringir toda la relación entre tokens a un solo patrón de similitud (una sola proyección Q/K/V) es demasiado poco expresivo para el lenguaje real / ahora porque T2 ya dio una cabeza funcionando / habilita T5 (el bloque completo).
- **Evidencia de dominio:** dado el mismo par de oraciones ambiguas de T1, explica cómo cabezas distintas podrían especializarse en resolver distintos tipos de relación dentro de la misma oración.
- **Práctica principal:** extender la implementación de T2 a `n_heads` cabezas paralelas con reshape/transpose correctos, verificado con una aserción de forma (shape) y de suma de pesos por fila.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** si `d_model=512` y usas 8 cabezas, ¿por qué `d_head` (la dimensión de cada cabeza) es 64 y no 512 — qué se gana y qué se pierde al dividir en vez de usar 8 cabezas completas de 512?

**N6.M1.T4 · Por qué la atención no sabe de orden — positional encoding**
- **Objetivo:** demuestra empíricamente que self-attention es invariante a permutación (mezclar el orden de los tokens de entrada no cambia el resultado por sí solo), y explica cómo el positional encoding (senoidal y/o aprendido) repara esto.
- **Prerrequisitos:** T2 o T3.
- **Competencias:** C-N6-01.
- **Errores habituales:** asumir que la atención "ve" la posición porque procesa una secuencia ordenada como entrada (no lo hace — sin encoding posicional, "el gato come pescado" y "pescado come el gato" producirían salidas de atención idénticas salvo por la propia permutación de las filas); confundir posición absoluta con posición relativa (relevante para conectar con RoPE en M3).
- **Modelo mental:** la atención sin posición como **una sala donde todos se miran, pero nadie sabe en qué silla está sentado nadie** — el encoding posicional es la etiqueta de silla que cada token lleva pegada a su vector antes de entrar a la sala.
- **Por qué:** existe porque el propio paper fundacional (M4.T1) lo señala explícitamente como una limitación que hay que resolver aparte, no una consecuencia gratuita del mecanismo / ahora porque T2-T3 ya dieron el mecanismo cuya invarianza hay que romper / habilita T5.
- **Evidencia de dominio:** permutando a mano el orden de una secuencia de entrada de 3-4 tokens con vectores simples, demuestra (por cálculo real, no argumento) que los pesos de atención por par de tokens no cambian, solo su posición en la matriz de salida.
- **Práctica principal:** implementar positional encoding senoidal (`sin`/`cos` a distintas frecuencias, la fórmula exacta del paper) y verificar empíricamente que sumarlo al embedding rompe la invarianza a permutación demostrada arriba.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** si un modelo se entrenó con secuencias de máximo 512 tokens usando positional encoding aprendido (una tabla de posiciones fija), ¿qué le pasa si en producción le das una secuencia de 600 tokens? ¿Cambia la respuesta si el encoding es senoidal en vez de aprendido?

**N6.M1.T5 · El bloque transformer completo — cierra M1**
- **Objetivo:** ensambla el bloque transformer completo (multi-head attention + residual + layer norm + feed-forward + residual + layer norm), lo apila en varias capas, y añade la máscara causal para el caso autorregresivo (tipo GPT).
- **Prerrequisitos:** T3, T4.
- **Competencias:** C-N6-01.
- **Errores habituales:** omitir las conexiones residuales y no notar que sin ellas una pila de muchas capas es difícil de entrenar (mismo problema de gradiente que N5.M2 ya nombró, ahora en un contexto nuevo); aplicar la máscara causal después del softmax en vez de antes (rompe la propiedad de que los pesos sumen 1 solo sobre las posiciones permitidas); layer norm sobre el eje equivocado.
- **Modelo mental:** el bloque transformer como **una unidad que primero pregunta "¿a quién debo mirar?" (atención) y luego piensa individualmente sobre lo que vio (feed-forward)**, con las conexiones residuales como **una autopista que deja pasar la información sin cambios si el bloque no tiene nada útil que añadir** — normalización en cada parada para que la escala de los números no se dispare capa tras capa.
- **Por qué:** existe porque este bloque, apilado N veces, ES el "transformer completo desde cero" que el nivel promete (mision-n6.md) / ahora porque T1-T4 dieron cada pieza por separado / habilita M2 (qué entra a este bloque) y el capstone directamente.
- **Evidencia de dominio:** dado un diagrama del bloque (descrito en texto) con una pieza deliberadamente movida de lugar (p.ej. layer norm después de la suma residual en vez de antes — la diferencia real entre "post-norm" del paper original y "pre-norm" que la mayoría de LLM modernos usan), identifica qué cambia en el comportamiento del gradiente.
- **Práctica principal (laboratorio integrador):** ensamblar el `TransformerBlock` completo apilando N capas sobre la implementación de T2-T4, con máscara causal, verificado con: (a) la salida tiene la forma esperada, (b) con máscara causal, la posición `i` nunca recibe peso de atención de posiciones `>i` (aserción directa sobre la matriz de pesos), (c) softmax numéricamente estable (sin overflow) en logits extremos.
- **Evaluación:** laboratorio + reto final (predicción, no implementación): dado un transformer de 2 capas ya entrenado con pesos fijos y una secuencia de entrada, predecir la forma exacta de cada tensor intermedio del forward pass antes de ejecutar.
- **Pregunta ingenieril:** si apilas 96 bloques transformer (el orden de magnitud real de un LLM grande) sin conexiones residuales, ¿qué le pasaría al entrenamiento, y por qué "más capas siempre es mejor" es una simplificación peligrosa sin ese detalle?
- **El quiebre de intuición de M1 (título de este tema, según §3.7):** el instante donde "atención" deja de sentirse como una metáfora vaga ("el modelo presta atención a partes importantes") y se vuelve una operación mecánica exacta y reproducible a mano: un producto punto, un softmax, una suma ponderada — nada más, y nada menos.

*(Cierre de M1 — prosa de `intro` según §3.7): idea universal: un transformer no "entiende" lenguaje de forma misteriosa — es una pila de dos operaciones que ya se dominan desde N3 (producto punto como similitud, softmax como distribución de pesos) aplicadas repetidamente con conexiones residuales que dejan pasar la información sin degradarse. Lo que deja de sorprender: que un modelo "recuerde" algo dicho 500 palabras atrás — no hay memoria secuencial que degradarse, cada token mira directamente a cualquier otro en un solo paso. La limitación humana que compensa: la imposibilidad humana de leer una oración de 2000 palabras y sostener en la cabeza, simultáneamente, la relación exacta entre cada palabra y cada otra — el mecanismo de atención hace exactamente eso, a escala, sin fatiga. El supuesto que destruye: "un modelo de lenguaje debe leer en orden, como una persona" — la atención demuestra que procesar en paralelo, sin orden inherente, es no solo posible sino más entrenable, siempre que la posición se inyecte aparte (T4).*

### M2 · Tokenización y embeddings

> **La gran pregunta de este módulo: ¿cómo se convierte texto crudo en los números que un transformer puede realmente multiplicar?**

**N6.M2.T1 · Por qué tokenizar — de caracteres a subpalabras**
- **Objetivo:** explica el problema de vocabulario que cualquier estrategia de tokenización debe resolver (vocabulario finito vs. lenguaje con vocabulario efectivamente infinito), y compara tokenización por carácter, por palabra y por subpalabra en sus costos y beneficios reales.
- **Prerrequisitos:** M1 completo.
- **Competencias:** C-N6-01.
- **Errores habituales:** creer que "tokenizar por palabra" es lo natural y suficiente (falla con palabras nunca vistas — out-of-vocabulary); creer que tokenizar por carácter resuelve todo sin costo (secuencias mucho más largas, más caro computacionalmente, información semántica más difícil de capturar por token).
- **Modelo mental:** la tokenización por subpalabras como **un punto medio negociado**: suficientemente grande para que palabras comunes sean un solo token (eficiencia), suficientemente pequeño para que una palabra nunca vista pueda reconstruirse a partir de piezas ya conocidas (ningún token verdaderamente "desconocido").
- **Por qué:** existe porque antes de M1 poder procesar nada, el texto tiene que volverse una secuencia finita y manejable de números / ahora porque M1 ya definió qué entra al transformer (una secuencia de vectores) / habilita T2 (el algoritmo real que resuelve esta negociación).
- **Evidencia de dominio:** dada una palabra inventada no-inglesa/no-española plausible, explica qué le pasaría bajo cada una de las tres estrategias (carácter, palabra, subpalabra).
- **Práctica principal:** contar empíricamente, sobre un corpus de juguete real, cuántos tokens únicos produce cada estrategia y qué fracción de palabras de un texto de prueba quedarían fuera de vocabulario bajo tokenización por palabra con un vocabulario fijo pequeño.
- **Evaluación:** estándar.
- **Pregunta ingenieril:** si un modelo entrenado mayormente en inglés tokeniza texto en español letra por letra en vez de por subpalabras completas, ¿qué le pasa al costo real de usar ese modelo (en tokens, y por tanto en dinero/latencia) frente a un hablante nativo de inglés?

**N6.M2.T2 · BPE (Byte-Pair Encoding) desde cero**
- **Objetivo:** implementa el algoritmo BPE completo (contar pares de símbolos adyacentes más frecuentes, fusionarlos iterativamente en un token nuevo) sobre un corpus de juguete, el mismo algoritmo que usan GPT-2 y modelos posteriores.
- **Prerrequisitos:** T1.
- **Competencias:** C-N6-01.
- **Errores habituales:** fusionar el par más frecuente incorrectamente cuando hay empates (hay que definir una regla determinista, no arbitraria); no manejar correctamente los límites de palabra (fusionar a través de un espacio, produciendo tokens que cruzan palabras de forma no intencionada).
- **Modelo mental:** BPE como **una negociación greedy**: en cada ronda, fusiona el par de símbolos que más veces aparece junto en el corpus, y repite — el vocabulario final es el registro de esas fusiones, en orden.
- **Por qué:** existe porque es, literalmente, el mecanismo que resuelve la negociación de T1 sin reglas lingüísticas escritas a mano, aprendido directamente de datos / ahora porque T1 ya planteó el problema / habilita T3 (qué le pasa a cada token una vez tokenizado).
- **Evidencia de dominio:** dado un corpus de juguete de 4-5 palabras repetidas con distinta frecuencia, ejecuta a mano las primeras 2-3 fusiones de BPE y predice cuál sería la siguiente.
- **Práctica principal:** implementar el algoritmo BPE completo en Python puro (sin librerías de tokenización), verificado contra una ejecución de referencia con un corpus y número de fusiones fijos — el vocabulario final y la tokenización de una frase de prueba deben coincidir exactamente.
- **Evaluación:** laboratorio (integra T1+T2): tokenizar un texto nuevo con el vocabulario BPE ya entrenado, verificando reconstrucción exacta (decodificar los tokens debe devolver el texto original, byte por byte).
- **Pregunta ingenieril:** si entrenas tu propio BPE sobre un corpus mayormente en código Python en vez de prosa en inglés, ¿qué fusiones esperarías que aparezcan primero, y por qué eso explica que los tokenizadores de LLM de propósito general no sean igual de eficientes tokenizando código?

**N6.M2.T3 · Embeddings: de índice a vector denso**
- **Objetivo:** explica la matriz de embeddings como una tabla de búsqueda (lookup) entrenable, y por qué embeddings entrenados capturan relaciones semánticas sin que nadie las programe explícitamente.
- **Prerrequisitos:** T2; N3.M1.T6 (producto punto y proyecciones, similitud coseno).
- **Competencias:** C-N6-01.
- **Errores habituales:** creer que el embedding de una palabra es fijo/universal (es específico del modelo y su entrenamiento, no una propiedad platónica de la palabra); confundir el tamaño del vocabulario con la dimensión del embedding (son ejes independientes de la matriz).
- **Modelo mental:** la matriz de embeddings como **un mapa entrenado donde la distancia y dirección entre puntos codifica relación semántica** — no porque alguien haya decidido las coordenadas, sino porque el entrenamiento las ajustó hasta que palabras que aparecen en contextos similares terminaron cerca.
- **Por qué:** existe porque un índice de token (un entero) no tiene estructura matemática útil (no tiene sentido "sumar" el índice 402 y el 891) mientras que un vector denso sí la tiene / ahora porque T2 ya produjo los índices de token / habilita T4 (explorar esa geometría en un modelo real).
- **Evidencia de dominio:** dado un pequeño conjunto de vectores de embedding de juguete (no entrenados en un modelo real, sino diseñados para el ejercicio), calcula similitud coseno entre pares y explica qué relación semántica sugeriría cada resultado.
- **Práctica principal:** implementar la capa de embedding como indexación de una matriz (`E[token_id]`), verificar que el gradiente respecto a esa matriz solo actualiza las filas de los tokens realmente usados en el batch (propiedad real y contraintuitiva de cómo se entrenan embeddings).
- **Evaluación:** estándar.
- **Pregunta ingenieril:** si tu vocabulario tiene 50,000 tokens y tu dimensión de embedding es 768, ¿cuántos parámetros solo en la matriz de embeddings de entrada tiene tu modelo, y por qué esa cifra explica que compartir la matriz de embeddings de entrada y de salida (weight tying) sea una optimización real y común?

**N6.M2.T4 · Embeddings preentrenados reales — geometría fuera del Campus (DOC-12) — cierra M2**
- **Objetivo:** carga embeddings preentrenados reales (o un tokenizador de producción real, p.ej. `tiktoken`) en un entorno externo (Colab), y explora su geometría real (vecinos más cercanos por similitud coseno, comparación de tokenización de la misma frase por distintos tokenizadores de modelos reales).
- **Prerrequisitos:** T3; N5 (primer contacto con Colab/entorno en la nube, ya asumido como Herencia entrante).
- **Competencias:** C-N6-01.
- **Modalidad:** DOC-12 completo — Entorno objetivo: Google Colab (gratuito, sin instalación local, consistente con N5.M2). Este tema sigue el molde de 13 secciones de `docs/12-estandar-laboratorios-entorno-real.md` en su versión completa al construirse (ver Primer paso concreto de M2 antes de escribir el contenido real: confirmar qué embeddings/tokenizador de producción son realmente descargables sin fricción ni credenciales en Colab).
- **Por qué (adelanto, se completa al construir el laboratorio real):** existe porque T1-T3 construyeron el mecanismo con datos de juguete; ver que el mismo mecanismo, entrenado a escala real, produce geometría semántica genuina (sinónimos cercanos, analogías aproximadas) es la evidencia empírica de que "aprender sin supervisión explícita de significado" realmente funciona — cierre natural de M2 antes de M3 (donde se comparan modelos completos, no solo sus embeddings).
- **Nota de diseño pendiente de verificación empírica antes de construir:** confirmar en Colab real si cargar `tiktoken` (tokenizador de OpenAI, sin pesos de modelo, ligero) es más viable sin fricción que descargar una matriz de embeddings preentrenada completa (GloVe, por ejemplo, cientos de MB) — la elección concreta se decide con la misma disciplina empírica de §3.2, no de memoria.

### M3 · Familias de modelos

> **La gran pregunta de este módulo: si todos usan el mismo bloque transformer (M1), ¿qué decisión arquitectónica hace que BERT, GPT y Llama sirvan para tareas tan distintas?**

*Modalidad: lectura dirigida + análisis comparativo fundamentado, con exploración corta en Pyodide donde aporte (ver §3). Densidad de 2 días/tema, igual que N3.M4 — es una habilidad de comparación/síntesis, no de práctica procedimental repetida.*

**N6.M3.T1 · Encoder-only: BERT y el pretraining bidireccional**
- **Objetivo:** explica por qué BERT usa solo el encoder del transformer (sin máscara causal, atención bidireccional completa) y cómo el objetivo de pretraining (masked language modeling: predecir tokens ocultos usando contexto de ambos lados) obliga a esa elección.
- **Prerrequisitos:** M1 completo, M2 completo.
- **Competencias:** C-N6-04.
- **Errores habituales:** creer que BERT "también genera texto" como GPT (no está diseñado ni entrenado para generación autorregresiva); confundir "bidireccional" con "más potente en general" en vez de "mejor ajustado a tareas de comprensión/clasificación".
- **Modelo mental:** BERT como **un lector que ve el texto completo con huecos, y su tarea es adivinar qué palabra falta usando pistas de antes y de después** — por eso es excelente para clasificación/comprensión, pero no fue entrenado para continuar una frase palabra por palabra hacia adelante.
- **Por qué:** existe porque muchas tareas reales (clasificar sentimiento, extraer una respuesta de un párrafo) se benefician de ver la oración completa antes de decidir, algo que un modelo puramente autorregresivo no puede hacer sin trampa (miraría el futuro) / ahora porque M1 ya dio el mecanismo de atención sin máscara / habilita T2 (el contraste directo con la alternativa decoder-only).
- **Evidencia de dominio:** dada una tarea real (clasificar si una reseña es positiva/negativa vs. continuar escribiendo una historia), decide y justifica cuál familia (encoder-only vs. decoder-only) es la elección natural, antes de ver la respuesta.
- **Evaluación:** estándar + defensa oral (M3 cierra con defensa comparativa, ver Capstone/Compuertas).
- **Pregunta ingenieril:** si BERT nunca ve el token "futuro" durante entrenamiento porque no lo necesita (no hay máscara causal), ¿por qué no puedes simplemente usar BERT para generar texto palabra por palabra sin reentrenarlo para esa tarea?

**N6.M3.T2 · Decoder-only: GPT y el pretraining autorregresivo — cierra el par fundacional**
- **Objetivo:** explica por qué GPT usa solo el decoder (con máscara causal) y cómo el objetivo de pretraining (predecir el siguiente token, dado todo lo anterior) es, por diseño, el mismo mecanismo de generación que se usa en producción.
- **Prerrequisitos:** T1.
- **Competencias:** C-N6-04.
- **Errores habituales:** creer que "autorregresivo" es una limitación menor en vez del diseño que hace posible generar texto de longitud arbitraria sin cambiar de arquitectura entre entrenamiento e inferencia.
- **Modelo mental:** GPT como **un escritor que solo puede ver lo que ya escribió, nunca lo que vendrá** — exactamente la restricción que la máscara causal de M1.T5 implementa, y exactamente lo que permite usarlo para generar, un token a la vez, indefinidamente.
- **Por qué:** existe porque la tarea de pretraining y la tarea de uso real (generar la siguiente palabra) son la MISMA tarea, sin adaptar — la razón real por la que el paradigma "decoder-only + escala" ganó terreno frente a arquitecturas más especializadas / ahora porque T1 ya estableció el contraste bidireccional / habilita T3 (cómo evolucionó esta familia).
- **Evidencia de dominio:** explica, en una frase, por qué "predecir el siguiente token" es un objetivo de entrenamiento que se auto-supervisa (no requiere etiquetas humanas) — conectando con por qué esto permitió escalar a cantidades masivas de texto sin anotación manual.
- **Evaluación:** estándar + defensa oral.
- **Pregunta ingenieril:** si "predecir el siguiente token" es un objetivo tan simple, ¿por qué modelos entrenados con ese único objetivo terminan siendo capaces de traducir, resumir y razonar sobre problemas que nunca vieron explícitamente etiquetados durante el entrenamiento?

**N6.M3.T3 · La familia decoder-only moderna: qué cambió de "Attention Is All You Need" a Llama/Qwen**
- **Objetivo:** identifica y explica, a nivel comparativo (sin necesidad de reimplementar cada uno), las modificaciones arquitectónicas reales que separan un transformer decoder de 2017 de un LLM decoder-only moderno: RMSNorm en vez de LayerNorm, RoPE (positional encoding rotatorio) en vez de senoidal absoluto, SwiGLU en vez de ReLU en el feed-forward, y variantes de atención más eficientes (grouped-query attention).
- **Prerrequisitos:** T2; M1.T4-T5 (positional encoding y bloque completo, para tener la línea base contra la que comparar).
- **Competencias:** C-N6-04.
- **Errores habituales:** tratar estas mejoras como "detalles de implementación sin importancia" (cada una resuelve un límite real y medible: estabilidad de entrenamiento, generalización a secuencias más largas que las vistas en entrenamiento, eficiencia de memoria en inferencia).
- **Modelo mental:** cada modificación como **una respuesta a un límite concreto ya encontrado en producción a gran escala** — RoPE resuelve que el encoding senoidal absoluto de M1.T4 generaliza mal a secuencias más largas que las de entrenamiento; grouped-query attention resuelve que guardar una Key/Value completa por cada cabeza es carísimo en memoria durante generación token a token.
- **Por qué:** existe porque el bloque de M1.T5 es el ancestro directo, no una simplificación de juguete — entender qué cambió y por qué es la diferencia entre "conozco un transformer de 2017" y "entiendo por qué los modelos que usaré desde N7 están construidos como están" / ahora porque M1 ya da la línea base exacta contra la que comparar / habilita T4 (la comparación fundamentada completa).
- **Evidencia de dominio:** dado el bloque transformer de M1.T5 y una tabla de las 3-4 modificaciones reales, empareja cada modificación con el límite específico que resuelve, sin mirar la respuesta primero.
- **Evaluación:** estándar + defensa oral.
- **Pregunta ingenieril:** si RoPE codifica posición relativa en vez de absoluta, ¿por qué eso ayuda a un modelo a generalizar a secuencias más largas de las que vio en entrenamiento, cuando el positional encoding senoidal absoluto de M1.T4 no lo hace tan bien?

**N6.M3.T4 · Comparación fundamentada de tamaños y familias — cierra M3**
- **Objetivo:** dado un caso de uso concreto, argumenta qué familia y qué orden de magnitud de tamaño de modelo conviene, con trade-offs reales (costo de cómputo/inferencia, latencia, capacidad, disponibilidad de fine-tuning).
- **Prerrequisitos:** T1-T3.
- **Competencias:** C-N6-04.
- **Errores habituales:** asumir que "modelo más grande" es siempre la respuesta correcta sin considerar costo/latencia/caso de uso real (clasificar sentimiento de reseñas cortas no necesita un LLM de cientos de miles de millones de parámetros).
- **Modelo mental:** elegir arquitectura y tamaño como **una decisión de ingeniería con presupuesto**, no una búsqueda del modelo "más inteligente" en abstracto — la misma disciplina de trade-offs que N4/N5 ya instalaron para elegir un modelo clásico o una arquitectura de red.
- **Por qué:** existe porque esta es exactamente la decisión que un ingeniero de IA real toma constantemente desde N7 en adelante / ahora porque T1-T3 dieron el vocabulario comparativo completo / habilita el capstone (justificar la arquitectura elegida para el Mini-GPT) y N7.
- **Evidencia de dominio:** para 3 casos de uso dados (clasificación de spam en tiempo real; generación de resúmenes largos; chatbot conversacional de propósito general), argumenta una elección razonada de familia/tamaño para cada uno.
- **Práctica principal (laboratorio integrador, exploración corta en Pyodide donde aporte):** comparar órdenes de magnitud reales (número de parámetros, capas, dimensión de embedding) de 3-4 modelos públicamente documentados de distinto tamaño, y relacionar esas cifras con el bloque transformer de M1 (cuántos bloques, qué `d_model`).
- **Evaluación:** laboratorio + defensa oral (cierre de M3, con repregunta socrática sobre la elección del capstone).
- **Pregunta ingenieril:** si dos modelos tienen el mismo número total de parámetros pero uno es "más ancho, menos profundo" y el otro "más profundo, menos ancho", ¿qué tipo de tarea esperarías que favorezca a cada uno, y por qué no hay una respuesta universal?

*(Cierre de M3 — prosa de `intro` según §3.7): idea universal: BERT, GPT y Llama no son arquitecturas fundamentalmente distintas — son el mismo bloque transformer de M1, con la máscara de atención, el objetivo de pretraining y un puñado de mejoras incrementales decidiendo para qué sirve cada uno. Lo que deja de sorprender: que "elegir un modelo" en la práctica profesional sea una decisión de ingeniería con trade-offs concretos, no una búsqueda de "el mejor" en abstracto. La limitación humana que compensa: la dificultad humana de comparar objetivamente docenas de arquitecturas por intuición — reducir la comparación a unos pocos ejes medibles (familia, tamaño, mejoras arquitectónicas) permite una decisión razonada en vez de una impresión. El supuesto que destruye: "un modelo más grande siempre es la respuesta correcta" — el propio T4 lo derrumba con casos de uso reales donde no lo es.*

### M4 · Papers fundacionales

> **La gran pregunta de este módulo: ¿puedes leer, símbolo por símbolo, el paper que hizo posible todo lo que construiste en M1-M3?**

*Modalidad: lectura dirigida, extensión directa de N3.M4 (mismo patrón: decodificar notación símbolo por símbolo, traducirla a código ya verificado). Densidad de 2 días/tema.*

**N6.M4.T1 · "Attention Is All You Need" (Vaswani et al., 2017) — la arquitectura completa, símbolo por símbolo**
- **Objetivo:** lee la sección de arquitectura del paper original y traduce cada fórmula y cada símbolo a la implementación ya construida y verificada en M1 — sin dejar ningún símbolo sin decodificar.
- **Prerrequisitos:** M1 completo; N3.M4 (disciplina de lectura de notación matemática de papers).
- **Competencias:** C-N6-02, C-N6-03.
- **Errores habituales:** leer el paper como si fuera prosa explicativa en vez de una especificación precisa donde cada símbolo tiene un significado exacto ya verificado en M1 (la notación `Attention(Q,K,V) = softmax(QKᵀ/√dₖ)V` es, literalmente, el código de M1.T2).
- **Modelo mental:** el paper como **un plano de construcción que el estudiante ya construyó de memoria** — leerlo ahora no es aprender algo nuevo, es reconocer, símbolo por símbolo, algo que las manos ya escribieron en M1.
- **Por qué:** existe porque es, literalmente, la fuente primaria de todo M1-M3 — leerlo con comprensión real (no solo reconocerlo) es la prueba final de que la arquitectura se entendió, no solo se copió / ahora porque M1-M3 dieron todo el vocabulario necesario / habilita T2-T4 (papers posteriores, con menos andamiaje).
- **Evidencia de dominio:** citar 3-4 fragmentos de notación del paper y, para cada uno, señalar la línea exacta de código de M1 que lo implementa.
- **Evaluación:** defensa de lectura (sostener el paper ante repreguntas — compuerta de nivel, ver mision-n6.md).
- **Pregunta ingenieril:** el paper afirma que la atención es "más paralelizable" que la recurrencia — ¿qué evidencia concreta dentro del propio paper (no de memoria del estudiante) sostiene esa afirmación, y qué limitación reconoce el propio paper sobre su método (contribución, método, supuestos, límites — C-N6-02)?

**N6.M4.T2 · BERT (Devlin et al., 2018) — el paper del pretraining bidireccional**
- **Objetivo:** lee las secciones clave del paper de BERT (objetivo de masked LM, next sentence prediction, arquitectura) y las conecta explícitamente con M3.T1.
- **Prerrequisitos:** T1; M3.T1.
- **Competencias:** C-N6-02, C-N6-03.
- **Por qué / evidencia / evaluación:** mismo patrón que T1, aplicado a un segundo paper — identificar contribución, método, supuestos y límites explícitos del propio paper (C-N6-02 exige esto literalmente), no un resumen genérico.
- **Pregunta ingenieril:** ¿qué limitación del objetivo de pretraining de BERT llevó, en trabajo posterior, a cuestionar la necesidad de "next sentence prediction" como parte del entrenamiento?

**N6.M4.T3 · GPT-2/GPT-3 (Radford et al. / Brown et al.) — el paper de la escala**
- **Objetivo:** lee las secciones clave de GPT-2/GPT-3 sobre escalado (más parámetros, más datos, few-shot learning sin fine-tuning) y las conecta con M3.T2-T4.
- **Prerrequisitos:** T2; M3.T2, M3.T4.
- **Competencias:** C-N6-02, C-N6-03, C-N6-04.
- **Pregunta ingenieril:** el paper de GPT-3 muestra curvas de desempeño que mejoran de forma consistente con la escala (parámetros/datos/cómputo) — ¿qué supuesto tendría que fallar para que esa tendencia dejara de sostenerse, y el propio paper (o su discusión de límites) lo reconoce?

**N6.M4.T4 · Un paper de arquitectura moderna (Llama o equivalente verificado) — cierra M4 y todo N6**
- **Objetivo:** lee un paper de arquitectura decoder-only moderna (candidato: Llama, a confirmar en la investigación pedagógica real antes de construir este tema — ver DOC-11 §0bis), identificando qué modificaciones de M3.T3 documenta y por qué las adoptó, y cierra el módulo con una defensa de lectura completa sobre los 4 papers del módulo.
- **Prerrequisitos:** T1-T3; M3.T3.
- **Competencias:** C-N6-02, C-N6-03, C-N6-04.
- **Evaluación:** defensa de lectura de cierre — el examinador puede repreguntar sobre cualquiera de los 4 papers de M4, no solo el último.
- **Pregunta ingenieril:** de los 4 papers leídos en M4, ¿cuál contribución te parece que envejeció peor frente a la práctica actual, y qué evidencia (dentro de los propios papers o de M3) sostiene tu juicio?

*(Cierre de M4 — prosa de `intro` según §3.7): idea universal: cuatro papers, publicados en años distintos, describen exactamente los mismos bloques que M1 ya construyó con las manos — leerlos con comprensión real es reconocer, no aprender de nuevo. Lo que deja de sorprender: que un párrafo de notación densa (Q, K, V, softmax, √dₖ) que antes de N3/N6 habría parecido ilegible sea, símbolo por símbolo, exactamente el código que el estudiante ya escribió y verificó. La limitación humana que compensa: ningún ingeniero puede reimplementar cada arquitectura desde cero cada vez que aparece un modelo nuevo — poder leer un paper y mapear sus fórmulas a bloques ya conocidos es lo que permite mantenerse al día sin reconstruir el campo entero cada vez. El supuesto que destruye: "los papers de IA son solo para investigadores" — un estudiante que completó M1-M3 puede leerlos con la misma disciplina que ya aplicó en N3.M4 a un clasificador binario simple.*

## 6. Proyecto de nivel — Capstone ET3 (cierra N6 Y la etapa completa)

Por diseño de DOC-10 §7 y la Nota de posición de `docs/mision-n6.md`: **Mini-GPT implementado desde cero y entrenado, más un ensayo comparativo de arquitecturas.** A diferencia de los capstones de nivel único (N3, N4, N5), este cierra **ET3 completa** — su diseño de síntesis debe, además de integrar M1-M4 de N6, dar evidencia de que las piezas de N4 (metodología de evaluación) y N5 (redes desde cero, PyTorch/GPU en nube) siguen activas, no solo las de N6.

**Frontera DOC-11/DOC-12 explícita (a decidir con precisión y documentar al construir el capstone, no ahora):** la arquitectura del Mini-GPT (bloque transformer, tokenizador BPE propio, embeddings) se escribe y se verifica en Pyodide, con un dataset de juguete en el rango ya confirmado empíricamente (§3.2) — esto demuestra que el estudiante entiende y puede construir cada pieza. "Entrenado" en el sentido de producir texto generado con pérdida decreciente y coherencia por encima del azar, a cualquier escala mínimamente interesante, sale a DOC-12 (Colab, GPU gratuita) — mismo patrón que N5.M2.

**Diseño de síntesis (a completar en el Paso 8, mismo criterio adversarial que N3/N4/N5):** el riesgo a evitar es que el capstone se convierta en cuatro entregas independientes (mi atención, mi tokenizador, mi comparación de arquitecturas, mi lectura de paper). La corrección de diseño: el Mini-GPT entrenado en Colab debe usar el MISMO tokenizador BPE construido en M2 (no uno importado de una librería) y el MISMO bloque transformer verificado en M1 (exportado/reescrito para el entorno de entrenamiento real, con equivalencia demostrada frente a la versión Pyodide) — y el ensayo comparativo (M3-M4) debe argumentar explícitamente por qué el Mini-GPT construido toma las decisiones arquitectónicas que toma, citando el paper correspondiente (M4).

**Defensa:** incluye explícitamente "defensa de lectura" (mision-n6.md) — sostener al menos uno de los papers de M4 ante repreguntas, más explicar el Mini-GPT a audiencia técnica y no técnica (mismo estándar de doble audiencia que ya exigió el capstone de N5).

*(El diseño completo de hitos, ficha, y checklist de evaluación se produce en el Paso 8 de este mismo syllabus, después de construir M1-M4 reales — mismo orden institucional que siguieron N3/N4/N5, nunca diseñado en abstracto antes de que el contenido real exista.)*

## 7. Herencias Declaradas (borrador — N4 y N5 se construyen en paralelo, no confirmadas)

### 7.1 Herencia entrante asumida (de docs/mision-n6.md, a confirmar cuando N4/N5 congelen)

| # | Heredado de | Cómo lo usa N6 |
|---|---|---|
| H-N6-entrante-01 | N4: disciplina de evaluación/metodología (splits, métricas, overfitting) | Capstone: evaluar el Mini-GPT con criterio honesto (pérdida en validación, no solo en entrenamiento), mismo principio de N4.M4 |
| H-N6-entrante-02 | N5.M1: redes desde cero, backpropagation gradiente a gradiente | M1 no reintroduce backprop — lo aplica a un grafo de cómputo nuevo (§3.4) |
| H-N6-entrante-03 | N5.M2: primer contacto con PyTorch/autograd/GPU en la nube | M2.T4 y el capstone asumen que el estudiante ya sabe moverse en Colab y usar un framework real, no lo enseñan desde cero |
| H-N6-entrante-04 | N5.M3: introducción a atención (ya sembrada) | M1 es la profundización completa de algo que N5 solo mencionó — no es la primera vez que el estudiante oye la palabra "atención" |

### 7.2 Borrador de Herencias hacia N7 (H-N7-xx — a consolidar formalmente en el Paso 9)

| # | N6 siembra | N7 deberá recoger |
|---|---|---|
| H-N7-01 | M1 completo: mecanismo de atención, positional encoding y bloque transformer completo, implementados y verificados a mano | N7 (LLM Engineering) usa "transformer" como herramienta ya entendida, no como concepto a explicar — puede enfocarse directamente en ingeniería alrededor del modelo (prompting, fine-tuning, serving) |
| H-N7-02 | M2 completo: tokenización BPE y embeddings, incluida su geometría real | N7 puede hablar de costo por token, límites de contexto, y búsqueda semántica (embeddings + similitud, base de RAG) sin reintroducir qué es un embedding |
| H-N7-03 | M3 completo: comparación fundamentada de familias y tamaños de modelo | N7 presupone que el estudiante puede argumentar qué modelo conviene a un caso dado — vocabulario de decisión ya instalado |
| H-N7-04 | M4 completo: disciplina de lectura de papers fundacionales de IA | N7 puede asignar papers más recientes (RAG, fine-tuning eficiente, agentes) esperando que el estudiante ya sepa decodificar notación técnica sin bloquearse |
| H-N7-05 | Capstone: Mini-GPT entrenado end-to-end, con frontera Pyodide/Colab ya negociada | N7 puede construir directamente sobre la experiencia de "salir del Campus a un entorno real con GPU" sin re-explicar el entorno |

**Nota metodológica (mismo principio que N5→N6):** N7 no existe todavía como documento propio al escribir este borrador — se declara "pendiente de confirmación cuando N7 empiece a construirse" y no bloquea el avance de este nivel.

---

*Con este Paso 1 completo (identidad, principios, estructura, fichas pedagógicas M1-M4, proyecto de nivel a alto nivel, borrador de Herencias), sigue: investigación pedagógica específica por tema (DOC-11 §0bis / DOC-12 §0bis, `docs/investigacion/n6-*.md`), construcción real de M1 en `index.html` con verificación numérica antes de cada `check()`, y el resto del flujo de 9 pasos de `docs/guia-construccion-niveles.md` §13.*
