import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Target, FileText, MessageSquare, Clock, CheckCircle, AlertCircle, BookOpen, TrendingUp, Users, Lightbulb, Zap, Star, Award, Calendar, BarChart3, Home, ChevronRight } from 'lucide-react';

const FormationEspagnolMethodologiePage: React.FC = () => {
  const detailedSections = [
    {
      id: 1,
      title: "Avant-propos : L'importance stratégique de l'espagnol",
      icon: <AlertCircle className="w-6 h-6" />,
      color: "orange",
      content: {
        main: "S'il y a bien une chose que j'ai pu apprendre en classe préparatoire, c'est l'importance de « verrouiller » les matières avec un petit coefficient. La LV2 Espagnole ne fait pas exception à cette règle !",
        importance: [
          "Coefficient modeste mais éliminatoire : < 10 = hors course pour les meilleures écoles",
          "Matière transversale : utile pour maths appliquées, géopolitique, civilisation",
          "Concours BCE : épreuve commune à toutes les écoles de commerce",
          "Temps d'investissement optimisé : 2-3h/semaine suffisent pour exceller"
        ],
        reality: "Bien que cette matière soit sur le papier deux fois moins importante que les mathématiques, une note inférieure à 10 en Espagnol vous bloquera l'accès aux toutes meilleures écoles. C'est mathématique : avec 12/20 en maths et 8/20 en espagnol, votre moyenne sera insuffisante pour intégrer HEC, ESCP ou l'EDHEC.",
        strategy: "Il est donc crucial d'établir un compromis judicieux en termes de gestion du temps pour bosser également les maths. L'espagnol doit devenir votre matière de confort, celle où vous êtes certain d'obtenir 14-16/20 sans y consacrer trop d'énergie."
      }
    },
    {
      id: 2,
      title: "Prendre du recul sur l'épreuve BCE",
      icon: <Target className="w-6 h-6" />,
      color: "blue",
      content: {
        overview: "L'Épreuve de la BCE d'espagnol représente 4 heures d'examen cruciales qui vont déterminer votre admissibilité dans les meilleures écoles de commerce françaises.",
        structure: [
          {
            title: "Format général",
            details: "4 heures au total - épreuve commune à HEC, ESCP, EM Lyon, EDHEC, SKEMA, etc.",
            importance: "Toutes les écoles utilisent cette épreuve commune"
          },
          {
            title: "Q1 : Synthèse de texte (30%)",
            details: "250 mots maximum - Analyse comparative de 2 textes espagnols",
            importance: "30% de la note - Base solide pour l'essai"
          },
          {
            title: "Q2 : Essai argumentatif (50%)",
            details: "350 mots - Réflexion personnelle sur question de civilisation",
            importance: "50% de la note - Le cœur de l'épreuve"
          },
          {
            title: "Q3 : Traduction (20%)",
            details: "Texte français → espagnol - Traduction fidèle et idiomatique",
            importance: "20% de la note - Technique et précision"
          }
        ],
        key_insight: "Seulement trois exercices distincts à maîtriser pendant deux ans ! Cette simplicité apparente cache une grande complexité : chaque exercice demande une approche méthodologique spécifique, un vocabulaire dédié, et des compétences techniques précises.",
        strategic_approach: "C'est donc crucial d'adapter son travail en fonction de ces trois exercices qui possèdent chacun leurs propres exigences et caractéristiques techniques. On ne travaille pas la synthèse comme on travaille l'essai. C'est évident : on ne synthétise pas deux documents comme on écrit un essai personnel."
      }
    }
  ];

  const organizationStrategies = [
    {
      title: "À la maison : Construction des fondations",
      icon: <BookOpen className="w-5 h-5" />,
      color: "orange",
      sections: [
        {
          title: "Les bases linguistiques (Priorité absolue)",
          details: "Avant de se plonger dans un travail technique, il est crucial de connaître les bases de la langue par cœur. Cela ne sert à rien de construire le toit d'une maison si les murs sont en papier.",
          specifics: [
            "Vocabulaire fondamental : 2000-3000 mots essentiels (priorité aux mots de liaison, temps, espace)",
            "Conjugaisons : Tous les temps courants + subjonctif impératif",
            "Règles d'accents : Accent tonique, accents diacritiques, règles des diphtongues",
            "Morphologie : Genre des noms, formation du pluriel, comparatifs/superlatifs"
          ],
          method: "Créer des listes Quizlet hebdomadaires et les réviser quotidiennement. Objectif : reconnaître instantanément 95% des mots rencontrés."
        },
        {
          title: "Priorisation stratégique des exercices",
          details: "Il est très important d'être stratégique, de prioriser et maîtriser les exercices les plus importants.",
          approach: [
            "Focus initial : Synthèse (Q1) + Essai (Q2) = 80% de la note finale",
            "Approche équilibrée : Ne jamais négliger la traduction malgré son faible coefficient",
            "Progression logique : Maîtriser Q1 avant Q2 (l'essai s'appuie sur la synthèse)"
          ],
          time_allocation: "Semaine type : 40% Q1, 40% Q2, 20% Q3 + 10% révision générale"
        },
        {
          title: "Vocabulaire spécifique par exercice",
          details: "Chaque exercice nécessite un arsenal lexical spécifique qu'il faut constituer progressivement.",
          vocabulary_types: [
            "Q1 (Synthèse) : Termes d'analyse, comparaison, concession, reformulation",
            "Q2 (Essai) : Expression personnelle, argumentation, modalisation, subjectivité",
            "Q3 (Traduction) : Équivalents idiomatiques, faux-amis, termes techniques"
          ]
        }
      ]
    },
    {
      title: "En épreuve : La stratégie du jour J",
      icon: <Clock className="w-5 h-5" />,
      color: "blue",
      sections: [
        {
          title: "Ordre des exercices optimisé",
          details: "L'ordre des exercices n'est pas anodin et doit être réfléchi stratégiquement.",
          personal_strategy: [
            "Début par Q1 : 'Échauffement' intellectuel, compréhension des enjeux du sujet",
            "Puis Q2 : Réflexion 'à chaud' sur les thématiques abordées en Q1",
            "Enfin Q3 : Concentration maximale pour la traduction technique"
          ],
          timing: "Q1 (1h15-1h30) → Q2 (1h30-1h40) → Q3 (1h-1h15) = Total ~4h avec transitions"
        },
        {
          title: "Gestion temporelle précise",
          details: "Chaque minute compte et doit être optimisée selon une stratégie éprouvée.",
          breakdown: [
            "Q1 : 1h15 (lecture + annotation + brouillon + rédaction + relecture)",
            "Q2 : 1h30-1h40 (réflexion + plan + rédaction + développement + conclusion)",
            "Q3 : 1h minimum (lecture attentive + traduction multiple + relecture comparative)"
          ],
          buffer: "Prévoir 15-20 minutes de buffer pour les imprévus et la gestion du stress"
        },
        {
          title: "Tests en conditions réelles",
          details: "La seule façon de valider une stratégie est de la tester en situation.",
          methodology: [
            "DS blancs complets : 1 par mois minimum",
            "Chronométrage strict : même temps que l'épreuve réelle",
            "Correction détaillée : identifier les points d'amélioration",
            "Ajustement progressif : affiner la stratégie au fil des tests"
          ]
        }
      ]
    }
  ];

  const detailedWorkMethods = [
    {
      title: "La synthèse (Q1) - 30% de la note",
      icon: <FileText className="w-5 h-5" />,
      color: "orange",
      introduction: "La synthèse est un résumé analytique comparatif. Il faut donc se dire qu'il faudra « résumer » donc mettre en évidence les idées forces de chaque article, « analyser » et donc faire cet effort de lire entre les lignes, détailler ce que veut dire l'idée et pourquoi pas développer un exemple présent dans l'article, et aussi « comparer », c'est ici que c'est plus subtil : il faut organiser un petit débat entre les deux articles !",
      structure: {
        intro: {
          title: "Introduction courte (30-40 mots)",
          content: "Servir vraiment à la contextualisation : documents récents/actuels, faisant partie d'un sujet de société majeur. Éviter les généralités, aller directement à l'essentiel.",
          example: "En primer lugar, ambos documentos publicados recientemente abordan el impacto de las redes sociales en la juventud española, tema de gran actualidad en el debate social contemporáneo."
        },
        part1: {
          title: "Premier paragraphe : Une idée force commune",
          content: "Commencer par donner une crédibilité au sujet dans une première partie : les deux articles considèrent le sujet comme important (tendance montante, préoccupation majeure). Cela permet de résumer les tendances de fond et de comparer chaque document en analysant leurs approches théoriques différentes.",
          example: "Ambos textos coinciden en señalar que el fenómeno migratorio constituye un desafío fundamental para la cohesión europea, si bien divergen en sus propuestas para enfrentarlo."
        },
        part2: {
          title: "Deuxième paragraphe : Confrontation directe",
          content: "Dédié à la confrontation directe avec plusieurs axes possibles : point de confrontation majeur (l'éléphant au milieu de la pièce), imagination de futurs opposés face au sujet, analyse des conséquences opposées.",
          example: "Sin embargo, mientras el primer artículo aboga por una política de integración acelerada, el segundo plantea serias dudas sobre su viabilidad a corto plazo."
        },
        conclusion: {
          title: "Mini-conclusion (20-30 mots)",
          content: "Rappeler brièvement les deux axes de confrontation et rajouter sans expliciter une petite idée présente dans les textes. Attention : il n'y a pas de bonne réponse, chaque candidat peut proposer un travail différent.",
          example: "En definitiva, estos textos ofrecen visiones complementarias que enriquecen el debate sobre esta cuestión crucial para nuestro futuro común."
        }
      },
      vocabulary: [
        {
          category: "Analyse et compréhension",
          words: ["destacar", "subrayar", "poner de relieve", "poner de manifiesto", "sostener", "afirmar", "defender", "criticar", "cuestionar"]
        },
        {
          category: "Comparaison et opposition",
          words: ["por el contrario", "sin embargo", "no obstante", "a diferencia de", "al contrario", "en cambio", "mientras que", "por su parte"]
        },
        {
          category: "Concession et nuance",
          words: ["si bien", "aunque", "a pesar de", "pese a", "reconocer que", "admitir que", "conceder que", "es cierto que"]
        },
        {
          category: "Réformulation",
          words: ["es decir", "esto es", "en otras palabras", "dicho de otro modo", "en definitiva", "en resumen", "en síntesis"]
        }
      ],
      tips: [
        "Lire activement : surligner les idées forces, noter les connecteurs logiques",
        "Identifier le débat sous-jacent : thèse vs antithèse",
        "Respecter scrupuleusement les 250 mots : compter précisément",
        "Utiliser un vocabulaire technique adapté à la comparaison",
        "Ne pas chercher à tout dire : la synthèse est sélective"
      ]
    },
    {
      title: "L'essai (Q2) - 50% de la note",
      icon: <MessageSquare className="w-5 h-5" />,
      color: "blue",
      introduction: "Ici c'est différent, on ne résume rien, on réfléchit de manière autonome… ou presque. On est quand même guidé par le dossier documentaire. C'est pour cela que je trouve que c'est une très bonne chose de commencer par la Q1 pour avoir une première approche détaillée du dossier documentaire. Ainsi, on peut réfléchir « à chaud » et ne pas partir de zéro.",
      structure: {
        intro: {
          title: "Introduction conséquente (70-80 mots)",
          content: "Présenter le sujet avec un accroche + ambivalence qui donne du crédit à la problématique. Éviter de recopier la problématique du sujet, la reformuler avec ses propres mots.",
          example: "La cuestión de la identidad nacional en un mundo globalizado plantea un dilema fundamental: ¿cómo preservar nuestras tradiciones culturales sin caer en el aislamiento xenófobo? Si bien algunos defienden un retorno a las raíces tradicionales, otros abogan por una apertura total que enriqueceria nuestra sociedad."
        },
        problematique: {
          title: "Problématique explicite",
          content: "Doit découler naturellement de l'ambivalence de l'intro. Reformuler le sujet sous forme interrogative pour montrer sa réflexion personnelle.",
          example: "¿Cómo encontrar el equilibrio entre preservar nuestra identidad cultural y adaptarnos a los cambios ineluctables de la globalización?"
        },
        part1: {
          title: "Paragraphe général : Enjeux et risques",
          content: "Commencer par un paragraphe général rappelant les enjeux et les risques, toujours en tenant compte de la problématique. Montrer une vision globale avant de prendre position.",
          example: "En primer lugar, la globalización representa tanto una oportunidad como una amenaza para las identidades culturales tradicionales..."
        },
        part2: {
          title: "Prise de position avec civilisation",
          content: "Défendre une idée claire avec des éléments de civilisation espagnole/mexicaine/américaine latine. Apporter des exemples concrets et développer des arguments solides.",
          example: "A mi juicio, es fundamental adoptar una actitud abierta pero selectiva, inspirándonos en el modelo español de convivencia multicultural..."
        },
        part3: {
          title: "Paragraphe optionnel : Nuance ou contre-argument",
          content: "Si le temps le permet, développer une nuance ou un contre-argument pour enrichir la réflexion.",
          example: "Sin embargo, no podemos ignorar los riesgos de una apertura indiscriminada que podría diluir nuestras señas de identidad..."
        },
        conclusion: {
          title: "Conclusion forte (60-70 mots)",
          content: "Très importante car elle fait partie de l'exercice. Apporter une nouvelle idée sans la développer complètement, finir en beauté.",
          example: "En definitiva, la identidad cultural no es un museo estático sino un proceso dinámico de adaptación creativa. Solo así podremos construir un futuro donde la tradición y la innovación se enriquecen mutuamente, como lo demuestra el éxito de la cultura española contemporánea."
        }
      },
      vocabulary: [
        {
          category: "Expression personnelle",
          words: ["a mi juicio", "en mi opinión", "considero que", "estoy convencido de que", "me parece que", "pienso que"]
        },
        {
          category: "Modalisation et subjectivité",
          words: ["sin duda", "evidentemente", "claramente", "indudablemente", "es indudable que", "resulta obvio que"]
        },
        {
          category: "Argumentation",
          words: ["por una parte", "por otra parte", "en primer lugar", "en segundo lugar", "además", "asimismo", "igualmente"]
        },
        {
          category: "Exemples et illustration",
          words: ["por ejemplo", "así por ejemplo", "como demuestra", "como lo ilustra", "tal como se observa en"]
        }
      ],
      tips: [
        "Prendre clairement position : éviter le 'ni-ni' mou",
        "Utiliser des exemples de civilisation concrets : actualité espagnole, histoire, culture",
        "Respecter les 350 mots : compter précisément",
        "Montrer une pensée nuancée mais ferme",
        "Terminer fort avec une ouverture nouvelle"
      ]
    },
    {
      title: "La traduction (Q3) - 20% de la note",
      icon: <TrendingUp className="w-5 h-5" />,
      color: "green",
      introduction: "Exercice technique certes… mais pas impossible ! C'est sûrement l'épreuve qui demande le plus de concentration mais qui compte le moins pour la note finale. Malheureusement, certains correcteurs décident de commencer par la traduction et si c'est bâclé ou mal fait, alors les méchants correcteurs auront un mauvais a priori sur ta copie, ce qui affectera ta note, même si le reste est nickel.",
      methods: [
        {
          title: "Thème grammatical : Base technique",
          description: "Permet de progresser rapidement et de faire un bilan rapide des principaux pièges à éviter en thème. Facile de trouver les annales et les corrigés sur internet.",
          sources: ["Annales ECRICOME", "Mister Prépa", "Major Prépa", "Prépa Rationnelle"],
          frequency: "2-3 thèmes par semaine les premiers mois"
        },
        {
          title: "Thèmes suivis : Pratique journalistique",
          description: "Vous avez de plus en plus d'annales corrigées de thèmes journalistiques (ce que vous aurez au concours).",
          sources: [
            "Sujets ECRICOME à partir de 2023",
            "Annales BCE à partir de 2023",
            "Articles de presse français contemporains"
          ],
          approach: "Prendre un article français d'un journal utilisé au concours (Le Monde, Libération, etc.) et le traduire entièrement"
        },
        {
          title: "Tirage de leçons systématique",
          description: "À la fin de chaque session de traduction, ne pas passer bêtement à la prochaine activité. Prendre 10 minutes pour noter et ficher le vocabulaire et les tournures que vous n'avez pas su traduire.",
          categories: [
            {
              title: "Mots de vocabulaire « faciles/bruts »",
              examples: ["action", "décision", "un tournant", "le moment est venu", "accepter", "refuser", "mener à terme"],
              strategy: "Mots susceptibles de tomber le jour J - les apprendre par cœur"
            },
            {
              title: "Mots polyvalents",
              examples: ["séisme", "raz de marée", "bras de fer", "tempête", "coup de tonnerre", "tourner la page", "un tournant", "un dérapage"],
              strategy: "Mots qui ne semblent pas utiles à première vue mais tombent en réalité plus souvent qu'on ne le pense"
            }
          ]
        },
        {
          title: "Apprentissage du vocabulaire spécialisé",
          description: "Au-delà des mots de base, apprendre du vocabulaire qui servira spécifiquement en traduction.",
          focus: [
            "Termes administratifs et politiques",
            "Vocabulaire économique et social",
            "Expressions idiomatiques françaises à traduire",
            "Faux-amis à éviter absolument"
          ]
        },
        {
          title: "Relecture comparative",
          description: "Au-delà d'identifier les fautes (ce qui est la base), la relecture permet de « cadrer » votre traduction et regarder si tout s'enchaîne bien et que tout est compréhensible.",
          criteria: [
            "Lisibilité : Un lecteur espagnol comprendrait-il sans effort ?",
            "Style : Ressemble-t-elle à un article qu'on pourrait retrouver dans El País ?",
            "Cohérence : Le ton et le registre sont-ils adaptés ?",
            "Fluidité : L'espagnol coule-t-il naturellement ?"
          ]
        }
      ],
      timing_strategy: "Je conseillais d'avoir minimum une heure pour réaliser sa traduction et proposer plusieurs traductions pour un mot jusqu'à se sentir le plus proche de la signification originale et ce sans jamais vraiment être pressé par le temps !",
      vocabulary_examples: [
        {
          category: "Expressions temporelles",
          examples: [
            "à court terme → a corto plazo",
            "à long terme → a largo plazo",
            "à moyen terme → a medio plazo",
            "dans l'immédiat → de inmediato"
          ]
        },
        {
          category: "Expressions causales",
          examples: [
            "en raison de → debido a",
            "à cause de → a causa de",
            "grâce à → gracias a",
            "par conséquent → por consiguiente"
          ]
        },
        {
          category: "Faux-amis critiques",
          examples: [
            "actuellement → actualmente (pas 'actualmente' qui signifie 'en ce moment')",
            "réaliser → realizar (pas 'realizar' qui signifie 'se rendre compte')",
            "sensibilité → sensibilidad (pas 'sensibilidad' qui signifie 'sensibilité')"
          ]
        }
      ]
    }
  ];

  const advancedTools = [
    {
      title: "Quizlet : Le couteau suisse du vocabulaire (75% du temps)",
      icon: <Zap className="w-5 h-5" />,
      color: "orange",
      description: "Quizlet est un incontournable en prépa et me permettait de mémoriser du vocabulaire rapidement. C'est un logiciel qui me permettait de créer des listes de vocabulaire et de le mémoriser grâce à différents modes de jeu.",
      lists: [
        {
          title: "Liste spéciale Q1 (Synthèse)",
          content: "Expressions d'analyse, comparaison, concession, reformulation",
          examples: ["por el contrario", "sin embargo", "a pesar de", "es decir", "en otras palabras"],
          frequency: "Révision quotidienne - 15-20 minutes"
        },
        {
          title: "Liste spéciale Q2 (Essai)",
          content: "Expressions personnelles, argumentation, modalisation",
          examples: ["a mi juicio", "considero que", "sin duda", "por una parte", "por ejemplo"],
          frequency: "Révision quotidienne - 15-20 minutes"
        },
        {
          title: "Listes de vocabulaire technique (50 mots chacune)",
          content: "Vocabulaire thématique pour enrichir les exercices",
          categories: [
            "Política y sociedad",
            "Economía y empresa",
            "Cultura y educación",
            "Medio ambiente y desarrollo",
            "Tecnología e innovación"
          ],
          frequency: "1-2 nouvelles listes par semaine"
        },
        {
          title: "Liste « fautes copies »",
          content: "Toutes les fautes grammaticales et lexicales commises en DS",
          method: "Ajouter systématiquement après chaque correction",
          examples: ["confusión entre 'ser' et 'estar'", "accent tonique oublié", "faux-ami non détecté"],
          frequency: "Mise à jour hebdomadaire"
        },
        {
          title: "Liste « Grammaire espagnol »",
          content: "Rappels des règles essentielles",
          sections: [
            "Conjugaison des verbes irréguliers",
            "Accord des participes passés",
            "Usage du subjonctif",
            "Formation des adverbes",
            "Règles d'accentuation"
          ],
          frequency: "Révision bihebdomadaire"
        },
        {
          title: "Liste « mots rencontrés en traduction »",
          content: "Vocabulaire spécifique à la traduction française-espagnol",
          categories: [
            "Termes administratifs",
            "Expressions idiomatiques",
            "Vocabulaire économique",
            "Faux-amis à éviter"
          ],
          frequency: "Enrichissement continu"
        },
        {
          title: "Liste « la base »",
          content: "Vocabulaire fondamental à connaître impérativement",
          scope: "2000 mots essentiels + expressions courantes",
          frequency: "Révision quotidienne de base"
        }
      ],
      methodology: "J'utilisais cet outil 75% du temps pour affiner mon vocabulaire. Les 25% du temps étaient consacrés à la lecture de presse et l'entraînement en temps limité."
    },
    {
      title: "Lecture et entraînement actif (25% du temps)",
      icon: <Users className="w-5 h-5" />,
      color: "blue",
      activities: [
        {
          title: "Lecture rapide de presse espagnole",
          description: "Entraînement à la lecture rapide pour repérer les idées forces rapidement le jour J",
          sources: ["El País", "El Mundo", "ABC", "La Vanguardia"],
          method: "Lecture chronométrée : 5 minutes par article, résumé en 3 phrases",
          frequency: "3-4 articles par semaine"
        },
        {
          title: "Écriture active en espagnol",
          description: "Pratique régulière de l'écriture pour fluidifier l'expression",
          exercises: [
            "Résumés d'articles français traduits en espagnol",
            "Essais préparatoires sur sujets de civilisation",
            "Traduction comparative : plusieurs versions du même texte"
          ],
          correction: "Auto-correction puis vérification sur internet pour l'orthographe exacte"
        },
        {
          title: "Correction orthographique systématique",
          description: "Chaque faute devient une occasion d'apprentissage",
          process: [
            "Identifier la faute commise",
            "Comprendre pourquoi l'erreur",
            "Ajouter à la liste Quizlet « fautes copies »",
            "Réviser la règle grammaticale associée"
          ]
        },
        {
          title: "Entraînement en temps limité",
          description: "Simulations d'épreuves pour développer la résistance au stress",
          format: [
            "DS blancs complets : 1 par mois",
            "Exercices isolés : 15-20 minutes par exercice",
            "Révisions éclair : 5 minutes de vocabulaire ciblé"
          ],
          progression: "Commencer par des exercices courts, augmenter progressivement la durée"
        }
      ]
    }
  ];

  const finalTips = [
    {
      title: "Accepter que l'on soit en difficulté",
      description: "Ne pas mettre tout sous le tapis et se réconforter en se disant que l'on est bon en maths. Il faut accepter les problèmes et les attaquer à bras-le-corps. La difficulté est normale au début, c'est le signe que vous progressez.",
      icon: <AlertCircle className="w-5 h-5" />
    },
    {
      title: "Lire les bonnes copies et apprendre des meilleurs",
      description: "Ne pas hésiter à aller consulter les sites Major prépa et Mister prépa pour aller lire et extraire le vocabulaire des bonnes copies. Sinon vous pouvez directement demander les copies aux majors qui pourront expliquer leur manière de réfléchir.",
      icon: <Star className="w-5 h-5" />
    },
    {
      title: "Penser en espagnol",
      description: "Pas si simple. Pourtant c'est bel et bien en pensant en espagnol (fil d'actualité Instagram en espagnol, réflexion en espagnol, gros mots en espagnol, Netflix en espagnol, chansons en espagnol) que j'ai pu maintenir inconsciemment le cap, différencier le langage oral et l'écrit plus formel.",
      icon: <Lightbulb className="w-5 h-5" />
    },
    {
      title: "Prendre la parole en cours",
      description: "Dès que votre prof pose une question, répondez. Peu importe si vous cherchez vos mots, le plus important c'est de prendre la parole. On ne vous laissera pas le choix le jour J, vous devrez répondre aux questions. C'est aussi un bon moyen de vaincre sa timidité.",
      icon: <Users className="w-5 h-5" />
    },
    {
      title: "Règle d'or : On n'écrit jamais un mot si on n'est pas 100% sûr de l'orthographe",
      description: "Si vous hésitez sur un mot, reformulez la phrase. Une faute d'orthographe, même minime, peut coûter cher dans une copie par ailleurs parfaite. Mieux vaut une phrase plus simple mais correcte qu'une formulation recherchée avec une erreur.",
      icon: <CheckCircle className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border/40 relative z-10">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formations" className="hover:text-foreground transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formation/espagnol" className="hover:text-foreground transition-colors">
              Formation Espagnol ECG
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Méthodologie LV2 Espagnol</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">

          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Méthodologie LV2 Espagnol
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
              De 4 à 18 en une année : la méthode complète pour maîtriser l'espagnol en classe préparatoire
            </p>
            <div className="text-center">
              <p className="text-sm font-medium text-gray-700">
                Progression personnelle : 4/20 → 18/20
              </p>
              <p className="text-sm text-gray-600">
                Admission dans le TOP 5 : ESCP, EDHEC (17,5), EM Lyon (18), SKEMA (17,5)
              </p>
            </div>
          </div>
        </div>

        {/* Avant-propos détaillé */}
        <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-orange-400 pb-3">
            Avant-propos : L'importance stratégique de l'espagnol
          </h2>
        {detailedSections.map((section, index) => (
          <div key={section.id} className="mb-8">
            <div className="space-y-6">
              {section.id === 1 ? (
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    {section.content.main}
                  </p>
                  <div className="space-y-3">
                    {section.content.importance.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
              </div>
                  <div className="border-l-4 border-red-400 pl-4 py-2">
                    <p className="text-gray-800 font-medium text-sm">
                      RÉALITÉ : {section.content.reality}
                    </p>
              </div>
                  <div className="border-l-4 border-orange-400 pl-4 py-2">
                    <p className="text-gray-800 font-medium text-sm">
                      STRATÉGIE : {section.content.strategy}
                    </p>
              </div>
            </div>
              ) : (
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    {section.content.overview}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {section.content.structure.map((item, idx) => (
                      <div key={idx} className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-sm text-gray-700 mb-2">{item.details}</p>
                        <p className="text-xs text-gray-600 font-medium">{item.importance}</p>
                      </div>
                    ))}
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4 py-3">
                    <h4 className="font-semibold text-gray-900 mb-2">Clé stratégique</h4>
                    <p className="text-gray-700 text-sm">{section.content.key_insight}</p>
                  </div>
                  <div className="border-l-4 border-orange-400 pl-4 py-3">
                    <h4 className="font-semibold text-gray-900 mb-2">Approche méthodologique</h4>
                    <p className="text-gray-700 text-sm">{section.content.strategic_approach}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
        </div>

        {/* Organisation détaillée */}
        <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-400 pb-3">
            1) L'organisation
          </h2>

          {organizationStrategies.map((strategy, index) => (
            <div key={index} className="space-y-8">
              {strategy.sections.map((section, idx) => (
                <div key={idx} className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {section.title}
                  </h3>

                  {section.title.includes("bases linguistiques") && (
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">{section.details}</p>
                      <div className="space-y-2">
                        {section.specifics.map((spec, specIdx) => (
                          <div key={specIdx} className="border-l-4 border-orange-400 pl-4 py-2">
                            <p className="text-sm text-gray-700">{spec}</p>
                          </div>
                        ))}
                      </div>
                      <div className="border-l-4 border-blue-400 pl-4 py-2">
                        <p className="text-sm text-gray-800 font-medium">{section.method}</p>
                      </div>
                    </div>
                  )}

                  {section.title.includes("priorisation stratégique") && (
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">{section.details}</p>
                      <div className="space-y-2">
                        {section.approach.map((item, itemIdx) => (
                          <div key={itemIdx} className="border-l-4 border-blue-400 pl-4 py-2">
                            <p className="text-sm text-gray-700">{item}</p>
                          </div>
                        ))}
                      </div>
                      <div className="border-l-4 border-orange-400 pl-4 py-2">
                        <p className="text-sm text-gray-800 font-medium">{section.time_allocation}</p>
                    </div>
                  </div>
                )}

                  {section.title.includes("vocabulaire spécifique") && (
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">{section.details}</p>
                      <div className="space-y-2">
                        {section.vocabulary_types.map((type, typeIdx) => (
                          <div key={typeIdx} className="border-l-4 border-orange-400 pl-4 py-2">
                            <p className="text-sm text-gray-700">{type}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.title.includes("ordre des exercices") && (
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">{section.details}</p>
                      <div className="space-y-2">
                        {section.personal_strategy.map((strat, stratIdx) => (
                          <div key={stratIdx} className="flex items-start gap-3">
                            <Badge variant="outline" className="mt-1 text-xs">{stratIdx + 1}</Badge>
                            <span className="text-sm text-gray-700">{strat}</span>
                          </div>
                        ))}
                      </div>
                      <div className="border-l-4 border-orange-400 pl-4 py-2">
                        <p className="text-sm text-gray-800 font-medium">{section.timing}</p>
                    </div>
                  </div>
                )}

                  {section.title.includes("gestion temporelle") && (
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">{section.details}</p>
                      <div className="space-y-2">
                        {section.breakdown.map((item, itemIdx) => (
                          <div key={itemIdx} className="border-l-4 border-red-400 pl-4 py-2">
                            <p className="text-sm text-gray-700 font-medium">{item}</p>
                          </div>
                        ))}
                      </div>
                      <div className="border-l-4 border-blue-400 pl-4 py-2">
                        <p className="text-sm text-gray-800 font-medium">{section.buffer}</p>
                      </div>
                    </div>
                  )}

                  {section.title.includes("tests en conditions réelles") && (
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">{section.details}</p>
                      <div className="space-y-2">
                        {section.methodology.map((method, methodIdx) => (
                          <div key={methodIdx} className="border-l-4 border-blue-400 pl-4 py-2">
                            <p className="text-sm text-gray-700">{method}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

                {/* Travail technique détaillé */}
        <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-green-400 pb-3">
            2) Le travail technique détaillé
          </h2>

          <div className="space-y-12">
            {detailedWorkMethods.map((method, index) => (
              <div key={index} className="border-l-4 border-orange-400 pl-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {method.title}
                  </h3>
                  <Badge variant="outline" className="text-gray-600">
                    {method.title.split('-')[1]}
                  </Badge>
                </div>

                {/* Introduction */}
                <div className="border-l-4 border-gray-300 pl-4 py-2">
                  <p className="text-gray-700 leading-relaxed">{method.introduction}</p>
                </div>

                {/* Structure détaillée */}
                {method.structure && (
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900">Structure recommandée</h4>
                    {Object.entries(method.structure).map(([key, value]) => (
                      <div key={key} className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">{value.title}</h5>
                        <p className="text-sm text-gray-700 mb-3">{value.content}</p>
                        {value.example && (
                          <div className="border-l-4 border-blue-400 pl-4 py-2">
                            <p className="text-xs font-medium text-gray-700 mb-1">Exemple concret :</p>
                            <p className="text-sm text-gray-800 italic">"{value.example}"</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Vocabulaire spécialisé */}
                {method.vocabulary && (
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900">Vocabulaire spécialisé</h4>
                    {method.vocabulary.map((vocab, vocabIdx) => (
                      <div key={vocabIdx} className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-3">{vocab.category}</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {vocab.words.map((word, wordIdx) => (
                            <div key={wordIdx} className="text-sm text-gray-700">
                              • {word}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Méthodes spécifiques pour la traduction */}
                {method.methods && (
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900">Méthodes de travail</h4>
                    {method.methods.map((meth, methIdx) => (
                      <div key={methIdx} className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">{meth.title}</h5>
                        <p className="text-sm text-gray-700 mb-3">{meth.description}</p>
                        {meth.sources && (
                          <div className="mb-3">
                            <p className="text-xs font-medium text-gray-700 mb-1">Sources recommandées :</p>
                            <div className="flex flex-wrap gap-2">
                              {meth.sources.map((source, sourceIdx) => (
                                <Badge key={sourceIdx} variant="outline" className="text-xs">
                                  {source}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                        {meth.frequency && (
                          <p className="text-xs text-gray-600 mb-2">Fréquence : {meth.frequency}</p>
                        )}
                        {meth.approach && (
                          <p className="text-xs text-gray-600 mb-2">Approche : {meth.approach}</p>
                        )}
                        {meth.categories && (
                          <div className="space-y-2">
                            {meth.categories.map((cat, catIdx) => (
                              <div key={catIdx} className="border-l-4 border-orange-400 pl-4 py-2">
                                <p className="text-sm font-medium text-gray-800 mb-1">{cat.title}</p>
                                <p className="text-xs text-gray-600 mb-2">{cat.strategy}</p>
                                <div className="flex flex-wrap gap-1">
                                  {cat.examples.map((ex, exIdx) => (
                                    <Badge key={exIdx} variant="outline" className="text-xs">
                                      {ex}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                        {meth.criteria && (
                          <div className="mt-3">
                            <p className="text-xs font-medium text-gray-700 mb-2">Critères de qualité :</p>
                            <div className="space-y-1">
                              {meth.criteria.map((crit, critIdx) => (
                                <div key={critIdx} className="text-xs text-gray-600">
                                  • {crit}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Timing strategy pour la traduction */}
                {method.timing_strategy && (
                  <div className="border-l-4 border-red-400 pl-4 py-3">
                    <p className="text-gray-800 font-medium">Stratégie temporelle : {method.timing_strategy}</p>
                  </div>
                )}

                {/* Exemples de vocabulaire pour la traduction */}
                {method.vocabulary_examples && (
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900">Exemples de vocabulaire</h4>
                    {method.vocabulary_examples.map((vocabEx, vocabExIdx) => (
                      <div key={vocabExIdx} className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-3">{vocabEx.category}</h5>
                        <div className="space-y-2">
                          {vocabEx.examples.map((ex, exIdx) => (
                            <div key={exIdx} className="text-sm text-gray-700">
                              • {ex}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Conseils pratiques */}
                {method.tips && (
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-900">Conseils pratiques</h4>
                    <div className="space-y-2">
                      {method.tips.map((tip, tipIdx) => (
                        <div key={tipIdx} className="border-l-4 border-blue-400 pl-4 py-2">
                          <p className="text-sm text-gray-700">{tip}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

                {/* Outils avancés */}
        <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-purple-400 pb-3">
            3) Les outils avancés
          </h2>

          <div className="space-y-8">
            {advancedTools.map((tool, index) => (
              <div key={index} className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {tool.title}
                  </h3>
                  <p className="text-gray-700">{tool.description}</p>
                </div>

                {tool.lists && (
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900">Listes détaillées</h4>
                    <div className="space-y-4">
                      {tool.lists.map((list, listIdx) => (
                        <div key={listIdx} className="border border-gray-200 rounded-lg p-4">
                          <h5 className="font-semibold text-gray-900 mb-2">{list.title}</h5>
                          <p className="text-sm text-gray-700 mb-3">{list.content}</p>
                          {list.examples && (
                            <div className="mb-3">
                              <p className="text-xs font-medium text-gray-700 mb-2">Exemples :</p>
                              <div className="flex flex-wrap gap-2">
                                {list.examples.map((ex, exIdx) => (
                                  <Badge key={exIdx} variant="outline" className="text-xs">
                                    {ex}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}
                          {list.frequency && (
                            <p className="text-xs text-gray-600 mb-2">Fréquence : {list.frequency}</p>
                          )}
                          {list.categories && (
                            <div className="mb-3">
                              <p className="text-xs font-medium text-gray-700 mb-1">Catégories :</p>
                              {list.categories.map((cat, catIdx) => (
                                <p key={catIdx} className="text-xs text-gray-600">• {cat}</p>
                              ))}
                            </div>
                          )}
                          {list.method && (
                            <p className="text-xs text-gray-600 mb-2">Méthode : {list.method}</p>
                          )}
                          {list.scope && (
                            <p className="text-xs text-gray-600 mb-2">Étendue : {list.scope}</p>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="border-l-4 border-orange-400 pl-4 py-3">
                      <p className="text-gray-800 font-medium">{tool.methodology}</p>
                    </div>
                  </div>
                )}

                {tool.activities && (
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900">Activités pratiques</h4>
                    <div className="space-y-4">
                      {tool.activities.map((activity, actIdx) => (
                        <div key={actIdx} className="border border-gray-200 rounded-lg p-4">
                          <h5 className="font-semibold text-gray-900 mb-2">{activity.title}</h5>
                          <p className="text-sm text-gray-700 mb-3">{activity.description}</p>
                          {activity.sources && (
                            <div className="mb-3">
                              <p className="text-xs font-medium text-gray-700 mb-2">Sources :</p>
                              <div className="flex flex-wrap gap-2">
                                {activity.sources.map((source, sourceIdx) => (
                                  <Badge key={sourceIdx} variant="outline" className="text-xs">
                                    {source}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}
                          {activity.method && (
                            <p className="text-xs text-gray-600 mb-2">Méthode : {activity.method}</p>
                          )}
                          {activity.frequency && (
                            <p className="text-xs text-gray-600 mb-2">Fréquence : {activity.frequency}</p>
                          )}
                          {activity.exercises && (
                            <div className="mb-3">
                              <p className="text-xs font-medium text-gray-700 mb-2">Exercices :</p>
                              {activity.exercises.map((ex, exIdx) => (
                                <p key={exIdx} className="text-xs text-gray-600">• {ex}</p>
                              ))}
                            </div>
                          )}
                          {activity.correction && (
                            <p className="text-xs text-gray-600 mb-2">Correction : {activity.correction}</p>
                          )}
                          {activity.process && (
                            <div className="mb-3">
                              <p className="text-xs font-medium text-gray-700 mb-2">Processus :</p>
                              {activity.process.map((proc, procIdx) => (
                                <p key={procIdx} className="text-xs text-gray-600">{procIdx + 1}. {proc}</p>
                              ))}
                            </div>
                          )}
                          {activity.format && (
                            <div className="mb-3">
                              <p className="text-xs font-medium text-gray-700 mb-2">Format :</p>
                              {activity.format.map((fmt, fmtIdx) => (
                                <p key={fmtIdx} className="text-xs text-gray-600">• {fmt}</p>
                              ))}
                            </div>
                          )}
                          {activity.progression && (
                            <p className="text-xs text-gray-600 mb-2">Progression : {activity.progression}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
          ))}
          </div>
        </div>

                {/* Conseils finaux détaillés */}
        <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-red-400 pb-3">
            4) Avant de partir : Conseils finaux pour l'excellence
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {finalTips.map((tip, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    {tip.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">{tip.title}</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{tip.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Résultats et motivation */}
          <div className="border-l-4 border-green-400 pl-4 py-6 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">RÉSULTATS OBTENUS</h3>
            <p className="text-lg font-semibold text-gray-800 mb-4">
              Progression exceptionnelle : 4/20 → 18/20 en première année de prépa
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-medium text-gray-900 mb-2">Admission TOP 5 :</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• ESCP (admissible)</li>
                  <li>• EDHEC (17,5/20)</li>
                  <li>• EM Lyon (18/20)</li>
                  <li>• SKEMA (17,5/20)</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-medium text-gray-900 mb-2">Impact global :</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Meilleure école du classement</li>
                  <li>• Concurrentialité maximale</li>
                  <li>• Réussite aux oraux</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-blue-400 pl-4 py-4">
            <p className="text-gray-800 font-medium">
              Cette méthode a transformé l'espagnol de matière faible en matière d'excellence.
              Il ne reste plus qu'à l'appliquer avec rigueur et persévérance !
            </p>
          </div>
        </div>

        {/* Anecdote finale */}
        <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-indigo-400 pb-3">
            Anecdote pour finir
          </h2>
          <div className="border-l-4 border-orange-400 pl-4 py-4">
            <p className="text-gray-700 leading-relaxed mb-3">
              Le jour du concours BCE, j'avais su traduire le mot « amertume » dans la Q3 car je l'avais entendu à mainte reprise
              dans la chanson <strong>Adam y Eva</strong> de Paulo Londra (elle est pas mal d'ailleurs…).
            </p>
            <p className="text-sm text-gray-600 italic">
              Cette anecdote illustre l'importance de l'immersion culturelle et de la mémorisation passive
              à travers la musique, les séries et les réseaux sociaux en espagnol.
            </p>
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-white border border-orange-200 rounded-xl p-6 mb-8 shadow-md">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Prêt à appliquer cette méthode ?</h3>
          <p className="text-gray-700 mb-6 text-center">
            Cette méthodologie détaillée vous donne toutes les clés pour réussir brillamment l'épreuve d'espagnol BCE.
            Il ne reste plus qu'à l'appliquer avec rigueur et persévérance !
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Commencer par les bases
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Planifier ma progression
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center">
          <Link to="/formation/espagnol">
            <Button variant="outline" size="lg" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Retour à la formation espagnol
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormationEspagnolMethodologiePage;