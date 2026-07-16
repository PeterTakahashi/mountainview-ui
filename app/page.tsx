"use client";

import Link from "next/link";

import { SiteHeader } from "@/components/site/site-header";
import { CodeBlock } from "@/components/site/code-block";
import { HeroPanel } from "@/components/site/hero-panel";
import { Button } from "@/registry/mountainview-ui/button";
import { components, siteConfig } from "@/lib/docs";

export default function Home() {
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
              Material 3.
              <br />
              <span className="text-primary">Yours to own.</span>
            </h1>
            <p className="max-w-xl text-balance text-title-l text-on-surface-variant">
              Faithful Material Design 3 components on Tailwind CSS and Radix.
              Installed as source with the shadcn CLI — every line lands in
              your repo.
            </p>
            <div className="flex items-center gap-3">
              <Button size="lg" asChild className="min-w-44">
                <Link href="/docs/installation">Get started</Link>
              </Button>
              <Button size="lg" variant="tonal" asChild className="min-w-44">
                <a href={siteConfig.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </Button>
            </div>
            <p className="text-body-s text-on-surface-variant">
              {components.length} components · light & dark · MIT license
            </p>
          </div>

          <div className="relative mx-auto flex max-w-4xl justify-center px-5 pb-24">
            <HeroPanel />
          </div>
        </section>

        <section className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-5 pb-24">
          <h2 className="text-headline-m">Install like shadcn/ui</h2>
          <p className="max-w-lg text-center text-body-l text-on-surface-variant">
            No package to depend on. The CLI copies the component source into
            your project, styled with Material 3 tokens.
          </p>
          <div className="w-full max-w-xl">
            <CodeBlock
              code={`npx shadcn@latest add ${siteConfig.registryBase}/r/button.json`}
            />
          </div>
        </section>

        <section className="bg-surface-low">
          <div className="mx-auto grid max-w-4xl gap-10 px-5 py-20 sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <h3 className="text-title-m">Spec-faithful tokens</h3>
              <p className="text-body-m text-on-surface-variant">
                The baseline M3 scheme — primary through surface-container
                tiers — plus the full type scale, shape system, elevation, and
                8%/12% state layers.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-title-m">Own the code</h3>
              <p className="text-body-m text-on-surface-variant">
                Components are files in your repo, not a dependency. Reshape a
                chip or rebuild a sheet without fighting a library.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-title-m">Dynamic-color ready</h3>
              <p className="text-body-m text-on-surface-variant">
                Every color is a CSS variable. Swap the baseline palette for
                your own Material You scheme and everything re-tints.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="shadow-[0_-1px_0_0_var(--outline-variant)]">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-2 px-5 py-8 text-body-s text-on-surface-variant">
          <span>
            mountainview-ui — an independent open-source project, not
            affiliated with Google LLC.
          </span>
          <a href={siteConfig.github} className="hover:text-on-surface">
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
