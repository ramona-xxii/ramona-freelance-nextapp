import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import Image from 'next/image';


export default function Navbar() {
    return (
        <nav className="bg-[#f2f2f2] w-full sticky top-0 h-fit">
            <div className="flex items-center px-6">
                {/* left side */}
                <div className='flex'>
                    <a href="#home">
                        <Image
                        src="/images/NorthStar.png"
                        alt='northstar studio logo'
                        width={200}
                        height={200}/>
                    </a>
                </div>
                {/* right side */}
                <div className="flex ml-auto">
                    <a href="#services" className="py-4 px-6">Services</a>
                    <a href="#about" className="py-4 px-6">About</a>
                    <a href="#contact" className="py-4 px-6">Contact</a>
                </div>
            </div>
            {/* hamburger button */}
                <button type="button">
                    <FontAwesomeIcon icon={faBars} className='h-8 w-8'/>
                </button>
        </nav>
    );
}