import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PurchaseHero } from "@/components/services/purchase/purchase-hero";
import { PurchaseProcess } from "@/components/services/purchase/purchase-process";
import { PurchaseBrands } from "@/components/services/purchase/purchase-brands";
import { PurchaseForm } from "@/components/services/purchase/purchase-form";

export const metadata: Metadata = {
  title: "Skup Zegarków - Uczciwa Wycena i Szybka Realizacja",
  description:
    "Skupujemy luksusowe zegarki w Warszawie. Rolex, Patek Philippe, Audemars Piguet i inne. Bezpłatna wycena w 24h, natychmiastowa płatność.",
};

export default function SkupPage() {
  return (
    <>
      <Navigation />
      <main>
        <PurchaseHero />
        <PurchaseProcess />
        <PurchaseBrands />
        <PurchaseForm />
      </main>
      <Footer />
    </>
  );
}
