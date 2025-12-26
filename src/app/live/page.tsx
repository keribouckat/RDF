'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";

const schedule = [
  {
    day: "Dimanche",
    time: "10h00 - 13h00",
    title: "Culte du Dimanche",
    description: "Louange, adoration, predication et communion fraternelle",
    live: true,
  },
  {
    day: "Mercredi",
    time: "19h00 - 21h00",
    title: "Etude Biblique",
    description: "Approfondissement de la Parole de Dieu",
    live: true,
  },
  {
    day: "Vendredi",
    time: "19h00 - 21h00",
    title: "Soiree de Priere",
    description: "Temps d'intercession et de communion avec Dieu",
    live: true,
  },
];

const recentVideos = [
  {
    id: 1,
    title: "La Restauration de la Famille - Serie Complete",
    date: "Dimanche dernier",
    duration: "1h 45min",
    thumbnail: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=600&auto=format&fit=crop",
    color: "from-rdf-blue to-rdf-blue-dark",
  },
  {
    id: 2,
    title: "Le Mariage selon le Plan de Dieu",
    date: "Il y a 1 semaine",
    duration: "2h 10min",
    thumbnail: "https://images.unsplash.com/photo-1591604021695-0c69b7c05981?q=80&w=600&auto=format&fit=crop",
    color: "from-rdf-red to-rdf-red-dark",
  },
  {
    id: 3,
    title: "Prieres pour les Enfants",
    date: "Il y a 2 semaines",
    duration: "1h 30min",
    thumbnail: "https://images.unsplash.com/photo-1476234251651-f353703a034d?q=80&w=600&auto=format&fit=crop",
    color: "from-rdf-yellow-dark to-rdf-gold",
  },
  {
    id: 4,
    title: "La Puissance du Pardon",
    date: "Il y a 3 semaines",
    duration: "1h 55min",
    thumbnail: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=600&auto=format&fit=crop",
    color: "from-purple-500 to-purple-700",
  },
  {
    id: 5,
    title: "Vaincre les Epreuves par la Foi",
    date: "Il y a 1 mois",
    duration: "2h 00min",
    thumbnail: "https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=600&auto=format&fit=crop",
    color: "from-green-500 to-green-700",
  },
  {
    id: 6,
    title: "L'Amour qui Transforme",
    date: "Il y a 1 mois",
    duration: "1h 40min",
    thumbnail: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=600&auto=format&fit=crop",
    color: "from-pink-500 to-pink-700",
  },
];

export default function LivePage() {
  const [isLive] = useState(false); // Set to true when live

  return (
    <>
      <Header />
      <main className="min-h-screen bg-rdf-light">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-rdf-blue to-rdf-blue-dark text-white pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1598387993841-f4645274d0db?q=80&w=2000&auto=format&fit=crop"
              alt="Live Streaming"
              fill
              className="object-cover"
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-br from-rdf-blue/60 to-rdf-blue-dark/70" />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
            <div className="mb-6">
              <div className="relative inline-block">
                <svg
                  className="w-16 h-16 mx-auto text-rdf-yellow"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                {isLive && (
                  <span className="absolute -top-2 -right-2 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
                  </span>
                )}
              </div>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              Live Streaming
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Rejoignez-nous en direct pour les cultes et enseignements, ou revisionnez nos messages precedents.
            </p>
          </div>
        </section>

        {/* Live Player Section */}
        <section className="section-padding">
          <div className="max-w-6xl mx-auto">
            {/* Live Status Banner */}
            {isLive && (
              <div className="bg-red-500 text-white px-6 py-3 rounded-t-2xl flex items-center justify-center gap-3">
                <span className="flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
                <span className="font-semibold">EN DIRECT MAINTENANT</span>
              </div>
            )}

            {/* Video Player */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="aspect-video bg-black relative">
                {/* YouTube Embed Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-rdf-blue-dark/80 to-rdf-blue/80 backdrop-blur-sm">
                  <div className="text-center text-white p-8">
                    <svg
                      className="w-24 h-24 mx-auto mb-6 opacity-50"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <h3 className="font-serif text-2xl font-bold mb-2">
                      {isLive ? "Direct en cours" : "Aucun direct en cours"}
                    </h3>
                    <p className="text-white/80 mb-6">
                      {isLive
                        ? "Le streaming demarrera dans quelques instants..."
                        : "Consultez les horaires ci-dessous pour les prochains directs"}
                    </p>
                    <a
                      href="https://www.youtube.com/@restaurationdesfamilles"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                      Visiter notre chaine YouTube
                    </a>
                    <p className="text-sm text-white/60 mt-4">
                      Pour integrer le lecteur YouTube, remplacez ce placeholder par l&apos;iframe YouTube
                    </p>
                  </div>
                </div>

                {/* Uncomment and replace VIDEO_ID with actual YouTube video ID when ready
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1"
                  title="Live Stream RDF"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                */}
              </div>

              <div className="p-6 border-t">
                <h2 className="font-serif text-2xl font-bold text-rdf-blue-dark mb-2">
                  Culte en Direct
                </h2>
                <p className="text-rdf-gray">
                  Rejoignez-nous pour un moment de communion fraternelle et d&apos;edification spirituelle.
                </p>
              </div>
            </div>

            {/* Schedule */}
            <div className="mt-16">
              <h2 className="font-serif text-3xl font-bold text-rdf-blue-dark mb-8 text-center">
                Programme des Directs
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {schedule.map((event, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-rdf-blue/10 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-rdf-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-rdf-blue-dark">{event.day}</div>
                        <div className="text-sm text-rdf-gray">{event.time}</div>
                      </div>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-rdf-blue-dark mb-2">
                      {event.title}
                    </h3>
                    <p className="text-rdf-gray text-sm">
                      {event.description}
                    </p>
                    {event.live && (
                      <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        Diffuse en direct
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Videos */}
            <div className="mt-16">
              <h2 className="font-serif text-3xl font-bold text-rdf-blue-dark mb-8 text-center">
                Replays Recents
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentVideos.map((video) => (
                  <div
                    key={video.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group cursor-pointer"
                  >
                    <div className="h-48 relative overflow-hidden">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${video.color} opacity-60 group-hover:opacity-50 transition-opacity`} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <svg className="w-8 h-8 text-rdf-blue-dark ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                      <span className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 text-white text-xs rounded">
                        {video.duration}
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-rdf-blue-dark mb-2 group-hover:text-rdf-blue transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-rdf-gray text-sm">{video.date}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <a
                  href="https://www.youtube.com/@restaurationdesfamilles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Voir toutes les videos
                </a>
              </div>
            </div>

            {/* Subscribe Section */}
            <div className="mt-16 bg-gradient-to-r from-rdf-blue to-rdf-blue-dark rounded-3xl p-8 md:p-12 text-center text-white">
              <h2 className="font-serif text-3xl font-bold mb-4">
                Ne manquez aucun direct !
              </h2>
              <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
                Abonnez-vous a notre chaine YouTube et activez la cloche de notifications
                pour etre averti de chaque nouveau direct.
              </p>
              <a
                href="https://www.youtube.com/@restaurationdesfamilles?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                S&apos;abonner a la chaine
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
