import { ProductCard } from "@/components/product-card";
import { LinkButton } from "@/components/ui/button";
import { Section, SectionEyebrow, SectionTitle } from "@/components/ui/section";
import { products } from "@/content/landing";

export function Product() {
  return (
    <Section id="product" tone="muted">
      <div className="max-w-2xl">
        <SectionEyebrow>Product</SectionEyebrow>
        <SectionTitle>Trace the thinking, then leverage AI.</SectionTitle>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Each product tackles a different part of the problem — the work
          already flowing through AI, the reach you could extend with agents,
          and the bias that shapes every delegation in the first place.
        </p>
      </div>
      <div className="mt-12 flex flex-col gap-10">
        {products.map((p, idx) => (
          <ProductCard key={p.name} product={p} reverse={idx % 2 === 1} />
        ))}
      </div>
      <div className="mt-10">
        <LinkButton href="#contact">Request a walkthrough</LinkButton>
      </div>
    </Section>
  );
}
