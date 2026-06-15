# 🧠 El Palacio de la Memoria — Portfolio Profesional

Portfolio profesional interactivo desarrollado con Angular 18 Standalone, estructurado conceptualmente como un palacio mental modular de pensamientos y toma de decisiones lógicas.

[![Angular](https://img.shields.io/badge/Angular-18-red)](https://angular.dev)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

## 🌐 Demo Live
[Ver el Palacio de la Memoria en producción → (Próximamente)]

## ✨ Features / Características
- **Metáfora Conceptual Única:** Interfaz estructurada como una "Casa de Muñecas" técnica o rejilla modular (inspirada en los principios visuales limpios de Stitch).
- **Avatar Manejador de Estado (🧠):** Un emoji interactivo que viaja físicamente por las habitaciones y conductos lógicos del sistema.
- **Estado Global Reactivo:** Implementación nativa de **Angular Signals y Computed** para controlar la posición y el flujo dinámico del avatar.
- **Diseño Mobile-First Estricto:** Grid modular en escritorio que se colapsa de forma fluida en una pila vertical en dispositivos móviles.
- **Clean Code & Arquitectura Limpia:** Separación estricta de responsabilidades (SRP) dividida por bloques funcionales independientes.

## 🛠️ Tech Stack
- **Framework:** Angular 18 (Arquitectura Standalone nativa)
- **Lenguaje:** TypeScript 5.x
- **Estilos:** SCSS moderno estructurado (Fondo técnico oscuro #141218)
- **Gestión de Estado:** Angular Signals

## 🚀 Desarrollo Local

```bash
# Clonar el repositorio
git clone [https://github.com/AnaBHernandez/portfolio.git](https://github.com/AnaBHernandez/portfolio.git)

# Instalar dependencias
npm install

# Levantar servidor de desarrollo
ng serve
```

Abre http://localhost:4200 para interactuar con la estructura.

## 📁 Estructura Arquitectónica del Sistema

* `src/app/core/`: El Cerebro global (Models y servicios de Signals del Estado).
* `src/app/features/`: Departamentos modulares independientes (Hero, About, Projects, Contact).
* `src/app/share/`:Componentes comunes reutilizables y el avatar interactivo.

## 📄 Licencia
MIT © Ana Belén Hernández Hernández | 2026