import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { OfferHero } from "@/components/offer/offer-hero";
import { ProductFilters } from "@/components/offer/product-filters";
import { ProductGrid } from "@/components/offer/product-grid";
import { OfferCta } from "@/components/offer/offer-cta";

export const metadata: Metadata = {
  title: "Oferta - Luksusowe Zegarki i Biżuteria",
  description:
    "Odkryj naszą wyselekcjonowaną kolekcję luksusowych zegarków i biżuterii. Rolex, Patek Philippe, Audemars Piguet i wiele innych prestiżowych marek.",
};

export default function OfertaPage() {
  return (
    <>
      <Navigation />
      <main>
        <OfferHero />
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <ProductFilters />
            <ProductGrid />
          </div>
        </section>
        <OfferCta />
      </main>
      <Footer />
    </>
  );
}
