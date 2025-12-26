import Image from 'next/image';

export default function Pastor() {
  return (
    <section id="pasteur" className="section-padding bg-rdf-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1.5 bg-rdf-red/10 text-rdf-red text-sm font-semibold rounded-full mb-4">
            Notre Berger
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-rdf-gray-900">
            Le Prophete <span className="text-rdf-gold-dark">Philippe Mukoma Wetu</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden relative shadow-strong">
              <Image
                src="/photo_prophete_philippe_mukoma.jpg"
                alt="Prophete Philippe Mukoma Wetu"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rdf-red-darker/50 via-transparent to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 bg-rdf-gold rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-14 h-14 sm:w-16 sm:h-16 bg-rdf-red rounded-xl -z-10" />

            {/* Stats card */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-medium">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-rdf-red">15+</div>
                  <div className="text-xs text-rdf-gray-500">Ans de ministere</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-rdf-gold-dark">3</div>
                  <div className="text-xs text-rdf-gray-500">Pays</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-rdf-red">6+</div>
                  <div className="text-xs text-rdf-gray-500">Livres publies</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-rdf-gray-900 mb-6">
              Un serviteur devoue a la restauration des familles
            </h3>

            <div className="space-y-4 text-rdf-gray-600 leading-relaxed">
              <p>
                Le Prophete <strong className="text-rdf-gray-900">Philippe Mukoma Wetu</strong> est le fondateur
                et responsable des eglises Restauration des Familles a travers le monde. Anime par une
                passion pour voir les familles restaurees et unies, il consacre sa vie au service de Dieu
                et de son prochain.
              </p>

              <p>
                President de <strong className="text-rdf-gray-900">MW Ministries</strong> et fondateur de
                l&apos;<strong className="text-rdf-gray-900">Association La Joie en Partage</strong> ainsi que de la
                <strong className="text-rdf-gray-900"> Fondation Philippe Mukoma</strong>, il oeuvre pour
                l&apos;evangelisation et l&apos;action humanitaire.
              </p>

              <p>
                Ecrivain, chanteur, compositeur et conferencier international, le Prophete Philippe Mukoma
                touche des milliers de vies a travers ses messages d&apos;esperance et de reconciliation.
              </p>
            </div>

            {/* Ministry highlights */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-white p-4 sm:p-5 rounded-xl shadow-soft hover:shadow-medium transition-shadow">
                <div className="w-10 h-10 bg-rdf-red/10 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-rdf-red font-bold text-lg">MW</span>
                </div>
                <p className="text-rdf-gray-900 font-semibold text-sm">MW Ministries</p>
                <p className="text-rdf-gray-500 text-xs mt-1">Ministere evangelique</p>
              </div>
              <div className="bg-white p-4 sm:p-5 rounded-xl shadow-soft hover:shadow-medium transition-shadow">
                <div className="w-10 h-10 bg-rdf-gold/10 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-rdf-gold-dark font-bold text-lg">JEP</span>
                </div>
                <p className="text-rdf-gray-900 font-semibold text-sm">La Joie en Partage</p>
                <p className="text-rdf-gray-500 text-xs mt-1">Action humanitaire</p>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-8 flex gap-3">
              <a
                href="https://www.instagram.com/philippe_mukoma"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white hover:opacity-90 transition-opacity shadow-soft"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/16yRSuULj8/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white hover:opacity-90 transition-opacity shadow-soft"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@restaurationdesfamilles"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white hover:opacity-90 transition-opacity shadow-soft"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
