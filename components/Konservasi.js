// components/KonservasiSection.js
import Image from 'next/image';

export default function Konservasi() {
  return (
    <section id="konservasi" className="w-full h-[calc(100vh-4rem)] bg-white flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          
          {/* Kolom Gambar (dengan md:order-last agar pindah ke kanan di layar besar) */}
          <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg md:order-last">
            <Image
              src="/images/konservasi/konservasi.webp"
              alt="Tangan memegang bibit tanaman"
              layout="fill"
              objectFit="cover"
              className="transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Kolom Teks */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Divisi Konservasi</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Menjadi garda terdepan dalam menjaga kelestarian alam. Divisi ini fokus pada kegiatan penanaman pohon, pembersihan lingkungan, edukasi, dan penelitian untuk keberlanjutan bumi.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}