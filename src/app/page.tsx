import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { LinkButton } from "@/components/ui/button";
import { Section, SectionEyebrow, SectionTitle } from "@/components/ui/section";
import { navLinks, products } from "@/content/landing";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
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
          Trace your thinking. Leverage AI with intent.
        </span>
        <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          The pace of AI leaves no room to think.{" "}
          <span className="text-brand-500">We make space for it.</span>
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
          ThinkTrace builds products that turn AI from a black box into a set
          of opportunities your team can act on — recovered hours, extended
          reach, and decisions you can defend with a trace behind every one.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <LinkButton href="#product" size="lg">
            See our product
          </LinkButton>
        </div>
      </div>
    </section>
  );
}

function Product() {
  return (
    <Section id="product" tone="muted">
      <div className="max-w-2xl">
        <SectionEyebrow>Product</SectionEyebrow>
        <SectionTitle>Services that trace how you leverage AI.</SectionTitle>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Three products, one throughline: make every interaction with AI
          something you can see, reason about, and improve.
        </p>
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {products.map((p) => (
          <div
            key={p.name}
            className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-card-foreground">
              {p.name}
            </h3>
            <p className="mt-2 text-sm font-medium text-brand-500">
              {p.tagline}
            </p>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              {p.body}
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-500" />
                  <span className="text-foreground">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <LinkButton href="#contact">Request a walkthrough</LinkButton>
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
