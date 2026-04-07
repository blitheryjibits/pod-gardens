import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/hero/HeroHome";
import { ServicesSection } from "@/components/services/ServicesSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
