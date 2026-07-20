# Investigación Pedagógica de N1.M2.T2 — Atributos, métodos y estado

*Investigación + revisión crítica integradas. Construida bajo DOC-11 v2.0.1.*

## 1–2. Fuentes y evidencia

**MIT 6.0001 Lecture 9 (misma lección de T1) trata getters y setters como MÉTODOS explícitos**, sin usar decoradores: `def get_wheels(self): return self.wheels` es literalmente el ejemplo correcto de su material de clase. Es un getter simple, una función que devuelve un atributo de instancia — el mismo nivel exacto que esta lección necesita. *(Fuente: [MIT OCW, Lecture 9 — Getters and Setters](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/in-class-questions-and-video-solutions/lecture-9/getters-and-setters/).)*

**Hallazgo real que exige una decisión explícita:** CS50P (Week 8, la misma semana de T1) va más allá de los getters/setters como métodos y enseña `@property`/`@x.setter` — propiedades con decorador — como la forma "pythónica" de proteger un atributo. Esto entra en conflicto directo con la Herencia Declarada H-01 de SYL-N1, que excluye **todos** los decoradores de N1 deliberadamente y los reserva para N2.M1.T1 (el mismo hallazgo institucional que ya obligó a corregir N1.M1.T1 — ver EVT-030). *(Fuente: [CS50P — Week 8, Object-Oriented Programming](https://cs50.harvard.edu/python/weeks/8/).)*

## 3. Síntesis crítica

**Decisión:** esta lección enseña protección de estado con **métodos explícitos** (el enfoque de MIT), no con `@property` (el enfoque de CS50P) — una elección deliberada y documentada, no una laguna. La ficha de SYL-N1 ya lo pedía sin nombrarlo: "el objeto como máquina con panel de mandos — el estado dentro, los botones (métodos) definen qué transformaciones son legales" describe exactamente getters/setters como métodos, no como sintaxis de atributo con decorador.

**Autocrítica — ¿se pierde algo real al no usar `@property`?** Sí, un poco: con métodos explícitos, `cuenta.get_saldo()` no se ve tan "natural" como `cuenta.saldo` con una property protegida por detrás. Pero el COSTO de introducir un decorador antes de tiempo (romper H-01, repetir el error de EVT-030) es mucho mayor que ese costo estético — y MIT, una institución de referencia real, enseña la disciplina de invariantes exactamente así, sin decoradores, en el mismo punto del temario. **No es una simplificación de esta Academia: es el enfoque real de una de las dos instituciones citadas.**

**El mecanismo real que sí se enseña, sin decoradores:** el guion bajo inicial (`self._saldo`) como **convención** — una señal para quien lee el código de que ese atributo no debería tocarse directo desde afuera, reforzada por el hecho de que la única forma de cambiarlo con seguridad son los métodos de la clase (`depositar`, `retirar`), que validan antes de mutar. Python no impide técnicamente el acceso directo — la disciplina es del diseño, no del lenguaje, un matiz honesto que vale la pena nombrar explícitamente.

**Clasificación:** evidencia sólida para el enfoque elegido (MIT, misma lección, mismo nivel). Conflicto real detectado y resuelto por precedente institucional ya establecido (H-01, EVT-030) — no requiere nueva consulta al Director, aplica la resolución "el SYL-N1 manda" ya dada. **Falsabilidad:** se reconsideraría introducir `@property` aquí solo si SYL-N1 mismo se revisara para adelantar decoradores — algo que el Director ya declaró que no hará salvo evidencia objetiva real (EVT-023).

## Estado
✅ Completa con revisión crítica. 1 hallazgo real (CS50P usa @property, en conflicto con H-01) resuelto por precedente institucional ya establecido, sin bloquear la construcción. No bloquea T3.
