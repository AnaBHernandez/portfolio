
# 🏛️ DOCUMENTACIÓN MAESTRA: PALACIO DE LA MEMORIA (SPRINT 1)

## 🎨 1. Concepto Visual (Technical Dollhouse)
El sistema visual hereda directamente las reglas del prototipo de Stitch (`code.html`):
- **Void (Fondo):** `#0f0d13` (General) y `#141218` (Contenedores de habitaciones).
- **Walls (Bordes):** 1px sólido usando `#494551` (`border-outline-variant`).
- **Glow (Foco):** Violeta brillante `#cfbcff` (`primary`) con un difuminado de `box-shadow: 0 0 20px rgba(207, 188, 255, 0.15)`.
- **Tipografía Cruzada:** **Geist** para bloques de lectura e historias; **JetBrains Mono** para trazas de datos y títulos de control.
- **Física del Avatar:** Icono modular `account_tree` con halo violeta. Sigue al cursor mediante interpolación lineal (*lerping*) a un factor de `0.08` para simular peso visual.
- **Telemetría:** Panel de control de texto dinámico que lee e imprime la posición exacta en píxeles (`COORD_X.Y`).

---

## 🏗️ 2. Arquitectura del Software (Angular 21 Academia)
- **Standalone Puro:** Cada componente se gestiona sin archivos `NgModule` pesados; son independientes y autosuficientes.
- **Angular Signals:** Gestión de estado mediante Walkie-Talkies reactivos. Un canal privado de escritura (`writable`) almacena la habitación activa y un canal de lectura automática (`computed`) propaga las coordenadas del avatar al instante.
- **Rutas e Interfaces:** Vistas raíz limpias (`app.html` solo con `<router-outlet>`) y carga perezosa (*Lazy Loading*) mediante exportaciones nombradas.

---

## 📅 3. Planificación del Sprint 1 (15 Junio - 21 Junio 2026)
- **Asignado a:** Ana Belén (`AnaBHernandez`)

---

## 📝 Contenido Real — Pendiente de Implementar en Datos

### SEC_02 // HISTORY
[FECHAS] — CANDELIVERY SL (Cloud and Delivery)
Automatización de procesos con GCP Composer, BigQuery y Cloud Storage.
Desarrollo y mantenimiento de proyectos WordPress. Apoyo en preparación
y presentación de licitaciones técnicas.
"Activo valioso del equipo, caracterizada por capacidad técnica y
curiosidad intelectual constante" — Iván Carlos Barrio, Administrador

2026 (actual) — Factoría F5, Gijón
Formación intensiva Full Stack: Java 21, Spring Boot, Angular,
metodología SDD. Proyecto showcase: Despensa Inteligente.

### SEC_04 // LIBRARY
CLOUD & AUTOMATIZACIÓN (experiencia profesional real)
GCP Composer, BigQuery, Cloud Storage, GitHub Actions, Linux

FRONTEND (en construcción activa)
Angular, Astro, TypeScript

BACKEND
Java 21, Spring Boot, PostgreSQL, Docker

EN APRENDIZAJE ACTIVO
DOM avanzado, Tipado estricto TypeScript

---

## 🗂️ Flujo de Trabajo — Qué Ventana Usar

| Ventana | Cuándo la usas | Para qué |
|---|---|---|
| **Claude Code** (terminal) | Vas a escribir o editar código de verdad | Único con acceso real al disco, hooks que bloquean sin `spec.md`, y el que ejecuta |
| **Proyecto Portfolio** (claude.ai) | Vas a decidir UX, contenido o estrategia — sin tocar archivos | Planificación pura, memoria separada del resto de proyectos |
| **Gemini Gem** | Quieres que alguien audite o ataque una decisión antes de darla por buena | Solo propone y detecta riesgos — nunca decide producto |
| **Dev Central** (claude.ai) | Dudas que no son solo de Portfolio | Hub técnico del resto del ecosistema (Despensa Inteligente, js-kamakura-food...) |

**Regla simple:** ¿vas a tocar un archivo? → Claude Code. ¿Vas a decidir algo antes de tocarlo? → Proyecto Portfolio. ¿Quieres que alguien dude de tu decisión antes de ejecutarla? → Gemini.
