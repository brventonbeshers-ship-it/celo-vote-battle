"use client";

import { useState, useEffect } from "react";
import { useAccount, useSendTransaction, useWaitForTransactionReceipt } from "wagmi";
import { contractConfig } from "@/lib/contract";
import { calcPercent, formatNumber } from "@/lib/config";
import { Poll } from "@/lib/polls";
import { createPublicClient, encodeFunctionData, http } from "viem";
import { celo } from "viem/chains";
import { useMiniPay } from "@/hooks/useMiniPay";
import { sendMiniPayTransaction } from "@/lib/minipayTx";

const publicClient = createPublicClient({ chain: celo, transport: http() });

interface Props {
  poll: Poll;
}

export default function PollCard({ poll }: Props) {
  const { address, isConnected } = useAccount();
  const { isMiniPay } = useMiniPay();
  const [votesA, setVotesA] = useState(0);
  const [votesB, setVotesB] = useState(0);
  const [voting, setVoting] = useState<1 | 2 | null>(null);
  const [txError, setTxError] = useState<string | null>(null);
  const [miniPayHash, setMiniPayHash] = useState<`0x${string}`>();

  const { sendTransactionAsync, data: hash, isPending } = useSendTransaction();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash: miniPayHash ?? hash });

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

  async function handleVote(option: 1 | 2) {
    if (!isConnected || !address || busy) return;
    setVoting(option);
    setTxError(null);
    setMiniPayHash(undefined);
    try {
      const data = encodeFunctionData({
        abi: contractConfig.abi,
        functionName: "vote",
        args: [BigInt(poll.id), BigInt(option)],
      });

      if (isMiniPay) {
        const nextHash = await sendMiniPayTransaction(contractConfig.address, data);
        setMiniPayHash(nextHash);
      } else {
        await sendTransactionAsync({
          account: address,
          to: contractConfig.address,
          data,
        } as Parameters<typeof sendTransactionAsync>[0]);
      }
    } catch (error) {
      setVoting(null);
      setTxError(error instanceof Error ? error.message.slice(0, 180) : "Transaction rejected or failed.");
    }
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
      {txError && <p className="mt-3 text-center text-sm text-red-400">{txError}</p>}
    </div>
  );
}

// pollcard: 1775237466847

// pollcard: 1775270205004

// pollcard: 1775282832427

// pollcard: 1775383185179

// pollcard: 1775389540115

// pollcard: 1775436966010

// pollcard: 1775510624122

// pollcard: 1775598235838

// pollcard: 1775643221305

// pollcard: 1775695244621

// pollcard: 1775710046453

// pollcard: 1775751308395

// pollcard: 1775795922523

// pollcard: 1775827338302

// pollcard: 1775870466414

// pollcard: 1775919244397

// pollcard: 1775965819020

// pollcard: 1776045691549

// pollcard: 1776061867171

// pollcard: 1776083029444

// pollcard: 1776114915092

// pollcard: 1776142687308

// pollcard: 1776169839162

// pollcard: 1776184921333

// pollcard: 1776214335512

// pollcard: 1776246929346

// pollcard: 1776255520449

// pollcard: 1776268547908

// pollcard: 1776314461953

// pollcard: 1776329938404

// pollcard: 1776348622535

// pollcard: 1776400006429

// pollcard: 1776430711244

// pollcard: 1776458531925

// pollcard: 1776478222751

// pollcard: 1776491976756

// pollcard: 1776516513652

// pollcard: 1776548042325

// pollcard: 1776583698323

// pollcard: 1776617523240

// pollcard: 1776642712271

// pollcard: 1776670605297

// pollcard: 1776677791107

// pollcard: 1776699902317

// pollcard: 1776749839774

// pollcard: 1776779429721

// pollcard: 1776802725254

// pollcard: 1776815919412

// pollcard: 1776832725638

// pollcard: 1776861407314

// pollcard: 1776874547753

// pollcard: 1776888170007

// pollcard: 1776937443110

// pollcard: 1776999747168

// pollcard: 1777023304456

// pollcard: 1777035548321

// pollcard: 1777065061942

// pollcard: 1777101578126

// pollcard: 1777167664444

// pollcard: 1777182395692

// pollcard: 1777213104548

// pollcard: 1777235881191

// pollcard: 1777264276870

// pollcard: 1777276802591

// pollcard: 1777326778942

// pollcard: 1777354501203

// pollcard: 1777585206217

// pollcard: 1777611618110

// pollcard: 1777654924342

// pollcard: 1777718163775

// pollcard: 1777754892328
