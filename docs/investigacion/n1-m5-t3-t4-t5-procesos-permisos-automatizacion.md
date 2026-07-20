# Investigación Pedagógica de N1.M5.T3-T5 — Procesos, permisos y automatización

*Construida bajo DOC-12 §0bis. Fundamenta Laboratorio 9 (Procesos), Laboratorio 10 (Memoria, archivos y permisos), Laboratorio 11 (Automatización: pipes y scripts). Investigación verificada con WebFetch real.*

## Fuentes verificadas por tema

**Procesos y señales:** MIT Missing Semester tiene lección dedicada, **"Command-line Environment"** (`missing.csail.mit.edu/2020/command-line/`, también 2026) — cita textual verificada: *"Your shell is using a UNIX communication mechanism called a signal to communicate information to the process"*; cubre `SIGINT` (Ctrl-C), `SIGQUIT`, `SIGTERM` vía `kill`, `SIGSTOP`, `fg`/`bg`/`jobs`. **Documentación oficial de señales** (`man7.org/linux/man-pages/man7/signal.7.html`): confirma que `SIGKILL` y `SIGSTOP` **no pueden capturarse, bloquearse ni ignorarse** — de ahí la distinción pedagógica real "petición educada (`SIGTERM`) vs. orden inapelable (`SIGKILL`)". **Procesos zombis:** confirmado en la propia man page de `ps` (`man7.org/linux/man-pages/man1/ps.1.html`) — estado `Z` = proceso "terminado pero no recogido por su padre".

**Memoria, archivos y permisos:** **laguna real declarada con honestidad** — Missing Semester no tiene una lección dedicada a permisos/sistema de archivos (lo más cercano, "Security and Cryptography", no se enfoca en esto). Este laboratorio llena un hueco real, no repite una fuente existente. La fuente primaria usada es la **documentación oficial de `chmod`** (`man7.org/linux/man-pages/man1/chmod.1.html`) — confirma el modelo rwx y la notación octal exacta ("un modo numérico de uno a cuatro dígitos octales, sumando los valores 4, 2 y 1").

**Automatización — pipes y scripts:** el origen de la filosofía Unix (Doug McIlroy, "programas pequeños que hacen una cosa bien") se verificó solo indirectamente por WebSearch, no por fetch directo de una fuente primaria (fallo de certificado TLS en catb.org) — se declara esta limitación en vez de citarlo con más fuerza de la que tiene. **`set -euo pipefail`:** confirmado como convención real y ampliamente citada de la industria (Aaron Maxwell, "unofficial bash strict mode") — pero es **una convención comunitaria, no una característica con nombre oficial de Bash** — se declara esta distinción explícitamente en el laboratorio, no se presenta como estándar oficial. **Errores de citado/quoting:** ShellCheck (`shellcheck.net/wiki/SC2086`, herramienta real de linting usada en la industria) confirma textualmente por qué las variables sin comillas rompen con espacios y expansión de glob.

## Errores de novato — honestidad sobre solidez de evidencia

`chmod 777` como "solución universal": **no se encontró una fuente primaria tipo documentación oficial** que lo documente como antipatrón — es sabiduría de foros y práctica de la industria, no un hecho documentado formalmente. Se presenta en el laboratorio como práctica ampliamente desaconsejada por la comunidad, no como una regla oficial citada de una fuente primaria.

## Decisiones de diseño

**Tres laboratorios, no uno** — mismo principio ya aplicado consistentemente en M5.T1/T2 y T6: procesos, permisos y automatización son tres competencias independientes, aunque la ficha de SYL-N1 las agrupe en tres temas consecutivos del mismo módulo.

**El modelo del "gerente de hotel"** (SO como gestor que sostiene la ilusión de que cada proceso tiene la máquina entera) ya está en la ficha de SYL-N1 M5.T4 — se conserva íntegro, es un modelo mental fuerte y no requiere modificación.

**Se declara explícitamente la naturaleza no-oficial de `set -euo pipefail`** en el Laboratorio 11 — un hallazgo de honestidad metodológica que evita que el estudiante piense que es una característica documentada de Bash cuando es una convención de la comunidad.

## Clasificación y falsabilidad

**Evidencia sólida (fetch directo verificado):** señales POSIX, permisos chmod, procesos zombis, ShellCheck SC2086, lección de Missing Semester sobre command-line/señales. **Evidencia parcial (solo WebSearch, no fetch):** filosofía Unix/McIlroy, `set -euo pipefail`. **Ausencia declarada:** ninguna fuente de referencia tiene lección dedicada a permisos — la Academia construye esto por necesidad real, no por adaptación de una fuente existente; y `chmod 777` como antipatrón no tiene respaldo de fuente primaria. **Falsabilidad:** si el registro de ejecución muestra que el estudiante nunca comete el error de olvidar comillas en bash, se reconsideraría su peso como error central del Laboratorio 11.
