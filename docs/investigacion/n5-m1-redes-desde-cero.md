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
