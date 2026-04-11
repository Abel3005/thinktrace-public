import Image from "next/image";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { LinkButton } from "@/components/ui/button";
import { Section, SectionEyebrow, SectionTitle } from "@/components/ui/section";
import { heroOutcomes, navLinks, products } from "@/content/landing";

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
          Find the proper way to use AI
        </span>
        <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          A better experience with AI,{" "}
          <span className="text-brand-500">
            traced back to the way you think.
          </span>
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
          ThinkTrace builds services that help your team cooperate with AI on
          purpose. We trace the thinking behind every delegation — so the way
          you use AI keeps improving alongside it.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <LinkButton href="#product" size="lg">
            See our products
          </LinkButton>
          <LinkButton href="#contact" size="lg" variant="secondary">
            Get in touch
          </LinkButton>
        </div>
        <dl className="mt-4 grid w-full max-w-3xl gap-6 border-t border-border/60 pt-8 sm:grid-cols-3">
          {heroOutcomes.map((o) => (
            <div key={o.title}>
              <dt className="text-sm font-semibold text-foreground">
                {o.title}
              </dt>
              <dd className="mt-1 text-sm leading-6 text-muted-foreground">
                {o.body}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Product() {
  return (
    <Section id="product" tone="muted">
      <div className="max-w-2xl">
        <SectionEyebrow>Product</SectionEyebrow>
        <SectionTitle>
          Trace the thinking, then leverage AI.
        </SectionTitle>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Each product tackles a different part of the problem — the work
          already flowing through AI, the reach you could extend with agents,
          and the bias that shapes every delegation in the first place.
        </p>
      </div>
      <div className="mt-12 flex flex-col gap-10">
        {products.map((p, idx) => (
          <article
            key={p.name}
            className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
          >
            <div className="grid gap-0 lg:grid-cols-2">
              <div
                className={
                  idx % 2 === 1
                    ? "relative order-first aspect-[4/3] bg-muted lg:order-last lg:aspect-auto"
                    : "relative order-first aspect-[4/3] bg-muted lg:aspect-auto"
                }
              >
                <Image
                  src={p.image.src}
                  alt={p.image.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-between gap-8 p-8 lg:p-10">
                <header className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-semibold tracking-tight text-card-foreground">
                    {p.name}
                  </h3>
                  <span
                    className={
                      p.status === "available"
                        ? "rounded-full border border-brand-500/30 bg-brand-500/10 px-2.5 py-0.5 text-xs font-medium text-brand-500"
                        : "rounded-full border border-border bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                    }
                  >
                    {p.status === "available" ? "Available" : "In development"}
                  </span>
                </header>
                <div className="border-l-2 border-brand-500 pl-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                    Core value
                  </p>
                  <p className="mt-3 text-xl font-medium leading-8 text-foreground sm:text-2xl sm:leading-9">
                    {p.coreValue}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    What it does
                  </p>
                  {p.functions.length > 0 ? (
                    <ol className="mt-3 space-y-3 text-sm">
                      {p.functions.map((f, i) => (
                        <li key={f} className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-500/10 font-mono text-[11px] font-semibold text-brand-500">
                            {i + 1}
                          </span>
                          <span className="leading-6 text-foreground">{f}</span>
                        </li>
                      ))}
                    </ol>
                  ) : (
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      Functions are still being shaped. Talk to us if you want
                      input on where it lands.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </article>
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
