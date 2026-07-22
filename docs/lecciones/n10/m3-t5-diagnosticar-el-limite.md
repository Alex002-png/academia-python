# N10.M3.T5 — Laboratorio integrador: diagnosticar el límite de 12GB (cierra M3)

*Construido bajo DOC-12 v1.0.0. Investigación pedagógica: `docs/investigacion/n10-m3-gpu-cuda-memoria.md`. Laboratorio de cierre de M3 — integra M1, M2 y M3 completos.*

**La gran pregunta de este laboratorio:** cuando un modelo real no cabe en tu RTX 5070, ¿puedes diagnosticar exactamente por qué, y verificar la mejor alternativa?

**Entorno objetivo:** terminal local, RTX 5070.

**Fluencia de terminal asumida:** completa (M1-M2, M3.T1-T4).

**Prerrequisitos técnicos:** M1, M2 y M3.T1-T4 completos.

**Prerrequisitos conceptuales:** el desglose de presupuesto de VRAM (pesos, KV cache, overhead) que M2 y M3 ya sembraron por separado.

**Duración estimada — desglosada:** repaso de M3.T1-T4 (~10 min) + elegir un modelo que no cabe (~15 min) + diagnóstico completo del presupuesto (~30 min) + verificar la mejor alternativa (~30 min) + evaluación (~15 min) → **total realista: 95-110 min.**

**Nivel de dificultad:** intermedio, integrador.

**Fuera de alcance de este laboratorio (y por qué):** nada nuevo — integra exclusivamente M1, M2 y M3 ya construidos.

**Conexión con el laboratorio anterior y el siguiente:** el Laboratorio 12 dio la pieza de batching/concurrencia. Este laboratorio cierra M3 completo con el diagnóstico más exigente de todo el módulo. Deja abierta la pregunta que M4 resuelve: ya sabes operar y diagnosticar TU stack — ¿cómo evalúas con criterio si otra herramienta del ecosistema sería mejor?

---

## 1. Objetivo

Al terminar vas a poder, dado un modelo que NO cabe en 12GB, diagnosticar exactamente por qué —citando M3.T1-T4— y proponer y VERIFICAR la mejor alternativa práctica.

## 2. Contexto

Este es exactamente el caso que la ficha de misión de este nivel exige: "cuando un modelo exceda las capacidades de una RTX 5070 de 12GB, explica claramente por qué ocurre y propone la mejor alternativa práctica". Hoy integras M1, M2 y M3 completos en el diagnóstico más exigente del módulo.

## 3. Requisitos

- M1, M2 y M3.T1-T4 completos.
- Acceso para descargar o calcular el tamaño de un modelo grande (30B+) deliberadamente inviable.

☐ **Checkpoint 0 —** tienes tus fórmulas de M2.T1 y tus mediciones de M3.T4 a mano.

## 4. Explicación conceptual

**Modelo mental de cierre de M3:** diagnosticar un fallo de memoria es como revisar un presupuesto que no cierra. Cada componente —pesos cuantizados (M2), KV cache del contexto activo (M3.T2/T4), overhead del runtime— es una línea de gasto contra un total fijo de 12GB. La solución pasa por reducir una línea o aumentar el presupuesto (offload parcial a RAM, más lento pero real). Ningún diagnóstico se acepta sin verificación real.

## 5. Ejecución paso a paso

**Paso 1 — Elige (o calcula) un modelo que deliberadamente no cabe**

```python
parametros = 32_000_000_000
bpw_q3k = 3.4375
gb = parametros * bpw_q3k / 8 / (1024**3)
print(f"Q3_K estimado: ~{gb:.1f} GB, contra 12GB disponibles")
```

**Paso 2 — Diagnostica las tres líneas de gasto exactas**

```python
pesos_gb = gb
kv_cache_estimado_gb = 1.5
overhead_gb = 1.0
total = pesos_gb + kv_cache_estimado_gb + overhead_gb
print(f"Presupuesto total: ~{total:.1f} GB — déficit: ~{total-12:.1f} GB")
```

**Paso 3 — Intenta cargarlo de verdad y confirma tu diagnóstico**

```
./build/bin/llama-cli -m ruta/al/modelo_grande.gguf -ngl 999
```

**Paso 4 — Propón y verifica la mejor alternativa**

```
# Ejemplo: offload parcial
./build/bin/llama-cli -m ruta/al/modelo_grande.gguf -ngl 40 -c 2048
```

## 6. Error inducido en vivo

```
./build/bin/llama-cli -m ruta/al/modelo_grande.gguf -ngl 999 -c 1024
```

Antes de aplicar tu alternativa del Paso 4, prueba una reducción DELIBERADAMENTE INSUFICIENTE (solo `-c`, sin tocar `-ngl`). Confirma si alcanza o si el error persiste.

## 7. Comprensión

- ¿Por qué el Paso 2 desglosa en tres líneas en vez de comparar solo "tamaño del modelo" contra 12GB?
- ¿Por qué reducir solo el contexto puede no bastar si el déficit está en los pesos?
- ¿Qué costo real (medido) tiene la alternativa de offload parcial?

## 8. Puntos de verificación

☐ Confirmé con cálculo teórico que el modelo no cabe, antes de intentarlo.
☐ Desglosé el presupuesto en las tres líneas.
☐ Confirmé el diagnóstico contra el fallo real.
☐ Reproduje el error de reducción insuficiente.
☐ Verifiqué una alternativa real, con medición de su costo en velocidad.

## 9. Diagnóstico de errores

| Error | Por qué aparece | Cómo se diagnostica | Cómo se comprueba la hipótesis | Cómo se soluciona | Cómo se previene |
|---|---|---|---|---|---|
| Reducir solo `-c` no resolvió el OOM | El déficit principal está en los pesos, no en el KV cache. | Revisa tu desglose — ¿cuál línea excede el margen? | Calcula cuánto reduce realmente `-c` la línea (b) vs. el déficit total. | Ataca la línea que realmente domina (reducir `-ngl`, modelo más chico, cuantización más agresiva). | Desglosar el presupuesto antes de elegir qué reducir. |
| Mi estimación no coincide con el punto exacto de fallo | Las estimaciones de KV cache/overhead son aproximaciones. | Compara la magnitud (10-20% esperable). | Verifica el bpw correcto de tu quant type específico. | Ajusta el modelo de estimación con datos reales. | Tratar toda estimación como aproximada, verificada empíricamente. |

## 10. Mini laboratorio

Repite el diagnóstico completo para un segundo modelo, con un déficit de magnitud distinta — ¿tu método generaliza?

## 11. Desafío — Laboratorio integrador de cierre de M3

Escribe un informe técnico corto documentando: modelo elegido, desglose del presupuesto, confirmación empírica del fallo, alternativa verificada y su costo medido. Cita explícitamente qué laboratorio de M1, M2 y M3 aporta cada pieza.

## 12. Buenas prácticas profesionales

- Diagnostica el presupuesto completo antes de intentar cargar un modelo grande nuevo.
- Nunca aceptes una alternativa sin verificarla.
- Identifica qué línea de gasto domina el déficit antes de elegir qué reducir.

## 13. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Tag |
|---|---|---|---|---|---|---|
| [llama.cpp — README (hybrid CPU+GPU processing)](https://github.com/ggml-org/llama.cpp) | ggml-org | EN | ~15 min | Intermedio | Documentación del offload parcial usado como alternativa. | 🟣 Después |

## Evaluación

**Lo esencial en una frase:** los límites de la GPU son tan predecibles y calculables como sus ventajas — con M3 completo, entiendes de punta a punta por qué un modelo cabe o no, por qué es rápido o lento, y qué hacer cuando el hardware no alcanza.

**Las siete capacidades de dominio:** explicar (las tres líneas del presupuesto) · predecir (si un modelo cabrá, con cálculo teórico) · detectar y corregir (por qué una reducción parcial no basta) · modificar (repetir el diagnóstico con otro modelo) · aplicar en contexto nuevo (el informe del desafío) · usar en un proyecto (integración M1+M2+M3 citada por dirección exacta, el nivel de integración que el capstone exigirá).

**Repetir desde cero, sin guía:** diagnostica el presupuesto de un modelo nuevo y decide una alternativa antes de intentar cargarlo.

**Pregunta metacognitiva de proceso:** ¿qué le dirías a alguien que concluye "mi GPU no es suficientemente buena" tras un solo fallo — qué le falta entender que tú ya entiendes ahora?
