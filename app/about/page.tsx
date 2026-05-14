import { Hero } from "@/components/hero/HeroAbout";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main>
      <Hero />

      {/* <!-- Our Story Section --> */}
      <section className="bg-surface-container-low py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl text-primary mb-10 leading-snug">
                The Journey through the Bega Valley.
              </h2>
              <div className="space-y-6 text-on-surface-variant font-body leading-relaxed text-lg">
                <p>
                  Our story is etched into the rugged topography of the South
                  Coast. From the sprawling estates of the Bega Valley to
                  intimate coastal retreats, POD Gardens has evolved from a
                  boutique design firm into a full-spectrum landscape
                  powerhouse.
                </p>
                <p>
                  We bridge the gap between architectural intent and biological
                  reality. Our expertise spans sophisticated landscape design,
                  heavy construction, and delicate horticulture, ensuring every
                  project is grounded in structural integrity and botanical
                  wisdom.
                </p>
                <p>
                  In addition to our large-scale works, our boutique indoor
                  plant studio serves as a sanctuary for those looking to bring
                  the serenity of the outdoors inside, curating rare species
                  that flourish in modern living spaces.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-12">
              <div className="flex flex-col gap-4">
                <div className="relative aspect-square">
                  <Image
                    fill
                    className=" object-cover rounded-lg"
                    alt="Interior of a boutique sunlit plant studio with terracotta pots and architectural indoor plants on timber shelving"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVn4lVuyAVapMr07MVoUHcOd0_7eQVMMxk3WOlXnOMtu2_lQaih3Byu4-MFExZkYKuDQV7zPp2-5RB0hYoKsUbEjPmU5wgEupgtMtm--2s-79T3FW-RSyE_t1937QmA9BQLf9htLXlBT7-1fr-Prm2QxAjKy5ljt5dCWJYFyMISCzmVxBZEGdhqdRoS1Z2DwuqdTxpEo1ajQCLly3ZVKEvRCjsh0KRXNyQ2e7Q03ij0Qjr5FYNe7YbuyOhUtw6Hwuxd-55cZmDW9s6"
                  />
                </div>
                <div className="relative aspect-3/5 ">
                  <Image
                    fill
                    className=" object-cover rounded-lg"
                    alt="Landscaping construction site showing local sandstone walling being meticulously placed by hand"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl9mTkX7CSmzYv8YMfAUc-mKMV4dRFO3Qg2rPUAlwXZFTRC2WbI0aDeCsn287X9dTFqm1hQ-RHeWfgs8ZAeDsxXWiTUtQpy-IuieclIYBSJieNDZHRqgHZsaL30A4WjDXcDYCh8hSbM21Jg0aJSl364ZpfDUxhvhn4A-L0HuElEEOVgTN_MyxLzoL_hu8AWbJy2KDtO9xF_GxXqoSxn5d0n295risogPSymcUG-TyF2CARiSxJ5PPGzvX_fyDrl_tzMcpr-Qe6x6eq"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="relative aspect-3/5">
                  <Image
                    fill
                    className=" object-cover rounded-lg"
                    alt="Wide shot of a mature POD Gardens landscape with native grasses and timber decking overlooking the Bega Valley"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBS-4pJvN4oQtlFkAhPXo2l9RzyJf5w8lARR6R991JWCBcegJX--y5pYglrXAlBFnmKAcVNsafbacioe4Jv54rfMjOJ19xejXuxLFZQpBNiB0gsVQIvsh3-2ujc3iuuOnkp0gPDp2QigDS3do3aFDNzVp0BHFTNwgrnONgXYv6zop686eqFtylpwH44zQCePv8uIETBmwOM2vz1J4GDf3alHn-rpYuxHoPWsAgLTQZXXRAh4K4JAZyXd1gsw46uw3vxya-oa9N8rZiE"
                  />
                </div>
                <div className="relative aspect-square">
                  <Image
                    fill
                    className="bject-cover rounded-lg"
                    alt="Detail shot of oxidized clay garden ornament nestled among silver-grey foliage"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvRF-mtb2WH9_cfZseRNQXR5TkIvhuv_GQcX6G49FH9yMTLjJtoA17MK4RGZrVD5WrORMcwb5oKWttnMyF2hLUAk8itau10fzM0jVqfwZcbCvwytJnWoKXpNM1FmlEROHgM8JatWyTd_SnIzkLplrTo6sGNQpohuD3sckOfaaMbkt6LP3ARBsp-m3zxBBEGM3zpjwEoAQ3z9Ic0hCYcA20QbtU6Nd2rRqojDvlNMuKQ6zWzfp1G9UFFawtelrLeUSnoXGjOIbndTbj"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Founders Section --> */}
      <section className="py-24 px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <span className="text-secondary font-label uppercase tracking-widest text-sm mb-4 block">
              Visionaries
            </span>
            <h2 className="text-5xl text-primary italic">Paula &amp; Steve</h2>
          </div>
          <div className="bg-surface-container-high rounded-xl p-12 md:p-20 relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
              <div className="order-2 md:order-1">
                <h3 className="text-3xl text-primary mb-6">
                  Expertise with an Editorial Edge
                </h3>
                <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
                  Founders Paula Benneian and Steve Robinson bring a unique
                  perspective to the field, blending hands-on craftsmanship with
                  high-profile media experience. Their contributions to{" "}
                  <span className="font-bold italic">
                    River Cottage Australia
                  </span>{" "}
                  and{" "}
                  <span className="font-bold italic">
                    Better Homes and Gardens
                  </span>{" "}
                  have showcased their ability to translate complex landscape
                  concepts into accessible, beautiful narratives.
                </p>
                <div className="flex gap-4">
                  <div className="bg-surface p-4 rounded-lg flex-1">
                    <span className="text-secondary font-bold block mb-1">
                      Paula Benneian
                    </span>
                    <span className="text-sm text-tertiary">
                      Designer &amp; Horticulturalist
                    </span>
                  </div>
                  <div className="bg-surface p-4 rounded-lg flex-1">
                    <span className="text-secondary font-bold block mb-1">
                      Steve Robinson
                    </span>
                    <span className="text-sm text-tertiary">
                      Master Landscaper
                    </span>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="aspect-video bg-primary-container rounded-lg overflow-hidden relative">
                  <Image
                    fill
                    className="object-cover  opacity-90"
                    alt="Two professional landscape designers standing in a lush Australian garden, dressed in earthy linen and workwear, natural lighting"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1FT1gz8FOuemNOrUTZVJIiOpS23QUNBpebv8Z4Jdkf8e77nzrAFLttaZ4Tmx926xyvQ5CrIECQfNpZd3pCaNpCyRKEo8cADA3gZGvSEu7Akhd_Sqtx9HKDhW-SP9bPkueXVmRs3LBDpuSY-tDT2uKEiEj0GHActLnr374KzDIT3HGe2iOTutQJDmsV4fBOQ2EQw7UrXwQfDwAGzvNRmg-wEYcuesG4KB0ixQ6LAtgYbH4SIkYdFTVfgxXl0tHtdrQmbAS7GjCEvjv"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Our Team Section (Bento Grid) --> */}
      <section className="py-24 px-8 bg-surface-container">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl text-primary mb-4">
              The Hands on the Ground.
            </h2>
            <p className="text-on-surface-variant max-w-2xl">
              A small, dedicated team of specialists who understand the unique
              demands of the Australian soil.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* <!-- Paula --> */}
            <div className="bg-surface-container-lowest p-8 rounded-lg flex flex-col items-center text-center">
              <div className="relative w-32 h-32 rounded-2xl overflow-hidden mb-6">
                <Image
                  fill
                  className="object-cover"
                  alt="Portrait of a woman with short hair and a warm smile, wearing a green utility shirt"
                  src="/staff/happy-paula-avatar.jpeg"
                />
              </div>
              <h4 className="text-xl font-bold text-primary mb-1">
                Paula Benneian
              </h4>
              <span className="text-secondary text-sm font-label uppercase tracking-wide mb-4">
                Founder / Designer / Horticulturalist
              </span>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                The creative heartbeat of POD Gardens, Paula merges botanical
                science with intuitive design.
              </p>
            </div>
            {/* <!-- Steve --> */}
            <div className="bg-surface-container-lowest p-8 rounded-lg flex flex-col items-center text-center">
              <div className="relative w-32 h-32 rounded-2xl overflow-hidden mb-6">
                <Image
                  fill
                  className="object-cover"
                  alt="Portrait of a rugged man with silver hair and a work-worn cap, friendly expression"
                  src="/staff/happy-steve-avatar.jpeg"
                />
              </div>
              <h4 className="text-xl font-bold text-primary mb-1">
                Steve Robinson
              </h4>
              <span className="text-secondary text-sm font-label uppercase tracking-wide mb-4">
                Founder / Master Landscaper
              </span>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                With decades of structural expertise, Steve ensures our visions
                are built to withstand the elements.
              </p>
            </div>
            {/* <!-- Luke --> */}
            <div className="bg-surface-container-lowest p-8 rounded-lg flex flex-col items-center text-center">
              <div className="relative w-32 h-32 rounded-2xl overflow-hidden mb-6">
                <Image
                  fill
                  className="object-cover"
                  alt="Portrait of a young athletic man in a high-visibility work polo with a landscape backdrop"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfesGlSV1gg1K7empoZD0a1koRpwgmn6y5MwCMdFFJMUrMNpsNaKA7pEMN6mRfRt-qsbWXvip-JgG14V8hSNA7Pior0UneGn5fOv8Heswx3-Ak4bRek79aTLzEHD0pwTy7QOvjVlSWO4LcrBoNprnDWeYtI7B0Yq5keGoEbFbPXF1DyOT6OYFZRyWRtwAMz7CUxw0n8qs5QIs40NLRCm7t1feAGN3F5a8RQui0D5nUFXbf6nqR9lIeTvQ7Z5qK3a4T-vm6btJfPZUK"
                />
              </div>
              <h4 className="text-xl font-bold text-primary mb-1">
                Luke Hoogenboom
              </h4>
              <span className="text-secondary text-sm font-label uppercase tracking-wide mb-4">
                Head Landscaper
              </span>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Our site lead and construction specialist, translating
                blueprints into reality with precision.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Where We Work Section --> */}
      <section className="py-24 px-8 overflow-hidden bg-background">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <span className="text-secondary font-label uppercase tracking-widest text-sm mb-4 block">
              Our Territory
            </span>
            <h2 className="text-5xl text-primary mb-8 leading-tight">
              Serving the heart of the Bega Valley.
            </h2>
            <p className="text-lg text-on-surface-variant mb-10 leading-relaxed">
              While our roots are deep in Merimbula and the Bega Valley, we are
              nomadic in our pursuit of landscape excellence. We frequently take
              on projects across the Sapphire Coast and are always open to
              traveling for clients who share our vision for a more integrated,
              natural world.
            </p>
            <div>
              <Link href="/#contact-section" className="inline-block">
                <div className="flex gap-4 items-center cursor-pointer w-auto">
                  <div className="w-12 h-px bg-secondary"></div>

                  <span className="text-primary font-bold text-lg cursor-pointer">
                    Inquire about your location
                  </span>

                  <span className="material-symbols-outlined text-secondary cursor-pointer">
                    arrow_forward
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div
              className="h-96 md:h-125 bg-surface-container-high rounded-xl overflow-hidden grayscale-60 hover:grayscale-0 contrast-125 brightness-90 shadow-xl transition-all duration-300
              group"
            >
              <iframe
                title="google map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.992704911066!2d149.90442657524693!3d-36.89052278183918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b3e9f171d98f4db%3A0xba32f12af6ae2218!2sPod%20Gardens!5e0!3m2!1sen!2sro!4v1773738149446!5m2!1sen!2sro"
                className="w-full h-full object-cover"
              />
              <div className="group-hover:opacity-0 transition-opacity duration-300 absolute inset-0 flex items-center justify-center">
                <div className="bg-primary/90 text-on-primary px-6 py-4 rounded shadow-2xl flex items-center gap-3">
                  <span
                    className="material-symbols-outlined"
                    data-weight="fill"
                  >
                    location_on
                  </span>
                  <span className="font-body font-bold">Merimbula HQ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
