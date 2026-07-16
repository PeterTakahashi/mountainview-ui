"use client";

import * as React from "react";
import { Tabs as TabsPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

/**
 * M3 primary tabs: full-width bar with an active pill indicator
 * hugging the label.
 */
function Tabs({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-4", className)}
      {...props}
    />
  );
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "flex h-12 w-full items-stretch shadow-[inset_0_-1px_0_0_var(--surface-container-highest)]",
        className
      )}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "group relative flex flex-1 cursor-pointer select-none items-center justify-center gap-2 px-4 text-title-s text-on-surface-variant outline-none transition-colors state-on-surface focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary data-[state=active]:text-primary [&_svg]:size-[18px]",
        className
      )}
      {...props}
    >
      {children}
      <span
        aria-hidden
        className="absolute inset-x-1/2 bottom-0 h-[3px] rounded-t-full bg-primary transition-all duration-200 ease-[var(--ease-emphasized)] group-data-[state=active]:inset-x-4"
      />
    </TabsPrimitive.Trigger>
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsContent, TabsList, TabsTrigger };
