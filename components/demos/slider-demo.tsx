"use client";

import { Slider } from "@/registry/mountainview-ui/slider";

export default function SliderDemo() {
  return (
    <div className="w-72">
      <Slider defaultValue={[60]} max={100} step={1} />
    </div>
  );
}
