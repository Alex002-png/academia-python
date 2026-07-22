# N10.M4.T1 — Criterios de evaluación de herramientas del ecosistema local

*Construido bajo DOC-12 v1.0.0. Investigación pedagógica: `docs/investigacion/n10-m4-juicio-ecosistema.md`.*

**La gran pregunta de este laboratorio:** ¿cómo decides, con criterios declarados de antemano, qué herramienta usar — en vez de con la opinión de un foro?

**Entorno objetivo:** terminal local + investigación de documentación/repositorios reales.

**Fluencia de terminal asumida:** completa (M1-M3).

**Prerrequisitos técnicos:** M1-M3 completos.

**Prerrequisitos conceptuales:** experiencia real con Ollama y llama.cpp, base para evaluar una tercera herramienta con criterio informado.

**Duración estimada — desglosada:** contexto (~15 min) + definición de criterios propios (~20 min) + investigación real de 3 herramientas (~30 min) + error inducido en vivo (~10 min) + evaluación (~15 min) → **total realista: 85-100 min.**

**Nivel de dificultad:** intermedio.

**Fuera de alcance de este laboratorio (y por qué):** construcción de prototipo y medición real se cubre en el Laboratorio 15 (M4.T2).

**Conexión con el laboratorio anterior y el siguiente:** M3 completo dejó al estudiante entendiendo runtime, cuantización y hardware a fondo. Este laboratorio abre la última competencia del nivel: evaluar con criterio. Deja abierta la pregunta que el Laboratorio 15 resuelve: ¿cómo se mide esto con un prototipo real, no solo con investigación de documentación?

---

## 1. Objetivo

Al terminar vas a poder definir criterios explícitos para evaluar una herramienta del ecosistema de IA local, y aplicarlos a un primer barrido comparativo de 3 herramientas reales (Ollama, llama.cpp, vLLM) con evidencia investigada.

## 2. Contexto

El ecosistema de IA local cambia constantemente. Enseñarte "usa Ollama" envejece mal. Enseñarte "así se evalúa cualquier herramienta nueva" no envejece — es la competencia que sobrevive a cualquier herramienta específica de hoy.

## 3. Requisitos

- M1-M3 completos.
- Acceso para investigar documentación/repositorios de GitHub reales.

☐ **Checkpoint 0 —** tienes acceso a internet para investigar documentación real.

## 4. Explicación conceptual

**Modelo mental de hoy:** evaluar herramientas es un comité de contratación, no una encuesta de popularidad — criterios declarados ANTES de investigar, evidencia contra cada criterio, decisión justificada al final. Criterios candidatos: rendimiento medible, facilidad de integración, madurez/mantenimiento activo, licencia, comunidad — y uno que el marketing rara vez destaca: **compatibilidad verificable con TU hardware exacto**, no con "GPUs NVIDIA" en abstracto.

## 5. Ejecución paso a paso

**Paso 1 — Define tus criterios ANTES de investigar**

Escribe, por adelantado, qué vas a evaluar y por qué cada criterio importa para tu caso de uso.

**Paso 2 — Investiga vLLM en su documentación oficial**

```
# Revisa: https://docs.vllm.ai/ y https://github.com/vllm-project/vllm
# Busca: requisitos de sistema operativo, requisitos de CUDA, y si hay algo
# documentado sobre tu arquitectura de GPU exacta (Blackwell / RTX 50-series)
```

**Paso 3 — Aplica tus criterios a las 3 herramientas, con evidencia citada**

Para cada criterio, escribe qué evidencia real respalda tu evaluación.

## 6. Error inducido en vivo

Busca en la documentación oficial de vLLM si soporta Windows de forma nativa. Lee la respuesta exacta antes de seguir — puede no ser lo que esperas después de lo fácil que fue instalar Ollama en M1.T1.

## 7. Comprensión

- ¿Por qué definir criterios antes de investigar cambia el resultado?
- ¿Por qué vLLM no tiene el mismo tipo de instalador de un clic que Ollama? ¿Qué tipo de usuario asume cada herramienta?
- ¿Por qué "compatibilidad con tu hardware exacto" es un criterio distinto de "rendimiento"?

## 8. Puntos de verificación

☐ Definí mis criterios ANTES de investigar.
☐ Investigué vLLM en su documentación oficial.
☐ Completé la tabla de 3 herramientas × mis criterios.
☐ Reproduje el error inducido en vivo (soporte Windows de vLLM).

## 9. Diagnóstico de errores

| Error | Por qué aparece | Cómo se diagnostica | Cómo se comprueba la hipótesis | Cómo se soluciona | Cómo se previene |
|---|---|---|---|---|---|
| Mis criterios favorecen, en retrospectiva, mi herramienta preferida | Sesgo de confirmación. | ¿Algún criterio podría desfavorecer tu opción preferida? | Pregúntate si elegirías los mismos criterios sin saber cuál prefieres. | Añade un criterio que pueda desfavorecerla. | Escribir criterios antes de usar las herramientas a fondo. |
| No encuentro documentación clara sobre Windows en vLLM | Información dispersa entre docs, issues y foros. | Revisa la sección de requisitos de sistema en la guía oficial de instalación. | Busca issues de GitHub recientes con "Windows"/"WSL". | Documenta lo que sí encontraste, con fuente exacta. | Aceptar que un ecosistema joven a veces da respuestas parciales. |

## 10. Mini laboratorio

Repite el Paso 2-3 con una cuarta herramienta (LM Studio o text-generation-webui) — aplica los mismos criterios.

## 11. Desafío

De tu tabla completa, identifica el criterio donde las herramientas obtuvieron evaluaciones más distintas — ¿por qué ese criterio separa tanto?

## 12. Buenas prácticas profesionales

- Define criterios antes de investigar, siempre.
- Cita la fuente exacta de cada evaluación.
- Documenta honestamente la incertidumbre real de un ecosistema joven.

## 13. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Tag |
|---|---|---|---|---|---|---|
| [vLLM — Documentación oficial (instalación)](https://docs.vllm.ai/en/latest/getting_started/installation/gpu.html) | vLLM Project | EN | ~20 min | Intermedio | Fuente oficial de requisitos de entorno. | 🟢 Antes |
| [vLLM: Easy, Fast, and Cheap LLM Serving](https://vllm.ai/blog/2023-06-20-vllm) | vLLM Project / UC Berkeley | EN | ~15 min | Introductorio | El objetivo declarado del proyecto. | 🔵 Durante |

## Evaluación

**Lo esencial en una frase:** evaluar con criterios declarados de antemano y evidencia citada es la competencia que sobrevive a cualquier herramienta específica de hoy.

**Las siete capacidades de dominio:** explicar (por qué definir criterios antes previene sesgo) · predecir (qué usuario asume cada herramienta) · detectar errores (criterios sesgados) · corregir (añadir criterio desfavorable) · modificar (repetir con una cuarta herramienta, mini laboratorio) · aplicar en contexto nuevo (identificar el criterio más discriminante, desafío) · usar en un proyecto (base directa de M4.T2-T3).

**Repetir desde cero, sin guía:** define criterios para una herramienta de cualquier dominio y aplícalos a 2 alternativas reales.

**Pregunta metacognitiva de proceso:** ¿en qué momento tu opinión inicial cambió al ver evidencia real, en vez de tu impresión previa?
