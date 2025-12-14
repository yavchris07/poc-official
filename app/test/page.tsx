// "use client";
// import useFetchWallets from "@/hooks/fetch-wallet";
// import { Award, Copy, MapPin } from "lucide-react";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";

// const userData = {
//   // name: "Jean Kabasele",
//   location: "Goma",
//   progress: 0,
//   certifications: 0,
//   completedCourses: 0,
//   totalCourses: 5,
//   skills: ["Blockchain", "Cardano", "NFT", "Web3"],
// };

// const TestCompet = () => {
//   const [man1, setMan1] = useState("");
//   const [man2, setMan2] = useState("");
//   // const [man3, setMan3] = useState("");

//   const [user] = useState(userData);

//   const { wallets } = useFetchWallets();
//   console.log("Wallet", wallets);

//   useEffect(() => {
//     // eslint-disable-next-line react-hooks/set-state-in-effect
//     setMan1(localStorage.getItem("man1") || "");
//     setMan2(localStorage.getItem("man2") || "");
//     // setMan3(localStorage.getItem("man") || "");
//   }, []);

//   const copyToClipboard = (text: string) => {
//     navigator.clipboard.writeText(text);
//     window.alert("Adresse copie avec succes !");
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="space-y-2 bg-white">
//         {/* Hero */}
//         <div className="bg-linear-to-r from-blue-400 to-blue-600 p-8 text-white">
//           <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
//             <div>
//               <h1 className="text-3xl text-gray-400 font-bold mb-2">
//                 Bon retour, {man1} {man2}! 👋
//               </h1>
//               <p className="text-blue-300 text-lg">
//                 Continuez votre parcours vers la certification blockchain
//               </p>
//               <div className="flex items-center mt-4 space-x-4 text-sm">
//                 <div className="flex items-center space-x-1">
//                   <MapPin className="w-4 h-4 bg-amber-950" />
//                   <span className="text-gray-400">{user.location}</span>
//                 </div>
//                 <div className="flex items-center space-x-1">
//                   <Award className="w-4 h-4 bg-amber-950" />
//                   <span className="text-gray-400">
//                     {user.certifications} certifications
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-4 lg:mt-0 bg-gray-300 rounded-lg p-4 backdrop-blur-sm">
//               <div className="text-center">
//                 <div className="text-2xl text-gray-500 font-bold">{0}%</div>
//                 <div className="text-blue-500 text-sm">Progression globale</div>
//               </div>
//             </div>
//           </div>
//           <div className="mt-6">
//             {/* <p className="text-blue-500 text-lg"> */}{" "}
//             {wallets &&
//               wallets.slice(0, 1).map((wallet) => (
//                 <div key={wallet.id} className="flex justify-between">
//                   <span key={wallet.id} className="text-gray-500">
//                     <p className="text-blue-500 text-lg">Mon Wallet adress :</p>{" "}
//                     {wallet.payment_address.substring(0, 67)}...
//                   </span>
//                   <button
//                     onClick={() => copyToClipboard(wallet.payment_address)}
//                     className="text-gray-400 hover:text-gray-600 p-1"
//                     title="Copier l'adresse"
//                   >
//                     <Copy className="w-3 h-3 text-blue-600 cursor-pointer" />
//                   </button>
//                 </div>
//               ))}
//             {/* </p> */}
//           </div>
//         </div>

//         {/* test */}
//         <div className="bg-white rounded-xl m-6 p-6 shadow-sm border border-gray-200">
//           <h2 className="text-xl font-bold text-gray-900 mb-6">
//             Choisir le domaine
//           </h2>
//           <div className="flex flex-wrap gap-3">
//             {user.skills.map((skill, index) => (
//               <div
//                 key={index}
//                 className="px-4 py-2 bg-linear-to-r from-blue-400 to-blue-600 text-white rounded-full text-sm font-medium"
//               >
//                 {skill}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* footer */}

//         <div className="bg-white rounded-xl m-6 p-6 shadow-sm border border-gray-200 space-x-2">
//           <div className="flex flex-wrap gap-3">
//             <div className="px-4 py-2 bg-linear-to-r from-blue-400 to-blue-600 text-white rounded-full text-sm font-medium">
//               <Link href="/dashboard">Accueil</Link>
//             </div>
//             <div className="px-4 py-2 bg-linear-to-r from-blue-400 to-blue-600 text-white rounded-full text-sm font-medium">
//               <Link href="/formation">Test</Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestCompet;

"use client";
import useFetchWallets, { Wallet } from "@/hooks/fetch-wallet";
import { Copy } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const userData = {
  location: "Goma",
  certifications: 0,
  skills: ["Blockchain", "Cardano", "NFT", "Web3"],
};

type Question = {
  q: string;
  type: "qcm" | "text";
  choices?: string[];
  answer: number | string;
};

// --------------------
// QUESTIONS PAR DOMAINE
// --------------------

const QUESTIONS: Record<string, Question[]> = {
  Blockchain: [
    {
      q: "1. Une blockchain est…",
      type: "qcm",
      choices: [
        "Une base de données décentralisée",
        "Un réseau social",
        "Un antivirus",
      ],
      answer: 0,
    },
    {
      q: "2. Le consensus sert à…",
      type: "qcm",
      choices: [
        "Vérifier les transactions",
        "Faire des vidéos",
        "Envoyer des emails",
      ],
      answer: 0,
    },
    {
      q: "3. Un bloc contient…",
      type: "text",
      answer: "transactions",
    },
    {
      q: "4. Bitcoin utilise…",
      type: "qcm",
      choices: ["Proof of Work", "Proof of Space", "Proof of Talk"],
      answer: 0,
    },
    {
      q: "5. Une adresse wallet sert à…",
      type: "text",
      answer: "recevoir",
    },
  ],

  Web3: [
    {
      q: "1. Le Web3 met l’accent sur…",
      type: "qcm",
      choices: ["La décentralisation", "Les réseaux sociaux", "La publicité"],
      answer: 0,
    },
    {
      q: "2. Un smart contract est…",
      type: "qcm",
      choices: ["Un programme autonome", "Un PDF", "Une signature manuscrite"],
      answer: 0,
    },
    {
      q: "3. Le token natif d'Ethereum est…",
      type: "text",
      answer: "eth",
    },
    {
      q: "4. Web3 permet…",
      type: "qcm",
      choices: ["La propriété numérique", "Les SMS", "Les emails"],
      answer: 0,
    },
    {
      q: "5. Une DAO est…",
      type: "text",
      answer: "organisation",
    },
  ],
  // -----------------------
  // 📌 TEST CARDANO
  // -----------------------
  Cardano: [
    {
      q: "1. Quel est le mécanisme de consensus principal de Cardano ?",
      type: "qcm",
      choices: [
        "Proof of Work",
        "Proof of Stake (Ouroboros)",
        "Proof of History",
      ],
      answer: 1,
    },
    {
      q: "2. Quel est le nom du token natif de Cardano ?",
      type: "qcm",
      choices: ["ADA", "SOL", "DOT"],
      answer: 0,
    },
    {
      q: "3. Qui est le fondateur principal de Cardano ?",
      type: "qcm",
      choices: ["Vitalik Buterin", "Charles Hoskinson", "Gavin Wood"],
      answer: 1,
    },
    {
      q: "4. Que représente un ‘policy ID’ sur Cardano ?",
      type: "text",
      answer: "identifiant",
    },
    {
      q: "5. Dans Cardano, les smart contracts sont écrits en…",
      type: "qcm",
      choices: ["Solidity", "Plutus", "Move"],
      answer: 1,
    },
  ],

  // -----------------------
  // 📌 TEST NFT
  // -----------------------
  NFT: [
    {
      q: "1. Que signifie NFT ?",
      type: "qcm",
      choices: [
        "Non-Fungible Token",
        "New Financial Transaction",
        "Network File Transfer",
      ],
      answer: 0,
    },
    {
      q: "2. À quoi sert un NFT ?",
      type: "qcm",
      choices: [
        "Représenter la propriété numérique",
        "Envoyer des emails",
        "Miner du Bitcoin",
      ],
      answer: 0,
    },
    {
      q: "3. Un NFT est généralement stocké dans…",
      type: "qcm",
      choices: ["Une blockchain", "Une base SQL", "Un disque dur externe"],
      answer: 0,
    },
    {
      q: "4. L’image d’un NFT est souvent stockée sur…",
      type: "text",
      answer: "ipfs",
    },
    {
      q: "5. Un NFT peut être…",
      type: "qcm",
      choices: ["Unique", "Fongible", "Identique à un token ERC-20"],
      answer: 0,
    },
  ],
};

const TestCompet = () => {
  const [man1, setMan1] = useState("");
  const [man2, setMan2] = useState("");
  const [user] = useState(userData);

  const { wallets } = useFetchWallets();

  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [result, setResult] = useState<null | boolean>(null);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState("");

  // Questions dynamiques
  const questions = selectedSkill ? QUESTIONS[selectedSkill] || [] : [];

  // -------- COPY WALLET ----------
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    window.alert("Adresse copiée avec succès !");
  };

  useEffect(() => {
    setToken(localStorage.getItem("auth_token") || "");
  }, []);

  // -------- Vérifier test ----------
  const submitTest = async () => {
    let score = 0;

    questions.forEach((q: Question, i: number) => {
      const userAns = answers[i];

      if (q.type === "qcm" && Number(userAns) === q.answer) score++;

      if (
        q.type === "text" &&
        userAns &&
        userAns.toLowerCase().includes(String(q.answer).toLowerCase())
      )
        score++;
    });

    const success = score >= 4;
    setResult(success);

    // Si pas réussi → stop
    if (!success) return;

    // NFT Certification
    const walletId = wallets?.[0]?.id;

    if (!walletId) {
      alert("Wallet non trouvé !");
      return;
    }

    try {
      setLoading(true);

      await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/nft/${walletId}/nfts/certification/`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify({
            skill: selectedSkill,
            score,
          }),
        }
      );

      alert("🎉 Certification NFT créée !");
    } catch (err) {
      console.error(err);
      alert("Erreur lors de la création du NFT.");
    } finally {
      setLoading(false);
    }
  };

  // Charger le nom
  useEffect(() => {
    setMan1(localStorage.getItem("man1") || "");
    setMan2(localStorage.getItem("man2") || "");
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white space-y-2">
        {/* HERO */}
        <div className="bg-linear-to-r from-blue-400 to-blue-600 p-8 text-white">
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

        {/* SKILLS */}
        <div className="bg-white rounded-xl m-6 p-6 shadow-sm border">
          <h2 className="text-xl text-gray-700 font-bold mb-6">
            Choisir le domaine
          </h2>

          <div className="flex flex-wrap gap-3">
            {user.skills.map((skill, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedSkill(skill);
                  setAnswers({});
                  setResult(null);
                }}
                className="px-4 py-2 bg-linear-to-r from-blue-400 to-blue-600 text-white rounded-full text-sm font-medium"
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

        {/* TEST */}
        {selectedSkill && (
          <div className="bg-white rounded-xl m-6 p-6 border shadow-sm">
            <h3 className="text-gray-400 text-lg font-bold mb-4">
              Test de certification : {selectedSkill}
            </h3>

            {questions.map((q: Question, index: number) => (
              <div key={index} className="mb-5">
                <p className="font-medium text-blue-600">{q.q}</p>

                {q.type === "qcm" ? (
                  <div className="mt-2 space-y-1">
                    {q.choices?.map((choice: string, i: number) => (
                      <label
                        key={i}
                        className="flex items-center gap-2 text-gray-400"
                      >
                        <input
                          type="radio"
                          name={`q-${index}`}
                          value={i}
                          onChange={(e) =>
                            setAnswers({ ...answers, [index]: e.target.value })
                          }
                        />
                        {choice}
                      </label>
                    ))}
                  </div>
                ) : (
                  <input
                    type="text"
                    placeholder="Votre réponse"
                    className="border p-2 rounded mt-2 w-full text-gray-600"
                    onChange={(e) =>
                      setAnswers({ ...answers, [index]: e.target.value })
                    }
                  />
                )}
              </div>
            ))}

            <button
              onClick={submitTest}
              disabled={loading}
              className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
              {loading ? "Création NFT..." : "Valider le test"}
            </button>

            {result !== null && (
              <p className="mt-3 text-lg text-gray-400 font-bold">
                {result
                  ? "🎉 Test réussi !"
                  : "❌ Score insuffisant (min. 4/5)"}
              </p>
            )}
          </div>
        )}

        {/* FOOTER */}
        <div className="bg-white rounded-xl p-6 border shadow-sm">
          <div className="flex gap-3">
            <Link
              href="/dashboard"
              className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm"
            >
              Accueil
            </Link>
            <Link
              href="/formation"
              className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm"
            >
              Formation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestCompet;
