"use client";

// components/layout/Navbar.tsx
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Process", href: "/process" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fcfae9]/80 backdrop-blur-md shadow-sm">
      <div className="flex justify-between items-center px-4 lg:px-8 py-4 max-w-8xl mx-auto">
        <span className="font-headline font-bold text-2xl md:text-4xl text-primary tracking-tighter text-nowrap">
          POD Gardens
        </span>

        {/* Mobile hamburger menu */}
        <div className="flex flex-row-reverse md:flex-row gap-4">
          <div className="flex items-middle justify-center md:hidden py-2">
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className={`text-on-surface-variant text-2xl focus:outline-none
                    `}
              aria-label="Toggle navigation"
            >
              {open ? "X" : "☰"}
            </button>
          </div>

          {/* Menu */}
          <ul
            className={`
                    list-none md:gap-3 lg:gap-5 text-on-surface-variant md:text-md
                    flex-col w-full md:pl-8 md:pr-2 lg:px-8
                    md:flex-row md:items-center md:static md:justify-center transition-all duration-700 
                    ${open ? "max-h-96 " : "hidden md:flex max-h-0 md:max-h-none"}`}
          >
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${
                    pathname === link.href
                      ? `text-primary text-xl border-b-2 border-secondary pb-1 font-bold font-headline italic tracking-tight`
                      : `font-semibold font-body hover:text-secondary transition-colors duration-300`
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button className="bg-primary text-on-primary text-sm lg:text-md text-nowrap px-3 lg:px-6 py-1 lg:py-2.5 rounded-md lg:font-bold font-semibold hover:scale-110 transition-all active:scale-95 duration-300 ease-in-out">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
