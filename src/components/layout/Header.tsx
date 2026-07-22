"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig, navItems } from "@/data/site";

export function Header() {
  const [activeHref, setActiveHref] = useState(navItems[0].href);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let frameId = 0;

    function updateActiveSection() {
      const headerOffset = 120;
      const scrollPosition = window.scrollY + headerOffset;
      let currentHref = navItems[0].href;

      navItems.forEach((item) => {
        const section = document.getElementById(item.href.replace("#", ""));

        if (!section) {
          return;
        }

        if (section.offsetTop <= scrollPosition) {
          currentHref = item.href;
        }
      });

      setActiveHref(currentHref);
    }

    function handleScroll() {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateActiveSection);
    }

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-8 sm:h-18 md:h-20 lg:px-5">
        <a className="leading-none" href="#home">
          <span className="block text-xl font-bold text-primary sm:text-2xl">
            {siteConfig.name}
          </span>
          <span className="block text-xs text-text-muted">
            {siteConfig.tagline}
          </span>
        </a>
        <button
          aria-label="Open navigation"
          className="inline-flex cursor-pointer items-center justify-center text-black lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          type="button"
        >
          {isOpen ? <X size={38} /> : <Menu size={38} />}
        </button>
        <nav className="hidden items-center gap-8 text-sm font-semibold text-text-primary lg:flex">
          {navItems.map((item) => (
            <a
              className={`border-b-2 py-2 transition ${
                activeHref === item.href
                  ? "border-primary text-primary"
                  : "border-transparent text-text-primary"
              }`}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {isOpen && (
        <div className="absolute lg:hidden right-4 mt-4 max-w-sm rounded-3xl bg-white p-8 shadow-xl">
          <nav className="flex flex-col gap-6 text-md sm:text-xl font-medium">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`w-fit border-b-2 ${
                  activeHref === item.href
                    ? "border-primary text-primary"
                    : "border-transparent text-text-primary"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
