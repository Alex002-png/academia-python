# Investigación Pedagógica — N10.M3 · GPU, CUDA básico y jerarquía de memoria

*Conforme a DOC-12 §0bis. Documento independiente, aprobado antes de redactar los laboratorios de M3 — el módulo más conceptual/hardware de toda la carrera hasta este punto (ficha de misión N10). Investigación real por fetch directo (WebFetch), 2026-07-21.*

## 1. Cómo enseñan este concepto exacto las fuentes de referencia

A diferencia de M1/M2, aquí sí existe una fuente de referencia oficial madura: la **CUDA Programming Guide de NVIDIA** (`docs.nvidia.com/cuda/.../cuda-c-programming-guide`), verificada por fetch directo contra su índice real (v12.3 y v13.3). Su estructura: Parte 1 (modelo de programación, agnóstico al lenguaje), Parte 2 (kernels SIMT, memoria, NVCC), Parte 3 (multi-GPU), Parte 4 (Unified Memory, CUDA Graphs), Parte 5 (apéndices de compute capabilities).

**Frase textual clave**, citada como ancla del modelo mental de T1: *"The GPU is specialized for highly parallel computations and therefore designed such that more transistors are devoted to data processing rather than data caching and flow control."* — el propio NVIDIA explica la arquitectura por contraste con la CPU, exactamente el mismo patrón "concepto antes que mecanismo" que las investigaciones de M1/M2 ya encontraron en otras fuentes de este ecosistema.

**Hallazgo crítico que condiciona TODO el diseño de M3.T2, con la máxima honestidad metodológica posible:** el *roofline model* / *arithmetic intensity* — el marco conceptual necesario para explicar por qué la fase de *decode* autoregresiva de un LLM está limitada por ancho de banda de memoria, no por cómputo — **no aparece en el índice de la CUDA Programming Guide.** Viene de literatura de arquitectura de computadoras (Williams, Waterman & Patterson, *"Roofline: An Insightful Visual Performance Model for Multicore Architectures"*, 2009) aplicada después, por la comunidad de ingeniería de inferencia (no por NVIDIA), al caso específico de LLMs. Esto ya se declaró en `syl-n10.md` §8 y se repite aquí porque es el hallazgo más importante de esta investigación completa: **M3.T2 no puede citar la CUDA Guide como fuente del roofline model sin cometer una atribución falsa.**

## 2. Errores de novato documentados específicamente para este flujo

1. **Creer que la GPU es "una CPU más rápida"** en vez de una arquitectura distinta para un tipo distinto de problema — el error de novato más fundamental y más citado en cualquier introducción a computación paralela, confirmado por la propia cita textual de NVIDIA en §1 (el contraste transistores-para-cómputo vs. transistores-para-control/caché).
2. **Asumir que "más núcleos CUDA" es la única variable de rendimiento** — ignora el ancho de banda de memoria, con frecuencia el cuello de botella real en inferencia de LLMs (confirmado por la cifra citada de ~0.6% de utilización de cómputo de GPU en decode con batch=1, de fuentes técnicas de ingeniería de inferencia, arXiv 2402.16363).
3. **Confundir "memoria reservada" con "cómputo activo"** en `nvidia-smi` — una GPU puede mostrar VRAM ocupada al 100% con 0% de utilización de cómputo, y esa combinación exacta es la señal de que el cuello de botella en ese momento es memoria, no procesamiento (dato reusado directamente del error de novato #3 de M1, ahora explicado a fondo).
4. **No distinguir la fase de *prefill* (procesar el prompt, compute-bound, altamente paralelizable) de la fase de *decode* (generar cada token nuevo, memory-bound, secuencial por naturaleza)** — la mayoría de explicaciones introductorias de "por qué la GPU es rápida" hablan solo de paralelismo masivo (cierto para prefill/entrenamiento) sin aclarar que la generación interactiva token a token es un régimen distinto.

## 3. Síntesis crítica

El mecanismo real que separa una buena explicación de "por qué es rápida la GPU" de una simplista es **no quedarse en el paralelismo masivo como única explicación** — eso responde bien "por qué el prefill/entrenamiento es rápido en GPU", pero deja sin explicar la experiencia real que el estudiante ya vivió en M1.T3 y M2.T3 (generación interactiva, token a token). La CUDA Guide da la mitad correcta de la historia (arquitectura paralela); la literatura de roofline/arithmetic intensity da la otra mitad, específica de por qué esa arquitectura paralela NO se aprovecha completamente durante decode. Ninguna fuente sola cuenta la historia completa — de ahí que M3 necesite dos temas separados (T1 paralelismo, T2 memoria) en vez de fusionarlos en uno.

**Limitación real de la CUDA Guide frente a lo que el estudiante necesita:** es exhaustiva sobre CÓMO programar CUDA (kernels, grids, sincronización) pero no está diseñada para responder "¿por qué mi chat con Ollama genera texto más lento que lo que mi GPU debería poder hacer, en teoría, según sus specs de cómputo?" — esa pregunta exacta solo la responde la síntesis de ambas fuentes (Guide + roofline), que es exactamente la síntesis propia que este syllabus ya se comprometió a construir.

## 4. Estrategia propuesta para M3

- **T1 se apoya en la cita textual de NVIDIA** (§1) para el contraste CPU/GPU — evidencia muy sólida, fuente primaria oficial.
- **T2 declara explícitamente el origen no-NVIDIA del roofline model** antes de usarlo — honestidad metodológica no negociable, ya aplicada en `syl-n10.md` §8 y repetida aquí en la ficha del propio laboratorio.
- **T2 conecta explícitamente con M2.T3**: las mediciones de velocidad que el estudiante YA produjo con datos propios se re-explican ahora con el marco de roofline, en vez de introducir un ejemplo nuevo desde cero — mismo principio de integración que ya rige el resto del nivel.
- **El error de novato #3 (VRAM reservada vs. cómputo activo en `nvidia-smi`) se reserva para T3-T4**, una vez que el estudiante tiene el modelo mental de memoria vs. cómputo de T1-T2 para interpretarlo correctamente — mismo patrón de secuenciación curricular ya usado en M1 (reservar el offload parcial silencioso para M3 en vez de introducirlo prematuro en M1.T1).
- **T5 (cierre) reutiliza EXPLÍCITAMENTE los datos ya producidos en M2.T3** (VRAM, tiempos GPU/CPU) como el material que ahora se explica con el modelo mental completo de M3 — no se piden mediciones nuevas desde cero, se re-interpretan las ya hechas, reforzando que la medición de M2 y la explicación de M3 son dos caras del mismo fenómeno.

## Decisiones de diseño derivadas de la investigación

| Decisión | Evidencia que la respalda | Categoría de solidez |
|---|---|---|
| Usar la cita textual de NVIDIA para el contraste CPU/GPU de T1 | CUDA Programming Guide, fuente oficial verificada por fetch directo | Evidencia muy sólida |
| Declarar explícitamente que el roofline model no viene de NVIDIA | Confirmado por ausencia en el índice real de la CUDA Guide + origen académico verificado (Williams et al. 2009) | Evidencia muy sólida (ausencia confirmada + atribución correcta verificada) |
| Separar T1 (paralelismo) de T2 (memoria) en vez de fusionarlos | Ninguna fuente sola cubre ambos mecanismos con la misma fuerza — síntesis crítica propia (§3) | Decisión de diseño respaldada por evidencia de dos fuentes complementarias |
| T5 reutiliza datos de M2.T3 en vez de pedir mediciones nuevas | Principio de integración ya vigente en todo el nivel (M1.T4, M2.T4) | Evidencia sólida (principio institucional ya validado dos veces en el mismo nivel) |

**Falsabilidad pedagógica:** si el registro de ejecución muestra que el estudiante confunde el roofline model con documentación oficial de NVIDIA a pesar de la declaración explícita en T2, la estrategia de "declarar el origen una vez" se revisa — podría necesitar refuerzo repetido (recordarlo también en el cierre de T2 y en T5), no solo una mención inicial.
