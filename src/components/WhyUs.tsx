import { CheckCircle2, Clock, Heart, Shield, Star, Zap } from "lucide-react";

const advantages = [
  {
    icon: Clock,
    title: "Priimame iki 21:00",
    description: "Darbo dienomis dirbame iki 21 valandos. Jūsų augintinis gaus pagalbą net po darbo.",
    highlight: true,
  },
  {
    icon: Shield,
    title: "Licencijuoti gydytojai",
    description: "Visi mūsų veterinarai turi licencijas ir nuolat tobulina savo žinias.",
    highlight: false,
  },
  {
    icon: Star,
    title: "4.8 ★ Google įvertinimas",
    description: "Šimtai patenkintų klientų Kaune ir apylinkėse patiki mums savo augintinius.",
    highlight: false,
  },
  {
    icon: Zap,
    title: "Moderni diagnostika",
    description: "RTG, ultragarsas, greita laboratorija – diagnozė to paties vizito metu.",
    highlight: false,
  },
  {
    icon: Heart,
    title: "Rūpestinga aplinka",
    description: "Gyvūno patogumas ir ramybė – prioritetas kiekvieno vizito metu.",
    highlight: false,
  },
  {
    icon: CheckCircle2,
    title: "Skaidrios kainos",
    description: "Aiškūs kainų planai be paslėptų mokesčių. Konsultuojame prieš procedūrą.",
    highlight: false,
  },
];

export default function WhyUs() {
  return (
    <section
      id="kodl"
      aria-labelledby="kodl-heading"
      className="section-padding bg-gradient-surface"
    >
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 bg-secondary/12 text-secondary rounded-full text-sm font-semibold mb-4 tracking-wide uppercase">
            Kodėl mes
          </span>
          <h2 id="kodl-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Veterinaras Kaune —{" "}
            <span className="text-gradient-primary">kodėl rinkti Ortovet?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Vet klinika Kaune, kuri derina profesionalumą su tikru rūpesčiu kiekvienam augintiniui — šuniui, katei ar smulkiam gyvūnėliui.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map(({ icon: Icon, title, description, highlight }) => (
            <div
              key={title}
              className={`relative flex flex-col p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                highlight
                  ? "gradient-primary text-primary-foreground border-primary shadow-soft"
                  : "bg-card border-border shadow-card hover:shadow-soft"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                  highlight ? "bg-primary-foreground/15" : "bg-primary/10"
                }`}
                aria-hidden="true"
              >
                <Icon size={22} className={highlight ? "text-primary-foreground" : "text-primary"} />
              </div>
              <h3 className={`font-bold text-lg mb-2 ${highlight ? "text-primary-foreground" : "text-foreground"}`}>
                {title}
              </h3>
              <p className={`text-sm leading-relaxed ${highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
