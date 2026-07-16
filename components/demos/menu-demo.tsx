"use client";

import { ArchiveIcon, CopyIcon, PencilIcon, Trash2Icon } from "lucide-react";
import { Button } from "@/registry/mountainview-ui/button";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuSeparator,
  MenuShortcut,
  MenuTrigger,
} from "@/registry/mountainview-ui/menu";

export default function MenuDemo() {
  return (
    <Menu>
      <MenuTrigger asChild>
        <Button variant="outlined">Open menu</Button>
      </MenuTrigger>
      <MenuContent align="start">
        <MenuItem>
          <PencilIcon /> Rename <MenuShortcut>Ctrl+R</MenuShortcut>
        </MenuItem>
        <MenuItem>
          <CopyIcon /> Duplicate
        </MenuItem>
        <MenuItem>
          <ArchiveIcon /> Archive
        </MenuItem>
        <MenuSeparator />
        <MenuItem variant="destructive">
          <Trash2Icon /> Delete
        </MenuItem>
      </MenuContent>
    </Menu>
  );
}
