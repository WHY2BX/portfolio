import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/TopNavBar"; // ดูข้อ 2 ด้านล่างเรื่อง alias

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

export const metadata = {
  title: "ACHOO — Developer Portfolio",
  description: "Portfolio of Supitcha Wis — back-end / full-stack developer, IT graduate from KMITL.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="antialiased min-h-screen relative font-sans">
        {/* Ambient background glowing circles */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50 select-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blob-1" />
          <div className="absolute bottom-[10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blob-2" />
          <div className="absolute top-[40%] left-[30%] w-[45%] h-[45%] rounded-full bg-blob-3" />
        </div>
        {/* Noise layer */}
        <div className="fixed inset-0 noise-bg z-[-40] pointer-events-none" />
        
        <Navbar />
        {children}
      </body>
    </html>
  );
}