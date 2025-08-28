import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Target, FileText, MessageSquare, Clock, CheckCircle, AlertCircle, BookOpen, TrendingUp, Users, Lightbulb, Zap } from 'lucide-react';

const FormationEspagnolMethodologiePage: React.FC = () => {
  const sections = [
    {
      id: 1,
      title: "Avant-propos",
      icon: <AlertCircle className="w-6 h-6" />,
      color: "orange",
      content: "S'il y a bien une chose que j'ai pu apprendre en classe préparatoire, c'est l'importance de « verrouiller » les matières avec un petit coefficient. La LV2 Espagnole ne fait pas exception à cette règle ! Bien que cette matière soit sur le papier deux fois moins importante que les mathématiques, une note inférieure à 10 en Espagnol vous bloquera l'accès aux toutes meilleures écoles. Il est donc important de travailler cette matière, combler ses lacunes du lycée (car il y aura très certainement des lacunes au regard des exigences de la classe prépa…) et établir un compromis judicieux en termes de gestion du temps pour également bosser les autres matières (surtout les maths)!"
    },
    {
      id: 2,
      title: "Prendre du recul sur l'épreuve BCE",
      icon: <Target className="w-6 h-6" />,
      color: "blue",
      content: {
        intro: "L'Épreuve de la BCE d'espagnol c'est :",
        details: [
          "4 heures",
          "Une épreuve qui compte pour toutes les écoles",
          "Une Synthèse de 250 mots de 2 textes écrits dans la langue cible (30% de la note)",
          "Un Essai argumentatif de 350 mots qui répond à une question (50 % de la note)",
          "Une traduction du français à l'Espagnol. (20 % de la note)"
        ],
        conclusion: "Et c'est tout ! « Seulement » trois exercices distincts qu'il faut travailler pendant deux ans ! Pas plus, pas moins. C'est donc crucial d'adapter son travail en fonction de ces trois exercices qui possèdent chacun leurs propres exigences et caractéristiques techniques !"
      }
    }
  ];

  const strategies = [
    {
      title: "À la maison",
      icon: <BookOpen className="w-5 h-5" />,
      items: [
        "Connaître les bases de la langue par cœur (vocabulaire fondamental, conjugaisons, règles d'accents)",
        "Prioriser la synthèse et l'essai (80% de la note finale)",
        "Travailler intelligemment chaque exercice avec du vocabulaire spécifique"
      ]
    },
    {
      title: "En épreuve",
      icon: <Clock className="w-5 h-5" />,
      items: [
        "Stratégie bien en place pour l'ordre des exercices",
        "Temps alloué à chacun des trois exercices",
        "Test en conditions réelles durant les DS"
      ]
    }
  ];

  const workMethods = [
    {
      title: "La synthèse (Q1) - 30% de la note",
      icon: <FileText className="w-5 h-5" />,
      color: "orange",
      structure: {
        intro: "Intro courte pour la contextualisation",
        part1: "Paragraphe 1 : Une idée force, les documents s'opposent ou se complètent",
        part2: "Paragraphe 2 : Une idée force, les documents s'opposent",
        conclusion: "Mini conclusion rappelant les axes de confrontation"
      },
      tips: [
        "Résumer analytique comparatif",
        "Vocabulaire technique d'analyse et comparaison",
        "Organiser un débat entre les deux articles",
        "250 mots maximum - tout ne peut pas être dit !"
      ]
    },
    {
      title: "L'essai (Q2) - 50% de la note",
      icon: <MessageSquare className="w-5 h-5" />,
      color: "blue",
      structure: {
        intro: "Intro conséquente (~75 mots) : Présenter le sujet + ambivalence",
        problematique: "Problématique déduite de l'ambivalence",
        part1: "Paragraphe général : enjeux et risques",
        part2: "Prise de position avec exemples de civilisation",
        part3: "Optionnel : défendre une autre idée",
        conclusion: "Conclusion importante : apporter une nouvelle idée"
      },
      tips: [
        "Expression personnelle autonome",
        "Vocabulaire technique pour l'expression personnelle",
        "Tournures grammaticales adaptées",
        "Réfléchir « à chaud » après la Q1"
      ]
    },
    {
      title: "La traduction (Q3) - 20% de la note",
      icon: <TrendingUp className="w-5 h-5" />,
      color: "green",
      methods: [
        "Thème grammatical : progresser rapidement",
        "Thèmes suivis : annales ECRICOME, BCE",
        "Tirage de leçons : vocabulaire et tournures non maîtrisés",
        "Relecture : ressemblance avec El País"
      ],
      tips: [
        "Minimum 1 heure pour la traduction",
        "Plusieurs traductions possibles pour un même mot",
        "Tendre vers la signification la plus proche",
        "Ne pas se presser malgré le temps limité"
      ]
    }
  ];

  const tools = [
    {
      title: "Quizlet - 75% du temps",
      icon: <Zap className="w-5 h-5" />,
      lists: [
        "Liste spéciale Q1",
        "Liste spéciale Q2",
        "Listes de vocabulaire technique (50 mots)",
        "Liste « fautes copies »",
        "Liste « Grammaire espagnol »",
        "Liste « mots rencontrés en traduction »",
        "Liste « la base »"
      ]
    },
    {
      title: "Lecture et entraînement - 25% du temps",
      icon: <Users className="w-5 h-5" />,
      activities: [
        "Lecture rapide de presse",
        "Écriture en espagnol",
        "Correction orthographique",
        "Entraînement en temps limité"
      ]
    }
  ];

  const finalTips = [
    "Accepter que l'on soit en difficulté",
    "Lire les bonnes copies et apprendre des meilleurs",
    "Penser en espagnol (Instagram, réflexion, musique, Netflix)",
    "Prendre la parole en cours",
    "On n'écrit jamais un mot si on n'est pas 100% sûr de l'orthographe"
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-80 left-1/4 w-40 h-40 bg-orange-100 rounded-full opacity-25 animate-pulse"></div>
      <div className="absolute bottom-40 right-10 w-36 h-36 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>

      <div className="container mx-auto px-4 py-8 max-w-6xl relative z-10">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/formation/espagnol">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Retour à la formation
              </Button>
            </Link>
          </div>

          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Méthodologie LV2 Espagnol
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De 4 à 18 en une année : la méthode complète pour maîtriser l'espagnol en classe préparatoire
            </p>
            <div className="mt-4 p-4 bg-gradient-to-r from-orange-100 to-blue-100 rounded-lg">
              <p className="text-lg font-semibold text-gray-800">
                Progression personnelle : 4 → 18 en première année de prépa
              </p>
            </div>
          </div>
        </div>

        {/* Avant-propos */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                <AlertCircle className="w-6 h-6" />
              </div>
              <CardTitle className="text-2xl text-gray-900">
                Avant-propos
            </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              S'il y a bien une chose que j'ai pu apprendre en classe préparatoire, c'est l'importance de « verrouiller » les matières avec un petit coefficient.
              La LV2 Espagnole ne fait pas exception à cette règle ! Bien que cette matière soit sur le papier deux fois moins importante que les mathématiques,
              une note inférieure à 10 en Espagnol vous bloquera l'accès aux toutes meilleures écoles. Il est donc important de travailler cette matière,
              combler ses lacunes du lycée (car il y aura très certainement des lacunes au regard des exigences de la classe prépa…) et établir un compromis
              judicieux en termes de gestion du temps pour également bosser les autres matières (surtout les maths) !
            </p>
          </CardContent>
        </Card>

        {/* Prendre du recul */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                <Target className="w-6 h-6" />
              </div>
              <CardTitle className="text-2xl text-gray-900">
                Prendre du recul sur l'épreuve BCE
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-700 font-semibold">L'Épreuve de la BCE d'espagnol c'est :</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 p-3 bg-orange-50 rounded-lg">
                  <Clock className="w-5 h-5 text-orange-600" />
                  <span className="text-gray-700">4 heures</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Une épreuve qui compte pour toutes les écoles</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
                  <FileText className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Synthèse de 250 mots (30%)</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-purple-50 rounded-lg">
                  <MessageSquare className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">Essai de 350 mots (50%)</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-indigo-50 rounded-lg col-span-1 md:col-span-2">
                  <TrendingUp className="w-5 h-5 text-indigo-600" />
                  <span className="text-gray-700">Traduction français → espagnol (20%)</span>
                </div>
              </div>
              <div className="p-4 bg-gradient-to-r from-orange-50 to-blue-50 rounded-lg">
                <p className="text-gray-700 font-medium">
                  Et c'est tout ! « Seulement » trois exercices distincts qu'il faut travailler pendant deux ans !
                  Pas plus, pas moins. C'est donc crucial d'adapter son travail en fonction de ces trois exercices
                  qui possèdent chacun leurs propres exigences et caractéristiques techniques !
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* L'organisation */}
        <Card className="mb-8 shadow-lg">
              <CardHeader>
            <CardTitle className="text-2xl text-gray-900 text-center">
              1) L'organisation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-orange-600 flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  À la maison
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 p-3 bg-orange-50 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-orange-400 mt-2"></div>
                    <span className="text-gray-700">Connaître les bases de la langue par cœur</span>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2"></div>
                    <span className="text-gray-700">Prioriser synthèse et essai (80% de la note)</span>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-green-50 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-green-400 mt-2"></div>
                    <span className="text-gray-700">Vocabulaire spécifique pour chaque exercice</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-600 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  En épreuve
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 p-3 bg-purple-50 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mt-2"></div>
                    <span className="text-gray-700">Stratégie d'ordre des exercices</span>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-indigo-50 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2"></div>
                    <span className="text-gray-700">Gestion du temps par exercice</span>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-pink-50 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-pink-400 mt-2"></div>
                    <span className="text-gray-700">Tests en conditions réelles</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Le travail technique */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900 text-center">
              2) Le travail technique
            </CardTitle>
              </CardHeader>
              <CardContent>
            <div className="space-y-8">
              {/* Synthèse */}
              <div className="border-l-4 border-orange-400 pl-6">
                <h3 className="text-xl font-semibold text-orange-600 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  La synthèse (Q1) - 30% de la note
                </h3>
                <div className="space-y-4">
                    <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Structure recommandée :</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">Intro</Badge>
                        <span className="text-gray-700">Courte contextualisation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">§1</Badge>
                        <span className="text-gray-700">Idée force + opposition/complémentarité</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">§2</Badge>
                        <span className="text-gray-700">Idée force + confrontation directe</span>
                          </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">Conclusion</Badge>
                        <span className="text-gray-700">Rappel des axes de confrontation</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="text-sm text-gray-600">
                      <strong>Objectif :</strong> Résumer analytique comparatif
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>Volume :</strong> 250 mots maximum
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>Vocabulaire :</strong> Technique d'analyse/comparaison
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>Approche :</strong> Débat entre les articles
                    </div>
                  </div>
                      </div>
                    </div>

              {/* Essai */}
              <div className="border-l-4 border-blue-400 pl-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-4 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  L'essai (Q2) - 50% de la note
                </h3>
                <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Structure recommandée :</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">Intro</Badge>
                        <span className="text-gray-700">Présentation + ambivalence (~75 mots)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">Problématique</Badge>
                        <span className="text-gray-700">Déduite de l'ambivalence</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">§1</Badge>
                        <span className="text-gray-700">Enjeux et risques généraux</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">§2</Badge>
                        <span className="text-gray-700">Prise de position + civilisation</span>
                          </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">Conclusion</Badge>
                        <span className="text-gray-700">Nouvelle idée importante</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="text-sm text-gray-600">
                      <strong>Objectif :</strong> Expression personnelle autonome
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>Volume :</strong> 350 mots
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>Vocabulaire :</strong> Expression personnelle
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>Avantage :</strong> Réflexion « à chaud » après Q1
                    </div>
                  </div>
                </div>
              </div>

              {/* Traduction */}
              <div className="border-l-4 border-green-400 pl-6">
                <h3 className="text-xl font-semibold text-green-600 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  La traduction (Q3) - 20% de la note
                </h3>
                <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Méthodes de travail :</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        <span className="text-gray-700">Thème grammatical</span>
                          </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        <span className="text-gray-700">Annales ECRICOME/BCE</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        <span className="text-gray-700">Tirage de leçons</span>
                    </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        <span className="text-gray-700">Relecture comparative</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="text-sm text-gray-600">
                      <strong>Temps :</strong> Minimum 1 heure
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>Approche :</strong> Plusieurs traductions possibles
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>Référence :</strong> Style El País
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>Focus :</strong> Signification la plus proche
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Les outils */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900 text-center">
              3) Les outils
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-orange-600 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Quizlet - 75% du temps
                </h3>
                <div className="space-y-2">
                  {[
                    "Liste spéciale Q1",
                    "Liste spéciale Q2",
                    "Listes de vocabulaire technique (50 mots)",
                    "Liste « fautes copies »",
                    "Liste « Grammaire espagnol »",
                    "Liste « mots rencontrés en traduction »",
                    "Liste « la base »"
                  ].map((list, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 bg-orange-50 rounded">
                      <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                      <span className="text-sm text-gray-700">{list}</span>
                          </div>
                        ))}
                      </div>
                    </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-600 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Lecture et entraînement - 25% du temps
                </h3>
                <div className="space-y-2">
                  {[
                    "Lecture rapide de presse",
                    "Écriture en espagnol",
                    "Correction orthographique",
                    "Entraînement en temps limité"
                  ].map((activity, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 bg-blue-50 rounded">
                      <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                      <span className="text-sm text-gray-700">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
              </CardContent>
            </Card>

        {/* Conseils finaux */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900 text-center">
              4) Avant de partir : Conseils finaux
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {finalTips.map((tip, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-gradient-to-r from-orange-50 to-blue-50 rounded-lg">
                  <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                    <Lightbulb className="w-4 h-4" />
                  </div>
                  <p className="text-gray-700 text-sm">{tip}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-gradient-to-r from-orange-100 to-blue-100 rounded-lg">
              <p className="text-center text-gray-800 font-semibold">
                Résultat : De 4 à 18 en espagnol en première année de prépa !
              </p>
              <p className="text-center text-gray-600 text-sm mt-2">
                Admission dans le TOP 5 : ESCP, EDHEC (17,5), EM Lyon (18), SKEMA (17,5)
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Anecdote */}
        <Card className="mb-8 shadow-lg border-l-4 border-orange-400">
          <CardHeader>
            <CardTitle className="text-xl text-gray-900">
              Anecdote pour finir
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              Le jour du concours BCE, j'avais su traduire le mot « amertume » dans la Q3 car je l'avais entendu à mainte reprise
              dans la chanson <strong>Adam y Eva</strong> de Paulo Londra (elle est pas mal d'ailleurs…).
            </p>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-center">
          <Link to="/formation/espagnol">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Retour à la formation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormationEspagnolMethodologiePage;