# Investigación Pedagógica de N2.M5 — Entregar sin Miedo

*Construida bajo DOC-12 (modalidad `real`, EVT-045), cierre del arco completo de N2. Investigación verificada con WebFetch real.*

## T1 · Empaquetar: Docker

**Fuente oficial verificada (`docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/`, fetch directo):** cita textual — *"simply an isolated process with all of the files it needs to run"* — coincide de fuente primaria, sin adaptación, con el modelo mental ya diseñado en SYL-N2 M5.T1 ("un proceso con su propio sistema de archivos", frase que N1.M5 ya dejó comprensible).

## T2 · El pipeline completo: CD

**Reutilización directa (DP-07):** extiende el mecanismo de GitHub Actions ya verificado en `docs/investigacion/n2-m4-calidad.md` (Laboratorio 33) con `needs:` — sin fuente nueva, es la misma sintaxis oficial aplicada a un job adicional.

## T3 · Desplegar sin detener

**Sin fuente externa nueva:** el patrón de sustitución gradual (dos versiones coexistiendo, tráfico movido incrementalmente) es demostrable directamente por experimento con dos contenedores Docker locales — no requiere infraestructura de nube real ni cita de autoridad externa para su primer contacto pedagógico.

## T4 · Migrar sin romper (Momento Fundacional de M5)

**Fuente oficial verificada (`martinfowler.com/bliki/ParallelChange.html`, fetch directo, autor reconocido en la industria del software):** confirma el patrón **Parallel Change** (expandir-contraer) con sus tres fases textuales — *"augment the interface to support both the old and the new versions"* (expandir), migración gradual de clientes, y *"remove the old version... once all usages have transitioned"* (contraer). Fuente autoritativa y ampliamente citada en la industria real, no una convención inventada por esta Academia.

## T5 · El ciclo completo (rollback / fix forward)

**Fuente oficial verificada (`docs.python.org/3/howto/logging.html`, fetch directo):** confirma el uso básico de `logging.basicConfig`/`getLogger` y la escala de niveles (DEBUG/INFO/WARNING/ERROR/CRITICAL) con su descripción textual exacta — la base técnica del logging mínimo implementado en este tema.

## Clasificación y falsabilidad

**Evidencia sólida:** las tres citas técnicas (Docker, Martin Fowler/Parallel Change, Python logging) verificadas por fetch directo a fuente primaria u oficial. **Ausencia declarada:** no se buscó un proveedor de nube real (AWS/GCP/Azure) para T3 — el despliegue gradual se enseña con dos contenedores locales, deliberadamente, para no depender de una cuenta de nube real ni de costos variables (consistente con AC-15, autonomía del funcionamiento esencial de la Academia). **Falsabilidad:** si en un nivel futuro (N9, sistemas distribuidos) se introduce un proveedor de nube real, este tema debería revisarse para ofrecer también la opción de practicar el mismo patrón contra infraestructura real, no solo local.
