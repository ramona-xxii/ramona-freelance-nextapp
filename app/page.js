import Hero from "./components/Hero";
import Section from "./components/Section";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
    {/* site container */}
    <div id="site-container" className="bg-blue-200 px-10">
      <Section><Hero /></Section>
      <Section><Services /></Section>

      {/* ABOUT section */}
      <section id="about" className="bg-green-200">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center">Meet Your Developer</h1>
      </section>

      {/* CONTACT section */}
      <section id="contact">
      </section>
    </div>
      
    </>
  );
}
