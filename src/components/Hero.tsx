import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2940&auto=format&fit=crop"
          alt="Famille heureuse"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-rdf-blue/90 via-rdf-blue-dark/85 to-rdf-blue-dark/90" />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-rdf-yellow/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Title */}
        <h1
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up"
        >
          Restauration des Familles
        </h1>

        {/* Subtitle */}
        <p
          className="text-xl md:text-2xl text-white/90 mb-4 font-light animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          Une Eglise, Une Famille, Un Amour
        </p>

        {/* Bible verse */}
        <blockquote
          className="text-lg md:text-xl text-rdf-yellow italic mb-10 max-w-2xl mx-auto animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          &ldquo;Il ramene le coeur des peres vers leurs enfants, et le coeur des enfants vers leurs peres.&rdquo;
          <cite className="block text-white/70 text-base mt-2 not-italic">
            - Malachie 4:6
          </cite>
        </blockquote>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          <a
            href="#apropos"
            className="px-8 py-4 bg-white text-rdf-blue-dark font-semibold rounded-full hover:bg-rdf-yellow hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Decouvrir notre vision
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-rdf-blue-dark transition-all duration-300"
          >
            Nous rejoindre
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
