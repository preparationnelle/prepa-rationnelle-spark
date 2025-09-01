import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MessageSquare, Mic, Clock, CheckCircle, AlertTriangle, Lightbulb, Users, FileText } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const ReussirCollePage: React.FC = () => {
  const conseilsColle = [
    {
      id: 1,
      title: "Préparation avant l'épreuve",
      icon: <Users className="w-5 h-5" />,
      color: "from-blue-600 to-cyan-600",
      bgColor: "from-blue-50 to-cyan-50",
      points: [
        "Arrivez en avance et détendu",
        "Préparez votre matériel (stylo, feuille)",
        "Respirez profondément pour vous calmer",
        "Souriez et saluez poliment l'examinateur"
      ]
    },
    {
      id: 2,
      title: "Pendant l'épreuve",
      icon: <Mic className="w-5 h-5" />,
      color: "from-green-600 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50",
      points: [
        "Écoutez attentivement les questions",
        "Prenez le temps de réfléchir avant de répondre",
        "Parlez clairement et à un rythme modéré",
        "Utilisez le vocabulaire que vous maîtrisez"
      ]
    },
    {
      id: 3,
      title: "Gestion du stress",
      icon: <Clock className="w-5 h-5" />,
      color: "from-orange-600 to-amber-600",
      bgColor: "from-orange-50 to-amber-50",
      points: [
        "Respirez calmement entre les questions",
        "N'hésitez pas à demander une répétition",
        "Restez positif même en cas d'erreur",
        "Concentrez-vous sur ce que vous savez"
      ]
    }
  ];

  const erreursFrequentes = [
    "Parler trop vite par stress",
    "Ne pas écouter la question posée",
    "Utiliser un vocabulaire trop complexe",
    "Oublier de saluer poliment",
    "Répondre sans réfléchir",
    "Se décourager après une erreur"
  ];

  const expressionsUtiles = [
    { allemand: "Entschuldigung, können Sie das wiederholen?", français: "Excusez-moi, pouvez-vous répéter ?" },
    { allemand: "Das ist eine interessante Frage", français: "C'est une question intéressante" },
    { allemand: "Meiner Meinung nach...", français: "À mon avis..." },
    { allemand: "Ich denke, dass...", français: "Je pense que..." },
    { allemand: "Das ist ein wichtiger Punkt", français: "C'est un point important" }
  ];

  const structureColle = [
    {
      etape: "1. Accueil et présentation",
      duree: "2-3 minutes",
      description: "Salutations, présentation de l'examinateur et explication du déroulement"
    },
    {
      etape: "2. Questions de compréhension",
      duree: "8-10 minutes",
      description: "Questions sur un document audio ou texte, test de compréhension"
    },
    {
      etape: "3. Expression orale",
      duree: "10-12 minutes",
      description: "Discussion sur un sujet donné, test d'expression et d'argumentation"
    },
    {
      etape: "4. Conclusion",
      duree: "2-3 minutes",
      description: "Bilan de l'épreuve et questions finales"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
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
              Comment réussir la colle
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Maîtrisez l'épreuve orale d'allemand : compréhension, expression et confiance en soi
            </p>
          </div>
        </div>

        {/* Description de l'épreuve */}
        <Card className="mb-8 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Qu'est-ce que la colle ?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-4">
              <p className="text-lg">
                La colle est une épreuve orale qui teste votre compréhension et votre expression en allemand.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="bg-white/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Format</h3>
                  <p className="text-sm">Épreuve orale individuelle</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Durée</h3>
                  <p className="text-sm">20-25 minutes</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Objectif</h3>
                  <p className="text-sm">Compréhension + expression</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Déroulement de l'épreuve */}
        <Card className="mb-8 bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
          <CardHeader>
            <CardTitle className="text-xl text-indigo-800">
              Déroulement de la colle
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {structureColle.map((etape, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-indigo-700 mb-1">{etape.etape}</h4>
                      <p className="text-sm text-gray-700">{etape.description}</p>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {etape.duree}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Conseils méthodologiques */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Méthodologie en 3 étapes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {conseilsColle.map((conseil) => (
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
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

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

        {/* Expressions utiles */}
        <Card className="mb-8 bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
          <CardHeader>
            <CardTitle className="text-xl text-purple-800 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Expressions utiles pour la colle
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {expressionsUtiles.map((expression, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-white rounded-lg border">
                  <span className="font-medium text-gray-800">{expression.allemand}</span>
                  <span className="text-purple-600 font-medium">{expression.français}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Fiche méthodologique complète */}
        <Card className="mb-8 bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
          <CardHeader>
            <CardTitle className="text-xl text-indigo-800 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Fiche méthodologique : Colle d'allemand réussie
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* I. Einleitung */}
              <div className="bg-white p-4 rounded-lg border border-indigo-200">
                <h4 className="font-bold text-indigo-800 text-lg mb-3">I. Einleitung – Introduction (0:00 – 1:00)</h4>
                
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-indigo-700 mb-2">1. Accroche d'actualité (0:00 – 0:20)</h5>
                    <p className="text-sm text-gray-700 mb-2">Exemples :</p>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>• <em>Im Jahre 2023 ist [die Zahl der Arbeitslosen in Ostdeutschland zum ersten Mal seit Jahren gestiegen].</em></li>
                      <li>• <em>In dieser Ansicht wurde ein Artikel veröffentlicht.</em></li>
                      <li>• <em>In einem Artikel aus dem Spiegel, der am 3. Oktober 2023 veröffentlicht wurde, befasst sich der Autor mit der Frage [der Ostalgie].</em></li>
                    </ul>
                    <p className="text-xs text-indigo-600 mt-1">Éviter les détails, rester synthétique.</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-indigo-700 mb-2">2. Présentation du texte et des enjeux (0:20 – 0:40)</h5>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>• <em>In diesem Artikel geht es um...</em></li>
                      <li>• <em>Der Journalist thematisiert die Frage nach (+D)...</em></li>
                      <li>• <em>Einerseits... / Andererseits...</em></li>
                      <li>• <em>Es ist auffällig, dass... / Es fällt auf, dass...</em></li>
                    </ul>
                    <p className="text-xs text-indigo-600 mt-1">Souligne une tension ou un paradoxe si possible.</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-indigo-700 mb-2">3. Problématique (0:40 – 1:00)</h5>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>• <em>Warum ist... ?</em></li>
                      <li>• <em>Inwiefern kann man sagen, dass... ?</em></li>
                      <li>• <em>Es wirft die folgende Frage auf: ...</em></li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-indigo-700 mb-2">4. Annonce du plan (1:15 – 1:30)</h5>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>• <em>Zuerst erklärt der Journalist anhand mehrerer Beispiele, was... ist.</em></li>
                      <li>• <em>Dann geht er auf die Ursachen ein.</em></li>
                      <li>• <em>Schließlich nennt er mögliche Folgen auf die Gesellschaft / Politik / Zukunft Deutschlands.</em></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* II. Résumé structuré */}
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <h4 className="font-bold text-green-800 text-lg mb-3">II. Résumé structuré du texte (1:00 – 4:00)</h4>
                
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-green-700 mb-2">Exprimer ce que l'on apprend du texte :</h5>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>• <em>Wir erfahren, dass...</em></li>
                      <li>• <em>Der Journalist betont / erwähnt / erklärt, dass...</em></li>
                      <li>• <em>Laut dem Autor ist... / Dem Autor zufolge...</em></li>
                      <li>• <em>Wie der Journalist hervorhebt / unterstreicht...</em></li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-green-700 mb-2">Commenter un exemple :</h5>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>• <em>Dieses Beispiel ist sehr aufschlussreich.</em></li>
                      <li>• <em>Die Anspielung auf (+Akk) zeigt, dass...</em></li>
                      <li>• <em>Er versucht, seine Argumentation mit Beispielen zu rechtfertigen.</em></li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-green-700 mb-2">Lire une phrase si nécessaire :</h5>
                    <p className="text-sm text-gray-600 ml-4"><em>Nun möchte ich folgende Textstelle vorlesen, die besonders wichtig ist: „..."</em></p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-green-700 mb-2">Tu peux annoncer les trois temps du texte :</h5>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>• <em>Zuerst behandelt der Journalist das Thema...</em></li>
                      <li>• <em>Danach analysiert er die Gründe...</em></li>
                      <li>• <em>Am Ende stellt er mögliche Konsequenzen dar.</em></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* III. Transition */}
              <div className="bg-white p-4 rounded-lg border border-orange-200">
                <h4 className="font-bold text-orange-800 text-lg mb-3">III. Übergang zum Kommentar – Transition (4:00 – 4:30)</h4>
                
                <div className="space-y-2">
                  <h5 className="font-semibold text-orange-700 mb-2">Phrase de bascule :</h5>
                  <ul className="text-sm text-gray-600 space-y-1 ml-4">
                    <li>• <em>Dieser Text ist kommentarwürdig, denn er spricht ein kontroverses Thema an.</em></li>
                    <li>• <em>Nun möchte ich meine persönliche Meinung zu dieser Frage äußern.</em></li>
                  </ul>
                </div>
              </div>

              {/* IV. Kommentar */}
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <h4 className="font-bold text-purple-800 text-lg mb-3">IV. Kommentar – Commentaire (4:30 – 9:30)</h4>
                
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-purple-700 mb-2">Donner une thèse forte :</h5>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>• <em>Ich halte diese Behauptung für falsch / überzeugend.</em></li>
                      <li>• <em>Ich kann mir nicht vorstellen, dass...</em></li>
                      <li>• <em>Ich bin fest davon überzeugt, dass...</em></li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-purple-700 mb-2">Exprimer ton opinion :</h5>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>• <em>Meiner Meinung / Ansicht nach + V2</em></li>
                      <li>• <em>Ich bin der Meinung, dass...</em></li>
                      <li>• <em>Für mich ist es ausgeschlossen, dass...</em></li>
                      <li>• <em>Ich betrachte es als unwirksam / kontraproduktiv, etwas zu tun.</em></li>
                      <li>• <em>Für mich ist es eine Schande, dass...</em></li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-purple-700 mb-2">Exprimer une nuance :</h5>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>• <em>Allerdings hängt es davon ab, ob...</em></li>
                      <li>• <em>Zwar..., aber...</em></li>
                      <li>• <em>Man sollte vielleicht zwischen (+D) und (+D) unterscheiden.</em></li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-purple-700 mb-2">Proposer :</h5>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>• <em>Meiner Meinung nach sollte man ... statt ... zu + Infinitiv</em></li>
                      <li>• <em>Ich würde empfehlen, dass...</em></li>
                      <li>• <em>Es ist höchste Zeit, dass...</em></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* V. Conclusion */}
              <div className="bg-white p-4 rounded-lg border border-red-200">
                <h4 className="font-bold text-red-800 text-lg mb-3">V. Schluss – Conclusion (9:30 – 10:00)</h4>
                
                <div className="space-y-2">
                  <h5 className="font-semibold text-red-700 mb-2">Clôturer avec une idée claire (pas un résumé) :</h5>
                  <ul className="text-sm text-gray-600 space-y-1 ml-4">
                    <li>• <em>Aus dem Text und aus meinem Kommentar kann man schließen, dass...</em></li>
                    <li>• <em>Zusammenfassend lässt sich sagen, dass...</em></li>
                    <li>• <em>Insgesamt zeigt sich, dass die Frage nach (+D)... bis heute aktuell und umstritten ist.</em></li>
                    <li>• <em>Dieses Thema bleibt zentral für das Verständnis der heutigen deutschen Gesellschaft.</em></li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Conseils pour la compréhension */}
        <Card className="mb-8 bg-gradient-to-r from-cyan-50 to-blue-50 border-cyan-200">
          <CardHeader>
            <CardTitle className="text-xl text-cyan-800">
              Conseils pour la compréhension
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-cyan-700 mb-2">Compréhension orale</h4>
                <ul className="text-cyan-700 space-y-1 text-sm">
                  <li>• Concentrez-vous sur les mots-clés</li>
                  <li>• Notez les informations importantes</li>
                  <li>• Ne vous inquiétez pas de tout comprendre</li>
                  <li>• Utilisez le contexte pour déduire</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-700 mb-2">Compréhension écrite</h4>
                <ul className="text-cyan-700 space-y-1 text-sm">
                  <li>• Lisez d'abord les questions</li>
                  <li>• Surlignez les passages importants</li>
                  <li>• Vérifiez vos réponses dans le texte</li>
                  <li>• Attention aux pièges classiques</li>
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
            Module 2: La colle
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReussirCollePage; 