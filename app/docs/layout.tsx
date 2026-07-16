"use client";

import Link from "next/link";

import { SiteHeader } from "@/components/site/site-header";
import { components } from "@/lib/docs";
import { useI18n } from "@/lib/i18n";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { dict } = useI18n();

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <div className="mx-auto flex w-full max-w-6xl flex-1 gap-10 px-5">
        <aside className="sticky top-16 hidden max-h-[calc(100dvh-4rem)] w-56 shrink-0 overflow-y-auto py-8 md:block">
          <nav className="flex flex-col gap-6">
            <div className="flex flex-col gap-0.5">
              <p className="px-3 pb-1 text-label-m uppercase tracking-wide text-on-surface-variant">
                {dict.sidebar.gettingStarted}
              </p>
              <SidebarLink href="/docs">{dict.sidebar.introduction}</SidebarLink>
              <SidebarLink href="/docs/installation">{dict.sidebar.installation}</SidebarLink>
              <SidebarLink href="/docs/theming">{dict.sidebar.theming}</SidebarLink>
              <SidebarLink href="/docs/skills">{dict.sidebar.skills}</SidebarLink>
            </div>
            <div className="flex flex-col gap-0.5">
              <p className="px-3 pb-1 text-label-m uppercase tracking-wide text-on-surface-variant">
                {dict.sidebar.components}
              </p>
              {components.map((c) => (
                <SidebarLink key={c.slug} href={`/docs/components/${c.slug}`}>
                  {c.title}
                </SidebarLink>
              ))}
            </div>
          </nav>
        </aside>
        <main className="min-w-0 flex-1 py-10">{children}</main>
      </div>
    </div>
  );
}

function SidebarLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="rounded-full px-3 py-1.5 text-body-m text-on-surface-variant transition-colors hover:bg-[color-mix(in_srgb,var(--on-surface)_8%,transparent)] hover:text-on-surface"
    >
      {children}
    </Link>
  );
}
