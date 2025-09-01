import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Target, FileText, MessageSquare, Clock, CheckCircle, AlertCircle, BookOpen, TrendingUp, Users, Lightbulb, Zap, Star, Award, Calendar, BarChart3, Brain, PenTool, Timer } from 'lucide-react';

const SyntheseTexteOverviewPage: React.FC = () => {
  const detailedSections = [
    {
      id: 1,
      title: "Avant-propos : L'importance stratégique de la synthèse de texte",
      icon: <AlertCircle className="w-6 h-6" />,
      color: "orange",
      content: {
        main: "La synthèse de texte représente l'une des épreuves les plus exigeantes des concours ECG. Elle nécessite à la fois une capacité d'analyse fine, une maîtrise parfaite de l'expression écrite et une gestion optimale du temps sous pression.",
        importance: [
          "Coefficient élevé : épreuve déterminante pour l'admissibilité",
          "Épreuve transversale : évalue la culture générale et l'esprit de synthèse",
          "Temps limité : 4 heures pour traiter des sujets complexes",
          "Correction exigeante : critères précis et objectifs élevés"
        ],
        reality: "Contrairement aux apparences, la synthèse de texte n'est pas une épreuve « littéraire » mais une démonstration de rigueur intellectuelle. Elle demande une méthodologie précise et un entraînement régulier pour atteindre l'excellence.",
        strategy: "Cette formation vous donne les outils et méthodes éprouvées pour transformer cette épreuve redoutée en matière d'excellence, vous permettant de gagner des points précieux dans la course aux meilleures écoles."
      }
    },
    {
      id: 2,
      title: "L'épreuve de synthèse aux concours ECG",
      icon: <Target className="w-6 h-6" />,
      color: "blue",
      content: {
        overview: "L'épreuve de synthèse de texte constitue un moment crucial des concours ECG, où vous devez démontrer votre capacité à analyser, synthétiser et restituer des idées complexes de manière claire et structurée.",
        structure: [
          {
            title: "Format général",
            details: "4 heures au total - épreuve écrite commune à toutes les écoles",
            importance: "Format standardisé permettant une préparation ciblée"
          },
          {
            title: "Sujet type",
            details: "2 à 3 textes à analyser et synthétiser (articles, extraits, documents)",
            importance: "Corpus documentaire varié et exigeant"
          },
          {
            title: "Consigne attendue",
            details: "Rédiger une synthèse objective de 300-400 mots",
            importance: "Exercice de reformulation et d'organisation des idées"
          },
          {
            title: "Critères d'évaluation",
            details: "Pertinence, clarté, fidélité aux textes, qualité de l'expression",
            importance: "Grille d'évaluation précise et objective"
          }
        ],
        key_insight: "La synthèse n'est pas un résumé simpliste mais une reconstruction intellectuelle qui nécessite de hiérarchiser les idées, d'identifier les enjeux majeurs et de les restituer avec cohérence.",
        strategic_approach: "Le succès repose sur une méthode rigoureuse : analyse préalable systématique, structuration logique, reformulation fidèle et relecture attentive. Cette approche méthodologique peut être apprise et maîtrisée."
      }
    }
  ];

  const sujetsTypes = [
    {
      title: "Thématiques économiques et sociales",
      icon: <BarChart3 className="w-5 h-5" />,
      color: "orange",
      description: "Les sujets économiques représentent environ 40% des épreuves de synthèse aux concours ECG.",
      exemples: [
        "Les conséquences de la mondialisation sur l'emploi",
        "L'impact des nouvelles technologies sur les modèles économiques",
        "Les défis de la transition énergétique",
        "L'évolution des politiques sociales face aux crises"
      ],
      approche: "Analyser les mécanismes économiques, identifier les acteurs et évaluer les impacts à court et long terme."
    },
    {
      title: "Questions géopolitiques et internationales",
      icon: <Globe className="w-5 h-5" />,
      color: "blue",
      description: "Les enjeux géopolitiques constituent une part importante des sujets contemporains.",
      exemples: [
        "Les nouvelles formes de conflictualité internationale",
        "L'émergence des puissances émergentes (Chine, Inde)",
        "Les défis migratoires et l'intégration européenne",
        "La sécurité internationale à l'ère numérique"
      ],
      approche: "Comprendre les dynamiques internationales, analyser les stratégies des acteurs et évaluer les conséquences globales."
    },
    {
      title: "Enjeux sociétaux et culturels",
      icon: <Users className="w-5 h-5" />,
      color: "green",
      description: "Les questions sociétales touchent aux transformations profondes de notre société.",
      exemples: [
        "La révolution numérique et ses impacts sociaux",
        "Les mutations du travail à l'ère de l'automatisation",
        "Les défis de l'éducation face aux nouvelles technologies",
        "L'évolution des valeurs et normes sociales"
      ],
      approche: "Identifier les tendances sociologiques, analyser les phénomènes culturels et évaluer leur impact sur la société."
    },
    {
      title: "Questions environnementales",
      icon: <TrendingUp className="w-5 h-5" />,
      color: "purple",
      description: "L'environnement constitue un thème transversal et récurrent dans les épreuves.",
      exemples: [
        "La transition écologique et ses contraintes économiques",
        "Les politiques climatiques internationales",
        "La biodiversité et les enjeux de préservation",
        "Le développement durable face à la croissance"
      ],
      approche: "Maîtriser les concepts environnementaux, comprendre les politiques publiques et analyser les enjeux économiques."
    }
  ];

  const methodologieDetaillee = [
    {
      title: "Phase 1 : Lecture et analyse des textes (60 minutes)",
      icon: <BookOpen className="w-5 h-5" />,
      color: "orange",
      etapes: [
        {
          titre: "Lecture globale et contextualisation",
          duree: "15 min",
          actions: [
            "Lire les titres et intertitres pour identifier le thème général",
            "Repérer les sources et dates de publication",
            "Comprendre le contexte général du débat"
          ]
        },
        {
          titre: "Lecture analytique et annotation",
          duree: "35 min",
          actions: [
            "Souligner les idées principales et arguments clés",
            "Identifier les connecteurs logiques (donc, cependant, pourtant...)",
            "Noter les exemples et illustrations concrètes",
            "Repérer les citations et références importantes"
          ]
        },
        {
          titre: "Synthèse mentale des textes",
          duree: "10 min",
          actions: [
            "Hiérarchiser les idées par ordre d'importance",
            "Identifier les convergences et divergences",
            "Déterminer l'angle dominant du débat"
          ]
        }
      ]
    },
    {
      title: "Phase 2 : Structuration et plan (45 minutes)",
      icon: <Brain className="w-5 h-5" />,
      color: "blue",
      etapes: [
        {
          titre: "Identification du plan",
          duree: "15 min",
          actions: [
            "Définir 2-3 grandes parties logiques",
            "Choisir un plan thématique ou problématologique",
            "Vérifier la progression logique des idées"
          ]
        },
        {
          titre: "Répartition des idées",
          duree: "20 min",
          actions: [
            "Attribuer chaque idée à une partie du plan",
            "Éliminer les redondances et informations secondaires",
            "Assurer l'équilibre entre les différentes parties"
          ]
        },
        {
          titre: "Rédaction des transitions",
          duree: "10 min",
          actions: [
            "Préparer les phrases d'introduction à chaque partie",
            "Anticiper les connecteurs logiques appropriés",
            "Vérifier la cohérence globale du plan"
          ]
        }
      ]
    },
    {
      title: "Phase 3 : Rédaction (90 minutes)",
      icon: <PenTool className="w-5 h-5" />,
      color: "green",
      etapes: [
        {
          titre: "Introduction (15 min)",
          duree: "15 min",
          actions: [
            "Présenter brièvement le thème général",
            "Contextualiser le débat (sources, dates)",
            "Annoncer le plan de manière claire"
          ]
        },
        {
          titre: "Développement (60 min)",
          duree: "60 min",
          actions: [
            "Respecter scrupuleusement le plan établi",
            "Réformuler fidèlement les idées des textes",
            "Maintenir une neutralité objective",
            "Utiliser un vocabulaire précis et adapté"
          ]
        },
        {
          titre: "Conclusion (15 min)",
          duree: "15 min",
          actions: [
            "Rappeler brièvement les enjeux principaux",
            "Synthétiser les positions majeures",
            "Éviter toute prise de position personnelle"
          ]
        }
      ]
    },
    {
      title: "Phase 4 : Relecture et finalisation (45 minutes)",
      icon: <CheckCircle className="w-5 h-5" />,
      color: "purple",
      etapes: [
        {
          titre: "Vérification du contenu",
          duree: "15 min",
          actions: [
            "Contrôler la fidélité aux textes sources",
            "Vérifier l'équilibre des différentes parties",
            "S'assurer de la progression logique"
          ]
        },
        {
          titre: "Correction formelle",
          duree: "20 min",
          actions: [
            "Relire attentivement pour les fautes d'orthographe",
            "Vérifier la syntaxe et la ponctuation",
            "Améliorer le style et la fluidité"
          ]
        },
        {
          titre: "Comptage et ajustements",
          duree: "10 min",
          actions: [
            "Compter précisément le nombre de mots",
            "Ajuster si nécessaire (respecter les limites)",
            "Vérification finale avant remise"
          ]
        }
      ]
    }
  ];

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
      evaluation: "Test de validation : réussir 3 synthèses sur 5 avec méthode correcte"
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
      evaluation: "Test intermédiaire : synthèse complète en 4h avec corrigé détaillé"
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
      evaluation: "Évaluation finale : moyenne ≥ 14/20 sur 3 DS blancs consécutifs"
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
      evaluation: "Objectif : maintenir le niveau acquis lors des épreuves"
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
              Guide Complet de la Synthèse de Texte ECG
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
              Méthodologie complète pour maîtriser l'épreuve de synthèse et maximiser vos points aux concours
            </p>
            <div className="text-center">
              <p className="text-sm font-medium text-gray-700">
                Objectif : 14-16/20 en synthèse de texte
              </p>
              <p className="text-sm text-gray-600">
                Progression : méthode éprouvée + entraînement intensif
              </p>
            </div>
          </div>
        </div>

        {/* Avant-propos détaillé */}
        {detailedSections.map((section, index) => (
          <div key={section.id} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
              {section.title}
            </h2>
            <div className="space-y-6">
              {section.id === 1 ? (
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    {section.content.main}
                  </p>
                  <div className="space-y-3">
                    {section.content.importance.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-l-4 border-red-400 pl-4 py-2">
                    <p className="text-gray-800 font-medium text-sm">
                      RÉALITÉ : {section.content.reality}
                    </p>
                  </div>
                  <div className="border-l-4 border-orange-400 pl-4 py-2">
                    <p className="text-gray-800 font-medium text-sm">
                      STRATÉGIE : {section.content.strategy}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    {section.content.overview}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {section.content.structure.map((item, idx) => (
                      <div key={idx} className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-sm text-gray-700 mb-2">{item.details}</p>
                        <p className="text-xs text-gray-600 font-medium">{item.importance}</p>
                      </div>
                    ))}
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4 py-3">
                    <h4 className="font-semibold text-gray-900 mb-2">Clé stratégique</h4>
                    <p className="text-gray-700 text-sm">{section.content.key_insight}</p>
                  </div>
                  <div className="border-l-4 border-orange-400 pl-4 py-3">
                    <h4 className="font-semibold text-gray-900 mb-2">Approche méthodologique</h4>
                    <p className="text-gray-700 text-sm">{section.content.strategic_approach}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Types de sujets */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
            1) Les types de sujets aux concours ECG
          </h2>

          <div className="space-y-8">
            {sujetsTypes.map((type, index) => (
              <div key={index} className="border-l-4 border-orange-400 pl-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {type.title}
                  </h3>
                  <Badge variant="outline" className="text-gray-600">
                    {type.description}
                  </Badge>
                </div>

                <div className="border-l-4 border-gray-300 pl-4 py-2">
                  <p className="text-gray-700 leading-relaxed">{type.approche}</p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-gray-900">Exemples de sujets :</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {type.exemples.map((exemple, idx) => (
                      <div key={idx} className="text-sm text-gray-700 bg-blue-50 rounded-lg p-3">
                        • {exemple}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Méthodologie détaillée */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
            2) Méthodologie détaillée de l'épreuve
          </h2>

          <div className="space-y-12">
            {methodologieDetaillee.map((phase, index) => (
              <div key={index} className="border-l-4 border-orange-400 pl-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {phase.title}
                  </h3>
                  <Badge variant="outline" className="text-gray-600">
                    {phase.etapes.reduce((total, etape) => total + parseInt(etape.duree.split(' ')[0]), 0)} min
                  </Badge>
                </div>

                <div className="space-y-4">
                  {phase.etapes.map((etape, etapeIdx) => (
                    <div key={etapeIdx} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-gray-900">{etape.titre}</h4>
                        <Badge variant="secondary" className="text-xs">
                          {etape.duree}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        {etape.actions.map((action, actionIdx) => (
                          <div key={actionIdx} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-700">{action}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Travail annuel */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
            3) Organisation du travail annuel
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

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Objectifs :</h4>
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
                    <h4 className="font-semibold text-gray-900 mb-2">Activités :</h4>
                    <div className="space-y-1">
                      {periode.activites.map((activite, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0"></div>
                          <span className="text-sm text-gray-700">{activite}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-l-4 border-orange-400 pl-4 py-2">
                    <p className="text-gray-800 font-medium text-sm">
                      Évaluation : {periode.evaluation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conseils finaux */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
            4) Conseils pour l'excellence
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <Lightbulb className="w-5 h-5 text-yellow-500" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-2">Pensez en termes de structure</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">La synthèse réussit par sa clarté et sa logique. Pensez toujours en termes de progression des idées.</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <Clock className="w-5 h-5 text-blue-500" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-2">Respectez le timing</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">Le temps est votre ennemi principal. Apprenez à travailler efficacement sous pression.</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <FileText className="w-5 h-5 text-green-500" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-2">Soyez fidèle aux textes</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">La synthèse doit refléter exactement les idées des textes sources. Évitez les interprétations personnelles.</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <Zap className="w-5 h-5 text-purple-500" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-2">Entraînez-vous régulièrement</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">La maîtrise vient de la répétition. Plus vous ferez de synthèses, plus vous progresserez.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Résultats attendus */}
        <div className="border-l-4 border-green-400 pl-4 py-6 mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">RÉSULTATS ATTENDUS</h3>
          <p className="text-lg font-semibold text-gray-800 mb-4">
            Progression garantie : méthode + entraînement = excellence
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="font-medium text-gray-900 mb-2">Niveau acquis :</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Maîtrise parfaite de la méthodologie</li>
                <li>• Gestion optimale du temps</li>
                <li>• Expression claire et précise</li>
                <li>• Capacité de synthèse développée</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="font-medium text-gray-900 mb-2">Impact concours :</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• +3 à 5 points supplémentaires</li>
                <li>• Meilleure admissibilité</li>
                <li>• Avantage concurrentiel</li>
                <li>• Confiance renforcée</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="border border-orange-200 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Prêt à maîtriser la synthèse de texte ?</h3>
          <p className="text-gray-700 mb-6 text-center">
            Cette méthodologie complète vous donne toutes les clés pour réussir brillamment l'épreuve de synthèse de texte aux concours ECG.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Commencer l'entraînement
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Voir les exemples
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

export default SyntheseTexteOverviewPage;
