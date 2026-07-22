# N10.M1.T1c — El panorama de modelos abiertos: licencias, benchmarks y cómo elegir con criterio

*Construido bajo DOC-12 v1.0.0, estándar de excelencia elevado (directiva del Director, 2026-07-22). Investigación pedagógica: `docs/investigacion/n10-m1-t1-panorama-economia-modelos.md`.*

**La gran pregunta de este laboratorio:** cuando alguien dice "este modelo es open source" y otro dice "este modelo lidera el ranking", ¿ambas afirmaciones significan lo que parecen significar?

**Entorno objetivo:** terminal local + investigación de licencias y benchmarks reales.

**Fluencia de terminal asumida:** completa (M1.T1a-T1b).

**Prerrequisitos técnicos:** M1.T1a-T1b completos; acceso a internet para verificar licencias oficiales y leer los papers citados.

**Prerrequisitos conceptuales:** M1.T1b (el mismo escepticismo ante cifras sin fuente rastreable, aplicado ahora a licencias y benchmarks).

**Duración estimada — desglosada:** contexto (~15 min) + auditoría de licencias reales de 5 familias de modelos (~30 min) + lectura crítica de 2 papers sobre limitaciones de benchmarks (~30 min) + error inducido en vivo — el leaderboard que miente por diseño (~15 min) + mini laboratorio y desafío (~20 min) + evaluación (~10 min) → **total realista: 100-120 min.**

**Nivel de dificultad:** intermedio-avanzado — exige lectura crítica de fuentes legales y académicas, no solo técnicas.

**Fuera de alcance de este laboratorio (y por qué):** comparación de rendimiento medido en tu propio hardware se cubre en M2.T3 y el resto de M2-M3. Aquí el foco es criterio de selección informado, no benchmarking propio todavía.

**Conexión con el laboratorio anterior y el siguiente:** M1.T1b enseñó a desconfiar de cifras económicas sin fuente rastreable. Este laboratorio aplica el mismo escepticismo a licencias y benchmarks de modelos, cerrando la expansión de T1. Deja abierta la pregunta que M1.T2 resuelve: ya sabes elegir un modelo con criterio — ¿cómo controlas ese modelo con precisión desde tu propio código?

---

## 1. Objetivo

Al terminar vas a poder auditar la licencia real de un modelo (no asumir que "descargable" significa "open source"), explicar con evidencia por qué los benchmarks públicos tienen limitaciones documentadas y serias, y describir cómo evalúan modelos equipos de ingeniería reales en producción.

## 2. Contexto

Vas a descargar modelos durante todo este nivel sin cuestionar dos palabras que se repiten constantemente: "open source" y "el mejor modelo" (según algún ranking). Ninguna de las dos significa, con precisión, lo que la mayoría asume. Un ingeniero que solo mira el nombre de una licencia o la posición en un leaderboard toma decisiones peores que uno que audita ambas cosas.

## 3. Requisitos

- M1.T1a-T1b completos.
- Acceso a internet para verificar licencias oficiales y leer los papers citados.

☐ **Checkpoint 0 —** estás dispuesto a leer fuentes primarias (archivos LICENSE, papers) en vez de resúmenes de terceros.

## 4. Explicación conceptual

**Sobre licencias:** "puedo descargar los pesos gratis" NO es lo mismo que "open source" en el sentido estricto (aprobado por la Open Source Initiative, OSI, la autoridad que define el término desde 1998). Verificado licencia por licencia contra fuente oficial:

- **Llama** (Meta): Community License — la propia OSI declaró explícitamente que NO califica como open source (restringe campo de uso, discrimina por región/escala, límite de 700M de usuarios activos mensuales).
- **Gemma** (Google): términos propios, tampoco OSI, con política de uso prohibido y derecho unilateral de Google a restringir acceso.
- **Qwen** (Alibaba): mixto — tamaños pequeños son Apache 2.0 (sí OSI), los más grandes tienen licencia propia con techo de usuarios.
- **Mistral**: pasó a Apache 2.0 completo en su versión más reciente.
- **Phi** (Microsoft): MIT desde el principio, sin restricciones.

**Sobre benchmarks:** MMLU, el benchmark más citado para "inteligencia general", tiene contaminación de datos documentada — MMLU-CF (un estudio que reconstruye el benchmark sin contaminación) encontró que el rendimiento de GPT-4o cae de 88.0% a 73.4%. Y "The Leaderboard Illusion" (2025) documenta que Meta probó 27 variantes privadas de Llama antes de publicar la que mejor rankeaba, y que los laboratorios grandes reciben una porción desproporcionada de los datos de evaluación del leaderboard más citado frente a decenas de modelos abiertos combinados.

## 5. Ejecución paso a paso

**Paso 1 — Audita la licencia real de 5 familias de modelos**

Para cada una (Llama, Qwen, Mistral, Gemma, Phi), busca la fuente OFICIAL: el archivo LICENSE del repositorio, o la página de términos del proveedor. Registra: ¿aprobada por OSI? ¿restricción de escala/usuarios? ¿restricción de campo de uso?

**Paso 2 — Lee el hallazgo central de MMLU-CF sobre contaminación**

Identifica qué técnica usan para "descontaminar" el benchmark, y qué le pasa al puntaje de un modelo de referencia al aplicarla.

**Paso 3 — Lee el hallazgo central de "The Leaderboard Illusion"**

Identifica el mecanismo exacto de distorsión que documentan — no es que los modelos grandes sean mejores, es que el PROCESO de evaluación los favorece estructuralmente.

**Paso 4 — Investiga cómo evalúa modelos un equipo de ingeniería real**

Busca el blog técnico oficial de GitHub sobre cómo evalúan modelos para Copilot — el post técnico real de su equipo de ingeniería, no marketing.

## 6. Error inducido en vivo

Antes de abrir la fuente oficial de OSI sobre la licencia de Llama por su URL correcta, intenta acceder con la variante británica de "licencia" en la URL ("licence" en vez de "license" — un error ortográfico real y común para un hispanohablante escribiendo en inglés).

```bash
curl -s -o /dev/null -w "HTTP %{http_code}\n" https://opensource.org/blog/metas-llama-licence-is-still-not-open-source
```

Observa el código HTTP exacto que devuelve.

## 7. Comprensión

- ¿Por qué "puedo descargar los pesos gratis" y "open source" (definición OSI) no son lo mismo? Da el ejemplo concreto de Llama.
- Con el hallazgo de MMLU-CF: si un modelo tiene 90% en MMLU original, ¿qué pregunta deberías hacerte antes de confiar en esa cifra?
- ¿Por qué GitHub construye miles de tests propios en vez de simplemente mirar un leaderboard público?

## 8. Puntos de verificación

☐ Completé la auditoría de licencias de las 5 familias, con fuente oficial citada.
☐ Leí el hallazgo de contaminación de MMLU-CF con la cifra exacta.
☐ Leí el hallazgo de distorsión de "The Leaderboard Illusion" con la cifra exacta.
☐ Investigué el proceso real de evaluación de un equipo de ingeniería.
☐ Reproduje el error inducido en vivo (URL con error ortográfico) y confirmé el código HTTP real, contrastándolo con el de la URL correcta.

## 9. Diagnóstico de errores

*Checklist de categorías revisada: laboratorio de investigación — ninguna de las 7 categorías estándar aplica; no hay instalación de software.*

| Error | Por qué aparece | Cómo se diagnostica | Cómo se comprueba la hipótesis | Cómo se soluciona | Cómo se previene |
|---|---|---|---|---|---|
| Asumí que un modelo era "open source" porque es descargable gratis | Confundir "pesos públicos" con "licencia open source" — son independientes. | Revisa el archivo LICENSE exacto, no el botón de descarga. | Busca si la licencia está en la lista aprobada por OSI (opensource.org/licenses). | Verifica la licencia exacta antes de asumir uso libre. | Tratar "descargable" y "open source" como preguntas separadas, siempre. |
| Elegí un modelo solo por su posición en un leaderboard | El leaderboard puede reflejar ventaja de acceso a datos más que capacidad real en tu tarea. | Pregúntate si el leaderboard mide algo parecido a tu caso de uso. | Compara contra un benchmark específico a tu dominio, o construye tus propias pruebas. | Usa el leaderboard como punto de partida, nunca como veredicto final. | Adoptar el hábito de GitHub/Ramp/Zapier: mini-arnés propio antes de decidir. |
| `curl` a `opensource.org/blog/metas-llama-licence-is-still-not-open-source` devuelve HTTP 404 (error inducido en vivo) | "licence" (ortografía británica) no corresponde a la URL real, que usa "license" (ortografía americana). | Compara el código HTTP de la URL con el error ortográfico (404) contra el de la URL real (200). | Repite el comando con la URL exacta citada en los recursos y confirma que pasa de 404 a 200. | Copia siempre la URL exacta desde una fuente confiable, nunca la teclees de memoria. | Verificar la URL exacta de cualquier fuente ANTES de citarla — el mismo hábito que este laboratorio exige para auditar licencias. |

## 10. Mini laboratorio

Elige un modelo que no hayas auditado en el Paso 1 (una familia nueva) y repite la auditoría de licencia completa.

## 11. Desafío

Diseña una mini batería de 3-5 pruebas propias (siguiendo el patrón de GitHub Copilot/Ramp/Zapier) para elegir un modelo para tu columna vertebral local — no las ejecutes todavía, justifica por qué cada una revela algo que un leaderboard genérico no revelaría.

## 12. Buenas prácticas profesionales

- Verifica la licencia oficial de cualquier modelo antes de usarlo en un contexto comercial o de escala.
- No confíes en la posición de un leaderboard público como criterio suficiente.
- Cuando un resultado parezca sospechosamente bueno, busca activamente una explicación de proceso antes de aceptarlo como capacidad real.

## 13. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Tag |
|---|---|---|---|---|---|---|
| [Meta's Llama license is still not open source](https://opensource.org/blog/metas-llama-license-is-still-not-open-source) | Open Source Initiative | EN | ~10 min | Introductorio | La autoridad que define "open source" desde 1998. | 🟢 Antes |
| [MMLU-CF](https://arxiv.org/pdf/2412.15194) | arXiv 2412.15194 | EN | ~25 min | Avanzado | Evidencia académica de contaminación de datos en el benchmark más citado. | 🔵 Durante |
| [The Leaderboard Illusion](https://arxiv.org/abs/2504.20879) | Kapoor et al., arXiv 2504.20879 | EN | ~25 min | Avanzado | Distorsión estructural de Chatbot Arena a favor de laboratorios grandes. | 🔵 Durante |
| [How we evaluate models for GitHub Copilot](https://github.blog/ai-and-ml/generative-ai/how-we-evaluate-models-for-github-copilot/) | GitHub Engineering | EN | ~15 min | Intermedio | Ejemplo real de evaluación profesional más allá de cualquier leaderboard. | 🟣 Después |

## Evaluación

**Lo esencial en una frase:** "open source" y "lidera el leaderboard" son afirmaciones que hay que auditar, nunca aceptar por repetición.

**Las siete capacidades de dominio:**
1. **Explicar** — la diferencia precisa entre "pesos descargables" y "open source" en sentido OSI, con el caso de Llama.
2. **Predecir** — qué le pasaría al puntaje de un modelo si se eliminara la contaminación de datos.
3. **Detectar errores** — reconocer que una URL con un solo error ortográfico produce un fallo real de acceso (HTTP 404), no una versión aproximada de la fuente — error inducido en vivo.
4. **Corregir** — auditar la licencia real de un modelo antes de asumir uso libre.
5. **Modificar** — repetir la auditoría con una familia de modelo nueva (mini laboratorio).
6. **Aplicar en contexto nuevo** — diseñar una batería de evaluación propia (desafío).
7. **Usar en un proyecto** — el criterio de selección construido hoy es lo que M4 (Juicio de ecosistema) exige aplicar sistemáticamente más adelante.

**Repetir desde cero, sin guía:** audita la licencia real de un modelo nunca visto en este laboratorio, citando la fuente oficial exacta.

**Pregunta metacognitiva de proceso:** ¿qué asumías, antes de hoy, sobre "open source" o "el mejor modelo del ranking", que resultó menos preciso de lo que creías?
