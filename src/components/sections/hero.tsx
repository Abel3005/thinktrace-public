import { LinkButton } from "@/components/ui/button";
import { heroOutcomes } from "@/content/landing";

export function Hero() {
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
          <LinkButton href="#product" size="lg" variant="secondary">
            See our products
          </LinkButton>
          <LinkButton href="#contact" size="lg">
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
