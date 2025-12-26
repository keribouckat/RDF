const ministries = [
  {
    title: 'Culte du Dimanche',
    description: 'Un moment de louange, d\'adoration et d\'enseignement de la Parole de Dieu pour toute la famille.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    time: 'Dimanche 10h00',
    color: 'from-rdf-red to-rdf-red-dark',
    iconBg: 'bg-white/20',
  },
  {
    title: 'Etude Biblique',
    description: 'Approfondissez votre connaissance de la Bible dans une ambiance fraternelle et edifiante.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    time: 'Mercredi 19h00',
    color: 'from-rdf-gold to-rdf-gold-dark',
    iconBg: 'bg-white/20',
  },
  {
    title: 'Priere',
    description: 'Des moments de communion avec Dieu pour interceder et recevoir sa direction.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
      </svg>
    ),
    time: 'Vendredi 19h00',
    color: 'from-rdf-red-dark to-rdf-red-darker',
    iconBg: 'bg-white/20',
  },
  {
    title: 'Jeunesse',
    description: 'Un espace dedie aux jeunes pour grandir dans la foi et developper leurs talents.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    time: 'Samedi 15h00',
    color: 'from-rdf-gold-dark to-rdf-gold-darker',
    iconBg: 'bg-white/20',
  },
  {
    title: 'Femmes Epanouies',
    description: 'Un ministere pour accompagner et fortifier les femmes dans leur role et leur identite.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    time: '1er Samedi du mois',
    color: 'from-pink-500 to-pink-600',
    iconBg: 'bg-white/20',
  },
  {
    title: 'Action Humanitaire',
    description: 'La Joie en Partage - Des actions concretes pour aider les plus demunis.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    time: 'Toute l\'annee',
    color: 'from-emerald-500 to-emerald-600',
    iconBg: 'bg-white/20',
  },
];

export default function Ministries() {
  return (
    <section id="ministeres" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1.5 bg-rdf-gold/10 text-rdf-gold-dark text-sm font-semibold rounded-full mb-4">
            Nos Activites
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-rdf-gray-900 mb-6">
            Ministeres & <span className="text-rdf-red">Services</span>
          </h2>
          <p className="text-rdf-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Decouvrez les differentes activites et ministeres de notre eglise,
            ou chacun peut trouver sa place et s&apos;epanouir.
          </p>
        </div>

        {/* Ministries grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {ministries.map((ministry, index) => (
            <div
              key={index}
              className="
                bg-rdf-gray-50 hover:bg-white
                rounded-2xl sm:rounded-3xl
                overflow-hidden
                shadow-soft hover:shadow-medium
                transition-all duration-300
                group
                transform hover:-translate-y-1
              "
            >
              {/* Header with gradient */}
              <div className={`bg-gradient-to-br ${ministry.color} p-5 sm:p-6 text-white`}>
                <div className="flex items-center justify-between">
                  <div className={`${ministry.iconBg} w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center`}>
                    {ministry.icon}
                  </div>
                  <span className="text-xs sm:text-sm font-medium bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    {ministry.time}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-rdf-gray-900 mb-3 group-hover:text-rdf-red transition-colors">
                  {ministry.title}
                </h3>
                <p className="text-rdf-gray-500 text-sm leading-relaxed">
                  {ministry.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 lg:mt-16 text-center">
          <p className="text-rdf-gray-600 mb-6">
            Vous souhaitez participer a nos activites ou en savoir plus ?
          </p>
          <a
            href="/contact"
            className="
              inline-flex items-center gap-2
              px-8 py-4
              bg-rdf-red hover:bg-rdf-red-dark
              text-white font-semibold
              rounded-full
              shadow-soft hover:shadow-medium
              transform hover:-translate-y-0.5
              transition-all duration-200
            "
          >
            Contactez-nous
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
