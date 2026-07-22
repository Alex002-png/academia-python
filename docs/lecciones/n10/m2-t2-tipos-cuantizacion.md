# N10.M2.T2 — Tipos de cuantización en el ecosistema GGUF y cómo elegir

*Construido bajo DOC-12 v1.0.0. Investigación pedagógica: `docs/investigacion/n10-m2-cuantizacion-optimizacion.md`.*

**La gran pregunta de este laboratorio:** con más de una decena de tipos de cuantización disponibles, ¿cómo eliges el correcto para TU caso — con datos, no con la recomendación de un foro?

**Entorno objetivo:** terminal local + RTX 5070 como referencia; ruta CPU-only documentada como comparación.

**Fluencia de terminal asumida:** completa (M1 + M2.T1).

**Prerrequisitos técnicos:** M2.T1 completo; espacio en disco para 3 variantes del mismo modelo.

**Prerrequisitos conceptuales:** M1.T2 (API REST, reutilizada para automatizar la comparación).

**Duración estimada — desglosada:** contexto (~15 min) + descarga de 3 quant types (~20 min) + diseño de batería de prompts (~15 min) + comparación con evidencia (~25 min) + error inducido en vivo (~10 min) + evaluación (~10 min) → **total realista: 100-115 min.**

**Nivel de dificultad:** intermedio.

**Fuera de alcance de este laboratorio (y por qué):** medición cuantitativa de velocidad/VRAM se cubre en el Laboratorio 7. AWQ/GPTQ (algoritmos de cuantización fuera de GGUF) se mencionan solo como profundización, sin práctica — fuera del alcance de DOC-10 §8 para este nivel.

**Conexión con el laboratorio anterior y el siguiente:** M2.T1 dio el modelo mental general de cuantizar. Este laboratorio entra al detalle real del ecosistema GGUF. Deja abierta la pregunta que el Laboratorio 7 resuelve: ya sabes elegir cualitativamente — ¿cómo mides con metodología real, no solo con impresión, el efecto de esa elección en tu propio hardware?

---

## 1. Objetivo

Al terminar vas a poder distinguir los principales tipos de cuantización GGUF, explicar el criterio real para elegir entre ellos, y medir con tu propia batería de prompts la diferencia de calidad entre dos quant types del mismo modelo.

## 2. Contexto

Elegir un quant type no es "¿cuál es mejor?" en abstracto — es una pregunta de ingeniería con restricciones reales: cuánta VRAM tienes, cuánta degradación de calidad puedes tolerar, y qué tan rápido necesitas que responda.

## 3. Requisitos

- M2.T1 completo.
- Espacio en disco para 3 variantes del mismo modelo (15-25GB combinados).

☐ **Checkpoint 0 —** identificaste al menos 2 tags de cuantización distintos disponibles para un modelo que ya usaste.

## 4. Explicación conceptual

Según la tabla oficial de Hugging Face (verificada por fetch directo), el ecosistema GGUF tiene dos familias: los tipos "legacy" (Q4_0, Q4_1, Q5_0, Q5_1, Q8_0 — la propia HF los marca ya como "not used widely as of today") y la familia K-quant más reciente (Q2_K a Q6_K), con super-bloques de mayor precisión por bloque. Bits-por-peso oficiales: Q4_K ≈ 4.5 bpw, Q5_K ≈ 5.5 bpw, Q6_K ≈ 6.5625 bpw, Q2_K ≈ 2.625 bpw — números reales, no los enteros redondos que sugieren sus nombres. Q4_K_M reserva más precisión (Q6_K) para los tensores que más impactan calidad (`attention.wv`, `feed_forward.w2`) y usa Q4_K para el resto.

**Modelo mental de hoy:** la familia de quant types no es una escala de "peor a mejor" — es un menú de compromisos.

⚠️ La cifra que circula en blogs ("~75% menos tamaño, ~3.5% menos calidad" para Q4_K_M vs. FP16) NO es una medición oficial de llama.cpp ni de Hugging Face. Este laboratorio no te pide creerla: te pide medir tú mismo.

## 5. Ejecución paso a paso

**Paso 1 — Descarga el mismo modelo en 3 quant types distintos**

```
ollama pull llama3.2:q4_K_M
ollama pull llama3.2:q5_K_M
ollama pull llama3.2:q8_0
```

**Paso 2 — Diseña tu batería de prompts ANTES de comparar**

```python
prompts_prueba = [
    "Si tengo 17 manzanas y regalo 5, luego compro el doble de las que me quedan, ¿cuántas tengo?",
    'Responde ÚNICAMENTE con un JSON válido: {"pais": ..., "capital": ...} para Perú.',
    "¿En qué año se fundó la ONU? Responde solo con el número."
]
```

**Paso 3 — Ejecuta la batería completa contra los 3 quant types**

```python
import requests

for modelo in ["llama3.2:q4_K_M", "llama3.2:q5_K_M", "llama3.2:q8_0"]:
    print(f"--- {modelo} ---")
    for prompt in prompts_prueba:
        r = requests.post("http://localhost:11434/api/generate",
            json={"model": modelo, "prompt": prompt, "stream": False})
        print(r.json()["response"])
```

## 6. Error inducido en vivo

```
ollama pull llama3.2:q9_K_XL
```

Intenta descargar un tag de cuantización inventado. Observa el error exacto.

## 7. Comprensión

- ¿En qué se diferencia este error del error de nombre de modelo inexistente del Laboratorio 1?
- Dado que Q8_0 es casi indistinguible de FP16 pero pesado y lento, ¿cuándo lo elegirías de todos modos?
- ¿Por qué K_M reserva más bits a las capas de atención en vez de cuantizar todo parejo?

## 8. Puntos de verificación

☐ Descargaste el mismo modelo en 3 quant types.
☐ Diseñaste la batería de prompts antes de comparar.
☐ Ejecutaste la batería completa y tienes las 9+ respuestas registradas.
☐ Identificaste al menos una diferencia real de calidad.
☐ Reprodujiste el error de tag inexistente.

## 9. Diagnóstico de errores

| Error | Por qué aparece | Cómo se diagnostica | Cómo se comprueba la hipótesis | Cómo se soluciona | Cómo se previene |
|---|---|---|---|---|---|
| No noto diferencia entre quant types | Puede ser un resultado real — la degradación de Q4_K_M puede ser imperceptible para un modelo pequeño con prompts poco exigentes. | Revisa si tu batería realmente estresa razonamiento/formato. | Prueba con un problema de más pasos o un formato más estricto. | Si persiste sin diferencia, es un hallazgo válido — repórtalo así. | Diseñar la batería pensando en qué tarea revela degradación primero. |
| Los tamaños no coinciden con la proporción de bpw esperada | Metadata y componentes no cuantizados no escalan con los pesos. | Compara la magnitud de la discrepancia (5-15% esperable). | Verifica el quant type real con `ollama show` o `gguf-dump` (Laboratorio 4). | Confirma quant types reales antes de concluir. | Verificar siempre vía metadata, no solo el nombre del tag. |
| `pull model manifest: file does not exist` con tag inventado | El tag de cuantización específico no existe para ese modelo, aunque el modelo base sí. | Mismo tipo de mensaje que el error de modelo inexistente, pero causa distinta (tag, no modelo). | Revisa la lista de tags publicados en ollama.com/library. | Usa un tag realmente publicado. | Verificar tags disponibles antes de asumir que existen. |

## 10. Mini laboratorio

Añade un cuarto quant type (por ejemplo Q3_K_M o Q6_K) y repite la misma batería — ¿dónde se ubica en la curva de calidad?

## 11. Desafío

Dado un caso de uso ("asistente de código con precisión de formato crítica, en tu RTX 5070"), justifica con tus datos del Paso 3 qué quant type elegirías.

## 12. Buenas prácticas profesionales

- Diseña la batería antes de comparar, nunca después.
- No confíes en cifras de calidad de terceros sin verificar su origen.
- Guarda tu batería de prompts — se reutiliza en el Laboratorio 7 y en el cierre de M2.

## 13. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Tag |
|---|---|---|---|---|---|---|
| [GGUF — Hugging Face Hub docs](https://huggingface.co/docs/hub/en/gguf) | Hugging Face | EN | ~15 min | Intermedio | Fuente oficial de los bpw exactos citados. | 🟢 Antes |
| [llama.cpp — tools/quantize](https://github.com/ggml-org/llama.cpp/tree/master/tools/quantize) | ggml-org | EN | ~15 min | Intermedio | Cómo se producen realmente los quant types. | 🔵 Durante |

## Evaluación

**Lo esencial en una frase:** los quant types de GGUF son un menú de compromisos, no un ranking — la única forma confiable de elegir es medir con una batería diseñada, no con una cifra de blog sin verificar.

**Las siete capacidades de dominio:** explicar (familias legacy vs. K-quant con bpw reales) · predecir (qué tarea revela degradación primero) · detectar errores (comparación mal diseñada con un solo prompt) · corregir (el error de tag inexistente) · modificar (mini laboratorio con un cuarto quant type) · aplicar en contexto nuevo (justificar una elección para un caso descrito) · usar en un proyecto (batería reutilizable en T3 y T4).

**Repetir desde cero, sin guía:** diseña una batería nueva y compara dos quant types no comparados antes.

**Pregunta metacognitiva de proceso:** ¿qué tan segura te habría dejado la cifra de blog si no hubieras medido tú mismo?
