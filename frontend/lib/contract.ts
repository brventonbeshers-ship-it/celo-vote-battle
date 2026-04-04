import { CONTRACT_ADDRESS } from "./config";

export const VOTE_BATTLE_ABI = [
  {
    inputs: [
      { name: "pollId", type: "uint256" },
      { name: "option", type: "uint256" },
    ],
    name: "vote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ name: "pollId", type: "uint256" }],
    name: "getPollResults",
    outputs: [
      { name: "optionA", type: "uint256" },
      { name: "optionB", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ name: "voter", type: "address" }],
    name: "getVoterStats",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { name: "voter", type: "address" },
      { name: "pollId", type: "uint256" },
    ],
    name: "getVoterPollStats",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
] as const;

export const contractConfig = {
  address: CONTRACT_ADDRESS as `0x${string}`,
  abi: VOTE_BATTLE_ABI,
} as const;

// abi-note: 1775237707586

// abi-note: 1775269927427
