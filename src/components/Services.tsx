import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { coreServices, supportingServiceHighlights } from "@/data/services";

const colorMap = {
  primary: {
    border: "border-primary/20",
    badge: "bg-primary/10 text-primary border-primary/20",
    button: "text-primary hover:text-primary-light",
  },
  secondary: {
    border: "border-secondary/20",
    badge: "bg-secondary/10 text-secondary border-secondary/20",
    button: "text-secondary hover:text-secondary",
  },
  accent: {
    border: "border-accent/20",
    badge: "bg-accent/10 text-accent border-accent/20",
    button: "text-accent hover:text-accent",
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
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 tracking-wide uppercase">
            Pagrindinės paslaugos
          </span>
        </div>

        <ul
          role="list"
          aria-label="Šešių pagrindinių paslaugų sąrašas"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {coreServices.map((service, idx) => {
            const colors = colorMap[service.theme];
            return (
              <li key={service.slug} style={{ animationDelay: `${idx * 0.05}s` }}>
                <Link
                  to={`/paslaugos/${service.slug}`}
                  className={`group block overflow-hidden rounded-[28px] border ${colors.border} bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg-custom`}
                  aria-label={`Atidaryti paslaugos puslapį: ${service.title}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
                    <h3 className="absolute left-5 bottom-5 right-5 text-2xl font-bold leading-tight text-primary-foreground">
                      {service.title}
                    </h3>
                  </div>

                  <div className="flex flex-col gap-5 p-6">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {service.summary}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {service.highlights.slice(0, 3).map((highlight) => (
                        <span
                          key={highlight}
                          className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/80"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex items-center justify-between gap-3">
                      <span
                        className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${colors.button}`}
                      >
                        Plačiau
                        <ArrowRight size={16} />
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
                        <Phone size={15} />
                        Registruotis
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 rounded-[28px] border border-border bg-muted/40 p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                Papildomos paslaugos
              </p>
            </div>
            <a
              href="/paslaugos"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-light"
              aria-label="Peržiūrėti visas papildomas paslaugas"
            >
              Peržiūrėti visas paslaugas
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {supportingServiceHighlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground/80"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/paslaugos"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-2xl font-semibold hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1"
            aria-label="Peržiūrėti visas klinikos paslaugas"
          >
            Visos klinikos paslaugos
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
