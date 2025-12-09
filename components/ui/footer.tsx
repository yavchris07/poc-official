import Link from 'next/link';
import { Shield, Twitter, Github, Mail } from 'lucide-react';

export function Footer() {
   const date = new Date()
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-linear-to-r from-cardano-blue to-cardano-light rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  Proof of Capacity
                </span>
                <p className="text-sm text-gray-400">Powered by Cardano</p>
              </div>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Plateforme décentralisée de valorisation des compétences sur la blockchain Cardano. 
              Faisons de Goma le berceau de la méritocratie en Afrique.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/training" className="text-gray-400 hover:text-white transition-colors">
                  Formations
                </Link>
              </li>
              <li>
                <Link href="/#features" className="text-gray-400 hover:text-white transition-colors">
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link href="/#impact" className="text-gray-400 hover:text-white transition-colors">
                  Impact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📍 Goma, Nord-Kivu</li>
              <li>📧 contact@proofofcapacity.org</li>
              <li>🕒 Support 7j/7</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {date.getFullYear()} Proof of Capacity. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Confidentialité
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Conditions
            </Link>
            <Link href="/catalyst" className="text-gray-400 hover:text-white text-sm transition-colors">
              Project Catalyst
            </Link>
          </div>
        </div>

        {/* Catalyst Badge */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cardano-blue/20 border border-cardano-blue/30">
            <span className="text-sm text-cardano-light">
              🚀 Soutenu par la communauté Cardano Catalyst
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}