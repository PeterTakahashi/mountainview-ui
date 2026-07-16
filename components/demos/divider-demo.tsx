"use client";

import { Divider } from "@/registry/mountainview-ui/divider";

export default function DividerDemo() {
  return (
    <div className="flex w-72 flex-col gap-4">
      <p className="text-body-m">Full width</p>
      <Divider />
      <p className="text-body-m">Inset</p>
      <Divider inset />
      <div className="flex h-8 items-center gap-4 text-body-m">
        <span>Left</span>
        <Divider orientation="vertical" />
        <span>Right</span>
      </div>
    </div>
  );
}
