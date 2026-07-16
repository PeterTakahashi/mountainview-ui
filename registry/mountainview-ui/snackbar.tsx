"use client";

import * as React from "react";
import { Toast as ToastPrimitive } from "radix-ui";
import { XIcon } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * M3 snackbar on inverse-surface, bottom-left. Call
 * `snackbar({ message, action })` anywhere; render `<Snackbars />`
 * once near the root.
 */
type SnackbarData = {
  id: number;
  message: React.ReactNode;
  /** Optional action button label. */
  actionLabel?: string;
  onAction?: () => void;
  /** Show a trailing close icon. */
  closable?: boolean;
  duration?: number;
};

type Listener = (items: SnackbarData[]) => void;

let count = 0;
let items: SnackbarData[] = [];
const listeners = new Set<Listener>();

function emit() {
  for (const l of listeners) l([...items]);
}

function snackbar(data: Omit<SnackbarData, "id">) {
  const id = ++count;
  items = [...items, { id, duration: 4000, ...data }];
  emit();
  return {
    id,
    dismiss: () => {
      items = items.filter((t) => t.id !== id);
      emit();
    },
  };
}

function Snackbars({
  className,
}: {
  className?: string;
}) {
  const [list, setList] = React.useState<SnackbarData[]>([]);

  React.useEffect(() => {
    const listener: Listener = setList;
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, []);

  return (
    <ToastPrimitive.Provider swipeDirection="down">
      {list.map((t) => (
        <ToastPrimitive.Root
          key={t.id}
          duration={t.duration}
          onOpenChange={(open) => {
            if (!open) {
              items = items.filter((x) => x.id !== t.id);
              emit();
            }
          }}
          className={cn(
            "pointer-events-auto flex min-h-12 w-full items-center gap-2 rounded-[4px] bg-inverse-surface py-1 pl-4 pr-2 text-body-m text-inverse-on-surface shadow-[var(--shadow-elevation-3)] outline-none",
            "data-[state=open]:animate-in data-[state=open]:slide-in-from-bottom-4 data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[swipe=end]:animate-out data-[swipe=end]:slide-out-to-bottom-4",
            className
          )}
        >
          <ToastPrimitive.Description className="min-w-0 flex-1 py-2">
            {t.message}
          </ToastPrimitive.Description>
          {t.actionLabel ? (
            <button
              type="button"
              onClick={() => {
                t.onAction?.();
                items = items.filter((x) => x.id !== t.id);
                emit();
              }}
              className="shrink-0 rounded-full px-3 py-2 text-label-l text-inverse-primary outline-none hover:bg-[color-mix(in_srgb,var(--inverse-primary)_8%,transparent)]"
            >
              {t.actionLabel}
            </button>
          ) : null}
          {t.closable ? (
            <ToastPrimitive.Close
              aria-label="Dismiss"
              className="flex size-8 shrink-0 items-center justify-center rounded-full text-inverse-on-surface outline-none hover:bg-[color-mix(in_srgb,var(--inverse-on-surface)_8%,transparent)]"
            >
              <XIcon className="size-4" />
            </ToastPrimitive.Close>
          ) : null}
        </ToastPrimitive.Root>
      ))}
      <ToastPrimitive.Viewport className="fixed bottom-4 left-4 z-[60] flex w-[min(344px,calc(100vw-32px))] flex-col gap-2 outline-none" />
    </ToastPrimitive.Provider>
  );
}

export { snackbar, Snackbars };
