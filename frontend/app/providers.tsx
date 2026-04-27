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

// providers: 1776330004583

// providers: 1776348632865

// providers: 1776371661023

// providers: 1776400000038

// providers: 1776430815339

// providers: 1776458321115

// providers: 1776478110416

// providers: 1776492233991

// providers: 1776516709117

// providers: 1776547928562

// providers: 1776583733116

// providers: 1776617645961

// providers: 1776642737010

// providers: 1776670738866

// providers: 1776677800567

// providers: 1776699681154

// providers: 1776749878731

// providers: 1776779426486

// providers: 1776802836401

// providers: 1776815853479

// providers: 1776832728875

// providers: 1776861453506

// providers: 1776874718652

// providers: 1776887955530

// providers: 1776937339001

// providers: 1776960614482

// providers: 1776999754672

// providers: 1777023254842

// providers: 1777035750809

// providers: 1777065065192

// providers: 1777101867651

// providers: 1777117776597

// providers: 1777167419425

// providers: 1777182282708

// providers: 1777213151095

// providers: 1777235733704

// providers: 1777276837513
