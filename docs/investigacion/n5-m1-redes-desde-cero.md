# Investigación Pedagógica — N5.M1.T1 · La neurona artificial

*(DOC-11 §0bis, aplicada antes de diseñar la lección — ver también los 3 temas restantes de M1, cada uno con su propia nota breve dentro de este mismo documento acumulativo del módulo.)*

## 1. Cómo enseñan este concepto exacto las fuentes de referencia

- **Historia real, verificada por WebSearch (no de memoria):** McCulloch y Pitts (1943) demostraron que redes de "neuronas formales" binarias simples eran computacionalmente equivalentes a una máquina de Turing universal — el primer modelo formal de neurona artificial, sin regla de aprendizaje todavía. Frank Rosenblatt (1958, 1962) transformó ese modelo estático en un sistema que aprende, introduciendo un procedimiento de ajuste de pesos a partir de ejemplos (el teorema de convergencia del perceptrón: para cualquier conjunto linealmente separable, el procedimiento converge en un número finito de pasos). Minsky y Papert, en *Perceptrons* (1969), demostraron sistemáticamente qué funciones NO puede calcular un solo perceptrón — en particular XOR, por no ser linealmente separable — un hallazgo que contribuyó al primer "invierno de la IA".
- **Karpathy, *Neural Networks: Zero to Hero*** (estructura verificada en `github.com/karpathy/nn-zero-to-hero`, ver SYL-N5 Historial): construye la neurona y el motor de autograd (micrograd) ANTES de tocar cualquier framework — mismo orden que este tema y T3 adoptan deliberadamente.
- **DL Specialization (Ng), Curso 1 "Neural Networks and Deep Learning"** (estructura verificada por WebSearch): presenta la neurona logística como generalización directa de la regresión logística — mismo puente pedagógico que este tema traza explícitamente hacia N4.M2.

## 2. Errores de novato documentados para este concepto exacto

- Confundir la combinación ponderada con "una fórmula nueva" en vez de reconocerla como el producto punto ya dominado (patrón de error ya verificado repetidas veces en el propio Campus para conceptos que reaparecen con nombre distinto — mismo principio que motivó el Principio §3.3 de SYL-N3 sobre reconocer mecanismos ya dominados).
- La creencia extendida (y falsa) de que "más neuronas apiladas es automáticamente mejor" sin considerar la no-linealidad — el propio hallazgo de Minsky-Papert (XOR) es la refutación histórica más contundente y verificable de esa intuición para el caso de una sola capa.

## 3. Síntesis crítica (no colección)

El mecanismo que unifica los tres bloques de T1 (perceptrón histórico, activaciones modernas, límite de una sola neurona) es el mismo: la neurona es una decisión de similitud (producto punto, ya dominado) con un umbral. La activación decide qué tan "suave" es ese umbral; el límite de linealidad (XOR) es consecuencia geométrica directa, no una limitación arbitraria del algoritmo de entrenamiento — de ahí que el retoFinal use XOR como motivador real y verificado, no inventado, hacia el MLP de T2.

## 4. Estrategia adoptada para este tema

Orden: perceptrón histórico (escalón) → neurona moderna (sigmoide/ReLU) → compuertas lógicas como laboratorio integrador (patrón histórico real, no inventado) → XOR como desafío final inédito que motiva T2-T3 sin resolverlo todavía (la resolución real, con MLP, llega en T4). Cada valor numérico de cada ejercicio fue verificado con ejecución real de Python (`python verify_n5m1t1_*.py`) antes de escribirse en ningún `check()`, y el harness de Node (`docs/herramientas/`) confirmó 14/14 aciertos contra el `check()` real extraído de `index.html`.

**Falsable por:** si una futura auditoría encuentra que el orden histórico (perceptrón→XOR→MLP) genera más confusión que claridad pedagógica frente a empezar directamente por la neurona moderna, esta estrategia debería revisarse — no hay evidencia de eso todavía, es una hipótesis de diseño razonada, no un hecho verificado empíricamente con estudiantes reales.

---

# Investigación Pedagógica — N5.M1.T2 · La red como grafo (forward pass del MLP)

## 1. Cómo enseñan este concepto exacto las fuentes de referencia

- **Karpathy, *Zero to Hero* (micrograd → makemore MLP, estructura verificada por WebSearch):** introduce la capa como una lista de neuronas ANTES de introducir cualquier notación matricial — mismo orden que este tema, que reserva la equivalencia con "matriz de N3.M1.T3" para el Día 2 (Ejercicio 8), después de que el mecanismo por comprehension ya esté sólido.
- **DL Specialization (Ng), Curso 1:** presenta explícitamente la notación vectorizada (`Z = WX + b`) como una optimización DESPUÉS de establecer el forward pass "neurona por neurona" — confirma que el orden pedagógico "primero el mecanismo explícito, después su forma compacta" no es una idiosincrasia de este documento, sino un patrón real y verificado en la bibliografía oficial de DOC-10 §7.

## 2. Errores de novato documentados para este concepto exacto

- Confundir el conteo de neuronas de una capa con el conteo de capas de la red (error de vocabulario, pero con consecuencias reales al leer arquitecturas de papers, sembrando N3.M4).
- **Hallazgo propio durante la construcción de este tema (verificado con ejecución real, no supuesto):** invertir el orden de dos capas NO siempre produce un error de Python — `zip()` trunca en silencio ante listas de longitud distinta, así que una arquitectura mal conectada puede producir un número plausible sin ningún `ValueError` ni traceback. Verificado ejecutando el caso real (`forward_invertido` del retoFinal) antes de escribir el tema: el resultado es `[0.6225, 0.6225]`, no un error. Este hallazgo se usa deliberadamente como el desafío final del tema en vez de relegarse a una nota al pie, siguiendo el mismo principio de DOC-12 §2.5 ("un fallo que no se anuncia es peor que uno que sí").

## 3. Síntesis crítica

El tema completo es una sola idea aplicada tres veces con creciente generalidad: "encadenar" (Día 1: dos capas) → "encadenar N veces" (Día 2: tres capas, arquitecturas arbitrarias) → "el encadenamiento en el orden equivocado no siempre avisa" (Día 3, el hallazgo real de arriba). La equivalencia con la matriz de N3.M1.T3 se demuestra con código, no se afirma: el Ejercicio 8 hace que el estudiante confirme con sus propios ojos que ambas implementaciones dan el mismo resultado.

## 4. Estrategia adoptada para este tema

Cada valor numérico fue verificado con ejecución real de Python (`verify_n5m1t2_full.py`) antes de escribirse en cualquier `check()`; el harness de Node confirmó 14/14 aciertos contra el `check()` real extraído de `index.html`. **Falsable por:** si una futura cohorte demuestra que el hallazgo del truncamiento silencioso de `zip()` es demasiado sutil para un desafío final sin más andamiaje, debería añadirse un paso intermedio explícito antes del reto — no hay evidencia de eso todavía.

---

# Investigación Pedagógica — N5.M1.T3 · Backpropagation (motor de autograd propio)

## 1. Cómo enseñan este concepto exacto las fuentes de referencia

- **Karpathy, micrograd** (`github.com/karpathy/micrograd`, estructura confirmada por WebSearch en el Historial de SYL-N5): construye una clase `Value` con `_prev`, `_backward` por operación, y un `backward()` público que hace orden topológico + `self.grad=1.0` + recorrido inverso — este tema replica esa estructura exacta (con nombres en español: `Valor`, `_backward`, `_prev`), no una variante propia. Es la razón por la que DOC-10/mision-n5 señalan a Karpathy como "pedagógicamente más fuerte": construir el motor ANTES de un framework hace que M2.T2 sea confirmación, no revelación.
- **PyTorch docs (`torch.autograd`, verificado por WebSearch en Historial de SYL-N5):** confirma que `torch.autograd` funciona con el mismo modelo — grafo acíclico dirigido (DAG) de objetos `Function`, `.backward()` que recorre desde la raíz — validando que el motor de juguete de este tema no es una simplificación que oculte el mecanismo real, sino el mismo mecanismo a escala mínima.

## 2. Errores de novato documentados para este concepto exacto

- Llamar `_backward()` en el orden equivocado (antes de que el nodo padre ya tenga su gradiente correcto) — motivó que el Día 2 lo haga completamente A MANO (Ejercicio 10) antes de automatizarlo (Día 3), para que el estudiante sienta la necesidad del orden topológico en carne propia, no como una explicación abstracta.
- **Bug real cometido y corregido durante la construcción de este tema:** el Ejercicio 10 originalmente esperaba `b.grad=3.0` en vez del valor real verificado por ejecución (`b.grad=1.0` — la derivada local de la suma es 1, no el valor del otro operando, a diferencia del producto). Corregido tras ejecutar `verify_n5m1t3_full.py` y detectar la discrepancia antes de comitear — evidencia directa de por qué la guía §9 prohíbe escribir un `check()` de memoria.

## 3. Síntesis crítica

El tema resuelve una única tensión real: la regla de la cadena (N3.M2.T2) es fácil de aplicar a mano sobre UNA fórmula, pero inviable de aplicar a mano sobre un grafo con miles de nodos — el motor de autograd no es un algoritmo nuevo, es la automatización de un procedimiento ya dominado. El "quiebre de intuición" del módulo (valor reutilizado en dos ramas, retoFinal) no se explica con prosa: se demuestra con `a*a` y el estudiante confirma con sus propios ojos que `+=` (no `=`) es lo que hace que el resultado sea correcto.

## 4. Estrategia adoptada para este tema

Cada valor de cada `check()` —incluyendo los de una clase con estado, no solo funciones puras— se verificó ejecutando la clase completa en Python real (`verify_n5m1t3_full.py`) antes de escribirse; el harness de Node confirmó 14/14 aciertos contra el `check()` real extraído de `index.html`, y ese mismo proceso detectó y corrigió el bug real del Ejercicio 10 descrito arriba. **Falsable por:** si una futura auditoría encuentra que construir la clase en 3 pasos (mecanismo a mano → clase con backward manual → backward automático) es más lento de lo pedagógicamente necesario frente a construir la clase completa de una vez, debería revisarse — la decisión actual prioriza deliberadamente "sentir la necesidad de cada pieza antes de recibirla" sobre velocidad de construcción, siguiendo la prioridad explícita del Director para N4-N12 (guía §8).

---

# Investigación Pedagógica — N5.M1.T4 · MLP entrenado desde cero (cierra M1)

## 1. Cómo enseñan este concepto exacto las fuentes de referencia

- **Karpathy, micrograd/makemore** (verificado por WebSearch en Historial de SYL-N5): el propio repositorio de referencia construye `Neuron`, `Layer`, `MLP` como clases que envuelven `Value`, con un ejemplo de entrenamiento con descenso de gradiente sobre un dataset de juguete — misma progresión que este tema (T3 construye el motor, T4 lo envuelve en clases entrenables y entrena de verdad), sin copiar variables ni ejercicios de la fuente.
- **DL Specialization (Ng):** el Curso 1 dedica una semana completa a exactamente este ciclo (forward, coste, backward, actualización) antes de introducir cualquier framework — confirma que la secuencia pedagógica de este documento (mecanismo manual → motor de clases → entrenamiento real) no es idiosincrasia local, sino el patrón real de la bibliografía oficial de DOC-10 §7.

## 2. Errores de novato documentados para este concepto exacto

- Olvidar `zero_grad` entre pasos de entrenamiento — verificado empíricamente en este mismo tema (Ejercicio 5: gradiente pasa de -6.0 a -12.0 sin ningún error de Python) y llevado a escala completa en el desafío final (500 épocas, verificado con ejecución real: el entrenamiento se ESTANCA en pérdida ~0.17, nunca converge cerca de 0.0, sin lanzar ninguna excepción que lo delate).
- Elegir hiperparámetros (pesos iniciales, tasa de aprendizaje, épocas) sin verificar que realmente convergen — la arquitectura, los pesos iniciales y la tasa de aprendizaje de este tema fueron elegidos y AJUSTADOS por prueba real en Python (no en la primera combinación intentada) hasta confirmar convergencia completa a pérdida 0.0 en 500 épocas — el archivo `verify_n5m1t4_full.py` documenta el resultado final, no el proceso de búsqueda, siguiendo el mismo principio de "nunca escribir un valor de memoria" (guía §9) aplicado ahora a un proceso iterativo completo, no solo a un cálculo cerrado.

## 3. Síntesis crítica

Este tema cierra el arco narrativo completo de M1: T1 demuestra que una neurona NO resuelve XOR (verificado, no solo afirmado); T2-T3 dan el mecanismo (capas, backpropagation); T4 demuestra, con la MISMA tabla de verdad de XOR y ejecución real, que un MLP entrenado SÍ la resuelve (Ejercicio 12 compara ambos resultados explícitamente). Ningún paso de este arco se afirma sin evidencia ejecutada — es la aplicación más completa, dentro de N5 hasta ahora, del principio de verificación numérica de la guía §9.

## 4. Estrategia adoptada para este tema

Cada valor — incluyendo el historial de pérdida de un entrenamiento de 500 épocas, con y sin el bug de reset — se generó ejecutando el código real en Python (`verify_n5m1t4_full.py`) antes de escribir cualquier `check()`; el harness de Node confirmó 14/14 aciertos en cada uno de los 4 temas de M1 (56/56 en total). **Falsable por:** los hiperparámetros elegidos (pesos iniciales, lr=0.1, 500 épocas) son una configuración que SÍ converge, verificada; no se afirma que sea la única ni la óptima — una auditoría futura que busque configuraciones alternativas más rápidas de converger no invalidaría el tema, solo lo enriquecería.
