"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * M3 icon buttons: standard, filled, tonal, outlined — with an
 * optional toggle (aria-pressed) state.
 */
const iconButtonVariants = cva(
  "relative inline-flex size-10 shrink-0 cursor-pointer select-none items-center justify-center overflow-hidden rounded-full outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:pointer-events-none disabled:opacity-[0.38] [&_svg]:size-6 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        standard: "text-on-surface-variant state-on-surface aria-pressed:text-primary",
        filled:
          "bg-surface-highest text-primary state-primary aria-pressed:bg-primary aria-pressed:text-on-primary aria-pressed:state-on-primary",
        tonal:
          "bg-surface-highest text-on-surface-variant state-on-surface aria-pressed:bg-secondary-container aria-pressed:text-on-secondary-container",
        outlined:
          "text-on-surface-variant shadow-[inset_0_0_0_1px_var(--outline)] state-on-surface aria-pressed:bg-inverse-surface aria-pressed:text-inverse-on-surface aria-pressed:shadow-none",
      },
    },
    defaultVariants: {
      variant: "standard",
    },
  }
);

function IconButton({
  className,
  variant,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof iconButtonVariants>) {
  return (
    <button
      data-slot="icon-button"
      className={cn(iconButtonVariants({ variant, className }))}
      {...props}
    />
  );
}

export { IconButton, iconButtonVariants };
