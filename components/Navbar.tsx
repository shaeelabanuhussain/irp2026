"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { label: "Program", href: "/#curriculum" },
  { label: "Scholarship", href: "/#merit" },
  { label: "FAQs", href: "/#faqs" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/[0.97] backdrop-blur-md ${
        scrolled ? "shadow-sm border-b border-border" : "shadow-[0_1px_0_rgba(0,0,0,0.06)]"
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-[68px] px-[clamp(16px,4vw,48px)]">
        {/* LEFT — Logo + IRP tag */}
        <a href="#" className="flex items-center gap-3 no-underline shrink-0">
          <Image
            src="/images/logo.png"
            alt="Hearts Academy"
            width={200}
            height={52}
            className="h-9 w-auto"
            priority
          />
          <span
            className="text-[0.75rem] font-mono tracking-[0.06em] text-blue font-medium hidden sm:inline-flex items-center gap-1.5 border-l border-border pl-3 ml-0.5"
            style={{
              textShadow: "0 0 12px rgba(30,141,200,0.35), 0 0 4px rgba(30,141,200,0.2)",
            }}
          >
            Industry Readiness Program
          </span>
        </a>

        {/* RIGHT — Links + Apply */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.9375rem] text-navy/65 hover:text-navy transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://forms.office.com/r/kM2prJrNgg"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-navy text-white text-[0.9375rem] font-semibold px-6 py-2.5 rounded-[8px] hover:bg-navy/90 transition"
          >
            Apply now
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-navy text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "\u2715" : "\u2630"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border px-5 pb-5 pt-3 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-[0.9375rem] text-navy/70 hover:text-navy transition-colors py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://forms.office.com/r/kM2prJrNgg"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="bg-navy text-white text-[0.9375rem] font-semibold px-4 py-2.5 rounded-[8px] text-center hover:bg-navy/90 transition mt-1"
          >
            Apply now
          </a>
        </div>
      )}
    </nav>
  );
}
