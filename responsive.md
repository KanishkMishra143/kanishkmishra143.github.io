# Responsive Design Implementation

This project implements a highly responsive, mobile-first design using **Next.js** and **Tailwind CSS**. The layout adapts from a single-column flow on mobile devices to a sophisticated split-screen layout on desktops.

## 1. Core Layout Strategy

The primary responsive logic is handled in `src/app/page.tsx`, which manages the transition between layouts:

- **Mobile (< 1024px):** A standard vertical stack where the header sits above the main content.
- **Desktop (≥ 1024px):** 
  - The container uses `lg:flex lg:justify-between lg:gap-4` to create two columns.
  - The `Header` component uses `lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:py-16` to stay fixed on the left while the user scrolls through the content on the right.
  - The `main` content is restricted to `lg:w-1/2` to maintain the 50/50 split.

## 2. Adaptive Spacing & Scaling

The project utilizes Tailwind's breakpoint system (`sm`, `md`, `lg`) to scale elements proportionally:

| Element | Mobile Breakpoint | Desktop Breakpoint |
| :--- | :--- | :--- |
| **Main Padding** | `px-6 py-12` | `md:px-12`, `lg:px-24` |
| **Heading Size** | `text-3xl` | `sm:text-4xl` |
| **Section Margins** | `mb-16` | `md:mb-24`, `lg:mb-36` |

## 3. Breakpoint-Specific Visibility

To optimize the user experience on different devices, certain elements are toggled based on screen size:

- **Navigation Links:** The side navigation in the header is hidden on mobile (`hidden`) and only appears on desktop (`lg:block`). This prevents clutter on smaller screens where users typically rely on vertical scrolling.
- **Interactive Background:** The radial gradient mouse tracker (`src/app/page.tsx`) provides a desktop-centric "spotlight" effect that enhances the large-screen experience without impacting mobile performance.

## 4. Component Responsiveness

### Project Cards (`src/components/ProjectCard.tsx`)
- **Grid Layout:** Uses `sm:grid-cols-8` to align descriptions and tags horizontally on larger screens, while stacking them on the smallest screens.
- **Hover States:** Complex hover effects (like background highlights and list-wide opacity shifts) are scoped to `lg:` to ensure they only trigger on devices with precise pointer interactions.

### Experience & Skills
- Both sections utilize flex-wrapping (`flex-wrap`) and grid systems to ensure that lists of tags or timeline items reorganize themselves efficiently as the viewport width changes.

## 5. Summary of Tailwind Breakpoints Used
- `sm:` (640px) - Initial scaling for mobile-plus/small tablets.
- `md:` (768px) - Adjustments for tablet-sized viewports.
- `lg:` (1024px) - Major layout transformation to split-screen/sticky header.
