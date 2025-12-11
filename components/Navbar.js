"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const NavLink = ({ href, children, onClick, className }) => {
  const underlineClasses = "hidden md:block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-emerald-400 after:transition-all after:duration-300 group-hover:after:w-full";

  return (
    <Link 
      href={href} 
      onClick={onClick}
      className={`group relative px-3 py-2 text-sm lg:text-base transition-colors duration-300 block w-full md:w-auto ${className}`}
    >
      {children}
      <span className={underlineClasses}></span>
    </Link>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === '/';

  // --- LOGIKA TEMA ---
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    // Cek LocalStorage
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Set tema awal
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  // --- STYLE NAVBAR ---
  let navbarClasses = "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 ";
  
  if (scrolled) {
    if (isHomePage) {
        navbarClasses += "bg-black/30 backdrop-blur-md shadow-sm"; 
    } else {
        // Style saat scroll di halaman biasa (mendukung dark mode)
        navbarClasses += "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm border-b border-gray-200/50 dark:border-gray-700/50";
    }
  } else {
    navbarClasses += "bg-transparent";
  }

  let textColorClass = "";
  if (isHomePage) {
    textColorClass = "text-gray-100 hover:text-white";
  } else {
    textColorClass = "text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400";
  }

  const logoTextClass = isHomePage ? "text-white" : "text-emerald-600 dark:text-emerald-400";
  // Warna hamburger menyesuaikan mode
  const hamburgerColor = isHomePage ? "text-white" : "text-gray-800 dark:text-white";

  const divisions = [
    { name: "Arung Jeram", href: "/#arung-jeram" },
    { name: "Caving", href: "/#caving" },
    { name: "Konservasi", href: "/#konservasi" },
    { name: "Panjat Tebing", href: "/#panjat-tebing" },
    { name: "Rimba Gunung", href: "/#rimba-gunung" },
  ];

  return (
    <>
      <header className={navbarClasses}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group z-50">
              <div className="relative h-10 w-10 md:h-12 md:w-12">
                <Image
                  src="/images/navbar/logomentari.png"
                  alt="Logo Mapala Mentari"
                  fill
                  sizes="(max-width: 768px) 48px, 64px"
                  className="rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span className={`font-bold text-lg md:text-xl tracking-wider transition-colors ${logoTextClass}`}>
                MENTARI
              </span>
            </Link>
            
            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              <NavLink href="/" className={textColorClass}>Home</NavLink>
              <NavLink href="/pengurus" className={textColorClass}>Profil Pengurus</NavLink>
              {divisions.map((div) => (
                <NavLink key={div.name} href={div.href} className={textColorClass}>
                  {div.name}
                </NavLink>
              ))}

              {/* Toggle Dark Mode Desktop (Samping Kanan Rimba Gunung) */}
              <button
                onClick={toggleTheme}
                className={`ml-4 p-2 rounded-full transition-all duration-300 hover:bg-black/5 dark:hover:bg-white/10 ${textColorClass}`}
                aria-label="Toggle Dark Mode"
              >
                {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
              </button>
            </nav>

            {/* Mobile Hamburger Button (Hanya Ikon Menu) */}
            {!isOpen && (
              <button 
                onClick={toggleMenu} 
                className={`md:hidden z-50 focus:outline-none transition-colors ${hamburgerColor}`}
                aria-label="Open Menu"
              >
                <FaBars size={24} />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm md:hidden"
            />

            {/* Side Menu Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed top-4 right-4 w-[75%] max-w-xs h-auto max-h-[90vh] overflow-y-auto bg-slate-900/95 backdrop-blur-xl shadow-2xl z-[70] md:hidden rounded-2xl border border-white/10"
            >
              <div className="flex flex-col p-5">
                
                {/* Header Menu */}
                <div className="flex justify-between items-center mb-6 border-b border-gray-700 pb-4">
                  <span className="text-white font-bold tracking-wider">MENU</span>
                  <button 
                    onClick={toggleMenu}
                    className="text-white hover:text-emerald-400 transition-colors focus:outline-none bg-white/10 p-2 rounded-full hover:bg-white/20"
                  >
                    <FaTimes size={20} />
                  </button>
                </div>

                {/* List Menu */}
                <nav className="flex flex-col space-y-3">
                  <NavLink href="/" onClick={toggleMenu} className="text-lg font-medium text-white hover:text-emerald-400 bg-white/5 rounded-lg">Home</NavLink>
                  <NavLink href="/pengurus" onClick={toggleMenu} className="text-lg font-medium text-white hover:text-emerald-400 bg-white/5 rounded-lg">Profil Pengurus</NavLink>
                  
                  <div className="mt-2 pt-2 border-t border-gray-700">
                    <p className="px-3 text-xs text-emerald-500 uppercase tracking-widest mb-3 font-bold mt-2">Divisi</p>
                    <div className="space-y-2 pl-1">
                      {divisions.map((div) => (
                        <NavLink key={div.name} href={div.href} onClick={toggleMenu} className="text-gray-300 hover:text-white text-base py-1">
                          {div.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>

                  {/* --- TOMBOL DARK MODE (DALAM MENU MOBILE) --- */}
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <button 
                      onClick={toggleTheme}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white group"
                    >
                      <span className="text-sm font-medium">
                        {isDark ? "Ganti ke Mode Terang" : "Ganti ke Mode Gelap"}
                      </span>
                      {isDark ? (
                        <FaSun size={18} className="text-yellow-400 group-hover:rotate-45 transition-transform" /> 
                      ) : (
                        <FaMoon size={18} className="text-blue-200 group-hover:-rotate-12 transition-transform" />
                      )}
                    </button>
                  </div>

                </nav>

                <div className="mt-6 text-center pt-4 border-t border-gray-700">
                  <p className="text-[10px] text-gray-500">UKM MENTARI © {new Date().getFullYear()}</p>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}