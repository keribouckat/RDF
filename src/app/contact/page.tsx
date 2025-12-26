'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Merci pour votre message ! Nous vous repondrons rapidement.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-rdf-light">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-rdf-red to-rdf-red-dark text-white pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2000&auto=format&fit=crop"
              alt="Contact"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
            <div className="mb-6">
              <svg
                className="w-16 h-16 mx-auto text-rdf-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Vous avez des questions ? Vous souhaitez nous rejoindre ? N&apos;hesitez pas a nous contacter.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="font-serif text-3xl font-bold text-rdf-red-dark mb-8">
                  Informations
                </h2>

                <div className="space-y-6">
                  {/* Schedule */}
                  <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm">
                    <div className="w-12 h-12 bg-rdf-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-rdf-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-rdf-red-dark mb-2">Horaires des cultes</h4>
                      <p className="text-rdf-gray text-sm">Dimanche : 10h00 - 13h00</p>
                      <p className="text-rdf-gray text-sm">Mercredi : 19h00 - 21h00</p>
                      <p className="text-rdf-gray text-sm">Vendredi : 19h00 - 21h00</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm">
                    <div className="w-12 h-12 bg-rdf-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-rdf-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-rdf-red-dark mb-2">Adresse</h4>
                      <p className="text-rdf-gray text-sm">Libreville, Gabon</p>
                      <p className="text-rdf-gray text-sm mt-1">Presence internationale</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm">
                    <div className="w-12 h-12 bg-rdf-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-rdf-gold-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-rdf-red-dark mb-2">Email</h4>
                      <a href="mailto:contact@restaurationdesfamilles.org" className="text-rdf-red hover:underline text-sm">
                        contact@restaurationdesfamilles.org
                      </a>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm">
                    <div className="w-12 h-12 bg-rdf-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-rdf-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-rdf-red-dark mb-3">Reseaux sociaux</h4>
                      <div className="flex gap-3">
                        <a
                          href="https://www.facebook.com/share/16yRSuULj8/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:opacity-80 transition-opacity"
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
                          className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white hover:opacity-80 transition-opacity"
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
                          className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white hover:opacity-80 transition-opacity"
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
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-3xl p-8 shadow-lg h-fit">
                <h2 className="font-serif text-3xl font-bold text-rdf-red-dark mb-6">
                  Envoyez-nous un message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-rdf-gray mb-2">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rdf-red focus:ring-2 focus:ring-rdf-red/20 outline-none transition-all"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-rdf-gray mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rdf-red focus:ring-2 focus:ring-rdf-red/20 outline-none transition-all"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-rdf-gray mb-2">
                      Sujet
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rdf-red focus:ring-2 focus:ring-rdf-red/20 outline-none transition-all bg-white"
                    >
                      <option value="">Selectionnez un sujet</option>
                      <option value="information">Demande d&apos;information</option>
                      <option value="priere">Demande de priere</option>
                      <option value="rejoindre">Rejoindre l&apos;eglise</option>
                      <option value="temoignage">Partager un temoignage</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-rdf-gray mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rdf-red focus:ring-2 focus:ring-rdf-red/20 outline-none transition-all resize-none"
                      placeholder="Votre message..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-rdf-red text-white font-semibold rounded-xl hover:bg-rdf-red-dark transition-colors duration-300 shadow-lg hover:shadow-xl"
                  >
                    Envoyer le message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
