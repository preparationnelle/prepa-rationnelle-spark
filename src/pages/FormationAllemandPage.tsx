
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Languages, BookOpen, Target, FileText, List, Play, ExternalLink, FlipHorizontal, Globe, Users, Leaf, Building } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FormationAllemandPage = () => {
  const navigate = useNavigate();
  
  const generatorModules = [
    {
      id: 1,
      title: "Grammatische Themen",
      description: "Generator und Korrektor für Übersetzungsthemen mit spezialisierten Sätzen und detaillierte sofortige Bewertung.",
      topics: [
        "Spezialisierte Pressesätze",
        "Detaillierte KI-Korrektur mit Bewertung",
        "Personalisierte Grammatikregeln",
        "Fehlerverfolgung und Fortschritt"
      ],
      link: "/generator/theme-grammar",
      icon: Target,
      color: "bg-orange-500",
      badge: "IA Correction"
    },
    {
      id: 2,
      title: "Deutsche Paragraphen",
      description: "Erstellen Sie argumentative Paragraphen von 150 Wörtern auf Deutsch mit Schlüsselvokabular aus Presseartikeln.",
      topics: [
        "Paragraphen mit 150 Wörtern",
        "Spezialisiertes Vokabular",
        "Analyse von Presseartikeln",
        "Strukturierte argumentative Ideen"
      ],
      link: "/generator/languages",
      icon: Languages,
      color: "bg-purple-500",
      badge: "Nouveau"
    }
  ];

  const grammarModules = [
    {
      id: 1,
      title: "Adjektivdeklination",
      description: "Meistern Sie die drei Deklinationsarten (schwach, gemischt, stark) mit vollständigen Tabellen und praktischen Übungen.",
      topics: [
        "Schwache Deklination (der/die/das + Adj.)",
        "Gemischte Deklination (ein/kein + Adj.)",
        "Starke Deklination (Adj. allein)",
        "Regeln und Merkhilfen"
      ],
      link: "/formation/allemand-declinaisons",
      icon: FileText,
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Der Relativsatz",
      description: "Relativpronomen, Bezugswörter, Konstruktion der Relativsätze und Umwandlung in Partizipialsätze.",
      topics: [
        "Tabelle der Relativpronomen",
        "Wahl des richtigen Pronomens (Genus und Kasus)",
        "Übersetzung von 'dont' ins Deutsche",
        "Partizipialsätze"
      ],
      link: "/formation/allemand-relatives",
      icon: FileText,
      color: "bg-green-500"
    },
    {
      id: 3,
      title: "Das Passiv im Deutschen",
      description: "Vorgangspassiv (werden), Zustandspassiv (sein), Passiv mit Modalverben und Behandlung des Agens.",
      topics: [
        "Vorgangspassiv (werden + Part. II)",
        "Zustandspassiv (sein + Part. II)",
        "Passiv mit Modalverben",
        "Agens (von) vs. Mittel (durch)"
      ],
      link: "/formation/allemand-passif",
      icon: FileText,
      color: "bg-red-500"
    },
    {
      id: 4,
      title: "Satzstruktur",
      description: "Wortstellung, Verbpositionen, Inversion und Konstruktion der Nebensätze.",
      topics: [
        "Die drei Verbpositionen",
        "Satzklammer (Verbalklammer)",
        "Reihenfolge der Ergänzungen (T-L-M)",
        "Verneinung mit 'nicht'"
      ],
      link: "/formation/allemand-structure",
      icon: FileText,
      color: "bg-indigo-500"
    },
    {
      id: 5,
      title: "Wiederkehrende Grammatikpunkte",
      description: "Vollständige Liste der wesentlichen Grammatikregeln, die für die Prüfungen zu beherrschen sind.",
      topics: [
        "26 wesentliche Grammatikpunkte",
        "Nebensatzkonstruktionen",
        "Deklinationen und Präpositionen",
        "Häufige Fehler zu vermeiden"
      ],
      link: "/formation/allemand-recurrents",
      icon: List,
      color: "bg-amber-500"
    },
    {
      id: 6,
      title: "Unregelmäßige Verben",
      description: "Wiederholen Sie mehr als 120 unregelmäßige deutsche Verben mit interaktiven Lernkarten.",
      topics: [
        "Mehr als 120 wesentliche Verben",
        "Alle Konjugationsformen",
        "Intuitive Navigation",
        "Lern- und Suchmodus"
      ],
      link: "/formation/allemand-verbes",
      icon: FlipHorizontal,
      color: "bg-yellow-500",
      badge: "Flashcards"
    }
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
          <div className="p-3 rounded-lg bg-red-600 text-white">
            <Languages className="h-8 w-8" />
          </div>
          Deutschausbildung
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Vollständige Deutschausbildung für Wirtschaftshochschul-Wettbewerbe: KI-Generatoren und detaillierte Grammatikblätter
        </p>
        <div className="flex justify-center gap-2 mt-4">
          <Badge variant="secondary">Niveau prépa</Badge>
          <Badge variant="outline">Grammaire complète</Badge>
          <Badge className="bg-red-600">Allemand LV2</Badge>
        </div>
      </div>

      {/* Navigation vers les sections principales - EN PREMIER */}
      <div className="mb-16">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">Entdecken Sie die Ausbildungsmodule</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Wählen Sie Ihr Studiengebiet für den Zugang zu detaillierten und thematisch strukturierten Inhalten.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card 
            className="p-6 hover:shadow-lg transition-all duration-200 bg-white cursor-pointer transform hover:-translate-y-1"
            onClick={() => navigate('/formation/allemand/grammaire')}
            role="button"
            tabIndex={0}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-2xl font-semibold text-red-600">Grammatik</h2>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">
                Beherrschen Sie alle wesentlichen Grammatikpunkte: Deklinationen, Relativsätze, Passiv, Satzstruktur und unregelmäßige Verben. 6 vollständige Blätter mit Übungen.
              </p>
              <div className="bg-red-600 text-white font-semibold py-3 px-4 rounded-lg text-center hover:bg-red-700 transition-colors">
                Accéder aux fiches de grammaire
              </div>
            </div>
          </Card>

          <Card 
            className="p-6 hover:shadow-lg transition-all duration-200 bg-white cursor-pointer transform hover:-translate-y-1"
            onClick={() => navigate('/formation/allemand/civilisation')}
            role="button"
            tabIndex={0}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-semibold text-blue-600">Landeskunde</h2>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">
                Entdecken Sie das zeitgenössische Deutschland: Politik, Demografie, Ökologie und europäische Geopolitik. 4 aktualisierte thematische Module.
              </p>
              <div className="bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg text-center hover:bg-blue-700 transition-colors">
                Découvrir la civilisation allemande
              </div>
            </div>
          </Card>

          <Card 
            className="p-6 hover:shadow-lg transition-all duration-200 bg-white cursor-pointer transform hover:-translate-y-1"
            onClick={() => navigate('/formation/allemand/epreuves')}
            role="button"
            tabIndex={0}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-semibold text-green-600">Réussir les épreuves</h2>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">
                Maîtrisez les différentes épreuves du concours : laisser, colle et synthèse de texte. Techniques, méthodologie et conseils pratiques pour exceller.
              </p>
              <div className="bg-green-600 text-white font-semibold py-3 px-4 rounded-lg text-center hover:bg-green-700 transition-colors">
                Maîtriser les épreuves
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Section Générateurs */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
            <div className="p-3 rounded-lg bg-orange-600 text-white">
              <Target className="h-6 w-6" />
            </div>
            Intelligente Generatoren
          </h2>
          <p className="text-muted-foreground">KI-Tools für praktisches Training und automatische Korrektur</p>
        </div>
        <div className="grid gap-6 max-w-4xl mx-auto">
          {generatorModules.map((module) => (
            <Card key={module.id} className="border-2 hover:border-orange-500/50 transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${module.color} text-white`}>
                      <module.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <span className="text-xl font-semibold text-primary">
                          {module.title}
                        </span>
                        <Badge className="bg-red-600 text-white">{module.badge}</Badge>
                      </CardTitle>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{module.description}</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mb-6">
                  {module.topics.map((topic, index) => (
                    <li key={index}>{topic}</li>
                  ))}
                </ul>
                <Link to={module.link}>
                  <Button className={`${module.color} hover:opacity-90 w-full`}>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Accéder au générateur
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Note informative */}
      <div className="bg-gradient-to-r from-red-50 to-blue-50 border-2 border-red-200 rounded-2xl p-8">
        <div className="text-center">
          <div className="flex justify-center gap-4 mb-4">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <Globe className="h-6 w-6 text-white" />
            </div>
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
              <Target className="h-6 w-6 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Vollständige ECG-Deutschausbildung</h3>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Vollständige Deutschausbildung für ECG-Wettbewerbe, strukturiert in vier komplementäre Achsen: 
            <span className="font-semibold text-orange-600"> KI-Tools für das Training</span>, 
            <span className="font-semibold text-red-600"> vollständige Grammatik mit 6 detaillierten Blättern</span>, 
            <span className="font-semibold text-blue-600"> zeitgenössische deutsche Landeskunde</span> und
            <span className="font-semibold text-green-600"> Methodik für Prüfungserfolg</span>. 
            Jedes Modul umfasst konkrete Beispiele, praktische Übungen und aktualisierte Ressourcen 
            für eine optimale Prüfungsvorbereitung.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormationAllemandPage;
