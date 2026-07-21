# Investigación Pedagógica de N1.M6.T5-T6 — Autenticación básica y límites profesionales

*Construida bajo DOC-11 v2.0.1. Temas nuevos añadidos por instrucción directa del Director, ronda de profundización de N1 (EVT-053). M6 pasa de 4 a 6 temas y cierra ahora con T6.*

## 1–2. Fuentes y evidencia

**MDN (Mozilla, developer.mozilla.org), verificado por fetch directo en ambos temas.** Status 401: cita textual — *"lacks valid authentication credentials for the requested resource"*, con la distinción exacta frente a 403 — *"a 403 is returned when a request contains valid credentials, but the client does not have permissions to perform a certain action"*. Status 429: cita textual — *"the client has sent too many requests in a given amount of time. This mechanism... is commonly called rate limiting"*, con el header `Retry-After` confirmado como el mecanismo oficial para indicar cuánto esperar (ejemplo real de la documentación: `Retry-After: 3600`).

**Hallazgo real de la auditoría integral de N1 (EVT-042), cerrado explícitamente por T5, no solo mencionado:** la auditoría había encontrado que el marco de H-06 ("¿quién eres? ¿cómo lo sé? ¿qué puedes?") tenía mecánica práctica bien cubierta en M6.T2, pero el marco cognitivo explícito nunca aparecía nombrado verbatim en el contenido. T5 lo nombra directamente en su intro y lo ancla a los dos códigos de estado reales (401 falla la segunda pregunta, 403 falla la tercera) — no una mención nueva aislada, el cierre de un hallazgo ya registrado.

**Conexión honesta y explícita con contenido ya construido, no aislada:** T6 (idempotencia) no introduce el concepto desde cero — M6.T4 (`n1m6t4x`, ya construido antes de esta ronda) ya tenía un ejercicio (`decidir_politica`) que usaba `es_idempotente` como parámetro de una decisión abstracta. T6 construye el MECANISMO concreto (una idempotency key con un diccionario de operaciones ya procesadas) que esa decisión abstracta necesitaba — la investigación confirmó esto releyendo el ejercicio existente antes de diseñar T6, para no repetir el concepto sino profundizarlo.

## 3. Síntesis crítica

**Decisión de diseño: T5/T6 permanecen autocontenidos (clases y diccionarios locales), sin extender el `API_PREAMBLE` compartido de M6.** El simulador HTTP compartido (usado en T2-T4) tiene solo 3 fixtures fijas (users/1, users/999, /down) — extenderlo con fixtures de autenticación/rate-limit habría acoplado T5/T6 a ese simulador global, con riesgo de romper temas ya construidos y verificados. En su lugar, T5/T6 siguen el mismo patrón autocontenido de T1 (funciones y diccionarios locales dentro de cada ejercicio) — más simple de verificar, cero riesgo sobre temas existentes.

**CS50/Missing Semester: ausencia declarada honestamente.** Ninguno de los dos cubre autenticación de API, rate limiting, paginación o idempotencia como contenido propio (confirmado en la investigación previa de EVT-053) — la bibliografía de M6 permanece anclada en MDN y `requests` docs, sin forzar una conexión institucional inexistente.

## 4. Clasificación y falsabilidad

**Evidencia sólida:** las dos citas de MDN (401/403, 429/Retry-After) verificadas por fetch directo. **Cierre de un hallazgo de auditoría previo, no un hallazgo nuevo:** el marco H-06 ahora nombrado verbatim, corrigiendo lo que EVT-042 había dejado parcialmente resuelto. **Ausencia declarada:** CS50/Missing Semester no aplican. **Falsabilidad:** si el Campus alguna vez necesita simular rate limiting/paginación contra el `API_PREAMBLE` compartido (por ejemplo, si un tema futuro de N1 o N2 lo requiere), debería evaluarse extender el simulador global en vez de mantener fixtures locales por tema — hoy la decisión autocontenida es la de menor riesgo, no necesariamente la única válida a futuro.

## Estado
✅ Completa. 2 temas nuevos (T5, T6), 7 ejercicios cada Parte 1 + 2 ejercicios cada Parte 2 + laboratorio + desafío final cada uno, todos verificados con ejecución real de Python antes de insertarse en `index.html`. M6 pasa de 4 a 6 temas (Días 37-48) y ahora cierra con T6 (antes cerraba con T4; se corrigió el título de `n1m6t4b` que aún decía "cierra M6").
