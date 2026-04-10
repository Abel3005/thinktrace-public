import type { ReactNode } from "react";

type Tone = "default" | "muted";

const toneClass: Record<Tone, string> = {
  default: "",
  muted: "bg-muted/40",
};

export function Section({
  id,
  tone = "default",
  children,
}: {
  id?: string;
  tone?: Tone;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`border-t border-border/60 ${toneClass[tone]}`}
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-24">{children}</div>
    </section>
  );
}

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm font-medium uppercase tracking-wider text-brand-500">
      {children}
    </p>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
      {children}
    </h2>
  );
}
