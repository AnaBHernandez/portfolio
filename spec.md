# SPEC - CAPA DE DATOS (FASE 1)
- OBJETIVO: Modelar contratos de datos e inyectar mocks reactivos para el MVP.
- INTERFACES: Project (id, title, description, tags, githubUrl, deployUrl?).
- FUENTE: Constant PROJECTS_DATA en src/assets/data/portfolio.data.ts.
- SERVICIOS: ProjectService (Signal readonly) en core/services/project.service.ts.
- REGLAS: Prohibido usar 'any'. Arquitectura Standalone estricta.