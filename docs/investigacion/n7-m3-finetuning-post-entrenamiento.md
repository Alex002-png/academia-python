# Investigación Pedagógica de N7.M3 — Fine-tuning y post-entrenamiento

*Construida bajo DOC-12 §0bis, formato de 4 puntos. Fundamenta el módulo N7.M3 "Fine-tuning y post-entrenamiento" (DOC-10 §8, línea 188): LoRA/QLoRA con recursos modestos y medición del efecto; RLHF/DPO — el porqué conceptual completo y práctica ligera con herramientas vigentes. Bibliografía oficial ya aprobada por DOC-10 para N7: documentación de Hugging Face (PEFT, TRL) y documentación de proveedores. Entorno casi con certeza DOC-12 (GPU real), precedente ya insinuado por N5.M2 ("GPU gratuita en nube", DOC-10 línea 164) — nota honesta: no existe todavía un documento `n5-m2-*.md` en `docs/investigacion/`, así que ese precedente se cita por el propio DOC-10, no por una investigación N5 ya escrita.*

*Todas las fuentes citadas abajo fueron verificadas con WebFetch real (contenido completo recuperado y citado verbatim) salvo donde se declara explícitamente lo contrario.*

---

## 1. Cómo enseñan este flujo exacto las fuentes oficiales

### (a) LoRA — el modelo mental de por qué reduce drásticamente los parámetros entrenables

Fuente primaria: **PEFT — LoRA (guía conceptual)**, [huggingface.co/docs/peft/main/en/conceptual_guides/lora](https://huggingface.co/docs/peft/main/en/conceptual_guides/lora) (verificado por WebFetch completo; nota honesta: la versión fijada `v0.19.0` de esa misma URL devuelve una página de redirección sin contenido — solo la rama `main` sirve el texto real, así que el módulo debe enlazar `main` o la versión estable vigente en el momento de redactar, no asumir que cualquier versión numerada sirve).

El mecanismo que la documentación enseña, citado verbatim: *"To make fine-tuning more efficient, LoRA's approach is to represent the weight updates with two smaller matrices (called **update matrices**) through low-rank decomposition."* y *"The original weight matrix remains frozen and doesn't receive any further adjustments. To produce the final results, both the original and the adapted weights are combined."* Es decir: el modelo mental que PEFT enseña no es "se entrena menos porque se congela algo" en abstracto, sino que el **delta de pesos** (`ΔW`, del tamaño completo de la matriz original) se sustituye por el producto de dos matrices mucho más pequeñas (`A` de rango `r` y `B`), y solo esas dos matrices reciben gradiente. La guía además acota deliberadamente el alcance: *"In principle, LoRA can be applied to any subset of weight matrices in a neural network... However, for simplicity and further parameter efficiency, in Transformer models LoRA is typically applied to attention blocks only."*

Sobre el rango `r`, la documentación es explícita y cuantificable: *"`r`: the rank of the update matrices... Lower rank results in smaller update matrices with fewer trainable parameters."* — el rango es literalmente el dial que controla cuántos parámetros nuevos existen, no un hiperparámetro arbitrario más.

Sobre la fusión (relevante para el laboratorio, porque el estudiante deploya el resultado): *"LoRA does not add any inference latency because adapter weights can be merged with the base model"*, mediante `merge_and_unload()`.

Referencia conceptual (no fuente pedagógica de curso, tal como pide la instrucción): el **paper original de LoRA** — Hu et al. 2021, [arxiv.org/abs/2106.09685](https://arxiv.org/abs/2106.09685) (verificado). Su claim numérico ancla el "por qué" a escala real: comparado con fine-tuning completo de GPT-3 175B con Adam, LoRA *"reduce[s] the number of trainable parameters by 10,000 times and the GPU memory requirement by 3 times"*, manteniendo calidad *"on-par or better than fine-tuning"*. Este número (10.000×) es el que hace intuitivo, en una frase, "por qué LoRA importa" para un estudiante con una sola GPU gratuita — es la cifra que debería abrir la explicación conceptual del laboratorio (DOC-12 §2.2/§2.4), no la fórmula matemática primero.

### (b) QLoRA — cuantización + LoRA, por qué cabe en una sola GPU de consumo/gratuita

Fuente primaria: **PEFT — Quantization**, [huggingface.co/docs/peft/en/developer_guides/quantization](https://huggingface.co/docs/peft/en/developer_guides/quantization) (verificado, fetch completo). Explica el porqué conceptual con precisión: *"after a model is quantized it isn't typically further trained for downstream tasks because training can be unstable due to the lower precision of the weights and activations. But since PEFT methods only add extra trainable parameters, this allows you to train a quantized model with a PEFT adapter on top!"* — este es el modelo mental exacto que el laboratorio debe transmitir: QLoRA no es "LoRA pero más comprimido", es la combinación que resuelve un problema que cuantizar solo, sin LoRA, no resolvía (no se puede reentrenar establemente un modelo ya cuantizado con backprop completo).

La misma página documenta, con código verificado, la configuración real vía `BitsAndBytesConfig`: `load_in_4bit=True`, `bnb_4bit_quant_type="nf4"` (NF4, "a special 4-bit data type for weights initialized from a normal distribution"), `bnb_4bit_use_double_quant=True` ("a nested quantization scheme to quantize the already quantized weights"), `bnb_4bit_compute_dtype=torch.bfloat16`. Y advierte el paso obligatorio antes de entrenar: `prepare_model_for_kbit_training()`.

Segunda fuente oficial, con los números de memoria: **HF Blog — "Making LLMs even more accessible with bitsandbytes, 4-bit quantization and QLoRA"**, [huggingface.co/blog/4bit-transformers-bitsandbytes](https://huggingface.co/blog/4bit-transformers-bitsandbytes) (verificado). Cita clave sobre accesibilidad real con recursos gratuitos: *"we show that it is possible to fine tune GPT-neo-X 20B on a Google Colab instance!"* — confirmación directa, desde una fuente oficial de HF, de que QLoRA + Colab gratuito es un flujo que la propia Hugging Face demuestra, no una inferencia de terceros.

Referencia conceptual: **paper de QLoRA** (Dettmers et al. 2023), [arxiv.org/abs/2305.14314](https://arxiv.org/abs/2305.14314) (verificado) — *"finetune a 65B parameter model on a single 48GB GPU while preserving full 16-bit finetuning task performance"*; su modelo resultante (Guanaco) *"reach[es] 99.3% of the performance level of ChatGPT while only requiring 24 hours of finetuning on a single GPU"*. Introduce las tres técnicas que la guía PEFT expone en código: NF4, doble cuantización, optimizadores paginados.

### (c) DPO — el flujo exacto en TRL, formato del dataset de preferencias

Fuente primaria: **TRL — DPO Trainer**, [huggingface.co/docs/trl/en/dpo_trainer](https://huggingface.co/docs/trl/en/dpo_trainer) (verificado, fetch completo). Documenta el formato exacto que el estudiante debe reconocer — cuatro variantes reales, no una sola:

```python
# Standard, prompt explícito (recomendado)
{"prompt": "The sky is", "chosen": " blue.", "rejected": " green."}
# Standard, prompt implícito
{"chosen": "The sky is blue.", "rejected": "The sky is green."}
# Conversacional, con roles user/assistant también existe (formato de mensajes)
```

y el ejemplo mínimo end-to-end oficial:

```python
from trl import DPOTrainer
from datasets import load_dataset

trainer = DPOTrainer(
    model="Qwen/Qwen3-0.6B",
    train_dataset=load_dataset("trl-lib/ultrafeedback_binarized", split="train"),
)
trainer.train()
```

Integración con PEFT confirmada oficialmente en la misma página — DPO no exige elegir entre "adaptar con LoRA" o "alinear con preferencias": ambas se combinan pasando `peft_config=LoraConfig()` al `DPOTrainer`, y la doc da un tip operativo verificable: *"When training adapters, you typically use a higher learning rate (≈1e-5) than full fine-tuning since only new parameters are being learned."*

Curso oficial de HF con práctica guiada de DPO: **smol-course, Unit 2 — "Hands-On Exercise: Direct Preference Optimization with SmolLM3"**, [huggingface.co/learn/smol-course/unit2/3](https://huggingface.co/learn/smol-course/unit2/3) (verificado). Usa el dataset `Anthropic/hh-rlhf` (formato prompt/chosen/rejected) y el modelo `HuggingFaceTB/SmolLM3-3B`. **Hallazgo honesto que corrige una expectativa inicial**: este ejercicio del curso oficial de HF **no usa Colab** — recomienda HF Jobs (que exige plan HF Pro/Team/Enterprise de pago) o entrenamiento local con ≥16GB VRAM. No es, por tanto, la pieza que resuelve por sí sola "GPU gratuita" para DPO — ese rol lo cumple mejor el notebook de (d).

### (d) RLHF conceptual — por qué SFT/pretraining solos no bastan

Fuente primaria: **HF Blog — "Illustrating Reinforcement Learning from Human Feedback (RLHF)"**, [huggingface.co/blog/rlhf](https://huggingface.co/blog/rlhf) (verificado, fetch completo). Es la explicación de referencia que HF mantiene para este concepto exacto y responde directamente al "por qué no basta pretraining/SFT": *"Writing a loss function to capture these attributes seems intractable and most language models are still trained with a simple next token prediction loss."* — el problema no es que el pretraining sea insuficiente por poco entrenamiento, es que **no existe una función de pérdida programable a mano** para "qué respuesta prefiere un humano"; RLHF es la solución a ese vacío específico, no una mejora genérica.

Describe las tres etapas con precisión operativa: (1) partir de un LM ya preentrenado; (2) entrenar un **modelo de recompensa** que *"takes in a sequence of text, and returns a scalar reward which should numerically represent the human preference"* — entrenado con **rankings** de humanos, no puntuaciones directas, porque produce *"much better regularized dataset[s]"*; (3) ajustar el LM con PPO, donde la recompensa combina el modelo de preferencia con una penalización KL para evitar *"text that is gibberish but fools the reward model"*.

Notebook oficial complementario (nivel más práctico, mencionado por la propia documentación de TRL): **StackLLaMA**, [huggingface.co/blog/stackllama](https://huggingface.co/blog/stackllama) — guía completa de RLHF con PPO end-to-end. **Nota honesta de alcance**: no se verificó su contenido completo por WebFetch en esta investigación porque el propio DPO ya se posiciona, según el paper original y la documentación TRL, como la alternativa que la industria prefiere para la mayoría de casos — StackLLaMA queda citado como referencia de profundización (⭐), no como base del laboratorio principal.

Paper de referencia conceptual: **DPO — Rafailov et al. 2023**, [arxiv.org/abs/2305.18290](https://arxiv.org/abs/2305.18290) (verificado). Es la fuente más precisa sobre "por qué la industria migró hacia DPO": *"RLHF is a complex and often unstable procedure, first fitting a reward model... and then fine-tuning... using reinforcement learning... In this paper we introduce a new parameterization of the reward model in RLHF that enables extraction of the corresponding optimal policy in closed form, allowing us to solve the standard RLHF problem with only a simple classification loss."* — DPO no es "una alternativa distinta a RLHF", es una **reformulación matemática del mismo objetivo de RLHF** que elimina la necesidad de entrenar un reward model separado y de muestrear del LM durante el entrenamiento (lo que hace inestable a PPO). Resultado citado: *"fine-tuning with DPO exceeds PPO-based RLHF in ability to control sentiment of generations, and matches or improves response quality in summarization and single-turn dialogue while being substantially simpler to implement and train."*

### Notebook oficial reusable con GPU T4 gratuita — hallazgo central para el diseño del laboratorio

**TRL — lista oficial de ejemplos**, [huggingface.co/docs/trl/en/example_overview](https://huggingface.co/docs/trl/en/example_overview) (verificado): *"The notebooks are self-contained and can run on **free Colab**."* Confirma la existencia de `sft_trl_lora_qlora.ipynb` y notebooks equivalentes DPO/GRPO, todos con badge "Open in Colab".

Se inspeccionó el contenido real (no solo el listado) del notebook **`sft_trl_lora_qlora.ipynb`**, [github.com/huggingface/trl/blob/main/examples/notebooks/sft_trl_lora_qlora.ipynb](https://github.com/huggingface/trl/blob/main/examples/notebooks/sft_trl_lora_qlora.ipynb) (verificado leyendo el JSON crudo del notebook, celda por celda). Título literal de la celda 1: *"Supervised Fine-Tuning (SFT) with LoRA/QLoRA using TRL — on a Free Colab Notebook"*, y explícitamente *"all within a free Google Colab notebook (powered by a T4 GPU)"*. El notebook deja elegir modelo con VRAM estimada y semáforo de viabilidad marcado por el propio equipo de TRL:

| Modelo | VRAM estimada | Semáforo TRL |
|---|---|---|
| `ibm-granite/granite-4.0-micro` | ~3.3 GB | ✅ |
| `meta-llama/Llama-3.2-3B-Instruct` | ~4.7 GB | ✅ |
| `LiquidAI/LFM2-2.6B` | ~5.89 GB | ✅ |
| `google/gemma-3-4b-it` | ~6.8 GB | ⚠️ |
| `Qwen/Qwen2.5-7B-Instruct` | ~10.8 GB | ✅ |
| `Qwen/Qwen3-8B` | ~12.8 GB | ⚠️ |
| `unsloth/qwen3-14b-unsloth-bnb-4bit` | ~14.1 GB | ⚠️ |
| `google/gemma-3n-E2B-it` | — | ❌ "Upgrade to a higher tier of colab" |

Esta tabla, verificada directamente en el código fuente del notebook oficial (no en un tutorial de terceros), es la evidencia empírica más fuerte encontrada en toda esta investigación: confirma con precisión de GB qué cabe en la T4 de 16GB de Colab gratuito, y qué no cabe (`gemma-3n-E2B-it`). El notebook también muestra el `LoraConfig` real usado por defecto: `r=32, lora_alpha=32, target_modules=[...todos los proyecciones de atención y MLP...]`.

**Recomendación derivada para el laboratorio**: `meta-llama/Llama-3.2-3B-Instruct` o `ibm-granite/granite-4.0-micro` son los candidatos más seguros (holgura amplia sobre 16GB, margen para el resto de la sesión de Colab — activaciones, dataset, evaluación en la misma runtime). `ibm-granite/granite-4.0-micro` no requiere aceptar licencia gated en el Hub (a diferencia de Llama), lo cual es preferible para un laboratorio de nivel N7 donde no se quiere que un estudiante se bloquee por un formulario de acceso de Meta el mismo día del laboratorio — esta es una decisión de diseño propia de la Academia, no una recomendación literal de la fuente.

---

## 2. Errores de novato documentados específicamente

**LoRA — elegir `r` sin criterio.** La guía PEFT es explícita en que `r` controla directamente cuántos parámetros nuevos existen (citado arriba), pero no da una regla numérica única de "usa este valor". Se buscó específicamente evidencia de foros/discusiones oficiales sobre `alpha` vs `r`: se encontró y se verificó por fetch completo la discusión **huggingface/peft #1387**, [github.com/huggingface/peft/discussions/1387](https://github.com/huggingface/peft/discussions/1387). **Corrección honesta de una hipótesis inicial**: una búsqueda preliminar sugería que la regla "α = 2r" estaría documentada ahí; el fetch completo de la discusión la contradice — el contenido real dice, citado verbatim: *"If anyone is confused about setting alpha for rsLoRA, just leave it to whatever the default is and sweep the rank."* Es decir, la comunidad de mantenedores de PEFT recomienda **no perseguir una fórmula fija de `alpha`**, sino barrer `r` con `alpha` en su valor por defecto — dato que se declara aquí precisamente para no trasladar al laboratorio una regla que no está realmente respaldada por la fuente que se iba a citar.

**QLoRA mal configurada.** Documentado con precisión en **PEFT — Troubleshooting**, [huggingface.co/docs/peft/developer_guides/troubleshooting](https://huggingface.co/docs/peft/developer_guides/troubleshooting) (verificado, fetch completo). Errores reales con causa/síntoma/solución documentados por HF mismo:
- `ValueError: Attempting to unscale FP16 gradients` — causa raíz explícita: *"the model was loaded with dtype=torch.float16 and then used in an automatic mixed precision (AMP) context... when using AMP, trainable weights should never use fp16."* Solución dada con código: castear los parámetros entrenables a `float32` o usar `cast_mixed_precision_params()`.
- **Modelo cargado incorrectamente tras entrenar** — *"A common error is trying to load a trained model with `get_peft_model()` which is incorrect"*, cuando debía usarse `PeftModel.from_pretrained()`.
- **Capas aleatoriamente inicializadas no guardadas** (relevante si el módulo toca clasificación además de generación) — si no se añaden a `modules_to_save`, el checkpoint pierde la cabeza entrenada y al recargar el modelo se obtienen resultados "completamente distintos" sin error explícito, el fallo silencioso más peligroso de la lista.
- **Estado "irregular" con múltiples adaptadores** — diagnosticable con `get_layer_status()`/`get_model_status()`, métodos que la propia documentación recomienda como primer paso de diagnóstico antes de sospechar nada más.

**Overfitting con datasets pequeños.** No se encontró una página oficial de HF dedicada específicamente a "overfitting en LoRA con pocos datos" (se declara la ausencia en vez de forzar una cita). La evidencia más cercana y verificable combina dos fuentes: (1) la guía conceptual de PEFT, que vincula directamente rango alto con más parámetros entrenables (citado en 1a) — más parámetros libres con un dataset pequeño es la fórmula estructural del sobreajuste; (2) el propio flag `lora_dropout` que aparece en todos los ejemplos de código oficiales de PEFT (`LoraConfig(..., lora_dropout=0.05, ...)`, visible en la guía de quantization citada arriba) — su sola presencia en el ejemplo por defecto de la documentación es evidencia indirecta de que el equipo de PEFT considera el sobreajuste un riesgo esperable por defecto, no un caso extremo.

**No tener baseline de evaluación antes/después.** Ninguna de las páginas oficiales de PEFT o del DPO Trainer impone un paso de evaluación baseline obligatorio en el código — es una laguna real, declarada honestamente. El propio ejercicio oficial de smol-course (verificado en 1c) refuerza este hallazgo: solo ofrece **evaluación posterior** al entrenamiento (probar prompts sueltos tras el DPO), sin comparación explícita contra el modelo antes de entrenar. Esto es una carencia pedagógica real en la fuente oficial misma, no un error del estudiante — y es exactamente la razón por la que el propio DOC-12 (§2.13, "instrumentos de evaluación") exige que el laboratorio de la Academia la supla explícitamente, algo que ninguna fuente consultada hace por sí sola.

**Confundir RLHF con "simplemente dar feedback".** Búsqueda específica de este malentendido documentado en foros no encontró una fuente única con autoridad citable (se declara la ausencia). Lo más cercano y verificable es la propia explicación de HF Blog RLHF (1d): el post dedica una sección entera a justificar por qué hace falta un **modelo de recompensa entrenado** en vez de feedback humano en vivo — *"the reward model... allows... training to continue offline without a human in the loop"*. Esa necesidad de una capa intermedia entrenada (el reward model) es, en sí, la refutación implícita de "RLHF es solo dar feedback": si fuera solo eso, no habría una etapa 2 completa dedicada a convertir preferencias humanas en una función escalar reutilizable sin humanos presentes.

**No entender qué mide un dataset de preferencias (chosen/rejected).** Bien documentado, con múltiples formatos reales, en la propia página de DPO Trainer (citada en 1c): el error de novato más probable, según la estructura misma de la documentación, es tratar `chosen`/`rejected` como dos ejemplos de entrenamiento independientes (como si fuera SFT con datos duplicados) en vez de como un **par comparativo** donde lo que se optimiza es el margen entre ambos — la propia fórmula de la pérdida DPO documentada (`log σ(β(log π(y+)/π_ref(y+) − log π(y-)/π_ref(y-)))`) solo tiene sentido si el estudiante entiende que ambos miembros del par se procesan juntos, nunca aislados.

---

## 3. Síntesis crítica — qué mecanismo pedagógico funciona y por qué (recursos modestos, T4 típica)

Nunca colección — la síntesis:

**La cifra ancla antes que la fórmula.** El hallazgo más útil de toda la investigación no es un mecanismo pedagógico de una fuente en particular, sino un patrón que aparece consistentemente en las fuentes oficiales mismas: cada una abre con un número dramático antes de cualquier código — LoRA con "10.000× menos parámetros" (paper), QLoRA con "65B en una GPU de 48GB" / "20B en Colab gratis" (blog), DPO con "matches or improves... while being substantially simpler" (paper). Esto no es casualidad de redacción: es el mismo patrón "por qué antes que comando" que DOC-12 §0.1 ya identificó en Pro Git y Missing Semester, aplicado aquí a ML — la cifra funciona como la "analogía que debe sobrevivir sola" (DOC-12 §2.2): un estudiante que solo recuerde "LoRA = 10.000× menos parámetros para fine-tunear" ya tiene el modelo mental correcto, incluso sin recordar la fórmula de descomposición de rango.

**Por qué esto importa más con recursos modestos, no menos.** Un estudiante con una T4 gratuita de Colab no tiene margen de error: una sesión que se queda sin memoria a mitad de entrenamiento (`CUDA out of memory`) cuesta la sesión completa de Colab (límite de tiempo, cola de espera para reconectar GPU). La tabla de VRAM verificada del notebook oficial de TRL (sección 1, "Notebook oficial reusable") es, por tanto, más valiosa pedagógicamente que cualquier explicación abstracta de cuantización: le da al estudiante un presupuesto de memoria concreto y verificable *antes* de ejecutar nada, cumpliendo exactamente el principio de DOC-12 §2.3 (requisitos verificables, no afirmaciones vagas).

**Medir el efecto real, no "se ve mejor" — el hueco que hay que llenar activamente.** El hallazgo honesto del punto 2 (ninguna fuente oficial impone baseline antes/después) es el dato más importante de toda esta investigación para el diseño del laboratorio: significa que ese componente **no puede heredarse de un notebook oficial copiado**, tiene que construirse como aportación propia de la Academia. Con recursos modestos, "evaluación propia" razonable significa: (i) un conjunto fijo de 5-10 prompts de prueba, congelados antes de entrenar; (ii) generar con el modelo base y guardar las salidas; (iii) entrenar (LoRA o DPO); (iv) generar con el modelo ajustado sobre los mismos prompts; (v) comparación lado a lado, no una métrica automática sofisticada (BERTScore, perplejidad comparativa) que un estudiante de recursos modestos no puede calibrar sin supervisión — la propia guía de RLHF de HF ya advierte que las métricas automáticas tipo BLEU/ROUGE "simply compare generated text to references with simple rules and are thus also limited", así que no tiene sentido pedirle al estudiante que confíe en ellas más de lo que la industria misma confía.

**DPO es la puerta de entrada correcta a post-entrenamiento por preferencias, RLHF/PPO es el porqué, no la práctica.** El paper de DPO es inequívoco en que DPO resuelve el *mismo* problema que RLHF, con una reformulación matemática — no es una técnica alternativa con objetivo distinto. Esto tiene una consecuencia pedagógica directa: el módulo no necesita que el estudiante implemente PPO (inestable, con múltiples modelos en memoria simultáneamente — inviable en una T4 de recursos modestos, y la propia guía TRL confirma casos "OOM with Colab GPUs" incluso para GRPO, más liviano que PPO clásico). El estudiante necesita **entender por qué existía el problema que PPO resolvía primero** (de ahí RLHF conceptual, sin código, con el blog de HF) y **ejecutar de verdad DPO** (código real, con recursos modestos, TRL lo permite en una celda).

**Falsabilidad de esta síntesis**: si una futura revisión del registro de ejecución (DOC-12 §6) muestra que los estudiantes llegan al laboratorio DPO sin comprender realmente qué es un reward model — es decir, que omitir PPO en código deja un hueco conceptual real y no solo una simplificación razonable —, esta decisión debería reconsiderarse añadiendo una sección conceptual más profunda de PPO (sin código) antes de DPO, no solo la explicación actual de tres etapas del blog de RLHF.

---

## 4. Estrategia propuesta de secuenciación para N7.M3

**Fuera de alcance declarado (y por qué)**: implementación de PPO en código (inestable, multi-modelo, no cabe con margen en una T4 de recursos modestos — se cubre solo conceptualmente); RLHF con modelo de recompensa entrenado desde cero (StackLLaMA cubre esto si un estudiante quiere profundizar, citado como ⭐); técnicas de post-entrenamiento más recientes que DPO (GRPO, ORPO, KTO — mencionadas en la tabla de TRL solo como panorama de "hacia dónde sigue esto", no como contenido evaluado del módulo).

| Día | Tema | Modalidad | Justificación |
|---|---|---|---|
| 1 | Contexto + modelo mental de LoRA (sin GPU real todavía) | Mixta: explicación conceptual + demo con numpy de descomposición de rango en Pyodide | Ver nota Pyodide abajo — la matemática de `W + BA` se puede tocar con matrices pequeñas de juguete en el navegador, sin esperar cola de Colab, antes de gastar cuota de GPU en algo que todavía no se entiende |
| 2 | Laboratorio DOC-12: LoRA real en Colab T4 — fine-tuning de un modelo pequeño (`ibm-granite/granite-4.0-micro` o `Llama-3.2-3B-Instruct`) sobre el notebook oficial de TRL adaptado | DOC-12 (GPU real) | Ejecuta lo que el Día 1 explicó; error inducido en vivo candidato: elegir `r` demasiado alto en un dataset pequeño y mostrar la señal de sobreajuste en la pérdida de validación |
| 3 | QLoRA — cuantización + por qué cabe en la misma T4 con un modelo más grande | DOC-12 (continuación de la misma sesión o nueva) | Requiere que el estudiante ya tenga el modelo mental de LoRA sólido (Día 1-2) antes de añadir la variable de cuantización — evita conflicto cognitivo doble |
| 4 | Evaluación propia antes/después — construir el arnés de comparación (prompts fijos, generación base vs. ajustado) | DOC-12, reutilizando el modelo del Día 2/3 | Se coloca deliberadamente después de tener un modelo ya ajustado, nunca antes — el estudiante necesita algo real que medir; cierra el hueco identificado en el punto 3 que ninguna fuente oficial cubre por sí sola |
| 5 | RLHF conceptual — las tres etapas, por qué SFT solo no basta, qué es un reward model | Mixta: lectura guiada del blog de HF + preguntas de comprensión, sin código de PPO | Contenido explícitamente no ejecutable con recursos modestos; el objetivo es el modelo mental, verificable con las preguntas de §2.6, no la ejecución |
| 6 | DPO — dataset de preferencias (chosen/rejected) y entrenamiento real | DOC-12 (GPU real, TRL `DPOTrainer` + PEFT combinados) | Práctica ligera pedida explícitamente por DOC-10; reutiliza el mismo modelo pequeño de días anteriores para que el estudiante compare tres versiones de sí mismo: base → LoRA/QLoRA → +DPO |
| 7 | Desafío + evaluación final + repetición desde cero sin guía | DOC-12 | Cierre conforme a §2.9/§2.10/§2.13 de DOC-12; el desafío inédito puede ser: aplicar el flujo completo a un dataset de preferencias distinto, no visto, con un modelo igual de pequeño |

**¿Es razonable que TODO el módulo sea DOC-12, o hay una parte Pyodide?**

No conviene que sea 100% DOC-12. Hay una porción genuinamente Pyodide-construible y pedagógicamente valiosa **antes** de tocar una GPU real: la matemática de la descomposición de bajo rango de LoRA (`ΔW ≈ B·A`, con matrices pequeñas de juguete, por ejemplo 8×8 o 16×16) se puede implementar y visualizar con NumPy puro dentro del sandbox del Campus, sin necesidad de PyTorch, transformers, ni GPU — exactamente el criterio de frontera de DOC-12 §5, punto 1 ("¿el estudiante ejecuta esto dentro de la página del Campus, sin instalar nada?" → sí, para esta pieza concreta). Esto sigue el mismo patrón que N5.M2 ya aplica (según DOC-10 línea 164, "tensores, autograd" en PyTorch conceptualmente antes de GPU real) y evita gastar cuota limitada de GPU gratuita en un concepto que no la necesita — el estudiante llega al Día 2 (primer laboratorio DOC-12 real) ya con el modelo mental de por qué `r` reduce parámetros, en vez de aprenderlo por primera vez mientras espera que Colab le asigne una T4.

El resto del módulo (QLoRA, entrenamiento real, evaluación con modelo real, DPO) no tiene alternativa Pyodide razonable: todos dependen de cargar pesos de un modelo preentrenado real de varios GB y de cómputo en GPU, que es precisamente el criterio de DOC-12 §5 punto 2-3 (el resultado depende de hardware real, no del navegador).

---

## Clasificación de evidencia y honestidad metodológica

**Evidencia sólida (fetch completo verificado, fuente oficial primaria)**: PEFT LoRA conceptual guide, PEFT quantization guide, PEFT troubleshooting, TRL DPO Trainer docs, TRL example_overview, HF Blog RLHF, HF Blog 4-bit/QLoRA, contenido real del notebook `sft_trl_lora_qlora.ipynb`, papers de LoRA/QLoRA/DPO (abstracts).

**Evidencia parcial, declarada como tal**: smol-course Unit 2 (DPO) — verificado, pero su ejercicio no usa Colab, dato que corrige una expectativa inicial del brief de esta investigación; discusión huggingface/peft#1387 — verificada, pero contradice la hipótesis de "α = 2r" que una búsqueda preliminar sugería, así que se cita la evidencia real encontrada, no la esperada.

**Ausencia declarada, no rellenada**: no existe una página oficial de HF dedicada a "overfitting de LoRA con datasets pequeños" ni a "confundir RLHF con dar feedback" como malentendidos documentados explícitamente por nombre — en ambos casos se construyó la evidencia por inferencia razonada desde fuentes oficiales adyacentes, declarando el paso inferencial en vez de presentarlo como cita directa. StackLLaMA no se verificó por fetch completo en esta pasada — queda como pendiente si el laboratorio de RLHF conceptual necesitara profundizar más allá del blog "Illustrating RLHF".

**Falsabilidad**: si en la ejecución real del módulo (registro DOC-12 §6) el ejercicio de smol-course Unit 2 resulta ser adaptable a Colob gratuito pese a su documentación actual (por ejemplo, con un modelo aún más pequeño que SmolLM3-3B), debería preferirse sobre construir un laboratorio DPO propio desde cero — hoy no se recomienda como base porque su camino oficial documentado (HF Jobs) no es gratuito.
