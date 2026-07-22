# N10.M1.T1b — La economía real de correr un LLM en local: más allá de la intuición

*Construido bajo DOC-12 v1.0.0, estándar de excelencia elevado (directiva del Director, 2026-07-22). Investigación pedagógica: `docs/investigacion/n10-m1-t1-panorama-economia-modelos.md`. Primer laboratorio del nivel que exige lectura crítica de fuentes técnicas primarias, no solo ejecución de comandos.*

**La gran pregunta de este laboratorio:** ¿a partir de qué momento, con números reales y no con intuición, correr un modelo en tu propia GPU sale más barato que pagar por token a un proveedor — y es esa incluso la pregunta correcta?

**Entorno objetivo:** terminal local + hoja de cálculo o script Python propio para el modelo económico.

**Fluencia de terminal asumida:** completa (M1.T1a).

**Prerrequisitos técnicos:** M1.T1a completo; acceso a internet para leer fuentes primarias reales, no resúmenes de terceros.

**Prerrequisitos conceptuales:** N7.M1 (ya conoces el precio real de al menos una API de modelo cloud).

**Duración estimada — desglosada:** contexto (~15 min) + lectura crítica de dos fuentes cuantitativas reales (~25 min) + construcción de tu propio modelo de costo (~30 min) + error inducido en vivo — la trampa del "punto de equilibrio" de blog (~15 min) + mini laboratorio y desafío (~20 min) + evaluación (~10 min) → **total realista: 95-115 min.**

**Nivel de dificultad:** intermedio — el primer laboratorio del nivel que exige lectura crítica de fuentes técnicas, no solo ejecución.

**Fuera de alcance de este laboratorio (y por qué):** medición real de rendimiento en tu propio hardware se cubre en M2.T3/M3.T4. Aquí el foco es el modelo económico y la calidad de la evidencia, no la medición de tokens/segundo.

**Conexión con el laboratorio anterior y el siguiente:** M1.T1a te dio la ventaja más visible de correr en local (cero llamadas de red). Este laboratorio cuantifica esa ventaja con el mismo rigor que exigirías de un informe técnico real. Deja abierta la pregunta que M1.T1c resuelve: ya sabes evaluar cifras económicas con criterio — ¿cómo aplicas ese mismo escepticismo a licencias y benchmarks de modelos?

---

## 1. Objetivo

Al terminar vas a poder construir tu propio modelo de costo comparando inferencia local vs. API cloud, citando datos de fuentes primarias verificables; explicar por qué NO existe un consenso técnico real de "punto de equilibrio en tokens"; y enumerar, con evidencia, los factores no monetarios que en la práctica real de ingeniería pesan tanto o más que el costo por token.

## 2. Contexto

En M1.T1a vivenciaste la ventaja más visible de correr en local: cero llamadas de red, cero factura por token. Pero "es más barato" es una afirmación que un ingeniero real nunca acepta sin cuantificarla — y cuantificarla bien es más difícil de lo que parece. Hoy vas a intentar responder la pregunta con el mismo rigor que exigirías de un informe técnico real: con fuentes primarias, con metodología explícita, y con la honestidad de declarar cuándo la respuesta clara simplemente no existe todavía.

## 3. Requisitos

- M1.T1a completo.
- Acceso a internet para leer las dos fuentes primarias citadas (no las sustituyas por un resumen de terceros).

☐ **Checkpoint 0 —** tienes acceso a internet y estás dispuesto a leer las fuentes primarias completas, no solo su título.

## 4. Explicación conceptual

Busca en internet "cuándo migrar de API a self-hosted LLM" y vas a encontrar decenas de artículos con cifras categóricas — "a partir de 6.8 millones de tokens/mes", "solo por encima de 500 millones", "11,000 millones de tokens/mes" — todas mutuamente contradictorias, sin autor identificable, sin metodología publicada. Esto NO es un accidente: es el patrón reconocible de contenido escrito para posicionar en buscadores, no para informar con rigor.

**Modelo mental de hoy:** antes de aceptar cualquier cifra técnica, pregúntate: ¿puedo rastrear de dónde sale exactamente este número? Si la respuesta es no, la cifra vale cero, sin importar cuántas veces se repita en internet.

Dos fuentes SÍ sostienen este estándar:
- **LLMflation** (a16z, 2024): empareja modelos por capacidad real (score de MMLU) y rastrea el precio histórico por millón de tokens. Hallazgo verificado: para una capacidad equivalente a GPT-3, el precio cayó de $60 a $0.06 por millón de tokens en 3 años — una caída de 1000x.
- **Paper arXiv 2606.11690**: modela el costo REAL de self-hosting como función de cuánto usas realmente tu hardware (no su capacidad teórica pico) — con un hallazgo incómodo: el costo efectivo de self-hosting puede variar entre $0.21 y $15.25 por millón de tokens según qué tan ocupado mantengas el hardware, una penalización de hasta 24x por subutilización.

## 5. Ejecución paso a paso

**Paso 1 — Lee la metodología real de LLMflation, no un resumen**

Ve a la fuente primaria (`a16z.com/llmflation-llm-inference-cost`) e identifica exactamente CÓMO comparan modelos de distintas épocas — ¿por nombre? ¿por capacidad medida? Esta decisión metodológica es la que hace confiable (o no) cualquier conclusión que saquen.

**Paso 2 — Lee el argumento central del paper de costo por concurrencia**

No necesitas entender cada ecuación de arXiv 2606.11690 — identifica la idea central: ¿por qué el costo "por token" que anuncia un proveedor de GPU en la nube no es el costo real que termina pagando un equipo con tráfico variable?

**Paso 3 — Construye tu propio modelo de costo, con tus propias cifras**

```python
costo_api_por_1000_tokens = 0.002  # ajusta al precio real que investigues
costo_hardware = 600  # ajusta al precio real de mercado de tu GPU
breakeven_tokens = costo_hardware / (costo_api_por_1000_tokens / 1000)
print(f"Tu punto de equilibrio: {breakeven_tokens:,.0f} tokens")
```

Usa el precio real de una API que ya conoces (N7.M1) y el costo real de tu RTX 5070 — no copies una cifra ajena.

**Paso 4 — Rompe tu propio cálculo con el hallazgo del Paso 2**

```python
utilizacion_real = 0.30
breakeven_ajustado = breakeven_tokens / utilizacion_real
print(f"Punto de equilibrio ajustado por utilización real: {breakeven_ajustado:,.0f} tokens")
```

Tu cálculo del Paso 3 asume que tu GPU está siempre disponible cuando la necesitas. Recalcula asumiendo que está realmente ocupada solo el 30% del tiempo (uso personal típico).

## 6. Error inducido en vivo

Busca en un buscador "punto de equilibrio tokens self-hosted LLM" y abre los primeros 3-4 resultados. Anota las cifras exactas que cada uno da. Antes de leer la explicación: ¿coinciden entre sí?

## 7. Comprensión

- Tras el error inducido en vivo: ¿qué tan distintas fueron las cifras entre los artículos que encontraste? ¿Alguno citaba una fuente primaria rastreable?
- ¿Por qué la caída de precio de las APIs hace que cualquier cálculo de "ROI de comprar GPU" sea una comparación contra un blanco que se mueve?
- Si tu utilización real de la GPU es del 30% en vez del 100% asumido, ¿qué le dice esto a alguien que decide "comprar GPU" basándose solo en el precio por token anunciado?

## 8. Puntos de verificación

☐ Leí la metodología real de LLMflation, no un resumen de terceros.
☐ Leí el argumento central del paper de costo por concurrencia.
☐ Construí mi propio modelo de costo con mis propias cifras declaradas.
☐ Ajusté mi cálculo por utilización real y entendí por qué cambia tanto.
☐ Reproduje el error inducido en vivo y confirmé la contradicción entre fuentes de blog.

## 9. Diagnóstico de errores

*Checklist de categorías revisada: laboratorio de investigación y cálculo — ninguna de las 7 categorías estándar (PATH, permisos, versión, SO, configuración, estado previo, interferencia externa) aplica; no hay instalación de software.*

| Error | Por qué aparece | Cómo se diagnostica | Cómo se comprueba la hipótesis | Cómo se soluciona | Cómo se previene |
|---|---|---|---|---|---|
| Las cifras de los primeros resultados de búsqueda son muy distintas entre sí | La mayoría de este contenido se escribe para SEO, no para informar — sin metodología publicada, cada autor asume supuestos no declarados. | Ninguno suele citar una fuente primaria verificable — esa ausencia ES la señal de alerta. | Busca si el artículo enlaza a datos reales con metodología explícita. | Descarta la cifra y construye la tuya propia con supuestos declarados. | Aplicar el mismo escepticismo a cualquier cifra técnica sin fuente rastreable, en cualquier tema. |
| Mi cálculo del Paso 3 da un punto de equilibrio absurdo | Un supuesto de precio mal investigado o desactualizado — los precios de API caen ~10x/año. | Verifica la fecha de la cifra de precio que usaste. | Busca el precio ACTUAL del proveedor exacto. | Recalcula con el precio verificado a hoy. | Nunca reusar un precio de API sin verificar su fecha. |

## 10. Mini laboratorio

Repite el cálculo del Paso 3-4 usando el precio de un proveedor de API DISTINTO al que ya usaste en N7.M1 — ¿tu punto de equilibrio ajustado cambia mucho?

## 11. Desafío

Escribe un párrafo técnico corto recomendando, con evidencia citada, si TU caso de uso personal justifica económicamente el hardware que ya tienes — y sé honesto si la evidencia disponible no permite una conclusión limpia.

## 12. Buenas prácticas profesionales

- Nunca cites una cifra técnica sin poder rastrear su fuente primaria y su metodología.
- Declara tus propios supuestos explícitamente cuando construyas un modelo de costo.
- Distingue "no hay evidencia suficiente" de "no investigué lo suficiente".

## 13. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Tag |
|---|---|---|---|---|---|---|
| [LLMflation: LLM inference cost is going down fast](https://a16z.com/llmflation-llm-inference-cost/) | a16z (Guido Appenzeller) | EN | ~20 min | Intermedio | Fuente primaria con metodología explícita — el ancla cuantitativa central. | 🟢 Antes |
| [Beyond Per-Token Pricing](https://arxiv.org/abs/2606.11690) | arXiv 2606.11690 | EN | ~30 min | Avanzado | El hallazgo de la "penalización por subutilización". | 🔵 Durante |
| [AI Snake Oil](https://www.aisnakeoil.com/) | Arvind Narayanan y Sayash Kapoor | EN | Libro completo | Intermedio | Mismo estándar de escepticismo ante cifras técnicas, top 10 de Nature 2024. | ⭐ Profundización |

## Evaluación

**Lo esencial en una frase:** no existe un "punto de equilibrio" universal en tokens para migrar de API a self-hosted — existe un modelo de costo que depende de tus propios supuestos, y la habilidad real es saber construir y defender el tuyo con fuentes rastreables.

**Las siete capacidades de dominio:**
1. **Explicar** — por qué la mayoría de cifras de "punto de equilibrio" en internet no son confiables (sección 4).
2. **Predecir** — cómo cambia un punto de equilibrio calculado si la utilización baja del 100% al 30% (Paso 4).
3. **Detectar errores** — reconocer una cifra sin fuente rastreable en el error inducido en vivo.
4. **Corregir** — descartar una cifra no verificable y sustituirla por un cálculo propio.
5. **Modificar** — recalcular con un proveedor de API distinto (mini laboratorio).
6. **Aplicar en contexto nuevo** — producir una recomendación honesta para el propio caso, incluida la opción de declarar evidencia insuficiente (desafío).
7. **Usar en un proyecto** — este modelo de costo es insumo directo del Hito 4 del capstone.

**Repetir desde cero, sin guía:** explica a alguien más por qué deberías desconfiar de una cifra de "punto de equilibrio" sin preguntar de dónde sale.

**Pregunta metacognitiva de proceso:** ¿cambió este laboratorio cómo vas a leer cifras técnicas de rendimiento o costo en el futuro, en cualquier contexto?
