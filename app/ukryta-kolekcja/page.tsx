import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { HiddenHero } from "@/components/hidden-collection/hidden-hero";
import { HiddenTeaser } from "@/components/hidden-collection/hidden-teaser";
import { HiddenAccessForm } from "@/components/hidden-collection/hidden-access-form";

export const metadata: Metadata = {
  title: "Ukryta Kolekcja - Ekskluzywne Czasomierze",
  description:
    "Dostęp do naszej ukrytej kolekcji najrzadszych i najbardziej poszukiwanych zegarków. Tylko dla wybranych kolekcjonerów.",
};

export default function UkrytaKolekcjaPage() {
  return (
    <>
      <Navigation />
      <main>
        <HiddenHero />
        <HiddenTeaser />
        <HiddenAccessForm />
      </main>
      <Footer />
    </>
  );
}
