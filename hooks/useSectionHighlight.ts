"use client";

import { useEffect } from "react";

export function useSectionHighlight() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');

    const handleClick = (e: Event) => {
      const link = e.currentTarget as HTMLAnchorElement;
      const id = link.getAttribute("href");
      const target = id ? document.querySelector(id) : null;

      if (!target) return;

      // Wait for scroll to finish
      setTimeout(() => {
        void (target as HTMLElement).offsetWidth;
        target.classList.add("section-highlight");
      }, 200); // adjust if your scroll is slower/faster

      setTimeout(() => {
        target.classList.remove("section-highlight");
        void (target as HTMLElement).offsetWidth;
      }, 500); // adjust if your scroll is slower/faster
    };

    links.forEach((link) => link.addEventListener("click", handleClick));

    return () => {
      links.forEach((link) => link.removeEventListener("click", handleClick));
    };
  }, []);
}
