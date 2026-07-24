# Informe Final de Nivel — N3 (pasada SCA v1.0)

*Rama: `nivel/n3-scav1`. Nivel: matemáticas para machine learning (álgebra lineal, cálculo/optimización, probabilidad y estadística, lectura matemática). 68 días. Auditoría por subagente lector con re-derivación independiente de toda la matemática + verificación empírica del motor.*

## 1. Veredicto

**La matemática de N3 es excepcionalmente limpia: cero cálculos incorrectos** en ~200 ejercicios, todas las `mcq`, los `theory` y los ejemplos trabajados (el auditor recomputó determinantes, productos de matrices, autovalores, Cramer, Bayes, covarianzas, gradientes, MSE, etc.). La disciplina de coma flotante es ejemplar (igualdad exacta solo en enteros; tolerancia en floats). El único problema serio NO era de matemática, sino **estructural: dos retos eran imposibles de completar** por el límite de pasos del motor.

## 2. Correcciones P0 aplicadas

**Crítico — dos retos INCOMPLETABLES (confirmado empíricamente replicando el tracer del motor `__academia_run`, `max_steps=300000` eventos de línea):**

1. **`n3m3t1r` (simulador de Monte Carlo).** El bucle sobre `[1000, 10000, 100000]` = 111 000 iteraciones × ~5 eventos ≈ 600 000 → **aborta en el paso 300 001** con un falso "bucle infinito", imprimiendo solo 2 de 3 líneas. La solución de referencia del propio reto no podía pasar. **Fix:** tamaños `[1000, 5000, 20000]` (140 754 pasos, cabe con margen); sigue demostrando la convergencia hacia el valor de Bayes; nuevo esperado `0.1818 / 0.1544 / 0.159`, verificado.
2. **`n3m3t6r` (descenso de gradiente del EDA de módulo).** `pasos=20000` con sumas por generador ≈ 540 000 eventos → **aborta sin imprimir nada**. numpy NO ayuda (`np.mean`/`.mean()` pasan por el código Python de `numpy._methods`, también trazado). **Fix:** precalcular las cuatro sumas fijas (`Sx, Sy, Sxx, Sxy`) y expandir el gradiente algebraicamente → cada paso es O(1) (100 157 pasos totales, cabe). La trayectoria es matemáticamente idéntica, así que reproduce **exactamente** `m=2.834, b=4.7739, error=37.61` → los ejercicios dependientes que hardcodean esos valores (`n3m3t6e10`, `n3m3t6x`) siguen válidos. Bonus pedagógico: es un truco real de optimización (no recomputar la suma en cada paso).

**Error de enunciado — `n3m1t3e10`.** El título/descripción decían "la cadena invertida da OTRO resultado / confirma que es distinto", pero el código imprime `True` (coinciden, porque `rot90² = −I` conmuta con la escala) y el `hint` ya lo admitía. Corregido el enunciado al caso especial real (más interesante y coherente con el `retoFinal` que le sigue).

Verificado contra el tracer real replicado: ambos retos caben (<300 000) y dan la salida correcta; `node --check` OK.

## 3. Riesgos documentados (no bloqueantes)

- **Fragilidad de `np.linalg.eig` (sign/order) — `n3m1t7r`, `n3m1t7e10`.** Los autovectores/autovalores de LAPACK no tienen signo ni orden garantizados; estos checks comparan la salida cruda por string y pasan solo porque están fijados contra la build actual de Pyodide (0.26.4). *Recomendación:* normalizar el signo del autovector u ordenar los autovalores antes de imprimir, para robustez ante futuras builds.
- **Dependencia de la build para `LinAlgError`.** El nivel maneja CORRECTAMENTE el caveat de WASM (inv de matriz singular devuelve `nan` sin lanzar excepción; `n3m1t5` lo enseña y prohíbe `try/except`). ~5 ítems dependen de ese comportamiento build-específico; re-verificar tras cualquier bump de Pyodide.

## 4. Huecos de cobertura de nivel mundial (para expansión futura)

La cobertura ya es amplia (rango, base/span, transformaciones, determinante, inversa/Cramer, producto punto/proyección, autovalores, cambio de base, mini-PCA vía covarianza, derivadas numéricas, regla de la cadena/producto, gradiente, descenso de gradiente + patologías de LR, Taylor, regresión como optimización, espacio muestral/condicional, Bayes con casos médicos/forenses/falacia del fiscal, Bernoulli/binomial/**normal**, **TCL**, 68/95/99.7, E/Var/Cov + matriz de covarianza, muestreo/EE, intervalos de confianza + simulación de cobertura, prueba de hipótesis por permutación/p-valor/comparaciones múltiples, EDA, y notación incl. sigmoide y log-verosimilitud). Los huecos genuinos, priorizados:

1. **SVD (descomposición en valores singulares) — ausente.** El mayor hueco; canónico en Deisenroth (Cap. 4) y base moderna de PCA/rango bajo/pseudoinversa. Solo se enseña eigendescomposición de matrices simétricas.
2. **Coeficiente de correlación de Pearson — ausente** (diferido explícitamente). Barato y de alto valor sobre el código de covarianza ya existente.
3. **MLE (máxima verosimilitud) como principio — fino.** La log-verosimilitud se *computa* como notación, pero "estimar parámetros maximizando la verosimilitud" (el motor detrás de las pérdidas de regresión/logística) nunca se enseña como principio.
4. **Hessiano y convexidad / optimización de 2.º orden — ausente.** La 2.ª derivada aparece solo en Taylor 1-D; falta la matriz de segundas parciales y por qué converge el descenso de gradiente.
5. **Espacio nulo + teorema rango-nulidad — fino.** El rango se cubre a fondo; el espacio nulo aparece en un solo ejercicio.
6. **Bases ortonormales / Gram-Schmidt / QR — ausente.**
7. **Ecuaciones normales (mínimos cuadrados cerrado, `(XᵀX)⁻¹Xᵀy`) — ausente.** Ataría M1 (inversa) con M2 (optimización).

## 5. Veredicto de avance

**Con las dos correcciones de completabilidad, N3 deja de tener retos que su propia solución no puede pasar — su único defecto real contra el estándar "mundial top".** La base matemática es de las más sólidas de toda la Academia. Los huecos (SVD, correlación, MLE, Hessiano) quedan documentados como las adiciones de mayor impacto. **Procede el avance.**
