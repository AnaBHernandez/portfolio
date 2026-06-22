---
name: Technical Dollhouse
colors:
  surface: '#141317'
  surface-dim: '#141317'
  surface-bright: '#3a383d'
  surface-container-lowest: '#0f0e11'
  surface-container-low: '#1c1b1f'
  surface-container: '#211f23'
  surface-container-high: '#2b292d'
  surface-container-highest: '#363438'
  on-surface: '#e6e1e7'
  on-surface-variant: '#cac4d0'
  inverse-surface: '#e6e1e7'
  inverse-on-surface: '#323034'
  outline: '#948f9a'
  outline-variant: '#49454f'
  surface-tint: '#cfbcff'
  primary: '#e8ddff'
  on-primary: '#36265e'
  primary-container: '#cfbcff'
  on-primary-container: '#594983'
  inverse-primary: '#655590'
  secondary: '#ffffff'
  on-secondary: '#003737'
  secondary-container: '#00fbfb'
  on-secondary-container: '#007070'
  tertiary: '#83faa4'
  on-tertiary: '#003919'
  tertiary-container: '#66dd8b'
  on-tertiary-container: '#005f2e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#cfbcff'
  on-primary-fixed: '#210f48'
  on-primary-fixed-variant: '#4d3d76'
  secondary-fixed: '#00fbfb'
  secondary-fixed-dim: '#00dddd'
  on-secondary-fixed: '#002020'
  on-secondary-fixed-variant: '#004f4f'
  tertiary-fixed: '#83fba5'
  tertiary-fixed-dim: '#66dd8b'
  on-tertiary-fixed: '#00210c'
  on-tertiary-fixed-variant: '#005227'
  background: '#141317'
  on-background: '#e6e1e7'
  surface-variant: '#363438'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '600'
    lineHeight: '1.4'
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.08em
  data-num:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.0'
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  container-max: 1440px
---

## Identidad de Marca y Estilo
Este sistema de diseño es un marco arquitectónico riguroso, desarrollado para un enfoque profundo y la recuperación estructurada de información. Adopta una estética **Brutalista Técnica**, enfatizando la integridad estructural cruda sobre la suavidad decorativa. El público objetivo está compuesto por usuarios avanzados, investigadores y arquitectos técnicos que valoran la precisión y la organización espacial.

La respuesta emocional es de "complejidad ordenada": la interfaz de usuario se siente como una terminal de alta gama o un plano arquitectónico. La jerarquía visual se establece a través del trabajo de líneas, la alineación estricta y los "brillos" de acento vibrantes, en lugar de los marcadores de profundidad tradicionales. Cada elemento es intencional, nítido y digital sin concesiones.

## Colores
La estrategia de color utiliza una base profunda "negro tinta" para maximizar el contraste con los acentos técnicos. La capa base es `#0f0e11`, mientras que los módulos anidados utilizan `#141317` para definir las "habitaciones" del palacio.

La integridad estructural se mantiene a través de un color de borde consistente `#49454f`, que actúa como el marco esquelético del sistema. Las zonas funcionales se identifican mediante colores de acento de alta cromaticidad:
- **Hall:** Gris estructural neutro.
- **Workshop:** Cian técnico para la creación activa.
- **Library:** Verde esmeralda para el conocimiento asentado.
- **History:** Ámbar para la calidez del archivo histórico.
- **Mailbox:** Rubí para comunicación urgente.
- **Avatar:** Violeta para la identidad personal y los indicadores de estado del usuario.

Todos los elementos interactivos deben usar estos acentos como destellos luminosos (propiedades `box-shadow` con gran dispersión y baja opacidad) en lugar de rellenos sólidos siempre que sea posible.

## Tipografía
El sistema de tipografía sigue una lógica de doble vía: **Geist** maneja la interfaz humana (lectura, navegación y títulos), mientras que **JetBrains Mono** maneja la interfaz de la máquina (metadatos, etiquetas técnicas y estado del sistema).

Las etiquetas siempre deben configurarse en mayúsculas (`UPPERCASE`) cuando se use JetBrains Mono para reforzar la estética de "etiqueta técnica". Las pantallas de alto nivel utilizan Geist con un interletraje (*tracking*) ajustado para transmitir una sensación moderna y arquitectónica. Para dispositivos móviles, `display-lg` se reduce a 32px, mientras que todos los roles de tipo `label` permanecen constantes para preservar la legibilidad en vistas de datos densas.

> ⚠️ **Restricción de uso:** JetBrains Mono se utilizará exclusivamente para microetiquetas y valores numéricos cortos. Nunca para texto de lectura continua. Tamaño mínimo: 13px (`label-md`).

## Distribución y Espaciado (Layout & Spacing)
La distribución está gobernada por un **sistema estricto de rejilla de 4px** y un grid fluido de 12 columnas. Los componentes se "encajan" en la rejilla como habitaciones en un plano de planta.

- **Escritorio (Desktop):** 12 columnas, canales (*gutters*) de 16px, márgenes exteriores de 32px.
- **Tableta (Tablet):** 8 columnas, canales de 16px, márgenes exteriores de 24px.
- **Móvil (Mobile):** 4 columnas, canales de 12px, márgenes exteriores de 16px.

El espaciado entre grupos funcionales debe ser generoso (32px o más) para evitar que los componentes de bordes afilados se sientan abarrotados. Los bordes son los separadores primarios; úsalos en lugar del espacio en blanco para definir la estructura de "El Palacio de la Memoria".

## Elevación y Profundidad
En este sistema de diseño, no existe un eje Z simulado por luces y sombras tradicionales. La profundidad se logra mediante **Capas Tonales** y **Luminiscencia**.

- **Superficie 0:** `#0f0e11` (El vacío / fondo).
- **Superficie 1:** `#141317` (La habitación activa / contenedor).
- **Bordes:** Todos los contenedores deben tener un borde de `1px solid #49454f`.
- **Interacciones:** En lugar de sombras, los elementos enfocados o sobre los que se pasa el cursor (*hover*) emiten un "brillo" codificado por colores mediante `box-shadow: 0 0 15px [color_de_acento]40`.
- **Modales:** Las superposiciones no utilizan efectos de desenfoque (*blur*); utilizan un fondo de pantalla (*backdrop*) sólido `#0f0e11` al 80% de opacidad para mantener la sensación brutalista de alto contraste.

## Formas (Shapes)
El lenguaje de las formas es estrictamente **Rectilíneo**. Todos los radios de borde (*border-radius*) se establecen en `0px`. Esto refuerza la naturaleza arquitectónica y técnica del sistema.

Los botones, los campos de entrada de texto y los contenedores grandes deben mantener esquinas vivas de 90 grados. El interés visual se genera a través de la intersección de líneas y el uso de esquinas con muescas (*notched corners* mediante clip-paths) para elementos de llamada a la acción específicos si se requiere una distinción adicional.

## Componentes

### Botones
- **Primario:** Fondo sólido `#49454f`, esquinas vivas, etiqueta en JetBrains Mono de color blanco. Al pasar el cursor (*hover*), el borde cambia al color de acento de la sección con un brillo sutil.
- **Ghost (Fantasma):** Sin fondo, borde de `1px`. Etiqueta de alto contraste.

### Chips y Etiquetas (Tags)
- Cajas pequeñas de bordes afilados que utilizan JetBrains Mono.
- Los fondos son transparentes con un borde de `1px` que coincide con el acento de la sección (por ejemplo, borde cian para las etiquetas de Workshop).

### Campos de Entrada (Input Fields)
- Fondo sólido `#0f0e11` con un borde `#49454f`.
- Al recibir el foco, el borde cambia al color de acento primario (`#cfbcff`) y el cursor de texto imita el cursor de bloque de una terminal.

### Tarjetas y Contenedores (Cards & Containers)
- Los contenedores deben definir claramente las "habitaciones". Cada contenedor tiene un borde de `1px`.
- Encabezados de tarjetas separados por una línea horizontal, con el título en la parte superior izquierda y los metadatos (JetBrains Mono) en la parte superior derecha.

### Listas
- Separadas por líneas horizontales de `1px`.
- Los estados de *hover* deben resaltar la fila completa con un cambio muy sutil a `#1a1820` y una línea vertical de "indicador" de color de acento (de 2px de ancho) en el extremo izquierdo.

### Indicadores de Estado
- Cuadrados pequeños (no círculos) que utilizan los valores de mapeo de color para indicar la salud del sistema o la categoría.