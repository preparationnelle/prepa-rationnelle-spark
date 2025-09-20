import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Award, ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';

const ArticlesConcoursAccesSesamePage = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden py-8 sm:py-8">
        {/* Floating elements - Red theme for ACCES/SESAME */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-200 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-red-200 rounded-full opacity-15 animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-red-100 rounded-full opacity-10 animate-pulse-slow"></div>
        <div className="absolute bottom-40 left-20 w-56 h-56 bg-red-200 rounded-full opacity-8 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-red-50 rounded-full opacity-10 animate-pulse-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-red-100 rounded-full opacity-8 animate-pulse"></div>
        <div className="absolute top-10 right-1/3 w-24 h-24 bg-red-300 rounded-full opacity-12 animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-1/4 w-36 h-36 bg-red-100 rounded-full opacity-10 animate-pulse"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <Award className="h-8 w-8 text-red-600" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                <span className="text-black">Concours </span>
                <span className="text-red-600">ACCES/SESAME</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Préparation aux concours d'entrée des études de santé (médecine, pharmacie, odontologie, maïeutique).
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button variant="outline" className="border-red-600 text-red-600 hover:border-red-700 hover:text-red-700">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Retour à l'accueil
                  </Button>
                </Link>
                <Link to="/articles">
                  <Button variant="outline" className="border-red-600 text-red-600 hover:border-red-700 hover:text-red-700">
                    ← Retour aux niveaux
                  </Button>
                </Link>
              </div>
            </div>

            {/* Article Concours ACCES/SESAME */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-red-200">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-3xl font-bold text-red-700 mb-2">Concours ACCES/SESAME - Études de Santé</h3>
                <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-red-100 text-red-700">
                  Article détaillé - Concours Santé
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700">
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400 mb-8">
                  <p className="text-red-800 font-medium text-lg">
                    Les concours ACCES (première année) et SESAME (deuxième année) sont les voies d'accès aux études de santé en France. Ces concours très sélectifs nécessitent une préparation rigoureuse et une stratégie d'orientation réfléchie.
                  </p>
                </div>

                <h4 className="text-2xl font-semibold text-red-700 mb-4 border-b-2 border-red-200 pb-2">Structure des concours</h4>

                <h5 className="text-xl font-semibold text-red-600 mb-3">Concours ACCES (Première année PACES)</h5>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Biologie</strong> : 2h (coefficient 3) - Physiologie, biochimie, génétique</li>
                  <li><strong>Chimie</strong> : 2h (coefficient 3) - Chimie organique et minérale</li>
                  <li><strong>Physique</strong> : 2h (coefficient 3) - Mécanique, électricité, optique</li>
                  <li><strong>Mathématiques</strong> : 1h (coefficient 2) - Analyse, statistiques</li>
                  <li><strong>Français-Philosophie</strong> : 2h (coefficient 1) - Dissertation</li>
                  <li><strong>Langues vivantes</strong> : 1h (coefficient 1) - Anglais obligatoire</li>
                </ul>

                <h5 className="text-xl font-semibold text-red-600 mb-3">Concours SESAME (Deuxième année)</h5>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>UE1 Biologie</strong> : QCM (coefficient 4) - Physiologie, biochimie</li>
                  <li><strong>UE2 Chimie-Physique</strong> : QCM (coefficient 4) - Chimie organique, physique</li>
                  <li><strong>UE3 Sciences humaines</strong> : Dissertation (coefficient 2) - Philosophie, sociologie</li>
                  <li><strong>UE4 Mathématiques</strong> : QCM (coefficient 2) - Statistiques, probabilités</li>
                  <li><strong>UE5 Anglais</strong> : QCM (coefficient 1) - Vocabulaire médical</li>
                  <li><strong>UE6 Épreuve orale</strong> : Entretien (coefficient 2) - Projet professionnel</li>
                </ul>

                <h4 className="text-2xl font-semibold text-red-700 mb-4 border-b-2 border-red-200 pb-2">Les filières accessibles</h4>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h6 className="font-semibold text-red-700 mb-2">Médecine</h6>
                    <p className="text-sm text-gray-600">Médecine générale et spécialités</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h6 className="font-semibold text-red-700 mb-2">Pharmacie</h6>
                    <p className="text-sm text-gray-600">Industrie, officine, recherche</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h6 className="font-semibold text-red-700 mb-2">Odontologie</h6>
                    <p className="text-sm text-gray-600">Chirurgie dentaire</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h6 className="font-semibold text-red-700 mb-2">Maïeutique</h6>
                    <p className="text-sm text-gray-600">Sage-femme</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h6 className="font-semibold text-red-700 mb-2">Kinésithérapie</h6>
                    <p className="text-sm text-gray-600">Rééducation fonctionnelle</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h6 className="font-semibold text-red-700 mb-2">Infirmier</h6>
                    <p className="text-sm text-gray-600">Soins infirmiers</p>
                  </div>
                </div>

                <h4 className="text-2xl font-semibold text-red-700 mb-4 border-b-2 border-red-200 pb-2">Préparation aux concours</h4>

                <h5 className="text-xl font-semibold text-red-600 mb-3">Pour ACCES (PACES)</h5>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Formation intensive en biologie, chimie, physique</li>
                  <li>Préparation aux QCM (questions à choix multiples)</li>
                  <li>Méthodologie de dissertation en français-philo</li>
                  <li>Entraînements réguliers aux conditions du concours</li>
                  <li>Gestion du stress et de la fatigue</li>
                </ul>

                <h5 className="text-xl font-semibold text-red-600 mb-3">Pour SESAME</h5>
                <ul className="list-disc pl-6 mb-6 space-y-1">
                  <li>Approfondissement des connaissances scientifiques</li>
                  <li>Préparation à l'épreuve orale (projet professionnel)</li>
                  <li>Travail sur les sciences humaines et sociales</li>
                  <li>Stage en milieu hospitalier recommandé</li>
                  <li>Préparation mentale aux oraux</li>
                </ul>

                <h4 className="text-2xl font-semibold text-red-700 mb-4 border-b-2 border-red-200 pb-2">Stratégies de réussite</h4>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Planification</strong> : Calendrier de révision structuré sur l'année</li>
                  <li><strong>Régularité</strong> : Travail quotidien sans relâche</li>
                  <li><strong>Méthode</strong> : S'entraîner aux QCM dès le début</li>
                  <li><strong>Santé</strong> : Équilibre vie privée/études, sport, sommeil</li>
                  <li><strong>Motivation</strong> : Objectifs clairs et réalistes</li>
                  <li><strong>Soutien</strong> : Entourage familial et professeurs</li>
                </ul>

                <h4 className="text-2xl font-semibold text-red-700 mb-4 border-b-2 border-red-200 pb-2">Les chiffres clés</h4>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h6 className="font-semibold text-red-700 mb-2">Taux de réussite ACCES</h6>
                    <p className="text-2xl font-bold text-red-600">10-15%</p>
                    <p className="text-sm text-gray-600">Selon les universités</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h6 className="font-semibold text-red-700 mb-2">Taux de réussite SESAME</h6>
                    <p className="text-2xl font-bold text-red-600">15-20%</p>
                    <p className="text-sm text-gray-600">Plus favorable que PACES</p>
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
                  <p className="text-red-800 font-medium">
                    Les études de santé exigent un investissement total mais offrent une carrière gratifiante. Avec une préparation rigoureuse et une motivation sans faille, l'accès aux professions médicales devient possible malgré la sélectivité de ces concours.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-br from-red-50 to-blue-50 border-2 border-red-200 hover:shadow-2xl hover:scale-105 hover:border-blue-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-red-50 transition-all duration-300 group p-8 rounded-lg">
                <div className="w-16 h-16 bg-red-100 group-hover:bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                  <Award className="h-8 w-8 text-red-600 group-hover:text-blue-600 transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-red-700 group-hover:text-blue-800 transition-colors duration-300">
                  Besoin d'aide pour vos concours santé ?
                </h3>
                <p className="text-gray-600 group-hover:text-blue-700 transition-colors duration-300 mb-6">
                  Nos professeurs spécialisés en PACES/SESAME vous accompagnent pour réussir vos concours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button size="lg" className="bg-red-600 hover:bg-blue-600 text-white transition-all duration-300">
                      Nous contacter
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticlesConcoursAccesSesamePage;

