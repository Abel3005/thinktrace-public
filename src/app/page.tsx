import Image from "next/image";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { LinkButton } from "@/components/ui/button";
import { Section, SectionEyebrow, SectionTitle } from "@/components/ui/section";
import {
  fundamentals,
  navLinks,
  productFeatures,
  steps,
  valueProps,
} from "@/content/landing";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Fundamentals />
        <ValueProps />
        <HowItWorks />
        <Product />
        <Cta />
      </main>
      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="border-b border-border/60">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <a href="/" className="flex items-center gap-2.5">
          <Logo size={32} priority />
          <span className="text-base font-semibold tracking-tight">
            ThinkTrace
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground sm:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LinkButton href="#contact" size="sm">
            Get in touch
          </LinkButton>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at top, color-mix(in oklab, var(--brand-400) 18%, transparent), transparent 60%)",
        }}
      />
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-8 px-6 py-24 sm:py-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
          Trace your thinking. Leverage AI on purpose.
        </span>
        <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          AI is faster than us.{" "}
          <span className="text-brand-500">
            The question is what you hand over to it.
          </span>
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
          ThinkTrace is built on a simple premise: AI&apos;s value depends
          entirely on which tasks we leverage to it — and humans have a
          cognitive bias to over-leverage without noticing. We help you trace
          your thinking so the handoff is deliberate, not accidental.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <LinkButton href="#fundamentals" size="lg">
            Why ThinkTrace exists
          </LinkButton>
          <LinkButton href="#product" size="lg" variant="secondary">
            See our product
          </LinkButton>
        </div>
      </div>
    </section>
  );
}

function Fundamentals() {
  return (
    <Section id="fundamentals">
      <div className="max-w-3xl">
        <SectionEyebrow>Our fundamental base</SectionEyebrow>
        <SectionTitle>
          Four things we believe{" "}
          <span className="text-brand-500">
            about humans, AI, and the gap between them.
          </span>
        </SectionTitle>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Everything ThinkTrace builds starts here. If these aren&apos;t true,
          we don&apos;t need to exist.
        </p>
      </div>
      <ol className="mt-12 grid gap-6 sm:grid-cols-2">
        {fundamentals.map((f) => (
          <li
            key={f.n}
            className="relative rounded-xl border border-border bg-card p-7 shadow-sm"
          >
            <span className="font-mono text-xs font-medium text-brand-500">
              {f.n}
            </span>
            <h3 className="mt-3 text-xl font-semibold leading-snug text-card-foreground">
              {f.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {f.body}
            </p>
          </li>
        ))}
      </ol>
      <div className="relative mt-12 overflow-hidden rounded-2xl border border-brand-500/30 bg-brand-500/5 p-8 sm:p-12">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse at center, color-mix(in oklab, var(--brand-400) 14%, transparent), transparent 70%)",
          }}
        />
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-500">
          The conclusion
        </p>
        <p className="mt-4 max-w-3xl text-2xl font-semibold leading-snug tracking-tight text-foreground sm:text-3xl">
          So we have to{" "}
          <span className="text-brand-500">trace our thinking</span> in order
          to leverage tasks to AI on purpose.
        </p>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
          That&apos;s the entire reason ThinkTrace exists.
        </p>
      </div>
    </Section>
  );
}

function ValueProps() {
  return (
    <Section id="what" tone="muted">
      <div className="max-w-2xl">
        <SectionEyebrow>What we do</SectionEyebrow>
        <SectionTitle>Services built for the reality of AI adoption.</SectionTitle>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          AI moves faster than any roadmap. ThinkTrace gives you a way to keep
          up that doesn&apos;t depend on hiring an entire research team.
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {valueProps.map((v) => (
          <div
            key={v.title}
            className="rounded-xl border border-border bg-card p-6 shadow-sm"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500">
              <span className="h-2 w-2 rounded-full bg-brand-500" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-card-foreground">
              {v.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {v.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function HowItWorks() {
  return (
    <Section id="how">
      <div className="max-w-2xl">
        <SectionEyebrow>How it works</SectionEyebrow>
        <SectionTitle>A traceable path from idea to controlled rollout.</SectionTitle>
      </div>
      <ol className="mt-12 grid gap-6 sm:grid-cols-3">
        {steps.map((s) => (
          <li
            key={s.n}
            className="relative rounded-xl border border-border bg-card p-6"
          >
            <span className="font-mono text-xs font-medium text-brand-500">
              {s.n}
            </span>
            <h3 className="mt-3 text-lg font-semibold text-card-foreground">
              {s.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {s.body}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Product() {
  return (
    <Section id="product" tone="muted">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionEyebrow>Product</SectionEyebrow>
          <SectionTitle>AI Risk Manage</SectionTitle>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Our flagship service. Continuously inventories the AI in your
            organization, scores it against the risks that matter, and surfaces
            the few things that actually need a human decision — so you can keep
            shipping without hand-waving the hard parts.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {productFeatures.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-500" />
                <span className="text-foreground">{f}</span>
              </li>
            ))}
          </ul>
          <LinkButton href="#contact" className="mt-8">
            Request a walkthrough
          </LinkButton>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <Image
            src="/placeholder-hero.png"
            alt="AI Risk Manage dashboard preview"
            width={1600}
            height={900}
            className="h-auto w-full"
          />
        </div>
      </div>
    </Section>
  );
}

function Cta() {
  return (
    <Section id="contact">
      <div className="flex flex-col items-start gap-6 sm:items-center sm:text-center">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Ready to leverage AI without losing the trace?
        </h2>
        <p className="max-w-xl text-base leading-7 text-muted-foreground">
          Tell us what you&apos;re building. We&apos;ll show you where ThinkTrace
          fits — and where it doesn&apos;t.
        </p>
        <LinkButton href="mailto:hello@thinktrace.ai" size="lg">
          hello@thinktrace.ai
        </LinkButton>
      </div>
    </Section>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center">
        <div className="flex items-center gap-2.5">
          <Logo size={20} />
          <span>© {new Date().getFullYear()} ThinkTrace</span>
        </div>
        <span>Services to leverage AI capability, responsibly.</span>
      </div>
    </footer>
  );
}
