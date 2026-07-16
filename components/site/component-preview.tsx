"use client";

import * as React from "react";

import { CodeBlock } from "@/components/site/code-block";
import {
  SegmentedButton,
  SegmentedButtonItem,
} from "@/registry/mountainview-ui/segmented-button";

export function ComponentPreview({
  code,
  children,
}: {
  code: string;
  children: React.ReactNode;
}) {
  const [view, setView] = React.useState("preview");

  return (
    <div className="flex flex-col gap-4">
      <SegmentedButton
        type="single"
        value={view}
        onValueChange={(v) => v && setView(v)}
        className="w-fit"
      >
        <SegmentedButtonItem value="preview" className="px-6">
          Preview
        </SegmentedButtonItem>
        <SegmentedButtonItem value="code" className="px-6">
          Code
        </SegmentedButtonItem>
      </SegmentedButton>
      {view === "preview" ? (
        <div className="flex min-h-72 items-center justify-center rounded-lg bg-surface-low p-8 shadow-[inset_0_0_0_1px_var(--outline-variant)]">
          {children}
        </div>
      ) : (
        <CodeBlock code={code} />
      )}
    </div>
  );
}
