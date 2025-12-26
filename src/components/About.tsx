const values = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Amour',
    description: 'Un amour inconditionnel qui restaure et guerit les coeurs brises.',
    color: 'bg-rdf-red/10 text-rdf-red group-hover:bg-rdf-red group-hover:text-white',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Famille',
    description: 'Batir des familles solides, unies dans la foi et l\'esperance.',
    color: 'bg-rdf-gold/10 text-rdf-gold-dark group-hover:bg-rdf-gold group-hover:text-white',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Foi',
    description: 'Ancres dans la Parole de Dieu, source de toute sagesse.',
    color: 'bg-rdf-red-dark/10 text-rdf-red-dark group-hover:bg-rdf-red-dark group-hover:text-white',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Mission',
    description: 'Porter l\'Evangile jusqu\'aux extremites de la terre.',
    color: 'bg-rdf-gold-dark/10 text-rdf-gold-darker group-hover:bg-rdf-gold-dark group-hover:text-white',
  },
];

export default function About() {
  return (
    <section id="apropos" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1.5 bg-rdf-gold/10 text-rdf-gold-dark text-sm font-semibold rounded-full mb-4">
            Notre Vision
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-rdf-gray-900 mb-6">
            Restaurer, Reunir, <span className="text-rdf-red">Relever</span>
          </h2>
          <p className="text-rdf-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            L&apos;Eglise Restauration des Familles est un lieu de rencontre avec Dieu,
            ou chaque famille trouve guerison, reconciliation et un nouveau depart.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="
                bg-rdf-gray-50 hover:bg-white
                p-6 sm:p-8
                rounded-2xl sm:rounded-3xl
                shadow-soft hover:shadow-medium
                transition-all duration-300
                text-center
                group
                transform hover:-translate-y-1
              "
            >
              <div className={`
                w-14 h-14 sm:w-16 sm:h-16
                rounded-2xl
                flex items-center justify-center
                mx-auto mb-5
                transition-all duration-300
                ${value.color}
              `}>
                {value.icon}
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-semibold text-rdf-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-rdf-gray-500 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission statement */}
        <div className="mt-12 lg:mt-16 bg-gradient-to-br from-rdf-red to-rdf-red-dark rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-center text-white overflow-hidden relative">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-rdf-gold/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <div className="w-12 h-12 bg-rdf-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-6 h-6 text-rdf-gold" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl italic mb-4 max-w-2xl mx-auto">
              Car la ou deux ou trois sont assembles en mon nom, je suis au milieu d&apos;eux.
            </blockquote>
            <cite className="text-white/80 text-base sm:text-lg font-medium">
              Matthieu 18:20
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
}
