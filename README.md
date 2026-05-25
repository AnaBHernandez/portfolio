# 🚀 Portfolio Profesional - Ecosistema Ana

Este es mi proyecto de portfolio profesional desarrollado como Showcase de Empleabilidad. Está diseñado bajo una arquitectura limpia y modular utilizando las tecnologías más modernas del ecosistema frontend.

## 🛠️ Stack Tecnológico
- **Framework:** Angular 21 (Arquitectura Standalone y reactividad nativa con Signals)
- **Gestor de Paquetes:** `pnpm v11` (Optimizado para entornos con restricciones de hardware/8GB RAM)
- **Estilos:** SCSS con Diseño Adaptativo (Variables globales y tipografía fluida con la función `clamp()`)
- **Rendimiento:** Server-Side Rendering (SSR) activo para optimización SEO e indexación rápida

## 📁 Estructura del Proyecto (src/app/)
- `core/`: Contratos de datos (interfaces), servicios globales de estado y guardianes de ruta.
- `features/`: Módulos y componentes de página (Home, Proyectos, Skills).
- `shared/`: Componentes reutilizables de UI (Botones, Tarjetas, Navegación).

## 💻 Desarrollo Local

Para clonar y arrancar este proyecto en tu entorno local bajo Ubuntu, ejecuta los siguientes comandos en tu terminal:

```bash
# 1. Instalar las dependencias de forma ultra-ligera sin saturar la RAM
pnpm install

# 2. Levantar el servidor de desarrollo local con SSR activo
pnpm dev

---

**Autora:** [AnaBHernandez](https://github.com/AnaBHernandez) | **Última actualización:** Mayo 2026