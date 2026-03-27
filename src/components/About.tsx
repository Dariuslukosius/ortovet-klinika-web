import aboutImg from "@/assets/about/apie-mus.webp";

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
                src={aboutImg}
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
              Apie veterinarijos kliniką
            </span>

            <h2 id="apie-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Nauja veterinarijos klinika{" "}
              <span className="text-gradient-primary">Vilijampolėje</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Vilijampolėje, visai netoli nuo miesto centro bei Šilainių, Linkuvos gatvėje duris atvėrė nauja veterinarijos klinika „Ortovet“. Klinika specializuojasi traumatologijos-ortopedijos bei odontologijos srityse, tačiau joje bus suteikiamos ir visos kitos įprastos veterinarinės paslaugos, tokios kaip minkštųjų audinių chirurgija, diagnostiniai tyrimai (kraujo tyrimai, echoskopija) bei kitos, įvairios procedūros.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Klinikoje veikia du apžiūros kabinetai, laboratorija bei dvi operacinės. Čia įrengta nauja ir moderni įranga – skaitmeninis rentgenas, echoskopas, laboratorinė įranga – morfologinis, biocheminis, imunologinis bei kraujo krešumą ir spaudimą nustatantys kraujo analizatoriai, taip pat profesionali anesteziologinė ir odontologinė įranga.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Pasak „Ortovet“ klinikos vadovo Jogailos Šlekio, noras atidaryti specializuotą veterinarijos kliniką ortopedijos srityje brendo jau seniai dėl to, kad šios srities specialistų Lietuvoje yra mažai, o pacientų, kuriems reikalinga kokybiška bei kvalifikuota paslauga, atsiranda pakankamai daug.
            </p>

            <div className="rounded-2xl border border-primary/15 bg-card px-6 py-5 shadow-card">
              <p className="text-xl md:text-2xl font-semibold text-foreground leading-relaxed">
                Pasirūpinsime jūsų augintiniu kaip tikru šeimos nariu!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
