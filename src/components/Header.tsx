'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/live', label: 'Live' },
  { href: '/librairie', label: 'Librairie' },
  { href: '/dons', label: 'Dons' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300 ease-out
          ${isScrolled
            ? 'bg-white/95 backdrop-blur-lg shadow-soft py-2'
            : 'bg-transparent py-4'
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 sm:gap-3 group"
            >
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="Restauration des Familles"
                  width={48}
                  height={48}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col">
                <span
                  className={`
                    font-serif font-bold text-base sm:text-lg
                    transition-colors duration-300
                    ${isScrolled ? 'text-rdf-red-dark' : 'text-white'}
                  `}
                >
                  RDF
                </span>
                <span
                  className={`
                    hidden sm:block text-xs font-medium
                    transition-colors duration-300
                    ${isScrolled ? 'text-rdf-gold-dark' : 'text-rdf-gold-light'}
                  `}
                >
                  Restauration des Familles
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    px-3 lg:px-4 py-2
                    text-sm font-medium
                    rounded-lg
                    transition-all duration-200 ease-out
                    ${isScrolled
                      ? 'text-rdf-gray-600 hover:text-rdf-red hover:bg-rdf-red/5'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                    }
                  `}
                >
                  {link.label}
                </Link>
              ))}
              {/* CTA Button */}
              <Link
                href="/dons"
                className={`
                  ml-2 lg:ml-4
                  px-4 lg:px-6 py-2.5
                  text-sm font-semibold
                  rounded-full
                  transition-all duration-200 ease-out
                  transform hover:-translate-y-0.5
                  ${isScrolled
                    ? 'bg-rdf-red text-white hover:bg-rdf-red-dark shadow-soft hover:shadow-medium'
                    : 'bg-rdf-gold text-rdf-gray-900 hover:bg-rdf-gold-light'
                  }
                `}
              >
                Faire un don
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`
                md:hidden
                p-2.5 rounded-xl
                transition-all duration-200
                ${isScrolled
                  ? 'text-rdf-gray-700 hover:bg-rdf-gray-100'
                  : 'text-white hover:bg-white/10'
                }
              `}
              aria-label="Menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 z-40
          bg-black/50 backdrop-blur-sm
          transition-opacity duration-300
          md:hidden
          ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`
          fixed top-0 right-0 z-50
          w-full max-w-sm h-full
          bg-white
          shadow-strong
          transform transition-transform duration-300 ease-out
          md:hidden
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-rdf-gray-100">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2"
            >
              <Image
                src="/logo.png"
                alt="RDF"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <span className="font-serif font-bold text-rdf-red-dark">RDF</span>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-xl text-rdf-gray-500 hover:text-rdf-gray-700 hover:bg-rdf-gray-100 transition-colors"
              aria-label="Fermer le menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-6 px-4">
            <div className="space-y-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="
                    block px-4 py-3
                    text-base font-medium text-rdf-gray-700
                    rounded-xl
                    hover:bg-rdf-gold/10 hover:text-rdf-red
                    transition-all duration-200
                    animate-slide-up
                  "
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Footer */}
          <div className="p-4 border-t border-rdf-gray-100">
            <Link
              href="/dons"
              onClick={() => setIsMobileMenuOpen(false)}
              className="
                block w-full py-4
                text-center text-base font-semibold
                bg-rdf-red text-white
                rounded-xl
                hover:bg-rdf-red-dark
                transition-all duration-200
                shadow-soft
              "
            >
              Faire un don
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
