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
        <nav className="bg-[#f2f2f2] shadow-xl sticky top-0 h-12 sm:h-19">
            {/* outer div*/}
            <div className="flex justify-between items-center px-10 h-full w-full">
                {/* left side */}
                <div className="justify-center w-40">
                    <a href="#home">
                        {/* logo */}
                        <Image 
                            src="/images/Northstar.png"
                            alt="Northstar studio logo"
                            width={200}
                            height={200}
                            className='h-full w-auto'
                        />
                    </a>
                </div>
                {/* right side */}
                <div className="hidden sm:flex justify-center">
                    {/* menu links */}
                    <a href="#services" className="pr-10">SERVICES</a>
                    <a href="#about" className="pr-10">ABOUT</a>
                    <a href="#contact">CONTACT</a>
                </div>
                {/* hamburger menu - small desktop */}
                <div className='sm:hidden cursor-pointer'> 
                    <button type="button" onClick={toggleNavMenu}>
                        <FontAwesomeIcon icon={ faBars } size='xl'/>
                    </button>
                </div>

            </div>
            {/* mobile dropdown */}
            {menuOpen && (
                <div className='sm:hidden flex flex-col'>
                    <a href="#services" className="px-10 py-3 ms-auto" onClick={() => setMenuOpen(false)}>SERVICES</a>
                    <a href="#about" className="px-10 py-3 ms-auto" onClick={() => setMenuOpen(false)}>ABOUT</a>
                    <a href="#contact" className="px-10 py-3 ms-auto" onClick={() => setMenuOpen(false)}>CONTACT</a>
                </div>
            )}
        </nav>
    );
}