import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/home/hero-section";
import { CuratedCollectionSection } from "@/components/home/curated-collection-section";
import { ExpertiseSection } from "@/components/home/expertise-section";
import { BoutiquePreviewSection } from "@/components/home/boutique-preview-section";
import { ServicesOverviewSection } from "@/components/home/services-overview-section";
import { ContactCtaSection } from "@/components/home/contact-cta-section";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <CuratedCollectionSection />
        <ExpertiseSection />
        <BoutiquePreviewSection />
        <ServicesOverviewSection />
        <ContactCtaSection />
      </main>
      <Footer />
    </>
  );
}
