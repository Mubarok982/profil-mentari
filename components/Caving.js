import ImageSlider from './ImageSlider'; 

const cavingImages = [
  '/images/caving/caving.webp', 
  '/images/caving/caving2.jpg',  
  '/images/caving/caving3.png',  
];

export default function Caving() {
  return (
    <section id="caving" className="w-full h-[calc(100vh-4rem)] bg-gray-50 flex items-center">
      <div className="container mx-auto px-4">
        {}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          
          {}
          <ImageSlider images={cavingImages} />

          {}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Divisi Caving (Goa)</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Menelusuri keindahan dan misteri di bawah permukaan bumi. Divisi ini fokus pada teknik penelusuran goa yang aman, pemetaan, serta studi tentang ekosistem goa (biospeleologi).
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}