import { FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import Image from 'next/image';

export default function OrgChartNode({ name, position, socials, imageUrl, variant = "standard" }) {
  
  // --- KONFIGURASI UKURAN ---
  const isSmall = variant === "small";

  // Dimensi Kartu
  const widthClass = isSmall ? "w-36" : "w-48"; // Small: 144px, Std: 192px
  
  // Dimensi Foto
  const heightClass = isSmall ? "h-40" : "h-60"; // Foto lebih pendek di mode small
  
  // Posisi Kotak Nama (Negative Margin)
  const marginTopClass = isSmall ? "-mt-10" : "-mt-14"; 
  
  // Ukuran Font
  const nameSize = isSmall ? "text-xs" : "text-sm md:text-base";
  const roleSize = isSmall ? "text-[9px]" : "text-[10px]";
  const iconSize = isSmall ? 14 : 18;
  const paddingClass = isSmall ? "p-2" : "p-3";

  return (
    <div className={`relative group ${widthClass} bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-200`}>
      
      {/* 1. FOTO */}
      <div className={`relative w-full ${heightClass} bg-gray-200 overflow-hidden`}>
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={`Foto ${name}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <span className="text-xs">No Foto</span>
          </div>
        )}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
      </div>

      {/* 2. TEXT INFO */}
      <div className={`relative ${paddingClass} text-center ${marginTopClass}`}>
        <div className="bg-white rounded-lg shadow-sm p-2 mb-1 relative z-10 mx-1">
          <h3 className={`${nameSize} font-bold text-gray-900 leading-tight mb-0.5 truncate`}>
            {name}
          </h3>
          <p className={`${roleSize} font-bold text-emerald-600 uppercase tracking-wider truncate`}>
            {position}
          </p>
        </div>

        {/* 3. SOSMED */}
        {socials && (socials.instagram || socials.whatsapp || socials.facebook) && (
          <div className="flex justify-center gap-2 pt-1 pb-1">
            {socials.instagram && (
              <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-600 transition-colors">
                <FaInstagram size={iconSize} />
              </a>
            )}
            {socials.whatsapp && (
              <a href={socials.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <FaWhatsapp size={iconSize} />
              </a>
            )}
            {socials.facebook && (
              <a href={socials.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                <FaFacebook size={iconSize} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}