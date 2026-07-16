import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "mountainview-ui — Material 3 components you own",
    template: "%s — mountainview-ui",
  },
  description:
    "Open-source React components implementing Material Design 3. Built on Tailwind CSS and Radix. Install with the shadcn CLI, then own the code.",
};

const themeInit = `
try {
  const stored = localStorage.getItem("theme");
  const dark = stored ? stored === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  if (dark) document.documentElement.classList.add("dark");
} catch {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="flex min-h-dvh flex-col antialiased">{children}</body>
    </html>
  );
}
