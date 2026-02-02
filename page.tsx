import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import About from "@/app/components/About";
import Projects from "@/app/components/Projects";
import Journey from "@/app/components/Journey";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import Services from "@/app/components/Services";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Journey/>
      <Contact/>
      <Footer/>
    </main>
  );
}
