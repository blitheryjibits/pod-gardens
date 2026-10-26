import Image from "next/image";
import { Hero } from "@/components/hero/HeroServices";

export default function Services() {
  return (
    <main className="pt-32 pb-24 max-w-8xl mx-auto px-8 md:px-16">
      <Hero />
      {/* <!-- Service Section 01: Landscape Design --> */}
      <section className="mb-24 lg:mb-40 group">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="col-span-1 md:col-span-5 order-2 md:order-1">
            <span className="text-primary font-headline text-3xl md:text-4xl italic block mb-2">
              01.
            </span>
            <h2 className="font-headline text-4xl md:text-5xl text-primary text-center font-bold mb-6">
              Landscape Design
            </h2>
            <p className="text-on-surface-variant mb-8 leading-relaxed">
              Our design philosophy is rooted in the site&apos;s natural
              topography. We create master plans that consider wind, sun, and
              seasonal shifts, ensuring your outdoor space is a seamless
              extension of your home.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-4 text-tertiary font-medium">
                <span className="material-symbols-outlined text-secondary font-variation-settings: 'FILL' 1;">
                  eco
                </span>
                Site Analysis &amp; Concept Development
              </li>
              <li className="flex items-center gap-4 text-tertiary font-medium">
                <span className="material-symbols-outlined text-secondary font-variation-settings: 'FILL' 1;">
                  architecture
                </span>
                3D Visualization &amp; Drafting
              </li>
              <li className="flex items-center gap-4 text-tertiary font-medium">
                <span className="material-symbols-outlined text-secondary font-variation-settings: 'FILL' 1;">
                  water_drop
                </span>
                Water Management Systems
              </li>
            </ul>
            <a
              className="inline-flex items-center gap-2 text-primary font-bold border-b-2 border-secondary pb-1 hover:text-secondary transition-all"
              href="/process"
            >
              Explore Design Process{" "}
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </a>
          </div>
          <div className="col-span-1 md:col-span-7 order-1 md:order-2">
            <div className="relative aspect-4/3 md:aspect-3/5 lg:aspect-square overflow-hidden rounded-xl shadow-sm">
              <Image
                fill
                alt="landscape drawing"
                className="w-full h-full object-cover"
                data-alt="Detailed architectural site plan and landscape design sketch on a rustic wooden table with drafting tools and native plants nearby"
                src="/gardens/hill-st/BACK-GARDEN-1.jpg"
              />
              <div className="absolute inset-0 bg-primary/5 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Service Section 02: Architectural Construction --> */}
      <section className="mb-24 lg:mb-40 bg-surface-container-low -mx-8 px-8 py-24 rounded-[2rem]">
        <div className="flex flex-col gap-4">
          <span className="text-primary font-headline text-3xl md:text-4xl italic block mb-2">
            01.
          </span>
          <h2 className="font-headline text-4xl md:text-5xl text-primary text-center font-bold mb-6">
            Landscape Design
          </h2>
          <p className="text-on-surface-variant mb-8 leading-relaxed">
            Our design philosophy is rooted in the site&apos;s natural
            topography. We create master plans that consider wind, sun, and
            seasonal shifts, ensuring your outdoor space is a seamless extension
            of your home.
          </p>
          <ul className="space-y-4 mb-10">
            <li className="flex items-center gap-4 text-tertiary font-medium">
              <span className="material-symbols-outlined text-secondary font-variation-settings: 'FILL' 1;">
                eco
              </span>
              Site Analysis &amp; Concept Development
            </li>
            <li className="flex items-center gap-4 text-tertiary font-medium">
              <span className="material-symbols-outlined text-secondary font-variation-settings: 'FILL' 1;">
                architecture
              </span>
              3D Visualization &amp; Drafting
            </li>
            <li className="flex items-center gap-4 text-tertiary font-medium">
              <span className="material-symbols-outlined text-secondary font-variation-settings: 'FILL' 1;">
                water_drop
              </span>
              Water Management Systems
            </li>
          </ul>
          <a
            className="inline-flex items-center gap-2 text-primary font-bold border-b-2 border-secondary pb-1 hover:text-secondary transition-all"
            href="/process"
          >
            Explore Design Process{" "}
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </a>
        </div>
        <div className="col-span-1 md:col-span-7 order-1 md:order-2">
          <div className="relative aspect-4/3 md:aspect-3/5 lg:aspect-square overflow-hidden rounded-xl shadow-sm">
            <Image
              fill
              alt="landscape drawing"
              className="w-full h-full object-cover"
              data-alt="Detailed architectural site plan and landscape design sketch on a rustic wooden table with drafting tools and native plants nearby"
              src="/gardens/hill-st/BACK-GARDEN-1.jpg"
            />
            <div className="absolute inset-0 bg-primary/5 mix-blend-multiply"></div>
          </div>
        </div>
      </section>
      {/*<!-- Service Section 02: Architectural Construction -->*/}
      <section className="mb-24 lg:mb-40 bg-surface-container-low -mx-8 px-8 py-24 rounded-[2rem]">
        <div className="flex flex-col gap-4">
          <span className="text-primary font-headline text-3xl md:text-4xl italic block mb-2">
            02.
          </span>
          <h2 className="font-headline text-center text-4xl md:text-5xl text-primary font-bold mb-6">
            Architectural Construction
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto mb-12 text-lg">
            We are currently accepting project inquiries for the upcoming
            season. Let&apos;s discuss your terrain.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <button
            type="button"
            className="bg-secondary text-on-secondary px-10 py-5 rounded-md font-bold text-lg hover:brightness-110 transition-all duration-300"
          >
            Book a Site Visit
          </button>
          <button
            type="button"
            className="border-2 border-primary text-primary px-10 py-5 rounded-md font-bold text-lg hover:bg-primary hover:text-on-primary transition-all duration-300"
          >
            View Our Projects Portfolio
          </button>
        </div>
      </section>
    </main>
  );
}
