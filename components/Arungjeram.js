import ImageSlider from './ImageSlider'; 
import RevealOnScroll from './RevealOnScroll'; // 1. Import sudah benar

const arungJeramImages = [
  '/images/arungjeram/arung-jeram1.jpg',
  '/images/arungjeram/arung-jeram2.jpg', 
  '/images/arungjeram/arung-jeram3.jpg', 
  '/images/arungjeram/arung-jeram4.jpg',
  '/images/arungjeram/arung-jeram5.jpg',
  '/images/arungjeram/arung-jeram6.jpg',
];

export default function ArungJeram() {
  return (
    <section id="arung-jeram" className="w-full min-h-screen py-20 bg-gray-50 flex items-center overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          
          {/* 2. Gunakan RevealOnScroll untuk membungkus ImageSlider */}
          {/* direction="left" berarti elemen akan muncul dari kiri */}
          <RevealOnScroll direction="left">
            <ImageSlider images={arungJeramImages} />
          </RevealOnScroll>

          {/* 3. Gunakan RevealOnScroll untuk membungkus Teks */}
          {/* direction="right" berarti elemen akan muncul dari kanan */}
          {/* delay={0.2} memberikan jeda sedikit agar tidak muncul bersamaan persis dengan gambar */}
          <RevealOnScroll direction="right" delay={0.2}>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Divisi Arung Jeram</h2>
              <p className="text-base text-gray-600 leading-relaxed">
                Mengarungi derasnya arus sungai, memacu adrenalin, dan bekerja sama sebagai tim yang solid. Divisi ini melatih ketangkasan, kekuatan, dan keberanian di atas perahu karet.
              </p>
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
}