"use client";

import { FolderIcon, ImageIcon, MusicIcon } from "lucide-react";
import { List, ListDivider, ListItem } from "@/registry/mountainview-ui/list";
import { Switch } from "@/registry/mountainview-ui/switch";

export default function ListDemo() {
  return (
    <List className="w-full max-w-sm rounded-md shadow-[var(--shadow-elevation-1)]">
      <ListItem
        leading={<ImageIcon />}
        headline="Photos"
        supportingText="1,204 items · 8.2 GB"
        trailing="Today"
        onClick={() => {}}
      />
      <ListItem
        leading={<MusicIcon />}
        headline="Music"
        supportingText="312 items · 2.1 GB"
        trailing="Mon"
        onClick={() => {}}
      />
      <ListDivider />
      <ListItem
        leading={<FolderIcon />}
        overline="Storage"
        headline="Auto-backup"
        supportingText="Back up new media over Wi-Fi"
        trailing={<Switch defaultChecked />}
      />
    </List>
  );
}
