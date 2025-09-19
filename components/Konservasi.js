// components/Konservasi.js
import ImageSlider from './ImageSlider'; // 1. Impor komponen slider

// 2. Siapkan daftar path gambar untuk slider divisi Konservasi
const konservasiImages = [
  '/images/konservasi/konservasi.webp', // Ganti dengan nama file Anda
  '/images/konservasi/konservasi2.jpg',  // Ganti dengan nama file Anda
  '/images/konservasi/konservasi3.png',  // Ganti dengan nama file Anda
];

export default function Konservasi() {
  return (
    <section id="konservasi" className="w-full h-[calc(100vh-4rem)] bg-white flex items-center">
      <div className="container mx-auto px-4">
        {/* Menggunakan flexbox untuk layout bolak-balik */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
          
          {/* 3. Kolom Gambar (kanan) sekarang menggunakan ImageSlider */}
          <div className="w-full md:w-3/5">
            <ImageSlider images={konservasiImages} />
          </div>

          {/* Kolom Teks (kiri) */}
          <div className="w-full md:w-2/5 text-center md:text-left">
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