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

// layout: 1775436811513

// layout: 1775510531645

// layout: 1775598247392

// layout: 1775643085558

// layout: 1775695073280

// layout: 1775710137692

// layout: 1775751422860

// layout: 1775795696290

// layout: 1775827402350

// layout: 1775870508510

// layout: 1775919344442

// layout: 1775965663084

// layout: 1776045637514

// layout: 1776062052022

// layout: 1776082976493

// layout: 1776114936028

// layout: 1776142806372

// layout: 1776169639498

// layout: 1776184990206

// layout: 1776214262199

// layout: 1776246788644

// layout: 1776255446369

// layout: 1776268759170

// layout: 1776314564929

// layout: 1776348556590

// layout: 1776371615068

// layout: 1776399942879

// layout: 1776430779464

// layout: 1776458315762

// layout: 1776478264036

// layout: 1776492031300

// layout: 1776516719589

// layout: 1776547923332

// layout: 1776583545812
