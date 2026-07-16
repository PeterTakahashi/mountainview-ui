"use client";

import * as React from "react";
import { Tooltip as TooltipPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

/**
 * M3 tooltips: plain (inverse-surface pill) and rich (surface
 * container with subhead, text, and actions).
 */
function TooltipProvider({
  delayDuration = 300,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return <TooltipPrimitive.Provider delayDuration={delayDuration} {...props} />;
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

function TooltipContent({
  className,
  sideOffset = 6,
  rich,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content> & {
  /** Rich variant: surface container, left-aligned, holds actions. */
  rich?: boolean;
}) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "z-50 data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
          rich
            ? "w-72 rounded-md bg-surface-container p-4 text-on-surface-variant shadow-[var(--shadow-elevation-2)]"
            : "rounded-[4px] bg-inverse-surface px-2 py-1 text-body-s text-inverse-on-surface",
          className
        )}
        {...props}
      >
        {children}
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

function TooltipSubhead({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="tooltip-subhead"
      className={cn("pb-1 text-title-s text-on-surface", className)}
      {...props}
    />
  );
}

export { Tooltip, TooltipContent, TooltipProvider, TooltipSubhead, TooltipTrigger };
