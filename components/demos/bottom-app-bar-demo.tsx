"use client";

import { ArchiveIcon, DeleteIcon, PlusIcon, ReplyIcon, SearchIcon } from "lucide-react";
import { BottomAppBar } from "@/registry/mountainview-ui/bottom-app-bar";
import { Fab } from "@/registry/mountainview-ui/fab";
import { IconButton } from "@/registry/mountainview-ui/icon-button";

export default function BottomAppBarDemo() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg shadow-[var(--shadow-elevation-1)]">
      <div className="flex h-32 items-center justify-center bg-surface text-body-m text-on-surface-variant">
        Content
      </div>
      <BottomAppBar
        fab={
          <Fab variant="secondary" aria-label="Compose">
            <PlusIcon />
          </Fab>
        }
      >
        <IconButton aria-label="Archive"><ArchiveIcon /></IconButton>
        <IconButton aria-label="Delete"><DeleteIcon /></IconButton>
        <IconButton aria-label="Reply"><ReplyIcon /></IconButton>
        <IconButton aria-label="Search"><SearchIcon /></IconButton>
      </BottomAppBar>
    </div>
  );
}
