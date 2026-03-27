import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { to: "/#apie-mus", label: "Apie mus" },
  { to: "/paslaugos", label: "Paslaugos" },
  { to: "/kainos", label: "Kainos" },
  { to: "/galerija", label: "Galerija" },
  { to: "/#atsiliepimai", label: "Atsiliepimai" },
  { to: "/blog", label: "Blogas" },
  { to: "/#kontaktai", label: "Kontaktai" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      role="banner"
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl shadow-card border-b border-border transition-all duration-300"
      aria-label="Pagrindinis meniu"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link to="/" aria-label="Ortovet – grįžti į pradžią" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Ortovet veterinarijos klinikos logotipas"
              className="h-16 md:h-20 w-auto object-contain rounded-2xl border border-black/70"
            />
          </Link>

          <nav role="navigation" aria-label="Svetainės navigacija" className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-4 py-2 rounded-lg text-base md:text-lg font-medium text-foreground transition-all duration-200 hover:bg-primary/10 hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+37065208000"
              aria-label="Skambinti: (0-652) 08000"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold shadow-card transition-all duration-200 hover:bg-primary-light hover:shadow-soft"
            >
              <Phone size={15} aria-hidden="true" />
              <span>(0-652) 08000</span>
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Uždaryti meniu" : "Atidaryti meniu"}
            className="md:hidden p-2 rounded-lg text-foreground transition-colors hover:bg-muted"
          >
            {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          role="navigation"
          aria-label="Mobilus meniu"
          className="md:hidden bg-card/98 backdrop-blur-xl border-t border-border shadow-deep"
        >
          <div className="container-custom py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+37065208000"
              className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-card"
              onClick={() => setMenuOpen(false)}
            >
              <Phone size={15} />
              Skambinti: (0-652) 08000
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
