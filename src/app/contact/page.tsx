import ContactTicket from "@/components/ContactTicket";
import ContactCards from "@/components/ContactCards";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      {/* Noise overlay */}
      <div className="fixed inset-0 noise-bg z-[-1]" />

      <main className="min-h-screen pt-40 pb-20 px-margin-mobile md:px-margin-desktop flex flex-col items-center justify-center">
        {/* Ambient Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-white/5 rounded-full blur-[150px] pointer-events-none -z-10" />

        {/* Hero Text */}
        <div className="w-full max-w-[1000px] text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-white glow-dot animate-pulse" />
            <span className="font-label-caps text-label-caps text-white/80 uppercase tracking-widest">
              Available for New Projects
            </span>
          </div>

          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-white mb-6 uppercase">
            Request Your Access
          </h1>

          <p className="font-body-lg text-body-lg text-white/60 max-w-2xl mx-auto">
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
