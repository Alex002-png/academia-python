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

## 5. N5.M4.T2 · Reproducibilidad — cómo enseñan este concepto exacto las fuentes de referencia

- **PyTorch docs, "Reproducibility"** (ya citada en M2.T4, reutilizada aquí): mismo principio — cada generador de números aleatorios (Python `random`, `numpy.random`, `torch`) es independiente y necesita su propia semilla. Este tema generaliza el hallazgo de M2.T4 (específico de GPU/PyTorch) a la disciplina completa de las 3 fuentes.
- **MLOps / registro de experimentos** (herramientas reales como MLflow, Weights & Biases — mencionadas en `ing` sin cita de documento específico, honestidad metodológica: no hay una única fuente "oficial" de DOC-10 §7 para este subtema): el patrón de "nombre + semilla + hiperparámetros + resultado" es el mínimo común de cualquier sistema de registro de experimentos real.

## 6. Bug real encontrado y corregido por el propio harness — un tipo de bug NUEVO

El Ejercicio 3 originalmente esperaba valores numéricos EXACTOS de `numpy.random` sin semilla propia (`0.950714 0.731994 False`) — pero estos números resultaron ser **genuinamente no reproducibles entre ejecuciones del harness**, porque `numpy.random` sin semilla se inicializa desde entropía real del sistema operativo en cada proceso nuevo de Python. El harness, ejecutado en un proceso fresco (sin el estado acumulado de mi script de verificación original que sí encadenaba llamadas), obtuvo valores completamente distintos cada vez, revelando que el `check()` original nunca podría pasar de forma confiable — ni con la solución "correcta". **Corrección:** el ejercicio ahora imprime solo `r1 == r2` (que es SIEMPRE `False`, de forma confiable, porque dos números sin semilla nunca coinciden) en vez de los valores numéricos exactos, que por diseño no pueden fijarse. **Esta es una categoría de bug distinta a las dos anteriores de N5** (T3 y T5 tenían valores deterministas mal calculados; este tenía un valor inherentemente no-determinista tratado como si fuera fijo) — verificado ejecutando el harness 3 veces seguidas tras la corrección, confirmando 10/10 pass en las tres.

## 7. Síntesis crítica y estrategia adoptada

El tema completo demuestra la disciplina de reproducibilidad de forma recursiva: mientras enseña a fijar semillas correctamente, el propio proceso de construcción del tema tropezó con y corrigió un caso real de "aleatoriedad no controlada" en sus propios ejercicios — el mismo principio que enseña, aplicado a su propia construcción. Cada valor final se verificó ejecutando el harness múltiples veces en procesos frescos (no solo una vez) antes de darse por correcto, un nivel de verificación más estricto que en temas anteriores, justificado por el hallazgo de esta sección.

## 8. N5.M4.T3 · Análisis honesto de resultados (cierra M4 y el nivel) — cómo enseñan este concepto exacto las fuentes de referencia

- **N4.M5 "El proyecto gestionado"** (herencia entrante declarada en `syl-n5.md` §2bis): ya exigía honestidad en el reporte de resultados de ML clásico — este tema extiende esa disciplina con el vocabulario específico de deep learning (variabilidad entre corridas, GPU no determinista) y la formaliza con C-N5-04 (explicación a dos audiencias).
- **DOC-03 A5** ("¿cómo sabes que funciona?" — ritual de verificación, ya citado en el modelo pedagógico de la Academia): el reporte honesto de este tema es la aplicación directa de ese ritual al cierre de un módulo de arquitecturas completo.

## 9. Síntesis crítica y cierre de M4

Los 3 temas de M4 forman un ciclo completo y verificable: T1 diseña el experimento (hipótesis, variable aislada, múltiples corridas); T2 garantiza que sea repetible (semillas, registro); T3 lo reporta con honestidad (sin cherry-picking, con las dos audiencias). El retoFinal de T3 —la conclusión que cambia con una tercera corrida— no es un truco aislado: es la MISMA lección de M4.T1 (n=1 miente), demostrada una vez más con datos distintos, cerrando el nivel con el principio que más se repite en todo M4: nunca hay evidencia "suficiente" hasta que se verifica que lo es.

## 10. Estrategia adoptada para M4 completo, y cierre de todo el contenido de N5

Cada valor de M4 (3 temas: T1 método científico, T2 reproducibilidad, T3 análisis honesto) se generó ejecutando Python real antes de escribirse en cualquier `check()`; 1 bug de valor no verificado (T2.Ejercicio 3, categoría nueva: valor inherentemente no-reproducible tratado como fijo) fue encontrado y corregido, verificado con 3 ejecuciones frescas del harness. **Con esto, M4 · Rigor experimental queda completo (156 ids `n5` totales en todo el nivel, 0 duplicados) y el contenido curricular completo de N5 (M1-M4, 27 días/laboratorios, 4 módulos) queda cerrado — sigue el proyecto de nivel (capstone), las compuertas, las Herencias Declaradas, y la auditoría adversarial, conforme al Paso 4 en adelante de `docs/guia-construccion-niveles.md` §13.**
