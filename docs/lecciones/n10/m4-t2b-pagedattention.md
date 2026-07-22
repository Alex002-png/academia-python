# N10.M4.T2b — PagedAttention en profundidad: la paginación de memoria virtual aplicada a servir LLMs

*Construido bajo DOC-12 v1.0.0, estándar de excelencia elevado. Investigación pedagógica adenda en `docs/investigacion/n10-m4-juicio-ecosistema.md`.*

**La gran pregunta de este laboratorio:** vLLM afirma resolver el desperdicio de memoria de servir LLMs con una idea tomada de sistemas operativos de los años 60 — ¿cómo, exactamente, y cuánto desperdicio real resuelve?

**Entorno objetivo:** terminal local + lectura del paper original de PagedAttention.

**Fluencia de terminal asumida:** completa (M4.T2).

**Prerrequisitos técnicos:** M4.T2 completo; acceso a internet.

**Prerrequisitos conceptuales:** N1.M5.T4 (memoria virtual del SO — la misma idea aplicada aquí).

**Duración estimada — desglosada:** contexto (~15 min) + lectura del mecanismo técnico (~30 min) + verificar la analogía con memoria virtual (~20 min) + calcular el desperdicio real (~20 min) + error inducido en vivo (~15 min) + evaluación (~10 min) → **total realista: 90-110 min.**

**Nivel de dificultad:** avanzado — segunda lectura de un paper de sistemas, con conexión directa a un concepto ya enseñado.

**Fuera de alcance de este laboratorio (y por qué):** implementar PagedAttention o modificar el código de vLLM — el foco es comprender el mecanismo con precisión, no reimplementarlo.

**Conexión con el laboratorio anterior y el siguiente:** M4.T2 te hizo usar vLLM sin entender su innovación central. Este laboratorio la explica con precisión. Deja abierta la pregunta que M4.T3 resuelve: ya entiendes por qué vLLM es rápido bajo concurrencia — ¿cómo integras todo esto en la decisión final de stack?

---

## 1. Objetivo

Al terminar vas a poder explicar cómo PagedAttention fragmenta el KV cache en bloques no contiguos, citar la cifra exacta de desperdicio que el paper reporta, y verificar que la analogía con memoria virtual es diseño explícito del paper.

## 2. Contexto

En M4.T2 usaste vLLM sin entender qué hace exactamente PagedAttention. Ya conoces la paginación de memoria virtual desde N1.M5.T4. Hoy descubres que esa misma idea, aplicada a servir LLMs, es literalmente lo que hace posible la ventaja de concurrencia que ya mediste (~44x más throughput).

## 3. Requisitos

- M4.T2 completo.
- Acceso a internet para leer el paper (arXiv 2309.06180).

☐ **Checkpoint 0 —** recuerdas el concepto de memoria virtual de N1.M5.T4.

## 4. Explicación conceptual

El paper original (Kwon et al., SOSP 2023) describe: vLLM "organiza el KV cache como bloques KV de tamaño fijo, como páginas en memoria virtual". Los bloques de una secuencia NO necesitan ser contiguos — se mapean mediante una tabla de bloques, análoga a la tabla de páginas de un SO. Esto elimina fragmentación interna (reservar de más "por si acaso") y externa (huecos dispersos).

**Cifra exacta que rompe la intuición de "optimización marginal":** el paper afirma que "solo el 20.4%-38.2% de la memoria del KV cache se usa para almacenar los estados de tokens reales en los sistemas existentes" — entre **61.8% y 79.6% de desperdicio**. Con batch=1 y secuencia=512, el desperdicio llega a **88%**. Con PagedAttention, el throughput mejora 2-4x.

**La analogía con memoria virtual está en el propio paper**, cita textual: "se puede pensar en los bloques como páginas, los tokens como bytes, y las solicitudes como procesos" — no es interpretación posterior.

## 5. Ejecución paso a paso

**Paso 1 — Lee el mecanismo técnico exacto**

Identifica la definición exacta de un bloque KV y por qué los bloques no necesitan ser contiguos.

**Paso 2 — Verifica la analogía con memoria virtual, palabra por palabra**

Localiza la cita textual exacta de la analogía en el paper.

**Paso 3 — Calcula el desperdicio real**

```python
kv_reservado_gb = 10
utilizacion_min, utilizacion_max = 0.204, 0.382

usado_min = kv_reservado_gb * utilizacion_min
usado_max = kv_reservado_gb * utilizacion_max
desperdicio_min = kv_reservado_gb - usado_max
desperdicio_max = kv_reservado_gb - usado_min
print(f"De {kv_reservado_gb}GB reservados, {usado_min:.1f}-{usado_max:.1f}GB se usan realmente")
print(f"Desperdicio real: {desperdicio_min:.1f}-{desperdicio_max:.1f}GB")
```

## 6. Error inducido en vivo

Predice el desperdicio de memoria de una reserva "por si acaso" (peor caso de longitud, conversación corta real). Después compara contra el 88% real que el paper reporta.

## 7. Comprensión

- ¿Tu predicción se acercó al 88% real, o lo subestimaste?
- ¿Por qué la tabla de bloques de PagedAttention es estructuralmente igual a la tabla de páginas de N1.M5.T4?
- Aplicado a tu RTX 5070 (12GB): ¿cuántos GB estarían desperdiciados en el peor caso sin PagedAttention?

## 8. Puntos de verificación

☐ Leí el mecanismo técnico exacto del bloque KV y la tabla de bloques.
☐ Localicé la cita textual exacta de la analogía con memoria virtual.
☐ Calculé el desperdicio real en GB para un caso concreto.
☐ Escribí mi predicción ANTES de ver la cifra real del 88%.

## 9. Diagnóstico de errores

| Error | Por qué aparece | Cómo se diagnostica | Cómo se comprueba la hipótesis | Cómo se soluciona | Cómo se previene |
|---|---|---|---|---|---|
| No encuentro la cita de la analogía | Los papers concentran la analogía central en abstract/introducción. | Revisa esas secciones primero. | Busca "virtual memory"/"paging" con Ctrl+F. | Localiza la cita exacta ahí. | Revisar siempre abstract+introducción antes de buscar en el cuerpo. |
| Mi cálculo no coincide con lo esperado | El 20.4%-38.2% es un rango, no un valor único. | Revisa si usas el extremo correcto del rango. | Calcula ambos extremos, no un solo valor. | Presenta el resultado como rango. | Nunca colapsar un rango reportado a un solo número sin justificación. |

## 10. Mini laboratorio

Calcula el desperdicio real para tu RTX 5070 completa (12GB) en el peor caso (88%, batch=1).

## 11. Desafío

Explica, con la cita exacta y las cifras reales, por qué la mejora de 44x en throughput bajo concurrencia tiene una explicación mecánica precisa.

## 12. Buenas prácticas profesionales

- Usa la cifra exacta reportada (incluido el rango), nunca una aproximación redondeada.
- Verifica si una analogía técnica proviene realmente de la fuente original.
- Conecta conceptos nuevos con modelos mentales ya dominados solo cuando la conexión sea real y verificable.

## 13. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Tag |
|---|---|---|---|---|---|---|
| [Efficient Memory Management for LLM Serving with PagedAttention](https://arxiv.org/abs/2309.06180) | Kwon et al., SOSP 2023 | EN | ~30 min | Avanzado | Paper original de vLLM/PagedAttention. | 🟢 Antes |

## Evaluación

**Lo esencial en una frase:** PagedAttention resuelve un desperdicio de memoria medido de hasta 88%, aplicando literalmente la paginación de memoria virtual del SO a bloques de KV cache.

**Las siete capacidades de dominio:** explicar (mecanismo de bloques KV) · predecir (desperdicio antes de ver la cifra real) · detectar errores (buscar en el lugar equivocado del paper) · corregir (presentar un rango como rango) · modificar (calcular desperdicio para tu propia GPU, mini laboratorio) · aplicar en contexto nuevo (conectar concurrencia con su causa mecánica, desafío) · usar en un proyecto (argumentar el valor de vLLM en el capstone con precisión).

**Repetir desde cero, sin guía:** explica el mecanismo de PagedAttention con la analogía de memoria virtual y la cifra real de desperdicio.

**Pregunta metacognitiva de proceso:** ¿cambia tu confianza en recomendar vLLM el entender exactamente qué problema resuelve y cuánto?
