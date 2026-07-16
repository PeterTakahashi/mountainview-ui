"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * M3 time picker, input variant: two 2-digit fields on
 * surface-container-highest with a primary-tinted focus, and an
 * AM/PM selector.
 */
function TimePicker({
  className,
  value,
  defaultValue = { hour: 7, minute: 30, period: "AM" },
  onValueChange,
  ...props
}: Omit<React.ComponentProps<"div">, "defaultValue" | "onChange"> & {
  value?: { hour: number; minute: number; period: "AM" | "PM" };
  defaultValue?: { hour: number; minute: number; period: "AM" | "PM" };
  onValueChange?: (v: { hour: number; minute: number; period: "AM" | "PM" }) => void;
}) {
  const [internal, setInternal] = React.useState(defaultValue);
  const time = value ?? internal;

  const set = (next: typeof time) => {
    if (value === undefined) setInternal(next);
    onValueChange?.(next);
  };

  const field = (
    kind: "hour" | "minute",
    val: number,
    max: number,
    min: number
  ) => (
    <label className="flex flex-col gap-1.5">
      <input
        type="number"
        aria-label={kind}
        value={String(val).padStart(2, "0")}
        min={min}
        max={max}
        onChange={(e) => {
          const n = Math.max(min, Math.min(max, Number(e.target.value) || min));
          set({ ...time, [kind]: n });
        }}
        className="h-[72px] w-[96px] rounded-sm bg-surface-highest text-center text-display-s text-on-surface outline-none transition-shadow [appearance:textfield] focus:bg-primary-container focus:text-on-primary-container focus:shadow-[inset_0_0_0_2px_var(--primary)] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      />
      <span className="text-body-s text-on-surface-variant">
        {kind === "hour" ? "Hour" : "Minute"}
      </span>
    </label>
  );

  return (
    <div
      data-slot="time-picker"
      className={cn(
        "inline-flex flex-col gap-3 rounded-xl bg-surface-high p-6 shadow-[var(--shadow-elevation-2)]",
        className
      )}
      {...props}
    >
      <p className="text-label-m text-on-surface-variant">Enter time</p>
      <div className="flex items-start gap-3">
        {field("hour", time.hour, 12, 1)}
        <span className="pt-3 text-display-s text-on-surface">:</span>
        {field("minute", time.minute, 59, 0)}
        <div
          className="ml-2 flex h-[72px] w-[52px] flex-col overflow-hidden rounded-sm shadow-[inset_0_0_0_1px_var(--outline)]"
          role="radiogroup"
          aria-label="AM or PM"
        >
          {(["AM", "PM"] as const).map((p) => (
            <button
              key={p}
              type="button"
              role="radio"
              aria-checked={time.period === p}
              onClick={() => set({ ...time, period: p })}
              className={cn(
                "flex-1 cursor-pointer text-label-l outline-none transition-colors first:shadow-[inset_0_-0.5px_0_0_var(--outline)]",
                time.period === p
                  ? "bg-tertiary-container text-on-tertiary-container"
                  : "text-on-surface-variant state-on-surface"
              )}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export { TimePicker };
