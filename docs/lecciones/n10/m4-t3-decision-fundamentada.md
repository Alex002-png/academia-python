# N10.M4.T3 — Decisión fundamentada: laboratorio integrador (cierra M4 y los 4 módulos de N10)

*Construido bajo DOC-12 v1.0.0. Investigación pedagógica: `docs/investigacion/n10-m4-juicio-ecosistema.md`. Laboratorio de cierre de M4 y de los 4 módulos completos de N10 — integra M1, M2, M3 y M4 antes del capstone.*

**La gran pregunta de este laboratorio:** con todo M1-M4 ya construido, ¿qué stack completo eliges para tu columna vertebral local — y puedes defenderlo de punta a punta?

**Entorno objetivo:** terminal local, RTX 5070.

**Fluencia de terminal asumida:** completa (M1-M4.T1-T2).

**Prerrequisitos técnicos:** M1, M2, M3 y M4.T1-T2 completos, con toda tu evidencia a mano.

**Prerrequisitos conceptuales:** toda la evidencia producida en los 16 laboratorios anteriores de N10.

**Duración estimada — desglosada:** repaso de evidencia de M1-M4 (~15 min) + informe de adopción/descarte de vLLM (~25 min) + decisión de stack completo (~30 min) + desafío: herramienta nueva no evaluada (~25 min) + evaluación (~15 min) → **total realista: 95-115 min.**

**Nivel de dificultad:** intermedio, máxima integración del nivel.

**Fuera de alcance de este laboratorio (y por qué):** el diseño detallado del capstone en sí corresponde al Paso 4 del flujo institucional de construcción del nivel, posterior a este laboratorio.

**Conexión con el laboratorio anterior y el siguiente:** M4.T2 dio el prototipo real. Este laboratorio integra todo N10 en una decisión defendible y cierra el nivel antes del capstone. Deja abierta la pregunta que el capstone resuelve: con este stack decidido, ¿cómo se construye y documenta la columna vertebral local completa?

---

## 1. Objetivo

Al terminar vas a poder producir un informe de adopción o descarte de vLLM integrando evidencia de M1-M4 citada por dirección exacta, y evaluar con el mismo método una herramienta completamente nueva.

## 2. Contexto

C-N10-03 exige "evalúa herramientas del ecosistema local... con prototipo, medición y juicio de adopción o descarte" — este es el instrumento que produce esa evidencia de forma completa e integrada, y el laboratorio que cierra los 4 módulos de N10 antes del capstone. La competencia real que certifica no es "sabe usar Ollama/llama.cpp/vLLM" — es "sabe evaluar con método cualquier herramienta que el ecosistema produzca después de que esta Academia termine de escribirse".

## 3. Requisitos

- M1, M2, M3 y M4.T1-T2 completos, con toda tu evidencia (tablas, informes, resultados de smoke tests) a mano.

☐ **Checkpoint 0 —** localizaste tus documentos de decisión de M1.T4, M2.T4 y M3.T5.

## 4. Explicación conceptual

**Modelo mental de cierre de M4 y de N10 completo:** el juicio de ecosistema es la competencia que sobrevive a cualquier herramienta específica de hoy. Ollama, llama.cpp o vLLM pueden quedar obsoletos o ser reemplazados mañana; el método —criterios declarados de antemano, prototipo real, medición propia, veredicto honesto de adopción o descarte— no. Hoy integras las cuatro piezas de N10 en dos artefactos: una decisión real para tu proyecto, y la prueba de que el método generaliza.

## 5. Ejecución paso a paso

**Paso 1 — Escribe el informe de adopción/descarte de vLLM**

Con tu resultado real de M4.T2 (Ruta A o B), produce un veredicto formal, citando evidencia exacta.

**Paso 2 — Decide el stack completo, integrando los 4 módulos**

Con toda tu evidencia de N10 (runtime de M1, quant type de M2, límites de hardware de M3, herramienta de serving de M4), escribe la decisión de stack completo.

**Paso 3 — Aplica el mismo método a una herramienta nunca vista**

Elige una herramienta real no mencionada en N10 (LM Studio, text-generation-webui, u otra vigente) e investígala con el método de M4.T1.

## 6. Error inducido en vivo

Revisa tu informe del Paso 1: si tu veredicto fue "descarte" de vLLM, verifica ahora mismo si el issue que documentaste sigue abierto o ya se resolvió. Observa si tu decisión seguiría siendo la misma.

## 7. Comprensión

- ¿Por qué un informe de "descarto vLLM porque no corre en mi hardware" es tan completo como uno de "adopto vLLM porque midió X mejora"?
- En el Paso 3, ¿qué parte del proceso fue idéntica a M4.T1-T2, y qué parte tuviste que adaptar?
- Si el estado de un issue cambia con el tiempo, ¿qué te dice eso sobre la fecha de validez de cualquier decisión documentada?

## 8. Puntos de verificación

☐ Informe de adopción/descarte de vLLM completo.
☐ Decisión de stack citando los 4 módulos por dirección exacta.
☐ Evaluación completa de una herramienta nueva no vista en el nivel.
☐ Verifiqué si mi decisión de M4.T2 seguiría siendo válida hoy.

## 9. Diagnóstico de errores

| Error | Por qué aparece | Cómo se diagnostica | Cómo se comprueba la hipótesis | Cómo se soluciona | Cómo se previene |
|---|---|---|---|---|---|
| Mi decisión de stack solo cita 1-2 módulos | Es fácil recordar la decisión reciente (M4) y olvidar reutilizar M1-M3. | ¿Aparece un dato específico de cada módulo? | Revisa tus informes/tablas de cada módulo. | Añade la cita faltante con dirección exacta. | Mantener un documento acumulativo de decisiones desde M1. |
| La evaluación de la herramienta nueva es superficial | Sin la guía paso a paso, es fácil relajar el estándar de evidencia. | Compara contra tu tabla del Paso 3 de M4.T1. | ¿Citaste al menos una fuente real? | Vuelve a investigar con el mismo rigor. | Tratar el Paso 3 como repetición real del método, no un resumen apresurado. |

## 10. Mini laboratorio

Imagina compartir tu decisión de stack con otro estudiante con hardware distinto (sin GPU dedicada) — ¿qué cambiaría, qué se mantendría?

## 11. Desafío — Laboratorio integrador de cierre de M4 y de los 4 módulos de N10

Escribe la versión final de tu documento de decisión de stack, listo para ser el primer artefacto de diseño de tu capstone: runtime (M1), quant type y justificación (M2), límites de hardware y plan de contingencia (M3), herramienta de serving con veredicto (M4) — cada pieza con evidencia citada por dirección exacta.

## 12. Buenas prácticas profesionales

- Fecha tus decisiones de adopción/descarte — el estado de compatibilidad de una herramienta joven cambia rápido.
- Mantén un documento vivo de decisiones de stack, no una decisión congelada.
- No relajes el estándar de evidencia al evaluar sin guía paso a paso.

## 13. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Tag |
|---|---|---|---|---|---|---|
| [vLLM — Documentación oficial](https://docs.vllm.ai/en/latest/getting_started/installation/gpu.html) | vLLM Project | EN | ~10 min | Intermedio | Releerla para verificar si el estado de compatibilidad cambió. | 🟣 Después |

## Evaluación

**Lo esencial en una frase:** el juicio de ecosistema es la competencia que sobrevive a cualquier herramienta específica de hoy — con los 4 módulos de N10 integrados, tienes un stack real decidido y la prueba de que puedes evaluar cualquier herramienta futura.

**Las siete capacidades de dominio:** explicar (adopción y descarte como veredictos igualmente válidos) · predecir (qué cambiaría para otro hardware, mini laboratorio) · detectar y corregir (integración incompleta) · usar en un proyecto (el documento del desafío es el primer artefacto real del capstone).

**Repetir desde cero, sin guía:** evalúa con el método completo una herramienta de cualquier dominio que nunca hayas evaluado formalmente.

**Pregunta metacognitiva de proceso:** de los 4 módulos de N10, ¿cuál cambió más tu forma de pensar sobre tener IA corriendo en tu propia máquina — y por qué ese, y no otro?
