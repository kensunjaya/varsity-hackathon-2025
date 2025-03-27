"use client";

import LoginWithMetaMask from "@/pages/LoginWithMetaMask";
import Navbar from "@/components/ui/navbar";

export default function LoginPage() {
  return (
    <>
      <Navbar pageName="Login" />
        <LoginWithMetaMask />
    </>
  );
}
