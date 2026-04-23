import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/hero/HeroProjects";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="pt-32 pb-24 max-w-8xl mx-auto md:px-16">
        <Hero />

        <section className="max-w-8xl mx-auto px-8 mb-16">
          <div className="flex flex-wrap gap-4 items-center justify-center border-b border-outline-variant/20 pb-8">
            <button className="px-5 py-2 bg-primary text-on-primary rounded-full font-body text-sm font-medium transition-all">
              All Projects
            </button>
            <button className="px-5 py-2 bg-surface-container text-on-surface-variant hover:bg-surface-variant rounded-full font-body text-sm font-medium transition-all">
              Residential
            </button>
            <button className="px-5 py-2 bg-surface-container text-on-surface-variant hover:bg-surface-variant rounded-full font-body text-sm font-medium transition-all">
              Rural
            </button>
            <button className="px-5 py-2 bg-surface-container text-on-surface-variant hover:bg-surface-variant rounded-full font-body text-sm font-medium transition-all">
              Coastal
            </button>
          </div>
        </section>
        {/* <!-- Project Grid (Asymmetric Bento-inspired) --> */}
        <section className="max-w-8xl mx-auto px-8 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* <!-- Project 1: The Ironbark Retreat (Rural) --> */}
            <div className="md:col-span-8 group">
              <div className="relative overflow-hidden aspect-16/10 bg-surface-container mb-6">
                <Image
                  fill
                  alt="The Ironbark Retreat"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-alt="Wide angle landscape shot of a modern timber cabin nestled in Australian bushland with silver-grey eucalyptus trees and native grasses"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy3TW7wHQEJ1PoZhsOyKwQeTt7BAYUTo1pXZj7s3lcVLTDoU8C55KkwnDqqp69rnmknOiQ3uTKK6z-pF8uNSmA5gMUeOCSQweEtoRwGl-rN-FPAX3qGs3BEv2NY3wFo1VzbgnMrb4sVC2dm3gyCinKHO-9mFytdN4S767CB8O46MQEI9kZsqFgixbOsbB1oN7FYI79CBwCSwTQiRC1NASOtJjQJ4rUyt8WBa8XlKfvqOUBxp7y60mHwy7GSRKa0mLNOcoPUcq6dKFM"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-surface/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase text-primary">
                    Rural Retreat
                  </span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 px-2">
                <div>
                  <h3 className="text-3xl font-headline text-primary mb-1">
                    The Ironbark Retreat
                  </h3>
                  <p className="text-tertiary font-body text-sm uppercase tracking-wider">
                    Victoria
                  </p>
                </div>
                <a
                  className="inline-flex items-center gap-2 text-secondary font-bold text-sm font-body border-b border-secondary pb-0.5 group-hover:gap-4 transition-all"
                  href="#"
                >
                  View Case Study{" "}
                  <span className="material-symbols-outlined text-sm cursor-pointer">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
            {/* <!-- Project 2: The Coastal Banksia (Coastal) - Portrait-ish --> */}
            <div className="md:col-span-4 group mt-0 md:mt-24 md:mb-6">
              <div className="relative overflow-hidden aspect-4/5 bg-surface-container mb-6">
                <Image
                  fill
                  alt="The Coastal Banksia"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  data-alt="Modern beachfront garden with sandstone steps, flowering banksia plants, and soft ocean mist in the background lighting"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqleMsCYqWZLZn58rVwrWGo_j4izMYNdkYqtnu4dQsbTgu-WYUXvClCSCux2uhaKf3q9WMNNuefTqLG9Zv05IYuWnuUDLp19xNXRZ8NMRSoEMz-kMswvWRYuYV7ankJegxHpVZIYKhLDFeWBPRsrLGsstLLx1KQa2hLN3XtVXZ83QrEwHhRBi8Xpdf5-zv8Lm81LRMlvfPHvuVEGzbS3Gt1XZNggzJSUwvG5O5uPQhoHmTxWIbgfdoZltY55fixg6YoU-u4V0dnTWO"
                />
                <div className="absolute top-6 left-6 md:mr-6">
                  <span className="inline-block text-center bg-surface/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase text-primary">
                    Beachfront Garden
                  </span>
                </div>
              </div>
              <div className="px-2">
                <h3 className="text-2xl font-headline text-primary mb-1">
                  The Coastal Banksia
                </h3>
                <p className="text-tertiary font-body text-sm uppercase tracking-wider mb-4">
                  Queensland
                </p>
                <a
                  className="inline-flex items-center gap-2 text-secondary font-bold text-sm font-body border-b border-secondary pb-0.5 group-hover:gap-4 transition-all"
                  href="#"
                >
                  View Case Study{" "}
                  <span className="material-symbols-outlined text-sm cursor-pointer">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
            {/* <!-- Project 3: River Red Homestead (Family Estate) --> */}
            <div className="md:col-span-5 group ">
              <div className="relative overflow-hidden aspect-4/3 bg-surface-container mb-6">
                <Image
                  fill
                  alt="River Red Homestead"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  data-alt="Large family estate home with sprawling green lawns and ancient river red gum trees under a bright blue Australian sky"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4fZSUscRMY09nb8aR2UbEvpT0O7Qf8KagOsdTvOd3MmPXsWjE7TX4E9F0GSKQy90p3tsO77FB2aB-vCnYywlrdm-iS4R3gZmPM-TXQfBRGQL3Q0jM94M2I5scZ_GG4iX_PDPK15kfiE5NztHCM5RgQZeH3Rw80-xYLWsTBmfII4pYxn28it0u2NYNEenjXagKXB3acPkNd7bOX3n3CFK4Z3f9NUtiYI5NN7Xr2gUmNnLOUy0kkCQ1Db47RGOT1ACwKPleumqzBeCG"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-surface/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase text-primary">
                    Family Estate
                  </span>
                </div>
              </div>
              <div className="px-2">
                <h3 className="text-2xl font-headline text-primary mb-1">
                  River Red Homestead
                </h3>
                <p className="text-tertiary font-body text-sm uppercase tracking-wider mb-4">
                  New South Wales
                </p>
                <a
                  className="inline-flex items-center gap-2 text-secondary font-bold text-sm font-body border-b border-secondary pb-0.5 group-hover:gap-4 transition-all"
                  href="#"
                >
                  View Case Study{" "}
                  <span className="material-symbols-outlined text-sm cursor-pointer">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
            {/* <!-- Project 4: High Country Oasis (Mountain) --> */}
            <div className="md:col-span-7 group mt-0 md:-mt-12">
              <div className="relative overflow-hidden aspect-square bg-surface-container mb-6">
                <Image
                  fill
                  alt="High Country Oasis"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  data-alt="Mountain garden with rugged stone retaining walls, alpine shrubs, and dramatic sunset colors reflecting off a small garden pool"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9KDDuGFKAt4EDZj57GMUVZfRO1ldA4IkmXuQIXGfViW11ey_Huck9Sz9U7KZbrPLwNavLtGlxhVRJafIIYHNM803Ao44sT6iUGe-I2ITxAWFmKcWUXwDfsEgHcbOIpx6FHHXFenPk6V8dM8RbwQtoj0KjMkoY28T2vb5Cir3TSVfMVhdBhGcFYRNt-UdA3vB-4TU6TSUb9r8XXbJTafdvDII_3PbNRM8wFrD7aUbXpOpMJ5kWdEEnnGz5Cxsb-yP7QnJ7bsefMoNR"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-surface/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase text-primary">
                    Mountain Garden
                  </span>
                </div>
              </div>
              <div className="px-2">
                <h3 className="text-3xl font-headline text-primary mb-1">
                  High Country Oasis
                </h3>
                <p className="text-tertiary font-body text-sm uppercase tracking-wider mb-4">
                  ACT
                </p>
                <a
                  className="inline-flex items-center gap-2 text-secondary font-bold text-sm font-body border-b border-secondary pb-0.5 group-hover:gap-4 transition-all"
                  href="#"
                >
                  View Case Study{" "}
                  <span className="material-symbols-outlined text-sm cursor-pointer">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- More Projects Placeholder --> */}
        <section className="max-w-8xl mx-auto px-8 mb-32 flex justify-center">
          <div className="w-full max-w-4xl p-12 bg-surface-container-low border border-dashed border-outline-variant/40 text-center rounded-xl">
            <p className="font-body text-on-surface-variant italic mb-6">
              Several transformative landscapes are currently in development
              across the southern highlands and coastal corridors.
            </p>
            <button className="inline-flex items-center gap-2 text-primary font-bold text-sm font-body hover:gap-4 transition-all">
              Load More Projects{" "}
              <span className="material-symbols-outlined">expand_more</span>
            </button>
          </div>
        </section>
        {/* <!-- CTA Section --> */}
        <section className="max-w-8xl mx-auto px-8 mb-40">
          <div className="bg-primary p-16 md:p-24 rounded-lg overflow-hidden relative">
            {/* <!-- Abstract Texture Overlay --> */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]"></div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-xl text-center md:text-left">
                <h2 className="text-4xl md:text-6xl font-headline text-on-primary leading-tight mb-6">
                  Ready to start your own transformation?
                </h2>
                <p className="text-primary-fixed font-body text-lg">
                  We collaborate with clients who value longevity, ecological
                  integrity, and refined Australian design.
                </p>
              </div>
              <div>
                <Link
                  href="/#contact-section"
                  className="inline-block text-center bg-secondary text-on-secondary px-10 py-5 rounded-md font-body font-bold text-lg hover:bg-secondary-container hover:text-on-secondary-container transition-all shadow-xl shadow-black/10"
                >
                  Begin Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
