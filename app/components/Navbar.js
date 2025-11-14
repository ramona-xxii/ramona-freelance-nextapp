'use client' // need in order to use useState; must be before imports

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image';
import { useState } from 'react';


export default function Navbar() {

    // 2 states: open or not open -> set to false as default so menu isnt already open
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleNavMenu = () => {
        // set to opposite of whatever menuOpen state is to toggle open/close
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className="bg-[#f2f2f2] shadow-xl">
            {/* outer div*/}
            <div className="flex justify-between items-center px-4 md:px-10 py-4 md:py-5 h-full w-full">
                {/* left side */}
                <div className="justify-center">
                    <a href="#home">
                        {/* logo */}
                        <Image 
                            src="/images/Northstar.png"
                            alt="Northstar studio logo"
                            width={100}
                            height={100}
                        />
                    </a>
                </div>
                {/* right side */}
                <div className="hidden sm:flex justify-center">
                    {/* menu links */}
                    <a href="#services" className="pl-6">Services</a>
                    <a href="#about" className="pl-6">About</a>
                    <a href="#contact" className="pl-6">Contact</a>
                </div>
                {/* hamburger menu */}
                <div className='sm:hidden cursor-pointer'> 
                    <button type="button" onClick={toggleNavMenu}>
                        <FontAwesomeIcon icon={ faBars } className='h-8 w-8'/>
                    </button>
                </div>
            </div>
            {/* mobile dropdown */}
            {menuOpen && (
                <div className='sm:hidden flex flex-col ease-in duration-500'>
                    <a href="#services" className="p-1">Services</a>
                    <a href="#about" className="p-1">About</a>
                    <a href="#contact" className="p-1">Contact</a>
                </div>
            )}
        </nav>
    );
}