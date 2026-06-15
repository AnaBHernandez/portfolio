# 🌿 Red3Conecta — Landing Page para el Tercer Sector

> Infraestructura digital compartida construida con el tercer sector, para el tercer sector. Un proyecto impulsado por Factoría F5 y Fundació Formació i Treball, con el soporte de UNADA.

[![Astro](https://img.shields.io/badge/Astro-v4-purple)](https://astro.build)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

## 🌐 Demo Live
[Ver Red3Conecta en producción → https://red3conecta.netlify.app]

## ✨ Features / Características
- **Sistema i18n Bilingüe:** Selector dinámico de idiomas (ES/CA) integrado en la navegación principal.
- **Accesibilidad Estricta WCAG AA:** Cumplimiento total de estándares de accesibilidad, navegación por teclado y contraste 4.5:1.
- **CSS Puro Nativo:** Prohibido Tailwind/Bootstrap/Sass. Arquitectura basada en variables `:root` globales y transiciones 0.3s.
- **Diseño Mobile-First Estricto:** Grid modular en escritorio que se colapsa de forma fluida en una pila vertical en dispositivos ≤375px.
- **Clean Code & Arquitectura Modular:** Componentes independientes reutilizables con separación estricta de responsabilidades (SRP).

## 🛠️ Tech Stack
- **Framework:** Astro v4 (SPA estático)
- **Lenguaje:** TypeScript 5.x
- **Estilos:** CSS Puro estructurado (Variables `:root`, mobile-first)
- **Internacionalización:** JSON dinámico (ca.json, es.json)

## 🚀 Desarrollo Local

```bash
# Clonar el repositorio
git clone https://github.com/AnaBHernandez/red3conecta-landing.git

# Instalar dependencias
npm install

# Levantar servidor de desarrollo
npm run dev
```

Abre http://localhost:4321 para interactuar con la estructura.

## 📁 Estructura Arquitectónica del Sistema

* `src/components/`: Componentes modulares independientes (Navbar, Footer, Hero, About, Sections).
* `src/i18n/`: Gestión de internacionalización (ca.json, es.json) — Catalán y Español.
* `src/pages/`: Rutas principales y páginas estáticas (index.astro).
* `src/styles/`: Sistema de diseño global (global.css, variables `:root`).

## 📄 Licencia
MIT © Ana Belén Hernández Fernández | Factoría F5 | 2026