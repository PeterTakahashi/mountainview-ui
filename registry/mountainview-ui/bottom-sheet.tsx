"use client";

import * as React from "react";
import { Dialog as SheetPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

/** M3 bottom sheet: 28dp top corners, drag handle, surface-container-low. */
function BottomSheet({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="bottom-sheet" {...props} />;
}

function BottomSheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="bottom-sheet-trigger" {...props} />;
}

function BottomSheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="bottom-sheet-close" {...props} />;
}

function BottomSheetContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content>) {
  return (
    <SheetPrimitive.Portal>
      <SheetPrimitive.Overlay
        data-slot="bottom-sheet-overlay"
        className="fixed inset-0 z-50 bg-scrim/40 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0"
      />
      <SheetPrimitive.Content
        data-slot="bottom-sheet-content"
        className={cn(
          "fixed inset-x-0 bottom-0 z-50 mx-auto flex max-h-[85dvh] w-full max-w-2xl flex-col rounded-t-xl bg-surface-low text-on-surface shadow-[var(--shadow-elevation-1)] outline-none data-[state=open]:animate-in data-[state=open]:slide-in-from-bottom data-[state=open]:duration-300 data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom data-[state=closed]:duration-200",
          className
        )}
        {...props}
      >
        <div
          aria-hidden
          className="mx-auto mb-2 mt-[22px] h-1 w-8 shrink-0 rounded-full bg-on-surface-variant/40"
        />
        {children}
      </SheetPrimitive.Content>
    </SheetPrimitive.Portal>
  );
}

function BottomSheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="bottom-sheet-title"
      className={cn("px-6 pb-2 text-title-l text-on-surface", className)}
      {...props}
    />
  );
}

export {
  BottomSheet,
  BottomSheetClose,
  BottomSheetContent,
  BottomSheetTitle,
  BottomSheetTrigger,
};
