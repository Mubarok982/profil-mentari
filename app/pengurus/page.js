// app/pengurus/page.js
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PengurusSection from "@/components/PengurusSection"; // Komponen ini akan kita buat selanjutnya

export default function HalamanPengurus() {
  return (
    <main>
      <Navbar />
      <PengurusSection />
      <Footer />
    </main>
  );
}