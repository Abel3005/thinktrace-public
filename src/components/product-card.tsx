import Image from "next/image";
import { LinkButton } from "@/components/ui/button";
import type { Product } from "@/content/landing";

const statusLabel: Record<Product["status"], string> = {
  available: "Available",
  "in-development": "In development",
};

const statusBadgeClass: Record<Product["status"], string> = {
  available:
    "inline-flex items-center gap-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 px-2.5 py-0.5 text-xs font-medium text-brand-500",
  "in-development":
    "inline-flex items-center gap-1.5 rounded-full border border-border bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground",
};

const statusDotClass: Record<Product["status"], string> = {
  available: "h-1.5 w-1.5 rounded-full bg-brand-500",
  "in-development": "h-1.5 w-1.5 rounded-full bg-muted-foreground/60",
};

const ctaLabel: Record<Product["status"], string> = {
  available: "Request a walkthrough",
  "in-development": "Join early access",
};

export function ProductCard({
  product,
  index,
  reverse = false,
}: {
  product: Product;
  index: number;
  reverse?: boolean;
}) {
  const indexLabel = String(index + 1).padStart(2, "0");
  const contactHref = `mailto:contact@thinktrace.net?subject=${encodeURIComponent(
    `${product.name} — ${ctaLabel[product.status]}`,
  )}`;

  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
      <div className="grid gap-0 lg:grid-cols-2">
        <div
          className={`relative order-first aspect-[4/3] overflow-hidden bg-muted lg:aspect-auto ${
            reverse ? "lg:order-last" : ""
          }`}
        >
          <Image
            src={product.image.src}
            alt={product.image.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <div className="absolute left-4 top-4">
            <span className={statusBadgeClass[product.status]}>
              <span className={statusDotClass[product.status]} />
              {statusLabel[product.status]}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-8 p-8 lg:p-10">
          <header className="flex flex-col gap-3">
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Product {indexLabel}
            </p>
            <h3 className="text-2xl font-semibold tracking-tight text-card-foreground sm:text-3xl">
              {product.name}
            </h3>
          </header>
          <div className="border-l-2 border-brand-500 pl-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">
              Core value
            </p>
            <p className="mt-3 text-xl font-medium leading-8 text-foreground sm:text-2xl sm:leading-9">
              {product.coreValue}
            </p>
          </div>
          <div className="flex-1">
            {product.functions.length > 0 ? (
              <>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  What it does
                </p>
                <ol className="mt-3 space-y-3 text-sm">
                  {product.functions.map((f, i) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-500/10 font-mono text-[11px] font-semibold text-brand-500">
                        {i + 1}
                      </span>
                      <span className="leading-6 text-foreground">{f}</span>
                    </li>
                  ))}
                </ol>
              </>
            ) : (
              <div className="rounded-xl border border-dashed border-border bg-muted/40 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                  Shaping with early partners
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  We&apos;re designing {product.name} alongside the teams who
                  will rely on it. Join early and help decide what it becomes.
                </p>
              </div>
            )}
          </div>
          <div className="pt-2">
            <LinkButton href={product.hrefservice} target="_blank" variant="secondary" size="sm">
              {ctaLabel[product.status]}
              <span aria-hidden>→</span>
            </LinkButton>
          </div>
        </div>
      </div>
    </article>
  );
}
