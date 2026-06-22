# spec.md - Módulo de Navegación entre Salas (Sprint 1)

## 1. Objetivo
Definir routing real (Angular Router) + estado reactivo con Signals para
navegar entre las 5 salas del Palacio, y los 5 componentes standalone que
las representan.

## 2. Ubicación de archivos
- `src/app/app.routes.ts` — definición de rutas
- `src/app/app.html` — solo `<router-outlet>`
- `src/app/core/state/palacio.store.ts` — Signals de estado global
- `src/app/features/hall/hall.component.ts`
- `src/app/features/history/history.component.ts`
- `src/app/features/workshop/workshop.component.ts`
- `src/app/features/library/library.component.ts`
- `src/app/features/mailbox/mailbox.component.ts`

## 3. Routing (provideRouter, lazy loading)
- Rutas planas, sin anidamiento: `/hall`, `/history`, `/workshop`,
  `/library`, `/mailbox`.
- Redirect raíz `''` → `/hall` (`pathMatch: 'full'`).
- Cada ruta carga su componente con `loadComponent: () => import(...)`.
  Nada de `loadChildren` con NgModules — están descartados por arquitectura
  standalone.
- Wildcard `**` → redirect a `/hall` (sin página 404 dedicada en este sprint).

## 4. Estado global: Signal "sala activa"
- `palacio.store.ts` expone una signal `salaActiva: Signal<HabitacionId>`.
- Se deriva del Router (no es una signal `writable` suelta): se sincroniza
  leyendo la ruta activa vía `toSignal(router.events...)` o un resolver de
  ruta, NO se duplica el estado manualmente en cada componente.
- Motivo: la URL es la fuente de verdad (navegación real); la signal es solo
  una proyección de lectura cómoda para el resto de la app (ej. el avatar).

## 5. Computed: posición objetivo del avatar
- `posicionAvatarObjetivo = computed(() => DEPARTAMENTOS[salaActiva()].coordenadas)`
- **Alcance limitado:** esta signal solo expone el punto de destino (x, y) de
  la sala activa, usando `Coordenadas` de `portfolio.models.ts`.
- **Fuera de alcance de este spec:** el lerping del avatar al cursor
  (factor 0.08) y su render en Three.js pertenecen al spec del avatar
  (pendiente, sprint aparte). Aquí solo se publica el dato; quien lo consuma
  decide cómo animarlo.

## 6. Componentes de sala (contrato mínimo común)
Cada componente de sala:
- Standalone, sin `NgModule`.
- Sin inputs obligatorios (el contenido es estático por ahora, viene de
  `DOCUMENTACION_PROYECTO.md`).
- Usa los tokens reales de `DESIGN.md` (sustituye a la paleta de prosa de
  `DOCUMENTACION_PROYECTO.md`): `surface-container-lowest: #0f0e11`,
  `surface: #141317`, `outline-variant: #49454f`, grid estricto de 4px,
  breakpoints Desktop 12 col/16px gutter/32px margen — Tablet 8 col/16px/24px
  — Mobile 4 col/12px/16px, `border-radius: 0` en todo. Geist + JetBrains
  Mono según `DESIGN.md`.

### colorHex por sala (Departamento.colorHex, obligatorio)
| Sala | Acento | colorHex | Origen del token |
|---|---|---|---|
| Avatar | Violeta | `#cfbcff` | primary-container |
| Workshop | Cian | `#00fbfb` | secondary-container |
| Library | Verde | `#66dd8b` | tertiary-container |
| Mailbox | Rubí | `#93000a` | error-container |
| Hall | Gris neutro | `#948f9a` | outline |
| History | Ámbar | `#ffb74d` | custom, no existe en M3 — propuesto y confirmado |
- No copian markup ni lógica de Stitch.

### Contenido por sala (ya validado)
- **History:** CANDELIVERY SL (cita textual de Iván Carlos Barrio incluida)
  + Factoría F5, Gijón (proyecto showcase: Despensa Inteligente).
- **Library:** 4 categorías — Cloud & Automatización, Frontend, Backend, En
  aprendizaje activo (contenido exacto en `DOCUMENTACION_PROYECTO.md`).
- **Workshop:** proyecto "Garantías y Tickets" (Flutter offline-first), con
  enlace a `github.com/AnaBHernandez/garantias-y-tickets-app`.
- **Hall:** punto de entrada / landing, sin contenido textual extenso
  todavía (pendiente de definir en sesión aparte).
- **Mailbox:** ver sección 7.

## 7. Mailbox — formulario funcional gratuito
- **Opción A (recomendada, por defecto):** EmailJS. Cliente puro, sin
  backend, capa gratuita 200 emails/mes. Requiere `serviceId`, `templateId`,
  `publicKey` en `environment.ts` (no hardcodear en el componente).
  Campos del formulario: nombre, email, mensaje → deben mapear 1:1 con las
  variables del template de EmailJS.
- **Opción B (si el hosting final es Netlify):** Netlify Forms, sin
  dependencia externa. Decidir solo cuando se confirme el hosting.
- Validación mínima: campos requeridos + formato email, en el propio
  componente (Reactive Forms o template-driven, a decidir en
  implementación — no bloquea este spec).

## 8. Restricciones
- Prohibido `any`.
- Prohibido lógica/markup copiado de Stitch.
- Prohibido NgModules.
- `Coordenadas` y `Departamento` se consumen tal cual de
  `portfolio.models.ts`, no se redefinen.

## 9. Pendiente / fuera de este sprint
- Spec del avatar Three.js (lóbulos, partículas, modo híbrido, lerp al
  cursor).
- Contenido textual del Hall.
- Credenciales reales de EmailJS (placeholder en environment hasta entonces).
