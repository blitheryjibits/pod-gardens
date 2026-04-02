import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/hero/HeroHome";
import { ServicesSection } from "@/components/services/ServicesSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        <Hero />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

// import { Header } from "@/components/Header";
// import { Navbar } from "@/components/Navbar";
// import { HomeServiceSection } from "@/components/Home-Service-Section";
// import { ShapeCard } from "@/components/ShapeCard";
// import { Footer } from "@/components/Footer";
// import { ProjectsContainer } from "@/components/recent-projects-container";
// import { AboutTeamSection } from "@/components/about-team-section";

// export default function Home() {
//   return (
//     <main className="flex flex-col gap-12 bg-background dark:bg-stone-900 dark:text-amber-50">
//       <Header
//         imageUrl="/PODGardens-Xanadu-text-overlay-579h-1220w.png"
//         position="object-contain lg:object-cover md:object-[50%_0%]"
//       />

//       <Navbar />

//       <HomeServiceSection />

//       <section className="mb-20 h-full">
//         <div className="flex md:justify-center">
//           <ShapeCard
//             imageUrl="/gardens/hill-st/BACK-GARDEN-1.jpg"
//             imageAlt="Rooftop garden covered in exotic grasses, overlooking the ocean"
//             maskUrl="/masks/smooth-rock-mask.png"
//             floatDirection="float-left"
//             title="Far South Coast Landscape Design and Construction"
//           >
//             <p>
//               POD gardens are an experienced team of professionals with industry
//               experience since 1993. We run a professional service offering
//               landscape construction and design, garden maintenance and
//               consultancy. We pride ourselves on designing and delivering garden
//               projects that work to suit the surrounding landscape and
//               architecture with a strong focus on meeting our clients&apos;
//               needs.
//             </p>
//           </ShapeCard>
//         </div>
//       </section>

//       <ProjectsContainer />

//       <AboutTeamSection />
//       <Footer />
//     </main>
//   );
// }
