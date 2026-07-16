import type { Dict } from "../types";

export const en: Dict = {
  "nav": {
    "docs": "Docs",
    "components": "Components",
    "showcases": "Showcases"
  },
  "landing": {
    "heroTitle1": "Material 3.",
    "heroTitle2": "Yours to own.",
    "heroSub": "Faithful Material Design 3 components on Tailwind CSS and Radix. Installed as source with the shadcn CLI — every line lands in your repo.",
    "getStarted": "Get started",
    "github": "GitHub",
    "stats": "{n} components · light & dark · MIT license",
    "installTitle": "Install like shadcn/ui",
    "installSub": "No package to depend on. The CLI copies the component source into your project, styled with Material 3 tokens.",
    "p1t": "Spec-faithful tokens",
    "p1b": "The baseline M3 scheme — primary through surface-container tiers — plus the full type scale, shape system, elevation, and 8%/12% state layers.",
    "p2t": "Own the code",
    "p2b": "Components are files in your repo, not a dependency. Reshape a chip or rebuild a sheet without fighting a library.",
    "p3t": "Dynamic-color ready",
    "p3b": "Every color is a CSS variable. Swap the baseline palette for your own Material You scheme and everything re-tints.",
    "footer": "mountainview-ui — an independent open-source project, not affiliated with Google LLC."
  },
  "sidebar": {
    "gettingStarted": "Getting started",
    "components": "Components",
    "introduction": "Introduction",
    "installation": "Installation",
    "theming": "Theming"
  },
  "intro": {
    "title": "Introduction",
    "lead": "mountainview-ui brings Material Design 3 to your codebase: React components that follow the M3 spec, distributed the shadcn way — you install the source and own it.",
    "whyTitle": "Why",
    "whyP1": "Material 3 is one of the most complete design systems ever published: a tonal color system with light and dark schemes, a fifteen-step type scale, a shape system, elevation levels, and precise state layers. mountainview-ui reproduces those decisions as Tailwind CSS tokens and Radix-based components.",
    "whyP2": "Like shadcn/ui, this is not a package you depend on. Each component is a file the CLI copies into your project. Change anything.",
    "componentsTitle": "Components"
  },
  "install": {
    "title": "Installation",
    "lead": "Works in any React project with Tailwind CSS v4. Next.js shown here.",
    "s1": "1. Set up shadcn",
    "s1p": "If your project doesn't have a components.json yet:",
    "s2": "2. Add the theme tokens",
    "s2p1": "The components read the M3 color scheme, type scale, shape, and elevation from CSS tokens. Install them once:",
    "s2p2": "This places mountainview-ui-theme.css in your project root. Import it in your global stylesheet, after Tailwind:",
    "s3": "3. Add components",
    "s3p": "The source lands in components/ui/. It's yours now — edit it freely."
  },
  "theming": {
    "title": "Theming",
    "lead": "Every token is a CSS variable, so a Material You scheme is an override away.",
    "colors": "Color roles",
    "colorsP": "The baseline M3 scheme ships with paired container / on-container roles. Use them as Tailwind colors: bg-primary, text-on-surface-variant, bg-surface-high.",
    "dynamic": "Dynamic color",
    "dynamicP": "Generate a scheme from your brand color with the Material Theme Builder, then override the variables — components re-tint automatically:",
    "dark": "Dark scheme",
    "darkP": "Toggle the dark class on <html>. All tokens swap to their dark values — components need no changes.",
    "type": "Type, shape, elevation",
    "typeP": "The full M3 type scale ships as utilities (text-display-l … text-label-s), shape as radius tokens, elevation as shadows, and state layers as 8% hover / 12% press utilities."
  },
  "component": {
    "installation": "Installation",
    "source": "Source",
    "themeNote1": "Requires the theme tokens — see ",
    "themeNoteLink": "Installation",
    "themeNote2": " if this is your first component."
  },
  "gallery": {
    "title": "Components",
    "lead": "All {n} components, live. Everything below is interactive — click a title for install instructions and source."
  }
};
