// components/HeroSection.js
import Image from 'next/image'; // KOREKSI 1: Path diubah menjadi 'next/image'

export default function HeroSection() {
  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen text-center text-white">
      {/* Background Image */}
      <Image
        src="/images/herosection/OIP.webp"
        alt="Latar belakang gunung dan danau yang indah untuk hero section Mapala"
        
        // KOREKSI 2: Menggunakan cara modern untuk fill background
        fill 
        className="-z-10 object-cover" // object-cover ditambahkan di sini
        
        // Penggunaan 'priority' di sini sudah SANGAT BAIK untuk performa!
        priority 
      />
      
      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-black/50 -z-10"></div>
      
      <div className="z-10 p-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          UKM MENTARI
        </h1>
        <h2>
          Mahasiswa Pecinta Alam Universitas Muhammadiyah Magelang
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
          Di mana Bumi kupijak, di situ aku kena pajak.
        </p>
      </div>
    </section>
  );
}