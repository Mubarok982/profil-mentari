// components/ArungJeramSection.js
import Image from 'next/image';

export default function ArungJeram() {
  return (
    <section id="arung-jeram" className="w-full h-[calc(100vh-4rem)] bg-gray-50 flex items-center">
    
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          
          {/* Kolom Gambar */}
          <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/arungjeram/arung-jeram1.jpg" 
              alt="Orang-orang melakukan arung jeram"
              layout="fill"
              objectFit="cover"
              className="transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Kolom Teks */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Divisi Arung Jeram</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Mengarungi derasnya arus sungai, memacu adrenalin, dan bekerja sama sebagai tim yang solid. Divisi ini melatih ketangkasan, kekuatan, dan keberanian di atas perahu karet.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}