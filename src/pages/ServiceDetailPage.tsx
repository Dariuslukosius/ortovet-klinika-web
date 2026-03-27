import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Seo from "@/components/Seo";
import NotFound from "@/pages/NotFound";
import { coreServices, getCoreServiceBySlug } from "@/data/services";
import { buildAbsoluteUrl, createBreadcrumbSchema, ORGANIZATION_NAME, SITE_URL } from "@/lib/seo";

const colorMap = {
  primary: {
    badge: "bg-primary/10 text-primary border-primary/20",
    card: "border-primary/15",
    dot: "bg-primary",
    heading: "text-primary",
  },
  secondary: {
    badge: "bg-secondary/10 text-secondary border-secondary/20",
    card: "border-secondary/15",
    dot: "bg-secondary",
    heading: "text-secondary",
  },
  accent: {
    badge: "bg-accent/10 text-accent border-accent/20",
    card: "border-accent/15",
    dot: "bg-accent",
    heading: "text-accent",
  },
};

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = slug ? getCoreServiceBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!service) {
    return <NotFound />;
  }

  const colors = colorMap[service.theme];
  const relatedServices = coreServices.filter((item) => item.slug !== service.slug).slice(0, 3);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.title} gyvūnams`,
    serviceType: service.title,
    description: service.summary,
    image: buildAbsoluteUrl(service.image),
    url: buildAbsoluteUrl(`/paslaugos/${service.slug}`),
    areaServed: {
      "@type": "City",
      name: "Kaunas",
    },
    provider: {
      "@type": "VeterinaryCare",
      name: ORGANIZATION_NAME,
      url: SITE_URL,
      telephone: "+37065208000",
    },
  };

  return (
    <main id="main-content" className="bg-background">
        <Seo
          title={`${service.title} Kaune`}
          description={service.summary}
          image={service.image}
          jsonLd={[
            createBreadcrumbSchema([
              { name: "Pradžia", path: "/" },
              { name: "Paslaugos", path: "/paslaugos" },
              { name: service.title, path: `/paslaugos/${service.slug}` },
            ]),
            serviceSchema,
            faqSchema,
          ]}
        />
        <section className="pt-28 pb-12">
          <div className="container-custom">
            <Link
              to="/paslaugos"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft size={16} />
              Grįžti į paslaugas
            </Link>
          </div>
        </section>

        <section className="pb-12">
          <div className="container-custom grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                {service.title}
              </h1>
              <p className={`mt-5 text-sm font-semibold uppercase tracking-[0.16em] ${colors.heading}`}>
                {service.description}
              </p>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                {service.pageLead}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:+37065208000"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
                >
                  <Phone size={16} />
                  Skambinti dabar
                </a>
                <Link
                  to="/#kontaktai"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-6 py-3.5 font-semibold text-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary"
                >
                  Registruotis
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className={`overflow-hidden rounded-[32px] border ${colors.card} bg-card shadow-card`}>
              <img
                src={service.image}
                alt={service.imageAlt}
                className="aspect-[16/11] h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container-custom grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-8">
              {service.pageSections.map((section) => (
                <article key={section.title} className="rounded-[28px] border border-border bg-card p-7 shadow-card">
                  <h2 className="text-2xl font-bold text-foreground">{section.title}</h2>

                  {section.paragraphs ? (
                    <div className="mt-4 space-y-4">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="text-base leading-relaxed text-muted-foreground">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  ) : null}

                  {section.bullets ? (
                    <ul className="mt-5 space-y-3">
                      {section.bullets.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-foreground/85">
                          <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${colors.dot}`} aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}

              <section className="pt-2">
                <h2 className="text-2xl font-bold text-foreground">Dažniausi klausimai</h2>
                <Accordion type="single" collapsible className="mt-5 rounded-[28px] border border-border bg-card px-6 shadow-card">
                  {service.faqs.map((item) => (
                    <AccordionItem key={item.question} value={item.question} className="border-border">
                      <AccordionTrigger className="py-5 text-left text-lg font-semibold text-foreground hover:no-underline">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            </div>

            <aside className="space-y-6">
              <div className="rounded-[28px] border border-border bg-card p-7 shadow-card">
                <h2 className="text-xl font-bold text-foreground">Trumpai apie paslaugą</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{service.summary}</p>

                <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
                  Pagrindiniai akcentai
                </h3>
                <ul className="mt-4 space-y-3">
                  {service.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/85">
                      <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${colors.dot}`} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <section className="pb-20">
          <div className="container-custom">
            <div className="border-t border-border/80 pt-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Kitos paslaugos</h2>

              <div className="mt-8 px-10 md:px-14">
                <Carousel
                  opts={{
                    align: "start",
                    loop: relatedServices.length > 3,
                  }}
                  className="w-full"
                >
                  <CarouselContent>
                    {relatedServices.map((item) => (
                      <CarouselItem
                        key={item.slug}
                        className="basis-[86%] sm:basis-1/2 xl:basis-1/3"
                      >
                        <Link
                          to={`/paslaugos/${item.slug}`}
                          className="group block"
                        >
                          <div className="overflow-hidden rounded-[28px] bg-card shadow-card">
                            <img
                              src={item.image}
                              alt={item.imageAlt}
                              className="aspect-[16/11] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                            />
                          </div>
                          <h3 className="mt-4 text-2xl font-bold leading-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                            {item.title}
                          </h3>
                        </Link>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="-left-4 md:-left-6 h-10 w-10 border-border bg-background text-foreground hover:bg-muted" />
                  <CarouselNext className="-right-4 md:-right-6 h-10 w-10 border-border bg-background text-foreground hover:bg-muted" />
                </Carousel>
              </div>
            </div>
          </div>
        </section>
    </main>
  );
}
