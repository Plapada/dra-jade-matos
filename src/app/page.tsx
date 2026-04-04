import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFab } from "@/components/layout/whatsapp-fab";
import { HeroSection } from "@/components/sections/hero-section";
import { TrustBar } from "@/components/sections/trust-bar";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesSection } from "@/components/sections/services-section";
import { DifferentialsSection } from "@/components/sections/differentials-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FaqSection } from "@/components/sections/faq-section";
import { LocationsSection } from "@/components/sections/locations-section";
import { CtaSection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <AboutSection />
        <ServicesSection />
        <DifferentialsSection />
        <TestimonialsSection />
        <FaqSection />
        <LocationsSection />
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
