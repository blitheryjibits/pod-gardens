"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AtSign, MessageCircle, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/icons/instagram";
import { FacebookIcon } from "@/components/icons/facebook";

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
    <footer className="w-full  py-16 px-8 bg-[#f0eede] border-t border-[#c3c8c1]/20">
      <div className="max-w-8xl mx-auto flex flex-col xl:flex-row  gap-8">
        <div className="flex flex-col gap-4 mr-auto">
          <span className="font-headline font-semibold text-primary text-4xl">
            POD Gardens
          </span>
          <p className="font-body text-md uppercase tracking-widest text-secondary/80">
            © 2024 POD Gardens Landscape Design. Built for the Australian
            Terrain.
          </p>
        </div>

        {/* contact, social media and links */}
        <div className="flex flex-col md:flex-row w-full ">
          <div className="text-sm md:text-lg flex flex-col flex-1 gap-2 mb-4 md:mb-0">
            <p
              className="text-xl font-semibold text-primary md:mb-4
            after:content-[''] after:w-100% after:h-1 after:bg-on-secondary after:block"
            >
              Contact
            </p>
            <div className="flex flex-col pt-2 gap-1">
              <div className="">
                <a
                  href="tel:+33784972104"
                  className="flex items-center hover:text-secondary transition-colors duration-300"
                >
                  <Phone width={16} height={16} /> &nbsp;&nbsp; +33 7 84 97 21
                  04
                </a>
              </div>
              <div>
                <p>
                  <a
                    href="mailto:podgradens@bigpond.com"
                    className="flex items-center text-nowrap hover:text-secondary transition-colors duration-300"
                  >
                    <AtSign width={16} height={16} />
                    &nbsp;&nbsp; podgardens@bigpond.com
                  </a>
                </p>
              </div>
              <p>
                <a
                  href=""
                  className="flex items-center hover:text-secondary transition-colors duration-300"
                >
                  <MessageCircle height={16} width={16} />
                  &nbsp;&nbsp; Messenger
                </a>
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-row mb-6">
            <div className="flex flex-col flex-1 text-sm gap-2 md:gap-4 md:text-lg">
              <p
                className="text-xl md:text-center lg:text-start font-semibold text-primary
              after:content-[''] after:w-100% after:h-1 after:bg-on-secondary after:block"
              >
                Links
              </p>
              <ul className="flex flex-col gap-1 md:items-center lg:items-start">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`${
                        pathname === link.href
                          ? `underline underline-offset-4 text-primary font-bold`
                          : ` hover:text-secondary transition duration-300`
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 flex flex-col md:items-center gap-2 md:gap-4">
              <p
                className=" w-full text-xl text-center font-semibold text-primary md:mb-4
              after:content-[''] after:w-100% after:h-1 after:bg-on-secondary after:block"
              >
                Social
              </p>
              <ul className="flex flex-col gap-2 items-center md:items-start">
                <li>
                  <Link href="/">
                    <InstagramIcon className="h-12 md:h-16 text-primary hover:text-secondary/80 transition-colors duration-300" />
                  </Link>
                </li>
                <li>
                  <Link href="/facebook">
                    <FacebookIcon className="h-12 md:h-16 text-primary hover:text-secondary/80 transition-colors duration-300" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:flex-1 text-center flex flex-col gap-2 md:gap-4">
            <p className="font-bold text-2xl text-primary">
              We Are Proud <br /> Members of
            </p>
            <div className="relative mx-auto aspect-square w-full lg:w-1/2">
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

      <div className="mt-10 text-center text-xs text-secondary">
        Site created with ❤️ by Robert
      </div>
    </footer>
  );
};
