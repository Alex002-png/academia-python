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
