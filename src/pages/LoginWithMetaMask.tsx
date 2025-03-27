"use client";

import { useState } from "react";
import { ethers } from "ethers";
import Image from "next/image";
import {Separator} from "@radix-ui/react-separator";

declare global {
  interface Window {
    ethereum?: import("@metamask/providers").MetaMaskInpageProvider;
  }
}

const LoginWithMetaMask = () => {
  const [account, setAccount] = useState<string | null>(null);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("🚨 MetaMask not detected. Please install it in your browser!");
      return;
    }
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      setAccount(accounts[0]);
    } catch (error: unknown) {
      if (
        error instanceof Error &&
        (error as { code?: string }).code === "ACTION_REJECTED"
      ) {
        alert("⚠️ Login failed: You rejected the MetaMask access request.");
      } else {
        console.error("Login failed:", error);
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-sixth text-white">
      <div className="flex flex-col items-center space-y-6 border-2 border-primary p-5 bg-white rounded-xl">
        <h1 className={`text-primary text-2xl font-bold`}>Login to DecentraFund</h1>
        <button
          onClick={connectWallet}
          className="flex items-center gap-3 px-6 py-3 rounded-lg border border-primary text-yellow-600 font-semibold transition-all
                    bg-white hover:bg-yellow-500 hover:text-white active:scale-95"
        >
          <Image
            src="/MetaMask.png"
            alt="MetaMask logo"
            width={28}
            height={28}
            priority
          />
          {account
            ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}`
            : "Continue with MetaMask"}
        </button>
      </div>
    </div>
  );
};

export default LoginWithMetaMask;
