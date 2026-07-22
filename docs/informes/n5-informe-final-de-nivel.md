# Informe Final de Nivel — N5 · Deep Learning

*Paso 9 (final) del flujo institucional de 9 pasos, conforme a `docs/guia-construccion-niveles.md` §13. Estructura de 10 secciones, mismo formato que N0-N3.*

## 1. Objetivo global

N5 lleva al estudiante de "usar librerías de ML" (N4) a **implementar y entrenar redes neuronales desde su mecanismo fundacional hasta un resultado reproducible y documentado**. El nivel resuelve una pregunta específica: ¿qué hace posible, mecánicamente, que una red neuronal "aprenda"? La respuesta se construye en cuatro capas — el mecanismo (backpropagation, M1), la herramienta real de la industria (PyTorch, M2), las arquitecturas especializadas que explotan estructura del dato (CNN/RNN/atención, M3), y la disciplina que distingue un resultado genuino de una ilusión estadística (M4) — sostenidas juntas en un capstone que un estudiante puede defender ante cualquier audiencia sin inflar ni ocultar limitaciones.

## 2. Competencias desarrolladas

Las 4 competencias de DOC-01 (C-N5-01…04) mapean 1:1 con los 4 módulos, cobertura verificada sin huérfanas (§8 del syllabus, confirmada por la Auditoría Integral):
- **C-N5-01** (implementa redes neuronales y backpropagation desde cero) — M1 completo, 56 ejercicios, motor de autograd propio verificado.
- **C-N5-02** (entrena arquitecturas convolucionales/recurrentes en PyTorch, reproducibles) — M2 completo + M3.T2/T4, 6 laboratorios DOC-12 reales en Colab.
- **C-N5-03** (experimenta con rigor: hipótesis, variables aisladas, comparaciones reproducibles) — M4 completo, ciclo verificable diseñar→reproducir→reportar.
- **C-N5-04** (explica una red a audiencia técnica y no técnica) — concentrada en M4.T3 y el capstone (corrección aplicada tras la Auditoría Integral: la práctica NO está distribuida desde M1 como se pretendía en el diseño original; declarado honestamente en `syl-n5.md` §3.8).

## 3. Modelos mentales fundamentales que el nivel instala

1. **La neurona como votación ponderada con umbral suave** (M1.T1) — producto punto (ya de N3) + activación.
2. **Backpropagation como la regla de la cadena de N3.M2.T2, aplicada mecánicamente por un grafo** (M1.T3) — no un algoritmo nuevo, la automatización de algo ya dominado.
3. **CNN/RNN/atención como tres respuestas a la misma pregunta** ("¿qué parte del dato es relevante ahora?"), explotando tres estructuras distintas (espacial, secuencial, global sin restricción de posición) sobre la misma unidad de cómputo de M1 (M3, idea universal de cierre del módulo).
4. **El estado oculto de una RNN como memoria de tamaño fijo que se desvanece** (M3.T3-T4) — la limitación estructural real, verificada con ejecución, que motiva la atención.
5. **"Funcionó una vez" ≠ "es reproducible"** (M4) — ninguna conclusión sobre un modelo es válida sin múltiples corridas, semillas documentadas, y honestidad sobre lo que la evidencia realmente sostiene.

## 4. Errores que el nivel elimina (o hace verificables en vez de invisibles)

- Tratar backpropagation, autograd de PyTorch, y las arquitecturas de M3 como mecanismos aislados o mágicos, en vez de reconocer el mismo patrón (producto punto → activación → propagación de gradiente) repetido con variaciones.
- Confiar en una sola corrida de entrenamiento como evidencia suficiente (M4.T1/T3, demostrado dos veces con datos reales que la conclusión puede invertirse con más evidencia).
- Asumir que "está en GPU" es sinónimo de "es reproducible" (M2.T4, hallazgo real verificado: `index_add_()` no determinista).
- Reportar solo la mejor corrida sin declarar variabilidad (cherry-picking, M4.T3, con ejercicio de detección verificado).
- Creer que compartir pesos (convolución) o mantener estado (recurrencia) son trucos arbitrarios, en vez de reconocerlos como restricciones deliberadas que explotan estructura real del dato, con ahorro de parámetros cuantificado (M3.T1: 9 vs. 234).

## 5. Qué queda fuera del nivel, y por qué

- **Regularización explícita** (dropout, weight decay, batch norm) — mencionada como "fuera de alcance" en M3.T2, diferida sin tema propio; no está en el alcance de DOC-10 §7 para N5.
- **Multi-cabeza y proyecciones Q/K/V separadas en atención** — M3.T5 enseña self-attention de una cabeza con Q=K=V=entrada; la generalización completa es, explícitamente, tarea de N6.M1 (H-N6-02).
- **Arquitecturas de producción** (ResNet, arquitecturas más profundas) — el capstone declara explícitamente que no se espera competir con el estado del arte.
- **Extensión de la clase `Valor` (M1.T3) con tanh/sigmoide para RNN/LSTM** — decisión consciente tras la Auditoría Integral: la ruta de verificación equivalente para RNN/LSTM en el capstone usa la celda manual de M3.T3 contra `nn.LSTM`, no una extensión retroactiva del motor de M1.

## 6. Dependencias para el nivel siguiente (Herencias Declaradas)

7 herencias formales hacia SYL-N6 (`syl-n5.md` §9, Paso 9a): backpropagation dominado a fondo (H-N6-01), self-attention de una cabeza ya implementado y verificado (H-N6-02), la limitación de posición de la atención pura ya demostrada con ejecución real (H-N6-03, motiva directamente positional encoding), fluidez con PyTorch (H-N6-04), disciplina de rigor experimental (H-N6-05), conocimiento de primera mano de CNN/RNN para comparar contra el transformer (H-N6-06), y una herencia no planeada descubierta en la auditoría: la cultura de reportar resultados honestos y modestos, modelada repetidamente por el propio nivel, no solo enseñada (H-N6-07). Cero prerrequisitos ocultos encontrados — la cadena N5→N6 del PMC se confirma correcta.

## 7. Riesgos pedagógicos abiertos

1. **Brecha heredada de DOC-11 Bloque 6** (recursos/defensa socrática/metacognición/lectura dirigida/Beyond the Curriculum) ausente en ~20 de los 27 días Pyodide del nivel — mismo patrón que N3, declarado explícitamente por la Auditoría Integral como pendiente de decisión institucional, no resuelto unilateralmente (`docs/informes/n5-auditoria-integral.md`, hallazgo 10).
2. **Sin alternativa documentada a Google Colab** si la cuota gratuita cambia sustancialmente — mitigado con una mención breve a Kaggle Notebooks (Paso 9b, hallazgo 1), pero sin un laboratorio completo alternativo.
3. **Discrepancia sin resolver entre la tabla resumen de DOC-10 §Apéndice y el contenido real de N5** sobre qué módulos cubren C-N5-01…03 (DOC-10 omite M3; el contenido real sí lo cubre correctamente) — Tier T1 sellado, no editable desde este nivel, declarado como recomendación pendiente para el Director (Auditoría Integral, hallazgo 11).

## 8. Hipótesis pendientes de validación

- **La estrategia de "mecanismo manual antes que framework" (M1 antes de M2, M3.T1/T3 antes de M3.T2/T4) es la más efectiva pedagógicamente** — respaldada por Karpathy y Ng (fuentes oficiales), y por la integración verificada M1↔M2, pero sin evidencia de cohortes reales de estudiantes que la confirmen frente a un orden inverso (framework primero, mecanismo después, estilo Fast.ai — ahora citado explícitamente como contraste en M3.T2).
- **La estimación de carga horaria corregida (~185-215h vs. las ~400h originales de DOC-10)** es una estimación de construcción, no de ejecución real por un estudiante — pendiente de validar cuando el Director (como estudiante único de la Academia) recorra el nivel de verdad.
- **La densidad de M4 (2 días/tema, más liviana que M1)** asume que la disciplina metodológica requiere menos práctica repetida que la construcción de mecanismos — hipótesis razonable pero no verificada empíricamente contra el patrón de 3 días/tema de M1/N3.

## 9. Decisiones de diseño más importantes

1. **Modalidad "mixta por tema" en vez de "por módulo"** — primera vez en la Academia, decidida verificando empíricamente (no asumiendo) que PyTorch no está en Pyodide, y aplicando el criterio de frontera de DOC-12 §5 tema por tema, no módulo por módulo.
2. **Motor de autograd propio (patrón micrograd de Karpathy) como columna vertebral de M1**, con la disciplina de "sentir la necesidad de cada pieza antes de recibirla" (mecanismo manual en Día 1-2, automatización en Día 3) — confirmado por la Auditoría Integral como la integración más sólida de todo el nivel.
3. **Reutilización deliberada de datos/ejemplos reales entre módulos** (el historial de pérdida con/sin `zero_grad` de M2.T3 reaparece en M4.T1; la arquitectura de M3.T2 reaparece en el ablation study de M4.T1) en vez de ejemplos sintéticos genéricos por tema.
4. **Honestidad como principio de contenido, no solo de proceso** — M3.T2/T4 documentan resultados modestos (75% de precisión, "probablemente memoriza") sin inflar, antes incluso de que M4 formalice esa disciplina — decisión consciente de modelar el comportamiento antes de enseñarlo explícitamente.
5. **Verificación empírica con hardware real disponible (CUDA local)** para M2.T4 — permitió descubrir 2 hallazgos no anticipados en el diseño original (la trampa del benchmarking sin warmup, el no-determinismo real de `index_add_`), en vez de asumir comportamiento de GPU sin verificarlo.

## 10. Qué aprendió la Academia al construir N5

- **El patrón de "ejercicios de código ya completo" (sin blanco `pass`) es una categoría de riesgo real para valores no verificados** — 2 de los 3 bugs numéricos reales encontrados en todo el nivel (T3.Ejercicio 10, T5.Ejercicio 9) ocurrieron en exactamente esa categoría, porque no pasan por la misma fricción de "escribir la solución de referencia y ejecutarla" que un ejercicio con blanco. Recomendación para niveles futuros: verificación extra deliberada para esa categoría específica.
- **La aleatoriedad no sembrada (sin semilla) es una fuente de bugs de verificación cualitativamente distinta a un cálculo mal hecho** — el bug de `numpy.random` sin semilla en M4.T2 no era un valor incorrecto, era un valor QUE NUNCA PUDO haber sido fijo; la disciplina de "verificar ejecutando" necesita, en presencia de aleatoriedad real, verificar el PATRÓN (múltiples corridas) en vez de un solo valor.
- **Tener hardware real disponible durante la construcción (CUDA local) cambia cualitativamente qué se puede verificar** — permitió que N5 fuera el primer nivel de la Academia con hallazgos empíricos de GPU genuinamente descubiertos durante la construcción, no solo citados de documentación.
- **Una auditoría integral con auditores independientes reales (Agent tool, no una sola pasada de autorrevisión) encuentra categorías de defectos distintas según el ángulo** — el auditor de verificación numérica encontró bugs de contenido que el auditor de coherencia curricular no buscaba, y viceversa; los 3 ángulos combinados encontraron más que cualquiera por separado, confirmando el valor del patrón de múltiples auditores ya usado en N1-N3.
- **Declarar honestamente cuando una afirmación de diseño no coincide con el contenido real construido (C-N5-04 "distribuida desde M1") es más valioso que mantener la afirmación original intacta** — corregir el syllabus para reflejar la realidad, en vez de forzar retroactivamente el contenido para cumplir una promesa de diseño no verificada, es la aplicación del mismo principio de honestidad que M4 enseña, ahora aplicado al propio proceso de construcción del nivel.

---

## Declaración

Con el flujo institucional de 9 pasos completo (diseño → M1-M4 → capstone → compuertas → Auditoría Integral con 3 auditores independientes → Herencias Declaradas finales → Auditoría Adversarial Final, sin reservas abiertas), **SYL-N5 y su contenido real en `index.html` (`LEVEL5`, 157 ids, 0 duplicados) quedan declarados candidato a v1.0.0** por quien construyó este nivel — conforme a `docs/guia-construccion-niveles.md` §12, la palabra "v1.0.0" sin el calificativo "candidato" es exclusiva del Director; el sello final, la fusión a `main`, y el veredicto definitivo permanecen enteramente en su autoridad.
