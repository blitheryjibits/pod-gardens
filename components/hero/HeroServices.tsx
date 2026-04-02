export const Hero = () => {
  return (
    <section className="mb-12 md:mb-24 lg:mb-54">
      <div className="flex flex-col md:flex-row items-baseline gap-4 mb-4 md:mb-8">
        <span className="text-secondary font-label font-bold uppercase tracking-[0.2em] text-sm md:text-md">
          Our Expertise
        </span>
        <div className="h-px w-24 bg-outline-variant"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
        <h1 className="col-span-1 md:col-span-8 font-headline -tracking-[3px] text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-primary leading-tight italic">
          Cultivating the <br />
          <span className="not-italic font-bold">Australian Soul.</span>
        </h1>
        <div className="col-span-1 md:col-span-4 self-end pb-4">
          <p className="text-on-surface-variant text-xl leading-relaxed font-body">
            We blend architectural precision with a deep respect for the rugged
            beauty of the Australian terrain, creating landscapes that endure.
          </p>
        </div>
      </div>
    </section>
  );
};
