import Link from "next/link";

const socialLinks = [
  { label: "LINKEDIN", href: "https://linkedin.com" },
  { label: "GITHUB", href: "https://github.com" },
  { label: "DRIBBBLE", href: "https://dribbble.com" },
  { label: "TWITTER", href: "https://twitter.com" },
];

export default function Footer() {
  return (
    <footer className="w-full py-16 border-t border-white/5 bg-black">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-desktop max-w-[1440px] mx-auto gap-8">
        <div className="font-label-caps text-label-caps text-white/40 uppercase tracking-widest">
          GOLDEN TICKET PORTFOLIO
        </div>
        <div className="font-body-sm text-white/40">
          © 2024 Golden Ticket Portfolio. All rights reserved.
        </div>
        <div className="flex gap-8">
          {socialLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-white/40 hover:text-white transition-colors font-label-caps text-label-caps"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
