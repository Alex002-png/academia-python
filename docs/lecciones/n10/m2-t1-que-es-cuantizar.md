# N10.M2.T1 — Qué es cuantizar: de FP16/FP32 a enteros de baja precisión

*Construido bajo DOC-12 v1.0.0. Investigación pedagógica: `docs/investigacion/n10-m2-cuantizacion-optimizacion.md`.*

**La gran pregunta de este laboratorio:** ¿qué significa, realmente, reducir la precisión numérica de cada parámetro de un modelo — y por qué no lo destruye?

**Entorno objetivo:** terminal local + scripts Python para el cálculo teórico antes de tocar un modelo real.

**Fluencia de terminal asumida:** completa (M1 completo).

**Prerrequisitos técnicos:** M1 completo; Python 3.

**Prerrequisitos conceptuales:** M1.T1 (carga vs. inferencia) y M1.T4 (metadata GGUF, incluido el campo de tipo de cuantización que ya viste sin profundizar).

**Duración estimada — desglosada:** contexto y explicación conceptual (~15 min) + cálculo teórico de tamaño por precisión (~20 min) + comparación real de dos descargas del mismo modelo (~20 min) + error inducido en vivo (~10 min) + mini laboratorio y desafío (~15 min) + evaluación y cierre (~10 min) → **total realista: 85-100 min.**

**Nivel de dificultad:** introductorio-intermedio.

**Fuera de alcance de este laboratorio (y por qué):** los tipos específicos de cuantización GGUF (Q4_K_M, Q5_K_M, etc.) y cuándo elegir cada uno se cubren en el Laboratorio 6 (M2.T2), una vez que el estudiante ya domina el concepto general.

**Conexión con el laboratorio anterior y el siguiente:** M1 completo dejó al estudiante usando modelos ya cuantizados sin cuestionar qué significaba eso. Este laboratorio abre esa pregunta con la forma más simple: aritmética de tamaño. Deja abierta la pregunta que el Laboratorio 6 resuelve: si cuantizar es un concepto único, ¿por qué existe más de una decena de variantes distintas, y cómo se elige entre ellas?

---

## 1. Objetivo

Al terminar este laboratorio vas a poder explicar qué representa cuantizar los pesos de un modelo, por qué funciona sin destruirlo, calcular el tamaño teórico de un modelo a distintas precisiones, y verificar esa teoría contra una descarga real.

## 2. Contexto

Cada laboratorio de M1 usó modelos ya cuantizados sin que preguntaras qué significaba eso exactamente. Un modelo recién entrenado normalmente usa FP16 o FP32 — 16 o 32 bits por cada uno de sus miles de millones de parámetros. Un modelo de 7 mil millones de parámetros en FP16 pesa unos 14GB — no cabe cómodo en los 12GB de VRAM de tu RTX 5070 sin dejar margen para nada más. Cuantizar reduce esa precisión numérica deliberadamente — y el hallazgo que hace esto posible sin destruir el modelo es que los pesos entrenados de una red neuronal tienen redundancia real: no todos los bits de precisión originales cargan información igualmente útil para la tarea final.

## 3. Requisitos

- M1 completo.
- Python 3 para los cálculos.
- Espacio en disco para descargar el mismo modelo en dos precisiones distintas.

☐ **Checkpoint 0 —** tienes al menos un modelo ya descargado de M1 para usar como referencia.

## 4. Explicación conceptual

**Modelo mental de hoy:** cuantizar es como comprimir una fotografía. FP16 es la imagen sin comprimir. INT4 es un JPEG agresivo — mucho más liviano, con pérdida de detalle visible SI amplías al 800%, pero perfectamente reconocible y usable a tamaño normal. Con un modelo de lenguaje pasa algo estructuralmente parecido: reducir de 16 a 4 bits por parámetro no borra el conocimiento del modelo, reduce la precisión con la que ese conocimiento se representa numéricamente — y para la mayoría de tareas reales, esa pérdida es indetectable en la práctica, aunque SÍ es medible con las herramientas correctas (lo harás en el Laboratorio 7).

## 5. Ejecución paso a paso

**Paso 1 — Calcula el tamaño teórico de un modelo a distintas precisiones**

```python
parametros = 7_000_000_000
for bits, nombre in [(16,"FP16"), (8,"Q8"), (4,"Q4 aprox.")]:
    bytes_totales = parametros * bits / 8
    gb = bytes_totales / (1024**3)
    print(f"{nombre}: ~{gb:.1f} GB")
```

Deberías obtener FP16 ~13.0 GB, Q8 ~6.5 GB, Q4 aprox. ~3.3 GB — una reducción aproximadamente lineal con los bits.

**Paso 2 — Descarga el mismo modelo en dos precisiones distintas**

```
ollama list
# compara el tamaño real reportado contra tu cálculo teórico del Paso 1
```

**Paso 3 — Explica la diferencia entre tu cálculo teórico y el tamaño real**

Tu fórmula del Paso 1 asume todos los parámetros cuantizados uniformemente. La realidad de las cuantizaciones GGUF modernas (K-quant, Laboratorio 6) es más matizada: algunos tensores se cuantizan más agresivamente que otros. Tu cifra real debería ser ligeramente mayor que tu estimación uniforme de Q4.

## 6. Error inducido en vivo

```python
parametros = 70_000_000_000
bits = 2
gb = parametros * bits / 8 / (1024**3)
print(f"~{gb:.1f} GB solo en pesos, en la cuantizacion MAS agresiva razonable")
```

Calcula el tamaño teórico de un modelo de 70B en la cuantización más agresiva razonable (Q2, 2 bits) y compáralo contra tus 12GB de VRAM.

## 7. Comprensión

- ¿Por qué reducir de FP16 a Q4 no reduce el tamaño exactamente a la cuarta parte?
- Si cuantizar siempre pierde algo de precisión, ¿por qué la industria entera lo usa en producción?
- ¿Qué te dice el resultado del error inducido en vivo sobre por qué ningún modelo de 70B corre completo en una RTX 5070 de 12GB, sin importar cuánto lo cuantices?

## 8. Puntos de verificación

☐ Calculaste el tamaño teórico de un modelo a 3 precisiones distintas.
☐ Comparaste el cálculo teórico contra un tamaño real reportado por Ollama.
☐ Explicaste correctamente por qué difieren.
☐ Calculaste el caso límite de un modelo de 70B.

## 9. Diagnóstico de errores

| Error | Por qué aparece | Cómo se diagnostica | Cómo se comprueba la hipótesis | Cómo se soluciona | Cómo se previene |
|---|---|---|---|---|---|
| Mi cálculo teórico difiere mucho del tamaño real | El cálculo asume precisión uniforme; los modelos reales mezclan precisiones por tensor (K-quant) y añaden metadata. | Compara la magnitud: 10-20% es esperable, 2x o más sugiere un error de fórmula. | Recalcula usando el bpw oficial del quant type exacto (Laboratorio 6) en vez de un entero redondo. | Ajusta el cálculo con el bpw real. | Tratar el número en el nombre ("Q4") como aproximación, nunca como bpw exacto. |
| Confundí parámetros con tamaño de archivo | El conteo de parámetros describe la arquitectura, no un archivo específico. | Si tu fórmula usó un número del orden de gigabytes en vez de miles de millones, ahí está el error. | Verifica el conteo real de parámetros (en el nombre del modelo, ej. "7B"). | Usa el conteo real como base. | Mantener separados "parámetros de la arquitectura" (fijo) de "tamaño del archivo a una precisión dada" (variable). |

## 10. Mini laboratorio

Elige un modelo nuevo, busca su conteo real de parámetros, calcula su tamaño teórico en FP16/Q8/Q4, y verifica tu estimación contra el tamaño real reportado por Ollama.

## 11. Desafío

Sin descargar nada nuevo: usando tu fórmula y los 12GB de tu RTX 5070 como restricción (dejando 2GB de margen), calcula el conteo máximo de parámetros que un modelo podría tener en Q4 para caber completo. Compara contra lo que M1.T3 ya te mostró empíricamente que sí cabía.

## 12. Buenas prácticas profesionales

- Calcula el tamaño teórico antes de descargar un modelo nuevo y grande.
- Distingue siempre bits nominales del nombre de bpw real.
- Registra el conteo de parámetros de los modelos que uses regularmente.

## 13. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Tag |
|---|---|---|---|---|---|---|
| [GGUF — Hugging Face Hub docs](https://huggingface.co/docs/hub/en/gguf) | Hugging Face | EN | ~15 min | Introductorio | Tabla oficial con los bpw exactos que se profundizan en el Laboratorio 6. | 🟢 Antes |

## Evaluación

**Lo esencial en una frase:** cuantizar reduce la precisión numérica de los pesos, no el conocimiento del modelo — funciona por redundancia real en los pesos entrenados, y el tamaño resultante es aproximadamente proporcional a los bits usados, nunca exacto.

**Las siete capacidades de dominio:** explicar (por qué cuantizar no destruye el modelo) · predecir (tamaño aproximado antes de descargar) · detectar errores (confundir parámetros con tamaño de archivo) · corregir (ajustar el cálculo con bpw real) · modificar (aplicar la fórmula a un modelo nuevo, mini laboratorio) · aplicar en contexto nuevo (el desafío del límite de 12GB) · usar en un proyecto (base directa para M2.T2-T4 y el capstone).

**Repetir desde cero, sin guía:** calcula de memoria el tamaño teórico de un modelo de 13B en FP16, Q8 y Q4.

**Pregunta metacognitiva de proceso:** ¿qué se sintió más convincente — la fórmula matemática, o ver con tus propios ojos que un modelo cuantizado real seguía respondiendo con sentido en M1?
