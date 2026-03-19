import { Clock, MapPin, Phone, Mail, ExternalLink } from "lucide-react";

const hours = [
  { day: "Pirmadienis", time: "09:00 – 21:00" },
  { day: "Antradienis", time: "09:00 – 21:00" },
  { day: "Trečiadienis", time: "09:00 – 21:00" },
  { day: "Ketvirtadienis", time: "09:00 – 21:00" },
  { day: "Penktadienis", time: "09:00 – 21:00" },
  { day: "Šeštadienis", time: "10:00 – 15:00" },
  { day: "Sekmadienis", time: "Uždaryta", closed: true },
];

export default function Contact() {
  const today = new Date().getDay(); // 0=Sun, 1=Mon...
  const todayIdx = today === 0 ? 6 : today - 1;

  return (
    <section
      id="kontaktai"
      aria-labelledby="kontaktai-heading"
      className="section-padding bg-background"
    >
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 tracking-wide uppercase">
            Kontaktai
          </span>
          <h2 id="kontaktai-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Veterinaras Kaune —{" "}
            <span className="text-gradient-primary">susisiekite</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Esame Kaune, Linkuvos gatvėje. Skambinkite arba atvykite — jūsų šunų veterinaras ir kačių veterinaras visada laukia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Info column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact cards */}
            <div className="bg-card rounded-2xl p-6 border border-border shadow-card space-y-5">
              <a
                href="tel:+37065208000"
                aria-label="Skambinti: (0-652) 08000"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform" aria-hidden="true">
                  <Phone size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-0.5">Telefonas</div>
                  <div className="text-foreground font-bold text-lg group-hover:text-primary transition-colors">(0-652) 08000</div>
                </div>
              </a>

              <div className="h-px bg-border" aria-hidden="true" />

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0" aria-hidden="true">
                  <MapPin size={20} className="text-secondary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-0.5">Adresas</div>
                  <address className="text-foreground font-semibold not-italic">
                    Linkuvos g. 67<br />
                    Kaunas, 48314<br />
                    Kauno m. sav.
                  </address>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-card rounded-2xl p-6 border border-border shadow-card">
              <div className="flex items-center gap-2 mb-5">
                <Clock size={18} className="text-primary" aria-hidden="true" />
                <h3 className="font-bold text-foreground">Darbo laikas</h3>
              </div>
              <ul className="space-y-2" aria-label="Darbo laikas">
                {hours.map((h, idx) => (
                  <li
                    key={h.day}
                    className={`flex justify-between items-center py-2 px-3 rounded-lg text-sm transition-colors ${
                      idx === todayIdx
                        ? "bg-primary/8 border border-primary/15"
                        : "hover:bg-muted/50"
                    }`}
                  >
                    <span className={`font-medium ${idx === todayIdx ? "text-primary" : "text-foreground/80"}`}>
                      {h.day}
                      {idx === todayIdx && (
                        <span className="ml-2 text-xs bg-primary text-primary-foreground px-1.5 py-0.5 rounded-full">Šiandien</span>
                      )}
                    </span>
                    <span className={h.closed ? "text-muted-foreground" : idx === todayIdx ? "text-primary font-semibold" : "text-foreground/70"}>
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Map column */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl overflow-hidden shadow-deep border border-border h-full min-h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2293.4117904369587!2d23.8883354!3d54.9132457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6a9515c5b6b8a995%3A0x812bf5d0d760aea0!2sOrtovet%20veterinarijos%20klinika!5e0!3m2!1sen!2slt!4v1773846956702!5m2!1sen!2slt"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ortovet veterinarijos klinikos vieta žemėlapyje – Linkuvos g. 67, Kaunas"
                aria-label="Google Maps žemėlapis su Ortovet klinikos vieta Kaune"
              />
            </div>
            <div className="mt-4 flex gap-3">
              <a
                href="https://maps.google.com/?q=Ortovet+veterinarijos+klinika+Kaunas"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Atidaryti žemėlapį Google Maps naujame lange"
                className="flex items-center gap-2 px-5 py-2.5 gradient-primary text-primary-foreground rounded-xl text-sm font-semibold shadow-card hover:shadow-soft transition-all hover:-translate-y-0.5"
              >
                <ExternalLink size={15} aria-hidden="true" />
                Atidaryti žemėlapį
              </a>
              <a
                href="tel:+37065208000"
                aria-label="Skambinti dabar"
                className="flex items-center gap-2 px-5 py-2.5 border border-primary/30 text-primary rounded-xl text-sm font-semibold hover:bg-primary/5 transition-colors"
              >
                <Phone size={15} aria-hidden="true" />
                Skambinti
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
