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
  Users,
  HelpCircle,
  Minus,
  Plus,
  CheckCircle,
  AlertTriangle,
  Star
} from 'lucide-react';

const FormationEspagnolGrammairePage = () => {
  const grammarModules = [
    {
      id: 1,
      title: "Conjugaison et Temps Verbaux",
      description: "Maîtrisez les temps complexes : subjonctif, conditionnel, impératif et tous les temps de l'indicatif",
      icon: Clock,
      color: "bg-orange-600",
      theme: "orange",
      level: "Intermédiaire - Avancé",
      duration: "2-3 heures",
      essentialTopics: [
        "Subjonctif présent et imparfait",
        "Concordance des temps",
        "Conditionnel et hypothèse",
        "Impératif et nuances",
        "Présent de l'indicatif (réguliers et irréguliers)",
        "Imparfait de l'indicatif",
        "Futur simple et composé",
        "Passé composé et plus-que-parfait",
        "Passé simple (pretérito indefinido)",
        "Forme progressive (gerundio)"
      ],
      detailedTopics: [
        "Emplois du subjonctif en contexte",
        "Séquence des temps au subjonctif",
        "Expression de l'hypothèse (si + temps)",
        "Ordres, conseils et suggestions",
        "Gérondif et participe présent",
        "Verbes réfléchis et pronominaux",
        "Diphtongue et affaiblissement au subjonctif",
        "Concordance subjonctif présent/imparfait",
        "Conditionnel pour l'hypothèse",
        "Impératif affirmatif et négatif"
      ],
      exercises: [
        "Conjuguer des verbes aux différents temps",
        "Transformer des temps (présent → futur)",
        "Rédiger des phrases avec modes spécifiques",
        "Concordance des temps en contexte",
        "Impératif avec pronoms enclitiques"
      ]
    },
    {
      id: 2,
      title: "Syntaxe et Structures Complexes",
      description: "Structures syntaxiques sophistiquées pour enrichir l'expression écrite et orale",
      icon: Target,
      color: "bg-rose-600",
      theme: "rose",
      level: "Avancé",
      duration: "2-3 heures",
      essentialTopics: [
        "Propositions relatives complexes",
        "Discours rapporté",
        "Expression de l'opinion",
        "Structures emphatiques",
        "Accords et désaccords",
        "Obligation et nécessité",
        "Hypothèse avec deber",
        "Auxiliaires et semi-auxiliaires",
        "Impersonnalité (La gente...)",
        "Comparaisons et négations"
      ],
      detailedTopics: [
        "Relatifs : que, quien, cuyo, donde",
        "Style direct → style indirect",
        "Verbes d'opinion et subjonctif",
        "Mise en relief : es que, lo que",
        "Tournures idiomatiques courantes",
        "Traduction de 'dont + nom'",
        "Avoir l'habitude de",
        "Forme négative avancée"
      ],
      exercises: [
        "Transformer en discours rapporté",
        "Construire des phrases complexes",
        "Utiliser les structures emphatiques",
        "Exprimer l'opinion avec nuances",
        "Créer des propositions relatives"
      ]
    },
    {
      id: 3,
      title: "Ser vs Estar et Constructions",
      description: "Maîtrisez les nuances entre ser et estar, constructions spéciales et verbes d'état",
      icon: Zap,
      color: "bg-purple-600",
      theme: "purple",
      level: "Intermédiaire",
      duration: "1-2 heures",
      essentialTopics: [
        "Ser vs Estar : règles avancées",
        "Constructions avec haber",
        "Verbes de changement d'état",
        "Passif et voix pronominale",
        "Ser ou Estar devant un adjectif",
        "Participe passé + SER/ESTAR/HABER",
        "Il y a (hay, había, hubo)",
        "Avoir (Haber et tener)",
        "Auxiliaire Haber et participe passé"
      ],
      detailedTopics: [
        "Nuances ser/estar avec adjectifs",
        "Hay, había, hubo vs estar",
        "Volverse, ponerse, quedarse, hacerse",
        "Ser + participe vs estar + participe",
        "Se passif, se impersonnel",
        "Caractères vs émotions",
        "Bilan Ser ou Estar au présent"
      ],
      exercises: [
        "Choisir ser/estar selon le contexte",
        "Former des phrases avec haber",
        "Utiliser les verbes de changement d'état",
        "Construire le passif avec se",
        "Distinguer ser/estar + adjectif"
      ]
    },
    {
      id: 4,
      title: "Prépositions et Locutions",
      description: "Emploi précis des prépositions et locutions prépositionnelles en espagnol",
      icon: FileText,
      color: "bg-indigo-600",
      theme: "indigo",
      level: "Tous niveaux",
      duration: "1-2 heures",
      essentialTopics: [
        "Prépositions A, DE, EN, CON",
        "Locutions prépositionnelles",
        "Régimes verbaux",
        "Expressions figées",
        "A ou EN devant un complément de lieu",
        "Les prépositions (instrument et moyen)",
        "A, en et por : faire la différence",
        "Prépositions Por et Para",
        "Moi et toi après une préposition"
      ],
      detailedTopics: [
        "A personnel, A + infinitif",
        "DE partitif, DE + infinitif",
        "Contractions al, del",
        "Verbes à double régime",
        "Expressions idiomatiques fréquentes",
        "Pour / Par → Para / Por"
      ],
      exercises: [
        "Compléter avec prépositions",
        "Identifier régimes verbaux",
        "Utiliser les contractions al/del",
        "Traduire des expressions figées",
        "Choisir entre por/para"
      ]
    },
    {
      id: 5,
      title: "Questions et Interrogatifs",
      description: "Maîtrisez la formulation des questions et l'usage des mots interrogatifs",
      icon: HelpCircle,
      color: "bg-teal-600",
      theme: "teal",
      level: "Débutant - Intermédiaire",
      duration: "1-2 heures",
      essentialTopics: [
        "Poser une question",
        "Les mots de questionnement",
        "Mots interrogatifs",
        "Retrouver la question",
        "Interrogatifs et prépositions",
        "Dialogue: Demander un renseignement",
        "Questions et réponses",
        "Choisir la bonne réponse"
      ],
      detailedTopics: [
        "Structures interrogatives avec verbes et prépositions",
        "Questions ouvertes vs. fermées",
        "Interrogatifs dans des dialogues quotidiens",
        "Erreurs courantes dans la formulation",
        "Où vas-tu? et variations"
      ],
      exercises: [
        "Former des questions",
        "Répondre à des interrogatifs",
        "Créer des dialogues",
        "Transformer des affirmations en questions",
        "Utiliser les mots interrogatifs"
      ]
    },
    {
      id: 6,
      title: "Négations",
      description: "Maîtrisez les formes négatives et leurs emplois en espagnol",
      icon: Minus,
      color: "bg-red-600",
      theme: "red",
      level: "Débutant - Intermédiaire",
      duration: "1 heure",
      essentialTopics: [
        "Formes négatives",
        "Forme négative",
        "Usage de no, nada, nadie, nunca",
        "Négations dans les temps verbaux",
        "Différences avec le français"
      ],
      detailedTopics: [
        "Négations simples et doubles",
        "Placement de la négation",
        "Négations avec subjonctif",
        "Expressions négatives idiomatiques",
        "Négations partielles"
      ],
      exercises: [
        "Transformer affirmatif en négatif",
        "Utiliser les mots négatifs",
        "Construire des phrases négatives",
        "Négations avec subjonctif",
        "Expressions négatives courantes"
      ]
    },
    {
      id: 7,
      title: "Vocabulaire Temporel : Dates et Heures",
      description: "Maîtrisez l'expression du temps, des dates et des heures en espagnol",
      icon: Calendar,
      color: "bg-green-600",
      theme: "green",
      level: "Tous niveaux",
      duration: "1 heure",
      essentialTopics: [
        "Jours, mois et saisons",
        "Les jours de la semaine",
        "Date jours mois années",
        "Tout savoir sur l'heure",
        "Heure et calcul mental",
        "Janvier → Enero"
      ],
      detailedTopics: [
        "Expressions temporelles avec prépositions",
        "Dire l'heure et les dates en contextes variés",
        "Vocabulaire saisonnier et calculs simples",
        "Formules de politesse temporelles",
        "Expressions idiomatiques temporelles"
      ],
      exercises: [
        "Écrire des dates",
        "Dire l'heure",
        "Calculs temporels",
        "Expressions temporelles",
        "Vocabulaire saisonnier"
      ]
    },
    {
      id: 8,
      title: "Pronoms",
      description: "Maîtrisez l'usage des pronoms personnels, possessifs et démonstratifs",
      icon: Users,
      color: "bg-yellow-600",
      theme: "yellow",
      level: "Intermédiaire",
      duration: "1-2 heures",
      essentialTopics: [
        "Vouvoiement et tutoiement pluriel",
        "Pronoms personnels sujets et compléments",
        "Pronoms LO/LA/LE (COD et COI)",
        "Pronoms réfléchis",
        "Pronoms possessifs",
        "On français en espagnol",
        "Tutoiement pluriel (Vosotros)"
      ],
      detailedTopics: [
        "Placement et enclise des pronoms",
        "Pronoms dans les verbes pronominaux",
        "Différences régionales (vosotros vs. ustedes)",
        "Erreurs courantes avec COD/COI",
        "Pronoms avec impératif"
      ],
      exercises: [
        "Placer des pronoms",
        "Transformer des phrases",
        "Utiliser les pronoms possessifs",
        "Pronoms avec verbes pronominaux",
        "Différences vosotros/ustedes"
      ]
    },
    {
      id: 9,
      title: "Verbes Particuliers et Tournures Affectives",
      description: "Maîtrisez les verbes comme gustar et les constructions affectives",
      icon: Star,
      color: "bg-pink-600",
      theme: "pink",
      level: "Intermédiaire",
      duration: "1-2 heures",
      essentialTopics: [
        "Gustar = Plaire",
        "Tournures affectives",
        "Conjugaison: Gustar",
        "Gustar et Doler",
        "Exprimer les goûts avec les tournures affectives",
        "Verbes affectifs (encantar, faltar)"
      ],
      detailedTopics: [
        "Structures inversées (me gusta vs. I like)",
        "Usage avec pronoms indirects",
        "Autres verbes affectifs",
        "Nuances entre gustar et encantar",
        "Construction avec infinitifs"
      ],
      exercises: [
        "Exprimer des préférences",
        "Utiliser gustar correctement",
        "Construire des phrases affectives",
        "Pronoms avec verbes affectifs",
        "Variations des tournures affectives"
      ]
    },
    {
      id: 10,
      title: "Adjectifs et Adverbes",
      description: "Maîtrisez l'accord des adjectifs, les adverbes et leurs emplois",
      icon: CheckCircle,
      color: "bg-emerald-600",
      theme: "emerald",
      level: "Débutant - Intermédiaire",
      duration: "1-2 heures",
      essentialTopics: [
        "Adjectifs possessifs",
        "Adjectifs indéfinis",
        "Adjectifs - genre et nombre",
        "Démonstratifs",
        "L'apocope",
        "Très-muy/beaucoup-mucho",
        "Adverbes de quantité",
        "Bien/mal/peu/beaucoup/tôt/tard"
      ],
      detailedTopics: [
        "Accord des adjectifs et exceptions",
        "Adverbes de manière et de temps",
        "Comparaison avec adjectifs/adverbes",
        "Apocope dans les contextes spécifiques",
        "Bon choix: Está/Esta/Ésta",
        "Pero... ou... sino..."
      ],
      exercises: [
        "Accorder adjectifs",
        "Choisir adverbes",
        "Utiliser l'apocope",
        "Distinguer démonstratifs",
        "Comparaisons avec adjectifs"
      ]
    },
    {
      id: 11,
      title: "Thème Grammatical",
      description: "Techniques de traduction français → espagnol avec pièges classiques et méthodologie",
      icon: MessageSquare,
      color: "bg-blue-600",
      theme: "blue",
      level: "Concours",
      duration: "3-4 heures",
      essentialTopics: [
        "Méthodologie du thème",
        "Pièges de traduction",
        "Faux-amis courants",
        "Registres de langue",
        "Analyse de la phrase française",
        "Choix lexicaux et nuances",
        "Gallicismes à éviter"
      ],
      detailedTopics: [
        "Analyse de la phrase française",
        "Choix lexicaux et nuances",
        "Gallicismes à éviter",
        "Adaptation du registre",
        "Révision et vérification",
        "Structures complexes en contexte",
        "Vocabulaire soutenu vs familier"
      ],
      exercises: [
        "Traduire des phrases complexes",
        "Identifier et corriger les gallicismes",
        "Adapter le registre de langue",
        "Vérifier la cohérence grammaticale",
        "S'entraîner sur des textes d'actualité"
      ]
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
      teal: {
        bg: "from-teal-50 to-blue-50",
        border: "border-teal-200",
        text: "text-teal-800",
        accent: "text-teal-600",
        button: "bg-teal-600 hover:bg-teal-700",
        tag: "bg-teal-100 border-teal-200"
      },
      red: {
        bg: "from-red-50 to-pink-50",
        border: "border-red-200",
        text: "text-red-800",
        accent: "text-red-600",
        button: "bg-red-600 hover:bg-red-700",
        tag: "bg-red-100 border-red-200"
      },
      green: {
        bg: "from-green-50 to-emerald-50",
        border: "border-green-200",
        text: "text-green-800",
        accent: "text-green-600",
        button: "bg-green-600 hover:bg-green-700",
        tag: "bg-green-100 border-green-200"
      },
      yellow: {
        bg: "from-yellow-50 to-amber-50",
        border: "border-yellow-200",
        text: "text-yellow-800",
        accent: "text-yellow-600",
        button: "bg-yellow-600 hover:bg-yellow-700",
        tag: "bg-yellow-100 border-yellow-200"
      },
      pink: {
        bg: "from-pink-50 to-rose-50",
        border: "border-pink-200",
        text: "text-pink-800",
        accent: "text-pink-600",
        button: "bg-pink-600 hover:bg-pink-700",
        tag: "bg-pink-100 border-pink-200"
      },
      emerald: {
        bg: "from-emerald-50 to-green-50",
        border: "border-emerald-200",
        text: "text-emerald-800",
        accent: "text-emerald-600",
        button: "bg-emerald-600 hover:bg-emerald-700",
        tag: "bg-emerald-100 border-emerald-200"
      },
      blue: {
        bg: "from-blue-50 to-indigo-50",
        border: "border-blue-200",
        text: "text-blue-800",
        accent: "text-blue-600",
        button: "bg-blue-600 hover:bg-blue-700",
        tag: "bg-blue-100 border-blue-200"
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
            <Badge variant="secondary">11 modules essentiels</Badge>
            <Badge variant="outline">Actualisé 2024</Badge>
            <Badge className="bg-orange-600">Niveau Prépa</Badge>
          </div>
        </div>

        {/* Section Entraînement au thème */}
        <Card className="mb-8 border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2 text-blue-800">
              <Target className="h-6 w-6" />
              Entraînement au Thème Grammatical
            </CardTitle>
          </CardHeader>
          <CardContent className="text-blue-700">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <p className="text-lg mb-4">
                  Améliorez vos compétences de traduction avec des exercices progressifs incluant :
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></span>
                    <span>10 exercices de thème grammatical</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></span>
                    <span>Exercices de thème suivi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></span>
                    <span>Indices et points de grammaire</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></span>
                    <span>Corrections détaillées</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <Link to="/formation/espagnol/grammaire/theme">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                    Commencer l'entraînement
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

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
                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                      <div>
                        <h4 className={`font-semibold ${themeColors.text} mb-3 flex items-center gap-2`}>
                          <Target className="h-4 w-4" />
                          Points essentiels
                        </h4>
                        <div className="space-y-2">
                          {module.essentialTopics.slice(0, 5).map((topic, index) => (
                            <div key={index} className={`p-3 rounded-lg border ${themeColors.tag}`}>
                              <span className="text-sm font-medium">{topic}</span>
                            </div>
                          ))}
                          {module.essentialTopics.length > 5 && (
                            <div className={`p-2 rounded-lg border ${themeColors.tag} text-center`}>
                              <span className="text-xs font-medium">+{module.essentialTopics.length - 5} autres points</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div>
                        <h4 className={`font-semibold ${themeColors.text} mb-3 flex items-center gap-2`}>
                          <Zap className="h-4 w-4" />
                          Approfondissements
                        </h4>
                        <div className="space-y-2">
                          {module.detailedTopics.slice(0, 5).map((topic, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <div className={`w-2 h-2 rounded-full ${module.color.replace('bg-', 'bg-')}`}></div>
                              <span className={`text-sm ${themeColors.accent}`}>{topic}</span>
                            </div>
                          ))}
                          {module.detailedTopics.length > 5 && (
                            <div className="text-center">
                              <span className="text-xs text-gray-500">+{module.detailedTopics.length - 5} autres approfondissements</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div>
                        <h4 className={`font-semibold ${themeColors.text} mb-3 flex items-center gap-2`}>
                          <CheckCircle className="h-4 w-4" />
                          Exercices proposés
                        </h4>
                        <div className="space-y-2">
                          {module.exercises.slice(0, 3).map((exercise, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <div className={`w-2 h-2 rounded-full ${module.color.replace('bg-', 'bg-')}`}></div>
                              <span className="text-sm text-gray-600">{exercise}</span>
                            </div>
                          ))}
                          {module.exercises.length > 3 && (
                            <div className="text-center">
                              <span className="text-xs text-gray-500">+{module.exercises.length - 3} autres exercices</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      {module.id === 11 ? (
                        <>
                          <Link to="/formation/espagnol/grammaire/theme" className="flex-1">
                            <Button className={`w-full ${themeColors.button} text-white font-semibold py-3`}>
                              <Calendar className="mr-2 h-4 w-4" />
                              Accéder au module
                            </Button>
                          </Link>
                          <Button variant="outline" className={`px-6 ${themeColors.border} ${themeColors.accent} hover:${themeColors.bg.split(' ')[0]}`}>
                            <Briefcase className="mr-2 h-4 w-4" />
                            Exercices
                          </Button>
                        </>
                      ) : module.id === 1 ? (
                        <>
                          <Link to="/formation/espagnol/grammaire/conjugaison" className="flex-1">
                            <Button className={`w-full ${themeColors.button} text-white font-semibold py-3`}>
                              <Calendar className="mr-2 h-4 w-4" />
                              Accéder au module
                            </Button>
                          </Link>
                          <Button variant="outline" className={`px-6 ${themeColors.border} ${themeColors.accent} hover:${themeColors.bg.split(' ')[0]}`}>
                            <Briefcase className="mr-2 h-4 w-4" />
                            Exercices
                          </Button>
                        </>
                      ) : module.id === 3 ? (
                        <>
                          <Link to="/formation/espagnol/grammaire/ser-estar" className="flex-1">
                            <Button className={`w-full ${themeColors.button} text-white font-semibold py-3`}>
                              <Calendar className="mr-2 h-4 w-4" />
                              Accéder au module
                            </Button>
                          </Link>
                          <Button variant="outline" className={`px-6 ${themeColors.border} ${themeColors.accent} hover:${themeColors.bg.split(' ')[0]}`}>
                            <Briefcase className="mr-2 h-4 w-4" />
                            Exercices
                          </Button>
                        </>
                      ) : module.id === 2 ? (
                        <>
                          <Link to="/formation/espagnol/grammaire/syntaxe" className="flex-1">
                            <Button className={`w-full ${themeColors.button} text-white font-semibold py-3`}>
                              <Calendar className="mr-2 h-4 w-4" />
                              Accéder au module
                            </Button>
                          </Link>
                          <Button variant="outline" className={`px-6 ${themeColors.border} ${themeColors.accent} hover:${themeColors.bg.split(' ')[0]}`}>
                            <Briefcase className="mr-2 h-4 w-4" />
                            Exercices
                          </Button>
                        </>
                      ) : module.id === 4 ? (
                        <>
                          <Link to="/formation/espagnol/grammaire/prepositions" className="flex-1">
                            <Button className={`w-full ${themeColors.button} text-white font-semibold py-3`}>
                              <Calendar className="mr-2 h-4 w-4" />
                              Accéder au module
                            </Button>
                          </Link>
                          <Button variant="outline" className={`px-6 ${themeColors.border} ${themeColors.accent} hover:${themeColors.bg.split(' ')[0]}`}>
                            <Briefcase className="mr-2 h-4 w-4" />
                            Exercices
                          </Button>
                        </>
                      ) : module.id === 5 ? (
                        <>
                          <Link to="/formation/espagnol/grammaire/questions" className="flex-1">
                            <Button className={`w-full ${themeColors.button} text-white font-semibold py-3`}>
                              <Calendar className="mr-2 h-4 w-4" />
                              Accéder au module
                            </Button>
                          </Link>
                          <Button variant="outline" className={`px-6 ${themeColors.border} ${themeColors.accent} hover:${themeColors.bg.split(' ')[0]}`}>
                            <Briefcase className="mr-2 h-4 w-4" />
                            Exercices
                          </Button>
                        </>
                      ) : module.id === 6 ? (
                        <>
                          <Link to="/formation/espagnol/grammaire/negations" className="flex-1">
                            <Button className={`w-full ${themeColors.button} text-white font-semibold py-3`}>
                              <Calendar className="mr-2 h-4 w-4" />
                              Accéder au module
                            </Button>
                          </Link>
                          <Button variant="outline" className={`px-6 ${themeColors.border} ${themeColors.accent} hover:${themeColors.bg.split(' ')[0]}`}>
                            <Briefcase className="mr-2 h-4 w-4" />
                            Exercices
                          </Button>
                        </>
                      ) : module.id === 7 ? (
                        <>
                          <Link to="/formation/espagnol/grammaire/temporal" className="flex-1">
                            <Button className={`w-full ${themeColors.button} text-white font-semibold py-3`}>
                              <Calendar className="mr-2 h-4 w-4" />
                              Accéder au module
                            </Button>
                          </Link>
                          <Button variant="outline" className={`px-6 ${themeColors.border} ${themeColors.accent} hover:${themeColors.bg.split(' ')[0]}`}>
                            <Briefcase className="mr-2 h-4 w-4" />
                            Exercices
                          </Button>
                        </>
                      ) : module.id === 8 ? (
                        <>
                          <Link to="/formation/espagnol/grammaire/pronouns" className="flex-1">
                            <Button className={`w-full ${themeColors.button} text-white font-semibold py-3`}>
                              <Calendar className="mr-2 h-4 w-4" />
                              Accéder au module
                            </Button>
                          </Link>
                          <Button variant="outline" className={`px-6 ${themeColors.border} ${themeColors.accent} hover:${themeColors.bg.split(' ')[0]}`}>
                            <Briefcase className="mr-2 h-4 w-4" />
                            Exercices
                          </Button>
                        </>
                      ) : module.id === 9 ? (
                        <>
                          <Link to="/formation/espagnol/grammaire/affective-verbs" className="flex-1">
                            <Button className={`w-full ${themeColors.button} text-white font-semibold py-3`}>
                              <Calendar className="mr-2 h-4 w-4" />
                              Accéder au module
                            </Button>
                          </Link>
                          <Button variant="outline" className={`px-6 ${themeColors.border} ${themeColors.accent} hover:${themeColors.bg.split(' ')[0]}`}>
                            <Briefcase className="mr-2 h-4 w-4" />
                            Exercices
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button className={`flex-1 ${themeColors.button} text-white font-semibold py-3`}>
                            <Calendar className="mr-2 h-4 w-4" />
                            Accéder au module
                          </Button>
                          <Button variant="outline" className={`px-6 ${themeColors.border} ${themeColors.accent} hover:${themeColors.bg.split(' ')[0]}`}>
                            <Briefcase className="mr-2 h-4 w-4" />
                            Exercices
                          </Button>
                        </>
                      )}
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