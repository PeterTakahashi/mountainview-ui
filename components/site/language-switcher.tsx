"use client";

import * as React from "react";
import { GlobeIcon } from "lucide-react";

import { locales, useI18n } from "@/lib/i18n";
import { IconButton } from "@/registry/mountainview-ui/icon-button";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@/registry/mountainview-ui/menu";
import { CheckIcon } from "lucide-react";

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  return (
    <Menu>
      <MenuTrigger asChild>
        <IconButton aria-label="Language">
          <GlobeIcon />
        </IconButton>
      </MenuTrigger>
      <MenuContent align="end">
        {locales.map((l) => (
          <MenuItem key={l.code} onSelect={() => setLocale(l.code)}>
            <span className="flex w-5 justify-center">
              {l.code === locale ? <CheckIcon className="size-4" /> : null}
            </span>
            {l.label}
          </MenuItem>
        ))}
      </MenuContent>
    </Menu>
  );
}
