import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative min-h-179 flex items-center px-8 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 z-10">
          <span className="text-secondary font-label uppercase tracking-[0.2em] text-sm mb-4 block">
            Our Heritage
          </span>
          <h1 className="text-6xl md:text-8xl leading-tight text-primary mb-8 italic">
            Cultivating landscapes since 1993.
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant font-body max-w-xl leading-relaxed">
            Established in Merimbula in 2007, POD Gardens brings over three
            decades of horticultural mastery and structural artistry to the Bega
            Valley.
          </p>
        </div>
        <div className="md:col-span-5 relative">
          <div className=" relative aspect-4/5 bg-surface-container-high overflow-hidden rounded-lg">
            <Image
              fill
              className="w-full h-full object-cover grayscale-20 sepia-10"
              alt="Close-up of native Australian Banksia and Eucalyptus foliage in soft morning light with misty mountain background"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuApz4c4nJdpLvP5Dl0DrSGDBfWmcG-wg3V_D1tlqMa-hEtfa6rCofVVjUf081snBhH2wWOy6n5SNTT7EVr1n9ujlF4Bn60zb5b1dd_fL_pKwzB_GdjkerzLb6nf5ZVTXWgvYS-5DFzbqFL_d6uC9cWlzY-q91G0pKRRd4hpXc5S6IfUI8AOz2EUSIpOh8HP8eTewClYq0JGjJVgYKUnvcy6fvyLBweFDA4W0mQFyAKDCvzr8U3yil3I7ztLTOiA0RgYdlfJ7xOzv0Nz"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-surface-container-lowest p-8 max-w-70 hidden md:block">
            <p className="text-sm font-body italic text-tertiary">
              We don&amp;t just build gardens; we choreograph ecosystems that
              thrive in the Australian sun.
            </p>
          </div>
        </div>
      </div>
      {/* <!-- Decorative background element --> */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-surface-container-low -z-10 opacity-50"></div>
    </section>
  );
};
