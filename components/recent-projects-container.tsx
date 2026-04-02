import Image from "next/image";
import { cn } from "@/lib/utils";
export const ProjectsContainer = () => {
  const images = {
    "hill-st": {
      src: "/gardens/hill-st/FRONT-GARDEN-2-2.jpg",
      alt: "image of deck and concrete with plants",
      title: "Hill Street",
      description: "",
    },
    kameruka: {
      src: "/gardens/kameruka/ROOF-GARDEN-2-1.jpg",
      alt: "image of rooftop garden filled with grasses, overlooking the ocean",
      title: "Kameruka",
      description: "",
    },
    "hillcrest-motel": {
      src: "/gardens/hillcrest-motel/fire-pit-and-seat-1.jpg",
      alt: "image of firepit with wooden seating and surrounding garden",
      title: "Hillcrest Motel",
      description: "",
    },
    "oceandrive-residence": {
      src: "/gardens/oceandrive-residence/driveway-angle-view.jpg",
      alt: "image of driveway and grass garden",
      title: "Ocean Drive Residence",
      description: "Ocean Drive Residence",
    },
  };

  // tic = text and image container
  const tic = "w-1/2 h-full md:w-full mx-auto flex flex-col justify-center";
  // container holds the image inside tic
  const containerClass = "w-full aspect-4/5 relative";
  // h2 project tag styles
  const projectTitle = "font-bold text-center text-2xl";

  return (
    <section className="w-full h-[clamp(30vh, 40vh, 80vh)] flex flex-col justify-center text-center dark:text-emerald-50">
      <h1 className="font-bold text-3xl mb-6">
        See More of Our Recent Projects
      </h1>

      <div className="w-full h-full md:h-4/5 flex flex-col md:flex-row md:mx-auto gap-8 md:gap-4 md:w-4/5">
        <div className={cn("", tic)}>
          <div className={cn("", containerClass)}>
            <Image
              src={images["hill-st"].src}
              alt={images["hill-st"].alt}
              fill
              className="rounded-xl object-cover"
            ></Image>
          </div>
          <h2 className={cn("", projectTitle)}>{images["hill-st"].title}</h2>
        </div>
        <div className={cn("", tic)}>
          <div className={cn("", containerClass)}>
            <Image
              src={images["kameruka"].src}
              alt={images["kameruka"].alt}
              fill
              className="rounded-xl object-cover"
            ></Image>
          </div>
          <h2 className={cn("", projectTitle)}>{images["kameruka"].title}</h2>
        </div>
        <div className={cn("", tic)}>
          <div className={cn("", containerClass)}>
            <Image
              src={images["hillcrest-motel"].src}
              alt={images["hillcrest-motel"].alt}
              fill
              className="rounded-xl object-cover"
            ></Image>
          </div>
          <h2 className={cn("", projectTitle)}>
            {images["hillcrest-motel"].title}
          </h2>
        </div>
        <div className={cn("", tic)}>
          <div className={cn("", containerClass)}>
            <Image
              src={images["oceandrive-residence"].src}
              alt={images["oceandrive-residence"].alt}
              fill
              className="rounded-xl object-cover"
            ></Image>
          </div>
          <h2 className={cn("", projectTitle)}>
            {images["oceandrive-residence"].title}
          </h2>
        </div>
      </div>
    </section>
  );
};
