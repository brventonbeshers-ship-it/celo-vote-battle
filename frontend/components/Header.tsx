"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useMiniPay } from "@/hooks/useMiniPay";

export default function Header() {
  const { isMiniPay } = useMiniPay();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-dark/80 border-b border-dark-border">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Celo Vote Battle
        </h1>
        {!isMiniPay && <ConnectButton />}
      </div>
    </header>
  );
}

// header: 1775237854967

// header: 1775270734984

// header: 1775282942644

// header: 1775383293766

// header: 1775389614270

// header: 1775437042310

// header: 1775510621947

// header: 1775598279749

// header: 1775643131543

// header: 1775695067932

// header: 1775710101590

// header: 1775751412156

// header: 1775795917337

// header: 1775827443014

// header: 1775870434998

// header: 1775919385868

// header: 1775965872191

// header: 1776045635351

// header: 1776061860487

// header: 1776083035815

// header: 1776114933852

// header: 1776142640695

// header: 1776169749409

// header: 1776184984854

// header: 1776214188256
