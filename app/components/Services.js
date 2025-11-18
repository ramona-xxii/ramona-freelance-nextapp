import Section from "./Section";
import ServicesGrid from "./ServicesGrid";

export default function Services() {
    return (
        <Section id="services" className="bg-yellow-200">
            <h1 className="text-center text-3xl">Choose Your Service</h1>
            <ServicesGrid />
        </Section>
    );
}