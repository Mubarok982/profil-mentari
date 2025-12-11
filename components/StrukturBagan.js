"use client";
import OrgChartNode from './OrgChartNode';

// --- DATA PENGURUS ---
const data = {
  ketuaUmum: { 
    name: 'Ahmad Budi', 
    position: 'Ketua Umum', 
    imageUrl: '/images/pengurus/ketua_umum.png',
    socials: { instagram: '#', whatsapp: '#' } 
  },
  
  // LEVEL 2: BPH
  bph: [
    { name: 'Yoga Saputra', position: 'Kerohanian', imageUrl: '/images/pengurus/placeholder.png' },
    { name: 'Citra Lestari', position: 'Bendahara', imageUrl: '/images/pengurus/placeholder.png' },
    { name: 'Dewi Sartika', position: 'Sekretaris 1', imageUrl: '/images/pengurus/placeholder.png' },
    { name: 'Budi Santoso', position: 'Sekretaris 2', imageUrl: '/images/pengurus/placeholder.png' },
  ],

  // LEVEL 3: KABID
  kabid: [
    { id: 'litbang', name: 'Rizky Pratama', position: 'Kabid Litbang', imageUrl: '/images/pengurus/placeholder.png' },
    { id: 'medkom', name: 'Sarah Amelia', position: 'Kabid Medkom', imageUrl: '/images/pengurus/placeholder.png' },
    { id: 'sdm', name: 'Faisal Rahman', position: 'Kabid SDM', imageUrl: '/images/pengurus/placeholder.png' }, 
    { id: 'logistik', name: 'Putri Indah', position: 'Kabid Logistik', imageUrl: '/images/pengurus/placeholder.png' },
  ],

  // LEVEL 4 & 5: KADIV & STAFF (Anak SDM)
  kadivList: [
    { 
      name: 'Bayu Samudra', position: 'Kadiv Rimba Gn.', imageUrl: '/images/pengurus/placeholder.png',
      staff: [{ name: 'Eko', position: 'Staff Rimba' }, { name: 'Fajar', position: 'Staff Rimba' }]
    },
    { 
      name: 'Toni Wijaya', position: 'Kadiv Caving', imageUrl: '/images/pengurus/placeholder.png',
      staff: [{ name: 'Andi', position: 'Staff Caving' }, { name: 'Budi', position: 'Staff Caving' }]
    },
    { 
      name: 'Diana Putri', position: 'Kadiv Panjat', imageUrl: '/images/pengurus/placeholder.png',
      staff: [{ name: 'Gina', position: 'Staff Panjat' }, { name: 'Hadi', position: 'Staff Panjat' }]
    },
    { 
      name: 'Eko Handoko', position: 'Kadiv Rafting', imageUrl: '/images/pengurus/placeholder.png',
      staff: [{ name: 'Indra', position: 'Staff Rafting' }, { name: 'Joko', position: 'Staff Rafting' }]
    },
    { 
      name: 'Wulan Sari', position: 'Kadiv Konservasi', imageUrl: '/images/pengurus/placeholder.png',
      staff: [{ name: 'Cici', position: 'Staff Konserv' }, { name: 'Dedi', position: 'Staff Konserv' }]
    },
  ]
};

// --- HELPER COMPONENTS ---
const BranchConnector = () => (
  <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
    <div className={`absolute top-0 left-[2rem] right-[2rem] border-t-2 border-slate-300`}></div>
  </div>
);

const VerticalUp = () => <div className="w-px h-8 bg-slate-300 mx-auto -mt-8 mb-2 relative z-[-1]"></div>;
const VerticalDown = () => <div className="w-px h-8 bg-slate-300 mx-auto"></div>;

export default function StrukturBagan() {
  return (
    // FIX SCROLL:
    // 1. overflow-x-auto hanya di sini.
    // 2. pb-24 memberikan ruang bawah yang cukup.
    // 3. cursor-grab memberikan indikasi bisa digeser.
    <div className="mt-16 w-full overflow-x-auto pb-24 cursor-grab active:cursor-grabbing hide-scrollbar">
      
      {/* min-w dikurangi jadi 1500px karena kartu kadiv/staff sekarang lebih kecil.
         pb-[450px] agar bagian absolute di bawah tidak terpotong (overlap) footer.
      */}
      <div className="min-w-[1500px] flex flex-col items-center px-10 pb-[450px]">
        
        {/* ================= LEVEL 1: KETUA ================= */}
        <div className="relative z-10">
          <OrgChartNode {...data.ketuaUmum} />
        </div>
        <VerticalDown />

        {/* ================= LEVEL 2: BPH ================= */}
        <div className="relative flex justify-center gap-10 mt-8">
          <BranchConnector />
          
          {data.bph.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <VerticalUp />
              <OrgChartNode {...item} />
            </div>
          ))}
        </div>

        {/* Garis Panjang ke Kabid */}
        <div className="relative w-full h-24 -mt-10 -z-20">
           <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-slate-300"></div>
        </div>

        {/* ================= LEVEL 3: KABID ================= */}
        <div className="relative flex justify-center gap-10 align-top items-start">
          <BranchConnector />
          
          {data.kabid.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center relative">
              <VerticalUp />
              <div className="relative z-20 bg-white rounded-xl">
                 <OrgChartNode {...item} />
              </div>

              {/* ================= LEVEL 4 & 5: ANAK KABID SDM (ABSOLUTE) ================= */}
              {item.id === 'sdm' && (
                <div className="absolute top-[100%] left-1/2 transform -translate-x-1/2 pt-4 flex flex-col items-center z-10">
                  
                  <VerticalDown /> 
                  
                  {/* Container Kadiv Berderet */}
                  {/* Gap dikurangi jadi gap-6 karena kartu lebih kecil */}
                  <div className="relative flex justify-center gap-6 mt-8 min-w-max px-4">
                    {/* Garis Horizontal Penghubung 5 Kadiv (Disesuaikan left/rightnya) */}
                    <div className="absolute top-0 left-[3rem] right-[3rem] border-t-2 border-slate-300 -z-10"></div>

                    {data.kadivList.map((kadiv, kIdx) => (
                      <div key={kIdx} className="flex flex-col items-center">
                        <VerticalUp />
                        {/* GUNAKAN VARIANT SMALL */}
                        <OrgChartNode {...kadiv} variant="small" />

                        {/* ================= LEVEL 5: STAFF (2 BERDERET) ================= */}
                        <div className="flex flex-col items-center mt-2 w-full">
                           <VerticalDown />
                           
                           <div className="relative flex justify-center gap-2 mt-8">
                              {/* Garis Horizontal Penghubung Staff */}
                              <div className="absolute top-0 left-[1.5rem] right-[1.5rem] border-t-2 border-slate-300 -z-10"></div>
                              
                              {kadiv.staff.map((staf, sIdx) => (
                                <div key={sIdx} className="flex flex-col items-center">
                                   <VerticalUp />
                                   {/* GUNAKAN VARIANT SMALL */}
                                   <OrgChartNode {...staf} imageUrl="/images/pengurus/placeholder.png" socials={{}} variant="small" />
                                </div>
                              ))}
                           </div>
                        </div>

                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}