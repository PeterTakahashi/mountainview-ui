"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * M3 text fields, filled and outlined, with the floating label
 * that rises when the field is focused or populated.
 */
const wrapperVariants = cva("group relative w-full", {
  variants: {
    variant: {
      filled: "",
      outlined: "",
    },
  },
  defaultVariants: { variant: "filled" },
});

function TextField({
  className,
  variant = "filled",
  label,
  supportingText,
  leadingIcon,
  trailingIcon,
  error,
  id: idProp,
  ...props
}: Omit<React.ComponentProps<"input">, "placeholder"> &
  VariantProps<typeof wrapperVariants> & {
    label: string;
    supportingText?: string;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
    error?: boolean;
  }) {
  const autoId = React.useId();
  const id = idProp ?? autoId;
  const hasLeading = Boolean(leadingIcon);

  const accent = error ? "var(--error)" : "var(--primary)";

  return (
    <div data-slot="text-field" className={cn(wrapperVariants({ variant }), className)}>
      <div
        className={cn(
          "relative flex h-14 w-full items-center gap-3 px-4 transition-[box-shadow,background-color]",
          variant === "filled" &&
            "rounded-t-[4px] bg-surface-highest shadow-[inset_0_-1px_0_0_var(--on-surface-variant)] focus-within:shadow-[inset_0_-2px_0_0_var(--tf-accent)] hover:bg-[color-mix(in_srgb,var(--on-surface)_4%,var(--surface-container-highest))]",
          variant === "outlined" &&
            "rounded-[4px] shadow-[inset_0_0_0_1px_var(--outline)] focus-within:shadow-[inset_0_0_0_2px_var(--tf-accent)]",
          error && variant === "filled" && "shadow-[inset_0_-2px_0_0_var(--error)]",
          error && variant === "outlined" && "shadow-[inset_0_0_0_2px_var(--error)]"
        )}
        style={{ "--tf-accent": accent } as React.CSSProperties}
      >
        {leadingIcon ? (
          <span className="shrink-0 text-on-surface-variant [&_svg]:size-6">{leadingIcon}</span>
        ) : null}
        <div className="relative flex h-full min-w-0 flex-1 items-center">
          <input
            id={id}
            data-slot="text-field-input"
            placeholder=" "
            className={cn(
              "peer h-full w-full bg-transparent text-body-l text-on-surface outline-none disabled:cursor-not-allowed disabled:opacity-[0.38]",
              variant === "filled" && "pt-4"
            )}
            {...props}
          />
          <label
            htmlFor={id}
            className={cn(
              "pointer-events-none absolute left-0 origin-left transition-all duration-150 ease-[var(--ease-emphasized)]",
              error ? "text-error" : "text-on-surface-variant peer-focus:text-(--tf-accent)",
              variant === "filled" &&
                "top-1/2 -translate-y-1/2 text-body-l peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-body-s peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:translate-y-0 peer-not-placeholder-shown:text-body-s",
              variant === "outlined" &&
                cn(
                  "top-1/2 -translate-y-1/2 text-body-l",
                  "peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:bg-surface peer-focus:px-1 peer-focus:text-body-s",
                  "peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:-translate-y-1/2 peer-not-placeholder-shown:bg-surface peer-not-placeholder-shown:px-1 peer-not-placeholder-shown:text-body-s",
                  hasLeading &&
                    "peer-focus:-ml-9 peer-not-placeholder-shown:-ml-9"
                )
            )}
          >
            {label}
          </label>
        </div>
        {trailingIcon ? (
          <span className="shrink-0 text-on-surface-variant [&_svg]:size-6">{trailingIcon}</span>
        ) : null}
      </div>
      {supportingText ? (
        <p
          data-slot="text-field-supporting"
          className={cn(
            "px-4 pt-1 text-body-s",
            error ? "text-error" : "text-on-surface-variant"
          )}
        >
          {supportingText}
        </p>
      ) : null}
    </div>
  );
}

export { TextField };
