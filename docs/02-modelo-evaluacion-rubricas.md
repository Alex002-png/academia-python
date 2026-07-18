# DOC-02 — Modelo de Evaluación y Rúbricas

## Control del documento (conforme a DOC-00 §15.4)

| Campo | Valor |
|---|---|
| **Document Key** | DOC-02 · Tier T1 |
| **Título** | Modelo de Evaluación y Rúbricas |
| **Versión / Estado** | **1.0.0** · ✅ **Aprobado** por el Director (2026-07-18) |
| **Autoridad de origen** | DOC-00 §17 (17.8.1: rúbricas, banco de ítems, plantillas y procedimientos — sin el umbral, ADR-01) |
| **Depende de** | DOC-00 (§17; 6.4 clases de evidencia; 16.2 F7/F8; catálogo de instrumentos 17.4; integridad 17.7) · DOC-01 (el catálogo canónico de 64 competencias) |
| **Produce / desarrolla** | La instrumentación que los SYL-Nx referencian en sus evaluaciones, que el Tutor aplica (vía DOC-04) y que la auditoría A2 usa como vara |
| **AC aplicables (9.7)** | AC-05 (todo instrumento ejecutable con los medios del estudiante) · AC-08 (evidencia, no acreditación) · AC-12 (una sesión de revisión) · AC-14 (mantenimiento acotado: 8 rúbricas maestras, no 64) |
| **Identificadores que define** | `RM-##` (rúbrica maestra, con versión propia) · `TD/TP/TS/TR-##` (plantillas) — régimen local 12.1.2; citables desde SYL y DOC-04 vía este documento |
| **Historial** | 0.1.0-draft (2026-07-18): redacción conforme al ADR aprobado · **1.0.0 (2026-07-18): aprobado por el Director con 2 ajustes menores (estabilidad de identificadores; estadísticas de cobertura ampliadas) y 3 recomendaciones (ortogonalidad; checklist como mínimo; matriz como fuente única)** |

**Restricciones honradas:** este documento no redefine competencias, no modifica el estándar de dominio, no crea clases de evidencia, no altera el umbral (que vive solo en §17.3.3) y no introduce metodología de enseñanza. Instrumenta; nada más.

---

## 1. Principios de una buena evaluación

*Recopilación de principios ya vigentes en el Blueprint — introducción conceptual, no normas nuevas:*

1. **Evidencia observable** — solo se evalúa lo que puede verse: desempeño, artefacto o producción escrita (6.4; verbos de desempeño 6.1.2).
2. **Reproducibilidad** — dos evaluadores independientes, misma rúbrica, misma evidencia → razonablemente el mismo veredicto (17.7.2).
3. **Objetividad anclada** — se puntúa contra bandas de conducta observable, jamás por impresión global (17.3.1).
4. **Independencia del evaluador** — quien mide no decide (17.2.3); nadie se autovalida (NNR-09).
5. **Trazabilidad** — todo veredicto es reconstruible por sus seis campos (17.2.4).
6. **Transferencia** — toda evaluación sumativa incluye problemas inéditos (NNR-02, PED-07).
7. **El fallo es recuperable** — ausencia temporal de evidencia, nunca juicio permanente (17.2.5).

## 2. El sistema de rúbricas

**Modelo de dos capas** (decisión (a) del ADR): **8 rúbricas maestras** — una por categoría del catálogo 17.4 — definen las bandas ancladas comunes; **criterios específicos por competencia** (columna de la matriz §4 + 2–4 líneas en el instrumento concreto) definen qué debe observarse para esa capacidad. La maestra aporta el rigor común; el criterio, la pertinencia.

**Anclas en tres puntos** (decisión (b)): cada rúbrica maestra ancla su escala 0–10 en conductas observables en tres puntos — **Insuficiente · Nivel de umbral · Sobresaliente** — donde "Nivel de umbral" describe *qué se observa* en un desempeño que alcanza el valor vigente definido en DOC-00 §17.3.3, sin restatar el número (DP-07, ADR-01).

**Versionado de instrumentos** *(ajuste obligatorio 2)*: toda rúbrica maestra y toda plantilla poseen **versión propia** (`RM-03 v1.0`), que se estampa en el campo "rúbrica y su versión" del veredicto trazable (17.2.4). Mejorar una rúbrica incrementa su versión sin perder la trazabilidad de las evaluaciones realizadas con versiones anteriores; no crea gobernanza nueva — las versiones siguen el régimen del documento (15.5).

**Estabilidad de identificadores** *(ajuste del Director)*: los identificadores `RM-##` y `TD/TP/TS/TR-##` son **permanentes y no se reutilizan**; una rúbrica o plantilla retirada conservará su identificador como registro histórico — la misma política append-only de las competencias (DOC-01 §2).

**Ortogonalidad** *(recomendación A)*: las rúbricas maestras son **ortogonales a las competencias** — una misma rúbrica evalúa muchas competencias y una competencia puede usar varias rúbricas. Esa independencia entre "cómo se mide con rigor" (la maestra) y "qué se mide exactamente" (el criterio por competencia) es la que permite mantener 8 rúbricas en lugar de 64.

**Criterio de aceptación:** ninguna rúbrica entra en servicio si no supera la prueba de reproducibilidad (17.7.2); una rúbrica que la auditoría A2 muestre no-reproducible se corrige con nueva versión.

## 3. Las rúbricas maestras (v1.0)

*Formato: propósito · anclas (I = Insuficiente · U = Nivel de umbral · S = Sobresaliente) · casos de uso (generados desde la matriz §4).*

**RM-01 · Quiz formativo — v1.0.** *Propósito:* calibración y retrieval de bajo riesgo (17.5); NO computa para compuertas. *Anclas:* no aplica escala sumativa — corrección binaria por ítem + feedback específico inmediato (PED-09); los fallos alimentan el mazo vivo (20.5). *Casos de uso:* transversal a todo tema; no figura por fila en la matriz.

**RM-02 · Examen escrito — v1.0.** *Propósito:* comprensión conceptual y razonamiento en producción escrita [E]. *Anclas:* **I** — reproduce definiciones sin aplicarlas; confunde conceptos centrales; no responde al problema inédito. **U** — resuelve los problemas inéditos con razonamiento correcto y justificado; errores solo periféricos; explica los porqués, no solo los qués. **S** — además conecta conceptos entre temas, analiza casos límite y argumenta alternativas con criterio. *Casos de uso:* C-N3-04 · C-N4-04 · C-N6-02/03/04 · C-N7-04 · C-N8-04 · C-N9-02/04 · C-N10-03 · C-N11-02/04 · C-N12-01.

**RM-03 · Examen práctico / código — v1.0.** *Propósito:* implementación en vivo o entregada [A][D]. *Anclas:* **I** — el código no resuelve el problema o no puede explicar lo que escribió. **U** — resuelve los problemas inéditos con código funcional y legible, explica sus decisiones línea a línea y corrige errores propios al detectarlos. **S** — además elige estructuras óptimas, maneja casos límite sin pedirlos y el código tiene calidad de revisión profesional. *Casos de uso:* C-N0-01/04 · C-N1-01/02/04/05/07 · C-N2-02/03/06/07 · C-N3-01/02/03 · C-N4-01/06 · C-N5-01 · C-N6-01/03 · C-N9-03 · C-N10-01/03.

**RM-04 · Debugging — v1.0.** *Propósito:* diagnóstico sistemático [D] (D3.3). *Anclas:* **I** — prueba cambios al azar; no formula hipótesis. **U** — formula hipótesis, diseña la prueba mínima que la confirma o refuta, itera hasta la causa raíz y la explica. **S** — además anticipa dónde buscar por la naturaleza del síntoma y deja el diagnóstico documentado de forma reutilizable. *Casos de uso:* C-N0-02 · C-N4-03 · C-N8-03.

**RM-05 · Examen oral / defensa — v1.0.** *Propósito:* explicación, repreguntas, sostener decisiones [D]. *Anclas:* **I** — recita sin comprender; las repreguntas lo desarman; no admite lo que ignora. **U** — explica con sus palabras, sostiene repreguntas inéditas razonando en vivo, y declara con honestidad los límites de lo que sabe (D3.4). **S** — además enseña: hace comprensible lo difícil, conecta con contextos nuevos y evalúa críticamente sus propias decisiones. *Casos de uso:* C-N0-01/05 · C-N1-01/06 · C-N2-05 · C-N3-01/02 · C-N4-01 · C-N5-01/04 · C-N6-01/02 · C-N7-04 · C-N8-02 · C-N9-02 · C-N11-02/05 · C-N12-01/04/06.

**RM-06 · Proyecto — v1.0.** *Propósito:* aplicación integradora con estándar de portafolio [A][E]. *Anclas:* **I** — no funciona, o funciona sin cumplir la checklist de portafolio. **U** — funciona de extremo a extremo, cumple la checklist completa (TP-01) y sus decisiones están documentadas y justificadas. **S** — además resiste el examen de un tercero sin contexto (6.4.3), incluye pruebas de sus propios límites y demuestra criterio de ingeniería más allá de lo pedido. *Nota (recomendación B del Director): la checklist de TP-01 verifica el **estándar profesional mínimo** del entregable; **no sustituye** la evaluación técnica del proyecto, que se realiza contra estas anclas y los criterios de la competencia.* *Casos de uso:* C-N0-03 · C-N1-03 · C-N2-01/04 · C-N4-02/05 · C-N5-02/03 · C-N7-01/02/03/05 · C-N8-01 · C-N9-01 · C-N10-02 · C-N11-01/03 · C-N12-04/05.

**RM-07 · Re-evaluación de retención — v1.0.** *Propósito:* verificación espaciada del dominio [D] (OBJ-02, 17.7.4). *Anclas:* **I** — el dominio no se sostiene: requiere re-estudio completo. **U** — resuelve y explica sin re-estudio, con fluidez razonable tras el intervalo. **S** — retención íntegra con transferencia intacta a contextos nuevos. *Consecuencias conforme a 17.7.6* (refuerza y bloquea como prerequisito; nunca revoca). *Casos de uso:* transversal a todo tema dominado, programada por el SRS; no figura por fila.

**RM-08 · Simulacro de entrevista — v1.0.** *Propósito:* desempeño bajo formato y presión de industria [D] (OBJ-04). *Anclas:* **I** — no completa el formato o no comunica su razonamiento. **U** — completa el proceso comunicando su razonamiento en voz alta, gestiona el tiempo y responde al nivel que el rol exige — en inglés cuando la competencia lo requiere. **S** — desempeño contratable sin reservas: claridad, trade-offs, preguntas inteligentes al entrevistador. *Casos de uso:* C-N12-02/03.

## 4. La matriz canónica de trazabilidad

> *(Ajuste obligatorio 1)* **Esta matriz es la tabla canónica de la evaluación de cada competencia** y la **única fuente autorizada para relacionar competencias e instrumentos** *(recomendación C)*: única referencia de qué evidencia exige, con qué instrumento se obtiene, contra qué rúbrica se mide y con qué plantilla se aplica. Los SYL y DOC-04 la consumen; la auditoría A2 la usa para el trazado; **toda discrepancia futura entre un syllabus y esta matriz se resuelve corrigiendo el syllabus** (NNR-13). Transversales: RM-01 (formativa) y RM-07/TR-01 (retención) aplican a todo tema y no se repiten por fila.

| Competencia | Evidencia | Instrumento(s) (17.4) | Rúbrica(s) | Plantilla |
|---|---|---|---|---|
| C-N0-01 | [A][D] | Práctico + oral de tema | RM-03, RM-05 | TD-01 |
| C-N0-02 | [D] | Debugging | RM-04 | — |
| C-N0-03 | [A] | Proyecto | RM-06 | TP-01 |
| C-N0-04 | [D] | Práctico (lectura técnica EN) | RM-03 | — |
| C-N0-05 | [D] | Oral de tema | RM-05 | TD-01 |
| C-N1-01 | [A][D] | Práctico + oral | RM-03, RM-05 | TD-01 |
| C-N1-02 | [D][A] | Práctico | RM-03 | — |
| C-N1-03 | [A] | Proyecto (repositorio) | RM-06 | TP-01 |
| C-N1-04 | [D][A] | Práctico (terminal) | RM-03 | — |
| C-N1-05 | [A][D] | Práctico | RM-03 | — |
| C-N1-06 | [D] | Oral | RM-05 | TD-01 |
| C-N1-07 | [D] | Práctico (lectura EN) | RM-03 | — |
| C-N2-01 | [A] | Proyecto | RM-06 | TP-01 |
| C-N2-02 | [A] | Práctico (tests+CI) | RM-03 | — |
| C-N2-03 | [A] | Práctico (contenedores) | RM-03 | — |
| C-N2-04 | [A][E] | Proyecto (documentación) | RM-06 | TP-01 |
| C-N2-05 | [D][E] | Oral + escrito | RM-05, RM-02 | TD-01 |
| C-N2-06 | [D] | Práctico (docs EN) | RM-03 | — |
| C-N2-07 | [D][A] | Práctico (DSA) | RM-03 | — |
| C-N3-01 | [A][D] | Práctico + oral | RM-03, RM-05 | — |
| C-N3-02 | [A][D] | Práctico + oral | RM-03, RM-05 | — |
| C-N3-03 | [A][D] | Práctico | RM-03 | — |
| C-N3-04 | [D][E] | Escrito (lectura de paper) | RM-02 | — |
| C-N4-01 | [A][D] | Práctico + oral | RM-03, RM-05 | TD-01 |
| C-N4-02 | [A][E] | Proyecto | RM-06 | TP-01 |
| C-N4-03 | [D][A] | Debugging (de modelos) | RM-04 | — |
| C-N4-04 | [E] | Escrito | RM-02 | — |
| C-N4-05 | [A][E] | Proyecto | RM-06 | TP-01 |
| C-N4-06 | [D] | Práctico (DSA) | RM-03 | — |
| C-N5-01 | [A][D] | Práctico + oral | RM-03, RM-05 | — |
| C-N5-02 | [A][E] | Proyecto | RM-06 | TP-01 |
| C-N5-03 | [A][E] | Proyecto (informe experimental) | RM-06 | TP-01 |
| C-N5-04 | [D] | Oral (doble audiencia) | RM-05 | TD-01 |
| C-N6-01 | [A][D] | Práctico + oral | RM-03, RM-05 | — |
| C-N6-02 | [E][D] | Escrito + oral | RM-02, RM-05 | — |
| C-N6-03 | [D][E] | Práctico + escrito (EN) | RM-03, RM-02 | — |
| C-N6-04 | [E][D] | Escrito | RM-02 | — |
| C-N7-01 | [A] | Proyecto | RM-06 | TP-01 |
| C-N7-02 | [A][E] | Proyecto | RM-06 | TP-01 |
| C-N7-03 | [A][E] | Proyecto | RM-06 | TP-01 |
| C-N7-04 | [E][D] | Escrito (design doc) + defensa | RM-02, RM-05 | TD-01 |
| C-N7-05 | [A][E] | Proyecto (docs EN) | RM-06 | TP-01 |
| C-N8-01 | [A] | Proyecto | RM-06 | TP-01 |
| C-N8-02 | [E][D] | Defensa de arquitectura | RM-05 | TD-01 |
| C-N8-03 | [D][A] | Debugging (de agentes) | RM-04 | — |
| C-N8-04 | [E] | Escrito | RM-02 | — |
| C-N9-01 | [A] | Proyecto | RM-06 | TP-01 |
| C-N9-02 | [E][D] | Escrito + oral | RM-02, RM-05 | — |
| C-N9-03 | [A][E] | Práctico (mediciones) | RM-03 | — |
| C-N9-04 | [E] | Escrito (diagnóstico) | RM-02 | — |
| C-N10-01 | [A][E] | Práctico (mediciones) | RM-03 | — |
| C-N10-02 | [A][E] | Proyecto | RM-06 | TP-01 |
| C-N10-03 | [E][A] | Escrito + práctico | RM-02, RM-03 | — |
| C-N11-01 | [A][E] | Proyecto (reproducción) | RM-06 | TP-01 |
| C-N11-02 | [E][D] | Escrito + oral | RM-02, RM-05 | — |
| C-N11-03 | [A] | Proyecto (contribución OS) | RM-06 | TP-01 |
| C-N11-04 | [A][E] | Escrito (reporte fiel) | RM-02 | — |
| C-N11-05 | [D] | Defensa | RM-05 | TD-01 |
| C-N12-01 | [E][D] | Escrito (design doc) + defensa | RM-02, RM-05 | TD-01 |
| C-N12-02 | [D] | Simulacro (system design) | RM-08 | TS-01 |
| C-N12-03 | [D] | Simulacro completo (EN) | RM-08 | TS-01 |
| C-N12-04 | [A][D][E] | Proyecto + defensa de nivel | RM-06, RM-05 | TP-01, TD-02 |
| C-N12-05 | [A][E] | Proyecto | RM-06 | TP-01 |
| C-N12-06 | [D] | Defensa final integradora | RM-05 | TD-03 |

**Estadísticas de cobertura** *(registro vivo; ajuste obligatorio 2)*:

| Métrica | Valor |
|---|---|
| Competencias instrumentadas | 64/64 (100 %) |
| Rúbricas maestras / plantillas | 8 / 6 |
| Competencias con múltiples instrumentos | 16 |
| Competencias evaluadas mediante defensa (RM-05) | 20 |
| Competencias evaluadas mediante proyecto (RM-06) | 19 |
| Cobertura de evidencia [A] declarada | 40/40 instrumentadas |
| Cobertura de evidencia [D] declarada | 37/37 instrumentadas |
| Cobertura de evidencia [E] declarada | 29/29 instrumentadas |

## 5. Plantillas y reglas del banco de ítems

### 5.1 Plantillas *(recomendación C: identificador y versión propios)*

- **TD-01 · Defensa de tema — v1.0.** Momentos: explicación con propias palabras → repreguntas inéditas → conexiones (¿dónde más aplica?) → declaración de límites. Duración breve; produce veredicto trazable contra RM-05 con los criterios de la competencia evaluada.
- **TD-02 · Defensa de nivel — v1.0.** Sobre el proyecto de nivel: recorrido de decisiones → repreguntas de arquitectura → "¿qué harías distinto?" → verificación de las competencias del nivel aún no cubiertas por otras evidencias. Parte de la compuerta de nivel (17.6).
- **TD-03 · Defensa final integradora — v1.0.** La de 6.6.3: el sistema columna vertebral completo + el recorrido + calibración honesta de lo sabido/inferido/ignorado. Cierra el perfil.
- **TP-01 · Proyecto — v1.0.** Especificación de entrega + **la checklist de portafolio (delegación OBJ-05, saldada aquí):** ☐ repositorio público · ☐ README que un tercero sigue sin ayuda · ☐ instrucciones de instalación/ejecución reproducibles · ☐ pruebas automatizadas significativas · ☐ estructura y estilo profesionales · ☐ documentación de decisiones (qué y por qué) · ☐ desplegado u operable end-to-end cuando la naturaleza lo permita · ☐ (desde ET4) documentación principal en inglés (OBJ-11). Evaluación contra RM-06.
- **TS-01 · Simulacro de entrevista — v1.0.** Formato de industria: coding / system design / conductual según la competencia; en inglés cuando D6.4 lo exige; razonamiento en voz alta obligatorio. Contra RM-08.
- **TR-01 · Re-evaluación de retención — v1.0.** Disparada por el SRS (20.5) o por sorpresa (A2): problema inédito del tema + explicación breve; contra RM-07; consecuencias 17.7.6.

### 5.2 Reglas del banco de ítems *(decisión (d) del ADR: reglas aquí, ítems con los syllabus)*

1. Todo ítem sumativo se direcciona al tema que examina (dirección §13) y declara su competencia(s) objetivo (C-Nx-##).
2. **No-repetición:** un ítem usado en una evaluación sumativa de un estudiante no se le reutiliza; la rotación y generación controlada garantizan inéditos por diseño (NNR-02, 17.7.3).
3. Los ítems concretos se producen y mantienen **junto a cada SYL** (viven con el contenido que examinan); DOC-02 gobierna sus reglas, no su almacén.
4. Los ítems formativos (RM-01) son libres de estas restricciones: la repetición espaciada los reutiliza por diseño (PED-04/05).

## 6. Procedimientos y delegaciones

**Aplicación** (todo por referencia; sin roles nuevos): el Tutor aplica el instrumento conforme a su contrato (§19) y produce el veredicto trazable completo — incluyendo rúbrica **y versión** (17.2.4) — por IF-03; la Plataforma ejecuta la decisión institucional (17.2.3, NNR-07); la auditoría A2 muestrea veredictos contra esta matriz y re-evalúa reproducibilidad (17.7.2).

**Delegaciones:** ítems concretos → SYL-Nx · integración operativa del tutor → DOC-04 · nada más.

**Cierre.** Con DOC-02, la cadena queda instrumentada de extremo a extremo: perfil (§6) → competencias (DOC-01) → instrumentos y rúbricas (este documento) → evidencias (6.4) → umbral (§17.3.3) → graduación (6.6). El siguiente eslabón ya no es arquitectura: es **SYL-N0** — el contenido real.
