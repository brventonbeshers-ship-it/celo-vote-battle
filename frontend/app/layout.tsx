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
      <body className="min-h-screen text-white antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
