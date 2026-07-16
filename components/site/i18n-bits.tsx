"use client";

import { useI18n } from "@/lib/i18n";

/** Client leaves so server-rendered docs pages can translate chrome. */

export function ComponentDescription({
  slug,
  fallback,
}: {
  slug: string;
  fallback: string;
}) {
  const { describe } = useI18n();
  return <>{describe(slug, fallback)}</>;
}

export function InstallationHeading() {
  const { dict } = useI18n();
  return <>{dict.component.installation}</>;
}

export function SourceHeading() {
  const { dict } = useI18n();
  return <>{dict.component.source}</>;
}

export function ThemeNote() {
  const { dict } = useI18n();
  return (
    <>
      {dict.component.themeNote1}
      <a href="/docs/installation" className="text-primary">
        {dict.component.themeNoteLink}
      </a>
      {dict.component.themeNote2}
    </>
  );
}

export function GalleryHeader({ count }: { count: number }) {
  const { dict } = useI18n();
  return (
    <header className="flex flex-col gap-2 py-12">
      <h1 className="text-display-s">{dict.gallery.title}</h1>
      <p className="max-w-xl text-body-l text-on-surface-variant">
        {dict.gallery.lead.replace("{n}", String(count))}
      </p>
    </header>
  );
}
