import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { GraduationCap, ArrowLeft } from 'lucide-react';

const LyceePhilosophiePage = () => {
  return (
    <>
      <div className="relative py-8 sm:py-8">
        {/* Floating elements - Blue theme for philosophie */}

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-carnet-red/10 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-carnet-red" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                <span className="text-black">Philosophie - </span>
                <span className="text-carnet-red">Terminale</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Méthodologie complète de la dissertation de philosophie pour réussir l'épreuve du baccalauréat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/articles/lycee/terminale">
                  <Button variant="outline" className="border-carnet-red text-carnet-red hover:border-carnet-red-deep hover:text-carnet-red">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Retour à Terminale
                  </Button>
                </Link>
                <Link to="/articles/lycee">
                  <Button variant="outline" className="border-carnet-red text-carnet-red hover:border-carnet-red-deep hover:text-carnet-red">
                    ← Retour aux niveaux lycée
                  </Button>
                </Link>
              </div>
            </div>

            {/* Article Philosophie - Méthodologie de la dissertation */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-carnet-red/30">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-carnet-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-carnet-red" />
                </div>
                <h3 className="text-3xl font-bold text-carnet-red mb-2">Méthodologie de la dissertation de philosophie en terminale</h3>
                <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-carnet-red/10 text-carnet-red">
                  Article détaillé - Philosophie Terminale
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-lg mb-6 leading-relaxed">
                  La dissertation de philosophie constitue l'épreuve reine du baccalauréat en terminale. Il s'agit d'un exercice d'argumentation qui vise à présenter une réponse structurée et réfléchie à partir d'un sujet donné. Cette épreuve exige une méthode rigoureuse que tout élève de terminale doit maîtriser.
                </p>

                <h4 className="text-2xl font-semibold text-carnet-red mb-4 border-b-2 border-carnet-red/30 pb-2">Les étapes préparatoires</h4>

                <h5 className="text-xl font-semibold text-carnet-red mb-3">Analyser le sujet en profondeur</h5>
                <p className="mb-4">
                  La première étape consiste à lire attentivement le sujet plusieurs fois pour éviter tout contresens. Il faut ensuite définir précisément chaque terme du sujet en choisissant des définitions spécifiques et justifiées. Cette définition permet de cerner exactement de quoi l'on parle et d'éviter les malentendus.
                </p>
                <div className="bg-pr-orange-pale p-4 rounded-lg mb-4 border-l-4 border-carnet-red/40">
                  <p className="italic text-carnet-red-deep">
                    Par exemple, pour le sujet "Le travail n'est-il qu'une contrainte ?", il convient de définir séparément "travail" (activité rémunérée permettant la production de biens et services) et "contrainte" (chose imposée par l'extérieur contre la volonté).
                  </p>
                </div>

                <h5 className="text-xl font-semibold text-carnet-red mb-3">Problématiser le sujet</h5>
                <p className="mb-4">
                  L'analyse des termes doit faire émerger un paradoxe ou une tension intellectuelle. Cette problématique constitue le cœur battant de la dissertation car elle donne la direction et l'élan de l'écrit. La problématique doit être formulée sous forme de question commençant par "en quoi" ou "est-ce que".
                </p>

                <h5 className="text-xl font-semibold text-carnet-red mb-3">Faire un brainstorming</h5>
                <p className="mb-6">
                  Il faut ensuite étaler ses idées sur le brouillon en notant toutes les réflexions qui viennent à l'esprit concernant le sujet. Cette phase permet de mobiliser ses connaissances philosophiques, ses références et ses exemples.
                </p>

                <h4 className="text-2xl font-semibold text-carnet-red mb-4 border-b-2 border-carnet-red/30 pb-2">La construction du plan</h4>

                <h5 className="text-xl font-semibold text-carnet-red mb-3">Structure générale : 3 parties, 3 sous-parties</h5>
                <p className="mb-4">
                  Le plan de dissertation suit toujours la même structure : trois grandes parties contenant chacune trois sous-parties. Cette organisation en 3×3 constitue le standard attendu par les correcteurs et permet de développer neuf idées principales.
                </p>

                <h5 className="text-xl font-semibold text-carnet-red mb-3">Types de plans</h5>
                <p className="mb-4">
                  Selon le sujet, deux types de plans principaux peuvent être adoptés :
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Le plan dialectique (thèse/antithèse/synthèse) convient aux sujets interrogatifs. Il suit la progression : "Oui / Mais / Oui (sens 2)" plutôt que le schéma simpliste "Oui / Non / Oui et non".</li>
                  <li>Le plan progressif développe une réflexion qui s'enrichit et s'approfondit à chaque partie, permettant un approfondissement conceptuel du problème posé.</li>
                </ul>

                <h5 className="text-xl font-semibold text-carnet-red mb-3">Construire une progression</h5>
                <p className="mb-6">
                  Chaque grande partie doit avoir une unité et une cohérence interne. Cette unité peut s'appuyer sur l'aspect étudié (moral, esthétique), la façon d'aborder le problème (individuel, collectif) ou le sens des termes employés. L'important est de créer une démonstration où les idées s'enchaînent logiquement vers la résolution du problème.
                </p>

                <h4 className="text-2xl font-semibold text-carnet-red mb-4 border-b-2 border-carnet-red/30 pb-2">La rédaction</h4>

                <h5 className="text-xl font-semibold text-carnet-red mb-3">L'introduction</h5>
                <p className="mb-4">
                  L'introduction constitue un moment crucial qui donne le ton de la dissertation. Elle doit comporter cinq éléments obligatoires :
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>La phrase d'accroche (facultative) : élément accrocheur tiré de l'actualité, de l'histoire ou d'une citation pour capter l'attention</li>
                  <li>L'énoncé du sujet : présentation claire du sujet</li>
                  <li>La définition des termes : explication précise du sens des concepts clés</li>
                  <li>La problématique : formulation du problème philosophique soulevé</li>
                  <li>L'annonce du plan : présentation des étapes de la résolution</li>
                </ul>

                <h5 className="text-xl font-semibold text-carnet-red mb-3">Le développement</h5>
                <p className="mb-4">
                  Chaque paragraphe du développement suit une structure précise :
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Introduction de l'idée</li>
                  <li>Explication avec références philosophiques (auteur, œuvre, citation)</li>
                  <li>Exemples concrets</li>
                  <li>Conclusion partielle</li>
                  <li>Transition vers l'idée suivante</li>
                </ul>
                <p className="mb-6">
                  Les transitions entre les parties sont primordiales. Elles doivent faire le bilan de la partie précédente, critiquer ses points faibles et montrer la nécessité de la partie suivante.
                </p>

                <h5 className="text-xl font-semibold text-carnet-red mb-3">La conclusion</h5>
                <p className="mb-4">
                  La conclusion constitue l'ultime moment du devoir et doit laisser une impression finale forte. Elle comporte trois étapes indispensables :
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Rappel de la problématique : repositionner le lecteur dans le contexte</li>
                  <li>Bilan du raisonnement : synthèse des arguments principaux montrant comment ils s'articulent</li>
                  <li>Réponse finale : solution claire et explicite au problème posé</li>
                </ul>
                <p className="mb-6">
                  Une ouverture peut être ajoutée mais reste facultative. La conclusion ne doit jamais introduire de nouveaux arguments.
                </p>

                <h4 className="text-2xl font-semibold text-carnet-red mb-4 border-b-2 border-carnet-red/30 pb-2">Les critères d'évaluation</h4>
                <p className="mb-4">
                  Les correcteurs évaluent principalement cinq éléments :
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-1">
                  <li>La problématique (le problème caché dans le sujet)</li>
                  <li>Le plan (parties, sous-parties, transitions)</li>
                  <li>Les arguments (raisonnements justifiant les idées)</li>
                  <li>Les références philosophiques (citations des grands philosophes)</li>
                  <li>Les exemples (illustrations concrètes des propos)</li>
                </ul>

                <h4 className="text-2xl font-semibold text-carnet-red mb-4 border-b-2 border-carnet-red/30 pb-2">Conseils pratiques</h4>

                <h5 className="text-xl font-semibold text-carnet-red mb-3">Expression et style</h5>
                <p className="mb-4">
                  La qualité de la langue est essentielle. Il faut éviter les fautes d'orthographe et de grammaire, utiliser un vocabulaire précis et des phrases claires. L'utilisation de connecteurs logiques ("en effet", "en revanche", "toutefois") permet de structurer le raisonnement.
                </p>

                <h5 className="text-xl font-semibold text-carnet-red mb-3">Références philosophiques</h5>
                <p className="mb-4">
                  Il convient de varier les auteurs et d'utiliser leurs idées au service de son argumentation. Les références ne doivent pas constituer un patchwork mais s'intégrer dans une réflexion cohérente. Il faut savoir "asservir les philosophes à son discours" plutôt que de subir leur autorité.
                </p>

                <h5 className="text-xl font-semibold text-carnet-red mb-3">Gestion du temps</h5>
                <p className="mb-4">
                  Au baccalauréat, il est recommandé de consacrer environ :
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-1">
                  <li>1h à l'analyse du sujet et à l'élaboration du plan</li>
                  <li>2h30 à la rédaction</li>
                  <li>30 minutes à la relecture</li>
                </ul>

                <div className="bg-pr-orange-pale p-6 rounded-lg border-l-4 border-carnet-red/40">
                  <p className="text-carnet-red-deep font-medium">
                    La dissertation de philosophie demande donc une préparation méthodique et un entraînement régulier. Maîtriser cette méthode permet non seulement de réussir l'épreuve du baccalauréat mais aussi de développer ses capacités de réflexion critique et d'argumentation, compétences essentielles pour les études supérieures.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-br from-carnet-paper-2 to-orange-50 border-2 border-carnet-red/30 hover:shadow-2xl hover:scale-105 hover:border-pr-orange hover:bg-gradient-to-br hover:from-orange-50 hover:to-pr-orange-pale transition-all duration-300 group p-8 rounded-lg">
                <div className="w-16 h-16 bg-carnet-red/10 group-hover:bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                  <GraduationCap className="h-8 w-8 text-carnet-red group-hover:text-pr-orange transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-carnet-red group-hover:text-pr-orange-dark transition-colors duration-300">
                  Besoin d'aide personnalisée en philosophie ?
                </h3>
                <p className="text-gray-600 group-hover:text-pr-orange-dark transition-colors duration-300 mb-6">
                  Nos experts vous accompagnent pour maîtriser la dissertation philosophique et réussir votre bac.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button size="lg" className="bg-carnet-red hover:bg-pr-orange-dark text-white transition-all duration-300">
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

export default LyceePhilosophiePage;
