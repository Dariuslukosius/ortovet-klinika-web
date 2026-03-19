import { Phone, CalendarCheck, ChevronDown, Star, Shield, Clock } from "lucide-react";
import heroImg from "@/assets/hero-vet.webp";

const stats = [
  { value: "10+", label: "Metų patirtis" },
  { value: "5000+", label: "Patenkintų klientų" },
  { value: "98%", label: "Teigiamų atsiliepimų" },
  { value: "7/7", label: "Priėmimas visą savaitę" },
];

export default function Hero() {
  return (
    <section
      id="pagrindinis"
      aria-label="Pagrindinis skyrius – Ortovet veterinarijos klinika Kaune"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 gradient-hero hero-pattern" aria-hidden="true" />

      {/* Background image overlay */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <img
          src={heroImg}
          alt="Ortovet veterinarijos klinika – moderni aplinka Kaune"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover opacity-20 scale-105"
          style={{ objectPosition: "center 30%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container-custom pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 animate-fade-up">
            <div className="flex gap-0.5" aria-label="5 žvaigždučių įvertinimas">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" aria-hidden="true" />
              ))}
            </div>
            <span className="text-primary-foreground/90 text-sm font-medium">
              Viena geriausių veterinarijos klinikų Kaune
            </span>
          </div>

          {/* H1 – SEO pagrindinis raktažodis */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gradient-hero leading-[1.08] tracking-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Veterinarijos{" "}
            <span className="block text-white">Klinika —</span>
            <span className="block" style={{ color: "hsl(152 70% 70%)" }}>Ortovet Kaune</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Ortovet — moderniausia veterinarijos klinika Kaune. Teikiame aukščiausio lygio 
            veterinarines paslaugas su šiluma ir profesionalumu. Priimame{" "}
            <strong className="text-primary-foreground">iki 21:00</strong> darbo dienomis.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a
              href="tel:+37065208000"
              role="button"
              aria-label="Skambinti dabar: (0-652) 08000"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-secondary text-secondary-foreground rounded-2xl font-bold text-base shadow-green hover:shadow-deep transition-all duration-300 hover:-translate-y-1 hover:bg-secondary/90 animate-pulse-glow"
            >
              <Phone size={20} aria-hidden="true" />
              Skambinti dabar
            </a>
            <a
              href="#kontaktai"
              role="button"
              aria-label="Registruotis į priėmimą"
              className="flex items-center justify-center gap-3 px-8 py-4 glass border border-white/25 text-primary-foreground rounded-2xl font-semibold text-base hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <CalendarCheck size={20} aria-hidden="true" />
              Registruotis
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {[
              { icon: Shield, text: "Licencijuota klinika" },
              { icon: Clock, text: "Priimame iki 21:00" },
              { icon: Star, text: "4.8 ★ Google įvertinimas" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 glass rounded-full px-4 py-2">
                <Icon size={14} className="text-secondary-foreground/90" style={{ color: "hsl(152 70% 70%)" }} aria-hidden="true" />
                <span className="text-sm text-primary-foreground/80 font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-up"
          style={{ animationDelay: "0.5s" }}
          aria-label="Klinikos statistika"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="glass rounded-2xl px-4 py-5 text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-primary-foreground/70 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <a href="#paslaugos" aria-label="Slinkti žemyn">
          <ChevronDown className="text-primary-foreground/50" size={28} />
        </a>
      </div>
    </section>
  );
}
