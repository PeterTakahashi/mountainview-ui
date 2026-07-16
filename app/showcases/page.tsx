import Link from "next/link";

import { SiteHeader } from "@/components/site/site-header";

export const metadata = {
  title: "Showcases",
  description: "Small, familiar apps built entirely from mountainview-ui components.",
};

const showcases = [
  {
    slug: "inbox",
    title: "Inbox",
    description:
      "A Gmail-style client: navigation drawer, mail list, reading pane, compose FAB.",
    uses: "Navigation Drawer · List · Search Bar · FAB · Snackbar",
    gradient: "linear-gradient(135deg, #b3261e, #7d5260)",
    emoji: "✉",
  },
  {
    slug: "store",
    title: "Store",
    description:
      "A Play-style storefront: hero carousel, category chips, install progress.",
    uses: "Carousel · Card · Chip · Progress · Navigation Bar",
    gradient: "linear-gradient(135deg, #006e1c, #00639b)",
    emoji: "▶",
  },
  {
    slug: "home",
    title: "Home",
    description:
      "A smart-home dashboard: device tiles, sliders, tabs, and a bottom sheet.",
    uses: "Tabs · Switch · Slider · Dialog · Bottom Sheet",
    gradient: "linear-gradient(135deg, #6750a4, #00639b)",
    emoji: "⌂",
  },
];

export default function ShowcasesPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-5 pb-24">
        <header className="flex flex-col gap-2 py-12">
          <h1 className="text-display-s">Showcases</h1>
          <p className="max-w-xl text-body-l text-on-surface-variant">
            Small, familiar apps assembled entirely from mountainview-ui
            components — no extra CSS, no backend. Open one and poke around.
          </p>
        </header>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {showcases.map((s) => (
            <Link
              key={s.slug}
              href={`/showcases/${s.slug}`}
              className="group flex flex-col overflow-hidden rounded-lg bg-surface-lowest shadow-[var(--shadow-elevation-1)] outline-none transition-shadow hover:shadow-[var(--shadow-elevation-3)] focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div
                className="flex h-32 items-center justify-center text-[44px] text-white/90"
                style={{ background: s.gradient }}
              >
                <span aria-hidden>{s.emoji}</span>
              </div>
              <div className="flex flex-col gap-1 p-5">
                <h2 className="text-title-m text-on-surface">{s.title}</h2>
                <p className="text-body-m text-on-surface-variant">
                  {s.description}
                </p>
                <p className="mt-2 text-body-s text-on-surface-variant/70">
                  {s.uses}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
