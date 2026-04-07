import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="bg-background flex flex-col items-center w-full min-h-screen">
        <Navbar />
        
        <Hero />
        <About />
        <Projects />
        <Contact />
    </main>
  );
}
