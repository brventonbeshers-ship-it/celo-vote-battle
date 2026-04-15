import { CONTRACT_ADDRESS, CELO_RPC } from "./config";
import {
  VoteBattleClient,
  VOTE_BATTLE_ABI as SDK_ABI,
  POLLS as SDK_POLLS,
} from "celo-vote-battle-sdk";
export type { PollResults, VoterStats } from "celo-vote-battle-sdk";

const client = new VoteBattleClient({
  contractAddress: CONTRACT_ADDRESS,
  rpcUrl: CELO_RPC,
});

export const getPollResults = (pollId: number) => client.getPollResults(pollId);
export const getAllPollResults = () => client.getAllPollResults();
export const getVoterStats = (address: string) => client.getVoterStats(address);
export const getVoterPollStats = (address: string, pollId: number) =>
  client.getVoterPollStats(address, pollId);
export const getPolls = () => client.getPolls();
export { SDK_POLLS };

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

// abi-note: 1775795828027

// abi-note: 1775827482203

// abi-note: 1775870592272

// abi-note: 1775919327509

// abi-note: 1775965803313

// abi-note: 1776045477060

// abi-note: 1776061804012

// abi-note: 1776082864233

// abi-note: 1776115025299

// abi-note: 1776142799026

// abi-note: 1776169894142

// abi-note: 1776185178080

// abi-note: 1776214119154

// abi-note: 1776246857969
