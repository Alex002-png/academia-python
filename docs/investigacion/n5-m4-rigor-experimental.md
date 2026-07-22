# Investigación Pedagógica — N5.M4 · Rigor experimental

*(DOC-11 §0bis — documento acumulativo por tema del módulo, mismo patrón de los anteriores.)*

## 1. N5.M4.T1 · El método científico aplicado a deep learning — cómo enseñan este concepto exacto las fuentes de referencia

- **DOC-03 A6** (modelo pedagógico de la Academia, ya citado desde N0): "experimento estructurado hipótesis→predicción→conclusión" — este tema no introduce el método científico desde cero, lo FORMALIZA con vocabulario propio de deep learning (*ablation study*, variable aislada) sobre una práctica que el estudiante ya viene ejercitando desde niveles anteriores.
- **DL Specialization (Ng)**: la especialización completa insiste en reportar resultados de múltiples corridas y en el ablation study como herramienta estándar de diagnóstico — mismo principio, aplicado aquí con datos ya producidos por el propio estudiante en M2-M3, no ejemplos genéricos de terceros.

## 2. Errores de novato documentados para este concepto exacto

- Cambiar más de una variable a la vez entre corridas — mitigado con `variables_distintas`/`es_experimento_valido` (Ejercicios 3-4), que convierten la detección de esta falla en algo verificable por código, no solo una advertencia en prosa.
- Confiar en una sola corrida — el retoFinal demuestra, con ejecución real, un caso donde la única corrida mostrada (0.80) es engañosa: con 4 corridas, la configuración "ganadora" resulta ser la peor en promedio (0.625 vs 0.75) y 362 veces más variable.

## 3. Síntesis crítica

El tema reutiliza deliberadamente resultados REALES ya producidos en M2-M3 (el historial de pérdida con/sin `zero_grad` de M2.T3, la arquitectura de M3.T2) en vez de datos sintéticos genéricos — la disciplina de rigor experimental se aprende mejor aplicada a algo que el propio estudiante ya construyó y puede verificar, no a un ejemplo abstracto.

## 4. Estrategia adoptada para este tema

Cada valor —incluyendo el desafío final sobre n=1— se generó ejecutando Python real (`verify_n5m4t1_full.py`) antes de escribirse; harness de Node: 10/10 pass. Los datos del "Laboratorio · Ablation study de una CNN real" (Ejercicio del reto) se declaran EXPLÍCITAMENTE como ilustrativos en su enunciado (basados en el orden de magnitud real de M3.T2, no una re-ejecución de ablation real, que habría requerido 3 entrenamientos adicionales de CNN) — honestidad metodológica explícita en vez de presentar un número inventado como si fuera resultado de una corrida real no documentada. **Falsable por:** si una futura auditoría dispone de presupuesto de cómputo adicional, sustituir estos números ilustrativos por un ablation real de 3 corridas de M3.T2 (quitar segunda capa conv, quitar maxpool, reducir la capa densa) sería una mejora genuina — declarado aquí como pendiente, no oculto.
