"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/solutions", label: "Solutions" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <BrainLogo />
            <span className="text-xl font-bold tracking-tight">
              BetterBrain
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors hover:text-accent-light ${
                  pathname === link.href ? "text-accent-light" : "text-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/get-started"
              className="bg-accent hover:bg-accent/80 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all hover:shadow-lg hover:shadow-accent/25"
            >
              Get Started
            </Link>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-1" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-1" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-3xl font-bold hover:text-accent-light transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/get-started"
            className="bg-accent hover:bg-accent/80 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all mt-4"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </>
  );
}

function BrainLogo() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="group-hover:scale-105 transition-transform"
    >
      <path
        d="M18 3C12.5 3 8 7 8 12c0 2.5 1 4.8 2.7 6.5C9 20.5 8 23 8 25.5 8 30 12 33 18 33s10-3 10-7.5c0-2.5-1-5-2.7-6.5C27 17 28 14.5 28 12c0-5-4.5-9-10-9z"
        stroke="white"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M18 8v20M13 12c2 1.5 5 1.5 7 0M12 18h12M13 24c2-1.5 5-1.5 7 0"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="15" cy="15" r="1" fill="#7c3aed" />
      <circle cx="21" cy="15" r="1" fill="#7c3aed" />
      <circle cx="18" cy="21" r="1" fill="#7c3aed" />
    </svg>
  );
}
