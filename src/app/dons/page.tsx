'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";

const donationOptions = [
  { amount: 5000, label: "5 000 FCFA" },
  { amount: 10000, label: "10 000 FCFA" },
  { amount: 25000, label: "25 000 FCFA" },
  { amount: 50000, label: "50 000 FCFA" },
  { amount: 100000, label: "100 000 FCFA" },
];

const projects = [
  {
    title: "Soutien aux Familles en Difficulte",
    description: "Aide materielle et spirituelle aux familles traversant des epreuves.",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=800&auto=format&fit=crop",
    color: "from-rdf-red to-rdf-red-dark",
  },
  {
    title: "La Joie en Partage",
    description: "Actions humanitaires pour les plus demunis : nourriture, vetements, education.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop",
    color: "from-rdf-gold-dark to-rdf-gold",
  },
  {
    title: "Evangelisation & Missions",
    description: "Soutenir les campagnes d'evangelisation et l'expansion de l'oeuvre de Dieu.",
    image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=800&auto=format&fit=crop",
    color: "from-rdf-red to-rdf-red-dark",
  },
];

export default function DonsPage() {
  const [selectedAmount, setSelectedAmount] = useState(25000);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState<"unique" | "mensuel">("unique");
  const [paymentMethod, setPaymentMethod] = useState<"airtel" | "moov">("airtel");

  const formatCFA = (amount: number) => {
    return new Intl.NumberFormat('fr-FR').format(amount) + ' FCFA';
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-rdf-light">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-rdf-red to-rdf-red-dark text-white pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2000&auto=format&fit=crop"
              alt="Générosité"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="mb-6">
              <svg
                className="w-16 h-16 mx-auto text-rdf-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              Soutenez l&apos;Oeuvre
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-4">
              Votre generosite permet de transformer des vies et d&apos;etendre le Royaume de Dieu.
            </p>
            <blockquote className="text-lg italic text-rdf-gold max-w-2xl mx-auto">
              &ldquo;Donnez, et il vous sera donne; on versera dans votre sein une bonne mesure.&rdquo;
              <cite className="block text-white/70 text-sm mt-2 not-italic">- Luc 6:38</cite>
            </blockquote>
          </div>
        </section>

        {/* Projects Section */}
        <section className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-rdf-red-dark mb-4">
                Nos Projets
              </h2>
              <p className="text-rdf-gray text-lg max-w-2xl mx-auto">
                Decouvrez les differents domaines ou vos dons font la difference.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group"
                >
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-70`} />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-rdf-red-dark mb-3">
                      {project.title}
                    </h3>
                    <p className="text-rdf-gray text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Donation Form */}
            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl font-bold text-rdf-red-dark mb-8 text-center">
                Faire un Don
              </h2>

              {/* Donation Type */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-rdf-gray mb-3">
                  Type de don
                </label>
                <div className="flex gap-4">
                  <button
                    onClick={() => setDonationType("unique")}
                    className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
                      donationType === "unique"
                        ? "bg-rdf-red text-white"
                        : "bg-rdf-light text-rdf-gray hover:bg-rdf-red/10"
                    }`}
                  >
                    Don unique
                  </button>
                  <button
                    onClick={() => setDonationType("mensuel")}
                    className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
                      donationType === "mensuel"
                        ? "bg-rdf-red text-white"
                        : "bg-rdf-light text-rdf-gray hover:bg-rdf-red/10"
                    }`}
                  >
                    Don mensuel
                  </button>
                </div>
              </div>

              {/* Amount Selection */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-rdf-gray mb-3">
                  Montant
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                  {donationOptions.map((option) => (
                    <button
                      key={option.amount}
                      onClick={() => {
                        setSelectedAmount(option.amount);
                        setCustomAmount("");
                      }}
                      className={`py-3 px-2 rounded-xl font-semibold transition-all text-sm ${
                        selectedAmount === option.amount && !customAmount
                          ? "bg-rdf-red text-white"
                          : "bg-rdf-light text-rdf-gray hover:bg-rdf-red/10"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <input
                    type="number"
                    placeholder="Autre montant"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(0);
                    }}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rdf-red focus:ring-2 focus:ring-rdf-red/20 outline-none"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-rdf-gray">FCFA</span>
                </div>
              </div>

              {/* Payment Methods - Mobile Money Only */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-rdf-gray mb-3">
                  Methode de paiement
                </label>
                <div className="space-y-3">
                  <div
                    onClick={() => setPaymentMethod("airtel")}
                    className={`flex items-center gap-4 p-4 border-2 rounded-xl cursor-pointer transition-colors ${
                      paymentMethod === "airtel"
                        ? "border-rdf-red bg-rdf-red/5"
                        : "border-gray-200 hover:border-rdf-red"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      id="airtel"
                      checked={paymentMethod === "airtel"}
                      onChange={() => setPaymentMethod("airtel")}
                      className="w-5 h-5 text-rdf-red"
                    />
                    <div className="w-14 h-14 relative flex-shrink-0">
                      <Image
                        src="/logo-app-myairtel.png"
                        alt="Airtel Money"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <label htmlFor="airtel" className="flex-1 cursor-pointer">
                      <div className="font-semibold text-rdf-red-dark">Airtel Money</div>
                      <div className="text-sm text-rdf-gray">Paiement mobile securise</div>
                    </label>
                  </div>
                  <div
                    onClick={() => setPaymentMethod("moov")}
                    className={`flex items-center gap-4 p-4 border-2 rounded-xl cursor-pointer transition-colors ${
                      paymentMethod === "moov"
                        ? "border-rdf-red bg-rdf-red/5"
                        : "border-gray-200 hover:border-rdf-red"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      id="moov"
                      checked={paymentMethod === "moov"}
                      onChange={() => setPaymentMethod("moov")}
                      className="w-5 h-5 text-rdf-red"
                    />
                    <div className="w-14 h-14 relative flex-shrink-0">
                      <Image
                        src="/logo-app-moov-money.png"
                        alt="Moov Money"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <label htmlFor="moov" className="flex-1 cursor-pointer">
                      <div className="font-semibold text-rdf-red-dark">Moov Money</div>
                      <div className="text-sm text-rdf-gray">Paiement mobile securise</div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button className="w-full py-4 bg-rdf-red text-white font-semibold rounded-xl hover:bg-rdf-red-dark transition-colors shadow-lg hover:shadow-xl">
                Proceder au don de {formatCFA(customAmount ? parseInt(customAmount) : selectedAmount)}
              </button>

              <p className="text-center text-sm text-rdf-gray mt-6">
                Que Dieu vous benisse pour votre generosite !
              </p>
            </div>

            {/* Contact Information */}
            <div className="mt-12 bg-gradient-to-r from-rdf-gold-dark/20 to-rdf-gold/20 rounded-2xl p-8 text-center">
              <h3 className="font-serif text-2xl font-bold text-rdf-red-dark mb-4">
                Besoin d&apos;aide ?
              </h3>
              <p className="text-rdf-gray max-w-2xl mx-auto">
                Pour toute question concernant les dons ou pour effectuer un don d&apos;un montant plus important,
                n&apos;hesitez pas a nous contacter directement.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
