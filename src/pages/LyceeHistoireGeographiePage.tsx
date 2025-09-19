import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Globe, ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';

const LyceeHistoireGeographiePage = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden py-8 sm:py-8">
        {/* Floating elements - Blue theme for histoire-géographie */}
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
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                <span className="text-black">Histoire-Géographie - </span>
                <span className="text-blue-600">Terminale</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Méthodologie complète pour maîtriser Histoire-Géographie et réussir les épreuves du baccalauréat.
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

            {/* Article Histoire-Géographie - Méthodologie */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-blue-200">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-blue-700 mb-2">Méthodologie pour travailler efficacement en Terminale HGG</h3>
                <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
                  Article détaillé - Histoire-Géographie Terminale
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700">
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-orange-400 mb-8">
                  <p className="text-blue-800 font-medium text-lg">
                    <strong>Principale recommandation :</strong> Adopter une approche active et structurée qui combine préparation avant le cours, prise de notes intelligente, révision régulière et entraînement à l'écrit et à l'oral.
                  </p>
                </div>

                <h4 className="text-2xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">1. Avant le cours</h4>

                <h5 className="text-xl font-semibold text-orange-600 mb-3">Repérer le thème et les enjeux</h5>
                <p className="mb-4">
                  Consulter le programme officiel pour identifier la période ou la problématique (ex. : « Les sociétés face aux risques »).
                </p>
                <p className="mb-6">
                  Lire rapidement le chapitre dans le manuel ou les documents distribués afin de repérer les dates clés, les notions centrales et les mots-clés (géographique, notions de puissance, mondialisation…).
                </p>

                <h5 className="text-xl font-semibold text-orange-600 mb-3">Préparer des questions</h5>
                <p className="mb-6">
                  Formuler deux ou trois questions précises sur les points obscurs (ex. : « Quelle distinction entre développement et croissance ? »).
                </p>
                <p className="mb-6">
                  Noter ces questions dans un carnet pour guider l'écoute et la prise de notes.
                </p>

                <h4 className="text-2xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">2. Pendant le cours</h4>

                <h5 className="text-xl font-semibold text-orange-600 mb-3">Prise de notes active</h5>
                <p className="mb-4">
                  Structurer la page : titre du cours, date, plan du professeur (I / II / III).
                </p>
                <p className="mb-4">
                  Souligner ou coder par couleur :
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Dates et repères chronologiques</li>
                  <li>Concepts clés et définitions (puissance, frontière, réseau…)</li>
                  <li>Exemples concrets et cartes géographiques</li>
                </ul>
                <p className="mb-6">
                  Recenser les questions posées par l'enseignant et y répondre directement sous la forme d'annotations.
                </p>

                <h5 className="text-xl font-semibold text-orange-600 mb-3">Exploiter les supports visuels</h5>
                <p className="mb-4">
                  Pour chaque carte, schéma ou graphique :
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Noter le titre et la légende</li>
                  <li>Résumer en une phrase le message principal</li>
                  <li>Faire un mini-schéma personnel à la marge pour retenir l'organisation spatiale ou géographique</li>
                </ul>

                <h5 className="text-xl font-semibold text-orange-600 mb-3">Participation et interaction</h5>
                <p className="mb-6">
                  Reprendre ses questions préparées pour les poser au professeur dès que possible.
                </p>
                <p className="mb-6">
                  Compléter sa prise de notes avec les éléments nouveaux apportés par les échanges en classe.
                </p>

                <h4 className="text-2xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">3. Après le cours</h4>

                <h5 className="text-xl font-semibold text-orange-600 mb-3">Mise au propre et compléments</h5>
                <p className="mb-6">
                  Relire ses notes dans les 24 heures pour clarifier la rédaction et corriger les éventuelles coquilles.
                </p>
                <p className="mb-6">
                  Ajouter, si besoin, des informations issues de manuels complémentaires ou d'articles (cartes détaillées, données chiffrées…).
                </p>

                <h5 className="text-xl font-semibold text-orange-600 mb-3">Fiches de révision thématiques</h5>
                <p className="mb-4">
                  Pour chaque notion, créer une fiche regroupant :
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Définition précise et date(s)</li>
                  <li>Enjeux et problématiques associées</li>
                  <li>Exemples concrets et cas d'étude</li>
                  <li>Carte ou schéma simplifié</li>
                </ul>
                <p className="mb-6">
                  Classer les fiches par grands chapitres du programme (La France dans l'Union européenne, dynamiques territoriales, puissance continentale…).
                </p>

                <h5 className="text-xl font-semibold text-orange-600 mb-3">Quiz et auto-évaluation</h5>
                <p className="mb-6">
                  Élaborer des QCM ou des questions ouvertes sur chaque fiche.
                </p>
                <p className="mb-6">
                  Se tester régulièrement (au moins une fois par semaine) en se chronométrant.
                </p>

                <h4 className="text-2xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">4. Entraînement aux épreuves écrites et orales</h4>

                <h5 className="text-xl font-semibold text-orange-600 mb-3">Dissertation et étude critique de documents</h5>
                <p className="mb-4">
                  Structurer systématiquement l'introduction (accroche, définition des termes, problématique, annonce de plan).
                </p>
                <p className="mb-4">
                  Pratiquer au moins un sujet complet par quinzaine, en variant :
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Dissertations historiques</li>
                  <li>Études de documents hybrides (texte + carte)</li>
                </ul>
                <p className="mb-6">
                  Faire relire et corriger ses productions par un camarade ou un professeur.
                </p>

                <h5 className="text-xl font-semibold text-orange-600 mb-3">Grand oral</h5>
                <p className="mb-4">
                  Travailler la formulation claire de ses idées : préparer des fiches orales de 5 minutes sur chaque thème majeur.
                </p>
                <p className="mb-6">
                  S'entraîner à répondre aux questions de manière concise, en appuyant sur des exemples spatiaux ou historiques précis.
                </p>
                <p className="mb-6">
                  Filmer une répétition pour analyser son posture, son rythme et son intonation.
                </p>

                <h4 className="text-2xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">5. Gestion du temps et régularité</h4>

                <h5 className="text-xl font-semibold text-orange-600 mb-3">Planifier chaque semaine</h5>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Deux séances de lecture approfondie (1 h chacune)</li>
                  <li>Deux séances de fiches et QCM (45 min chacune)</li>
                  <li>Un sujet d'épreuve (2 h)</li>
                </ul>
                <p className="mb-8">
                  Alterner travail écrit et oral pour éviter la monotonie et renforcer l'apprentissage multisensoriel.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-orange-400">
                  <p className="text-blue-800 font-medium">
                    En combinant préparation, prise de notes active, révisions régulières et entraînements ciblés, vous optimiserez votre maîtrise du programme d'HGG et développerez votre aisance aux différentes épreuves du baccalauréat.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-br from-blue-50 to-orange-50 border-2 border-blue-200 hover:shadow-2xl hover:scale-105 hover:border-orange-300 hover:bg-gradient-to-br hover:from-orange-50 hover:to-blue-50 transition-all duration-300 group p-8 rounded-lg">
                <div className="w-16 h-16 bg-blue-100 group-hover:bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                  <Globe className="h-8 w-8 text-blue-600 group-hover:text-orange-600 transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-700 group-hover:text-orange-800 transition-colors duration-300">
                  Besoin d'aide personnalisée en Histoire-Géographie ?
                </h3>
                <p className="text-gray-600 group-hover:text-orange-700 transition-colors duration-300 mb-6">
                  Nos experts vous accompagnent pour maîtriser HGG et réussir vos épreuves du bac.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button size="lg" className="bg-blue-600 hover:bg-orange-600 text-white transition-all duration-300">
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

export default LyceeHistoireGeographiePage;
