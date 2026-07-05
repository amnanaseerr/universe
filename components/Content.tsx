"use client";

import { useState } from "react";

/* ---------------- data ---------------- */

const features = [
  { icon: "🛍️", title: "Marketplace", desc: "Buy and sell books, electronics, furniture and hostel essentials with verified sellers." },
  { icon: "📅", title: "Events", desc: "Society events, workshops and meetups on one shared campus calendar." },
  { icon: "👥", title: "Communities", desc: "Batch groups and hobby clubs that stay active all semester." },
  { icon: "🎓", title: "Tutoring", desc: "Find a senior who's already aced the course you're stuck on." },
  { icon: "💬", title: "Real-time Chat", desc: "Secure, direct messaging between buyers, sellers and tutors." },
  { icon: "📦", title: "Lost & Found", desc: "Report and recover lost items across campus, faster than a group chat." },
];

const moduleData = {
  marketplace: {
    icon: "🛍️",
    label: "Marketplace",
    desc: "A campus-only buy and sell space — no strangers, no scams, just verified students.",
    points: [
      "List items in under a minute with photos and price",
      "Filter by category: books, electronics, furniture, hostel items",
      "Chat directly with the seller before you commit",
      "Verified Seller badges for students with a track record",
    ],
  },
  events: {
    icon: "📅",
    label: "Events",
    desc: "Every society event, workshop and meetup on one calendar instead of scattered posters and stories.",
    points: [
      "One shared calendar across all societies on campus",
      "RSVP and get reminders before the event starts",
      "Society pages with their own event history",
      "Discover events by interest, not just by who you follow",
    ],
  },
  tutoring: {
    icon: "🎓",
    label: "Tutoring",
    desc: "Find a senior who's already survived the course you're currently stuck in.",
    points: [
      "Search tutors by course code or subject",
      "See ratings and response time before you message",
      "Book paid or free sessions depending on the tutor",
      "Built-in chat to schedule without leaving the app",
    ],
  },
  communities: {
    icon: "👥",
    label: "Communities",
    desc: "Batch groups and hobby clubs that stay active past the first week of orientation.",
    points: [
      "Auto-joined batch group based on your enrollment year",
      "Create or join interest-based clubs and circles",
      "Group discussions that don't get buried like WhatsApp",
      "Admins can post announcements that actually get seen",
    ],
  },
} as const;

type ModuleKey = keyof typeof moduleData;

const howItWorks = [
  { step: "01", title: "Sign up with your student email", desc: "No ID uploads, no waiting for approval — just your university email address." },
  { step: "02", title: "Browse or list in seconds", desc: "Find what you need on campus, or list your own items, notes, or tutoring in a couple of taps." },
  { step: "03", title: "Chat and meet up on campus", desc: "Message directly inside the app and arrange a handover, session, or event RSVP." },
];

// 🔥 TESTIMONIALS (Feedback) DATA HATAYA

const faqs = [
  { q: "Can any university join UniVerse?", a: "We're launching first at NUST to get the experience right, then opening to FAST, GIKI, COMSATS and other campuses shortly after." },
  { q: "Can alumni use it?", a: "At launch, UniVerse is for currently enrolled students verified with a university email. Alumni access is on the roadmap." },
  { q: "How do I verify I'm a student?", a: "Sign up with your official university email address — no ID uploads or manual approval needed." },
  { q: "Is UniVerse free to use?", a: "Yes. Browsing, listing, chatting and joining communities are all free. Some future premium features may be optional add-ons." },
  { q: "When does it launch?", a: "Waitlist members get access first — join above and we'll email you the moment it's ready." },
];

/* ---------------- section wrapper ---------------- */

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <div className="mx-auto mb-14 max-w-xl text-center">
      <span className="mb-2 block font-mono text-xs tracking-widest text-violet-400">{eyebrow}</span>
      <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      {sub && <p className="mt-3 text-violet-100/60">{sub}</p>}
    </div>
  );
}

/* ---------------- main component ---------------- */

export default function Content() {
  const [activeModule, setActiveModule] = useState<ModuleKey>("marketplace");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const current = moduleData[activeModule];

  return (
    <>
      {/* ---------- FEATURES ---------- */}
      <section id="features" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHead eyebrow="// WHAT'S INSIDE" title="Everything in one place" sub="Six core modules built around how campus life actually works." />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/10 bg-[#191231] p-7 transition hover:-translate-y-1.5 hover:border-violet-400 hover:shadow-[0_20px_45px_-20px_rgba(124,92,252,0.5)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/15 text-xl">{f.icon}</div>
                <h3 className="mb-2 text-lg font-bold text-white">{f.title}</h3>
                <p className="text-sm text-violet-100/60">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- MODULES ---------- */}
      <section id="modules" className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHead eyebrow="// SEE IT IN ACTION" title="Explore the modules" sub="Click a module to see what it actually does." />
          <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-white/10 bg-[#191231] md:grid-cols-[0.9fr_1.1fr]">
            <div className="flex gap-1 overflow-x-auto border-b border-white/10 p-3 md:flex-col md:border-b-0 md:border-r">
              {(Object.keys(moduleData) as ModuleKey[]).map((key) => {
                const m = moduleData[key];
                const isActive = key === activeModule;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveModule(key)}
                    className={`flex shrink-0 items-center gap-3 whitespace-nowrap rounded-xl px-5 py-4 text-left text-sm font-semibold transition ${
                      isActive
                        ? "border-l-4 border-violet-400 bg-gradient-to-r from-violet-500/20 to-transparent text-white"
                        : "text-violet-100/60 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span>{m.icon}</span>
                    {m.label}
                  </button>
                );
              })}
            </div>
            <div className="p-8 sm:p-10">
              <h3 className="mb-3 text-2xl font-bold text-white">{current.label}</h3>
              <p className="mb-6 text-violet-100/60">{current.desc}</p>
              <ul className="space-y-3">
                {current.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-violet-100/70">
                    <span className="mt-0.5 font-bold text-emerald-400">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- HOW IT WORKS ---------- */}
      <section id="how-it-works" className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHead eyebrow="// GETTING STARTED" title="How it works" sub="From sign-up to your first deal, in three steps." />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {howItWorks.map((step) => (
              <div key={step.step} className="rounded-2xl border border-white/10 bg-[#191231] p-7">
                <span className="mb-4 block font-mono text-2xl font-bold text-violet-400/60">{step.step}</span>
                <h3 className="mb-2 text-lg font-bold text-white">{step.title}</h3>
                <p className="text-sm text-violet-100/60">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔥 TESTIMONIALS (FEEDBACK) SECTION POORA HATAYA */}

      {/* ---------- FAQ ---------- */}
      <section id="faq" className="py-24">
        <div className="mx-auto max-w-2xl px-6">
          <SectionHead eyebrow="// QUESTIONS" title="Frequently asked" sub="" />
          <div className="space-y-3">
            {faqs.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={item.q} className="overflow-hidden rounded-2xl border border-white/10 bg-[#191231]">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left font-semibold text-white"
                  >
                    {item.q}
                    <span className={`text-xl text-violet-400 transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
                  </button>
                  {isOpen && <p className="px-6 pb-5 text-sm text-violet-100/60">{item.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}