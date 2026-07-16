"use client";

import { ClapperboardIcon, HouseIcon, SearchIcon, UserIcon } from "lucide-react";
import {
  NavigationBar,
  NavigationBarContent,
  NavigationBarItem,
  NavigationBarList,
} from "@/registry/mountainview-ui/navigation-bar";

export default function NavigationBarDemo() {
  return (
    <NavigationBar
      defaultValue="home"
      className="h-56 w-80 overflow-hidden rounded-lg bg-surface shadow-[var(--shadow-elevation-2)]"
    >
      {["home", "search", "shorts", "you"].map((v) => (
        <NavigationBarContent
          key={v}
          value={v}
          className="flex items-center justify-center text-body-m capitalize text-on-surface-variant"
        >
          {v}
        </NavigationBarContent>
      ))}
      <NavigationBarList>
        <NavigationBarItem value="home" icon={<HouseIcon />}>
          Home
        </NavigationBarItem>
        <NavigationBarItem value="search" icon={<SearchIcon />}>
          Search
        </NavigationBarItem>
        <NavigationBarItem value="shorts" icon={<ClapperboardIcon />} badge="3">
          Shorts
        </NavigationBarItem>
        <NavigationBarItem value="you" icon={<UserIcon />}>
          You
        </NavigationBarItem>
      </NavigationBarList>
    </NavigationBar>
  );
}
