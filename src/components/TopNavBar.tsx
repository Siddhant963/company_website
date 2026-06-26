"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/our-work" },
  { label: "Products", href: "/products" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function TopNavBar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 w-full h-[68px] z-50 bg-primary-container shadow-sm transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-primary-container/95" : ""
      }`}
    >
      <nav className="flex items-center justify-between px-4 md:px-margin-desktop max-w-max-width mx-auto w-full h-full">
        {/* Logo */}
        <Link href="/" className="shrink-0 flex items-center">
          <img
            src="/screen.png"
            alt="Siddhya Technology"
            className="h-11 w-auto"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const active = link.href === pathname;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  active
                    ? "text-surface-container-lowest border-b-2 border-surface-container-lowest pb-1 font-body-md text-body-md"
                    : "text-surface-container-lowest/80 hover:text-surface-container-lowest transition-colors font-body-md text-body-md"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex bg-electric-blue text-white px-6 py-2.5 rounded-lg font-semibold hover:brightness-110 transition-all text-body-md"
        >
          Get Free Consultation
        </Link>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.25 p-2"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className={`block h-0.5 w-6 bg-surface-container-lowest transition-transform duration-300 origin-center ${
              menuOpen ? "translate-y-1.75 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-surface-container-lowest transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-surface-container-lowest transition-transform duration-300 origin-center ${
              menuOpen ? "-translate-y-1.75 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden absolute top-navbar-height left-0 w-full bg-primary-container shadow-lg transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-screen pb-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-4 pt-2 gap-1">
          {NAV_LINKS.map((link) => {
            const active = link.href === pathname;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`py-3 px-2 border-b border-surface-container-lowest/10 font-body-md text-body-md ${
                  active
                    ? "text-surface-container-lowest font-bold"
                    : "text-surface-container-lowest/80"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="mt-3 bg-electric-blue text-white px-6 py-3 rounded-lg font-semibold text-center text-body-md"
          >
            Get Free Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
