import Image from "next/image";

const valueProps = [
  {
    title: "Move at AI's pace",
    body: "Models, tools, and best practices change weekly. ThinkTrace tracks the shifts so your team can adopt what works without chasing every release.",
  },
  {
    title: "Adopt with guardrails",
    body: "Capability is only useful when it's safe to ship. We translate emerging AI risks into controls that fit how your teams actually build.",
  },
  {
    title: "Prove the value",
    body: "Every workflow we touch comes with a measurable outcome — time saved, errors prevented, decisions accelerated. No vague AI hype.",
  },
];

const steps = [
  {
    n: "01",
    title: "Map your AI surface",
    body: "We inventory the models, prompts, agents, and data flows already in use across your org — including the shadow ones.",
  },
  {
    n: "02",
    title: "Trace the risk",
    body: "Each surface is scored against the risks that matter to you: privacy, accuracy, cost, compliance, and operational fragility.",
  },
  {
    n: "03",
    title: "Ship the controls",
    body: "You get concrete policies, evaluators, and monitors wired into your stack — not a 60-page PDF nobody reads.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      {/* Header */}
      <header className="border-b border-border/60">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <a href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo-mark.svg"
              alt="ThinkTrace"
              width={32}
              height={32}
              priority
            />
            <span className="text-base font-semibold tracking-tight">
              ThinkTrace
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground sm:flex">
            <a href="#what" className="hover:text-foreground">
              What we do
            </a>
            <a href="#how" className="hover:text-foreground">
              How it works
            </a>
            <a href="#product" className="hover:text-foreground">
              Product
            </a>
          </nav>
          <a
            href="#contact"
            className="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get in touch
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,theme(colors.brand.400/0.18),transparent_60%)]" />
          <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-8 px-6 py-24 sm:py-32">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
              AI capability, responsibly leveraged
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              Turn AI from a moving target into{" "}
              <span className="text-brand-500">a capability you can trust.</span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
              ThinkTrace helps teams adopt AI at the speed it's evolving — without
              losing track of the risks. We design the services, controls, and
              tooling that turn raw model power into outcomes your business can
              rely on.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#product"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                See our product
              </a>
              <a
                href="#how"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-border bg-card px-6 text-sm font-medium text-card-foreground transition-colors hover:bg-muted"
              >
                How it works
              </a>
            </div>
          </div>
        </section>

        {/* What we do */}
        <section id="what" className="border-t border-border/60 bg-muted/40">
          <div className="mx-auto w-full max-w-6xl px-6 py-24">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-wider text-brand-500">
                What we do
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Services built for the reality of AI adoption.
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                AI moves faster than any roadmap. ThinkTrace gives you a way to
                keep up that doesn't depend on hiring an entire research team.
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
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="border-t border-border/60">
          <div className="mx-auto w-full max-w-6xl px-6 py-24">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-wider text-brand-500">
                How it works
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                A traceable path from idea to controlled rollout.
              </h2>
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
          </div>
        </section>

        {/* Product */}
        <section
          id="product"
          className="border-t border-border/60 bg-muted/40"
        >
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-brand-500">
                Product
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                AI Risk Manage
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Our flagship service. Continuously inventories the AI in your
                organization, scores it against the risks that matter, and
                surfaces the few things that actually need a human decision —
                so you can keep shipping without hand-waving the hard parts.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "Live inventory of models, prompts, and agents",
                  "Risk scoring tuned to your industry and stage",
                  "Controls and evaluators wired into your existing stack",
                  "Audit-ready trace of every change",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-500" />
                    <span className="text-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-8 inline-flex h-11 items-center justify-center rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Request a walkthrough
              </a>
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
        </section>

        {/* CTA */}
        <section id="contact" className="border-t border-border/60">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-6 py-24 sm:items-center sm:text-center">
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to leverage AI without losing the trace?
            </h2>
            <p className="max-w-xl text-base leading-7 text-muted-foreground">
              Tell us what you're building. We'll show you where ThinkTrace fits
              — and where it doesn't.
            </p>
            <a
              href="mailto:hello@thinktrace.ai"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              hello@thinktrace.ai
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo-mark.svg"
              alt=""
              width={20}
              height={20}
              aria-hidden
            />
            <span>© {new Date().getFullYear()} ThinkTrace</span>
          </div>
          <span>Services to leverage AI capability, responsibly.</span>
        </div>
      </footer>
    </div>
  );
}
