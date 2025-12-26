import Image from 'next/image';

export default function Pastor() {
  return (
    <section id="pasteur" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-rdf-red font-medium uppercase tracking-wider text-sm">
            Notre Berger
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-rdf-blue-dark mt-3">
            Le Pasteur Philippe Mukoma Wetu
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop"
                alt="Pasteur Philippe Mukoma Wetu"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rdf-blue-dark/40 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-rdf-yellow rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-rdf-blue rounded-xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-rdf-blue-dark mb-6">
              Un serviteur devoue a la restauration des familles
            </h3>

            <div className="space-y-4 text-rdf-gray leading-relaxed">
              <p>
                Le Pasteur <strong className="text-rdf-blue-dark">Philippe Mukoma Wetu</strong> est le fondateur
                et responsable des eglises Restauration des Familles a travers le monde. Anime par une
                passion pour voir les familles restaurees et unies, il consacre sa vie au service de Dieu
                et de son prochain.
              </p>

              <p>
                President de <strong className="text-rdf-blue-dark">MW Ministries</strong> et fondateur de
                l&apos;<strong className="text-rdf-blue-dark">Association La Joie en Partage</strong> ainsi que de la
                <strong className="text-rdf-blue-dark"> Fondation Philippe Mukoma</strong>, il oeuvre pour
                l&apos;evangelisation et l&apos;action humanitaire.
              </p>

              <p>
                Ecrivain, chanteur, compositeur et conferencier international, le Pasteur Philippe Mukoma
                touche des milliers de vies a travers ses messages d&apos;esperance et de reconciliation.
              </p>
            </div>

            {/* Ministry highlights */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-rdf-light p-4 rounded-xl">
                <span className="text-rdf-blue font-bold text-2xl">MW</span>
                <p className="text-rdf-gray text-sm mt-1">Ministries</p>
              </div>
              <div className="bg-rdf-light p-4 rounded-xl">
                <span className="text-rdf-red font-bold text-2xl">JEP</span>
                <p className="text-rdf-gray text-sm mt-1">La Joie en Partage</p>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-8 flex gap-4">
              <a
                href="https://www.instagram.com/philippe_mukoma"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
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
                className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
