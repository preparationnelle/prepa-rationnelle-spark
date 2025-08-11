import React from 'react';
import { Star, GraduationCap, BookOpen, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const StageAccompagnementPage = () => {
  const whatsappPhone = '33609164668';
  const buildWhatsAppLink = (message: string) =>
    `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
  return (
    <div className="min-h-screen bg-[#F0F8FF]">
      {/* Section 1 - Choisis l'offre qui boostera ta prépa */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Choisis l'offre qui boostera ta prépa
          </h1>
          
          {/* Grille des cartes d'offres */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Stage de Pré-entrée */}
            <Card className="p-6 text-center hover:shadow-lg transition-all bg-white">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Stage de Pré-entrée
              </h3>
              <p className="text-gray-600 mb-4">
                6 jours intensifs
          </p>
              <Button asChild variant="outline" className="hover:bg-orange-50">
                <a
                  href={buildWhatsAppLink(
                    'Prepa Rationnelle, je suis interessé par le stage de Pré-entrée'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contacter sur WhatsApp
                </a>
              </Button>
            </Card>

            {/* Coaching 1ère année */}
            <Card className="p-6 text-center hover:shadow-lg transition-all bg-white">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Coaching personnalisé - 1ʳᵉ année
              </h3>
              <p className="text-gray-600 mb-4">
                Accompagnement annuel
              </p>
              <Button asChild variant="outline" className="hover:bg-blue-50">
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
            <Card className="p-6 text-center hover:shadow-lg transition-all bg-white">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Coaching personnalisé - 2ᵉ année
              </h3>
              <p className="text-gray-600 mb-4">
                Accompagnement annuel
              </p>
              <Button asChild variant="outline" className="hover:bg-green-50">
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
      <section className="py-16 px-4 bg-[#F0F8FF]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Ce que disent nos étudiants
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center bg-white">
              <div className="flex justify-center mb-4" aria-label="Note 5 étoiles sur 5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="text-gray-700 italic mb-4">
                "J'ai gagné 4 points grâce à la méthodologie. Une transformation complète de ma façon de travailler."
              </blockquote>
              <p className="text-gray-500 font-medium">— Étudiant HEC</p>
            </Card>

            <Card className="p-6 text-center bg-white">
              <div className="flex justify-center mb-4" aria-label="Note 5 étoiles sur 5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="text-gray-700 italic mb-4">
                "Enfin une méthode claire pour hiérarchiser mes révisions. Je me sens beaucoup plus organisé."
              </blockquote>
              <p className="text-gray-500 font-medium">— Étudiant ESSEC</p>
            </Card>

            <Card className="p-6 text-center bg-white">
              <div className="flex justify-center mb-4" aria-label="Note 5 étoiles sur 5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="text-gray-700 italic mb-4">
                "Le suivi personnalisé fait toute la différence. Je recommande vivement !"
              </blockquote>
              <p className="text-gray-500 font-medium">— Étudiant ESCP</p>
            </Card>
          </div>

          <div className="text-center mt-8">
            <div className="inline-flex items-center space-x-2 text-2xl font-bold text-orange-500">
              <span>5/5</span>
              <div className="flex" aria-label="Note moyenne 5 étoiles sur 5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" aria-hidden="true" />
                ))}
              </div>
            </div>
            <p className="text-gray-600 mt-2">Note moyenne de nos formations</p>
          </div>
        </div>
      </section>

      {/* Section 4 - Tarif */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tarif</h2>
            <p className="text-gray-700 text-lg mb-6">
              Stage de Pré-entrée: <span className="font-semibold">199€</span>
            </p>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <a
                href={buildWhatsAppLink(
                  'Prepa Rationnelle, je souhaite réserver le stage de Pré-entrée (199€)'
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Réserver via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>


    </div>
  );
};

export default StageAccompagnementPage;