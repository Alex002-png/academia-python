# N1.M3.T4 — Pilas y colas

> **Estado:** Desarrollo ✅ · Validación ⏳ Pendiente · Investigación ✅ [`n1-m3-t4-pilas-colas.md`](../../investigacion/n1-m3-t4-pilas-colas.md) — construida bajo DOC-11 v2.0.1 (Estándar de Excelencia Mundial).
>
> Motor de ejecución: **Pyodide (Python real en el navegador)**. Conteo de pasos, consistente con T1-T3.

## Ficha de control

| Campo | Valor |
|---|---|
| **Dirección** | N1.M3.T4 |
| **Gran pregunta del módulo (M3)** | ¿Cómo elegimos soluciones que continúan siendo buenas cuando el problema escala? |
| **Gran pregunta de esta lección** | Si eliges la estructura equivocada hoy, ¿el error aparecerá al escribir el código o cuando el sistema crezca — y cuál de los dos descubrimientos sale más caro? |
| **Prerrequisitos** | N1.M3.T1 (Big-O); N1.M2 (implementarlas como clases) |
| **Competencias** | C-N1-02 |
| **Duración** | Heurística. Escalera densa (7 categorías) + laboratorio integrador + desafío final. |
| **Conexión con N1.M1.T1 (Funciones a fondo)** | "La pila de llamadas de Funciones a fondo ¡era esto!" (ficha, textual) — hoy se nombra formalmente lo que el estudiante ya usó sin saberlo. |
| **Conexión con N1.M2** | Pila y cola se implementan como clases propias (M2), sobre estructuras existentes de Python — nunca desde cero en el sentido de reinventar la memoria. |

## Bloque 0 — Preparación del Tutor

**Recuperación (T3):** 1) ¿Qué hace exactamente `key=por_precio` (sin paréntesis)? 2) ¿Por qué inserción es O(n²)?

**Diagnóstico relámpago:** *"Si apilas platos y quieres el de arriba, ¿de qué lado lo sacas? Si haces fila en el banco, ¿quién se atiende primero?"*

**Problema motivador:** *"Quiero deshacer (Ctrl+Z) las últimas acciones de un editor de texto, en el orden inverso a como las hice."*

**Errores deliberados a inyectar:**
1. Usar una lista normal como cola, sacando del frente con `.pop(0)` — funciona, pero es O(n), no O(1).
2. No ver la pila escondida en un problema (verificar paréntesis balanceados) — intentarlo con contadores sueltos, frágil y que se rompe con tipos mezclados.

## Bloque 1 — Intuición, analogía e historia

**Hook:** *"La pila de llamadas de Funciones a fondo ya era esto, sin que lo supieras. Hoy la nombras — y aprendes a su gemela, la cola."*

**Analogía (ficha SYL-N1, con coincidencia independiente confirmada en CS50x):** una **pila** es un montón de platos — el último que pones es el primero que sacas (LIFO). Una **cola** es la fila del banco — el primero que llega es el primero que se atiende (FIFO). La estructura correcta hace trivial el problema; la incorrecta lo hace imposible, o al menos innecesariamente lento.

**Historia (costo real):** deshacer (Ctrl+Z) en cualquier editor de texto del mundo es literalmente una pila de acciones. El algoritmo de verificación de paréntesis/llaves balanceadas — usado en TODO compilador o intérprete, incluido el propio intérprete de Python leyendo tu código — es el ejemplo canónico de "pila escondida" en cualquier curso de estructuras de datos del planeta.

## Bloque 2 — Conflicto cognitivo

```python
def pop_frente_contado(lista):
    valor = lista[0]
    pasos = 0
    for i in range(1, len(lista)):
        lista[i-1] = lista[i]     # desplaza cada elemento una posicion
        pasos += 1
    lista.pop()
    return valor, pasos

lista_10 = list(range(10))
print(pop_frente_contado(lista_10))

lista_1000 = list(range(1000))
print(pop_frente_contado(lista_1000))
```

**Predicción esperada:** ¿cuántos "pasos" (desplazamientos) toma sacar del FRENTE de una lista de 10 elementos? ¿Y de 1000?

La sorpresa: **9 pasos** para 10 elementos, **999 pasos** para 1000 — sacar del frente de una lista exige desplazar TODOS los elementos restantes una posición. Esto es exactamente lo que `lista.pop(0)` hace internamente en Python — nunca es O(1), es O(n).

## Bloque 3 — Explicación rigurosa

**Pila — sobre una lista de Python (`.append()`/`.pop()`, ambos O(1) al final):**
```python
class Pila:
    def __init__(self):
        self.items = []
    def push(self, x):
        self.items.append(x)
    def pop(self):
        return self.items.pop()
    def peek(self):
        return self.items[-1]      # mira sin sacar
    def esta_vacia(self):
        return len(self.items) == 0
```

**Cola — sobre `collections.deque`, NUNCA sobre una lista pura:**
```python
from collections import deque

class Cola:
    def __init__(self):
        self.items = deque()
    def encolar(self, x):
        self.items.append(x)
    def desencolar(self):
        return self.items.popleft()   # O(1) real, a diferencia de lista.pop(0)
    def esta_vacia(self):
        return len(self.items) == 0
```
La documentación oficial de Python lo advierte explícitamente: `deque` está diseñada para O(1) en ambos extremos; una lista normal solo es O(1) al final.

## Bloque 4 — Escalera de práctica

*Nota de densidad (DOC-11 v2.0.1): siete categorías.*

**Predecir:**
1. El conflicto del Bloque 2.
2. Dado "deshacer las últimas N acciones en orden inverso", ¿pila o cola?
3. Dado "atender clientes en el orden exacto en que llegaron", ¿pila o cola?

**Leer código:** una implementación de `Pila` como clase — identificar qué método corresponde a "ver el elemento de arriba sin sacarlo".

**Investigar / trazar:** contar los pasos de `pop_frente_contado` para listas de tamaño creciente (10, 100, 1000) — confirmando el crecimiento O(n), consistente con T1.

**Modificar:** código que usa una lista normal como cola (con `.pop(0)`) → convertir a `collections.deque` con `.popleft()`.

**Refactorizar:** código ad-hoc que verifica paréntesis balanceados con contadores sueltos (que se rompe con tipos mezclados `{[()]}`) → reescribirlo con una pila explícita.

**Escribir:** implementar `Pila` y `Cola` desde cero como clases, sobre estructuras existentes (`list` y `deque` respectivamente) — nunca reinventando la memoria.

**Depurar (tres ejercicios, dificultad creciente):**
1. Usar `.pop(0)` en una lista para simular una cola (Bloque 0, ineficiente).
2. No reconocer la pila escondida en paréntesis balanceados (Bloque 0).
3. *(compuesto)* Una implementación de `Pila` donde `peek()` accidentalmente MUTA la pila (usa `.pop()` en vez de solo mirar `[-1]`) — el bug real de "ver sin sacar".

## Bloque 5 — Laboratorio: mini-proyecto integrador

**Integración real (con T1, M2):** el laboratorio reutiliza el vocabulario de costo de T1 y el patrón de clase de M2, sobre el ejemplo canónico de "pila escondida".

**El proyecto — Verificador de paréntesis balanceados:** dado un string con `()`, `[]`, `{}` mezclados, determinar si están correctamente balanceados y anidados, usando una `Pila` explícita — no contadores sueltos.

**Trade-off explícito (la pregunta ingenieril de la ficha, textual):** si eliges la estructura equivocada hoy, ¿el error aparecerá al escribir el código o cuando el sistema crezca — y cuál de los dos descubrimientos sale más caro? (Usar `.pop(0)` en una lista pequeña "funciona" en pruebas; el costo real aparece con datos grandes en producción — mucho más caro de diagnosticar ahí que en el momento de escribir el código.)

**Argumento de corrección:** ¿el verificador maneja correctamente un string vacío (balanceado, trivialmente)? ¿Y uno con solo caracteres de cierre, sin ninguna apertura?

**Confrontación de soluciones:** resolver el problema CON pila contra intentarlo con contadores sueltos por tipo — el segundo enfoque funciona para un solo tipo de paréntesis, pero se rompe en cuanto se mezclan (`(]` debería fallar, pero contadores independientes no lo detectan).

**Fase 2 — transferencia sin instrucciones repetidas:** extender el verificador para reportar en qué posición está el primer paréntesis desbalanceado, sin que se explique el patrón.

## Bloque 6 — Consolidación

**Defensa socrática:**
1. ¿Por qué `lista.pop(0)` es O(n) y no O(1)?
2. ¿Cómo se relaciona la pila de llamadas de Funciones a fondo con la pila de hoy?
3. *(inédita, la pregunta ingenieril de la ficha, textual)* Si eliges la estructura equivocada hoy, ¿el error aparecerá al escribir el código o cuando el sistema crezca — y cuál de los dos descubrimientos sale más caro?

**Seis preguntas de excelencia:**
1. ¿Qué aprendí? Que la disciplina de acceso (LIFO/FIFO) de un problema, no solo sus datos, determina qué estructura usar.
2. ¿Por qué existe este concepto? Porque muchos problemas reales (deshacer, historial, colas de procesamiento) tienen una disciplina de acceso clara que una estructura genérica no refleja.
3. ¿Qué problema resuelve? Hace trivial (o al menos eficiente) un problema que con la estructura equivocada sería innecesariamente costoso o directamente incorrecto.
4. ¿Cómo lo usan los profesionales? Reconocen la disciplina de acceso ANTES de codificar, y eligen la estructura primero — nunca improvisan con lo que ya tenían a mano.
5. ¿Cómo se conecta con lo anterior? La pila de llamadas de T1 (Funciones a fondo) y el costo de `.pop(0)` de Big-O (T1 de este módulo) se encuentran hoy en el mismo lugar.
6. ¿Qué pasaría si no existiera este criterio? Cada problema con una disciplina de acceso clara (deshacer, colas de espera) se resolvería con estructuras genéricas mal ajustadas, más lentas o más frágiles de lo necesario.

**Reflexión metacognitiva:**
- ¿En qué ejercicio no reconociste la pila o la cola escondida hasta después de intentarlo de otra forma?
- ¿Cómo se conecta el costo real de `.pop(0)` de hoy con el O(n²) escondido de Big-O?
- ¿Qué problema de un proyecto propio (fuera de esta lección) tiene una disciplina de acceso LIFO o FIFO que no habías notado?

**Desafío final inédito — reconocer la estructura antes de codificar:**
```python
class Navegador:
    def __init__(self):
        self.historial = []
    def visitar(self, url):
        self.historial.append(url)
    def atras(self):
        if len(self.historial) <= 1:
            return None
        self.historial.pop()
        return self.historial[-1]

n = Navegador()
n.visitar("inicio.com")
n.visitar("pagina2.com")
n.visitar("pagina3.com")
print(n.atras())
print(n.atras())
```
Antes de ejecutar: ¿por qué el botón "atrás" de un navegador es naturalmente una **pila**, no una cola? Predecir el resultado exacto de las dos llamadas a `atras()` — el botón siempre vuelve a la página más RECIENTE antes de la actual, exactamente la disciplina LIFO.

**Lectura dirigida:** [CS50x — Week 5, Data Structures](https://cs50.harvard.edu/x/weeks/5/) · [Python docs — collections.deque](https://docs.python.org/3/library/collections.html#collections.deque).

**Beyond the Curriculum:** *"Toda cola de mensajes de un sistema real en producción (Kafka, RabbitMQ — lo verás en N9) es la FIFO de hoy, a escala industrial. Y cada árbol de archivos, cada estructura anidada que se recorre 'entrando y saliendo' (lo verás en T5, Recursión) usa una pila por debajo — a veces la tuya, explícita; a veces la del propio lenguaje, la pila de llamadas."*

## 4. Criterio de dominio — siete capacidades

| # | Capacidad | Instrumento en esta lección |
|---|---|---|
| 1 | Explicar | Bloque 6, defensa + pregunta de excelencia |
| 2 | Predecir | Bloque 4, "predecir" (3) |
| 3 | Detectar errores | Bloque 4, "leer código" + Bloque 0, errores deliberados |
| 4 | Corregir | Bloque 4, "depurar" (3, incluido el caso compuesto de `peek()` que muta) |
| 5 | Modificar | Bloque 4, "modificar" (lista→deque) + "refactorizar" (contadores→pila) |
| 6 | Aplicar en contexto nuevo | Bloque 6, desafío final (reconocer la pila del botón "atrás") |
| 7 | Usar en un proyecto | Bloque 5, verificador de paréntesis balanceados |

**Instrumento DOC-02:** RM-03 + TD-01. Evidencia observable: ante un enunciado nuevo, nombra la estructura adecuada antes de codificar y justifica con la disciplina de acceso (evidencia de dominio ya declarada en SYL-N1, textual).

## 4bis. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Clasificación |
|---|---|---|---|---|---|---|
| [CS50x — Week 5, Data Structures](https://cs50.harvard.edu/x/weeks/5/) | Harvard (CS50x) | EN | ~1h | Introductorio | Cubre pilas y colas con las mismas metáforas LIFO/FIFO de esta lección | 🟢 Antes de estudiar |
| [Python docs — collections.deque](https://docs.python.org/3/library/collections.html#collections.deque) | Python Software Foundation | EN | ~15 min | Introductorio | Fuente oficial exacta del problema de rendimiento de `list.pop(0)` | 🔵 Durante la lección |

## Registro de observaciones

| # | Fecha | Observación | Categoría |
|---|---|---|---|
| — | *(pendiente)* | — | — |
