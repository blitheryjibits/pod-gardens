export const MapWithCard = () => {
  return (
    <section
      className="
        w-4/5 mx-auto
        lg:max-h-[clamp(400px,60vh,1200px)]
        rounded-xl mb-12
      "
    >
      <h2
        className="px-6 py-4 font-semibold text-pretty text-2xl bg-white/80 dark:bg-emerald-900/60 
        backdrop-blur-md 
        rounded-t-xl
        text-neutral-800 dark:text-neutral-100"
      >
        Pod Gardens is based in Merimbula and we service the NSW Far South
        Coast. Our team can meet you on-site across South East NSW.
      </h2>
      <div className="flex flex-col md:flex-row h-full">
        {/* Map */}
        <div className="w-full lg:w-1/2 aspect-square md:aspect-auto lg:h-auto">
          <iframe
            title="google map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.992704911066!2d149.90442657524693!3d-36.89052278183918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b3e9f171d98f4db%3A0xba32f12af6ae2218!2sPod%20Gardens!5e0!3m2!1sen!2sro!4v1773738149446!5m2!1sen!2sro"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Card */}
        <div
          className="
            w-full lg:w-1/2 h-auto
            p-8 lg:px-10 lg:py-4 
            flex flex-col justify-center 
            bg-white/80 dark:bg-emerald-900/60 
            backdrop-blur-md 
          text-neutral-800 dark:text-neutral-100
          rounded-b-xl md:rounded-bl-none
          "
        >
          <h2 className="text-2xl font-semibold mb-3">
            Our Location and Service Areas
          </h2>
          <ul className="text-pretty flex flex-col leading-relaxed mb-4 gap-6">
            <li className="relative">
              <p className="-indent-4 after:content=[''] after:absolute after:left-0 after:-bottom-4 after:w-full after:h-0.5 after:bg-gray-800">
                <span className="font-semibold">Zone 1</span>
                &nbsp;&nbsp;Eden, Merimbula, Bega, Candelo, Tathra, Mogareeka.
              </p>
            </li>
            <li className="relative">
              <p className="-indent-4 after:content=[''] after:absolute after:left-0 after:-bottom-4 after:w-full after:h-0.5 after:bg-gray-800">
                <span className="font-semibold">Zone 2</span> Consultations
                adjacent to zone 1 (e.g. Bermagui, Cobargo, Mallacoota, Cooma)
                will incur a travel fee.
              </p>
            </li>
            <li className="relative">
              <p className="-indent-4">
                <span className="font-semibold">Zone 3</span> Consults beyond
                the Bega Valley Shire (e.g. Eurobodalla Shire, Snowy Monaro
                Shire, North Gippsland) can be requested but will incur a travel
                fee and accommodation costs.
              </p>
            </li>
          </ul>

          <p className="text-sm opacity-80">
            Open Monday{"-"}Friday, 9am{"-"}5pm
          </p>
        </div>
      </div>
    </section>
  );
};
