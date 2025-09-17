// components/Footer.js
import { FaGithub, FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from 'react-icons/fa'; // 'Link' from 'next/link' dihapus karena tidak digunakan

// KOREKSI 1: Menambahkan fungsionalitas "openInNewTab"
const FooterColumn = ({ title, links }) => (
  <div>
    <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">{title}</h3>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.name}>
          <a 
            href={link.href} 
            className="text-gray-400 hover:text-white hover:underline transition-colors duration-300"
            // Atribut ini akan ditambahkan secara dinamis
            target={link.openInNewTab ? '_blank' : '_self'}
            rel={link.openInNewTab ? 'noopener noreferrer' : ''}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  const contactLinks = [
    { 
      name: 'mentariunimma@gmail.com', 
      href: 'mailto:mentariunimma@gmail.com',
      openInNewTab: true
    },
    { 
      name: 'Komplek Sekretariat UKM Kampus 2 Unimma', 
      href: 'https://maps.google.com/?q=Universitas+Muhammadiyah+Magelang+Kampus+2', 
      openInNewTab: true
    },
  ];

  const divisionLinks = [
    { name: 'Arung Jeram', href: '#arung-jeram' },
    { name: 'Caving', href: '#caving' },
    { name: 'Konservasi', href: '#konservasi' },
    { name: 'Panjat Tebing', href: '#panjat-tebing' },
    { name: 'Rimba Gunung', href: '#rimba-gunung' },
  ];

  // Data ini sekarang akan kita gunakan
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Tentang Kami', href: '#home' }, // Arahkan ke section yang relevan
    { name: 'Instagram', href: 'https://instagram.com', openInNewTab: true },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-4">
      <div className="container mx-auto">
        {/* KOREKSI 2: Layout grid disempurnakan menjadi 4 kolom di layar besar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">
          {/* Kolom 1 sekarang dibuat lebih lebar di layar medium */}
          <div className="md:col-span-2 lg:col-span-1">
            <h2 className="text-white text-2xl font-bold mb-4">UKM MAPALA</h2>
            <p className="text-gray-400">Menjelajahi Alam, Menemukan Diri, Menjaga Bumi.</p>
          </div>
          
          <FooterColumn title="Divisi" links={divisionLinks} />
          <FooterColumn title="Hubungi Kami" links={contactLinks} />
          <FooterColumn title="Link Cepat" links={quickLinks} /> {/* KOREKSI 3: Kolom Quick Links ditambahkan */}
        </div>

        <hr className="border-gray-800 mb-8" />

        <div className="text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="https://www.tiktok.com/@mentari_unimma?_t=ZS-8zoGf7TJiFU&_r=1" target="_blank" rel="noopener noreferrer" className="text-gray-400 bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors duration-300">
              <FaTiktok size={20} />
            </a>
            <a href="https://www.instagram.com/ukm.mentariunimma?igsh=MWtvaTR0bjVoeHpjNw==" target="_blank" rel="noopener noreferrer" className="text-gray-400 bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors duration-300">
              <FaInstagram size={20} />
            </a>
            <a href="https://youtube.com/@mentariunimma?si=MmznDmVGYatWUUjQ" target="_blank" rel="noopener noreferrer" className="text-gray-400 bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors duration-300">
              <FaYoutube size={20} />
            </a>
          </div>
          <p className="text-sm text-gray-500">
            Dibuat dengan <span className="text-emerald-500">❤️</span> oleh UKM Mapala © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}