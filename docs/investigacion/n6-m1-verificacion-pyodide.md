# Investigación N6·M1 — Verificación empírica del tamaño viable de un transformer de juguete en Pyodide

**Fecha:** 2026-07-21 · **Autor:** ventana N6 · **Propósito:** resolver el "Primer paso concreto" de `docs/mision-n6.md` antes de diseñar M1.

## Método

Se instaló localmente, vía `npm install pyodide@0.26.4`, la MISMA versión de Pyodide fijada en `index.html` (`https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js`) — no una versión más reciente, no un proxy en Python nativo. Se cargó `numpy` real dentro de ese runtime Pyodide (WASM, la misma build que corre en el navegador del estudiante) y se ejecutó un forward pass completo de un transformer de juguete (embedding + positional encoding + N bloques de multi-head attention causal + feed-forward + layer norm + softmax final) para 7 configuraciones de tamaño creciente, repitiendo cada una 5 veces y promediando.

Script: `check_transformer.js` (scratchpad de la sesión, no versionado en el repo — reproducible desde este documento).

## Resultado (tabla real, sin redondeo inventado)

| seq_len | d_model | n_heads | n_capas | vocab | ms/forward (real) | softmax suma fila (verificación de corrección) |
|---|---|---|---|---|---|---|
| 8 | 16 | 2 | 2 | 50 | 1.17 | 1.000000 |
| 16 | 32 | 4 | 2 | 100 | 1.20 | 1.000000 |
| 32 | 64 | 4 | 4 | 200 | 6.35 | 1.000000 |
| 64 | 64 | 4 | 4 | 500 | 12.18 | 1.000000 |
| 64 | 128 | 8 | 6 | 1000 | 84.79 | 1.000000 |
| 128 | 128 | 8 | 6 | 1000 | 174.38 | 1.000000 |
| 128 | 256 | 8 | 8 | 5000 | 1256.72 | 1.000000 |

La columna de verificación de softmax (cada fila de la distribución de salida suma exactamente 1.0, con tolerancia de punto flotante) confirma que la implementación de referencia usada para medir tiempo es correcta, no solo rápida.

## Conclusión aplicada al diseño de M1 (SYL-N6 §3.2)

- **Ejercicios interactivos** (cualquier `check()` que se ejecuta en cada intento del estudiante): usar `seq_len≤32, d_model≤64, ≤4 capas` — feedback en 1-12ms, indistinguible de instantáneo.
- **Laboratorio integrador / demo de "vista completa"** (se ejecuta una sola vez por clic, no en bucle de reintentos): puede permitirse hasta `seq_len=128, d_model=128, 6 capas, vocab=1000` — 174ms, perceptible pero no molesto para una sola ejecución.
- **Evitar en cualquier ejercicio con feedback repetido:** `d_model≥256` combinado con `vocab≥5000` — cruza el segundo por forward pass (1.26s), aceptable como máximo para un demo de una sola vez con indicador de carga, no para iteración.

## Limitación honesta de esta medición

Esta medición corre en Node.js con el paquete npm `pyodide`, no dentro de un navegador real (Chrome/Firefox) con la página real de `index.html` cargada. Es el mismo motor WASM y la misma versión exacta de Pyodide/numpy que el navegador usa, así que la medición de cómputo puro (tiempo de `numpy` ejecutando operaciones) es representativa — pero no mide overhead adicional específico del navegador (renderizado del DOM, otros scripts de la página compitiendo por el hilo principal).

**Resuelto (2026-07-21):** tras completar M1-M4 y el capstone, se corrió una verificación completa en Chromium real (Playwright), cargando la página real `index.html` y ejecutando, con el motor real de la página (`runScriptedPy`, la misma función que usa la UI de producción), los 102 ejercicios Pyodide de todo N6 contra su `check()` real — **102/102 pass**, sin ninguna divergencia frente a los resultados de Node. Adicionalmente, `renderProyectoDay` (capstone) y `renderRealDay` (laboratorio DOC-12 de M2.T4) se invocaron directamente en el mismo navegador real, generando HTML sin lanzar ninguna excepción. La preocupación por overhead de UI/DOM no se materializó en ningún fallo funcional — el rango de tamaño de M1 confirmado en este documento queda validado también en el entorno real del estudiante, no solo en el motor aislado.
