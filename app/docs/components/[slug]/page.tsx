import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CodeBlock } from "@/components/site/code-block";
import { ComponentPreview } from "@/components/site/component-preview";
import { demos } from "@/components/demos";
import { components, siteConfig } from "@/lib/docs";
import {
  ComponentDescription,
  InstallationHeading,
  SourceHeading,
  ThemeNote,
} from "@/components/site/i18n-bits";

export const dynamicParams = false;

export function generateStaticParams() {
  return components.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = components.find((c) => c.slug === slug);
  return doc ? { title: doc.title, description: doc.description } : {};
}

function readSource(...segments: string[]) {
  return fs.readFileSync(path.join(process.cwd(), ...segments), "utf8").trim();
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = components.find((c) => c.slug === slug);
  const Demo = demos[slug];
  if (!doc || !Demo) notFound();

  const demoSource = readSource("components", "demos", `${slug}-demo.tsx`)
    .replaceAll("@/registry/mountainview-ui/", "@/components/ui/");
  const componentSource = readSource("registry", "mountainview-ui", `${slug}.tsx`);
  const installCommand = `npx shadcn@latest add ${siteConfig.registryBase}/r/${slug}.json`;

  return (
    <article className="flex max-w-3xl flex-col gap-8">
      <header className="flex flex-col gap-2">
        <h1 className="text-display-s">{doc.title}</h1>
        <p className="text-body-l text-on-surface-variant">
          <ComponentDescription slug={doc.slug} fallback={doc.description} />
        </p>
        {doc.material ? (
          <p className="text-body-s text-on-surface-variant">
            <code className="font-mono">{doc.material}</code>
          </p>
        ) : null}
      </header>

      <ComponentPreview code={demoSource}>
        <Demo />
      </ComponentPreview>

      <section className="flex flex-col gap-3">
        <h2 className="text-headline-s"><InstallationHeading /></h2>
        <CodeBlock code={installCommand} />
        <p className="text-body-s text-on-surface-variant">
          <ThemeNote />
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-headline-s"><SourceHeading /></h2>
        <CodeBlock code={componentSource} collapsible />
      </section>
    </article>
  );
}
