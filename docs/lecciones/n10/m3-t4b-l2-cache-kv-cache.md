# N10.M3.T4b — L2 cache y por qué el KV cache de tu conversación nunca vive ahí

*Construido bajo DOC-12 v1.0.0, estándar de excelencia elevado. Investigación pedagógica adenda en `docs/investigacion/n10-m3-gpu-cuda-memoria.md`.*

**La gran pregunta de este laboratorio:** tu RTX 5070 tiene ~48MB de caché L2, mucho más rápida que la VRAM — ¿por qué el KV cache de tu conversación, que también se lee constantemente, no vive ahí?

**Entorno objetivo:** terminal local + cálculo Python del tamaño real del KV cache.

**Fluencia de terminal asumida:** completa (M3.T4).

**Prerrequisitos técnicos:** M3.T4 completo; Python.

**Prerrequisitos conceptuales:** M3.T4 (VRAM creciendo con el contexto).

**Duración estimada — desglosada:** contexto (~20 min) + cálculo del KV cache real (~25 min) + comparación contra L2 (~15 min) + error inducido en vivo (~15 min) + mini laboratorio y desafío (~20 min) + evaluación (~10 min) → **total realista: 85-100 min.**

**Nivel de dificultad:** avanzado — conecta arquitectura de hardware con una decisión de diseño real de software.

**Fuera de alcance de este laboratorio (y por qué):** optimizaciones de atención que reducen el KV cache (MQA/GQA) se mencionan solo como puntero de profundización, sin implementarlas.

**Conexión con el laboratorio anterior y el siguiente:** M3.T4 midió cómo crece la VRAM con el contexto — eso ES el KV cache creciendo. Este laboratorio le pone nombre y cifra exacta. Deja abierta la pregunta que M3.T5 resuelve: ya sabes las tres líneas de gasto de VRAM — ¿cómo las integras en un diagnóstico completo cuando un modelo real no cabe?

---

## 1. Objetivo

Al terminar vas a poder calcular el tamaño real del KV cache de una conversación, compararlo contra el L2 real de tu GPU, y explicar por qué esto resuelve la pregunta de por qué decode sigue siendo memory-bound pese a cachés cada vez más grandes.

## 2. Contexto

Las GPUs recientes han crecido su L2 dramáticamente: Ada Lovelace saltó a 96MB, Blackwell datacenter llega a 192MB. Tu RTX 5070 tiene ~48MB (agregadores técnicos, no confirmado oficialmente). Si el L2 existe para reducir tráfico a VRAM, ¿por qué no resuelve el problema de memory-bound?

## 3. Requisitos

- M3.T4 completo.
- Python para el cálculo.

☐ **Checkpoint 0 —** tienes las dimensiones (capas, dimensión oculta) de un modelo que ya usaste.

## 4. Explicación conceptual

El KV cache de una conversación de tamaño moderado ya pesa varios GIGABYTES — órdenes de magnitud más grande que los 48-192MB de L2 de cualquier GPU actual. Fuentes técnicas serias (arXiv 2503.08311, guías de sizing) confirman sin ambigüedad: el KV cache vive necesariamente en VRAM global. El L2 amortigua parcialmente la presión de acceso, pero no elimina la dependencia fundamental. Investigación activa (HeadInfer, Oneiros) explora mover parte del KV cache incluso a RAM del sistema, fuera de VRAM, para contextos muy largos.

## 5. Ejecución paso a paso

**Paso 1 — Calcula el tamaño real del KV cache**

```python
capas = 32
dim_oculta = 4096
bytes_por_valor = 2  # FP16

for contexto in [512, 2048, 8192, 32768]:
    kv_bytes = 2 * capas * dim_oculta * contexto * bytes_por_valor
    kv_mb = kv_bytes / (1024**2)
    print(f"Contexto {contexto} tokens: KV cache = {kv_mb:.1f} MB")
```

Resultado real: ya 256MB con un contexto corto de 512 tokens (nada de "unos pocos MB" — el KV cache pesa más de lo que la intuición sugiere incluso al principio), creciendo a 1GB (2048), 4GB (8192) y 16GB (32768) — escala linealmente con el contexto.

**Paso 2 — Compara contra el L2 real de tu GPU**

```python
l2_mb = 48  # RTX 5070, agregadores técnicos
for contexto in [512, 2048, 8192, 32768]:
    kv_mb = (2 * 32 * 4096 * contexto * 2) / (1024**2)
    cabe_en_l2 = kv_mb < l2_mb
    print(f"Contexto {contexto}: KV={kv_mb:.1f}MB, ¿cabe en L2 ({l2_mb}MB)? {cabe_en_l2}")
```

## 6. Error inducido en vivo

Antes de confiar en la cifra de ~48MB de L2 usada en este laboratorio (ya declarada como no-oficial), intenta consultarla directamente desde tu propia GPU con la herramienta estándar de NVIDIA:

```bash
nvidia-smi --query-gpu=name,memory.total,l2_cache_size --format=csv
```

Observa el resultado exacto — no es lo que la mayoría espera la primera vez.

## 7. Comprensión

- ¿Qué mensaje exacto te dio nvidia-smi al pedir "l2_cache_size"? ¿Por qué una herramienta oficial de NVIDIA no expone como campo consultable un dato que sí aparece en agregadores técnicos?
- ¿Por qué 192MB de L2 (Blackwell datacenter) sigue sin ser suficiente para una conversación larga?
- Si HeadInfer/Oneiros mueven KV cache a RAM del sistema, ¿qué trade-off de latencia esperarías?

## 8. Puntos de verificación

☐ Calculé el KV cache para al menos 4 tamaños de contexto.
☐ Comparé contra el L2 real de mi GPU.
☐ Confirmé cuantitativamente que el KV cache excede el L2 en uso realista.
☐ Reproduje el error inducido en vivo y confirmé que nvidia-smi no expone el tamaño de L2 como campo consultable.

## 9. Diagnóstico de errores

| Error | Por qué aparece | Cómo se diagnostica | Cómo se comprueba la hipótesis | Cómo se soluciona | Cómo se previene |
|---|---|---|---|---|---|
| Mi cálculo no coincide con la VRAM medida en M3.T4 | La fórmula es una aproximación — no incluye overhead ni optimizaciones de atención. | Compara orden de magnitud, no valor exacto. | Revisa si el modelo usa GQA/MQA. | Ajusta la fórmula si confirmas la optimización. | Tratar fórmulas de estimación como modelos aproximados a verificar. |
| Mi cifra de L2 no coincide con otras fuentes | No confirmada en fuente oficial de NVIDIA. | Compara consistencia entre fuentes. | Busca confirmar con deviceQuery en tu propia GPU. | Usa la cifra confirmada en tu hardware si es posible. | Tratar cifras no oficiales con cautela declarada. |
| `nvidia-smi --query-gpu=...,l2_cache_size` da `Field "l2_cache_size" is not a valid field to query.` (error inducido en vivo) | nvidia-smi expone métricas de monitoreo (errores ECC de L2, uso de memoria) pero no el tamaño de L2 como especificación estática. | Ejecuta `nvidia-smi --help-query-gpu` y busca "l2" — solo aparecen campos de errores ECC. | Confirma que los campos de L2 existentes son de conteo de errores, no de tamaño. | Acepta que esta cifra no es verificable con esta herramienta — la misma razón por la que ya se trata con cautela declarada. | Verificar la lista real de campos consultables de una herramienta antes de asumir que expone toda especificación de hardware. |

## 10. Mini laboratorio

Calcula cuántos MB de L2 necesitaría una GPU hipotética para que el KV cache de 8192 tokens cupiera completo — compáralo contra el L2 real más grande (192MB).

## 11. Desafío

Investiga GQA/MQA (reduce KV cache 4-8x) y recalcula tu tabla asumiendo esa optimización — ¿cambia tu conclusión sobre si cabe en L2?

## 12. Buenas prácticas profesionales

- Calcula el tamaño real del KV cache antes de asumir que un contexto largo "debería caber sin problema".
- No asumas que una caché más grande resuelve automáticamente un cuello de botella de memoria.
- Declara la fuente y confianza de especificaciones de hardware no verificables oficialmente.

## 13. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Tag |
|---|---|---|---|---|---|---|
| [Mind the Memory Gap](https://arxiv.org/html/2503.08311v2) | arXiv 2503.08311 | EN | ~20 min | Avanzado | Confirmación de que KV cache vive en VRAM, no en L2. | 🟢 Antes |
| [Blackwell: Nvidia's Massive GPU](https://old.chipsandcheese.com/2025/06/28/blackwell-nvidias-massive-gpu/) | Chips and Cheese | EN | ~25 min | Avanzado | Análisis del crecimiento del L2 y su trade-off de latencia. | ⭐ Profundización |

## Evaluación

**Lo esencial en una frase:** el L2, por grande que haya crecido, sigue siendo órdenes de magnitud más pequeño que el KV cache real — decode sigue siendo memory-bound porque el dato a mover excede cualquier caché on-chip razonable.

**Las siete capacidades de dominio:** explicar (por qué el L2 no resuelve memory-bound) · predecir (si un contexto cabrá en L2) · detectar errores (nvidia-smi no expone el tamaño de L2 como campo consultable, error inducido en vivo) · corregir (ajustar por GQA/MQA) · modificar (L2 hipotético necesario, mini laboratorio) · aplicar en contexto nuevo (calcular con optimización de atención, desafío) · usar en un proyecto (línea de presupuesto de VRAM para M3.T5 y el capstone).

**Repetir desde cero, sin guía:** calcula el KV cache de un modelo y contexto distintos, comparando contra el L2 de tu GPU.

**Pregunta metacognitiva de proceso:** ¿qué asumías sobre "una caché más grande siempre ayuda" antes de este laboratorio?
