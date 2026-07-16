"use client";

import { InfoIcon, SettingsIcon } from "lucide-react";
import { Button } from "@/registry/mountainview-ui/button";
import { IconButton } from "@/registry/mountainview-ui/icon-button";
import {
  Tooltip,
  TooltipContent,
  TooltipSubhead,
  TooltipTrigger,
} from "@/registry/mountainview-ui/tooltip";

export default function TooltipDemo() {
  return (
    <div className="flex items-center gap-8">
      <Tooltip>
        <TooltipTrigger asChild>
          <IconButton aria-label="Settings">
            <SettingsIcon />
          </IconButton>
        </TooltipTrigger>
        <TooltipContent>Settings</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <IconButton aria-label="About sync">
            <InfoIcon />
          </IconButton>
        </TooltipTrigger>
        <TooltipContent rich side="bottom">
          <TooltipSubhead>Sync is on</TooltipSubhead>
          Your edits save to this device and to your account automatically.
          <div className="pt-3">
            <Button variant="text" size="sm">Learn more</Button>
          </div>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
