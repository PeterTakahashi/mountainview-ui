"use client";

import * as React from "react";
import { InboxIcon, MenuIcon, SendIcon, StarIcon, Trash2Icon } from "lucide-react";
import { Button } from "@/registry/mountainview-ui/button";
import { Divider } from "@/registry/mountainview-ui/divider";
import {
  ModalNavigationDrawer,
  NavigationDrawer,
  NavigationDrawerHeadline,
  NavigationDrawerItem,
} from "@/registry/mountainview-ui/navigation-drawer";

export default function NavigationDrawerDemo() {
  const [active, setActive] = React.useState("inbox");

  const items = (
    <>
      <NavigationDrawerHeadline>Mail</NavigationDrawerHeadline>
      <NavigationDrawerItem icon={<InboxIcon />} badge="24" active={active === "inbox"} onClick={() => setActive("inbox")}>
        Inbox
      </NavigationDrawerItem>
      <NavigationDrawerItem icon={<SendIcon />} active={active === "sent"} onClick={() => setActive("sent")}>
        Sent
      </NavigationDrawerItem>
      <NavigationDrawerItem icon={<StarIcon />} active={active === "starred"} onClick={() => setActive("starred")}>
        Starred
      </NavigationDrawerItem>
      <Divider className="my-2 mx-4 w-auto" />
      <NavigationDrawerItem icon={<Trash2Icon />} active={active === "trash"} onClick={() => setActive("trash")}>
        Trash
      </NavigationDrawerItem>
    </>
  );

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-4">
      <div className="h-72 w-full overflow-hidden rounded-lg shadow-[var(--shadow-elevation-1)]">
        <NavigationDrawer className="w-full rounded-none">{items}</NavigationDrawer>
      </div>
      <ModalNavigationDrawer
        trigger={
          <Button variant="tonal">
            <MenuIcon /> Open modal drawer
          </Button>
        }
      >
        {items}
      </ModalNavigationDrawer>
    </div>
  );
}
