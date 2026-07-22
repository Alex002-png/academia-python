# N10.M1.T1 — Por qué correr un LLM en local: panorama y primer modelo vivo

*Construido bajo DOC-12 v1.0.0. Investigación pedagógica: `docs/investigacion/n10-m1-runtimes-locales.md`. Primer laboratorio de N10, primer laboratorio de todo ET4 que corre enteramente sobre hardware del estudiante sin ningún proveedor cloud de por medio.*

**La gran pregunta de este laboratorio:** ¿qué cambia, realmente, cuando un modelo de lenguaje deja de vivir en el servidor de un proveedor y empieza a vivir en tu propia máquina?

**Entorno objetivo:** terminal local — Windows, macOS o Linux, con instaladores nativos de Ollama en los tres.

**Fluencia de terminal asumida:** completa — N9 Superado, el estudiante ya operó infraestructura real (contenedores, procesos, terminal remota). Este laboratorio no reenseña nada de terminal básica.

**Prerrequisitos técnicos:** ninguna instalación previa de software de IA local. Sí se asume N7.M1 (llamadas reales a una API de modelo cloud) como ancla de comparación directa.

**Prerrequisitos conceptuales:** N7.M1 (inferencia vía API — el contraste de este laboratorio parte de ahí).

**Duración estimada — desglosada:** contexto y panorama del ecosistema (~15 min) + instalación guiada con verificación (~20-25 min, variable según descarga) + primer modelo vivo con observación deliberada de carga vs. inferencia (~20 min) + error inducido en vivo (~10 min) + mini laboratorio (~15 min) + desafío (~10 min) + evaluación y cierre (~10 min) → **total realista: 90-110 min.**

**Nivel de dificultad:** introductorio, con fricción real de descarga/instalación esperada — no es contenido inflado, es tiempo de descarga e instalación genuino, mismo principio que N1.M5.T1.

**Fuera de alcance de este laboratorio (y por qué):** Modelfile, API REST local y parámetros de generación se cubren en el Laboratorio 2, una vez que el estudiante ya tiene experiencia básica con el flujo completo. Qué hace Ollama por debajo (llama.cpp) se cubre en el Laboratorio 3, cuando ya hay suficiente contexto para apreciar la diferencia entre la capa de conveniencia y el motor real.

**Conexión con el laboratorio anterior y el siguiente:** N9 dejó al estudiante operando infraestructura desplegada en la nube (contenedores, model serving, observabilidad) sin cuestionar nunca dónde vive el modelo que esa infraestructura sirve. Este laboratorio abre esa pregunta con la forma más simple posible: un modelo, una máquina, sin capas de orquestación todavía. Deja abierta la pregunta que el Laboratorio 2 resuelve: ya tienes un modelo corriendo — ¿cómo lo controlas desde tu propio código, no solo desde una conversación manual?

---

## 1. Objetivo

Al terminar este laboratorio vas a poder: explicar, con razones concretas y no solo intuición, cuándo tiene sentido correr un modelo de lenguaje en tu propia máquina frente a llamar a una API cloud; instalar Ollama y verificar la instalación; descargar y ejecutar tu primer modelo; y explicar, con evidencia que tú mismo observaste, la diferencia real entre cargar un modelo en memoria y hacer inferencia con él ya cargado.

## 2. Contexto

Hasta N7.M1, cada vez que tu código "pensaba" con un modelo de lenguaje, esa inteligencia vivía en un servidor de un proveedor externo. Pagabas por token, dependías de la disponibilidad de ese proveedor, y tus datos viajaban por la red antes de que ocurriera nada. Eso no fue un defecto de diseño de tu columna vertebral — para construir un sistema RAG y luego agéntico (N7-N9), la API cloud te dio acceso al modelo más capaz posible sin que tuvieras que pensar en hardware ni un solo segundo.

Pero esa comodidad tiene un costo que rara vez se hace explícito hasta que alguien lo mide: cada llamada cuesta dinero real y escala con el uso; cada llamada depende de tu conexión a internet y de que el proveedor esté disponible en ese momento; y cada llamada envía el contenido completo de tu prompt fuera de tu control, hacia la infraestructura de un tercero.

Hoy inviertes esa ecuación. Vas a instalar un modelo que corre enteramente en tu propia GPU y CPU. Una vez descargado, no necesita red para funcionar. No tiene costo marginal por token generado — el costo ya lo pagaste en el hardware que compraste. Y ni una sola palabra de lo que le preguntes sale de tu máquina.

## 3. Requisitos

- **Espacio en disco:** al menos 8-10GB libres para el primer modelo (varía según el modelo exacto elegido).
- **Permisos:** capacidad de instalar software.
- **Conexión a internet:** solo para la descarga inicial — la inferencia posterior no la necesita.
- **Tiempo:** 90-110 minutos, con margen para que la primera descarga tome más de lo esperado.

☐ **Checkpoint 0 —** confirmaste que tienes espacio en disco suficiente y permisos de instalación en tu sistema.

## 4. Explicación conceptual

**Ollama** es la herramienta que vas a instalar hoy. Piénsalo como **el gestor de paquetes de los modelos de lenguaje** — el mismo tipo de capa de conveniencia que ya conoces de `pip` para instalar librerías de Python, pero aplicada a archivos de pesos de un modelo que pueden pesar varios gigabytes en vez de unos pocos megabytes de código.

Por debajo, Ollama no reinventa cómo se hace inferencia de un modelo de lenguaje — usa un motor ya especializado en esto exactamente (lo conocerás a fondo en el Laboratorio 3). Lo que Ollama añade es la capa de gestión completa: descargar el modelo correcto desde su biblioteca, guardarlo donde corresponde en tu sistema, exponerlo con un comando simple y con una API local, y cargarlo o descargarlo de memoria automáticamente según lo uses o dejes de usar.

💡 La primera vez que ejecutes un modelo se va a sentir más lento que las siguientes. Esto no es un defecto de tu máquina ni de Ollama: la primera ejecución incluye traer el modelo completo del disco a la memoria (y a la VRAM de tu GPU, si aplica) — un costo que solo pagas una vez por sesión de uso, nunca por cada palabra individual que el modelo genera después. Distinguir estas dos fases —**carga** y **inferencia**— es el modelo mental central de este laboratorio, y lo vas a comprobar tú mismo en el Paso 4, no a memorizarlo de esta explicación.

## 5. Ejecución paso a paso

**Paso 1 — Instala Ollama**

Ve a `ollama.com/download` y descarga el instalador de tu sistema operativo. Windows y macOS tienen instaladores nativos con interfaz gráfica; en Linux, la propia página oficial ofrece un script de instalación de una sola línea.

```
# Windows/macOS: ejecuta el instalador descargado
# Linux:
curl -fsSL https://ollama.com/install.sh | sh
```

Al terminar, en Windows y macOS Ollama queda corriendo como servicio en segundo plano (verás su ícono en la bandeja del sistema). En Linux se instala como un servicio systemd que arranca automáticamente.

**Paso 2 — Verifica la instalación**

```
ollama --version
ollama list
```

Deberías ver una versión real (algo como "ollama version is 0.x.x") y una tabla vacía o con solo encabezados — todavía no has descargado ningún modelo.

**Paso 3 — Descarga y corre tu primer modelo**

`ollama run` hace dos cosas en un solo comando: si el modelo no existe todavía en tu disco, lo descarga primero (puede tardar varios minutos, según tu conexión y el tamaño exacto del modelo); una vez descargado, te deja conversar con él directamente desde la terminal.

```
ollama run llama3.2
```

Usamos `llama3.2` deliberadamente — un modelo relativamente pequeño dentro del ecosistema actual (parámetros en el orden de miles de millones, no de cientos de miles como los modelos de frontera), elegido a propósito para que tu primera descarga no sea eterna. Vas a ver el progreso de la descarga capa por capa, con tamaño y velocidad, y al terminar un prompt interactivo `>>>` esperando tu primera pregunta.

**Paso 4 — Haz la misma pregunta dos veces y compara**

Escribe cualquier pregunta corta. Cuando el modelo termine de responder por completo, hazle exactamente la misma pregunta de nuevo, en la misma sesión de conversación. Presta atención específicamente a cuál de las dos tardó más en **empezar** a responder — no a cuál generó más rápido palabra por palabra, sino a cuál tardó más en arrancar.

```
>>> ¿Qué es la latencia en un sistema distribuido?
(espera la respuesta completa)
>>> ¿Qué es la latencia en un sistema distribuido?
```

La segunda respuesta debería empezar visiblemente más rápido que la primera. El modelo ya estaba cargado en memoria/VRAM esta segunda vez, así que no volviste a pagar ese costo inicial de carga.

**Paso 5 — Sal e inspecciona lo que descargaste**

```
/bye
ollama list
```

Deberías ver una fila con "llama3.2", su tamaño real en disco (varios gigabytes) y cuándo se modificó por última vez.

## 6. Error inducido en vivo

Intenta correr un modelo con un nombre que deliberadamente no existe en la biblioteca de Ollama:

```
ollama run llama3-inventado-xyz
```

Observa el mensaje de error completo antes de seguir leyendo — vas a diagnosticarlo formalmente en la sección 8.

## 7. Comprensión

- ¿Por qué la segunda pregunta del Paso 4 respondió más rápido que la primera, si el modelo era exactamente el mismo en ambos casos?
- ¿Qué diferencia real hay entre "descargar un modelo" (la primera vez que corriste el Paso 3) e "instalar Ollama" (Paso 1)? ¿Por qué son dos cosas distintas, aunque el Paso 3 haya incluido ambas la primera vez?
- Si mañana apagas tu computadora y la enciendes de nuevo sin conexión a internet, ¿podrías seguir usando llama3.2? Justifica tu respuesta con lo que ya sabes sobre dónde vive el modelo ahora.

## 8. Puntos de verificación

☐ Ollama instalado y `ollama --version` responde con una versión real.
☐ `llama3.2` descargado y corriendo — al menos una conversación completa.
☐ Observaste y puedes explicar la diferencia de velocidad entre la primera y segunda pregunta del Paso 4.
☐ `ollama list` muestra el modelo con su tamaño real en disco.
☐ Reprodujiste el error de nombre de modelo inexistente (sección 6) y leíste el mensaje completo.

## 9. Diagnóstico de errores

*Checklist de categorías revisada: comando no encontrado/PATH (sí aplica) · permisos (no aplica en este laboratorio) · diferencias de versión (no aplica todavía) · diferencias de sistema operativo (aplica al instalador) · configuración ausente (no aplica) · estado previo inconsistente (aplica a reinstalaciones) · interferencia de software externo (antivirus, poco común pero posible).*

| Error | Por qué aparece | Cómo se diagnostica | Cómo se comprueba la hipótesis | Cómo se soluciona | Cómo se previene |
|---|---|---|---|---|---|
| `'ollama' no se reconoce como un comando` (Windows) / `command not found` (macOS/Linux) | El instalador no añadió Ollama al PATH del sistema, o la terminal se abrió antes de completar la instalación. | Sospecha esto si el instalador terminó sin mostrar ningún error visible pero el comando sigue sin responder. | Cierra la terminal por completo y ábrela de nuevo — si ahora responde, confirmado que era un problema de sesión de terminal desactualizada, no de instalación real. | Si persiste tras reabrir la terminal, reinstala verificando que el instalador complete el paso de registro en PATH, o consulta la documentación oficial de instalación para tu sistema exacto. | Cerrar y reabrir la terminal después de cualquier instalación que modifique variables de entorno del sistema, como reflejo — no solo cuando algo ya falló. |
| `pull model manifest: file does not exist` (o un 404 equivalente, el error de la sección 6) | El nombre del modelo no existe en la biblioteca de Ollama — por un error de tipeo, o porque el modelo/tag exacto que buscabas nunca se publicó con ese nombre. | El mensaje menciona explícitamente "manifest" o un código de error de red — es un problema del nombre que escribiste, no de tu instalación de Ollama. | Busca el nombre exacto en `ollama.com/library` antes de reintentar — compara letra por letra, incluyendo el tag si el modelo tiene uno (ej. `:1b`, `:70b`). | Corrige el nombre exacto y vuelve a intentar el comando. | Verificar el nombre en la biblioteca oficial ANTES de escribir el comando, en vez de adivinarlo o recordarlo de memoria. |
| La descarga se congela o es extremadamente lenta | Congestión de red temporal, o un modelo relativamente grande sobre una conexión lenta — casi nunca es un problema de Ollama en sí mismo. | Compara con la velocidad de descarga de cualquier otro archivo grande en tu conexión en ese mismo momento. | Cancela con Ctrl+C y reintenta — Ollama suele retomar la descarga por capas ya completadas, no siempre desde cero. | Reintentar suele bastar; si el problema persiste, prueba con un modelo más pequeño primero para aislar si el problema es el tamaño del archivo o tu conexión en general. | Elegir un modelo pequeño para el primer contacto (como este laboratorio ya hace deliberadamente con llama3.2) antes de intentar modelos más grandes. |

## 10. Mini laboratorio

Descarga un segundo modelo de una familia distinta a llama3.2 (por ejemplo `qwen2.5` o `gemma2` — verifica el nombre y tag exactos en `ollama.com/library` antes de escribir el comando). Hazle la misma pregunta que le hiciste a llama3.2 en el Paso 4, y compara con datos reales: ¿cuál se sintió más rápido para arrancar la primera vez? ¿Cuál pesa más en disco según `ollama list`? Anota ambas observaciones con evidencia concreta, no con impresión subjetiva.

## 11. Desafío

Sin ejecutar ningún modelo nuevo: usando `ollama list` y `ollama show <modelo>` sobre los modelos que ya descargaste, determina cuánto espacio total ocupan en tu disco, y explica de dónde sale exactamente esa cifra — ¿qué archivo real, en qué formato (un adelanto deliberado del Laboratorio 4), es el que realmente pesa esos gigabytes que estás midiendo?

## 12. Buenas prácticas profesionales

- Verifica el nombre exacto de un modelo en `ollama.com/library` antes de intentar descargarlo — evita descargas fallidas y confusión entre nombres parecidos.
- Libera modelos que ya no uses con `ollama rm <modelo>` — es sorprendentemente fácil acumular decenas de gigabytes de modelos que probaste una vez y olvidaste.
- No confundas "Ollama está corriendo" (el servicio en segundo plano, siempre activo tras instalarlo) con "un modelo está cargado en memoria" (ocurre solo mientras lo usas activamente, y se libera después de un tiempo de inactividad). Confundir ambas capas es la causa más común de dudas de rendimiento en este ecosistema.

## 13. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Tag |
|---|---|---|---|---|---|---|
| [Ollama — README y Quickstart](https://github.com/ollama/ollama) | Ollama | EN | ~20 min | Introductorio | Fuente oficial verificada por fetch directo para este laboratorio — instalación y primeros comandos. | 🟢 Antes |
| [Ollama API Documentation](https://github.com/ollama/ollama/blob/main/docs/api.md) | Ollama | EN | ~15 min | Introductorio | Referencia oficial de la API REST local que usarás a fondo en el Laboratorio 2 — vale la pena hojearla ya aquí. | 🔵 Durante |
| [Biblioteca de modelos de Ollama](https://ollama.com/library) | Ollama | EN | ~10 min | Introductorio | Catálogo oficial y siempre actualizado de modelos y tags exactos disponibles — tu referencia contra el error de nombre inventado de la sección 6. | 🔵 Durante |

## Evaluación

**Lo esencial en una frase:** un modelo local no es "la misma API sin internet" — es infraestructura que ahora vive, se gestiona y se paga (en hardware, no en tokens por llamada) enteramente en tu propia máquina, y la diferencia entre carga e inferencia es la primera pieza real de ese modelo mental.

**Las siete capacidades de dominio:**
1. **Explicar** — qué gana y qué pierde el estudiante al mover inferencia de una API cloud (N7.M1) a su propia máquina (sección 2 + defensa de la evaluación).
2. **Predecir** — cuál de dos ejecuciones consecutivas del mismo prompt será más rápida en arrancar, y por qué (Paso 4).
3. **Detectar errores** — reconocer un nombre de modelo inexistente por el mensaje real de Ollama (sección 6).
4. **Corregir** — diagnosticar y resolver el error de nombre inventado comprobando la hipótesis en `ollama.com/library` antes de corregir (sección 9).
5. **Modificar** — repetir el flujo completo con un modelo de una familia nunca antes usada (sección 10, mini laboratorio).
6. **Aplicar en contexto nuevo** — el desafío de la sección 11 exige razonar sobre espacio en disco sin ejecutar nada nuevo.
7. **Usar en un proyecto** — este laboratorio sienta la base operativa (Ollama funcionando, al menos un modelo real) que el Laboratorio 2 usará para construir el primer cliente propio de la columna vertebral local.

**Repetir desde cero, sin guía:** cierra este documento y, de memoria, descarga y corre un tercer modelo distinto a los dos ya usados en este laboratorio, observando de nuevo la diferencia entre su primera y segunda respuesta.

**Pregunta metacognitiva de proceso:** ¿qué te sorprendió más hoy — la velocidad real de inferencia corriendo en tu propia máquina, o la sensación concreta de que, una vez descargado el modelo, ya no dependes de ninguna conexión externa para usarlo?
