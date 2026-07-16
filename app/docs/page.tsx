"use client";

import Link from "next/link";

import { components } from "@/lib/docs";
import { useI18n } from "@/lib/i18n";

export default function DocsPage() {
  const { dict } = useI18n();
  const t = dict.intro;

  return (
    <article className="flex max-w-3xl flex-col gap-8">
      <header className="flex flex-col gap-2">
        <h1 className="text-display-s">{t.title}</h1>
        <p className="text-body-l text-on-surface-variant">{t.lead}</p>
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="text-headline-s">{t.whyTitle}</h2>
        <p className="text-body-l leading-relaxed">{t.whyP1}</p>
        <p className="text-body-l leading-relaxed">{t.whyP2}</p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-headline-s">{t.componentsTitle}</h2>
        <ul className="grid grid-cols-2 gap-1.5 sm:grid-cols-3">
          {components.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/docs/components/${c.slug}`}
                className="block rounded-full px-3 py-1.5 text-body-m text-primary hover:bg-[color-mix(in_srgb,var(--primary)_8%,transparent)]"
              >
                {c.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
