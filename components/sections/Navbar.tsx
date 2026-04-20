"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section tracking
      const sections = ["about", "experience", "projects", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-bg/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "border-b border-transparent bg-bg/80 backdrop-blur-sm"
      )}
    >
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#about"
          onClick={(e) => { e.preventDefault(); handleNavClick("#about"); }}
          className="font-display font-bold text-sm text-text tracking-tight hover:text-accent transition-colors duration-200"
        >
          Hamza Ahmed
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
              className={cn(
                "nav-link text-sm font-medium transition-colors duration-200",
                activeSection === href.replace("#", "")
                  ? "text-text"
                  : "text-text-dim hover:text-text"
              )}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1.5 rounded-md hover:bg-surface transition-colors"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={cn(
              "block w-5 h-px bg-text-dim transition-all duration-300",
              menuOpen && "rotate-45 translate-y-2"
            )}
          />
          <span
            className={cn(
              "block w-5 h-px bg-text-dim transition-all duration-300",
              menuOpen && "opacity-0 scale-x-0"
            )}
          />
          <span
            className={cn(
              "block w-5 h-px bg-text-dim transition-all duration-300",
              menuOpen && "-rotate-45 -translate-y-2"
            )}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          menuOpen ? "max-h-64 border-t border-border" : "max-h-0"
        )}
      >
        <div className="px-6 py-4 flex flex-col gap-1 bg-bg">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
              className={cn(
                "py-2.5 px-3 rounded-lg text-sm font-medium transition-colors duration-200",
                activeSection === href.replace("#", "")
                  ? "text-accent bg-accent/10"
                  : "text-text-dim hover:text-text hover:bg-surface"
              )}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
