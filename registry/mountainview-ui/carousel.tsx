"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * M3 hero carousel: a multi-browse strip of rounded-xl items that
 * snap-scroll, with a large leading item and smaller followers.
 */
function Carousel({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="carousel"
      role="region"
      aria-roledescription="carousel"
      className={cn(
        "flex w-full snap-x snap-mandatory gap-2 overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        className
      )}
      {...props}
    />
  );
}

function CarouselItem({
  className,
  label,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  /** Caption drawn over the bottom edge. */
  label?: React.ReactNode;
}) {
  return (
    <div
      data-slot="carousel-item"
      role="group"
      aria-roledescription="slide"
      className={cn(
        "relative h-56 w-[min(75%,280px)] shrink-0 snap-start overflow-hidden rounded-xl",
        className
      )}
      {...props}
    >
      {children}
      {label ? (
        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-scrim/60 to-transparent p-4 pt-10 text-title-m text-white">
          {label}
        </span>
      ) : null}
    </div>
  );
}

export { Carousel, CarouselItem };
