import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Home, 
  ChevronRight, 
  BookOpen,
  Calendar,
  Briefcase,
  Clock,
  Target,
  Zap,
  FileText,
  MessageSquare,
  Users
} from 'lucide-react';

const FormationEspagnolGrammairePage = () => {
  const grammarModules = [
    {
      id: 1,
      title: "Conjugaison et Temps Verbaux",
      description: "Maîtrisez les temps complexes : subjonctif, conditionnel, impératif",
      icon: Clock,
      color: "bg-orange-600",
      theme: "orange",
      topics: [
        "Subjonctif présent et imparfait",
        "Concordance des temps",
        "Conditionnel et hypothèse",
        "Impératif et nuances"
      ],
      detailedTopics: [
        "Emplois du subjonctif en contexte",
        "Séquence des temps au subjonctif",
        "Expression de l'hypothèse (si + temps)",
        "Ordres, conseils et suggestions",
        "Gérondif et participe présent"
      ],
      level: "Intermédiaire - Avancé",
      duration: "2-3 heures"
    },
    {
      id: 2,
      title: "Syntaxe et Structures Complexes",
      description: "Structures syntaxiques sophistiquées pour enrichir l'expression",
      icon: Target,
      color: "bg-rose-600",
      theme: "rose",
      topics: [
        "Propositions relatives complexes",
        "Discours rapporté",
        "Expression de l'opinion",
        "Structures emphatiques"
      ],
      detailedTopics: [
        "Relatifs : que, quien, cuyo, donde",
        "Style direct → style indirect",
        "Verbes d'opinion et subjonctif",
        "Mise en relief : es que, lo que",
        "Tournures idiomatiques courantes"
      ],
      level: "Avancé",
      duration: "2-3 heures"
    },
    {
      id: 3,
      title: "Ser vs Estar et Constructions",
      description: "Maîtrisez les nuances entre ser et estar, constructions spéciales",
      icon: Zap,
      color: "bg-purple-600",
      theme: "purple",
      topics: [
        "Ser vs Estar : règles avancées",
        "Constructions avec haber",
        "Verbes de changement d'état",
        "Passif et voix pronominale"
      ],
      detailedTopics: [
        "Nuances ser/estar avec adjectifs",
        "Hay, había, hubo vs estar",
        "Volverse, ponerse, quedarse, hacerse",
        "Ser + participe vs estar + participe",
        "Se passif, se impersonnel"
      ],
      level: "Intermédiaire",
      duration: "1-2 heures"
    },
    {
      id: 4,
      title: "Prépositions et Locutions",
      description: "Emploi précis des prépositions et locutions prépositionnelles",
      icon: FileText,
      color: "bg-indigo-600",
      theme: "indigo",
      topics: [
        "Prépositions A, DE, EN, CON",
        "Locutions prépositionnelles",
        "Régimes verbaux",
        "Expressions figées"
      ],
      detailedTopics: [
        "A personnel, A + infinitif",
        "DE partitif, DE + infinitif",
        "Contractions al, del",
        "Verbes à double régime",
        "Expressions idiomatiques fréquentes"
      ],
      level: "Tous niveaux",
      duration: "1-2 heures"
    },
    {
      id: 5,
      title: "Thème Grammatical",
      description: "Techniques de traduction français → espagnol avec pièges classiques",
      icon: MessageSquare,
      color: "bg-blue-600",
      theme: "blue",
      topics: [
        "Méthodologie du thème",
        "Pièges de traduction",
        "Faux-amis courants",
        "Registres de langue"
      ],
      detailedTopics: [
        "Analyse de la phrase française",
        "Choix lexicaux et nuances",
        "Gallicismes à éviter",
        "Adaptation du registre",
        "Révision et vérification"
      ],
      level: "Concours",
      duration: "3-4 heures"
    },
    {
      id: 6,
      title: "Expression et Style",
      description: "Améliorer son expression écrite et son style en espagnol",
      icon: Users,
      color: "bg-teal-600",
      theme: "teal",
      topics: [
        "Connecteurs logiques",
        "Enrichissement du vocabulaire",
        "Variété syntaxique",
        "Registres de langue"
      ],
      detailedTopics: [
        "Articulateurs argumentatifs",
        "Synonymes et nuances",
        "Éviter les répétitions",
        "Adaptation au contexte",
        "Style soutenu vs familier"
      ],
      level: "Intermédiaire - Avancé",
      duration: "2-3 heures"
    }
  ];

  const getThemeColors = (theme: string) => {
    const colors = {
      orange: {
        bg: "from-orange-50 to-amber-50",
        border: "border-orange-200",
        text: "text-orange-800",
        accent: "text-orange-600",
        button: "bg-orange-600 hover:bg-orange-700",
        tag: "bg-orange-100 border-orange-200"
      },
      rose: {
        bg: "from-rose-50 to-pink-50",
        border: "border-rose-200",
        text: "text-rose-800",
        accent: "text-rose-600",
        button: "bg-rose-600 hover:bg-rose-700",
        tag: "bg-rose-100 border-rose-200"
      },
      purple: {
        bg: "from-purple-50 to-pink-50",
        border: "border-purple-200",
        text: "text-purple-800",
        accent: "text-purple-600",
        button: "bg-purple-600 hover:bg-purple-700",
        tag: "bg-purple-100 border-purple-200"
      },
      indigo: {
        bg: "from-indigo-50 to-purple-50",
        border: "border-indigo-200",
        text: "text-indigo-800",
        accent: "text-indigo-600",
        button: "bg-indigo-600 hover:bg-indigo-700",
        tag: "bg-indigo-100 border-indigo-200"
      },
      blue: {
        bg: "from-blue-50 to-indigo-50",
        border: "border-blue-200",
        text: "text-blue-800",
        accent: "text-blue-600",
        button: "bg-blue-600 hover:bg-blue-700",
        tag: "bg-blue-100 border-blue-200"
      },
      teal: {
        bg: "from-teal-50 to-blue-50",
        border: "border-teal-200",
        text: "text-teal-800",
        accent: "text-teal-600",
        button: "bg-teal-600 hover:bg-teal-700",
        tag: "bg-teal-100 border-teal-200"
      }
    };
    return colors[theme as keyof typeof colors] || colors.orange;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-gray-600">
            <Link to="/" className="flex items-center gap-1 hover:text-gray-900 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/espagnol" className="hover:text-gray-900 transition-colors">
              Formation Espagnol
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <span className="text-gray-900 font-bold">Grammaire</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <div className="p-3 rounded-lg bg-orange-600 text-white">
              <BookOpen className="h-9 w-9" />
            </div>
            Grammaire Espagnole
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Maîtrisez les structures grammaticales complexes pour exceller aux épreuves d'espagnol ECG
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge variant="secondary">6 modules essentiels</Badge>
            <Badge variant="outline">Actualisé 2024</Badge>
            <Badge className="bg-orange-600">Niveau Prépa</Badge>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Modules de Grammaire</h2>
          <div className="grid gap-8">
            {grammarModules.map((module) => {
              const themeColors = getThemeColors(module.theme);
              return (
                <Card key={module.id} className={`bg-gradient-to-br ${themeColors.bg} border-2 ${themeColors.border} shadow-lg`}>
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-4 rounded-xl ${module.color} text-white shadow-lg`}>
                        <module.icon className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className={`text-3xl font-bold ${themeColors.text} mb-2 flex items-center gap-3`}>
                          <span className={`${module.color} text-white px-3 py-1 rounded-full text-xl font-bold`}>
                            {module.id}
                          </span>
                          {module.title}
                        </CardTitle>
                        <p className="text-gray-700 text-lg">{module.description}</p>
                        <div className="flex gap-3 mt-2">
                          <Badge variant="outline" className={`${themeColors.accent} border-current`}>
                            {module.level}
                          </Badge>
                          <Badge variant="outline" className={`${themeColors.accent} border-current`}>
                            {module.duration}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className={`font-semibold ${themeColors.text} mb-3 flex items-center gap-2`}>
                          <Target className="h-4 w-4" />
                          Points essentiels
                        </h4>
                        <div className="space-y-2">
                          {module.topics.map((topic, index) => (
                            <div key={index} className={`p-3 rounded-lg border ${themeColors.tag}`}>
                              <span className="text-sm font-medium">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className={`font-semibold ${themeColors.text} mb-3 flex items-center gap-2`}>
                          <Zap className="h-4 w-4" />
                          Approfondissements
                        </h4>
                        <div className="space-y-2">
                          {module.detailedTopics.map((topic, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <div className={`w-2 h-2 rounded-full ${module.color.replace('bg-', 'bg-')}`}></div>
                              <span className={`text-sm ${themeColors.accent}`}>{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button className={`flex-1 ${themeColors.button} text-white font-semibold py-3`}>
                        <Calendar className="mr-2 h-4 w-4" />
                        Accéder au module
                      </Button>
                      <Button variant="outline" className={`px-6 ${themeColors.border} ${themeColors.accent} hover:${themeColors.bg.split(' ')[0]}`}>
                        <Briefcase className="mr-2 h-4 w-4" />
                        Exercices
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <Card className="border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2 text-orange-800">
              <BookOpen className="h-5 w-5" />
              Méthodologie de révision
            </CardTitle>
          </CardHeader>
          <CardContent className="text-orange-700 space-y-4">
            <p className="leading-relaxed">
              La grammaire espagnole demande une approche progressive et systématique. 
              Chaque module s'appuie sur des points fondamentaux pour construire une maîtrise complète.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-orange-900 mb-2">📚 Progression conseillée :</h3>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• Commencer par Ser/Estar et prépositions (bases)</li>
                  <li>• Maîtriser les temps verbaux progressivement</li>
                  <li>• Approfondir la syntaxe complexe</li>
                  <li>• S'entraîner au thème grammatical régulièrement</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-orange-900 mb-2">🎯 Pour les concours :</h3>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• Subjonctif : 70% des thèmes en contiennent</li>
                  <li>• Prépositions : source principale d'erreurs</li>
                  <li>• Ser/Estar : nuances indispensables</li>
                  <li>• Style : enrichir l'expression personnelle</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FormationEspagnolGrammairePage;