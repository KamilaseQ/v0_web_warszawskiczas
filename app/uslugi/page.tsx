import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ServicesHero } from "@/components/services/services-hero";
import { ServicesList } from "@/components/services/services-list";
import { ServicesTrust } from "@/components/services/services-trust";

export const metadata: Metadata = {
  title: "Usługi - Serwis, Skup i Komis Zegarków",
  description:
    "Kompleksowe usługi dla posiadaczy luksusowych zegarków. Profesjonalny serwis, uczciwy skup i dyskretny komis. Mokotowska 71, Warszawa.",
};

export default function UslugiPage() {
  return (
    <>
      <Navigation />
      <main>
        <ServicesHero />
        <ServicesList />
        <ServicesTrust />
      </main>
      <Footer />
    </>
  );
}
