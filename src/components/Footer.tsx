import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-rdf-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <Image
                src="/logo.png"
                alt="Restauration des Familles"
                width={56}
                height={56}
                className="w-12 h-12 sm:w-14 sm:h-14 transition-transform duration-300 group-hover:scale-105"
              />
              <div>
                <h3 className="font-serif text-lg font-bold text-white">RDF</h3>
                <p className="text-rdf-gold text-xs font-medium">Restauration des Familles</p>
              </div>
            </Link>
            <p className="text-rdf-gray-400 text-sm leading-relaxed max-w-xs">
              Notre mission est de voir des familles restaurees par la puissance de l&apos;Evangile,
              vivant dans l&apos;unite et l&apos;amour de Christ.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 sm:mb-6">Navigation</h4>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Accueil' },
                { href: '/live', label: 'Live Streaming' },
                { href: '/librairie', label: 'Librairie' },
                { href: '/dons', label: 'Faire un don' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-rdf-gray-400 hover:text-rdf-gold text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 sm:mb-6">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-rdf-gray-400">
                <svg className="w-5 h-5 text-rdf-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Libreville, Gabon</span>
              </li>
              <li>
                <a
                  href="mailto:contact@restaurationdesfamilles.org"
                  className="flex items-start gap-3 text-rdf-gray-400 hover:text-rdf-gold transition-colors"
                >
                  <svg className="w-5 h-5 text-rdf-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="break-all">contact@restaurationdesfamilles.org</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="font-semibold text-white mb-4 sm:mb-6">Suivez-nous</h4>
            <div className="flex gap-3 mb-6">
              <a
                href="https://www.facebook.com/share/16yRSuULj8/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-rdf-gray-800 hover:bg-rdf-red rounded-xl flex items-center justify-center transition-all duration-200"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/philippe_mukoma"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-rdf-gray-800 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 rounded-xl flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@restaurationdesfamilles"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-rdf-gray-800 hover:bg-red-600 rounded-xl flex items-center justify-center transition-all duration-200"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>

            {/* Horaires */}
            <div className="text-sm">
              <p className="text-rdf-gray-400 mb-2">Cultes :</p>
              <p className="text-white">Dimanche 10h00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-rdf-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-rdf-gray-500">
              &copy; {currentYear} Restauration des Familles. Tous droits reserves.
            </p>
            <p className="text-rdf-gold italic font-serif">
              &ldquo;A Dieu seul soit la gloire&rdquo;
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
