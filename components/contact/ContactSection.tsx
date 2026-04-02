// components/contact/ContactSection.tsx
export function ContactSection() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-20 items-start">
        <div>
          <span className="font-label text-sm uppercase tracking-widest text-secondary font-bold mb-4 block">
            Get in touch
          </span>
          <h2 className="font-headline text-5xl text-primary font-bold mb-8">
            Ready to transform <br />
            your piece of the land?
          </h2>
          <p className="text-lg text-on-surface-variant mb-12 leading-relaxed">
            Whether you have a sprawling rural acreage or a compact urban
            sanctuary, we approach every project with the same respect for the
            Australian terrain.
          </p>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-secondary">
                location_on
              </span>
              <div>
                <p className="font-bold text-primary">Studio Location</p>
                <p className="text-on-surface-variant">
                  The Old Mill, Kyneton
                  <br />
                  Victoria, Australia
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-secondary">
                mail
              </span>
              <div>
                <p className="font-bold text-primary">Email Us</p>
                <p className="text-on-surface-variant">
                  hello@podgardens.com.au
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-surface p-8 lg:p-12 rounded-xl editorial-shadow">
          <form className="space-y-10">
            <div className="relative">
              <label className="block text-sm font-bold text-primary mb-2 uppercase tracking-wide">
                Your Name
              </label>
              <input
                className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b border-outline focus:ring-0 focus:border-primary px-0 py-3 font-body placeholder:text-outline-variant"
                placeholder="Cameron Smith"
                type="text"
              />
            </div>
            <div className="relative">
              <label className="block text-sm font-bold text-primary mb-2 uppercase tracking-wide">
                Email Address
              </label>
              <input
                className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b border-outline focus:ring-0 focus:border-primary px-0 py-3 font-body placeholder:text-outline-variant"
                placeholder="cameron@example.com"
                type="email"
              />
            </div>
            <div className="relative">
              <label className="block text-sm font-bold text-primary mb-2 uppercase tracking-wide">
                The Project
              </label>
              <select
                title="navigation field"
                className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b border-outline focus:ring-0 focus:border-primary px-0 py-3 font-body"
              >
                <option>Rural Landscape Design</option>
                <option>Coastal Garden Construction</option>
                <option>Urban Sanctuary</option>
                <option>Commercial Horticulture</option>
              </select>
            </div>
            <div className="relative">
              <label className="block text-sm font-bold text-primary mb-2 uppercase tracking-wide">
                Project Details
              </label>
              <textarea
                className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b border-outline focus:ring-0 focus:border-primary px-0 py-3 font-body placeholder:text-outline-variant"
                placeholder="Tell us about your landscape goals..."
                rows={4}
              ></textarea>
            </div>
            <button
              className="w-full bg-primary text-on-primary py-5 rounded-md font-bold text-lg hover:bg-primary-container transition-all shadow-md"
              type="submit"
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
