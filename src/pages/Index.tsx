
import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Contact from "../components/Contact";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-blue-950">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <main>
        <section id="home" className="min-h-screen">
          <Hero scrollToSection={scrollToSection} />
        </section>
        
        <section id="about" className="py-20 bg-white dark:bg-gray-900">
          <About />
        </section>
        
        <section id="portfolio" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-blue-950">
          <Portfolio />
        </section>
        
        <section id="services" className="py-20 bg-white dark:bg-gray-900">
          <Services />
        </section>
        
        <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Index;
