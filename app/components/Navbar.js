export default function Navbar() {
    return (
        <nav className="bg-[#f2f2f2] w-full sticky top-0 h-fit">
            <div className="flex px-2 items-center">
                {/* left side */}
                <div>
                    <a href="#home" className="py-4 px-2">Ramona</a>
                </div>
                {/* right side */}
                <div className="flex ml-auto">
                    <a href="#about" className="py-4 px-2">About</a>
                    <a href="#contact" className="py-4 px-2">Contact</a>
                </div>
            </div>
        </nav>
    );
}