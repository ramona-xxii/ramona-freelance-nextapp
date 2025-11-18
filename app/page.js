import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
    {/* site container */}
    <div id="site-container" className="bg-blue-200 px-10">
      <Hero />
      <Services />

    </div>
      
    </>
  );
}
