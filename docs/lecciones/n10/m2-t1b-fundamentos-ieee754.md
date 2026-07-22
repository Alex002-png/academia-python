# N10.M2.T1b — Fundamentos numéricos: IEEE 754, y por qué el exponente importa más que la mantisa

*Construido bajo DOC-12 v1.0.0, estándar de excelencia elevado. Investigación pedagógica adenda en `docs/investigacion/n10-m2-cuantizacion-optimizacion.md`.*

**La gran pregunta de este laboratorio:** cuando cuantizas de FP16 a INT4, ¿qué parte exacta del número pierdes — y por qué esa pérdida específica es la que la industria decidió que vale la pena?

**Entorno objetivo:** terminal local + Python para explorar representaciones numéricas reales.

**Fluencia de terminal asumida:** completa (M2.T1).

**Prerrequisitos técnicos:** M2.T1 completo; Python con `struct`/numpy.

**Prerrequisitos conceptuales:** M2.T1 (modelo mental general de cuantizar).

**Duración estimada — desglosada:** contexto (~20 min) + descomponer FP32/FP16/BF16 en bits reales (~30 min) + por qué BF16 reemplazó a FP16 (~20 min) + error inducido en vivo (~15 min) + mini laboratorio y desafío (~20 min) + evaluación (~10 min) → **total realista: 95-115 min.**

**Nivel de dificultad:** intermedio-avanzado — primer laboratorio del nivel sobre representación numérica a nivel de bits.

**Fuera de alcance de este laboratorio (y por qué):** cuantización a enteros en detalle ya la cubrió M2.T1 a nivel de tamaño; aquí el foco es la representación en punto flotante que antecede a esa cuantización.

**Conexión con el laboratorio anterior y el siguiente:** M2.T1 dio el modelo mental general de cuantizar. Este laboratorio baja al nivel de bits. Deja abierta la pregunta que M2.T2 resuelve: ya entiendes exponente vs. mantisa — ¿por qué existen tantos tipos de cuantización GGUF distintos, no solo "más bits = mejor"?

---

## 1. Objetivo

Al terminar vas a poder descomponer un número FP32/FP16/BF16 en sus bits reales, explicar la diferencia entre lo que controla el exponente (rango) y la mantisa (precisión), y explicar con evidencia académica por qué las redes toleran bien la cuantización.

## 2. Contexto

M2.T1 te dio el modelo mental general de cuantizar. Hoy bajas un nivel más: ¿qué significa exactamente "menos bits" a nivel de la representación numérica misma? Entender exponente vs. mantisa es lo que te permitirá, en M2.T2, entender por qué existen tantos tipos de cuantización distintos.

## 3. Requisitos

- M2.T1 completo.
- Python (módulo `struct` o numpy).

☐ **Checkpoint 0 —** Python funcional con acceso a `struct` y numpy.

## 4. Explicación conceptual

**FP32** (IEEE 754): 1 bit de signo, 8 de exponente, 23 de mantisa — rango ~10⁻³⁸ a 10³⁸, 6-9 dígitos de precisión. **FP16**: 1+5+10 bits — reduce TANTO rango como precisión, propenso a overflow/underflow. **BF16** (Google): 1+8+7 bits — literalmente un FP32 truncado, conservando el MISMO exponente que FP32 (mismo rango) a costa de menos precisión (7 bits de mantisa).

**Modelo mental central:** el exponente controla CUÁN GRANDE O PEQUEÑO puede ser un número (rango); la mantisa controla QUÉ TAN FINAMENTE distingues valores cercanos (precisión). Por eso BF16 reemplazó a FP16 en LLMs: conserva el rango de FP32, evitando el overflow que obligaba a "loss scaling" en FP16.

**Por qué las redes toleran esto:** Denil et al. (NeurIPS 2013) demostraron que se puede predecir el 95% de los pesos de una red desde el 5% restante sin pérdida de exactitud — redundancia real. Trabajo teórico más reciente (arXiv 2309.10975) demuestra formalmente que cuanto más sobre-parametrizada está una red, mejor tolera la cuantización.

## 5. Ejecución paso a paso

**Paso 1 — Descompón un número FP32 real en sus bits**

```python
import struct

def fp32_a_bits(x):
    empaquetado = struct.pack('>f', x)
    bits = ''.join(f'{b:08b}' for b in empaquetado)
    return f"signo={bits[0]} exponente={bits[1:9]} mantisa={bits[9:]}"

print(fp32_a_bits(3.14159))
print(fp32_a_bits(1000000.0))
print(fp32_a_bits(0.0001))
```

**Paso 2 — Compara el mismo número en FP16 vs. BF16**

Usamos *e* (base del logaritmo natural) porque su patrón de bits de mantisa hace visible la diferencia real entre ambos formatos — con otros valores (ej. π) puede ocurrir que ambos truncamientos coincidan por coincidencia numérica, así que verifica siempre con tus propios valores en vez de asumir que un solo ejemplo generaliza.

```python
import numpy as np

x = np.float32(2.71828183)  # e, la base del logaritmo natural
x_fp16 = np.float16(x)
print(f"FP32: {x} -> FP16: {x_fp16} (perdida: {abs(float(x)-float(x_fp16)):.8f})")

bits_fp32 = struct.pack('>f', float(x))
bits_bf16 = bits_fp32[:2] + b'\x00\x00'
x_bf16_aprox = struct.unpack('>f', bits_bf16)[0]
print(f"FP32: {x} -> BF16 (aprox): {x_bf16_aprox} (perdida: {abs(float(x)-x_bf16_aprox):.8f})")
```

Resultado real: FP16 da 2.71875 (pérdida 0.00046817) y BF16 da 2.703125 (pérdida 0.01515683) — pérdidas claramente distintas: BF16 pierde más de 30x más precisión fina aquí, el precio real de sus 3 bits menos de mantisa frente a FP16.

**Paso 3 — Encuentra un valor donde FP16 falla y BF16 no**

```python
valor_grande = 100000.0
print(f"FP16: {np.float16(valor_grande)}")
print(f"FP32 (referencia): {valor_grande}")
```

## 6. Error inducido en vivo

```python
import numpy as np
print(np.float16(70000.0))
```

Observa el resultado exacto antes de leer la explicación — no es lo que la mayoría espera la primera vez.

## 7. Comprensión

- ¿Qué obtuviste al representar 70000.0 en FP16? ¿Por qué excede lo que 5 bits de exponente representan?
- ¿Por qué BF16 puede representar 70000.0 sin problema, con el mismo total de bits que FP16?
- ¿Por qué la evidencia de Denil et al. sugiere que cuantizar explota redundancia real, no pierde información al azar?

## 8. Puntos de verificación

☐ Descompuse un número FP32 en sus bits de signo/exponente/mantisa.
☐ Comparé la pérdida de precisión de FP16 vs. BF16.
☐ Encontré un valor que desborda en FP16 pero no en BF16/FP32.
☐ Reproduje el error inducido en vivo y expliqué el comportamiento de 70000.0.

## 9. Diagnóstico de errores

*Checklist de categorías revisada: ninguna de las 7 categorías aplica de forma directa — Python/numpy ya están disponibles desde M2.T1, el comportamiento de np.float16 ante overflow es estable entre versiones, la representación numérica es igual en cualquier SO, no depende de GPU ni de ejecuciones anteriores, y no hay red ni proceso externo involucrado.*

| Error | Por qué aparece | Cómo se diagnostica | Cómo se comprueba la hipótesis | Cómo se soluciona | Cómo se previene |
|---|---|---|---|---|---|
| struct.pack da un resultado inesperado para negativos/muy pequeños | Casos especiales de IEEE 754 (cero, infinito, NaN) tienen patrones específicos. | Compara el patrón de un número y su negativo — deben diferir solo en el primer bit. | Prueba 0.0 y -0.0. | Verifica contra la tabla de casos especiales de IEEE 754. | Probar siempre casos límite al explorar una representación nueva. |
| `np.float16(70000.0)` da 'inf' | 70000 excede el máximo de FP16 (~65504) por el exponente de 5 bits. | Compara contra el rango máximo documentado de FP16. | Prueba 65000.0 (dentro) vs. 70000.0 (fuera). | No es un error a corregir — comportamiento esperado; usa BF16/FP32 si necesitas ese rango. | Conocer el rango máximo real antes de usar un formato para valores que podrían acercarse al límite. |

## 10. Mini laboratorio

Encuentra experimentalmente el épsilon de precisión (valor más pequeño distinto de cero representable) de FP16 y compáralo con FP32.

## 11. Desafío

Escribe una explicación de una frase, sin fórmulas, sobre por qué "menos bits" no es una sola cosa — depende de si quitas bits al exponente o a la mantisa.

## 12. Buenas prácticas profesionales

- Verifica rango Y precisión por separado al elegir un formato numérico.
- Prueba siempre valores límite al trabajar con una representación numérica nueva.
- Distingue "perder precisión" (degradación gradual) de "perder rango" (overflow, rompe completamente).

## 13. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Tag |
|---|---|---|---|---|---|---|
| [A Study of BFLOAT16 for Deep Learning Training](https://arxiv.org/pdf/1905.12322) | arXiv 1905.12322 | EN | ~20 min | Avanzado | Por qué BF16 reemplazó a FP16 en la práctica. | 🟢 Antes |
| [Neural Network Quantization from First Principles](https://newsletter.semianalysis.com/p/neural-network-quantization-and-number) | SemiAnalysis | EN | ~30 min | Avanzado | Por qué el exponente es más crítico que la mantisa. | 🔵 Durante |
| [Predicting Parameters in Deep Learning](https://arxiv.org/abs/1306.0543) | Denil et al., NeurIPS 2013 | EN | ~25 min | Avanzado | Evidencia académica de redundancia en redes entrenadas. | ⭐ Profundización |

## Evaluación

**Lo esencial en una frase:** cuantizar reduce bits específicos de exponente (rango) o mantisa (precisión), con consecuencias distintas y predecibles.

**Las siete capacidades de dominio:** explicar (exponente vs. mantisa) · predecir (overflow FP16 vs. BF16) · detectar errores (overflow esperado, no bug) · corregir (elegir formato correcto) · modificar (encontrar épsilon de otro formato, mini laboratorio) · aplicar en contexto nuevo (explicación de una frase, desafío) · usar en un proyecto (base para entender los tipos de cuantización de M2.T2).

**Repetir desde cero, sin guía:** descompón un número FP32 en sus bits y explica qué le pasaría en FP16.

**Pregunta metacognitiva de proceso:** ¿qué modelo mental tenías de "cuantizar" antes de este laboratorio, y en qué cambió al ver los bits reales?
