export type ComponentDoc = {
  slug: string;
  title: string;
  description: string;
  /** Material 3 counterpart, shown as "M3: …" in the docs header. */
  material?: string;
};

export const components: ComponentDoc[] = [
  { slug: "badge", title: "Badge", description: "The 6dp error dot and numbered count badge.", material: "M3: Badge" },
  { slug: "banner", title: "Banner", description: "Inline contained banner with icon and text actions.", material: "Gmail-style banner" },
  { slug: "bottom-app-bar", title: "Bottom App Bar", description: "80dp action bar with a trailing FAB slot.", material: "M3: Bottom app bar" },
  { slug: "bottom-sheet", title: "Bottom Sheet", description: "28dp-corner sheet with a drag handle on surface-container-low.", material: "M3: Bottom sheets" },
  { slug: "button", title: "Button", description: "Filled, tonal, outlined, text, and elevated common buttons.", material: "M3: Common buttons" },
  { slug: "card", title: "Card", description: "Elevated, filled, and outlined cards with 12dp corners.", material: "M3: Cards" },
  { slug: "carousel", title: "Carousel", description: "Multi-browse hero strip with rounded-xl snap items.", material: "M3: Carousel" },
  { slug: "checkbox", title: "Checkbox", description: "18dp box with 2dp outline and primary fill.", material: "M3: Checkbox" },
  { slug: "chip", title: "Chip", description: "Assist, filter, and input chips, 32dp with 8dp corners.", material: "M3: Chips" },
  { slug: "date-picker", title: "Date Picker", description: "Docked calendar with today outline and filled selection.", material: "M3: Date pickers" },
  { slug: "dialog", title: "Dialog", description: "Basic dialog: 28dp corners, headline, text-button actions.", material: "M3: Dialogs" },
  { slug: "divider", title: "Divider", description: "1dp outline-variant rule, full-width or inset.", material: "M3: Divider" },
  { slug: "fab", title: "FAB", description: "Floating action button in four colors and four sizes, extended included.", material: "M3: Floating action buttons" },
  { slug: "icon-button", title: "Icon Button", description: "Standard, filled, tonal, and outlined icon buttons with toggle.", material: "M3: Icon buttons" },
  { slug: "list", title: "List", description: "One- to three-line list items with leading and trailing slots.", material: "M3: Lists" },
  { slug: "menu", title: "Menu", description: "Elevation-2 menu on surface-container with 48dp items.", material: "M3: Menus" },
  { slug: "navigation-bar", title: "Navigation Bar", description: "The 80dp bottom bar with pill active indicators.", material: "M3: Navigation bar" },
  { slug: "navigation-drawer", title: "Navigation Drawer", description: "Standard and modal drawers with pill indicators.", material: "M3: Navigation drawer" },
  { slug: "navigation-rail", title: "Navigation Rail", description: "The 80dp vertical rail with a FAB slot.", material: "M3: Navigation rail" },
  { slug: "progress", title: "Progress", description: "Linear indicator with stop dot, plus circular indeterminate.", material: "M3: Progress indicators" },
  { slug: "radio-group", title: "Radio Group", description: "20dp radio rings with a primary dot.", material: "M3: Radio button" },
  { slug: "search-bar", title: "Search Bar", description: "Full-round search bar expanding into a suggestion view.", material: "M3: Search" },
  { slug: "segmented-button", title: "Segmented Button", description: "Outlined segments; selected fills with a check.", material: "M3: Segmented buttons" },
  { slug: "side-sheet", title: "Side Sheet", description: "400dp trailing-edge panel with title and close.", material: "M3: Side sheets" },
  { slug: "slider", title: "Slider", description: "Tall active track, narrow handle, stop indicator.", material: "M3: Sliders" },
  { slug: "snackbar", title: "Snackbar", description: "Inverse-surface toast, bottom-left; call snackbar() anywhere.", material: "M3: Snackbar" },
  { slug: "switch", title: "Switch", description: "52x32 track; the thumb grows and shows a check when on.", material: "M3: Switch" },
  { slug: "tabs", title: "Tabs", description: "Primary tabs with the animated pill underline indicator.", material: "M3: Tabs" },
  { slug: "text-field", title: "Text Field", description: "Filled and outlined fields with the floating label.", material: "M3: Text fields" },
  { slug: "time-picker", title: "Time Picker", description: "Input-variant picker with 2-digit fields and AM/PM.", material: "M3: Time pickers" },
  { slug: "tooltip", title: "Tooltip", description: "Plain inverse-surface pill and rich container variants.", material: "M3: Tooltips" },
  { slug: "top-app-bar", title: "Top App Bar", description: "64dp small app bar with on-scroll tint.", material: "M3: Top app bar" },
];

export const siteConfig = {
  name: "mountainview-ui",
  github: "https://github.com/PeterTakahashi/mountainview-ui",
  /** Base URL used in `npx shadcn add` commands. */
  registryBase:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://mountainview-ui.vercel.app",
};
