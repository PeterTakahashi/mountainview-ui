"use client";

import * as React from "react";
import {
  AppWindowIcon,
  DownloadIcon,
  GamepadIcon,
  BookOpenIcon,
  SearchIcon,
  StarIcon,
  UserIcon,
} from "lucide-react";

import { ShowcaseFrame } from "@/components/site/showcase-frame";
import { Button } from "@/registry/mountainview-ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/registry/mountainview-ui/card";
import { Carousel, CarouselItem } from "@/registry/mountainview-ui/carousel";
import { Chip } from "@/registry/mountainview-ui/chip";
import {
  NavigationBar,
  NavigationBarContent,
  NavigationBarItem,
  NavigationBarList,
} from "@/registry/mountainview-ui/navigation-bar";
import { Progress } from "@/registry/mountainview-ui/progress";
import { snackbar, Snackbars } from "@/registry/mountainview-ui/snackbar";

const heroes = [
  ["Trailhead", "Plan hikes with live conditions", "linear-gradient(135deg,#006e1c,#00639b)"],
  ["Lumen", "Photo editing, reimagined", "linear-gradient(135deg,#6750a4,#7d5260)"],
  ["Orbit", "A calmer calendar", "linear-gradient(135deg,#00639b,#141218)"],
];

const apps = [
  { name: "Fieldnotes", tag: "Productivity", rating: "4.8", hue: "#6750a4" },
  { name: "Summit Run", tag: "Games", rating: "4.6", hue: "#006e1c" },
  { name: "Darkroom X", tag: "Photography", rating: "4.7", hue: "#7d5260" },
  { name: "Tidepool", tag: "Weather", rating: "4.5", hue: "#00639b" },
  { name: "Ledgerly", tag: "Finance", rating: "4.4", hue: "#b3261e" },
  { name: "Northstar", tag: "Travel", rating: "4.9", hue: "#4f378b" },
];

const categories = ["For you", "Top charts", "Productivity", "Games", "Editors' choice"];

function AppCard({ app }: { app: (typeof apps)[number] }) {
  const [progress, setProgress] = React.useState<number | null>(null);
  const [installed, setInstalled] = React.useState(false);

  const install = () => {
    setProgress(0);
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p === null) return null;
        if (p >= 100) {
          clearInterval(timer);
          setInstalled(true);
          setProgress(null);
          snackbar({ message: `${app.name} installed`, actionLabel: "Open" });
          return null;
        }
        return p + 20;
      });
    }, 350);
  };

  return (
    <Card variant="filled" className="overflow-hidden">
      <div
        className="flex h-24 items-center justify-center"
        style={{ background: `linear-gradient(135deg, ${app.hue}, color-mix(in srgb, ${app.hue} 40%, black))` }}
      >
        <AppWindowIcon className="size-9 text-white/85" />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-title-s">{app.name}</CardTitle>
        <CardDescription className="flex items-center gap-1 text-body-s">
          {app.tag} · {app.rating}
          <StarIcon className="size-3 fill-current" />
        </CardDescription>
      </CardHeader>
      <div className="px-4 pb-4">
        {progress !== null ? (
          <Progress value={progress} />
        ) : (
          <Button
            size="sm"
            variant={installed ? "outlined" : "tonal"}
            className="w-full"
            onClick={installed ? undefined : install}
          >
            {installed ? "Open" : <><DownloadIcon /> Install</>}
          </Button>
        )}
      </div>
    </Card>
  );
}

function StoreContent() {
  const [category, setCategory] = React.useState("For you");

  return (
    <div className="flex flex-col gap-6 p-4">
      <Carousel>
        {heroes.map(([title, sub, bg]) => (
          <CarouselItem key={title} label={<span>{title}<span className="block text-body-s text-white/75">{sub}</span></span>}>
            <div className="size-full" style={{ background: bg }} />
          </CarouselItem>
        ))}
      </Carousel>

      <div className="flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {categories.map((c) => (
          <Chip
            key={c}
            variant="filter"
            selected={category === c}
            onClick={() => setCategory(c)}
            className="shrink-0"
          >
            {c}
          </Chip>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {apps.map((a) => (
          <AppCard key={a.name} app={a} />
        ))}
      </div>
    </div>
  );
}

export default function StoreShowcase() {
  return (
    <ShowcaseFrame title="Store">
      <Snackbars />

      {/* Desktop */}
      <div className="mx-auto hidden w-full max-w-3xl overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-elevation-2)] md:block">
        <StoreContent />
      </div>

      {/* Mobile: bottom navigation */}
      <div className="mx-auto flex h-[calc(100dvh-140px)] max-h-[800px] w-full max-w-md overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-elevation-2)] md:hidden">
        <NavigationBar defaultValue="apps" className="h-full w-full">
          <NavigationBarContent value="apps" className="min-h-0 overflow-y-auto">
            <StoreContent />
          </NavigationBarContent>
          {["games", "books", "you"].map((v) => (
            <NavigationBarContent
              key={v}
              value={v}
              className="flex items-center justify-center text-body-m capitalize text-on-surface-variant"
            >
              {v}
            </NavigationBarContent>
          ))}
          <NavigationBarList>
            <NavigationBarItem value="apps" icon={<AppWindowIcon />}>Apps</NavigationBarItem>
            <NavigationBarItem value="games" icon={<GamepadIcon />} badge="2">Games</NavigationBarItem>
            <NavigationBarItem value="books" icon={<BookOpenIcon />}>Books</NavigationBarItem>
            <NavigationBarItem value="you" icon={<UserIcon />}>You</NavigationBarItem>
          </NavigationBarList>
        </NavigationBar>
      </div>
    </ShowcaseFrame>
  );
}
