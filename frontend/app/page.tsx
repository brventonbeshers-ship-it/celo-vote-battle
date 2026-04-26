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

// page: 1775751326112

// page: 1775795740680

// page: 1775827288807

// page: 1775870522007

// page: 1775919186145

// page: 1775965681854

// page: 1776045417125

// page: 1776061745389

// page: 1776082908232

// page: 1776114947585

// page: 1776142973374

// page: 1776169746033

// page: 1776185240328

// page: 1776214208129

// page: 1776246934695

// page: 1776255316817

// page: 1776268719604

// page: 1776314507275

// page: 1776348618347

// page: 1776400045755

// page: 1776430911215

// page: 1776458318925

// page: 1776477979803

// page: 1776492039772

// page: 1776516541796

// page: 1776548153563

// page: 1776583742830

// page: 1776617415986

// page: 1776642644033

// page: 1776670490742

// page: 1776677899948

// page: 1776699775992

// page: 1776750044234

// page: 1776779376824

// page: 1776802954498

// page: 1776815704935

// page: 1776832662348

// page: 1776861232783

// page: 1776874574499

// page: 1776888058154

// page: 1776937159462

// page: 1776999821248

// page: 1777023401579

// page: 1777035569522

// page: 1777065038485

// page: 1777101591083

// page: 1777117749695

// page: 1777167469115

// page: 1777182440577

// page: 1777192689301
