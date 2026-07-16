import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * M3 badges: the small 6dp error dot and the large numbered badge.
 * Absolutely position over an icon, or use inline.
 */
function Badge({
  className,
  children,
  ...props
}: React.ComponentProps<"span">) {
  const small = children === undefined || children === null;

  return (
    <span
      data-slot="badge"
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-error text-on-error",
        small ? "size-1.5" : "h-4 min-w-4 px-1 text-label-s",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export { Badge };
