import ImageSlider from './ImageSlider';

const panjatTebingImages = [
  '/images/panjat/panjat.png',
  '/images/panjattebing/panjat2.jpg',
  '/images/panjattebing/panjat3.jpg',
  '/images/panjattebing/panjat4.jpg',
];

export default function Panjat() {
  return (
    <section id="panjat-tebing" className="w-full h-[calc(100vh-4rem)] bg-gray-50 flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          
          <div className="w-full md:w-3/5">
            <ImageSlider images={panjatTebingImages} />
          </div>

          <div className="w-full md:w-2/5 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Divisi Panjat Tebing</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Menaklukkan tebing vertikal dengan kekuatan, teknik, dan fokus. Divisi ini membangun kepercayaan diri, kekuatan fisik, serta mental yang kuat untuk mencapai puncak.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}