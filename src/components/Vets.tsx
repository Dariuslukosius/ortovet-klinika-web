import { UserCircle2, GraduationCap, Stethoscope } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import vetJogaila from "@/assets/vet-jogaila.webp";
import vetGreta from "@/assets/vet-greta.webp";

const vets = [
  {
    photo: vetJogaila,
    photoPosition: "center top",
    name: "Jogaila Šlekys",
    title: "Veterinarijos gydytojas",
    specialization: "Ortopedija ir traumatologija",
    education: "LSMU Veterinarinės Medicinos magistras, 2014",
    experience: "10+ metų patirtis",
    description:
      "Po studijų dirbo ir stažavosi Švedijoje Evidensia klinikų tinkle (2016-2020), kuris veikia 20 Europos ir Skandinavijos šalių. 2023 m. įkūrė ORTOVET kliniką.",
    tags: ["Ortopedija", "Traumatologija", "Chirurgija"],
    fullBio: [
      "2014 m. baigiau Lietuvos Sveikatos Mokslų Universiteto Veterinarinės Medicinos studijas ir įgijau magistro laipsnį.",
      "Jau studijų metu supratau, kad mane domina ortopedija/traumatologija ir viskas kas susiję su gyvūnų atraminiu/motoriniu aparatu. Po akademijos baigimo dirbau bendrosios praktikos veterinaru Lietuvoje iki 2016 m. Vėliau parsikėliau dirbti bei stažuotis į Švediją.",
      "Nuo 2016 iki 2020 metų dirbau bei stažavausi Švedijoje, žinomame Evidensia veterinarijos klinikų tinkle, kuris teikia paslaugas dvidešimtyje Europos bei Skandinavijos šalių. Esu labai dėkingas gyvenimui, kad turėjau tokią galimybę dirbti kartu ir mokytis iš savo srities Europinio lygio profesionalų.",
      "Dalyvavimas įvairiuose mokymuose traumatologijos srityje suteikė galimybę dar labiau praplėsti turimas žinias apie šiuolaikinius gydymo metodus, technikas bei naujausias tendencijas. Svarbu paminėti ir aukštus gydymo standartus, kurie Skandinavijoje yra gana griežtai protokoluojami, kas suteikia galimybę diagnozuoti tiksliau bei gydyti efektyviau. Ortovet klinikos esminis konceptas yra suteikti aukščiausios kokybės paslaugas nuo augintinio savininko pasitikimo iki efektyvaus problemos sprendimo.",
      "2023 metais su kolege įkūrėme specializuotą veterinarijos kliniką ORTOVET.",
    ],
  },
  {
    photo: vetGreta,
    photoPosition: "center 10%",
    name: "Greta Braškė",
    title: "Veterinarijos gydytoja",
    specialization: "Vidaus ligos ir odontologija",
    education: "LSMU Veterinarinės Medicinos magistras, 2015",
    experience: "7+ metų patirtis",
    description:
      "Dalyvavo Lietuvos ir Europos veterinarijos kongresuose bei seminaruose. Stažavosi odontologijos ir vaizdinės diagnostikos srityse.",
    tags: ["Vidaus ligos", "Odontologija", "Diagnostika"],
    fullBio: [
      "Tapti veterinarijos gydytoja bei padėti mūsų mažiesiems draugams svajojau dar mokykloje, todėl gamtos mokslai visada buvo vienas iš mano prioritetų.",
      "2015 m. įstojau į Lietuvos Sveikatos Mokslų Universitetą, veterinarinės medicinos magistro studijas. Jau nuo pirmo kurso pradėjau savanorišką praktiką veterinarijos klinikoje, tam kad susipažinčiau su šia profesija ir išmokčiau jos subtilybių. Praktikos metu teko susidurti su įvairiais įdomiais atvejais, kurie vertė tobulėti ir siekti daugiau žinių.",
      "Studijų metu dalyvavau ne viename Lietuvos ir Europos kongrese bei seminare, vėliau pradėjau stažuotis siauresnėse srityse, tokiose kaip odontologija, vaizdinė diagnostika. Manau, kad šioje profesijoje svarbu koja kojon žengti su mokslo naujovėmis lygiai taip pat, kaip ir pagarba bei meilė gyvūnams.",
      "Profesionali komanda yra neabejotinas privalumas, tačiau pagarba vienas kitam, taip pat ir augintinių šeimininkams, yra ne ką mažiau svarbu. Žmogus gali būti labai geras specialistas, tačiau nemokėjimas bendrauti, prastos būdo savybės visada kiš koją darniam kolektyvo darbui, todėl savo komandą stengiamės burti žvelgdami visapusiškai. Kol kas esame nedidelė klinika, tačiau su dideliu noru ir potencialu augti.",
    ],
  },
  {
    photo: null,
    photoPosition: "center top",
    name: "Lukas Neverovas",
    title: "Veterinarijos gydytojas",
    specialization: "Vidaus ligos ir minkštųjų audinių chirurgija",
    education: "Veterinarinės medicinos studijos",
    experience: "Nuolat tobulėjantis specialistas",
    description:
      "Dirba su vidaus ligų pacientais ir minkštųjų audinių chirurgijos atvejais. Siekia specializuotis smulkiųjų gyvūnų ortopedijoje ir traumatologijoje.",
    tags: ["Vidaus ligos", "Chirurgija", "Ortopedija"],
    fullBio: [
      "Veterinarijos gydytojas, klinikoje daugiausia dirbantis su vidaus ligų pacientais, minkštųjų audinių chirurgijos atvejais. Lukui svarbu ne tik tiksliai nustatyti diagnozę, bet ir pasirūpinti, kad kiekvienas augintinis jaustųsi kuo ramiau, o jo šeimininkai - užtikrintai ir informuotai.",
      "Lukas didelį dėmesį skiria nuolatiniam tobulėjimui, o ypač domisi smulkiųjų gyvūnų ortopedija ir traumatologija. Gydytoją motyvuoja galimybė padėti gyvūnams judėti be skausmo ir sugrįžti prie aktyvaus, pilnaverčio gyvenimo, todėl ateityje siekia specializuotis būtent šioje srityje.",
    ],
  },
];

export default function Vets() {
  const [selectedVet, setSelectedVet] = useState<(typeof vets)[0] | null>(null);

  return (
    <section
      id="komanda"
      aria-labelledby="komanda-heading"
      className="section-padding bg-background"
    >
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 tracking-wide uppercase border border-primary/20">
            Mūsų komanda
          </span>
          <h2
            id="komanda-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            Patyrę{" "}
            <span className="text-gradient-primary">veterinarai</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Kiekvienas mūsų gydytojas – ne tik profesionalas, bet ir tikras gyvūnų draugas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vets.map((vet, idx) => (
            <article
              key={idx}
              onClick={() => setSelectedVet(vet)}
              className="bg-card rounded-2xl border border-border shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col cursor-pointer group"
              aria-label={`Veterinaras: ${vet.name}`}
            >
              {/* Photo – no overlay */}
              <div className="h-72 overflow-hidden">
                {vet.photo ? (
                  <img
                    src={vet.photo}
                    alt={vet.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ objectPosition: vet.photoPosition }}
                  />
                ) : (
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 h-full flex items-center justify-center">
                    <UserCircle2 size={96} className="text-primary/30" aria-hidden="true" />
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
                {/* Name & title */}
                <div className="mb-4">
                  <div className="font-bold text-foreground text-lg">{vet.name}</div>
                  <div className="text-primary text-sm font-medium">{vet.title}</div>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <Stethoscope size={15} className="text-primary shrink-0" aria-hidden="true" />
                  <span className="text-sm font-semibold text-foreground">{vet.specialization}</span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap size={15} className="text-muted-foreground shrink-0" aria-hidden="true" />
                  <span className="text-xs text-muted-foreground">{vet.education} · {vet.experience}</span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                  {vet.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {vet.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-primary/8 text-primary rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-4 text-primary text-xs font-semibold group-hover:underline">
                  Skaityti daugiau →
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Dialog open={!!selectedVet} onOpenChange={(open) => !open && setSelectedVet(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          {selectedVet && (
            <>
              <div className="flex items-start gap-5 mb-6">
                <div className="shrink-0 w-24 h-24 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  {selectedVet.photo ? (
                    <img src={selectedVet.photo} alt={selectedVet.name} className="w-full h-full object-cover object-top" />
                  ) : (
                    <UserCircle2 size={64} className="text-primary/40" aria-hidden="true" />
                  )}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-1">{selectedVet.name}</h2>
                  <p className="text-primary font-medium mb-2">{selectedVet.title}</p>
                  <div className="flex items-center gap-2 mb-2">
                    <Stethoscope size={14} className="text-primary shrink-0" />
                    <span className="text-sm font-semibold text-foreground">{selectedVet.specialization}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap size={14} className="text-muted-foreground shrink-0" />
                    <span className="text-xs text-muted-foreground">{selectedVet.education} · {selectedVet.experience}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {selectedVet.fullBio.map((paragraph, i) => (
                  <p key={i} className="text-muted-foreground text-sm leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                {selectedVet.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
