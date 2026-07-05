"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp, getCountFromServer } from "firebase/firestore";

export default function CallToAction() {
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("Join students already on the waitlist · No spam, ever.");
  const [joined, setJoined] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (joined || loading) return;

    setLoading(true);
    try {
      // Saves the email into the "waitlist" collection in Firestore,
      // in the same Firebase project as the UniVerse app.
      await addDoc(collection(db, "waitlist"), {
        email,
        joinedAt: serverTimestamp(),
      });

      const snapshot = await getCountFromServer(collection(db, "waitlist"));
      const count = snapshot.data().count;

      setJoined(true);
      setNote(`You're in! You're waitlist member #${count}. Check your inbox at launch.`);
      setEmail("");
    } catch (err) {
      console.error("Waitlist signup failed:", err);
      setNote("Something went wrong — please try again in a moment.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* ---------- WAITLIST ---------- */}
      <section id="waitlist" className="px-6 py-16">
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#221A3D] to-[#191231] p-10 text-center sm:p-14">
          <h2 className="mb-3 text-3xl font-bold text-white">Become an early tester</h2>
          <p className="mb-8 text-violet-100/60">
            Get early access, a Founding Member badge, and a say in what we build next.
          </p>
          <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your email"
              className="flex-1 rounded-xl border border-white/10 bg-[#0F0B1E] px-4 py-3 text-sm text-white placeholder:text-violet-100/30 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-500 disabled:opacity-60"
            >
              {loading ? "Joining..." : "Join Waitlist"}
            </button>
          </form>
          <p className="mt-4 text-xs text-violet-100/40">{note}</p>
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6">
          <div className="flex items-center gap-2 font-bold text-white">
            <span className="h-2.5 w-2.5 rounded-full bg-violet-400" />
            UniVerse
          </div>
          <div className="flex gap-6 text-sm text-violet-100/60">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#modules" className="hover:text-white">Modules</a>
            <a href="#how-it-works" className="hover:text-white">How it works</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </div>
          </div>
      </footer>
    </>
  );
}
