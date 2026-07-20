# Investigación Pedagógica de N1.M4 — Git y GitHub

*Construida bajo DOC-12 §0bis, fundamenta los 4 laboratorios de M4 (T1 Fundamentos y primer repositorio · T2 Ramas y merge · T3 El flujo Pull Request · T4 README profesional). Investigación verificada con WebFetch real, no solo búsqueda.*

## 1. Fuentes verificadas por tema

**T1 — Fundamentos:** Pro Git, [Getting a Git Repository](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository) y [Working with Remotes](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes) (ya usados en el laboratorio de validación de DOC-12). **Mensajes de commit:** dos estándares reales, no inventados — [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) (`<tipo>[alcance]: <descripción>`, usado ampliamente en la industria) y las **7 reglas de Chris Beams** ([cbea.ms/git-commit](https://cbea.ms/git-commit/) — asunto ≤50 caracteres, imperativo, sin punto final, cuerpo explica qué y por qué no cómo). Decisión: enseñar las 7 reglas de Beams como base universal (más simples, no atadas a un formato de herramienta), mencionar Conventional Commits como convención de equipo real que existe (⭐ profundización).

**T2 — Ramas y merge:** Pro Git, [Branches in a Nutshell](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell) confirma el modelo mental exacto: una rama es "simplemente un puntero móvil y liviano a uno de estos commits" — creación casi instantánea. [Basic Branching and Merging](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging) y [Advanced Merging](https://git-scm.com/book/en/v2/Git-Tools-Advanced-Merging) tratan el conflicto como texto normal a editar, nunca catástrofe — cita textual: "si hay un conflicto, no intenta ser inteligente", con marcadores exactos `<<<<<<< HEAD` / `=======` / `>>>>>>>`.

**T3 — Pull Request:** GitHub Docs oficiales — [About pull requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) describe la estructura (pestañas Conversation/Commits/Checks/Files changed) pero **no cubren buenas prácticas de redacción — ausencia real, declarada honestamente**, no rellenada. [Reviewing proposed changes](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request) sí confirma las tres acciones oficiales de revisión (Comment / Approve / Request changes). El tamaño ideal de un PR está respaldado por una fuente de peso real de la industria: **Google Engineering Practices**, [small-cls.html](https://google.github.io/eng-practices/review/developer/small-cls.html) — cita textual: "los revisores tienen discreción para rechazar tu cambio únicamente por ser demasiado grande".

**T4 — README:** [Art of README](https://github.com/noffle/art-of-readme) (verificado) — cita clave: "tu trabajo no es 'vender', es permitir evaluar objetivamente"; estructura mínima: nombre, descripción de una línea, ejemplo de uso ejecutable, instalación, licencia. GitHub oficial, [About READMEs](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes) coincide en estructura y añaden explícitamente "dónde pedir ayuda" y "quién mantiene el proyecto".

## 2. Historia real de Git (T1, contexto)

Confirmado en Pro Git y fuentes periodísticas contemporáneas: entre 1991-2002 el kernel de Linux se mantuvo con parches sueltos por correo; en 2002 adoptó BitKeeper (herramienta propietaria); en 2005 Andrew Tridgell (del proyecto Samba) hizo ingeniería inversa parcial del protocolo de BitKeeper, BitMover/Larry McVoy alegó violación de los términos de uso gratuito y revocó las licencias — forzando a Linus Torvalds a crear Git en cuestión de semanas. Fuentes: [LWN.net](https://lwn.net/Articles/132938/), [Computerworld, abril 2005](https://www.computerworld.com/article/1699961/after-open-source-controversy-torvalds-turns-to-git.html). **Dato NO usado por no estar confirmado con solidez:** la cifra popular de "Git se escribió en 10 días" — se declara la incertidumbre en vez de citarla como hecho.

## 3. Errores de novato documentados

PRs demasiado grandes para revisar de verdad: confirmado con fuente de peso (Google eng-practices, arriba). Miedo a los conflictos de merge y ramas que nunca se fusionan: la explicación de Atlassian se usó solo como apoyo adicional, no como fuente principal, porque el fetch completo falló (contenido solo por fragmentos de búsqueda) — se declara esta limitación en vez de citarla con la misma fuerza que las fuentes sí verificadas por fetch completo.

## 4. Síntesis y decisiones de diseño

**Cuatro laboratorios, no uno** — mismo principio de "una competencia por laboratorio" ya aplicado a M5 y T6, respetando además el orden que la propia ficha de SYL-N1 ya declara (T1→T2→T3→T4, cada uno con prerrequisito explícito en el anterior).

**T1 incluye el "rito de iniciación"** que SYL-N1 ya declara explícitamente: publicar la calculadora de N0 como primer repositorio público — no un ejercicio de juguete, el primer artefacto real del portafolio del estudiante.

**Decisión sobre GitHub como servicio externo real:** a diferencia de M5/T6 (100% locales), T1 en adelante requiere una cuenta de GitHub real — el laboratorio declara esto explícitamente en Requisitos, y usa el "Entorno objetivo" generalizado de DOC-12 (servidor remoto/consola de proveedor) en vez de asumir que todo ocurre en la terminal local.

## Clasificación y falsabilidad

**Evidencia sólida:** modelo de rama como puntero (Pro Git, fuente primaria oficial), las 7 reglas de Beams (ampliamente citadas y estables desde 2014), tamaño de PR (Google, fuente de autoridad real de la industria). **Evidencia parcial, declarada como tal:** errores de "ramas eternas" (Atlassian, sin fetch completo). **Ausencia declarada, no rellenada:** GitHub no documenta oficialmente buenas prácticas de redacción de PR — la Academia debe suplir esa laguna con criterio propio, no atribuírselo a GitHub. **Falsabilidad:** si el registro de ejecución muestra que Conventional Commits sería más útil que las 7 reglas de Beams como estándar único, se reconsideraría en la próxima revisión.
