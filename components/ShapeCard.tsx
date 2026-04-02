import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import { MaskCard } from "./ui/MaskCard";

interface ShapCardProps {
  imageUrl: string;
  imageAlt: string | "image";
  maskUrl: string;
  floatDirection: "float-left" | "float-right";
  title: string;
  children?: React.ReactNode;
}

export const ShapeCard = ({
  imageUrl,
  imageAlt,
  maskUrl,
  floatDirection,
  title,
  children,
}: ShapCardProps) => {
  return (
    <Card className="w-full md:w-4/5 justify-self-center border-none shadow-none bg-chart-3 text-emerald-50">
      <CardTitle className="text-2xl px-6 text-center text-pretty">
        {title}
      </CardTitle>

      <CardContent className="px-6">
        <MaskCard
          imageUrl={imageUrl}
          maskUrl={maskUrl}
          className={`
          w-25 h-45
          ${floatDirection} my-auto
          stone-shape-outside mask-left
          scroll-slide-left
        `}
        />

        <div className="scroll-slide-right">{children}</div>
      </CardContent>
    </Card>
  );
};
