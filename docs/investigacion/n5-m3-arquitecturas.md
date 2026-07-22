# Investigación Pedagógica — N5.M3 · Arquitecturas (CNN/RNN/LSTM/atención)

*(DOC-11 §0bis / DOC-12 §0bis según modalidad de cada tema — documento acumulativo por tema del módulo, mismo patrón de `n5-m1-redes-desde-cero.md` y `n5-m2-pytorch.md`.)*

## 1. N5.M3.T1 · Convoluciones (mecanismo, numpy puro) — cómo enseñan este concepto exacto las fuentes de referencia

- **Karpathy, *Zero to Hero*** (verificado en Historial de SYL-N5): mismo principio de "mecanismo en Python puro antes de framework" ya aplicado en M1 — este tema es su análogo para CNN, escrito antes de M3.T2 (la versión PyTorch/Colab entrenada de verdad).
- **DL Specialization (Ng), Curso 4 "Convolutional Neural Networks"** (bibliografía oficial DOC-10 §7): introduce la convolución con el mismo ejemplo canónico —un kernel detector de bordes verticales/horizontales sobre una imagen sintética— que este tema usa, confirmando que no es una elección arbitraria de este documento sino el patrón pedagógico estándar de la especialización de referencia.

## 2. Errores de novato documentados para este concepto exacto

- Creer que una convolución "ve" toda la imagen — mitigado con el modelo mental de "ventana deslizante" y el Ejercicio 3 (implementación explícita con bucles anidados, no una función de caja negra).
- No entender la reducción de parámetros por compartir pesos — cuantificado con cifras reales verificadas (Ejercicio 5: 9 parámetros de un kernel 3×3 vs. 234 de una capa densa equivalente), no solo afirmado en prosa.

## 3. Síntesis crítica

El tema resuelve una sola tensión: ¿por qué no basta con la capa densa de M1? La respuesta se demuestra tres veces, cada una con más fuerza — cifras de parámetros (Día 1), múltiples kernels como "varios detectores en paralelo" (Día 2), e invariancia traslacional verificada con ejecución real (retoFinal: el mismo patrón de respuesta `[3,3,-3,-3]` se desplaza exactamente con el borde de entrada, confirmado numéricamente, no solo descrito).

## 4. Estrategia adoptada para este tema

Cada valor de cada `check()` —incluyendo la imagen sintética del laboratorio y el desplazamiento del desafío final— se generó ejecutando la implementación real en Python (`verify_n5m3t1_full.py`) antes de escribirse; harness de Node: 13/13 pass. **Falsable por:** el kernel detector de bordes usado (`[[-1,0,1],[-1,0,1],[-1,0,1]]`, una variante simplificada de Sobel) es una elección pedagógica de un kernel real y reconocible, no el único posible — una auditoría futura podría sugerir el Sobel completo (con pesos `[1,2,1]` en vez de `[1,1,1]`) si se buscara mayor fidelidad a la literatura, a costa de aritmética menos limpia para verificar a mano.

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
