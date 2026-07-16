"use client";

import { RadioGroup, RadioGroupItem } from "@/registry/mountainview-ui/radio-group";

export default function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="wifi">
      <label className="flex items-center gap-4 text-body-l">
        <RadioGroupItem value="always" /> Always back up
      </label>
      <label className="flex items-center gap-4 text-body-l">
        <RadioGroupItem value="wifi" /> Over Wi-Fi only
      </label>
      <label className="flex items-center gap-4 text-body-l">
        <RadioGroupItem value="never" /> Never
      </label>
    </RadioGroup>
  );
}
