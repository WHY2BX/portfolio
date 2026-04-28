// components/Navbar.tsx
export default function Navbar() {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(92%,72rem)]">
      <nav
        className="
          flex items-center justify-between
          backdrop-blur-xs
        "
      >
        {/* โลโก้ / ชื่อแบรนด์ */}
        <a href="#" className="font-semibold text-white/90">ACHOOOW</a>

        {/* เมนู */}
        <ul className="hidden sm:flex gap-6 text-sm">
          <li><a className="text-white/80 hover:text-white" href="#Projects">Projects</a></li>
          <li><a className="text-white/80 hover:text-white" href="#">Skill</a></li>
          <li><a className="text-white/80 hover:text-white" href="#faq">Certificate</a></li>
        </ul>

        {/* ปุ่ม Contact แบบในภาพ */}
        <a
          href="#contact"
          className="
            rounded-xl px-4 py-2 text-sm font-medium
            bg-gray-600 text-white
            shadow-md shadow-blue-900/30
            hover:brightness-110 active:scale-[0.98]
            transition
          "
        >
          Contact
        </a>
      </nav>
    </div>
  );
}
