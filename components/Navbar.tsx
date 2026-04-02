"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Process", href: "/process" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <nav
      className={`
        w-full fixed top-0 z-30 md:py-4
        grid grid-cols-8
        bg-[#010101]/90
        
        `}
    >
      <div
        className="
            col-span-2 md:col-span-1 ml-2"
      >
        <Link href="/">
          <Image
            loading="eager"
            src="/logos/logo.png"
            alt="POD Gardens logo with linear gradient"
            width={200}
            height={100}
            className=" cursor-pointer ml-2 mt-2 md:ml-6"
          />
        </Link>
      </div>

      {/* Mobile hamburger menu */}
      <div className="col-8 flex items-middle md:hidden py-2">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className={`text-white text-2xl focus:outline-none
            `}
          aria-label="Toggle navigation"
        >
          {open ? "X" : "☰"}
        </button>
      </div>

      {/* Menu */}
      <ul
        className={`
            col-span-7 text-[clamp(.65rem, 0.8rem, 1.2rem)] list-none gap-5 text-white
            flex flex-col w-full px-8 
            md:flex-row md:items-center md:static md:justify-end transition-all duration-700 
            ${open ? "max-h-96 " : "max-h-0 overflow-hidden md:max-h-none"}`}
      >
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`${
                pathname === link.href
                  ? `underline underline-offset-4 text-green-500`
                  : `hover:text-green-500 transition`
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
