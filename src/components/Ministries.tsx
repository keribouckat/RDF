const ministries = [
  {
    title: 'Culte du Dimanche',
    description: 'Un moment de louange, d\'adoration et d\'enseignement de la Parole de Dieu pour toute la famille.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    time: 'Dimanche 10h00',
    color: 'bg-rdf-blue',
  },
  {
    title: 'Etude Biblique',
    description: 'Approfondissez votre connaissance de la Bible dans une ambiance fraternelle et edifiante.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    time: 'Mercredi 19h00',
    color: 'bg-rdf-red',
  },
  {
    title: 'Priere',
    description: 'Des moments de communion avec Dieu pour interceder et recevoir sa direction.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
      </svg>
    ),
    time: 'Vendredi 19h00',
    color: 'bg-rdf-yellow',
  },
  {
    title: 'Jeunesse',
    description: 'Un espace dedie aux jeunes pour grandir dans la foi et developper leurs talents.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    time: 'Samedi 15h00',
    color: 'bg-rdf-blue-dark',
  },
  {
    title: 'Femmes Epanouies',
    description: 'Un ministere pour accompagner et fortifier les femmes dans leur role et leur identite.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    time: '1er Samedi du mois',
    color: 'bg-pink-500',
  },
  {
    title: 'Action Humanitaire',
    description: 'La Joie en Partage - Des actions concretes pour aider les plus demunis.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    time: 'Toute l\'annee',
    color: 'bg-green-500',
  },
];

export default function Ministries() {
  return (
    <section id="ministeres" className="section-padding bg-rdf-light">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-rdf-yellow-dark font-medium uppercase tracking-wider text-sm">
            Nos Activites
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-rdf-blue-dark mt-3 mb-6">
            Ministeres & Services
          </h2>
          <p className="text-rdf-gray text-lg max-w-2xl mx-auto">
            Decouvrez les differentes activites et ministeres de notre eglise,
            ou chacun peut trouver sa place et s&apos;epanouir.
          </p>
        </div>

        {/* Ministries grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ministries.map((ministry, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className={`${ministry.color} p-6 text-white`}>
                <div className="flex items-center justify-between">
                  {ministry.icon}
                  <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                    {ministry.time}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-rdf-blue-dark mb-3 group-hover:text-rdf-blue transition-colors">
                  {ministry.title}
                </h3>
                <p className="text-rdf-gray text-sm leading-relaxed">
                  {ministry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
