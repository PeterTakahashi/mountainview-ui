"use client";

import * as React from "react";
import { Slot } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * M3 common buttons: filled, tonal, outlined, text, and elevated.
 * Fully rounded, 40dp tall, with 8%/12% state layers.
 */
const buttonVariants = cva(
  "relative inline-flex shrink-0 cursor-pointer select-none items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full text-label-l outline-none transition-[background-color,box-shadow] duration-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:pointer-events-none disabled:opacity-[0.38] [&_svg]:pointer-events-none [&_svg]:size-[18px] [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        filled: "bg-primary text-on-primary state-on-primary",
        tonal:
          "bg-secondary-container text-on-secondary-container state-on-secondary-container",
        outlined:
          "text-primary shadow-[inset_0_0_0_1px_var(--outline)] state-primary",
        text: "text-primary state-primary",
        elevated:
          "bg-surface-low text-primary shadow-[var(--shadow-elevation-1)] state-primary hover:shadow-[var(--shadow-elevation-2)]",
      },
      size: {
        default: "h-10 px-6 has-[>svg:first-child]:pl-4",
        sm: "h-8 px-4 text-label-m has-[>svg:first-child]:pl-3 [&_svg]:size-4",
        lg: "h-12 px-7 text-title-m has-[>svg:first-child]:pl-5 [&_svg]:size-5",
      },
    },
    defaultVariants: {
      variant: "filled",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
