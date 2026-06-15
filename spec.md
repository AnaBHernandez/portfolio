# spec.md - El Palacio de la Memoria v1

1. Objetivo: Crear la estructura modular de la "Casa de Muñecas" en Angular 18 Standalone llamada "El Palacio de la Memoria".
2. Enfoque: Diseño Mobile-First que se apila en una torre vertical impecable en teléfonos móviles.
3. Layout Escritorio: CSS Grid minimalista basado exactamente en la cuadrícula limpia de Stitch.
4. Secciones: Hero (Fachada), About (Historial), Projects (Taller) y Contact (Buzón).
5. Estado Global: Usar Angular Signals para almacenar y actualizar la habitación activa de la casa.
6. Avatar Móvil: Un emoji de cerebro (🧠) o bombilla (💡) controlado por el estado activo.
7. Animación: El emoji se desplaza visualmente dejando un rastro sutil de coordenadas CSS (COORD_X.Y).
8. Estilos: Modo oscuro estricto con fondo (#141218) y fuentes monoespaciadas técnicas (JetBrains Mono).
9. Calidad: Arquitectura limpia (features/), tipado estricto sin usar jamás 'any' y comentarios línea a línea.
10. Verificación: Flujo local preparado en local antes de realizar commits atómicos con formato convencional.