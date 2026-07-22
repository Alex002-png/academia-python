# N10.M2.T2b — AWQ y GPTQ: cuantización con calibración, y por qué GGUF eligió otro camino

*Construido bajo DOC-12 v1.0.0, estándar de excelencia elevado. Investigación pedagógica adenda en `docs/investigacion/n10-m2-cuantizacion-optimizacion.md`.*

**La gran pregunta de este laboratorio:** si existen algoritmos de cuantización que usan datos reales para decidir qué pesos proteger (AWQ, GPTQ), ¿por qué el ecosistema que ya dominas (GGUF/K-quants) no los usa?

**Entorno objetivo:** terminal local + lectura de 2 papers académicos reales.

**Fluencia de terminal asumida:** completa (M2.T1-T2).

**Prerrequisitos técnicos:** M2.T1-T2 completos; acceso a internet para leer los papers originales.

**Prerrequisitos conceptuales:** M2.T2 (K-quants de GGUF).

**Duración estimada — desglosada:** contexto (~15 min) + lectura crítica de GPTQ (~25 min) + lectura crítica de AWQ (~25 min) + comparación de calidad real (~20 min) + error inducido en vivo (~15 min) + mini laboratorio, desafío y evaluación (~20 min) → **total realista: 100-120 min.**

**Nivel de dificultad:** avanzado — primera lectura de papers de arXiv de este nivel.

**Fuera de alcance de este laboratorio (y por qué):** ejecutar AWQ o GPTQ tú mismo requiere típicamente más VRAM y tiempo de calibración de los que este nivel dedica; el foco es entender el trade-off, no ejecutar los tres métodos.

**Conexión con el laboratorio anterior y el siguiente:** M2.T2 enseñó K-quants como si fueran la única forma inteligente de cuantizar. Este laboratorio muestra que no lo son, con datos reales de comparación. Deja abierta la pregunta que M2.T3 resuelve: ya sabes que la calidad entre métodos es comparable — ¿cómo mides tú mismo esa calidad con metodología real en tu propio hardware?

---

## 1. Objetivo

Al terminar vas a poder explicar qué información adicional usan AWQ y GPTQ que un redondeo ingenuo no usa, citar datos reales comparando su calidad contra K-quants al mismo nivel de bits, y explicar con honestidad qué evidencia existe (y cuál no) sobre por qué llama.cpp desarrolló su propio esquema.

## 2. Contexto

M2.T2 te enseñó los K-quants de GGUF como si fueran la única forma inteligente de cuantizar. No lo son. GPTQ y AWQ, publicados en conferencias de primer nivel, usan información adicional real para decidir cómo cuantizar cada peso. Hoy investigas si esa sofisticación se traduce en mejor calidad real, con datos publicados.

## 3. Requisitos

- M2.T1-T2 completos.
- Acceso a internet para leer los papers originales.

☐ **Checkpoint 0 —** dispuesto a leer abstracts y resultados de papers de arXiv, no resúmenes de terceros.

## 4. Explicación conceptual

**GPTQ** (arXiv 2210.17323, ICLR 2023): usa información de segundo orden aproximada (relacionada con el Hessiano) por capa para minimizar el error de reconstrucción — cuantizó un modelo de 175B parámetros en ~4 horas-GPU a 3-4 bits con degradación reportada como "insignificante".

**AWQ** (arXiv 2306.00978, MLSys 2024 Best Paper): observa que no todos los pesos importan igual — proteger ~1% de "pesos salientes" reduce mucho el error. Identifica esos pesos observando las ACTIVACIONES, no reconstruyendo con matemática pesada.

**El dato que rompe la intuición de "más sofisticado = mejor":** la comparación técnica independiente más citada (oobabooga, perplejidad medida realmente) encontró que a 4 bits las diferencias son marginales: EXL2 4.31-4.32, AWQ 4.33, **Q4_K_M de GGUF 4.33 — empatado con AWQ**, GPTQ 4.34. La ventaja real de K-quants está en la VELOCIDAD de cuantizar (minutos, >10x más rápido).

**Honestidad metodológica:** no existe una fuente primaria que declare formalmente por qué llama.cpp no adoptó AWQ/GPTQ — la explicación de "velocidad + portabilidad + simplicidad" es inferencia razonable, no cita directa verificada.

## 5. Ejecución paso a paso

**Paso 1 — Lee el abstract y resultados de GPTQ**

Identifica qué información usa el método y la cifra de tiempo de cuantización que reportan.

**Paso 2 — Lee el abstract y la idea central de AWQ**

Identifica qué porcentaje de "pesos salientes" identifican y por qué observan activaciones.

**Paso 3 — Compara las cifras reales de perplejidad**

Revisa la comparación de oobabooga entre EXL2, AWQ, GPTQ y K-quants al mismo nivel de bits.

## 6. Error inducido en vivo

Antes de abrir el paper de AWQ por su URL correcta, intenta acceder con un identificador de arXiv con un dígito de más al final (`2306.009780` en vez de `2306.00978`) — un typo real de "fat-finger", fácil de cometer al copiar un ID de memoria.

```bash
curl -s -o /dev/null -w "HTTP %{http_code}\n" https://arxiv.org/abs/2306.009780
```

Observa el código HTTP exacto que devuelve.

## 7. Comprensión

- ¿Qué código HTTP obtuviste con el identificador con el dígito de más, y qué obtienes al repetir el comando con el identificador real (2306.00978)?
- ¿Por qué es sorprendente que Q4_K_M y AWQ tengan perplejidad casi idéntica?
- ¿Por qué es importante declarar explícitamente que no hay fuente oficial confirmada para la razón exacta de la elección de llama.cpp?

## 8. Puntos de verificación

☐ Leí el abstract y resultados de GPTQ, con la cifra real de tiempo.
☐ Leí la idea central de AWQ y por qué usa activaciones.
☐ Comparé las cifras reales de perplejidad de los 4 métodos.
☐ Reproduje el error inducido en vivo (identificador de arXiv con un dígito de más) y confirmé el código HTTP real.

## 9. Diagnóstico de errores

| Error | Por qué aparece | Cómo se diagnostica | Cómo se comprueba la hipótesis | Cómo se soluciona | Cómo se previene |
|---|---|---|---|---|---|
| `curl` a `arxiv.org/abs/2306.009780` devuelve HTTP 404 (error inducido en vivo) | El dígito extra al final no corresponde a ningún paper real. | Compara el código HTTP del identificador con el dígito de más (404) contra el real (200). | Repite el comando con el identificador exacto y confirma que pasa de 404 a 200. | Copia siempre el identificador exacto desde una fuente confiable, nunca lo teclees de memoria. | Verificar el identificador exacto de una fuente académica ANTES de citarla — el mismo hábito que ya corrigió una cita errónea en M2.T1b. |
| No encuentro fuente oficial de por qué llama.cpp no adoptó AWQ/GPTQ | Información que no existe como declaración formal centralizada. | Revisa si hay discusiones parciales sin ser declaración de diseño formal. | Busca "importance matrix"/"imatrix" en discusiones de llama.cpp. | Documenta la ausencia honestamente con la mejor evidencia circunstancial. | Aceptar que no toda decisión de un proyecto abierto tiene documento formal. |

## 10. Mini laboratorio

Busca el término "imatrix" en documentación de llama.cpp — ¿en qué se parece a la información de GPTQ?

## 11. Desafío

Escribe un párrafo técnico justificando GGUF/K-quants sobre AWQ/GPTQ para un proyecto de inferencia local, distinguiendo evidencia directa de inferencia razonable.

## 12. Buenas prácticas profesionales

- Lee abstract y resultados de un paper antes de confiar en un resumen de terceros.
- No asumas que "más sofisticado" significa "mejor resultado medible" sin verificar.
- Declara explícitamente cuándo una explicación es evidencia directa versus inferencia razonable.

## 13. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Tag |
|---|---|---|---|---|---|---|
| [GPTQ](https://arxiv.org/abs/2210.17323) | Frantar et al., ICLR 2023 | EN | ~25 min | Avanzado | Paper original del método. | 🟢 Antes |
| [AWQ](https://arxiv.org/abs/2306.00978) | Lin et al., MLSys 2024 Best Paper | EN | ~25 min | Avanzado | Paper original, premiado. | 🟢 Antes |
| [Which Quantization Method is Right for You?](https://oobabooga.github.io/blog/posts/gptq-awq-exl2-llamacpp/) | oobabooga | EN | ~20 min | Intermedio | Comparación con perplejidad medida realmente. | 🔵 Durante |

## Evaluación

**Lo esencial en una frase:** AWQ y GPTQ usan información real para cuantizar con más cuidado, pero K-quants de GGUF alcanza calidad prácticamente idéntica con una fracción del tiempo — la elección depende de restricciones reales, no de sofisticación aparente.

**Las siete capacidades de dominio:** explicar (información adicional de AWQ/GPTQ) · predecir (formular hipótesis antes de ver datos, Paso 3) · detectar errores (un identificador de arXiv con un dígito de más produce un fallo real de acceso, error inducido en vivo) · corregir (ajustar heurística de sofisticación=calidad tras contrastar con datos reales) · modificar (investigar "imatrix", mini laboratorio) · aplicar en contexto nuevo (justificación técnica propia, desafío) · usar en un proyecto (fundamenta la elección de stack del capstone).

**Repetir desde cero, sin guía:** explica qué distingue a AWQ de GPTQ, y por qué ninguno garantiza mejor calidad que K-quants.

**Pregunta metacognitiva de proceso:** ¿en qué otro momento asumiste que "más complejo" significaba "mejor", y este laboratorio te hizo reconsiderarlo?
