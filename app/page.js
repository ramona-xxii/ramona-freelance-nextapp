import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
    {/* site container */}
    <div id="site-container" className="bg-blue-200 px-10">
      <Hero />
      <Services />
      <About />
      <Contact />
    </div>
      
    </>
  );
}
