import { 
  Stethoscope, Syringe, Scissors, Bone, 
  FlaskConical, Eye, Microscope, HeartPulse, 
  Zap, Heart
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Bendras patikrinimas",
    description: "Visapusiškas jūsų augintinio sveikatos patikrinimas, prevencinės priemonės ir individualios rekomendacijos.",
    color: "primary",
  },
  {
    icon: Syringe,
    title: "Vakcinacija",
    description: "Apsaugokite savo augintinį nuo infekcinių ligų. Standartinės ir kelioninės vakcinacijos pagal tarptautinius protokolus.",
    color: "secondary",
  },
  {
    icon: Bone,
    title: "Ortopedija",
    description: "Specializuotas kaulų, sąnarių ir raumenų ligų gydymas. Stuburo traumų diagnostika ir chirurgija.",
    color: "accent",
  },
  {
    icon: Scissors,
    title: "Chirurgija",
    description: "Minkštųjų audinių operacijos, sterilizacija, kastracija ir sudėtingesnės chirurginės intervencijos.",
    color: "primary",
  },
  {
    icon: Eye,
    title: "Odontologija",
    description: "Profesionalus dantų valymas, ekstrakcijos ir burnos ligų gydymas. Sveikas dantų sistema — ilgesnis gyvenimas.",
    color: "secondary",
  },
  {
    icon: FlaskConical,
    title: "Laboratorija",
    description: "Greitos ir tikslios kraujo, šlapimo ir kitų tyrimų analizės. Rezultatai to paties vizito metu.",
    color: "accent",
  },
  {
    icon: Microscope,
    title: "RTG ir ultragarsas",
    description: "Moderniausia diagnostinė įranga greitai ir tiksliai nustatyti diagnozę be papildomo streso gyvūnui.",
    color: "primary",
  },
  {
    icon: HeartPulse,
    title: "Dermatologija",
    description: "Odos ligos, alergijos, parazitų sukelta dermatitis. Ilgalaikiai sprendimai jūsų augintinio odai.",
    color: "secondary",
  },
  {
    icon: Zap,
    title: "Skubi pagalba",
    description: "Skubūs atvejai priimami be eilės. Darbo dienomis iki 21:00 — esame šalia, kai labiausiai reikia.",
    color: "accent",
  },
  {
    icon: Heart,
    title: "Mikrobluzdikliai",
    description: "Greitai ir neskausmingai pažymėkite savo augintinį. Registracija tarptautinėse duomenų bazėse.",
    color: "primary",
  },
];

const colorMap = {
  primary: {
    bg: "bg-primary/8",
    icon: "text-primary",
    border: "border-primary/15",
    hover: "hover:border-primary/40 hover:shadow-soft",
    badge: "bg-primary/10 text-primary",
  },
  secondary: {
    bg: "bg-secondary/8",
    icon: "text-secondary",
    border: "border-secondary/15",
    hover: "hover:border-secondary/40 hover:shadow-green",
    badge: "bg-secondary/10 text-secondary",
  },
  accent: {
    bg: "bg-accent/8",
    icon: "text-accent",
    border: "border-accent/15",
    hover: "hover:border-accent/40 hover:shadow-soft",
    badge: "bg-accent/10 text-accent",
  },
};

export default function Services() {
  return (
    <section
      id="paslaugos"
      aria-labelledby="paslaugos-heading"
      className="section-padding bg-background"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 tracking-wide uppercase">
            Mūsų paslaugos
          </span>
          <h2 id="paslaugos-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Veterinarijos Klinika Kaune —{" "}
            <span className="text-gradient-primary">visos paslaugos</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Mūsų gyvūnų klinika Kaune turi visą reikalingą įrangą ir patirtį — nuo profilaktikos iki sudėtingų operacijų šunims, katėms ir smulkiems gyvūnėliams.
          </p>
        </div>

        {/* Services grid */}
        <ul
          role="list"
          aria-label="Veterinarinių paslaugų sąrašas"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
        >
          {services.map((service, idx) => {
            const colors = colorMap[service.color as keyof typeof colorMap];
            const Icon = service.icon;
            return (
              <li
                key={service.title}
                className={`group relative flex flex-col p-6 bg-card rounded-2xl border ${colors.border} ${colors.hover} transition-all duration-300 hover:-translate-y-1 shadow-card`}
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div
                  className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}
                  aria-hidden="true"
                >
                  <Icon size={22} className={colors.icon} />
                </div>
                <h3 className="font-bold text-foreground text-base mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {service.description}
                </p>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="text-center mt-12 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/paslaugos"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-2xl font-semibold hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1"
            aria-label="Peržiūrėti visas paslaugas"
          >
            Visos paslaugos
          </a>
          <a
            href="#kontaktai"
            className="inline-flex items-center gap-2 px-8 py-4 gradient-primary text-primary-foreground rounded-2xl font-semibold shadow-soft hover:shadow-deep transition-all duration-300 hover:-translate-y-1"
            aria-label="Registruotis į veterinarijos paslaugą"
          >
            Registruotis į priėmimą
          </a>
        </div>
      </div>
    </section>
  );
}
