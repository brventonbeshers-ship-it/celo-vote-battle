"use client";

import { useState } from "react";
import Header from "@/components/Header";
import PollCard from "@/components/PollCard";
import { POLLS } from "@/lib/polls";

export default function Home() {
  const [search, setSearch] = useState("");

  const filtered = POLLS.filter((p) => {
    const q = search.toLowerCase();
    return (
      p.optionA.toLowerCase().includes(q) ||
      p.optionB.toLowerCase().includes(q) ||
      p.tags.some((t) => t.includes(q))
    );
  });

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            A vs B — You Decide
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Vote on 20 battles. Every vote is recorded permanently on the Celo blockchain.
            Connect your wallet and make your voice heard!
          </p>
        </div>

        <div className="max-w-md mx-auto mb-8">
          <input
            type="text"
            placeholder="Search polls..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-dark-card border border-dark-border text-white
                       placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((poll) => (
            <PollCard key={poll.id} poll={poll} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 mt-8">No polls match your search.</p>
        )}
      </main>
    </>
  );
}

// page: 1775237320364

// page: 1775270346078

// page: 1775283346236

// page: 1775383195720

// page: 1775389542303

// page: 1775436931013

// page: 1775510478604

// page: 1775598289109

// page: 1775643179066

// page: 1775695203958

// page: 1775710143092
