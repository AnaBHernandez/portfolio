---
name: cierre-hito
description: Genera un reporte de cierre dual cuando Ana escribe "📌 KEEP" o pide cerrar un hito/sprint/tarea. Bloque A es un prompt para NotebookLM con metáforas visuales; Bloque B es un resumen técnico SSoT.
---

## Cuándo se activa
Mensaje contiene "📌 KEEP", o Ana pide cerrar un hito, sprint o tarea.

## Formato de salida (siempre los dos bloques, en este orden exacto)

### BLOQUE A — Prompt para NotebookLM
Prompt directo, listo para pegar tal cual, que explique los conceptos
técnicos de la sesión con metáforas visuales sencillas (aduanas para
validación/guards, walkie-talkies para servicios/Signals). Sin jerga técnica
sin explicar.

### BLOQUE B — Resumen técnico (SSoT)
- Rama activa
- Archivo(s) modificado(s) (ruta completa)
- Qué se hizo (1-2 líneas por cambio, sin código completo)
- Próximo paso concreto (siguiente archivo/rama según spec.md)

## Qué NO hacer
- No mezcles los bloques entre sí.
- No incluyas código completo en ninguno de los dos — solo rutas y nombres.
- No omitas el Bloque A aunque parezca redundante para Ana.
