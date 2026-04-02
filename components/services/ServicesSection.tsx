// components/services/ServicesSection.tsx
import { ServiceCard } from "@/components/services/ServiceCard";
import Image from "next/image";

export function ServicesSection() {
  return (
    <section className="bg-surface-container-low py-24 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="font-label text-sm uppercase tracking-widest text-secondary font-bold mb-4 block">
              Our Expertise
            </span>
            <h2 className="font-headline text-5xl text-primary font-bold">
              Resilient by Design
            </h2>
          </div>

          <p className="font-body text-on-surface-variant max-w-md italic">
            A garden is a long-term conversation...
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:text-2xl">
          {/* Landscape Design */}
          <ServiceCard className="md:col-span-2 bg-surface flex flex-col justify-between min-h-100">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-headline text-3xl text-primary font-bold mb-4">
                  Landscape Design
                </h3>
                <p className="text-on-surface-variant max-w-sm">
                  From conceptual masterplans to detailed planting schedules, we
                  create spaces that breathe with the environment.
                </p>
              </div>
              <span className="material-symbols-outlined text-secondary text-5xl!">
                architecture
              </span>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-4 py-1 rounded-full text-sm font-medium">
                Master Planning
              </span>
              <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-4 py-1 rounded-full text-sm font-medium">
                DA Submissions
              </span>
              <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-4 py-1 rounded-full text-sm font-medium">
                Native Specialists
              </span>
            </div>
          </ServiceCard>

          {/* Construction */}
          <ServiceCard className="bg-primary  text-on-primary flex flex-col justify-between">
            <div className="flex flex-row-reverse md:flex-col items-center md:items-start md:gap-4 justify-between mb-4">
              <span className="material-symbols-outlined text-5xl! font-bold opacity-60 ">
                foundation
              </span>
              <h3 className="font-headline text-3xl font-bold">Construction</h3>
            </div>
            <div>
              <p className="text-on-primary-container/80 mb-6">
                Master craftsmanship using local stone, timber, and sustainable
                materials built to survive the elements.
              </p>
              <a
                className="inline-flex items-center gap-2 font-bold group"
                href="#"
              >
                Learn More
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  east
                </span>
              </a>
            </div>
          </ServiceCard>

          {/* Horticulture */}
          <ServiceCard className="bg-surface-container-high flex flex-col justify-between">
            <div>
              <h3 className="font-headline text-3xl text-primary font-bold mb-4">
                Horticulture
              </h3>
              <p className="text-on-surface-variant">
                Ongoing care and maintenance tailored to the specific needs of
                Australian soil and seasonal shifts.
              </p>
            </div>
            <div className="mt-8 w-full h-32 relative">
              <Image
                alt="Garden maintenance tools"
                fill
                className="object-cover rounded-lg"
                data-alt="minimalist overhead shot of traditional gardening tools and dry eucalyptus leaves on a sun-bleached concrete surface"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJgq4K1dWOxKnkCJAy3CryfFhQxyz8mztfju9LAo8sZzxSHR3XzIoV0m1nfJ-GRYICCdkmQSw-cgnAdyjrkFf9lR0lTBliHVge3PoW3DR1oAvXNbDDizYP9pOHkfF8F_E5ZsxNCNejpbulfnSgiVauMTz88YnFAlNMll1xxhv_MbA3QY1RpRz5sgO5nI5Z8W7lmMD9IWTDtwDwwomoAyH8Wu9OFgjITngUGjUwtv4Qh31tYcISiUPaAjubsyLhlcnENmxDsO9-R_qm"
              />
            </div>
          </ServiceCard>

          {/* Portfolio */}
          <ServiceCard className="md:col-span-2 bg-secondary-container flex items-center justify-between group cursor-pointer">
            <div>
              <h3 className="font-headline text-5xl text-on-secondary-container font-bold mb-2 cursor-pointer">
                Portfolio
              </h3>
              <p className="text-on-secondary-fixed-variant cursor-pointer">
                Browse our recent rural and coastal installations across
                Australia.
              </p>
            </div>
            <div className="w-16 h-16 md:h-24 md:w-24 rounded-full bg-secondary text-on-secondary flex items-center justify-center group-hover:animate-pulse-soft">
              <span className="material-symbols-outlined text-3xl! md:text-5xl!">
                visibility
              </span>
            </div>
          </ServiceCard>
        </div>
      </div>
    </section>
  );
}
