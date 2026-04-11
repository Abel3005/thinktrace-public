import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Cta } from "@/components/sections/cta";
import { Hero } from "@/components/sections/hero";
import { Product } from "@/components/sections/product";

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
