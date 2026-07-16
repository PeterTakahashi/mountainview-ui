"use client";

import Link from "next/link";

import { SiteHeader } from "@/components/site/site-header";
import { CodeBlock } from "@/components/site/code-block";
import { HeroPanel } from "@/components/site/hero-panel";
import { Button } from "@/registry/mountainview-ui/button";
import { components, siteConfig } from "@/lib/docs";
import { useI18n } from "@/lib/i18n";

export default function Home() {
  const { dict } = useI18n();
  const l = dict.landing;

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(60%_50%_at_50%_0%,color-mix(in_srgb,var(--primary)_10%,transparent),transparent)]"
          />
          <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 px-5 pb-16 pt-20 text-center">
            <h1 className="max-w-2xl text-balance text-display-m sm:text-display-l">
              {l.heroTitle1}
              <br />
              <span className="text-primary">{l.heroTitle2}</span>
            </h1>
            <p className="max-w-xl text-balance text-title-l text-on-surface-variant">
{l.heroSub}
            </p>
            <div className="flex items-center gap-3">
              <Button size="lg" asChild className="min-w-44">
                <Link href="/docs/installation">{l.getStarted}</Link>
              </Button>
              <Button size="lg" variant="tonal" asChild className="min-w-44">
                <a href={siteConfig.github} target="_blank" rel="noreferrer">
                  {l.github}
                </a>
              </Button>
            </div>
            <p className="text-body-s text-on-surface-variant">
{l.stats.replace("{n}", String(components.length))}
            </p>
          </div>

          <div className="relative mx-auto flex max-w-4xl justify-center px-5 pb-24">
            <HeroPanel />
          </div>
        </section>

        <section className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-5 pb-24">
          <h2 className="text-headline-m">{l.installTitle}</h2>
          <p className="max-w-lg text-center text-body-l text-on-surface-variant">
{l.installSub}
          </p>
          <div className="w-full max-w-xl">
            <CodeBlock
              code={`npx shadcn@latest add ${siteConfig.registryBase}/r/button.json`}
            />
          </div>
        </section>

        <section className="bg-surface-low">
          <div className="mx-auto grid max-w-4xl gap-10 px-5 py-20 sm:grid-cols-3">
            {[
              [l.p1t, l.p1b],
              [l.p2t, l.p2b],
              [l.p3t, l.p3b],
            ].map(([t, b]) => (
              <div key={t} className="flex flex-col gap-2">
                <h3 className="text-title-m">{t}</h3>
                <p className="text-body-m text-on-surface-variant">{b}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="shadow-[0_-1px_0_0_var(--outline-variant)]">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-2 px-5 py-8 text-body-s text-on-surface-variant">
          <span>{l.footer}</span>
          <a href={siteConfig.github} className="hover:text-on-surface">
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
