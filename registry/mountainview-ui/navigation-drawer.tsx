"use client";

import * as React from "react";
import { Dialog as DrawerPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

/**
 * M3 navigation drawer. `NavigationDrawer` renders the standard
 * (in-layout) variant; `ModalNavigationDrawer` slides over a scrim.
 * Items use the rounded-end active indicator.
 */
function NavigationDrawer({
  className,
  ...props
}: React.ComponentProps<"nav">) {
  return (
    <nav
      data-slot="navigation-drawer"
      className={cn(
        "flex h-full w-[300px] shrink-0 flex-col gap-0.5 overflow-y-auto rounded-r-lg bg-surface-low px-3 py-4",
        className
      )}
      {...props}
    />
  );
}

function ModalNavigationDrawer({
  trigger,
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root> & {
  trigger: React.ReactNode;
}) {
  return (
    <DrawerPrimitive.Root data-slot="modal-navigation-drawer" {...props}>
      <DrawerPrimitive.Trigger asChild>{trigger}</DrawerPrimitive.Trigger>
      <DrawerPrimitive.Portal>
        <DrawerPrimitive.Overlay className="fixed inset-0 z-50 bg-scrim/40 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />
        <DrawerPrimitive.Content
          className="fixed inset-y-0 left-0 z-50 flex w-[300px] flex-col gap-0.5 overflow-y-auto rounded-r-lg bg-surface-low px-3 py-4 outline-none data-[state=open]:animate-in data-[state=open]:slide-in-from-left data-[state=open]:duration-300 data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left data-[state=closed]:duration-200"
        >
          <DrawerPrimitive.Title className="sr-only">
            Navigation
          </DrawerPrimitive.Title>
          {children}
        </DrawerPrimitive.Content>
      </DrawerPrimitive.Portal>
    </DrawerPrimitive.Root>
  );
}

function NavigationDrawerHeadline({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="navigation-drawer-headline"
      className={cn("px-4 pb-2 pt-4 text-title-s text-on-surface-variant", className)}
      {...props}
    />
  );
}

function NavigationDrawerItem({
  className,
  icon,
  badge,
  active,
  children,
  ...props
}: React.ComponentProps<"button"> & {
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      data-slot="navigation-drawer-item"
      data-active={active || undefined}
      className={cn(
        "flex h-14 w-full cursor-pointer select-none items-center gap-3 rounded-full px-4 text-left text-label-l outline-none transition-colors focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary [&_svg]:size-6 [&_svg]:shrink-0",
        active
          ? "bg-secondary-container text-on-secondary-container"
          : "text-on-surface-variant state-on-surface",
        className
      )}
      {...props}
    >
      {icon}
      <span className="min-w-0 flex-1 truncate">{children}</span>
      {badge ? <span className="shrink-0 text-label-l">{badge}</span> : null}
    </button>
  );
}

export {
  ModalNavigationDrawer,
  NavigationDrawer,
  NavigationDrawerHeadline,
  NavigationDrawerItem,
};
