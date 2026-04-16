"use client";

import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { config } from "@/lib/wagmi";
import "@rainbow-me/rainbowkit/styles.css";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={darkTheme({
            accentColor: "#35D07F",
            accentColorForeground: "white",
            borderRadius: "large",
          })}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

// providers: 1775237640831

// providers: 1775270427877

// providers: 1775283367579

// providers: 1775383146826

// providers: 1775389658607

// providers: 1775437032786

// providers: 1775510523288

// providers: 1775598338352

// providers: 1775643047626

// providers: 1775695318535

// providers: 1775710093239

// providers: 1775751366710

// providers: 1775795956693

// providers: 1775827435694

// providers: 1775870594456

// providers: 1775919237050

// providers: 1775965677646

// providers: 1776045534961

// providers: 1776061863814

// providers: 1776082781178

// providers: 1776115183916

// providers: 1776142680928

// providers: 1776169705258

// providers: 1776184942214

// providers: 1776214275738

// providers: 1776246801554

// providers: 1776255572717

// providers: 1776268617452

// providers: 1776314559754
