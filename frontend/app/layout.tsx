import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Celo Vote Battle — On-chain A vs B Polls",
  description: "Vote on 20 A-vs-B polls on the Celo blockchain. Permanent, transparent results powered by smart contracts.",
  openGraph: {
    title: "Celo Vote Battle",
    description: "On-chain voting battles on Celo. 20 polls, permanent results.",
    images: ["/og.png"],
  },
  other: {
    "talent-protocol-verification": "celo-vote-battle",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="talentapp:project_verification" content="1af1a8050d94b0342088e20b6822f97560bdf275dc08072320fb3a5cf992a9df4179de657ac6f67b912e2e40b5ec3cfd69ee29c1dab28cfb43ec65e00230b6e9" />
      </head>
      <body className="min-h-screen text-white antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

// layout: 1775237889319

// layout: 1775269985621

// layout: 1775283162348

// layout: 1775383137631

// layout: 1775389537936
