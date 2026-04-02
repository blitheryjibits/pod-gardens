import { MaskCard } from "./ui/MaskCard";
import { cn } from "@/lib/utils";
export const HomeServiceSection = () => {
  const maskUrl = "/masks/rectangle-and-side-skew-right.png";
  const textClass =
    "font-semibold w-1/3 md:w-full md:-ml-4 text-md md:text-2xl";
  return (
    <section className="w-full h-[60vh] lg:h-[60vh] md:h-[20vh]">
      <div
        className="h-full px-4 md:px-0 md:w-4/5 
                      flex flex-col md:flex-row mx-auto gap-4"
      >
        <div className="w-full md:w-1/3 h-full flex md:flex-col md:justify-center text-center gap-0 md:gap-2">
          <MaskCard
            imageUrl={"/designs/garden-drawing-design.webp"}
            maskUrl={maskUrl}
            className="object-cover flex-1"
          />
          <h2 className={cn("", textClass)}>Design</h2>
        </div>

        <div className="w-full md:w-1/3 h-full flex md:flex-col md:justify-center text-center gap-0 md:gap-2">
          <MaskCard
            imageUrl={"/designs/construction-2.webp"}
            maskUrl={maskUrl}
            className="flex-1 object-cover"
          />
          <h2 className={cn("", textClass)}>Construction</h2>
        </div>
        <div className="w-full md:w-1/3 h-full flex md:flex-col md:justify-center text-center gap-0 md:gap-2">
          <MaskCard
            imageUrl={"/gardens/hillcrest-motel/table-pergola-fire-pit.jpg"}
            maskUrl={maskUrl}
            className="flex-1 object-cover"
          />
          <h2 className={cn("", textClass)}>Maintenance</h2>
        </div>
      </div>
    </section>
  );
};
