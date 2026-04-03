"use client";
import { useState, useEffect } from "react";

export function useMiniPay() {
  const [isMiniPay, setIsMiniPay] = useState(false);

  useEffect(() => {
    const checkMiniPay = () => {
      if (typeof window !== "undefined" && (window as any).ethereum?.isMiniPay) {
        setIsMiniPay(true);
      }
    };
    checkMiniPay();
  }, []);

  return isMiniPay;
}
