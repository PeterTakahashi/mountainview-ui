"use client";

import * as React from "react";
import { CalendarIcon, MapPinIcon } from "lucide-react";
import { Chip } from "@/registry/mountainview-ui/chip";

export default function ChipDemo() {
  const [filters, setFilters] = React.useState<string[]>(["Open now"]);
  const toggle = (f: string) =>
    setFilters((xs) => (xs.includes(f) ? xs.filter((x) => x !== f) : [...xs, f]));

  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Chip>
        <CalendarIcon /> Add to calendar
      </Chip>
      {["Open now", "Top rated", "$$"].map((f) => (
        <Chip key={f} variant="filter" selected={filters.includes(f)} onClick={() => toggle(f)}>
          {f}
        </Chip>
      ))}
      <Chip variant="input" onRemove={() => {}}>
        <MapPinIcon /> Near me
      </Chip>
    </div>
  );
}
