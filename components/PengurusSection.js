// components/PengurusSection.js
import Image from 'next/image';
import Link from 'next/link';
// 1. Impor ikon baru dari react-icons
import { FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa';

// 2. Perbarui struktur data untuk menyertakan link media sosial
const ketuaUmum = { 
  name: 'Ahmad Budi', 
  position: 'Ketua Umum', 
  imageUrl: '/images/pengurus/placeholder.png',
  socials: {
    instagram: 'http://googleusercontent.com/instagram.com/ahmadbudi',
    whatsapp: 'https://wa.me/6281234567890', // Gunakan format https://wa.me/
    facebook: 'http://googleusercontent.com/facebook.com/ahmad.budi'
  }
};

const dataPengurusLainnya = [
  { 
    name: 'Citra Lestari', 
    position: 'Wakil Ketua', 
    imageUrl: '/images/pengurus/placeholder.png',
    socials: {
      instagram: 'http://googleusercontent.com/instagram.com/citra',
      whatsapp: 'https://wa.me/6281234567891',
      facebook: 'http://googleusercontent.com/facebook.com/citra.lestari'
    }
  },
  { 
    name: 'Dewi Sartika', 
    position: 'Sekretaris', 
    imageUrl: '/images/pengurus/placeholder.png',
    socials: {
      instagram: 'http://googleusercontent.com/instagram.com/dewi',
      whatsapp: 'https://wa.me/6281234567892',
      facebook: 'http://googleusercontent.com/facebook.com/dewi.sartika'
    }
  },
  // Tambahkan data pengurus lainnya dengan format yang sama
];

// 3. Modifikasi PengurusCard untuk menampilkan ikon
const PengurusCard = ({ person }) => (
  <div className="text-center flex flex-col items-center">
    <div className="relative h-56 w-56 mx-auto rounded-full overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
      <Image
        className="object-cover"
        src={person.imageUrl}
        alt={`Foto ${person.name}`}
        fill
      />
    </div>
    <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
    <p className="text-sm leading-6 text-gray-600">{person.position}</p>
    
    {/* --- BLOK BARU UNTUK IKON MEDIA SOSIAL --- */}
    <div className="mt-4 flex justify-center gap-4">
      {person.socials.instagram && (
        <a href={person.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
          <FaInstagram size={24} />
        </a>
      )}
      {person.socials.whatsapp && (
        <a href={person.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
          <FaWhatsapp size={24} />
        </a>
      )}
      {person.socials.facebook && (
        <a href={person.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
          <FaFacebook size={24} />
        </a>
      )}
    </div>
    {/* --- AKHIR BLOK IKON --- */}
  </div>
);


export default function PengurusSection() {
  // Sisa kode di bawah ini tidak perlu diubah, karena semua logika ada di dalam PengurusCard
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Profil Pengurus</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Mengenal lebih dekat tim yang berada di balik layar kegiatan UKM Mapala periode 2025/2026.
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          <PengurusCard person={ketuaUmum} />
        </div>

        <hr className="my-16 border-gray-200" />
        
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-x-8 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
          {dataPengurusLainnya.map((person) => (
            <PengurusCard key={person.name} person={person} />
          ))}
        </div>
        
        <div className="mt-20 text-center">
            <Link href="/" className="rounded-md bg-emerald-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600">
                ← Kembali ke Halaman Utama
            </Link>
        </div>
      </div>
    </section>
  );
}