"use client";

import * as React from "react";
import {
  BluetoothIcon,
  FlashlightIcon,
  MoonIcon,
  PlaneIcon,
  SunIcon,
  WifiIcon,
} from "lucide-react";

import { Button } from "@/registry/mountainview-ui/button";
import { Chip } from "@/registry/mountainview-ui/chip";
import { Slider } from "@/registry/mountainview-ui/slider";
import { Switch } from "@/registry/mountainview-ui/switch";

/** Landing hero: an Android quick-settings panel of live components. */
export function HeroPanel() {
  const [tiles, setTiles] = React.useState<string[]>(["wifi", "bt"]);
  const toggle = (t: string) =>
    setTiles((xs) => (xs.includes(t) ? xs.filter((x) => x !== t) : [...xs, t]));

  const tile = (id: string, icon: React.ReactNode, label: string) => {
    const on = tiles.includes(id);
    return (
      <button
        type="button"
        onClick={() => toggle(id)}
        className={
          "flex h-16 cursor-pointer items-center gap-3 rounded-xl px-4 text-label-l outline-none transition-colors " +
          (on
            ? "bg-primary text-on-primary"
            : "bg-surface-highest text-on-surface-variant")
        }
      >
        <span className="[&_svg]:size-5">{icon}</span>
        {label}
      </button>
    );
  };

  return (
    <div className="w-full max-w-2xl rounded-xl bg-surface-container p-6 shadow-[var(--shadow-elevation-2)]">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-3">
          <p className="text-label-m uppercase text-on-surface-variant">
            Quick settings
          </p>
          <div className="grid grid-cols-2 gap-2">
            {tile("wifi", <WifiIcon />, "Internet")}
            {tile("bt", <BluetoothIcon />, "Bluetooth")}
            {tile("dnd", <MoonIcon />, "Do not disturb")}
            {tile("torch", <FlashlightIcon />, "Flashlight")}
          </div>
          <div className="mt-2 flex items-center gap-3 text-on-surface-variant">
            <SunIcon className="size-5 shrink-0" />
            <Slider defaultValue={[70]} />
          </div>
        </div>

        <div className="flex flex-col justify-between gap-5">
          <div className="flex flex-col gap-3 rounded-xl bg-surface-low p-4">
            <p className="text-title-s text-on-surface">Notifications</p>
            <label className="flex items-center justify-between gap-3 text-body-m text-on-surface">
              Silent mode <Switch />
            </label>
            <label className="flex items-center justify-between gap-3 text-body-m text-on-surface">
              Priority only <Switch defaultChecked />
            </label>
          </div>
          <div className="flex flex-wrap gap-2">
            <Chip variant="filter" selected>
              <PlaneIcon /> Travel
            </Chip>
            <Chip variant="filter">Work</Chip>
            <Chip variant="filter">Sleep</Chip>
          </div>
          <div className="flex gap-2">
            <Button className="flex-1">Done</Button>
            <Button variant="tonal" className="flex-1">
              Edit tiles
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
