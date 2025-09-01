import React, { useState } from 'react';
import { Star, GraduationCap, BookOpen, Zap, ChevronDown, ChevronUp } from 'lucide-react';
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
    <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden">
      {/* Floating elements - Blue bubbles only */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-15 animate-pulse-slow"></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-blue-100 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-40 left-20 w-56 h-56 bg-blue-200 rounded-full opacity-8 animate-pulse"></div>
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-50 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-blue-100 rounded-full opacity-8 animate-pulse"></div>
      <div className="absolute top-10 right-1/3 w-24 h-24 bg-blue-300 rounded-full opacity-12 animate-pulse-slow"></div>
      <div className="absolute bottom-10 left-1/4 w-36 h-36 bg-blue-100 rounded-full opacity-10 animate-pulse"></div>

      {/* Section 1 - Hero */}
      <section className="pt-20 pb-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="text-black">Choisis l'offre qui </span>
              <span className="text-blue-600">boostera</span>
              <span className="text-black"> ta prépa</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Accompagnement personnalisé pour maximiser tes performances et atteindre tes objectifs
            </p>
          </div>
          
          {/* Grille des cartes d'offres */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">


            {/* Coaching 1ère année */}
            <Card className="p-8 text-center hover:shadow-2xl hover:scale-110 hover:-translate-y-2 hover:border-orange-300 hover:bg-orange-50 transition-all duration-300 group bg-white">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 group-hover:from-orange-500 group-hover:to-orange-600 rounded-full mx-auto mb-6 flex items-center justify-center transition-all duration-300">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-700 group-hover:text-orange-800 transition-colors duration-300 mb-3">
                Coaching personnalisé
              </h3>
              <div className="text-lg text-blue-600 group-hover:text-orange-600 transition-colors duration-300 mb-4 font-semibold">
                1ʳᵉ année
              </div>
              <p className="text-gray-600 group-hover:text-orange-700 transition-colors duration-300 mb-6 text-lg">
                Accompagnement annuel personnalisé
              </p>
              <Button asChild className="bg-blue-600 hover:bg-orange-600 text-white w-full">
                <a
                  href={buildWhatsAppLink(
                    'Prepa Rationnelle, je suis interessé par un coaching en première année'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contacter sur WhatsApp
                </a>
              </Button>
            </Card>

            {/* Coaching 2ème année */}
            <Card className="p-8 text-center hover:shadow-2xl hover:scale-110 hover:-translate-y-2 hover:border-orange-300 hover:bg-orange-50 transition-all duration-300 group bg-white">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 group-hover:from-orange-500 group-hover:to-orange-600 rounded-full mx-auto mb-6 flex items-center justify-center transition-all duration-300">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-700 group-hover:text-orange-800 transition-colors duration-300 mb-3">
                Coaching personnalisé
              </h3>
              <div className="text-lg text-blue-600 group-hover:text-orange-600 transition-colors duration-300 mb-4 font-semibold">
                2ᵉ année
              </div>
              <p className="text-gray-600 group-hover:text-orange-700 transition-colors duration-300 mb-6 text-lg">
                Accompagnement annuel intensif
              </p>
              <Button asChild className="bg-blue-600 hover:bg-orange-600 text-white w-full">
                <a
                  href={buildWhatsAppLink(
                    'Prepa Rationnelle, je suis interessé par un coaching en deuxième année'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contacter sur WhatsApp
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 2 supprimée (vidéo) */}

      {/* Section 3 - Ce que disent nos étudiants */}
      <section className="py-16 px-4 bg-[#F8FAFF] relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-black">Ce que disent nos </span>
              <span className="text-blue-600">étudiants</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez les témoignages de nos étudiants qui ont transformé leur prépa
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => {
              const isExpanded = expandedTestimonials.includes(index);
              const displayText = isExpanded ? testimonial.quote : truncateText(testimonial.quote, 150);
              
              return (
                <Card key={index} className="p-8 bg-white hover:shadow-2xl hover:scale-105 hover:border-orange-300 hover:bg-orange-50 transition-all duration-300 group cursor-pointer" onClick={() => toggleTestimonial(index)}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 group-hover:from-orange-500 group-hover:to-orange-600 rounded-full flex items-center justify-center mr-4 transition-all duration-300">
                      <span className="text-white font-bold text-sm">{testimonial.initials}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-blue-700 group-hover:text-orange-800 transition-colors duration-300">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600 group-hover:text-orange-600 transition-colors duration-300">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-center mb-4" aria-label="Note 5 étoiles sur 5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current group-hover:text-orange-400 transition-colors duration-300" aria-hidden="true" />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-700 group-hover:text-orange-800 italic mb-4 text-base transition-colors duration-300 leading-relaxed">
                    "{displayText}"
                  </blockquote>
                  
                  <div className="flex items-center justify-center">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-blue-600 group-hover:text-orange-600 hover:bg-blue-50 group-hover:hover:bg-orange-50 transition-colors duration-300"
                    >
                      {isExpanded ? (
                        <>
                          <ChevronUp className="w-4 h-4 mr-1" />
                          Réduire
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4 mr-1" />
                          Lire plus
                        </>
                      )}
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 inline-block hover:shadow-2xl hover:scale-105 hover:border-orange-300 hover:bg-orange-50 transition-all duration-300 group">
              <div className="inline-flex items-center space-x-3 text-3xl font-bold text-blue-600 group-hover:text-orange-600 transition-colors duration-300">
                <span>5/5</span>
                <div className="flex" aria-label="Note moyenne 5 étoiles sur 5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-7 h-7 text-yellow-400 fill-current group-hover:text-orange-400 transition-colors duration-300" aria-hidden="true" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 group-hover:text-orange-700 transition-colors duration-300 mt-2 font-medium">Note moyenne de nos formations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Offre Spéciale */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-orange-50 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-black">Offre </span>
              <span className="text-green-600">Spéciale</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Profitez de notre stage intensif de pré-entrée entièrement gratuit
            </p>
          </div>
          
          <div className="bg-white rounded-3xl p-10 shadow-2xl border border-blue-100 hover:shadow-3xl hover:scale-105 transition-all duration-300 group relative overflow-hidden">
            {/* Gradient background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-orange-500/5 group-hover:from-orange-500/10 group-hover:to-blue-500/10 transition-all duration-300"></div>
            
            <div className="relative z-10">
              <div className="mb-8">
                <div className="text-5xl font-bold text-green-600 group-hover:text-orange-600 transition-colors duration-300 mb-2">
                  GRATUIT
                </div>
                <div className="text-xl text-gray-600 group-hover:text-orange-700 transition-colors duration-300 font-medium">
                  Cours gratuit - Stage de Pré-entrée complet
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 group-hover:bg-orange-100 rounded-full mx-auto mb-3 flex items-center justify-center transition-colors duration-300">
                    <GraduationCap className="w-6 h-6 text-blue-600 group-hover:text-orange-600 transition-colors duration-300" />
                  </div>
                  <div className="font-semibold text-gray-800 group-hover:text-orange-800 transition-colors duration-300">6 jours intensifs</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 group-hover:bg-orange-100 rounded-full mx-auto mb-3 flex items-center justify-center transition-colors duration-300">
                    <BookOpen className="w-6 h-6 text-blue-600 group-hover:text-orange-600 transition-colors duration-300" />
                  </div>
                  <div className="font-semibold text-gray-800 group-hover:text-orange-800 transition-colors duration-300">Méthodes exclusives</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 group-hover:bg-orange-100 rounded-full mx-auto mb-3 flex items-center justify-center transition-colors duration-300">
                    <Zap className="w-6 h-6 text-blue-600 group-hover:text-orange-600 transition-colors duration-300" />
                  </div>
                  <div className="font-semibold text-gray-800 group-hover:text-orange-800 transition-colors duration-300">Suivi personnalisé</div>
                </div>
              </div>
              
              <Button asChild size="lg" className="bg-green-600 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold">
                <a
                  href={buildWhatsAppLink(
                    'Prepa Rationnelle, je souhaite m\'inscrire au cours gratuit - Stage de Pré-entrée'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  S'inscrire gratuitement via WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default StageAccompagnementPage;