import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

const books = [
  {
    id: 1,
    title: "La Restauration des Familles",
    author: "Pasteur Philippe Mukoma Wetu",
    description: "Un guide pratique pour reconstruire et fortifier les liens familiaux selon les principes bibliques.",
    price: "15€",
    coverImage: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=600&auto=format&fit=crop",
    color: "from-rdf-blue to-rdf-blue-dark",
  },
  {
    id: 2,
    title: "Le Mariage selon Dieu",
    author: "Pasteur Philippe Mukoma Wetu",
    description: "Decouvrez les secrets d'un mariage heureux et durable ancre dans la Parole de Dieu.",
    price: "12€",
    coverImage: "https://images.unsplash.com/photo-1591604021695-0c69b7c05981?q=80&w=600&auto=format&fit=crop",
    color: "from-rdf-red to-rdf-red-dark",
  },
  {
    id: 3,
    title: "La Joie en Partage",
    author: "Pasteur Philippe Mukoma Wetu",
    description: "Apprenez a vivre une vie de generosite et de compassion envers les autres.",
    price: "10€",
    coverImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=600&auto=format&fit=crop",
    color: "from-rdf-yellow-dark to-rdf-gold",
  },
  {
    id: 4,
    title: "Prieres pour la Famille",
    author: "Pasteur Philippe Mukoma Wetu",
    description: "Un recueil de prieres puissantes pour couvrir votre famille spirituellement.",
    price: "8€",
    coverImage: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=600&auto=format&fit=crop",
    color: "from-purple-500 to-purple-700",
  },
  {
    id: 5,
    title: "Eduquer dans la Foi",
    author: "Pasteur Philippe Mukoma Wetu",
    description: "Comment elever vos enfants selon les valeurs chretiennes dans le monde moderne.",
    price: "14€",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop",
    color: "from-green-500 to-green-700",
  },
  {
    id: 6,
    title: "La Guerison Interieure",
    author: "Pasteur Philippe Mukoma Wetu",
    description: "Un chemin vers la delivrance et la restauration de votre ame.",
    price: "13€",
    coverImage: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=600&auto=format&fit=crop",
    color: "from-rdf-blue-dark to-indigo-700",
  },
];

export default function LibrairiePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-rdf-light">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-rdf-blue to-rdf-blue-dark text-white pt-32 pb-20 overflow-hidden">
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
                className="w-16 h-16 mx-auto text-rdf-yellow"
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
              Decouvrez les ouvrages du Pasteur Philippe Mukoma Wetu pour nourrir votre foi
              et transformer votre famille.
            </p>
          </div>
        </section>

        {/* Books Grid */}
        <section className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {books.map((book) => (
                <div
                  key={book.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
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
                      <span className="text-2xl font-bold text-rdf-blue-dark">
                        {book.price}
                      </span>
                      <button className="px-6 py-2 bg-rdf-blue text-white font-semibold rounded-full hover:bg-rdf-blue-dark transition-colors">
                        Commander
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact for Orders */}
            <div className="mt-16 bg-gradient-to-r from-rdf-blue to-rdf-blue-dark rounded-3xl p-8 md:p-12 text-center text-white">
              <h2 className="font-serif text-3xl font-bold mb-4">
                Comment commander ?
              </h2>
              <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
                Pour commander un ou plusieurs ouvrages, contactez-nous par email ou via nos reseaux sociaux.
                Livraison disponible en France, Belgique et Gabon.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:contact@restaurationdesfamilles.org"
                  className="px-8 py-4 bg-white text-rdf-blue-dark font-semibold rounded-full hover:bg-rdf-yellow hover:text-white transition-all"
                >
                  Envoyer un email
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-rdf-blue-dark transition-all"
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
