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
