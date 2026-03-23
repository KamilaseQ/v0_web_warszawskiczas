import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { BoutiqueHero } from "@/components/boutique/boutique-hero";
import { BoutiqueExperience } from "@/components/boutique/boutique-experience";
import { BoutiqueLocation } from "@/components/boutique/boutique-location";
import { BoutiqueVisit } from "@/components/boutique/boutique-visit";

export const metadata: Metadata = {
  title: "Butik Mokotowska 71 - Warszawski Czas",
  description:
    "Odwiedź nasz butik przy Mokotowskiej 71 w Warszawie. Ekskluzywna przestrzeń, gdzie czas spotyka się z elegancją. Umów wizytę już dziś.",
};

export default function ButikPage() {
  return (
    <>
      <Navigation />
      <main>
        <BoutiqueHero />
        <BoutiqueExperience />
        <BoutiqueLocation />
        <BoutiqueVisit />
      </main>
      <Footer />
    </>
  );
}
