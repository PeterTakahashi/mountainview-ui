"use client";

import { Trash2Icon } from "lucide-react";
import { Button } from "@/registry/mountainview-ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogIcon,
  DialogTitle,
  DialogTrigger,
} from "@/registry/mountainview-ui/dialog";

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="tonal">Empty trash</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogIcon>
          <Trash2Icon />
        </DialogIcon>
        <DialogTitle>Permanently delete 24 items?</DialogTitle>
        <DialogDescription>
          Items in the trash for more than 30 days are deleted automatically.
          This can&apos;t be undone.
        </DialogDescription>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="text">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="text">Delete</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
