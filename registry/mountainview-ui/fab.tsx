"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * M3 floating action button — regular, small, large, and extended
 * (icon + label), on primary-container with elevation 3.
 */
const fabVariants = cva(
  "relative inline-flex shrink-0 cursor-pointer select-none items-center justify-center gap-3 overflow-hidden whitespace-nowrap shadow-[var(--shadow-elevation-3)] outline-none transition-[background-color,box-shadow] duration-200 hover:shadow-[var(--shadow-elevation-4)] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:pointer-events-none disabled:opacity-[0.38] [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-container text-on-primary-container state-on-secondary-container hover:bg-[color-mix(in_srgb,var(--on-primary-container)_8%,var(--primary-container))] active:bg-[color-mix(in_srgb,var(--on-primary-container)_12%,var(--primary-container))]",
        secondary:
          "bg-secondary-container text-on-secondary-container state-on-secondary-container",
        tertiary:
          "bg-tertiary-container text-on-tertiary-container hover:bg-[color-mix(in_srgb,var(--on-tertiary-container)_8%,var(--tertiary-container))] active:bg-[color-mix(in_srgb,var(--on-tertiary-container)_12%,var(--tertiary-container))]",
        surface:
          "bg-surface-high text-primary state-primary",
      },
      size: {
        sm: "size-10 rounded-md [&_svg]:size-6",
        default: "size-14 rounded-lg [&_svg]:size-6",
        lg: "size-24 rounded-[28px] [&_svg]:size-9",
        extended: "h-14 rounded-lg px-4 text-label-l [&_svg]:size-6",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

function Fab({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof fabVariants>) {
  return (
    <button
      data-slot="fab"
      className={cn(fabVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Fab, fabVariants };
