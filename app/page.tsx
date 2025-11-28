"use client";
import { useRouter } from "next/navigation";
export default function Home() {
  const route = useRouter();
  const date = new Date();

  return (
    <div className="min-h-screen bg-zinc-50 font-san">
      <nav className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                P
              </div>
              <span className="text-xl font-bold bg-linear-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Proof of Capacity
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="#features"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                About us
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Contact
              </a>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                onClick={() => route.replace("/auth/signin")}
              >
                Start
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/*  */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Prouvez ta competence.
              <span className="block bg-linear-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Augmenetez votre chance d&apos;etre embaucher.
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Proof of capacity est une plateforme qui vous permet de prouver la
              competence et d&apos;augmenter votre chance d&apos;etre embaucher,
              non par affinite, ni reseau d&apos;influence mais uniquement par
              merite
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
      
      {/*  */}

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100">
        <div className="container mx-auto px-4 ">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                P
              </div>
              <span className="text-lg font-bold bg-linear-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Proof of capacity
              </span>
            </div>
            <div className="text-gray-500 text-sm">
              © {date.getFullYear()} | Trouvez le job selon le merite
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
