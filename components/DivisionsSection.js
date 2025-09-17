// components/DivisionsSection.js
import Image from 'next/image';

// Data untuk setiap divisi
const divisionsData = [
  {
    id: "arung-jeram",
    title: "Divisi Arung Jeram",
    description: "Mengarungi derasnya arus sungai, memacu adrenalin, dan bekerja sama sebagai tim yang solid. Divisi ini melatih ketangkasan, kekuatan, dan keberanian di atas perahu karet.",
    imageUrl: "https://images.unsplash.com/photo-1620241422791-3a6380655513?q=80&w=1974&auto=format&fit=crop",
    alt: "Orang-orang melakukan arung jeram"
  },
  {
    id: "rimba-gunung",
    title: "Divisi Rimba Gunung",
    description: "Menyusuri lebatnya hutan dan mendaki puncak-puncak tertinggi. Divisi ini adalah tentang navigasi, survival, manajemen perjalanan, dan menikmati keindahan alam dari ketinggian.",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop",
    alt: "Pendaki gunung di puncak"
  },
  {
    id: "panjat-tebing",
    title: "Divisi Panjat Tebing",
    description: "Menaklukkan tebing vertikal dengan kekuatan, teknik, dan fokus. Divisi ini membangun kepercayaan diri, kekuatan fisik, dan mental yang kuat untuk mencapai puncak.",
    imageUrl: "https://images.unsplash.com/photo-1593510987185-56901992982d?q=80&w=1974&auto=format&fit=crop",
    alt: "Seseorang sedang melakukan panjat tebing"
  },
  {
    id: "konservasi",
    title: "Divisi Konservasi",
    description: "Menjadi garda terdepan dalam menjaga kelestarian alam. Divisi ini fokus pada kegiatan penanaman pohon, pembersihan lingkungan, edukasi, dan penelitian untuk keberlanjutan bumi.",
    imageUrl: "https://images.unsplash.com/photo-1618472637736-b2a2445e3c30?q=80&w=2070&auto=format&fit=crop",
    alt: "Tangan memegang bibit tanaman"
  }
];

// Komponen untuk satu kartu divisi
const DivisionCard = ({ id, title, description, imageUrl, alt }) => (
  <div id={id} className="flex-shrink-0 w-full h-full snap-center">
    <div className="relative w-full h-full flex flex-col md:flex-row items-center">
      {/* Gambar di Kiri (Desktop) atau Atas (Mobile) */}
      <div className="relative w-full md:w-1/2 h-64 md:h-full">
        <Image
          src="/images/lol.jpg"
          alt={alt}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Konten Teks di Kanan */}
      <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-base text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </div>
);

// Komponen Utama Section Divisi
export default function DivisionsSection() {
  return (
    <section className="relative w-full h-screen bg-gray-100">
      {/* --- Container dengan Horizontal Scrolling --- */}
      <div className="flex w-full h-full overflow-x-auto snap-x snap-mandatory">
        {divisionsData.map((division) => (
          <DivisionCard key={division.id} {...division} />
        ))}
      </div>
       {/* Indikator scroll (opsional) */}
       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 animate-pulse">
        <p>‹ Gulir ke samping ›</p>
      </div>
    </section>
  );
}