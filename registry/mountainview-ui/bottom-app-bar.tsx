import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * M3 bottom app bar: 80dp surface-container bar with leading icon
 * actions and a trailing FAB slot.
 */
function BottomAppBar({
  className,
  fab,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  /** Trailing floating action button. */
  fab?: React.ReactNode;
}) {
  return (
    <div
      data-slot="bottom-app-bar"
      className={cn(
        "flex h-20 w-full items-center gap-1 bg-surface-container px-2",
        className
      )}
      {...props}
    >
      {children}
      {fab ? <span className="ml-auto pr-2 [&_[data-slot=fab]]:shadow-none">{fab}</span> : null}
    </div>
  );
}

export { BottomAppBar };
