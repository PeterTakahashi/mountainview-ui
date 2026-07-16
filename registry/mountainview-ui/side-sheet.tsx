"use client";

import * as React from "react";
import { Dialog as SheetPrimitive } from "radix-ui";
import { XIcon } from "lucide-react";

import { cn } from "@/lib/utils";

/** M3 side sheet: 400dp panel from the trailing edge. */
function SideSheet({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="side-sheet" {...props} />;
}

function SideSheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="side-sheet-trigger" {...props} />;
}

function SideSheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="side-sheet-close" {...props} />;
}

function SideSheetContent({
  className,
  title,
  children,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  title: React.ReactNode;
}) {
  return (
    <SheetPrimitive.Portal>
      <SheetPrimitive.Overlay className="fixed inset-0 z-50 bg-scrim/40 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />
      <SheetPrimitive.Content
        data-slot="side-sheet-content"
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-[min(400px,calc(100vw-56px))] flex-col rounded-l-lg bg-surface-low outline-none data-[state=open]:animate-in data-[state=open]:slide-in-from-right data-[state=open]:duration-300 data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=closed]:duration-200",
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-3 p-4 pl-6">
          <SheetPrimitive.Title className="min-w-0 flex-1 truncate text-title-l text-on-surface">
            {title}
          </SheetPrimitive.Title>
          <SheetPrimitive.Close
            aria-label="Close"
            className="flex size-12 cursor-pointer items-center justify-center rounded-full text-on-surface-variant outline-none state-on-surface focus-visible:ring-2 focus-visible:ring-primary"
          >
            <XIcon className="size-6" />
          </SheetPrimitive.Close>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto px-6 pb-6">{children}</div>
      </SheetPrimitive.Content>
    </SheetPrimitive.Portal>
  );
}

export { SideSheet, SideSheetClose, SideSheetContent, SideSheetTrigger };
