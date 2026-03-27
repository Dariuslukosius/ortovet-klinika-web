import { useEffect, useState } from "react";
import { X, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Seo from "@/components/Seo";
import { buildAbsoluteUrl, createBreadcrumbSchema } from "@/lib/seo";

import operacine1 from "@/assets/gallery/operacine-1.webp";
import operacine2 from "@/assets/gallery/operacine-2.webp";
import rentgenas from "@/assets/gallery/rentgenas.webp";
import echoskopija from "@/assets/gallery/echoskopija.webp";
import klinikasSuo from "@/assets/gallery/klinika-suo.webp";
import komandaSuniukas from "@/assets/gallery/komanda-suniukas.webp";
import chirurgija1 from "@/assets/gallery/chirurgija-1.webp";
import chirurgija2 from "@/assets/gallery/chirurgija-2.webp";
import buldogas1 from "@/assets/gallery/buldogas-1.webp";
import buldogas2 from "@/assets/gallery/buldogas-2.webp";

const photos = [
  { src: operacine1, alt: "Operacinė", category: "Klinika" },
  { src: operacine2, alt: "Operacinė su įranga", category: "Klinika" },
  { src: klinikasSuo, alt: "Gydytojas su šuniu klinikoje", category: "Kasdienybė" },
  { src: komandaSuniukas, alt: "Ortovet komanda su šuniuku", category: "Komanda" },
  { src: echoskopija, alt: "Echoskopinis tyrimas", category: "Diagnostika" },
  { src: rentgenas, alt: "Rentgeno nuotrauka - ortopedinis tyrimas", category: "Diagnostika" },
  { src: chirurgija1, alt: "Chirurginė operacija", category: "Chirurgija" },
  { src: chirurgija2, alt: "Komanda operacijos metu", category: "Chirurgija" },
  { src: buldogas1, alt: "Prancūzų buldogas klinikoje", category: "Kasdienybė" },
  { src: buldogas2, alt: "Prancūzų buldogas", category: "Kasdienybė" },
];

const categories = ["Visos", ...Array.from(new Set(photos.map((p) => p.category)))];

export default function GalleryPage() {
  const [filter, setFilter] = useState("Visos");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((prev) => (prev !== null ? (prev + 1) % filtered.length : null));
      if (e.key === "ArrowLeft") setLightbox((prev) => (prev !== null ? (prev - 1 + filtered.length) % filtered.length : null));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const filtered = filter === "Visos" ? photos : photos.filter((p) => p.category === filter);
  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Ortovet galerija",
    description: "Ortovet veterinarijos klinikos galerija: komanda, diagnostika, chirurgija ir klinikos aplinka.",
    associatedMedia: photos.map((photo) => ({
      "@type": "ImageObject",
      contentUrl: buildAbsoluteUrl(photo.src),
      description: photo.alt,
      name: photo.alt,
    })),
  };

  return (
    <>
      <main id="main-content" className="pt-24 pb-16 min-h-screen">
        <Seo
          title="Veterinarijos klinikos galerija Kaune"
          description="Ortovet galerija: klinikos erdvės, komanda, diagnostinė įranga, operacinės ir kasdienė veterinarijos klinikos aplinka Kaune."
          image={photos[0].src}
          jsonLd={[
            createBreadcrumbSchema([
              { name: "Pradžia", path: "/" },
              { name: "Galerija", path: "/galerija" },
            ]),
            gallerySchema,
          ]}
        />
        <div className="container-custom">
          {/* Back button */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            Grįžti į pradžią
          </button>
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 tracking-wide uppercase border border-primary/20">
              Galerija
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Mūsų <span className="text-gradient-primary">klinika</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Pažiūrėkite, kaip atrodo mūsų kasdienybė ir darbo aplinka.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filter === cat
                    ? "bg-primary text-primary-foreground shadow-card"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-5xl mx-auto">
            {filtered.map((photo, i) => (
              <button
                key={photo.alt}
                onClick={() => setLightbox(i)}
                className="group relative aspect-square rounded-2xl overflow-hidden bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
                <span className="absolute bottom-3 left-3 text-xs font-medium text-primary-foreground bg-foreground/60 backdrop-blur-sm px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {photo.alt}
                </span>
              </button>
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-primary-foreground/80 hover:text-primary-foreground z-10"
            aria-label="Uždaryti"
          >
            <X size={32} />
          </button>

          {/* Prev/Next */}
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + filtered.length) % filtered.length); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-foreground/60 hover:text-primary-foreground text-4xl font-light z-10"
            aria-label="Ankstesnė"
          >
            ‹
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % filtered.length); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-foreground/60 hover:text-primary-foreground text-4xl font-light z-10"
            aria-label="Sekanti"
          >
            ›
          </button>

          <img
            src={filtered[lightbox].src}
            alt={filtered[lightbox].alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
