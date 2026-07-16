"use client";

import { PlusIcon, SendIcon } from "lucide-react";
import { Button } from "@/registry/mountainview-ui/button";

export default function ButtonDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button>Filled</Button>
      <Button variant="tonal">Tonal</Button>
      <Button variant="elevated">Elevated</Button>
      <Button variant="outlined">
        <PlusIcon /> Outlined
      </Button>
      <Button variant="text">
        <SendIcon /> Text
      </Button>
    </div>
  );
}
