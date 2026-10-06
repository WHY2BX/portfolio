import Card from "@/components/card";
import MusicPlayer from "@/components/MusicPlayer";

export default function Page() {
  return (
    <main className="h-screen w-full relative overflow-hidden bg-[#030014] grid place-items-center select-none">
      {/* Grayscale background image overlay */}
      <div
        className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center opacity-25 pointer-events-none"
        style={{ filter: "grayscale(100%) contrast(110%)" }}
      />

      {/* Dark vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/85 pointer-events-none" />

      {/* Main card */}
      <div className="relative z-10">
        <Card />
      </div>
      <MusicPlayer />
    </main>
  );
}
