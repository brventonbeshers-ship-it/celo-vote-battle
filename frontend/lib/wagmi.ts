import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { celo } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "Celo Vote Battle",
  projectId: "a]b1c2d3e4f5g6h7i8j9k0l1m2n3o4p5",
  chains: [celo],
  ssr: true,
});
