# N10.M1.T4b — Convertir un modelo de Hugging Face a GGUF

*Construido bajo DOC-12 v1.0.0, estándar de excelencia elevado. Investigación pedagógica adenda en `docs/investigacion/n10-m1-runtimes-locales.md`.*

**La gran pregunta de este laboratorio:** cada modelo que descargaste con Ollama ya llegó como GGUF — pero ¿de dónde sale ese archivo, y qué pasa si el modelo que necesitas no existe todavía en ese formato?

**Entorno objetivo:** terminal local, Python con dependencias del script de conversión.

**Fluencia de terminal asumida:** completa (M1.T4).

**Prerrequisitos técnicos:** M1.T4 completo; Python con numpy/sentencepiece/transformers.

**Prerrequisitos conceptuales:** M1.T4 (metadata GGUF y sus herramientas de inspección).

**Duración estimada — desglosada:** contexto (~15 min) + preparar script oficial (~15 min) + convertir un modelo real (~30 min) + verificar con herramientas de M1.T4 (~15 min) + error inducido en vivo (~15 min) + mini laboratorio, desafío y evaluación (~20 min) → **total realista: 95-115 min.**

**Nivel de dificultad:** intermedio-avanzado — primera conversión real de formato de modelo del nivel.

**Fuera de alcance de este laboratorio (y por qué):** entrenar o fine-tunear un modelo — este laboratorio parte de pesos ya entrenados, nunca entrena nada nuevo.

**Conexión con el laboratorio anterior y el siguiente:** M1.T4 dio las herramientas de inspección de metadata. Este laboratorio produce el archivo que esas herramientas inspeccionan, cerrando la expansión de M1 completo. Deja abierta la pregunta que M2 resuelve: ya sabes producir un GGUF propio — ¿cómo reduces su tamaño de forma deliberada y medida?

---

## 1. Objetivo

Al terminar vas a poder convertir un modelo real de Hugging Face a GGUF usando el script oficial de llama.cpp, verificar la conversión con las herramientas de M1.T4, y diagnosticar las causas reales de fallo de conversión.

## 2. Contexto

Cada modelo que descargaste con Ollama ya venía convertido a GGUF — alguien más hizo ese trabajo antes de que tú lo descargaras. El ecosistema de Hugging Face publica modelos nuevos constantemente, que tardan días o semanas en tener versión GGUF disponible. Saber convertir tú mismo separa a quien depende completamente del trabajo de otros de quien puede usar cualquier modelo compatible el mismo día que se publica.

## 3. Requisitos

- M1.T4 completo.
- Dependencias del script de conversión (numpy, sentencepiece, transformers).
- Espacio en disco para un modelo pequeño en formato original más su versión convertida.

☐ **Checkpoint 0 —** tienes el repositorio de llama.cpp clonado desde M1.T3.

## 4. Explicación conceptual

El script real y activo, verificado en el repositorio de llama.cpp, es `convert_hf_to_gguf.py`. **Qué hace conceptualmente:** lee pesos safetensors de Hugging Face, mapea la arquitectura (declarada en `config.json`) al esquema GGUF mediante un registro de arquitecturas conocidas, y opcionalmente cuantiza durante la conversión (f16, bf16, Q8_0, y formatos más agresivos). Tiene un modo remoto que lee solo configuración y tokenizador sin descargar pesos completos.

**Limitaciones reales, no hipotéticas** (confirmadas en issues activos): el script falla con `KeyError: 'architectures'` si el `config.json` no declara ese campo; arquitecturas no reconocidas (ej. T5ForConditionalGeneration, caso real documentado) producen error explícito, no conversión silenciosamente incorrecta; modelos muy recientes a veces requieren una versión más nueva de `transformers`.

## 5. Ejecución paso a paso

**Paso 1 — Prepara el entorno**

```
cd llama.cpp
pip install -r requirements.txt
```

**Paso 2 — Descarga un modelo pequeño en formato Hugging Face original (NO GGUF)**

```
huggingface-cli download <usuario>/<modelo-pequeno> --local-dir ./modelo-original
```

**Paso 3 — Convierte a GGUF**

```
python convert_hf_to_gguf.py ./modelo-original --outfile ./modelo-convertido.gguf --outtype f16
```

**Paso 4 — Verifica la conversión con las herramientas de M1.T4**

```
gguf-dump ./modelo-convertido.gguf
```

## 6. Error inducido en vivo

```
python convert_hf_to_gguf.py ./modelo-no-soportado --outfile ./intento.gguf
```

Intenta convertir un modelo de una arquitectura poco común o reciente. Observa el error real y específico.

## 7. Comprensión

- ¿Por qué el script necesita el campo `architectures` específicamente, sin poder "adivinar" a partir de los pesos?
- ¿Qué relación de dependencia crea el hecho de que el script use `transformers` para reconocer arquitecturas?
- ¿Por qué convertir con `--outtype f16` en vez de cuantizar directamente a Q4 en este mismo paso?

## 8. Puntos de verificación

☐ Instalé las dependencias del script de conversión.
☐ Descargué un modelo real en formato Hugging Face original.
☐ Convertí el modelo a GGUF sin errores.
☐ Verifiqué la conversión con gguf-dump.
☐ Reproduje el error de arquitectura no soportada.

## 9. Diagnóstico de errores

*Checklist de categorías revisada: dos categorías son la causa raíz de este laboratorio — diferencias de versión (una versión desactualizada de transformers no reconoce la arquitectura nueva, causa directa del error en vivo) y configuración ausente o incorrecta (un config.json incompleto sin el campo "architectures" produce el KeyError). PATH, permisos, SO, estado previo e interferencia externa no aplican — el script es Python puro y cada intento de conversión es independiente.*

| Error | Por qué aparece | Cómo se diagnostica | Cómo se comprueba la hipótesis | Cómo se soluciona | Cómo se previene |
|---|---|---|---|---|---|
| `KeyError: 'architectures'` | El config.json no declara ese campo. | Abre el config.json y confirma si falta. | Compara contra un config.json de un modelo que sí convierte bien. | Si falta genuinamente, es problema del modelo publicado, no tuyo. | Verificar config.json antes de convertir. |
| Arquitectura no soportada (error en vivo) | El script mantiene un registro de arquitecturas conocidas; una nueva no está todavía. | El mensaje nombra explícitamente la arquitectura. | Busca issues mencionando esa arquitectura exacta. | Si no hay soporte, no es convertible todavía — límite real del ecosistema. | Verificar soporte antes de invertir tiempo. |

## 10. Mini laboratorio

Convierte el mismo modelo dos veces con `--outtype` distintos (f16 y bf16) y compara tamaños con gguf-dump.

## 11. Desafío

Encuentra un modelo real sin versión GGUF publicada por la comunidad y conviértelo tú mismo de principio a fin, documentando cada paso.

## 12. Buenas prácticas profesionales

- Verifica siempre la metadata de una conversión antes de asumir que salió bien.
- Revisa el config.json antes de intentar convertir.
- Mantén `transformers` razonablemente actualizado si conviertes modelos recientes.

## 13. Recursos recomendados

| Recurso | Autor/canal | Idioma | Duración | Nivel | Motivo | Tag |
|---|---|---|---|---|---|---|
| [convert_hf_to_gguf.py — código fuente](https://github.com/ggml-org/llama.cpp/blob/master/convert_hf_to_gguf.py) | ggml-org | EN | ~20 min | Avanzado | El script real usado en este laboratorio. | 🟢 Antes |
| [GGUF — Hugging Face Hub docs](https://huggingface.co/docs/hub/en/gguf) | Hugging Face | EN | ~15 min | Intermedio | Perspectiva complementaria del formato de destino. | 🔵 Durante |

## Evaluación

**Lo esencial en una frase:** convertir a GGUF no es magia reservada a quien publica versiones ya convertidas — es un script real con limitaciones documentadas que cualquiera puede ejecutar.

**Las siete capacidades de dominio:** explicar (qué hace el script conceptualmente) · predecir (qué modelos son más probables de fallar) · detectar errores (KeyError vs. arquitectura no soportada) · corregir (diagnosticar causa raíz antes de actuar) · modificar (convertir con distintos outtype, mini laboratorio) · aplicar en contexto nuevo (convertir un modelo sin GGUF previo, desafío) · usar en un proyecto (acceso a cualquier modelo del ecosistema HF para la columna vertebral).

**Repetir desde cero, sin guía:** convierte un modelo pequeño distinto, verificando metadata al final.

**Pregunta metacognitiva de proceso:** ¿cómo cambió tu sensación de dependencia del trabajo de terceros en este ecosistema?
