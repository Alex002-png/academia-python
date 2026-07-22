# N10.M4.T1b — Documentar decisiones con Architecture Decision Records

*Construido bajo DOC-12 v1.0.0, estándar de excelencia elevado. Investigación pedagógica adenda en `docs/investigacion/n10-m4-juicio-ecosistema.md`.*

**La gran pregunta de este laboratorio:** dentro de 6 meses, cuando ni tú recuerdes por qué elegiste Ollama sobre llama.cpp puro para tu columna vertebral, ¿qué documento te lo va a explicar?

**Entorno objetivo:** terminal local + editor de texto.

**Fluencia de terminal asumida:** completa (M4.T1).

**Prerrequisitos técnicos:** M4.T1 completo; acceso a internet.

**Prerrequisitos conceptuales:** decisiones ya tomadas y justificadas en laboratorios anteriores de N10.

**Duración estimada — desglosada:** contexto (~15 min) + lectura del artículo original de Nygard (~15 min) + auditoría de 2 ADR reales (~20 min) + escribir tu primer ADR (~25 min) + error inducido en vivo (~10 min) + evaluación (~10 min) → **total realista: 80-95 min.**

**Nivel de dificultad:** intermedio — primera práctica de documentación de decisiones técnicas del nivel.

**Fuera de alcance de este laboratorio (y por qué):** herramientas automatizadas de gestión de ADR — el foco es el formato y el hábito, no la tooling.

**Conexión con el laboratorio anterior y el siguiente:** M4.T1 te hizo tomar una decisión real. Este laboratorio te da el formato para que sobreviva a tu memoria. Deja abierta la pregunta que M4.T2 continúa: ya sabes documentar decisiones — ¿cómo generas la evidencia real (un prototipo medido) que un buen ADR necesita citar?

---

## 1. Objetivo

Al terminar vas a poder escribir un ADR siguiendo el formato original de Nygard, auditar ADRs reales de proyectos serios, y explicar el modo de fallo más documentado de esta práctica (obsolescencia silenciosa).

## 2. Contexto

Cada decisión que tomaste en este nivel vive hoy en tu cabeza o dispersa en informes sueltos. Un ADR es el formato que la industria real usa para que esas decisiones sobrevivan más allá de la memoria de quien las tomó.

## 3. Requisitos

- M4.T1 completo.
- Acceso a internet.

☐ **Checkpoint 0 —** tienes al menos una decisión ya tomada y justificada en un laboratorio anterior.

## 4. Explicación conceptual

El formato ADR lo originó Michael Nygard en 2011, con 5 elementos: **Título** (frase nominal corta), **Contexto** (las fuerzas en juego, lenguaje neutral), **Decisión** (voz activa, "Vamos a..."), **Estado** (propuesta/aceptada/obsoleta/reemplazada), **Consecuencias** (efectos positivos, negativos y neutrales).

**Adopción real verificada:** Backstage (Spotify/CNCF) mantiene ADRs públicos con proceso documentado. Cosmos SDK tiene más de 60 ADRs numerados. **Honestidad:** Kubernetes NO usa el formato clásico de ADR — usa KEPs, un formato hermano pero distinto.

**Modo de fallo documentado:** la obsolescencia silenciosa — un ADR estático que pretende ser vivo; cuando el sistema evoluciona sin actualizarlo, no hay alerta.

## 5. Ejecución paso a paso

**Paso 1 — Lee el artículo original de Nygard**

Identifica los 5 elementos exactos y por qué recomienda documentos cortos versionados junto al código.

**Paso 2 — Audita 2 ADR reales**

Revisa un ADR de Backstage y uno de Cosmos SDK — ¿cumplen los 5 elementos? ¿alguno está "superseded"?

**Paso 3 — Escribe tu primer ADR real**

Documenta una decisión YA tomada en este nivel (runtime de M1, quant type de M2) en formato ADR completo.

## 6. Error inducido en vivo

Antes de aceptar de palabra que Kubernetes no usa ADR, verifícalo tú mismo: intenta encontrar una carpeta de ADR en el repositorio de Kubernetes, el mismo patrón que sí existe en Cosmos SDK.

```bash
curl -s -o /dev/null -w "HTTP %{http_code}\n" https://github.com/kubernetes/kubernetes/tree/master/adr
```

Observa el resultado real.

## 7. Comprensión

- ¿Por qué las Consecuencias deben incluir efectos negativos y neutrales, no solo por qué la decisión fue buena?
- En el error inducido en vivo, ¿qué código HTTP obtuviste al buscar una carpeta de ADR en Kubernetes? ¿Qué diferencia real hay entre un ADR y un KEP?
- ¿Qué mecanismo concreto evitaría que tus ADR queden obsoletos en silencio?

## 8. Puntos de verificación

☐ Leí el artículo original y anoté los 5 elementos.
☐ Audité un ADR de Backstage y uno de Cosmos SDK.
☐ Escribí mi primer ADR real.
☐ Reproduje el error inducido en vivo y confirmé que Kubernetes no tiene carpeta de ADR, a diferencia de Cosmos SDK.

## 9. Diagnóstico de errores

*Checklist de categorías revisada: curl (error inducido en vivo) viene preinstalado en todo SO moderno, sin permisos ni configuración especiales, y el código HTTP 404 es independiente de su versión. Única categoría que sí aplica: interferencia de software externo — un proxy corporativo, firewall o límite de tasa de GitHub por IP puede alterar el código HTTP observado, primera causa a descartar si el resultado no coincide con lo esperado.*

| Error | Por qué aparece | Cómo se diagnostica | Cómo se comprueba la hipótesis | Cómo se soluciona | Cómo se previene |
|---|---|---|---|---|---|
| `curl` a `github.com/kubernetes/kubernetes/tree/master/adr` devuelve HTTP 404 (error inducido en vivo) | Kubernetes usa KEPs (Kubernetes Enhancement Proposals), no ADR, en un repositorio separado. | Compara contra el mismo tipo de búsqueda en Cosmos SDK (docs/architecture, que sí existe). | Busca "KEP" en vez de "ADR" en el repositorio de Kubernetes. | Usa Backstage o Cosmos SDK como ejemplos verificados de ADR real. | Verificar con un comando real que un proyecto usa el término y formato exactos antes de citarlo como precedente. |
| Mi ADR no se entiende sin explicación de viva voz | El Contexto asume conocimiento implícito. | Pide a alguien que identifique qué no entendió. | Revisa si el Contexto explica desde cero. | Reescribe asumiendo un lector nuevo. | Escribir el ADR poco después de tomar la decisión. |

## 10. Mini laboratorio

Escribe un segundo ADR sobre una decisión distinta de este nivel.

## 11. Desafío

Encuentra un ADR "superseded" en Backstage o Cosmos SDK, lee ambos, y explica qué cambió.

## 12. Buenas prácticas profesionales

- Escribe el ADR poco después de tomar la decisión.
- Incluye siempre consecuencias negativas y neutrales.
- Guarda tus ADR versionados junto al código.

## 13. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Tag |
|---|---|---|---|---|---|---|
| [Documenting Architecture Decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions) | Michael Nygard | EN | ~15 min | Introductorio | Artículo original del formato. | 🟢 Antes |
| [Architecture Decision Records — Backstage](https://backstage.io/docs/architecture-decisions/) | Backstage | EN | ~15 min | Intermedio | Ejemplo real de adopción. | 🔵 Durante |

## Evaluación

**Lo esencial en una frase:** un ADR es la disciplina de documentación que ya practicas, con un formato reconocible que hace que tu razonamiento sobreviva a tu propia memoria.

**Las siete capacidades de dominio:** explicar (5 elementos del formato) · predecir (si Kubernetes tendría carpeta de ADR, antes de verificarlo) · detectar errores (Kubernetes no tiene carpeta de ADR, HTTP 404 real, error inducido en vivo) · corregir (reescribir el Contexto) · modificar (segundo ADR, mini laboratorio) · aplicar en contexto nuevo (analizar un ADR reemplazado, desafío) · usar en un proyecto (documentar la decisión de stack del capstone).

**Repetir desde cero, sin guía:** escribe un ADR completo sobre una decisión técnica cualquiera.

**Pregunta metacognitiva de proceso:** ¿cuántas decisiones de laboratorios anteriores podrías explicar hoy con la misma claridad que el día que las tomaste?
