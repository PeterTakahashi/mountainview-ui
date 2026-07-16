"use client";

import * as React from "react";
import { BookmarkIcon, HeartIcon, SettingsIcon, Share2Icon } from "lucide-react";
import { IconButton } from "@/registry/mountainview-ui/icon-button";

export default function IconButtonDemo() {
  const [liked, setLiked] = React.useState(true);

  return (
    <div className="flex items-center gap-3">
      <IconButton aria-label="Settings">
        <SettingsIcon />
      </IconButton>
      <IconButton
        variant="filled"
        aria-label="Like"
        aria-pressed={liked}
        onClick={() => setLiked(!liked)}
      >
        <HeartIcon fill={liked ? "currentColor" : "none"} />
      </IconButton>
      <IconButton variant="tonal" aria-label="Bookmark">
        <BookmarkIcon />
      </IconButton>
      <IconButton variant="outlined" aria-label="Share">
        <Share2Icon />
      </IconButton>
    </div>
  );
}
