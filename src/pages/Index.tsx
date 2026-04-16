import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Vets from "@/components/Vets";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Seo from "@/components/Seo";
import { createVeterinaryCareSchema, createWebsiteSchema } from "@/lib/seo";

export default function Index() {
  return (
    <main id="main-content">
      <Seo
        title="Ortovet veterinarijos klinika Kaune"
        description="Ortovet veterinarijos klinika Kaune specializuojasi ortopedijoje, traumatologijoje, odontologijoje, minkštųjų audinių chirurgijoje ir pažangioje diagnostikoje."
        image="/og-home.jpg"
        path="/"
        jsonLd={[createVeterinaryCareSchema(), createWebsiteSchema()]}
      />
      <Hero />
      <Services />
      <About />
      <Vets />
      <Testimonials />
      <Blog />
      <Contact />
    </main>
  );
}
