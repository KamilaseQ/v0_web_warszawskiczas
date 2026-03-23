import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ConsignmentHero } from "@/components/services/consignment/consignment-hero";
import { ConsignmentBenefits } from "@/components/services/consignment/consignment-benefits";
import { ConsignmentProcess } from "@/components/services/consignment/consignment-process";
import { ConsignmentCta } from "@/components/services/consignment/consignment-cta";

export const metadata: Metadata = {
  title: "Komis Zegarków - Sprzedaj z Naszą Pomocą",
  description:
    "Sprzedaj swój luksusowy zegarek z pomocą ekspertów. Docieramy do wyselekcjonowanego grona kolekcjonerów. Minimalne prowizje, maksymalne zyski.",
};

export default function KomisPage() {
  return (
    <>
      <Navigation />
      <main>
        <ConsignmentHero />
        <ConsignmentBenefits />
        <ConsignmentProcess />
        <ConsignmentCta />
      </main>
      <Footer />
    </>
  );
}
