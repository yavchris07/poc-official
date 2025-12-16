"use client";
import React, { useEffect, useState } from "react";
import { Play, CheckCircle, Copy } from "lucide-react";
import useFetchWallets, { Wallet } from "@/hooks/fetch-wallet";
import Link from "next/link";
import useFetchCours from "@/hooks/fetch-cours";

const COURSES = {
  Blockchain: {
    title: "Introduction à la Blockchain",
    description: "Cours vidéo simplifié pour comprendre la logique blockchain.",
    videoUrl: "", // tu vas le remplacer
  },
  Web3: {
    title: "Comprendre le Web3",
    description: "Les bases du Web3 en 30 secondes.",
    videoUrl: "",
  },
  Cardano: {
    title: "Découvrir Cardano",
    description: "Cours rapide sur l'écosystème Cardano.",
    videoUrl: "",
  },
  NFT: {
    title: "NFT en 30 secondes",
    description: "Les essentiels pour comprendre les NFTs.",
    videoUrl: "",
  },
};

export default function FormationThemes() {
  const [selected, setSelected] = useState<keyof typeof COURSES | null>(null);
  const [man1, setMan1] = useState("");
  const [man2, setMan2] = useState("");
  // const [user] = useState(userData);

  const { wallets } = useFetchWallets();
  const { cours } = useFetchCours();

  console.log("Course", cours);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    window.alert("Adresse copiée avec succès !");
  };

  // Charger le nom
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMan1(localStorage.getItem("man1") || "");
    setMan2(localStorage.getItem("man2") || "");
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO */}
      <div className="bg-linear-to-r from-blue-400 to-blue-600 p-8 text-white mb-6">
        <h1 className="text-3xl text-gray-200 font-bold">
          Bon retour, {man1} {man2} 👋
        </h1>

        <div className="mt-4">
          {wallets &&
            wallets.slice(0, 1).map((w: Wallet) => (
              <div key={w.id} className="flex justify-between">
                <span className="text-gray-200">
                  <p className="text-blue-200 text-lg">Mon Wallet :</p>
                  {w.payment_address.substring(0, 67)}...
                </span>
                <button onClick={() => copyToClipboard(w.payment_address)}>
                  <Copy className="w-4 h-4 text-white" />
                </button>
              </div>
            ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-md p-6 border border-gray-200 mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          📚 Formations — (par Modules)
        </h1>

        {/* Liste des cours */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {Object.keys(COURSES).map((key: string) => (
            <button
              key={key}
              onClick={() => setSelected(key as keyof typeof COURSES)}
              className={`px-4 py-2 rounded-full text-white text-sm font-medium transition-all bg-linear-to-r from-blue-400 to-blue-600 hover:opacity-90 ${
                selected === key ? "ring-2 ring-blue-500 ring-offset-2" : ""
              }`}
            >
              {key}
            </button>
          ))}
        </div>

        {/* Zone formation */}
        {selected ? (
          <div className="mt-6 p-5 border border-gray-200 rounded-xl bg-gray-50">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {COURSES[selected].title}
            </h2>
            <p className="text-gray-600 mb-4">
              {COURSES[selected].description}
            </p>

            {/* Player vidéo */}
            <div className="w-full aspect-video bg-black rounded-lg flex items-center justify-center text-white">
              {COURSES[selected].videoUrl ? (
                <video
                  src={COURSES[selected].videoUrl}
                  controls
                  className="w-full h-full rounded-lg"
                />
              ) : (
                <div className="flex flex-col items-center text-gray-300">
                  <Play className="w-12 h-12 mb-3" />
                  <span>Vidéo en cours d&apos;upload...</span>
                </div>
              )}
            </div>

            {/* Bouton pour passer au test */}
            <button
              onClick={() => (window.location.href = `/test?theme=${selected}`)}
              className="mt-5 flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow"
            >
              Commencer le test
              <CheckCircle className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <p className="text-gray-500 text-center mt-10">
            Sélectionne un thème pour commencer la formation.
          </p>
        )}

        <div></div>

        <div className="bg-white rounded-xl mt-6 p-6 border shadow-sm">
          <div className="flex gap-3">
            <Link
              href="/dashboard"
              className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm"
            >
              Accueil
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
