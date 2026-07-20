# N1.M4.T3 — Laboratorio 7 · El flujo Pull Request

*Construido bajo DOC-12 v1.0.0. Investigación: `docs/investigacion/n1-m4-git-github.md`.*

**Gran pregunta:** ¿de qué tamaño debe ser un cambio para que otro pueda revisarlo de verdad?

**Entorno objetivo:** GitHub (servidor remoto) + terminal local. **Fluencia asumida:** Laboratorio 6. **Fuera de alcance:** README (T4).

**Duración desglosada:** contexto (10) + explicación conceptual (10) + pasos guiados (25) + revisión de un PR ajeno (15) + mini laboratorio (15) + desafío (10) + evaluación (10) → **~95 min**.

## Objetivo
Proponer un cambio vía Pull Request con descripción profesional; revisar un PR ajeno con criterio real.

## Contexto
Un Pull Request es la industrialización de una práctica de comunidades open source: los parches argumentados por correo con los que se construyó Linux. La herramienta cambió, la idea sigue igual — un cambio se propone, se explica y se defiende antes de integrarse. Es, además, el ritual central de la colaboración profesional: en casi ningún equipo real el código llega a `main` sin pasar por este paso.

## Explicación conceptual
Un PR es una **propuesta argumentada**: "esto cambié, por esto, así se verifica" — la conversación de ingeniería puesta por escrito. GitHub la organiza en pestañas (Conversation, Commits, Checks, Files changed). Un revisor tiene tres respuestas oficiales: Comment (duda o sugerencia, no bloquea), Approve (listo para fusionar), Request changes (bloquea hasta que se corrija). El tamaño importa más de lo que parece: Google, en sus guías de ingeniería, es explícito — "los revisores tienen discreción para rechazar tu cambio únicamente por ser demasiado grande para revisarlo de verdad".

## Pasos
1. Desde una rama con al menos un commit (Laboratorio 6), sube la rama: `git push -u origin nombre-rama`.
2. En GitHub, abre "Compare & pull request".
3. Escribe una descripción real: qué cambia, por qué, cómo se verifica — nunca vacía ni "cambios varios".
4. Crea el PR y observa las pestañas (Conversation/Commits/Files changed).
5. Fusiona el PR desde la interfaz (o, si trabajas con el tutor en rol Revisor, espera su comentario antes de fusionar).

## Revisar un PR ajeno
El tutor prepara un PR con un defecto plantado deliberadamente. Revísalo con las tres opciones oficiales de GitHub — no lo trates como ataque personal, trátalo como la misma conversación de ingeniería que acabas de escribir tú.

## Comprensión
- ¿Qué información necesita una descripción de PR para que alguien la entienda sin abrir el diff?
- ¿Por qué un PR de 40 archivos es, por sí solo, un problema — más allá de si el código es correcto?

## Puntos de verificación
☐ PR creado con descripción real (qué/por qué/cómo se verifica) · ☐ Identifiqué las cuatro pestañas de un PR en GitHub · ☐ Revisé un PR ajeno usando las tres opciones oficiales · ☐ Encontré el defecto plantado en el PR de revisión.

## Diagnóstico de errores
Descripción vacía o "cambios" (el revisor no puede evaluar sin contexto — siempre qué/por qué/cómo se verifica) · PR de decenas de archivos (divídelo — un PR debe poder revisarse en una sesión razonable) · tomar un "Request changes" como ataque (es la misma función que un `except` en tu código: atrapar el problema antes de que llegue a producción, no un juicio personal).

## Mini laboratorio
Abre un PR real para un cambio pequeño y genuino en uno de tus repositorios, con descripción completa, y fusiónalo tú mismo tras revisar tu propio diff.

## Desafío
Sin mirar la guía: crea un PR deliberadamente demasiado grande (varios archivos sin relación), y luego divídelo en PRs más pequeños y coherentes — explica el criterio que usaste para dividir.

## Buenas prácticas
Un PR, un cambio lógico coherente · descripción siempre completa · responder a comentarios de revisión sin actitud defensiva.

## Recursos
🟢 Antes — GitHub Docs, "About pull requests", EN, ~15 min · 🔵 Durante — GitHub Docs, "Reviewing proposed changes", EN, ~15 min · ⭐ Profundización — Google Engineering Practices, "Small CLs", EN, ~15 min.

## Evaluación
**Cierre:** un PR es una propuesta argumentada, no solo código subido — su tamaño y su descripción son parte del cambio mismo. **Repetir sin guía:** abre y fusiona un PR nuevo de memoria. **Metacognitiva:** ¿cómo se sintió recibir una revisión de tu código — y dar una?
