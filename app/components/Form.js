export default function Form () {
    return (
        <form className="flex flex-col">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Desired Service" />
            <input type="email" placeholder="your.email@mail.com" />
            <input type="text" placeholder="message" />
        </form>
    );
}