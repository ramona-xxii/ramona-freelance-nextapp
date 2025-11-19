import Section from "./Section";

export default function Hero() {

    return(

        <Section id="home" className="bg-blue-300 flex items-center justify-center min-h-[70vh] sm:min-h-[80vh]">
            {/* hero display */}
            <div id="hero" className="flex-col">
                <h1 className="text-2xl sm:text-3xl md:text-4xl text-center">Elevate Your Brand with NorthStar Studio</h1>
                <p className="text-lg md:text-xl text-center">Here to help you build your business, from one entrepreneur to another.</p>
            </div>
        </Section>
    );
}