"use client";

import * as React from "react";
import { InboxIcon, PencilIcon, SendIcon, StarIcon, Trash2Icon } from "lucide-react";
import { Fab } from "@/registry/mountainview-ui/fab";
import {
  NavigationRail,
  NavigationRailItem,
} from "@/registry/mountainview-ui/navigation-rail";

export default function NavigationRailDemo() {
  const [selected, setSelected] = React.useState("inbox");

  return (
    <div className="flex h-80 w-full max-w-sm overflow-hidden rounded-lg bg-surface shadow-[var(--shadow-elevation-1)]">
      <NavigationRail
        selected={selected}
        onSelect={setSelected}
        header={
          <Fab size="sm" variant="primary" aria-label="Compose">
            <PencilIcon />
          </Fab>
        }
      >
        <NavigationRailItem value="inbox" icon={<InboxIcon />}>
          Inbox
        </NavigationRailItem>
        <NavigationRailItem value="sent" icon={<SendIcon />}>
          Sent
        </NavigationRailItem>
        <NavigationRailItem value="starred" icon={<StarIcon />}>
          Starred
        </NavigationRailItem>
        <NavigationRailItem value="trash" icon={<Trash2Icon />}>
          Trash
        </NavigationRailItem>
      </NavigationRail>
      <div className="flex flex-1 items-center justify-center bg-surface-low text-body-m capitalize text-on-surface-variant">
        {selected}
      </div>
    </div>
  );
}
