"use client";

import { useState, useEffect } from "react";
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { contractConfig } from "@/lib/contract";
import { calcPercent, formatNumber } from "@/lib/config";
import { Poll } from "@/lib/polls";
import { createPublicClient, http } from "viem";
import { celo } from "viem/chains";

const publicClient = createPublicClient({ chain: celo, transport: http() });

interface Props {
  poll: Poll;
}

export default function PollCard({ poll }: Props) {
  const { address, isConnected } = useAccount();
  const [votesA, setVotesA] = useState(0);
  const [votesB, setVotesB] = useState(0);
  const [voting, setVoting] = useState<1 | 2 | null>(null);

  const { writeContract, data: hash, isPending } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

  const total = votesA + votesB;
  const pctA = calcPercent(votesA, total);
  const pctB = calcPercent(votesB, total);

  useEffect(() => {
    loadResults();
  }, []);

  useEffect(() => {
    if (isSuccess) {
      loadResults();
      setVoting(null);
    }
  }, [isSuccess]);

  async function loadResults() {
    try {
      const result = await publicClient.readContract({
        ...contractConfig,
        functionName: "getPollResults",
        args: [BigInt(poll.id)],
      });
      setVotesA(Number(result[0]));
      setVotesB(Number(result[1]));
    } catch {}
  }

  function handleVote(option: 1 | 2) {
    if (!isConnected) return;
    setVoting(option);
    writeContract({
      ...contractConfig,
      functionName: "vote",
      args: [BigInt(poll.id), BigInt(option)],
    });
  }

  const busy = isPending || isConfirming;

  return (
    <div className="glass-card p-6 hover:shadow-glow transition-all duration-300">
      <div className="text-center mb-4">
        <span className="text-xs text-gray-400 uppercase tracking-wider">Poll #{poll.id}</span>
        <div className="flex items-center justify-center gap-3 mt-1">
          <span className="text-lg">{poll.emojiA}</span>
          <span className="text-xl font-bold text-white">{poll.optionA}</span>
          <span className="text-gray-500 text-sm">vs</span>
          <span className="text-xl font-bold text-white">{poll.optionB}</span>
          <span className="text-lg">{poll.emojiB}</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="relative h-8 rounded-full overflow-hidden bg-gray-800 mb-4">
        <div
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-primary/70 transition-all duration-500"
          style={{ width: `${total > 0 ? pctA : 50}%` }}
        />
        <div className="absolute inset-0 flex items-center justify-between px-3 text-sm font-medium">
          <span>{pctA}%</span>
          <span>{pctB}%</span>
        </div>
      </div>

      {/* Vote counts */}
      <div className="flex justify-between text-sm text-gray-400 mb-4">
        <span>{formatNumber(votesA)} votes</span>
        <span>{formatNumber(total)} total</span>
        <span>{formatNumber(votesB)} votes</span>
      </div>

      {/* Vote buttons */}
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => handleVote(1)}
          disabled={!isConnected || busy}
          className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed text-sm"
        >
          {busy && voting === 1 ? "Voting..." : poll.optionA}
        </button>
        <button
          onClick={() => handleVote(2)}
          disabled={!isConnected || busy}
          className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed text-sm"
        >
          {busy && voting === 2 ? "Voting..." : poll.optionB}
        </button>
      </div>
    </div>
  );
}

// pollcard: 1775237466847
