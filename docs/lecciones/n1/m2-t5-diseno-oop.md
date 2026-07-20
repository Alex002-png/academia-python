# N1.M2.T5 — Diseño orientado a objetos: cuándo sí y cuándo no

> **Estado:** Desarrollo ✅ · Validación ⏳ Pendiente · Investigación ✅ [`n1-m2-t5-diseno-oop.md`](../../investigacion/n1-m2-t5-diseno-oop.md) — construida bajo DOC-11 v2.0.1 (Estándar de Excelencia Mundial). **Cierra M2 (POO).** Primera lección de la Academia donde los checkers deliberadamente no imponen un paradigma de solución — decisión de diseño documentada en la investigación.
>
> Motor de ejecución: **Pyodide (Python real en el navegador)**.

## Ficha de control

| Campo | Valor |
|---|---|
| **Dirección** | N1.M2.T5 |
| **Gran pregunta del módulo (M2)** | ¿Cómo modelamos el mundo dentro del software? |
| **Gran pregunta de esta lección** | ¿Qué señales de un problema te harían elegir objetos desde el día uno, cuáles te dirían que unas funciones bastan — y qué cuesta equivocarse en cada dirección? |
| **Prerrequisitos** | N1.M2.T1–T4 (todo el módulo) |
| **Competencias** | C-N1-02, C-N1-06 |
| **Duración** | Heurística. Escalera densa (7 categorías) + laboratorio de confrontación (rol Arquitecto) + desafío final. Cierre del largo aliento B-M2. |
| **Conexión con T3 (Composición vs. herencia)** | Generaliza la misma disciplina un nivel más arriba: T3 preguntaba "¿herencia o composición?"; T5 pregunta "¿clase, o ni siquiera eso?" — el mismo tipo de juicio, un paso antes en el proceso de diseño. |

## Bloque 0 — Preparación del Tutor

**Recuperación (T4):** 1) ¿Por qué `print(p1)` sin `__str__` muestra una dirección de memoria? 2) ¿Por qué `p1 == p2` es `False` por defecto, aunque tengan exactamente los mismos datos?

**Diagnóstico relámpago:** *"Si necesitas convertir una temperatura de Celsius a Fahrenheit UNA vez, ¿escribirías una función o una clase? ¿Y si necesitas modelar un termostato que recuerda su temperatura actual y la puede subir o bajar con reglas?"*

**Problema motivador:** *"Tengo tres problemas distintos y quiero decidir, con argumentos reales — no intuición — cuál necesita una clase y cuál solo necesita una función."*

**Errores deliberados a inyectar:**
1. **Clase para todo:** una clase con SOLO `__init__` y un método, instanciada una vez y descartada de inmediato — la señal exacta que Jack Diederich documentó en su charla "Stop Writing Classes" (PyCon 2012).
2. **Ninguna clase jamás:** un programa con cinco listas paralelas y funciones sueltas manejando el mismo estado repetidamente, cuando un objeto claramente lo simplificaría — el error opuesto, subutilización.

## Bloque 1 — Intuición, analogía e historia

**Hook:** *"Hasta ahora aprendiste CÓMO construir clases. Hoy decides CUÁNDO — el criterio que separa a quien programa de quien diseña."*

**Analogía (ficha SYL-N1, verificada como predictiva):** la POO es **una herramienta del cinturón, no el cinturón entero**. Un cinturón de herramientas tiene martillo, destornillador, llave — cada uno para un trabajo específico. Usar un martillo para atornillar "porque ya lo tienes en la mano" no es eficiencia: es el problema equivocado resuelto con la herramienta equivocada. **Prueba de que es predictiva:** un estudiante que recuerde esta imagen predice correctamente que una transformación simple de entrada→salida, usada una sola vez, no necesita el "martillo" de una clase completa.

**Historia (costo real, con evidencia empírica citada en la propia fuente):** en la charla "Stop Writing Classes" (PyCon 2012), Jack Diederich mostró código de producción real donde una API de 20 clases repartidas en 22 módulos se refactorizó a una sola función de 3 líneas, sin perder ninguna funcionalidad. Citó también la biblioteca estándar de Python como evidencia: un espacio de nombres relativamente plano, con muy pocas clases de excepción — prueba de que ni el propio lenguaje, en su implementación de referencia, recurre a clases por defecto para todo.

## Bloque 2 — Conflicto cognitivo

```python
class ConversorTemperatura:
    def __init__(self, celsius):
        self.celsius = celsius
    def a_fahrenheit(self):
        return self.celsius * 9/5 + 32

temp = ConversorTemperatura(20)
print(temp.a_fahrenheit())
```

**Predicción esperada:** ¿esta clase tiene más de un método aparte de `__init__`? ¿Se usa más de una vez, o se crea, se usa una vez, y se descarta?

La sorpresa: la clase tiene **un solo método** aparte de `__init__` — exactamente la señal de Diederich de que "probablemente querías escribir una función":
```python
def celsius_a_fahrenheit(celsius):
    return celsius * 9/5 + 32
```
Mismo resultado (`68.0`), sin la ceremonia de instanciar un objeto para usarlo una vez.

## Bloque 3 — Explicación rigurosa

**La heurística de Diederich (real, verificable, memorable):** *si tu clase tiene dos métodos y uno de ellos es `__init__`, probablemente querías escribir una función.*

**Señales reales de que SÍ conviene una clase:**
1. Hay **estado** que persiste y cambia a lo largo del tiempo (un termostato que recuerda su temperatura).
2. Hay **múltiples métodos** que operan sobre ese mismo estado compartido — no uno solo.
3. Necesitas crear **múltiples instancias** independientes (varios productos, varios usuarios).
4. Hay un **invariante** que proteger (el criterio central de T2).

**Señales de que funciones (+ estructuras simples) bastan:**
1. Una transformación de entrada→salida, sin estado que recordar entre llamadas.
2. Se usa una vez y se descarta.
3. Un diccionario o tupla ya representa los datos con suficiente claridad, sin necesitar métodos propios.

## Bloque 4 — Escalera de práctica

*Nota de densidad (DOC-11 v2.0.1): siete categorías.*

**Predecir:**
1. El conflicto del Bloque 2.
2. Dado un termostato con estado (`temperatura_actual`) y tres métodos (`subir`, `bajar`, `leer`), ¿clase o función?
3. Dado "calcular el área de un círculo dado un radio", ¿clase o función?

**Leer código:** una clase con cinco métodos que operan sobre `self.datos` compartido — identificar las señales de que SÍ merece ser una clase (estado + múltiples métodos que lo transforman).

**Investigar / trazar:** contar cuántas veces se instancia/usa cada uno de dos diseños dados (uno con clase, uno con función) para el MISMO problema — la frecuencia de uso real es evidencia, no solo intuición.

**Modificar:** la clase `ConversorTemperatura` del Bloque 2 (un método, un uso) → convertirla en función.

**Refactorizar:** listas paralelas (nombres, precios, stocks) manejadas por funciones sueltas y repetitivas → una clase `Producto` (el error opuesto de Bloque 0: subutilización, corregido esta vez hacia POO).

**Escribir:** dado "normalizar un email (quitar espacios, minúsculas)" — una transformación pura, sin estado — escribir la FUNCIÓN apropiada, sin usar una clase innecesaria.

**Depurar (tres ejercicios, dificultad creciente):**
1. Clase con un solo método real que debía ser función (Bloque 0, la regla de Diederich).
2. Subutilización: datos paralelos repetidos en vez de una clase (Bloque 0).
3. *(compuesto)* Un programa que MEZCLA ambos errores a la vez: una clase innecesaria en una parte, y datos paralelos donde debía haber una clase en otra.

## Bloque 5 — Laboratorio: mini-proyecto integrador (rol Arquitecto en pequeño)

**Integración real (con T1-T4):** el laboratorio es la evidencia de dominio EXPLÍCITA de la ficha: *"ante tres problemas dados, elige paradigma para cada uno con argumento de coste/beneficio — y defiende la elección ante repreguntas."*

**El proyecto — Tres problemas, tres decisiones:**
1. Convertir una lista de strings a mayúsculas — **función pura**, sin estado.
2. Modelar un carrito de compras que acumula ítems y calcula el total, con `agregar`/`quitar` — **clase**: estado que cambia, múltiples métodos, posibles múltiples instancias.
3. Parsear una línea de texto CSV en sus campos — **función pura**, transformación única de entrada→salida.

Implementar cada uno con el paradigma correcto, y escribir (para la defensa socrática con el tutor, no como código) la justificación de coste/beneficio de cada elección.

**Trade-off explícito y confrontación de soluciones:** integrados en el propio diseño del laboratorio — los tres problemas están elegidos específicamente para que dos merezcan función y uno merezca clase, obligando a justificar cada decisión por separado, no aplicar la misma regla a los tres por costumbre.

**Nota de evaluación (decisión de diseño documentada en la investigación):** los checkers de esta lección validan **solo corrección funcional** — el resultado — no la forma de la solución. Es la primera lección de la Academia donde el corrector deliberadamente no impone un paradigma, coherente con lo que la propia lección enseña: el juicio importa más que la sintaxis.

## Bloque 6 — Consolidación

**Defensa socrática:**
1. ¿Por qué `ConversorTemperatura` del Bloque 2 "debía" ser una función?
2. ¿Cuáles son las señales reales de que SÍ conviene una clase?
3. *(inédita, la pregunta ingenieril de la ficha, textual)* ¿Qué señales de un problema te harían elegir objetos desde el día uno, cuáles te dirían que unas funciones bastan — y qué cuesta equivocarse en cada dirección?

**Seis preguntas de excelencia:**
1. ¿Qué aprendí? Que "¿clase o función?" es una decisión de diseño con señales reales, no una preferencia de estilo.
2. ¿Por qué existe este concepto? Porque tanto la sobre-ingeniería (clase para todo) como la subutilización (ninguna clase jamás) tienen costos reales en un proyecto que crece.
3. ¿Qué problema resuelve? Da un criterio operacional (la regla de Diederich, más las señales de estado/múltiples métodos/múltiples instancias) en vez de una intuición vaga.
4. ¿Cómo lo usan los profesionales? Refactorizan en ambas direcciones — de clases a funciones cuando sobra ceremonia, de funciones a clases cuando falta estructura — según la evidencia del propio código, no por doctrina.
5. ¿Cómo se conecta con lo anterior? Generaliza el criterio "es-un"/"tiene-un" de T3 un paso antes: antes de preguntar CÓMO relacionar clases, hay que preguntar si hace falta una clase.
6. ¿Qué pasaría si no existiera este criterio? Cada proyecto acumularía o exceso de clases ceremoniales, o défict de estructura donde un objeto habría simplificado todo — sin ningún criterio consciente para decidir.

**Reflexión metacognitiva:**
- ¿En qué de los tres problemas del laboratorio dudaste más entre clase y función, y qué te ayudó a decidir?
- ¿Cómo se conecta la regla de Diederich con el criterio "es-un"/"tiene-un" de Composición vs. herencia?
- ¿En qué parte de un proyecto propio (fuera de esta lección) tienes hoy una clase que probablemente debía ser una función, o al revés?

**Desafío final inédito — un problema nuevo, sin patrón previo:** un sistema que recibe lecturas de un sensor y debe alertar si superan un umbral, recordando el historial de las últimas 5 lecturas:
```python
class MonitorSensor:
    def __init__(self, umbral):
        self.umbral = umbral
        self.historial = []
    def registrar(self, lectura):
        self.historial.append(lectura)
        if len(self.historial) > 5:
            self.historial.pop(0)
        return lectura > self.umbral
```
Antes de programar: justificar por qué este problema SÍ merece una clase (aplicando las señales del Bloque 3 — estado que persiste, múltiples métodos posibles, invariante del tamaño del historial). Luego implementar y verificar: `registrar(25)` con umbral 30 debe devolver `False`; `registrar(35)` debe devolver `True`; después de más de 5 lecturas, `historial` debe conservar solo las últimas 5.

**Lectura dirigida:** [PyCon US 2012 — Stop Writing Classes, Jack Diederich](https://us.pycon.org/2012/schedule/presentation/352/) · [grabación en pyvideo.org](https://pyvideo.org/pycon-us-2012/stop-writing-classes.html).

**Beyond the Curriculum:** *"Este mismo criterio — juicio antes que mecanismo — es exactamente lo que vas a necesitar para el capstone de este nivel, y para cualquier decisión de arquitectura real en tu carrera. Ningún framework ni ninguna regla te va a decir automáticamente 'usa una clase aquí' — vas a tener que argumentarlo, igual que hoy."*

## 4. Criterio de dominio — siete capacidades

| # | Capacidad | Instrumento en esta lección |
|---|---|---|
| 1 | Explicar | Bloque 6, defensa + pregunta de excelencia |
| 2 | Predecir | Bloque 4, "predecir" (3) |
| 3 | Detectar errores | Bloque 4, "leer código" + Bloque 0, errores deliberados |
| 4 | Corregir | Bloque 4, "depurar" (3, incluido el caso compuesto de ambos errores mezclados) |
| 5 | Modificar | Bloque 4, "modificar" (clase→función) + "refactorizar" (datos paralelos→clase) |
| 6 | Aplicar en contexto nuevo | Bloque 6, desafío final (problema nuevo, sin patrón previo) |
| 7 | Usar en un proyecto | Bloque 5, tres problemas con tres decisiones justificadas |

**Instrumento DOC-02:** RM-03 + TD-01. Evidencia observable: ante tres problemas dados, elige paradigma para cada uno con argumento de coste/beneficio, y defiende la elección ante repreguntas (evidencia de dominio ya declarada en SYL-N1, textual).

## 4bis. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Clasificación |
|---|---|---|---|---|---|---|
| [PyCon US 2012 — Stop Writing Classes](https://us.pycon.org/2012/schedule/presentation/352/) | Jack Diederich | EN | ~30 min | Intermedio | Fuente real y verificable del error habitual central de la ficha, con ejemplos de código de producción | 🟢 Antes de estudiar |
| [Stop Writing Classes — grabación completa](https://pyvideo.org/pycon-us-2012/stop-writing-classes.html) | Jack Diederich, PyCon | EN | ~30 min | Intermedio | La charla completa, con el ejemplo de la API refactorizada de 20 clases a una función | 🔵 Durante la lección |

## Registro de observaciones

| # | Fecha | Observación | Categoría |
|---|---|---|---|
| — | *(pendiente)* | — | — |
