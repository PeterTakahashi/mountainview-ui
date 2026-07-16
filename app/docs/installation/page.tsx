import { CodeBlock } from "@/components/site/code-block";
import { siteConfig } from "@/lib/docs";

export const metadata = { title: "Installation" };

export default function InstallationPage() {
  const base = siteConfig.registryBase;

  return (
    <article className="flex max-w-3xl flex-col gap-8">
      <header className="flex flex-col gap-2">
        <h1 className="text-display-s">Installation</h1>
        <p className="text-body-l text-on-surface-variant">
          Works in any React project with Tailwind CSS v4. Next.js shown here.
        </p>
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="text-headline-s">1. Set up shadcn</h2>
        <p className="text-body-l">
          If your project doesn&apos;t have a{" "}
          <code className="font-mono text-body-m">components.json</code> yet:
        </p>
        <CodeBlock code="npx shadcn@latest init" />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-headline-s">2. Add the theme tokens</h2>
        <p className="text-body-l">
          The components read the M3 color scheme, type scale, shape, and
          elevation from CSS tokens. Install them once:
        </p>
        <CodeBlock code={`npx shadcn@latest add ${base}/r/theme.json`} />
        <p className="text-body-l">
          This places{" "}
          <code className="font-mono text-body-m">mountainview-ui-theme.css</code>{" "}
          in your project root. Import it in your global stylesheet, after
          Tailwind:
        </p>
        <CodeBlock
          code={`@import "tailwindcss";\n@import "tw-animate-css";\n@import "../mountainview-ui-theme.css";`}
        />
        <CodeBlock code="npm install tw-animate-css" />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-headline-s">3. Add components</h2>
        <CodeBlock code={`npx shadcn@latest add ${base}/r/button.json`} />
        <p className="text-body-l">
          The source lands in{" "}
          <code className="font-mono text-body-m">components/ui/</code>.
          It&apos;s yours now — edit it freely.
        </p>
        <CodeBlock
          code={`import { Button } from "@/components/ui/button";\n\n<Button variant="tonal">Continue</Button>`}
        />
      </section>
    </article>
  );
}
