import { Hero } from "@/components/hero/HeroHome";
import { ServicesSection } from "@/components/services/ServicesSection";
import { ContactSection } from "@/components/contact/ContactSection";

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <ServicesSection />
        <ContactSection />
      </main>
    </>
  );
}
