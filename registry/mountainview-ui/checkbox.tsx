"use client";

import * as React from "react";
import { Checkbox as CheckboxPrimitive } from "radix-ui";
import { CheckIcon, MinusIcon } from "lucide-react";

import { cn } from "@/lib/utils";

/** M3 checkbox: 18dp rounded-sm box, 2dp outline, primary fill. */
function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer size-[18px] shrink-0 cursor-pointer rounded-[2px] shadow-[inset_0_0_0_2px_var(--on-surface-variant)] outline-none transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:cursor-not-allowed disabled:opacity-[0.38] data-[state=checked]:bg-primary data-[state=checked]:shadow-none data-[state=indeterminate]:bg-primary data-[state=indeterminate]:shadow-none",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-on-primary"
      >
        {props.checked === "indeterminate" ? (
          <MinusIcon className="size-3.5" strokeWidth={3} />
        ) : (
          <CheckIcon className="size-3.5" strokeWidth={3} />
        )}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
