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

// abi-note: 1775283178704

// abi-note: 1775383302313

// abi-note: 1775389495666

// abi-note: 1775436999028

// abi-note: 1775510541165

// abi-note: 1775598292280

// abi-note: 1775642958822

// abi-note: 1775695240432

// abi-note: 1775710044290

// abi-note: 1775751320920
