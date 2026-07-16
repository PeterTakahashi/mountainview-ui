"use client";

import * as React from "react";
import { CheckIcon, CopyIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export function CopyButton({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const [copied, setCopied] = React.useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label="Copy code"
      className={cn(
        "flex size-8 cursor-pointer items-center justify-center rounded-full text-on-surface-variant outline-none transition-colors hover:bg-[color-mix(in_srgb,var(--on-surface)_8%,transparent)] focus-visible:ring-2 focus-visible:ring-primary",
        className
      )}
    >
      {copied ? (
        <CheckIcon className="size-4 text-primary" strokeWidth={2.5} />
      ) : (
        <CopyIcon className="size-4" />
      )}
    </button>
  );
}

export function CodeBlock({
  code,
  className,
  collapsible = false,
}: {
  code: string;
  className?: string;
  collapsible?: boolean;
}) {
  const [expanded, setExpanded] = React.useState(!collapsible);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-md bg-surface-highest",
        className
      )}
    >
      <CopyButton text={code} className="absolute right-2 top-2 z-10" />
      <pre
        className={cn(
          "overflow-x-auto p-4 font-mono text-[12.5px] leading-[1.65] text-on-surface",
          !expanded && "max-h-40"
        )}
      >
        <code>{code}</code>
      </pre>
      {collapsible && !expanded ? (
        <div className="absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-[var(--surface-container-highest)] to-transparent pb-2 pt-8">
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="cursor-pointer rounded-full bg-secondary-container px-4 py-1.5 text-label-m text-on-secondary-container"
          >
            Show more
          </button>
        </div>
      ) : null}
    </div>
  );
}
