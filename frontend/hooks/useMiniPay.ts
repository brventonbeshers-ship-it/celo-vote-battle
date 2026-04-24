"use client";
import { useState, useEffect, useCallback } from "react";
import { useAccount, useConnect } from "wagmi";

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
  const { connectAsync, connectors } = useConnect();

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).ethereum?.isMiniPay) {
      setIsMiniPay(true);
    }
  }, []);

  const connect = useCallback(async () => {
    if (!isMiniPay || isConnected) return;
    const connector = connectors.find((item) => item.id === "injected") ?? connectors[0];
    if (!connector) return;
    try {
      await connectAsync({ connector });
    } catch (error) {
      console.warn("MiniPay connection failed", error);
    }
  }, [connectAsync, connectors, isConnected, isMiniPay]);

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

// minipay: 1776185115879

// minipay: 1776214352417

// minipay: 1776246917830

// minipay: 1776255584286

// minipay: 1776268709997

// minipay: 1776314439887

// minipay: 1776329928864

// minipay: 1776348546029

// minipay: 1776371715263

// minipay: 1776399995655

// minipay: 1776430856099

// minipay: 1776458271645

// minipay: 1776478225003

// minipay: 1776492231741

// minipay: 1776516556750

// minipay: 1776548100902

// minipay: 1776583556572

// minipay: 1776617468853

// minipay: 1776642786955

// minipay: 1776670545176

// minipay: 1776677708172

// minipay: 1776699709895

// minipay: 1776749849276

// minipay: 1776779332845

// minipay: 1776802662628

// minipay: 1776815872377

// minipay: 1776832710659

// minipay: 1776861303051

// minipay: 1776874570260

// minipay: 1776887948034

// minipay: 1776937346492

// minipay: 1776960526663

// minipay: 1776999927329

// minipay: 1777023146709

// minipay: 1777035761292

// minipay: 1777064929127
