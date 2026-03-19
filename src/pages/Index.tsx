import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Vets from "@/components/Vets";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyContact from "@/components/StickyContact";

export default function Index() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <About />
        <WhyUs />
        <Vets />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <StickyContact />
    </>
  );
}
