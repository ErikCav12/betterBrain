"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "/solutions", label: "Solutions" },
  { href: "/industries-insights", label: "Industries & Insights" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/partners", label: "Partners" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
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
    return () => {
      document.body.style.overflow = "";
    };
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
            <Image
              src="/brainDark.svg"
              alt="BetterBrain"
              width={32}
              height={32}
              className="brightness-0 invert group-hover:scale-105 transition-transform"
            />
            <span className="text-xl font-bold tracking-tight">
              BetterBrain
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors hover:text-accent-light ${
                  pathname === link.href || pathname?.startsWith(link.href + "/")
                    ? "text-accent-light"
                    : "text-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button href="/contact" variant="primary" size="sm">
              Book a Discovery Workshop
            </Button>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-50 w-8 h-8 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-2xl font-bold hover:text-accent-light transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button href="/contact" variant="primary" size="lg" className="mt-4">
            Book a Discovery Workshop
          </Button>
        </nav>
      </div>
    </>
  );
}
