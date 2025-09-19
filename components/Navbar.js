"use client";

import Link from 'next/link';
import Image from 'next/image';

const NavLink = ({ href, children }) => {
  const baseClasses = "relative px-3 py-2 text-sm lg:text-base text-gray-300 transition-colors duration-300 hover:text-white";
  const underlineClasses = "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-emerald-400 after:transition-all after:duration-300 group-hover:after:w-full";

  if (href.startsWith('/')) {
    return (
      <Link href={href} className={`group ${baseClasses}`}>
        {children}
        <span className={underlineClasses}></span>
      </Link>
    );
  }
  return (
    <a href={href} className={`group ${baseClasses}`}>
      {children}
      <span className={underlineClasses}></span>
    </a>
  );
};

export default function Navbar() {
  const divisions = [
    { name: "Arung Jeram", href: "#arung-jeram" },
    { name: "Caving", href: "#caving" },
    { name: "Konservasi", href: "#konservasi" },
    { name: "Panjat Tebing", href: "#panjat-tebing" },
    { name: "Rimba Gunung", href: "#rimba-gunung" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-12 w-12">
              <Image
                src="/images/navbar/logomentari.png"
                alt="Logo Mapala Mentari"
                fill
                className="rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/pengurus">Profil Pengurus</NavLink>
            {divisions.map((div) => (
              <NavLink key={div.name} href={div.href}>
                {div.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}