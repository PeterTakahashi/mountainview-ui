"use client";

import * as React from "react";
import Link from "next/link";
import { MenuIcon } from "lucide-react";

import { components, siteConfig } from "@/lib/docs";
import { useI18n } from "@/lib/i18n";
import {
  ModalNavigationDrawer,
  NavigationDrawerHeadline,
} from "@/registry/mountainview-ui/navigation-drawer";

/**
 * Phone navigation: the header collapses to a hamburger opening a
 * modal navigation drawer with the full site nav, including the
 * docs sections the desktop sidebar shows.
 */
export function MobileMenu() {
  const { dict } = useI18n();
  const [open, setOpen] = React.useState(false);
  const close = () => setOpen(false);

  return (
    <span className="md:hidden">
      <ModalNavigationDrawer
        open={open}
        onOpenChange={setOpen}
        trigger={
          <button
            type="button"
            aria-label="Menu"
            className="flex size-10 items-center justify-center rounded-full text-on-surface-variant transition-colors hover:bg-[color-mix(in_srgb,var(--on-surface)_8%,transparent)]"
          >
            <MenuIcon className="size-5" />
          </button>
        }
      >
        <Link
          href="/"
          onClick={close}
          className="px-4 pb-3 pt-1 text-title-m tracking-tight text-on-surface"
        >
          ▲ mountainview-ui
        </Link>

        <MenuLink href="/docs" onClick={close}>{dict.nav.docs}</MenuLink>
        <MenuLink href="/components" onClick={close}>{dict.nav.components}</MenuLink>
        <MenuLink href="/showcases" onClick={close}>{dict.nav.showcases}</MenuLink>
        <MenuLink href={siteConfig.github} onClick={close} external>GitHub</MenuLink>

        <NavigationDrawerHeadline>{dict.sidebar.gettingStarted}</NavigationDrawerHeadline>
        <MenuLink href="/docs" onClick={close}>{dict.sidebar.introduction}</MenuLink>
        <MenuLink href="/docs/installation" onClick={close}>{dict.sidebar.installation}</MenuLink>
        <MenuLink href="/docs/theming" onClick={close}>{dict.sidebar.theming}</MenuLink>
        <MenuLink href="/docs/skills" onClick={close}>{dict.sidebar.skills}</MenuLink>

        <NavigationDrawerHeadline>{dict.sidebar.components}</NavigationDrawerHeadline>
        {components.map((c) => (
          <MenuLink key={c.slug} href={`/docs/components/${c.slug}`} onClick={close}>
            {c.title}
          </MenuLink>
        ))}
      </ModalNavigationDrawer>
    </span>
  );
}

function MenuLink({
  href,
  onClick,
  external,
  children,
}: {
  href: string;
  onClick: () => void;
  external?: boolean;
  children: React.ReactNode;
}) {
  const className =
    "flex h-12 shrink-0 items-center rounded-full px-4 text-label-l text-on-surface-variant transition-colors hover:bg-[color-mix(in_srgb,var(--on-surface)_8%,transparent)] active:bg-[color-mix(in_srgb,var(--on-surface)_12%,transparent)]";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" onClick={onClick} className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} onClick={onClick} className={className}>
      {children}
    </Link>
  );
}
