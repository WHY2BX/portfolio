import ContactTicket from "@/components/ContactTicket";
import ContactCards from "@/components/ContactCards";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      {/* Noise overlay */}
      <div className="fixed inset-0 noise-bg z-[-1]" />

      <main className="min-h-screen pt-40 pb-20 px-4 md:px-12 flex flex-col items-center justify-center">
        {/* Ambient Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-zinc-400/[0.07] rounded-full blur-[150px] pointer-events-none -z-10" />

        {/* Hero Text */}
        <div className="w-full max-w-[1000px] text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.02] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-white glow-dot animate-pulse" />
            <span className="type-caption text-zinc-300">
              Available for New Projects
            </span>
          </div>

          <h1 className="type-display text-gradient-white mb-5 uppercase">
            Request Your Access
          </h1>

          <p className="type-lead text-zinc-400 max-w-2xl mx-auto">
            Ready to elevate your digital presence? Fill out the ticket below to
            start our collaboration journey.
          </p>
        </div>

        <ContactTicket />
        <ContactCards />
      </main>

      <Footer />
    </>
  );
}
