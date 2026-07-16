"use client";

import * as React from "react";
import { ToggleGroup as ToggleGroupPrimitive } from "radix-ui";
import { CheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * M3 segmented buttons: outlined, fully-rounded ends, selected
 * segments filled with secondary-container plus a check.
 */
function SegmentedButton({
  className,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Root>) {
  return (
    <ToggleGroupPrimitive.Root
      data-slot="segmented-button"
      className={cn(
        "inline-flex h-10 items-stretch overflow-hidden rounded-full shadow-[inset_0_0_0_1px_var(--outline)] [&>*:not(:first-child)]:shadow-[inset_1px_0_0_0_var(--outline)]",
        className
      )}
      {...props}
    />
  );
}

function SegmentedButtonItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Item>) {
  return (
    <ToggleGroupPrimitive.Item
      data-slot="segmented-button-item"
      className={cn(
        "flex min-w-12 flex-1 cursor-pointer select-none items-center justify-center gap-2 px-4 text-label-l text-on-surface outline-none transition-colors state-on-surface focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-[0.38] data-[state=on]:bg-secondary-container data-[state=on]:text-on-secondary-container [&_svg]:size-[18px] [&_svg]:shrink-0",
        className
      )}
      {...props}
    >
      <CheckIcon className="hidden [[data-state=on]_&]:block" strokeWidth={2.5} />
      {children}
    </ToggleGroupPrimitive.Item>
  );
}

export { SegmentedButton, SegmentedButtonItem };
