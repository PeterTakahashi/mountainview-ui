import Link from "next/link";

import { components } from "@/lib/docs";

export const metadata = { title: "Introduction" };

export default function DocsPage() {
  return (
    <article className="flex max-w-3xl flex-col gap-8">
      <header className="flex flex-col gap-2">
        <h1 className="text-display-s">Introduction</h1>
        <p className="text-body-l text-on-surface-variant">
          mountainview-ui brings Material Design 3 to your codebase: React
          components that follow the M3 spec, distributed the shadcn way — you
          install the source and own it.
        </p>
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="text-headline-s">Why</h2>
        <p className="text-body-l leading-relaxed">
          Material 3 is one of the most complete design systems ever published:
          a tonal color system with light and dark schemes, a fifteen-step type
          scale, a shape system, elevation levels, and precise state layers.
          mountainview-ui reproduces those decisions as Tailwind CSS tokens and
          Radix-based components.
        </p>
        <p className="text-body-l leading-relaxed">
          Like shadcn/ui, this is not a package you depend on. Each component
          is a file the CLI copies into your project. Change anything.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-headline-s">Components</h2>
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
