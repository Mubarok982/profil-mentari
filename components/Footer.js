import { FaTiktok, FaInstagram, FaYoutube } from 'react-icons/fa';

const FooterColumn = ({ title, links }) => (
  <div className="text-center md:text-left">
    <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">{title}</h3>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.name}>
          <a 
            href={link.href} 
            className="text-gray-600 hover:text-emerald-600 hover:underline transition-colors duration-300"
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
    { name: 'mentariunimma@gmail.com', href: 'mailto:mentariunimma@gmail.com', openInNewTab: true },
    { name: 'Komplek Sekretariat UKM Kampus 2 Unimma', href: 'https://maps.google.com/?q=Universitas+Muhammadiyah+Magelang+Kampus+2', openInNewTab: true },
  ];
  const divisionLinks = [
    { name: 'Arung Jeram', href: '#arung-jeram' },
    { name: 'Caving', href: '#caving' },
    { name: 'Konservasi', href: '#konservasi' },
    { name: 'Panjat Tebing', href: '#panjat-tebing' },
    { name: 'Rimba Gunung', href: '#rimba-gunung' },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-gray-800 py-12 px-4 antialiased">
      <div className="container mx-auto">
        {}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {}
          <div className="text-center md:text-left">
            <h2 className="text-gray-900 text-2xl font-bold mb-4">UKM MAPALA</h2>
            <p className="text-gray-600 leading-relaxed">Menjelajahi Alam, Menemukan Diri, Menjaga Bumi.</p>
          </div>
          <FooterColumn title="Divisi" links={divisionLinks} />
          <FooterColumn title="Hubungi Kami" links={contactLinks} />
          {}
        </div>
        <hr className="border-gray-200 mb-8" />
        <div className="text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="https://www.tiktok.com/@mentari_unimma?_t=ZS-8zoGf7TJiFU&_r=1" target="_blank" rel="noopener noreferrer" className="text-gray-500 bg-gray-200 hover:bg-gray-300 p-2 rounded-full transition-colors duration-300">
              <FaTiktok size={20} />
            </a>
            <a href="https://www.instagram.com/ukm.mentariunimma?igsh=MWtvaTR0bjVoeHpjNw==" target="_blank" rel="noopener noreferrer" className="text-gray-500 bg-gray-200 hover:bg-gray-300 p-2 rounded-full transition-colors duration-300">
              <FaInstagram size={20} />
            </a>
            <a href="https://youtube.com/@mentariunimma?si=MmznDmVGYatWUUjQ" target="_blank" rel="noopener noreferrer" className="text-gray-500 bg-gray-200 hover:bg-gray-300 p-2 rounded-full transition-colors duration-300">
              <FaYoutube size={20} />
            </a>
          </div>
          <p className="text-sm text-gray-500">
            Dibuat dengan <span className="text-emerald-600">❤️</span> oleh UKM Mapala © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}