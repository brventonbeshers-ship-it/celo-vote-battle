"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useMiniPay } from "@/hooks/useMiniPay";

export default function Header() {
  const { isMiniPay, isConnected, connect } = useMiniPay();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-dark/80 border-b border-dark-border">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Celo Vote Battle
        </h1>
        {isMiniPay ? (
          !isConnected && (
            <button
              type="button"
              onClick={() => void connect()}
              className="rounded-md border border-white/20 px-3 py-2 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Connect MiniPay
            </button>
          )
        ) : (
          <ConnectButton />
        )}
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

// header: 1776246797173

// header: 1776255496396

// header: 1776268552289

// header: 1776314514790

// header: 1776329926686

// header: 1776399997851

// header: 1776430776282

// header: 1776458261135

// header: 1776478014358

// header: 1776492139237

// header: 1776516810286
