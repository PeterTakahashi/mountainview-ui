"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * M3 navigation rail: an 80dp vertical strip with pill-indicator
 * destinations and an optional FAB slot at the top.
 */
const RailContext = React.createContext<{
  selected?: string;
  onSelect?: (value: string) => void;
}>({});

function NavigationRail({
  className,
  selected,
  onSelect,
  header,
  children,
  ...props
}: Omit<React.ComponentProps<"nav">, "onSelect"> & {
  selected?: string;
  onSelect?: (value: string) => void;
  /** Slot above the destinations, typically a FAB. */
  header?: React.ReactNode;
}) {
  return (
    <RailContext.Provider value={{ selected, onSelect }}>
      <nav
        data-slot="navigation-rail"
        className={cn(
          "flex h-full w-20 shrink-0 flex-col items-center gap-3 bg-surface py-4",
          className
        )}
        {...props}
      >
        {header ? <div className="mb-4">{header}</div> : null}
        <div className="flex flex-col items-center gap-3">{children}</div>
      </nav>
    </RailContext.Provider>
  );
}

function NavigationRailItem({
  className,
  value,
  icon,
  children,
  ...props
}: Omit<React.ComponentProps<"button">, "value"> & {
  value: string;
  icon: React.ReactNode;
}) {
  const { selected, onSelect } = React.useContext(RailContext);
  const active = selected === value;

  return (
    <button
      type="button"
      data-slot="navigation-rail-item"
      data-selected={active || undefined}
      onClick={() => onSelect?.(value)}
      className={cn(
        "group flex cursor-pointer select-none flex-col items-center gap-1 outline-none focus-visible:ring-2 focus-visible:ring-primary",
        className
      )}
      {...props}
    >
      <span
        className={cn(
          "flex h-8 w-14 items-center justify-center rounded-full text-on-surface-variant transition-colors group-hover:bg-[color-mix(in_srgb,var(--on-surface)_8%,transparent)] [&_svg]:size-6",
          active && "bg-secondary-container text-on-secondary-container"
        )}
      >
        {icon}
      </span>
      <span
        className={cn(
          "text-label-m",
          active ? "text-on-surface" : "text-on-surface-variant"
        )}
      >
        {children}
      </span>
    </button>
  );
}

export { NavigationRail, NavigationRailItem };
