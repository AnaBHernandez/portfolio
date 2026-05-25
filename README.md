# Portfolio Profesional - Ecosistema Ana 🚀

Showcase de Empleabilidad y SPA modular de alto rendimiento construida sobre el ecosistema nativo de **Angular 21**, diseñada para proyectar mi perfil técnico como ingeniera frontend y Technical Product Owner.

Este proyecto ha sido desarrollado bajo los estándares más estrictos de arquitectura limpia, modularidad y optimización de recursos en entornos UNIX (Ubuntu 24.04 LTS).

---

## 🛠️ Stack Tecnológico e Infraestructura

| Tecnología | Componente / Rol | Estado en el Proyecto |
| :--- | :--- | :--- |
| **Angular 21** | Framework de Aplicación | Arquitectura Standalone y Reactividad Nativa |
| **pnpm v11** | Gestor de Dependencias | Almacén Direccionable (Optimizado para 8GB RAM) |
| **SCSS Avanzado** | Preprocesador de Estilos | Diseño Adaptativo Fl fluido mediante función `clamp()` |
| **Server-Side Rendering** | Arquitectura de Renderizado | SSR Activo para Optimización SEO e Indexación Rápida |

---

## 🏗️ Pilares de Arquitectura y Rendimiento

1. **Diseño UI Fluido y Atómico:** Erradicación de media queries redundantes mediante el uso de tipografía y espaciados calculados dinámicamente en el navegador con la función `clamp()` de CSS, asegurando una experiencia responsiva pura.

2. **Modularidad en Tres Capas (src/app/):** Estructuración estricta del código fuente para garantizar la escalabilidad:
   - `core/`: Contratos de datos (interfaces), servicios globales de estado y guardianes.
   - `features/`: Componentes de página y flujos lógicos independientes (Home, Proyectos, Skills).
   - `shared/`: Componentes de interfaz de usuario 100% reutilizables y desacoplados.

3. **Optimización de Carga Remota:** Configuración nativa de renderizado en el servidor (SSR) para mitigar los tiempos de carga iniciales (FCP) y garantizar que los motores de búsqueda rastreen el contenido del portfolio de forma inmediata.

4. **Gobiernos Spec-First:** Despliegue de desarrollo conducido por especificaciones técnicas rigurosas y bitácoras de arquitectura inmutables (`PRODUCT_LOG.md`).

---

## 💻 Instalación y Despliegue Local

Siga estas instrucciones en su terminal UNIX para inicializar el entorno de desarrollo:

### 1. Clonar el Repositorio

```bash
git clone [https://github.com/AnaBHernandez/portfolio.git](https://github.com/AnaBHernandez/portfolio.git)
cd portfolio
```
### 2. Instalar Dependencias de Forma Segura

Este proyecto bloquea el uso de npm tradicional para mitigar vulnerabilidades. Es obligatorio utilizar `pnpm`:

```bash
pnpm install
```

### 3. Levantar Servidor de Desarrollo

Arranca la aplicación localmente con el motor de renderizado y el servidor de desarrollo activos:

```bash
pnpm dev
```
Abra http://localhost:4200 en su navegador para visualizar la SPA.

---

**Autora:** [AnaBHernandez](https://github.com/AnaBHernandez) | **Última actualización:** Mayo 2026
