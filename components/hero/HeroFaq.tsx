export const Hero = () => {
  return (
    <section className="pt-24 lg:pt-32 px-8 max-w-7xl mx-auto">
      <div>
        <span className="text-secondary font-label font-bold uppercase tracking-[0.2em] text-sm md:text-md">
          Knowledge Base
        </span>
        <div className="h-px w-24 bg-outline-variant inline-block ml-4"></div>
        <h1 className="text-6xl md:text-8xl xl:text-9xl text-primary leading-tight font-extralight italic mt-4 mb-8">
          Cultivating Clarity
        </h1>
        <p className="text-on-surface-variant font-body text-lg xl:text-xl max-w-2xl mx-auto">
          Practical answers to common questions about our process and services.
          For more detail feel free to reach out to our team directly through
          email or by phone.
        </p>
      </div>
    </section>
  );
};
