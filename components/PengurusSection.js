// components/PengurusSection.js
import OrgChartNode from './OrgChartNode';
import { OrgChartLevel, OrgChartConnector } from './OrgChartLevel'; // Menggunakan OrgChartLevel dan Connector

// --- DATA DUMMY UNTUK SEMUA POSISI SESUAI DIAGRAM ---
const dataPengurus = {
  ketuaUmum: {
    name: 'Ahmad Budi',
    position: 'Ketua Umum',
    imageUrl: '/images/pengurus/ketua_umum.png', // Ganti dengan path foto asli
    socials: { instagram: '#', whatsapp: '#', facebook: '#' }
  },
  sekretaris: {
    name: 'Dewi Sartika',
    position: 'Sekretaris',
    imageUrl: '/images/pengurus/sekretaris.png',
    socials: { instagram: '#', whatsapp: '#', facebook: '#' }
  },
  bendahara: {
    name: 'Citra Lestari',
    position: 'Bendahara',
    imageUrl: '/images/pengurus/bendahara.png',
    socials: { instagram: '#', whatsapp: '#', facebook: '#' }
  },
  kabidLitbang: {
    name: 'Rizky Pratama',
    position: 'Kabid Litbang',
    imageUrl: '/images/pengurus/kabid_litbang.png',
    socials: { instagram: '#', whatsapp: '#', facebook: '#' }
  },
  kabidMedkom: {
    name: 'Sarah Amelia',
    position: 'Kabid Medkom',
    imageUrl: '/images/pengurus/kabid_medkom.png',
    socials: { instagram: '#', whatsapp: '#', facebook: '#' }
  },
  kabidSDM: {
    name: 'Faisal Rahman',
    position: 'Kabid SDM',
    imageUrl: '/images/pengurus/kabid_sdm.png',
    socials: { instagram: '#', whatsapp: '#', facebook: '#' }
  },
  kabidLogistik: {
    name: 'Putri Indah',
    position: 'Kabid Logistik',
    imageUrl: '/images/pengurus/kabid_logistik.png',
    socials: { instagram: '#', whatsapp: '#', facebook: '#' }
  },
  kabidKerohanian: {
    name: 'Yoga Saputra',
    position: 'Kabid Kerohanian',
    imageUrl: '/images/pengurus/kabid_kerohanian.png',
    socials: { instagram: '#', whatsapp: '#', facebook: '#' }
  },
  kadivCaving: {
    name: 'Toni Wijaya',
    position: 'Kadiv Caving',
    imageUrl: '/images/pengurus/kadiv_caving.png',
    socials: { instagram: '#', whatsapp: '#', facebook: '#' }
  },
  kadivKonservasi: {
    name: 'Wulan Sari',
    position: 'Kadiv Konservasi',
    imageUrl: '/images/pengurus/kadiv_konservasi.png',
    socials: { instagram: '#', whatsapp: '#', facebook: '#' }
  },
  kadivRimbaGunung: {
    name: 'Bayu Samudra',
    position: 'Kadiv Rimba Gunung',
    imageUrl: '/images/pengurus/kadiv_rimba_gunung.png',
    socials: { instagram: '#', whatsapp: '#', facebook: '#' }
  },
  kadivRockClimbing: { // Panjat Tebing
    name: 'Diana Putri',
    position: 'Kadiv Panjat Tebing',
    imageUrl: '/images/pengurus/kadiv_panjat_tebing.png',
    socials: { instagram: '#', whatsapp: '#', facebook: '#' }
  },
  kadivArungJeram: {
    name: 'Eko Handoko',
    position: 'Kadiv Arung Jeram',
    imageUrl: '/images/pengurus/kadiv_arung_jeram.png',
    socials: { instagram: '#', whatsapp: '#', facebook: '#' }
  },
};

export default function PengurusSection() {
  const {
    ketuaUmum, sekretaris, bendahara,
    kabidLitbang, kabidMedkom, kabidSDM, kabidLogistik, kabidKerohanian,
    kadivCaving, kadivKonservasi, kadivRimbaGunung, kadivRockClimbing, kadivArungJeram
  } = dataPengurus;

  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Struktur Organisasi</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Berikut adalah bagan struktur organisasi UKM Mapala Mentari periode 2025/2026.
          </p>
        </div>

        {/* --- BAGIAN BAGAN ORGANISASI --- */}
        <div className="mt-16 overflow-x-auto pb-8"> {/* Tambah overflow-x-auto untuk responsif */}
          <div className="min-w-max flex flex-col items-center p-4">

            {/* Level 1: Ketua Umum */}
            <div className="relative">
              <OrgChartNode {...ketuaUmum} />
              <OrgChartConnector type="bottom-top" /> {/* Garis vertikal ke bawah */}
            </div>

            {/* Level 2: Sekretaris & Bendahara (Laporan ke Ketua Umum) */}
            <div className="relative w-full text-center flex justify-center mt-8">
                {/* Garis horizontal di bawah Ketua Umum */}
                <div className="h-px bg-gray-400 w-full absolute top-0 left-0 right-0 z-0"></div>
                {/* Garis vertikal dari Ketua Umum ke garis horizontal */}
                <div className="w-px h-8 bg-gray-400 absolute top-0 -translate-y-full left-1/2 -translate-x-1/2"></div>
                
                <div className="flex justify-center gap-16 relative mt-8"> {/* Jarak antara Sekretaris-Bendahara */}
                    <div className="relative">
                        <OrgChartNode {...sekretaris} />
                        <OrgChartConnector type="top-bottom" /> {/* Garis vertikal dari atas */}
                    </div>
                    <div className="relative">
                        <OrgChartNode {...bendahara} />
                        <OrgChartConnector type="top-bottom" /> {/* Garis vertikal dari atas */}
                    </div>
                </div>
            </div>

            {/* Garis vertikal dari Ketua Umum ke bawah (menghubungkan ke Kabid-Kabid) */}
            <div className="relative w-full flex justify-center">
              <OrgChartConnector type="vertical-middle" /> 
            </div>

            {/* Level 3: Kabid-Kabid (Laporan ke Ketua Umum) */}
            <div className="relative w-full text-center flex justify-center mt-8">
              {/* Garis horizontal di bawah Ketua Umum (menghubungkan Kabid-Kabid) */}
              <div className="h-px bg-gray-400 w-full absolute top-0 left-0 right-0 z-0"></div>
              {/* Garis vertikal dari Ketua Umum ke garis horizontal Kabid */}
              <div className="w-px h-8 bg-gray-400 absolute top-0 -translate-y-full left-1/2 -translate-x-1/2"></div>
                
              <OrgChartLevel>
                <div className="relative">
                  <OrgChartNode {...kabidLitbang} />
                  <OrgChartConnector type="top-bottom" />
                </div>
                <div className="relative">
                  <OrgChartNode {...kabidMedkom} />
                  <OrgChartConnector type="top-bottom" />
                </div>
                <div className="relative">
                  <OrgChartNode {...kabidSDM} />
                  <OrgChartConnector type="top-bottom" />
                </div>
                <div className="relative">
                  <OrgChartNode {...kabidLogistik} />
                  <OrgChartConnector type="top-bottom" />
                </div>
                <div className="relative">
                  <OrgChartNode {...kabidKerohanian} />
                  <OrgChartConnector type="top-bottom" />
                </div>
              </OrgChartLevel>
            </div>

            {/* Garis vertikal dari Kabid SDM ke bawah (menghubungkan ke Kadiv-Kadiv) */}
            <div className="relative w-full flex justify-center">
              <div className="w-px h-16 bg-gray-400"></div> {/* Garis vertikal dari Kabid SDM */}
            </div>

            {/* Level 4: Kadiv-Kadiv (Laporan ke Kabid SDM) */}
            <div className="relative w-full text-center flex justify-center mt-8">
              {/* Garis horizontal di bawah Kabid SDM */}
              <div className="h-px bg-gray-400 w-full absolute top-0 left-0 right-0 z-0"></div>
              {/* Garis vertikal dari Kabid SDM ke garis horizontal Kadiv */}
              <div className="w-px h-8 bg-gray-400 absolute top-0 -translate-y-full left-1/2 -translate-x-1/2"></div>
              
              <OrgChartLevel>
                <div className="relative">
                  <OrgChartNode {...kadivCaving} />
                  <OrgChartConnector type="top-bottom" />
                </div>
                <div className="relative">
                  <OrgChartNode {...kadivKonservasi} />
                  <OrgChartConnector type="top-bottom" />
                </div>
                <div className="relative">
                  <OrgChartNode {...kadivRimbaGunung} />
                  <OrgChartConnector type="top-bottom" />
                </div>
                <div className="relative">
                  <OrgChartNode {...kadivRockClimbing} />
                  <OrgChartConnector type="top-bottom" />
                </div>
                <div className="relative">
                  <OrgChartNode {...kadivArungJeram} />
                  <OrgChartConnector type="top-bottom" />
                </div>
              </OrgChartLevel>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}