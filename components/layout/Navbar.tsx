"use client";
// components/layout/Navbar.tsx
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TextAlignJustify, X } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    pathname === href
      ? `text-primary text-lg font-bold font-headline tracking-tight`
      : `font-semibold font-body text-on-surface-variant hover:text-secondary transition-colors duration-300`;

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
        <div className="h-100% bg-transparent flex-1">
          <input
            title="sidebar-active"
            type="checkbox"
            name="sidebar-active"
            id="sidebar-active"
            className="hidden peer"
          />
          <label
            id=""
            htmlFor="sidebar-active"
            className="md:hidden peer-checked:hidden
          absolute right-2 top-[50%] -translate-y-[50%]"
          >
            <TextAlignJustify />
          </label>

          {/* menu list */}
          <ul
            className={`absolute top-0 -right-full w-1/2 md:w-full h-fit
              flex flex-col gap-4
              bg-background/60 backdrop-blur-xs 
              peer-checked:right-0
              transtition-all duration-300
              md:max-w-fit md:flex md:flex-row md:right-0 md:h-full
              md:gap-0 md:pt-0 md:pr-4 md:text-sm
              
              `}
          >
            <li className="ml-auto mr-4 mt-4 md:hidden">
              <label htmlFor="sidebar-active">
                <X />
              </label>
            </li>
            {links.map((item) => (
              <li
                key={item.href}
                id={item.label}
                className="md:flex md:items-center text-accent"
              >
                <Link
                  href={item.href}
                  className={`py-1 md:px-2 rounded-md block text-center ${linkClass(item.href)}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="hidden md:flex items-center">
              <button className="bg-primary text-on-primary text-sm lg:text-md text-nowrap px-3 lg:px-6 py-1 lg:py-2.5 rounded-md lg:font-bold font-semibold hover:scale-110 transition-all active:scale-95 duration-300 ease-in-out">
                Get Started
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
