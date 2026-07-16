"use client";

import { EditIcon, NavigationIcon, PlusIcon } from "lucide-react";
import { Fab } from "@/registry/mountainview-ui/fab";

export default function FabDemo() {
  return (
    <div className="flex flex-wrap items-end justify-center gap-4">
      <Fab size="sm" aria-label="Navigate" variant="surface">
        <NavigationIcon />
      </Fab>
      <Fab aria-label="Create">
        <PlusIcon />
      </Fab>
      <Fab size="extended" variant="tertiary">
        <EditIcon /> Compose
      </Fab>
    </div>
  );
}
