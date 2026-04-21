export const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "0xa4a58f507359cA596306701837F5c48c3E9BF864";
export const CELO_RPC = "https://forno.celo.org";
export const CELO_CHAIN_ID = 42220;
export const MINIPAY_FEE_CURRENCY = "0x765DE816845861e75A25fCA122bb6898B8B1282a" as const;

export function shortenAddress(addr: string, head = 6, tail = 4): string {
  if (!addr) return "";
  return `${addr.slice(0, head)}...${addr.slice(-tail)}`;
}

export function formatNumber(n: number): string {
  return n.toLocaleString();
}

export function calcPercent(votes: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((votes / total) * 100);
}

// cfg: 1775237421306

// cfg: 1775270148447

// cfg: 1775283099030

// cfg: 1775383151012

// cfg: 1775389531751

// cfg: 1775436841584

// cfg: 1775510470254

// cfg: 1775598334171

// cfg: 1775643042437

// cfg: 1775695111790

// cfg: 1775710135508

// cfg: 1775751368882

// cfg: 1775795790230

// cfg: 1775827301535

// cfg: 1775870537528

// cfg: 1775919200897

// cfg: 1775965854486

// cfg: 1776045581321

// cfg: 1776061758504

// cfg: 1776082798893

// cfg: 1776114949774

// cfg: 1776142628127

// cfg: 1776169621090

// cfg: 1776185218263

// cfg: 1776214292622

// cfg: 1776246873504

// cfg: 1776255499572

// cfg: 1776268564876

// cfg: 1776314383512

// cfg: 1776348502078

// cfg: 1776399990462

// cfg: 1776430682956

// cfg: 1776458589634

// cfg: 1776477960561

// cfg: 1776491974501

// cfg: 1776516503929

// cfg: 1776548190142

// cfg: 1776583615925

// cfg: 1776617573934

// cfg: 1776642848665

// cfg: 1776670437634

// cfg: 1776677897709

// cfg: 1776699909795

// cfg: 1776749890499

// cfg: 1776779498414
