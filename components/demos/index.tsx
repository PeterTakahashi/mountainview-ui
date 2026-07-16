import * as React from "react";

import BadgeDemo from "@/components/demos/badge-demo";
import BottomSheetDemo from "@/components/demos/bottom-sheet-demo";
import ButtonDemo from "@/components/demos/button-demo";
import CardDemo from "@/components/demos/card-demo";
import CheckboxDemo from "@/components/demos/checkbox-demo";
import ChipDemo from "@/components/demos/chip-demo";
import DialogDemo from "@/components/demos/dialog-demo";
import FabDemo from "@/components/demos/fab-demo";
import IconButtonDemo from "@/components/demos/icon-button-demo";
import ListDemo from "@/components/demos/list-demo";
import MenuDemo from "@/components/demos/menu-demo";
import NavigationBarDemo from "@/components/demos/navigation-bar-demo";
import NavigationRailDemo from "@/components/demos/navigation-rail-demo";
import ProgressDemo from "@/components/demos/progress-demo";
import RadioGroupDemo from "@/components/demos/radio-group-demo";
import SegmentedButtonDemo from "@/components/demos/segmented-button-demo";
import SliderDemo from "@/components/demos/slider-demo";
import SnackbarDemo from "@/components/demos/snackbar-demo";
import SwitchDemo from "@/components/demos/switch-demo";
import TabsDemo from "@/components/demos/tabs-demo";
import TextFieldDemo from "@/components/demos/text-field-demo";
import TopAppBarDemo from "@/components/demos/top-app-bar-demo";

import BannerDemo from "@/components/demos/banner-demo";
import BottomAppBarDemo from "@/components/demos/bottom-app-bar-demo";
import CarouselDemo from "@/components/demos/carousel-demo";
import DatePickerDemo from "@/components/demos/date-picker-demo";
import DividerDemo from "@/components/demos/divider-demo";
import NavigationDrawerDemo from "@/components/demos/navigation-drawer-demo";
import SearchBarDemo from "@/components/demos/search-bar-demo";
import SideSheetDemo from "@/components/demos/side-sheet-demo";
import TimePickerDemo from "@/components/demos/time-picker-demo";
import TooltipDemo from "@/components/demos/tooltip-demo";

export const demos: Record<string, React.ComponentType> = {
  "banner": BannerDemo,
  "bottom-app-bar": BottomAppBarDemo,
  "carousel": CarouselDemo,
  "date-picker": DatePickerDemo,
  "divider": DividerDemo,
  "navigation-drawer": NavigationDrawerDemo,
  "search-bar": SearchBarDemo,
  "side-sheet": SideSheetDemo,
  "time-picker": TimePickerDemo,
  "tooltip": TooltipDemo,
  badge: BadgeDemo,
  "bottom-sheet": BottomSheetDemo,
  button: ButtonDemo,
  card: CardDemo,
  checkbox: CheckboxDemo,
  chip: ChipDemo,
  dialog: DialogDemo,
  fab: FabDemo,
  "icon-button": IconButtonDemo,
  list: ListDemo,
  menu: MenuDemo,
  "navigation-bar": NavigationBarDemo,
  "navigation-rail": NavigationRailDemo,
  progress: ProgressDemo,
  "radio-group": RadioGroupDemo,
  "segmented-button": SegmentedButtonDemo,
  slider: SliderDemo,
  snackbar: SnackbarDemo,
  switch: SwitchDemo,
  tabs: TabsDemo,
  "text-field": TextFieldDemo,
  "top-app-bar": TopAppBarDemo,
};
