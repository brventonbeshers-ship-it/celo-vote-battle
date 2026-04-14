export function pluralize(n: number, word: string, plural?: string): string {
  return n === 1 ? word : (plural || word + "s");
}
export function timeAgo(timestamp: number): string {
  const diff = Math.floor(Date.now() / 1000) - timestamp;
  if (diff < 60) return "just now";
  if (diff < 3600) return Math.floor(diff / 60) + "m ago";
  return Math.floor(diff / 86400) + "d ago";
}

// fmt: 1775827292980

// fmt: 1775870669226

// fmt: 1775919406809

// fmt: 1775965822205

// fmt: 1776045572970

// fmt: 1776062059687

// fmt: 1776083043184

// fmt: 1776115029503

// fmt: 1776142749199
