import augintiniuMityba from "@/assets/blog/augintiniu-mityba.webp";
import cipavimas from "@/assets/blog/cipavimas.webp";
import dantuPrieziura from "@/assets/blog/dantu-prieziura.webp";
import helmintuTyrimai from "@/assets/blog/helmintu-tyrimai.webp";
import kaciuVakcinacija from "@/assets/blog/kaciu-vakcinacija.webp";
import kraujoTyrimai from "@/assets/blog/kraujo-tyrimai.webp";
import odosLigos from "@/assets/blog/odos-ligos.webp";
import ortopedija from "@/assets/blog/ortopedija.webp";
import senasSuo from "@/assets/blog/senas-suo.webp";
import skubiPagalba from "@/assets/blog/skubi-pagalba.webp";
import sterilizacija from "@/assets/blog/sterilizacija.webp";
import sunuApsaugaNuoErkiu from "@/assets/blog/sunu-apsauga-nuo-erkiu.webp";
import sunuVakcinacija from "@/assets/blog/sunu-vakcinacija.webp";
import ultragarsas from "@/assets/blog/ultragarsas.webp";
import vizitasPasVeterinara from "@/assets/blog/vizitas-pas-veterinara.webp";

export const blogImages = {
  "kaip-pasiruosti-veterinaro-vizitui": {
    image: vizitasPasVeterinara,
    imageAlt: "Vizitas pas veterinarą",
  },
  "vakcinacijos-grafikas-sunims": {
    image: sunuVakcinacija,
    imageAlt: "Šunų vakcinacija",
  },
  "ortopedinės-ligos-sunims": {
    image: ortopedija,
    imageAlt: "Ortopedinė apžiūra ir diagnostika",
  },
  "erkės-apsauga-nuo-erkių": {
    image: sunuApsaugaNuoErkiu,
    imageAlt: "Šunų apsauga nuo erkių",
  },
  "cipavimas-gyvunu-ženklinimas": {
    image: cipavimas,
    imageAlt: "Gyvūnų čipavimas",
  },
  "kraujo-tyrimai-gyvunams": {
    image: kraujoTyrimai,
    imageAlt: "Kraujo tyrimai gyvūnams",
  },
  "kačių-sterilizacija-kastracija": {
    image: sterilizacija,
    imageAlt: "Kačių sterilizacija ir kastracija",
  },
  "dantų-priežiūra-gyvunams": {
    image: dantuPrieziura,
    imageAlt: "Gyvūnų dantų priežiūra",
  },
  "vakcinacijos-katems": {
    image: kaciuVakcinacija,
    imageAlt: "Kačių vakcinacija",
  },
  "helmintu-šalinimas-augintiniams": {
    image: helmintuTyrimai,
    imageAlt: "Helmintų tyrimai ir diagnostika",
  },
  "gyvūno-mityba-sveikata": {
    image: augintiniuMityba,
    imageAlt: "Augintinių mityba",
  },
  "ultragarso-tyrimas-gyvunams": {
    image: ultragarsas,
    imageAlt: "Ultragarsinis tyrimas",
  },
  "odos-ligos-šunims": {
    image: odosLigos,
    imageAlt: "Odos ligos šunims",
  },
  "skubi-veterinarine-pagalba": {
    image: skubiPagalba,
    imageAlt: "Skubi veterinarinė pagalba",
  },
  "senyvo-amziaus-gyvunu-priežiūra": {
    image: senasSuo,
    imageAlt: "Senyvo amžiaus gyvūnų priežiūra",
  },
} as const;
