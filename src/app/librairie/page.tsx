import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { books } from "@/data/books";

export default function LibrairiePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-rdf-light">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-rdf-red to-rdf-red-dark text-white pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2000&auto=format&fit=crop"
              alt="Livres"
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
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              Librairie RDF
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Decouvrez les ouvrages du Prophète Philippe Mukoma Wetu pour nourrir votre foi
              et transformer votre famille.
            </p>
          </div>
        </section>

        {/* Books Grid */}
        <section className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {books.map((book) => (
                <Link
                  key={book.id}
                  href={`/librairie/${book.id}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group block"
                >
                  {/* Book Cover */}
                  <div className="h-80 relative overflow-hidden">
                    <Image
                      src={book.coverImage}
                      alt={book.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${book.color} opacity-80`} />
                    <div className="absolute inset-0 flex items-end p-6">
                      <h3 className="font-serif text-2xl font-bold text-white drop-shadow-lg">
                        {book.title}
                      </h3>
                    </div>
                  </div>

                  {/* Book Info */}
                  <div className="p-6">
                    <p className="text-rdf-gray text-sm mb-2">{book.author}</p>
                    <p className="text-rdf-gray text-sm mb-4 leading-relaxed">
                      {book.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-rdf-red-dark">
                        {book.price}
                      </span>
                      <span className="px-6 py-2 bg-rdf-red text-white font-semibold rounded-full group-hover:bg-rdf-red-dark transition-colors">
                        Voir détails
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Contact for Orders */}
            <div className="mt-16 bg-gradient-to-r from-rdf-red to-rdf-red-dark rounded-3xl p-8 md:p-12 text-center text-white">
              <h2 className="font-serif text-3xl font-bold mb-4">
                Comment commander ?
              </h2>
              <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
                Pour commander un ou plusieurs ouvrages, contactez-nous par email ou via nos reseaux sociaux.
                Livraison disponible au Gabon.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:contact@restaurationdesfamilles.org"
                  className="px-8 py-4 bg-white text-rdf-red-dark font-semibold rounded-full hover:bg-rdf-gold hover:text-white transition-all"
                >
                  Envoyer un email
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-rdf-red-dark transition-all"
                >
                  Formulaire de contact
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
