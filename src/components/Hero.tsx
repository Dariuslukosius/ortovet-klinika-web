import { CalendarCheck, Phone } from "lucide-react";
import heroImg from "@/assets/hero/ortovet-herro-vet.webp";

export default function Hero() {
  return (
    <section
      id="pagrindinis"
      aria-label="Pagrindinis skyrius – Ortovet veterinarijos klinika Kaune"
      className="relative overflow-hidden bg-[#eef1f6]"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(92,118,193,0.14),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(211,154,225,0.18),transparent_34%)]"
        aria-hidden="true"
      />

      <div className="relative container-custom pt-28 pb-14 md:pt-36 md:pb-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-4xl">
            <p className="text-lg md:text-xl font-semibold tracking-tight text-primary">
              Specializuotos Veterinarinės Paslaugos
            </p>

            <h1
              className="mt-5 max-w-5xl text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-semibold leading-[1.02] tracking-[-0.04em]"
              style={{ color: "#cf95df" }}
            >
              Mūsų tikslas – padėti gyvūnams gyventi ilgiau, laimingiau ir sveikiau!
            </h1>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:+37065208000"
                role="button"
                aria-label="Skambinti dabar: (0-652) 08000"
                className="inline-flex items-center justify-center gap-3 rounded-none bg-primary px-8 py-4 text-base font-bold uppercase tracking-[0.08em] text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90"
              >
                <Phone size={20} aria-hidden="true" />
                Skambinti dabar
              </a>

              <a
                href="#kontaktai"
                role="button"
                aria-label="Registruotis į priėmimą"
                className="inline-flex items-center justify-center gap-3 border-2 border-primary bg-white px-8 py-4 text-base font-bold uppercase tracking-[0.08em] text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary/5"
              >
                <CalendarCheck size={20} aria-hidden="true" />
                Registruotis
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="mx-auto flex max-w-[680px] justify-center lg:max-w-[820px] lg:justify-end">
              <img
                src={heroImg}
                alt="Šuo ir katė Ortovet pagrindiniame puslapyje"
                loading="eager"
                decoding="async"
                className="w-full max-w-[560px] object-contain lg:max-w-[760px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
