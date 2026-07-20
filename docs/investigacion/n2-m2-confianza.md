# Investigación Pedagógica de N2.M2 — La Confianza

*Construida bajo DOC-12 (modalidad `real`, EVT-045), sobre el mismo servicio continuo de M1. Investigación verificada con WebFetch real.*

## T1 · ¿Quién eres? — Identidad y autenticación

**Fuente oficial verificada (`fastapi.tiangolo.com/tutorial/security/oauth2-jwt/`, fetch directo):** la documentación actual de FastAPI recomienda **`pwdlib`** con el algoritmo **Argon2** — cita textual: *"pwdlib is a great Python package to handle password hashes... The recommended algorithm is Argon2."* Esto reemplaza la recomendación más antigua (solo `passlib`+bcrypt) que circula en tutoriales desatualizados — se verificó la fuente oficial vigente, no se asumió una convención antigua. La misma página confirma el argumento central de por qué importa: *"If your database is stolen, the thief won't have your users' plaintext passwords, only the hashes."*

**Decisión de diseño — mensaje de error idéntico entre "usuario no existe" y "contraseña incorrecta":** no es una elección estética. Es la aplicación directa de un principio de seguridad real (evitar la enumeración de usuarios válidos por diferencia de respuesta) — el mismo tipo de disciplina que T4 (pensar como quien ataca) va a sistematizar más adelante, sembrada aquí desde el primer tema del módulo.

## T2 · ¿Cómo lo sé? — Tokens verificables (JWT)

**Fuente oficial verificada (mismo documento, fetch directo):** confirma la estructura de tres partes del JWT (header.payload.signature), la librería actual recomendada (**PyJWT**, reemplazando `python-jose` de tutoriales más antiguos), el claim `exp` para expiración, y la cita textual que ancla el modelo mental de "carné sellado": *"It is not encrypted, so, anyone could recover the information from the contents. But it's signed. So, when you receive a token that you issued, you can verify that it was you who issued it."* — el payload es legible por cualquiera; solo la firma, verificada contra la clave secreta, garantiza que nadie lo fabricó sin autorización.

## Clasificación y falsabilidad

**Evidencia sólida:** ambas citas verificadas por fetch directo a la documentación oficial vigente de FastAPI (no a una versión archivada o desactualizada). **Decisión de diseño explícita:** el mensaje de error unificado en T1 no proviene de una fuente citada — es una aplicación directa de un principio de seguridad ya conocido (no enumeración de usuarios), consistente con el "pensamiento adversarial" que M2 instala. **Falsabilidad:** si `pwdlib` deja de ser la recomendación oficial de FastAPI en una futura versión de su documentación, este tema debe revisarse para reflejar la librería vigente en ese momento — el criterio siempre es la fuente oficial actual, no la que se usó al escribir esto.
