// app/page.js

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

// Nama impor dan path file harus sama persis dengan nama file Anda.
import Arungjeram from "@/components/Arungjeram";
import Caving from "@/components/Caving";
import Konservasi from "@/components/Konservasi";
import Panjat from "@/components/Panjat";
import Rimbagunung from "@/components/Rimbagunung";

// --- KOREKSI 1: Impor Footer & Tombol Scroll di sini ---
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";


export default function Home() {
  return (
    <main>
      <Navbar />
      
      <HeroSection />
      
      {/* Panggil setiap komponen dengan nama yang sama persis saat di-import */}
      <Arungjeram />
      <Caving />
      <Konservasi />
      <Panjat />
      <Rimbagunung />

      {/* --- KOREKSI 2: Panggil Komponen Footer & Tombol Scroll di sini --- */}
      <Footer />
      <ScrollToTopButton />

    </main>
  );
}