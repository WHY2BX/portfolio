import "./globals.css";
import Navbar from "@/components/navbar"; // ดูข้อ 2 ด้านล่างเรื่อง alias

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}