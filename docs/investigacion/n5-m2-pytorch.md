# Investigación Pedagógica — N5.M2 · PyTorch (laboratorios DOC-12, entorno Google Colab)

*(DOC-12 §0bis, aplicada antes de redactar cada laboratorio — documento acumulativo por tema del módulo, mismo patrón que `n5-m1-redes-desde-cero.md`.)*

## 0. Decisión de entorno, ya verificada en el diseño del syllabus

Confirmado en el Historial de `syl-n5.md`: PyTorch/TensorFlow no están en el catálogo de Pyodide v0.26.4 (inspección directa de `pyodide-lock.json`); Google Colab verificado como entorno gratuito con GPU (WebSearch: cuenta Gmail, sin tarjeta, T4 gratuita ~15-30h/semana, sesiones de 12h). Este módulo instancia esa decisión en los 4 laboratorios reales.

**Ventaja de verificación no anticipada:** PyTorch está instalado localmente en el entorno de construcción (`torch 2.12.0.dev...+cu128`, con CUDA disponible) — esto permitió verificar CADA comportamiento citado en los laboratorios (mensajes de error reales, resultados de operaciones, comportamiento de autograd) ejecutando el código real antes de escribirlo, exactamente con la misma disciplina de la guía §9 que rige los `check()` de Pyodide, ahora aplicada a un entorno DOC-12. La versión local es una build de desarrollo más reciente que la que probablemente tenga Colab (típicamente una versión estable) — los laboratorios no citan un número de versión exacto como requisito, solo piden verificar `torch.__version__` responde, precisamente para no atarse a una cifra que puede no coincidir.

## 1. N5.M2.T1 · Tensores — cómo enseñan este concepto exacto las fuentes de referencia

- **PyTorch docs, "Learn the Basics" / "60 Minute Blitz"** (verificado por WebSearch en Historial de SYL-N5): confirma el orden oficial tensores→autograd — este laboratorio y el siguiente replican ese orden exacto, no una reorganización propia.
- **Missing Semester (MIT)** y **Google Colab Quickstart oficial**: mismo patrón "concepto antes de comando" que ya rigió N1.M4-M5 (los primeros laboratorios DOC-12 de la Academia) — el Contexto de este laboratorio explica qué gana un tensor frente a numpy ANTES del primer comando, siguiendo DOC-12 §2.2/§0.1.

## 2. Errores de novato documentados para este concepto exacto

- Confundir "no imprime nada" (típico de `torch.zeros`/creación silenciosa) con un error — mitigado mostrando explícitamente la salida esperada de cada paso (DOC-12 §2.5, seis elementos por paso).
- El error de forma incompatible: verificado con ejecución real (`RuntimeError: The size of tensor a (3) must match the size of tensor b (2) at non-singleton dimension 0`) — mensaje real de PyTorch, no aproximado, cumpliendo DOC-12 §2.8 ("cada error documentado debe ser reproducible deliberadamente por el autor antes de escribirlo").
- Sesiones de Colab que se desconectan por inactividad (comportamiento documentado del servicio gratuito, no error del estudiante) — categoría de error específica de este entorno que DOC-11/Pyodide nunca tuvo que cubrir, añadida a la checklist de categorías de DOC-12 §2.8 ("interferencia de software externo" / infraestructura del proveedor).

## 3. Síntesis crítica

El laboratorio resuelve una sola tensión: el estudiante ya sabe TODO el álgebra que necesita (N3) y ya construyó un motor de autograd propio (M1.T3) — lo único genuinamente nuevo aquí es la sintaxis y el entorno (notebooks, Colab), no los conceptos. Por eso el Contexto y cada paso comparan explícitamente contra numpy/M1 en vez de presentar los tensores como un objeto aislado.

## 4. Estrategia adoptada para este laboratorio

Cada valor de cada paso —incluido el mensaje de error literal— se generó ejecutando PyTorch real (`verify_n5m2t1_torch.py`) antes de escribirse. Las 13 secciones de DOC-12 están completas (ficha con entorno/duración desglosada/fluencia/fuera de alcance, objetivo, contexto, requisitos, explicación conceptual, pasos con sus 6 elementos, error inducido en vivo, comprensión, checkpoints, diagnóstico con 5 columnas, mini laboratorio no resoluble por copia literal, desafío inédito, buenas prácticas, recursos clasificados, evaluación con cierre+repetición+metacognición). **Falsable por:** si Colab cambia su interfaz de forma sustancial o dejara de ofrecer cuota gratuita de GPU, la Sección 0 de este documento (y §3.principio 3 de `syl-n5.md`) necesitarían revisión — registro vivo, no un hecho permanente.

## 5. N5.M2.T2 · Autograd — cómo enseñan este concepto exacto las fuentes de referencia

- **PyTorch docs, "A Gentle Introduction to torch.autograd"** (WebSearch, Historial de SYL-N5): confirma el modelo de DAG (grafo acíclico dirigido) de objetos `Function`, con `requires_grad`/`.backward()`/`.grad` — el mismo vocabulario que usa este laboratorio, sin traducir ni simplificar los nombres reales de la API.
- **Karpathy, micrograd** (referencia directa de M1.T3): el propio Karpathy, en su video de *Zero to Hero*, demuestra al final que su motor "de juguete" da resultados idénticos a PyTorch sobre el mismo cálculo — este laboratorio reproduce exactamente esa demostración con el motor propio de N5 en vez del de Karpathy, mismo principio pedagógico.

## 6. Errores de novato documentados para este concepto exacto

- Olvidar `requires_grad=True` y no entender por qué `.grad` es `None` (no 0.0) — verificado con ejecución real: `torch.tensor(4.0)` sin `requires_grad` efectivamente deja `.grad=None` tras `backward()`.
- Llamar `.backward()` dos veces sobre el mismo grafo — error real y reproducible, mensaje verbatim capturado por ejecución real: *"Trying to backward through the graph a second time..."*. Se usa como error inducido en vivo (DOC-12 §2.5bis) en vez de solo documentarlo.
- El mismo bug de gradientes no reseteados de M1.T4, ahora con la API real de PyTorch (`.grad.zero_()`) — verificado que el patrón de acumulación es idéntico (segundo valor = primero × 2: `-8.0` → `-16.0` sin reset, verificado con ejecución real).

## 7. Síntesis crítica

Este laboratorio no enseña autograd como concepto nuevo — lo usa para VALIDAR, con evidencia numérica idéntica hasta el decimal, que M1.T3 no fue una simplificación pedagógica sino el mecanismo real. El error inducido en vivo (backward duplicado) es deliberadamente uno que el motor propio de M1.T3 NO comete de la misma forma (Valor no libera su grafo), usado para mostrar una diferencia real de ingeniería entre un motor de juguete y uno de producción — gestión de memoria — sin que eso reste validez al mecanismo que el estudiante ya construyó.

## 8. Estrategia adoptada para este laboratorio

Cada resultado —incluyendo los mensajes de error literales de PyTorch— se generó ejecutando `torch` real (`verify_n5m2t2_torch.py`) antes de escribirse; los valores de la neurona (Paso 1) y de `(2x+3)²` (Paso 2) se compararon dígito por dígito contra la salida ya verificada y comiteada de M1.T3, confirmando coincidencia exacta. **Falsable por:** el mensaje de RuntimeError capturado es de una build de desarrollo de PyTorch (más reciente que la probable versión estable de Colab); el texto exacto podría diferir en detalles menores entre versiones — el laboratorio no pide al estudiante que memorice el mensaje literal, solo que lo lea y lo diagnostique, mitigando ese riesgo.

## 9. N5.M2.T3 · nn.Module y optimizador — cómo enseñan este concepto exacto las fuentes de referencia

- **PyTorch docs, "Build the Neural Network" / "Optimization Loop"** (WebSearch, Historial de SYL-N5): confirma el patrón oficial `nn.Module` + `forward()` + `optimizer.zero_grad()/backward()/step()` — este laboratorio lo instancia sobre el MISMO problema (XOR) que M1.T4, en vez de un ejemplo genérico, para que la comparación sea directa.
- **DL Specialization (Ng), Curso 2** (bibliografía oficial DOC-10 §7): dedica contenido completo a la elección de optimizador (SGD vs. Adam vs. otros) — citado como recurso "🟣 Después" porque el desafío de este laboratorio (comparar SGD vs. Adam) es, literalmente, la pregunta que ese curso responde con profundidad que este laboratorio no intenta replicar.

## 10. Riesgo técnico verificado antes de escribir

**Reproducibilidad de semillas entre versiones de PyTorch — verificado, no asumido:** los valores exactos de este laboratorio (pérdida inicial 0.4819, historial de convergencia, predicciones finales) se generaron con `torch.manual_seed(42)` en la build local (dev, cu128). PyTorch NO garantiza reproducibilidad bit-exacta entre versiones distintas para inicialización de pesos — por eso el laboratorio, a diferencia de los `check()` exactos de Pyodide, describe los resultados como "algo parecido a" en vez de exigir coincidencia literal, y el criterio de éxito real (checkpoints, diagnóstico) se apoya en el PATRÓN (converge vs. no converge), no en el número exacto. Esta es una diferencia deliberada de DOC-12 frente a DOC-11: un laboratorio de entorno real no puede prometer el mismo determinismo que un sandbox Pyodide compartido por todos los estudiantes.

## 11. Estrategia adoptada para este laboratorio

Cada valor —incluyendo el conteo de parámetros, la pérdida inicial, el historial de 500 épocas con y sin `zero_grad`, y las predicciones finales— se generó ejecutando PyTorch real (`verify_n5m2t3_torch.py`) antes de escribirse. **Falsable por:** si una futura verificación en Colab real (no solo local) encuentra que el patrón de convergencia diverge sustancialmente de lo aquí descrito (no solo los decimales), este laboratorio necesitaría reajustar sus hiperparámetros — pendiente de validación en el entorno real del estudiante, no solo local, como registra el Paso 9 del flujo institucional (auditoría/mejora continua).

## 12. N5.M2.T4 · GPU y reproducibilidad — cierra M2

### Hallazgo real más importante del módulo, verificado empíricamente (no citado de memoria)

Se intentó primero demostrar no-determinismo de GPU con operaciones "candidatas" obvias (suma de un tensor grande, backward de una convolución con `cudnn.benchmark=True`) — **ambas resultaron deterministas en la build local** (5 corridas idénticas byte a byte cada vez), contradiciendo la expectativa inicial del diseño del syllabus. En vez de forzar la narrativa original, se buscó una operación que la propia documentación oficial de PyTorch cita explícitamente como no determinista (`torch.Tensor.index_add_()`, confirmado por WebSearch contra `pytorch.org/docs/stable/notes/randomness.html`) y se verificó con ejecución real: **5 corridas con semilla fija dieron 5 valores ligeramente distintos** (`286.2433...` a `286.2434...`), y activar `torch.use_deterministic_algorithms(True)` los volvió idénticos en las 5 corridas siguientes. Este es el patrón exacto que la guía de construcción exige (§9: nunca escribir un comportamiento de memoria) aplicado por primera vez a un fenómeno no numérico sino de **comportamiento de una librería** — la disciplina se sostiene igual.

### Segundo hallazgo real: el benchmarking sin warmup miente

Verificado con ejecución real: medir una multiplicación de matrices 4000×4000 en la PRIMERA operación GPU de la sesión dio 4.9x de aceleración frente a CPU; la misma operación, tras un "warmup" (una llamada de descarte), dio 29.9x. La cifra de 4.9x no era un error de medición menor — estaba dominada por el costo de inicialización del contexto CUDA, un fenómeno real y documentado del cómputo en GPU, no anticipado en el diseño original del syllabus y descubierto durante la verificación empírica de este laboratorio.

### Cómo enseñan este concepto exacto las fuentes de referencia

- **PyTorch docs, "CUDA semantics" y "Reproducibility"** (verificadas: la segunda es la fuente directa del hallazgo de `index_add_`, citada con URL real en Recursos).
- **DL Specialization (Ng):** no cubre GPU/reproducibilidad en detalle — es la primera vez en N5 que la bibliografía oficial de DOC-10 §7 no tiene una fuente estructurada equivalente para un subtema; se declara esta ausencia honestamente (mismo principio de DOC-11 §0bis punto 2) y se compensa apoyándose enteramente en documentación oficial de PyTorch, la fuente más autorizada posible para este tema exacto.

### Estrategia adoptada para este laboratorio, y para el cierre de M2

Cada cifra —incluyendo el nombre real de errores (`RuntimeError: Expected all tensors to be on the same device...`), los tiempos de aceleración, y los 5+5 valores de determinismo/no-determinismo— se generó con CUDA real disponible localmente (`verify_n5m2t4_torch.py`), no simulado ni asumido. **Con esto, M2 · PyTorch queda completo: 4 laboratorios DOC-12, primer módulo 100% entorno real de N5, cada uno con investigación pedagógica propia en este documento.** Falsable por: la GPU local (RTX 5070, PyTorch dev build cu128) es más nueva que la T4 que Colab gratuito ofrece — las cifras de aceleración relativa (29.9x) son ilustrativas del FENÓMENO (warmup importa, la aceleración real es sustancialmente mayor que la medición ingenua), no una promesa de que el estudiante verá exactamente 29.9x en su propia T4.
