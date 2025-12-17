"use client";
import OrgChartNode from './OrgChartNode';

// --- DATA PENGURUS ---
const data = {
  ketuaUmum: { 
    name: 'Ahmad Budi', 
    position: 'Ketua Umum', 
    imageUrl: '/images/pengurus/ketua_umum.png',
    socials: { instagram: '#' } 
  },
  
  // LEVEL 2: BPH
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

  // LEVEL 3: KABID
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
      staff: [] // SDM Staff-nya adalah KADIV
    }, 
    { 
      id: 'logistik', name: 'Putri Indah', position: 'Kabid Logistik', imageUrl: '/images/pengurus/placeholder.png',
      socials: { instagram: '#' },
      staff: [{ name: 'Dona', position: 'Staff Logistik', socials: { instagram: '#' } }]
    },
  ],

  // LEVEL 4 & 5: KADIV & STAFF
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

// --- HELPER COMPONENTS ---
const VerticalUp = () => <div className="w-px h-8 bg-slate-300 mx-auto -mt-8 mb-2 relative z-[-1]"></div>;
const VerticalDown = ({ height = "h-8" }) => <div className={`w-px ${height} bg-slate-300 mx-auto`}></div>;

const HorizontalConnector = ({ width = "left-8 right-8" }) => (
  <div className={`absolute top-0 ${width} border-t-2 border-slate-300 -z-20`}></div>
);

// --- COMPONENT STAFF GROUP ---
const StaffGroup = ({ staff }) => {
  if (!staff || staff.length === 0) return null;

  return (
    <div className="flex flex-col items-center w-full">
      <VerticalDown height="h-6" />
      <div className="relative flex justify-center gap-4 mt-1">
        {staff.length > 1 && (
           <div className="absolute top-0 left-1/4 right-1/4 border-t-2 border-slate-300 -z-10"></div>
        )}
        {staff.map((s, i) => (
           <div key={i} className="flex flex-col items-center relative">
              {staff.length > 1 && <div className="w-px h-3 bg-slate-300 absolute -top-1 left-1/2 -translate-x-1/2"></div>}
              {/* Pastikan socials dipassing ke OrgChartNode */}
              <OrgChartNode {...s} imageUrl="/images/pengurus/placeholder.png" variant="small" />
           </div>
        ))}
      </div>
    </div>
  );
};

export default function StrukturBagan() {
  return (
    <div className="mt-16 w-full overflow-x-auto pb-24 cursor-grab active:cursor-grabbing hide-scrollbar">
      {/* Min-width LEBAR agar layout horizontal aman */}
      <div className="min-w-[2000px] flex flex-col items-center px-10 mx-auto pb-40">
        
        {/* ================= LEVEL 1: KETUA ================= */}
        <div className="flex flex-col items-center mb-10">
          <div className="relative z-10">
            <OrgChartNode {...data.ketuaUmum} />
          </div>
          <VerticalDown height="h-10" />
        </div>

        {/* ================= LEVEL 2: BPH (Baris Sendiri) ================= */}
        <div className="relative flex justify-center gap-24 items-start mb-20">
          <HorizontalConnector width="left-16 right-16" />
          
          {data.bph.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <VerticalUp />
              <div className="relative z-20 bg-white rounded-xl">
                 <OrgChartNode {...item} />
              </div>
              <StaffGroup staff={item.staff} />
            </div>
          ))}
        </div>

        {/* GARIS PENGHUBUNG BPH -> KABID */}
        <div className="w-full flex justify-center -mt-10 mb-10 relative">
             <div className="w-px h-20 bg-slate-300 absolute -top-20"></div> 
        </div>

        {/* ================= LEVEL 3: KABID (Baris Sendiri di Bawah BPH) ================= */}
        <div className="relative flex justify-center gap-32 items-start mb-20">
          <HorizontalConnector width="left-20 right-20" />
          
          {data.kabid.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <VerticalUp />
              
              <div className="relative z-20 bg-white rounded-xl">
                 <OrgChartNode {...item} />
              </div>

              {/* STAFF KABID */}
              <StaffGroup staff={item.staff} />
            </div>
          ))}
        </div>

        {/* ================= LEVEL 4: KADIV (Baris Sendiri di Bawah Kabid) ================= */}
        <div className="flex flex-col items-center w-full relative">
            <div className="relative flex justify-center gap-16 items-start mt-10">
                <HorizontalConnector width="left-10 right-10" />

                {/* Garis Vertikal Utama naik ke atas */}
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-px h-16 bg-slate-300"></div>

                {data.kadivList.map((kadiv, kIdx) => (
                  <div key={kIdx} className="flex flex-col items-center">
                    <VerticalUp />
                    <OrgChartNode {...kadiv} variant="small" />
                    <StaffGroup staff={kadiv.staff} />
                  </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
}