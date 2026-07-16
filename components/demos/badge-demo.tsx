"use client";

import { BellIcon, MailIcon, MessageSquareIcon } from "lucide-react";
import { Badge } from "@/registry/mountainview-ui/badge";

export default function BadgeDemo() {
  return (
    <div className="flex items-center gap-10 text-on-surface-variant">
      <span className="relative">
        <BellIcon className="size-6" />
        <Badge className="absolute -right-0.5 -top-0.5" />
      </span>
      <span className="relative">
        <MailIcon className="size-6" />
        <Badge className="absolute -right-2 -top-2">12</Badge>
      </span>
      <span className="relative">
        <MessageSquareIcon className="size-6" />
        <Badge className="absolute -right-2.5 -top-2">999+</Badge>
      </span>
    </div>
  );
}
