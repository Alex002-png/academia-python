# N10.M2.T4 — Laboratorio integrador: elegir y justificar (cierra M2)

*Construido bajo DOC-12 v1.0.0. Investigación pedagógica: `docs/investigacion/n10-m2-cuantizacion-optimizacion.md`. Laboratorio de cierre de M2 — integra M1 y M2 completos en su desafío.*

**La gran pregunta de este laboratorio:** dado un caso de uso real con restricciones concretas, ¿qué quant type eliges — y puedes defenderlo con datos, no con intuición?

**Entorno objetivo:** terminal local, RTX 5070.

**Fluencia de terminal asumida:** completa (M1 + M2.T1-T3).

**Prerrequisitos técnicos:** M2.T1-T3 completos, con tablas de datos de T3 a mano.

**Prerrequisitos conceptuales:** M1 completo (runtime y GGUF) y M2.T1-T3 (cuantización y medición).

**Duración estimada — desglosada:** repaso de datos ya producidos (~10 min) + caso de uso 1: latencia (~20 min) + caso de uso 2: calidad de formato (~20 min) + diagnóstico del caso límite (~25 min) + evaluación y cierre (~15 min) → **total realista: 90-100 min.**

**Nivel de dificultad:** intermedio, integrador — sin contenido técnico nuevo.

**Fuera de alcance de este laboratorio (y por qué):** nada nuevo — integra exclusivamente M1 y M2 ya construidos.

**Conexión con el laboratorio anterior y el siguiente:** M2.T3 dio metodología de medición real. Este laboratorio integra M1+M2 completos en decisiones defendibles, el mismo tipo de decisión que el capstone exigirá. Deja abierta la pregunta que M3 resuelve: ya sabes elegir con datos de rendimiento — ¿por qué el hardware produce exactamente esos números que mediste?

---

## 1. Objetivo

Al terminar vas a poder, dado un caso de uso con restricciones explícitas, elegir un quant type y justificarlo con datos propios ya producidos, y diagnosticar correctamente el caso límite de un modelo que no cabe en 12GB.

## 2. Contexto

M2.T1 dio el modelo mental; T2 el criterio cualitativo; T3 la metodología de medición. Hoy integras los tres en decisiones reales, del mismo tipo que tomarás en el capstone — nunca "cuál es el mejor quant type" en abstracto, siempre "cuál es el mejor para ESTA restricción, con ESTOS datos".

## 3. Requisitos

- M2.T1-T3 completos, con tus tablas de datos de T3 a mano.
- Los 3 quant types del Laboratorio 6 todavía descargados.

☐ **Checkpoint 0 —** tienes acceso a tus datos ya producidos en T2 (batería de prompts) y T3 (tabla de rendimiento).

## 4. Explicación conceptual

**Modelo mental de cierre de M2:** el ingeniero de inferencia local negocia, con datos, entre tres fuerzas que compiten simultáneamente — tamaño, velocidad y calidad. No existe una respuesta universalmente correcta, solo la mejor respuesta para una restricción dada, defendible con evidencia.

## 5. Ejecución paso a paso

**Paso 1 — Caso de uso 1: restricción de latencia dura**

"Tu columna vertebral necesita responder en menos de 1.5 segundos por interacción corta, en tu RTX 5070. La calidad puede ceder un poco." Usando tus datos reales de T3, decide y justifica con la cifra exacta que lo respalda.

**Paso 2 — Caso de uso 2: restricción de calidad de formato estricta**

"Tu columna vertebral necesita producir JSON válido de forma consistente — un solo error rompe el pipeline. La latencia importa menos." Usando tus datos reales de T2, decide y justifica con la evidencia específica del prompt de formato.

**Paso 3 — Diagnostica el caso límite**

```python
parametros = 30_000_000_000
bpw_q2k = 2.625
gb_estimado = parametros * bpw_q2k / 8 / (1024**3)
print(f"Q2_K estimado: ~{gb_estimado:.1f} GB — más overhead de KV cache y sistema")
```

Elige un modelo mucho más grande y determina, ANTES de intentar cargarlo, si cabría incluso en la cuantización más agresiva razonable.

**Paso 4 — Propón y verifica la mejor alternativa práctica**

```
./build/bin/llama-cli -m ruta/a/version_mas_chica.gguf -ngl 999 -c 4096
```

Con el modelo del Paso 3 confirmado como no viable, propón una alternativa concreta (modelo más pequeño, quant type más agresivo, offload parcial) y verifícala realmente.

## 6. Error inducido en vivo

```
./build/bin/llama-cli -m ruta/al/modelo_grande.gguf -ngl 999
```

Antes de aplicar la alternativa del Paso 4, confirma tu diagnóstico del Paso 3 de la forma más directa: intenta cargar de verdad el modelo que calculaste que no cabría. Observa si tu predicción de papel coincide con el fallo real.

## 7. Comprensión

- ¿Por qué las decisiones del Caso 1 y el Caso 2 fueron distintas, partiendo del mismo conjunto de quant types?
- ¿Qué tres componentes del "presupuesto" de 12GB consideraste en el Paso 3, más allá del tamaño del archivo?
- Si hubieras optado por offload parcial CPU/GPU en vez de un modelo más chico, ¿qué esperarías que le pasara a la velocidad?

## 8. Puntos de verificación

☐ Decisión del Caso 1, con cifra exacta de T3.
☐ Decisión del Caso 2, con evidencia exacta de T2, distinta a la del Caso 1.
☐ Diagnosticaste correctamente que el modelo del Paso 3 no cabe, antes de intentar cargarlo.
☐ Confirmaste tu diagnóstico contra el fallo real.
☐ Verificaste realmente una alternativa que sí funciona.

## 9. Diagnóstico de errores

| Error | Por qué aparece | Cómo se diagnostica | Cómo se comprueba la hipótesis | Cómo se soluciona | Cómo se previene |
|---|---|---|---|---|---|
| Mi predicción de que no cabría no coincidió con la realidad | El cálculo del Paso 3 es una aproximación que no incluye todos los factores. | Compara tu estimación contra el uso real de VRAM con el modelo cargado. | Revisa si usaste el bpw correcto del quant type real. | Ajusta la estimación con el dato observado. | Tratar toda estimación sin carga real como hipótesis a confirmar. |
| Elegí el mismo quant type para ambos casos, sin diferenciar | No se usó la evidencia específica de cada caso. | Revisa si tu justificación cita evidencia distinta para cada caso. | Relee las restricciones — ¿priorizan lo mismo? | Rehaz la decisión citando evidencia específica. | Leer la restricción completa antes de decidir. |
| Propuse una alternativa pero nunca la verifiqué | Más rápido afirmar que verificar. | Revisa si tienes evidencia real de que funciona. | Intenta cargar realmente la alternativa propuesta. | Ejecuta la verificación real. | Nunca dar por bueno un resultado sin comprobarlo. |

## 10. Mini laboratorio

Repite los Pasos 1-2 con un tercer caso de uso que definas tú mismo, con una restricción distinta (ej. mínimo consumo de VRAM porque otra aplicación corre en paralelo).

## 11. Desafío

Escribe, en menos de una página, un informe de decisión real para el stack de runtime + cuantización de tu capstone, citando explícitamente qué evidencia de M1 y M2 (dirección exacta) respalda cada elección.

## 12. Buenas prácticas profesionales

- Nunca decidas un quant type sin poder citar el dato exacto que lo respalda.
- Diagnostica el presupuesto de VRAM antes de intentar cargar un modelo grande.
- Guarda tus decisiones de M2 — son el primer borrador de una decisión real del capstone.

## 13. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Tag |
|---|---|---|---|---|---|---|
| [GGUF — Hugging Face Hub docs](https://huggingface.co/docs/hub/en/gguf) | Hugging Face | EN | ~15 min | Intermedio | Releerla ahora con datos propios en mano. | 🟣 Después |
| [llama.cpp — tools/quantize](https://github.com/ggml-org/llama.cpp/tree/master/tools/quantize) | ggml-org | EN | ~15 min | Intermedio | Referencia para el informe del desafío. | 🟣 Después |

## Evaluación

**Lo esencial en una frase:** cuantizar no es "hacer el modelo peor para que quepa" — es una decisión de ingeniería con trade-off medible en tres ejes, y el buen ingeniero es el que midió, no el que adivinó.

**Las siete capacidades de dominio:** explicar (por qué dos casos justifican dos elecciones distintas) · predecir (si un modelo cabrá antes de intentarlo) · detectar errores (decisión no justificada) · corregir (citando el dato real) · modificar (tercer caso de uso propio) · aplicar en contexto nuevo (verificar el fallo real del Paso 3) · usar en un proyecto (informe del desafío, insumo directo del capstone).

**Repetir desde cero, sin guía:** decide un quant type para un caso de uso nuevo, citando qué tipo de evidencia usarías.

**Pregunta metacognitiva de proceso:** ¿cuál de los dos casos de uso se sintió más difícil de decidir, y por qué — falta de datos, o dificultad de priorizar entre ejes que compiten?
