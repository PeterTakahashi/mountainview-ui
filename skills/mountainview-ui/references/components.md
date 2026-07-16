# mountainview-ui component catalog

Install any component with:

```bash
npx shadcn@latest add https://mountainview-ui.vercel.app/r/<slug>.json
```

Import from `@/components/ui/<slug>`. Per-component docs with live demos:
`https://mountainview-ui.vercel.app/docs/components/<slug>`

## Table of contents

- [Actions](#actions) — button, chip, fab, icon-button, segmented-button
- [Selection & input](#selection-input) — checkbox, date-picker, radio-group, search-bar, slider, switch, text-field, time-picker
- [Containment & content](#containment-content) — badge, banner, card, carousel, divider, list, progress
- [Overlays](#overlays) — bottom-sheet, dialog, menu, side-sheet, snackbar, tooltip
- [Navigation](#navigation) — bottom-app-bar, navigation-bar, navigation-drawer, navigation-rail, tabs, top-app-bar

## Actions

### Button (`button`)

Filled, tonal, outlined, text, and elevated common buttons. Material 3 counterpart: Common buttons.

Exports: `Button`, `buttonVariants`

### Chip (`chip`)

Assist, filter, and input chips, 32dp with 8dp corners. Material 3 counterpart: Chips.

Exports: `Chip`, `chipVariants`

### FAB (`fab`)

Floating action button in four colors and four sizes, extended included. Material 3 counterpart: Floating action buttons.

Exports: `Fab`, `fabVariants`

### Icon Button (`icon-button`)

Standard, filled, tonal, and outlined icon buttons with toggle. Material 3 counterpart: Icon buttons.

Exports: `IconButton`, `iconButtonVariants`

### Segmented Button (`segmented-button`)

Outlined segments; selected fills with a check. Material 3 counterpart: Segmented buttons.

Exports: `SegmentedButton`, `SegmentedButtonItem`

## Selection & input

### Checkbox (`checkbox`)

18dp box with 2dp outline and primary fill. Material 3 counterpart: Checkbox.

Exports: `Checkbox`

### Date Picker (`date-picker`)

Docked calendar with today outline and filled selection. Material 3 counterpart: Date pickers.

Exports: `DatePicker`

### Radio Group (`radio-group`)

20dp radio rings with a primary dot. Material 3 counterpart: Radio button.

Exports: `RadioGroup`, `RadioGroupItem`

### Search Bar (`search-bar`)

Full-round search bar expanding into a suggestion view. Material 3 counterpart: Search.

Exports: `SearchBar`

### Slider (`slider`)

Tall active track, narrow handle, stop indicator. Material 3 counterpart: Sliders.

Exports: `Slider`

### Switch (`switch`)

52x32 track; the thumb grows and shows a check when on. Material 3 counterpart: Switch.

Exports: `Switch`

### Text Field (`text-field`)

Filled and outlined fields with the floating label. Material 3 counterpart: Text fields.

Exports: `TextField`

### Time Picker (`time-picker`)

Input-variant picker with 2-digit fields and AM/PM. Material 3 counterpart: Time pickers.

Exports: `TimePicker`

## Containment & content

### Badge (`badge`)

The 6dp error dot and numbered count badge. Material 3 counterpart: Badge.

Exports: `Badge`

### Banner (`banner`)

Inline contained banner with icon and text actions. Material 3 counterpart: Gmail-style banner.

Exports: `Banner`

### Card (`card`)

Elevated, filled, and outlined cards with 12dp corners. Material 3 counterpart: Cards.

Exports: `Card`, `CardContent`, `CardDescription`, `CardFooter`, `CardHeader`, `CardTitle`

### Carousel (`carousel`)

Multi-browse hero strip with rounded-xl snap items. Material 3 counterpart: Carousel.

Exports: `Carousel`, `CarouselItem`

### Divider (`divider`)

1dp outline-variant rule, full-width or inset. Material 3 counterpart: Divider.

Exports: `Divider`

### List (`list`)

One- to three-line list items with leading and trailing slots. Material 3 counterpart: Lists.

Exports: `List`, `ListDivider`, `ListItem`

### Progress (`progress`)

Linear indicator with stop dot, plus circular indeterminate. Material 3 counterpart: Progress indicators.

Exports: `CircularProgress`, `Progress`

## Overlays

### Bottom Sheet (`bottom-sheet`)

28dp-corner sheet with a drag handle on surface-container-low. Material 3 counterpart: Bottom sheets.

Exports: `BottomSheet`, `BottomSheetClose`, `BottomSheetContent`, `BottomSheetTitle`, `BottomSheetTrigger`

### Dialog (`dialog`)

Basic dialog: 28dp corners, headline, text-button actions. Material 3 counterpart: Dialogs.

Exports: `Dialog`, `DialogClose`, `DialogContent`, `DialogDescription`, `DialogFooter`, `DialogIcon`, `DialogTitle`, `DialogTrigger`

### Menu (`menu`)

Elevation-2 menu on surface-container with 48dp items. Material 3 counterpart: Menus.

Exports: `Menu`, `MenuCheckboxItem`, `MenuContent`, `MenuItem`, `MenuSeparator`, `MenuShortcut`, `MenuSub`, `MenuSubContent`, `MenuSubTrigger`, `MenuTrigger`

### Side Sheet (`side-sheet`)

400dp trailing-edge panel with title and close. Material 3 counterpart: Side sheets.

Exports: `SideSheet`, `SideSheetClose`, `SideSheetContent`, `SideSheetTrigger`

### Snackbar (`snackbar`)

Inverse-surface toast, bottom-left; call snackbar() anywhere. Material 3 counterpart: Snackbar.

Exports: `snackbar`, `Snackbars`

### Tooltip (`tooltip`)

Plain inverse-surface pill and rich container variants. Material 3 counterpart: Tooltips.

Exports: `Tooltip`, `TooltipContent`, `TooltipProvider`, `TooltipSubhead`, `TooltipTrigger`

## Navigation

### Bottom App Bar (`bottom-app-bar`)

80dp action bar with a trailing FAB slot. Material 3 counterpart: Bottom app bar.

Exports: `BottomAppBar`

### Navigation Bar (`navigation-bar`)

The 80dp bottom bar with pill active indicators. Material 3 counterpart: Navigation bar.

Exports: `NavigationBar`, `NavigationBarContent`, `NavigationBarItem`, `NavigationBarList`

### Navigation Drawer (`navigation-drawer`)

Standard and modal drawers with pill indicators. Material 3 counterpart: Navigation drawer.

Exports: `ModalNavigationDrawer`, `NavigationDrawer`, `NavigationDrawerHeadline`, `NavigationDrawerItem`

### Navigation Rail (`navigation-rail`)

The 80dp vertical rail with a FAB slot. Material 3 counterpart: Navigation rail.

Exports: `NavigationRail`, `NavigationRailItem`

### Tabs (`tabs`)

Primary tabs with the animated pill underline indicator. Material 3 counterpart: Tabs.

Exports: `Tabs`, `TabsContent`, `TabsList`, `TabsTrigger`

### Top App Bar (`top-app-bar`)

64dp small app bar with on-scroll tint. Material 3 counterpart: Top app bar.

Exports: `TopAppBar`, `TopAppBarTitle`
