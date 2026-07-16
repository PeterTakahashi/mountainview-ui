"use client";

import * as React from "react";
import { SearchIcon, XIcon } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * M3 search bar: a 56dp full-round field on surface-container-high
 * that expands into a search view with a suggestion list.
 */
function SearchBar({
  className,
  leading,
  trailing,
  suggestions,
  onValueChange,
  ...props
}: Omit<React.ComponentProps<"input">, "children"> & {
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  /** Suggestion panel shown while the bar has focus. */
  suggestions?: React.ReactNode;
  onValueChange?: (value: string) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(String(props.defaultValue ?? ""));
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <div data-slot="search-bar" className={cn("relative w-full", className)}>
      <div
        className={cn(
          "flex h-14 w-full items-center gap-3 bg-surface-high px-4 transition-[border-radius] duration-200",
          open && suggestions ? "rounded-t-xl" : "rounded-full"
        )}
      >
        <span className="shrink-0 text-on-surface-variant [&_svg]:size-6">
          {leading ?? <SearchIcon />}
        </span>
        <input
          ref={inputRef}
          data-slot="search-bar-input"
          className="h-full w-full bg-transparent text-body-l text-on-surface outline-none placeholder:text-on-surface-variant"
          onFocus={(e) => {
            setOpen(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            // Delay so suggestion clicks land first.
            setTimeout(() => setOpen(false), 150);
            props.onBlur?.(e);
          }}
          {...props}
          value={props.value ?? value}
          onChange={(e) => {
            setValue(e.target.value);
            onValueChange?.(e.target.value);
            props.onChange?.(e);
          }}
        />
        {value ? (
          <button
            type="button"
            aria-label="Clear"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => {
              setValue("");
              onValueChange?.("");
              inputRef.current?.focus();
            }}
            className="flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-full text-on-surface-variant hover:bg-[color-mix(in_srgb,var(--on-surface)_8%,transparent)]"
          >
            <XIcon className="size-5" />
          </button>
        ) : (
          trailing
        )}
      </div>
      {open && suggestions ? (
        <div
          data-slot="search-bar-view"
          className="absolute inset-x-0 top-full z-50 overflow-hidden rounded-b-xl bg-surface-high pb-2 shadow-[var(--shadow-elevation-3)]"
        >
          <div className="mx-4 h-px bg-outline-variant" />
          {suggestions}
        </div>
      ) : null}
    </div>
  );
}

export { SearchBar };
