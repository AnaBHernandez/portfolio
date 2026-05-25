/**
 * Contrato de datos que define la estructura exacta de un proyecto
 * dentro del portfolio. Permite asegurar la integridad del renderizado.
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  deployUrl?: string;
}

/**
 * Fuente de la verdad inmutable del portfolio.
 * Define los showcases de empleabilidad con métricas orientadas a negocio (TPO).
 */
export const PROJECTS_DATA: Project[] = [
  {
    id: 'despensa-inteligente',
    title: 'Despensa Inteligente',
    description: 'Sistema de automatización de inventario doméstico con enfoque en Privacy by Design. Optimiza el tiempo de comercialización.',
    tags: ['GCP', 'Telegram Bot API', 'Node.js', 'TypeScript'],
    githubUrl: 'https://github.com/AnaBHernandez/despensa-inteligente'
  },
  {
    id: 'arquitectura-medallon-aire',
    title: 'Plataforma Aire-Data',
    description: 'Arquitectura de datos estructurados en tres capas empaquetada en contenedores aislados.',
    tags: ['Docker', 'Python', 'SQL'],
    githubUrl: 'https://github.com/AnaBHernandez/aire-data-platform'
  },
  {
    id: 'validador-xml-tech',
    title: 'Integrador XML Festival Tech 2026',
    description: 'Motor de validación semántica mediante esquemas DTD rígidos para garantizar la coherencia de datos.',
    tags: ['XML', 'DTD', 'Data Validation'],
    githubUrl: 'https://github.com/AnaBHernandez/xml-validator-2026'
  }
];