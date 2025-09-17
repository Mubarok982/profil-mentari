// components/Navbar.js
"use client";

import Link from 'next/link';
import Image from 'next/image';

// KOREKSI 1: NavLink dibuat lebih pintar untuk menangani link internal & anchor
const NavLink = ({ href, children }) => {
  // Jika link adalah internal (diawali dengan '/'), gunakan <Link> dari Next.js
  if (href.startsWith('/')) {
    return (
      <Link href={href} className="px-3 py-2 text-sm lg:text-base text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
        {children}
      </Link>
    );
  }
  // Jika link adalah anchor (diawali dengan '#'), gunakan <a> biasa
  return (
    <a href={href} className="px-3 py-2 text-sm lg:text-base text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
      {children}
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-12 w-12">
              <Image
                src="/images/navbar/logomentari.png"
                alt="Logo Mapala Mentari"
                fill
                className="rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <span className="text-xl font-bold text-gray-900 hidden sm:block">
              MAPALA
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <NavLink href="/">Home</NavLink>
            {/* KOREKSI 2: Link baru ke halaman pengurus ditambahkan di sini */}
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