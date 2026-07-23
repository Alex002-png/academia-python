# DOC-STD-01 — Estándar Institucional de Construcción de Temas (SCA v1.0)

## Control del documento

| Campo | Valor |
|---|---|
| **Document Key** | DOC-STD-01 · Tier T1 |
| **Versión / Estado** | **1.0.0** · ✅ Aprobado por el Director (2026-07-23) — estándar de calidad obligatorio para todo tema, existente o nuevo, de N0 a N12 |
| **Autoridad de origen** | Directiva del Director: "Sistema de Calidad Académica (SCA v1.0)" — el objetivo de la Academia deja de ser "completar el currículo" y pasa a ser construir, probablemente, la mejor academia de IA en español, comparable en profundidad con MIT/Stanford/CMU/Berkeley/ETH Zürich/DeepMind/OpenAI/Anthropic |
| **Depende de** | DOC-03 (modelo pedagógico, 14 momentos — ley intocable) · DOC-11 (estándar de autoría de lecciones, ya implementa varias de estas métricas: 7 capacidades de dominio, recursos recomendados, densidad horizontal) · DOC-12 (estándar de laboratorios de entorno real) |
| **Produce / desarrolla** | La tabla de 22 métricas que cualquier tema, nuevo o ya construido, debe superar antes de considerarse terminado — y la clasificación obligatoria A/B/C que determina su duración objetivo |
| **Naturaleza** | No reemplaza DOC-03/DOC-11/DOC-12 — los consolida bajo una sola pregunta de aceptación y añade lo que faltaba: la clasificación de dificultad por tema y el principio explícito "nunca rellenar, nunca acortar" |
| **Historial** | 1.0.0 (2026-07-23): primera versión, aprobada junto con DOC-STD-02 y DOC-STD-03 como paquete — traduce la directiva SCA v1.0 del Director en un estándar operativo |

---

## 0. La pregunta de aceptación

Ningún tema se considera terminado únicamente porque "funcione". Antes de declarar un tema completo, debe responder que sí a las 4 preguntas siguientes (Métrica 19-20 del SCA v1.0):

1. **¿Podría este tema competir con el mejor curso del mundo sobre este concepto?**
2. **¿Lo aprobaría un ingeniero senior sin reservas?**
3. **¿Pasaría una entrevista técnica difícil apoyándose solo en este tema?**
4. **¿Sigue siendo válido dentro de 2-3 años, o depende de una API/moda que puede desaparecer?**

Si la respuesta a cualquiera es "no", el tema sigue en desarrollo — sin importar cuántos días ya se le dedicaron.

## 1. Las 22 métricas (resumen operativo)

Cada métrica es una condición de aceptación, no una sugerencia. Referencia cruzada a dónde ya vive en la infraestructura existente cuando aplica:

| # | Métrica | Ya cubierto por | Qué falta verificar en cada tema |
|---|---|---|---|
| 1 | Profundidad conceptual (qué problema resuelve, por qué existe, qué fallaba antes, cómo evolucionó) | DOC-11 §0bis (investigación pedagógica específica) | Cita real, no genérica — MIT/CMU/Stanford + docs oficiales + papers cuando aplique |
| 2 | Intuición antes que formalismo | DOC-03 (14 momentos) | Analogía, ejemplo cotidiano, conflicto cognitivo, misconceptions — antes de cualquier definición |
| 3 | Formalización | DOC-11 Bloque 2-3 | Definiciones precisas, nomenclatura correcta, papers citables |
| 4 | Ejemplos en 4 niveles | Parcial (DOC-11 no fuerza 4 niveles explícitos) | Extremadamente simple → intermedio → real → industrial, en ese orden |
| 5 | Código: explicado + desde cero + profesional | DOC-11 Bloque 4 | Comparar ambas versiones explícitamente, no solo mostrarlas |
| 6 | Lectura de código ajeno | Parcial | Código real de un repositorio real, no un ejemplo inventado con estilo "ajeno" |
| 7 | Debugging real | DOC-11 (debugging como competencia propia desde v2.0.0) | Error real reproducible, nunca sintético "porque sí" |
| 8 | Comparación entre alternativas | Nuevo — no exigido explícitamente antes | Toda vez que existan alternativas reales, compararlas con criterio, no solo nombrarlas |
| 9 | Trade-offs / "¿cuándo NO usar esto?" | Nuevo | Todo tema con una herramienta/técnica cierra con su límite honesto |
| 10 | Casos reales de industria | DOC-11 §4bis (recursos) parcialmente | Empresa real, paper real, bug/issue/PR real — con fuente verificable, nunca inventado |
| 11 | Ejercicios en progresión real (6-7 escalones) | DOC-11 (escalera de ejercicios) | Completar → corregir → escribir desde cero → modificar → optimizar → diseñar → defender |
| 12 | Laboratorio que termina funcional | DOC-12 | Nunca ejercicios aislados — se siente como construir una pieza real |
| 13 | Aporte al proyecto de nivel | DOC-10 (proyecto de nivel) | Cada módulo aporta artefacto real al proyecto, nunca desconectado |
| 14 | Exámenes de tipos variados | Parcial | Conceptual + debugging + lectura + arquitectura + trade-offs + optimización, no solo código |
| 15 | Transferencia a contexto distinto | DOC-11 (Fase 2 de transferencia) | Verificar que el método generaliza, no que se memorizó el ejemplo |
| 16 | Investigación (leer/analizar/implementar/criticar papers) | Cuando el nivel lo permita | Obligatorio desde temas Nivel C en adelante |
| 17 | Dificultad intelectual, nunca artificial | DOC-11 §0 (mandato explícito) | Pensar/diseñar/comparar/justificar — nunca preguntas con trampa |
| 18 | Clasificación A/B/C y duración proporcional | **Nuevo — ver §2 de este documento** | Nunca rellenar, nunca acortar por debajo del piso de su categoría |
| 19-20 | Calidad institucional (pregunta de aceptación) | Ver §0 | — |
| 21 | El alumno parte de cero | DOC-03 (principios pedagógicos) | Nunca introducir terminología avanzada sin intuición previa construida |
| 22 | El criterio vale más que la memoria | DOC-11 (7 capacidades de dominio) | Al cerrar el tema: ¿por qué?/¿cuándo?/¿cuándo no?/¿qué alternativa?/¿qué pasa si cambio esta decisión? |

## 2. Clasificación obligatoria por tema

Antes de construir o expandir cualquier tema, se clasifica en una de tres categorías. La duración es el **piso**, nunca un objetivo fijo — si el tema real necesita menos, se queda en menos; si necesita más, se amplía sin límite artificial (mismo principio ya vigente en DOC-11 §2.0.1).

| Categoría | Rango | Ejemplos ya en la Academia |
|---|---|---|
| **A — Fundacional** | 3-5 días | Variables, tipos de datos, `print()`/`input()`, strings básicos, listas/diccionarios, pandas/NumPy básico |
| **B — Intermedio** | 6-9 días | OOP, FastAPI, JWT, SQL, Docker, árboles, SVM, regresión, CNN, embeddings, Vector DB, MCP, Kubernetes básico |
| **C — Avanzado/arquitectónico** | 12-18 días | Backpropagation, Transformers, RAG, LoRA, RLHF, Tool Calling, Agentes, sistemas distribuidos, CUDA, papers, diseño de sistemas |

**Regla de no relleno (obligatoria, sin excepción):** aumentar la duración de un tema nunca significa inventar ejercicios artificiales, repetir el mismo ejercicio cambiando números, agregar teoría redundante, o alargar tutoriales por alcanzar una cifra. Cada día adicional debe aportar una habilidad nueva o una comprensión significativamente más profunda — verificable contra la pregunta de aceptación de §0.

## 3. Aplicación

Este documento rige la construcción o expansión de todo tema desde su aprobación. La clasificación concreta, tema por tema, para cada nivel ya construido (N0-N12) vive en **DOC-STD-03** — este documento define el método; DOC-STD-03 aplica el método al contenido real.
