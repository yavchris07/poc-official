"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { Lock, AlertCircle, BookUser } from "lucide-react";
import { useRouter } from "next/navigation";

const ConnectWallet = () => {
  const router = useRouter();
  // const [adress, setAdress] = useState("");
  const [token,setToken] = useState('');
  const [name, setName] = useState("");
  // const [network, setNetwork] = useState("preview");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  console.log('====',token)

  useEffect(() => {
    setToken(localStorage.getItem("auth_token") || "");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/wallets/create/`,
        {
          method: "POST",
          // credentials: "include",
          headers: {
            "content-Type": "application/json",
             "Authorization": `Token ${token}`
          },
          body: JSON.stringify({ name }),
        }
      );

      console.log("Login attempt:", name);

      if (!response.ok) {
        throw new Error("Create wallet failed");
      }

      const data = await response.json();
      console.log("Response data:", data);

      // Redirection temporaire pour la démo
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    } catch (err) {
      setError(`Erreur: ${err}`);
    } finally {
      setIsLoading(false);
    }
  };



  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-100 ">
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-linear-to-r from-cardano-blue to-cardano-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-blue-400" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Creation wallet
              </h1>
              <p className="text-gray-600">
                Pour etre certifié en NFTs via Proof of Capacity
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2 text-red-700">
                <AlertCircle className="w-5 h-5" />
                <span className="text-sm">{error}</span>
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* name */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nom de wallet
                </label>
                <div className="relative">
                  <BookUser className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    id="email"
                    name="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 text-gray-400 rounded-lg focus:ring-2 focus:ring-cardano-blue focus:border-cardano-blue transition-colors"
                    placeholder="votre adresse wallet"
                  />
                </div>
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between"></div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-linear-to-r from-cardano-blue to-cardano-light hover:from-cardano-light hover:to-cardano-blue text-white py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Creation...
                  </div>
                ) : (
                  "Creation wallet"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
