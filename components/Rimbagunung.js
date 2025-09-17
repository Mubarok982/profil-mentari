// components/RimbaGunungSection.js
import Image from 'next/image';

export default function RimbaGunung() {
  return (
    <section id="rimba-gunung" className="w-full h-[calc(100vh-4rem)] bg-white flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          
          {/* Kolom Gambar (dengan md:order-last agar pindah ke kanan di layar besar) */}
          <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg md:order-last">
            <Image
              src="/images/rimbagunung/rimbagunung.jpg" 
              alt="Pendaki gunung di puncak"
              layout="fill"
              objectFit="cover"
              className="transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Kolom Teks */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Divisi Rimba Gunung</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Menyusuri lebatnya hutan dan mendaki puncak-puncak tertinggi. Divisi ini adalah tentang navigasi, survival, manajemen perjalanan, dan menikmati keindahan alam dari ketinggian.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}