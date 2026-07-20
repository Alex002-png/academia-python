# Investigación Pedagógica de N2.M2 — La Confianza

*Construida bajo DOC-12 (modalidad `real`, EVT-045), sobre el mismo servicio continuo de M1. Investigación verificada con WebFetch real.*

## T1 · ¿Quién eres? — Identidad y autenticación

**Fuente oficial verificada (`fastapi.tiangolo.com/tutorial/security/oauth2-jwt/`, fetch directo):** la documentación actual de FastAPI recomienda **`pwdlib`** con el algoritmo **Argon2** — cita textual: *"pwdlib is a great Python package to handle password hashes... The recommended algorithm is Argon2."* Esto reemplaza la recomendación más antigua (solo `passlib`+bcrypt) que circula en tutoriales desatualizados — se verificó la fuente oficial vigente, no se asumió una convención antigua. La misma página confirma el argumento central de por qué importa: *"If your database is stolen, the thief won't have your users' plaintext passwords, only the hashes."*

**Decisión de diseño — mensaje de error idéntico entre "usuario no existe" y "contraseña incorrecta":** no es una elección estética. Es la aplicación directa de un principio de seguridad real (evitar la enumeración de usuarios válidos por diferencia de respuesta) — el mismo tipo de disciplina que T4 (pensar como quien ataca) va a sistematizar más adelante, sembrada aquí desde el primer tema del módulo.

## T2 · ¿Cómo lo sé? — Tokens verificables (JWT)

**Fuente oficial verificada (mismo documento, fetch directo):** confirma la estructura de tres partes del JWT (header.payload.signature), la librería actual recomendada (**PyJWT**, reemplazando `python-jose` de tutoriales más antiguos), el claim `exp` para expiración, y la cita textual que ancla el modelo mental de "carné sellado": *"It is not encrypted, so, anyone could recover the information from the contents. But it's signed. So, when you receive a token that you issued, you can verify that it was you who issued it."* — el payload es legible por cualquiera; solo la firma, verificada contra la clave secreta, garantiza que nadie lo fabricó sin autorización.

## T3 · ¿Qué puedes hacer? — Autorización y permisos

**Fuente verificada (`owasp.org/Top10/2021/`, fetch directo del índice de navegación):** confirmado que **A01:2021 — Broken Access Control** encabeza el ranking completo del OWASP Top 10 2021 (10 categorías listadas, A01 en primer lugar). **Ausencia declarada con honestidad:** el fetch directo a la página profunda específica de A01 (`A01_2021-Broken_Access_Control/`) devolvió 404/redirección repetidamente — un problema de navegación de un sitio de una sola página, no una fuente inventada — por lo que la estadística exacta de prevalencia (percentil de aplicaciones afectadas, CWEs mapeados) no se cita textualmente aquí; se cita únicamente el hecho verificado con certeza: el primer lugar del ranking.

**Decisión de diseño — el error 403 vs 404 como distinción central:** no proviene de una fuente externa citada — es una consecuencia directa y verificable de la semántica HTTP ya enseñada en Laboratorio 16 (4xx = culpa del cliente) aplicada con precisión: 403 (el recurso existe, el permiso no) vs 404 (el recurso no existe). Este tema deliberadamente NO rompe nada todavía — el quiebre real llega en T4; T3 construye la falsa sensación de seguridad que T4 va a exponer, tal como exige la ficha de SYL-N2.

## T4 · Pensar como quien ataca — el Momento Fundacional de M2

**Nota institucional pendiente:** SYL-N2 §10 propone formalmente el **rol Atacante** como nueva entrada del catálogo de modos del Tutor (DOC-03 §19.5.3, registro vivo). Esta construcción de T4 lo usa narrativamente tal como el syllabus lo describe, pero la incorporación formal al catálogo vivo de DOC-03 queda como acción administrativa pendiente, a registrar en una próxima revisión de ese documento — no bloquea la construcción de este tema, que ya es coherente con el diseño aprobado de SYL-N2.

**Decisión de diseño:** el ataque no depende de ninguna herramienta nueva — es la aplicación directa de la vulnerabilidad ya sembrada deliberadamente sin resolver en T3 (falsa sensación de seguridad tras verificar solo autenticación). El énfasis pedagógico central, siguiendo la ficha exacta de SYL-N2 T4, es diagnosticar el **patrón** (todo endpoint que solo verifica autenticación sin comparar dueño) y no solo el caso puntual que el tutor demuestra — evitando que el estudiante "parche" un síntoma sin corregir la causa raíz, en línea con el principio institucional ya establecido en N1 (fix root causes, never patch symptoms).

## T5 · Secretos que no se cuentan

**Reutilización deliberada de fuente ya verificada (DP-07, fuente única de verdad):** este tema no requiere investigación nueva — se apoya en dos hallazgos ya verificados en N1: GitHub Secret Scanning (`docs.github.com`, citado en `n1-m6-redes-apis.md`, confirma que credenciales commiteadas "se convierten en objetivos para acceso no autorizado") y el hecho, ya vivido por el estudiante en N1.M4, de que la historia de Git no olvida. El tema conecta ambos hallazgos con una consecuencia nueva: SECRET_KEY es el único punto que, de filtrarse, invalida toda la confianza construida en T1-T4.

## T6 · Confiar entre sistemas — Bitácora se identifica (cierre B-M2)

**Sin fuente nueva:** este tema es aplicación e integración de T1-T2 (autenticación, JWT) a un consumidor no humano — no introduce mecanismos nuevos, por diseño (SYL-N2 lo declara explícitamente: Bitácora recibe el mismo trato que cualquier usuario). Cierra el largo aliento B-M2 con el mismo patrón de cierre ya validado en M1.T6 (informe corto de auditoría, reintegración de Bitácora bajo el contrato/modelo de confianza ya maduro).

## Clasificación y falsabilidad

**Evidencia sólida:** ambas citas verificadas por fetch directo a la documentación oficial vigente de FastAPI (no a una versión archivada o desactualizada). **Decisión de diseño explícita:** el mensaje de error unificado en T1 no proviene de una fuente citada — es una aplicación directa de un principio de seguridad ya conocido (no enumeración de usuarios), consistente con el "pensamiento adversarial" que M2 instala. **Falsabilidad:** si `pwdlib` deja de ser la recomendación oficial de FastAPI en una futura versión de su documentación, este tema debe revisarse para reflejar la librería vigente en ese momento — el criterio siempre es la fuente oficial actual, no la que se usó al escribir esto.
