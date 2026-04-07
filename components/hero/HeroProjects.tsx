export const Hero = () => {
  return (
    <section
      className="relative py-24 bg-[url('/gardens/hill-st/OFF-FORM-CONCRETE-AND-FIREPIT-1.jpg')] bg-cover bg-center md:rounded-xl overflow-hidden mb-16 p-8 
    z-10 before:z-0 before:pointer-events-none before:absolute before:inset-0 before:bg-linear-to-tr before:from-black/60 before:to-transparent"
    >
      <div className="z-10 flex flex-row md:flex-row items-baseline gap-2 mb-4 md:mb-8 ">
        <span className="text-secondary bg-accent/40 backdrop-blur-xs px-4 py-1 rounded-xl font-label font-bold uppercase tracking-[0.2em] text-sm md:text-md">
          Portfolio
        </span>
      </div>
      <div className="relative z-10">
        <h1 className="relative col-span-1 md:col-span-8 font-headline -tracking-[3px] text-5xl md:text-7xl lg:text-8xl xl:text-8xl text-on-tertiary leading-tight">
          Our Recent <span className="italic">Works</span>
        </h1>
        <div className="">
          <p className="text-primary-foreground  text-xl leading-relaxed font-body">
            Blending architectural intent with the raw, untamed beauty of the
            Australian terrain.
          </p>
        </div>
      </div>
    </section>
  );
};
