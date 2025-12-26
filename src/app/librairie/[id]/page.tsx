'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { books, getBookById } from "@/data/books";

export default function BookDetailPage() {
  const params = useParams();
  const router = useRouter();
  const bookId = parseInt(params.id as string);
  const book = getBookById(bookId);

  const [quantity, setQuantity] = useState(1);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    paymentMethod: '',
  });
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  if (!book) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-rdf-light pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="font-serif text-3xl font-bold text-rdf-red-dark mb-4">
              Livre non trouvé
            </h1>
            <p className="text-rdf-gray mb-8">
              Le livre que vous recherchez n&apos;existe pas.
            </p>
            <Link
              href="/librairie"
              className="inline-flex items-center gap-2 px-6 py-3 bg-rdf-red text-white font-semibold rounded-full hover:bg-rdf-red-dark transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour à la librairie
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const totalPrice = book.priceValue * quantity;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Order submitted:', {
      book: book.title,
      quantity,
      totalPrice,
      customer: formData,
    });
    setOrderSubmitted(true);
  };

  const relatedBooks = books.filter((b) => b.id !== book.id).slice(0, 3);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-rdf-light">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-100 pt-24 pb-4">
          <div className="max-w-6xl mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-rdf-gray hover:text-rdf-red transition-colors">
                Accueil
              </Link>
              <svg className="w-4 h-4 text-rdf-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/librairie" className="text-rdf-gray hover:text-rdf-red transition-colors">
                Librairie
              </Link>
              <svg className="w-4 h-4 text-rdf-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-rdf-red-dark font-medium">{book.title}</span>
            </nav>
          </div>
        </div>

        {/* Book Detail Section */}
        <section className="py-12 lg:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Book Cover */}
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl lg:rounded-3xl overflow-hidden shadow-strong relative">
                  <Image
                    src={book.coverImage}
                    alt={book.title}
                    fill
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${book.color} opacity-70`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white text-center px-8 drop-shadow-lg">
                      {book.title}
                    </h2>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-rdf-gold rounded-2xl -z-10" />
                <div className="absolute -top-4 -left-4 w-14 h-14 bg-rdf-red rounded-xl -z-10" />
              </div>

              {/* Book Info */}
              <div>
                <span className="inline-block px-4 py-1.5 bg-rdf-gold/10 text-rdf-gold-dark text-sm font-semibold rounded-full mb-4">
                  Livre
                </span>
                <h1 className="font-serif text-3xl lg:text-4xl font-bold text-rdf-gray-900 mb-4">
                  {book.title}
                </h1>
                <p className="text-rdf-gray text-lg mb-6">
                  Par <span className="text-rdf-red-dark font-medium">{book.author}</span>
                </p>

                {/* Book metadata */}
                <div className="flex flex-wrap gap-4 mb-8">
                  {book.pages && (
                    <div className="flex items-center gap-2 bg-rdf-gray-50 px-4 py-2 rounded-full">
                      <svg className="w-5 h-5 text-rdf-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="text-sm text-rdf-gray">{book.pages} pages</span>
                    </div>
                  )}
                  {book.year && (
                    <div className="flex items-center gap-2 bg-rdf-gray-50 px-4 py-2 rounded-full">
                      <svg className="w-5 h-5 text-rdf-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm text-rdf-gray">{book.year}</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h3 className="font-semibold text-rdf-gray-900 mb-3">Description</h3>
                  <p className="text-rdf-gray leading-relaxed">
                    {book.fullDescription}
                  </p>
                </div>

                {/* Price and Order */}
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-sm text-rdf-gray mb-1">Prix</p>
                      <p className="text-3xl font-bold text-rdf-red">{book.price}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-rdf-gray">Quantité</span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-10 h-10 rounded-full bg-rdf-gray-50 hover:bg-rdf-gray-100 flex items-center justify-center transition-colors"
                        >
                          <svg className="w-5 h-5 text-rdf-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        </button>
                        <span className="w-12 text-center font-semibold text-lg">{quantity}</span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="w-10 h-10 rounded-full bg-rdf-gray-50 hover:bg-rdf-gray-100 flex items-center justify-center transition-colors"
                        >
                          <svg className="w-5 h-5 text-rdf-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  {quantity > 1 && (
                    <div className="mb-6 p-4 bg-rdf-gold/10 rounded-xl">
                      <p className="text-sm text-rdf-gray">Total pour {quantity} exemplaires</p>
                      <p className="text-2xl font-bold text-rdf-gold-dark">{totalPrice.toLocaleString()} FCFA</p>
                    </div>
                  )}

                  <button
                    onClick={() => setShowOrderForm(true)}
                    className="w-full py-4 bg-rdf-red text-white font-semibold rounded-xl hover:bg-rdf-red-dark transition-colors shadow-lg hover:shadow-xl"
                  >
                    Commander maintenant
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Books */}
        {relatedBooks.length > 0 && (
          <section className="py-12 lg:py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-rdf-gray-900 mb-8">
                Autres ouvrages
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedBooks.map((relatedBook) => (
                  <Link
                    key={relatedBook.id}
                    href={`/librairie/${relatedBook.id}`}
                    className="bg-rdf-gray-50 rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 group"
                  >
                    <div className="h-48 relative overflow-hidden">
                      <Image
                        src={relatedBook.coverImage}
                        alt={relatedBook.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${relatedBook.color} opacity-70`} />
                      <div className="absolute inset-0 flex items-end p-4">
                        <h3 className="font-serif text-lg font-bold text-white drop-shadow-lg">
                          {relatedBook.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-rdf-red-dark font-bold">{relatedBook.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Order Modal */}
        {showOrderForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
              {!orderSubmitted ? (
                <>
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                      <h2 className="font-serif text-2xl font-bold text-rdf-gray-900">
                        Commander
                      </h2>
                      <button
                        onClick={() => setShowOrderForm(false)}
                        className="w-10 h-10 rounded-full bg-rdf-gray-50 hover:bg-rdf-gray-100 flex items-center justify-center transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Order Summary */}
                    <div className="bg-rdf-gray-50 rounded-xl p-4 mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-20 relative rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={book.coverImage}
                            alt={book.title}
                            fill
                            className="object-cover"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t ${book.color} opacity-60`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-rdf-gray-900">{book.title}</h3>
                          <p className="text-sm text-rdf-gray">Quantité: {quantity}</p>
                          <p className="font-bold text-rdf-red">{totalPrice.toLocaleString()} FCFA</p>
                        </div>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-rdf-gray mb-1">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rdf-red focus:ring-2 focus:ring-rdf-red/20 outline-none transition-all"
                          placeholder="Votre nom"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-rdf-gray mb-1">
                          Téléphone *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rdf-red focus:ring-2 focus:ring-rdf-red/20 outline-none transition-all"
                          placeholder="+241 XX XX XX XX"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-rdf-gray mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rdf-red focus:ring-2 focus:ring-rdf-red/20 outline-none transition-all"
                          placeholder="votre@email.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-rdf-gray mb-1">
                          Ville *
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rdf-red focus:ring-2 focus:ring-rdf-red/20 outline-none transition-all"
                          placeholder="Libreville"
                        />
                      </div>

                      <div>
                        <label htmlFor="address" className="block text-sm font-medium text-rdf-gray mb-1">
                          Adresse de livraison *
                        </label>
                        <textarea
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          required
                          rows={2}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rdf-red focus:ring-2 focus:ring-rdf-red/20 outline-none transition-all resize-none"
                          placeholder="Quartier, rue, repère..."
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-rdf-gray mb-3">
                          Mode de paiement *
                        </label>
                        <div className="space-y-3">
                          <label className="flex items-center gap-4 p-4 bg-rdf-gray-50 rounded-xl cursor-pointer hover:bg-rdf-gray-100 transition-colors">
                            <input
                              type="radio"
                              name="paymentMethod"
                              value="airtel"
                              checked={formData.paymentMethod === 'airtel'}
                              onChange={handleChange}
                              required
                              className="w-5 h-5 text-rdf-red focus:ring-rdf-red"
                            />
                            <Image
                              src="/logo-app-myairtel.png"
                              alt="Airtel Money"
                              width={40}
                              height={40}
                              className="object-contain"
                            />
                            <span className="font-medium text-rdf-gray-900">Airtel Money</span>
                          </label>
                          <label className="flex items-center gap-4 p-4 bg-rdf-gray-50 rounded-xl cursor-pointer hover:bg-rdf-gray-100 transition-colors">
                            <input
                              type="radio"
                              name="paymentMethod"
                              value="moov"
                              checked={formData.paymentMethod === 'moov'}
                              onChange={handleChange}
                              required
                              className="w-5 h-5 text-rdf-red focus:ring-rdf-red"
                            />
                            <Image
                              src="/logo-app-moov-money.png"
                              alt="Moov Money"
                              width={40}
                              height={40}
                              className="object-contain"
                            />
                            <span className="font-medium text-rdf-gray-900">Moov Money</span>
                          </label>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 bg-rdf-red text-white font-semibold rounded-xl hover:bg-rdf-red-dark transition-colors shadow-lg mt-6"
                      >
                        Confirmer la commande
                      </button>
                    </form>
                  </div>
                </>
              ) : (
                <div className="p-8 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-rdf-gray-900 mb-4">
                    Commande envoyée !
                  </h2>
                  <p className="text-rdf-gray mb-6">
                    Merci pour votre commande. Nous vous contacterons très bientôt pour confirmer les détails de livraison et de paiement.
                  </p>
                  <div className="bg-rdf-gray-50 rounded-xl p-4 mb-6 text-left">
                    <p className="text-sm text-rdf-gray mb-2">Récapitulatif :</p>
                    <p className="font-semibold text-rdf-gray-900">{book.title}</p>
                    <p className="text-sm text-rdf-gray">Quantité: {quantity}</p>
                    <p className="font-bold text-rdf-red">{totalPrice.toLocaleString()} FCFA</p>
                  </div>
                  <button
                    onClick={() => {
                      setShowOrderForm(false);
                      setOrderSubmitted(false);
                      router.push('/librairie');
                    }}
                    className="px-8 py-3 bg-rdf-red text-white font-semibold rounded-full hover:bg-rdf-red-dark transition-colors"
                  >
                    Retour à la librairie
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
