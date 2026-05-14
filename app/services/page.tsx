import { Hero } from "@/components/hero/HeroServices";
import Image from "next/image";

export default function Services() {
  return (
    <>
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
                href="#"
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
              02.
            </span>
            <h2 className="font-headline text-center text-4xl md:text-5xl text-primary font-bold mb-6">
              Architectural Construction
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative w-full aspect-4/3 lg:aspect-3/2 mb-4 rounded-xl overflow-hidden shadow-sm">
              <Image
                fill
                alt="stonework"
                className="w-full h-full object-cover"
                data-alt="Close-up of artisan hand-laid dry stone walling made from Australian sandstone with warm textures and clean lines"
                src="/gardens/hill-st/OFF-FORM-CONCRETE-AND-FIREPIT-2-1-1536x1010.jpg"
              />
            </div>

            <div className="flex flex-col">
              <p className="text-on-surface-variant mb-8 leading-relaxed">
                We build with longevity in mind. Utilizing local stone,
                reclaimed hardwoods, and oxidized steel, our construction team
                brings complex designs to life with a rugged, refined finish
                that weathers beautifully.
              </p>
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className="p-6 bg-surface-container-highest rounded-xl">
                  <h4 className="font-bold text-primary mb-2">Dry Stone</h4>
                  <p className="text-sm text-on-surface-variant">
                    Traditional artisan masonry for terracing and walls.
                  </p>
                </div>
                <div className="p-6 bg-surface-container-highest rounded-xl">
                  <h4 className="font-bold text-primary mb-2">Timber Craft</h4>
                  <p className="text-sm text-on-surface-variant">
                    Hardwood structures designed for the Australian climate.
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-end">
                <button className="bg-primary text-on-primary px-8 py-4 rounded-md font-bold w-full md:w-auto shadow-md hover:bg-primary-container transition-all">
                  View Construction Gallery
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Service Section 03: Horticulture & Maintenance (Bento Style) --> */}
        <section className="mb-24 lg:mb-40">
          <div className=" mb-16 max-w-2xl mx-auto">
            <span className="text-primary font-headline text-3xl md:text-4xl italic block mb-2">
              03.
            </span>
            <h2 className="font-headline text-center text-4xl md:text-5xl text-primary font-bold mb-4">
              Curated Horticulture
            </h2>
            <p className="text-on-surface-variant font-body">
              A garden is a living entity. We select resilient native and exotic
              species that thrive in local conditions, then nurture them as they
              evolve.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto">
            <div className="md:col-span-2 md:row-span-2 bg-surface-container relative rounded-xl overflow-hidden p-8 flex flex-col justify-end">
              <Image
                fill
                alt="native garden"
                className="absolute inset-0 w-full h-full object-cover opacity-80"
                data-alt="Lush private garden filled with native Australian banksias and grevilleas at golden hour with soft glowing light"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDgyQa4kYraKtSw3gR7FJqkhFKHso42tme29WG-azslFXOkFRMRN6PCMesGU4WjuOhbOW0s93ouEOntG4_rIxNfLcJraD0Ex3d-gvQv85USCZ-pPBiWFj5WwWTh6fYO1A1swb52-rwG8ifbf7mQFSO6Jbiil59SwLPnNfZ9NeQVwKo5Mj_sLVlg4FH98H39BRK7Ux-znG5xyJNgUIsYViPF_T1IRR6xrffE3a1kUYe1ysH7wTA_ZxdswJNYU54e_HE0l6oobN-NSnb"
              />
              <div className="relative text-center md:text-start z-10 bg-accent/30 backdrop-blur-xs px-4 md:px-10 py-6 rounded-lg w-fit">
                <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-3 py-1 rounded-full text-xs text-nowrap font-bold uppercase mb-4 inline-block">
                  Featured Service
                </span>
                <h3 className="text-3xl font-headline font-bold text-primary mb-4">
                  Bespoke Planting Schemes
                </h3>
                <p className="text-on-surface-variant max-w-sm text-lg font-semibold">
                  From drought-tolerant mass plantings to delicate sensory herb
                  gardens.
                </p>
              </div>
            </div>
            <div className="md:col-span-2 bg-secondary-container p-8 rounded-xl flex items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl lg:text-3xl font-bold text-on-secondary-container mb-2">
                  Soil Restoration
                </h3>
                <p className="text-on-secondary-container opacity-80 text-sm lg:text-lg">
                  Biological enrichment and terrain stabilization for long-term
                  plant health.
                </p>
              </div>
              <span className="material-symbols-outlined text-6xl! text-on-secondary-container opacity-60">
                compost
              </span>
            </div>
            <div className="flex flex-col lg:flex-row md:col-span-2 gap-4">
              <div className="bg-surface-container-high p-8 rounded-xl flex flex-col gap-2">
                <div className="flex lg:flex-col xl:flex-row gap-4 items-center lg:items-start xl:items-center">
                  <span className="material-symbols-outlined text-primary text-4xl! w-fit">
                    calendar_month
                  </span>
                  <h3 className="font-bold text-primary text-lg lg:text-2xl inline-block w-fit">
                    Seasonal Care
                  </h3>
                </div>
                <p className="text-sm text-on-surface-variant">
                  Ongoing maintenance scheduled for the Australian four-season
                  cycle.
                </p>
              </div>
              <div className="bg-primary text-on-primary p-8 rounded-xl flex flex-col gap-2">
                <div className="flex lg:flex-col xl:flex-row gap-4 items-center lg:items-start xl:items-center">
                  <span className="material-symbols-outlined text-on-primary text-4xl!">
                    psychology
                  </span>
                  <h3 className="font-bold text-lg lg:text-2xl">
                    Consultation
                  </h3>
                </div>
                <p className="text-sm opacity-80">
                  Expert advice on species selection and garden rejuvenation.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- CTA Section --> */}
        <section className="text-center py-24 bg-surface border-y border-outline-variant/20">
          <h2 className="font-headline text-5xl md:text-7xl text-primary mb-8 italic">
            Ready to break ground?
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto mb-12 text-lg">
            We are currently accepting project inquiries for the upcoming
            season. Let&apos;s discuss your terrain.
          </p>
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
    </>
  );
}
