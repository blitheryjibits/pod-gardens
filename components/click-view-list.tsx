"use client";
import { cn } from "@/lib/utils";
import { useSectionHighlight } from "@/hooks/useSectionHighlight";

interface ClickViewProps {
  className?: string;
}
export const ClickViewList = ({ className }: ClickViewProps) => {
  useSectionHighlight();
  return (
    <div className={cn("w-full", className)}>
      <ul className="flex justify-between style-none arrow-list">
        <li className="">
          <a href="#consultation" className="list-link">
            Advisory <br /> Consultation
            <span></span>
          </a>
        </li>
        <li>
          <a href="#assesment" className="list-link">
            Visit &<br />
            Assesment
            <span></span>
          </a>
        </li>
        <li>
          <a href="#quote" className="list-link">
            Design &<br />
            Quote
            <span></span>
          </a>
        </li>
        <li>
          <a href="#installation" className="list-link">
            Construction &<br />
            Installation
            <span></span>
          </a>
        </li>
        <li>
          <a href="#maintenance" className="list-link">
            Establish <br />& Maintain
          </a>
        </li>
      </ul>
    </div>
  );
};
