export default function Navbar() {
    return (
        <nav className="bg-[#f2f2f2] w-full sticky top-0 h-fit">
            <div className="flex items-center px-6">
                {/* left side */}
                <div>
                    <a href="#home" className="py-4 px-2">NorthStar Studio</a>
                    <span className="text-gray-300">by Ramona McBrearty</span>
                </div>
                {/* right side */}
                <div className="flex ml-auto">
                    <a href="#services" className="py-4 px-6">Services</a>
                    <a href="#about" className="py-4 px-6">About</a>
                    <a href="#contact" className="py-4 px-6">Contact</a>
                </div>
            </div>
        </nav>
    );
}