import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

import Arungjeram from "@/components/Arungjeram";
import Caving from "@/components/Caving";
import Konservasi from "@/components/Konservasi";
import Panjat from "@/components/Panjat";
import Rimbagunung from "@/components/Rimbagunung";

import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";


export default function Home() {
  return (
    <main>
      <Navbar />
      
      <HeroSection />
      
      {}
      <Arungjeram />
      <Caving />
      <Konservasi />
      <Panjat />
      <Rimbagunung />

      {}
      <Footer />
      <ScrollToTopButton />

    </main>
  );
}