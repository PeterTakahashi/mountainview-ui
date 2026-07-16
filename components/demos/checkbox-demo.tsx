"use client";

import { Checkbox } from "@/registry/mountainview-ui/checkbox";

export default function CheckboxDemo() {
  return (
    <div className="flex flex-col gap-4">
      <label className="flex items-center gap-4 text-body-l">
        <Checkbox defaultChecked /> Sync photos
      </label>
      <label className="flex items-center gap-4 text-body-l">
        <Checkbox /> Back up over mobile data
      </label>
      <label className="flex items-center gap-4 text-body-l opacity-[0.38]">
        <Checkbox disabled /> Roaming backup (unavailable)
      </label>
    </div>
  );
}
