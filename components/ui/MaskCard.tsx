import { cn } from "@/lib/utils";

type MaskCardProps = {
  maskUrl: string;
  imageUrl: string;
  className?: string;
};

export const MaskCard = ({ maskUrl, imageUrl, className }: MaskCardProps) => {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
        maskImage: `url(${maskUrl})`,
      }}
      className={cn(
        `bg-cover bg-center bg-no-repeat
        mask-contain mask-center mask-no-repeat 
        h-full `,
        className,
      )}
    ></div>
  );
};
