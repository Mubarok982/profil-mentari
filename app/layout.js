import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Profil UKM Mentari Unimma",
  description: "Website profil Unit Kegiatan Mahasiswa Pecinta Alam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-800`}>
        {children}
      </body>
    </html>
  );
}