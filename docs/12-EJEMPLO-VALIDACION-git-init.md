# EJEMPLO DE VALIDACIÓN — DOC-12 v1.0.0 aplicado a "git init"

> **Este documento no es contenido curricular.** Es una muestra de trabajo, reescrita tras la auditoría crítica de DOC-12 (`docs/informes/doc12-auditoria-critica-v0.1.0-draft.md`), para demostrar el formato v1.0.0 ya corregido — voz de instructor, duración desglosada, debugging con comprobación de hipótesis, error inducido en vivo, y el resto de las 13 correcciones. No forma parte de N1.M4 todavía: antes de construir el M4 real hay que resolver, como decisión de currículo aparte, dónde vive la orientación básica a terminal (ver campo "Fluencia de terminal asumida" abajo — este ejemplo la trata como resuelta solo para poder demostrar el formato).

---

**Dirección:** N1.M4.T1 (ilustrativo) · **Título:** Tu primer repositorio: qué es Git y por qué existe

**La gran pregunta de este laboratorio:** ¿qué es, exactamente, lo que cambia en tu computadora cuando le dices a Git "empieza a vigilar esta carpeta" — y por qué eso resuelve un problema que ya tuviste antes, aunque no lo supieras?

**Entorno objetivo:** terminal local — Windows (PowerShell o `cmd`), macOS o Linux (bash/zsh), con las diferencias de comportamiento marcadas explícitamente en cada paso donde existan.

**Fluencia de terminal asumida:** el estudiante ya sabe abrir una terminal en su sistema, reconoce el prompt, y entiende qué es "el directorio donde estoy parado ahora mismo" — cubierto en el laboratorio de orientación a terminal que precede a este (pendiente de construir; decisión de si vive como M4.T0 propio queda abierta, ver auditoría §8).

**Prerrequisitos técnicos:** Git instalado (verificable con `git --version`).

**Duración estimada — desglosada:** contexto y explicación conceptual (~10 min de lectura activa, no pasiva) + ejecución guiada con sus tres pasos (~10 min, incluye leer y comparar salidas) + error inducido en vivo y su diagnóstico (~10 min, incluye el ciclo completo de hipótesis→comprobación→corrección) + mini laboratorio independiente (~10 min) + desafío (~10-15 min, exige investigar por cuenta propia) + evaluación y cierre (~10 min) → **total realista: 60-65 min para un estudiante comprometido que efectivamente hace cada paso, no solo lee.** *(Nota de honestidad: la versión anterior de este ejemplo prometía 45-60 min con un contenido que realmente tomaba 15-20 — este desglose es la corrección directa de ese hallazgo de auditoría.)*

**Nivel de dificultad:** introductorio — la dificultad no viene de la sintaxis (tres comandos), sino de construir el modelo mental correcto de qué es un repositorio y de vivir, sin ayuda, el ciclo de diagnosticar un error real.

**Fuera de alcance de este laboratorio (y por qué):** configurar tu identidad de Git (`user.name`/`user.email`), crear un `.gitignore`, o registrar el primer commit — todo eso pertenece a N1.M4.T2, una vez que el modelo mental de "qué es un repositorio" ya esté firme. Enseñarlo aquí mezclaría dos conceptos distintos en la misma sesión.

## 1. Objetivo

Al terminar este laboratorio vas a poder: crear un repositorio Git desde cero en cualquier carpeta; explicar qué archivo exacto produce `git init` y qué hace ese archivo; distinguir a simple vista una carpeta con seguimiento Git de una sin él; y diagnosticar por tu cuenta el error más común que se comete en este primer paso, sin que nadie te lo resuelva.

## 2. Contexto

Vas a pasar los próximos minutos entendiendo algo antes de tocar el teclado — es deliberado. Imagina que llevas tres semanas mejorando un archivo `informe.py`. Cada día lo modificas un poco. En el día 10 descubres que la versión de hace cuatro días resolvía mejor un caso concreto que la de hoy — pero ya la sobrescribiste. No hay forma de volver atrás, porque nunca guardaste una copia de cada estado por el que pasó.

Ahora imagina algo más incómodo todavía: no trabajas solo. Otra persona edita el mismo archivo al mismo tiempo que tú. ¿Cómo sabes qué cambió exactamente cada quien? ¿Cómo combinas ambos cambios sin que el trabajo de uno borre el del otro?

Estos dos problemas —perder versiones anteriores, y coordinar cambios simultáneos de varias personas— son tan viejos como la programación misma. Git es la herramienta que la industria eligió, de forma casi universal, para resolverlos. No es la única que ha existido, pero hoy, si trabajas en software profesional, vas a usar Git prácticamente seguro. Si no existiera, cada equipo terminaría inventando su propio sistema improvisado de carpetas `version1`, `version_final`, `version_final_YA_DE_VERDAD` — un patrón que, de hecho, todavía verás en proyectos que no usan control de versiones, y que Git existe específicamente para volver innecesario.

## 3. Requisitos

Antes de empezar, confirma que tienes Git instalado. Abre tu terminal y escribe:

```
git --version
```

💡 Deberías ver algo como `git version 2.43.0` — el número exacto no importa; lo que importa es que responda sin quejarse. Si en cambio tu terminal te dice que no reconoce el comando (`git: command not found` en macOS/Linux, o `'git' no se reconoce como un comando interno o externo` en Windows), Git todavía no está instalado en tu sistema — resuélvelo antes de seguir; no tiene sentido avanzar sin esta pieza.

☐ **Checkpoint 0 —** `git --version` responde con un número de versión, sin error.

## 4. Explicación conceptual

Un **repositorio**, en el fondo, es solo una carpeta que Git decidió vigilar. "Vigilar" no significa lo que probablemente estás imaginando: Git no guarda nada automáticamente ni en segundo plano. Guarda un historial de estados de tus archivos únicamente cuando tú se lo pides de forma explícita — eso lo vas a comprobar tú mismo dentro de un momento.

Cuando ejecutas `git init`, Git no toca absolutamente ninguno de tus archivos existentes. Lo único que hace es crear una carpeta oculta llamada `.git` dentro del directorio donde estás parado. Esa carpeta `.git` **es**, literalmente, el repositorio — es el lugar donde Git va a guardar cada versión que tú le pidas registrar más adelante. El resto de tu carpeta —tus `.py`, tus `.txt`, lo que sea que ya tengas ahí— sigue exactamente igual después de ejecutar el comando.

**Quédate con esta frase, porque es el modelo mental de todo el laboratorio: `git init` no versiona tu código — crea el lugar donde las versiones futuras se van a guardar.** Nada entra al historial todavía; eso es un paso aparte (`git add` + `git commit`) que verás en el siguiente laboratorio, fuera del alcance de este.

💡 Un error de principiante muy real: ejecutar `git init` en `C:\` completo, o en tu carpeta de usuario entera. Git empezaría a vigilar *todo* lo que hay debajo, sin límite — siempre inicializas dentro de la carpeta específica del proyecto, nunca en un contenedor genérico.

## 5. Ejecución paso a paso

**Paso 1 — Crea la carpeta del proyecto y entra en ella**

Escribe, en tu terminal:

```
mkdir mi-primer-repo
cd mi-primer-repo
```

`mkdir` crea la carpeta nueva; `cd` te mueve dentro de ella. Antes de seguir, confirma dónde estás parado exactamente — es el hábito que te va a salvar de la mayoría de errores de este laboratorio y de los que vienen después:

- En **macOS/Linux (bash/zsh)**, escribe `pwd`. Deberías ver una ruta que termina en `.../mi-primer-repo`.
- En **Windows PowerShell o cmd**, escribe `cd` sin nada después — a diferencia de bash, en Windows esto no te mueve a ningún lado, solo **imprime** dónde estás. Deberías ver una ruta que termina en `\mi-primer-repo`.

⚠️ Nota importante que corrige un error real de una versión anterior de este mismo laboratorio: en bash/zsh, `cd` **sin argumentos** no te confirma dónde estás — te manda de vuelta a tu carpeta personal (`$HOME`). Si escribes eso por costumbre, vas a "perderte" de `mi-primer-repo` sin haber hecho nada mal. Usa siempre `pwd` para confirmar tu ubicación en esos sistemas.

☐ **Checkpoint 1 —** tu ruta actual termina en `mi-primer-repo`, confirmada con `pwd` (macOS/Linux) o `cd` sola (Windows).

**Paso 2 — Inicializa el repositorio**

```
git init
```

Esto crea la carpeta oculta `.git` que acabas de leer en la sección anterior. Vas a ver un mensaje de confirmación parecido a:

```
Initialized empty Git repository in .../mi-primer-repo/.git/
```

La ruta exacta va a variar según tu sistema — lo que debe mantenerse constante es la frase `Initialized empty Git repository in`. Si en cambio ves `git: command not found`, es que llegaste hasta aquí sin resolver el Checkpoint 0 — vuelve a §3 antes de continuar.

**Paso 3 — Confirma que el repositorio existe de verdad**

```
git status
```

Le estás preguntando a Git, literalmente, "¿en qué estado está esta carpeta?". Deberías ver una respuesta que incluye la línea `On branch main` (o `master`, según la versión de Git que tengas — 💡 desde la versión 2.28, Git usa `main` como nombre de rama por defecto, pero versiones más antiguas o configuraciones distintas todavía usan `master`; ninguna de las dos es un error) y `No commits yet`.

☐ **Checkpoint 2 —** `git status` responde `On branch main` (o `master`) y `No commits yet`, sin ningún error que empiece con `fatal:`.

## 5bis. Ahora vas a provocar un error real, a propósito

Sal de la carpeta del proyecto:

```
cd ..
```

Y, estando ya **fuera** de `mi-primer-repo`, ejecuta:

```
git status
```

⚠️ Esto va a fallar, y está bien que falle — quiero que lo veas con tus propios ojos antes de explicarte por qué. Vas a obtener algo como:

```
fatal: not a git repository (or any of the parent directories): .git
```

No sigas leyendo todavía. Antes de pasar a §2.8, respóndete: ¿por qué crees que apareció este mensaje, si hace un momento `git status` funcionaba perfecto?

## 6. Comprensión

Antes de seguir, respóndete sin volver a leer la explicación de arriba:

- ¿Por qué `git init` no modificó ninguno de tus archivos existentes? ¿Qué fue, exactamente, lo único que creó?
- Vuelve a entrar a `mi-primer-repo` (`cd mi-primer-repo`) y ejecuta `git init` una segunda vez. ¿Qué crees que va a pasar antes de ejecutarlo? Ejecútalo y compara tu predicción con el resultado real.
- ¿Qué diferencia hay, en una frase propia, entre "una carpeta con archivos" y "un repositorio Git"?

## 7. Puntos de verificación (resumen)

☐ Git instalado y verificado (§3) · ☐ Carpeta del proyecto creada y ubicación confirmada con `pwd`/`cd` (§5, Paso 1) · ☐ Repositorio inicializado sin error (§5, Paso 2) · ☐ `git status` confirma un repositorio vacío en la rama principal (§5, Paso 3) · ☐ Error `fatal: not a git repository` provocado y presenciado en vivo, fuera de la carpeta (§5bis).

## 8. Diagnóstico de errores

**Categorías revisadas para este laboratorio:** comando no encontrado/PATH (sí aplica) · permisos de archivo o carpeta (no aplica — `mkdir`/`git init` en tu propia carpeta de usuario no requiere permisos elevados) · diferencias de versión de Git (aplica parcialmente — nombre de rama por defecto) · diferencias entre sistemas operativos (aplica — verificación de ruta) · configuración ausente (no aplica todavía — se cubre en T2) · estado previo inconsistente (aplica — repositorio ya inicializado) · interferencia de software externo (aplica — ver fila de OneDrive abajo, relevante en particular si trabajas en Windows con una carpeta sincronizada).

| Error | Por qué aparece | Cómo se diagnostica | Cómo se comprueba la hipótesis | Solución | Cómo se previene |
|---|---|---|---|---|---|
| `git: command not found` / `'git' no se reconoce...` | Git no está instalado, o no está en el PATH del sistema | `git --version` falla desde cualquier ubicación, no solo aquí | Ejecuta `git --version` en una terminal nueva, recién abierta — si sigue fallando ahí también, confirma que es un problema de instalación/PATH y no de esta terminal en particular | Instalar Git desde git-scm.com (o el gestor de paquetes del SO) y abrir una terminal nueva | Verificar `git --version` como Checkpoint 0, siempre, antes de cualquier otro paso de cualquier laboratorio futuro |
| `fatal: not a git repository (or any of the parent directories): .git` — el que acabas de provocar en §5bis | Se ejecutó un comando de Git fuera de una carpeta inicializada (o dentro de una donde `git init` nunca se ejecutó) | Sospecha: "no estoy donde creo que estoy, o `.git` nunca se creó" | Ejecuta `pwd`/`cd` para confirmar tu ubicación real, y luego `dir /a` (Windows) o `ls -a` (macOS/Linux) para ver si `.git` existe ahí — si no aparece en la lista, la hipótesis queda confirmada | `cd` a la carpeta correcta, o ejecutar `git init` si de verdad falta | Ejecutar `git status` inmediatamente después de `git init`, como hábito — es exactamente el Checkpoint 2 que ya hiciste |
| `Reinitialized existing Git repository in ...` | Se ejecutó `git init` dos veces en la misma carpeta (lo que acabas de hacer en §6) | No es un error real — es informativo, aunque suene alarmante la primera vez que lo ves | No aplica — no hay nada que comprobar, Git te está informando, no fallando | Ninguna acción necesaria; Git no duplica ni pierde el historial existente al repetir `git init` | Saber, de antemano (§6), que repetir `git init` es seguro — para no entrar en pánico si ocurre sin querer |
| Trabajar dentro de una carpeta sincronizada por OneDrive (frecuente en Windows, incluido este mismo entorno) y ver que `git status` reporta cambios que tú no hiciste | OneDrive puede tocar metadatos de archivos (fecha de modificación, atributos) durante su sincronización, y Git los interpreta como cambios reales | Sospecha si `git status` muestra archivos "modificados" justo después de que el ícono de OneDrive en la barra de tareas termine de sincronizar, sin que tú hayas editado nada | Pausa la sincronización de OneDrive un momento y vuelve a ejecutar `git status` — si los cambios fantasma desaparecen, la hipótesis queda confirmada | Mover tus repositorios de trabajo fuera de la carpeta sincronizada por OneDrive, o excluir esa carpeta específica de la sincronización | Elegir, desde el principio, una ubicación para tus proyectos de código que no dependa de un servicio de sincronización en la nube genérico |

## 9. Mini laboratorio

Sin repetir literalmente los comandos anteriores: crea un repositorio nuevo llamado `laboratorio-<tu-nombre>` en una ubicación distinta a `mi-primer-repo`, confirma con `git status` que quedó bien inicializado, y anota en tus propias notas —no aquí— exactamente dónde vive la carpeta `.git` que se creó, usando la ruta completa de tu sistema.

## 10. Desafío

Sin ejecutar `git init` de nuevo: te entregan una carpeta que otra persona creó, con varios archivos dentro, y no sabes si ya es un repositorio Git o no. ¿Cómo lo averiguas? Encuentra la forma de comprobarlo tú mismo y anota qué evidencia exacta usaste para decidirlo — no vale "lo intenté y no dio error", quiero la evidencia específica que revisaste.

## 11. Buenas prácticas profesionales

- Nunca inicialices Git en una carpeta contenedora de muchos proyectos no relacionados (como `Documents` completa) — cada proyecto tiene su propio repositorio, siempre.
- Nombra la carpeta del proyecto en minúsculas con guiones (`mi-primer-repo`, no `MiPrimerRepo` ni `proyecto final v2`) — convención ampliamente adoptada en la industria, entre otras razones porque evita problemas de rutas al compartir el proyecto entre sistemas operativos distintos.
- Verificar `git status` después de cada acción importante no es un hábito de principiante — es algo que vas a ver hacer a desarrolladores con años de experiencia, constantemente.

## 12. Recursos recomendados

| | Título | Autor/canal | Idioma | Duración | Nivel | Motivo |
|---|---|---|---|---|---|---|
| 🟢 Antes | Pro Git — Cap. 1, "Getting Started" | Scott Chacon & Ben Straub / git-scm.com | EN | ~20 min lectura | Introductorio | Documentación oficial; explica el problema que resuelve el control de versiones antes de cualquier comando — mismo enfoque que este laboratorio | [git-scm.com/book/en/v2](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control) |
| 🔵 Durante | Missing Semester — "Version Control (Git)" | MIT / missing.csail.mit.edu | EN | ~50 min | Introductorio-intermedio | Curso real del MIT dedicado a estas herramientas; profundiza en el modelo de datos interno de Git más allá de lo que este laboratorio cubre | [missing.csail.mit.edu/2020/version-control/](https://missing.csail.mit.edu/2020/version-control/) |
| 🟣 Después | Git Novice | The Carpentries | EN | ~3h (curso completo) | Introductorio | Organización reconocida por enseñar Git a principiantes; útil para practicar con más repetición tras dominar lo esencial | [swcarpentry.github.io/git-novice/](https://swcarpentry.github.io/git-novice/) |

## 13. Evaluación

**Cierre — lo esencial en una frase:** un repositorio Git no es más que una carpeta con un historial adjunto (`.git`) que tú alimentas explícitamente; nada se guarda solo, y repetir `git init` nunca te hace daño.

- **Explicar:** en tus propias palabras, ¿qué es `.git` y por qué su presencia (o ausencia) es lo único que distingue una carpeta común de un repositorio?
- **Predecir:** si borraras la carpeta `.git` a mano, ¿qué le pasaría a tus archivos normales? ¿Y a tu historial?
- **Detectar y corregir errores:** se te entrega una carpeta donde `git status` devuelve `fatal: not a git repository`. Diagnostica la causa más probable, comprueba tu hipótesis, y corrígela.
- **Modificar / repetir desde cero, sin guía:** cierra esta guía por completo y repite todo el procedimiento —crear carpeta, inicializar, verificar— en una carpeta con otro nombre, de memoria.
- **Aplicar a un contexto nuevo:** te entregan un proyecto ya existente con archivos pero sin `.git`. ¿Qué harías, y en qué orden, para empezar a versionarlo sin perder ningún archivo?
- **Reflexión de proceso (no de contenido):** ¿qué parte de este laboratorio te costó más — la parte técnica o entender *por qué* Git funciona así? ¿Qué harías distinto si tuvieras que explicárselo a alguien que nunca usó una terminal?
