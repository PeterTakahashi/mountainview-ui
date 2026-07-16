import { CodeBlock } from "@/components/site/code-block";

export const metadata = { title: "Theming" };

const roles = [
  ["primary", "--primary", "--on-primary"],
  ["primary-container", "--primary-container", "--on-primary-container"],
  ["secondary-container", "--secondary-container", "--on-secondary-container"],
  ["tertiary-container", "--tertiary-container", "--on-tertiary-container"],
  ["error", "--error", "--on-error"],
  ["surface-container", "--surface-container", "--on-surface"],
];

export default function ThemingPage() {
  return (
    <article className="flex max-w-3xl flex-col gap-8">
      <header className="flex flex-col gap-2">
        <h1 className="text-display-s">Theming</h1>
        <p className="text-body-l text-on-surface-variant">
          Every token is a CSS variable, so a Material You scheme is an
          override away.
        </p>
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="text-headline-s">Color roles</h2>
        <p className="text-body-l">
          The baseline M3 scheme ships with paired container / on-container
          roles. Use them as Tailwind colors:{" "}
          <code className="font-mono text-body-m">bg-primary</code>,{" "}
          <code className="font-mono text-body-m">text-on-surface-variant</code>,{" "}
          <code className="font-mono text-body-m">bg-surface-high</code>.
        </p>
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
        <h2 className="text-headline-s">Dynamic color</h2>
        <p className="text-body-l">
          Generate a scheme from your brand color with the Material Theme
          Builder, then override the variables — components re-tint
          automatically:
        </p>
        <CodeBlock
          code={`:root {\n  --primary: #006a60;\n  --on-primary: #ffffff;\n  --primary-container: #9ef2e4;\n  --on-primary-container: #005048;\n}`}
        />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-headline-s">Dark scheme</h2>
        <p className="text-body-l">
          Toggle the <code className="font-mono text-body-m">dark</code> class
          on <code className="font-mono text-body-m">&lt;html&gt;</code>. All
          tokens swap to their dark values — components need no changes.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-headline-s">Type, shape, elevation</h2>
        <p className="text-body-l">
          The full M3 type scale ships as utilities (
          <code className="font-mono text-body-m">text-display-l</code> …{" "}
          <code className="font-mono text-body-m">text-label-s</code>), shape
          as radius tokens (<code className="font-mono text-body-m">rounded-xs</code>{" "}
          … <code className="font-mono text-body-m">rounded-xl</code>), and
          elevation as shadows (
          <code className="font-mono text-body-m">
            shadow-[var(--shadow-elevation-1)]
          </code>{" "}
          … 5). State layers are provided as{" "}
          <code className="font-mono text-body-m">state-on-surface</code>-style
          utilities implementing the 8% hover / 12% press spec.
        </p>
      </section>
    </article>
  );
}
