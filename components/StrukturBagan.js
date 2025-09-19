// components/StrukturBagan.js
import OrgChartNode from './OrgChartNode';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Data lengkap dengan placeholder media sosial untuk semua anggota
const data = {
  ketuaUmum: { 
    name: 'Ahmad Budi', 
    position: 'Ketua Umum', 
    imageUrl: '/images/pengurus/placeholder.png',
    socials: {
      instagram: 'https://www.instagram.com/ukm.mentariunimma?utm_source=ig_web_button_share_sheet&igsh=cGdpem05ZXNuZWo4',
      whatsapp: 'https://wa.me/6281234567890',
      facebook: 'http://googleusercontent.com/facebook.com/ahmad.budi'
    } 
  },
  sekretaris: { 
    name: 'Dewi Sartika', 
    position: 'Sekretaris', 
    imageUrl: '/images/pengurus/placeholder.png',
    socials: {
      instagram: 'http://googleusercontent.com/instagram.com/dewisartika',
      whatsapp: 'https://wa.me/6281234567891',
      facebook: 'http://googleusercontent.com/facebook.com/dewi.sartika'
    }
  },
  bendahara: { 
    name: 'Citra Lestari', 
    position: 'Bendahara', 
    imageUrl: '/images/pengurus/placeholder.png',
    socials: {
      instagram: 'http://googleusercontent.com/instagram.com/citralestari',
      whatsapp: 'https://wa.me/6281234567892',
      facebook: 'http://googleusercontent.com/facebook.com/citra.lestari'
    }
  },
  kabidLitbang: { 
    name: 'Rizky Pratama', 
    position: 'Kabid Litbang', 
    imageUrl: '/images/pengurus/placeholder.png',
    socials: {
      instagram: 'http://googleusercontent.com/instagram.com/rizkypratama',
      whatsapp: 'https://wa.me/6281234567893',
      facebook: 'http://googleusercontent.com/facebook.com/rizky.pratama'
    }
  },
  kabidMedkom: { 
    name: 'Sarah Amelia', 
    position: 'Kabid Medkom', 
    imageUrl: '/images/pengurus/placeholder.png',
    socials: {
      instagram: 'http://googleusercontent.com/instagram.com/sarahamelia',
      whatsapp: 'https://wa.me/6281234567894',
      facebook: 'http://googleusercontent.com/facebook.com/sarah.amelia'
    }
  },
  kabidSDM: { 
    name: 'Faisal Rahman', 
    position: 'Kabid SDM', 
    imageUrl: '/images/pengurus/placeholder.png',
    socials: {
      instagram: 'http://googleusercontent.com/instagram.com/faisalrahman',
      whatsapp: 'https://wa.me/6281234567895',
      facebook: 'http://googleusercontent.com/facebook.com/faisal.rahman'
    }
  },
  kabidLogistik: { 
    name: 'Putri Indah', 
    position: 'Kabid Logistik', 
    imageUrl: '/images/pengurus/placeholder.png',
    socials: {
      instagram: 'http://googleusercontent.com/instagram.com/putriindah',
      whatsapp: 'https://wa.me/6281234567896',
      facebook: 'http://googleusercontent.com/facebook.com/putri.indah'
    }
  },
  kabidKerohanian: { 
    name: 'Yoga Saputra', 
    position: 'Kabid Kerohanian', 
    imageUrl: '/images/pengurus/placeholder.png',
    socials: {
      instagram: 'http://googleusercontent.com/instagram.com/yogasaputra',
      whatsapp: 'https://wa.me/6281234567897',
      facebook: 'http://googleusercontent.com/facebook.com/yoga.saputra'
    }
  },
  kadivCaving: { 
    name: 'Toni Wijaya', 
    position: 'Kadiv Caving', 
    imageUrl: '/images/pengurus/placeholder.png',
    socials: {
      instagram: 'http://googleusercontent.com/instagram.com/toniwijaya',
      whatsapp: 'https://wa.me/6281234567898',
      facebook: 'http://googleusercontent.com/facebook.com/toni.wijaya'
    }
  },
  kadivKonservasi: { 
    name: 'Wulan Sari', 
    position: 'Kadiv Konservasi', 
    imageUrl: '/images/pengurus/placeholder.png',
    socials: {
      instagram: 'http://googleusercontent.com/instagram.com/wulansari',
      whatsapp: 'https://wa.me/6281234567899',
      facebook: 'http://googleusercontent.com/facebook.com/wulan.sari'
    }
  },
  kadivRimbaGunung: { 
    name: 'Bayu Samudra', 
    position: 'Kadiv Rimba Gunung', 
    imageUrl: '/images/pengurus/placeholder.png',
    socials: {
      instagram: 'http://googleusercontent.com/instagram.com/bayusamudra',
      whatsapp: 'https://wa.me/6281234567100',
      facebook: 'http://googleusercontent.com/facebook.com/bayu.samudra'
    }
  },
  kadivRockClimbing: { 
    name: 'Diana Putri', 
    position: 'Kadiv Panjat Tebing', 
    imageUrl: '/images/pengurus/placeholder.png',
    socials: {
      instagram: 'http://googleusercontent.com/instagram.com/dianaputri',
      whatsapp: 'https://wa.me/6281234567101',
      facebook: 'http://googleusercontent.com/facebook.com/diana.putri'
    }
  },
  kadivArungJeram: { 
    name: 'Eko Handoko', 
    position: 'Kadiv Arung Jeram', 
    imageUrl: '/images/pengurus/placeholder.png',
    socials: {
      instagram: 'http://googleusercontent.com/instagram.com/ekohandoko',
      whatsapp: 'https://wa.me/6281234567102',
      facebook: 'http://googleusercontent.com/facebook.com/eko.handoko'
    }
  },
};

export default function StrukturBagan() {
  // Sisa kode di bawah ini tidak perlu diubah
  return (
    <div className="mt-16 overflow-x-auto pb-12">
      <div className="org-chart min-w-[1200px]">
        <ul>
          <li>
            <OrgChartNode {...data.ketuaUmum} />
            <ul>
              <li className="relative">
                <OrgChartNode {...data.sekretaris} />
                <div className="absolute top-[50%] left-full w-24 h-px bg-gray-300 flex items-center justify-between px-1">
                    <FaArrowRight className="text-gray-400" size={10} />
                    <FaArrowLeft className="text-gray-400" size={10} />
                </div>
              </li>
              <li>
                <OrgChartNode {...data.bendahara} />
              </li>
              <li>
                <div className="w-0 h-0"></div>
                <ul>
                  <li><OrgChartNode {...data.kabidLitbang} /></li>
                  <li><OrgChartNode {...data.kabidMedkom} /></li>
                  <li>
                    <OrgChartNode {...data.kabidSDM} />
                    <ul>
                      <li><OrgChartNode {...data.kadivCaving} /></li>
                      <li><OrgChartNode {...data.kadivKonservasi} /></li>
                      <li><OrgChartNode {...data.kadivRimbaGunung} /></li>
                      <li><OrgChartNode {...data.kadivRockClimbing} /></li>
                      <li><OrgChartNode {...data.kadivArungJeram} /></li>
                    </ul>
                  </li>
                  <li><OrgChartNode {...data.kabidLogistik} /></li>
                  <li><OrgChartNode {...data.kabidKerohanian} /></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}