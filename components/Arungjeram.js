import ImageSlider from './ImageSlider'; 
const arungJeramImages = [
  '/images/arungjeram/arung-jeram1.jpg',
  '/images/arungjeram/arung-jeram2.jpg', 
  '/images/arungjeram/arung-jeram3.jpg', 
  '/images/arungjeram/arung-jeram4.jpg', //nambah foto di sini//
  '/images/arungjeram/arung-jeram5.jpg',
  '/images/arungjeram/arung-jeram6.jpg',
];

export default function ArungJeram() {
  return (
    <section id="arung-jeram" className="w-full h-[calc(100vh-4rem)] bg-gray-50 flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          
          {}
          <ImageSlider images={arungJeramImages} />

          {}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Divisi Arung Jeram</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Mengarungi derasnya arus sungai, memacu adrenalin, dan bekerja sama sebagai tim yang solid. Divisi ini melatih ketangkasan, kekuatan, dan keberanian di atas perahu karet.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}