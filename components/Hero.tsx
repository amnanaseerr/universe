export default function Hero() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden pt-40 pb-20">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-violet-600/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-indigo-700/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2">
          {/* Left */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 font-mono text-xs text-amber-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-300" />
              LAUNCHING FIRST AT NUST
            </div>

            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Everything Students Need.
              <br />
              One Platform.{" "}
              <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">
                Infinite Possibilities.
              </span>
            </h1>

            <p className="mt-5 max-w-md text-violet-100/70">
              Buy, sell, learn and connect — UniVerse brings your campus marketplace,
              tutoring, events and communities into a single app.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#waitlist"
                className="rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-violet-500"
              >
                Get Early Access
              </a>
              <a
                href="#modules"
                className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-violet-400 hover:bg-violet-500/10"
              >
                Watch Demo
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3 text-sm text-violet-100/50">
              <div className="flex -space-x-2">
                {[0, 1, 2, 3].map((i) => (
                  <span
                    key={i}
                    className="h-7 w-7 rounded-full border-2 border-[#0F0B1E] bg-gradient-to-br from-violet-500 to-purple-300"
                  />
                ))}
              </div>
              143+ students already on the waitlist
            </div>
          </div>

          {/* Right: phone mockup */}
          <div className="relative mx-auto flex min-h-[440px] w-full max-w-xs items-center justify-center">
            <div className="absolute -left-4 top-8 z-10 rounded-2xl border border-white/10 bg-[#191231] px-4 py-3 shadow-xl animate-bounce [animation-duration:3s]">
              <p className="text-xs font-semibold text-white">📚 New listing</p>
              <p className="text-[11px] text-violet-100/50">Calculus notes — Rs 300</p>
            </div>
            <div className="absolute -right-4 bottom-16 z-10 rounded-2xl border border-white/10 bg-[#191231] px-4 py-3 shadow-xl animate-bounce [animation-duration:3.5s]">
              <p className="text-xs font-semibold text-white">💬 Aisha</p>
              <p className="text-[11px] text-violet-100/50">&quot;Is this still available?&quot;</p>
            </div>

            <div className="relative h-[420px] w-[220px] rotate-[-4deg] rounded-[38px] border-[8px] border-[#120C22] bg-[#191231] shadow-[0_30px_80px_-20px_rgba(124,92,252,0.45)]">
              <div className="absolute left-1/2 top-0 h-4 w-20 -translate-x-1/2 rounded-b-xl bg-[#120C22]" />
              <div className="flex h-full flex-col gap-2 rounded-[30px] p-4 pt-8">
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-sm font-bold text-white">Marketplace</span>
                  <span className="h-4 w-4 rounded border border-violet-200/40" />
                </div>
                {[
                  ["Physics Textbook", "Rs 800 · 2h ago"],
                  ["Study Table", "Rs 2,500 · Hostel C"],
                  ["Scientific Calculator", "Rs 600 · Verified"],
                ].map(([title, sub]) => (
                  <div key={title} className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#2C2350] p-2">
                    <div className="h-8 w-8 flex-shrink-0 rounded-lg bg-gradient-to-br from-violet-500 to-purple-300" />
                    <div>
                      <p className="text-[11px] font-semibold text-white">{title}</p>
                      <p className="text-[10px] text-violet-100/50">{sub}</p>
                    </div>
                  </div>
                ))}
                <div className="mt-auto flex justify-around rounded-xl border border-white/10 bg-[#2C2350] py-2">
                  <span className="h-3 w-3 rounded bg-violet-400" />
                  <span className="h-3 w-3 rounded bg-violet-100/20" />
                  <span className="h-3 w-3 rounded bg-violet-100/20" />
                  <span className="h-3 w-3 rounded bg-violet-100/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}