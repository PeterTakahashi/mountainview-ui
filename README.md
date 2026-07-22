# mountainview-ui

Material Design 3 for your codebase. React components that follow the M3
spec — the tonal color system, type scale, shape, elevation, and state
layers — distributed the shadcn way: you install the source and own it.

**Docs & live demos:** https://mountainview-ui.baltoon.jp
(in English, 日本語, 中文, 한국어, Deutsch, Français, Русский)

**Not affiliated with Google LLC.**

## What's inside

- **32 components** (`registry/mountainview-ui/`): Button, FAB, Icon Button,
  Switch, Checkbox, Radio Group, Slider, Text Field (floating label), Card,
  Chip, Dialog, Bottom Sheet, Side Sheet, Snackbar, Menu, Tabs, Navigation
  Bar, Navigation Rail, Navigation Drawer, Bottom App Bar, Top App Bar,
  Progress, Badge, List, Segmented Button, Date Picker, Time Picker, Search
  Bar, Tooltip, Divider, Carousel, Banner
- **Showcases** (`/showcases`): three small apps built purely from the
  components — Inbox (Gmail-style), Store (Play-style), Home (Google
  Home-style) — each with desktop and mobile layouts
- **Agent skill** (`skills/mountainview-ui/`, also `/docs/skills`): teaches
  an AI coding agent to install and compose the library; install with
  `npx shadcn@latest add https://mountainview-ui.baltoon.jp/r/skill.json`
- **Theme tokens** (`registry/theme.css`): the M3 baseline color scheme with
  light/dark values, the full type scale, shape tokens, elevation shadows,
  and 8%/12% state-layer utilities — all as Tailwind CSS v4 tokens
- **Docs site** (Next.js App Router): live previews, install commands, and
  full source for every component
- **shadcn registry** (`registry.json` → `public/r/*.json`)

## Using the components

```bash
# 1. one-time: theme tokens
npx shadcn@latest add https://<your-deployment>/r/theme.json
# import mountainview-ui-theme.css in your global stylesheet, after tailwindcss

# 2. any component
npx shadcn@latest add https://<your-deployment>/r/button.json
```

```tsx
import { Button } from "@/components/ui/button";

<Button variant="tonal">Continue</Button>;
```

## Development

```bash
npm install
npm run dev            # docs site
npm run registry:build # rebuild public/r/*.json after editing registry/
npm run build          # production build (fully static)
```

## Sibling project

[cupertino-ui](https://github.com/PeterTakahashi/cupertino-ui) — the same
idea for Apple's Human Interface Guidelines: https://cupertino-ui.baltoon.jp

## License

MIT
