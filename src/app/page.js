import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";
import StatsSection from "./components/StatsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative">
      {/* Animated Background with Particles */}
      <AnimatedBackground />

      {/* Navigation */}
      <Navbar />

      {/* Content */}
      <div className="container mx-auto mt-24 px-4 sm:px-8 md:px-12 py-4 relative z-10">
        <Hero />
        <StatsSection />
        <About />
        <Projects />
        <Contact />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
