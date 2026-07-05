export default function Navbar() {
  const links = [
    { label: "Features", href: "#features" },
    { label: "Modules", href: "#modules" },
    { label: "How it works", href: "#how-it-works" }, // ✅ WAPAS RAKHA
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <div className="flex w-full max-w-5xl items-center justify-between rounded-full border border-white/10 bg-[#191231]/80 px-6 py-3 backdrop-blur-xl">
        <div className="flex items-center gap-2 text-lg font-bold text-white">
          <span className="h-2.5 w-2.5 rounded-full bg-violet-400 shadow-[0_0_10px_2px_rgba(157,125,255,0.7)]" />
          UniVerse
        </div>

        <nav className="hidden gap-8 text-sm font-medium text-violet-100/70 lg:flex">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="transition hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#waitlist"
          className="rounded-full bg-violet-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-violet-500"
        >
          Join Waitlist
        </a>
      </div>
    </header>
  );
}