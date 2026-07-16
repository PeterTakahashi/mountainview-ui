# mountainview-ui

Material Design 3 for your codebase. React components that follow the M3
spec — the tonal color system, type scale, shape, elevation, and state
layers — distributed the shadcn way: you install the source and own it.

**Not affiliated with Google LLC.**

## What's inside

- **22 components** (`registry/mountainview-ui/`): Button, FAB, Icon Button,
  Switch, Checkbox, Radio Group, Slider, Text Field (floating label), Card,
  Chip, Dialog, Bottom Sheet, Snackbar, Menu, Tabs, Navigation Bar,
  Navigation Rail, Progress, Badge, List, Segmented Button, Top App Bar
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

## License

MIT
