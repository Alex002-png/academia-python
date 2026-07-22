# N10.M1.T3b — Arquitectura interna: GGML, y por qué Ollama y llama.cpp comparten motor

*Construido bajo DOC-12 v1.0.0, estándar de excelencia elevado. Investigación pedagógica adenda en `docs/investigacion/n10-m1-runtimes-locales.md`.*

**La gran pregunta de este laboratorio:** Ollama y llama.cpp son proyectos separados, con equipos separados — ¿por qué comparten exactamente el mismo motor de cómputo por debajo?

**Entorno objetivo:** terminal local; lectura de código fuente real, sin compilar nada nuevo.

**Fluencia de terminal asumida:** completa (M1.T3).

**Prerrequisitos técnicos:** M1.T3 completo, con llama.cpp ya clonado localmente.

**Prerrequisitos conceptuales:** M1.T3 (el flag `-DGGML_CUDA=ON`, usado sin explicar qué es GGML).

**Duración estimada — desglosada:** contexto (~15 min) + lectura del README de GGML (~20 min) + localizar la integración en tu propio build (~25 min) + error inducido en vivo (~15 min) + mini laboratorio y desafío (~20 min) + evaluación (~10 min) → **total realista: 90-105 min.**

**Nivel de dificultad:** intermedio-avanzado — primera lectura de código fuente de un proyecto de sistemas real en este nivel.

**Fuera de alcance de este laboratorio (y por qué):** programar kernels GGML propios excede el alcance de este nivel (mismo límite ya declarado en M3.T3 para CUDA).

**Conexión con el laboratorio anterior y el siguiente:** M1.T3 dejó al estudiante compilando y usando llama.cpp sin cuestionar qué es GGML. Este laboratorio abre esa capa. Deja abierta la pregunta que M1.T4 resuelve: ya entiendes la arquitectura de cómputo — ¿qué información exacta empaqueta el archivo que esa arquitectura carga?

---

## 1. Objetivo

Al terminar vas a poder explicar qué es GGML y por qué existe como librería separada de llama.cpp; describir la arquitectura de tres capas Ollama → libllama → GGML; y localizar evidencia real de que Ollama integra GGML.

## 2. Contexto

Compilaste llama.cpp con `-DGGML_CUDA=ON` en M1.T3 sin preguntarte qué es exactamente "GGML". Hoy abres esa capa: ¿por qué el mismo autor mantiene GGML como repositorio separado de llama.cpp, en vez de tenerlo todo junto?

## 3. Requisitos

- M1.T3 completo, con el repositorio de llama.cpp ya clonado.
- Editor de texto o navegador para leer código fuente.

☐ **Checkpoint 0 —** tienes acceso al clon local de llama.cpp de M1.T3.

## 4. Explicación conceptual

Según el README oficial de GGML (verificado por fetch directo), es una "tensor library for machine learning" en C/C++, con tres propiedades explícitas: **sin dependencias de terceros**, **cero asignaciones de memoria durante el runtime** (todo se reserva por adelantado), y **soporte amplio de hardware** (CUDA, Metal, Vulkan, y más).

**Modelo mental — arquitectura de tres capas**, confirmada contra documentación técnica real: herramientas de usuario (`llama-cli`/`llama-server`) → **libllama** (carga de modelos, tokenización, contexto, sampling) → capa de cómputo **GGML** (grafos de tensores, kernels cuantizados, abstracción de hardware).

**Confirmación real de que Ollama también usa esto:** el propio `docs/development.md` del repositorio de Ollama menciona opciones de build con prefijo `GGML_*` — evidencia técnica de primera mano.

**Por qué existen como repos separados** (discusión técnica oficial del repo GGML): GGML es la librería tensorial de propósito más general, reutilizable para más tipos de modelo (Whisper, del mismo autor, también la usa), mientras llama.cpp es el "playground" donde features nuevas se prueban antes de sincronizarse de vuelta. **Honestidad metodológica:** no existe un documento de diseño único y oficial que declare formalmente esta razón — la evidencia es real pero indirecta.

## 5. Ejecución paso a paso

**Paso 1 — Lee el README oficial de GGML**

Identifica las tres propiedades de diseño y por qué cada una importa para inferencia de LLMs en hardware de consumo.

**Paso 2 — Localiza la carpeta ggml dentro de tu propio clon de llama.cpp**

```
find . -iname "ggml" -type d
# o en Windows: dir /s /b ggml
```

**Paso 3 — Confirma la integración de GGML en Ollama, con evidencia real**

Busca en `docs/development.md` de Ollama las opciones de build con prefijo `GGML_`.

## 6. Error inducido en vivo

```
du -sh ggml/
du -sh .
```

Compara cuántas líneas/tamaño tiene la carpeta `ggml/` frente al resto del proyecto. Antes de mirar el resultado: ¿esperas una fracción pequeña o la mayoría?

## 7. Comprensión

- ¿La carpeta `ggml/` resultó pequeña o grande frente al proyecto total? ¿Coincide con "GGML es propósito general, llama.cpp añade lo específico de LLMs"?
- ¿Por qué "cero asignaciones de memoria en runtime" importa específicamente para la latencia de generación de texto?
- Si Whisper también usa GGML, ¿qué te dice eso sobre qué parte del trabajo es independiente del tipo de modelo?

## 8. Puntos de verificación

☐ Leí el README oficial de GGML y anoté sus 3 propiedades.
☐ Localicé la carpeta ggml/ real dentro de mi clon.
☐ Confirmé, con evidencia textual, que Ollama integra opciones GGML_*.
☐ Reproduje el error inducido en vivo y comparé tamaños relativos.

## 9. Diagnóstico de errores

| Error | Por qué aparece | Cómo se diagnostica | Cómo se comprueba la hipótesis | Cómo se soluciona | Cómo se previene |
|---|---|---|---|---|---|
| No encuentro ggml/ en mi clon | Versiones distintas reorganizan la estructura — puede vivir como submódulo git. | Revisa si existe .gitmodules en la raíz. | Si es submódulo, `git submodule update --init`. | Trae el contenido del submódulo. | Verificar la estructura real, no asumirla. |
| development.md de Ollama no menciona GGML_ | La documentación de un proyecto activo cambia con el tiempo. | Busca archivos de documentación de build actuales, no un nombre fijo. | Busca GGML_ directamente en CMakeLists.txt/Makefile. | Documenta la evidencia real que sí encuentres. | Aceptar que la documentación de un ecosistema activo cambia. |

## 10. Mini laboratorio

Busca, dentro del código de llama.cpp, al menos un archivo que mencione "whisper" — evidencia adicional de reutilización de GGML.

## 11. Desafío

Escribe un diagrama en texto de la arquitectura completa desde `ollama run` hasta un kernel ejecutándose en tu GPU, nombrando las 3-4 capas reales con al menos una responsabilidad de cada una.

## 12. Buenas prácticas profesionales

- Verifica la estructura real de un repositorio antes de asumir cómo funciona.
- Busca evidencia indirecta pero real cuando una fuente oficial no responde directamente.
- Reconoce honestamente cuándo una conclusión se apoya en evidencia indirecta.

## 13. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Tag |
|---|---|---|---|---|---|---|
| [GGML — README oficial](https://github.com/ggml-org/ggml) | ggml-org | EN | ~15 min | Intermedio | Fuente oficial de las 3 propiedades de diseño. | 🟢 Antes |
| [Ollama — development.md](https://github.com/ollama/ollama/blob/main/docs/development.md) | Ollama | EN | ~15 min | Intermedio | Evidencia de las opciones GGML_*. | 🔵 Durante |
| [When would you use ggml vs llama.cpp?](https://github.com/ggml-org/ggml/discussions/141) | ggml-org Discussions | EN | ~15 min | Avanzado | La explicación más cercana a oficial de la separación. | ⭐ Profundización |

## Evaluación

**Lo esencial en una frase:** GGML es la librería tensorial de propósito general que permite a llama.cpp, Ollama y Whisper compartir el mismo motor optimizado sin reimplementar cada uno su propia capa de hardware.

**Las siete capacidades de dominio:** explicar (las 3 propiedades de GGML) · predecir (proporción de código GGML vs. lógica LLM) · detectar errores (estructura de repositorio distinta a lo asumido) · corregir (adaptar la búsqueda cuando la documentación cambia) · modificar (buscar evidencia de Whisper, mini laboratorio) · aplicar en contexto nuevo (diagrama propio de arquitectura, desafío) · usar en un proyecto (diagnosticar en qué capa buscar cuando algo falla en el capstone).

**Repetir desde cero, sin guía:** explica las 3 capas de la arquitectura y la responsabilidad de cada una.

**Pregunta metacognitiva de proceso:** ¿qué se sintió distinto entre "usar" llama.cpp y "leer su código fuente real"?
