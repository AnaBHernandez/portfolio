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

## Brand & Style
The design system is a rigorous, architectural framework designed for deep focus and structured information retrieval. It adopts a **Technical Brutalist** aesthetic, emphasizing raw structural integrity over decorative softness. The target audience consists of power users, researchers, and technical architects who value precision and spatial organization.

The emotional response is one of "ordered complexity"—the UI feels like a high-end terminal or an architectural blueprint. Visual hierarchy is established through line work, strict alignment, and vibrant accent "glows" rather than traditional depth markers. Every element is intentional, sharp, and uncompromisingly digital.

## Colors
The color strategy utilizes a deep, "ink-black" foundation to maximize contrast with technical accents. The base layer is `#0f0d13`, while nested modules use `#141218` to define the "rooms" of the palace.

Structural integrity is maintained through a consistent `#494551` border color, acting as the skeletal frame. Functional zones are identified by high-chroma accent colors:
- **Hall:** Neutral structural grey.
- **Workshop:** Technical Cyan for active creation.
- **Library:** Emerald Green for grounded knowledge.
- **History:** Amber for archival warmth.
- **Mailbox:** Ruby for urgent communication.
- **Avatar:** Violet for personal identity and user-state indicators.

All interactive elements should use these accents as glowing highlights (box-shadows with high spread and low opacity) rather than solid fills where possible.

## Typography
The typography system follows a dual-path logic: **Geist** handles the human interface—reading, navigation, and titles—while **JetBrains Mono** handles the machine interface—metadata, technical labels, and system status.

Labels should always be set in uppercase when using JetBrains Mono to reinforce the "technical tag" aesthetic. High-level displays use Geist with tight tracking to feel modern and architectural. For mobile devices, `display-lg` scales down to 32px, while all `label` roles remain constant to preserve legibility in dense data views.

## Layout & Spacing
The layout is governed by a **strict 4px grid system** and a 12-column fluid grid. Components are "slotted" into the grid like rooms in a floor plan.

- **Desktop:** 12 columns, 16px gutters, 32px outer margins.
- **Tablet:** 8 columns, 16px gutters, 24px outer margins.
- **Mobile:** 4 columns, 12px gutters, 16px outer margins.

Spacing between functional groups should be generous (32px+) to prevent the sharp-edged components from feeling cluttered. Borders are the primary separators; use them instead of whitespace to define the "Technical Dollhouse" structure.

## Elevation & Depth
In this design system, there is no Z-axis simulated by light and shadow. Depth is achieved through **Tonal Layering** and **Luminescence**.

- **Surface 0:** `#0f0d13` (The void/background).
- **Surface 1:** `#141218` (The active room/container).
- **Borders:** All containers must have a `1px solid #494551` border.
- **Interactions:** Instead of shadows, focused or hovered elements emit a color-coded "glow" using a `box-shadow: 0 0 15px [accent_color]40`.
- **Modals:** Overlays do not use blurs; they use a solid 80% opacity `#0f0d13` backdrop to maintain the high-contrast, brutalist feel.

## Shapes
The shape language is strictly **Rectilinear**. All border-radii are set to `0px`. This reinforces the architectural and technical nature of the system.

Buttons, input fields, and large containers must all maintain sharp 90-degree corners. Visual interest is generated through the intersection of lines and the use of "notched" corners (clipped paths) for specific call-to-action elements if additional distinction is required.

## Components
### Buttons
- **Primary:** Solid `#494551` background, sharp corners, JetBrains Mono label in white. On hover, the border changes to the section's accent color with a subtle glow.
- **Ghost:** No background, `1px` border. High-contrast label.

### Chips & Tags
- Small, sharp-edged boxes using JetBrains Mono.
- Backgrounds are transparent with a `1px` border matching the section accent (e.g., Cyan for Workshop tags).

### Input Fields
- Solid `#0f0d13` background with a `#494551` border.
- On focus, the border transitions to the primary accent color (`#cfbcff`) and the text cursor mimics a block terminal cursor.

### Cards & Containers
- Containers must clearly define "rooms." Every container has a `1px` border.
- Headers for cards should be separated by a horizontal stroke, with the title in the top-left and metadata (JetBrains Mono) in the top-right.

### Lists
- Separated by `1px` horizontal lines.
- Hover states should highlight the entire row with a very subtle shift to `#1a1820` and an accent-colored vertical "indicator" line (2px wide) on the far left.

### Status Indicators
- Small squares (not circles) using the color mapping values to indicate system health or category.
