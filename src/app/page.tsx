import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PainSolutions from "@/components/PainSolutions";
import BestFit from "@/components/BestFit";
import Framework from "@/components/Framework";
import CoreSolutions from "@/components/CoreSolutions";
import CaseStudies from "@/components/CaseStudies";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FloatingCalendar from "@/components/FloatingCalendar";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <PainSolutions />
        <BestFit />
        <Framework />
        <CoreSolutions />
        <CaseStudies />
        <FAQ />
        <Testimonials />
      </main>
      <Footer />
      <FloatingCalendar />
    </>
  );
}
