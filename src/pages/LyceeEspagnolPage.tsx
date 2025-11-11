import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Languages, ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';

const LyceeEspagnolPage = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden py-8 sm:py-8">
        {/* Floating elements - Blue theme for espagnol */}
        <div className="absolute -z-10 top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute -z-10 bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-15 animate-pulse-slow"></div>
        <div className="absolute -z-10 top-40 right-20 w-48 h-48 bg-blue-100 rounded-full opacity-10 animate-pulse-slow"></div>
        <div className="absolute -z-10 bottom-40 left-20 w-56 h-56 bg-blue-200 rounded-full opacity-8 animate-pulse"></div>
        <div className="absolute -z-10 top-1/4 left-1/3 w-64 h-64 bg-blue-50 rounded-full opacity-10 animate-pulse-slow"></div>
        <div className="absolute -z-10 top-3/4 right-1/4 w-40 h-40 bg-blue-100 rounded-full opacity-8 animate-pulse"></div>
        <div className="absolute -z-10 top-10 right-1/3 w-24 h-24 bg-blue-300 rounded-full opacity-12 animate-pulse-slow"></div>
        <div className="absolute -z-10 bottom-10 left-1/4 w-36 h-36 bg-blue-100 rounded-full opacity-10 animate-pulse"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Languages className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                <span className="text-black">Espagnol - </span>
                <span className="text-blue-600">Terminale</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Méthodologie complète pour maîtriser l'espagnol et réussir les épreuves du baccalauréat.
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

            {/* Article Espagnol - Méthodologie */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-blue-200">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Languages className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-blue-700 mb-2">Méthodologie pour travailler l'espagnol en classe de terminale</h3>
                <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
                  Article détaillé - LV2 Espagnol Terminale
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700">
                <h4 className="text-2xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">Organisation générale du travail</h4>

                <h5 className="text-xl font-semibold text-blue-600 mb-3">Planification hebdomadaire structurée</h5>
                <p className="mb-4">
                  En terminale, l'espagnol est évalué en contrôle continu, ce qui rend le travail régulier indispensable. Avec seulement 2 heures de cours par semaine, l'organisation personnelle devient cruciale. Il faut prévoir un minimum de 3 à 4 heures de travail personnel hebdomadaire, réparties sur plusieurs séances courtes plutôt qu'une seule longue.
                </p>

                <h5 className="text-xl font-semibold text-blue-600 mb-3">Gestion du temps quotidien</h5>
                <p className="mb-6">
                  Consacrez 20 à 30 minutes par jour à l'espagnol. Cette régularité permet une meilleure assimilation que des sessions de travail intensives mais espacées. Utilisez un planning de révisions pour équilibrer l'espagnol avec vos autres matières.
                </p>

                <h4 className="text-2xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">Les 5 compétences langagières à développer</h4>

                <h5 className="text-xl font-semibold text-blue-600 mb-3">1. Compréhension écrite</h5>
                <p className="mb-4">
                  Travaillez régulièrement avec des textes authentiques en espagnol. Commencez par des articles de presse faciles avant de progresser vers des textes littéraires. La technique recommandée :
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Première lecture rapide pour saisir le sens général</li>
                  <li>Seconde lecture détaillée en relevant les mots-clés</li>
                  <li>Troisième lecture pour analyser la structure et les arguments</li>
                </ul>

                <h5 className="text-xl font-semibold text-blue-600 mb-3">2. Compréhension orale</h5>
                <p className="mb-4">
                  Entraînez-vous avec des supports variés : podcasts, extraits radiophoniques, vidéos courtes. Progressez en trois étapes :
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Version originale espagnole avec sous-titres français</li>
                  <li>Version originale avec sous-titres espagnols</li>
                  <li>Version originale sans sous-titres</li>
                </ul>

                <h5 className="text-xl font-semibold text-blue-600 mb-3">3. Expression écrite</h5>
                <p className="mb-6">
                  Maîtrisez d'abord la grammaire et la conjugaison pour éviter les erreurs de base. Entraînez-vous régulièrement à rédiger des textes de 200 à 300 mots selon votre filière. Veillez particulièrement à la structure : introduction, développement avec arguments et exemples, conclusion.
                </p>

                <h5 className="text-xl font-semibold text-blue-600 mb-3">4. Expression orale en continu</h5>
                <p className="mb-6">
                  Préparez-vous aux présentations orales en travaillant les notions du programme. Enregistrez-vous régulièrement pour corriger votre prononciation et votre intonation. Structurez toujours vos présentations : introduction avec problématique et plan, développement avec arguments et exemples, conclusion avec ouverture.
                </p>

                <h5 className="text-xl font-semibold text-blue-600 mb-3">5. Expression orale en interaction</h5>
                <p className="mb-6">
                  Participez activement en cours et n'hésitez pas à poser des questions en espagnol. Organisez des séances de révision avec des camarades pour simuler des conversations.
                </p>

                <h4 className="text-2xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">Méthodes d'apprentissage efficaces</h4>

                <h5 className="text-xl font-semibold text-blue-600 mb-3">Vocabulaire et fiches thématiques</h5>
                <p className="mb-6">
                  Créez des fiches de vocabulaire par thèmes liés aux notions du programme. Utilisez la technique des flashcards : mot espagnol d'un côté, traduction française de l'autre. Apprenez 15 à 20 nouveaux mots par semaine de manière régulière.
                </p>

                <h5 className="text-xl font-semibold text-blue-600 mb-3">Grammaire et conjugaison</h5>
                <p className="mb-6">
                  Maîtrisez les verbes irréguliers et les temps essentiels. Travaillez un point de grammaire spécifique chaque semaine et réalisez des exercices d'application. Les conjugaisons au présent, passé et futur sont prioritaires.
                </p>

                <h5 className="text-xl font-semibold text-blue-600 mb-3">Immersion culturelle quotidienne</h5>
                <p className="mb-4">
                  Intégrez l'espagnol dans votre quotidien :
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-1">
                  <li>Écoutez de la musique espagnole et analysez les paroles</li>
                  <li>Regardez des séries ou films en version originale</li>
                  <li>Lisez la presse hispanophone (El País, actualités d'Amérique Latine)</li>
                  <li>Consultez des sites comme RTVE pour l'actualité</li>
                </ul>

                <h4 className="text-2xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">Préparation aux épreuves du baccalauréat</h4>

                <h5 className="text-xl font-semibold text-blue-600 mb-3">Maîtrise des notions du programme</h5>
                <p className="mb-4">
                  Les huit axes thématiques du programme de terminale doivent être parfaitement maîtrisés :
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Identités et échanges</li>
                  <li>Espace privé et espace public</li>
                  <li>Art et pouvoir</li>
                  <li>Citoyenneté et mondes virtuels</li>
                  <li>Fictions et réalités</li>
                  <li>Innovations scientifiques et responsabilités</li>
                  <li>Diversité et inclusion</li>
                  <li>Territoire et mémoire</li>
                </ul>

                <h5 className="text-xl font-semibold text-blue-600 mb-3">Entraînement aux épreuves</h5>
                <p className="mb-6">
                  Refaites régulièrement les exercices de compréhension écrite et orale travaillés en cours. Chronométrez-vous pour respecter les contraintes de temps des épreuves. Pour l'oral, entraînez-vous à présenter chaque notion en 5 minutes avec une structure claire.
                </p>

                <h4 className="text-2xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">Outils et ressources recommandés</h4>

                <h5 className="text-xl font-semibold text-blue-600 mb-3">Supports numériques</h5>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li><strong>Espagnolfacile.com</strong> pour réviser les conjugaisons</li>
                  <li><strong>Audio-lingua.ac-versailles.fr</strong> pour la compréhension orale selon votre niveau</li>
                  <li>Applications comme <strong>Quizlet</strong> pour le vocabulaire</li>
                  <li><strong>Vocable.fr</strong> pour l'actualité hispanophone adaptée aux lycéens</li>
                </ul>

                <h5 className="text-xl font-semibold text-blue-600 mb-3">Méthodes de travail collaboratif</h5>
                <p className="mb-8">
                  Organisez des groupes de révision avec des camarades sérieux. Alternez les rôles : un jour candidat, un jour examinateur pour simuler les épreuves orales. Cette méthode permet de travailler l'expression orale tout en révisant le contenu.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                  <p className="text-blue-800 font-medium">
                    La réussite en espagnol en terminale repose sur trois piliers fondamentaux : la régularité du travail, la diversité des supports d'apprentissage et l'entraînement systématique aux épreuves. En appliquant ces méthodes de manière cohérente tout au long de l'année, vous développerez progressivement les compétences nécessaires pour exceller dans cette matière évaluée en contrôle continu.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-br from-blue-50 to-orange-50 border-2 border-blue-200 hover:shadow-2xl hover:scale-105 hover:border-orange-300 hover:bg-gradient-to-br hover:from-orange-50 hover:to-blue-50 transition-all duration-300 group p-8 rounded-lg">
                <div className="w-16 h-16 bg-blue-100 group-hover:bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                  <Languages className="h-8 w-8 text-blue-600 group-hover:text-orange-600 transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-700 group-hover:text-orange-800 transition-colors duration-300">
                  Besoin d'aide personnalisée en espagnol ?
                </h3>
                <p className="text-gray-600 group-hover:text-orange-700 transition-colors duration-300 mb-6">
                  Nos experts vous accompagnent pour maîtriser l'espagnol et réussir votre LV2.
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

export default LyceeEspagnolPage;
