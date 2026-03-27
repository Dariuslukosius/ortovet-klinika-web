import diagnostineIranga from "@/assets/services/diagnostine-iranga.webp";
import echoskopija from "@/assets/services/echoskopija.webp";
import minkstujuAudiniuChirurgija from "@/assets/services/minkstuju-audiniu-chirurgija.webp";
import odontologija from "@/assets/services/odontologija.webp";
import ortopedijaTraumatologija from "@/assets/services/ortopedija-traumatologija.webp";
import skaitmenineRentgenografija from "@/assets/services/skaitmenine-rentgenografija.webp";

export type ServiceTheme = "primary" | "secondary" | "accent";

export type ServiceSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type CoreService = {
  title: string;
  slug: string;
  theme: ServiceTheme;
  image: string;
  imageAlt: string;
  summary: string;
  description: string;
  details: string[];
  highlights: string[];
  pageLead: string;
  pageSections: ServiceSection[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export type SupportingServiceCategory = {
  title: string;
  slug: string;
  color: ServiceTheme;
  items: string[];
};

export const coreServices: CoreService[] = [
  {
    title: "Ortopedija / traumatologija",
    slug: "ortopedija-traumatologija",
    theme: "primary",
    image: ortopedijaTraumatologija,
    imageAlt: "Augintinio ortopedinė apžiūra klinikoje",
    summary:
      "Šlubavimo diagnostika, lūžių gydymas ir pažangios kryžminių raiščių operacijos vienoje vietoje.",
    description:
      "Viena svarbiausių Ortovet krypčių yra ortopedinė ir traumatologinė pagalba, kai reikia greitos diagnostikos ir aiškaus gydymo plano.",
    details: [
      "Klinikoje atliekama visa rentgenologinė ir ortopedinė diagnostika. Pastebėjus pirmuosius šlubavimo simptomus, siekiame kuo greičiau nustatyti priežastį ir parinkti tinkamiausią gydymą.",
      "Gydome kaulų lūžius, raiščių, sausgyslių ir raumenų pažeidimus, atliekame kryžminio raiščio operacijas taikant ekstrakapsulinį metodą, TTA ir TTA R, taip pat korekcines ir sąnarines ortopedines procedūras.",
    ],
    highlights: [
      "Kaulų lūžių chirurginis gydymas",
      "Kryžminio raiščio diagnostika ir TTA / TTA R operacijos",
      "Klubų ir alkūnių displazijos chirurginis gydymas",
      "PRP, SVNU ir hialurono rūgšties intraartikulinės injekcijos",
    ],
    pageLead:
      "Klinikoje atliekama visa rentgenologinė ir ortopedinė diagnostika. Tik pastebėjus pirmuosius šlubavimo simptomus siūlome kreiptis į specialistus ir kuo greičiau pašalinti priežastį.",
    pageSections: [
      {
        title: "Klinikoje teikiame šias paslaugas",
        bullets: [
          "Kaulų lūžių chirurginis gydymas",
          "Klubo kaulų kompleksinių lūžių chirurginis gydymas",
          "Sausgyslinių pažeidimų diagnostika ir konservatyvus, chirurginis bei fizioterapinis gydymas",
          "Raumenų pažeidimų diagnostika ir konservatyvus, chirurginis bei fizioterapinis gydymas",
          "Kranialinio kryžminio raiščio trūkimo diagnostika ir chirurginis gydymas taikant ekstrakapsulinį metodą",
          "Kranialinio kryžminio raiščio trūkimo diagnostika ir chirurginis gydymas taikant TTA, TTA R metodiką",
          "Klubų displazijos diagnostika ir chirurginis gydymas taikant DPO metodiką",
          "Alkūnių displazijos diagnostika ir chirurginis gydymas taikant PAUL metodiką",
          "Klubo sąnario liuksacijos diagnostika ir chirurginis gydymas taikant inkaravimo metodiką artroskopiniu raiščiu",
          "Kelio girnelės liuksacijos diagnostika ir chirurginis gydymas atliekant trochlea sulkoplastiką",
          "Priekinių galūnių korekcinė chirurgija esant patologinėms kaulo deformacijoms",
          "OCD diagnostika ir chirurginis gydymas persodinant artikulinius / kaulinius graftus",
          "PRP, SVNU ir hialurono rūgšties intraartikulinės injekcijos",
          "Glenohumeralinės liuksacijos diagnostika ir chirurginis gydymas taikant bicepso sausgyslės relokacijos metodiką",
        ],
      },
      {
        title: "Kas yra kranialinio kryžminio raiščio trūkimas",
        paragraphs: [
          "Dažnai pasitaikantis atvejis tiek mažų, tiek didelių veislių šunims. Trūkus šiam raiščiui, kelio sąnarys pasidaro nestabilus. Kuomet svoris perkeliamas ant galūnės, šlaunikaulio sąnarinis paviršius leidžiasi žemyn, taip sukeldamas šlubavimą.",
          "Tuo tarpu tiek kaudalinis, tiek kranialinis kryžminis raištis saugo sąnario stabilumą gyvūnui einant, bėgant ar šokant.",
        ],
      },
      {
        title: "Kas yra TTA ir kaip ji atliekama",
        paragraphs: [
          "TTA procedūra pirmiausiai buvo išvystyta Šveicarijoje 2005 metais. Europoje išpopuliarėjo ir dalinai pakeitė 1990 metais JAV atsiradusią TPLO. Nepaisant to, TPLO ir TTA išlieka populiariausios ortopedinės procedūros gydant kryžminio raiščio trūkimą.",
          "TTA procedūros metu nedidelė viršutinė blauzdikaulio dalis yra įpjaunama, taip pakeičiama sąnario pozicija, padedant keturgalviui šlaunies raumeniui. Atliekant judesį raumuo susitraukia ir stabilizuoja sąnarį. Taip pat šios technikos metu įsitempia stiprus kelio girnelės raištis ir tokiu būdu sąnarys lieka stabilus net esant apkrovai, nepaisant to, kad kryžminis raištis nebuvo tiesiogiai atstatytas.",
        ],
      },
      {
        title: "TTA metodikos privalumai",
        bullets: [
          "Mažiau invazyvi",
          "Mažesnė rizika atsirasti infekcijoms",
          "Gyvūnas atsigauna pakankamai greitai, pradeda vaikščioti jau po pirmosios paros, pilnai atsigauna maždaug po 4 mėnesių",
          "Mažesnė tikimybė atsirasti ankstyviems sąnario degeneraciniams pakitimams, lyginant su TPLO technika",
          "Kai blauzdikaulio nuožulnumo kampas dažniausiai būna mažesnis nei 28 laipsniai, rekomenduojama rinktis mažiau invazyvią ir ne tokią agresyvią TTA metodiką",
        ],
      },
    ],
    faqs: [
      {
        question: "Kada reikėtų kreiptis į ortopedą traumatologą?",
        answer:
          "Kreiptis rekomenduojama vos pastebėjus šlubavimą, nenorą remtis galūne, skausmo požymius, sumažėjusį aktyvumą ar sunkumą atsistoti. Kuo anksčiau nustatoma priežastis, tuo greičiau galima pradėti tinkamą gydymą.",
      },
      {
        question: "Ar ortopedinei diagnostikai visada reikalingas rentgenas?",
        answer:
          "Dažnu atveju rentgenologinis tyrimas yra labai svarbi diagnostikos dalis, nes padeda įvertinti kaulų, sąnarių ir kitus struktūrinius pakitimus. Tačiau konkretų tyrimų planą gydytojas parenka pagal gyvūno būklę ir klinikinius požymius.",
      },
      {
        question: "Kas yra TTA metodika ir kada ji taikoma?",
        answer:
          "TTA yra viena iš ortopedinių metodikų, taikomų gydant kranialinio kryžminio raiščio trūkimą. Ji parenkama įvertinus konkrečią situaciją, sąnario būklę ir kitus diagnostinius duomenis.",
      },
    ],
  },
  {
    title: "Odontologija",
    slug: "odontologija",
    theme: "secondary",
    image: odontologija,
    imageAlt: "Šuo odontologinei apžiūrai",
    summary:
      "Burnos ertmės įvertinimas, dantų būklės priežiūra ir visos reikalingos procedūros vieno gydymo plano rėmuose.",
    description:
      "Gyvūnų burnos ir dantų sveikata stipriai veikia bendrą savijautą, todėl odontologiją iškeliame kaip vieną iš kertinių paslaugų.",
    details: [
      "Apžiūros metu įvertiname burnos ertmės ir dantų būklę, paaiškiname rastus pakitimus ir pateikiame rekomendacijas, kaip išlaikyti ar pagerinti augintinio burnos sveikatą.",
      "Pastebėjus dantų ar burnos susirgimus atliekame visas reikalingas procedūras ir sudarome aiškų gydymo kelią, kad gyvūnas kuo greičiau gautų reikalingą pagalbą.",
    ],
    highlights: [
      "Burnos ertmės ir dantų būklės įvertinimas",
      "Individualios priežiūros rekomendacijos",
      "Reikalingų odontologinių procedūrų planavimas",
      "Pagalba pastebėjus burnos ar dantų susirgimus",
    ],
    pageLead:
      "ORTOVET klinikoje bus pasirūpinta Jūsų augintinių burnos ir dantų sveikata.",
    pageSections: [
      {
        title: "Kaip vyksta apžiūra",
        paragraphs: [
          "Apžiūros metu gydytojai įvertins augintinio burnos ertmės ir dantų būklę bei suteiks rekomendacijas, kaip išlaikyti ar pagerinti gyvūno burnos ir dantų būklę.",
        ],
      },
      {
        title: "Kada reikalinga pagalba",
        paragraphs: [
          "Pastebėjus burnos ar dantų susirgimus klinikoje bus atliktos visos reikalingos procedūros, kuriomis suteiksime gyvūnui augintiniui reikalingą pagalbą.",
        ],
      },
    ],
    faqs: [
      {
        question: "Kada gyvūnui reikalinga odontologinė apžiūra?",
        answer:
          "Odontologinė apžiūra reikalinga pastebėjus blogą burnos kvapą, apnašas, paraudusias dantenas, skausmą kramtant ar sumažėjusį apetitą. Reguliari profilaktinė apžiūra taip pat padeda problemas pastebėti anksčiau.",
      },
      {
        question: "Ar burnos ir dantų problemos gali paveikti bendrą gyvūno savijautą?",
        answer:
          "Taip, burnos ertmės uždegimai ir dantų ligos gali sukelti skausmą, diskomfortą, sumažėjusį apetitą ir ilgainiui neigiamai veikti bendrą sveikatos būklę. Dėl to odontologinė priežiūra yra svarbi ne tik dantims, bet ir bendrai gyvūno gerovei.",
      },
      {
        question: "Ką gydytojas įvertina odontologinės apžiūros metu?",
        answer:
          "Apžiūros metu vertinama burnos ertmės būklė, dantų apnašos, dantenų pakitimai, galimi uždegimai bei kiti dantų ir burnos susirgimų požymiai. Po įvertinimo pateikiamos rekomendacijos ir, jei reikia, sudaromas gydymo planas.",
      },
    ],
  },
  {
    title: "Minkštųjų audinių chirurgija",
    slug: "minkstuju-audiniu-chirurgija",
    theme: "accent",
    image: minkstujuAudiniuChirurgija,
    imageAlt: "Chirurginė procedūra Ortovet klinikoje",
    summary:
      "Reikalingos chirurginės intervencijos, kruopštus ištyrimas prieš operaciją ir aiškus pooperacinis planas šeimininkui.",
    description:
      "Kai problemos nebeįmanoma išspręsti konservatyviai, chirurginis gydymas turi būti tikslus, saugus ir gerai suplanuotas.",
    details: [
      "Prieš chirurginę intervenciją gydytojai apžiūri gyvūną ir atlieka visus būtinus tyrimus, kad būtų tiksliai įvertinta būklė ir užtikrinta sklandi operacijos eiga.",
      "Po procedūros šeimininkams suteikiame išsamią informaciją, rekomendacijas dėl gijimo ir stebime augintinį viso atsistatymo proceso metu.",
    ],
    highlights: [
      "Išsamus pasiruošimas operacijai",
      "Minkštųjų audinių chirurginės intervencijos pagal indikacijas",
      "Pooperacinės rekomendacijos ir stebėjimas",
      "Nuolatinės konsultacijos gijimo laikotarpiu",
    ],
    pageLead:
      "Esant indikacijoms, klinikoje Jūsų augintiniui bus atliekamos įvairios reikalingos chirurginės intervencijos, kurių metu problemos susijusios su pablogėjusia sveikatos būkle bus pašalintos chirurginiu būdu.",
    pageSections: [
      {
        title: "Prieš operaciją",
        paragraphs: [
          "Prieš taikant chirurginę intervenciją gydytojai apžiūrės gyvūną bei atliks visus reikalingus tyrimus, kurie būtini norint nustatyti gyvūno būklę ir užtikrinti sklandžią operacijos eigą.",
        ],
      },
      {
        title: "Po procedūros",
        paragraphs: [
          "Po procedūros gydytojai suteiks šeimininkams visą reikalingą informaciją bei rekomendacijas, siekiant kuo spartesnio gyvūno sveikatos atsistatymo, ir stebės gyvūną bei konsultuos šeimininkus viso šio proceso metu.",
        ],
      },
    ],
    faqs: [
      {
        question: "Kada gyvūnui gali prireikti minkštųjų audinių chirurgijos?",
        answer:
          "Minkštųjų audinių chirurgija taikoma tada, kai problemos neįmanoma išspręsti vien medikamentais ar stebėjimu. Sprendimas dėl operacijos priimamas įvertinus gyvūno būklę, tyrimų rezultatus ir konkrečią indikaciją.",
      },
      {
        question: "Ar prieš operaciją atliekami papildomi tyrimai?",
        answer:
          "Taip, prieš chirurginę intervenciją gydytojai apžiūri gyvūną ir atlieka reikalingus tyrimus. Tai padeda tiksliai įvertinti būklę ir užtikrinti kuo saugesnę operacijos eigą.",
      },
      {
        question: "Ar po operacijos šeimininkai gauna priežiūros rekomendacijas?",
        answer:
          "Taip, po procedūros šeimininkams suteikiama informacija apie priežiūrą, gijimo eigą ir svarbiausias rekomendacijas. Esant poreikiui gyvūnas toliau stebimas, o šeimininkai konsultuojami atsistatymo laikotarpiu.",
      },
    ],
  },
  {
    title: "Echoskopija",
    slug: "echoskopija",
    theme: "primary",
    image: echoskopija,
    imageAlt: "Echoskopinis tyrimas klinikoje",
    summary:
      "Saugus, neinvazinis ultragarsinis tyrimas, padedantis greitai įvertinti vidaus organų ir audinių pakitimus.",
    description:
      "Echoskopija leidžia greitai ir patikimai pamatyti struktūrinius pakitimus be jonizuojančios spinduliuotės ir papildomo streso gyvūnui.",
    details: [
      "Tyrimo metu vertinami pilvo organai, inkstai, šlapimo pūslė, pieno liaukos, skydliaukė, dubens organai, širdies ir kraujagyslių sistema bei kitos sritys pagal poreikį.",
      "Tai saugi, nekenksminga ir neskausminga diagnostinė procedūra, tinkama bet kokio amžiaus augintiniams. Naudojant Doplerio tyrimą galima vertinti ir kraujotakos bei širdies veiklos rodiklius.",
    ],
    highlights: [
      "Pilvo organų, inkstų ir šlapimo pūslės vertinimas",
      "Širdies ir kraujagyslių tyrimai",
      "Doplerio ultragarsinis tyrimas",
      "Tinka įvairaus amžiaus augintiniams",
    ],
    pageLead:
      "Tai neinvazinis tyrimo metodas audinių struktūriniams pakitimams pastebėti ultragarso pagalba.",
    pageSections: [
      {
        title: "Ką padeda diagnozuoti",
        paragraphs: [
          "Echoskopiniu tyrimu greitai ir patikimai diagnozuojamos širdies ir kraujagyslių, skydliaukės, pieno liaukų, pilvo organų, inkstų ir šlapimo pūslės, dubens organų ir kitos ligos.",
          "Tyrimas yra visiškai nepavojingas, neturi jonizuojančios spinduliuotės ir gali būti atliktas bet kokio amžiaus augintiniams.",
        ],
      },
      {
        title: "Kaip atliekamas tyrimas",
        paragraphs: [
          "Echoskopija yra saugi, nekenksminga ir neskausminga diagnostinė procedūra, paremta nevienodu ultragarso bangų atsispindėjimu nuo įvairaus tankio kūno audinių.",
          "Tyrimo metu įvertinama organų struktūra, dydis, patologiniai pakitimai, jų pobūdis ir išplitimas. Įvairūs kraujotakos ir širdies veiklos rodikliai, kraujo tėkmės greitis ir kryptis, širdies ir kraujagyslių būklė nustatoma bei įvertinama naudojant Doplerio ultragarsinį tyrimą ir spalvinį kodavimą.",
        ],
      },
    ],
    faqs: [
      {
        question: "Ar echoskopija yra saugi gyvūnams?",
        answer:
          "Taip, echoskopija yra saugi, nekenksminga ir neskausminga diagnostinė procedūra. Ji neturi jonizuojančios spinduliuotės ir gali būti atliekama įvairaus amžiaus augintiniams.",
      },
      {
        question: "Ką galima pamatyti echoskopinio tyrimo metu?",
        answer:
          "Echoskopijos metu galima įvertinti vidaus organų struktūrą, dydį, pakitimus ir jų išplitimą. Tyrimas dažnai naudojamas pilvo organų, šlapimo sistemos, širdies ir kitų sričių diagnostikai.",
      },
      {
        question: "Kuo naudingas Doplerio ultragarsinis tyrimas?",
        answer:
          "Doplerio tyrimas padeda įvertinti kraujotakos rodiklius, kraujo tėkmės kryptį ir greitį bei širdies ir kraujagyslių būklę. Tai suteikia papildomos svarbios informacijos diagnozei tikslinti.",
      },
    ],
  },
  {
    title: "Skaitmeninė rentgenografija",
    slug: "skaitmenine-rentgenografija",
    theme: "secondary",
    image: skaitmenineRentgenografija,
    imageAlt: "Skaitmeninis rentgeno tyrimas",
    summary:
      "Greitas ir tikslus vaizdinis tyrimas kaulų, sąnarių, stuburo, kvėpavimo ir kraujotakos sistemos pakitimams įvertinti.",
    description:
      "Rentgenografija išlieka viena svarbiausių diagnostikos priemonių, kai reikia greitai suprasti problemos mastą ir nuspręsti dėl tolesnio gydymo.",
    details: [
      "Rentgenografijos metu galime įvertinti kaulo vientisumo pažeidimus, osteoartrito, osteoartrozės, OCD pakitimus, darinius, svetimkūnius ir degeneracinius pakitimus.",
      "Tyrimas taip pat padeda nustatyti kvėpavimo ir kraujotakos sistemos organų pakitimus bei įvertinti, kada reikalingi tolimesni tyrimai, pavyzdžiui kompiuterinė tomografija ar magnetinis rezonansas.",
    ],
    highlights: [
      "Kaulų, sąnarių ir stuburo pakitimų vertinimas",
      "Kvėpavimo sistemos ir plaučių būklės įvertinimas",
      "Širdies bei kraujotakos sistemos pakitimų diagnostika",
      "Greitas sprendimas dėl tolimesnių tyrimų",
    ],
    pageLead:
      "Rentgenografija yra nebrangus ir greitas tyrimas, kurio metu galima įvertinti įvairius kaulų, sąnarių, stuburo, kvėpavimo ir kraujotakos sistemos pakitimus.",
    pageSections: [
      {
        title: "Ką galima įvertinti",
        paragraphs: [
          "Rentgenografijos metu galima įvertinti kaulo vientisumo pažeidimus, osteoartrito, osteoartrozės, OCD pakitimus, darinius, svetimkūnius, degeneracinius pakitimus, slankstelių poslinkį vienas kito atžvilgiu ir stuburo kanalo siaurėjimo požymius.",
          "Taip pat galima matyti patologinius kvėpavimo sistemos pakitimus, tokius kaip plaučių uždegimas, skystis ar oras pleuros ertmėse, bronchų išsiplėtimas, onkologiniai susirgimai, bei kraujotakos sistemos pakitimus, pavyzdžiui širdies padidėjimą ar aortos išsiplėtimą.",
        ],
      },
      {
        title: "Kada reikalingi papildomi tyrimai",
        paragraphs: [
          "Daugelio rentgenografinių tyrimų alternatyva yra kompiuterinė tomografija ir esant specifinėms indikacijoms – magnetinio rezonanso tomografija.",
        ],
      },
    ],
    faqs: [
      {
        question: "Kada gyvūnui reikalinga rentgenografija?",
        answer:
          "Rentgenografija dažnai reikalinga įtariant kaulų, sąnarių, stuburo, kvėpavimo ar kai kurių kraujotakos sistemos organų pakitimus. Tyrimo poreikį gydytojas nustato pagal simptomus ir klinikinę apžiūrą.",
      },
      {
        question: "Ar rentgenografija padeda nustatyti tik kaulų problemas?",
        answer:
          "Ne, rentgenografija naudojama ne tik kaulų pažeidimams vertinti. Ji taip pat gali padėti įvertinti plaučių, širdies, stuburo ir kitus vidaus struktūrų pakitimus.",
      },
      {
        question: "Kada vietoje rentgeno gali būti siūlomi kiti tyrimai?",
        answer:
          "Esant specifinėms indikacijoms, gydytojas gali rekomenduoti kompiuterinę tomografiją arba magnetinio rezonanso tomografiją. Tai priklauso nuo įtariamos problemos pobūdžio ir reikalingo tikslumo.",
      },
    ],
  },
  {
    title: "Diagnostinė įranga",
    slug: "diagnostine-iranga",
    theme: "accent",
    image: diagnostineIranga,
    imageAlt: "Moderni Ortovet diagnostinė įranga",
    summary:
      "Moderni vaizdinė ir laboratorinė įranga leidžia tiksliai formuluoti diagnozę ir pradėti gydymą be bereikalingo delsimo.",
    description:
      "Aiški diagnozė klientui yra vienas svarbiausių klinikos prioritetų, todėl remiamės modernia įranga tiek ortopedijoje, tiek vidaus ligų diagnostikoje.",
    details: [
      "Ortovet klinikoje naudojamas pilnai skaitmeninis veterinarinis rentgenas Mindray Vetix P8, modernūs FUJI analizatoriai biocheminiams, hormoniniams ir uždegiminių procesų tyrimams, taip pat IDEXX LaserCyte hematologiniams atsakymams.",
      "Tai leidžia greitai įvertinti sąnarinius ir kaulinius pakitimus, vidaus organų funkciją, krešumo rodiklius bei kitus svarbius parametrus, kad gydymas būtų pradėtas kuo tiksliau ir laiku.",
    ],
    highlights: [
      "Mindray Vetix P8 skaitmeninis veterinarinis rentgenas",
      "FUJI analizatoriai biocheminiams ir hormoniniams tyrimams",
      "Kraujo krešumo tyrimai ir uždegiminių procesų vertinimas",
      "IDEXX LaserCyte hematologiniai tyrimai",
    ],
    pageLead:
      "Ortovet klinikoje laukiame Jūsų gyvūnų augintinių su visa būtiniausia, modernia diagnostine įranga. Nepriekaištinga diagnostika ir aiškios diagnozės suformulavimas klientui yra vienas iš pirmųjų Ortovet klinikos prioritetų.",
    pageSections: [
      {
        title: "Vaizdinė diagnostika ir ortopediniai atvejai",
        paragraphs: [
          "Diagnozuojant ortopedinius ir trauminius pakitimus, tokius kaip sąnariniai pakitimai ar kaulų lūžiai, mums į pagalbą žengia naujas, pilnai skaitmeninis veterinarinis rentgenas Mindray Vetix P8. Šiuo metu Lietuvos veterinarijos rinkoje yra vos keli tokie aparatai, vieną iš jų rasite pas mus.",
          "Nepriekaištinga rentgeno nuotraukų kokybė ir ilgametė patirtis vaizdinėje diagnostikoje leidžia mums pamatyti ir įvertinti net ir menkiausius skeleto bei sąnarinius pakitimus. Po diagnostikos esame pilnai pasiruošę suteikti chirurginį ir ar konservatyvų gydymą medikamentais priklausomai nuo diagnozės.",
        ],
      },
      {
        title: "Vidaus organų ir laboratoriniai tyrimai",
        paragraphs: [
          "Diagnozuojant susirgimus susijusius su vidaus organų funkcijos sutrikimais mūsų nepamainomas pagalbininkas yra biocheminis kraujo analizatorius FUJI Dri – Chem NX600. Analizatorius dirba naudodamas sausąją chemiją, todėl yra nepriekaištingai tikslus.",
          "Šio analizatoriaus pagalba galime sužinoti daug informacijos susijusios su gyvūno vidaus organų būkle – kepenų, inkstų, kasos funkcijos pakitimus. Taip pat analizatorius matuoja šunų CRB bei kačių SAA parametrus net ir menkiausiems uždegiminiams procesams aptikti.",
        ],
      },
      {
        title: "Hormoniniai ir krešumo tyrimai",
        paragraphs: [
          "Klinikoje taip pat turime hormonų analizatorių FUJI Dri – Chem Immuno AU10V. Šio sausa chemija veikiančio, ypatingai tikslaus analizatoriaus pagalba atliekame progesterono, skydliaukės TH4 bei antinksčių kortizolio cCOR tyrimus.",
          "Bet kokius kraujo krešumo pakitimus klinikoje nustatysime su Micropint QV3 – Plus kraujo krešumo analizatoriumi.",
        ],
      },
      {
        title: "Hematologiniai tyrimai",
        paragraphs: [
          "Kraujo hematologinius, bendro kraujo vaizdo tyrimus atliekame su penkių diferencialų IDEXX LaserCyte analizatoriumi. Šis gamintojas kalba pats už save. Tikslumas ir preciziškumas – toks yra šio gamintojo parašas.",
        ],
      },
    ],
    faqs: [
      {
        question: "Kodėl moderni diagnostinė įranga yra tokia svarbi?",
        answer:
          "Moderni diagnostinė įranga leidžia tiksliau ir greičiau nustatyti pakitimus, todėl gydytojas gali aiškiau suformuluoti diagnozę ir greičiau parinkti tinkamą gydymą. Tai svarbu tiek ortopediniams, tiek vidaus ligų atvejams.",
      },
      {
        question: "Kokie tyrimai atliekami naudojant klinikos laboratorinę įrangą?",
        answer:
          "Klinikoje atliekami biocheminiai, hormoniniai, hematologiniai ir kraujo krešumo tyrimai. Jie padeda įvertinti vidaus organų funkciją, uždegiminius procesus ir kitus svarbius sveikatos rodiklius.",
      },
      {
        question: "Ar diagnostinė įranga padeda greičiau pradėti gydymą?",
        answer:
          "Taip, kokybiška diagnostika padeda greičiau suprasti problemos priežastį ir priimti sprendimą dėl tolimesnio gydymo. Tai leidžia pradėti pagalbą laiku ir tiksliau.",
      },
    ],
  },
];

export const getCoreServiceBySlug = (slug: string) =>
  coreServices.find((service) => service.slug === slug);

export const supportingServiceHighlights = [
  "Profilaktika ir vakcinacija",
  "Kelioniniai dokumentai",
  "Laboratoriniai tyrimai",
  "Odos ir ausų ligos",
  "Mikročipavimas",
  "Atsisveikinimo paslaugos",
];

export const supportingServiceCategories: SupportingServiceCategory[] = [
  {
    title: "Profilaktika ir vakcinacija",
    slug: "profilaktika",
    color: "primary",
    items: [
      "Šunų ir kačių skiepai",
      "Skiepai nuo pasiutligės ir erkių",
      "Endoparazitų ir ektoparazitų kontrolė",
      "Bendras sveikatos patikrinimas ir prevencija",
      "Nagų kirpimas",
    ],
  },
  {
    title: "Kelioniniai dokumentai ir mikročipavimas",
    slug: "kelioniniai-dokumentai",
    color: "secondary",
    items: [
      "Mikročipo implantacija ir registracija",
      "ES naminio gyvūno paso išdavimas",
      "Pasiutligės antikūnų titro tyrimo organizavimas",
      "Konsultacijos keliaujant su gyvūnais į ES ir kitas šalis",
    ],
  },
  {
    title: "Odos ir ausų ligos",
    slug: "odos-ausu-ligos",
    color: "accent",
    items: [
      "Odos skutenų mikroskopinis tyrimas",
      "Plauko mikroskopinis tyrimas",
      "Bakteriologiniai odos ir ausų tyrimai",
    ],
  },
  {
    title: "Laboratoriniai tyrimai",
    slug: "laboratoriniai-tyrimai",
    color: "primary",
    items: [
      "Kraujo morfologiniai ir biocheminiai tyrimai",
      "Šlapimo bendras ir nuosėdų tyrimas",
      "Išmatų koprologinis tyrimas",
      "Bakteriologiniai, virusologiniai ir serologiniai tyrimai",
    ],
  },
  {
    title: "Papildomos procedūros",
    slug: "papildomos-proceduros",
    color: "secondary",
    items: [
      "Inhaliacinė anestezija",
      "Kastracija ir sterilizacija",
      "Auglių šalinimas",
      "Žaizdų siuvimas",
      "Cezario pjūvio operacijos",
    ],
  },
  {
    title: "Atsisveikinimo paslaugos",
    slug: "atsisveikinimo-paslaugos",
    color: "accent",
    items: [
      "Eutanazija pagal indikacijas",
      "Gyvūnų kremavimo organizavimas",
      "Jautrus ir ramus atsisveikinimo procesas",
    ],
  },
];
