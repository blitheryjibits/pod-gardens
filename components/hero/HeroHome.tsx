// components/hero/Hero.tsx
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative px-8 py-20 lg:py-24 max-w-8xl mx-auto overflow-hidden">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 ml-8">
          <h1 className="font-headline text-6xl lg:text-8xl text-primary leading-none font-bold mb-8">
            Built for the <br />
            <span className="italic font-normal md:ml-24">Australian</span>{" "}
            Terrain
          </h1>

          <p className="font-body text-lg text-on-surface-variant max-w-xl mb-10 leading-relaxed">
            We don&apos;t just plant gardens; we craft ecosystems. Our landscape
            architecture respects the rugged honesty of the Australian bush,
            blending native endurance with refined design.
          </p>

          <div className="flex flex-wrap gap-6">
            <button className="bg-secondary text-on-secondary px-8 py-4 rounded-md font-bold shadow-lg hover:brightness-110 transition-all flex items-center gap-2">
              Start Your Project
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </button>

            <button className="text-primary font-bold border-b-4 border-transparent hover:border-b-secondary transition-colors duration-300 py-4">
              View Recent Works
            </button>
          </div>
        </div>

        <div className="lg:col-span-4 relative">
          <div className="aspect-4/5 bg-surface-container rounded-xl overflow-hidden editorial-shadow -rotate-2">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCs0c8f0SQTm0GDbeJ92dXlsenCNeJ7KHuO73Bs9VQkXTpi-DCfGF0C_y5gA0nuC7zX0yXJjgGXXpD5Hg8eFMdLBQZRD1KRJ0fvO0DdjSzYpcqEBs6aSeJnS67gl9QrpYfSrKx6FFc1dsprAe9ZW-yIxtVXrimyn1B6C2_meNlkyZ0iTgGU6nSrjod7g0FjGZhgc1k5WmghXDkcpeVuBXEGw8CxU9B1jP5EuTp8qrW8h62aqW-F5dTf0Y3VQihg3EXogB_dgZlARdwW"
              alt="Australian native garden"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-8 -left-12 hidden lg:block w-64 aspect-square bg-surface-container-high rounded-xl overflow-hidden editorial-shadow rotate-3 p-2">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFbb-DPrzA3rc0LmXrNPTHxl3_JpDJwEQYUHytnHanZwQdogQWbDDqZBsbnHPpuFam9QhJNC4pjfWYM0OqW1Bd7owG_ALGQpC_1jcObXsOS7wBKQIJ3VoM-8vU0CqKvU21YnE5qgjkuOVyBC4mRDxSqFk08GxvVtvCv0HXiFEryr5uH4mMvimR3dnY1N43OHayTA2ZLOW9S1JHwWzy2u3sBM7rJCMM_aH4pYao3djdTrZKTshWtBTuM2ewrOGeg9yGu4i8iRs1yvym"
              alt="Close up flora"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
