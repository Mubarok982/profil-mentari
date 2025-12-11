// components/RimbaGunung.js
import ImageSlider from './ImageSlider';
import RevealOnScroll from './RevealOnScroll';

const rimbaGunungImages = [
  '/images/rimbagunung/rimbagunung.jpg',
  '/images/rimbagunung/rimbagunung2.jpg',
  '/images/rimbagunung/rimbagunung3.jpg',
];

export default function RimbaGunung() {
  return (
    <section id="rimba-gunung" className="w-full h-[calc(100vh-4rem)] bg-white flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">

          <div className="w-full md:w-3/5">
          <RevealOnScroll direction="right">
            <ImageSlider images={rimbaGunungImages} />
          </RevealOnScroll>
          </div>

          <RevealOnScroll direction="left" delay={0.2}>
          <div className="w-full md:w-2/5 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Divisi Rimba Gunung</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Menyusuri lebatnya hutan dan mendaki puncak-puncak tertinggi. Divisi ini adalah tentang navigasi, survival, manajemen perjalanan, dan menikmati keindahan alam dari ketinggian.
            </p>
          </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
}