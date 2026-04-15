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

// statsbar: 1776045683006

// statsbar: 1776061819098

// statsbar: 1776082963763

// statsbar: 1776115152224

// statsbar: 1776142683117

// statsbar: 1776169890799

// statsbar: 1776184944381

// statsbar: 1776214294797

// statsbar: 1776246848626

// statsbar: 1776255313619

// statsbar: 1776268815630
