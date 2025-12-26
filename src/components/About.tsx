const values = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Amour',
    description: 'Un amour inconditionnel qui restaure et guerit les coeurs brises.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Famille',
    description: 'Batir des familles solides, unies dans la foi et l\'esperance.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Foi',
    description: 'Ancres dans la Parole de Dieu, source de toute sagesse.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Mission',
    description: 'Porter l\'Evangile jusqu\'aux extremites de la terre.',
  },
];

export default function About() {
  return (
    <section id="apropos" className="section-padding bg-rdf-light">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-rdf-blue font-medium uppercase tracking-wider text-sm">
            Notre Vision
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-rdf-blue-dark mt-3 mb-6">
            Restaurer, Reunir, Relever
          </h2>
          <p className="text-rdf-gray text-lg max-w-3xl mx-auto leading-relaxed">
            L&apos;Eglise Restauration des Familles est un lieu de rencontre avec Dieu,
            ou chaque famille trouve guerison, reconciliation et un nouveau depart.
            Notre mission est de voir des familles transformees par la puissance de l&apos;Evangile,
            vivant dans l&apos;unite et l&apos;amour de Christ.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-rdf-blue/10 rounded-full flex items-center justify-center mx-auto mb-5 text-rdf-blue group-hover:bg-rdf-blue group-hover:text-white transition-colors duration-300">
                {value.icon}
              </div>
              <h3 className="font-serif text-xl font-semibold text-rdf-blue-dark mb-3">
                {value.title}
              </h3>
              <p className="text-rdf-gray text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission statement */}
        <div className="mt-16 bg-gradient-to-r from-rdf-blue to-rdf-blue-dark rounded-3xl p-8 md:p-12 text-center text-white">
          <blockquote className="font-serif text-2xl md:text-3xl italic mb-4">
            &ldquo;Car la ou deux ou trois sont assembles en mon nom, je suis au milieu d&apos;eux.&rdquo;
          </blockquote>
          <cite className="text-white/80 text-lg">- Matthieu 18:20</cite>
        </div>
      </div>
    </section>
  );
}
