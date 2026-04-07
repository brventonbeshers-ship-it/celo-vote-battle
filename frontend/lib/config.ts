export const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "0xa4a58f507359cA596306701837F5c48c3E9BF864";
export const CELO_RPC = "https://forno.celo.org";
export const CELO_CHAIN_ID = 42220;

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
