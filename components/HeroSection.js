"use client";
import Image from 'next/image'; 
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen text-center text-white overflow-hidden">
      {/* Background Image dengan efek zoom halus */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src="/images/herosection/OIP.webp"
          alt="Latar belakang alam"
          fill 
          className="object-cover" 
          priority 
        />
      </motion.div>
      
      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-gray-900/90 -z-10"></div>
      
      <div className="z-10 p-4 container mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-7xl font-extrabold mb-4 drop-shadow-lg tracking-tight"
        >
          UKM <span className="text-emerald-400">MENTARI</span>
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto text-gray-200"
        >
          Mahasiswa Pecinta Alam Universitas Muhammadiyah Magelang
        </motion.h2>
        
        {/* PERBAIKAN DI SINI: Gunakan &quot; menggantikan " */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-base md:text-lg italic text-gray-300 max-w-2xl mx-auto border-t border-gray-500/50 pt-6 mt-6"
        >
          &quot;Di mana Bumi kupijak, di situ aku kena pajak.&quot;
        </motion.p>

        {/* Scroll Down Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, delay: 1.5, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}