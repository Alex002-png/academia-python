# Decisión de diseño — Manejo de credenciales/API keys en N7.M1 (y resto de ET4)

**Estado:** decisión fijada por el Director (2026-07-21), documentada aquí conforme al "primer paso concreto" de `docs/mision-n7.md`. Afecta la forma de toda lección de M1 y sienta precedente para N8-N10.

## Decisión

**El estudiante usa su propia API key desde la primera lección de M1.** No hay modo de práctica simulado/sin key como paso previo — el nivel completo asume, desde el día 1 del módulo, que el estudiante tiene una cuenta y una key real de al menos un proveedor de modelos.

## Por qué (justificación pedagógica, no solo la preferencia del Director)

- Este es exactamente el criterio 3 de DOC-12 §5 ("¿el estudiante necesita una cuenta externa, una instalación previa, o acceso a su propio sistema de archivos persistente?") — M1 ya es DOC-12 por diseño, no una excepción parcial. Introducir un modo simulado habría sido tratar como Pyodide-con-rueditas algo que el propio criterio de frontera ya resuelve como entorno real.
- Es coherente con el principio explícito de DOC-12 §0: "no quiero usuarios que sepan copiar comandos, quiero desarrolladores que entiendan su entorno de trabajo" — parte de entender el entorno de la ingeniería de LLMs es precisamente vivir la fricción real de gestión de secretos, límites de gasto y observar una factura real, algo que ninguna simulación puede enseñar con la misma honestidad.
- Costes reales de streaming, latencia y truncamiento de contexto — el contenido central de M1 — solo se observan con una API real; una respuesta grabada no varía, no tiene latencia real, y no puede usarse para el laboratorio de medición de costes que DOC-10 exige explícitamente ("costes" está en el propio nombre del módulo).

## Cómo se aplica en cada lección (obligatorio, sin excepción, desde T1)

1. **T1 de M1 es, en sí misma, un laboratorio DOC-12 de onboarding de credenciales** — no una lección de prompting. Cubre: crear cuenta en al menos un proveedor, generar una key, almacenarla como variable de entorno (nunca hardcodeada en código — buena práctica profesional obligatoria por DOC-12 §2.11), primera llamada mínima verificable, y **configurar un límite de gasto (`spending limit` / `budget alert`) antes de escribir una sola línea de prompting real** — este paso es el ⚠️ de DOC-12 §2.5/§3 (acción con costo económico real) y es no-negociable.
2. **Proveedor recomendado por defecto:** el que ofrezca el tier gratuito o de menor fricción de entrada más estable en el momento de escribir el laboratorio (verificar empíricamente, no asumir — la oferta de tiers gratuitos cambia). Se documenta como recomendación, no como requisito único — el laboratorio no debe atarse a un solo proveedor porque APIs/costos de proveedores individuales cambian más rápido que el contenido del Campus.
3. **Advertencia de costo explícita y repetida** en cada ejercicio que dispare una llamada real, siguiendo el marcador ⚠️ de DOC-12 §2.5/§3 — nunca implícita ni relegada a una nota al pie una sola vez al inicio del módulo.
4. **Diagnóstico de errores de M1 (§2.8 DOC-12) incluye, sin excepción**, la categoría de errores de credenciales: key inválida/revocada, key filtrada accidentalmente (commiteada a git — conecta con higiene de M4/M1.T6 de N1), rate limit alcanzado, límite de gasto alcanzado, key con permisos insuficientes.
5. **Buenas prácticas profesionales (§2.11 DOC-12) de M1.T1** cubren gestión de secretos como tema central, no de paso: `.env` + `.gitignore`, nunca imprimir la key en logs, rotación de keys, principio de menor privilegio si el proveedor lo permite.

## Qué NO decide este documento (fuera de alcance aquí)

- Qué proveedor(es) específico(s) usar en cada ejercicio — se decide tema por tema durante la construcción de M1, verificando disponibilidad y precio real en el momento de escribir cada laboratorio (misma disciplina de verificación empírica de §9 de la guía maestra, aplicada aquí a precios/tiers en vez de a valores de `check()`).
- Si M2 (RAG, con su propio consumo de tokens de embeddings/generación) y M3/M4 heredan exactamente el mismo patrón — se asume que sí por continuidad de nivel, pero se declara explícitamente en cada ficha de módulo del syllabus, no se da por sentado en silencio.
