// components/OrgChartNode.js
import { FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import Image from 'next/image'; // Impor komponen Image dari Next.js

const OrgChartNode = ({ name, position, socials, imageUrl }) => (
  <div className="relative flex flex-col items-center bg-white p-4 rounded-lg shadow-md border border-gray-200 min-w-[180px] text-center">
    {imageUrl && (
      <div className="relative h-20 w-20 mx-auto mb-2 rounded-full overflow-hidden border-2 border-emerald-500">
        {/* KOREKSI: Menggunakan komponen <Image> dari Next.js, bukan <img> biasa */}
        <Image
          src={imageUrl}
          alt={`Foto ${name}`}
          fill
          className="object-cover" // object-cover adalah cara modern untuk objectFit
        />
      </div>
    )}
    <h3 className="text-base font-semibold text-gray-800 leading-tight">{name}</h3>
    <p className="text-sm text-gray-600 leading-tight">{position}</p>

    {socials && (socials.instagram || socials.whatsapp || socials.facebook) && (
      <div className="mt-2 flex justify-center gap-2">
        {socials.instagram && (
          <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-600 transition-colors">
            <FaInstagram size={16} />
          </a>
        )}
        {socials.whatsapp && (
          <a href={socials.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-600 transition-colors">
            <FaWhatsapp size={16} />
          </a>
        )}
        {socials.facebook && (
          <a href={socials.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-600 transition-colors">
            <FaFacebook size={16} />
          </a>
        )}
      </div>
    )}
  </div>
);

export default OrgChartNode;