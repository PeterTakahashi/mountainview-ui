"use client";

import * as React from "react";
import { Slider as SliderPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

/**
 * M3 slider: tall rounded active track, narrow handle bar, and a
 * stop indicator dot at the end of the inactive track.
 */
function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min],
    [value, defaultValue, min]
  );

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        "relative flex w-full touch-none select-none items-center py-2 data-[disabled]:opacity-[0.38]",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className="relative h-4 grow overflow-hidden rounded-full bg-secondary-container"
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className="absolute h-full rounded-l-full bg-primary"
        />
        <span
          aria-hidden
          className="absolute right-1.5 top-1/2 size-1 -translate-y-1/2 rounded-full bg-primary"
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className="block h-11 w-1 shrink-0 rounded-full bg-primary shadow-[0_0_0_4px_var(--surface)] outline-none transition-[width] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-surface active:w-0.5"
        />
      ))}
    </SliderPrimitive.Root>
  );
}

export { Slider };
