"use client";

import * as React from "react";
import { DropdownMenu as MenuPrimitive } from "radix-ui";
import { CheckIcon, ChevronRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";

/** M3 menu: surface-container elevation-2 panel, 48dp list items. */
function Menu({ ...props }: React.ComponentProps<typeof MenuPrimitive.Root>) {
  return <MenuPrimitive.Root data-slot="menu" {...props} />;
}

function MenuTrigger({
  ...props
}: React.ComponentProps<typeof MenuPrimitive.Trigger>) {
  return <MenuPrimitive.Trigger data-slot="menu-trigger" {...props} />;
}

function MenuContent({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.Content>) {
  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Content
        data-slot="menu-content"
        sideOffset={sideOffset}
        className={cn(
          "z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[180px] overflow-y-auto rounded-[4px] bg-surface-container py-2 text-on-surface shadow-[var(--shadow-elevation-2)] data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
          className
        )}
        {...props}
      />
    </MenuPrimitive.Portal>
  );
}

function MenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof MenuPrimitive.Item> & {
  inset?: boolean;
  variant?: "default" | "destructive";
}) {
  return (
    <MenuPrimitive.Item
      data-slot="menu-item"
      data-inset={inset}
      className={cn(
        "flex h-12 cursor-pointer select-none items-center gap-3 px-3 text-body-l text-on-surface outline-none focus:bg-[color-mix(in_srgb,var(--on-surface)_8%,transparent)] active:bg-[color-mix(in_srgb,var(--on-surface)_12%,transparent)] data-[disabled]:pointer-events-none data-[disabled]:opacity-[0.38] data-[inset]:pl-12 [&_svg]:size-6 [&_svg]:shrink-0 [&_svg]:text-on-surface-variant",
        variant === "destructive" && "text-error [&_svg]:text-error",
        className
      )}
      {...props}
    />
  );
}

function MenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.CheckboxItem>) {
  return (
    <MenuPrimitive.CheckboxItem
      data-slot="menu-checkbox-item"
      className={cn(
        "flex h-12 cursor-pointer select-none items-center gap-3 px-3 text-body-l text-on-surface outline-none focus:bg-[color-mix(in_srgb,var(--on-surface)_8%,transparent)] data-[disabled]:pointer-events-none data-[disabled]:opacity-[0.38]",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="flex size-6 items-center justify-center">
        <MenuPrimitive.ItemIndicator>
          <CheckIcon className="size-5 text-on-surface-variant" />
        </MenuPrimitive.ItemIndicator>
      </span>
      {children}
    </MenuPrimitive.CheckboxItem>
  );
}

function MenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.Separator>) {
  return (
    <MenuPrimitive.Separator
      data-slot="menu-separator"
      className={cn("my-2 h-px bg-outline-variant", className)}
      {...props}
    />
  );
}

function MenuShortcut({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="menu-shortcut"
      className={cn("ml-auto text-body-m text-on-surface-variant", className)}
      {...props}
    />
  );
}

function MenuSub({ ...props }: React.ComponentProps<typeof MenuPrimitive.Sub>) {
  return <MenuPrimitive.Sub data-slot="menu-sub" {...props} />;
}

function MenuSubTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.SubTrigger>) {
  return (
    <MenuPrimitive.SubTrigger
      data-slot="menu-sub-trigger"
      className={cn(
        "flex h-12 cursor-pointer select-none items-center gap-3 px-3 text-body-l text-on-surface outline-none focus:bg-[color-mix(in_srgb,var(--on-surface)_8%,transparent)] data-[state=open]:bg-[color-mix(in_srgb,var(--on-surface)_8%,transparent)] [&_svg]:size-6 [&_svg]:text-on-surface-variant",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto" />
    </MenuPrimitive.SubTrigger>
  );
}

function MenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.SubContent>) {
  return (
    <MenuPrimitive.SubContent
      data-slot="menu-sub-content"
      className={cn(
        "z-50 min-w-[180px] rounded-[4px] bg-surface-container py-2 text-on-surface shadow-[var(--shadow-elevation-2)] data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        className
      )}
      {...props}
    />
  );
}

export {
  Menu,
  MenuCheckboxItem,
  MenuContent,
  MenuItem,
  MenuSeparator,
  MenuShortcut,
  MenuSub,
  MenuSubContent,
  MenuSubTrigger,
  MenuTrigger,
};
