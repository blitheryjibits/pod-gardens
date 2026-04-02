# Design System Strategy: Architectural Verdance

## 1. Overview & Creative North Star
**Creative North Star: "The Obsidian Atrium"**

This design system moves away from the "flat" web to embrace the depth of a moonlit architectural landscape. The goal is to evoke the feeling of standing in a high-end, designer garden at night—where structured forms (architecture) meet organic softness (botanicals). 

We reject the "bootstrap" aesthetic. Instead, we embrace **Intentional Asymmetry**. Layouts should mimic architectural blueprints: wide margins, overlapping image containers that break the grid, and a heavy reliance on negative space to create a "gallery" feel. This is not a utility app; it is a digital portfolio for luxury craftsmanship.

---

## 2. Colors & Atmospheric Depth
The palette is rooted in the earth (Charcoal/Black) and punctuated by the "Golden Hour" (Vibrant Orange) and "Lush Growth" (Botanical Green).

### The "No-Line" Rule
**Explicit Instruction:** You are prohibited from using 1px solid borders to define sections or cards. 
Structure must be achieved through **Tonal Shifting**. To separate a section, transition from `surface` (#121414) to `surface_container_low` (#1a1c1c). The eye should perceive a change in depth, not a mechanical line.

### Surface Hierarchy & Nesting
Treat the interface as a series of physical layers. 
*   **Base Layer:** `background` (#121414)
*   **Secondary Content Areas:** `surface_container` (#1e2020)
*   **Elevated Interactive Elements:** `surface_container_high` (#282a2a)
*   **Nested Insets:** Use `surface_container_lowest` (#0d0f0f) for input fields or recessed "well" components to create a sense of carving into the UI.

### The "Glass & Gradient" Rule
To prevent the dark mode from feeling "heavy" or "muddy," use Glassmorphism for floating navigation and overlays. 
*   **Glass Specs:** Use `surface_variant` (#333535) at 60% opacity with a `20px` backdrop-blur. 
*   **Signature Textures:** For primary CTAs, do not use a flat orange. Use a linear gradient from `primary` (#ffb59a) to `primary_container` (#ff5c00) at a 135-degree angle to simulate the glow of a garden light.

---

### 3. Typography: The Editorial Voice
Typography is the primary vehicle for the brand’s "High-End" promise.

*   **The Authority (Display/Headline):** *Noto Serif*. This is our architectural spine. Use `display-lg` for hero statements with tight letter-spacing (-0.02em). Use `headline-md` for section titles, always in `on_surface`.
*   **The Precision (Body/Labels):** *Manrope*. A high-performance sans-serif that represents construction precision. 
*   **The Signature Interaction:** Use `label-md` in All Caps with 0.1rem letter-spacing for all navigational elements and "Status" tags (e.g., *PROJECT COMPLETE*) using the `secondary` (#accfb8) token.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are too "software-like." We use **Ambient Lifts**.

*   **The Layering Principle:** Depth is achieved by stacking. Place a `surface_container_highest` card on a `surface_container_low` background. The `16px` difference in tonal value provides all the separation needed.
*   **Ambient Shadows:** If a floating element (like a Lightbox) requires a shadow, use a blur of `40px`, spread of `-10px`, and a color derived from `surface_container_lowest` at 50% opacity. It should feel like a soft glow, not a hard shadow.
*   **The "Ghost Border" Fallback:** If accessibility requires a stroke, use `outline_variant` (#5b4137) at **15% opacity**. This creates a "barely-there" guide that respects the architectural aesthetic.

---

## 5. Components

### Buttons: The "Luminous" Action
*   **Primary:** Gradient of `primary` to `primary_container`. Text in `on_primary_fixed` (#370e00). Roundedness: `md` (0.375rem).
*   **Secondary (The Architectural Button):** Transparent background with a `Ghost Border`. Text in `on_surface`. On hover, shift background to `surface_bright`.
*   **Tertiary:** Text-only in `secondary` (#accfb8) with an arrow icon.

### Cards & Project Previews
*   **Forbid Dividers:** Use `spacing.8` (2.75rem) of vertical white space to separate card content.
*   **Image Treatment:** Images should use `rounded-lg` (0.5rem). Apply a subtle inner glow using `outline_variant` at 10% to "set" the photo into the dark background.

### Input Fields: The "Carved" Input
*   **Style:** Background set to `surface_container_lowest`. No border. A bottom-only "focus line" using `primary` (#ffb59a) appears only on interaction.
*   **Labels:** Always use `label-md` floating above the field in `on_surface_variant`.

### Signature Component: The "Growth" Progress Bar
*   For construction updates or budget tracking, use a progress bar with a `secondary` (#accfb8) fill and a subtle `primary` (orange) pulse at the leading edge to signify "active work."

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical margins. If the left margin is `spacing.12`, try making the right margin `spacing.20` for a high-end editorial look.
*   **Do** use "Lush" imagery. Photos should be high-contrast, featuring deep greens and dramatic lighting.
*   **Do** use `primary` (vibrant orange) sparingly. It is a "spark"—use it for CTAs and critical notifications only.

### Don't:
*   **Don't** use pure white (#FFFFFF) for body text. Use `on_surface` (#e2e2e2) to prevent eye strain against the dark background.
*   **Don't** use standard 1px dividers. If you feel the need to "divide," use a `surface_container_highest` block that is only `1px` tall and spans only 60% of the container width.
*   **Don't** use `rounded.full` for everything. High-end architecture relies on structured corners. Stick to `md` and `lg` for a more "built" feel.