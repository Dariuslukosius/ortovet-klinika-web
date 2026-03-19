import { Phone, MapPin, Clock, Heart, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" aria-label="Puslapio apačia – Ortovet kontaktai ir navigacija" className="bg-primary text-primary-foreground">
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="Ortovet" className="h-20 w-auto object-contain bg-white rounded-xl p-2" />
            </div>
            <p className="text-primary-foreground/90 text-base leading-relaxed mb-5">
              Profesionali veterinarijos klinika Kaune. Rūpinamės jūsų augintinių sveikata su meile ir ekspertize.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Ortovet Facebook" className="w-9 h-9 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Facebook size={16} aria-hidden="true" />
              </a>
              <a href="#" aria-label="Ortovet Instagram" className="w-9 h-9 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Instagram size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Puslapio navigacija">
            <h3 className="font-bold text-lg mb-5">Navigacija</h3>
            <ul className="space-y-3">
              {[
                ["/paslaugos", "Paslaugos"],
                ["/#apie-mus", "Apie mus"],
                ["/#atsiliepimai", "Atsiliepimai"],
                ["/blog", "Blogas"],
                ["/#kontaktai", "Kontaktai"],
              ].map(([href, label]) => (
                <li key={href}>
                  {href.includes("#") ? (
                    <a href={href} className="text-primary-foreground/90 text-base hover:text-primary-foreground transition-colors">
                      {label}
                    </a>
                  ) : (
                    <Link to={href} className="text-primary-foreground/90 text-base hover:text-primary-foreground transition-colors">
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h3 className="font-bold text-base mb-5">Paslaugos</h3>
            <ul className="space-y-2.5">
              {["Bendras patikrinimas", "Vakcinacija", "Chirurgija", "Ortopedija", "Odontologija", "Diagnostika"].map((s) => (
                <li key={s}>
                  <Link to="/paslaugos" className="text-primary-foreground/70 text-sm hover:text-primary-foreground transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <address className="not-italic">
            <h3 className="font-bold text-base mb-5">Kontaktai</h3>
            <div className="space-y-4">
              <a href="tel:+37065208000" className="flex items-center gap-3 group">
                <div className="w-9 h-9 bg-primary-foreground/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary-foreground/20 transition-colors" aria-hidden="true">
                  <Phone size={15} />
                </div>
                <div>
                  <div className="text-xs text-primary-foreground/50 mb-0.5">Telefonas</div>
                  <div className="text-sm font-semibold group-hover:text-primary-foreground/80 transition-colors">(0-652) 08000</div>
                </div>
              </a>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-primary-foreground/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">
                  <MapPin size={15} />
                </div>
                <div>
                  <div className="text-xs text-primary-foreground/50 mb-0.5">Adresas</div>
                  <div className="text-sm">Linkuvos g. 67,<br />Kaunas, 48314</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-primary-foreground/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">
                  <Clock size={15} />
                </div>
                <div>
                  <div className="text-xs text-primary-foreground/50 mb-0.5">Darbo laikas</div>
                  <div className="text-sm">I–V: 09:00–21:00<br />VI: 10:00–15:00</div>
                </div>
              </div>
            </div>
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-primary-foreground/50 text-xs">
            © {year} Ortovet veterinarijos klinika. Visos teisės saugomos.
          </p>
          <p className="text-primary-foreground/40 text-xs flex items-center gap-1">
            Sukurta su <Heart size={11} className="fill-current" aria-hidden="true" /> gyvūnų gerovei
          </p>
        </div>
      </div>
    </footer>
  );
}
