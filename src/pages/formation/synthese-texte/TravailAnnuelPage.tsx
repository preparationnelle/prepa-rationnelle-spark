import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Target, FileText, MessageSquare, Clock, CheckCircle, AlertCircle, BookOpen, TrendingUp, Users, Lightbulb, Zap, Star, Award, Calendar, BarChart3, Brain, PenTool, Timer } from 'lucide-react';

const TravailAnnuelPage: React.FC = () => {
  const travailAnnuel = [
    {
      title: "Septembre - Novembre : Acquisition des bases",
      icon: <Calendar className="w-5 h-5" />,
      color: "orange",
      objectifs: [
        "Maîtriser la méthodologie de base",
        "Développer les automatismes de lecture analytique",
        "Apprendre à identifier les idées principales"
      ],
      activites: [
        "2 synthèses par semaine sur des sujets simples",
        "Étude des corrigés types et analyse des erreurs",
        "Mémorisation du vocabulaire spécifique de la synthèse"
      ],
      evaluation: "Test de validation : réussir 3 synthèses sur 5 avec méthode correcte",
      outils: [
        "Annales de l'année précédente (niveau lycée)",
        "Sujets d'entraînement progressifs",
        "Chronomètre pour respecter le timing"
      ]
    },
    {
      title: "Décembre - Janvier : Perfectionnement technique",
      icon: <TrendingUp className="w-5 h-5" />,
      color: "blue",
      objectifs: [
        "Améliorer la qualité de l'expression écrite",
        "Maîtriser la gestion du temps",
        "Développer la capacité de synthèse"
      ],
      activites: [
        "3 synthèses par semaine avec chronométrage",
        "Travail sur la reformulation précise",
        "Entraînement aux différents types de sujets"
      ],
      evaluation: "Test intermédiaire : synthèse complète en 4h avec corrigé détaillé",
      outils: [
        "Sujets de concours passés",
        "Grille d'auto-évaluation",
        "Enregistrement audio des phases"
      ]
    },
    {
      title: "Février - Mars : Préparation intensive",
      icon: <Timer className="w-5 h-5" />,
      color: "green",
      objectifs: [
        "Simuler les conditions réelles d'examen",
        "Maîtriser tous les types de sujets",
        "Optimiser la gestion du stress"
      ],
      activites: [
        "1 DS blanc par semaine complet",
        "Analyse comparative des performances",
        "Travail sur les points faibles identifiés"
      ],
      evaluation: "Évaluation finale : moyenne ≥ 14/20 sur 3 DS blancs consécutifs",
      outils: [
        "Sujets de concours récents",
        "Caméra pour analyser les gestes",
        "Journal de progression détaillé"
      ]
    },
    {
      title: "Avril - Concours : Maintien du niveau",
      icon: <Award className="w-5 h-5" />,
      color: "purple",
      objectifs: [
        "Préserver les acquis",
        "Gérer le stress des concours",
        "Maintenir la confiance"
      ],
      activites: [
        "Révision des méthodes et automatismes",
        "Entraînement léger pour maintenir le rythme",
        "Préparation mentale et gestion du stress"
      ],
      evaluation: "Objectif : maintenir le niveau acquis lors des épreuves",
      outils: [
        "Fiches de révision synthétiques",
        "Exercices de respiration",
        "Visualisation mentale positive"
      ]
    }
  ];

  const planningHebdomadaire = [
    {
      periode: "Septembre-Novembre",
      lundi: "Lecture analytique (1h)",
      mardi: "Vocabulaire synthèse (45min)",
      mercredi: "Synthèse courte (2h)",
      jeudi: "Correction & analyse (1h)",
      vendredi: "Révision méthodes (30min)",
      weekend: "Synthèse complète (3h)"
    },
    {
      periode: "Décembre-Janvier",
      lundi: "Lecture rapide (45min)",
      mardi: "Expression écrite (1h)",
      mercredi: "Synthèse chronométrée (3h)",
      jeudi: "Auto-correction (1h30)",
      vendredi: "Types de sujets (1h)",
      weekend: "DS blanc partiel (4h)"
    },
    {
      periode: "Février-Mars",
      lundi: "Simulation conditions (2h)",
      mardi: "Analyse erreurs (1h)",
      mercredi: "DS blanc complet (4h)",
      jeudi: "Débriefing détaillé (2h)",
      vendredi: "Travail points faibles (1h30)",
      weekend: "Révision & détente (3h)"
    }
  ];

  const ressourcesRecommandees = [
    {
      categorie: "Annales et sujets",
      ressources: [
        "Annales BCE des 5 dernières années",
        "Sujets ECRICOME corrigés",
        "Banque de sujets thématiques",
        "Sujets d'entraînement progressifs"
      ]
    },
    {
      categorie: "Outils pédagogiques",
      ressources: [
        "Chronomètre précis pour les phases",
        "Grilles d'évaluation détaillées",
        "Modèles de synthèses excellentes",
        "Fiches de vocabulaire spécialisé"
      ]
    },
    {
      categorie: "Matériel technique",
      ressources: [
        "Copies doubles pour brouillon",
        "Stylo rouge pour annotations",
        "Marqueurs pour soulignements",
        "Classeur d'organisation"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/formation/synthese-texte">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Retour à la formation
              </Button>
            </Link>
          </div>

          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Organisation du Travail Annuel
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
              Planning complet sur 9 mois pour maîtriser l'épreuve de synthèse de texte
            </p>
            <div className="text-center">
              <p className="text-sm font-medium text-gray-700">
                Durée : Septembre → Avril (9 mois)
              </p>
              <p className="text-sm text-gray-600">
                Fréquence : 8-12h/semaine selon la période
              </p>
            </div>
          </div>
        </div>

        {/* Périodes de l'année */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
            📅 Planning annuel détaillé
          </h2>

          <div className="space-y-8">
            {travailAnnuel.map((periode, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {periode.title}
                  </h3>
                  <Badge variant="outline" className="text-gray-600">
                    {periode.objectifs.length} objectifs
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">🎯 Objectifs :</h4>
                    <div className="space-y-1">
                      {periode.objectifs.map((objectif, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0"></div>
                          <span className="text-sm text-gray-700">{objectif}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">📝 Activités :</h4>
                    <div className="space-y-1">
                      {periode.activites.map((activite, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0"></div>
                          <span className="text-sm text-gray-700">{activite}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">🛠️ Outils recommandés :</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {periode.outils.map((outil, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-purple-400 flex-shrink-0"></div>
                        <span className="text-sm text-gray-700">{outil}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-l-4 border-orange-400 pl-4 py-2">
                  <p className="text-gray-800 font-medium text-sm">
                    📊 Évaluation : {periode.evaluation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Planning hebdomadaire */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
            📋 Planning hebdomadaire par période
          </h2>

          <div className="space-y-6">
            {planningHebdomadaire.map((periode, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{periode.periode}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <div className="font-medium text-gray-800">Lundi</div>
                    <div className="text-sm text-gray-600">{periode.lundi}</div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-medium text-gray-800">Mardi</div>
                    <div className="text-sm text-gray-600">{periode.mardi}</div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-medium text-gray-800">Mercredi</div>
                    <div className="text-sm text-gray-600">{periode.mercredi}</div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-medium text-gray-800">Jeudi</div>
                    <div className="text-sm text-gray-600">{periode.jeudi}</div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-medium text-gray-800">Vendredi</div>
                    <div className="text-sm text-gray-600">{periode.vendredi}</div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-medium text-gray-800">Week-end</div>
                    <div className="text-sm text-gray-600">{periode.weekend}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ressources recommandées */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
            📚 Ressources recommandées
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ressourcesRecommandees.map((categorie, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{categorie.categorie}</h3>
                <div className="space-y-2">
                  {categorie.ressources.map((ressource, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{ressource}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Suivi de progression */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
            📈 Suivi de progression
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">📝 Journal de bord</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Date et durée de chaque séance</p>
                <p>• Sujets travaillés</p>
                <p>• Points forts et difficultés rencontrées</p>
                <p>• Objectifs pour la séance suivante</p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">📊 Métriques à suivre</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Temps moyen par synthèse</p>
                <p>• Nombre de mots respecté</p>
                <p>• Qualité de la structure</p>
                <p>• Fidélité aux textes sources</p>
              </div>
            </div>
          </div>
        </div>

        {/* Conseils pour la motivation */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
            💪 Maintenir la motivation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-green-200 bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-3">✅ Célébrer les progrès</h3>
              <div className="space-y-2 text-sm text-green-700">
                <p>• Noter chaque amélioration</p>
                <p>• Comparer avec les premières synthèses</p>
                <p>• Valoriser les efforts fournis</p>
                <p>• Se récompenser régulièrement</p>
              </div>
            </div>

            <div className="border border-blue-200 bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">🎯 Fixer des objectifs réalistes</h3>
              <div className="space-y-2 text-sm text-blue-700">
                <p>• Objectifs quotidiens atteignables</p>
                <p>• Progression par paliers</p>
                <p>• Ajustement selon les résultats</p>
                <p>• Focus sur le processus</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="border border-orange-200 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Prêt à commencer votre planning annuel ?</h3>
          <p className="text-gray-700 mb-6 text-center">
            Cette organisation structurée vous garantit une progression régulière et efficace tout au long de l'année.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              Voir la méthode détaillée
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Accéder aux ressources
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center">
          <Link to="/formation/synthese-texte">
            <Button variant="outline" size="lg" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Retour à la formation synthèse de texte
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TravailAnnuelPage;
