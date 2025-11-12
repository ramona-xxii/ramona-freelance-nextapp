export default function Navbar() {
    return (
        <nav className="bg-[#1f48ff] w-full sticky top-0">
            <ul className="flex flex-row">
                <li className="p-2 text-white"><a href="#home">Ramona</a></li>
                <li className="p-2 text-white"><a href="#about">About</a></li>
                <li className="p-2 text-white"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}