import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { coreServices, supportingServiceCategories } from "@/data/services";
import Seo from "@/components/Seo";
import { buildAbsoluteUrl, createBreadcrumbSchema } from "@/lib/seo";

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

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Ortovet pagrindinės veterinarinės paslaugos",
    itemListElement: coreServices.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      url: buildAbsoluteUrl(`/paslaugos/${service.slug}`),
      image: buildAbsoluteUrl(service.image),
      description: service.summary,
    })),
  };

  return (
    <main id="main-content">
        <Seo
          title="Pagrindinės ir papildomos veterinarinės paslaugos"
          description="Teikiame profesionalią veterinarinę pagalbą įvairiems gyvūnams – nuo profilaktikos ir diagnostikos iki gydymo bei chirurginių procedūrų. Vienoje vietoje rasite visas svarbiausias paslaugas, reikalingas jūsų augintinio sveikatai užtikrinti."
          image="/og-services.jpg"
          path="/paslaugos"
          jsonLd={[
            createBreadcrumbSchema([
              { name: "Pradžia", path: "/" },
              { name: "Paslaugos", path: "/paslaugos" },
            ]),
            servicesSchema,
          ]}
        />
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
              Pagrindinės ir papildomos{" "}
              <span className="text-gradient-primary">veterinarinės paslaugos</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Teikiame profesionalią veterinarinę pagalbą įvairiems gyvūnams –
              nuo profilaktikos ir diagnostikos iki gydymo bei chirurginių
              procedūrų. Vienoje vietoje rasite visas svarbiausias paslaugas,
              reikalingas jūsų augintinio sveikatai užtikrinti.
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

        <section className="pb-12 bg-background">
          <div className="container-custom">
            <div className="max-w-3xl mb-10">
              <span className="inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-primary">
                Kertinės paslaugos
              </span>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {coreServices.map((service) => {
                const colors = colorMap[service.theme];
                return (
                  <Link
                    key={service.slug}
                    to={`/paslaugos/${service.slug}`}
                    className={`group overflow-hidden rounded-[28px] border ${colors.card} bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft`}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.imageAlt}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/65 via-foreground/10 to-transparent" />
                      <h3 className="absolute bottom-5 left-5 right-5 text-2xl font-bold leading-tight text-primary-foreground">
                        {service.title}
                      </h3>
                    </div>

                    <div className="p-6 md:p-7">
                      <p className={`text-sm font-semibold uppercase tracking-[0.16em] ${colors.heading}`}>
                        {service.description}
                      </p>
                      <p className="mt-4 text-base leading-relaxed text-foreground/90">
                        {service.summary}
                      </p>

                      <div className="mt-5 space-y-4">
                        {service.details.map((detail) => (
                          <p key={detail} className="text-sm leading-relaxed text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>

                      <div className="mt-6">
                        <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
                          Ką atliekame
                        </h4>
                        <ul className="mt-3 flex flex-col gap-2.5">
                          {service.highlights.map((item) => (
                            <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/85">
                              <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${colors.dot}`} aria-hidden="true" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 flex items-center justify-between gap-3">
                        <span className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors group-hover:bg-primary/90">
                          <Phone size={16} />
                          Atidaryti puslapį
                        </span>
                        <span className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-primary transition-colors group-hover:text-primary-light">
                          Plačiau
                          <ArrowRight size={16} />
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="pb-20 bg-background">
          <div className="container-custom">
            <div className="max-w-3xl mb-10">
              <span className="inline-flex rounded-full bg-muted px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Papildomos paslaugos
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {supportingServiceCategories.map((category) => {
                const colors = colorMap[category.color];
                return (
                  <div
                    key={category.slug}
                    className={`bg-card rounded-2xl border ${colors.card} shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1 p-6 flex flex-col`}
                  >
                    <h3 className={`font-bold text-lg mb-4 ${colors.heading}`}>
                      {category.title}
                    </h3>
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
  );
}
