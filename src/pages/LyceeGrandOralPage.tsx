import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Award, ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';

const LyceeGrandOralPage = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden py-8 sm:py-8">
        {/* Floating elements - Blue theme for grand oral */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-15 animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-blue-100 rounded-full opacity-10 animate-pulse-slow"></div>
        <div className="absolute bottom-40 left-20 w-56 h-56 bg-blue-200 rounded-full opacity-8 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-50 rounded-full opacity-10 animate-pulse-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-blue-100 rounded-full opacity-8 animate-pulse"></div>
        <div className="absolute top-10 right-1/3 w-24 h-24 bg-blue-300 rounded-full opacity-12 animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-1/4 w-36 h-36 bg-blue-100 rounded-full opacity-10 animate-pulse"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                <span className="text-black">Grand Oral - </span>
                <span className="text-blue-600">Terminale</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Préparation complète au Grand Oral du baccalauréat : méthodologie, entraînement et conseils pratiques.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/articles/lycee/terminale">
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:border-blue-700 hover:text-blue-700">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Retour à Terminale
                  </Button>
                </Link>
                <Link to="/articles/lycee">
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:border-blue-700 hover:text-blue-700">
                    ← Retour aux niveaux lycée
                  </Button>
                </Link>
              </div>
            </div>

            {/* Article Grand Oral - Préparation */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-blue-200">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-blue-700 mb-2">Préparer le Grand Oral en Terminale</h3>
                <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
                  Article détaillé - Grand Oral Terminale
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700">
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-red-400 mb-8">
                  <p className="text-blue-800 font-medium text-lg">
                    <strong>Objectif principal :</strong> Réussir le Grand Oral du baccalauréat en démontrant une maîtrise du sujet (connaissances solides), une capacité d'argumentation claire et convaincante, une aisance à l'oral et au contact du jury.
                  </p>
                </div>

                <h4 className="text-2xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">1. Comprendre l'épreuve</h4>

                <p className="mb-4">
                  <strong>Durée :</strong> 20 minutes (5 min de présentation, 10 min d'entretien, 5 min de discussion libre).
                </p>
                <p className="mb-4">
                  <strong>Modalités :</strong> deux spécialités choisies, chaque candidat présente un exposé de l'une puis de l'autre à l'oral.
                </p>
                <p className="mb-6">
                  <strong>Critères d'évaluation :</strong>
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-1">
                  <li>Pertinence et profondeur du contenu</li>
                  <li>Qualité de l'argumentation et de la structure</li>
                  <li>Maîtrise du langage et du vocabulaire</li>
                  <li>Interaction avec le jury</li>
                  <li>Gestion du temps et du stress</li>
                </ul>

                <h4 className="text-2xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">2. Sélection et formulation du sujet</h4>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Choisir un angle précis pour chacune de vos deux spécialités</li>
                  <li>Formuler une problématique claire et engageante (question centrale)</li>
                  <li>Définir 3 à 4 idées fortes (axes) pour structurer l'exposé</li>
                </ul>

                <p className="mb-4">
                  Rédiger un plan détaillé :
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-1">
                  <li><strong>Introduction :</strong> accroche + problématique</li>
                  <li><strong>Développement :</strong> trois parties argumentées</li>
                  <li><strong>Conclusion :</strong> synthèse + ouverture</li>
                </ul>

                <h4 className="text-2xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">3. Construire l'exposé</h4>

                <h5 className="text-xl font-semibold text-blue-600 mb-3">Introduction (1 minute)</h5>
                <ul className="list-disc pl-6 mb-6 space-y-1">
                  <li><strong>Accroche :</strong> fait marquant, citation, anecdote</li>
                  <li><strong>Présentation du sujet et de la problématique</strong></li>
                  <li><strong>Annonce du plan</strong></li>
                </ul>

                <h5 className="text-xl font-semibold text-blue-600 mb-3">Développement (3 à 4 parties)</h5>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li><strong>Idée 1 :</strong> définition + exemples concrets</li>
                  <li><strong>Idée 2 :</strong> approfondissement + données/chiffres</li>
                  <li><strong>Idée 3 :</strong> contre-argument/limite + réponse</li>
                  <li><strong>(Eventuel) Idée 4 :</strong> ouverture transversale</li>
                </ul>

                <h5 className="text-xl font-semibold text-blue-600 mb-3">Conclusion</h5>
                <ul className="list-disc pl-6 mb-6 space-y-1">
                  <li><strong>Récapitulation rapide</strong></li>
                  <li><strong>Réponse synthétique à la problématique</strong></li>
                  <li><strong>Ouverture sur un enjeu plus large</strong></li>
                </ul>

                <h4 className="text-2xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">4. S'entraîner efficacement</h4>

                <h5 className="text-xl font-semibold text-blue-600 mb-3">Techniques d'entraînement</h5>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li><strong>Bâton de parole :</strong> s'enregistrer ou simuler devant un tiers</li>
                  <li><strong>Chronométrage :</strong> respecter le temps imparti (5 min)</li>
                </ul>

                <h5 className="text-xl font-semibold text-blue-600 mb-3">Mises en situation</h5>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Travail en duo pour jouer le rôle du jury</li>
                  <li>Passer plusieurs fois l'exposé sans notes avant de les réduire peu à peu</li>
                </ul>

                <h5 className="text-xl font-semibold text-blue-600 mb-3">Feedback systématique</h5>
                <ul className="list-disc pl-6 mb-6 space-y-1">
                  <li>Liste des mots de liaison à enrichir</li>
                  <li>Correction des tics de langage et postures</li>
                  <li>Amélioration du contact visuel</li>
                </ul>

                <h4 className="text-2xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">5. Gérer le stress et l'imprévu</h4>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Techniques de respiration et relaxation avant l'épreuve</li>
                  <li>Prévoir des cartes Mémo (mots-clés seulement)</li>
                </ul>

                <p className="mb-4">
                  Anticiper les questions pièges :
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-1">
                  <li>Portez un regard critique sur vos arguments</li>
                  <li>Préparez des réponses courtes et précises</li>
                </ul>

                <p className="mb-8">
                  Adopter une posture ouverte : sourire, mains visibles, regard franc.
                </p>

                <h4 className="text-2xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">6. Planning de révision (sur 4 semaines)</h4>

                <h5 className="text-xl font-semibold text-blue-600 mb-3">Semaine 1</h5>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Choix des sujets + formulation des problématiques</li>
                  <li>Recherche documentaire et collecte d'exemples</li>
                </ul>

                <h5 className="text-xl font-semibold text-blue-600 mb-3">Semaine 2</h5>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Rédaction des plans détaillés</li>
                  <li>Première rédaction complète des exposés</li>
                </ul>

                <h5 className="text-xl font-semibold text-blue-600 mb-3">Semaine 3</h5>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Entraînements oraux chronométrés (3 fois/jour)</li>
                  <li>Travail sur la diction, l'élocution et la voix</li>
                </ul>

                <h5 className="text-xl font-semibold text-blue-600 mb-3">Semaine 4</h5>
                <ul className="list-disc pl-6 mb-6 space-y-1">
                  <li>Simulations devant jury (pairs, professeurs)</li>
                  <li>Ajustements finaux et renforcement de la confiance</li>
                </ul>

                <h4 className="text-2xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">7. Conseils clés</h4>

                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Clarté avant quantité :</strong> privilégier un discours fluide et argumenté plutôt qu'une accumulation d'informations</li>
                  <li><strong>Spécificité des exemples :</strong> valoriser des cas concrets, chiffrés ou issus de l'actualité</li>
                  <li><strong>Interactions :</strong> traiter la discussion comme un échange, pas un interrogatoire</li>
                  <li><strong>Authenticité :</strong> montrer votre intérêt et votre personnalité à travers le sujet</li>
                </ul>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-red-400">
                  <p className="text-blue-800 font-medium">
                    Bien préparé, le Grand Oral devient une véritable opportunité de valoriser votre travail et votre personnalité. Bonne réussite !
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-br from-red-50 to-blue-50 border-2 border-blue-200 hover:shadow-2xl hover:scale-105 hover:border-blue-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-red-50 transition-all duration-300 group p-8 rounded-lg">
                <div className="w-16 h-16 bg-blue-100 group-hover:bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                  <Award className="h-8 w-8 text-blue-600 group-hover:text-blue-600 transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-700 group-hover:text-blue-800 transition-colors duration-300">
                  Besoin d'aide pour votre Grand Oral ?
                </h3>
                <p className="text-gray-600 group-hover:text-blue-700 transition-colors duration-300 mb-6">
                  Nos experts vous accompagnent pour maîtriser votre présentation et réussir votre Grand Oral.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-600 text-white transition-all duration-300">
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

export default LyceeGrandOralPage;
