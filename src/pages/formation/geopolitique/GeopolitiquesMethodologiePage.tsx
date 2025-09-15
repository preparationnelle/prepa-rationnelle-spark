import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, BookOpen, Target, Map, Clock, PenTool, CheckCircle, FileText, ArrowRight } from 'lucide-react';

const GeopolitiquesMethodologiePage = () => {
  // Articles de méthodologie
  const articles = [
    {
      id: 1,
      title: "Comment travailler la géopolitique au quotidien",
      description: "Méthode complète pour maîtriser les études de cas, dissertations types et techniques d'entraînement",
      readTime: "12 min",
      category: "Méthode de travail",
      published: "2025",
      featured: true,
      route: null // Article affiché sur cette page
    },
    {
      id: 2,
      title: "Comment construire une dissertation",
      description: "Méthodologie complète de la dissertation en Histoire‑Géographie‑Géopolitique (Prépa ECG)",
      readTime: "25 min",
      category: "Méthodologie",
      published: "2025",
      featured: true,
      route: "/formation/geopolitique/methodologie/dissertation"
    },
    {
      id: 3,
      title: "Dissertation de géopolitique de A à Z",
      description: "Étapes détaillées, du brouillon à la rédaction – sans rien oublier",
      readTime: "",
      category: "Méthodologie",
      published: "2025",
      featured: false,
      route: "/formation/geopolitique/methodologie/dissertation-a-z"
    },
    // Espace pour futurs articles
    {
      id: 4,
      title: "À venir...",
      description: "Prochains articles de méthodologie",
      readTime: "",
      category: "Bientôt",
      published: "",
      featured: false,
      disabled: true,
      route: null
    }
  ];
  const etudesDeCasPassePartout = [
    {
      nom: "Le Groenland",
      utilisation: "Espaces maritimes, écologie, routes stratégiques, rivalité Europe/États-Unis",
      color: "bg-blue-100 text-blue-700"
    },
    {
      nom: "Canal de Suez et Panama",
      utilisation: "Routes stratégiques, mondialisation, conflits géopolitiques",
      color: "bg-blue-100 text-blue-700"
    },
    {
      nom: "Taïwan",
      utilisation: "Tensions sino-américaines, espaces maritimes, dépendance technologique",
      color: "bg-blue-100 text-blue-700"
    },
    {
      nom: "Le Sahel",
      utilisation: "Sécurité, démographie, interventions militaires internationales",
      color: "bg-blue-100 text-blue-700"
    },
    {
      nom: "L'Arctique",
      utilisation: "Nouvelles routes maritimes, réchauffement climatique, rivalités entre puissances",
      color: "bg-blue-100 text-blue-700"
    }
  ];

  const sujetsIncontournables = [
    "Les espaces maritimes : domination ou coopération ?",
    "La rivalité entre l'Europe et les États-Unis : alliance ou compétition ?",
    "La géopolitique de l'énergie : une source de conflits ou d'interdépendance ?",
    "L'Afrique est-elle un continent d'avenir ou de crises ?",
    "Le XXIe siècle sera-t-il asiatique ?",
    "Les frontières ont-elles encore un sens dans un monde globalisé ?",
    "Le climat, un nouvel enjeu géopolitique ?"
  ];

  const sujetsEntrainement = [
    "Faut-il un nouvel ordre mondial ?",
    "Les mégapoles : atout ou faiblesse dans la mondialisation ?",
    "Le terrorisme est-il une guerre comme une autre ?",
    "Peut-on encore parler de superpuissances aujourd'hui ?",
    "L'eau : bien commun ou source de conflits ?"
  ];

  const methodePlanType = [
    {
      partie: "Thèse",
      description: "La mondialisation affaiblit les États",
      exemples: "Financiarisation, ONG, multinationales"
    },
    {
      partie: "Antithèse", 
      description: "Les États restent indispensables",
      exemples: "Régulations, diplomatie, sécurité"
    },
    {
      partie: "Dépassement",
      description: "Transformation des États",
      exemples: "Nouvelle puissance des États en réseau, régulations supranationales"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-[#F8FAFF]/95 backdrop-blur supports-[backdrop-filter]:bg-[#F8FAFF]/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formation/geopolitique" className="hover:text-foreground transition-colors">
              Géopolitique
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Méthodologie</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Méthodologie Géopolitique</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Articles et méthodes pour exceller en géopolitique
          </p>
        </div>

        {/* Articles - style ESH */}
        <div className="max-w-4xl mx-auto mb-12 space-y-4">
          {articles.map((article, idx) => (
            <div
              key={article.id}
              className={`bg-white rounded-xl p-6 shadow-md transition-all duration-300 border group ${
                article.disabled
                  ? 'opacity-60 cursor-not-allowed'
                  : 'hover:shadow-2xl hover:scale-105 hover:-translate-y-1 hover:border-blue-200 border-transparent'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 flex-shrink-0 ${
                  article.disabled ? 'bg-gray-200 text-gray-500' : 'bg-blue-100 text-blue-600'
                }`}>
                  <span className="font-bold text-lg">{idx + 1}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="secondary">{article.category}</Badge>
                    {article.readTime && (
                      <span className="text-sm text-muted-foreground">{article.readTime} de lecture</span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.description}</p>
                  <div className="flex gap-3">
                    {article.route && !article.disabled ? (
                      <Link to={article.route}>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
                          <FileText className="mr-2 h-4 w-4" />
                          Lire l'article
                        </Button>
                      </Link>
                    ) : (
                      <Button
                        disabled={article.disabled}
                        className={`px-4 py-2 rounded-md font-medium ${
                          article.disabled ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'
                        }`}
                        onClick={() => {
                          if (!article.disabled && !article.route) {
                            document.getElementById('article-principal')?.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                      >
                        <FileText className="mr-2 h-4 w-4" />
                        {article.disabled ? 'Bientôt' : "Lire l'article"}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Article principal */}
        <div id="article-principal" className="max-w-4xl mx-auto">
          <Card className="border-2 border-blue-200 mb-8">
            <CardHeader className="bg-blue-50">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-blue-600 text-white">
                  <PenTool className="h-5 w-5" />
                </div>
                <Badge className="bg-blue-600">Méthode de travail</Badge>
                <span className="text-sm text-muted-foreground">12 min de lecture</span>
              </div>
              <CardTitle className="text-2xl">Comment travailler la géopolitique au quotidien</CardTitle>
              <p className="text-muted-foreground">
                Méthode complète pour maîtriser les études de cas, dissertations types et techniques d'entraînement en prépa
              </p>
            </CardHeader>
          </Card>

          {/* Programme d'entraînement hebdomadaire */}
          <Card className="mb-8 bg-blue-600 text-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Programme d'entraînement hebdomadaire</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold">1</div>
                  <div className="text-sm text-blue-100">Dissertation complète rédigée ou en plan détaillé</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold">1</div>
                  <div className="text-sm text-blue-100">Fiche sur une étude de cas</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Accordion type="multiple" className="w-full space-y-4">
            
            {/* 1. Études de cas passe-partout */}
            <AccordionItem value="etudes-cas" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500 text-white">
                    <Map className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">1. Maîtriser les études de cas passe-partout</h3>
                    <p className="text-sm text-muted-foreground">Les études de cas polyvalentes à connaître absolument</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-6">
                  <p className="text-muted-foreground">
                    Les études de cas sont indispensables en géopolitique, car elles permettent d'illustrer plusieurs thèmes récurrents. 
                    Il faut les apprendre en profondeur et savoir les mobiliser dans différents contextes.
                  </p>

                  <div>
                    <h4 className="font-semibold mb-4">Exemples d'études de cas polyvalentes :</h4>
                    <div className="grid gap-4">
                      {etudesDeCasPassePartout.map((etude, index) => (
                        <Card key={index} className="border-l-4 border-l-blue-500">
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <Badge className={`bg-blue-100 text-blue-700 mb-2`}>{etude.nom}</Badge>
                                <p className="text-sm text-muted-foreground">{etude.utilisation}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      Comment les apprendre efficacement ?
                    </h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Faire une fiche par étude de cas avec :</strong></p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Les enjeux principaux</li>
                        <li>Les acteurs impliqués</li>
                        <li>Une carte associée (indispensable)</li>
                        <li>Des citations et faits d'actualité récents</li>
                      </ul>
                      <p className="mt-3"><strong>Créer des liens</strong> entre les études de cas pour les réutiliser dans différents sujets.</p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* 2. Dissertations types */}
            <AccordionItem value="dissertations" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500 text-white">
                    <PenTool className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">2. Maîtriser les dissertations sur les continents/thématiques clés</h3>
                    <p className="text-sm text-muted-foreground">Préparer des dissertations types adaptables</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-6">
                  <p className="text-muted-foreground">
                    Certaines problématiques et paradoxes reviennent souvent en géopolitique. Il faut donc apprendre 
                    des dissertations types sur ces thèmes pour pouvoir les adapter à n'importe quel sujet.
                  </p>

                  <div>
                    <h4 className="font-semibold mb-4">Exemples de sujets incontournables :</h4>
                    <div className="grid gap-2">
                      {sujetsIncontournables.map((sujet, index) => (
                        <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                          <Target className="h-4 w-4 text-blue-600" />
                          <span className="text-sm">{sujet}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-4">Méthode pour préparer une dissertation type :</h4>
                    
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium mb-2">1. Trouver le paradoxe et la problématique</h5>
                        <p className="text-sm text-muted-foreground italic">
                          Ex. : « La mondialisation renforce-t-elle ou affaiblit-elle les États ? »
                        </p>
                      </div>

                      <div>
                        <h5 className="font-medium mb-3">2. Construire un plan en trois parties systématiquement réutilisable</h5>
                        <div className="space-y-3">
                          {methodePlanType.map((partie, index) => (
                            <Card key={index} className="border-l-4 border-l-blue-500">
                              <CardContent className="p-3">
                                <h6 className="font-medium">{partie.partie}</h6>
                                <p className="text-sm text-muted-foreground">{partie.description}</p>
                                <p className="text-xs text-gray-500 mt-1">({partie.exemples})</p>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h5 className="font-medium mb-2">3. Apprendre les accroches et citations par cœur</h5>
                        <div className="bg-white p-3 rounded border-l-4 border-l-blue-500">
                          <p className="text-sm italic">
                            « Les frontières sont le mariage du droit et de la force » – Michel Foucher
                          </p>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-medium mb-2">4. S'entraîner à rédiger des introductions et conclusions types</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* 3. Entraînement et mises en situation */}
            <AccordionItem value="entrainement" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500 text-white">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">3. S'entraîner sur les mises en situation</h3>
                    <p className="text-sm text-muted-foreground">Pratique régulière et entraînement efficace</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-6">
                  <p className="text-muted-foreground">
                    L'entraînement est crucial pour être efficace en géopolitique. Il ne suffit pas d'apprendre des connaissances, 
                    il faut savoir les mobiliser rapidement.
                  </p>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      Comment s'entraîner efficacement ?
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <span>Prendre un sujet précis et proposer un plan en 15 minutes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <span>Faire des mises en situation régulières : imaginer que l'on passe un oral et expliquer un sujet sans notes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <span>S'entraîner avec des croquis et des cartes en temps limité</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <span>Corriger ses propres copies et les comparer avec des corrections de concours</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4">Exemples de sujets pour s'entraîner :</h4>
                    <div className="grid gap-2">
                      {sujetsEntrainement.map((sujet, index) => (
                        <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                          <Clock className="h-4 w-4 text-blue-600" />
                          <span className="text-sm">{sujet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default GeopolitiquesMethodologiePage;