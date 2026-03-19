import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { href: "/#apie-mus", label: "Apie mus" },
  { href: "/#paslaugos", label: "Paslaugos" },
  { href: "/kainos", label: "Kainos" },
  { href: "/galerija", label: "Galerija" },
  { href: "/#atsiliepimai", label: "Atsiliepimai" },
  { href: "/blog", label: "Blogas" },
  { href: "/#kontaktai", label: "Kontaktai" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isDark = scrolled || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDark
          ? "bg-card/95 backdrop-blur-xl shadow-card border-b border-border"
          : "bg-transparent"
      }`}
      aria-label="Pagrindinis meniu"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" aria-label="Ortovet – grįžti į pradžią" className="flex items-center gap-3 group">
            <img src={logo} alt="Ortovet" className="h-14 w-auto object-contain" />
          </Link>

          <nav role="navigation" aria-label="Svetainės navigacija" className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-primary/10 hover:text-primary ${
                  isDark ? "text-foreground" : "text-primary-foreground hover:bg-white/15 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+37065208000"
              aria-label="Skambinti: (0-652) 08000"
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                isDark
                  ? "bg-primary text-primary-foreground hover:bg-primary-light shadow-card hover:shadow-soft"
                  : "glass text-primary-foreground hover:bg-white/20"
              }`}
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
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isDark ? "text-foreground hover:bg-muted" : "text-primary-foreground hover:bg-white/15"
            }`}
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
                key={link.href}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
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
