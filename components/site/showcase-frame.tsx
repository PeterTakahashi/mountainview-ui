import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

/** Minimal chrome around a showcase app: back link + title. */
export function ShowcaseFrame({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-dvh flex-col bg-surface-low">
      <div className="sticky top-0 z-40 bg-surface-low/80 shadow-[0_1px_0_0_var(--outline-variant)] backdrop-blur-xl">
        <div className="relative mx-auto flex h-12 max-w-6xl items-center gap-2 px-4">
          <Link
            href="/showcases"
            className="flex items-center gap-1.5 rounded-full py-1 pl-1 pr-3 text-label-l text-primary outline-none hover:bg-[color-mix(in_srgb,var(--primary)_8%,transparent)] focus-visible:ring-2 focus-visible:ring-primary"
          >
            <ArrowLeftIcon className="size-4" />
            Showcases
          </Link>
          <span className="absolute left-1/2 -translate-x-1/2 text-title-s text-on-surface">
            {title}
          </span>
          <span className="ml-auto hidden text-body-s text-on-surface-variant sm:block">
            built with mountainview-ui
          </span>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-6">
        {children}
      </div>
    </div>
  );
}
