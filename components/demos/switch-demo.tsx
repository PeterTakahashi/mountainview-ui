"use client";

import { Switch } from "@/registry/mountainview-ui/switch";

export default function SwitchDemo() {
  return (
    <div className="flex items-center gap-6">
      <label className="flex items-center gap-3 text-body-l">
        Wi-Fi <Switch defaultChecked />
      </label>
      <label className="flex items-center gap-3 text-body-l">
        Bluetooth <Switch />
      </label>
    </div>
  );
}
