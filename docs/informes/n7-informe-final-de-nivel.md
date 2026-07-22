# Informe Final de Nivel — N7 · LLM Engineering

**Estado:** N7 completo (Pasos 1-9 del flujo institucional), candidato a v1.0.0 **con 3 reservas nombradas** (ver §7 de este informe y `syl-n7.md` §6.5-6.6), a la espera del veredicto definitivo del Director. Mismo patrón que SYL-N3 usó antes de que el Director resolviera sus propias reservas explícitamente.

**Fecha:** 2026-07-21.

---

## 1. Objetivo global del nivel

N7 es el primer nivel de ET4 (Sistemas de IA, N7-N10) — el punto donde el estudiante deja de entrenar modelos (ET3) y empieza a construir sistemas alrededor de ellos. Al terminar N7, el estudiante puede: llamar a un modelo real de producción con su contrato completo (roles, streaming, tool calling, structured output, costes); construir un sistema de recuperación aumentada (RAG) real, de extremo a extremo, sobre un corpus propio; ajustar el comportamiento de un modelo con LoRA/QLoRA/DPO en una GPU gratuita, midiendo el efecto con evidencia propia; y evaluar y proteger ese sistema con disciplina real — nunca con afirmaciones sin sustento. El artefacto que certifica todo esto es la **Columna vertebral V1**, un sistema real que N8, N9 y N10 (construidos en paralelo) van a asumir que existe y van a extender.

## 2. Competencias desarrolladas

Las 5 competencias de DOC-01 (C-N7-01…05), cada una con cobertura verificada por al menos un módulo completo y un instrumento de compuerta, confirmada por auditoría independiente (`docs/informes/n7-auditoria-integral.md`):

- **C-N7-01** (RAG completo end-to-end): M1 (7 laboratorios) + M2 (10 días/laboratorios) + Capstone hito 2.
- **C-N7-02** (fine-tuning LoRA/QLoRA con evaluación propia): M3 (7 días/laboratorios) + Capstone hito 3.
- **C-N7-03** (diseña evaluaciones, aplica guardrails): M4 (6 laboratorios) + Capstone hito 4.
- **C-N7-04** (design doc defendible): M4.T6 + Capstone hito 5.
- **C-N7-05** (inglés profesional en documentación): checklist del capstone (corregido tras auditoría, ver `docs/informes/n7-auditoria-integral.md` Hallazgo 3).

## 3. Modelos mentales fundamentales que N7 instala

- **El contrato de una API de modelos no es universal entre proveedores** (M1.T1) — roles, parámetros obligatorios, estructura, cambian entre Anthropic y OpenAI; un sistema real necesita una función que abstraiga esa diferencia, no que la asuma igual en todos lados.
- **Streaming es la misma respuesta, entregada en fragmentos — nunca un tipo de dato distinto** (M1.T2).
- **La memoria conversacional no existe en el modelo — es el propio programa reenviando el historial completo en cada llamada** (M1.T2b).
- **El chunking es la decisión de mayor impacto de un pipeline de RAG** — un chunking mal hecho no se arregla con un mejor modelo de generación después (M2.T1-T2).
- **Recuperar bien y usar bien lo recuperado son dos problemas distintos con la misma respuesta mala como síntoma** — lost-in-the-middle (M2.T6).
- **LoRA es un parche de bajo rango que nunca toca el peso original** — el modelo mental de `ΔW ≈ B·A`, verificado a mano antes de una sola llamada de GPU (M3.T1.Día1).
- **QLoRA resuelve un problema que cuantizar solo no resuelve** — reentrenar un modelo cuantizado es inestable sin PEFT (M3.T1.Día3).
- **DPO no es una alternativa a RLHF — es la misma optimización, reformulada matemáticamente para evitar un reward model separado** (M3.T2).
- **Un juez LLM sin validar es una opinión rápida, nunca una medición objetiva por el solo hecho de ser automática** — la evidencia (53.8-58.5% de precisión, casi azar) obliga a la validación como parte de construir el juez, no como advertencia aparte (M4.T3).
- **"Mi sistema es seguro" no es una afirmación defendible — solo lo es "medí esto, con este método, y obtuve este resultado"** (M4.T6).

## 4. Errores que N7 elimina (o al menos hace visibles y diagnosticables)

Copiar la estructura de mensajes de un proveedor a otro sin adaptar; sumar manualmente el campo `usage` de eventos de streaming (acumulativo, no incremental); dejar crecer el historial de una conversación sin ningún control de coste; confundir JSON mode con garantía de esquema exacto; elegir un rango de LoRA sin criterio; omitir `prepare_model_for_kbit_training()` antes de QLoRA; tratar `chosen`/`rejected` de DPO como ejemplos independientes en vez de un par comparativo; desplegar un juez LLM sin medir su acuerdo con criterio humano; atacar el componente equivocado de un RAG (retrieval vs. generación) por no haberlos medido por separado; tratar seguridad como un anexo del diseño en vez de una sección constitutiva del design doc.

## 5. Qué queda fuera de N7 y por qué

Implementación de PPO en código (M3.T2.Día1) — inestable, requiere múltiples modelos en memoria, inviable con recursos modestos; declarado explícitamente, con StackLLaMA como recurso de profundización. Orquestación multi-agente y planning (delegado a N8, frontera verificada limpia en el Paso 9a). Evaluación con ataques reales contra sistemas de terceros (M4 completo) — encuadre estrictamente defensivo, pruebas de robustez solo contra el propio sistema del estudiante. Prompt engineering como disciplina dedicada (few-shot, chain-of-thought sistemático) — **declarado como reserva nombrada, no como decisión de alcance cerrada** (ver §7).

## 6. Dependencias para N8 (Herencias Declaradas finales)

Consolidadas en `syl-n7.md` §7.2 contra el SYL-N8 real (0.3.0-draft), no contra el vacío: manejo de credenciales (confirmado explícitamente por N8 §3 principio 4, cita textual reconociendo la herencia); RAG operativo completo con arquitectura documentada y puntos de extensión previstos; disciplina de evaluación con juez validado y evaluación por componente; encuadre defensivo de guardrails/riesgos (confirmado por N8 M5). Una herencia con hallazgo real sin resolver: **H-N8-05**, redundancia de tool calling entre N7.M1.T3 y N8.M1.T2 — pendiente de arbitraje del Director, no resoluble unilateralmente desde N7.

## 7. Riesgos pedagógicos abiertos (las 3 reservas nombradas)

1. **Reconciliación de horas contra DOC-10 (~400h) — hecha por primera vez en esta auditoría, con resultado real de ~140h identificadas explícitamente**, notablemente por debajo de la estimación de DOC-10 incluso sumando capstone, bibliografía y componentes no capturados por `duracionTotal` (`syl-n7.md` §6.5). No se infló el contenido artificialmente para cuadrar la cifra — se declara la brecha honestamente para decisión del Director.
2. **Prompt engineering subrepresentado** — M1 se llama "Inferencia y prompting" pero prompting como disciplina evaluada (no solo mecánica de API) queda relegado a lectura opcional. Hallazgo convergente de dos auditores independientes (`syl-n7.md` §6.6.1).
3. **M1.T1 no explora un proveedor sin tarjeta de crédito** — la disciplina de credenciales reales está bien justificada, pero excluye potencialmente a estudiantes sin método de pago sin que el laboratorio considere una alternativa real (`syl-n7.md` §6.6.2).

## 8. Hipótesis pendientes de validación (no de desarrollo)

- Si el orden Anthropic-primero/OpenAI-después en M1.T3 (tool calling) produce mejor transferencia que el orden inverso — sin evidencia externa localizada, a resolver con observación real de ejecución.
- Si el modelo recomendado (`ibm-granite/granite-4.0-micro`) sigue siendo la mejor opción de VRAM/licencia cuando un estudiante real ejecute M3 — los modelos y sus tablas de VRAM cambian con el tiempo, verificado como vigente solo al momento de esta construcción (2026-07-21).
- Si el error inducido en vivo de M2.T7 (elegido entre chunking/embeddings/reranking al redactar el contenido real) produce mejor conflicto cognitivo que las otras dos opciones — decisión tomada, pendiente de confirmación con ejecución real.
- Si la reserva de prompt engineering (§7.2) debe resolverse ampliando M1 o aceptarse como alcance ya cerrado — pendiente de decisión explícita, no de evidencia adicional.

## 9. Decisiones de diseño más importantes

- **Key propia del estudiante desde M1.T1, sin modo simulado** — decisión del Director, documentada con justificación pedagógica completa antes de construir una sola lección (`docs/investigacion/n7-m1-manejo-credenciales.md`).
- **Narrativa de sistema único evolutivo (Columna vertebral V1)** — cada laboratorio construye sobre el anterior explícitamente (`llamar_modelo()` de M1 reutilizado 27 veces en M2-M4, verificado por auditoría técnica), instrucción explícita del Director tras la aprobación del syllabus.
- **M3 (fine-tuning) admite "aplicado o descartado conscientemente" como resultados igualmente válidos en el capstone** — decisión de diseño explícita, examinada y confirmada por la auditoría adversarial como juicio de ingeniero senior real, no un estándar rebajado.
- **Qdrant sobre Chroma/Pinecone; sentence-transformers local sobre API de pago; `ibm-granite/granite-4.0-micro` sobre Llama** — cada elección tecnológica con tabla de comparación explícita y trade-offs documentados en el propio contenido, instrucción explícita del Director de justificar alternativas siempre.
- **Encuadre defensivo estricto en M4** — nunca enseñar a atacar, solo a reconocer y mitigar; pruebas de robustez exclusivamente contra el propio sistema del estudiante.

## 10. Qué aprendió la Academia al construir N7

Que un módulo llamado "Inferencia y **prompting**" puede, sin que nadie lo note hasta una auditoría adversarial, construirse casi enteramente como mecánica de API sin ejercicios dedicados a prompting real — el nombre de un módulo no garantiza su contenido, hay que verificarlo. Que la disciplina de `hints[0]` conceptual (ya fallada tres veces en N1/N2/N3) puede repetirse una cuarta vez incluso con esa historia documentada explícitamente en la guía maestra que el propio autor leyó antes de escribir la primera línea — la conciencia de un error pasado no lo previene automáticamente, solo una verificación activa (barrido automatizado) lo detecta con certeza. Que cuando dos niveles hermanos se construyen en paralelo con syllabus reales ya existentes (a diferencia de N1→N2→N3, construidos en estricta secuencia), la auditoría de coherencia deja de ser un ejercicio contra el vacío y puede encontrar inconsistencias reales entre documentos — el Paso 9a de N7 encontró tres (redundancia de tool calling con N8, el marco arquitectónico de N8 no corroborado por N6, y las propias herencias de N6 confirmadas correctamente) que ningún nivel anterior pudo encontrar por no tener contra qué verificar. Que declarar honestamente una reconciliación de horas nunca hecha, con el número real (~140h de ~400h), es más valioso institucionalmente que dejarla implícita — la disciplina de transparencia que EVT-062 ya instaló para N0-N2 se sostiene también cuando el resultado es incómodo.

---

*Con este informe, N7 completa el flujo institucional de 9 pasos, candidato a v1.0.0 con 3 reservas nombradas y acotadas — a la espera del veredicto definitivo del Director.*
