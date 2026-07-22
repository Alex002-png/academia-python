# Auditoría Integral de N7 — LLM Engineering

**Estado:** completa. 4 auditores independientes (agentes sin coordinación entre sí, ninguno de ellos el que construyó el contenido — mismo método institucional que N1/N2/N3/N6), cada uno con mandato y alcance distinto. Todos los hallazgos reales fueron aplicados o declarados como reserva nombrada antes del Informe Final de Nivel.

**Fecha:** 2026-07-21.

---

## Metodología

Cuatro auditorías en paralelo, cada una con acceso únicamente a los documentos fuente reales (`docs/syllabus/syl-n7.md`, `index.html` array `LEVEL7`, DOC-11, DOC-12, DOC-01, DOC-10, y — en el caso de la auditoría de coherencia y la adversarial — los syllabus reales de niveles hermanos ya existentes: `syl-n6.md`, `syl-n8.md`), no al proceso de construcción ni a las intenciones del autor original:

1. **Auditoría técnica** — coherencia entre lo prometido en el syllabus y lo construido realmente en `index.html`: ids, modalidades, citas cruzadas, estructura.
2. **Auditoría pedagógica DOC-11/DOC-12** — cumplimiento genuino de los estándares de autoría (13 secciones DOC-12, voz de instructor, 5 columnas de diagnóstico, regla de `hints[0]` de DOC-11, encuadre defensivo de M4).
3. **Auditoría de cobertura de competencias** — ¿las 5 competencias C-N7-01…05 están genuinamente cubiertas? ¿hay vacíos o redundancia interna? ¿integra el capstone de verdad?
4. **Auditoría adversarial (Paso 9b)** — mandato explícito de intentar demostrar que N7 no debería existir en su forma actual, contra 6+ ángulos de ataque concretos.

---

## Hallazgos reales y su resolución

### Hallazgo 1 (severo, aplicado) — violación repetida de la regla `hints[0]` de DOC-11

**Encontrado por:** auditoría pedagógica. **Confirmado por barrido automatizado propio** tras la corrección (script sobre los 26 objetos con `hints` de `LEVEL7`).

13 ejercicios distintos, repartidos en 6 objetos de M2 y M3 (`n7m2t1e5`, `n7m2t1be2`, `n7m2t2e2`, `n7m2t2e3`, `n7m2t2r`, `n7m2t3e2`, `n7m2t3e3`, `n7m2t3e4`, y los 5 ejercicios completos de `n7m3t1`), tenían `hints[0]` con código Python literal ejecutable en vez de una pista conceptual/socrática — exactamente el error que la guía maestra del proyecto identifica como el más repetido de toda la historia de la Academia (encontrado en N1, N2 y N3 consecutivamente, entre 79-92% de ~285 ejercicios en la peor instancia).

**Resolución aplicada:** los 13 `hints[0]` fueron reescritos como pistas conceptuales (explican el razonamiento o el patrón a reconocer, nunca una línea de código), desplazando el hint de código original a la posición 1 o 2. Verificado con un script de barrido automatizado sobre los 26 objetos con `hints` en `LEVEL7` — 0 violaciones restantes tras la corrección.

### Hallazgo 2 (moderado, aplicado) — omisión de "repetir desde cero sin guía" en `n7m4t6`

**Encontrado por:** auditoría pedagógica.

DOC-12 §2.13 exige la repetición completa del procedimiento sin guía como instrumento propio y obligatorio, y DOC-12 §2/§4 declaran explícitamente que las 13 secciones son "[U] universal... sin excepciones" — a diferencia de DOC-11, no existe categoría condicional que justifique omitirla. El campo `evalu.repetir` de `n7m4t6` (cierre de N7) delegaba este instrumento a la compuerta formal ("la repetición real es defender el design doc oralmente ante tu tutor"), en vez de proveerlo dentro del propio laboratorio.

**Resolución aplicada:** se reescribió `evalu.repetir` de `n7m4t6` con un instrumento real dentro del laboratorio (reconstruir de memoria, sin ver el design doc ni esta guía, los cinco elementos obligatorios de la sección Cross-cutting concerns y su evidencia citable, después comparar contra el documento real).

### Hallazgo 3 (moderado, aplicado) — C-N7-05 (inglés) declarada en el syllabus pero no verificable en el contenido real

**Encontrado por:** auditoría de cobertura de competencias.

`syl-n7.md` §6.2 afirmaba que C-N7-05 "se verifica como propiedad del artefacto final (el design doc y el repositorio en inglés)" — pero un grep exhaustivo de todo `LEVEL7` (incluido el checklist y los hitos del capstone) no arrojaba ninguna mención de "inglés"/"English" como requisito verificable.

**Resolución aplicada:** se añadió un ítem explícito al `checklist` del capstone (`n7et4.evalu.checklist`) y una frase explícita en la `descripcion` del hito 5, exigiendo que el design doc y el README principal del repositorio se escriban en inglés profesional.

### Hallazgo 4 (menor, aplicado) — conteo de "M2: 17 días/laboratorios" no coincide con el contenido real ni con el propio total declarado

**Encontrado por:** auditoría técnica, confirmado independientemente por la auditoría adversarial (convergencia).

El historial de `syl-n7.md` declaraba "M2 (17 días/laboratorios...)" mientras el contenido real de `index.html` tiene 10 objetos de nivel superior en M2, y la suma real por módulo (7+10+7+6=30) coincide con el total de 30 ya declarado en la misma entrada — "17" era un número no verificado, inconsistente con la propia aritmética del documento.

**Resolución aplicada:** corregido a "10" en las dos apariciones (`syl-n7.md` §Historial y §7.2 H-N8-01); tabla resumen (§1) actualizada con las cifras reales por módulo, reemplazando la heurística de días orientativa del Paso 1 por el conteo real verificado post-construcción.

### Hallazgo 5 (menor, aplicado) — ficha de N7.M1.T2 (§5) no anticipaba el laboratorio real de gestión de historial

**Encontrado por:** auditoría técnica.

`index.html` construyó dos laboratorios completos bajo T2 (`n7m1t2` streaming, `n7m1t2b` gestión de historial/memoria conversacional), pero la ficha pedagógica de T2 en el syllabus §5 solo describía streaming — la gestión de historial solo aparecía indirectamente como un "error habitual" dentro de la ficha de T4.

**Resolución aplicada:** ficha de N7.M1.T2 reescrita en `syl-n7.md` §5 para describir explícitamente ambos laboratorios (streaming + memoria conversacional), con la corrección declarada como ajuste de alcance frente al diseño original, no como un olvido oculto.

### Hallazgo 6 (real, declarado como reserva nombrada, no aplicado) — reconciliación de horas contra DOC-10 (~400h) nunca se hizo

**Encontrado por:** auditoría adversarial. La ficha de misión de N7 pidió explícitamente esta verificación ("cifra de DOC-10, no auditada — verifica contra tu propio diseño real") y nunca se ejecutó hasta esta auditoría.

**Resolución:** se realizó la reconciliación real (`syl-n7.md` §6.5) — suma de los campos `duracionTotal` reales de los 23 laboratorios DOC-12 (~38h) más una estimación de los 7 días Pyodide (~8-9h), más el capstone (~75h a la dedicación pactada del proyecto) más bibliografía citada (~15-20h) ≈ **~140h identificadas explícitamente**, notablemente por debajo de las ~400h de DOC-10 incluso sumando los componentes no capturados por `duracionTotal` (iteración/depuración real, cola de GPU variable). **Declarado como reserva nombrada** para decisión explícita del Director — no se infla artificialmente el contenido para cuadrar una cifra, ni se descarta la cifra de DOC-10 unilateralmente.

### Hallazgo 7 (real, declarado como reserva nombrada, no aplicado) — prompt engineering como disciplina propia, subrepresentado

**Encontrado por:** convergencia independiente de la auditoría de cobertura de competencias y la auditoría adversarial — misma señal, dos auditores sin coordinación.

M1 se llama "Inferencia y **prompting**" (DOC-10 §8) pero los 7 laboratorios reales son, en su mayoría, mecánica de API (contrato, streaming, historial, tool calling, structured output, costes) — sin ejercicios dedicados a técnicas de prompting (few-shot, chain-of-thought, iteración sistemática) como práctica evaluada; el curso DL.AI que las cubre queda relegado a recurso opcional 🔵.

**Resolución:** declarado como reserva nombrada (`syl-n7.md` §6.6.1), no corregido en esta pasada — no es una violación de DOC-01 (ninguna competencia lo exige explícitamente), pero es un vacío real frente a la práctica profesional. Pendiente de decisión del Director: ampliar M1 con un laboratorio dedicado, o aceptar como alcance ya cerrado.

### Hallazgo 8 (real, declarado como reserva nombrada, no aplicado) — M1.T1 no explora un proveedor sin tarjeta de crédito

**Encontrado por:** auditoría adversarial.

La decisión de "key propia desde el día 1" está bien justificada pedagógicamente, pero el laboratorio nunca considera una alternativa (Google AI Studio, Groq, OpenRouter) que reduciría la exclusión de estudiantes sin método de pago, sin sacrificar el principio de credenciales reales.

**Resolución:** declarado como reserva nombrada (`syl-n7.md` §6.6.2), con recomendación concreta para una futura revisión de M1.T1.

### Hallazgo 9 (real, cross-nivel, no resoluble desde N7) — redundancia de tool calling entre N7.M1.T3 y N8.M1.T2

**Encontrado por:** el propio Paso 9a de este documento (`syl-n7.md` §7.2, H-N8-05), confirmado independientemente por la auditoría de cobertura de competencias y la adversarial (triple convergencia).

N7.M1.T3 ya cubre tool calling round-trip completo; N8.M1.T2 lo reintroduce como mecanismo fresco sin citar a N7 como precedente, y la propia herencia entrante de N8 (§3.1) no lo menciona entre lo heredado.

**Resolución:** no corregible unilateralmente desde N7 (no hay autoridad sobre el contenido de N8, guía maestra §12). Documentado explícitamente en `syl-n7.md` §7.2 como recomendación para arbitraje del Director entre ventanas paralelas.

### Hallazgo 10 (real, cross-nivel, informativo) — el marco "AI Systems Platform / 7 capas" de N8 no está corroborado por N6 ni por DOC-10

**Encontrado por:** el propio Paso 9a de este documento (`syl-n7.md` §7.3.1), por lectura directa de `syl-n6.md` y `syl-n8.md` completos.

N8 afirma que N6 "siembra" una arquitectura de 7 capas que no aparece en ningún lugar del documento real de N6, ni en DOC-10 (cuyo lenguaje canónico es "columna vertebral" V1/V2/local/final), ni en DOC-09 (que no existe todavía como documento). Funcionalmente no bloquea a N7 — lo que N8 llama "capa de Memoria"/"capa de Evaluación" corresponde 1:1 a M2/M4 de N7 real — pero es una discrepancia de nomenclatura entre documentos hermanos.

**Resolución:** documentado como hallazgo informativo para el Director, sin corrección unilateral desde N7 (no tiene autoridad sobre N8, y la discrepancia real está en cómo N8 describe su propia herencia, no en el contenido de N7).

---

## Sin hallazgos verificados en:

- Estructura de las 13 secciones DOC-12 y voz de instructor (9 objetos `modalidad:"real"` revisados en detalle por la auditoría pedagógica).
- Diagnóstico de errores con 5 columnas (causa/diagnóstico/comprobación de hipótesis/solución/prevención), presentes en todas las entradas revisadas.
- Error inducido en vivo — presente y genuino en todos los laboratorios DOC-12 muestreados.
- Encuadre defensivo de M4 — consistente y reforzado en los 5 laboratorios de riesgo/guardrails revisados.
- Densidad/profundidad — ningún objeto muestreado se sintió relleno o superficial.
- Cobertura de C-N7-01…04 — sólida en las 4, con evidencia citada específica por la auditoría de cobertura.
- Redundancia interna dentro de N7 (los 4 módulos cubren capas distintas, sin solape).
- Dependencias M1→M2→M4 reales (verificadas por citas cruzadas genuinas, no solo declaradas); M3 correctamente documentado como dependencia narrativa, no dura.
- Integración real del capstone (los 5 hitos exigen reutilización de piezas anteriores, verificado en el propio texto — no se puede completar como cuatro entregas sueltas).
- Matemática de los ítems 2 y 3 del banco de examen — recalculada independientemente por la auditoría técnica, correcta en las 6 variantes.
- Frontera N6↔N7↔N8 — limpia en ambos extremos, verificada contra los documentos reales de los tres niveles.
- Secuencia M1→M2→M3→M4 y la decisión de M3 "aplicado o descartado conscientemente" en el capstone — ambas resisten el ataque adversarial con evidencia real.

## Conclusión del comité

La **ejecución real** del contenido de N7, verificada directamente en `index.html`, es de calidad genuinamente alta tras las correcciones aplicadas — DOC-12 aplicado con rigor, `hints[0]` corregido en su totalidad, error inducido en vivo real en cada laboratorio, valores de `check()` verificados por ejecución real. El diseño estructural resiste el ataque adversarial en sus decisiones centrales (secuencia de módulos, frontera con niveles hermanos, la salida dual de M3 en el capstone).

**N7 no es candidato a v1.0.0 sin reservas** — quedan 3 reservas nombradas y acotadas (§6.5-6.6 de `syl-n7.md`): reconciliación de horas sin resolver contra DOC-10, prompt engineering subrepresentado, y falta de alternativa sin tarjeta en M1.T1 — ninguna bloquea que un estudiante complete N7 preparado para N8, y las tres requieren decisión explícita del Director, no silencio. Mismo patrón que SYL-N3 usó en su propio Paso 9b antes de que el Director resolviera sus reservas explícitamente.
