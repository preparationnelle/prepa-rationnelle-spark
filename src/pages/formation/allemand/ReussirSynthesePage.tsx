import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText, Search, CheckCircle, AlertTriangle, Lightbulb, Clock, Target } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const ReussirSynthesePage: React.FC = () => {
  const conseilsSynthese = [
    {
      id: 1,
      title: "Lecture et analyse",
      icon: <Search className="w-5 h-5" />,
      color: "from-blue-600 to-cyan-600",
      bgColor: "from-blue-50 to-cyan-50",
      points: [
        "Lisez le texte 2-3 fois attentivement",
        "Identifiez l'idée principale et la thèse",
        "Repérez les arguments et exemples",
        "Notez les mots-clés et concepts importants"
      ]
    },
    {
      id: 2,
      title: "Structure de la synthèse",
      icon: <CheckCircle className="w-5 h-5" />,
      color: "from-green-600 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50",
      points: [
        "Introduction : présentation du sujet",
        "Développement : idées principales organisées",
        "Conclusion : synthèse et ouverture",
        "Respectez la limite de mots imposée"
      ]
    },
    {
      id: 3,
      title: "Rédaction et style",
      icon: <FileText className="w-5 h-5" />,
      color: "from-purple-600 to-violet-600",
      bgColor: "from-purple-50 to-violet-50",
      points: [
        "Utilisez vos propres mots (pas de copier-coller)",
        "Maintenez un style objectif et neutre",
        "Employez des connecteurs logiques",
        "Vérifiez la grammaire et l'orthographe"
      ]
    }
  ];

  const erreursFrequentes = [
    "Copier des phrases du texte original",
    "Oublier de respecter la limite de mots",
    "Ne pas structurer la synthèse",
    "Ajouter des opinions personnelles",
    "Négliger la relecture",
    "Perdre l'idée principale du texte"
  ];

  const connecteursSynthese = [
    { allemand: "Der Text handelt von...", français: "Le texte traite de..." },
    { allemand: "Der Autor vertritt die Ansicht...", français: "L'auteur défend l'opinion..." },
    { allemand: "Zunächst wird...", français: "D'abord, il est question de..." },
    { allemand: "Darüber hinaus...", français: "De plus..." },
    { allemand: "Zusammenfassend kann man sagen...", français: "En résumé, on peut dire..." }
  ];

  const etapesSynthese = [
    {
      etape: "1. Première lecture",
      objectif: "Compréhension générale",
      duree: "5 minutes",
      actions: "Lire pour comprendre le sens global, identifier le thème principal"
    },
    {
      etape: "2. Deuxième lecture",
      objectif: "Analyse détaillée",
      duree: "10 minutes",
      actions: "Surligner les idées clés, noter les arguments, identifier la structure"
    },
    {
      etape: "3. Plan de la synthèse",
      objectif: "Organisation",
      duree: "5 minutes",
      actions: "Structurer les idées principales, organiser logiquement"
    },
    {
      etape: "4. Rédaction",
      objectif: "Écriture",
      duree: "15 minutes",
      actions: "Rédiger la synthèse en respectant la structure et la limite de mots"
    },
    {
      etape: "5. Relecture",
      objectif: "Vérification",
      duree: "5 minutes",
      actions: "Vérifier la grammaire, l'orthographe et la cohérence"
    }
  ];

  const exemplesStructure = [
    {
      partie: "Einleitung (Introduction)",
      contenu: "Présentation du sujet + contexte + annonce du plan",
      pourcentage: "15%"
    },
    {
      partie: "Hauptteil (Développement)",
      contenu: "Exposition des idées principales avec exemples et arguments",
      pourcentage: "70%"
    },
    {
      partie: "Schluss (Conclusion)",
      contenu: "Synthèse des points essentiels + ouverture",
      pourcentage: "15%"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-violet-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/formation/allemand/epreuves">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Retour aux épreuves
              </Button>
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Comment réussir la synthèse de texte
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Maîtrisez l'art de la synthèse et de l'analyse de documents en allemand
            </p>
          </div>
        </div>

        {/* Description de l'épreuve */}
        <Card className="mb-8 bg-gradient-to-r from-purple-600 to-violet-600 text-white">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Qu'est-ce que la synthèse de texte ?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-4">
              <p className="text-lg">
                La synthèse de texte consiste à résumer et analyser un document en allemand en respectant une limite de mots.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="bg-white/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Format</h3>
                  <p className="text-sm">Synthèse de 100-150 mots</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Durée</h3>
                  <p className="text-sm">40-45 minutes</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Objectif</h3>
                  <p className="text-sm">Compréhension + synthèse</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Étapes de la synthèse */}
        <Card className="mb-8 bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
          <CardHeader>
            <CardTitle className="text-xl text-indigo-800 flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Étapes chronologiques de la synthèse
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {etapesSynthese.map((etape, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-indigo-700">{etape.etape}</h4>
                    <Badge variant="secondary" className="text-xs">
                      {etape.duree}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <span className="font-medium text-gray-700">Objectif : </span>
                      <span className="text-sm text-gray-600">{etape.objectif}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Actions : </span>
                      <span className="text-sm text-gray-600">{etape.actions}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Fiche méthodologique complète : SYNTHÈSE PARFAITE */}
        <Card className="mb-8 bg-gradient-to-r from-cyan-50 to-blue-50 border-cyan-200">
          <CardHeader>
            <CardTitle className="text-xl text-cyan-800 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Fiche méthodologique : SYNTHÈSE PARFAITE
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* EINLEITUNG / INTRODUCTION */}
              <div className="bg-white p-4 rounded-lg border border-cyan-200">
                <h4 className="font-bold text-cyan-800 text-lg mb-3">EINLEITUNG / INTRODUCTION</h4>
                
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-cyan-700 mb-2">Présenter les documents</h5>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>• <em>Diese Dokumente geben einen Überblick über...</em></li>
                      <li>• <em>Diese beiden Texte beschäftigen sich mit...</em></li>
                      <li>• <em>Beide Texte thematisieren...</em></li>
                      <li>• <em>In den vorliegenden Artikeln geht es um...</em></li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-cyan-700 mb-2">Situer le débat / la question</h5>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>• <em>Die Frage, ob... wird hier unterschiedlich beantwortet.</em></li>
                      <li>• <em>In diesem Kontext stellt sich die Frage, ob / inwiefern / warum… ?</em></li>
                      <li>• <em>Die Texte werfen die Frage auf, ob… ?</em></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* VERGLEICH DER POSITIONEN */}
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <h4 className="font-bold text-green-800 text-lg mb-3">VERGLEICH DER POSITIONEN / COMPARAISON DES POINTS DE VUE</h4>
                
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-green-700 mb-2">Accord entre les auteurs</h5>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>• <em>Die Autoren sind sich darüber einig, dass...</em></li>
                      <li>• <em>Beide Autoren vertreten die Meinung, dass...</em></li>
                      <li>• <em>Ihre Meinungen sind sehr ähnlich.</em></li>
                      <li>• <em>Beide Artikel betrachten ... als...</em></li>
                      <li>• <em>Beide Texte unterstreichen / betonen / heben hervor, dass...</em></li>
                      <li>• <em>Sowohl X als auch Y meinen, dass...</em></li>
                      <li>• <em>... wird auf die gleiche Weise dargestellt wie in Dokument 2.</em></li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-green-700 mb-2">Désaccord entre les auteurs</h5>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>• <em>Die Autoren der beiden Texte sind über die Frage (+G) [...] nicht völlig einverstanden.</em></li>
                      <li>• <em>Die Meinungen gehen über die Frage (+G)... auseinander.</em></li>
                      <li>• <em>Die Meinungen gehen auseinander, was (+Akk)... betrifft.</em></li>
                      <li>• <em>Während X großen Wert auf ... legt, vertritt Y eine ganz andere Meinung über...</em></li>
                      <li>• <em>Der Autor legt Wert auf ..., aber er äußert eine ganz entgegengesetzte Meinung über...</em></li>
                      <li>• <em>X widerspricht Y, indem er sagt, dass...</em></li>
                      <li>• <em>Für X hingegen ist es keine gute Idee, ... zu +Inf.</em></li>
                      <li>• <em>Auch wenn X meint, dass..., glaubt Y, dass...</em></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* AUFBAU / STRUCTURE */}
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <h4 className="font-bold text-purple-800 text-lg mb-3">AUFBAU / STRUCTURE (par paragraphes)</h4>
                
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-purple-700 mb-2">Paragraphe 1 : introduction de la première thèse</h5>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>• <em>Zuerst wird die Frage (+G)... berücksichtigt.</em></li>
                      <li>• <em>Zunächst wird auf die Frage (+G)... eingegangen.</em></li>
                      <li>• <em>Der Autor betrachtet... / zieht eine Parallele mit...</em></li>
                      <li>• <em>Als Hauptargumente führt (Name) an, dass...</em></li>
                      <li>• <em>Dokument 1 warnt also vor...</em></li>
                      <li>• <em>(Name) zufolge sollte man...</em></li>
                      <li>• <em>X erwähnt, dass... / Laut X...</em></li>
                      <li>• <em>Er selbst behauptet, dass...</em></li>
                      <li>• <em>In dieser Hinsicht hat er Recht / Unrecht.</em></li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-purple-700 mb-2">Transition vers le deuxième texte (opposition ou nuance)</h5>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>• <em>Auch wenn X meint, dass...</em></li>
                      <li>• <em>Jedoch ist es eine Bedingung für... laut der...</em></li>
                      <li>• <em>Im Gegensatz dazu erklärt Y, dass...</em></li>
                      <li>• <em>Y widerspricht X, indem er behauptet, dass...</em></li>
                      <li>• <em>Y vertritt eine entgegengesetzte Meinung: ...</em></li>
                      <li>• <em>Es besteht ein starker Unterschied zwischen... und...</em></li>
                      <li>• <em>Hingegen hebt Y hervor, dass...</em></li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-purple-700 mb-2">Ajouter un second argument</h5>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>• <em>Darüber hinaus wird... betrachtet.</em></li>
                      <li>• <em>Wegen... wird... betont.</em></li>
                      <li>• <em>Außerdem bedeutet auch [etwas], dass...</em></li>
                      <li>• <em>Ebenso ist zu erwähnen, dass...</em></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* VERBINDUNGEN / LIAISONS UTILES */}
              <div className="bg-white p-4 rounded-lg border border-orange-200">
                <h4 className="font-bold text-orange-800 text-lg mb-3">VERBINDUNGEN / LIAISONS UTILES</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-orange-700 mb-2">Connecteurs logiques</h5>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>• <em>aufgrund von (+D)</em> = en raison de</li>
                      <li>• <em>es liegt daran, dass...</em> = cela est dû au fait que</li>
                      <li>• <em>deshalb / folglich</em> = par conséquent</li>
                      <li>• <em>hingegen / im Gegensatz dazu</em> = en revanche</li>
                      <li>• <em>ebenso</em> = de même</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-orange-700 mb-2">Expressions de nuance</h5>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>• <em>zwar..., aber...</em> = certes..., mais...</li>
                      <li>• <em>nämlich / in der Tat</em> = en effet</li>
                      <li>• <em>trotzdem / dennoch</em> = néanmoins</li>
                      <li>• <em>darüber hinaus</em> = en outre</li>
                      <li>• <em>nicht nur..., sondern auch...</em> = non seulement..., mais aussi...</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* SCHLUSS / CONCLUSION */}
              <div className="bg-white p-4 rounded-lg border border-red-200">
                <h4 className="font-bold text-red-800 text-lg mb-3">SCHLUSS / CONCLUSION</h4>
                
                <div className="space-y-2">
                  <ul className="text-sm text-gray-600 space-y-1 ml-4">
                    <li>• <em>Durch den Vergleich dieser Dokumente kann gezeigt werden, dass...</em></li>
                    <li>• <em>Zusammenfassend lässt sich sagen, dass...</em></li>
                    <li>• <em>Zusammenfassend kann festgestellt werden, dass...</em></li>
                    <li>• <em>Alles in allem lässt sich sagen, dass...</em></li>
                    <li>• <em>Letztendlich zeigt sich, dass...</em></li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Conseils méthodologiques */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Méthodologie en 3 étapes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {conseilsSynthese.map((conseil) => (
              <Card 
                key={conseil.id} 
                className={`bg-gradient-to-br ${conseil.bgColor} hover:shadow-xl transition-all duration-300`}
              >
                <CardHeader className="text-center">
                  <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-r ${conseil.color} flex items-center justify-center text-white mb-4`}>
                    {conseil.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {conseil.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {conseil.points.map((point, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Structure de la synthèse */}
        <Card className="mb-8 bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200">
          <CardHeader>
            <CardTitle className="text-xl text-emerald-800 flex items-center gap-2">
              <Target className="w-5 h-5" />
              Structure recommandée de la synthèse
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {exemplesStructure.map((partie, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-emerald-700 mb-1">{partie.partie}</h4>
                      <p className="text-sm text-gray-700">{partie.contenu}</p>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {partie.pourcentage}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Erreurs fréquentes */}
        <Card className="mb-8 bg-gradient-to-r from-red-50 to-pink-50 border-red-200">
          <CardHeader>
            <CardTitle className="text-xl text-red-800 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Erreurs fréquentes à éviter
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {erreursFrequentes.map((erreur, index) => (
                <div key={index} className="flex items-center gap-2 text-red-700">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm">{erreur}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Connecteurs pour la synthèse */}
        <Card className="mb-8 bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
          <CardHeader>
            <CardTitle className="text-xl text-purple-800 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Connecteurs essentiels pour la synthèse
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {connecteursSynthese.map((connecteur, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-white rounded-lg border">
                  <span className="font-medium text-gray-800">{connecteur.allemand}</span>
                  <span className="text-purple-600 font-medium">{connecteur.français}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Conseils pratiques */}
        <Card className="mb-8 bg-gradient-to-r from-cyan-50 to-blue-50 border-cyan-200">
          <CardHeader>
            <CardTitle className="text-xl text-cyan-800">
              Conseils pratiques pour réussir
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-cyan-700 mb-2">Avant la rédaction</h4>
                <ul className="text-cyan-700 space-y-1 text-sm">
                  <li>• Lisez le texte plusieurs fois</li>
                  <li>• Identifiez la thèse principale</li>
                  <li>• Notez les arguments clés</li>
                  <li>• Faites un plan détaillé</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-700 mb-2">Pendant la rédaction</h4>
                <ul className="text-cyan-700 space-y-1 text-sm">
                  <li>• Respectez la limite de mots</li>
                  <li>• Utilisez vos propres mots</li>
                  <li>• Structurez clairement</li>
                  <li>• Vérifiez la cohérence</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="mt-12 flex justify-between items-center">
          <Link to="/formation/allemand/epreuves">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Retour aux épreuves
            </Button>
          </Link>
          
          <div className="text-sm text-gray-500">
            Module 3: La synthèse de texte
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReussirSynthesePage; 