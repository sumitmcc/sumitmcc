'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import ThemeSwitch from '@/components/ui/ThemeSwitch'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useTheme } from 'next-themes';



const Navbar = () => {
    const [open, setOpen] = useState(false);

    const pathName = usePathname();

    const navLinks = [
        { name: "About", href: "/" },
        { name: "Work", href: "/work" },
        { name: "Baking", href: "/baking" },
        { name: "Photography", href: "/photography" },
      ];
    const menuRef = useRef<HTMLDivElement | null>(null);
    const hamburgerRef = useRef<HTMLButtonElement | null>(null);
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
      setMounted(true);
    }, []);
    
    
    const logoSrc = resolvedTheme === 'dark' ? '/logo-light.png' : '/logo-dark.png';
    

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current?.contains(event.target as Node) && hamburgerRef.current && !hamburgerRef.current?.contains(event.target as Node)) {
                setOpen(false);
            }
            
        };

        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscKey);

        return () => {
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("keydown", handleEscKey);
        }


    }, []);

    const toggleOpen = () => {
        setOpen((prev) => !prev);
    }


  return (
    <nav className='mx-8  sticky top-0 px-6 bg-transparent  z-50 rounded-full backdrop-blur-md'>
      
      <div className='flex justify-between items-center'>
        {/* Logo */}
        <div className='flex items-center'>
        {mounted? (
        <Link href="/">
        <Image
        src={logoSrc}
        alt='Logo'
        width={120}
        height={30}
        className=' rounded-full w-20 md:w-full'
        /></Link>
        ) : (
          <div className="w-30 h-8 bg-gray-300 rounded-full animate-pulse" />
        )}
        </div>

        {/* Links Section */}
        <div className="hidden md:flex lg:space-x-10 space-x-6 xl:space-x-14 justify-center flex-grow text-lg mb-2">
            {navLinks.map((link) => (
                <Link
                key={link.name} 
                href={`${link.href}`}
                className={`${pathName === link.href
                    ? "font-bold text-slate-950 dark:text-slate-300"
                    : "text-gray-900"
                } hover:font-semibold text-slate-950 dark:text-slate-100 dark:hover:text-blue-500`}>{link.name}</Link>
            ))}
          
        </div>

        <div className='flex items-center space-x-4 mr-4 '>
            <div className='text-2xl'><ThemeSwitch/></div>
            {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button className="dark:text-gray-300 text-gray-800 focus:outline-none" onClick={toggleOpen} ref={hamburgerRef}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
    <div
    ref={menuRef}
    className={`${open? "max-h-screen opacity-100": "max-h-0 opacity-0 z-50"} 
    md:hidden overflow-hidden transition-all duration-300 ease-linear bg-gray-200 rounded-lg space-y-1 z-50 shadow-lg absolute top-full left-0 right-0 `}>
        {navLinks.map((link) => (
            <Link href={link.href} 
            key={link.name}
            className={`${pathName === link.href
                ? "font-semibold text-gray-950"
                : "text-grey-900"
            } block px-4 py-2 text-slate-900 `}
            onClick={() => setOpen(false)}>{link.name}</Link>
        ))}
        
    </div>
    </nav>
  )}

export default Navbar
