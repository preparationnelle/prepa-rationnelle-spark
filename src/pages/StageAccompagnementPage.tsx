import React, { useState } from 'react';
import { Star, GraduationCap, BookOpen, Zap, ChevronDown, ArrowRight, Calendar, Sigma, Code2, Languages, Globe2, Library, MessageCircle, Check } from 'lucide-react';
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
    <div className="relative">
      {/* Section 1 — Hero */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 bg-[#FDF0EC] text-[#C45A35] border border-[#F9C4B0] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-8">
              <Star className="h-3.5 w-3.5 fill-current" />
              Coaching personnalisé
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl mb-6 text-[#1A1A18] leading-tight">
              Choisis l'offre qui <span className="text-[#F4845F]">boostera</span> ta prépa
            </h1>

            <div className="flex justify-center mb-6">
              <div className="h-[2px] w-16 bg-[#F4845F]" />
            </div>

            <p className="text-lg sm:text-xl text-[#1A1A18] max-w-2xl mx-auto leading-relaxed">
              Accompagnement personnalisé pour maximiser tes performances et atteindre tes objectifs.
            </p>
          </div>

          {/* Programme détaillé */}
          <div className="bg-white border border-[#D8D6CE] rounded-xl overflow-hidden mb-16 max-w-6xl mx-auto">
            <div className="h-[3px] w-full bg-[#F4845F]" />
            <div className="p-8 sm:p-12">
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A18] mb-12 text-center leading-tight">
                Le programme que chaque étudiant rêve d'avoir pour intégrer le <span className="text-[#F4845F]">top 3</span>
              </h2>

              <div className="grid lg:grid-cols-5 gap-6 text-left items-stretch">
                {/* Colonne Cours — 2/5 */}
                <div className="lg:col-span-2 flex">
                  <div className="relative w-full bg-gradient-to-br from-[#FDF0EC] to-white border border-[#F9C4B0] rounded-2xl p-7 flex flex-col">
                    <div className="flex items-center mb-5">
                      <div className="w-10 h-10 bg-white border border-[#F9C4B0] rounded-lg mr-3 flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-[#F4845F]" />
                      </div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-[#C45A35]">
                        Nos cours
                      </h3>
                    </div>

                    <div className="font-serif text-3xl sm:text-4xl text-[#1A1A18] leading-tight mb-1">
                      4 à 8 cours
                    </div>
                    <div className="text-sm text-[#1A1A18]/70 mb-6 uppercase tracking-wider font-semibold">
                      par mois · individuels
                    </div>

                    <div className="bg-white border border-[#F9C4B0] rounded-xl p-5 mb-6">
                      <div className="flex items-baseline gap-1">
                        <span className="font-serif text-5xl text-[#F4845F] leading-none">50</span>
                        <span className="font-serif text-2xl text-[#F4845F] leading-none">€</span>
                        <span className="text-sm text-[#1A1A18]/70 ml-1">/ heure</span>
                      </div>
                      <p className="mt-2 text-xs text-[#1A1A18]/70 uppercase tracking-wider">
                        Tout le reste est inclus
                      </p>
                    </div>

                    <ul className="space-y-2.5 mt-auto">
                      {[
                        "Sessions personnalisées",
                        "Matière au choix",
                        "Programmées chaque semaine",
                        "Coach attitré",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start text-sm text-[#1A1A18]">
                          <Check className="w-4 h-4 text-[#F4845F] mr-2 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Colonne Ressources — 3/5 */}
                <div className="lg:col-span-3 flex flex-col">
                  <div className="flex items-center mb-5">
                    <div className="w-10 h-10 bg-[#FDF0EC] rounded-lg mr-3 flex items-center justify-center">
                      <Star className="w-5 h-5 text-[#F4845F]" />
                    </div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-[#C45A35]">
                      Nos ressources <span className="text-[#1A1A18]/50 font-normal normal-case ml-1">— tout inclus</span>
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-3">
                    {[
                      { icon: Calendar, title: "Live méthodologie", text: "Mensuel avec des profs invités." },
                      { icon: Sigma, title: "Formation Maths", text: "Cours, flashcards, exercices corrigés." },
                      { icon: Code2, title: "Formation Python", text: "Cours, flashcards, exercices corrigés." },
                      { icon: Languages, title: "Formation LV1/LV2", text: "Civilisation, vocabulaire, correcteur IA." },
                      { icon: Globe2, title: "Géopolitique / ESH", text: "Études de cas, plans, flashcards." },
                      { icon: Library, title: "Culture générale", text: "Méthode complète." },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="bg-white border border-[#D8D6CE] hover:border-[#F4845F] rounded-xl p-4 transition-colors duration-300 group"
                      >
                        <div className="w-9 h-9 bg-[#FDF0EC] rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#F4845F]/10 transition-colors">
                          <item.icon className="w-4 h-4 text-[#F4845F]" />
                        </div>
                        <div className="text-sm font-semibold text-[#1A1A18] leading-tight mb-1">
                          {item.title}
                        </div>
                        <p className="text-xs text-[#1A1A18]/70 leading-snug">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* WhatsApp pleine largeur */}
                  <div className="bg-[#1A1A18] rounded-xl p-5 flex items-start gap-4 mt-auto">
                    <div className="w-11 h-11 bg-[#F4845F] rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="text-sm font-semibold text-white">WhatsApp privé</span>
                        <span className="text-[10px] font-semibold text-[#1A1A18] bg-[#F4845F] px-2 py-0.5 rounded-full uppercase tracking-wider">
                          Exclusif
                        </span>
                      </div>
                      <p className="text-xs text-white/70 leading-snug">
                        Un suivi quotidien, des réponses en temps réel, des astuces et de la motivation. Tu n'es jamais seul·e.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cartes d'offres */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Coaching 1ère année */}
            <Card className="relative overflow-hidden p-10 text-center bg-white border border-[#D8D6CE] hover:border-[#F4845F] rounded-xl shadow-none transition-colors duration-300 group">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-[#F4845F]" />

              <div className="w-20 h-20 bg-[#FDF0EC] rounded-2xl mx-auto mb-7 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1">
                <BookOpen className="w-9 h-9 text-[#F4845F]" />
              </div>

              <h3 className="font-serif text-3xl text-[#1A1A18] mb-2">
                1ʳᵉ année
              </h3>
              <div className="text-xs text-[#C45A35] font-semibold mb-6 uppercase tracking-wider">
                Coaching personnalisé
              </div>

              <p className="text-[#1A1A18] mb-8 leading-relaxed">
                Un accompagnement sur mesure pour poser les bases de l'excellence et prendre de l'avance.
              </p>

              <Button asChild className="bg-[#F4845F] hover:bg-[#C45A35] text-white w-full py-6 text-base font-semibold rounded-lg shadow-none transition-colors">
                <a
                  href={buildWhatsAppLink(
                    'Prepa Rationnelle, je suis interessé par un coaching en première année'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  Contacter sur WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </Card>

            {/* Coaching 2ème année */}
            <Card className="relative overflow-hidden p-10 text-center bg-white border-2 border-[#F4845F] rounded-xl shadow-none transition-colors duration-300 group">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-[#F4845F]" />

              <div className="absolute top-4 right-4">
                <span className="inline-block bg-[#F4845F] text-white px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider">
                  Top 3
                </span>
              </div>

              <div className="w-20 h-20 bg-[#FDF0EC] rounded-2xl mx-auto mb-7 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1">
                <Zap className="w-9 h-9 text-[#F4845F]" />
              </div>

              <h3 className="font-serif text-3xl text-[#1A1A18] mb-2">
                2ᵉ année
              </h3>
              <div className="text-xs text-[#C45A35] font-semibold mb-6 uppercase tracking-wider">
                Coaching intensif
              </div>

              <p className="text-[#1A1A18] mb-8 leading-relaxed">
                La préparation ultime pour les concours. Maximise tes chances d'intégrer le top 3.
              </p>

              <Button asChild className="bg-[#F4845F] hover:bg-[#C45A35] text-white w-full py-6 text-base font-semibold rounded-lg shadow-none transition-colors">
                <a
                  href={buildWhatsAppLink(
                    'Prepa Rationnelle, je suis interessé par un coaching en deuxième année'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  Contacter sur WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 3 — Témoignages */}
      <section className="py-20 px-4 bg-white border-t border-[#D8D6CE]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl sm:text-5xl mb-4 text-[#1A1A18] leading-tight">
              Ce que disent nos <span className="text-[#F4845F]">étudiants</span>
            </h2>
            <div className="flex justify-center mb-5">
              <div className="h-[2px] w-16 bg-[#F4845F]" />
            </div>
            <p className="text-base sm:text-lg text-[#1A1A18] max-w-2xl mx-auto">
              Découvrez les témoignages de ceux qui ont transformé leur prépa avec nous.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => {
              const isExpanded = expandedTestimonials.includes(index);
              const displayText = isExpanded ? testimonial.quote : truncateText(testimonial.quote, 150);

              return (
                <Card
                  key={index}
                  className="p-7 bg-white border border-[#D8D6CE] hover:border-[#F4845F] rounded-xl shadow-none transition-colors duration-300 cursor-pointer group flex flex-col"
                  onClick={() => toggleTestimonial(index)}
                >
                  <div className="flex items-center mb-5">
                    <div className="w-11 h-11 bg-[#FDF0EC] border border-[#F9C4B0] rounded-full flex items-center justify-center mr-3">
                      <span className="text-[#C45A35] font-semibold text-sm">{testimonial.initials}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#1A1A18]">{testimonial.name}</h4>
                      <p className="text-xs text-[#1A1A18]/70 mt-0.5">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="flex justify-start mb-4 gap-0.5" aria-label="Note 5 étoiles sur 5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#F4845F] fill-current" aria-hidden="true" />
                    ))}
                  </div>

                  <blockquote className="text-[#1A1A18] italic mb-5 text-sm leading-relaxed flex-1">
                    « {displayText} »
                  </blockquote>

                  <div className="flex items-center justify-center pt-5 border-t border-[#D8D6CE]">
                    <Link to="/avis" onClick={(e) => e.stopPropagation()}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-[#F4845F] hover:text-[#C45A35] hover:bg-[#FDF0EC] font-semibold"
                      >
                        Lire plus <ChevronDown className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-14">
            <div className="bg-white border border-[#D8D6CE] rounded-xl p-8 inline-block overflow-hidden">
              <div className="h-[3px] w-full bg-[#F4845F] -mx-8 -mt-8 mb-6" />
              <div className="inline-flex items-center space-x-3 font-serif text-4xl text-[#F4845F]">
                <span>5/5</span>
                <div className="flex space-x-0.5" aria-label="Note moyenne 5 étoiles sur 5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#F4845F] fill-current" aria-hidden="true" />
                  ))}
                </div>
              </div>
              <p className="text-[#1A1A18] mt-2 font-semibold tracking-wider text-[10px] uppercase">Note moyenne de nos formations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Offre Spéciale */}
      <section className="py-20 px-4 bg-[#F7F6F3] border-t border-[#D8D6CE]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-10">
            <h2 className="font-serif text-4xl sm:text-5xl mb-4 text-[#1A1A18] leading-tight">
              Offre <span className="text-[#F4845F]">spéciale</span>
            </h2>
            <div className="flex justify-center mb-5">
              <div className="h-[2px] w-16 bg-[#F4845F]" />
            </div>
            <p className="text-base sm:text-lg text-[#1A1A18] max-w-2xl mx-auto">
              L'excellence accessible à tous. Commence dès maintenant.
            </p>
          </div>

          <div className="bg-white border border-[#D8D6CE] rounded-xl overflow-hidden">
            <div className="h-[3px] w-full bg-[#F4845F]" />
            <div className="p-10 sm:p-14">
              <div className="mb-10">
                <div className="inline-block px-4 py-1.5 rounded-full bg-[#FDF0EC] border border-[#F9C4B0] text-[#C45A35] font-semibold uppercase tracking-wider text-xs mb-6">
                  Offre limitée
                </div>
                <div className="font-serif text-7xl sm:text-8xl text-[#F4845F] mb-3 leading-none">
                  Gratuit
                </div>
                <div className="text-lg sm:text-xl text-[#1A1A18] font-medium">
                  Stage de pré-entrée complet
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-10 border-t border-[#D8D6CE] pt-10">
                <div className="text-center">
                  <div className="w-14 h-14 bg-[#FDF0EC] rounded-xl mx-auto mb-3 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-[#F4845F]" />
                  </div>
                  <div className="font-semibold text-[#1A1A18]">6 jours intensifs</div>
                  <div className="text-xs text-[#1A1A18]/70 mt-1 uppercase tracking-wider">Immersion totale</div>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 bg-[#FDF0EC] rounded-xl mx-auto mb-3 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-[#F4845F]" />
                  </div>
                  <div className="font-semibold text-[#1A1A18]">Méthodes exclusives</div>
                  <div className="text-xs text-[#1A1A18]/70 mt-1 uppercase tracking-wider">Secrets de réussite</div>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 bg-[#FDF0EC] rounded-xl mx-auto mb-3 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-[#F4845F]" />
                  </div>
                  <div className="font-semibold text-[#1A1A18]">Suivi personnalisé</div>
                  <div className="text-xs text-[#1A1A18]/70 mt-1 uppercase tracking-wider">Coaching inclus</div>
                </div>
              </div>

              <Button asChild size="lg" className="bg-[#F4845F] hover:bg-[#C45A35] text-white px-9 py-7 text-base font-semibold rounded-lg shadow-none transition-colors w-full sm:w-auto">
                <a
                  href={buildWhatsAppLink(
                    'Prepa Rationnelle, je souhaite m\'inscrire au cours gratuit - Stage de Pré-entrée'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  S'inscrire gratuitement
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <p className="mt-5 text-xs text-[#1A1A18]/70 uppercase tracking-wider">
                Aucune carte bancaire requise · 100 % gratuit
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StageAccompagnementPage;
