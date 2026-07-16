"use client";

import { CopyIcon, PencilIcon, Share2Icon, Trash2Icon } from "lucide-react";
import {
  BottomSheet,
  BottomSheetContent,
  BottomSheetTitle,
  BottomSheetTrigger,
} from "@/registry/mountainview-ui/bottom-sheet";
import { Button } from "@/registry/mountainview-ui/button";
import { List, ListItem } from "@/registry/mountainview-ui/list";

export default function BottomSheetDemo() {
  return (
    <BottomSheet>
      <BottomSheetTrigger asChild>
        <Button variant="tonal">Show options</Button>
      </BottomSheetTrigger>
      <BottomSheetContent>
        <BottomSheetTitle>IMG_2027.jpg</BottomSheetTitle>
        <List className="bg-transparent pb-6">
          <ListItem leading={<Share2Icon />} headline="Share" onClick={() => {}} />
          <ListItem leading={<PencilIcon />} headline="Edit" onClick={() => {}} />
          <ListItem leading={<CopyIcon />} headline="Make a copy" onClick={() => {}} />
          <ListItem leading={<Trash2Icon />} headline="Move to trash" onClick={() => {}} />
        </List>
      </BottomSheetContent>
    </BottomSheet>
  );
}
