# Investigación Pedagógica de N1.M1.T5 — Excepciones

*Investigación + revisión crítica integradas. Construida bajo DOC-11 v2.0.1.*

## 1–2. Fuentes y evidencia

**MIT dedica una lección al alcance exacto de esta lección:** 6.0001 Lecture 7, *"Testing, Debugging, Exceptions, and Assertions"*, trata excepciones junto a debugging — la misma conexión que la ficha de SYL-N1 ya declara con los tracebacks de N0.T8. *(Fuente: [MIT OCW, Lecture 7](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/resources/lecture-7-testing-debugging-exceptions-and-assertions/).)*

**CS50P dedica una semana completa, exclusivamente a excepciones** (Week 3) — con `try`/`except` validando entrada de usuario como caso de uso central, confirmando con una segunda institución de referencia que el tema merece tratamiento propio, no una mención de paso. *(Fuente: [CS50P — Week 3, Exceptions](https://cs50.harvard.edu/python/weeks/3/); [CS50P — Handling Exceptions](https://cs50.harvard.edu/python/shorts/handling_exceptions/).)*

**El hallazgo más valioso: la documentación oficial de Python nombra formalmente la decisión que la ficha pide enseñar.** El glosario oficial define dos estilos con nombre propio — **EAFP** ("Easier to Ask Forgiveness than Permission": asumir que algo funciona y capturar la excepción si falla) y **LBYL** ("Look Before You Leap": verificar las condiciones antes de actuar). Esto no es terminología de esta Academia: es vocabulario oficial del lenguaje para exactamente la pregunta ingenieril de la ficha ("¿validar antes o capturar después?"). Además, la documentación da una razón técnica concreta para preferir EAFP en código concurrente: el estilo LBYL puede sufrir una condición de carrera entre "mirar" y "actuar" (otro hilo puede cambiar el estado justo en el medio), mientras EAFP no tiene esa ventana de riesgo. *(Fuente: [Python docs — Glossary: EAFP](https://docs.python.org/3/glossary.html#term-EAFP) y [LBYL](https://docs.python.org/3/glossary.html#term-LBYL).)*

## 3. Síntesis crítica

**Decisión:** el modelo mental de la ficha (la excepción como "señal que sube por la pila de llamadas hasta que alguien la atiende") se mantiene como eje — MIT trata excepciones junto a debugging, reforzando la misma idea de que una excepción nunca capturada termina como el traceback que N0.T8 ya enseñó a leer. **Hallazgo real de esta investigación:** la ficha pedía enseñar "decide entre validar antes o capturar después" sin nombrarlo — la documentación oficial SÍ le da nombre (EAFP/LBYL), y esos nombres se adoptan explícitamente en el Bloque 3, porque le dan al estudiante vocabulario real que va a encontrar en cualquier código o documentación Python profesional, no una intuición sin nombre.

**Autocrítica — ¿alcanza con nombrar EAFP/LBYL, o hace falta el argumento de concurrencia?** N1 todavía no cubre programación concurrente (hilos) — mencionar la razón de la condición de carrera sin ese contexto podría confundir más que aclarar. **Ajuste:** se menciona la existencia de esa razón técnica adicional en el Beyond the Curriculum (como un adelanto real, no como contenido evaluado), y el criterio central que SÍ se enseña y evalúa es más simple y ya alineado con la ficha: EAFP es más legible cuando el caso de "fallo" es raro; LBYL es más claro cuando hay que decidir explícitamente qué hacer en cada camino posible.

**Clasificación:** evidencia sólida y verificada en fuente primaria (glosario oficial de Python, no una interpretación de terceros). **Falsabilidad:** se reconsideraría posponer EAFP/LBYL como vocabulario si el registro muestra que los estudiantes lo memorizan sin conectar cuándo aplica cada uno.

## Estado
✅ Completa con revisión crítica. 1 hallazgo real (vocabulario oficial EAFP/LBYL para la pregunta ingenieril de la ficha). No bloquea T6.
