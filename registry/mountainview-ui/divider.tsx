import * as React from "react";

import { cn } from "@/lib/utils";

/** M3 divider: 1dp outline-variant, full-width or inset. */
function Divider({
  className,
  inset,
  orientation = "horizontal",
  ...props
}: React.ComponentProps<"div"> & {
  /** Indent past a leading icon/avatar column (16dp both sides). */
  inset?: boolean;
  orientation?: "horizontal" | "vertical";
}) {
  return (
    <div
      data-slot="divider"
      role="separator"
      aria-orientation={orientation}
      className={cn(
        "shrink-0 bg-outline-variant",
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        inset && orientation === "horizontal" && "mx-4 w-auto",
        className
      )}
      {...props}
    />
  );
}

export { Divider };
