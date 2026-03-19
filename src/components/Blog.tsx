import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const posts = [
  {
    slug: "kaip-pasiruosti-veterinaro-vizitui",
    title: "Kaip tinkamai pasiruošti veterinaro vizitui Kaune?",
    excerpt: "Pirmas vizitas pas veterinarą gali būti stresinis tiek gyvūnui, tiek šeimininkui. Paruošėme praktinių patarimų, kaip vizitą padaryti kuo lengvesnį.",
    category: "Patarimai",
    date: "2025-01-10",
    readTime: "4 min",
  },
  {
    slug: "vakcinacijos-grafikas-sunims",
    title: "Šunų vakcinacijos grafikas: ką reikia žinoti?",
    excerpt: "Reguliari vakcinacija – vienas svarbiausių prevencijos įrankių. Paaiškinsime, kokios vakcinos būtinos, kada jas daryti ir kodėl neverta atidėti.",
    category: "Vakcinacija",
    date: "2025-01-05",
    readTime: "5 min",
  },
  {
    slug: "ortopedinės-ligos-sunims",
    title: "Ortopedija šunims: dažniausios problemos ir gydymas",
    excerpt: "Kaulų ir sąnarių ligos gali stipriai pabloginti jūsų augintinio gyvenimo kokybę. Anksti pastebėtos – sėkmingai gydomos. Sužinokite daugiau.",
    category: "Ortopedija",
    date: "2024-12-28",
    readTime: "6 min",
  },
  {
    slug: "erkės-apsauga-nuo-erkių",
    title: "Erkės: kaip apsaugoti augintinį ir ką daryti, jei rado erkę?",
    excerpt: "Pavasarį ir vasarą erkės – viena didžiausių grėsmių jūsų augintiniui. Sužinokite, kaip apsisaugoti ir ką daryti atradus erkę.",
    category: "Parazitai",
    date: "2025-03-01",
    readTime: "5 min",
  },
  {
    slug: "cipavimas-gyvunu-ženklinimas",
    title: "Gyvūnų čipavimas: kodėl tai svarbu ir kaip vyksta procedūra?",
    excerpt: "Čipas – mažas, bet labai svarbus. Pasiklydęs gyvūnas su čipu turi daug daugiau galimybių grįžti namo. Sužinokite apie čipavimo procedūrą.",
    category: "Profilaktika",
    date: "2025-02-20",
    readTime: "4 min",
  },
  {
    slug: "kraujo-tyrimai-gyvunams",
    title: "Kraujo tyrimai gyvūnams: kada reikalingi ir ką rodo?",
    excerpt: "Kraujo tyrimas – vienas informatyviausių diagnostikos įrankių. Sužinokite, kada jų reikia, ką jie parodo ir kaip tinkamai interpretuoti rezultatus.",
    category: "Diagnostika",
    date: "2025-02-10",
    readTime: "6 min",
  },
  {
    slug: "kačių-sterilizacija-kastracija",
    title: "Kačių sterilizacija ir kastracija: nauda, laikas ir priežiūra",
    excerpt: "Sterilizacija ar kastracija – atsakingas sprendimas, turintis daug sveikatos privalumų. Atsakome į dažniausius klausimus apie šią procedūrą.",
    category: "Chirurgija",
    date: "2025-01-25",
    readTime: "5 min",
  },
  {
    slug: "dantų-priežiūra-gyvunams",
    title: "Gyvūnų dantų priežiūra: kaip išvengti problemų?",
    excerpt: "Burnos sveikatos problemos – vienos dažniausių, kurias pastebime per profilaktinius patikrinimus. Sužinokite, kaip prižiūrėti augintinio dantis namuose.",
    category: "Odontologija",
    date: "2025-01-18",
    readTime: "4 min",
  },
  {
    slug: "vakcinacijos-katems",
    title: "Kačių vakcinacijos: viskas ką reikia žinoti",
    excerpt: "Katės taip pat serga infekcinėmis ligomis. Reguliari vakcinacija apsaugo nuo panleukopeniją, rinotraheitą, klamidiozę ir kitų pavojingų ligų.",
    category: "Vakcinacija",
    date: "2025-01-15",
    readTime: "5 min",
  },
  {
    slug: "helmintu-šalinimas-augintiniams",
    title: "Helmintai (kirminai): simptomai, diagnostika ir gydymas",
    excerpt: "Vidiniai parazitai gali slypėti net visiškai sveikai atrodančiame gyvūne. Sužinokite, kaip dažnai atlikti dehelmintizaciją ir kokius simptomus stebėti.",
    category: "Parazitai",
    date: "2025-01-08",
    readTime: "5 min",
  },
  {
    slug: "gyvūno-mityba-sveikata",
    title: "Teisinga augintinio mityba: pagrindai ir dažnos klaidos",
    excerpt: "Mityba – vienas svarbiausių sveikatos veiksnių. Kokį maistą rinktis šuniui ar katei? Kaip išvengti nutukimo ir mitybos trūkumų?",
    category: "Mityba",
    date: "2024-12-15",
    readTime: "6 min",
  },
  {
    slug: "ultragarso-tyrimas-gyvunams",
    title: "Ultragarsinis tyrimas veterinarijoje: kada ir kodėl?",
    excerpt: "Ultragarsas leidžia neinvaziniu būdu įvertinti vidaus organus. Sužinokite, kokiais atvejais rekomenduojamas šis tyrimas ir ko tikėtis vizito metu.",
    category: "Diagnostika",
    date: "2024-12-10",
    readTime: "4 min",
  },
  {
    slug: "odos-ligos-šunims",
    title: "Odos ligos šunims: alergija, pleiskanojimas ir gydymas",
    excerpt: "Odos problemos – vienos dažniausių šunų negalavimų. Niežulys, raudona oda, pleiskanojimas – ką tai reiškia ir kaip padėti augintiniui?",
    category: "Dermatologija",
    date: "2024-12-01",
    readTime: "5 min",
  },
  {
    slug: "skubi-veterinarine-pagalba",
    title: "Skubi veterinarinė pagalba: kada vykti nedelsiant?",
    excerpt: "Kai gyvūnui blogai, kiekviena minutė svarbi. Sudarėme sąrašą simptomų, kuriems esant reikia nedelsiant kreiptis į veterinarą.",
    category: "Skubi pagalba",
    date: "2024-11-20",
    readTime: "4 min",
  },
  {
    slug: "senyvo-amziaus-gyvunu-priežiūra",
    title: "Senyvo amžiaus gyvūnų priežiūra: ką reikia žinoti?",
    excerpt: "Senstant gyvūnai reikalauja daugiau dėmesio ir priežiūros. Sužinokite, kaip užtikrinti komfortą ir gerą sveikatą vyresnio amžiaus augintiniams.",
    category: "Patarimai",
    date: "2024-11-10",
    readTime: "5 min",
  },
];

export default function Blog() {
  const preview = posts.slice(0, 3);

  return (
    <section
      id="blog"
      aria-labelledby="blog-heading"
      className="section-padding bg-background"
    >
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <div>
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-3 tracking-wide uppercase">
              Blogas
            </span>
            <h2 id="blog-heading" className="text-3xl md:text-4xl font-bold text-foreground">
              Naudinga informacija{" "}
              <span className="text-gradient-primary">augintinių šeimininkams</span>
            </h2>
          </div>
          <Link
            to="/blog"
            aria-label="Visi straipsniai"
            className="shrink-0 flex items-center gap-2 px-5 py-2.5 border border-border rounded-xl text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
          >
            Visi straipsniai
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {preview.map((post) => (
            <Link
              to={`/blog/${post.slug}`}
              key={post.slug}
              className="group bg-card rounded-2xl border border-border shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col"
              aria-label={post.title}
            >
              <div className="h-3 gradient-primary" aria-hidden="true" />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock size={12} aria-hidden="true" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="font-bold text-foreground text-base mb-3 leading-snug group-hover:text-primary transition-colors flex-1">
                  {post.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar size={12} aria-hidden="true" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("lt-LT", { year: "numeric", month: "long", day: "numeric" })}
                    </time>
                  </div>
                  <span className="flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all">
                    Skaityti <ArrowRight size={12} aria-hidden="true" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
