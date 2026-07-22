# N10.M1.T2 — Ollama a fondo: Modelfile, API REST local y parámetros de generación

*Construido bajo DOC-12 v1.0.0. Investigación pedagógica: `docs/investigacion/n10-m1-runtimes-locales.md`.*

**La gran pregunta de este laboratorio:** ¿cómo controlas, con precisión y desde tu propio código, el mismo modelo que hasta ahora solo usaste desde una conversación interactiva?

**Entorno objetivo:** terminal local + un script Python que habla con `http://localhost:11434`.

**Fluencia de terminal asumida:** completa (N9 + Laboratorio 1).

**Prerrequisitos técnicos:** Ollama instalado, al menos un modelo descargado y corrido (Laboratorio 1); Python 3 con `requests` disponible (idealmente en un entorno virtual, N1.M1.T6).

**Prerrequisitos conceptuales:** N7.M1 (ya construiste un cliente HTTP contra la API de un proveedor de modelos cloud — este laboratorio reutiliza ese mismo patrón de diseño, apuntando a `localhost`).

**Duración estimada — desglosada:** contexto y explicación conceptual (~10 min) + Modelfile propio y `ollama create` (~20 min) + cliente Python contra la API REST, con y sin streaming (~25 min) + comparación de `temperature` con repetición real (~15 min) + error inducido en vivo (~10 min) + mini laboratorio y desafío (~20 min) + evaluación y cierre (~10 min) → **total realista: 95-115 min.**

**Nivel de dificultad:** introductorio-intermedio — la primera vez que el estudiante programa CONTRA un modelo local, no solo lo usa desde la terminal.

**Fuera de alcance de este laboratorio (y por qué):** qué hace Ollama por debajo con llama.cpp se cubre en el Laboratorio 3, una vez que el estudiante ya domina la capa de conveniencia completa. Medición sistemática de rendimiento (tokens/segundo, VRAM) se cubre en M2 — aquí el foco es control funcional, no medición.

**Conexión con el laboratorio anterior y el siguiente:** el Laboratorio 1 dejó al estudiante con un modelo funcionando desde una conversación manual en terminal — útil para explorar, insuficiente para construir software real. Este laboratorio cierra esa brecha con el mismo contrato HTTP que N7.M1 ya enseñó. Deja abierta la pregunta que el Laboratorio 3 resuelve: ¿qué decisiones automáticas está tomando Ollama por ti cada vez que generas una respuesta, y qué control real pierdes por no verlas?

---

## 1. Objetivo

Al terminar este laboratorio vas a poder: escribir un Modelfile propio con system prompt y parámetros; construir un modelo personalizado con `ollama create`; controlar el modelo desde un script Python usando la API REST local, con y sin streaming; y explicar, con evidencia medida por ti mismo (no de memoria), el efecto real de `temperature` sobre la reproducibilidad de la salida.

## 2. Contexto

En N7.M1 ya hablaste con un modelo desde código Python: enviabas una petición HTTP a la API de un proveedor externo, con una clave de autenticación, y recibías una respuesta en JSON. Hoy vas a hacer exactamente lo mismo, con una diferencia que vale la pena notar con precisión: en vez de una URL de un proveedor externo, tu código va a hablar con `http://localhost:11434` — tu propia máquina. El contrato completo (petición HTTP, cuerpo JSON de entrada, cuerpo JSON de salida) no cambió en absoluto. Lo único que cambió es dónde vive el otro extremo de esa conversación.

Esto importa porque tu columna vertebral —el capstone de este nivel— necesita hablar con el modelo desde código real, de forma programática, no desde una conversación manual escrita a mano en una terminal. Hoy construyes esa capacidad exacta.

## 3. Requisitos

- Laboratorio 1 completo (Ollama instalado, al menos un modelo corrido).
- Python 3 instalado con el paquete `requests` disponible (`pip install requests`, idealmente dentro de un entorno virtual).
- Ollama corriendo en segundo plano.

☐ **Checkpoint 0 —** `ollama list` responde y muestra al menos un modelo ya descargado.

## 4. Explicación conceptual

Un **Modelfile** es, para un modelo, lo que un Dockerfile es para un contenedor: una receta de texto plano que define cómo se construye una variante personalizada. Tiene 7 instrucciones posibles según la documentación oficial, pero las tres que más vas a usar hoy son `FROM` (el modelo base del que partes — obligatoria), `SYSTEM` (el prompt de sistema que se aplica siempre, sin que el usuario tenga que escribirlo cada vez) y `PARAMETER` (valores por defecto como `temperature` o `num_ctx`).

`ollama create` lee ese archivo y registra un modelo nuevo con esa configuración — importante: **no copia los pesos del modelo base**, solo guarda la receta (el Modelfile) y la aplica cada vez que ejecutas esa variante.

La **API REST local** expone exactamente la misma capacidad que `ollama run` desde la terminal, pero pensada para que la controle tu propio código: `POST /api/generate` para una sola respuesta sin historial, `POST /api/chat` para una conversación con historial de mensajes. Cualquier `PARAMETER` definido en el Modelfile puede sobreescribirse petición por petición enviando un objeto `"options"` en el cuerpo JSON de la llamada — el Modelfile establece el valor por defecto; la API, si tú lo decides explícitamente, manda sobre él.

## 5. Ejecución paso a paso

**Paso 1 — Escribe tu Modelfile**

```
FROM llama3.2
SYSTEM "Eres un asistente técnico conciso. Respondes en máximo 3 frases, sin rodeos."
PARAMETER temperature 0.2
```

Guárdalo como un archivo llamado exactamente `Modelfile` (sin extensión), en una carpeta nueva.

**Paso 2 — Construye tu modelo personalizado**

```
ollama create asistente-conciso -f Modelfile
```

Debería responder "success" — `ollama list` ahora muestra `asistente-conciso` junto a `llama3.2`.

**Paso 3 — Pruébalo desde la terminal antes de tocar código**

```
ollama run asistente-conciso
>>> Explícame qué es la latencia en un sistema distribuido
```

La respuesta debería ser notablemente más corta y directa que la que `llama3.2` dio en el Laboratorio 1 con una pregunta equivalente — confirmación de que el system prompt está teniendo efecto real, no solo teórico.

**Paso 4 — Habla con él desde Python, sin streaming**

```python
import requests

resp = requests.post("http://localhost:11434/api/generate", json={
    "model": "asistente-conciso",
    "prompt": "¿Qué es un vector embedding?",
    "stream": False
})
print(resp.json()["response"])
```

El texto de la respuesta se imprime, extraído del JSON — el mismo tipo de estructura que ya procesaste en N7.M1, con un campo `"response"` en vez del formato específico de aquel proveedor.

**Paso 5 — Ahora con streaming, token por token**

```python
import requests, json

resp = requests.post("http://localhost:11434/api/generate", json={
    "model": "asistente-conciso",
    "prompt": "Cuenta hasta 5 despacio.",
    "stream": True
}, stream=True)

for linea in resp.iter_lines():
    if linea:
        fragmento = json.loads(linea)
        print(fragmento["response"], end="", flush=True)
```

Con `stream: True` en el cuerpo JSON, la respuesta llega como una secuencia de objetos JSON separados por saltos de línea, no como uno solo — cada línea es un fragmento de la respuesta completa. El texto debería aparecer palabra por palabra en tu terminal, en vez de todo de golpe.

## 6. Error inducido en vivo

Cambia SOLO el texto del `SYSTEM` en tu Modelfile (por ejemplo, pide que responda siempre en francés) y vuelve a preguntarle algo a `asistente-conciso` con `ollama run`, **sin** haber ejecutado `ollama create` de nuevo. Observa si el cambio tuvo efecto antes de seguir leyendo.

## 7. Comprensión

- En el Paso 5, ¿por qué la respuesta llega en varios objetos JSON separados en vez de uno solo, a diferencia del Paso 4?
- Si defines `PARAMETER temperature 0.2` en el Modelfile, pero tu petición a la API incluye `"options":{"temperature":0.9}`, ¿cuál de los dos valores gana? ¿Por qué tiene sentido que la API pueda sobreescribir el Modelfile, y no al revés?
- ¿Qué diferencia real hay, en el fondo, entre `asistente-conciso` y `llama3.2`? ¿Copiaste los pesos del modelo al crear tu variante?

## 8. Puntos de verificación

☐ Modelfile propio escrito, con `SYSTEM` y al menos un `PARAMETER`.
☐ `ollama create` construyó `asistente-conciso` sin errores.
☐ Confirmaste desde la terminal que el system prompt cambió el comportamiento real.
☐ Script Python funcionando contra `/api/generate`, con y sin streaming.
☐ Reprodujiste el error de editar el Modelfile sin reconstruir (sección 6) y entendiste por qué el cambio no se aplicó.

## 9. Diagnóstico de errores

*Checklist de categorías: configuración ausente/incorrecta (sí, el caso central de este laboratorio) · estado previo inconsistente (sí, el servicio de Ollama detenido) · comando no encontrado (no aplica, ya resuelto en Laboratorio 1) · permisos (no aplica) · versión (no aplica) · sistema operativo (no aplica de forma diferenciada aquí) · interferencia externa (no aplica).*

| Error | Por qué aparece | Cómo se diagnostica | Cómo se comprueba la hipótesis | Cómo se soluciona | Cómo se previene |
|---|---|---|---|---|---|
| Edité el Modelfile pero el comportamiento del modelo no cambió | `ollama create` no se volvió a ejecutar — el modelo registrado sigue siendo la versión anterior; editar el archivo de texto por sí solo no actualiza nada. | Compara la fecha/hora de tu edición del Modelfile contra la última vez que corriste `ollama create` para ese nombre. | Ejecuta `ollama create` de nuevo con el mismo nombre y repite la prueba — si ahora sí cambia el comportamiento, confirmado. | Recuerda: cada cambio al Modelfile exige un nuevo `ollama create` para tomar efecto. | Tratar `ollama create` como el equivalente de "compilar" — un paso obligatorio después de cada edición, nunca automático. |
| `ConnectionError` / conexión rechazada al hacer la petición Python | El servicio de Ollama no está corriendo en ese momento (se cerró, o nunca arrancó tras reiniciar el sistema). | Prueba primero `ollama list` en la terminal — si eso también falla con un error de conexión, confirmado: el servicio está caído, no es un bug de tu script. | En Windows/macOS, revisa si el ícono de Ollama sigue en la bandeja del sistema; en Linux, `systemctl status ollama`. | Reinicia el servicio de Ollama (reabre la app, o `systemctl start ollama` en Linux) y reintenta. | Confirmar que `ollama list` responde antes de depurar un script Python que en realidad no tiene ningún error propio. |
| El streaming del Paso 5 imprime todo de golpe al final, no palabra por palabra | Falta el `stream=True` como argumento de `requests.post()` (distinto del `"stream": True` dentro del cuerpo JSON — son dos flags con el mismo nombre en capas distintas), o no se usó `iter_lines()`. | Revisa que existan ambos: `"stream": True` dentro del `json=` del cuerpo, Y `stream=True` como argumento directo de `requests.post()`. | Imprime `resp` directamente sin iterar — si ves un objeto Response listo para iterar en vez de texto ya completo, confirma que falta el `stream=True` de requests. | Añade `stream=True` a la llamada de `requests.post`, además del `"stream":True` del cuerpo. | Recordar que "streaming del servidor" (el JSON) y "streaming del cliente HTTP" (la librería requests) son dos configuraciones independientes que deben coincidir para funcionar juntas. |

## 10. Mini laboratorio

Crea un segundo Modelfile con un system prompt distinto y una temperatura alta (por ejemplo 0.9), constrúyelo con otro nombre, y compara con datos reales: hazle la MISMA pregunta 5 veces a `asistente-conciso` (temperature 0.2) y 5 veces a tu nueva variante, contando cuántas de las 5 respuestas fueron textualmente idénticas en cada caso.

## 11. Desafío

Escribe un script Python que envíe la misma pregunta a dos modelos distintos que ya tengas descargados (por ejemplo `llama3.2` y el que descargaste en el mini laboratorio del Laboratorio 1), usando `/api/chat` en vez de `/api/generate`, y que imprima cuál de los dos respondió primero (mide el tiempo con el módulo `time`) — sin ejecutar nada manualmente en la terminal para hacer esa comparación.

## 12. Buenas prácticas profesionales

- Da nombres descriptivos a tus modelos personalizados (`asistente-conciso`, no `m1`) — en unas semanas vas a tener varios y necesitarás recordar para qué sirve cada uno.
- Guarda tus Modelfiles junto a tu código, no solo en la carpeta donde ejecutaste `ollama create` — son texto plano y se versionan en Git exactamente igual que cualquier otro archivo de configuración.
- Usa streaming en cualquier aplicación real orientada a un usuario humano — la percepción de velocidad importa tanto como la velocidad real, y esperar la respuesta completa se siente mucho más lento aunque tarde lo mismo.

## 13. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Tag |
|---|---|---|---|---|---|---|
| [Modelfile Reference](https://github.com/ollama/ollama/blob/main/docs/modelfile.md) | Ollama | EN | ~15 min | Introductorio | Referencia oficial completa de las 7 instrucciones del Modelfile, verificada por fetch directo. | 🟢 Antes |
| [Ollama API Documentation](https://github.com/ollama/ollama/blob/main/docs/api.md) | Ollama | EN | ~20 min | Introductorio-intermedio | Especificación completa de `/api/generate` y `/api/chat`, incluidos todos los parámetros de `"options"`. | 🔵 Durante |

## Evaluación

**Lo esencial en una frase:** la API REST local de Ollama es el mismo contrato que ya conocías de N7.M1, apuntando ahora a tu propia máquina; el Modelfile define el comportamiento por defecto, la API puede sobreescribirlo petición a petición, y el streaming existe para que la percepción de velocidad del usuario no dependa de esperar la respuesta completa.

**Las siete capacidades de dominio:**
1. **Explicar** — qué hace `ollama create` y por qué editar el Modelfile solo no basta (sección 9).
2. **Predecir** — qué parámetro gana cuando el Modelfile y la petición API definen valores distintos para lo mismo (sección 7).
3. **Detectar errores** — reconocer que el streaming no está funcionando correctamente por la ausencia de un flag específico (sección 9).
4. **Corregir** — resolver el error de "Modelfile editado sin reconstruir" comprobando la hipótesis antes de aplicar la solución.
5. **Modificar** — adaptar el cliente Python del Paso 4 para usar `/api/chat` en vez de `/api/generate` (desafío, sección 11).
6. **Aplicar en contexto nuevo** — comparar dos modelos distintos con un script propio, no solo el modelo ya usado en los pasos guiados.
7. **Usar en un proyecto** — el mini laboratorio y el desafío ya integran comparación de modelos con evidencia medida, la base operativa directa del capstone.

**Repetir desde cero, sin guía:** cierra este documento y, de memoria, escribe un Modelfile nuevo, constrúyelo con `ollama create`, y habla con él desde un script Python con streaming activado.

**Pregunta metacognitiva de proceso:** ¿en qué momento de este laboratorio sentiste que dejaste de "usar" Ollama y empezaste a "programar contra" Ollama? ¿Qué cambió exactamente en tu forma de pensar el problema en ese momento?
