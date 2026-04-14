"use client";
import { useState, useEffect, useCallback } from "react";
import { injected, useAccount, useConnect } from "wagmi";

interface MiniPayState {
  isMiniPay: boolean;
  address: string | null;
  isConnected: boolean;
  connect: () => Promise<void>;
}

let hasAttemptedMiniPayAutoConnect = false;

export function useMiniPay(): MiniPayState {
  const [isMiniPay, setIsMiniPay] = useState(false);
  const { address, isConnected } = useAccount();
  const { connectAsync } = useConnect();

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).ethereum?.isMiniPay) {
      setIsMiniPay(true);
    }
  }, []);

  const connect = useCallback(async () => {
    if (!isMiniPay || isConnected) return;
    await connectAsync({ connector: injected({ target: "metaMask" }) });
  }, [connectAsync, isConnected, isMiniPay]);

  useEffect(() => {
    if (!isMiniPay || isConnected || hasAttemptedMiniPayAutoConnect) return;
    hasAttemptedMiniPayAutoConnect = true;
    void connect();
  }, [connect, isConnected, isMiniPay]);

  return { isMiniPay, address: address ?? null, isConnected, connect };
}

// minipay: 1775270134275

// minipay: 1775283335871

// minipay: 1775383204111

// minipay: 1775389628822

// minipay: 1775437034969

// minipay: 1775510585384

// minipay: 1775598240025

// minipay: 1775642956641

// minipay: 1775695106599

// minipay: 1775710193877

// minipay: 1775751313577

// minipay: 1775795682750

// minipay: 1775827247767

// minipay: 1775870601793

// minipay: 1775919339256

// minipay: 1775965653691

// minipay: 1776045591858

// minipay: 1776061910761

// minipay: 1776082793710

// minipay: 1776114954964

// minipay: 1776142899686

// minipay: 1776169686932
