# Layout System Plan

This document outlines the intended layout system for the project, focusing on composable, responsive, and utility-class-only components using Tailwind CSS.

---

## 1. JuxtaposeLayout

- **Purpose:** Juxtapose up to 4 large, distinct components (e.g., carousel + video, chart + form).
- **Implementation:** CSS Grid with Tailwind utilities.
- **Supported Layouts:**
  - Up to 4 equal columns (`grid-cols-2`, `grid-cols-3`, `grid-cols-4`)
  - Asymmetric layouts: 25-50-25, 66-33, 33-66 (e.g., `grid-cols-[1fr_2fr_1fr]`, `grid-cols-[2fr_1fr]`, `grid-cols-[1fr_2fr]`)
- **Responsiveness:** Stacks on mobile (`grid-cols-1`), uses specified template on larger screens.
- **Gaps:** Uses `gap-*` utilities.
- **No custom CSS:** Only Tailwind classes, including arbitrary values for custom grid templates.

---

## 2. CardLayout

- **Purpose:** Display repeated, similar content (cards, tiles, etc.).
- **Implementation:** CSS Grid (standard) and Masonry (if plugin enabled) with Tailwind utilities.
- **Features:**
  - Up to 4 equal columns (`grid-cols-1` to `grid-cols-4`)
  - Masonry layout support (with plugin or native CSS)
  - Responsive: fewer columns on smaller screens
- **Gaps:** Uses `gap-*` or `space-x-*` utilities.
- **No custom CSS:** All via Tailwind.

---

## 3. ListLayout

- **Purpose:** Present a directory-style list (thumbnail, title, description per item).
- **Implementation:** Vertical flex or grid layout with Tailwind utilities.
- **Features:**
  - Vertical stacking (`flex flex-col gap-y-*`)
  - Optionally split into columns on larger screens
- **Gaps:** Uses `gap-y-*` or `gap-*` utilities.
- **No custom CSS:** All via Tailwind.

---

## 4. SidebarLayout

- **Purpose:** Layout with sidebar and main content (blogs, dashboards, docs).
- **Implementation:** CSS Grid or Flexbox with Tailwind utilities.
- **Features:**
  - Sidebar and main area (`grid-cols-[auto,1fr]` or `flex`)
  - Responsive stacking on mobile (`grid-cols-1` or `flex-col`)
  - Optional overlay/drawer sidebar for mobile
- **Gaps:** Uses `gap-*` or `space-x-*` utilities.
- **No custom CSS:** All via Tailwind.

---

## General Principles

- **Responsiveness:** All layouts adapt to screen size using Tailwind's responsive utilities.
- **Utility-First:** No custom CSS files; only Tailwind classes (including arbitrary values where needed).
- **Separation of Concerns:** Each layout component is focused and optimized for its use case.
- **Maintainability:** Easy to extend, refactor, or compose as the app grows.
