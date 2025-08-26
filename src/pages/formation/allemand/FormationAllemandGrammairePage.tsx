import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Languages, BookOpen, FileText, List, Play, FlipHorizontal, Home, ChevronRight } from 'lucide-react';

const FormationAllemandGrammairePage = () => {
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
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Floating bubbles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-amber-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-80 left-1/4 w-40 h-40 bg-blue-100 rounded-full opacity-25 animate-pulse"></div>
      <div className="absolute bottom-40 right-10 w-36 h-36 bg-amber-100 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-28 h-28 bg-blue-50 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-amber-50 rounded-full opacity-25 animate-pulse"></div>
      <div className="absolute top-2/3 left-1/3 w-44 h-44 bg-blue-300 rounded-full opacity-15 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-amber-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-10 left-1/2 w-16 h-16 bg-blue-400 rounded-full opacity-25 animate-pulse"></div>
      <div className="absolute bottom-10 left-2/3 w-20 h-20 bg-amber-400 rounded-full opacity-20 animate-pulse"></div>
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-gray-600">
            <Link to="/" className="flex items-center gap-1 hover:text-gray-900 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/allemand" className="hover:text-gray-900 transition-colors">
              Formation Allemand
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <span className="text-gray-900 font-bold">Grammaire</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <div className="p-3 rounded-lg bg-red-600 text-white">
              <BookOpen className="h-9 w-9" />
            </div>
            Deutsche Grammatik
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Beherrschen Sie alle wesentlichen Grammatikpunkte für den Erfolg bei Ihren ECG-Wettbewerben
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge variant="secondary">6 fiches complètes</Badge>
            <Badge variant="outline">Exercices inclus</Badge>
            <Badge className="bg-red-600">Niveau Prépa</Badge>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Vollständige Grammatikblätter</h2>
          <div className="grid gap-6">
            {grammarModules.map((module) => (
              <Card key={module.id} className="group bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-amber-200 shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50/20 to-blue-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-4 rounded-lg ${module.color} text-white shadow-lg`}>
                        <module.icon className="h-7 w-7" />
                      </div>
                      <div>
                        <CardTitle className="flex items-center gap-3 relative z-10">
                          <span className="text-2xl font-bold text-gray-800">
                            {module.title}
                          </span>
                          {module.badge && (
                            <Badge className="bg-red-600 text-white">{module.badge}</Badge>
                          )}
                        </CardTitle>
                        <p className="text-gray-600 mt-2 text-base relative z-10">{module.description}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {module.topics.map((topic, index) => (
                      <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition-colors duration-200 rounded-lg">
                        <div className="w-2 h-2 bg-amber-400 rounded-full flex-shrink-0"></div>
                        <span className="text-sm font-medium text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                  <Link to={module.link}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 text-base">
                      <Play className="mr-2 h-5 w-5" />
                      Consulter la fiche complète
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-gradient-to-r from-blue-50 to-amber-50 border border-blue-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2 text-gray-900">
              <Languages className="h-5 w-5" />
              Tipps für die deutsche Grammatik
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 space-y-4">
            <p className="leading-relaxed">
              Die deutsche Grammatik mag komplex erscheinen, aber ein methodisches Vorgehen ermöglicht es, sie effektiv zu beherrschen. 
              Jedes Blatt präsentiert die Regeln klar mit konkreten Beispielen und Anwendungsübungen.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm hover:border-blue-200 transition-colors duration-200">
                <h3 className="font-semibold text-gray-900 mb-2">1. Deklinationen</h3>
                <p className="text-sm text-gray-600">Grundlage: Beherrschen Sie zuerst die 3 Deklinationsarten.</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm hover:border-blue-200 transition-colors duration-200">
                <h3 className="font-semibold text-gray-900 mb-2">2. Struktur</h3>
                <p className="text-sm text-gray-600">Verstehen Sie die Wortstellung und die Verbpositionen.</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm hover:border-blue-200 transition-colors duration-200">
                <h3 className="font-semibold text-gray-900 mb-2">3. Praxis</h3>
                <p className="text-sm text-gray-600">Wiederholen Sie regelmäßig die unregelmäßigen Verben mit den Lernkarten.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FormationAllemandGrammairePage;