# N10.M1.T4 — El formato GGUF (cierra M1)

*Construido bajo DOC-12 v1.0.0. Investigación pedagógica: `docs/investigacion/n10-m1-runtimes-locales.md`. Laboratorio de cierre de M1 — integra T1-T4 en su desafío.*

**La gran pregunta de este laboratorio:** ¿qué información exacta hace falta empaquetar junto a los pesos de un modelo para que cualquier máquina, con cualquier herramienta del ecosistema, sepa cargarlo correctamente?

**Entorno objetivo:** terminal local.

**Fluencia de terminal asumida:** completa (N9 + Laboratorios 1-3).

**Prerrequisitos técnicos:** Python con el paquete `gguf` instalable vía pip; al menos un archivo `.gguf` real ya en disco de los laboratorios anteriores.

**Prerrequisitos conceptuales:** Laboratorios 1-3 completos — en particular, el control de `-ngl` de T3, que este laboratorio conecta directamente con la metadata real de un archivo.

**Duración estimada — desglosada:** contexto y explicación conceptual (~15 min) + inspección de metadata de un GGUF real (~20 min) + mini laboratorio, pipeline propio de inspección (~25 min) + laboratorio integrador de cierre de M1 (~20 min) + desafío (~10 min) + evaluación y cierre (~10 min) → **total realista: 90-105 min.**

**Nivel de dificultad:** intermedio.

**Fuera de alcance de este laboratorio (y por qué):** los distintos tipos de cuantización GGUF (Q4_K_M, Q5_K_M, etc.) y cómo elegir entre ellos se cubren en M2 completo — aquí el foco es la estructura del contenedor, no las variantes de cuantización que puede describir.

**Conexión con el laboratorio anterior y el siguiente:** el Laboratorio 3 dejó al estudiante controlando llama.cpp directamente, usando archivos `.gguf` sin cuestionar nunca qué hay realmente dentro de ellos. Este laboratorio cierra esa pregunta y, con ella, cierra M1 completo. Deja abierta la pregunta que M2 resuelve: ya sabes qué es un GGUF y qué metadata declara — ¿qué pasa exactamente cuando ese archivo representa el mismo modelo con distinta precisión numérica, y cómo se mide el efecto real de esa diferencia?

---

## 1. Objetivo

Al terminar este laboratorio vas a poder: explicar qué es GGUF y por qué reemplazó a los formatos anteriores de este mismo ecosistema; inspeccionar la metadata de un archivo GGUF real sin cargarlo completo en memoria; y construir un pipeline propio que decida programáticamente si un modelo es compatible con el hardware disponible antes de intentar cargarlo — el laboratorio integrador que cierra M1.

## 2. Contexto

Cada laboratorio de M1 usó archivos `.gguf` sin que tuvieras que preguntarte qué hay exactamente dentro de ellos — Ollama y llama.cpp simplemente los cargaron por ti. Pero "un archivo de pesos" no es información suficiente para cargar un modelo correctamente: hace falta saber también qué arquitectura de red implementa, qué tokenizador usa, con qué tamaño de contexto se entrenó, y con qué tipo de cuantización se guardó cada tensor.

Antes de GGUF, esa información vivía separada del archivo de pesos — repartida en scripts de conversión específicos por arquitectura, en documentación aparte, en convenciones no escritas entre herramientas. Cuando aparecía un hiperparámetro nuevo, cualquier herramienta que no lo esperara simplemente no sabía leerlo, sin ninguna forma de detectar el problema de antemano. GGUF resuelve esto con una idea simple pero potente: el archivo se describe completamente a sí mismo.

## 3. Requisitos

- Laboratorios 1-3 completos.
- Python con el paquete `gguf` instalado (`pip install gguf`).
- Al menos un archivo `.gguf` real ya en tu disco.

☐ **Checkpoint 0 —** identificaste al menos un archivo GGUF real ya presente en tu sistema (de los modelos descargados en laboratorios anteriores).

## 4. Explicación conceptual

La especificación oficial de GGUF —dato verificado por fetch directo— vive en el repositorio `ggml` del mismo autor de llama.cpp (ggerganov), **no** en el repositorio de llama.cpp propiamente, aunque este último lo implemente. Esa especificación explica su propia motivación con precisión: los formatos anteriores del mismo linaje (GGML, GGMF, GGJT) no tenían versionado ni forma de identificar la arquitectura del modelo — añadir un hiperparámetro nuevo rompía la compatibilidad sin que las herramientas lectoras pudieran siquiera detectar el problema antes de fallar.

La innovación real de GGUF es usar **metadatos clave-valor tipados** en vez de una lista posicional de números sin nombre — así, añadir información nueva nunca rompe a un lector que todavía no la conoce: simplemente la ignora sin problema.

Un archivo GGUF real tiene, en este orden: un header (número mágico "GGUF", versión del formato, cuántos tensores contiene, y los metadatos clave-valor), la información de cada tensor (nombre, dimensiones, tipo, dónde empieza dentro del archivo), un padding de alineación, y finalmente los datos binarios de los tensores.

💡 Piensa en GGUF como el equivalente, para un modelo de lenguaje, de los metadatos EXIF en una fotografía digital: la imagen (los pesos) es lo principal, pero la cámara, la fecha y la configuración exacta (la arquitectura, el tokenizador, el tipo de cuantización) viajan empaquetadas dentro del mismo archivo, sin que tengas que adivinarlas por separado.

## 5. Ejecución paso a paso

**Paso 1 — Instala la librería oficial de inspección**

```
pip install gguf
```

Confírmalo con `pip show gguf`. Este paquete permite leer la metadata de un archivo GGUF sin cargar los tensores de pesos completos en memoria.

**Paso 2 — Localiza un archivo GGUF real en tu disco**

Los modelos que descargaste con Ollama se guardan cacheados en una ubicación del sistema (varía según el sistema operativo). Si prefieres una ruta más fácil de ubicar, descarga cualquier GGUF pequeño directamente desde Hugging Face.

```
# Ejemplo de ubicación en Windows (verifica la tuya):
# %USERPROFILE%\.ollama\models\blobs\
```

**Paso 3 — Inspecciona su metadata con `gguf-dump`**

```
gguf-dump ruta/al/modelo.gguf
```

Esta herramienta, instalada junto con el paquete, vuelca TODA la metadata sin cargar los tensores en memoria — casi instantáneo sin importar el tamaño real del archivo. Deberías ver un listado completo: arquitectura (ej. "llama"), nombre del tokenizador, tamaño de contexto de entrenamiento, número de capas, tipo de cuantización de cada tensor, y decenas de campos más.

**Paso 4 — Extrae solo lo relevante desde Python**

```python
from gguf import GGUFReader

lector = GGUFReader("ruta/al/modelo.gguf")
for campo in ["general.architecture", "general.name", "llama.context_length"]:
    if campo in lector.fields:
        print(campo, "=", lector.fields[campo].parts[-1])
```

Deberías obtener los valores exactos de arquitectura, nombre y contexto de entrenamiento, extraídos programáticamente — sin haber cargado un solo tensor de pesos en memoria.

## 6. Error inducido en vivo

Intenta abrir con `GGUFReader` un archivo que exista pero NO sea un GGUF real — renombra cualquier otro archivo de tu sistema con extensión `.gguf`, o trunca un GGUF real cortándolo con las primeras líneas de un editor de texto:

```python
from gguf import GGUFReader
lector = GGUFReader("archivo_falso.gguf")
```

Observa el error real antes de seguir leyendo.

## 7. Comprensión

- ¿Por qué `gguf-dump` puede leer toda la metadata de un archivo de varios GB casi instantáneamente, sin que eso implique haber cargado el modelo completo en memoria?
- ¿Qué le pasaría a una herramienta antigua (pensada para GGML, el formato anterior) si intentara leer un GGUF con un campo de metadata que nunca existió en GGML? ¿Por qué la estructura clave-valor evita que esto rompa algo?
- ¿Por qué la especificación de GGUF vive en el repositorio `ggml` y no en el de `llama.cpp`, si ambos proyectos comparten el mismo autor original?

## 8. Puntos de verificación

☐ `gguf` instalado y `gguf-dump` funcionando sobre un archivo real.
☐ Identificaste correctamente arquitectura, tokenizador y contexto de entrenamiento de al menos un modelo.
☐ Script Python propio que extrae metadata específica sin cargar tensores.
☐ Reprodujiste el error de un archivo GGUF inválido/corrupto y leíste el mensaje real.

## 9. Diagnóstico de errores

*Checklist de categorías: estado previo inconsistente/archivo corrupto (sí, el caso central) · configuración de entorno (sí, entornos virtuales) · comando no encontrado (no aplica ya) · permisos (no aplica) · versión (leve, nombres de campo por arquitectura) · sistema operativo (no aplica de forma diferenciada) · interferencia externa (no aplica).*

| Error | Por qué aparece | Cómo se diagnostica | Cómo se comprueba la hipótesis | Cómo se soluciona | Cómo se previene |
|---|---|---|---|---|---|
| `gguf-dump` falla con "invalid magic number" o similar (el error de la sección 6) | El archivo no es un GGUF válido — está corrupto, truncado, o nunca fue realmente un GGUF (extensión renombrada sobre otro tipo de archivo). | El número mágico "GGUF" debe estar en los primeros bytes del archivo — si falta o está incompleto, el archivo no es válido, sin importar su extensión. | Verifica el tamaño del archivo contra el tamaño esperado (compara con la página de descarga original) — un archivo truncado suele pesar visiblemente menos. | Vuelve a descargar el archivo completo desde una fuente confiable. | Verificar la integridad de una descarga grande (tamaño esperado, o un hash si la fuente lo publica) antes de asumir que está completa. |
| `ModuleNotFoundError: No module named 'gguf'` | El paquete no se instaló, o se instaló en un entorno virtual distinto al que se está usando ahora (mismo error de fondo que el Laboratorio 4 de venvs de N1.M1 — "instalé pero no está"). | Confirma con `pip show gguf` en la MISMA terminal/entorno donde ejecutas el script. | Revisa si tienes un entorno virtual activo (el `(.venv)` en tu prompt) y si coincide con el que usaste para `pip install`. | Activa el entorno correcto, o reinstala en el que realmente estás usando ahora. | El mismo reflejo ya instalado en N1: verificar el entorno activo antes de instalar cualquier paquete nuevo. |
| El campo que buscas (ej. `llama.context_length`) no aparece en `lector.fields` | El nombre exacto del campo varía según la arquitectura del modelo — `llama.context_length` es específico de arquitectura llama; un modelo Qwen o Gemma usa un prefijo distinto. | Ejecuta `gguf-dump` primero y busca el nombre real del campo equivalente para ESE modelo específico, en vez de asumir un nombre genérico. | Compara el valor de `general.architecture` contra el prefijo que estás buscando — deben coincidir. | Usa el nombre de campo exacto que `gguf-dump` reveló para esa arquitectura específica. | Nunca asumir nombres de campo fijos entre arquitecturas distintas — la metadata clave-valor de GGUF es, precisamente, flexible por diseño. |

## 10. Mini laboratorio

Inspecciona los 2-3 modelos GGUF distintos que ya tienes en disco (de los laboratorios anteriores) y construye una tabla propia comparando su arquitectura, tamaño de contexto de entrenamiento y tipo de cuantización — usando tu script de extracción, no `gguf-dump` manualmente cada vez.

## 11. Desafío — Laboratorio integrador de cierre de M1

Construye un script Python que, dado un archivo GGUF y una cifra de VRAM disponible en GB (como argumento), reporte su metadata relevante Y decida programáticamente si "cabe" o "no cabe con margen razonable" — usando una estimación simple (tamaño del archivo en disco como aproximación del uso de VRAM, más un margen fijo reservado para el KV cache). El script debe integrar, citando explícitamente qué parte de cada laboratorio reutiliza:

- el modelo mental de carga vs. inferencia de M1.T1;
- el control explícito de `-ngl` de M1.T3 (como referencia de qué significa "caber" en la práctica);
- la inspección de metadata de este laboratorio.

Ejecútalo contra al menos dos modelos de tamaños claramente distintos y documenta el resultado de ambos.

## 12. Buenas prácticas profesionales

- Inspecciona SIEMPRE la metadata de un GGUF nuevo antes de intentar cargarlo en producción — es prácticamente gratis (no requiere cargar tensores) y evita sorpresas de arquitectura incompatible más adelante.
- No confíes en el nombre del archivo para saber su tipo de cuantización o arquitectura — son convenciones informales de quien lo subió, no garantías; la metadata real es la única fuente confiable.
- Mantén un pequeño catálogo propio (aunque sea un archivo de texto) de qué modelos tienes, su arquitectura y su tamaño real — ahorra reabrir `gguf-dump` cada vez que necesites recordarlo.

## 13. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Tag |
|---|---|---|---|---|---|---|
| [GGUF — especificación oficial](https://github.com/ggml-org/ggml/blob/master/docs/gguf.md) | ggml-org | EN | ~25 min | Intermedio | Fuente primaria verificada por fetch directo — la única referencia real de la estructura exacta del formato. | 🟢 Antes |
| [GGUF — Hugging Face Hub docs](https://huggingface.co/docs/hub/en/gguf) | Hugging Face | EN | ~15 min | Introductorio | Explicación complementaria, con contexto de por qué el ecosistema de Hugging Face adoptó GGUF ampliamente. | 🔵 Durante |

## Evaluación

**Lo esencial en una frase:** GGUF no es "un formato de archivo más" — es un contenedor autodescriptivo diseñado específicamente para que un modelo cuantizado sea portable entre máquinas y herramientas sin perder ninguna información necesaria para cargarlo correctamente; con esto, M1 completo deja al estudiante viendo el runtime de punta a punta, del comando `ollama run` hasta el byte del archivo.

**Las siete capacidades de dominio:**
1. **Explicar** — por qué GGUF reemplazó a GGML/GGMF/GGJT, con la razón real (versionado y metadata tipada), no una razón genérica (sección 4).
2. **Predecir** — qué le pasa a una herramienta antigua frente a un campo de metadata que no conocía (sección 7).
3. **Detectar errores** — reconocer un archivo GGUF corrupto o inválido por su mensaje real, no por suposición (sección 6).
4. **Corregir** — resolver el problema del campo de metadata con nombre distinto según arquitectura (sección 9).
5. **Modificar** — extender el script del Paso 4 para procesar varios modelos en el mini laboratorio (sección 10).
6. **Aplicar en contexto nuevo** — el desafío exige razonar sobre un modelo y una cifra de VRAM nunca vistos en los pasos guiados.
7. **Usar en un proyecto** — el laboratorio integrador de cierre (sección 11) reutiliza M1.T1, T3 y T4 citados por dirección exacta, exactamente el criterio de integración que DOC-12 exige.

**Repetir desde cero, sin guía:** cierra este documento y, de memoria, inspecciona un GGUF nuevo (uno que no hayas mirado antes en este laboratorio) y decide si cabría en 12GB de VRAM, razonando en voz alta cada paso de tu propio criterio.

**Pregunta metacognitiva de proceso:** de los cuatro laboratorios de M1, ¿cuál cambió más tu forma de pensar sobre lo que significa "correr un modelo" — y por qué precisamente ese, y no otro?
