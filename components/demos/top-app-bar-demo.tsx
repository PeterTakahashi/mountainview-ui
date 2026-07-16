"use client";

import { ArrowLeftIcon, EllipsisVerticalIcon, SearchIcon } from "lucide-react";
import { IconButton } from "@/registry/mountainview-ui/icon-button";
import { TopAppBar, TopAppBarTitle } from "@/registry/mountainview-ui/top-app-bar";

export default function TopAppBarDemo() {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-lg shadow-[var(--shadow-elevation-1)]">
      <TopAppBar scrolled>
        <IconButton aria-label="Back">
          <ArrowLeftIcon />
        </IconButton>
        <TopAppBarTitle>Inbox</TopAppBarTitle>
        <IconButton aria-label="Search">
          <SearchIcon />
        </IconButton>
        <IconButton aria-label="More">
          <EllipsisVerticalIcon />
        </IconButton>
      </TopAppBar>
      <div className="flex h-24 items-center justify-center bg-surface text-body-m text-on-surface-variant">
        Content
      </div>
    </div>
  );
}
