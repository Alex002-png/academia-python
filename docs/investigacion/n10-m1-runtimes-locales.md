# Investigación Pedagógica — N10.M1 · Runtimes locales

*Conforme a DOC-12 §0bis. Documento independiente, aprobado antes de redactar los laboratorios de M1 (Bloques DOC-12 §2). Investigación real por fetch directo (WebFetch), 2026-07-21 — ver agente de investigación citado en el historial de `docs/syllabus/syl-n10.md` v0.2.0-draft.*

## 1. Cómo enseñan este flujo exacto las fuentes de referencia

**No existe un curso universitario canónico sobre "cómo correr un LLM en tu propia máquina"** — a diferencia de Git o la terminal (DOC-12 §0.1, con Pro Git/Missing Semester/Carpentries como anclas maduras), el ecosistema de runtimes locales de LLMs tiene menos de tres años de existencia pública amplia y ninguna institución académica de referencia (MIT, CMU, Stanford) tiene todavía una lección dedicada específicamente a Ollama o llama.cpp como objeto de estudio pedagógico. **Se declara esta ausencia explícitamente, en vez de forzar una cita que no existe** (principio de honestidad metodológica, DOC-11/DOC-12 §0bis).

Lo que sí existe, y es la fuente más cercana a "cómo se enseña este flujo exacto", es la **documentación oficial de cada herramienta**, que en los tres casos (Ollama, llama.cpp, GGUF) sigue de forma consistente un patrón "por qué antes que comando" muy similar al que DOC-12 §0.1 ya identificó en Pro Git/Missing Semester:

- **Ollama** (`docs.ollama.com`, `github.com/ollama/ollama/blob/main/docs/api.md`): la documentación del Modelfile explica primero qué instrucciones existen y por qué (7 instrucciones: `FROM`, `PARAMETER`, `TEMPLATE`, `SYSTEM`, `ADAPTER`, `LICENSE`, `MESSAGE`) antes de dar ejemplos completos — el mismo patrón "concepto antes que sintaxis completa".
- **llama.cpp** (`github.com/ggml-org/llama.cpp`): el README abre con el objetivo declarado del proyecto en prosa ("enable LLM inference with minimal setup and state-of-the-art performance on a wide range of hardware") antes de cualquier flag de compilación — coherente con el patrón de Pro Git de anteponer el "por qué" al primer comando.
- **GGUF** (`github.com/ggml-org/ggml/blob/master/docs/gguf.md`): la especificación abre explicando el problema real que GGUF resuelve (falta de versionado y de identificación de arquitectura en los formatos anteriores GGML/GGMF/GGJT) antes de describir la estructura binaria — el mismo principio de "contexto antes que formato".

**Convergencia real con DOC-12 §0.1:** las tres fuentes, sin coordinación entre sí, anteponen motivación a mecanismo — el mismo patrón que Pro Git/MIT/Carpentries ya establecieron para Git y la terminal. Esto refuerza (no introduce) el principio ya adoptado por la Academia: no es una coincidencia de este dominio específico, es cómo se documenta bien software real en general.

## 2. Errores de novato documentados específicamente para este flujo

*No genéricos de "instalar software" — los que este flujo concreto produce, verificados por fuente (ver también §8 de `syl-n10.md` para el detalle completo por herramienta).*

1. **GPU no detectada por Ollama** — causas reales documentadas: driver NVIDIA faltante o desactualizado, WSL2 mal configurado (el driver de Windows se proyecta como `libcuda.so` dentro de WSL2; instalar un driver Linux nativo encima de ese stub lo rompe y fuerza fallback a CPU sin ningún mensaje de error explícito), `CUDA_VISIBLE_DEVICES=-1` fijado sin querer en el entorno, o el flag `--gpus` olvidado al correr Ollama en Docker.
2. **Confundir carga en memoria con inferencia lenta** — la primera ejecución de `ollama run <modelo>` incluye la descarga (si no está cacheado) y la carga completa del modelo en memoria/VRAM; un estudiante que mide "velocidad" en la primera ejecución obtiene un número que no refleja el rendimiento real de inferencia.
3. **Offload parcial silencioso** — `ollama ps` puede reportar "23%/100% GPU" sin que el estudiante entienda que eso significa que el modelo no cupo entero en VRAM y una porción corre en CPU, degradando la velocidad de forma significativa sin ningún error visible — el sistema "funciona", solo que mal, y sin avisar.
4. **`CUDA out of memory`** al forzar `-ngl` (número de capas en GPU) por encima de lo que la VRAM disponible permite — mensaje de error real y reproducible en llama.cpp, con solución documentada (reducir `-c`/contexto primero, que suele liberar más margen que reducir capas).
5. **Instalar sin verificar** — asumir que porque `ollama pull` terminó sin error, el modelo va a correr correctamente; el error de arquitectura/tokenizador no compatible (poco común pero documentado) solo aparece al intentar cargarlo, no al descargarlo.

## 3. Síntesis crítica

El mecanismo específico que hace funcionar bien la documentación de estas tres herramientas no es la exhaustividad (README de llama.cpp es enorme y parcialmente desactualizado en secciones específicas de compilación por plataforma) — es que **cada una ancla su primer párrafo en el problema real que resuelve**, antes de cualquier instrucción operativa. Eso es exactamente lo que DOC-12 §2.2 (Contexto) exige, y confirma que el molde ya elegido por la Academia no es una imposición arbitraria: es cómo el propio ecosistema, sin que se lo pidieran, decidió explicarse a sí mismo.

**Limitación real de estas fuentes frente a lo que un estudiante nuevo necesita:** ninguna de las tres asume un lector que nunca usó una terminal real fuera de Pyodide, ni ancla la explicación en la experiencia previa exacta del estudiante (N7.M1, donde ya llamó a una API de modelo cloud). Ese anclaje — "esto es la misma API que ya conoces, apuntando a `localhost`" — no viene de ninguna fuente externa: es una decisión de diseño propia de este syllabus (ver N10.M1.T2), justificada por continuidad curricular, no citada de ningún lado porque ninguna fuente externa tiene ese contexto.

## 4. Estrategia propuesta para M1

- **T1 empieza por motivación (costo/privacidad/latencia/offline), no por instalación** — mismo patrón de "por qué antes que comando" confirmado en las 3 fuentes (§1), y ya exigido por DOC-12 §2.2 con independencia de esta investigación. Justificación reforzada, no inventada aquí.
- **El error de "GPU no detectada" (hallazgo #1 y #3, §2) se reserva como error inducido en vivo de M1.T3** (no T1), porque requiere que el estudiante ya haya compilado/usado llama.cpp con soporte CUDA — provocarlo antes sería prematuro y no diagnosticable con las herramientas que el estudiante tiene en T1.
- **La distinción "carga vs. inferencia" (hallazgo #2) se enseña explícitamente en T1** mediante observación directa (primera vs. segunda ejecución del mismo prompt) — no como advertencia abstracta, sino como experiencia vivida antes de cualquier medición formal (que llega en M2).
- **El offload parcial silencioso (hallazgo #3) se reserva para M3** (jerarquía de memoria), donde el estudiante tiene el modelo mental para entenderlo — mencionarlo en M1 sin ese contexto produciría memorización sin comprensión, exactamente el modo de fallo que DOC-11/DOC-12 existen para evitar.
- **El error de OOM real (hallazgo #4) se induce en M1.T3**, con la solución real documentada (reducir `-c` antes que `-ngl`) verificada contra el propio README de llama.cpp, no inventada.
- **La especificidad del formato GGUF (hallazgo de §1, contexto antes de estructura) ancla T4** — el tema no abre con la estructura binaria, abre con el problema real (portabilidad entre máquinas/herramientas) antes de inspeccionar un archivo real.

## Decisiones de diseño derivadas de la investigación

| Decisión | Evidencia que la respalda | Categoría de solidez |
|---|---|---|
| Abrir cada tema con motivación/contexto antes de cualquier comando | Convergencia real entre Ollama docs, llama.cpp README, spec GGUF (§1) | Evidencia sólida (3 fuentes independientes, sin coordinación) |
| Reservar el error de GPU no detectada para T3, no T1 | Requiere llama.cpp compilado con CUDA, inexistente hasta T3 | Decisión de diseño (secuenciación curricular propia, no evidencia externa) |
| Anclar la API REST de Ollama en la experiencia previa de N7.M1 | Ninguna fuente externa lo cubre — decisión de continuidad curricular | Decisión de diseño por ausencia de evidencia externa aplicable |
| Enseñar "carga vs. inferencia" por observación directa, no advertencia abstracta | Mismo principio ya vigente en DOC-12 §2.5bis (error vivido, no solo documentado) | Evidencia sólida (principio institucional ya validado en N1) |

**Falsabilidad pedagógica:** si el registro de observaciones de ejecución (DOC-12 §6, tras impartir M1 con el estudiante real) muestra que reservar el offload parcial para M3 deja un vacío real en T1-T2 (el estudiante pregunta "¿por qué esto no usó GPU?" antes de M3), esta decisión se revisa y el concepto se adelanta con una mención acotada en T1, sin esperar a completar M3.
