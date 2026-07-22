# Investigación Pedagógica — N5.M3 · Arquitecturas (CNN/RNN/LSTM/atención)

*(DOC-11 §0bis / DOC-12 §0bis según modalidad de cada tema — documento acumulativo por tema del módulo, mismo patrón de `n5-m1-redes-desde-cero.md` y `n5-m2-pytorch.md`.)*

## 1. N5.M3.T1 · Convoluciones (mecanismo, numpy puro) — cómo enseñan este concepto exacto las fuentes de referencia

*(Actualizado tras la expansión de densidad de 3 días/13 items a 14 días/14 items, siguiendo el mismo estándar de investigación real aplicado a M1: subtemas nuevos con fuente primaria verificada por WebSearch antes de escribirse.)*

- **Karpathy, *Zero to Hero*** (verificado en Historial de SYL-N5): mismo principio de "mecanismo en Python puro antes de framework" ya aplicado en M1 — este tema es su análogo para CNN, escrito antes de M3.T2 (la versión PyTorch/Colab entrenada de verdad).
- **DL Specialization (Ng), Curso 4 "Convolutional Neural Networks"** (bibliografía oficial DOC-10 §7): introduce la convolución con el mismo ejemplo canónico —un kernel detector de bordes verticales/horizontales sobre una imagen sintética— que este tema usa, confirmando que no es una elección arbitraria de este documento sino el patrón pedagógico estándar de la especialización de referencia.
- **Hubel y Wiesel (1959, "Receptive Fields of Single Neurones in the Cat's Striate Cortex", *Journal of Physiology* 148:574-591; y 1962, 160:106-154, verificado por WebSearch):** el origen biológico real de la idea de kernel — células simples/complejas de la corteza visual del gato con campos receptivos LOCALES. Usado en el Día 68 para presentar un kernel explícitamente como "modelo computacional de una célula simple", no como una construcción matemática arbitraria.
- **Fukushima (1980, "Neocognitron", *Biological Cybernetics* 36:193-202, verificado por WebSearch):** primer modelo computacional jerárquico (S-cells/C-cells) inspirado directamente en Hubel-Wiesel — SIN backpropagation, con pesos auto-organizados. Usado en el Día 68 (origen histórico) y el Día 78 (pooling, antecedente directo en las C-cells de Fukushima).
- **LeCun et al. (1989, "Backpropagation Applied to Handwritten Zip Code Recognition", *Neural Computation* 1:541-551) y LeCun et al. (1998, "Gradient-Based Learning Applied to Document Recognition", *Proceedings of the IEEE* 86(11):2278-2324, ambos verificados por WebSearch):** la primera CNN entrenada de principio a fin con backpropagation (1989, códigos postales reales) y su refinamiento en LeNet-5 (1998) — cierra la línea histórica completa del Día 68: neurociencia → primer modelo computacional sin aprendizaje → primera CNN entrenable → arquitectura de referencia clásica.
- **Scherer, Müller y Behnke (2010, "Evaluation of Pooling Operations in Convolutional Architectures for Object Recognition", ICANN, verificado por WebSearch):** comparación empírica real de max pooling contra otras variantes, usada en el Día 78 para justificar por qué max pooling (y no promedio o suma) es la elección estándar — con evidencia, no por convención.

## 2. Errores de novato documentados para este concepto exacto

- Creer que una convolución "ve" toda la imagen — mitigado con el modelo mental de "ventana deslizante" y el Ejercicio 3 (implementación explícita con bucles anidados, no una función de caja negra).
- No entender la reducción de parámetros por compartir pesos — cuantificado con cifras reales verificadas (Día 72: 9 parámetros de un kernel 3×3 vs. 234 de una capa densa equivalente), no solo afirmado en prosa.
- Atribuir el origen de las CNN únicamente a LeCun, sin conocer el antecedente biológico (Hubel-Wiesel) ni el primer modelo computacional sin aprendizaje (Fukushima) — corregido de frente en el Día 68 con la línea histórica completa, mismo patrón de honestidad histórica ya aplicado en M1.T3 (Linnainmaa/Werbos vs. Rumelhart et al. 1986).
- Creer que pooling es "solo para achicar la imagen" sin conexión a ningún fundamento — el Día 78 lo conecta explícitamente a las C-cells de Fukushima (tolerancia a desplazamiento) y a evidencia empírica real (Scherer et al. 2010), no a una regla arbitraria.

## 3. Síntesis crítica

El tema resuelve una sola tensión: ¿por qué no basta con la capa densa de M1? La respuesta se demuestra ahora con cuatro piezas de evidencia, cada una más fuerte que la anterior — cifras de parámetros (Día 72), múltiples kernels como "varios detectores en paralelo" (Día 73), pooling como la tolerancia a desplazamiento de Fukushima con respaldo empírico (Día 78), e invariancia traslacional verificada con ejecución real (retoFinal, Día 81: el mismo patrón de respuesta `[3,3,-3,-3]` se desplaza exactamente con el borde de entrada, confirmado numéricamente, no solo descrito). La línea histórica del Día 68 conecta las cuatro piezas en una sola narrativa: de una neurona biológica local (Hubel-Wiesel) a una red entrenable con backprop (LeCun), pasando por el primer intento computacional sin aprendizaje (Fukushima).

## 4. Estrategia adoptada para este tema

Orden: fundamentos con línea histórica real (Día 68) → convolución 1D y 2D (Días 69-70) → un kernel con intención real (Día 71) → cuántos parámetros ahorra (Día 72) → múltiples kernels, padding, stride, cada uno con su propio día (Días 73-77) → max pooling con fundamento biológico y empírico (Día 78) → laboratorio integrador, el caso negativo (kernel equivocado), y desafío final de invariancia traslacional (Días 79-81). Cada valor de cada `check()` —incluyendo los nuevos (max pooling)— se generó ejecutando la implementación real en Python (`verify_n5m3t1_full.py`) antes de escribirse; harness de Node (`harness-n5-m3t1-full.js`) confirmó 14/14 aciertos, tras la expansión de 3 días/13 items a 14 días/14 items. **Falsable por:** el kernel detector de bordes usado (`[[-1,0,1],[-1,0,1],[-1,0,1]]`, una variante simplificada de Sobel) es una elección pedagógica de un kernel real y reconocible, no el único posible — una auditoría futura podría sugerir el Sobel completo (con pesos `[1,2,1]` en vez de `[1,1,1]`) si se buscara mayor fidelidad a la literatura, a costa de aritmética menos limpia para verificar a mano. La densidad de 14 días/14 items (más modesta que los 17-18 días de M1.T1-T2) refleja sustancia real disponible sin caer en relleno, mismo criterio aplicado en M1.T3-T4.

## 5. N5.M3.T2 · CNN entrenada de verdad — cómo enseñan este concepto exacto las fuentes de referencia

- **PyTorch docs, "Training a Classifier"** (WebSearch, Historial de SYL-N5): mismo patrón oficial (cargar dataset real con torchvision, CNN pequeña, `CrossEntropyLoss`, medir precisión) que este laboratorio instancia sobre MNIST en vez de CIFAR-10 — MNIST elegido deliberadamente por ser más rápido de entrenar en una sesión de laboratorio y ser, según **Yann LeCun et al.** (fuente primaria citada en Recursos), el dataset canónico de la disciplina para exactamente este propósito.
- **DL Specialization (Ng), Curso 4:** bibliografía oficial de DOC-10 §7 para arquitecturas CNN reales — citado como "🔵 Durante" porque profundiza en arquitecturas (LeNet, AlexNet, ResNet) que este laboratorio deliberadamente no cubre, manteniendo el alcance mínimo necesario para el ciclo completo.

## 6. Verificación empírica real — dataset real, no sintético

**A diferencia de M1-M2 (datos sintéticos o XOR), este laboratorio usa MNIST real** (70,000 imágenes descargadas y verificadas con `torchvision.datasets.MNIST`, `verify_n5m3t2_torch.py`). Cifras generadas con ejecución real, no estimadas: 26,698 parámetros totales; precisión antes de entrenar ~11% (consistente con azar sobre 10 clases); tras 3 épocas sobre un subconjunto de 2000 imágenes, precisión sube 11%→23%→59%→75% con pérdida bajando 2.25→1.81→0.98. **Deliberadamente NO se persigue una cifra alta** (una CNN de este tamaño con el dataset completo supera 98%) — el laboratorio usa un subconjunto pequeño a propósito para que la sesión sea rápida, y reporta la cifra real y modesta en vez de inflar el resultado, mismo principio de honestidad de M4 (rigor experimental) aplicado aquí antes de que M4 lo formalice.

## 7. Errores de novato documentados para este concepto exacto

- El error de dimensión al aplanar (`nn.Linear` con el tamaño incorrecto tras `Conv2d`+`MaxPool2d`) — verificado con ejecución real: mensaje literal `RuntimeError: mat1 and mat2 shapes cannot be multiplied (64x1568 and 6272x10)`, un error real y extremadamente común al conectar capas convolucionales con densas, documentado como error inducido en vivo (DOC-12 §2.5bis).
- Confundir `nn.MSELoss` (M2.T3, para regresión) con `nn.CrossEntropyLoss` (este laboratorio, para clasificación de múltiples clases) — checklist de diagnóstico explícita en §2.8.

## 8. Estrategia adoptada para este laboratorio

Cada cifra —parámetros, precisión antes/después, mensaje de error— se generó ejecutando PyTorch+torchvision reales con descarga real de MNIST (`verify_n5m3t2_torch.py`) antes de escribirse. **Falsable por:** los tiempos de entrenamiento no se citan como cifra exacta (a diferencia de M2.T4) porque dependen fuertemente de si el estudiante activó GPU (M2.T4) — el laboratorio lo declara explícitamente en el Diagnóstico en vez de prometer una duración fija.

## 9. N5.M3.T3 · RNN/LSTM (mecanismo, Python puro) — cómo enseñan este concepto exacto las fuentes de referencia

*(Actualizado tras la expansión de densidad de 3 días/13 items a 13 días/13 items: se corrigió un vacío real — el tema construía una celda LSTM completa sin citar jamás a sus autores.)*

- **Karpathy, *Zero to Hero* / makemore** (Historial de SYL-N5): mismo principio de mecanismo-antes-que-framework aplicado ya en M1 y M3.T1 — este tema construye la celda recurrente y LSTM a mano, antes de que M3.T4 las entrene con `nn.RNN`/`nn.LSTM` reales.
- **DL Specialization (Ng), Curso 5 "Sequence Models"** (bibliografía oficial DOC-10 §7): introduce la RNN con el mismo modelo mental de "estado que se pasa de un paso al siguiente" antes de la notación matemática completa — mismo orden pedagógico que este tema.
- **Elman (1990, "Finding Structure in Time", *Cognitive Science* 14(2):179-211, verificado por WebSearch):** origen real de la red recurrente simple (SRN/"red de Elman"), construyendo sobre Jordan (1986) — usado en el Día 71 para anclar la celda recurrente en su fuente histórica real, con el hallazgo notable de que Elman entrenó su red para descubrir estructura gramatical sin reglas programadas a mano.
- **Werbos (1988, "Generalization of Backpropagation with Application to a Recurrent Gas Market Model", *Neural Networks* 1(4):339-356, popularizado 1990, verificado por WebSearch):** origen de BPTT — "desenrollar" la RNN en el tiempo para aplicar backpropagation estándar. Usado en el Día 79 para anclar BPTT en su fuente real, en vez de presentarlo solo como "la regla de la cadena aplicada al tiempo" sin atribución.
- **Hochreiter y Schmidhuber (1997, "Long Short-Term Memory", *Neural Computation* 9(8):1735-1780, verificado por WebSearch):** LA cita que faltaba por completo en la versión original del tema — el laboratorio integrador ya construía una celda LSTM entera sin nombrar jamás a sus autores. Corregido en el Día 81, conectado explícitamente con la tesis de 1991 de Hochreiter (ya citada en M1.T1/T3) sobre el problema exacto que LSTM fue diseñado a resolver.

## 10. Bug real encontrado y corregido por el propio harness — evidencia directa de la disciplina de la guía §9

El Ejercicio 10 (Día 2) originalmente declaraba `0.264432 0.0009957` como salida esperada del gradiente BPTT sobre una secuencia de 10 pasos — un valor que **no se generó ejecutando el código real**, sino estimado por extrapolación mental de que "el gradiente se encoge mucho". El harness de Node, comparando contra la ejecución real de Python, encontró el valor verdadero: `0.264432 0.0030253693`. Corregido antes de comitear. **Esta es la evidencia más directa posible de por qué la guía de construcción (§9) prohíbe escribir cualquier valor de memoria** — ni siquiera un valor "razonable a ojo" para un fenómeno ya bien entendido cualitativamente (el gradiente se encoge) es aceptable sin ejecución real, porque la cuantificación EXACTA puede divergir sustancialmente de la intuición.

## 11. Errores de novato documentados para este concepto exacto

- Tratar cada paso de la secuencia como independiente, perdiendo el estado — mitigado forzando al estudiante a implementar `forward_rnn` explícitamente pasando `h` de un paso al siguiente (Ejercicio 2).
- Confundir BPTT con un algoritmo nuevo — el Ejercicio 9 lo desarma explícitamente como "multiplicar derivadas locales de tanh en cadena", mismo mecanismo de M1.T3 con otro nombre.

## 12. Síntesis crítica y cierre del tema

El tema completo demuestra, con tres piezas de evidencia numérica real (Ejercicio 3: decaimiento del recuerdo en una secuencia larga; Ejercicio 10: el gradiente BPTT se encoge con más pasos; retoFinal: el estado final de una secuencia de 21 pasos converge a 0.0, perdiendo TOTALMENTE el recuerdo del primer elemento) — la misma limitación estructural desde tres ángulos distintos, preparando el terreno para que T5 (atención) se sienta como una necesidad real, no una técnica arbitraria más.

## 13. Estrategia adoptada para este tema

Orden tras la expansión: celda recurrente con origen histórico real (Día 71) → desenrollar sobre una secuencia (Día 72) → observaciones empíricas del desvanecimiento y la sensibilidad al orden (Días 73-74) → parámetros compartidos en el tiempo (Día 75) → estado vectorial (Días 76-77) → BPTT con origen histórico real (Días 78-79) → cuantificación del desvanecimiento (Día 80) → LSTM con sus autores reales por fin citados (Día 81) → LSTM sobre una secuencia (Día 82) → desafío final (Día 83). Cada valor —incluyendo el que se corrigió tras el hallazgo del harness original— se generó (o regeneró) ejecutando Python real (`verify_n5m3t3_full.py`) antes de comitear; harness de Node (`harness-n5-m3t3-full.js`) confirmó 13/13 aciertos tras la expansión de 3 días/13 items a 13 días/13 items. **Falsable por:** el diseño de LSTM de este tema es deliberadamente simplificado (una sola compuerta de olvido/entrada/salida por unidad, pesos compartidos entre compuertas por simplicidad pedagógica) — no es la arquitectura LSTM completa de Hochreiter & Schmidhuber (1997), ahora correctamente citada como la fuente real de la que esta simplificación se deriva; esa versión completa se entrena con `nn.LSTM` real en M3.T4, donde la implementación exacta ya no depende de simplificaciones pedagógicas.

## 14. N5.M3.T4 · RNN/LSTM entrenada de verdad — cómo enseñan este concepto exacto las fuentes de referencia

- **Karpathy, "The Unreasonable Effectiveness of Recurrent Neural Networks"** (ensayo original citado en Recursos, verificado por WebSearch): la fuente primaria real que popularizó la generación de texto carácter por carácter — mismo autor que micrograd/makemore (M1), cerrando el círculo de referencias de Karpathy a través de todo N5.
- **PyTorch docs, "Classifying Names with a Character-Level RNN"** (WebSearch): el tutorial oficial más cercano a este patrón exacto (RNN a nivel de carácter), citado como referencia "Antes" aunque este laboratorio genera texto en vez de clasificar, por ser la fuente oficial más próxima al vocabulario y las estructuras de datos usadas aquí.

## 15. Verificación empírica real — entrenamiento completo, no simulado

Vocabulario de 10 caracteres (8 palabras de ejemplo + marcador de inicio/fin), 40 pares (contexto, siguiente carácter), modelo `nn.Embedding+nn.LSTM+nn.Linear` con 1914 parámetros — todo generado con `verify_n5m3t4_torch.py`, ejecución real. Entrenamiento real de 200 épocas: pérdida 2.2876 → 0.2493. Generación real tras entrenar: el modelo reproduce `gato` (una palabra YA vista en entrenamiento) — resultado honesto, no idealizado: con 8 ejemplos, el laboratorio documenta explícitamente que es MÁS PROBABLE que el modelo memorice que generalice, y lo convierte en el eje pedagógico del Desafío (agregar datos nuevos y verificar honestamente si aparece algo no memorizado) en vez de ocultar la limitación.

## 16. Estrategia adoptada para este laboratorio, y cierre de la porción "entrenada de verdad" de M3

Cada cifra —vocabulario, pares de entrenamiento, parámetros, historial de pérdida, palabra generada, y el mensaje literal de `KeyError` para un carácter fuera de vocabulario— se generó ejecutando PyTorch real (`verify_n5m3t4_torch.py`). Con M3.T2 y M3.T4 completos, **la porción DOC-12 de M3 queda cerrada** — quedan T3 (ya completo, DOC-11) y T5 (atención, DOC-11, cierra el módulo completo). **Falsable por:** el dataset de 8 palabras es deliberadamente mínimo por restricciones de tiempo de laboratorio — cualquier conclusión sobre "memoriza vs. generaliza" en este tamaño exacto de dataset no se extrapola automáticamente a datasets reales de millones de ejemplos; el laboratorio lo declara explícitamente en checkpoints/comprensión, no lo deja implícito.

## 17. N5.M3.T5 · Introducción a la atención (cierra M3) — cómo enseñan este concepto exacto las fuentes de referencia

- **Karpathy, *GPT from scratch*** (referenciado como bibliografía oficial de N6, DOC-10 §7, y ya anticipado en el diseño de este tema): introduce self-attention exactamente en el orden de este tema — producto punto → softmax → suma ponderada de values — antes de cualquier notación matricial compacta.
- **DL Specialization (Ng), Curso 5, módulo de atención**, y **CS224N (Stanford)** (bibliografía oficial de N6): ambas fuentes usan el mismo patrón pedagógico de "cada palabra pregunta a las demás cuánto se parecen" antes de la fórmula `softmax(QKᵀ/√d_k)V` — este tema instancia ese mismo orden un nivel antes de que N6 lo formalice con la notación completa.

## 18. Bug real encontrado y corregido por el propio harness — segunda instancia en M3

El Ejercicio 9 (Día 2) declaraba una salida de self-attention sobre 3 vectores ("gato", "come", "pizza") que **no se generó ejecutando el código real** — un segundo caso, tras el de T3, de un valor escrito por extrapolación en vez de ejecución. El harness de Node lo detectó comparando contra Python real; corregido antes de comitear (`[[0.6016, 0.522, 0.3985], [0.2618, 0.2017, 0.7383], [0.2807, 0.2194, 0.7194]]`, verificado independientemente dos veces). **Patrón institucional que emerge de M3:** los ejercicios cuyo código YA está completo en el starter (marcados "este código ya está completo — ejecútalo") son precisamente los de MAYOR riesgo de valor no verificado, porque no pasan por el ciclo de "escribir la solución de referencia y ejecutarla antes de escribir el check()" con la misma fricción que un ejercicio con blanco — vale la pena una verificación extra deliberada para esa categoría en niveles futuros.

## 19. Síntesis crítica y cierre de M3

Los tres mecanismos del módulo (CNN, RNN/LSTM, atención) resuelven la MISMA pregunta —"¿qué parte del dato es relevante para esta neurona ahora?"— explotando tres estructuras distintas: localidad espacial (T1-T2), orden secuencial (T3-T4), relevancia global sin restricción de posición (T5). El retoFinal de T5 (dos apariciones idénticas de un vector en posiciones distintas producen salidas IDÉNTICAS, verificado) demuestra la limitación real y precisa que motiva el positional encoding de N6 — no una afirmación en prosa, sino el mismo tipo de evidencia numérica que T3 ya usó para motivar la atención misma.

## 20. Estrategia adoptada para M3 completo

Cada valor de M3 (5 temas: T1 CNN-mecanismo, T2 CNN-Colab, T3 RNN/LSTM-mecanismo, T4 RNN/LSTM-Colab, T5 atención) se generó ejecutando código real (Python puro para T1/T3/T5, PyTorch+CUDA+torchvision reales para T2/T4) antes de escribirse en cualquier `check()` o paso de laboratorio; 2 bugs reales de valores no verificados (T3.Ejercicio 10, T5.Ejercicio 9) fueron encontrados y corregidos por los harnesses correspondientes antes de comitear — ambos en ejercicios de código "ya completo", el patrón de riesgo identificado en §18. **Con esto, M3 · Arquitecturas queda completo: 5 temas (122 ids `n5` totales, 0 duplicados), mixto DOC-11 (T1, T3, T5) / DOC-12 (T2, T4), exactamente conforme a lo decidido en `syl-n5.md` §3.**
