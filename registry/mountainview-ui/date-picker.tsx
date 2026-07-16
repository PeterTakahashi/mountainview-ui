"use client";

import * as React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * M3 docked date picker: month grid with paging, an outline around
 * today, and a primary-filled circle on the selection.
 */
const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];

function isSameDay(a: Date | undefined, b: Date) {
  return (
    !!a &&
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function DatePicker({
  className,
  value,
  defaultValue,
  onValueChange,
  ...props
}: Omit<React.ComponentProps<"div">, "defaultValue" | "onChange"> & {
  value?: Date;
  defaultValue?: Date;
  onValueChange?: (date: Date) => void;
}) {
  const [internal, setInternal] = React.useState<Date | undefined>(defaultValue);
  const selected = value ?? internal;
  const [visible, setVisible] = React.useState(
    () => new Date((selected ?? new Date()).getFullYear(), (selected ?? new Date()).getMonth(), 1)
  );

  const select = (d: Date) => {
    if (value === undefined) setInternal(d);
    onValueChange?.(d);
  };

  const year = visible.getFullYear();
  const month = visible.getMonth();
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();

  return (
    <div
      data-slot="date-picker"
      className={cn(
        "w-[328px] select-none rounded-lg bg-surface-high p-3 shadow-[var(--shadow-elevation-2)]",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-between px-2 pb-2">
        <span className="text-label-l text-on-surface-variant">
          {visible.toLocaleDateString(undefined, { month: "long", year: "numeric" })}
        </span>
        <div className="flex items-center">
          <button
            type="button"
            aria-label="Previous month"
            onClick={() => setVisible(new Date(year, month - 1, 1))}
            className="flex size-10 cursor-pointer items-center justify-center rounded-full text-on-surface-variant outline-none state-on-surface focus-visible:ring-2 focus-visible:ring-primary"
          >
            <ChevronLeftIcon className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Next month"
            onClick={() => setVisible(new Date(year, month + 1, 1))}
            className="flex size-10 cursor-pointer items-center justify-center rounded-full text-on-surface-variant outline-none state-on-surface focus-visible:ring-2 focus-visible:ring-primary"
          >
            <ChevronRightIcon className="size-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7">
        {WEEKDAYS.map((w, i) => (
          <span
            key={i}
            className="flex size-10 items-center justify-center text-body-s text-on-surface"
          >
            {w}
          </span>
        ))}
        {Array.from({ length: firstWeekday }, (_, i) => (
          <span key={`pad-${i}`} />
        ))}
        {Array.from({ length: daysInMonth }, (_, i) => {
          const d = new Date(year, month, i + 1);
          const isSelected = isSameDay(selected, d);
          const isToday = isSameDay(today, d);
          return (
            <button
              key={i}
              type="button"
              aria-pressed={isSelected}
              onClick={() => select(d)}
              className={cn(
                "flex size-10 cursor-pointer items-center justify-center rounded-full text-body-m outline-none transition-colors focus-visible:ring-2 focus-visible:ring-primary",
                isSelected
                  ? "bg-primary text-on-primary"
                  : isToday
                    ? "text-primary shadow-[inset_0_0_0_1px_var(--primary)] state-primary"
                    : "text-on-surface state-on-surface"
              )}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export { DatePicker };
