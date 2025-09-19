// components/ImageSlider.js
"use client"; // Komponen ini interaktif, jadi perlu "use client"

import Image from 'next/image';
// Import komponen-komponen Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import CSS Swiper (ini wajib)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// 'images' adalah array berisi path/URL gambar yang akan kita lewatkan
export default function ImageSlider({ images }) {
  return (
    <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
      <Swiper
        // Install modul navigasi dan pagination
        modules={[Navigation, Pagination]}
        // Aktifkan panah navigasi
        navigation
        // Aktifkan titik-titik pagination yang bisa diklik
        pagination={{ clickable: true }}
        // Membuat slider bisa berputar (looping)
        loop={true}
        className="h-full w-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              alt={`Galeri gambar ${index + 1}`}
              fill
              className="object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}