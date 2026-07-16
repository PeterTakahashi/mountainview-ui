"use client";

import * as React from "react";
import {
  FanIcon,
  LampIcon,
  LightbulbIcon,
  LockIcon,
  PlusIcon,
  SpeakerIcon,
  ThermometerIcon,
  TvIcon,
} from "lucide-react";

import { ShowcaseFrame } from "@/components/site/showcase-frame";
import {
  BottomSheet,
  BottomSheetContent,
  BottomSheetTitle,
  BottomSheetTrigger,
} from "@/registry/mountainview-ui/bottom-sheet";
import { Button } from "@/registry/mountainview-ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogIcon,
  DialogTitle,
  DialogTrigger,
} from "@/registry/mountainview-ui/dialog";
import { Fab } from "@/registry/mountainview-ui/fab";
import { List, ListItem } from "@/registry/mountainview-ui/list";
import { Slider } from "@/registry/mountainview-ui/slider";
import { Switch } from "@/registry/mountainview-ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/mountainview-ui/tabs";

const initialDevices = [
  { id: "lights", name: "Ceiling lights", room: "Living room", icon: LightbulbIcon, on: true, dimmable: true, level: 70 },
  { id: "lamp", name: "Reading lamp", room: "Living room", icon: LampIcon, on: false, dimmable: true, level: 40 },
  { id: "tv", name: "Television", room: "Living room", icon: TvIcon, on: false, dimmable: false, level: 0 },
  { id: "speaker", name: "Speaker", room: "Kitchen", icon: SpeakerIcon, on: true, dimmable: true, level: 25 },
  { id: "fan", name: "Ceiling fan", room: "Bedroom", icon: FanIcon, on: false, dimmable: true, level: 50 },
  { id: "thermo", name: "Thermostat", room: "Hallway", icon: ThermometerIcon, on: true, dimmable: false, level: 0 },
];

export default function HomeShowcase() {
  const [devices, setDevices] = React.useState(initialDevices);
  const [tab, setTab] = React.useState("living");

  const toggle = (id: string, on: boolean) =>
    setDevices((ds) => ds.map((d) => (d.id === id ? { ...d, on } : d)));
  const setLevel = (id: string, level: number) =>
    setDevices((ds) => ds.map((d) => (d.id === id ? { ...d, level } : d)));

  const rooms: Record<string, string[]> = {
    living: ["Living room"],
    kitchen: ["Kitchen"],
    upstairs: ["Bedroom", "Hallway"],
  };
  const shown = devices.filter((d) => rooms[tab]?.includes(d.room));
  const activeCount = devices.filter((d) => d.on).length;

  return (
    <ShowcaseFrame title="Home">
      <div className="relative mx-auto flex min-h-[600px] w-full max-w-3xl flex-col gap-5 rounded-xl bg-surface p-5 shadow-[var(--shadow-elevation-2)] md:p-8">
        <header className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-headline-m text-on-surface">Cedar House</h1>
            <p className="text-body-m text-on-surface-variant">
              {activeCount} device{activeCount === 1 ? "" : "s"} running · 21.5°
            </p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="tonal">
                <LockIcon /> Away mode
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogIcon>
                <LockIcon />
              </DialogIcon>
              <DialogTitle>Set Cedar House to Away?</DialogTitle>
              <DialogDescription>
                Lights turn off, the thermostat drops to eco, and cameras start
                recording. You can undo this from the top of the home screen.
              </DialogDescription>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="text">Cancel</Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button variant="text" onClick={() => setDevices((ds) => ds.map((d) => ({ ...d, on: false })))}>
                    Set Away
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </header>

        <Tabs value={tab} onValueChange={setTab}>
          <TabsList>
            <TabsTrigger value="living">Living room</TabsTrigger>
            <TabsTrigger value="kitchen">Kitchen</TabsTrigger>
            <TabsTrigger value="upstairs">Upstairs</TabsTrigger>
          </TabsList>
          {Object.keys(rooms).map((r) => (
            <TabsContent key={r} value={r}>
              <div className="grid gap-3 sm:grid-cols-2">
                {shown.map((d) => (
                  <div
                    key={d.id}
                    className={
                      "flex flex-col gap-3 rounded-lg p-4 transition-colors " +
                      (d.on ? "bg-primary-container" : "bg-surface-highest")
                    }
                  >
                    <div className="flex items-center gap-3">
                      <d.icon
                        className={
                          "size-6 " +
                          (d.on ? "text-on-primary-container" : "text-on-surface-variant")
                        }
                      />
                      <div className="min-w-0 flex-1">
                        <p
                          className={
                            "truncate text-title-s " +
                            (d.on ? "text-on-primary-container" : "text-on-surface")
                          }
                        >
                          {d.name}
                        </p>
                        <p
                          className={
                            "text-body-s " +
                            (d.on ? "text-on-primary-container/70" : "text-on-surface-variant")
                          }
                        >
                          {d.on ? (d.dimmable ? `On · ${d.level}%` : "On") : "Off"}
                        </p>
                      </div>
                      <Switch checked={d.on} onCheckedChange={(v) => toggle(d.id, v)} />
                    </div>
                    {d.on && d.dimmable ? (
                      <Slider
                        value={[d.level]}
                        onValueChange={([v]) => setLevel(d.id, v)}
                      />
                    ) : null}
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-auto flex justify-end pt-4">
          <BottomSheet>
            <BottomSheetTrigger asChild>
              <Fab size="extended" aria-label="Add device">
                <PlusIcon /> Add device
              </Fab>
            </BottomSheetTrigger>
            <BottomSheetContent>
              <BottomSheetTitle>Add to Cedar House</BottomSheetTitle>
              <List className="bg-transparent pb-6">
                <ListItem leading={<LightbulbIcon />} headline="Smart bulb" supportingText="Matter · nearby" onClick={() => {}} />
                <ListItem leading={<SpeakerIcon />} headline="Speaker" supportingText="Pair over Wi-Fi" onClick={() => {}} />
                <ListItem leading={<ThermometerIcon />} headline="Thermostat" supportingText="Requires hub" onClick={() => {}} />
              </List>
            </BottomSheetContent>
          </BottomSheet>
        </div>
      </div>
    </ShowcaseFrame>
  );
}
