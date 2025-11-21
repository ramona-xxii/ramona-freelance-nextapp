import Section from "./Section";
import Form from "./Form";

export default function Contact () {
    return (
        <Section id="contact">
            <h1>Get In Touch</h1>
            <div className="bg-orange-200 w-fit">
                <Form />
            </div>
            
        </Section>
    );
}