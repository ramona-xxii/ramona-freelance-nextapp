export default function Navbar() {
    return (
        <nav className="bg-blue-200 w-full sticky top-0">
            <ul className="flex flex-row">
                <li className="p-2"><a href="#home">Ramona</a></li>
                <li className="p-2"><a href="#about">About</a></li>
                <li className="p-2"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}