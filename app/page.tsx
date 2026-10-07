import { ContactSection } from "@/components/contact/ContactSection";
import { Hero } from "@/components/hero/HeroHome";
import { ServicesSection } from "@/components/services/ServicesSection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <ContactSection />
    </main>
  );
}
