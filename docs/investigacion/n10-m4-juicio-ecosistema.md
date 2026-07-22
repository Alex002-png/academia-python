# Investigación Pedagógica — N10.M4 · Juicio de ecosistema

*Conforme a DOC-12 §0bis. Documento independiente, aprobado antes de redactar los laboratorios de M4. Investigación real por fetch directo/WebSearch, 2026-07-21 — agente dedicado a la viabilidad de vLLM como tercera herramienta de comparación.*

## 1. Cómo enseñan este flujo exacto las fuentes de referencia

No existe un curso formal de "cómo evaluar herramientas de un ecosistema de software cambiante" — es una competencia de criterio profesional, no un tema técnico con currículo propio. La fuente más útil encontrada no es pedagógica sino técnica-comparativa: un artículo de ingeniería seria (Red Hat Developer, no marketing) que compara llama.cpp vs. vLLM con benchmarks reales de concurrencia, y es honesto sobre para qué sirve cada uno — exactamente el tipo de fuente que este módulo quiere que el estudiante aprenda a producir por sí mismo, no solo a consumir.

## 2. El hallazgo que cambia el diseño completo de M4

La investigación de la tercera herramienta candidata (vLLM, elegida por su conexión curricular directa con N9) reveló tres hechos verificados que **ningún syllabus podía anticipar sin investigar primero**, exactamente la razón de ser de DOC-12 §0bis:

1. **vLLM no tiene soporte oficial nativo en Windows** — la documentación oficial declara Linux como requisito; Windows exige WSL2, o un fork comunitario de un solo mantenedor (`SystemPanic/vllm-windows`), no apto como base de un laboratorio institucional reproducible.
2. **La RTX 5070 (arquitectura Blackwell, compute capability sm_120) tiene un issue abierto y SIN RESOLVER en el repositorio oficial de vLLM** (`vllm-project/vllm#35432`, abierto 2026-02-26): los wheels precompilados fallan con `CUDA error: no kernel image is available for execution on the device`. Este no es un riesgo genérico de "GPU de consumidor" — es un problema documentado específico de la generación de GPU del estudiante.
3. **El soporte GGUF de vLLM es oficialmente "highly experimental"** y vive en un plugin separado — la ruta nativa y recomendada de vLLM es `safetensors`/HuggingFace, no los mismos archivos GGUF ya usados en M1-M3.

## 3. Síntesis crítica

Estos tres hallazgos, juntos, cambian la pregunta que M4 debe responder. No es "¿instala el estudiante vLLM y mide throughput?" — es **"¿puede el estudiante ejecutar un proceso de evaluación honesto incluso cuando la herramienta candidata puede fallar por razones fuera de su control, y sacar una conclusión de adopción o descarte igualmente válida en cualquiera de los dos casos?"**. Esto es, de hecho, MÁS fiel a la competencia real (C-N10-03: "evalúa... con juicio de adopción **o descarte**") que un escenario donde todo funciona sin fricción — un ingeniero real evalúa herramientas nuevas constantemente sin saber de antemano si van a funcionar en su stack exacto.

**Decisión de diseño central derivada de este hallazgo:** el laboratorio de prototipo (T2) se diseña explícitamente para que un fallo del *smoke test* de compatibilidad sea un resultado válido y documentable, no un error del estudiante ni del laboratorio — con un plan de contingencia declarado desde el inicio, no como improvisación de última hora.

## 4. Estrategia propuesta para M4

- **T1 (criterios)** incluye explícitamente "compatibilidad verificable con tu hardware exacto" como un criterio de evaluación propio, distinto de rendimiento/facilidad/comunidad — un criterio que las fuentes de marketing casi nunca destacan pero que la investigación real de este mismo documento demuestra que puede ser determinante.
- **T2 (prototipo)** abre con un *smoke test* de compatibilidad ANTES de cualquier comparación de rendimiento — mismo principio de "verificar antes de comprometerse" que ya rige M2/M3 (calcular el presupuesto de VRAM antes de intentar cargar). Declara WSL2 como requisito explícito de entorno (DOC-12 §1, campo "Entorno(s) objetivo"), y un plan B documentado (medir con un modelo/configuración alternativa, o documentar el descarte con evidencia) si el issue de Blackwell sigue sin resolverse al momento de ejecutar el laboratorio.
- **T2 usa un modelo pequeño en formato safetensors nativo**, no GGUF — fiel a cómo vLLM se usa realmente en producción, evitando la fuente de fricción adicional del soporte experimental de GGUF.
- **T3 (decisión)** integra explícitamente que "descarte justificado con evidencia" es un resultado tan válido como "adopción" — ninguna narrativa de este módulo debe sugerir que el estudiante "falló" si termina recomendando NO usar vLLM en su hardware actual.

## Decisiones de diseño derivadas de la investigación

| Decisión | Evidencia que la respalda | Categoría de solidez |
|---|---|---|
| WSL2 como requisito de entorno explícito para el laboratorio de vLLM | Documentación oficial de vLLM, ausencia de soporte nativo Windows confirmada | Evidencia muy sólida (fuente oficial) |
| Smoke test de compatibilidad Blackwell como primer paso obligatorio | Issue #35432 verificado, abierto y sin resolver a la fecha de la investigación | Evidencia muy sólida (issue real y activo del propio repositorio oficial) |
| Usar modelo safetensors en vez de GGUF para el prototipo de vLLM | Documentación oficial: soporte GGUF "highly experimental" | Evidencia muy sólida (declaración oficial explícita) |
| Diseñar el descarte como resultado igualmente válido que la adopción | Competencia C-N10-03 (DOC-01) lo declara explícitamente ("adopción o descarte") | Evidencia muy sólida (fuente curricular propia ya aprobada) |

**Falsabilidad pedagógica:** si para cuando el estudiante ejecute este laboratorio el issue #35432 ya está resuelto y vLLM corre sin fricción en la RTX 5070, el laboratorio sigue siendo válido (el smoke test simplemente pasa y el estudiante avanza a la comparación de rendimiento) — el diseño no depende de que el fallo ocurra, solo está preparado para que pueda ocurrir sin romper el laboratorio ni la evaluación del estudiante.
