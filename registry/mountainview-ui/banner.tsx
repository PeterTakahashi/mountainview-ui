"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Inline contained banner, Gmail-style: icon, message, and
 * trailing text actions on secondary-container.
 */
function Banner({
  className,
  icon,
  actions,
  variant = "info",
  children,
  ...props
}: React.ComponentProps<"div"> & {
  icon?: React.ReactNode;
  /** Trailing action row, typically text Buttons. */
  actions?: React.ReactNode;
  variant?: "info" | "error";
}) {
  return (
    <div
      data-slot="banner"
      role="status"
      className={cn(
        "flex w-full flex-wrap items-center gap-3 rounded-md px-4 py-3",
        variant === "info" && "bg-secondary-container text-on-secondary-container",
        variant === "error" && "bg-error-container text-on-error-container",
        className
      )}
      {...props}
    >
      {icon ? (
        <span className="shrink-0 [&_svg]:size-5">{icon}</span>
      ) : null}
      <p className="min-w-0 flex-1 text-body-m">{children}</p>
      {actions ? (
        <span className="ml-auto flex shrink-0 items-center gap-1">{actions}</span>
      ) : null}
    </div>
  );
}

export { Banner };
