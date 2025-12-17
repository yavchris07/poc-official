"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useFetchWallets from "@/hooks/fetch-wallet";
import { Shield } from "lucide-react";

export default function LoadingAuthPage() {
  const router = useRouter();
  const { wallets, pending } = useFetchWallets();
  console.log('====',wallets)

  useEffect(() => {
    if (pending) return; // On attend les wallets

    if (wallets.length > 0) {
      router.push("/dashboard");
    } else {
      router.push("/connect");
    }
  }, [pending, wallets, router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-10 h-10 bg-linear-to-r from-blue-600 to-blue-400 rounded-xl flex items-center justify-center">
        <Shield className="w-6 h-6 text-blue-600" />
      </div>
      <p className="text-blue-600 text-lg">Proof of capacity</p>
      {/* <br /> */}
      <p className="text-gray-600 text-lg">Chargement de vos données...</p>
    </div>
  );
}
