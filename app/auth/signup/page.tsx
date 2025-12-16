"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  MapPin,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
  const router = useRouter();
  // const [formData, setFormData] = useState({
  //   first_name: "",
  //   last_name: "",
  //   email: "",
  //   password: "",
  //   password_confirm: "",
  // });

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirm, setPasswdConfirm] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    // Validation côté frontend
    if (password !== password_confirm) {
      setError("Les mots de passe ne correspondent pas");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/register/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name,
            last_name,
            email,
            password,
            password_confirm,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.log("REGISTER ERROR:", errorData);
        setError(JSON.stringify(errorData));
        setIsLoading(false);
        return;
      }

      const data = await response.json();
      console.log("REGISTER SUCCESS:", data);

      setSuccess("Un email de vérification a été envoyé à votre adresse.");
      setTimeout(() => router.push("/auth/signin/"), 1500);
    } catch (err) {
      if (err instanceof Error) {
        setError(`Erreur : ${err.message}`);
      }
      setError(`Erreur : ${err}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-linear-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <User className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Créer un compte
          </h1>
          <p className="text-gray-600">
            Rejoignez la communauté Proof of Capacity
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2 text-red-700">
            <AlertCircle className="w-5 h-5" />
            <span className="text-sm">{error}</span>
          </div>
        )}

        {/* Success Message */}
        {success && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2 text-green-700">
            <CheckCircle className="w-5 h-5" />
            <span className="text-sm">{success}</span>
          </div>
        )}

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="first_name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Prenom
            </label>
            <div className="relative">
              <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                id="first_name"
                name="first_name"
                type="text"
                required
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border text-gray-400 border-gray-300 rounded-lg focus:ring-2 focus:ring-cardano-blue focus:border-cardano-blue transition-colors"
                placeholder="Votre nom complet"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Nom
            </label>
            <div className="relative">
              <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                id="last_name"
                name="last_name"
                type="text"
                required
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border text-gray-400 border-gray-300 rounded-lg focus:ring-2 focus:ring-cardano-blue focus:border-cardano-blue transition-colors"
                placeholder="Votre nom complet"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Adresse email
            </label>
            <div className="relative">
              <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 text-gray-400 rounded-lg focus:ring-2 focus:ring-cardano-blue focus:border-cardano-blue transition-colors"
                placeholder="votre@email.com"
              />
            </div>
          </div>

          {/* Location Field */}
          {/* <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
              Localisation
            </label>
            <div className="relative">
              <MapPin className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <select
                id="location"
                name="location"
                required
                value={formData.location}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cardano-blue focus:border-cardano-blue transition-colors appearance-none bg-white"
              >
                <option value="Goma">Goma</option>
                <option value="Nyiragongo">Nyiragongo</option>
                <option value="Autre">Autre (Nord-Kivu)</option>
              </select>
            </div>
          </div> */}

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Mot de passe
            </label>
            <div className="relative">
              <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-12 py-3 border text-gray-400 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Minimum 6 caractères"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Confirmer le mot de passe
            </label>
            <div className="relative">
              <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                id="confirmPassword"
                name="password_confirm"
                type={showConfirmPassword ? "text" : "password"}
                required
                value={password_confirm}
                onChange={(e) => setPasswdConfirm(e.target.value)}
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg text-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Retapez votre mot de passe"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Terms Agreement */}
          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              required
              className="w-4 h-4 text-cardano-blue border-gray-300 rounded focus:ring-cardano-blue mt-1"
            />
            <span className="text-sm text-gray-600">
              J&apos;accepte les{" "}
              <Link
                href="/terms"
                className="text-cardano-blue hover:text-cardano-light font-medium"
              >
                conditions d&apos;utilisation
              </Link>{" "}
              et la{" "}
              <Link
                href="/privacy"
                className="text-cardano-blue hover:text-cardano-light font-medium"
              >
                politique de confidentialité
              </Link>
            </span>
          </label>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-linear-to-r from-green-500 to-emerald-600 hover:from-emerald-500 hover:to-green-600 text-white py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Création du compte...
              </div>
            ) : (
              "Créer mon compte"
            )}
          </Button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-3 text-sm text-gray-500">ou</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {/* Login Link */}
        <div className="text-center">
          <p className="text-gray-600">
            Déjà un compte ?{" "}
            <Link
              href="/auth/signin"
              className="text-cardano-blue hover:text-cardano-light font-semibold"
            >
              Se connecter
            </Link>
          </p>
        </div>

        {/* Benefits */}
        {/* <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h4 className="font-semibold text-blue-900 mb-2">Vos avantages :</h4>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>✅ Formation gratuite sur Cardano</li>
            <li>✅ Certification NFT immuable</li>
            <li>✅ Accès à la base de talents</li>
            <li>✅ Opportunités avec projets Catalyst</li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}
