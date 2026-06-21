// ──────────────────────────────────────────────────────────────
// portfolio.models.ts
// Contratos de dominio del "Palacio de la Memoria".
// Aquí solo TIPOS — sin lógica, sin dependencias externas.
// Piénsalo como el plano arquitectónico del edificio:
// define qué habitaciones existen y cómo son, pero no las construye.
// ──────────────────────────────────────────────────────────────

// HabitacionId: unión discriminada de literales de string.
// TypeScript la trata como un "sello oficial" — solo acepta
// exactamente estos cinco valores, nada más.
// Si intentas pasar 'kitchen', el compilador te frena en seco.
export type HabitacionId =
  | 'hall'      // Entrada principal / bienvenida
  | 'history'   // Línea de tiempo / experiencia
  | 'workshop'  // Proyectos en activo
  | 'library'   // Publicaciones y recursos
  | 'mailbox';  // Contacto

// Coordenadas: posición 2D de una habitación en el mapa.
// Ambas propiedades son readonly: una vez creado el objeto,
// nadie puede mutar x ni y desde fuera — como coordenadas GPS selladas.
// Esto es crítico para que Angular Signals detecte cambios
// por referencia (nuevo objeto) y no por mutación silenciosa.
export interface Coordenadas {
  readonly x: number; // Posición horizontal (eje X del grid)
  readonly y: number; // Posición vertical   (eje Y del grid)
}

// Departamento: describe una habitación completa del Palacio.
// Cada propiedad es readonly — el contrato es inmutable.
// Piénsalo como el carnet de identidad de cada sala:
// puedes leerlo, pero no puedes modificarlo una vez emitido.
export interface Departamento {
  readonly id: HabitacionId; // Identificador único — discrimina la sala (tipo HabitacionId de arriba)
  readonly nombre: string;   // Nombre legible para mostrar en la UI
  readonly icono: string;    // Nombre del icono Material Symbols (ej. 'home', 'history')
  readonly coordenadas: Coordenadas; // Posición en el grid del mapa (ver interfaz Coordenadas)
  readonly colorHex: string; // Color de acento de la sala — formato '#rrggbb', obligatorio para las 5 salas
}
