import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Home, ChevronRight, ArrowLeft, BookOpen, CheckCircle, TrendingUp, DollarSign, PieChart, Users } from 'lucide-react';

const MethodesSociologiquesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 pt-16 pb-8">
        {/* Sticky Breadcrumb */}
        <nav className="sticky top-0 z-50 bg-gray-50/95 backdrop-blur supports-[backdrop-filter]:bg-gray-50/60 border-b border-border/40 relative z-10">
          <div className="container mx-auto px-4 py-2">
            <div className="flex items-center text-xs text-muted-foreground">
              <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
                <Home className="h-3 w-3" />
                <span>Accueil</span>
              </Link>
              <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
              <Link to="/formations" className="hover:text-foreground transition-colors">
                Toutes les formations
              </Link>
              <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
              <Link to="/formation/esh" className="hover:text-foreground transition-colors">
                Formation ESH ECG
              </Link>
              <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
              <Link to="/formation/esh/premiere-annee" className="hover:text-foreground transition-colors">
                Première année
              </Link>
              <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
              <span className="text-foreground font-medium">La pluralité des méthodes sociologiques</span>
            </div>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto">
          {/* Bouton retour */}
          <div className="mb-6">
            <Link to="/formation/esh/premiere-annee">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour au Module 1
              </Button>
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center border border-blue-300">
                <Target className="h-8 w-8 text-blue-700" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  La pluralité des méthodes sociologiques
                </h1>
                <div className="text-sm text-blue-700 font-medium mt-1">Chapitre 1.10 - Module 1</div>
              </div>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Découvrir les différentes approches méthodologiques en sociologie et leurs applications
            </p>
          </div>

          {/* Contenu principal */}
          <div className="space-y-8">
            {/* Section 1: Les principes méthodologiques généraux */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">1</span>
                </div>
                Les principes méthodologiques généraux
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-200 pl-4">
                  <h3 className="font-semibold text-blue-700 mb-2">La scientificité en sociologie</h3>
                  <p className="text-sm text-gray-600">
                    La sociologie aspire à être une science objective, systématique et vérifiable.
                    Elle utilise des méthodes rigoureuses pour étudier les phénomènes sociaux,
                    tout en tenant compte de la subjectivité inhérente aux sciences humaines.
                  </p>
                </div>

                <div className="border-l-4 border-blue-200 pl-4">
                  <h3 className="font-semibold text-blue-700 mb-2">Le rapport sujet-objet</h3>
                  <p className="text-sm text-gray-600">
                    Difficulté spécifique aux sciences sociales : le sociologue étudie des sujets
                    qui sont aussi des acteurs sociaux conscients, capables d'interpréter et
                    de modifier leur propre comportement.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mt-2">
                    <li>• Effet Hawthorne : modification du comportement sous observation</li>
                    <li>• Réactivité des sujets : adaptation à la présence du chercheur</li>
                    <li>• Interprétation subjective : le chercheur influence l'observation</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Les critères de scientificité</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <strong>Objectivité</strong> : neutralité du chercheur, procédures standardisées</li>
                    <li>• <strong>Fiabilité</strong> : reproductibilité des résultats</li>
                    <li>• <strong>Validité</strong> : mesure effective du phénomène étudié</li>
                    <li>• <strong>Généralisabilité</strong> : extension des conclusions à d'autres contextes</li>
                    <li>• <strong>Éthique</strong> : protection des sujets, confidentialité, consentement</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 2: Les méthodes quantitatives */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">2</span>
                </div>
                Les méthodes quantitatives
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">L'enquête par questionnaire</h3>
                  <p className="text-sm text-gray-600">
                    Méthode standardisée permettant d'interroger un grand nombre de personnes
                    sur leurs opinions, comportements et caractéristiques sociales.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mt-2">
                    <li>• Questions fermées : réponses prédéfinies (oui/non, échelle Likert)</li>
                    <li>• Questions ouvertes : réponses libres (analyse qualitative requise)</li>
                    <li>• Échantillonnage : sélection représentative de la population</li>
                    <li>• Analyse statistique : traitement des données numériques</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">L'observation systématique</h3>
                  <p className="text-sm text-gray-600">
                    Enregistrement méthodique de comportements observables selon des critères prédéfinis.
                    Permet de quantifier des phénomènes sociaux complexes.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mt-2">
                    <li>• Grille d'observation : catégories prédéterminées</li>
                    <li>• Comptage de fréquences : nombre d'occurrences</li>
                    <li>• Mesure de durées : temps passé dans différentes activités</li>
                    <li>• Analyse de séquences : ordre des comportements</li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Avantages</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Grande représentativité</li>
                      <li>• Comparabilité des données</li>
                      <li>• Analyse statistique poussée</li>
                      <li>• Généralisation possible</li>
                      <li>• Objectivité relative</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Limites</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Rigidité des protocoles</li>
                      <li>• Perte de nuances</li>
                      <li>• Effets de désirabilité sociale</li>
                      <li>• Coût élevé en temps et argent</li>
                      <li>• Non-adapté aux phénomènes rares</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">L'analyse statistique</h3>
                  <p className="text-sm text-gray-600">
                    Traitement mathématique des données pour dégager des régularités,
                    des corrélations et des tendances dans les phénomènes sociaux.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mt-2">
                    <li>• Statistiques descriptives : moyennes, écarts-types, distributions</li>
                    <li>• Tests d'hypothèse : validation statistique des hypothèses</li>
                    <li>• Analyse de régression : identification des facteurs explicatifs</li>
                    <li>• Analyse factorielle : réduction de la complexité des données</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3: Les méthodes qualitatives */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">3</span>
                </div>
                Les méthodes qualitatives
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">L'entretien semi-directif</h3>
                  <p className="text-sm text-gray-600">
                    Conversation approfondie guidée par un plan d'entretien flexible.
                    Permet d'explorer en profondeur les représentations et les expériences subjectives.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mt-2">
                    <li>• Guide d'entretien : thèmes principaux à aborder</li>
                    <li>• Reformulations : vérification de compréhension</li>
                    <li>• Écoute active : encouragement à l'expression</li>
                    <li>• Analyse thématique : codage et catégorisation des propos</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">L'observation participante</h3>
                  <p className="text-sm text-gray-600">
                    Immersion du chercheur dans le milieu étudié pour observer les comportements
                    et interactions sociales de l'intérieur.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mt-2">
                    <li>• Participation active : prise de rôle dans le groupe</li>
                    <li>• Journal de terrain : notes détaillées des observations</li>
                    <li>• Triangulation : croisement de sources d'information</li>
                    <li>• Distance critique : réflexivité sur sa propre position</li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Avantages</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Richesse des données</li>
                      <li>• Compréhension fine des processus</li>
                      <li>• Adaptation aux situations complexes</li>
                      <li>• Découverte d'éléments inattendus</li>
                      <li>• Respect de la subjectivité des acteurs</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Limites</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Subjectivité de l'interprétation</li>
                      <li>• Difficulté de généralisation</li>
                      <li>• Temps et ressources importants</li>
                      <li>• Problèmes de reproductibilité</li>
                      <li>• Effet de présence du chercheur</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">L'analyse de contenu</h3>
                  <p className="text-sm text-gray-600">
                    Étude systématique de documents, discours ou productions culturelles
                    pour identifier des thèmes, représentations et structures de sens.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mt-2">
                    <li>• Analyse thématique : identification des thèmes récurrents</li>
                    <li>• Analyse sémiotique : étude des signes et symboles</li>
                    <li>• Analyse discursive : structures narratives et argumentatives</li>
                    <li>• Analyse quantitative du contenu : fréquence des mots-clés</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 4: Les méthodes mixtes et l'approche comparative */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">4</span>
                </div>
                Les méthodes mixtes et l'approche comparative
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-orange-200 pl-4">
                  <h3 className="font-semibold text-orange-700 mb-2">Les méthodes mixtes (quantitatif + qualitatif)</h3>
                  <p className="text-sm text-gray-600">
                    Combinaison des approches quantitative et qualitative pour bénéficier
                    des avantages de chacune et compenser leurs limites respectives.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mt-2">
                    <li>• Triangulation méthodologique : validation croisée des résultats</li>
                    <li>• Complémentarité : quantitative pour les tendances générales, qualitative pour la profondeur</li>
                    <li>• Séquentialité : méthodes utilisées en succession logique</li>
                    <li>• Intégration : analyse conjointe des données de différentes natures</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-200 pl-4">
                  <h3 className="font-semibold text-orange-700 mb-2">La méthode comparative</h3>
                  <p className="text-sm text-gray-600">
                    Comparaison de sociétés, groupes ou phénomènes sociaux différents
                    pour identifier des régularités, des variations ou des causalités.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mt-2">
                    <li>• Comparaison synchronique : sociétés contemporaines différentes</li>
                    <li>• Comparaison diachronique : évolution historique d'une société</li>
                    <li>• Contrôle des variables : isolation des facteurs explicatifs</li>
                    <li>• Méthode des différences : Mill - similarités vs différences</li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-700 mb-2">La recherche-action</h4>
                  <p className="text-sm text-gray-600">
                    Approche participative où le chercheur intervient directement dans la situation
                    étudiée pour favoriser des changements sociaux positifs.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mt-2">
                    <li>• Diagnostic participatif : implication des acteurs locaux</li>
                    <li>• Action concrète : mise en œuvre de solutions identifiées</li>
                    <li>• Évaluation continue : suivi des effets des interventions</li>
                    <li>• Empowerment : renforcement des capacités d'action collective</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 5: L'éthique de la recherche sociologique */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">5</span>
                </div>
                L'éthique de la recherche sociologique
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Les principes éthiques fondamentaux</h3>
                  <p className="text-sm text-gray-600">
                    La recherche sociologique doit respecter les droits et la dignité des personnes
                    étudiées, tout en produisant des connaissances socialement utiles.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2 mt-2">
                    <li>• <strong>Consentement éclairé</strong> : information complète et volontaire des participants</li>
                    <li>• <strong>Confidentialité</strong> : protection des données personnelles et des identités</li>
                    <li>• <strong>Non-malfaisance</strong> : éviter tout dommage physique ou psychologique</li>
                    <li>• <strong>Bénéfice social</strong> : contribution à l'amélioration des conditions sociales</li>
                    <li>• <strong>Transparence</strong> : publication des méthodes et résultats</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Les dilemmes éthiques</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Observation clandestine : nécessaire pour étudier certains phénomènes, mais violation de la vie privée</li>
                    <li>• Divulgation des résultats : risque de stigmatisation de groupes sociaux</li>
                    <li>• Recherche sensible : études sur la délinquance, la pauvreté, les minorités</li>
                    <li>• Commanditaires : conflits d'intérêts entre objectifs scientifiques et intérêts privés</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Les comités d'éthique</h4>
                  <p className="text-sm text-gray-600">
                    Instances chargées d'évaluer les protocoles de recherche du point de vue éthique
                    et de protéger les droits des participants.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mt-2">
                    <li>• Évaluation préalable : examen des risques et bénéfices</li>
                    <li>• Suivi continu : monitoring de la recherche en cours</li>
                    <li>• Formation des chercheurs : sensibilisation aux questions éthiques</li>
                    <li>• Diffusion des bonnes pratiques : partage d'expériences et de recommandations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 6: Choix méthodologiques et stratégies de recherche */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">6</span>
                </div>
                Choix méthodologiques et stratégies de recherche
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-indigo-200 pl-4">
                  <h3 className="font-semibold text-indigo-700 mb-2">Critères de choix méthodologiques</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• <strong>Objet d'étude</strong> : nature du phénomène (attitudes, comportements, structures)</li>
                    <li>• <strong>Objectifs de recherche</strong> : exploration, description, explication, évaluation</li>
                    <li>• <strong>Contexte</strong> : accessibilité, contraintes temporelles et budgétaires</li>
                    <li>• <strong>Paradigme théorique</strong> : approche positiviste vs interprétativiste</li>
                    <li>• <strong>Ressources disponibles</strong> : compétences, moyens techniques, réseau</li>
                  </ul>
                </div>

                <div className="border-l-4 border-indigo-200 pl-4">
                  <h3 className="font-semibold text-indigo-700 mb-2">Les stratégies de triangulation</h3>
                  <p className="text-sm text-gray-600">
                    Utilisation simultanée ou successive de plusieurs méthodes pour valider
                    les résultats et enrichir l'analyse.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mt-2">
                    <li>• Triangulation des méthodes : quantitative + qualitative</li>
                    <li>• Triangulation des sources : multiples informateurs ou documents</li>
                    <li>• Triangulation des analystes : validation inter-juges</li>
                    <li>• Triangulation théorique : confrontation de plusieurs cadres conceptuels</li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-indigo-50 rounded-lg p-4">
                    <h4 className="font-semibold text-indigo-700 mb-2">Recherche exploratoire</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Objectif : découvrir, comprendre</li>
                      <li>• Méthodes : qualitatives privilégiées</li>
                      <li>• Échantillon : petit, ciblé</li>
                      <li>• Résultats : hypothèses de travail</li>
                    </ul>
                  </div>

                  <div className="bg-indigo-50 rounded-lg p-4">
                    <h4 className="font-semibold text-indigo-700 mb-2">Recherche confirmatoire</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Objectif : vérifier, généraliser</li>
                      <li>• Méthodes : quantitatives privilégiées</li>
                      <li>• Échantillon : grand, représentatif</li>
                      <li>• Résultats : validation statistique</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-indigo-50 rounded-lg p-4">
                  <h4 className="font-semibold text-indigo-700 mb-2">La réflexivité du chercheur</h4>
                  <p className="text-sm text-gray-600">
                    Conscience critique du chercheur sur sa propre position, ses présupposés
                    et son influence sur le processus de recherche.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mt-2">
                    <li>• Questionnement des biais personnels et culturels</li>
                    <li>• Analyse de la relation chercheur/recherché</li>
                    <li>• Réflexion sur les effets de pouvoir dans la recherche</li>
                    <li>• Transparence sur les choix méthodologiques et interprétatifs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation entre chapitres */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
            <Link to="/formation/esh/premiere-annee">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour au Module 1
              </Button>
            </Link>

            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                Exercices
              </Button>
              <Link to="/formation/esh/module2/croissance-economique">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Module suivant
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MethodesSociologiquesPage;
