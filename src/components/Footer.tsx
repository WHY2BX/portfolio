import Link from "next/link";

const socialLinks = [
  { label: "LINKEDIN", href: "https://linkedin.com" },
  { label: "GITHUB", href: "https://github.com" },
  { label: "DRIBBBLE", href: "https://dribbble.com" },
  { label: "TWITTER", href: "https://twitter.com" },
];

export default function Footer() {
  return (
    <footer className="w-full py-16 border-t border-white/8 bg-gradient-to-b from-zinc-950 to-black">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 max-w-[1440px] mx-auto gap-8">
        <div className="type-caption text-zinc-300">
          SUPITCHA WIS PORTFOLIO
        </div>
        <div className="type-body-sm text-zinc-500">
          © 2024 SUPITCHA WIS Portfolio. All rights reserved.
        </div>
        <div className="flex gap-8">
          {socialLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-zinc-500 hover:text-white transition-colors type-micro"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
