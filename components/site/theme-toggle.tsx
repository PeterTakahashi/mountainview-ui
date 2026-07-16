"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "lucide-react";

import { IconButton } from "@/registry/mountainview-ui/icon-button";

export function ThemeToggle() {
  const [dark, setDark] = React.useState(false);

  React.useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <IconButton
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {dark ? <SunIcon /> : <MoonIcon />}
    </IconButton>
  );
}
