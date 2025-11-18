import ServiceCard from "./ServiceCard";

export default function ServicesGrid() {

    // array of services
    const services = [
        { title: 'Logo', description: 'Personalize your business with an eye-catching logo' },
        { title: 'Business Cards', description: 'Attract new clients with professional business cards' },
        { title: 'Website', description: 'Create a unique experience with a fully customized website' }
    ];

    return(
        <div id="service-grid" className="grid justify-center gap-8 bg-pink-200"
        style={{ gridAutoFlow: 'row', gridTemplateColumns: 'repeat(auto-fit, 320px)' }}>
            {/* cycle through 'services' array for each element (curr element = service) */}
            {services.map((service) => (
                <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                />
            ))}
        </div>
        
    );
}