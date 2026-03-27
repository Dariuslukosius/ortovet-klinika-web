import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Calendar, Clock, Phone } from "lucide-react";
import { blogImages } from "@/data/blogImages";
import { posts } from "@/components/Blog";
import Seo from "@/components/Seo";
import NotFound from "@/pages/NotFound";
import { buildAbsoluteUrl, createBreadcrumbSchema, ORGANIZATION_NAME, SITE_URL } from "@/lib/seo";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const blogPosts: Record<string, {
  title: string;
  category: string;
  date: string;
  readTime: string;
  content: string;
}> = {
  "kaip-pasiruosti-veterinaro-vizitui": {
    title: "Veterinaras Kaune: ką svarbu žinoti prieš vizitą",
    category: "Patarimai",
    date: "2025-01-10",
    readTime: "4 min",
    content: `
## Pirmas žingsnis – ramus pasiruošimas

Vizitas pas veterinarą gali būti stresinis tiek gyvūnui, tiek šeimininkui, ypač jei tai pirmasis apsilankymas. Tačiau tinkamai pasirengus viskas praeina daug sklandžiau. Mūsų **Veterinaras Kaune** pasirengęs padėti kiekvienam augintiniui.

## Ką paruošti prieš vizitą?

**Dokumentai ir informacija:**
- Vakcinacijos knygelė arba dokumentai
- Ankstesnių gydymų istorija (jei turite)
- Sąrašas dabartinių vaistų ar papildų, kuriuos vartoja gyvūnas

**Praktiniai patarimai:**
- Neduokite gausiai valgyti prieš vizitą (ypač jei numatytas kraujo tyrimas ar narkozė)
- Katę laikykite nešiojamame narvelyje bent 30 min. prieš kelionę
- Šunį pasivaikščiokite prieš vizitą – tai sumažins stresą
- Atsinešite mėgstamą skanėstą, kuris nuramins gyvūną

## Vizito metu

Nebijokite klausti! Mūsų **gyvūnų klinika** gydytojai visuomet paaiškina diagnozę ir gydymo planą. Jei ko nesupratote – klauskite dar kartą.

**Svarbu pasakyti gydytojui:**
- Kada pradėjote pastebėti simptomus
- Ar buvo kontaktas su kitais gyvūnais
- Kokie mitybos pokyčiai buvo neseniai
- Ar gyvūnas daugiau ar mažiau geria vandens

## Po vizito

Atidžiai laikykitės gydytojo rekomendacijų. Jei po vizito pastebite naujų simptomų arba gyvūnui blogėja – kreipkitės nedelsiant.

## Ortovet – patogus laikas jums

Mes dirbame **iki 21:00 darbo dienomis** ir **šeštadieniais iki 15:00**. Registracija telefonu **(0-652) 08000**. Sužinokite daugiau [veterinarijos klinikoje](/){target="_self"}.
    `,
  },
  "vakcinacijos-grafikas-sunims": {
    title: "Šunų Veterinaras: vakcinacijos grafikas ir ką reikia žinoti",
    category: "Vakcinacija",
    date: "2025-01-05",
    readTime: "5 min",
    content: `
## Kodėl vakcinacija yra būtina?

Vakcinacija – vienas efektyviausių būdų apsaugoti jūsų šunį nuo pavojingų ligų. Mūsų **šunų veterinaras** kasmet skiepija šimtus augintinių Kaune ir visoje Lietuvoje.

## Pagrindinės vakcinos šunims

**Privalomosios:**
- **Pasiutligė** – skiepijama kasmet arba kas 3 metus. Privaloma pagal įstatymą.

**Rekomenduojamos:**
- **Distemperis (maro liga)** – šuniukams nuo 6–8 savaičių
- **Parvovirozė** – labai pavojinga, ypač šuniukams iki 6 mėnesių
- **Leptospirozė** – skiepijama kasmet, ypač svarbu šunims gamtoje
- **Infekcinė hepatitas** – pirminė serija šuniukui, vėliau kartojama
- **Kennelio kosulys (Bordetella)** – rekomenduojama viešas vietas lankantiems šunims

## Vakcinacijos grafikas šuniukams

| Amžius | Vakcina |
|--------|---------|
| 6–8 savaitės | Distemperis, parvovirozė |
| 10–12 savaitės | Kompleksinė + leptospirozė |
| 14–16 savaitės | Pasiutligė + kompleksinė |
| Po 12 mėnesių | Metiniai revakcinai |

## Suaugę šunys

Jei neturite vakcinacijos istorijos – kreipkitės į mūsų **veterinarijos kliniką**. Patikrinsime statusą ir sudarysime individualų planą.

## Svarbu žinoti

Prieš skiepijant šunį reikia **apžiūrėti** – tik sveikas gyvūnas gali būti vakcinuojamas. Rekomenduojame prieš vakcinaciją atlikti dehelmintizaciją. Daugiau informacijos rasite mūsų [veterinarijos klinikoje](/).

Susiekite **skambindami (0-652) 08000**.
    `,
  },
  "ortopedinės-ligos-sunims": {
    title: "Ortopedija šunims: dažniausios problemos ir gydymas",
    category: "Ortopedija",
    date: "2024-12-28",
    readTime: "6 min",
    content: `
## Ortopedija – mūsų specializacija

Ortovet klinika specializuojasi veterinarinėje ortopedijoje ir traumatologijoje. Mūsų **veterinaras** turi gilias žinias gydant kaulų, sąnarių bei raumenų ligas.

## Dažniausios ortopedijos problemos šunims

### 1. Klubo sąnario displazija (KSD)
Viena labiausiai paplitusių genetinių ligų didelio dydžio veislių šunims.

**Simptomai:**
- Šlubavimas po poilsio
- Nenoras lipti laiptais ar šokti
- „Siūbuojantis" eismas
- Raumenų netekimas užpakalinėse kojose

**Gydymas:** Nuo konservatyvaus (fizioterapija, vaistai) iki chirurginio (TPO, FHO, THA operacijos).

### 2. Priekinių kryžminių raiščių plyšimas
Dažna trauma aktyvių šunų. Gali atsirasti staiga arba vystytis palaipsniui.

**Simptomai:**
- Staigus šlubavimas
- Kojos nespaudimas
- Sąnario patinimas

**Gydymas:** Chirurginė intervencija (TPLO, TTA) – dažnai vienintelis efektyvus sprendimas.

### 3. Patelos liuksacija
Dažna mažų veislių šunims (čivavas, jorkšyras, pudelas).

**Simptomai:**
- Periodinė „šokinėjanti" eisena
- Šuns kelis spragsi arba strimgaliauja

### 4. Stuburų ligos (IVDD)
Tarpslankstelinių diskų liga – ypač dažna ilgakūnėms veislėms (taksas, buldogas).

**Simptomai:**
- Nugaros skausmas, nenoras judėti
- Galūnių silpnumas
- Sunkiais atvejais – paralyžius

## Diagnostika Ortovet klinikoje

Mūsų **gyvūnų klinikoje** ortopedijos diagnostika apima:
- **Klinikinę apžiūrą** – pilnai įvertinamas judesių amplitudė ir skausmas
- **Rentgeno tyrimas** – to paties vizito metu
- **Ultragarsas** – minkštųjų audinių vertinimas

Pastebėjote šlubavimo požymių? **Skambinkite (0-652) 08000**. Sužinokite daugiau [veterinarijos klinikoje](/).
    `,
  },
  "erkės-apsauga-nuo-erkių": {
    title: "Erkės: kaip apsaugoti augintinį ir ką daryti, jei rado erkę?",
    category: "Parazitai",
    date: "2025-03-01",
    readTime: "5 min",
    content: `
## Erkių sezonas Lietuvoje

Erkės aktyvios nuo ankstyvojo pavasario iki vėlyvo rudens – nuo kovo iki lapkričio. Tačiau šiltesniais metais erkės gali būti aktyvios net žiemą. Mūsų **veterinaras Kaune** rekomenduoja apsaugą naudoti ištisus metus.

## Kokius pavojus kelia erkės?

Erkės perneša pavojingas ligas:
- **Babeliozė (kraujoparazitinė liga)** – gali būti mirtina šunims, pasireiškia greitai
- **Laimo liga (boreliozė)** – paveikia sąnarius ir inkstus
- **Anaplazmozė** – sukelia karščiavimą ir apetito praradimą
- **Erlichiozė** – paveikia kraujo ląsteles

## Apsaugos priemonės

### Išoriniai antiparazitiniai preparatai
- **Lašiukai ant odos (spot-on)** – veikia 1 mėnesį
- **Apykaklės** – apsauga iki 8 mėnesių (pvz., Seresto)
- **Tabletės** – greita ir ilgalaikė apsauga (Nexgard, Bravecto, Simparica)
- **Purškalai** – papildoma apsauga, tinka ir namams

### Ką pasirinkti?

Mūsų **vet klinika Kaunas** rekomenduoja tartis su gydytoju, nes preparato pasirinkimas priklauso nuo gyvūno svorio, amžiaus ir sveikatos būklės.

## Ką daryti radus erkę?

**Žingsniai:**
- Naudokite specialų erkių trauktuką arba pincetą
- Sukite prieš laikrodžio rodyklę arba tiesiog traukite tiesiai
- **Neužpilkite aliejaus, spirito ar deginkite** – tai sukelia stresą erkei ir padidina infekcijos riziką
- Po ištraukimo dezinfekuokite vietą jodu ar alkoholiu
- Stebėkite gyvūną 2–3 savaites

## Kada kreiptis į veterinarą?

Nedelsdami kreipkitės, jei po erkės ištraukimo:
- Gyvūnas tampa apatiškas, atsisako valgyti
- Atsiranda karščiavimas arba šlubavimas
- Pastebite šlapimo spalvos pokyčius (tamsus, rudas šlapimas)

Daugiau informacijos apie parazitų apsaugą rasite mūsų [veterinarijos klinikoje](/). Skambinkite **(0-652) 08000**.
    `,
  },
  "cipavimas-gyvunu-ženklinimas": {
    title: "Gyvūnų čipavimas: kodėl tai svarbu ir kaip vyksta procedūra?",
    category: "Profilaktika",
    date: "2025-02-20",
    readTime: "4 min",
    content: `
## Kas yra čipas?

Mikrobluzdiklis (čipas) – tai mažytė elektroninė kortelė (apie ryžio grūdo dydžio), kuri įvedama po gyvūno oda. Joje saugomas unikalus 15 skaitmenų kodas, kuriuo galima identifikuoti gyvūną visame pasaulyje.

## Kodėl čipavimas yra svarbus?

**Pagrindinės priežastys:**
- Pasiklydęs gyvūnas gali būti greitai identifikuotas
- Lietuva reikalauja, kad šunys būtų paženklinami iki 3 mėnesių amžiaus
- Kelionei į užsienį būtinas čipas + pasas
- Apsauga nuo vagystės
- Galimybė atkurti nuosavybę ginčo atveju

## Kaip vyksta čipavimo procedūra?

Mūsų **gyvūnų klinikoje** čipavimas yra greita ir saugi procedūra:

- Čipas įvedamas specialia adatą po odą (paprastai į sprando sritį)
- Procedūra trunka apie 1–2 minutes
- Gyvūnas jaučia tik trumpą dilgsnį, panašų į įprastą injekciją
- Nereikalinga narkozė ar specialus pasiruošimas
- Čipas registruojamas nacionalinėje duomenų bazėje

## Čipavimo kaina ir laikas

Mūsų **vet klinika Kaunas** siūlo čipavimą patogiausiu jums laiku – dirbame iki 21:00 darbo dienomis. Jokio specialaus pasiruošimo nereikia.

## Po čipavimo

Čipas tarnauja visą gyvūno gyvenimą ir nereikalauja jokios priežiūros. Tačiau svarbu:
- Atnaujinti kontaktinius duomenis pasikeitus adresui ar telefono numeriui
- Įsitikinti, kad duomenys yra teisingi bazėje

Sužinokite daugiau apie mūsų paslaugas [veterinarijos klinikoje](/). Registracija **(0-652) 08000**.
    `,
  },
  "kraujo-tyrimai-gyvunams": {
    title: "Vet Kaunas: kraujo tyrimai gyvūnams ir ką jie rodo",
    category: "Diagnostika",
    date: "2025-02-10",
    readTime: "6 min",
    content: `
## Kodėl atliekami kraujo tyrimai?

Kraujo tyrimas – vienas informatyviausių diagnostikos įrankių veterinarijoje. Mūsų **vet Kaunas** klinikoje kraujo analizės padeda nustatyti ligas ankstyvoje stadijoje, kai simptomai dar nepasireiškę.

## Kada reikalingi kraujo tyrimai?

**Profilaktiškai:**
- Prieš narkozę ar operaciją
- Vyresnio amžiaus gyvūnų metiniai patikrinimai (nuo 7 metų)
- Sveikatos patikrinimas prieš vakcinaciją

**Diagnostiškai:**
- Gyvūnas apatiškas, nevalgo, vemia
- Karščiavimas, troškulys
- Svorio netekimas be aiškios priežasties
- Įtariamos vidinių organų ligos

## Kokie tyrimai atliekami?

### Bendras kraujo tyrimas (KLT)
- Raudonieji kraujo kūneliai – ar nėra anemijos
- Baltieji kraujo kūneliai – uždegimo, infekcijos požymiai
- Trombocitai – kraujo krešėjimas

### Biocheminis kraujo tyrimas
- **Kepenų fermentai (ALT, AST)** – kepenų funkcija
- **Kreatininas, karbamidas** – inkstų funkcija
- **Gliukozė** – diabeto diagnostika
- **Elektrolitai** – organizmo balansas

### Specialūs tyrimai
- **Skydliaukės hormonai** – hipotirozė/hipertirozė (dažna vyresnėms katėms)
- **Kortizolis** – Kušingo sindromas

## Kaip pasiruošti tyrimui?

- Rekomenduojama **badauti 4–6 valandas** prieš biocheminį tyrimą
- Bendram kraujo tyrimui specialaus pasiruošimo nereikia
- Atsinešite informaciją apie vartojamus vaistus

## Rezultatų interpretacija

Rezultatus visuomet interpretuoja mūsų **veterinaras** – nerekomenduojame vertinti savarankiškai, nes normos skiriasi priklausomai nuo gyvūno rūšies, amžiaus ir veislės.

Registruokitės tyrimui – skambinkite **(0-652) 08000**. Daugiau apie diagnostikos paslaugas – [veterinarijos klinikoje](/).
    `,
  },
  "kačių-sterilizacija-kastracija": {
    title: "Kačių Veterinaras: sterilizacija ir kastracija – nauda ir priežiūra",
    category: "Chirurgija",
    date: "2025-01-25",
    readTime: "5 min",
    content: `
## Sterilizacija ar kastracija?

Šios dvi procedūros dažnai painiojamos. Mūsų **kačių veterinaras** paaiškina:
- **Kastracija** – pašalinamos reprodukcinės liaukos (kačiukams – sėklidės, katėms – kiaušidės ir gimdos)
- **Sterilizacija** – kraujagyslių surišimas (reprodukciniai organai lieka, tačiau gyvūnas negali daugintis)

Veterinarai dažniausiai rekomenduoja kastravimą, nes jis suteikia daugiau sveikatos privalumų.

## Kodėl verta sterilizuoti/kastruoti?

**Sveikatos nauda:**
- Dramatiškai sumažėja pieno liaukų navikų rizika (ypač jei atlikta iki pirmojo karščiavimo)
- Panaikinama gimdos infekcijos (pyometra) rizika – tai gyvybei pavojinga liga
- Kačiukams – eliminuojamas sėklidžių vėžio pavojus
- Sumažėja prostatos ligų rizika

**Elgesio nauda:**
- Katės nustoja „šaukti" karščio metu
- Kačiukai tampa ramesniai, mažiau agresyvūs
- Sumažėja noras bėgioti lauke ir rizika pakliūti į avariją

## Optimalus amžius

- **Katės:** Rekomenduojama iki pirmojo karščiavimo – apie 5–6 mėnesiai
- **Kačiukai:** 5–6 mėnesiai amžiaus

## Kaip vyksta operacija?

Mūsų **veterinarijos klinikoje** procedūra atliekama bendroje narkozėje:
- Prieš operaciją atliekamas sveikatos patikrinimas
- Rekomenduojami kraujo tyrimai prieš narkozę
- Operacija trunka 20–45 minutes
- Gyvūnas grįžta namo tą pačią dieną

## Priežiūra po operacijos

- Stebėkite žaizdą 7–10 dienų
- Neleiskite laižyti žaizdos (naudokite apykaklę)
- Siūlai nuimami po 10–14 dienų (arba tirpstantys siūlai)
- Apribokite aktyvią veiklą 2 savaites

Registruokitės operacijai – skambinkite **(0-652) 08000**. Sužinokite daugiau [veterinarijos klinikoje](/).
    `,
  },
  "dantų-priežiūra-gyvunams": {
    title: "Gyvūnų Klinika: dantų priežiūra ir burnos sveikatos problemos",
    category: "Odontologija",
    date: "2025-01-18",
    readTime: "4 min",
    content: `
## Kodėl burnos sveikata yra svarbi?

Burnos ligos – vienos dažniausių problemų, kurias pastebime per profilaktinius patikrinimus mūsų **gyvūnų klinikoje**. Net 80% šunų ir kačių sulaukusių 3 metų turi tam tikrų burnos problemų.

## Dažniausios burnos problemos

### Dantų akmenys (tartaras)
Mineralizuota apnašų danga, kaupiasi ant dantų. Sukelia:
- Dantenų uždegimą (gingivitą)
- Periodontitą – dantenų audinių ir kaulo sunaikinimą
- Dantų praradimą

### Gingivitas
Raudonos, patinusios, lengvai kraujavusios dantenos. Ankstyvas periodonto ligos etapas.

### Dantų sulaužymas
Dažnas šunims, kramtantiems labai kietus daiktus (kaulus, kanopas, olas).

## Kaip prižiūrėti augintinio dantis namuose?

**Reguliarus valymasis:**
- Idealiu atveju – kasdien, specialiu gyvūnų dantų šepetuku ir pasta
- Naudokite tik veterinarinius produktus – žmonių dantų pasta DRAUDŽIAMA (fluoras toksiškas)
- Pradėkite nuo jaunystės, kad gyvūnas priprastų

**Papildomos priemonės:**
- Specialūs kramtomai skirtas dantų plokštelių mažinimui
- Burnos skalavimo skysčiai (pilami į vandenį)
- Specialus maistas, skirtas dantų priežiūrai

## Profesionalus dantų valymas klinikoje

Mūsų **veterinarijos klinikoje** atliekamas ultragarsinis dantų valymas bendroje narkozėje:
- Pašalinami dantų akmenys virš ir po dantenų linija
- Dantys poliruojami
- Atliekama pilna burnos apžiūra

Rekomenduojame profilaktinį burnos tikrinimą kartą per metus. Registracija **(0-652) 08000**. Daugiau informacijos [veterinarijos klinikoje](/).
    `,
  },
  "vakcinacijos-katems": {
    title: "Kačių Veterinaras: vakcinacijos – viskas ką reikia žinoti",
    category: "Vakcinacija",
    date: "2025-01-15",
    readTime: "5 min",
    content: `
## Ar katės tikrai reikia skiepyti?

Taip – absoliučiai! Net jei jūsų katė niekada neišeina iš namų. Mūsų **kačių veterinaras** paaiškina: virusai gali patekti į namus ant batų, drabužių, per langus. Vakcinacija – vienintelė efektyvi apsauga.

## Pagrindinės vakcinos katėms

### Privalomosios
- **Pasiutligė** – reikalaujama pagal Lietuvos įstatymus

### Rekomenduojamos (kombinuota vakcina)
- **Panleukopenija** – labai užkrečiama, dažnai mirtina liga
- **Rinotraheitas (FHV-1)** – virusinis kvėpavimo takų uždegimas
- **Kalicivirozė (FCV)** – sukelianti stomatitą ir kvėpavimo problemas
- **Klamidiozė** – akių infekcija, ypač dažna jaunoms katėms

### Papildomos (rekomenduojamos išeinantiems laukan)
- **FeLV (kačių leukemija)** – retrovirusas, paveikiantis imuninę sistemą
- **FIV (kačių imunodeficito virusas)** – „kačių AIDS"

## Vakcinacijos grafikas

| Amžius | Vakcina |
|--------|---------|
| 8–9 savaitės | Kombinuota (RCP) |
| 12 savaitės | Kombinuota + pasiutligė |
| Po 12 mėnesių | Revakcinacija |
| Kasmet arba kas 3 metai | Palaikomoji vakcinacija |

## Pasiruošimas vakcinacijai

Prieš skiepijant:
- Katė turi būti sveika
- Rekomenduojama atlikti dehelmintizaciją prieš 2 savaites
- Nebadinkite katės prieš vakcinaciją

## Po vakcinacijos

Normali reakcija – 1–2 dienų apetito sumažėjimas, truputis mieguistumas. Kreipkitės nedelsiant jei atsiranda stipri alerginė reakcija (kvėpavimo sutrikimai, veido patinimas).

Registruokitės vakcinacijai – **(0-652) 08000**. Sužinokite daugiau [veterinarijos klinikoje](/).
    `,
  },
  "helmintu-šalinimas-augintiniams": {
    title: "Veterinaras Kaune: helmintai, simptomai ir gydymas",
    category: "Parazitai",
    date: "2025-01-08",
    readTime: "5 min",
    content: `
## Kas yra helmintai?

Helmintai – vidiniai parazitai (kirmėlės), gyvenantys žarnyne, plaučiuose ar kituose organuose. Mūsų **veterinaras Kaune** pabrėžia: jie gali slypėti net visiškai sveikai atrodančiame gyvūne.

## Dažniausi helmintai

### Žarnyno kirmėlės
- **Askaridai** – apvaliosios kirmėlės, ypač dažnos šuniukams ir kačiukams
- **Kabliakirmiai** – gali sukelti rimtą anemiją
- **Plokščiosios kirmėlės (cestodai)** – perduodamos per blusas arba žalią mėsą
- **Plaučių kirmėlės** – perduodamos per sraiges

## Simptomai

Dažnai jokių simptomų! Tačiau sunkiais atvejais:
- Pilvo pūtimas (ypač šuniukams)
- Vėmimas, viduriavimas
- Svorio netekimas
- Matomi kirmėlių segmentai išmatose (panašūs į ryžio grūdelius)
- Analinės srities kasymasis
- Kosulys (plaučių kirmėlės)

## Kaip dažnai atlikti dehelmintizaciją?

Mūsų **gyvūnų klinika** rekomenduoja:

| Gyvūnas | Dažnumas |
|---------|----------|
| Šuniukai / kačiukai | Kas 2 savaitės iki 3 mėnesių |
| Jaunesni nei 6 mėn. | Kas mėnesį |
| Suaugę (vidaus gyvūnai) | Kas 3–6 mėnesius |
| Suaugę (lauke) | Kas 1–3 mėnesius |

## Preparatų pasirinkimas

Yra tabletės, pasta, lašiukai. Dozavimas priklauso nuo svorio. **Niekada nenaudokite žmonėms skirtų preparatų** – jie gali būti toksiški gyvūnams.

Kreipkitės į mūsų **veterinarijos kliniką** dėl tinkamo preparato ir dozės – skambinkite **(0-652) 08000**. Daugiau informacijos [čia](/).
    `,
  },
  "gyvūno-mityba-sveikata": {
    title: "Veterinarijos Klinika Kaune: teisinga augintinio mityba ir klaidos",
    category: "Mityba",
    date: "2024-12-15",
    readTime: "6 min",
    content: `
## Mityba – sveikatos pagrindas

Tinkama mityba yra vienas svarbiausių gyvūno sveikatos veiksnių. Mūsų **veterinarijos klinika Kaune** dažnai mato problemų, kurios kyla dėl netinkamo maitinimo.

## Maitinimo rūšys

### Sausas maistas (granulės)
**Privalumai:**
- Patogu laikyti ir dozuoti
- Padeda prižiūrėti dantis
- Subalansuotas (kokybiški produktai)

**Trūkumai:**
- Mažesnis drėgnis (svarbu katėms)
- Kokybė labai skiriasi priklausomai nuo gamintojo

### Šlapias maistas (konservai)
**Privalumai:**
- Didesnis drėgnis – svarbu katėms, kurios mažai geria
- Dažnai patrauklesnis skoniui

**Trūkumai:**
- Greičiau gadina dantis
- Brangesnis

### Natūralus maistas (BARF)
Žalias maistas – populiarėjanti tendencija, tačiau reikalauja žinių ir kruopštaus planavimo.

## Dažniausios mitybos klaidos

**Nekokybiškas maistas:**
- Pirmi ingredientai – grūdai, o ne mėsa
- Daug dirbtinių priedų ir konservantų

**Per daug skanėstų:**
- Skanėstai turi sudaryti ne daugiau 10% dienos raciono kalorijų

**Žmonių maistas:**
- **DRAUDŽIAMA:** svogūnai, česnakai, vynuogės, razinos, šokoladas, kaulai
- Daugelis prieskonių ir priedų pavojingi gyvūnams

**Netinkamas kiekis:**
- Nutukimas – viena dažniausių problemų. Net 1–2 kg viršsvoris katei gali sukelti diabetą

## Rekomendacijos pagal amžių

- **Jaunikliai:** Augimo formulės maistas – daugiau baltymų ir kalorijų
- **Suaugę:** Palaikomojo tipo maistas
- **Vyresni (nuo 7 m.):** Specifiniai senjorams skirti produktai – mažiau fosforo, daugiau sąnarių palaikymo

Konsultacija dėl mitybos – **(0-652) 08000**. Daugiau informacijos [veterinarijos klinikoje](/).
    `,
  },
  "ultragarso-tyrimas-gyvunams": {
    title: "Vet Klinika Kaunas: ultragarsinis tyrimas veterinarijoje",
    category: "Diagnostika",
    date: "2024-12-10",
    readTime: "4 min",
    content: `
## Kas yra ultragarsinis tyrimas?

Ultragarsas (USG) – neinvazinis diagnostikos metodas, leidžiantis vizualizuoti vidaus organus realiuoju laiku. Mūsų **vet klinika Kaunas** naudoja modernią ultragarso įrangą tiksliai diagnostikai.

## Kada rekomenduojamas ultragarsas?

**Pilvo organų tyrimas:**
- Pilvo skausmas ar pūtimas
- Vėmimas, viduriavimas, apetito praradimas
- Šlapinimosi problemos
- Įtariamas navikinis procesas
- Nėštumo stebėjimas ir kačiukų / šuniukų skaičiavimas

**Širdies tyrimas (echokardiografija):**
- Širdies ūžesiai
- Dusulys, nuovargis
- Širdies ligų stebėjimas

**Kiti atvejai:**
- Prieš operaciją
- Gydymo efektyvumo stebėjimas
- Metiniai patikrinimai vyresnio amžiaus gyvūnams

## Kaip vyksta procedūra?

Mūsų **veterinarijos klinikoje** ultragarsinis tyrimas yra visiškai neskausmingas:
- Apikirpimas – nedidelė ploto ant pilvo ar krūtinės vieta
- Gelio tepimas ant odos
- Zondo judinimas tiriamoje srityje
- Tyrimas trunka 15–30 minučių
- Rezultatai iš karto

Narkozė paprastai nereikalinga, nebent gyvūnas labai neramus.

## Pasiruošimas tyrimui

**Pilvo tyrimui:**
- Badauti 4–6 valandas (geresnė vizualizacija)
- Neištuštinti šlapimo pūslės (ji tarnauja kaip „langas" organus vizualizuojant)

**Širdies tyrimui:**
- Specialaus pasiruošimo nereikia

## Ultragarsas vs Rentgenas

| Tyrimas | Geriausiai tinka |
|---------|-----------------|
| Ultragarsas | Minkštieji audiniai, organai, kraujagyslės |
| Rentgenas | Kaulai, plaučiai, kūno formos |

Dažnai abu tyrimai atliekami kartu. Registracija tyrimui – **(0-652) 08000**. Daugiau – [veterinarijos klinikoje](/).
    `,
  },
  "odos-ligos-šunims": {
    title: "Šunų Veterinaras: odos ligos, alergija ir gydymas",
    category: "Dermatologija",
    date: "2024-12-01",
    readTime: "5 min",
    content: `
## Odos ligos – dažna problema šunims

Odos problemos sudaro apie 25% visų veterinarinių vizitų. Mūsų **šunų veterinaras** reguliariai gydo niežulį, alergiją, pleiskanojimą ir kitas dermatologines problemas.

## Dažniausios odos ligos šunims

### Alerginis dermatitas
Dažniausia odos ligų priežastis. Gali būti sukeliama:
- **Maisto alergenų** – jautliausias yra baltymas (vištiena, jautiena, grūdai)
- **Aplinkos alergenų** – žiedadulkės, dulkių erkutės, pelėsiai
- **Blusų alergenų** – net viena blusa gali sukelti stiprią reakciją

**Simptomai:**
- Nuolatinis kasymasis, laižymasis, graužimas
- Raudona, sudirgusi oda
- Ušų uždegimas (otitas)
- Kojų laižymas

### Demodekozė (demodex erkutės)
Mikroskopinės erkutės, gyvenančios plaukų folikuluose. Silpno imuniteto metu pradeda intensyviai daugintis.

**Simptomai:**
- Plaukų slinkimas – ypač aplink akis, snukutį
- Raudona, pleiskanojanti oda
- Antrinės bakterinės infekcijos

### Pioderma (bakterinis odos uždegimas)
Dažnai atsiranda kaip komplikacija po kitų odos ligų.

**Simptomai:**
- Pūliniai, spuogai ant odos
- Plutos
- Nemalonus kvapas

### Seboreja (pleiskanojimas)
Perteklinis riebalų liaukų darbas arba per sausa oda.

## Diagnostika mūsų klinikoje

Mūsų **veterinarijos klinikoje** dermatologinei diagnostikai naudojame:
- Mikroskopinį odos grandymo tyrimą
- Citologinį tyrimą
- Alergenų testas
- Maisto eliminacijos dieta

## Gydymas

Priklauso nuo diagnozės:
- Antiparazitiniai preparatai (demodekozei)
- Antibiotikai (bakterinėms infekcijoms)
- Antialerginiai vaistai (dermatitui)
- Specialus maistas (maisto alergijai)
- Šampūnai ir vietos priemonės

Niežulinčiam šuniui reikalinga profesionali diagnostika – skambinkite **(0-652) 08000**. Daugiau [veterinarijos klinikoje](/).
    `,
  },
  "skubi-veterinarine-pagalba": {
    title: "Veterinaras Kaune: skubi pagalba – kada vykti nedelsiant?",
    category: "Skubi pagalba",
    date: "2024-11-20",
    readTime: "4 min",
    content: `
## Kada kiekviena minutė svarbi?

Gyvūnų savininkai ne visada žino, kada problema reikalauja skubios pagalbos. Mūsų **veterinaras Kaune** sudarė aiškų simptomų sąrašą – nepamirškite jo.

## Skubūs simptomai – vykite nedelsiant

### Kvėpavimo problemos
- Dusulys, sunkus kvėpavimas
- Mėlyni ar blyški burnos gleivinė
- Atviras burnos kvėpavimas (katėms – visada pavojinga)

### Trauminiai sužalojimai
- Autoavarija ar kritimas iš aukštumos
- Matomos lūžio požymiai (nelygios galūnės)
- Gili žaizda ar stiprus kraujavimas

### Virškinimo trakto sutrikimai
- **Pilvo pūtimas + nevaisingas vėmimas šunims** – galimas skrandžio apsivertimas (pavojinga gyvybei!)
- Rijimas svetimkūnio (batų raišteliai, žaislų dalys)
- Kraujas išmatose ar vėmaluose

### Nervų sistemos sutrikimai
- Traukuliai
- Staigus koordinacijos praradimas
- Nesugebėjimas stovėti

### Šlapinimosi sutrikimai
- Katinas bando šlapintis, bet negali (gali būti šlapimo takų užsikimšimas – mirtina per kelias valandas)
- Kraujas šlapime

### Apsinuodijimas
- Grybai, raticide (žiurkių nuodai), antifrizo prarijimas
- Vaismedžių lapai, tulpių svogūnėliai

## Ko nedaryti?

- **Neduokite žmonių vaistų** – ibuprofenas, paracetamolis mirtinai pavojingas gyvūnams
- **Nestumkite svetimkūnio giliau** jei gyvūnas ryjo
- **Neleiskite laižyti žaizdos** iki veterinaro

## Mūsų darbo laikas

Mūsų **gyvūnų klinika** priima:
- **Pirmadienis–Penktadienis: 09:00–21:00**
- **Šeštadienis: 10:00–15:00**

Skubiais atvejais – **skambinkite iš karto: (0-652) 08000**. Daugiau informacijos [veterinarijos klinikoje](/).
    `,
  },
  "senyvo-amziaus-gyvunu-priežiūra": {
    title: "Vet Klinika Kaunas: senyvo amžiaus gyvūnų priežiūra",
    category: "Patarimai",
    date: "2024-11-10",
    readTime: "5 min",
    content: `
## Kada gyvūnas laikomas senjoru?

Gyvūnai sensta greičiau nei žmonės. Mūsų **vet klinika Kaunas** laikosi šios orientacijos:
- **Mažos veislės šunys:** Nuo 10 metų
- **Didelės veislės šunys:** Nuo 7 metų
- **Katės:** Nuo 10–11 metų

## Pokyčiai su amžiumi

### Fiziniai pokyčiai
- Sąnarių skausmas ir artritas
- Regėjimo ir klausos susilpnėjimas
- Medžiagų apykaitos sulėtėjimas
- Imuninės sistemos susilpnėjimas
- Organų funkcijos prastėjimas (inkstai, kepenys, širdis)

### Elgesio pokyčiai
- Mažiau aktyvūs
- Ilgiau miega
- Gali atsirasti kognityvinė disfunkcija (panašus į demenciją)

## Svarbiausi priežiūros elementai

### Dažnesni veterinariniai patikrinimai
Mūsų **veterinarijos klinikoje** senjorų gyvūnams rekomenduojame:
- Vizitai 2 kartus per metus (ne kasmet)
- Metiniai kraujo ir šlapimo tyrimai
- Kraujo spaudimo matavimas
- Dantų patikrinimas

### Mityba
- Specialus senjorams skirtas maistas – mažiau fosforo (inkstams), daugiau sąnarių maisto medžiagų
- Omega-3 riebalų rūgštys – gerai sąnariams ir smegenims
- Kontroliuokite svorį – nutukimas pagreitina artrito progresavimą

### Judėjimas ir komfortas
- Trumpi, bet dažni pasivaikščiojimai (geriau nei ilgi)
- Patogūs miegojimo guoliai (ortopediniai)
- Pakeliami maisto indai (palengvina ėdimą su kaklo artrito)
- Šiluminis komfortas žiemą

### Dantų priežiūra
Ypač svarbi seniems gyvūnams – bakterijos iš burnos gali paveikti širdį ir inkstus.

## Specialios senyvo amžiaus ligos

- **Inkstų nepakankamumas** – katėms ypač dažna
- **Hipertirozė (katėms)** – per aktyvi skydliaukė
- **Diabetas** – stebėkite padidėjusį gėrimą ir šlapinimąsi
- **Širdies ligos** – dusulys, kosulys, nuovargis

Pasirūpinkite savo senjoru – reguliarūs patikrinimai gelbsti gyvybes. Registracija **(0-652) 08000**. Daugiau [veterinarijos klinikoje](/).
    `,
  },
};

function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: JSX.Element[] = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(<h2 key={key++} className="text-2xl font-bold text-foreground mt-8 mb-4">{line.slice(3)}</h2>);
    } else if (line.startsWith("### ")) {
      elements.push(<h3 key={key++} className="text-xl font-bold text-foreground mt-6 mb-3">{line.slice(4)}</h3>);
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(<p key={key++} className="font-semibold text-foreground mb-2">{line.slice(2, -2)}</p>);
    } else if (line.startsWith("- ")) {
      const listItems: JSX.Element[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        const itemText = lines[i].slice(2);
        const parts = itemText.split(/\*\*(.*?)\*\*/g);
        listItems.push(
          <li key={i} className="text-muted-foreground mb-1">
            {parts.map((p, pi) => pi % 2 === 1 ? <strong key={pi} className="text-foreground">{p}</strong> : p)}
          </li>
        );
        i++;
      }
      i--;
      elements.push(<ul key={key++} className="list-disc list-inside space-y-1 mb-4 ml-2">{listItems}</ul>);
    } else if (line.startsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }
      i--;
      const rows = tableLines.filter(r => !r.match(/^\|[-| ]+\|$/));
      elements.push(
        <div key={key++} className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-primary/5">
                {rows[0].split("|").filter(c => c.trim()).map((cell, ci) => (
                  <th key={ci} className="border border-border px-4 py-2 text-left font-semibold text-foreground">{cell.trim()}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.slice(1).map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                  {row.split("|").filter(c => c.trim()).map((cell, ci) => (
                    <td key={ci} className="border border-border px-4 py-2 text-muted-foreground">{cell.trim()}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else if (line.trim()) {
      const parts = line.split(/\*\*(.*?)\*\*/g);
      // Handle links like [text](url)
      const processedParts = parts.map((p, pi) => {
        if (pi % 2 === 1) return <strong key={pi} className="text-foreground">{p}</strong>;
        const linkParts = p.split(/\[([^\]]+)\]\(([^)]+)\)/g);
        if (linkParts.length === 1) return p;
        return linkParts.map((lp, li) => {
          if (li % 3 === 1) return <Link key={li} to={linkParts[li + 1] === "/" ? "/" : linkParts[li + 1]} className="text-primary underline hover:text-primary/80">{lp}</Link>;
          if (li % 3 === 2) return null;
          return lp;
        });
      });
      elements.push(<p key={key++} className="text-muted-foreground leading-relaxed mb-4">{processedParts}</p>);
    }
  }

  return elements;
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!slug || !blogPosts[slug]) {
    return <NotFound />;
  }

  const post = blogPosts[slug];
  const postImage = blogImages[slug as keyof typeof blogImages];
  const postPreview = posts.find((item) => item.slug === slug);
  const relatedPosts = posts.filter((item) => item.slug !== slug).slice(0, 4);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: postPreview?.excerpt ?? post.title,
    image: postImage ? buildAbsoluteUrl(postImage.image) : buildAbsoluteUrl("/og-image.jpg"),
    datePublished: post.date,
    dateModified: post.date,
    articleSection: post.category,
    mainEntityOfPage: buildAbsoluteUrl(`/blog/${slug}`),
    author: {
      "@type": "Organization",
      name: ORGANIZATION_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: ORGANIZATION_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: buildAbsoluteUrl("/og-image.jpg"),
      },
    },
  };

  return (
    <main id="main-content">
        <Seo
          title={post.title}
          description={postPreview?.excerpt ?? post.title}
          image={postImage?.image}
          type="article"
          publishedTime={post.date}
          modifiedTime={post.date}
          section={post.category}
          jsonLd={[
            createBreadcrumbSchema([
              { name: "Pradžia", path: "/" },
              { name: "Blogas", path: "/blog" },
              { name: post.title, path: `/blog/${slug}` },
            ]),
            articleSchema,
          ]}
        />
        {/* Hero */}
        <div className="gradient-hero pt-28 pb-12">
          <div className="container-custom max-w-3xl">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-6 transition-colors text-sm"
            >
              <ArrowLeft size={16} />
              Grįžti į blogą
            </Link>
            <div className="inline-block px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-xs font-semibold mb-4">
              {post.category}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-5 text-primary-foreground/60 text-sm">
              <div className="flex items-center gap-1.5">
                <Calendar size={14} />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("lt-LT", { year: "numeric", month: "long", day: "numeric" })}
                </time>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={14} />
                <span>{post.readTime} skaitymo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container-custom max-w-3xl py-12">
          {postImage ? (
            <div className="mb-10 overflow-hidden rounded-[28px] border border-border bg-card shadow-card">
              <img
                src={postImage.image}
                alt={postImage.imageAlt}
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          ) : null}

          <div className="prose-custom">
            {renderContent(post.content)}
          </div>

          {/* CTA box */}
          <div className="mt-12 gradient-primary rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-primary-foreground mb-2">Turite klausimų?</h3>
            <p className="text-primary-foreground/80 mb-5">Susiekite su mumis – mūsų gydytojai atsakys į visus klausimus.</p>
            <a
              href="tel:+37065208000"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-xl font-bold hover:bg-secondary/90 transition-colors"
            >
              <Phone size={18} />
              (0-652) 08000
            </a>
          </div>

          <section className="mt-14">
            <div className="border-t border-border/80 pt-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Kiti straipsniai</h2>

              <div className="mt-8 px-10 md:px-14">
                <Carousel
                  opts={{
                    align: "start",
                    loop: relatedPosts.length > 3,
                  }}
                  className="w-full"
                >
                  <CarouselContent>
                    {relatedPosts.map((item) => (
                      <CarouselItem
                        key={item.slug}
                        className="basis-[86%] sm:basis-1/2 xl:basis-1/3"
                      >
                        <Link
                          to={`/blog/${item.slug}`}
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
          </section>

          {/* Back link */}
          <div className="mt-8 pt-8 border-t border-border">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              <ArrowLeft size={16} />
              Visi straipsniai
            </Link>
          </div>
        </div>
    </main>
  );
}
