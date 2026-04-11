import Image from "next/image";
import type { Product } from "@/content/landing";

const statusLabel: Record<Product["status"], string> = {
  available: "Available",
  "in-development": "In development",
};

const statusBadgeClass: Record<Product["status"], string> = {
  available:
    "rounded-full border border-brand-500/30 bg-brand-500/10 px-2.5 py-0.5 text-xs font-medium text-brand-500",
  "in-development":
    "rounded-full border border-border bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground",
};

export function ProductCard({
  product,
  reverse = false,
}: {
  product: Product;
  reverse?: boolean;
}) {
  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="grid gap-0 lg:grid-cols-2">
        <div
          className={`relative order-first aspect-[4/3] bg-muted lg:aspect-auto ${
            reverse ? "lg:order-last" : ""
          }`}
        >
          <Image
            src={product.image.src}
            alt={product.image.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-between gap-8 p-8 lg:p-10">
          <header className="flex flex-wrap items-center gap-3">
            <h3 className="text-2xl font-semibold tracking-tight text-card-foreground">
              {product.name}
            </h3>
            <span className={statusBadgeClass[product.status]}>
              {statusLabel[product.status]}
            </span>
          </header>
          <div className="border-l-2 border-brand-500 pl-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">
              Core value
            </p>
            <p className="mt-3 text-xl font-medium leading-8 text-foreground sm:text-2xl sm:leading-9">
              {product.coreValue}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              What it does
            </p>
            {product.functions.length > 0 ? (
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
            ) : (
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Functions are still being shaped. Talk to us if you want input
                on where it lands.
              </p>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
