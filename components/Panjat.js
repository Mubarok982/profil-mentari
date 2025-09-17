// components/PanjatTebingSection.js
import Image from 'next/image';

export default function Panjat() {
  return (
    <section id="panjat-tebing" className="w-full h-[calc(100vh-4rem)] bg-gray-50 flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          
          {/* Kolom Gambar */}
          <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/panjat/panjat.png" 
              alt="Seseorang sedang melakukan panjat tebing"
              layout="fill"
              objectFit="cover"
              className="transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Kolom Teks */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Divisi Panjat Tebing</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Menaklukkan tebing vertikal dengan kekuatan, teknik, dan fokus. Divisi ini membangun kepercayaan diri, kekuatan fisik, dan mental yang kuat untuk mencapai puncak.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}