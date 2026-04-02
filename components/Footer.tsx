"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AtSign, MessageCircle, Phone } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="w-full mt-24 py-16 px-8 bg-[#f0eede] border-t border-[#c3c8c1]/20">
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-4">
          <span className="font-headline font-semibold text-primary text-4xl">
            POD Gardens
          </span>
          <p className="font-body text-md uppercase tracking-widest text-secondary/80">
            © 2024 POD Gardens Landscape Design. Built for the Australian
            Terrain.
          </p>
        </div>

        {/* contact, social media and links */}
        <div className="flex flex-col md:flex-row w-full gap-4">
          <div className="text-sm md:text-lg flex flex-col flex-1 gap-2">
            <p className="text-xl font-semibold text-primary">Contact</p>
            <div className="flex flex-col pt-2 gap-1">
              <div className="">
                <a href="tel:+33784972104" className="flex hover:text-primary">
                  <Phone width={16} height={16} /> &nbsp;&nbsp; +33 7 84 97 21
                  04
                </a>
              </div>
              <div>
                <p>
                  <a
                    href="mailto:podgradens@bigpond.com"
                    className="flex flex-row text-nowrap hover:text-primary"
                  >
                    <AtSign width={16} height={16} />
                    &nbsp;&nbsp; podgardens@bigpond.com
                  </a>
                </p>
              </div>
              <p>
                <a href="" className="flex hover:text-primary">
                  <MessageCircle height={16} width={16} />
                  &nbsp;&nbsp; Messenger
                </a>
              </p>
            </div>
          </div>
          <div className="flex flex-col flex-1 text-sm md:text-lg ">
            <p className="text-xl font-semibold text-primary">Links</p>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  pathname === link.href
                    ? `underline underline-offset-4 text-green-500`
                    : ` hover:text-green-500 transition`
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="md:flex-1 text-center flex md:flex-col gap-1 md:gap-4">
            <p className="font-bold md:text-xl text-primary">
              We Are Proud <br /> Members of
            </p>
            <div className="relative mx-auto aspect-square w-1/4">
              <Image
                src="/logos/landscape-association.png"
                alt="landscape association logo"
                fill
                className="object-cover min-h-20"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-purple-200">
        Site created with ❤️ by Robert
      </div>
    </footer>
  );
};
