// "use client";
// import { useRouter } from "next/navigation";
// export default function Home() {
//   const route = useRouter();
//   const date = new Date();

//   return (
//     <div className="min-h-screen bg-zinc-50 font-san">
//       <nav className="border-b border-gray-100">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-2">
//               <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
//                 P
//               </div>
//               <span className="text-xl font-bold bg-linear-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                 Proof of Capacity
//               </span>
//             </div>

//             <div className="flex items-center space-x-4">
//               <a
//                 href="#features"
//                 className="text-gray-600 hover:text-gray-900 transition-colors"
//               >
//                 About us
//               </a>
//               <a
//                 href="#pricing"
//                 className="text-gray-600 hover:text-gray-900 transition-colors"
//               >
//                 Contact
//               </a>
//               <button
//                 className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
//                 onClick={() => route.replace("/auth/signin")}
//               >
//                 Start
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/*  */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 text-center">
//           <div className="max-w-4xl mx-auto">
//             <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
//               Prouvez ta competence.
//               <span className="block bg-linear-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                 Augmenetez votre chance d&apos;etre embaucher.
//               </span>
//             </h1>

//             <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
//               Proof of capacity est une plateforme qui vous permet de prouver la
//               competence et d&apos;augmenter votre chance d&apos;etre embaucher,
//               non par affinite, ni reseau d&apos;influence mais uniquement par
//               merite
//             </p>

//             {/* Trust Badges */}
//             <div className="flex items-center justify-center gap-8 text-gray-500 text-sm">
//               <div className="flex items-center gap-2">
//                 {/* <Shield className="w-4 h-4" /> */}
//                 <span>Plateforme fiable</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 {/* <Zap className="w-4 h-4" /> */}
//                 <span>Certification via NTFs</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 {/* <Infinity className="w-4 h-4" /> */}
//                 <span>Paiement via ADA</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/*  */}

//       {/*  */}

//       {/* Footer */}
//       <footer className="py-12 border-t border-gray-100">
//         <div className="container mx-auto px-4 ">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-2">
//               <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
//                 P
//               </div>
//               <span className="text-lg font-bold bg-linear-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                 Proof of capacity
//               </span>
//             </div>
//             <div className="text-gray-500 text-sm">
//               © {date.getFullYear()} | Trouvez le job selon le merite
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// import { Button } from '@/components/ui/button';
// import Link from 'next/link';
// // import { Button } from '@/components/ui/Button';

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100">
//       {/* Header */}
//       <header className="bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
//           <div className="flex items-center space-x-2">
//             <div className="w-8 h-8 bg-cardano-blue rounded-full"></div>
//             <span className="text-xl font-bold text-gray-900">
//               Proof of Capacity
//             </span>
//           </div>
//           <div className="space-x-4">
//             <Link href="/login">
//               <Button variant="outline">Connexion</Button>
//             </Link>
//             <Link href="/register">
//               <Button>Inscription</Button>
//             </Link>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <main className="max-w-7xl mx-auto px-4 py-16">
//         <div className="text-center">
//           <h1 className="text-5xl font-bold text-gray-900 mb-6">
//             La compétence, ça se <span className="text-cardano-blue">prouve</span>
//           </h1>
//           <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
//             Plateforme décentralisée de certification des compétences sur Cardano.
//             Formez-vous, obtenez votre NFT certificat et rejoignez la base de talents de Goma.
//           </p>
//           <div className="space-x-4">
//             <Link href="/register">
//               <Button size="lg">Commencer gratuitement</Button>
//             </Link>
//             <Link href="/training">
//               <Button variant="outline" size="lg">Voir les formations</Button>
//             </Link>
//           </div>
//         </div>

//         {/* Features */}
//         <div className="grid md:grid-cols-3 gap-8 mt-20">
//           <div className="text-center p-6">
//             <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <span className="text-2xl">🎓</span>
//             </div>
//             <h3 className="text-lg font-semibold mb-2">Formation gratuite</h3>
//             <p className="text-gray-600">Accédez à des cours en ligne sur Cardano et la blockchain</p>
//           </div>

//           <div className="text-center p-6">
//             <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <span className="text-2xl">🪪</span>
//             </div>
//             <h3 className="text-lg font-semibold mb-2">Certification NFT</h3>
//             <p className="text-gray-600">Obtenez un certificat immuable sur la blockchain Cardano</p>
//           </div>

//           <div className="text-center p-6">
//             <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <span className="text-2xl">💼</span>
//             </div>
//             <h3 className="text-lg font-semibold mb-2">Opportunités</h3>
//             <p className="text-gray-600">Rejoignez la base de talents visible par les projets Catalyst</p>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

import Link from "next/link";
import {
  GraduationCap,
  Shield,
  Users,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-linear-to-r from-cardano-blue to-cardano-light rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold bg-linear-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  Proof of Capacity
                </span>
                <p className="text-xs text-gray-500">Powered by Cardano</p>
              </div>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="#features"
                className="text-gray-700 hover:text-cardano-blue transition-colors"
              >
                Fonctionnalités
              </Link>
              <Link
                href="#how-it-works"
                className="text-gray-700 hover:text-cardano-blue transition-colors"
              >
                Comment ça marche
              </Link>
              <Link
                href="#impact"
                className="text-gray-700 hover:text-cardano-blue transition-colors"
              >
                Impact
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <Link href="/auth/signin">
                <Button variant="ghost" className="text-gray-700">
                  Connexion
                </Button>
              </Link>
              <Link href="#">
                <Button className="bg-linear-to-r from-blue-600 to-blue-400 hover:from-blue-400 hover:to-blue-400">
                  Commencer gratuitement
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20">
        {" "}
        <div className="container mx-auto px-4 text-center">
          {" "}
          <div className="max-w-6xl mx-auto">
            {" "}
            <div className="inline-flex items-center px-4 py-2 mt-14 mb-12 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
               Projet Pilote - Ville de Goma & Nyiragongo
            </div>
            <h1 className="text-4xl mb-14 md:text-5xl font-bold text-gray-900">
              Prouvez ta competence.
              <span className="block bg-linear-to-br from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Augmenetez votre chance d&apos;etre embaucher.
              </span>{" "}
            </h1>{" "}
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Proof of capacity est une plateforme qui vous permet de prouver la
              competence et d&apos;augmenter votre chance d&apos;etre embaucher,
              non par affinite, ni reseau d&apos;influence mais uniquement par
              merite{" "}
            </p>
            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-8 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                {/* <Shield className="w-4 h-4" /> */}
                <span>Plateforme fiable</span>
              </div>
              <div className="flex items-center gap-2">
                {/* <Zap className="w-4 h-4" /> */}
                <span>Certification via NTFs</span>
              </div>
              <div className="flex items-center gap-2">
                {/* <Infinity className="w-4 h-4" /> */}
                <span>Paiement via ADA</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                 
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  La compétence
                  <span className="block bg-linear-to-r from-cardano-blue to-cardano-light bg-clip-text text-transparent">
                    mérite sa chance
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Plateforme décentralisée de certification sur Cardano.
                  Formez-vous gratuitement, obtenez votre{" "}
                  <strong>NFT certificat</strong> et rejoignez la première base
                  de talents vérifiés de la RDC.
                </p>
              </div>

              <div className="flex items-center sm:flex-row gap-4">
                <Link href="/auth/signup">
                  <Button
                    size="lg"
                    className="bg-linear-to-r from-cardano-blue to-cardano-light hover:from-cardano-light hover:to-cardano-blue text-white px-8 py-4 text-lg"
                  >
                    <GraduationCap className="w-5 h-5 mr-2" />
                    Commencer la formation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                {/* <Link href="#how-it-works">
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-8 py-4 text-lg border-2"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Voir la démo
                  </Button>
                </Link> */}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cardano-blue">
                    2 000+
                  </div>
                  <div className="text-sm text-gray-600">Jeunes visés</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cardano-blue">
                    100%
                  </div>
                  <div className="text-sm text-gray-600">Gratuit</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cardano-blue">
                    NFT
                  </div>
                  <div className="text-sm text-gray-600">Certification</div>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image/Illustration */}
            <div className="relative">
              <div className="bg-linear-to-br from-cardano-blue/10 to-cardano-light/20 rounded-2xl p-8 border border-blue-200/50 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4">
                  {/* NFT Certificate Preview */}
                  <div className="bg-white rounded-xl p-4 shadow-lg border">
                    <div className="w-12 h-12 bg-linear-to-r bg-blue-400 from-cardano-blue to-cardano-light rounded-lg flex items-center justify-center mb-3">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900">
                      NFT Certificat
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Preuve immuable
                    </p>
                  </div>

                  {/* Training Preview */}
                  <div className="bg-white rounded-xl p-4 shadow-lg border">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-3">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900">Formation</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      5 modules gratuits
                    </p>
                  </div>

                  {/* Talent Pool Preview */}
                  <div className="bg-white rounded-xl p-4 shadow-lg border">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-3">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900">
                      Base de Talents
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Visibilité projets
                    </p>
                  </div>

                  {/* Cardano Integration */}
                  <div className="bg-white rounded-xl p-4 shadow-lg border">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-3">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900">Cardano</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Blockchain secure
                    </p>
                  </div>
                </div>

                {/* Callout */}
                <div className="mt-6 bg-linear-to-r from-cardano-blue to-cardano-light rounded-lg p-4 text-white text-center">
                  <p className="font-semibold">
                    🚀 Déjà +50 jeunes en attente de certification
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Une solution <span className="text-cardano-blue">complète</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              De la formation à l&apos;emploi, en passant par la certification
              blockchain
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-gray-200 hover:border-cardano-blue/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-linear-to-r from-cardano-blue to-cardano-light rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comment ça <span className="text-cardano-blue">marche</span> ?
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative">
                  <div className="w-20 h-20 bg-white border-2 border-cardano-blue rounded-full flex items-center justify-center mx-auto mb-4 text-blue-400 font-bold text-xl shadow-lg">
                    {step.step}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-blue-400/30 -z-10" />
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section bg-zinc-50 */}
      {/* bg-gradient-to-r from-blue-600 to-blue-500 */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-blue-600 mb-6">
            Prêt à prouver vos compétences ?
          </h2>
          <p className="text-xl text-blue-400 mb-8 max-w-2xl mx-auto">
            Rejoignez la première promotion de jeunes certifiés de Goma et
            Nyiragongo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Link href="/register">
              <Button
                size="lg"
                className="bg-white text-blue-400 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              >
                <GraduationCap className="w-5 h-5 mr-2" />
                S'inscrire gratuitement
              </Button>
            </Link> */}
            <Link href="#">
              <Button
                variant="outline"
                size="lg"
                className="border-blue-400 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg"
              >
                Découvrir les formations
              </Button>
            </Link>
          </div>
          <p className="text-blue-400 text-sm mt-4">
            🎯 Objectif : 2 000 jeunes certifiés d&apos;ici 2026
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

const features = [
  {
    icon: GraduationCap,
    title: "Formation Gratuite",
    description:
      "Accédez à des cours en ligne de qualité sur Cardano et les technologies blockchain.",
    benefits: [
      "5 modules vidéo interactifs",
      "Quiz d'évaluation",
      "Support en français et swahili",
      "Accès mobile optimisé",
    ],
  },
  {
    icon: Shield,
    title: "Certification NFT",
    description:
      "Obtenez un certificat numérique immuable stocké sur la blockchain Cardano.",
    benefits: [
      "NFT unique et vérifiable",
      "Métadonnées complètes",
      "Preuve de compétence",
      "Portabilité internationale",
    ],
  },
  {
    icon: Users,
    title: "Base de Talents",
    description:
      "Intégrez notre réseau de talents vérifiés accessible aux projets et employeurs.",
    benefits: [
      "Visibilité projets Catalyst",
      "Matching intelligent",
      "Opportunités locales",
      "Réseau professionnel",
    ],
  },
];

const steps = [
  {
    step: "1",
    title: "Inscription",
    description: "Créez votre compte en 2 minutes",
  },
  {
    step: "2",
    title: "Formation",
    description: "Suivez les cours et passez le quiz",
  },
  {
    step: "3",
    title: "Certification",
    description: "Recevez votre NFT certificat",
  },
  {
    step: "4",
    title: "Opportunités",
    description: "Rejoignez la base de talents",
  },
];
