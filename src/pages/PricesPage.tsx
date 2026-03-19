import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyContact from "@/components/StickyContact";

const priceCategories = [
  {
    title: "Apžiūra",
    icon: "🩺",
    items: [
      { name: "Apžiūra", price: "30€" },
      { name: "Pakartotinė apžiūra", price: "20€" },
      { name: "Nuotolinė konsultacija", price: "60€" },
      { name: "Pakartotinė nuotolinė konsultacija", price: "30€" },
      { name: "Specializuota ortopedo apžiūra", price: "60€" },
    ],
  },
  {
    title: "Kraujo tyrimai",
    icon: "🔬",
    items: [
      { name: "Morfologinis kraujo tyrimas", price: "30€" },
      { name: "Biocheminis kraujo tyrimas (1 parametras)", price: "10€" },
      { name: "Biocheminis Pre-surgical kraujo tyrimas (6 parametrai)", price: "40€" },
      { name: "Biocheminis Comprehensive kraujo tyrimas (12 parametrų)", price: "55€" },
      { name: "Biocheminis Liver kraujo tyrimas (6 parametrai)", price: "30€" },
      { name: "Biocheminis Kidney kraujo tyrimas (6 parametrai)", price: "30€" },
      { name: "Kraujo elektrolitų tyrimas (Na, K, Cl)", price: "16€" },
      { name: "Kraujo progesterono (c-PRG) tyrimas", price: "27€" },
      { name: "Kraujo tiroksino (v-T4) tyrimas", price: "27€" },
      { name: "Kraujo tirotropino (v-TSH) tyrimas", price: "30€" },
      { name: "Kraujo CRB (C-reaktyvaus baltymo) tyrimas", price: "16€" },
      { name: "Kraujo streso hormono kortizolio (v-COR) tyrimas", price: "30€" },
      { name: "Kraujo krešumo tyrimas", price: "20€" },
    ],
  },
  {
    title: "Vaizdinė diagnostika",
    icon: "📡",
    items: [
      { name: "Rentgenologinis tyrimas (už 1 nuotrauką)", price: "25€" },
      { name: "Rentgenologinis tyrimas su kontrastine medžiaga", price: "35€" },
      { name: "Echoskopinis tyrimas (vienos organų sistemos)", price: "25€" },
      { name: "Echoskopinis tyrimas (visų pilvo organų)", price: "45€" },
      { name: "Echoskopinis tyrimas (ortopedinis)", price: "40€" },
      { name: "Echoskopinis tyrimas (širdies)", price: "50€" },
      { name: "Echoskopinis tyrimas (vaikingumas)", price: "25€" },
      { name: "Echoskopinis tyrimas (pakartotinis)", price: "25€" },
    ],
  },
  {
    title: "Vakcinacijos",
    icon: "💉",
    items: [
      { name: "Vakcinacija nuo pasiutligės", price: "25€" },
      { name: "Vakcinacija nuo infekcinių", price: "25€" },
      { name: "Kompleksinė vakcina", price: "30€" },
      { name: "Vakcinacija nuo šunidžių kosulio", price: "20€" },
    ],
  },
  {
    title: "Kitos paslaugos",
    icon: "⚕️",
    items: [
      { name: "Gyvūno ženklinimas", price: "30€" },
      { name: "Savininko duomenų keitimas vic.lt", price: "25€" },
      { name: "Šlapimo biocheminis tyrimas", price: "10€" },
      { name: "Šlapimo tyrimo mikroskopavimas", price: "10€" },
      { name: "Bendrasis šlapimo tyrimas", price: "20€" },
      { name: "Kateterizacija (šuns, katino)", price: "30€" },
      { name: "Kateterizacija (kalės, katės)", price: "50€" },
      { name: "Ausų otoskopavimas", price: "20€" },
      { name: "Odos skutmenų paėmimas ir tyrimas", price: "15€" },
      { name: "Mėginio mikroskopavimas", price: "20€" },
      { name: "Oftalmologinis tyrimas", price: "15€" },
      { name: "Vagiskopija", price: "25€" },
    ],
  },
  {
    title: "Odontologinės paslaugos ir priežiūra",
    icon: "🦷",
    items: [
      { name: "Nagų kirpimas", price: "10€" },
      { name: "Ausų valymas", price: "12€" },
      { name: "Paranalinių liaukų valymas", price: "10€" },
      { name: "Siūlų traukimas", price: "10€" },
      { name: "Rober Jones tvarstis", price: "45€" },
      { name: "Dantų akmenų šalinimas naudojant ultragarsinį skalerį", price: "70€*" },
      { name: "Danties traukimas (pieninio)", price: "10€" },
      { name: "Danties traukimas (nuolatinio / paprastas)", price: "10€" },
      { name: "Danties traukimas (nuolatinis / sudėtingas)", price: "40€" },
      { name: "Burnos darinio šalinimas", price: "40€*" },
    ],
  },
  {
    title: "Sterilizacija / Kastracija",
    icon: "✂️",
    items: [
      { name: "Kastravimas (katino)", price: "40€" },
      { name: "Kastravimas (katės)", price: "65€" },
      { name: "Kastravimas (triušio)", price: "60€" },
      { name: "Kastravimas (šuns) iki 10 kg", price: "85€" },
      { name: "Kastravimas (šuns) 10–30 kg", price: "110€" },
      { name: "Kastravimas (šuns) nuo 30 kg", price: "140€" },
      { name: "Kastravimas (šuns kriptorcho) iki 15 kg", price: "150€" },
      { name: "Kastravimas (šuns kriptorcho) virš 15 kg", price: "180€" },
      { name: "Kastravimas (kalės) iki 5 kg", price: "100€" },
      { name: "Kastravimas (kalės) 5–10 kg", price: "120€" },
    ],
  },
];

export default function PricesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-24 pb-16 min-h-screen">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 tracking-wide uppercase border border-primary/20">
              Paslaugų kainos
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Kainų <span className="text-gradient-primary">sąrašas</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Skaidrios ir sąžiningos kainos. Visos kainos nurodytos su PVM.
            </p>
          </div>

          {/* Price grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {priceCategories.map((cat) => (
              <div
                key={cat.title}
                className="bg-card rounded-2xl border border-border shadow-card overflow-hidden"
              >
                {/* Category header */}
                <div className="px-6 py-4 bg-primary/5 border-b border-border flex items-center gap-3">
                  <span className="text-2xl" aria-hidden="true">{cat.icon}</span>
                  <h2 className="font-bold text-foreground text-lg">{cat.title}</h2>
                </div>

                {/* Items */}
                <div className="divide-y divide-border">
                  {cat.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between px-6 py-3 hover:bg-muted/40 transition-colors"
                    >
                      <span className="text-sm text-foreground pr-4">{item.name}</span>
                      <span className="text-sm font-bold text-primary whitespace-nowrap">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <p className="text-center text-xs text-muted-foreground mt-8 max-w-xl mx-auto">
            * Kaina nurodyta be anestezijos. Anestezijos kaina skaičiuojama atskirai pagal gyvūno svorį.
            Kilus klausimų – skambinkite.
          </p>

          <div className="text-center mt-6">
            <a
              href="tel:+37065208000"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-card hover:shadow-soft transition-all duration-200"
            >
              Skambinti: (0-652) 08000
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <StickyContact />
    </>
  );
}
