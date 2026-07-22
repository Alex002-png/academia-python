# N10.M1.T3 — Qué hay debajo de Ollama: llama.cpp

*Construido bajo DOC-12 v1.0.0. Investigación pedagógica: `docs/investigacion/n10-m1-runtimes-locales.md`. Primera compilación real de C++ de toda la Academia.*

**La gran pregunta de este laboratorio:** si Ollama ya te da todo esto con un solo comando, ¿qué hay exactamente debajo, y qué control real pierdes por no tocarlo directamente?

**Entorno objetivo:** terminal local; compilación con soporte CUDA (hardware de referencia: RTX 5070, con CUDA Toolkit instalado y verificado en el Paso 1).

**Fluencia de terminal asumida:** completa (N9 + Laboratorios 1-2).

**Prerrequisitos técnicos:** CUDA Toolkit instalado y compatible con el driver de la GPU (verificable con `nvcc --version`); CMake y un compilador de C++ (Visual Studio Build Tools en Windows, build-essential en Linux).

**Prerrequisitos conceptuales:** Laboratorios 1-2 completos.

**Duración estimada — desglosada:** contexto y explicación conceptual (~10 min) + compilación guiada con soporte CUDA (~30-40 min, la mayor parte tiempo de compilación real) + ejecución con control explícito de threads/capas/contexto (~20 min) + error inducido en vivo — OOM real (~15 min) + mini laboratorio y desafío (~20 min) + evaluación y cierre (~10 min) → **total realista: 110-130 min**, el laboratorio más largo de M1 por la compilación genuina que incluye.

**Nivel de dificultad:** intermedio — primera vez que el estudiante compila software real de C++/CUDA en toda la Academia.

**Fuera de alcance de este laboratorio (y por qué):** el formato GGUF en detalle se cubre en el Laboratorio 4. Medición sistemática y comparativa de rendimiento se cubre en M2 (aquí las estadísticas de tokens/segundo son una primera observación informal, no todavía una medición metodológica). Escribir kernels CUDA propios queda fuera del alcance de todo este nivel — M3.T3 cubre CUDA a nivel de modelo mental operativo, no de autoría de kernels.

**Conexión con el laboratorio anterior y el siguiente:** el Laboratorio 2 dejó al estudiante controlando Ollama con precisión desde su propio código, sin haber cuestionado nunca qué decisiones automáticas toma Ollama por él (cuántas capas van a GPU, cuántos threads de CPU usar). Este laboratorio abre el capó. Deja abierta la pregunta que el Laboratorio 4 resuelve: ya controlas el motor directamente — ¿qué información exacta necesita ese motor para saber cómo cargar cualquier archivo `.gguf` que le des?

---

## 1. Objetivo

Al terminar este laboratorio vas a poder: explicar la relación real entre Ollama y llama.cpp; compilar llama.cpp con soporte CUDA y verificar que la compilación lo detectó correctamente; ejecutar un modelo con control explícito de threads, capas descargadas a GPU y tamaño de contexto; y diagnosticar, con evidencia real, un fallo de memoria por pedir más de lo que tu VRAM permite.

## 2. Contexto

Ollama (Laboratorios 1-2) te dio control total sobre CÓMO usar un modelo, pero nunca tuviste que decidir CUÁNTAS capas del modelo van a tu GPU, ni cuántos hilos de CPU usar, ni el tamaño exacto del contexto — Ollama elige valores razonables por ti, de forma automática y silenciosa. Esa capa de conveniencia vale la pena entenderla de verdad, en vez de darla por sentada, porque cuando algo rinde peor de lo esperado, o cuando necesitas exprimir cada gigabyte de tu RTX 5070, esas decisiones automáticas dejan de ser suficientes.

**llama.cpp** es el motor real que hace la inferencia — Ollama lo usa por debajo (con un binding propio en Go para arquitecturas más nuevas, pero el motor de referencia de todo este ecosistema sigue siendo este proyecto). Hoy lo compilas y lo usas directamente, con las mismas palancas que Ollama ya movía por ti sin que las vieras.

## 3. Requisitos

- CUDA Toolkit instalado y compatible con tu driver de la RTX 5070.
- CMake y un compilador de C++ funcional.
- Al menos 15-30 minutos de compilación real disponible.
- Laboratorios 1-2 completos.

☐ **Checkpoint 0 —** `nvidia-smi` y `nvcc --version` responden ambos, confirmando driver Y toolkit por separado (son dos cosas distintas).

## 4. Explicación conceptual

El objetivo declarado del propio proyecto llama.cpp, citado textualmente de su documentación oficial (verificado por fetch directo): *"enable LLM inference with minimal setup and state-of-the-art performance on a wide range of hardware — locally and in the cloud."*

**Modelo mental de hoy:** si Ollama es el coche completo con llave automática, llama.cpp es abrir el capó y tocar el motor directamente — más control, más responsabilidad, y la posibilidad real de que algo no arranque bien si lo configuras mal.

Tres palancas que vas a mover hoy, confirmadas contra la documentación oficial de las herramientas del proyecto:

- **`-t`/`--threads`** — cuántos hilos de CPU usar. Recomendado: igual al número de núcleos físicos, no al total de hilos lógicos.
- **`-ngl`/`--n-gpu-layers`** — cuántas capas del modelo se cargan en tu VRAM en vez de en RAM del sistema. Acepta un número exacto, `auto`, o `all`.
- **`-c`/`--ctx-size`** — tamaño del contexto de la conversación, con un valor por defecto de 4096.

Por defecto, llama.cpp usa `mmap` para mapear el archivo del modelo directamente a memoria en vez de copiarlo entero de golpe al arrancar — por eso la segunda vez que cargas el mismo archivo suele sentirse casi instantánea: el sistema operativo ya lo tiene cacheado desde la primera carga.

## 5. Ejecución paso a paso

**Paso 1 — Verifica que CUDA está listo antes de compilar nada**

```
nvidia-smi
nvcc --version
```

`nvidia-smi` debe mostrar tu RTX 5070 con su versión de driver; `nvcc --version` debe mostrar la versión del CUDA Toolkit instalado. Si cualquiera de los dos falla, instálalo antes de continuar — compilar sin esto produce un binario perfectamente funcional pero SIN soporte GPU, sin ningún mensaje de error que te avise del problema.

**Paso 2 — Clona el repositorio y configura la compilación con CUDA activado**

```
git clone https://github.com/ggml-org/llama.cpp
cd llama.cpp
cmake -B build -DGGML_CUDA=ON
```

El flag `GGML_CUDA=ON` es lo que le dice al sistema de compilación que incluya soporte NVIDIA — sin él, obtendrías silenciosamente un binario CPU-only. La salida de CMake debería mencionar CUDA detectado (arquitectura de tu GPU, versión del toolkit encontrada).

**Paso 3 — Compila (esto toma tiempo real)**

```
cmake --build build --config Release
```

Este paso compila código C++ y kernels CUDA reales — entre 15 y 30 minutos según tu CPU, no un error si tarda. Al terminar, los binarios (`llama-cli`, `llama-server`, entre otros) quedan en `build/bin/`.

**Paso 4 — Ejecuta con control explícito de threads y capas en GPU**

```
./build/bin/llama-cli -m ruta/al/modelo.gguf -p "Explica qué es un vector embedding" -t 6 -ngl 999 -c 2048
```

`-ngl 999` es una forma común de decir "todas las capas que quepan", no un número mágico exacto. Deberías ver el texto generado en tu terminal, con estadísticas de rendimiento al final (tokens/segundo de prompt y de generación) — tu primera medición real de rendimiento en todo el nivel, aunque todavía informal.

**Paso 5 — Repite forzando CPU-only y compara**

```
./build/bin/llama-cli -m ruta/al/modelo.gguf -p "Explica qué es un vector embedding" -t 6 -ngl 0 -c 2048
```

Mismo modelo, mismo prompt, esta vez con 0 capas en GPU — tu ruta de comparación obligatoria contra GPU. Las estadísticas de tokens/segundo deberían ser notablemente más bajas: tu primera comparación real y propia de GPU vs. CPU, antes incluso de llegar a M3.

## 6. Error inducido en vivo

Pide explícitamente más capas en GPU de las que tu RTX 5070 puede sostener, usando un modelo suficientemente grande (o un `-ngl` alto sobre un modelo ya de por sí exigente para 12GB):

```
./build/bin/llama-cli -m ruta/a/un/modelo/grande.gguf -ngl 999
```

Observa el mensaje de error completo antes de seguir leyendo.

## 7. Comprensión

- ¿Qué diferencia real hay entre "threads" (`-t`) y "capas en GPU" (`-ngl`)? ¿Por qué son dos ejes de configuración completamente independientes entre sí?
- En el Paso 4 vs. el Paso 5, ¿qué le pasó exactamente a la velocidad al pasar de `-ngl 999` a `-ngl 0`? ¿Coincide con lo que predecirías sabiendo que tu GPU es más rápida para este tipo de trabajo?
- Si compilas SIN el flag `-DGGML_CUDA=ON`, ¿qué esperarías ver al intentar usar `-ngl 999` — un error explícito, o simplemente que no haga nada distinto a `-ngl 0`?

## 8. Puntos de verificación

☐ `nvidia-smi` y `nvcc --version` responden ambos antes de compilar.
☐ Compilación completa con CUDA detectado, sin errores.
☐ Ejecutaste el mismo prompt con `-ngl 999` y con `-ngl 0`, y comparaste las estadísticas reales.
☐ Reprodujiste y diagnosticaste un `CUDA out of memory` real.

## 9. Diagnóstico de errores

*Checklist de categorías: diferencias de versión (sí, entre CUDA Toolkit y llama.cpp) · configuración ausente (sí, el flag de compilación) · estado previo inconsistente (sí, un `build/` a medio configurar) · comando no encontrado (no aplica) · permisos (no aplica) · sistema operativo (aplica de forma leve a las herramientas de compilación disponibles) · interferencia externa (no aplica de forma central).*

| Error | Por qué aparece | Cómo se diagnostica | Cómo se comprueba la hipótesis | Cómo se soluciona | Cómo se previene |
|---|---|---|---|---|---|
| La compilación termina "bien" pero `-ngl` nunca acelera nada, sin ningún error visible | Se compiló sin el flag `-DGGML_CUDA=ON` — el binario resultante es CPU-only por diseño, y silenciosamente ignora el intento de usar GPU. | Revisa la salida completa de tu comando `cmake -B build` original — ¿mencionaba CUDA detectado, o ningún rastro de NVIDIA? | Borra la carpeta `build/` y ejecuta `cmake -B build -DGGML_CUDA=ON` de nuevo, confirmando en la salida que CUDA aparece mencionado esta vez. | Recompila con el flag correcto — no existe forma de "activar CUDA después" sobre un binario ya compilado sin ese soporte. | Leer la salida completa del comando `cmake`, no solo confirmar que "no dio error" — un binario CPU-only compila perfectamente bien, sin ningún error, y ese es precisamente el problema. |
| `CUDA error: out of memory` (el error de la sección 6) | El modelo cuantizado, más el KV cache del contexto solicitado, exceden los 12GB de VRAM reales disponibles en la RTX 5070. | El mensaje suele citar explícitamente "out of memory" o un código de error de asignación CUDA — confírmalo leyendo el mensaje completo. | Reduce primero `-c` (contexto) a la mitad y reintenta — si ahora carga, confirmado que el margen era ajustado; si sigue fallando, reduce también `-ngl`. | Reduce `-c` y/o `-ngl` hasta que el modelo quepa (M3.T5 formaliza este diagnóstico por completo). | Nunca asumir "todas las capas" (`-ngl 999`) sobre un modelo nuevo sin una idea aproximada de su tamaño contra tu VRAM disponible. |
| La compilación falla con errores del compilador (no encuentra CUDA, versión incompatible) | La versión del CUDA Toolkit instalada no es compatible con la versión de llama.cpp clonada, o el compilador de C++ del sistema no está correctamente configurado (frecuente en Windows sin Visual Studio Build Tools completo). | Lee el PRIMER error de la salida de compilación, no el último — los errores de C++ suelen encadenarse, y la causa real está al principio. | Confirma versiones exactas: `nvcc --version` contra los requisitos que el propio README de llama.cpp declara para su versión actual. | Actualiza el CUDA Toolkit, o usa una versión de llama.cpp más compatible con tu toolkit instalado. | Verificar versiones ANTES de clonar y compilar, no después de que la compilación falle a mitad de camino. |

## 10. Mini laboratorio

Repite el Paso 4 variando SOLO `-t` (prueba con 2, 6, y el número real de núcleos físicos de tu Ryzen 5 9600X), manteniendo `-ngl 999` fijo, y registra las estadísticas de tokens/segundo de cada corrida — ¿a partir de qué número de threads deja de notarse mejora real?

## 11. Desafío

Sin ejecutar nada nuevo todavía: basándote en las estadísticas que ya obtuviste en los Pasos 4 y 5, calcula cuántas veces más rápida fue la generación con GPU frente a CPU-only en tu propio hardware (no una cifra de internet), y formula una hipótesis de por qué la diferencia es tan grande — la vas a poder confirmar o refutar formalmente en M3.

## 12. Buenas prácticas profesionales

- Lee la salida completa de un paso de compilación antes de asumir éxito — "terminó sin detenerse" no es lo mismo que "compiló con las opciones que realmente querías".
- Guarda las estadísticas de rendimiento de cada corrida (tokens/s) desde el primer momento, aunque sea de forma informal — son la materia prima directa de M2 y M3.
- No fuerces `-ngl 999` a ciegas sobre un modelo nuevo y grande sin una idea aproximada de su tamaño — es la forma más rápida de gastar 20-30 minutos de compilación en un OOM evitable.

## 13. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Tag |
|---|---|---|---|---|---|---|
| [llama.cpp — README oficial](https://github.com/ggml-org/llama.cpp) | ggml-org | EN | ~25 min | Intermedio | Fuente oficial verificada por fetch directo: objetivo del proyecto, plataformas soportadas, opciones de compilación. | 🟢 Antes |
| [llama.cpp — tools/server README](https://github.com/ggml-org/llama.cpp/tree/master/tools/server) | ggml-org | EN | ~20 min | Intermedio | Documentación oficial exacta de `-t`/`-ngl`/`-c` y el resto de flags de `llama-cli`/`llama-server`. | 🔵 Durante |
| [GPU MODE — lectures](https://github.com/gpu-mode/lectures) | GPU MODE (Mark Saroufim, Andreas Köpf) | EN | Variable | Intermedio-avanzado | Comunidad activa y verificada especializada en programación GPU aplicada a ML/LLMs. | ⭐ Profundización |

## Evaluación

**Lo esencial en una frase:** Ollama y llama.cpp no son dos herramientas distintas — son dos capas de la misma pila, llama.cpp el motor y Ollama la gestión sobre ese motor; entender el motor directamente es lo que te permite diagnosticar y exprimir tu hardware cuando la capa de conveniencia ya no basta.

**Las siete capacidades de dominio:**
1. **Explicar** — la relación real entre Ollama y llama.cpp, y qué gana/pierde el estudiante al usar cada uno (sección 4).
2. **Predecir** — si un binario compilado sin `-DGGML_CUDA=ON` podrá usar la GPU con `-ngl` (sección 7).
3. **Detectar errores** — reconocer un `CUDA out of memory` real por su mensaje explícito (sección 6).
4. **Corregir** — diagnosticar el OOM comprobando la hipótesis (reducir `-c` primero) antes de aplicar la solución (sección 9).
5. **Modificar** — variar `-t` de forma sistemática (mini laboratorio, sección 10).
6. **Aplicar en contexto nuevo** — el desafío exige razonar cuantitativamente sobre datos ya propios, no repetir un procedimiento.
7. **Usar en un proyecto** — el control explícito de `-ngl`/`-c`/`-t` que este laboratorio enseña es exactamente lo que el capstone necesitará para operar la columna vertebral local con criterio, no por defecto.

**Repetir desde cero, sin guía:** cierra este documento y, de memoria, ejecuta `llama-cli` con un modelo distinto, control explícito de `-t`/`-ngl`/`-c`, y compara GPU vs. CPU-only una vez más.

**Pregunta metacognitiva de proceso:** ¿qué se sintió distinto entre "usar" Ollama (Laboratorios 1-2) y "compilar y controlar" llama.cpp directamente? ¿En qué momento el control extra se sintió útil, y en qué momento se sintió como fricción innecesaria?
