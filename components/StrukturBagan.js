"use client";
import OrgChartNode from './OrgChartNode';

// --- DATA PENGURUS (TIDAK BERUBAH) ---
const data = {
  ketuaUmum: { 
    name: 'Ahmad Budi', 
    position: 'Ketua Umum', 
    imageUrl: '/images/pengurus/ketua_umum.png',
    socials: { instagram: '#' } 
  },
  bph: [
    { 
      name: 'Yoga Saputra', position: 'Kerohanian', imageUrl: '/images/pengurus/placeholder.png',
      socials: { instagram: '#' },
      staff: [
        { name: 'Rian', position: 'Staff Rohani', socials: { instagram: '#' } }, 
        { name: 'Riko', position: 'Staff Rohani', socials: { instagram: '#' } }
      ]
    },
    { 
      name: 'Citra Lestari', position: 'Bendahara', imageUrl: '/images/pengurus/placeholder.png',
      socials: { instagram: '#' },
      staff: [{ name: 'Siti', position: 'Staff Bendahara', socials: { instagram: '#' } }]
    },
    { 
      name: 'Budi Santoso', position: 'Sekretaris 2', imageUrl: '/images/pengurus/placeholder.png',
      socials: { instagram: '#' },
      staff: [{ name: 'Nia', position: 'Staff Sekretaris', socials: { instagram: '#' } }] 
    },
  ],
  kabid: [
    { 
      id: 'litbang', name: 'Rizky Pratama', position: 'Kabid Litbang', imageUrl: '/images/pengurus/placeholder.png',
      socials: { instagram: '#' },
      staff: [
        { name: 'Aldi', position: 'Staff Litbang', socials: { instagram: '#' } }, 
        { name: 'Bela', position: 'Staff Litbang', socials: { instagram: '#' } }
      ]
    },
    { 
      id: 'medkom', name: 'Sarah Amelia', position: 'Kabid Medkom', imageUrl: '/images/pengurus/placeholder.png',
      socials: { instagram: '#' },
      staff: [
        { name: 'Vina', position: 'Staff Medkom', socials: { instagram: '#' } }, 
        { name: 'Vino', position: 'Staff Medkom', socials: { instagram: '#' } }
      ]
    },
    { 
      id: 'sdm', name: 'Faisal Rahman', position: 'Kabid SDM', imageUrl: '/images/pengurus/placeholder.png',
      socials: { instagram: '#' },
      staff: [] 
    }, 
    { 
      id: 'logistik', name: 'Putri Indah', position: 'Kabid Logistik', imageUrl: '/images/pengurus/placeholder.png',
      socials: { instagram: '#' },
      staff: [{ name: 'Dona', position: 'Staff Logistik', socials: { instagram: '#' } }]
    },
  ],
  kadivList: [
    { 
      name: 'Bayu Samudra', position: 'Kadiv Rimba Gn.', imageUrl: '/images/pengurus/placeholder.png',
      socials: { instagram: '#' },
      staff: [
        { name: 'Eko', position: 'Staff Rimba', socials: { instagram: '#' } }, 
        { name: 'Fajar', position: 'Staff Rimba', socials: { instagram: '#' } }
      ]
    },
    { 
      name: 'Toni Wijaya', position: 'Kadiv Caving', imageUrl: '/images/pengurus/placeholder.png',
      socials: { instagram: '#' },
      staff: [] 
    },
    { 
      name: 'Diana Putri', position: 'Kadiv Panjat', imageUrl: '/images/pengurus/placeholder.png',
      socials: { instagram: '#' },
      staff: [
        { name: 'Gina', position: 'Staff Panjat', socials: { instagram: '#' } }, 
        { name: 'Hadi', position: 'Staff Panjat', socials: { instagram: '#' } }
      ]
    },
    { 
      name: 'Eko Handoko', position: 'Kadiv Rafting', imageUrl: '/images/pengurus/placeholder.png',
      socials: { instagram: '#' },
      staff: [] 
    },
    { 
      name: 'Wulan Sari', position: 'Kadiv Konservasi', imageUrl: '/images/pengurus/placeholder.png',
      socials: { instagram: '#' },
      staff: [
        { name: 'Cici', position: 'Staff Konserv', socials: { instagram: '#' } }, 
        { name: 'Dedi', position: 'Staff Konserv', socials: { instagram: '#' } }
      ]
    },
  ]
};

// --- HELPER: GARIS VERTIKAL TURUN BIASA ---
const VerticalDown = ({ height = "h-8" }) => (
  <div className={`w-[2px] ${height} bg-slate-300 mx-auto`}></div>
);

// --- HELPER BARU: CONTAINER NODE DENGAN GARIS SAMBUNG "T" ---
// Ini adalah komponen kunci untuk memperbaiki garis yang putus.
// Dia membungkus setiap kartu (BPH, Kabid, Staff, dll) dan menggambar
// garis horizontal di atasnya secara presisi agar bertemu di tengah.
const NodeContainer = ({ children, isFirst, isLast, isSole, spacing = "px-6" }) => {
  return (
    <div className={`flex flex-col items-center relative ${spacing}`}>
      
      {/* 1. GARIS HORIZONTAL DI ATAS (KIRI & KANAN) */}
      {/* Hanya digambar jika node ini punya saudara (tidak sendirian) */}
      {!isSole && (
        <div className="absolute top-0 w-full h-[2px] -z-20 pointer-events-none">
           {/* Jika bukan anak pertama, gambar garis dari KIRI mentok ke TENGAH */}
           {!isFirst && <div className="absolute left-0 top-0 h-full w-1/2 bg-slate-300"></div>}
           {/* Jika bukan anak terakhir, gambar garis dari TENGAH mentok ke KANAN */}
           {!isLast && <div className="absolute right-0 top-0 h-full w-1/2 bg-slate-300"></div>}
        </div>
      )}

      {/* 2. GARIS VERTIKAL NAIK (KONEKTOR KE GARIS HORIZONTAL) */}
      {/* Posisinya otomatis di tengah karena flex-col items-center */}
      <div className="w-[2px] h-8 bg-slate-300 relative z-[-10]"></div>

      {/* 3. KONTEN KARTU */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

// --- COMPONENT STAFF GROUP (MENGGUNAKAN NODE CONTAINER BARU) ---
const StaffGroup = ({ staff }) => {
  if (!staff || staff.length === 0) return null;

  return (
    <div className="flex flex-col items-center w-full">
      {/* Garis turun dari Induk ke Staff Group */}
      <VerticalDown height="h-8" />
      
      {/* Container Staff: Flex Row tanpa gap, jarak diatur oleh padding NodeContainer */}
      <div className="flex justify-center">
        {staff.map((s, i) => {
          const isFirst = i === 0;
          const isLast = i === staff.length - 1;
          const isSole = staff.length === 1;

          return (
            // Jarak antar staff lebih rapat (px-3)
            <NodeContainer key={i} isFirst={isFirst} isLast={isLast} isSole={isSole} spacing="px-3">
              <OrgChartNode {...s} imageUrl="/images/pengurus/placeholder.png" variant="small" />
            </NodeContainer>
          );
        })}
      </div>
    </div>
  );
};

// --- MAIN COMPONENT (STRUKTUR TETAP SAMA, CARA GAMBAR GARIS BERUBAH) ---
export default function StrukturBagan() {
  return (
    <div className="mt-16 w-full overflow-x-auto pb-24 cursor-grab active:cursor-grabbing hide-scrollbar">
      <div className="min-w-[2000px] flex flex-col items-center px-10 mx-auto pb-40">
        
        {/* ================= LEVEL 1: KETUA ================= */}
        <div className="flex flex-col items-center">
          <div className="relative z-10">
            <OrgChartNode {...data.ketuaUmum} />
          </div>
          <VerticalDown height="h-12" />
        </div>

        {/* ================= LEVEL 2: BPH ================= */}
        {/* Flex Row TANPA GAP, jarak diatur spacing px-12 di NodeContainer */}
        <div className="flex justify-center items-start">
          {data.bph.map((item, idx) => {
            const isFirst = idx === 0;
            const isLast = idx === data.bph.length - 1;
            
            return (
              <NodeContainer key={idx} isFirst={isFirst} isLast={isLast} spacing="px-12">
                 <OrgChartNode {...item} />
                 <StaffGroup staff={item.staff} />
              </NodeContainer>
            );
          })}
        </div>

        {/* GARIS PENGHUBUNG ANTAR LEVEL (BPH ke KABID) */}
        <div className="w-full flex justify-center">
             {/* Garis panjang menembus background */}
             <div className="w-[2px] h-24 bg-slate-300 -mt-12 relative z-[-30]"></div> 
        </div>

        {/* ================= LEVEL 3: KABID ================= */}
        <div className="flex justify-center items-start">
          {data.kabid.map((item, idx) => {
            const isFirst = idx === 0;
            const isLast = idx === data.kabid.length - 1;

            return (
              // Jarak antar Kabid lebih lebar (px-16)
              <NodeContainer key={idx} isFirst={isFirst} isLast={isLast} spacing="px-16">
                 <OrgChartNode {...item} />
                 <StaffGroup staff={item.staff} />
              </NodeContainer>
            );
          })}
        </div>

        {/* ================= LEVEL 4: KADIV ================= */}
        <div className="flex flex-col items-center w-full mt-12">
            
            {/* Garis Turun dari pusat ke baris Kadiv */}
            <VerticalDown height="h-16" />

            <div className="flex justify-center items-start">
                {data.kadivList.map((kadiv, kIdx) => {
                  const isFirst = kIdx === 0;
                  const isLast = kIdx === data.kadivList.length - 1;

                  return (
                    // Jarak antar Kadiv sedang (px-8)
                    <NodeContainer key={kIdx} isFirst={isFirst} isLast={isLast} spacing="px-8">
                      <OrgChartNode {...kadiv} variant="small" />
                      <StaffGroup staff={kadiv.staff} />
                    </NodeContainer>
                  );
                })}
            </div>
        </div>

      </div>
    </div>
  );
}