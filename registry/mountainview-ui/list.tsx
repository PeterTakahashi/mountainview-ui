"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * M3 lists: one/two/three-line items with leading icons, avatars,
 * and trailing supporting text.
 */
function List({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="list"
      className={cn("flex w-full flex-col bg-surface py-2", className)}
      {...props}
    />
  );
}

function ListItem({
  className,
  leading,
  overline,
  headline,
  supportingText,
  trailing,
  onClick,
  ...props
}: Omit<React.ComponentProps<"li">, "onClick"> & {
  /** Leading icon or avatar. */
  leading?: React.ReactNode;
  overline?: React.ReactNode;
  headline: React.ReactNode;
  supportingText?: React.ReactNode;
  /** Trailing icon, meta text, or control. */
  trailing?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
}) {
  const interactive = Boolean(onClick);
  const Inner = interactive ? "button" : "div";

  return (
    <li data-slot="list-item" className={cn("flex", className)} {...props}>
      <Inner
        {...(interactive ? { type: "button" as const, onClick } : {})}
        className={cn(
          "flex min-h-14 w-full items-center gap-4 px-4 py-2 text-left outline-none",
          interactive &&
            "cursor-pointer transition-colors state-on-surface focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
        )}
      >
        {leading ? (
          <span className="flex shrink-0 items-center justify-center text-on-surface-variant [&_svg]:size-6">
            {leading}
          </span>
        ) : null}
        <span className="flex min-w-0 flex-1 flex-col">
          {overline ? (
            <span className="text-label-m text-on-surface-variant">{overline}</span>
          ) : null}
          <span className="truncate text-body-l text-on-surface">{headline}</span>
          {supportingText ? (
            <span className="line-clamp-2 text-body-m text-on-surface-variant">
              {supportingText}
            </span>
          ) : null}
        </span>
        {trailing ? (
          <span className="flex shrink-0 items-center text-label-s text-on-surface-variant [&_svg]:size-6">
            {trailing}
          </span>
        ) : null}
      </Inner>
    </li>
  );
}

function ListDivider({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="list-divider"
      role="separator"
      className={cn("my-0 ml-4 h-px bg-outline-variant", className)}
      {...props}
    />
  );
}

export { List, ListDivider, ListItem };
