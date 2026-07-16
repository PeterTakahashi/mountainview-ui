"use client";

import * as React from "react";
import { CheckIcon, XIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * M3 chips: assist, filter (selectable with a leading check), and
 * input (with trailing remove). 32dp tall, 8dp corners.
 */
const chipVariants = cva(
  "inline-flex h-8 shrink-0 cursor-pointer select-none items-center gap-2 rounded-sm px-4 text-label-l outline-none transition-[background-color,box-shadow] duration-150 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:pointer-events-none disabled:opacity-[0.38] [&_svg]:size-[18px] [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        assist:
          "text-on-surface shadow-[inset_0_0_0_1px_var(--outline)] state-on-surface [&_svg]:text-primary",
        filter:
          "text-on-surface-variant shadow-[inset_0_0_0_1px_var(--outline)] state-on-surface aria-pressed:bg-secondary-container aria-pressed:text-on-secondary-container aria-pressed:shadow-none aria-pressed:pl-2",
        input:
          "text-on-surface-variant shadow-[inset_0_0_0_1px_var(--outline)] state-on-surface pr-2",
      },
    },
    defaultVariants: { variant: "assist" },
  }
);

function Chip({
  className,
  variant,
  selected,
  onRemove,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof chipVariants> & {
    /** Filter chips: selected state (shows the leading check). */
    selected?: boolean;
    /** Input chips: show a trailing remove affordance. */
    onRemove?: () => void;
  }) {
  return (
    <button
      type="button"
      data-slot="chip"
      aria-pressed={variant === "filter" ? selected : undefined}
      className={cn(chipVariants({ variant }), className)}
      {...props}
    >
      {variant === "filter" && selected ? (
        <CheckIcon strokeWidth={2.5} />
      ) : null}
      {children}
      {variant === "input" && onRemove ? (
        <span
          role="button"
          tabIndex={-1}
          aria-label="Remove"
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="flex items-center justify-center rounded-full hover:bg-[color-mix(in_srgb,var(--on-surface)_12%,transparent)]"
        >
          <XIcon />
        </span>
      ) : null}
    </button>
  );
}

export { Chip, chipVariants };
