# Informe Final de Nivel — N10 · IA Local

*Conforme a DOC-11 §6ter. Memoria técnica de ingeniería, no repetición pedagógica del syllabus. Con este informe, N10 se congela como versión de desarrollo — toda modificación futura depende de evidencia real (registro de ejecución, §9 de `syl-n10.md`), nunca de una idea nueva aislada.*

## 1. Objetivo global del nivel

N10 enseña a un estudiante que ya construyó y operó sistemas de IA en la nube (N7-N9) a hacer que ese mismo tipo de sistema corra enteramente en su propia máquina, con criterio de ingeniería y no por intuición: eligiendo runtime y cuantización con datos propios, entendiendo el hardware lo suficiente para diagnosticar sus límites reales, y evaluando el ecosistema (que cambia constantemente) con un método que sobrevive a cualquier herramienta específica de hoy. El objetivo no es "sabe instalar Ollama" — es "puede tomar y defender, con evidencia medida en su propio hardware, la decisión completa de portar un sistema real a inferencia local".

## 2. Competencias exactas desarrolladas

- **C-N10-01** (ejecuta y optimiza inferencia local: cuantización, aceleración, medición antes/después) — cubierta por M1 completo (9 labs) + M2 completo (6 labs) + M3.T1-T3, con el banco de examen ítems 1-2 y 6.
- **C-N10-02** (opera su columna vertebral en local, con trade-offs frente a la nube documentados) — cubierta por M1.T1(a/b), M3.T4-T5, M4.T3, con el banco de examen ítems 3-4, y de forma central por los Hitos 1, 3-4 del capstone. Esta competencia recibió una corrección real durante el Paso 9b: el borrador original no la tenía etiquetada en ningún laboratorio pese a que la tabla de compuertas afirmaba que sí — corregida con retagueo justificado, no con relleno cosmético.
- **C-N10-03** (evalúa herramientas del ecosistema local con prototipo, medición y juicio de adopción o descarte) — cubierta por M4 completo (5 labs), con el banco de examen ítems 5-6.

## 3. Modelos mentales fundamentales que instala

1. **Carga vs. inferencia** (M1.T1a) — la primera pieza de todo el nivel: un modelo local paga un costo de carga una sola vez, distinto del costo de generación por token.
2. **El menú de compromisos de la cuantización** (M2) — nunca "más bits es mejor" sin más: tamaño, velocidad y calidad compiten, y la decisión correcta depende de la restricción real, no de una regla memorizada.
3. **Exponente (rango) vs. mantisa (precisión)** (M2.T1b) — el modelo mental de bits que explica, con precisión técnica, qué se pierde exactamente al cuantizar.
4. **El presupuesto de VRAM en tres líneas: pesos + KV cache + overhead** (M3.T5, reutilizado en el capstone) — diagnosticar un fallo de memoria es revisar un presupuesto que no cierra, nunca "probar a ver si carga".
5. **Decode es memory-bound, prefill es compute-bound — con matemática real detrás** (M3.T2/T2b) — el roofline model, calculado con las specs reales de la RTX 5070 del estudiante, no con un ejemplo genérico.
6. **Adopción y descarte son veredictos igualmente válidos** (M4) — el modo de fallo más peligroso de este módulo sería enseñar que "no adoptar" es un fracaso; el nivel lo corrige explícitamente, incluso diseñando un laboratorio (M4.T2) donde el descarte es el desenlace estadísticamente esperado para el hardware real del estudiante.
7. **Verificar la fuente antes de citar una cifra técnica** (transversal, con ancla explícita en M1.T1b) — el hallazgo de que no existe consenso de "punto de equilibrio" en tokens es, en sí mismo, la lección: la mayoría de cifras técnicas que circulan sin metodología rastreable valen cero.

## 4. Errores que elimina

- Tratar "cuantizar" como una operación única en vez de una familia de compromisos con ejes independientes (tamaño/velocidad/calidad).
- Asumir que localhost está exento de los mismos modos de fallo (timeouts, procesos colgados) que un servicio remoto — refutado con evidencia real de issues de Ollama, no con advertencia abstracta.
- Confundir "GPU no detectada" con "GPU detectada pero infrautilizada por offload parcial" — dos diagnósticos distintos que M1-M3 enseñan a distinguir con evidencia (`ollama ps`, `nvidia-smi`).
- Aceptar cifras de rendimiento o costo sin fuente rastreable — instalado explícitamente en M1.T1b y reforzado en M2.T2 (la cifra de blog de "~3.5% de pérdida").
- Creer que "más sofisticado algorítmicamente" implica "mejor resultado medible" — refutado con datos reales de perplejidad (M2.T2b: Q4_K_M y AWQ prácticamente empatados).
- Asumir que una caché más grande en hardware nuevo resuelve automáticamente un cuello de botella de memoria — refutado cuantitativamente en M3.T4b (el KV cache real excede el L2 por órdenes de magnitud).

## 5. Qué queda deliberadamente fuera y por qué

- **Escribir kernels CUDA propios** — declarado fuera de alcance explícitamente en M3.T3 y M1.T3b; el objetivo es el modelo mental operativo, no ser desarrollador de kernels (mismo límite que DOC-10 §8 no pide para este nivel).
- **Fine-tuning o entrenamiento de modelos** — el nivel parte siempre de pesos ya entrenados; entrenar pertenece a otros niveles de la Academia (N5).
- **Colas de mensajes, balanceo entre múltiples instancias de model serving** — pertenece a N9 (model serving a escala); N10 mide el fenómeno de concurrencia en una sola máquina, no a escala de infraestructura.
- **Portar toda la infraestructura de N9 a local literalmente** — el capstone declara explícitamente que solo la capa de inferencia se porta con rigor completo; el resto de la infraestructura recibe una nota honesta de qué tendría o no sentido reducir a una sola máquina, no una migración forzada.
- **Ejecutar AWQ o GPTQ en el propio hardware del estudiante** (M2.T2b) — requiere más VRAM y tiempo de calibración de los que el nivel dedica a esta comparación específica; el foco es entender el trade-off con datos publicados, no reproducir el proceso completo.

## 6. Dependencias creadas para el nivel siguiente (Herencias Declaradas, detalle en `syl-n10.md` §7)

N10 siembra hacia N11 cuatro herencias verificadas contra contenido real, no contra el plan: disciplina de medición bajo restricciones de hardware (→ N11.M2, reproducción de papers); honestidad metodológica de fuente, con el caso concreto del roofline model no viniendo de NVIDIA (→ C-N11-04, reporte fiel); juicio de ecosistema sin guía (→ N11.M1, lectura de frontera); fricción real con software de terceros documentada con un caso real (el issue de vLLM/Blackwell) (→ N11.M4, open source). Se declaró explícitamente, y se corrigió durante la auditoría, que la cadena de la columna vertebral (V1/V2/local/final) NO pasa por N11 — salta directamente a N12; cualquier auditoría futura de N11 no debe asumir esa continuidad.

## 7. Riesgos pedagógicos abiertos

- **El supuesto de trabajo sobre V1(N7)/V2(N8)/infra(N9)** (`syl-n10.md` §2.1) sigue sin confirmar contra el contenido real de esos niveles, construidos en paralelo. Si la forma real diverge sustancialmente (por ejemplo, si el vector store elegido por N7 no tiene ningún camino de portabilidad local), el capstone necesitará una revisión dirigida — el resto del nivel es independiente de esa forma exacta y no se ve afectado.
- **M4.T2 (prototipo de vLLM) tiene un desenlace probable conocido de antemano** (descarte, dado el issue real y sin resolver de Blackwell/RTX 50-series) — el laboratorio está diseñado explícitamente para que esto sea una experiencia pedagógica válida, no una falla de diseño, pero es un riesgo real declarado, no una garantía: si el issue se resuelve para cuando el estudiante llegue a este laboratorio, la Ruta A (antes tratada como la menos probable) pasa a ser la esperada, y el laboratorio sigue funcionando, pero con el balance de aprendizaje distinto al diseñado.
- **La expansión de calidad (16→27 laboratorios) no pasó por una segunda ronda de auditoría adversarial** — los 3 auditores originales revisaron los 16 laboratorios base; los 11 laboratorios nuevos siguieron el mismo estándar de corrección (checklist, capacidades, investigación verificada) pero no fueron sometidos al mismo escrutinio adversarial independiente. Se recomienda una auditoría de la expansión como paso previo a v1.0.0, no asumida como equivalente por diseño.
- **Cifras de hardware de fuentes no oficiales** (L2 de la RTX 5070 ~48MB, TFLOPS de Tensor Cores ~123.5) se usan en M3.T2b/T4b con la cautela declarada explícitamente en cada laboratorio, pero dependen de agregadores técnicos, no de la página oficial de NVIDIA — si NVIDIA publica estas cifras oficialmente en el futuro, los laboratorios deberían actualizarse para citar la fuente primaria.

## 8. Hipótesis pendientes de validación

- Si reservar el offload parcial silencioso de GPU (`ollama ps`, "23%/100% GPU") para M3 en vez de introducirlo en M1 deja o no un vacío real en M1.T1-T2 (decisión de diseño documentada en `docs/investigacion/n10-m1-runtimes-locales.md`, pendiente de confirmación con estudiante real).
- Si la batería de prompts propuesta en M2.T2 revela diferencias de calidad reales entre quant types en la práctica del estudiante, o si necesita una batería más deliberadamente adversarial para estresar razonamiento.
- Si el desenlace real de M4.T2 (Ruta A vs. Ruta B) en el momento en que el estudiante lo ejecute coincide con lo documentado al momento de escribir este nivel — pendiente de validación con evidencia real de ejecución, no de la investigación previa.

## 9. Decisiones de diseño más importantes

1. **Declarar honestamente cuando no existe consenso técnico**, en vez de inventar uno — el caso más visible es M1.T1b (no hay punto de equilibrio de tokens consensuado) y M1.T2b/M4.T1 (no hay fuente oficial de por qué llama.cpp no adoptó AWQ/GPTQ, por qué usa K-quants en vez de esos métodos). Esta honestidad metodológica se convirtió, durante la construcción, en un principio pedagógico transversal, no un defecto a ocultar.
2. **Diseñar un laboratorio (M4.T2) donde el fallo es el desenlace esperado**, no una posibilidad remota — decisión defendida explícitamente contra el hallazgo de la auditoría adversarial de que esto podría verse como una debilidad; se mantuvo porque es más fiel a la competencia real (C-N10-03, "adopción o descarte") que un escenario donde todo funciona sin fricción.
3. **Anclar cada laboratorio cuantitativo en el hardware real del estudiante** (RTX 5070/Ryzen 5 9600X/32GB RAM), nunca en cifras genéricas — decisión explícita del Director desde el diseño del syllabus, aplicada con disciplina hasta el nivel de bits (IEEE 754) y del roofline model.
4. **Elegir profundidad real sobre alcanzar un número fijo de laboratorios** — cuando el Director pidió expansión de densidad, la traducción a unidades DOC-12 (labs completos de 85-135 min, no "días" Pyodide de 30-45 min) se calibró por profundidad real disponible por tema (2-3 labs), no por un número literal importado del formato equivocado.
5. **Corregir hallazgos de la propia auditoría en vez de defenderlos** — las tres correcciones de fondo del Paso 9b (cobertura de C-N10-02, tags de Ollama, ruta sin GPU) se aplicaron sin resistencia, con el mismo criterio de verificación empírica que rige todo el proyecto.

## 10. Qué aprendió la Academia al construir este nivel

Que un nivel DOC-12 dominante (sin ningún laboratorio Pyodide) puede alcanzar el mismo rigor de investigación que un nivel académico puro, siempre que la investigación pedagógica preceda a la autoría en cada laboratorio, no solo en el syllabus. Que la honestidad metodológica declarada explícitamente (roofline no viene de NVIDIA, no hay consenso de punto de equilibrio, no hay fuente oficial de la decisión de llama.cpp) no debilita el contenido — lo fortalece, porque le enseña al estudiante a distinguir evidencia sólida de inferencia razonable, una competencia transferible a cualquier dominio técnico futuro. Que un hallazgo de investigación puede cambiar el diseño de un laboratorio completo a mitad de construcción (el caso de vLLM/Blackwell en M4.T2) sin que eso sea un fracaso de planificación — es, de hecho, la señal de que la investigación real está ocurriendo, no una formalidad previa al contenido. Y que auditar el propio trabajo con adversarios independientes, antes de que el Director tenga que señalar los defectos, es más barato y más honesto que esperar a que se descubran después.

---

**Declaración del nivel:** con este informe, N10 · IA Local queda **candidato a v1.0.0** — 27 laboratorios + capstone en 4 módulos, compuertas con banco de examen de 18 variantes verificadas, Herencias Declaradas consolidadas, y una auditoría adversarial de 3 revisores independientes con sus hallazgos corregidos. La palabra "v1.0.0" sin calificar sigue siendo, por diseño institucional, exclusiva del veredicto del Director — este informe no la autodeclara.
