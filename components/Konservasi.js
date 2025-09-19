import ImageSlider from './ImageSlider'; 

const konservasiImages = [
  '/images/konservasi/konservasi.webp', 
  '/images/konservasi/konservasi2.jpg',  
  '/images/konservasi/konservasi3.png',  
];

export default function Konservasi() {
  return (
    <section id="konservasi" className="w-full h-[calc(100vh-4rem)] bg-white flex items-center">
      <div className="container mx-auto px-4">
        {}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
          
          {}
          <div className="w-full md:w-3/5">
            <ImageSlider images={konservasiImages} />
          </div>

          {}
          <div className="w-full md:w-2/5 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Divisi Konservasi</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Menjadi garda terdepan dalam menjaga kelestarian alam. Divisi ini fokus pada kegiatan penanaman pohon, pembersihan lingkungan, edukasi, dan penelitian untuk keberlanjutan bumi.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}