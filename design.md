# EVIT Landing Page Design Specification (New Stack)

This document defines the design tokens, layout structures, visual effects, and assets for the new EVIT landing page. It has been modernized to use **Tailwind CSS v4** for styling and layout, and **Framer Motion** for state-driven and scroll-driven physics animations.

---

## 1. Design Tokens & Color Palette

We use a modern dark-tech palette featuring glowing accents to create a premium, futuristic, and trust-building aesthetic.

| Token | Role | Value | Usage |
| :--- | :--- | :--- | :--- |
| `background` | Primary Background | `#03032D` | Main website background (deep navy-blue). |
| `blue-bright` | Primary Accent | `#0184D1` | Active links, section sub-headers, glows, and card borders. |
| `red-bright` | Secondary Accent / CTA | `#E30000` | Primary buttons, active state indicators. |
| `text-primary` | Main Text | `#FFFFFF` | Headings, button text, and prominent content. |
| `text-secondary`| Body Text | `#B0B0D0` | Paragraphs, descriptions, secondary navigation. |
| `card-bg` | Card Background | `rgba(3, 3, 45, 0.6)` | Glassmorphic background with transparency. |
| `bg-light` | Premium Ambient Glow | Layered radial gradients (see Section 5.4) | Background glow style modeled after the About Company cards. |

---

## 2. Typography

We use the **Inter** font family via Google Fonts to achieve a clean, modern, and highly legible sans-serif appearance.

- **Headings (H1, H2)**: `Inter`, weights: `700` (Bold), `800` (Extra Bold). Letter spacing: `-0.02em`.
- **Sub-headers & Card Titles**: `Inter`, weights: `600` (Semi-Bold). Letter spacing: `0.05em` (uppercase).
- **Body Text / Paragraphs**: `Inter`, weight: `400` (Regular), line-height: `1.6`.

---

## 3. Asset Mapping

All assets are located in the project's relative `public/assets/` directory:

- **Logo**: `/assets/logo.png` (crisp EVIT logo)
- **Hero Background**: `/assets/hero-bg.jpg` (grid/network mesh pattern)
- **Card Icon (Target/Checkmark)**: `/assets/icon-checkmark.png`
- **Global Backdrop Wave**: `/assets/background-wave-original.png` (mix-blend-mode: screen backdrop)
- **Illustration Assets**: `/assets/pain-founder.png`, `/assets/solution-growth.png`

---

## 4. Components & Layout Structure

### 4.1 Header & Navigation Bar
- **Logo**: Positioned on the left. Size adjusted for crisp rendering (height approx. `40px`).
- **Navigation Links**: Center-aligned. Items: `HOME` (Active state with `#E30000` color), `OUR SERVICES`, `CASE STUDIES`, `RESOURCES`, `ABOUT US`.
- **CTA Button**: Right-aligned. Text: `"BOOK FREE CONSULTATION"`. Background color `#E30000`, border-radius `50px` (capsule), with a right arrow `→`.

### 4.2 Hero Section
- **Background**: Full-screen banner height (`85vh` to `100vh`) using `/assets/hero-bg.jpg`. Centered, cover size, with a dark blue overlay (`rgba(3, 3, 45, 0.6)`) to ensure text contrast.
- **Main Heading**:
  - `"GET MORE CLIENTS"` (White, bold H1)
  - `"WITH A PROVEN SALES SYSTEM"` (Bright Red `#E30000`, bold H1)
  - `"FOR IT SERVICE PROVIDERS"` (Bright Red `#E30000`, bold H1)
- **Sub-description**: Left/Right margins constrained to `800px` max-width, center-aligned, light secondary color `#B0B0D0`.
- **CTA Button**: Center-aligned, capsule shape, bright red background, spelling corrected: `"BOOK FREE CONSULTATION →"`.

### 4.3 About Section
- **Section Indicator**: `"About Company"` (uppercase, small font size, bright blue `#0184D1`, center-aligned).
- **Section Heading**: `"EVIT ORGANIZATION"` (uppercase, bold H2, white, center-aligned).
- **Sub-description**: Max-width `900px`, center-aligned, light secondary text.
- **Grid Layout**: 4 columns on desktop, 2 columns on tablet, 1 column on mobile.
- **Card Styling**:
  - Uses the `bg-light` glow card styling.
  - Borders: 1.5px solid border with a subtle gradient transitioning into bright blue `#0184D1`.
  - Icon: Centered checkmark target icon (`/assets/icon-checkmark.png`) inside a circular boundary.
  - Text: Uppercase title (e.g., `"RIGHT APPROACH"`), centered, bold, white.
- **Section Footer Text**: Subtext explaining "Our Guaranteed Consulting Services...", followed by a red CTA button `"OUR SERVICES →"`.

### 4.4 Floating Widgets
- **Calendar Button**: Bottom-right floating button (fixed position). Circular shape, blue/purple gradient background, containing a calendar SVG/icon.

---

## 5. Micro-interactions & Visual Effects

To achieve a premium, state-of-the-art feel, we will implement the following effects using Tailwind CSS v4 and Framer Motion:

### 5.1 Card Glow Effects (About Cards)
- **Default State**: Subtly glowing blue border and box-shadow.
- **Hover State**:
  - The box-shadow expands and intensifies (using a bright blue/purple glow: `box-shadow: 0 10px 30px rgba(1, 132, 209, 0.4)`).
  - The card scales up slightly (`transform: translateY(-5px) scale(1.02)`).
  - Transition duration: `0.3s` ease-in-out.

### 5.2 Button Interactions
- **Hover State**:
  - Background transitions from `#E30000` to a slightly darker/brighter red or adds a scale pulse.
  - Arrow icon slides slightly to the right (`transform: translateX(4px)`).
  - Box-shadow glows red: `box-shadow: 0 4px 20px rgba(227, 0, 0, 0.5)`.

### 5.3 Active Navigation Link Interaction
- Hovering over nav links will show a smooth underline transition or color shift to bright blue/red.

### 5.4 bg-light Glow Card Effect (Special Rule)
The `bg-light` style applies a layered glassmorphic gradient backdrop to the cards. It is designed to match the About Company section cards, rendering depth and light reflections:
- **Base Background Layer**: Radial gradient 1 combined with Radial gradient 2 overlaid on a dark linear gradient:
  ```css
  background:
    radial-gradient(circle at 52% 18%, rgba(32, 77, 224, 0.48) 0%, rgba(32, 77, 224, 0.2) 22%, rgba(32, 77, 224, 0) 48%),
    radial-gradient(circle at 68% 42%, rgba(105, 48, 146, 0.28) 0%, rgba(105, 48, 146, 0.12) 22%, rgba(105, 48, 146, 0) 47%),
    linear-gradient(135deg, #09093d 0%, #10106a 48%, #07072e 100%);
  ```
- **Shine Accent Overlay (`::before`)**: A secondary layer at the top-left to simulate light glare:
  ```css
  background:
    radial-gradient(circle at 50% 20%, rgba(40, 80, 238, 0.12) 0%, rgba(40, 80, 238, 0) 42%),
    radial-gradient(circle at 72% 54%, rgba(112, 55, 154, 0.1) 0%, rgba(112, 55, 154, 0) 38%);
  ```
- **Border**: A thin, high-contrast semi-transparent border (`1.5px solid rgba(1, 151, 231, 0.6)`) to catch the light edge.
- **Glassmorphism**: Glass blur backdrop filter (`backdrop-filter: blur(10px)`) to refract underlying layout graphics (like the global wave backdrop).
