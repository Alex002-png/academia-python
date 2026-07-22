# N10.M1.T2b — Construir un cliente robusto: timeouts, reintentos y por qué localhost también falla

*Construido bajo DOC-12 v1.0.0, estándar de excelencia elevado. Investigación pedagógica adenda en `docs/investigacion/n10-m1-runtimes-locales.md` (fuentes: SRE Book de Google, Release It! de Nygard, issues reales de Ollama).*

**La gran pregunta de este laboratorio:** si tu cliente habla con un servicio en tu propia máquina (localhost), ¿de verdad necesitas timeouts, reintentos y circuit breakers — patrones diseñados para fallas de red?

**Entorno objetivo:** terminal local + script Python contra la API REST de Ollama.

**Fluencia de terminal asumida:** completa (M1.T2).

**Prerrequisitos técnicos:** M1.T2 completo; Python con `requests`.

**Prerrequisitos conceptuales:** N7.M1 (manejo de fallos de una API remota, para contrastar).

**Duración estimada — desglosada:** contexto (~15 min) + lectura de 3 fuentes canónicas (~25 min) + timeout real (~20 min) + reintentos con backoff/jitter (~20 min) + circuit breaker propio (~20 min) + evaluación (~10 min) → **total realista: 105-125 min.**

**Nivel de dificultad:** intermedio-avanzado — primer laboratorio del nivel sobre ingeniería de confiabilidad, no solo funcionalidad.

**Fuera de alcance de este laboratorio (y por qué):** colas de mensajes y balanceo entre múltiples instancias pertenecen a N9. Aquí el foco es un único cliente resiliente contra un único servicio local.

**Conexión con el laboratorio anterior y el siguiente:** M1.T2 dio el cliente funcional básico. Este laboratorio lo hace confiable. Deja abierta la pregunta que M1.T3 resuelve: ya sabes que Ollama puede fallar como proceso — ¿qué hay exactamente debajo de Ollama que explica esos modos de fallo?

---

## 1. Objetivo

Al terminar vas a poder explicar, con evidencia real, por qué un cliente contra un servicio local también necesita timeouts explícitos; implementar backoff exponencial con jitter siguiendo la receta del Google SRE Book; y construir un circuit breaker mínimo propio.

## 2. Contexto

Tu cliente Python de M1.T2 asumía implícitamente que Ollama siempre responde. La intuición común es que localhost no necesita manejo de fallos porque no hay red real de por medio. Esa intuición es incorrecta, y hoy la refutas con evidencia real: issues públicos del propio repositorio de Ollama documentan procesos que se cuelgan indefinidamente, consumiendo CPU/GPU al 100% sin responder ni fallar.

## 3. Requisitos

- M1.T2 completo.
- Python con `requests`.

☐ **Checkpoint 0 —** tu cliente de M1.T2 funciona y puedes modificarlo.

## 4. Explicación conceptual

Tres fuentes canónicas, verificadas por fetch directo, coinciden en la misma disciplina:

- **Michael Nygard** ("Release It!"): un punto de integración sin timeout es *"a surefire way to create Cascading Failures"*.
- **Google SRE Book** (cap. 22): con un deadline de 100 segundos, si solo el 5% de las peticiones nunca completan, el sistema queda incapaz de manejar el 80% de su tráfico normal — thread exhaustion. Cita textual: *"Always use randomized exponential backoff when scheduling retries"* — sin jitter, reintentos sincronizados se amplifican en oleadas (100 QPS → 200 → 300...).

**Dato honesto:** el SRE Book de Google NO usa el término "circuit breaker" en absoluto — resuelve el mismo problema con vocabulario propio ("adaptive throttling", "retry budgets": máximo ~10% de tráfico como reintentos). Dos vocabularios distintos para el mismo problema real.

**Evidencia de que esto aplica a Ollama en localhost:** issues públicos #8274 ("Ollama hangs without timeout, consuming full CPU or GPU"), #6380 ("Hangs after 20-30 mins") y #9209 ("timed out waiting for llama runner to start") del repositorio oficial documentan exactamente este escenario — no un fallo de red, un fallo de proceso local real.

## 5. Ejecución paso a paso

**Paso 1 — Reproduce la ausencia de timeout**

Revisa tu cliente de M1.T2: ¿tenía un parámetro `timeout=`? Casi seguro que no — por defecto, `requests` espera indefinidamente.

**Paso 2 — Añade un timeout explícito, calibrado con datos reales**

```python
import requests, time

inicio = time.time()
try:
    resp = requests.post("http://localhost:11434/api/generate",
        json={"model": "llama3.2", "prompt": "Cuenta hasta 3.", "stream": False},
        timeout=30)  # calibra con tu propia medición de M1.T2/M2.T3
except requests.exceptions.Timeout:
    print(f"Timeout tras {time.time()-inicio:.1f}s — el cliente NO se quedó colgado.")
```

**Paso 3 — Implementa reintentos con backoff exponencial y jitter**

```python
import random, time

def llamar_con_reintentos(payload, max_intentos=3):
    for intento in range(max_intentos):
        try:
            return requests.post("http://localhost:11434/api/generate", json=payload, timeout=30)
        except (requests.exceptions.Timeout, requests.exceptions.ConnectionError) as e:
            if intento == max_intentos - 1:
                raise
            espera = (2 ** intento) + random.uniform(0, 1)
            print(f"Intento {intento+1} falló, reintentando en {espera:.1f}s...")
            time.sleep(espera)
```

**Paso 4 — Construye un circuit breaker mínimo propio**

```python
class CircuitBreakerSimple:
    def __init__(self, umbral_fallos=3, ventana_segundos=30):
        self.fallos_consecutivos = 0
        self.umbral = umbral_fallos
        self.ventana = ventana_segundos
        self.abierto_desde = None

    def puede_intentar(self):
        if self.abierto_desde is None:
            return True
        if time.time() - self.abierto_desde > self.ventana:
            self.abierto_desde = None
            self.fallos_consecutivos = 0
            return True
        return False

    def registrar_fallo(self):
        self.fallos_consecutivos += 1
        if self.fallos_consecutivos >= self.umbral:
            self.abierto_desde = time.time()

    def registrar_exito(self):
        self.fallos_consecutivos = 0
        self.abierto_desde = None
```

## 6. Error inducido en vivo

Detén el servicio de Ollama a propósito y ejecuta tu cliente CON timeout del Paso 2. Observa el comportamiento real antes de leer la explicación — no es un timeout, es un error distinto.

## 7. Comprensión

- ¿Por qué obtuviste un `ConnectionError` casi instantáneo en vez de esperar los 30 segundos del timeout?
- ¿Por qué el SRE Book insiste en que el backoff sea ALEATORIO y no solo creciente?
- ¿En qué se diferencia tu circuit breaker de simplemente "reintentar 3 veces y rendirse"?

## 8. Puntos de verificación

☐ Confirmé que mi cliente de M1.T2 no tenía timeout explícito.
☐ Añadí un timeout calibrado con datos propios.
☐ Implementé reintentos con backoff exponencial Y jitter.
☐ Construí y probé mi circuit breaker mínimo.
☐ Reproduje el error inducido en vivo y distinguí ConnectionError de Timeout.

## 9. Diagnóstico de errores

| Error | Por qué aparece | Cómo se diagnostica | Cómo se comprueba la hipótesis | Cómo se soluciona | Cómo se previene |
|---|---|---|---|---|---|
| Mi timeout se siente demasiado largo o corto | Elegido sin datos reales de latencia normal. | Compara contra la distribución real medida en M2.T3. | Mide el percentil alto (p99), no el promedio. | Ajusta con margen sobre el percentil alto. | Nunca fijar un timeout sin medir antes. |
| ConnectionError en vez de Timeout al detener Ollama | El proceso no existe (puerto cerrado) → rechazo inmediato del SO, distinto de un proceso colgado. | El mensaje lo dice explícitamente. | Arranca Ollama y satúralo en vez de detenerlo — deberías obtener timeout real esta vez. | Maneja ambas excepciones por separado. | Nunca tratar "cualquier error de red" como lo mismo. |

## 10. Mini laboratorio

Integra tu circuit breaker con tu función de reintentos en una sola función cliente — consúltalo ANTES de intentar la petición.

## 11. Desafío

Instrumenta tu cliente completo con logging que registre cada decisión, y verifica en tus logs que el circuit breaker pasó correctamente por sus 3 estados.

## 12. Buenas prácticas profesionales

- Nunca hagas una llamada de red (incluida localhost) sin timeout explícito.
- Calibra timeouts contra percentiles altos de latencia medida.
- Distingue explícitamente fallos que vale la pena reintentar de los que no.

## 13. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Tag |
|---|---|---|---|---|---|---|
| [Addressing Cascading Failures](https://sre.google/sre-book/addressing-cascading-failures/) | Google | EN | ~30 min | Avanzado | Fuente primaria de backoff con jitter y retry budgets. | 🟢 Antes |
| [Handling Overload](https://sre.google/sre-book/handling-overload/) | Google | EN | ~20 min | Avanzado | Adaptive throttling, la alternativa de Google al circuit breaker. | 🔵 Durante |
| [Release It! (2ª ed.)](https://pragprog.com/titles/mnee2/release-it-second-edition/) | Michael Nygard | EN | Libro completo | Intermedio | Origen del patrón circuit breaker. | ⭐ Profundización |

## Evaluación

**Lo esencial en una frase:** localhost no es inmune a fallos — los mismos patrones de resiliencia de sistemas distribuidos siguen siendo necesarios.

**Las siete capacidades de dominio:** explicar (por qué localhost necesita timeouts, con evidencia real) · predecir (Timeout vs. ConnectionError según el escenario) · detectar errores (timeout mal calibrado) · corregir (manejar Timeout y ConnectionError por separado) · modificar (integrar circuit breaker + reintentos, mini laboratorio) · aplicar en contexto nuevo (instrumentar con logging, desafío) · usar en un proyecto (cliente resiliente para la columna vertebral del capstone).

**Repetir desde cero, sin guía:** escribe desde cero un cliente con timeout, reintentos con jitter y circuit breaker.

**Pregunta metacognitiva de proceso:** ¿asumías que "está en mi propia máquina" significaba "no puede fallar como un servicio remoto"? ¿Qué evidencia cambió esa suposición?
