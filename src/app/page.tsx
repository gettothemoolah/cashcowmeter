"use client";

import { useState } from "react";

export default function Home() {
  const [address, setAddress] = useState("");

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      <h1 className="text-5xl font-bold mb-4">CashCowMeter™ 🐄</h1>

      <p className="text-lg text-white/70 mb-8 text-center max-w-xl">
        Instantly analyze real estate cash flow and investment potential.
        <br />
        No Moo. Some Moo. Moo-Lah.
      </p>

      <div className="w-full max-w-md bg-white/5 border border-white/10 p-6 rounded-2xl">
        <input
          type="text"
          placeholder="Enter property address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-3 rounded bg-white/10 text-white placeholder:text-white/40 outline-none mb-4"
        />

        <button
          className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-3 rounded-xl transition"
          onClick={() => alert(`Analyzing: ${address}`)}
        >
          Check the Moo 🐮
        </button>

        <p className="mt-4 text-xs text-white/50 text-center">
          Decision-support only. Not a lender, broker, or financial advisor.
        </p>
      </div>
    </main>
  );
}
<s></s>