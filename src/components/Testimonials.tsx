import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Monika Stankevičiūtė",
    meta: "12 atsiliepimų · prieš 8 mėnesius",
    rating: 5,
    text: "Gydome savo du šunis nuo pat klinikos atsidarymo. Visos problemos išspręstos nuo A iki Z, vizitui visuomet skiriama laiko tiek, kiek reikia. Gydytojai tikrai profesionalūs, dėmesingi, atidūs, įsiklauso ir pataria kaip tik geriau. Ortovet dirba visai priešingu principu – skiria tikrai daug dėmesio, įsigilina į problematiką ir paskiria geriausią sprendimą gyvūnui. Ačiū jums ❤️",
    initial: "M",
  },
  {
    name: "Eleonora Fil",
    meta: "3 atsiliepimai · prieš 5 mėnesius",
    rating: 5,
    text: "Puiki klinika ir puikūs specialistai. Teko kreiptis ne vieną kartą ir visada gavom tik geriausią pagalbą kokios galima tikėtis iš profesionalų. Tiek konsultuojant tiek gydant mūsų mylimą šunelį. Labai rekomenduoju 👍",
    initial: "E",
  },
  {
    name: "Renata P.",
    meta: "1 atsiliepimas · prieš metus",
    rating: 5,
    text: "Didžiausias ačiū gydytojui Jogailai ir visai OrtoVet komandai. Katytei susilaužius koją buvom priimti labai greitai, kitą dieną atlikta operacija ir suteikta priežiūra viso gyjimo metu, kai tik reikėjo ar buvo neramu. Luna taip pat dėkoja. ❤️",
    initial: "R",
  },
  {
    name: "Greta Grimalauskiene",
    meta: "6 atsiliepimai · prieš 4 mėnesius",
    rating: 5,
    text: "Atvykome su Pupa dėl gastrito ir tariamo neštumo, noriu padėkoti specialistei Gretai, kuri taip išsamiai viską paaiškino, parinko tinkamą gydymą. Pupa jau po keletos dienų jautėsi gerai, baigėsi vėmimai ir nebesuko lizdo. Ačiū 🤗",
    initial: "G",
  },
  {
    name: "Karolina Katinė",
    meta: "Vietos gidas · prieš 5 mėnesius",
    rating: 5,
    text: "Vienintelė klinika, kur šuo jaučiasi gerai. Draugiškas, supratingas ir profesionalus kolektyvas – didžiausios rekomendacijos. Į šią kliniką važiuojam iš Vilniaus, tikrai verta :)",
    initial: "K",
  },
  {
    name: "Ilona Baltrušytė",
    meta: "3 atsiliepimai · prieš metus",
    rating: 5,
    text: "Džiugu, kad iškilus katino sveikatos problemoms kreipėmės būtent į šią kliniką. Nuoširdus ačiū gydytojoms Gretai ir Mingailei už išsamias konsultacijas, apžiūras ir patarimus. Jūsų ir viso dėmesingo kolektyvo dėka Sniegius vėl gyvena pilnavertį gyvenimą 🤍",
    initial: "I",
  },
  {
    name: "Vilma Pavlovienė",
    meta: "2 atsiliepimai · prieš 8 mėnesius",
    rating: 5,
    text: "Lankausi su savo šunimi ir draugams rekomenduoju. Nesijaučia komercijos. Adekvačios kainos. Skiriama laiko problemos paaiškinimui. Turėjome nugaros traumą, skyrė efektyvų gydymą. Nors prieš tai dėl tos pačios problemos lankėmės kitoje klinikoje ir gydymas buvo neefektyvus.",
    initial: "V",
  },
  {
    name: "Jovita Polikauskiene",
    meta: "Vietos gidas · 22 atsiliepimai · prieš metus",
    rating: 5,
    text: "Užsiregistravus nereikėjo ilgai laukti. Klinika patogioje vietoje, pakankamai parkavimo vietų. Atliko nuoseklią apžiūrą. Rentgeno tyrimą atliko be sedacijos. Mokėjo puikiai susitarti su mūsų Snaige. Išsamiai paaiškino apie ligą. Neatliko perteklinių tyrimų. Paskirtas gydymas tinka, akivaizdžiai gerėja. Jei reikės, grįšime. ❤️",
    initial: "J",
  },
  {
    name: "Silvija Liaskauske",
    meta: "13 atsiliepimų · prieš 2 metus",
    rating: 5,
    text: "Tik patys geriausi atsiliepimai. Nuo skambučio registracijai iki priėmimo paskirtu laiku, po operacijos informacijos suteikimu skambučiu ir išsamus paaiškinimas kaip viskas vyko. Tikrai esant problemai grįšim tik į šią kliniką. Kainos nedidelės, paslaugos aukščiausios kokybės. Ačiū Daktarui Jogailai 🎈 Kuba jaučiasi puikiai 🐾",
    initial: "S",
  },
];

export default function Testimonials() {
  return (
    <section
      id="atsiliepimai"
      aria-labelledby="atsiliepimai-heading"
      className="section-padding bg-background"
    >
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 bg-yellow-50 text-yellow-700 rounded-full text-sm font-semibold mb-4 tracking-wide uppercase border border-yellow-200">
            Klientų atsiliepimai
          </span>
          <h2 id="atsiliepimai-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ką sako mūsų{" "}
            <span className="text-gradient-primary">klientai</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-3">
            {[...Array(4)].map((_, i) => (
              <Star key={i} size={22} className="fill-yellow-400 text-yellow-400" aria-hidden="true" />
            ))}
            <Star size={22} className="fill-yellow-400 text-yellow-400" aria-hidden="true" style={{ clipPath: 'inset(0 20% 0 0)' }} />
            <span className="text-foreground font-bold text-lg ml-2">4.8</span>
            <span className="text-muted-foreground text-sm">/ 5.0 Google</span>
          </div>
          <p className="text-muted-foreground">Realūs atsiliepimai iš Google Maps – mūsų klientų patirtis kalba pati už save.</p>
        </div>

        <div
          role="list"
          aria-label="Klientų atsiliepimai apie Ortovet veterinarijos kliniką Kaune"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((t, idx) => (
            <article
              key={t.name}
              role="listitem"
              aria-label={`Atsiliepimas: ${t.name}`}
              className="bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1 flex flex-col"
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-base shrink-0"
                    aria-hidden="true"
                  >
                    {t.initial}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{t.name}</div>
                    <div className="text-muted-foreground text-xs">{t.meta}</div>
                  </div>
                </div>
                <Quote size={20} className="text-primary/20" aria-hidden="true" />
              </div>

              <div className="flex gap-0.5 mb-3" aria-label={`${t.rating} žvaigždutės iš 5`}>
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" aria-hidden="true" />
                ))}
              </div>

              <blockquote className="text-foreground/75 text-sm leading-relaxed flex-1">
                "{t.text}"
              </blockquote>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://share.google/6SyQpYs84ZmBnFYQQ"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Peržiūrėti visus atsiliepimus Google Maps"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-xl text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors duration-200"
          >
            <Star size={15} className="fill-yellow-400 text-yellow-400" aria-hidden="true" />
            Visi atsiliepimai Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
