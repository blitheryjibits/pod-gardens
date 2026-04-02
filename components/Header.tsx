import { cn } from "@/lib/utils";
import Image from "next/image";

interface HeaderProps {
  imageUrl?: string;
  imageAlt?: string;
  position?: string;
}

export const Header = ({ imageUrl, imageAlt, position }: HeaderProps) => {
  return (
    <header className="w-full h-[30vh] md:h-[40vh] lg:h-[60vh]">
      <div className="relative h-full w-full">
        <Image
          src={imageUrl ?? "/PODGardens-text-overlay-effect-2.jpg"}
          alt={
            imageAlt ?? "POD Gardens text wrapped behind Xanadu plant leaves"
          }
          fill
          className={cn("object-cover object-center", position)}
        />
      </div>
    </header>
  );
};
