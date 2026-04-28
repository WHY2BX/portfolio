// components/Card.tsx
"use client";
import Image from "next/image";

const W = 623;
const H = 393;
const SRC = "/card2.png"; // ไฟล์การ์ดหน้า (PNG)

export default function Card() {
  return (
    <div
      className="
        group relative inline-block
        transition-all duration-500
      "
      style={{ width: W, height: H, perspective: "1000px" }}
    >
      {/* แผ่นหลัง */}
      <div
        className="
          absolute inset-0
          transform-gpu will-change-transform
          transition-transform duration-500 ease-out
          group-hover:translate-x-[10px] group-hover:translate-y-[12px] group-hover:rotate-[12deg]
        "
        style={{
          background: "rgba(255,255,255,0.85)",
          WebkitMaskImage: `url(${SRC})`,
          maskImage: `url(${SRC})`,
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          transform: "rotate(8deg) translate(8px,10px)",
          filter: "drop-shadow(0 10px 18px rgba(0,0,0,.35))",
        }}
      />

      {/* การ์ดหน้า */}
      <div
        className="
          absolute inset-0 z-10
          transform-gpu will-change-transform
          transition-transform duration-500 ease-out
          group-hover:-translate-y-[8px] group-hover:rotate-[3deg] group-hover:scale-[1.03]
        "
        style={{
          transform: "rotate(0deg)",
        }}
      >
        <Image
          src={SRC}
          alt="Card"
          width={W}
          height={H}
          className="block w-full h-full object-cover"
          priority
        />
      </div>
    </div>
  );
}
