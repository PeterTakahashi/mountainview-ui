"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * M3 small top app bar: 64dp, leading navigation icon, title, and
 * trailing actions. Tints to surface-container on scroll.
 */
function TopAppBar({
  className,
  scrolled,
  ...props
}: React.ComponentProps<"header"> & {
  /** Show the on-scroll container tint. */
  scrolled?: boolean;
}) {
  return (
    <header
      data-slot="top-app-bar"
      className={cn(
        "flex h-16 w-full items-center gap-1 px-1 transition-colors duration-200",
        scrolled ? "bg-surface-container" : "bg-surface",
        className
      )}
      {...props}
    />
  );
}

function TopAppBarTitle({ className, ...props }: React.ComponentProps<"h1">) {
  return (
    <h1
      data-slot="top-app-bar-title"
      className={cn("min-w-0 flex-1 truncate px-1 text-title-l text-on-surface", className)}
      {...props}
    />
  );
}

export { TopAppBar, TopAppBarTitle };
