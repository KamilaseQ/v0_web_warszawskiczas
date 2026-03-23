import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { RepairHero } from "@/components/services/repair/repair-hero";
import { RepairProcess } from "@/components/services/repair/repair-process";
import { RepairServices } from "@/components/services/repair/repair-services";
import { RepairCta } from "@/components/services/repair/repair-cta";

export const metadata: Metadata = {
  title: "Naprawa i Serwis Zegarków - Profesjonalna Obsługa",
  description:
    "Profesjonalny serwis luksusowych zegarków w Warszawie. Przeglądy, naprawy, polerowanie i renowacja. Certyfikowane części zamienne.",
};

export default function NaprawaISerwisPage() {
  return (
    <>
      <Navigation />
      <main>
        <RepairHero />
        <RepairProcess />
        <RepairServices />
        <RepairCta />
      </main>
      <Footer />
    </>
  );
}
