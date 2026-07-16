"use client";

import { ClockIcon, MicIcon, TrendingUpIcon } from "lucide-react";
import { List, ListItem } from "@/registry/mountainview-ui/list";
import { SearchBar } from "@/registry/mountainview-ui/search-bar";

export default function SearchBarDemo() {
  return (
    <div className="w-full max-w-md pb-40">
      <SearchBar
        placeholder="Search your library"
        trailing={<MicIcon className="size-6 shrink-0 text-on-surface-variant" />}
        suggestions={
          <List className="bg-transparent">
            <ListItem leading={<ClockIcon />} headline="mountain hiking trails" onClick={() => {}} />
            <ListItem leading={<ClockIcon />} headline="material theme builder" onClick={() => {}} />
            <ListItem leading={<TrendingUpIcon />} headline="dynamic color" onClick={() => {}} />
          </List>
        }
      />
    </div>
  );
}
