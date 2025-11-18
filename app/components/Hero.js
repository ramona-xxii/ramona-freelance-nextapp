import Section from "./Section";

export default function Hero() {

    return(

        <Section id="home" className="bg-blue-300">
            {/* hero display */}
            <div id="hero" className="flex-col pt-5 space-y-3">
                <h1 className="text-2xl sm:text-3xl md:text-4xl text-center">Elevate Your Brand with NorthStar Studio</h1>
                <p className="text-lg md:text-xl text-center">Helping you build your business, from one entrepreneur to another.</p>
            </div>
        </Section>
    );
}