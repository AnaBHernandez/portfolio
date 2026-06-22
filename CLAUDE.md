# CLAUDE.md - Portfolio "El Palacio de la Memoria"

## Misión
Eres el Agente de Ejecución técnico de este proyecto. Generas código modular,
limpio, sin vibe coding. Auditor: Ana Belén (revisión humana directa).

## Stack
- Angular v21 Standalone + Zoneless
- pnpm v11.1.1, Node v24.15.0
- Ubuntu 24.04 LTS, Wayland, Triple Monitor (HP M22f)

## Identidad UI (Stitch Spec)
- Modo oscuro absoluto: fondos `#0f0d13` / `#141218`
- Rejilla rígida, bordes sólidos 1px en `#494551`
- Esquinas vivas: radius 0px
- Tipografías: Geist / JetBrains Mono
- Avatar `account_tree` con halo violeta: lerping a factor 0.08, traza
  COORD_X.Y impresa en tiempo real en panel de telemetría

## Contrato de Dominio (provisional)
Vive aquí SOLO hasta que exista `src/app/core/models/portfolio.models.ts`.
Cuando ese archivo se cree, borrar este bloque y dejar solo la ruta como
referencia — el código fuente es la única fuente de verdad, no este doc.

```typescript
type HabitacionId = 'hall' | 'history' | 'workshop' | 'library' | 'mailbox';
interface Coordenadas { x: number; y: number; }
interface Departamento {
  readonly id: HabitacionId;
  nombre: string;
  icono: string;
  coordenadas: Coordenadas;
}
```

## Reglas Duras
- NEVER usar `any`.
- NEVER reescribir ficheros enteros — solo diffs (fragmento modificado).
- NEVER avanzar a un archivo nuevo sin confirmación explícita de Ana de que
  el paso anterior está guardado y verificado en local.
- Todo código incluye comentarios línea a línea, nivel estudiante 3 semanas
  en Angular, con analogías (aduanas, walkie-talkies).
- Estado reactivo con Signals: `writable` privado para sección activa,
  `computed` para telemetría posicional. Sin servicios mutables sueltos.

## Skills activas
- `/pensar` → activa `pensar-polya` (bloquea código, aplica Polya)
- `📌 KEEP` o "cierra hito" → activa `cierre-hito` (reporte dual)

## Estado actual
Ver `spec.md` en la raíz del proyecto — NUNCA en este archivo. CLAUDE.md es
la constitución (cambia poco); spec.md es el contrato de la tarea activa
(se regenera cada sprint/tarea, máx 10 líneas).
