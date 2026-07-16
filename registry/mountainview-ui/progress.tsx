"use client";

import * as React from "react";
import { Progress as ProgressPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

/**
 * M3 progress indicators: the linear bar with a stop dot and a
 * gap, plus a circular indeterminate spinner.
 */
function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  const pct = value ?? 0;

  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn("relative h-1 w-full", className)}
      {...props}
    >
      <div
        className="absolute inset-y-0 left-0 rounded-full bg-primary transition-[width] duration-300"
        style={{ width: `calc(${pct}% - 2px)` }}
      />
      <div
        className="absolute inset-y-0 rounded-full bg-secondary-container transition-[left] duration-300"
        style={{ left: `calc(${pct}% + 2px)`, right: "8px" }}
      />
      <span className="absolute right-0 top-1/2 size-1 -translate-y-1/2 rounded-full bg-primary" />
    </ProgressPrimitive.Root>
  );
}

/** Circular indeterminate indicator. */
function CircularProgress({
  className,
  size = 40,
  ...props
}: React.ComponentProps<"span"> & { size?: number }) {
  const stroke = size * 0.105;
  const r = (size - stroke) / 2;

  return (
    <span
      data-slot="circular-progress"
      role="progressbar"
      className={cn("inline-block animate-spin text-primary [animation-duration:1.2s]", className)}
      style={{ width: size, height: size }}
      {...props}
    >
      <svg width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${2 * Math.PI * r * 0.72} ${2 * Math.PI * r * 0.28}`}
        />
      </svg>
    </span>
  );
}

export { CircularProgress, Progress };
