"use client";

import { motion } from 'framer-motion';
import OrgChartNode from './OrgChartNode';
// PERBAIKAN: Import OrgChartLevel dihapus karena file sudah tidak ada/tidak dipakai
import StrukturBagan from './StrukturBagan'; 

const dataPengurus = {
  ketuaUmum: {
    name: 'Ahmad Budi',
    position: 'Ketua Umum',
    imageUrl: '/images/pengurus/ketua_umum.png',
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
    imageUrl: '/images/pengurus/placeholder.png',
    socials: { instagram: '#', whatsapp: '#', facebook: '#' }
  },
  kabidMedkom: {
    name: 'Sarah Amelia',
    position: 'Kabid Medkom',
    imageUrl: '/images/pengurus/placeholder.png',
    socials: { instagram: '#', whatsapp: '#', facebook: '#' }
  },
  kabidSDM: {
    name: 'Faisal Rahman',
    position: 'Kabid SDM',
    imageUrl: '/images/pengurus/placeholder.png',
    socials: { instagram: '#', whatsapp: '#', facebook: '#' }
  },
  kabidLogistik: {
    name: 'Putri Indah',
    position: 'Kabid Logistik',
    imageUrl: '/images/pengurus/placeholder.png',
    socials: { instagram: '#', whatsapp: '#', facebook: '#' }
  },
  kabidKerohanian: {
    name: 'Yoga Saputra',
    position: 'Kabid Kerohanian',
    imageUrl: '/images/pengurus/placeholder.png',
    socials: { instagram: '#', whatsapp: '#', facebook: '#' }
  },
  kadivCaving: {
    name: 'Toni Wijaya',
    position: 'Kadiv Caving',
    imageUrl: '/images/pengurus/placeholder.png',
    socials: { instagram: '#', whatsapp: '#', facebook: '#' }
  },
  kadivKonservasi: {
    name: 'Wulan Sari',
    position: 'Kadiv Konservasi',
    imageUrl: '/images/pengurus/placeholder.png',
    socials: { instagram: '#', whatsapp: '#', facebook: '#' }
  },
  kadivRimbaGunung: {
    name: 'Bayu Samudra',
    position: 'Kadiv Rimba Gunung',
    imageUrl: '/images/pengurus/placeholder.png',
    socials: { instagram: '#', whatsapp: '#', facebook: '#' }
  },
  kadivRockClimbing: {
    name: 'Diana Putri',
    position: 'Kadiv Panjat Tebing',
    imageUrl: '/images/pengurus/placeholder.png',
    socials: { instagram: '#', whatsapp: '#', facebook: '#' }
  },
  kadivArungJeram: {
    name: 'Eko Handoko',
    position: 'Kadiv Arung Jeram',
    imageUrl: '/images/pengurus/placeholder.png',
    socials: { instagram: '#', whatsapp: '#', facebook: '#' }
  },
};

// Variabel Animasi
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function PengurusSection() {
  const {
    ketuaUmum, sekretaris, bendahara,
    kabidLitbang, kabidMedkom, kabidSDM, kabidLogistik, kabidKerohanian,
    kadivCaving, kadivKonservasi, kadivRimbaGunung, kadivRockClimbing, kadivArungJeram
  } = dataPengurus;

  // Grup untuk tampilan Mobile (Grid)
  const kabidList = [kabidLitbang, kabidMedkom, kabidSDM, kabidLogistik, kabidKerohanian];
  const kadivList = [kadivCaving, kadivKonservasi, kadivRimbaGunung, kadivRockClimbing, kadivArungJeram];

  return (
    <section className="bg-gray-50 py-24 sm:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Struktur Organisasi</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Berikut adalah bagan struktur organisasi UKM Mapala Mentari periode 2025/2026.
          </p>
        </motion.div>

        {/* ==============================================
            TAMPILAN MOBILE (Vertical Layout - Grid)
            Muncul hanya di layar kecil (< 1024px)
           ============================================== */}
        <div className="lg:hidden flex flex-col items-center gap-10">
          
          {/* Level 1: Ketua Umum */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <div className="relative z-10">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full border border-emerald-200">PIMPINAN</span>
              <OrgChartNode {...ketuaUmum} />
            </div>
          </motion.div>

          <div className="w-px h-8 bg-gray-300"></div>

          {/* Level 2: Sekretaris & Bendahara */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}><OrgChartNode {...sekretaris} /></motion.div>
            <motion.div variants={fadeInUp}><OrgChartNode {...bendahara} /></motion.div>
          </motion.div>

          <div className="w-px h-8 bg-gray-300"></div>

          {/* Level 3: Kepala Bidang */}
          <div className="w-full">
            <h3 className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6 border-b border-gray-200 pb-2">Kepala Bidang</h3>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            >
              {kabidList.map((kabid, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <OrgChartNode {...kabid} />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="w-px h-8 bg-gray-300"></div>

          {/* Level 4: Kepala Divisi */}
          <div className="w-full">
            <h3 className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6 border-b border-gray-200 pb-2">Kepala Divisi</h3>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            >
              {kadivList.map((kadiv, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <OrgChartNode {...kadiv} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>


        {/* ==============================================
            TAMPILAN DESKTOP (Tree Diagram - Panggil StrukturBagan.js)
            Muncul hanya di layar besar (>= 1024px)
           ============================================== */}
        <div className="hidden lg:block mt-8">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeInUp}
          >
            {/* PANGGIL KOMPONEN DISINI */}
            <StrukturBagan /> 
          </motion.div>
        </div>

      </div>
    </section>
  );
}