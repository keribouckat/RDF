'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2000&auto=format&fit=crop"
          alt="Famille unie"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-rdf-red-darker/90 via-rdf-red-dark/80 to-black/70" />
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 sm:mb-8 animate-fade-in-up">
            <span className="w-2 h-2 bg-rdf-gold rounded-full animate-pulse" />
            <span className="text-rdf-gold-light text-sm font-medium">
              Bienvenue a l&apos;eglise RDF
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Restauration{' '}
            <span className="text-gradient-gold">des Familles</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Une eglise dediee a la restauration, a l&apos;unite et a l&apos;epanouissement des familles selon les principes de la Parole de Dieu.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <Link
              href="/live"
              className="
                inline-flex items-center justify-center gap-2
                px-8 py-4
                bg-rdf-gold hover:bg-rdf-gold-light
                text-rdf-gray-900 font-semibold
                rounded-full
                shadow-medium hover:shadow-strong
                transform hover:-translate-y-1
                transition-all duration-200 ease-out
              "
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Regarder en direct
            </Link>
            <Link
              href="/contact"
              className="
                inline-flex items-center justify-center gap-2
                px-8 py-4
                bg-white/10 hover:bg-white/20
                backdrop-blur-sm
                text-white font-semibold
                border border-white/20
                rounded-full
                transform hover:-translate-y-1
                transition-all duration-200 ease-out
              "
            >
              Nous rejoindre
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16 pt-8 border-t border-white/10 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-rdf-gold">15+</div>
              <div className="text-sm sm:text-base text-white/60 mt-1">Annees de ministere</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-rdf-gold">1000+</div>
              <div className="text-sm sm:text-base text-white/60 mt-1">Familles restaurees</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-rdf-gold">3</div>
              <div className="text-sm sm:text-base text-white/60 mt-1">Pays touches</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-rdf-gold rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
