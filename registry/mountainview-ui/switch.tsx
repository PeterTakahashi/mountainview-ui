"use client";

import * as React from "react";
import { Switch as SwitchPrimitive } from "radix-ui";
import { CheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * M3 switch: 52x32 track with an outline when off, and a thumb
 * that grows and shows a check icon when on.
 */
function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer inline-flex h-8 w-[52px] shrink-0 cursor-pointer items-center rounded-full outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:cursor-not-allowed disabled:opacity-[0.38] data-[state=unchecked]:bg-surface-highest data-[state=unchecked]:shadow-[inset_0_0_0_2px_var(--outline)] data-[state=checked]:bg-primary",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none flex items-center justify-center rounded-full transition-all duration-200 ease-[var(--ease-emphasized)]",
          "data-[state=unchecked]:ml-[7px] data-[state=unchecked]:size-4 data-[state=unchecked]:bg-outline",
          "data-[state=checked]:ml-[26px] data-[state=checked]:size-6 data-[state=checked]:bg-on-primary data-[state=checked]:text-primary"
        )}
      >
        <CheckIcon className="hidden size-4 [[data-state=checked]_&]:block" strokeWidth={3} />
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  );
}

export { Switch };
