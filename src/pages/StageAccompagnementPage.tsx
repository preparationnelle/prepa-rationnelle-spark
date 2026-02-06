import React, { useState } from 'react';
import { Star, GraduationCap, BookOpen, Zap, ChevronDown } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const StageAccompagnementPage = () => {
  const whatsappPhone = '33609164668';
  const buildWhatsAppLink = (message: string) =>
    `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;

  const [expandedTestimonials, setExpandedTestimonials] = useState<number[]>([]);

  const testimonials = [
    {
      quote: "Dimitar est très pédagogue, à l'écoute et s'assure que tout soit parfaitement compris avant la fin du cours. Il m'a aidée à demystifier python, qui était au départ, un gros point faible. Grâce à lui, je suis plus confiante pour traiter les questions python !",
      name: "Léa",
      role: "Etudiante deuxième année",
      initials: "LÉ"
    },
    {
      quote: "J'étais en difficulté en mathématiques. Mais grâce à l'accompagnement et aux explications bien adaptées, j'ai commencé à voir une vraie différence. Merci mille fois pour ton aide, Dimitar, et ta méthode de travail.",
      name: "Victoire",
      role: "Étudiante à ESCP",
      initials: "VI"
    },
    {
      quote: "L'un de mes (brillants) anciens élèves à l'époque où j'enseignais les maths en prépa HEC. Dans ma matière, ses méthodes de travail étaient très efficaces. Je pense qu'il peut être de très bon conseil !",
      name: "Frédéric Broassard",
      role: "Ancien professeur de mathématiques",
      initials: "FB"
    }
  ];

  const toggleTestimonial = (index: number) => {
    setExpandedTestimonials(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const truncateText = (text: string, limit: number) => {
    if (text.length <= limit) return text;
    return text.slice(0, limit) + "...";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Floating elements - Subtle blue bubbles */}
      <div className="absolute -z-10 top-20 left-10 w-32 h-32 bg-indigo-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute -z-10 bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-15 animate-pulse-slow"></div>
      <div className="absolute -z-10 top-40 right-20 w-48 h-48 bg-indigo-100 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute -z-10 bottom-40 left-20 w-56 h-56 bg-blue-200 rounded-full opacity-8 animate-pulse"></div>

      {/* Section 1 - Hero */}
      <section className="pt-24 pb-20 px-4 relative z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-8 tracking-tight">
              <span className="text-gray-900">Choisis l'offre qui </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 relative inline-block">
                boostera
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200 -z-10 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5 L 100 0 Q 50 5 0 0 Z" fill="currentColor" />
                </svg>
              </span>
              <span className="text-gray-900"> ta prépa</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto font-light">
              Accompagnement personnalisé pour maximiser tes performances et atteindre tes objectifs.
            </p>
          </div>

          {/* Section programme détaillé - Premium Grid */}
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-8 sm:p-12 mb-20 max-w-6xl mx-auto border border-white/50 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200 ring-1 ring-gray-100/50">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center bg-gradient-to-b from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Le programme que chaque étudiant rêve avoir pour intégrer le top 3
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 text-left">
              {/* Colonne Cours */}
              <div className="space-y-8 relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                <h3 className="text-2xl font-bold text-indigo-700 mb-6 flex items-center justify-center lg:justify-start">
                  <div className="p-2 bg-indigo-100 rounded-lg mr-3 shadow-sm">
                    <BookOpen className="w-6 h-6 text-indigo-600" />
                  </div>
                  NOS COURS
                </h3>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    <strong className="text-indigo-900 font-bold block mb-2 text-xl">4 à 8 cours de coaching individuel personnalisé par mois</strong>
                    Des sessions adaptées à tes besoins spécifiques, programmées chaque semaine matière au choix.
                    <span className="block mt-2 text-sm font-semibold text-indigo-500 bg-indigo-50 inline-block px-2 py-1 rounded-md">50 euros/heure</span>
                  </p>
                </div>
              </div>

              {/* Colonne Ressources */}
              <div className="space-y-8 relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                <h3 className="text-2xl font-bold text-indigo-700 mb-6 flex items-center justify-center lg:justify-start">
                  <div className="p-2 bg-indigo-100 rounded-lg mr-3 shadow-sm">
                    <Star className="w-6 h-6 text-indigo-600" />
                  </div>
                  NOS RESSOURCES
                </h3>

                <ul className="space-y-4">
                  {[
                    { title: "Live méthodologie", text: "Au moins une fois par mois avec des invités professeur en prépa." },
                    { title: "Formation Maths", text: "Flash cards, cours, exercices indispensables corrigés (INCLUS)." },
                    { title: "Formation Python", text: "Flash cards, cours, exercices indispensables corrigés (INCLUS)." },
                    { title: "Conversation WhatsApp Exclusive", text: "Un suivi quotidien avec réponses à toutes tes questions en temps réel. Partage d'astuces, motivation pour ne jamais te sentir seul." },
                    { title: "Formation LV1/LV2", text: "Fiche de civilisation, flash cards, vocabulaire, correcteur IA (INCLUS)." },
                    { title: "Géopolitique/ESH", text: "Études de cas, plans, flash cards (INCLUS)." },
                    { title: "Culture générale", text: "Méthode complète (INCLUS)." },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:border-indigo-200 hover:shadow-md transition-all duration-300 transform hover:-translate-x-1">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-indigo-500 mr-4" />
                      </div>
                      <span className="text-gray-600">
                        <strong className="text-gray-900 block mb-1">{item.title}</strong>
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 shadow-xl text-center text-white transform hover:scale-[1.01] transition-transform duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 relative z-10">
                Transparence totale
              </h3>
              <p className="text-lg sm:text-xl font-medium opacity-90 relative z-10">
                Prix : 50 euros/heure les cours individuels <span className="mx-2">•</span> <span className="text-yellow-300 font-bold underline decoration-2 underline-offset-4">Tout le reste est inclus</span>
              </p>
            </div>
          </div>

          {/* Grille des cartes d'offres */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Coaching 1ère année */}
            <Card className="relative overflow-hidden p-10 text-center hover:shadow-2xl transition-all duration-500 group bg-white border-0 ring-1 ring-gray-100 hover:ring-2 hover:ring-indigo-200 rounded-[2rem] hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-indigo-500" />
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700 ease-out" />

              <div className="relative z-10">
                <div className="w-24 h-24 bg-indigo-50 rounded-2xl mx-auto mb-8 flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-500 shadow-inner group-hover:shadow-lg group-hover:shadow-indigo-500/30">
                  <BookOpen className="w-10 h-10 text-indigo-600 group-hover:text-white transition-colors duration-500" />
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">
                  1ʳᵉ année
                </h3>
                <div className="text-lg text-indigo-600 font-semibold mb-6 uppercase tracking-wider text-xs">
                  Coaching Personnalisé
                </div>

                <p className="text-gray-500 mb-8 text-lg leading-relaxed">
                  Un accompagnement sur mesure pour poser les bases de l'excellence et prendre de l'avance.
                </p>

                <Button asChild className="bg-gray-900 hover:bg-indigo-600 text-white w-full py-6 text-lg rounded-xl shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 transform group-hover:scale-[1.02]">
                  <a
                    href={buildWhatsAppLink(
                      'Prepa Rationnelle, je suis interessé par un coaching en première année'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <span className="relative flex h-3 w-3 mr-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    Contacter sur WhatsApp
                  </a>
                </Button>
              </div>
            </Card>

            {/* Coaching 2ème année */}
            <Card className="relative overflow-hidden p-10 text-center hover:shadow-2xl transition-all duration-500 group bg-gray-900 border-0 ring-1 ring-gray-800 rounded-[2rem] hover:-translate-y-2">
              {/* Shine effect */}
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10">
                <div className="w-24 h-24 bg-gray-800 rounded-2xl mx-auto mb-8 flex items-center justify-center group-hover:bg-indigo-500 transition-colors duration-500 shadow-lg shadow-black/20 group-hover:shadow-indigo-500/30">
                  <Zap className="w-10 h-10 text-indigo-400 group-hover:text-white transition-colors duration-500" />
                </div>

                <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">
                  2ᵉ année
                </h3>
                <div className="text-lg text-indigo-400 font-semibold mb-6 uppercase tracking-wider text-xs">
                  Coaching Intensif
                </div>

                <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                  La préparation ultime pour les concours. Maximisez vos chances d'intégrer le Top 3.
                </p>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <Button asChild className="bg-white hover:bg-gray-100 text-gray-900 w-full py-6 text-lg rounded-xl shadow-lg transition-all duration-300 transform group-hover:scale-[1.02]">
                  <a
                    href={buildWhatsAppLink(
                      'Prepa Rationnelle, je suis interessé par un coaching en deuxième année'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <span className="relative flex h-3 w-3 mr-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
                    </span>
                    Contacter sur WhatsApp
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 3 - Témoignages */}
      <section className="py-24 px-4 bg-gray-50 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              Ce que disent nos <span className="text-indigo-600 relative inline-block">
                étudiants
                <svg className="absolute w-full h-2 -bottom-1 left-0 text-indigo-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5 L 100 0 Q 50 5 0 0 Z" fill="currentColor" />
                </svg>
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Découvrez les témoignages de ceux qui ont transformé leur prépa avec nous.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => {
              const isExpanded = expandedTestimonials.includes(index);
              const displayText = isExpanded ? testimonial.quote : truncateText(testimonial.quote, 150);

              return (
                <Card key={index} className="p-8 bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group cursor-pointer border-0 ring-1 ring-gray-100 rounded-2xl" onClick={() => toggleTestimonial(index)}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mr-4 shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-sm">{testimonial.initials}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors duration-300">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="flex justify-start mb-4" aria-label="Note 5 étoiles sur 5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" aria-hidden="true" />
                    ))}
                  </div>

                  <blockquote className="text-gray-600 italic mb-4 text-base leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                    "{displayText}"
                  </blockquote>

                  <div className="flex items-center justify-center mt-6 pt-6 border-t border-gray-50">
                    <Link to="/avis" onClick={(e) => e.stopPropagation()}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 transition-colors duration-300 font-medium"
                      >
                        Lire plus <ChevronDown className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 inline-block hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1">
              <div className="inline-flex items-center space-x-4 text-4xl font-bold text-indigo-600">
                <span>5/5</span>
                <div className="flex space-x-1" aria-label="Note moyenne 5 étoiles sur 5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                  ))}
                </div>
              </div>
              <p className="text-gray-500 mt-2 font-medium tracking-wide text-sm uppercase">Note moyenne de nos formations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Offre Spéciale */}
      <section className="py-24 px-4 bg-gray-900 relative z-10 overflow-hidden text-white">
        {/* Background effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-20">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6 tracking-tight">
              Offre <span className="text-emerald-400">Spéciale</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
              L'excellence accessible à tous. Commencez dès maintenant.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-[2.5rem] p-10 sm:p-14 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-500 group relative overflow-hidden ring-1 ring-white/5">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10">
              <div className="mb-10">
                <div className="inline-block px-6 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold tracking-wider text-sm mb-6 uppercase">
                  Offre Limitée
                </div>
                <div className="text-6xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-4 tracking-tighter">
                  GRATUIT
                </div>
                <div className="text-xl sm:text-2xl text-gray-300 font-medium">
                  Stage de Pré-entrée complet
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12 border-t border-white/10 pt-10">
                <div className="text-center group/item">
                  <div className="w-16 h-16 bg-gray-800 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover/item:bg-gray-700 transition-colors duration-300 ring-1 ring-white/10">
                    <GraduationCap className="w-8 h-8 text-emerald-400" />
                  </div>
                  <div className="font-semibold text-white text-lg">6 jours intensifs</div>
                  <div className="text-sm text-gray-500 mt-1">Immersion totale</div>
                </div>
                <div className="text-center group/item">
                  <div className="w-16 h-16 bg-gray-800 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover/item:bg-gray-700 transition-colors duration-300 ring-1 ring-white/10">
                    <BookOpen className="w-8 h-8 text-emerald-400" />
                  </div>
                  <div className="font-semibold text-white text-lg">Méthodes exclusives</div>
                  <div className="text-sm text-gray-500 mt-1">Secrets de réussite</div>
                </div>
                <div className="text-center group/item">
                  <div className="w-16 h-16 bg-gray-800 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover/item:bg-gray-700 transition-colors duration-300 ring-1 ring-white/10">
                    <Zap className="w-8 h-8 text-emerald-400" />
                  </div>
                  <div className="font-semibold text-white text-lg">Suivi personnalisé</div>
                  <div className="text-sm text-gray-500 mt-1">Coaching inclus</div>
                </div>
              </div>

              <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-8 text-lg font-bold rounded-2xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto">
                <a
                  href={buildWhatsAppLink(
                    'Prepa Rationnelle, je souhaite m\'inscrire au cours gratuit - Stage de Pré-entrée'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  S'inscrire gratuitement
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </a>
              </Button>
              <p className="mt-6 text-sm text-gray-500">
                Aucune carte bancaire requise. 100% gratuit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StageAccompagnementPage;