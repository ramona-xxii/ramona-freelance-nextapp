import Section from "./Section";
import ServicesGrid from "./ServicesGrid";

export default function Services() {
    return (
        <Section id="services" className="bg-yellow-200 flex-col items-center justify-center">
            <h1 className="text-center text-xl sm:text-3xl py-5">Choose A Service</h1>
            <ServicesGrid />
            
        </Section>
    );
}