import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { MaskCard } from "./ui/MaskCard";

interface InfoCardProps {
  title: string;
  description?: string;
  imageUrl: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
  children: React.ReactNode;
  className: string;
  id?: string;
}

/**
 * @example
 * <InfoCard title="About Gardens"
 * imageUrl="/example/path/image.png"
 * imageAlt="vegetable garden"
 * >
 * <p>We cultivate that which we sew.</p>
 * </InfoCard>
 *
 * @default
 * imagePosition="left"
 */

export const InfoCard = ({
  title,
  description,
  imageUrl,
  imageAlt,
  imagePosition = "left",
  children,
  className,
  id,
}: InfoCardProps) => {
  const flexDirection =
    imagePosition === "right" ? "flex-row-reverse" : "flex-row";
  const floatDirection =
    imagePosition === "right" ? "float-right" : "float-left";

  return (
    <Card
      id={id}
      className={cn(
        `h-auto  border-none shadow-none p-3 
        bg-transparent transition-colors duration-500 ease-in-out`,
        className,
      )}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className={``}>
        <div className={`w-1/3 h-[30vh] ${floatDirection} stone-shape-outside`}>
          <MaskCard
            imageUrl={imageUrl}
            maskUrl={"/masks/wavy-circle.png"}
            className=""
          />
        </div>

        <div className="flex-1 md:3/4">{children}</div>
      </CardContent>
    </Card>
  );
};
