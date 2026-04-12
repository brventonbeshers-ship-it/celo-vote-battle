"use client";
export default function StatsBar({ totalVotes, totalPolls }: { totalVotes: number; totalPolls: number }) {
  return (
    <div className="flex justify-center gap-6 mb-8 text-sm text-gray-400">
      <span>{totalPolls} polls</span>
      <span>{totalVotes.toLocaleString()} total votes</span>
    </div>
  );
}

// statsbar: 1775827390667

// statsbar: 1775870596623

// statsbar: 1775919246581

// statsbar: 1775965794745
