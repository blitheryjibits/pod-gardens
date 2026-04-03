"use client";
import { Hero } from "@/components/hero/HeroFaq";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChevronDown } from "lucide-react";

import { useState } from "react";

const faqs = [
  {
    question: "What areas do you service?",
    answer:
      "We are deeply rooted in regional Australia, primarily servicing the Bega Valley, Sapphire Coast, Southern Highlands, and the ACT. We specialize in projects that embrace the unique topography and climate of these regions.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A standard residential transformation usually follows a 12-18 week design and approval cycle, followed by 8-24 weeks of construction. We prioritize structural integrity and seasonal planting windows to ensure your garden thrives from day one.",
  },
  {
    question: "Do you provide maintenance after construction?",
    answer:
      "Our Garden Care division offers ongoing stewardship for the landscapes we build. We provide monthly or quarterly site visits to manage soil health, pruning, and irrigation optimization as the garden matures into its intended form.",
  },
  {
    question:
      "What is the difference between an advisory consultation and a custom design?",
    answer:
      "An Advisory Consultation is a 90-minute on-site session providing immediate horticultural advice and spatial ideas. A Custom Design is a comprehensive architectural service including site surveys, 3D modelling, material palettes, and detailed planting specifications ready for construction tenders.",
  },
  {
    question: "Do you handle DA submissions for complex projects?",
    answer:
      "Yes. For projects involving significant structural changes, pools, or heritage overlays, we manage the entire Development Application (DA) or Complying Development Certificate (CDC) process, coordinating with arborists, engineers, and local councils.",
  },
  {
    question:
      "Can you work with existing gardens or do you only do full renovations?",
    answer:
      "We approach every site with respect for its history. While we specialize in comprehensive masterplans, we often integrate mature trees and successful existing elements into a cohesive new vision that elevates the entire property.",
  },
  {
    question:
      "What materials do you typically use for rural Australian landscapes?",
    answer:
      "We favor a palette that feels grounded in the Australian bush: local sandstone, recycled hardwoods, rammed earth, and weathered steel. These materials are chosen for their longevity, fire resistance, and ability to patina beautifully over time.",
  },
  {
    question: "Do you design and build swimming pools?",
    answer:
      "Yes, we design pools as integrated elements of the landscape rather than isolated features. We manage the design, compliance, and construction, ensuring the pool sits naturally within the topography and is surrounded by considered planting.",
  },
  {
    question: "How do we prepare for our initial on-site consultation?",
    answer:
      "It's helpful to have a rough idea of your budget and a wishlist of functional needs. If you have site plans or architectural drawings of your home, please have them ready. We also recommend gathering imagery that reflects the mood you wish to achieve.",
  },
  {
    question:
      "What is your approach to water-wise and fire-resistant gardening?",
    answer:
      "Resilience is at the core of our philosophy. We utilize Smart Irrigation, drought-tolerant endemic species, and strategic defensible space zones. We design gardens that can withstand the Australian climate while remaining lush and vibrant.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />

        {/* <!-- FAQ Accordion Section --> */}
        <section className="max-w-3xl mx-auto py-16 px-8 md:px-16">
          <div className="relative h-6 mb-2">
            <span className="text-sm font-body absolute -left-3 md:-left-6 text-primary after:content-[''] after:w-24 after:h-px after:bg-secondary after:absolute after:bottom-0 after:-right-6">
              Check out our
            </span>
          </div>
          <h1 className="text-4xl font-headline mb-8 lg:mb-12 text-primary">
            FAQs
          </h1>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`accordion-item border-b border-outline-variant pb-4 ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex text-left font-bold text-lg text-primary"
                >
                  <span className="mr-auto">{faq.question}</span>
                  <ChevronDown
                    className={`
            h-5 w-5 text-secondary transition-transform duration-300
            ${activeIndex === index ? "rotate-180" : "rotate-0"}
          `}
                  />
                </button>
                <div
                  className={`mt-2 text-on-tertiary transition-all duration-400 ${
                    activeIndex === index
                      ? "max-h-screen opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <p className="pt-2 text-primary">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* <!-- Footer CTA Section --> */}
        <section className="mt-24 lg:pt-24 border-t border-outline-variant/10 text-center">
          <div className="bg-surface-container-low p-12 rounded-lg">
            <h2 className="text-4xl text-primary mb-6 leading-tight font-normal">
              Ready to start the conversation?
            </h2>
            <p className="text-tertiary mb-10 max-w-xl mx-auto">
              Our first step is always a conversation about how you live and how
              you want to move through your garden.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-secondary text-on-secondary px-10 py-4 rounded-md font-label font-bold tracking-tight hover:opacity-90 transition-opacity">
                Request a Site Visit
              </button>
              <button className="bg-primary text-on-primary px-10 py-4 rounded-md font-label font-bold tracking-tight hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                View Recent Work
                <span
                  className="material-symbols-outlined text-sm"
                  data-icon="arrow_forward"
                >
                  arrow_forward
                </span>
              </button>
            </div>
            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest text-on-surface-variant mb-2">
                Still have questions?
              </p>
              <a
                className="text-secondary font-bold hover:underline"
                href="mailto:hello@podgardens.com.au"
              >
                hello@podgardens.com.au
              </a>
            </div>
          </div>
        </section>

        {/* <!-- Decorative Botanical Graphic --> */}
        <div className="fixed bottom-0 right-0 p-12 opacity-5 select-none pointer-events-none">
          <span
            className="material-symbols-outlined text-[20rem] leading-none text-primary"
            data-icon="forest"
          >
            forest
          </span>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
