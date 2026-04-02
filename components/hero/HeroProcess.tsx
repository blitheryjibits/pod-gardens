import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative px-8 lg:px-16 py-20 lg:py-32 max-w-8xl mx-auto overflow-hidden">
      <div className="flex gap-8">
        <div className="w-full relative">
          <div className="relative">
            <h1 className="font-headline text-6xl md:text-8xl leading-tight text-primary mb-8">
              Your Design Journey with{" "}
              <span className="italic text-nowrap">POD Gardens</span>
            </h1>
            <div className="absolute bottom-0 lg:-bottom-42 -right-14 md:right-0 ">
              <div className="relative w-42 lg:w-64 aspect-4/5 bg-transparent">
                <Image
                  fill
                  src="/logos/plant.png"
                  alt="small plant drawing"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed">
            We work with you at different stages through your garden design
            journey. Learn about our consultation options and landscaping
            services.
          </p>
        </div>
      </div>
    </section>
  );
};
