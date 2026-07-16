"use client";

import * as React from "react";
import { Tabs as TabsPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

/**
 * M3 navigation bar (bottom): 80dp, icon in an active pill
 * indicator with the label beneath.
 */
function NavigationBar({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="navigation-bar"
      className={cn("flex flex-col", className)}
      {...props}
    />
  );
}

function NavigationBarContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="navigation-bar-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

function NavigationBarList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="navigation-bar-list"
      className={cn(
        "flex h-20 shrink-0 items-stretch justify-around bg-surface-container px-2",
        className
      )}
      {...props}
    />
  );
}

function NavigationBarItem({
  className,
  icon,
  badge,
  children,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger> & {
  icon: React.ReactNode;
  badge?: React.ReactNode;
}) {
  return (
    <TabsPrimitive.Trigger
      data-slot="navigation-bar-item"
      className={cn(
        "group flex flex-1 cursor-pointer select-none flex-col items-center justify-center gap-1 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary",
        className
      )}
      {...props}
    >
      <span className="relative flex h-8 w-16 items-center justify-center rounded-full text-on-surface-variant transition-colors group-hover:bg-[color-mix(in_srgb,var(--on-surface)_8%,transparent)] group-data-[state=active]:bg-secondary-container group-data-[state=active]:text-on-secondary-container [&_svg]:size-6">
        {icon}
        {badge ? (
          <span className="absolute right-3 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-error px-1 text-label-s text-on-error">
            {badge}
          </span>
        ) : null}
      </span>
      <span className="text-label-m text-on-surface-variant group-data-[state=active]:text-on-surface">
        {children}
      </span>
    </TabsPrimitive.Trigger>
  );
}

export {
  NavigationBar,
  NavigationBarContent,
  NavigationBarItem,
  NavigationBarList,
};
