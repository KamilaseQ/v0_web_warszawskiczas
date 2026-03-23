import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";

export const metadata: Metadata = {
  title: "Kontakt - Warszawski Czas",
  description:
    "Skontaktuj się z nami. Butik Warszawski Czas, Mokotowska 71, Warszawa. Umów wizytę, zapytaj o zegarek lub dowiedz się więcej o naszych usługach.",
};

export default function KontaktPage() {
  return (
    <>
      <Navigation />
      <main>
        <ContactHero />
        <div className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-7">
                <ContactForm />
              </div>
              <div className="lg:col-span-5">
                <ContactInfo />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
