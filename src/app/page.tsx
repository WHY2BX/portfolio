import Card from "@/components/card";
import MusicPlayer from "@/components/MusicPlayer";

export default function Page() {
  return (
    <main className="h-screen bg-[url('/bg.png')] bg-cover bg-center grid place-items-center">
      <Card />
      <MusicPlayer />
    </main>
  );
}
