"use client";

import { CodeBlock } from "@/components/site/code-block";
import { useI18n } from "@/lib/i18n";

const roles = [
  ["primary", "--primary", "--on-primary"],
  ["primary-container", "--primary-container", "--on-primary-container"],
  ["secondary-container", "--secondary-container", "--on-secondary-container"],
  ["tertiary-container", "--tertiary-container", "--on-tertiary-container"],
  ["error", "--error", "--on-error"],
  ["surface-container", "--surface-container", "--on-surface"],
];

export default function ThemingPage() {
  const { dict } = useI18n();
  const t = dict.theming;

  return (
    <article className="flex max-w-3xl flex-col gap-8">
      <header className="flex flex-col gap-2">
        <h1 className="text-display-s">{t.title}</h1>
        <p className="text-body-l text-on-surface-variant">{t.lead}</p>
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="text-headline-s">{t.colors}</h2>
        <p className="text-body-l">{t.colorsP}</p>
        <div className="grid gap-2 sm:grid-cols-2">
          {roles.map(([name, bg, fg]) => (
            <div
              key={name}
              className="flex h-14 items-center rounded-md px-4 text-label-l"
              style={{ background: `var(${bg})`, color: `var(${fg})` }}
            >
              {name}
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-headline-s">{t.dynamic}</h2>
        <p className="text-body-l">{t.dynamicP}</p>
        <CodeBlock
          code={`:root {\n  --primary: #006a60;\n  --on-primary: #ffffff;\n  --primary-container: #9ef2e4;\n  --on-primary-container: #005048;\n}`}
        />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-headline-s">{t.dark}</h2>
        <p className="text-body-l">{t.darkP}</p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-headline-s">{t.type}</h2>
        <p className="text-body-l">{t.typeP}</p>
      </section>
    </article>
  );
}
