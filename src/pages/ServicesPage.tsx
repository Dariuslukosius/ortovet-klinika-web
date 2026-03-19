import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyContact from "@/components/StickyContact";
import { Phone, ArrowRight } from "lucide-react";

const serviceCategories = [
  {
    title: "Veterinarinė profilaktika",
    slug: "profilaktika",
    color: "primary" as const,
    items: [
      "Šunų skiepai",
      "Skiepai nuo pasiutligės šunims",
      "Skiepai šunims nuo erkių",
      "Šunų parvoviruso gydymas",
      "Kačių vakcinavimas",
      "Kačių virusinis rinotracheitas",
      "Endoparazitų kontrolė (kirmėlių)",
      "Ektoparazitų kontrolė (blusos, erkės, pūkagraužiai)",
      "Šunų nagų kirpimas",
    ],
  },
  {
    title: "Kelionė su gyvūnais",
    slug: "kelioniniai-dokumentai",
    color: "secondary" as const,
    items: [
      "Kelionė su šuniu į užsienį",
      "Kelionė su kate į užsienį",
      "Mikročipo implantacija ir registracija",
      "ES naminio gyvūno paso išdavimas",
      "Kraujo paėmimas pasiutligės antikūnų titrui nustatyti",
      "Kasmetiniai skiepai",
      "Konsultacija dėl reikalavimų keliaujant su gyvūnais į ES ir kitas šalis",
      "Šunų ir kačių dokumentų tvarkymas ir paruošimas išvykti į užsienį",
    ],
  },
  {
    title: "Odos ir ausų ligos",
    slug: "odos-ausų-ligos",
    color: "accent" as const,
    items: [
      "Odos skutenų mikroskopinis tyrimas",
      "Plauko mikroskopinis tyrimas",
      "Bakteriologiniai odos bei ausų susirgimų tyrimai",
    ],
  },
  {
    title: "Gyvūnų chirurgija",
    slug: "chirurgija",
    color: "primary" as const,
    items: [
      "Inhaliacinė anestezija",
      "Kačių, šunų kastracija ir sterilizacija",
      "Auglių šalinimas",
      "Žaizdų siuvimas",
      "Gimdymo pagalba atliekant Cezario pjūvį",
    ],
  },
  {
    title: "Stomatologija",
    slug: "stomatologija",
    color: "secondary" as const,
    items: [
      "Šunų stomatologas",
      "Šunų dantų valymas",
      "Šunų dantų traukimas",
      "Kačių dantų priežiūra",
      "Dantų apnašų valymas",
      "Dantų traukimas",
      "Burnos ertmės susirgimų gydymas",
    ],
  },
  {
    title: "Laboratoriniai tyrimai",
    slug: "laboratorija",
    color: "accent" as const,
    items: [
      "Kraujo morfologinis tyrimas (IDEXX aparatu)",
      "Kraujo biocheminis tyrimas (IDEXX aparatu)",
      "Šlapimo bendras tyrimas (IDEXX aparatu)",
      "Šlapimo nuosėdų tyrimas",
      "Išmatų koprologinis tyrimas",
      "Bakteriologiniai, virusologiniai, serologiniai tyrimai (Nacionalinė maisto laboratorija)",
    ],
  },
  {
    title: "Ultragarso tyrimai",
    slug: "ultragarsas",
    color: "primary" as const,
    items: [
      "Ultragarso tyrimai šunims",
      "Ultragarso tyrimai katėms",
    ],
  },
  {
    title: "Rentgeno diagnostika",
    slug: "rentgenas",
    color: "secondary" as const,
    items: [
      "Rentgeno nuotrauka šunims",
      "Rentgeno nuotrauka katėms",
    ],
  },
  {
    title: "Eutanazija ir atsisveikinimo paslaugos",
    slug: "eutanazija",
    color: "accent" as const,
    items: [
      "Šuns užmigdymas namuose",
      "Gyvūnų kremavimas",
    ],
  },
];

const colorMap = {
  primary: {
    badge: "bg-primary/10 text-primary border-primary/20",
    dot: "bg-primary",
    card: "border-primary/15 hover:border-primary/40",
    heading: "text-primary",
  },
  secondary: {
    badge: "bg-secondary/10 text-secondary border-secondary/20",
    dot: "bg-secondary",
    card: "border-secondary/15 hover:border-secondary/40",
    heading: "text-secondary",
  },
  accent: {
    badge: "bg-accent/10 text-accent border-accent/20",
    dot: "bg-accent",
    card: "border-accent/15 hover:border-accent/40",
    heading: "text-accent",
  },
};

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-28 pb-16 bg-background">
          <div className="container-custom text-center max-w-3xl mx-auto">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              ← Grįžti į pradžią
            </Link>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 tracking-wide uppercase border border-primary/20">
              Mūsų paslaugos
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Veterinarinių paslaugų{" "}
              <span className="text-gradient-primary">sąrašas</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Ortovet veterinarijos klinika Kaune teikia platų paslaugų spektrą — nuo profilaktikos ir vakcinacijos iki ortopedijos, chirurgijos ir diagnostikos.
            </p>
            <a
              href="tel:+37065208000"
              className="inline-flex items-center gap-2 px-6 py-3 gradient-primary text-primary-foreground rounded-xl font-semibold shadow-soft hover:shadow-deep transition-all duration-300 hover:-translate-y-0.5"
            >
              <Phone size={16} />
              Registruotis: (0-652) 08000
            </a>
          </div>
        </section>

        {/* Services grid */}
        <section className="pb-20 bg-background">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {serviceCategories.map((category) => {
                const colors = colorMap[category.color];
                return (
                  <div
                    key={category.slug}
                    className={`bg-card rounded-2xl border ${colors.card} shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1 p-6 flex flex-col`}
                  >
                    <h2 className={`font-bold text-lg mb-4 ${colors.heading}`}>
                      {category.title}
                    </h2>
                    <ul className="flex flex-col gap-2 flex-1">
                      {category.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/80">
                          <span className={`w-1.5 h-1.5 rounded-full ${colors.dot} mt-1.5 shrink-0`} aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="text-center mt-14 p-10 bg-card rounded-3xl border border-border shadow-card">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Norite sužinoti daugiau ar registruotis?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                Susisiekite su mumis — atsakysime į visus klausimus ir paskyrysime patogų laiką.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:+37065208000"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 gradient-primary text-primary-foreground rounded-xl font-semibold shadow-soft hover:shadow-deep transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Phone size={16} />
                  (0-652) 08000
                </a>
                <Link
                  to="/#kontaktai"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-border rounded-xl font-semibold text-foreground hover:border-primary/40 hover:text-primary transition-all duration-300"
                >
                  Rašyti žinutę
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyContact />
    </>
  );
}
