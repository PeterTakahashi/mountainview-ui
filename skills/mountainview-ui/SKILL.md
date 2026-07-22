---
name: mountainview-ui
description: >
  How to install and build UIs with mountainview-ui — the shadcn-style React
  component library that faithfully implements Google's Material Design 3
  (Material You) on Tailwind CSS v4 + Radix. Use this skill whenever the user
  mentions mountainview-ui, wants Material 3 / Material You UI in React or
  Next.js, asks for M3 components on the web (FABs, chips, navigation bars,
  navigation drawers, snackbars, segmented buttons, floating-label text
  fields, bottom sheets), or is adding components from the mountainview-ui
  registry — even if they just say "make it feel like a Google app" without
  naming the library.
---

# mountainview-ui

mountainview-ui distributes Material 3 React components the shadcn way: the
CLI copies the component **source** into the user's project
(`components/ui/`), where it can be edited freely. There is no runtime
package to depend on. Docs and live demos: https://mountainview-ui.baltoon.jp

## Setup (once per project)

Requirements: React 18+/Next.js and **Tailwind CSS v4** (the tokens use
`@theme`/`@utility`, which do not exist in v3).

```bash
# 1. shadcn plumbing, if the project has no components.json yet
npx shadcn@latest init

# 2. theme tokens + cn() helper — REQUIRED before any component
npx shadcn@latest add https://mountainview-ui.baltoon.jp/r/theme.json
npm install tw-animate-css
```

Then import the theme in the global stylesheet, after Tailwind:

```css
@import "tailwindcss";
@import "tw-animate-css";
@import "../mountainview-ui-theme.css"; /* adjust the relative path */
```

Install theme.json FIRST: every component reads the M3 color roles, type
scale, shape, elevation, and state-layer utilities from it. Without the
theme, components render unstyled. theme.json also ships an extended
`lib/utils.ts` — see Pitfalls.

Add components afterwards, one URL per component:

```bash
npx shadcn@latest add https://mountainview-ui.baltoon.jp/r/button.json
```

The full catalog with slugs, exports, and install commands is in
[references/components.md](references/components.md).

## Token cheatsheet

Color roles (CSS vars, light + `.dark` values; use as Tailwind colors):

- Accents: `bg-primary text-on-primary`, `bg-primary-container
  text-on-primary-container`, same pairs for `secondary` and `tertiary`,
  plus `bg-error` / `bg-error-container`.
- Surfaces (low → high emphasis): `bg-surface`, `bg-surface-low`,
  `bg-surface-container`, `bg-surface-high`, `bg-surface-highest`.
  Content on them: `text-on-surface`, `text-on-surface-variant`.
- Lines: `border-outline` (strong), `border-outline-variant` (hairline).
- Inverse (snackbars): `bg-inverse-surface text-inverse-on-surface`,
  `text-inverse-primary`.

Type scale — always prefer these utilities over raw `text-sm`/`font-bold`;
each carries the exact M3 size, line height, tracking, AND weight:
`text-display-l/m/s`, `text-headline-l/m/s`, `text-title-l/m/s`,
`text-body-l/m/s`, `text-label-l/m/s`. (`label-l` is the button size,
`body-m` the default reading size, `title-m` a card heading.)

Shape: `rounded-xs` 4px, `rounded-sm` 8px, `rounded-md` 12px (cards),
`rounded-lg` 16px, `rounded-xl` 28px (dialogs, sheets), `rounded-full`
(buttons, chips ends). Elevation: `shadow-[var(--shadow-elevation-1)]`
through elevation-5.

State layers: `state-on-surface`, `state-primary`, `state-on-primary`,
`state-on-secondary-container` — these implement the M3 spec's 8% hover /
12% press overlay on the right base color.

Dark mode is the `dark` class on `<html>`; every var swaps automatically.
Re-theming = overriding `--primary`, `--primary-container`, etc. (e.g. from
Material Theme Builder output). Never hardcode hex.

## M3 conventions the components follow

- **Interaction is a state layer, not a color swap.** Hover/press tint the
  existing surface with 8%/12% of the content color. When building custom
  interactive elements, use the `state-*` utilities instead of inventing
  hover colors.
- **Buttons are full-round** (pill), 40dp tall, `text-label-l`. Emphasis
  ladder: filled > tonal > elevated > outlined > text. One filled button per
  region; pair it with text buttons in dialogs.
- **Active navigation is a pill indicator** (secondary-container behind the
  icon), not a highlighted row: navigation-bar, navigation-rail, and
  navigation-drawer all follow this.
- **Elevation is semantic.** Cards sit at elevation 1, menus at 2, FABs and
  dialogs at 3. Don't stack heavy shadows for decoration.
- Disabled state is `opacity-[0.38]`, not a gray recolor.

## Composition patterns

Desktop app shell (drawer + content):

```tsx
<div className="flex h-dvh">
  <NavigationDrawer>
    <NavigationDrawerHeadline>Mail</NavigationDrawerHeadline>
    <NavigationDrawerItem icon={<InboxIcon />} badge="24" active>Inbox</NavigationDrawerItem>
  </NavigationDrawer>
  <main className="min-w-0 flex-1 overflow-y-auto bg-surface">
    <TopAppBar scrolled={isScrolled}>…</TopAppBar>
    …
  </main>
</div>
```

Mobile shell (bottom navigation + FAB): `NavigationBar` (Radix Tabs —
`NavigationBarContent` per tab, `NavigationBarList` last) with an absolutely
positioned `Fab` above it. Modal navigation on phones: `ModalNavigationDrawer
trigger={<IconButton…>}`.

Snackbars are imperative — render `<Snackbars />` once near the root, then
from anywhere:

```tsx
snackbar({ message: "Photo archived", actionLabel: "Undo", onAction: undo });
```

Text fields: pass `label` (floating label is built in — never add a separate
`<label>` above), `supportingText` for helper/error copy, `error` to flip to
error colors. `variant="outlined"` for dense forms, default filled for
standalone fields.

## Pitfalls

- Installing a component before theme.json → unstyled output. Theme first.
- The theme ships `lib/utils.ts` with an **extended tailwind-merge** that
  registers the M3 type-scale utilities as font-size classes. Don't replace
  it with a stock `cn()` — if you do, `text-title-m text-on-surface` merges
  wrongly and the size class is silently dropped.
- `tw-animate-css` must be installed and imported, or dialogs, sheets, menus
  and snackbars appear without enter/exit animations.
- Components assume the `dark` class strategy. If the project uses
  `prefers-color-scheme` only, add a small script that sets the class.
