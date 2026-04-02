import { Hero } from "@/components/hero/HeroProcess";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";

export default function Process() {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* <!-- Step 1: Advisory --> */}
      <section className="bg-surface-container-low py-24 mb-32">
        <div className="inline-block bg-secondary text-on-secondary ml-16 px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-6 font-label uppercase">
          Step 01
        </div>
        <div className="max-w-8xl mx-auto px-8 lg:px-16 flex flex-col md:flex-row gap-6 xl:gap-12 items-center">
          <div className="relative aspect-4/5 w-full mb-4">
            <Image
              fill
              alt="Aussie garden advisory"
              className=" object-cover rounded-xl shadow-xl -rotate-2"
              data-alt="A professional landscape designer pointing at native Australian plants in a sunny suburban backyard, notebook in hand, warm natural lighting"
              src="/gardens/hillcrest-motel/table-pergola-fire-pit.jpg"
            />
          </div>
          <div className="md:pl-12">
            <h2 className="font-headline text-4xl md:text-6xl text-primary mb-6">
              2-hour Garden Advisory Consultation
            </h2>
            <p className="font-body text-lg text-on-surface-variant mb-8 leading-relaxed">
              The foundation of every great garden. This intensive session is
              the first step for vision-building. We conduct a thorough on-site
              walk-through to understand your soil, climate, and lifestyle
              needs.
            </p>
            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-secondary">
                  architecture
                </span>
                <p className="font-body text-on-surface">
                  Professional mood board provided as a PDF following the visit.
                </p>
              </div>
              <div className="bg-surface-container-high p-6 rounded-lg border-l-4 border-secondary italic">
                <p className="font-body text-on-surface-variant">
                  <strong>NOTE:</strong> This is a vision-building exercise and
                  does not constitute a full custom design or technical
                  specification.
                </p>
              </div>
            </div>

            <button className="mx-auto bg-primary text-on-primary px-8 py-4 rounded-md font-body font-bold text-lg hover:opacity-90 transition-all flex items-center gap-3">
              Book a 2-hour consult
              <span className="material-symbols-outlined">event_available</span>
            </button>
          </div>
        </div>
      </section>
      {/* <!-- Step 2: Site Visit --> */}
      <section className="max-w-8xl mx-auto px-8 lg:px-16 mb-32">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:pr-12">
            <div className="inline-block bg-secondary text-on-secondary px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-6 font-label uppercase">
              Step 02
            </div>
            <h2 className="font-headline text-4xl md:text-6xl text-primary mb-6">
              Custom Design Site Visit &amp; Assessment
            </h2>
            <p className="font-body text-lg text-on-surface-variant mb-8 leading-relaxed">
              Move beyond advice into deep planning. This collaborative meeting
              with <span className="text-primary font-bold">Paula or Luke</span>{" "}
              is where your vision gets its structural backbone. We dive deep
              into the technicalities of your landscape.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 font-body text-on-surface">
                <span className="material-symbols-outlined text-primary font-variation-settings: 'FILL' 1;">
                  check_circle
                </span>
                Expert guidance on complex design concepts
              </li>
              <li className="flex items-center gap-3 font-body text-on-surface">
                <span className="material-symbols-outlined text-primary font-variation-settings: 'FILL' 1;">
                  check_circle
                </span>
                Curated material palettes (stone, timber, metal)
              </li>
              <li className="flex items-center gap-3 font-body text-on-surface">
                <span className="material-symbols-outlined text-primary font-variation-settings: 'FILL' 1;">
                  check_circle
                </span>
                Plant selections tailored to Aussie bush resilience
              </li>
            </ul>
            <button className="bg-[#8d4e2d] text-white px-8 py-4 rounded-md font-body font-bold text-lg hover:bg-opacity-90 transition-all flex items-center gap-3">
              Call to discuss a custom design
              <span className="material-symbols-outlined">phone_in_talk</span>
            </button>
          </div>
          <div className="relative w-full aspect-4/5 rotate-2 after:absolute after:inset-0 after:bg-linear-to-tr after:from-transparent after:to-black/40 after:rounded-xl">
            <div className="absolute bg-transparent -rotate-2 -top-[3%] -left-[3%] w-[106%] h-[106%] border-2 border-primary-container/20 rounded-xl"></div>
            <Image
              fill
              alt="Design assessment"
              className="object-cover rounded-xl "
              data-alt="Overhead view of a landscape architect's hands over a detailed site plan with swatches of stone and wood, earthy tones"
              src="/gardens/kameruka/ROOF-GARDEN-2-1.jpg"
            />
          </div>
        </div>
      </section>
      {/* <!-- Step 3: Concept Design --> */}
      <section className="bg-primary text-on-primary py-24">
        <div className="max-w-8xl mx-auto px-8 lg:px-16">
          <div className=" mb-16">
            <div className="inline-block bg-secondary text-on-secondary px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-6 font-label uppercase">
              Final Step
            </div>
            <h2 className="text-center font-headline text-5xl md:text-7xl mb-6">
              Concept Design &amp; Quote
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center">
            <div className="">
              <div className="bg-white/10 p-10 rounded-2xl border border-white/10">
                <p className="font-body text-xl mb-8 leading-relaxed text-on-primary-container">
                  Following the site visit, Paula creates a tailored concept
                  that bridges the gap between your dreams and the physical
                  reality of the site.
                </p>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="bg-secondary p-3 rounded-full h-fit">
                      <span className="material-symbols-outlined text-white">
                        chat
                      </span>
                    </div>
                    <div>
                      <h4 className="font-headline text-2xl mb-2">
                        Open Communication
                      </h4>
                      <p className="font-body opacity-80">
                        Iterative feedback loops ensuring the design evolves
                        with your input.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="bg-secondary p-3 rounded-full h-fit">
                      <span className="material-symbols-outlined text-white">
                        payments
                      </span>
                    </div>
                    <div>
                      <h4 className="font-headline text-2xl mb-2">
                        Investment Transparency
                      </h4>
                      <p className="font-body opacity-80">
                        A comprehensive final quote provided for full clarity
                        before ground is broken.
                      </p>
                    </div>
                  </div>
                </div>
                <button className="mt-12 w-full bg-white text-primary px-8 py-5 rounded-md font-body font-extrabold text-xl hover:bg-surface-container-lowest transition-all">
                  Call to discuss a custom design
                </button>
              </div>
            </div>
            <div className="relative w-full aspect-5/4 lg:aspect-4/5 ">
              <Image
                fill
                alt="Concept drawing"
                className="w-full aspect-video object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
                data-alt="Professional landscape architectural drawing with green watercolor accents showing a top-down garden layout with Australian native trees"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxYiV2SLa3IKPA-zp6tUUUF1vjJYYfwx8ardflZ3RYYLNx-YGJCXwUXs9qz0KH6fkrKiq8giNXDIn7jM6Qqx_N5EElUYLhIKy11f7AAUqvEiMq6KdARJxxzhMRlmR7v4pntaliNDgOoqNVHMHc988TJNGg6NK6O1B8c8XZEgp0SkGOl658davhE373jbFumgjNxteTIIxtyOvyEcLcir81jiO3rjiVqKiQtOlSPp7WxgcRGmjYEocLrAYM5GwFeqn92Lyd_nReRxan"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Asymmetric Footer CTA --> */}
      <section className="max-w-8xl mx-auto px-8 py-32 text-center md:text-left">
        <div className="editorial-grid">
          <div className="col-span-12 md:col-start-2 md:col-span-10">
            <h3 className="font-headline text-4xl md:text-5xl text-on-surface mb-8 italic">
              Great gardens don&apos;t just happen; they are grown from a
              well-tended plan.
            </h3>
            <div className="flex flex-col md:flex-row gap-8 items-center justify-between border-t border-outline-variant pt-12">
              <p className="font-body text-on-surface-variant max-w-sm">
                Ready to start? Let&apos;s take the first step together on your
                Australian landscape journey.
              </p>
              <div className="flex gap-4">
                <a
                  className="text-primary font-bold font-body text-lg border-b-2 border-secondary pb-1 hover:text-secondary transition-all"
                  href="#"
                >
                  View Our Portfolio
                </a>
                <a
                  className="text-primary font-bold font-body text-lg border-b-2 border-secondary pb-1 hover:text-secondary transition-all"
                  href="#"
                >
                  Meet the Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
