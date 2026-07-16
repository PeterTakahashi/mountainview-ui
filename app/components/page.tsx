import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";

import { SiteHeader } from "@/components/site/site-header";
import { demos } from "@/components/demos";
import { components } from "@/lib/docs";

export const metadata = {
  title: "Components",
  description: "Every mountainview-ui component, live on one page.",
};

export default function ComponentsPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />

      <main className="mx-auto w-full max-w-6xl flex-1 px-5 pb-24">
        <header className="flex flex-col gap-2 py-12">
          <h1 className="text-display-s">Components</h1>
          <p className="max-w-xl text-body-l text-on-surface-variant">
            {`All ${components.length} components, live. Everything below is
            interactive — click a title for install instructions and source.`}
          </p>
        </header>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {components.map((c) => {
            const Demo = demos[c.slug];
            return (
              <section
                key={c.slug}
                className="flex flex-col overflow-hidden rounded-lg bg-surface-low shadow-[var(--shadow-elevation-1)]"
              >
                <Link
                  href={`/docs/components/${c.slug}`}
                  className="group flex items-center justify-between gap-2 px-5 pb-1 pt-4"
                >
                  <span className="text-title-m text-on-surface">{c.title}</span>
                  <ChevronRightIcon
                    className="size-4 text-on-surface-variant transition-transform group-hover:translate-x-0.5"
                    strokeWidth={2.5}
                  />
                </Link>
                <p className="px-5 text-body-s text-on-surface-variant">
                  {c.description}
                </p>
                <div className="flex min-h-56 flex-1 items-center justify-center p-6">
                  <Demo />
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </div>
  );
}
