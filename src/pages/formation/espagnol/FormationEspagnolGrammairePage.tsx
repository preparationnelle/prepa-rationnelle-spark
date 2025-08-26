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
      color: "bg-orange-600",
      theme: "orange",
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
      color: "bg-orange-600",
      theme: "orange",
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
      color: "bg-orange-600",
      theme: "orange",
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
      color: "bg-orange-600",
      theme: "orange",
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
      color: "bg-orange-600",
      theme: "orange",
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
      color: "bg-orange-600",
      theme: "orange",
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
      color: "bg-orange-600",
      theme: "orange",
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
      color: "bg-orange-600",
      theme: "orange",
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
      color: "bg-orange-600",
      theme: "orange",
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
      color: "bg-orange-600",
      theme: "orange",
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
    // Design sobre et cohérent - tous les modules utilisent l'orange pour les éléments principaux
    // Fond très clair, texte en nuances de bleu pour la lisibilité
    const colors = {
      orange: {
        bg: "from-gray-50/30 to-white", // Fond très sobre et clair
        border: "border-gray-200", // Bordures subtiles
        text: "text-gray-800", // Texte principal en gris foncé
        accent: "text-blue-600", // Accent en bleu pour les éléments secondaires
        button: "bg-orange-600 hover:bg-orange-700", // Boutons toujours en orange
        tag: "bg-gray-50 border-gray-200" // Tags très sobres
      }
    };
    return colors[theme as keyof typeof colors] || colors.orange;
  };

  return (
    <div className="min-h-screen bg-gray-50/20">
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
                          <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50/50">
                            {module.level}
                          </Badge>
                          <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50/50">
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
                          <Link to="/formation/espagnol/grammaire/conjugaison/exercices">
                            <Button variant="outline" className={`px-6 ${themeColors.border} ${themeColors.accent} hover:${themeColors.bg.split(' ')[0]}`}>
                              <Briefcase className="mr-2 h-4 w-4" />
                              Exercices
                            </Button>
                          </Link>
                        </>
                      ) : module.id === 3 ? (
                        <>
                          <Link to="/formation/espagnol/grammaire/ser-estar" className="flex-1">
                            <Button className={`w-full ${themeColors.button} text-white font-semibold py-3`}>
                              <Calendar className="mr-2 h-4 w-4" />
                              Accéder au module
                            </Button>
                          </Link>
                          <Link to="/formation/espagnol/grammaire/ser-estar/exercices">
                            <Button variant="outline" className={`px-6 ${themeColors.border} ${themeColors.accent} hover:${themeColors.bg.split(' ')[0]}`}>
                              <Briefcase className="mr-2 h-4 w-4" />
                              Exercices
                            </Button>
                          </Link>
                        </>
                      ) : module.id === 2 ? (
                        <>
                          <Link to="/formation/espagnol/grammaire/syntaxe-structures-complexes" className="flex-1">
                            <Button className={`w-full ${themeColors.button} text-white font-semibold py-3`}>
                              <Calendar className="mr-2 h-4 w-4" />
                              Accéder au module
                            </Button>
                          </Link>
                          <Link to="/formation/espagnol/grammaire/syntaxe-structures-complexes/exercices">
                            <Button variant="outline" className={`px-6 ${themeColors.border} ${themeColors.accent} hover:${themeColors.bg.split(' ')[0]}`}>
                              <Briefcase className="mr-2 h-4 w-4" />
                              Exercices
                            </Button>
                          </Link>
                        </>
                      ) : module.id === 4 ? (
                        <>
                          <Link to="/formation/espagnol/grammaire/prepositions" className="flex-1">
                            <Button className={`w-full ${themeColors.button} text-white font-semibold py-3`}>
                              <Calendar className="mr-2 h-4 w-4" />
                              Accéder au module
                            </Button>
                          </Link>
                          <Link to="/formation/espagnol/grammaire/prepositions/exercices">
                            <Button variant="outline" className={`px-6 ${themeColors.border} ${themeColors.accent} hover:${themeColors.bg.split(' ')[0]}`}>
                              <Briefcase className="mr-2 h-4 w-4" />
                              Exercices
                            </Button>
                          </Link>
                        </>
                      ) : module.id === 5 ? (
                        <>
                          <Link to="/formation/espagnol/grammaire/questions" className="flex-1">
                            <Button className={`w-full ${themeColors.button} text-white font-semibold py-3`}>
                              <Calendar className="mr-2 h-4 w-4" />
                              Accéder au module
                            </Button>
                          </Link>
                          <Link to="/formation/espagnol/grammaire/questions/exercices">
                            <Button variant="outline" className={`px-6 ${themeColors.border} ${themeColors.accent} hover:${themeColors.bg.split(' ')[0]}`}>
                              <Briefcase className="mr-2 h-4 w-4" />
                              Exercices
                            </Button>
                          </Link>
                        </>
                      ) : module.id === 6 ? (
                        <>
                          <Link to="/formation/espagnol/grammaire/negations" className="flex-1">
                            <Button className={`w-full ${themeColors.button} text-white font-semibold py-3`}>
                              <Calendar className="mr-2 h-4 w-4" />
                              Accéder au module
                            </Button>
                          </Link>
                          <Link to="/formation/espagnol/grammaire/negations/exercices">
                            <Button variant="outline" className={`px-6 ${themeColors.border} ${themeColors.accent} hover:${themeColors.bg.split(' ')[0]}`}>
                              <Briefcase className="mr-2 h-4 w-4" />
                              Exercices
                            </Button>
                          </Link>
                        </>
                      ) : module.id === 7 ? (
                        <>
                          <Link to="/formation/espagnol/grammaire/temporal" className="flex-1">
                            <Button className={`w-full ${themeColors.button} text-white font-semibold py-3`}>
                              <Calendar className="mr-2 h-4 w-4" />
                              Accéder au module
                            </Button>
                          </Link>
                          <Link to="/formation/espagnol/grammaire/temporal/exercices">
                            <Button variant="outline" className={`px-6 ${themeColors.border} ${themeColors.accent} hover:${themeColors.bg.split(' ')[0]}`}>
                              <Briefcase className="mr-2 h-4 w-4" />
                              Exercices
                            </Button>
                          </Link>
                        </>
                      ) : module.id === 8 ? (
                        <>
                          <Link to="/formation/espagnol/grammaire/pronouns" className="flex-1">
                            <Button className={`w-full ${themeColors.button} text-white font-semibold py-3`}>
                              <Calendar className="mr-2 h-4 w-4" />
                              Accéder au module
                            </Button>
                          </Link>
                          <Link to="/formation/espagnol/grammaire/pronouns/exercices">
                            <Button variant="outline" className={`px-6 ${themeColors.border} ${themeColors.accent} hover:${themeColors.bg.split(' ')[0]}`}>
                              <Briefcase className="mr-2 h-4 w-4" />
                              Exercices
                            </Button>
                          </Link>
                        </>
                      ) : module.id === 9 ? (
                        <>
                          <Link to="/formation/espagnol/grammaire/affective-verbs" className="flex-1">
                            <Button className={`w-full ${themeColors.button} text-white font-semibold py-3`}>
                              <Calendar className="mr-2 h-4 w-4" />
                              Accéder au module
                            </Button>
                          </Link>
                          <Link to="/formation/espagnol/grammaire/affective-verbs/exercices">
                            <Button variant="outline" className={`px-6 ${themeColors.border} ${themeColors.accent} hover:${themeColors.bg.split(' ')[0]}`}>
                              <Briefcase className="mr-2 h-4 w-4" />
                              Exercices
                            </Button>
                          </Link>
                        </>
                      ) : (
                        <>
                          <Link to="/formation/espagnol/grammaire/adjectives-adverbs" className="flex-1">
                            <Button className={`w-full ${themeColors.button} text-white font-semibold py-3`}>
                              <Calendar className="mr-2 h-4 w-4" />
                              Accéder au module
                            </Button>
                          </Link>
                          <Link to="/formation/espagnol/grammaire/adjectives-adverbs/exercices">
                            <Button variant="outline" className={`px-6 ${themeColors.border} ${themeColors.accent} hover:${themeColors.bg.split(' ')[0]}`}>
                              <Briefcase className="mr-2 h-4 w-4" />
                              Exercices
                            </Button>
                          </Link>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <Card className="border border-gray-200 bg-white/60 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2 text-gray-800">
              <BookOpen className="h-5 w-5 text-orange-600" />
              Méthodologie de révision
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 space-y-4">
            <p className="leading-relaxed">
              La grammaire espagnole demande une approche progressive et systématique. 
              Chaque module s'appuie sur des points fondamentaux pour construire une maîtrise complète.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-orange-600" />
                  Progression conseillée
                </h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Commencer par Ser/Estar et prépositions (bases)</li>
                  <li>• Maîtriser les temps verbaux progressivement</li>
                  <li>• Approfondir la syntaxe complexe</li>
                  <li>• S'entraîner au thème grammatical régulièrement</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <Target className="h-4 w-4 text-orange-600" />
                  Pour les concours
                </h3>
                <ul className="text-sm text-gray-600 space-y-1">
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