import ServiceCard from "./ServiceCard";

export default function ServicesGrid() {

    // array of services
    const services = [
        { title: 'Logo', description: 'Personalize your business with an eye-catching logo' },
        { title: 'Business Cards', description: 'Expand your client base with professional business cards' },
        { title: 'Website', description: 'Create a unique experience with a fully customized website' }
    ];

    return(
        <div id="service-grid" className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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