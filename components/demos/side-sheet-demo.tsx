"use client";

import { Button } from "@/registry/mountainview-ui/button";
import { Checkbox } from "@/registry/mountainview-ui/checkbox";
import {
  SideSheet,
  SideSheetClose,
  SideSheetContent,
  SideSheetTrigger,
} from "@/registry/mountainview-ui/side-sheet";

export default function SideSheetDemo() {
  return (
    <SideSheet>
      <SideSheetTrigger asChild>
        <Button variant="outlined">Filters</Button>
      </SideSheetTrigger>
      <SideSheetContent title="Filters">
        <div className="flex flex-col gap-4">
          {["Free cancellation", "Pet friendly", "Pool", "Breakfast included"].map((f, i) => (
            <label key={f} className="flex items-center gap-4 text-body-l">
              <Checkbox defaultChecked={i < 2} /> {f}
            </label>
          ))}
          <div className="flex gap-2 pt-4">
            <SideSheetClose asChild>
              <Button className="flex-1">Apply</Button>
            </SideSheetClose>
            <Button variant="outlined" className="flex-1">Reset</Button>
          </div>
        </div>
      </SideSheetContent>
    </SideSheet>
  );
}
