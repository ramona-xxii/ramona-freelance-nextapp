import Section from "./Section";
import Image from 'next/image';

export default function About () {

    return (
        <Section id="about" className="bg-green-200">
            <h1 className="text-center text-xl sm:text-3xl py-5">Meet Your Developer</h1>
            <div className="flex flex-col md:flex-row">
                {/* left side */}
                <div className="flex flex-row h-fit basis-1/4 bg-pink-100">
                    <div className="content-center">
                        <h2 className="text-4xl rotate-270 whitespace-nowrap">Ramona</h2>
                    </div>
                    <div className="h-fit w-auto">
                        <Image
                        src="/images/profile-pic.png"
                        alt="profile pic"
                        width={200}
                        height={200}
                        />
                    </div>
                </div>
                {/* right side */}
                <div className="flex basis-3/4 bg-pink-200">
                    <h2>Meet Ramona,</h2>
                    <p>Lorem ipsum dolor sit amet. Vel suscipit adipisci ut architecto iste et laudantium 
                    inventore! Est minus perferendis ut dignissimos dolor id molestiae cumque eum accusantium 
                    obcaecati. Rem unde voluptatem in galisum harum qui aliquid voluptates At impedit deleniti 
                    et perspiciatis magnam est quia alias ex nihil culpa.
                    </p>
                </div>
            </div>
            
            

        </Section>
    );
}