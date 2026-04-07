"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useMiniPay } from "@/hooks/useMiniPay";

export default function Header() {
  const isMiniPay = useMiniPay();

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
