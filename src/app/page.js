import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import ProjectsSection from "@/components/ProjectsSection";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function HomePage() {
  return (
  <>
    <Header />
    <main>
      <Hero />
      <TrustBar />
      <Services />
      <ProjectsSection />
      <About />
      <Experience />
      <Process />
      <FAQ />
      <Contact />
    </main>
    <Footer />
    <WhatsAppButton />
  </>
  );
}
