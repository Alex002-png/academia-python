# N1.M4.T1 — Laboratorio 5 · Fundamentos y primer repositorio

*Construido bajo DOC-12 v1.0.0. Investigación: `docs/investigacion/n1-m4-git-github.md`.*

**Gran pregunta:** ¿cómo evoluciona un sistema sin perder su historia?

**Entorno objetivo:** terminal local + cuenta de GitHub (servidor remoto). **Fluencia asumida:** M5.T1+T2, Laboratorio 3+4. **Fuera de alcance:** ramas, Pull Requests — eso es T2/T3.

**Duración desglosada:** contexto (10) + explicación conceptual (10) + pasos guiados (30, incluye crear cuenta GitHub) + error en vivo (10) + mini laboratorio (15) + desafío (10) + evaluación (10) → **~95 min**.

## Objetivo
Versionar un proyecto real con commits atómicos y mensajes profesionales; crear una cuenta de GitHub y publicar tu primer repositorio público — la calculadora de N0.

## Contexto
Trabajar sin control de versiones es, en la práctica actual de la industria, un riesgo que nadie profesional asume. Hasta 2005 el kernel de Linux se mantuvo con parches sueltos por correo, luego con una herramienta propietaria (BitKeeper) — hasta que un conflicto de licencia forzó a Linus Torvalds a crear Git en semanas. La idea que lo hizo radical: cada copia tiene la historia completa, sin depender de un servidor central. Hoy vas a publicar tu primer repositorio real — la calculadora que construiste en N0 deja de ser un ejercicio y se convierte en el primer artefacto público de tu portafolio.

## Explicación conceptual
Piensa en Git como una **máquina de fotografías** de tu proyecto: cada `commit` es una foto etiquetada a la que siempre puedes volver. Antes de la foto, un archivo modificado pasa por tres estados: **working directory** (lo editaste) → **staging** (`git add`, lo marcaste para la próxima foto) → **commit** (`git commit`, la foto ya quedó tomada). GitHub es, para efectos de este laboratorio, una copia remota de tu repositorio — `git push` sube tus fotos ahí.

## Pasos
1. Repite `git init` en la carpeta de tu calculadora de N0 (ver Laboratorio de validación de DOC-12 si necesitas repasar el modelo mental).
2. `git add calculadora.py` → `git status` (confirma el paso a staging) → `git commit -m "Agrega calculadora básica de N0"` (regla de Beams: imperativo, ≤50 caracteres, sin punto final).
3. Crea una cuenta en github.com si no tienes una, y un repositorio nuevo vacío desde la interfaz web.
4. `git remote add origin <url>` → `git push -u origin main` — tu código sube a GitHub.
5. Verifica en el navegador que tu código aparece publicado.

## Error inducido en vivo
Intenta `git push` sin haber hecho ningún commit todavía (repositorio recién inicializado) y observa el mensaje real.

## Comprensión
- ¿Qué diferencia hay entre `git add` y `git commit`?
- ¿Por qué un mensaje de commit en modo imperativo ("Agrega X") se prefiere sobre "Agregando X" o "Agregué X"?

## Puntos de verificación
☐ Repositorio inicializado y con al menos un commit atómico · ☐ Mensaje de commit sigue las reglas de Beams · ☐ Cuenta de GitHub creada · ☐ Repositorio publicado y visible en GitHub.

## Diagnóstico de errores
`fatal: remote origin already exists` (ya agregaste un remote — usa `git remote -v` para confirmar antes de agregar de nuevo) · `src refspec main does not match any` (no hay commits todavía — el error que provocaste arriba) · `Support for password authentication was removed` (GitHub ya no acepta contraseña por HTTPS — usar un Personal Access Token o SSH, explicar por qué existe esta restricción de seguridad antes de solo dar el comando).

## Mini laboratorio
Añade un segundo archivo a tu calculadora (por ejemplo, pruebas simples) en un commit separado, con su propio mensaje siguiendo las reglas de Beams.

## Desafío
Sin mirar la guía: crea un repositorio nuevo desde cero para un programa distinto tuyo de N0/N1, con al menos tres commits atómicos (no uno solo con "todo junto"), y publícalo.

## Buenas prácticas
Commits atómicos (un cambio lógico por commit, nunca "arreglos varios") · mensajes en imperativo · nunca subir contraseñas o claves reales a un repositorio público.

## Recursos
🟢 Antes — Pro Git, "Getting a Git Repository", EN, ~15 min · 🔵 Durante — Chris Beams, "How to Write a Git Commit Message" (cbea.ms/git-commit), EN, ~15 min · ⭐ Profundización — Conventional Commits (conventionalcommits.org), EN, ~15 min.

## Evaluación
**Cierre:** un commit es una foto atómica y explicada de tu proyecto; publicar en GitHub es la primera vez que tu código deja de ser privado. **Repetir sin guía:** publica un repositorio nuevo de memoria. **Metacognitiva:** ¿qué se sintió distinto al saber que este repositorio es público?
