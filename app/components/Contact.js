import Section from "./Section";
import Form from "./Form";

export default function Contact () {
    return (
        <Section id="contact">
            <div className="flex flex-col justify-center items-center py-5 bg-yellow-100">
                <h1 className="text-3xl">Get In Touch</h1>
            </div>
            
            <div className="bg-orange-200">
                <Form />
            </div>
            
        </Section>
    );
}