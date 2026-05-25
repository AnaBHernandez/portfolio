# PRODUCT LOG - PORTFOLIO PROFESIONAL

## FASE 0: INFRAESTRUCTURA Y GIT FLOW
- **Problema:** Riesgo de corrupción en producción por pushes accidentales.
- **MVP:** Rama `main` protegida en GitHub. Historial de desarrollo aislado en `develop`.
- **QA-IA:** Verificada exclusión de `node_modules` y flujos de emergencia (`git stash`).

## FASE 1: CAPA DE DATOS (CORE)
- **Problema:** Necesidad de desacoplar la lógica visual de los componentes de la fuente de la verdad para cumplir las directrices de la guía de Factoría F5.
- **MVP:** Modelado estricto de la interfaz `Project` y centralización de showcases mediante `Signals` reactivas de Angular 21.
- **QA-IA:** Datos simulados estructurados con métricas orientadas a negocio (TPO).