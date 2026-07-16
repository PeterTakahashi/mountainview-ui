"use client";

import { SearchIcon, XIcon } from "lucide-react";
import { TextField } from "@/registry/mountainview-ui/text-field";

export default function TextFieldDemo() {
  return (
    <div className="flex w-80 flex-col gap-6">
      <TextField label="Email" supportingText="We never share your address" />
      <TextField
        variant="outlined"
        label="Search settings"
        leadingIcon={<SearchIcon />}
        trailingIcon={<XIcon />}
      />
      <TextField
        variant="outlined"
        label="Username"
        defaultValue="mountain_view"
        error
        supportingText="Already taken"
      />
    </div>
  );
}
