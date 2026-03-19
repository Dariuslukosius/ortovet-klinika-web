import { CheckCircle2, Award, GraduationCap, Heart } from "lucide-react";
import heroImg from "@/assets/hero-vet.webp";

const highlights = [
  "Daugiau nei 10 metų veterinarinės patirties Kaune",
  "Nuolatinis gydytojų kvalifikacijos kėlimas",
  "Moderniausia diagnostinė ir chirurginė įranga",
  "Individualus požiūris į kiekvieną pacientą",
  "Skaidrūs kainų planai be paslėptų mokesčių",
  "Gyvūnų gerovė — pirmiausia",
];

const values = [
  {
    icon: Award,
    title: "Profesionalumas",
    text: "Mūsų komandą sudaro sertifikuoti veterinarijos gydytojai su specializacija.",
  },
  {
    icon: Heart,
    title: "Empatiška priežiūra",
    text: "Kiekvieną gyvūną traktuojame kaip šeimos narį — su meile ir dėmesingumu.",
  },
  {
    icon: GraduationCap,
    title: "Nuolatinis tobulėjimas",
    text: "Sekame naujausius veterinarijos mokslo pasiekimus ir taikome juos praktikoje.",
  },
];

export default function About() {
  return (
    <section
      id="apie-mus"
      aria-labelledby="apie-heading"
      className="section-padding bg-gradient-surface"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* Image column */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-deep">
              <img
                src={heroImg}
                alt="Ortovet veterinarijos klinikos patalpos Kaune – moderni, švari ir šilta aplinka gyvūnams"
                loading="lazy"
                decoding="async"
                className="w-full h-80 md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" aria-hidden="true" />
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-6 -right-4 md:-right-8 bg-card rounded-2xl p-5 shadow-deep border border-border"
              aria-label="10+ metų patirties Kaune"
            >
              <div className="text-4xl font-bold text-gradient-primary mb-1">10+</div>
              <div className="text-sm text-muted-foreground font-medium">Metų patirties<br />Kaune</div>
            </div>

            {/* Accent shape */}
            <div
              className="absolute -top-6 -left-6 w-24 h-24 gradient-green rounded-full opacity-15 blur-2xl"
              aria-hidden="true"
            />
          </div>

          {/* Text column */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-1.5 bg-secondary/12 text-secondary rounded-full text-sm font-semibold mb-5 tracking-wide uppercase">
              Apie mus
            </span>

            <h2 id="apie-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Gyvūnų Klinika,{" "}
              <span className="text-gradient-primary">kuri rūpinasi</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              <strong className="text-foreground">Ortovet — patikima gyvūnų klinika Kaune</strong>, tai ne tik medicinos įstaiga, 
              bet ir vieta, kur jūsų augintinis sulauks tikros rūpybos. Mūsų komanda kasdien stengiasi, 
              kad kiekvienas vizitas būtų kuo mažiau stresinis gyvūnui ir kuo informatyvesnis savininkui.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Įsikūrę Linkuvos g. 67, Kaune, esame lengvai pasiekiami. Priimame darbo dienomis iki 
              <strong className="text-foreground"> 21:00</strong>, o šeštadieniais — iki 15:00. 
              Suprantame, kad darbas ir šeima kelia iššūkių — todėl dirbame tada, kai jums patogu.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-10" aria-label="Mūsų pranašumų sąrašas">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-secondary mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-foreground/80 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {values.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="bg-card rounded-xl p-4 border border-border shadow-card hover:shadow-soft transition-shadow duration-300"
                >
                  <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center mb-3" aria-hidden="true">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">{title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
