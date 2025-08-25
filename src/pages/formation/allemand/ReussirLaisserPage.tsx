import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen, Clock, CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react';

const ReussirLaisserPage: React.FC = () => {
  const conseilsLaisser = [
    {
      id: 1,
      title: "Comprendre le sujet",
      icon: <BookOpen className="w-5 h-5" />,
      color: "from-blue-600 to-cyan-600",
      bgColor: "from-blue-50 to-cyan-50",
      points: [
        "Lisez attentivement le sujet plusieurs fois",
        "Identifiez les mots-clés et la problématique",
        "Définissez les termes importants",
        "Déterminez le type d'argumentation attendu"
      ]
    },
    {
      id: 2,
      title: "Structurer votre essai",
      icon: <CheckCircle className="w-5 h-5" />,
      color: "from-green-600 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50",
      points: [
        "Introduction : présentation du sujet et problématique",
        "Développement : 2-3 arguments avec exemples",
        "Conclusion : synthèse et ouverture",
        "Utilisez des connecteurs logiques"
      ]
    },
    {
      id: 3,
      title: "Gérer le temps",
      icon: <Clock className="w-5 h-5" />,
      color: "from-orange-600 to-amber-600",
      bgColor: "from-orange-50 to-amber-50",
      points: [
        "5-10 minutes : analyse du sujet et plan",
        "20-25 minutes : rédaction",
        "5 minutes : relecture et corrections",
        "Restez dans les limites de temps"
      ]
    }
  ];

  const erreursFrequentes = [
    "Ne pas respecter la consigne",
    "Oublier la problématique",
    "Manquer d'exemples concrets",
    "Négliger la conclusion",
    "Faire des répétitions",
    "Ignorer la relecture"
  ];

  const exemplesConnecteurs = [
    { allemand: "Zunächst", français: "D'abord" },
    { allemand: "Außerdem", français: "De plus" },
    { allemand: "Jedoch", français: "Cependant" },
    { allemand: "Zusammenfassend", français: "En résumé" },
    { allemand: "Meiner Meinung nach", français: "À mon avis" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
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
              Comment réussir le laisser
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Maîtrisez l'art de la rédaction d'essais argumentés en allemand pour le concours
            </p>
          </div>
        </div>

        {/* Description de l'épreuve */}
        <Card className="mb-8 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Qu'est-ce que le laisser ?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-4">
              <p className="text-lg">
                Le laisser est une épreuve de rédaction qui consiste à rédiger un essai argumenté en allemand sur un sujet donné.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="bg-white/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Format</h3>
                  <p className="text-sm">Essai de 150-200 mots</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Durée</h3>
                  <p className="text-sm">30-40 minutes</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Objectif</h3>
                  <p className="text-sm">Argumentation structurée</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Conseils méthodologiques */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Méthodologie en 3 étapes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {conseilsLaisser.map((conseil) => (
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
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
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

        {/* Connecteurs logiques */}
        <Card className="mb-8 bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
          <CardHeader>
            <CardTitle className="text-xl text-purple-800 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Connecteurs logiques essentiels
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {exemplesConnecteurs.map((connecteur, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-white rounded-lg border">
                  <span className="font-medium text-gray-800">{connecteur.allemand}</span>
                  <span className="text-purple-600 font-medium">{connecteur.français}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Fiche méthodologique complète : ESSAI PARFAIT */}
        <Card className="mb-8 bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
          <CardHeader>
            <CardTitle className="text-xl text-indigo-800 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Fiche méthodologique : ESSAI PARFAIT
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* EINLEITUNG / INTRODUCTION */}
              <div className="bg-white p-4 rounded-lg border border-indigo-200">
                <h4 className="font-bold text-indigo-800 text-lg mb-3">EINLEITUNG / INTRODUCTION</h4>
                
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-indigo-700 mb-2">Accroche et présentation du sujet</h5>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>• <em>In dem folgenden Aufsatz werde ich erklären, warum / wie…</em></li>
                      <li>• <em>Im folgenden Aufsatz werde ich aufklären, warum Deutschland trotz der heutigen Energiekrise diese Ziele nicht aufgeben wird.</em></li>
                      <li>• <em>Diese Frage steht heute im Mittelpunkt vieler Debatten: ...</em></li>
                      <li>• <em>Angesichts der aktuellen Entwicklungen stellt sich die Frage, ob...</em></li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-indigo-700 mb-2">Énoncer sa thèse</h5>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>• <em>Ich bin der Überzeugung, dass…</em></li>
                      <li>• <em>Ich bin fest davon überzeugt, dass...</em></li>
                      <li>• <em>Meiner Meinung nach sollte man...</em></li>
                      <li>• <em>Ich möchte darlegen, warum ich der Ansicht bin, dass...</em></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* TEIL I: Kritik an der Gegenthese */}
              <div className="bg-white p-4 rounded-lg border border-red-200">
                <h4 className="font-bold text-red-800 text-lg mb-3">TEIL I: Kritik an der Gegenthese / Argumenter contre la position opposée</h4>
                
                <div className="space-y-2">
                  <h5 className="font-semibold text-red-700 mb-2">Rejeter l'opinion contraire</h5>
                  <ul className="text-sm text-gray-600 space-y-1 ml-4">
                    <li>• <em>Ich kann nur die Leute verurteilen, die...</em></li>
                    <li>• <em>Ich betrachte es als kontraproduktiv / sinnlos / unwirksam, etwas zu tun.</em></li>
                    <li>• <em>Ich lehne es ab, ... zu tun / Ich weigere mich, ... zu tun.</em></li>
                    <li>• <em>Für mich ist es ausgeschlossen, dass... / etwas zu tun.</em></li>
                    <li>• <em>Für mich kommt es nicht in Frage, ... zu tun.</em></li>
                    <li>• <em>Ich finde es übertrieben / unvernünftig, ...</em></li>
                    <li>• <em>Es ist fraglich, ob...</em></li>
                    <li>• <em>Für mich ist es eine Schande, dass...</em></li>
                  </ul>
                </div>
              </div>

              {/* TEIL II: Eigene Meinung entwickeln */}
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h4 className="font-bold text-blue-800 text-lg mb-3">TEIL II: Eigene Meinung entwickeln / Développer sa propre position</h4>
                
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-blue-700 mb-2">Introduire une opinion personnelle</h5>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>• <em>Meiner Meinung / Ansicht nach + V2</em></li>
                      <li>• <em>Ich bin der Meinung / Ansicht, dass...</em></li>
                      <li>• <em>Ich bin in anderer Hinsicht.</em></li>
                      <li>• <em>Ich bin fest davon überzeugt, dass...</em></li>
                      <li>• <em>Ich halte es für notwendig / unentbehrlich / unumgänglich, dass...</em></li>
                      <li>• <em>Für mich ist es wichtig, ...</em></li>
                      <li>• <em>Umso wichtiger ist es daher, dass...</em></li>
                      <li>• <em>Ich könnte nur empfehlen, ... zu tun.</em></li>
                      <li>• <em>Es ist höchste Zeit, dass...</em></li>
                      <li>• <em>Eine solche Gelegenheit muss man sofort ergreifen.</em></li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-blue-700 mb-2">Introduire une nuance</h5>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>• <em>Ich muss zugeben, dass ich gegen Ihren Vorschlag nichts einzuwenden habe.</em></li>
                      <li>• <em>Man sollte vielleicht zwischen (+D) und (+D) unterscheiden.</em></li>
                      <li>• <em>Allerdings hängt es davon ab, ob...</em></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* BEISPIELE UND ZAHLEN */}
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <h4 className="font-bold text-green-800 text-lg mb-3">BEISPIELE UND ZAHLEN / EXEMPLES ET CHIFFRES</h4>
                
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-green-700 mb-2">Introduire un exemple</h5>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>• <em>Das Paradebeispiel dafür ist...</em></li>
                      <li>• <em>Ein anschauliches Beispiel dafür ist...</em></li>
                      <li>• <em>Beispielweise…</em></li>
                      <li>• <em>Laut…</em></li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-green-700 mb-2">Utiliser des chiffres</h5>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>• <em>Laut den Statistiken leben weltweit 100 bis 200 Millionen Kinder auf der Straße.</em></li>
                      <li>• <em>Im Vergleich zu 2008 ist die Zahl der Konsumenten 2011 um 20% niedriger.</em></li>
                      <li>• <em>Während 2016 noch 20% ... erhielten, waren es 2020 nur noch 10%.</em></li>
                      <li>• <em>Die Zahl der ... ist zwischen 2001 und 2008 gefallen.</em></li>
                      <li>• <em>Im Zeitraum von 1950 bis 2010 hat sich die Zahl der ... fast verdoppelt.</em></li>
                      <li>• <em>2002 gab es doppelt so viele ... wie im Jahr 2008.</em></li>
                      <li>• <em>Der Anteil von ... lag im Jahr ... bei ... %.</em></li>
                      <li>• <em>Es fällt auf, dass... / Auffällig ist... / Überraschend ist, dass...</em></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* KRITIK UND KOMMENTAR */}
              <div className="bg-white p-4 rounded-lg border border-orange-200">
                <h4 className="font-bold text-orange-800 text-lg mb-3">KRITIK UND KOMMENTAR / CRITIQUE ET COMMENTAIRE</h4>
                
                <div className="space-y-2">
                  <ul className="text-sm text-gray-600 space-y-1 ml-4">
                    <li>• <em>Die Journalistin bestreitet immer wieder Angela Merkels Standpunkt.</em></li>
                    <li>• <em>Der Journalist übt ständig Kritik an Merkels Haltung.</em></li>
                    <li>• <em>Ich bin der Meinung, dass wir eine Lehre aus diesem Ereignis ziehen sollten.</em></li>
                    <li>• <em>Insgesamt kann man feststellen, dass...</em></li>
                    <li>• <em>Diese Tendenz ist eher sinkend / steigend.</em></li>
                  </ul>
                </div>
              </div>

              {/* SCHLUSS / CONCLUSION */}
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <h4 className="font-bold text-purple-800 text-lg mb-3">SCHLUSS / CONCLUSION</h4>
                
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-purple-700 mb-2">Résumer les arguments</h5>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>• <em>Aus diesen Gründen bin ich der Ansicht, dass... nicht völlig ... wird.</em></li>
                      <li>• <em>Aus den oben genannten Argumenten ergibt sich, dass...</em></li>
                      <li>• <em>Alles spricht dafür, dass...</em></li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-purple-700 mb-2">Formules de conclusion</h5>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>• <em>Zusammenfassend lässt sich sagen, dass...</em></li>
                      <li>• <em>Zusammenfassend kann man sagen, dass...</em></li>
                      <li>• <em>Insgesamt kann festgestellt werden, dass...</em></li>
                      <li>• <em>Letztlich bleibt zu sagen, dass...</em></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Plan type */}
        <Card className="mb-8 bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200">
          <CardHeader>
            <CardTitle className="text-xl text-emerald-800">
              Plan type d'un laisser
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold text-emerald-700 mb-2">1. Einleitung (Introduction)</h4>
                <p className="text-sm text-gray-700">Présentation du sujet + problématique + annonce du plan</p>
              </div>
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold text-emerald-700 mb-2">2. Hauptteil (Développement)</h4>
                <p className="text-sm text-gray-700">2-3 arguments avec exemples concrets et transitions</p>
              </div>
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold text-emerald-700 mb-2">3. Schluss (Conclusion)</h4>
                <p className="text-sm text-gray-700">Synthèse des arguments + ouverture ou perspective</p>
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
            Module 1: Le laisser
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReussirLaisserPage; 