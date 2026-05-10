import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Target, CheckCircle, Award, Trophy, Lightbulb, ChevronRight, X } from 'lucide-react';
import { UnifiedFlashcards } from "@/components/ui/UnifiedFlashcards";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface VocabularyItem {
  spanish: string; // Expression française (affichée en premier dans nos flashcards allemandes)
  french: string; // Expression allemande (affichée en second)
  category: string;
  level: string;
  usage: string; // Quand utiliser cette expression
}

const ReussirEssaiExercicesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('toutes');
  const [selectedLevel, setSelectedLevel] = useState<string>('tous');
  const [examMode, setExamMode] = useState<boolean>(false);
  const [examStarted, setExamStarted] = useState<boolean>(false);
  const [examTime, setExamTime] = useState<number>(0);
  const [examTimer, setExamTimer] = useState<NodeJS.Timeout | null>(null);
  const [score, setScore] = useState<number | null>(null);
  const [showScore, setShowScore] = useState<boolean>(false);

  // Fonctions pour le nouveau design
  const startExam = () => {
    setExamStarted(true);
    setExamTime(0);
    const timer = setInterval(() => setExamTime(prev => prev + 1), 1000);
    setExamTimer(timer);
  };

  const finishExam = () => {
    if (examTimer) clearInterval(examTimer);
    // Pour les flashcards, on peut calculer un score basé sur le nombre de cartes vues
    setScore(85); // Score par défaut pour les flashcards
    setShowScore(true);
    setExamStarted(false);
  };

  const resetQuiz = () => {
    setScore(null);
    setShowScore(false);
    setExamStarted(false);
    setExamTime(0);
    if (examTimer) clearInterval(examTimer);
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    if (!examMode || !examStarted) {
      if (examTimer) clearInterval(examTimer);
    }
  }, [examMode, examStarted]);

  const essaiData = [
    // I. EINLEITUNG / INTRODUCTION - Expressions enrichies
    {
      spanish: "Dans l'essai suivant, j'expliquerai pourquoi/comment...",
      french: "In dem folgenden Aufsatz werde ich erklären, warum / wie…",
      category: "I. Introduction - Présenter le sujet",
      level: "intermédiaire",
      usage: "Introduction générale pour annoncer le contenu de l'essai"
    },
    {
      spanish: "Dans l'essai suivant, j'éclaircirai pourquoi l'Allemagne ne renoncera pas à ces objectifs malgré la crise énergétique actuelle.",
      french: "Im folgenden Aufsatz werde ich aufklären, warum Deutschland trotz der heutigen Energiekrise diese Ziele nicht aufgeben wird.",
      category: "I. Introduction - Présenter le sujet",
      level: "avancé",
      usage: "Introduction avec exemple concret du sujet traité"
    },
    {
      spanish: "Cette question est aujourd'hui au centre de nombreux débats : ...",
      french: "Diese Frage steht heute im Mittelpunkt vieler Debatten: ...",
      category: "I. Introduction - Présenter le sujet",
      level: "intermédiaire",
      usage: "Mise en contexte du débat actuel"
    },
    {
      spanish: "Face aux développements actuels, la question se pose de savoir si...",
      french: "Angesichts der aktuellen Entwicklungen stellt sich die Frage, ob...",
      category: "I. Introduction - Présenter le sujet",
      level: "avancé",
      usage: "Introduction problématique avec mise en contexte"
    },
    {
      spanish: "L'objectif de cet essai est d'analyser...",
      french: "Das Ziel dieses Aufsatzes ist es, zu analysieren...",
      category: "I. Introduction - Présenter le sujet",
      level: "intermédiaire",
      usage: "Annonce claire de l'objectif de l'essai"
    },
    {
      spanish: "Dans les lignes qui suivent, je traiterai de...",
      french: "In den folgenden Zeilen werde ich mich mit... beschäftigen",
      category: "I. Introduction - Présenter le sujet",
      level: "avancé",
      usage: "Transition vers le développement"
    },
    {
      spanish: "Le thème que je souhaite aborder concerne...",
      french: "Das Thema, das ich behandeln möchte, betrifft...",
      category: "I. Introduction - Présenter le sujet",
      level: "intermédiaire",
      usage: "Présentation du thème principal"
    },

    // Énoncer sa thèse - Expressions enrichies
    {
      spanish: "Je suis convaincu que...",
      french: "Ich bin der Überzeugung, dass…",
      category: "I. Introduction - Énoncer sa thèse",
      level: "intermédiaire",
      usage: "Expression de conviction personnelle"
    },
    {
      spanish: "Je suis fermement convaincu que...",
      french: "Ich bin fest davon überzeugt, dass...",
      category: "I. Introduction - Énoncer sa thèse",
      level: "avancé",
      usage: "Renforcement de la conviction"
    },
    {
      spanish: "Selon moi, on devrait...",
      french: "Meiner Meinung nach sollte man...",
      category: "I. Introduction - Énoncer sa thèse",
      level: "intermédiaire",
      usage: "Proposition personnelle"
    },
    {
      spanish: "Il est indispensable que...",
      french: "Es ist unerlässlich, dass...",
      category: "I. Introduction - Énoncer sa thèse",
      level: "avancé",
      usage: "Nécessité absolue"
    },
    {
      spanish: "À mon avis, il serait préférable de...",
      french: "Meiner Ansicht nach wäre es besser, zu...",
      category: "I. Introduction - Énoncer sa thèse",
      level: "intermédiaire",
      usage: "Suggestion avec justification"
    },
    {
      spanish: "Je suis fermement convaincu que...",
      french: "Ich bin fest davon überzeugt, dass...",
      category: "I. Introduction - Énoncer sa thèse"
    },
    {
      spanish: "Selon moi, on devrait...",
      french: "Meiner Meinung nach sollte man...",
      category: "I. Introduction - Énoncer sa thèse"
    },
    {
      spanish: "Je souhaite exposer pourquoi je suis d'avis que...",
      french: "Ich möchte darlegen, warum ich der Ansicht bin, dass...",
      category: "I. Introduction - Énoncer sa thèse"
    },

    // II. TEIL I: Kritik an der Gegenthese
    {
      spanish: "Je ne peux que condamner les gens qui...",
      french: "Ich kann nur die Leute verurteilen, die...",
      category: "II. Critique contre-thèse - Rejeter l'opinion contraire"
    },
    {
      spanish: "Je considère comme contre-productif/inutile/inefficace de faire quelque chose.",
      french: "Ich betrachte es als kontraproduktiv / sinnlos / unwirksam, etwas zu tun.",
      category: "II. Critique contre-thèse - Rejeter l'opinion contraire"
    },
    {
      spanish: "Je refuse de faire quelque chose / Je me refuse à faire quelque chose.",
      french: "Ich lehne es ab, ... zu tun / Ich weigere mich, ... zu tun.",
      category: "II. Critique contre-thèse - Rejeter l'opinion contraire"
    },
    {
      spanish: "Pour moi, il est exclu que... / de faire quelque chose.",
      french: "Für mich ist es ausgeschlossen, dass... / etwas zu tun.",
      category: "II. Critique contre-thèse - Rejeter l'opinion contraire"
    },
    {
      spanish: "Pour moi, il n'est pas question de faire quelque chose.",
      french: "Für mich kommt es nicht in Frage, ... zu tun.",
      category: "II. Critique contre-thèse - Rejeter l'opinion contraire"
    },
    {
      spanish: "Je trouve cela exagéré/irrraisonnable...",
      french: "Ich finde es übertrieben / unvernünftig, ...",
      category: "II. Critique contre-thèse - Rejeter l'opinion contraire"
    },
    {
      spanish: "Il est douteux que...",
      french: "Es ist fraglich, ob...",
      category: "II. Critique contre-thèse - Rejeter l'opinion contraire"
    },
    {
      spanish: "Pour moi, c'est une honte que...",
      french: "Für mich ist es eine Schande, dass...",
      category: "II. Critique contre-thèse - Rejeter l'opinion contraire"
    },

    // III. TEIL II: Eigene Meinung entwickeln
    {
      spanish: "Selon mon opinion / À mon avis + verbe en 2e position",
      french: "Meiner Meinung / Ansicht nach + V2",
      category: "III. Développer sa position - Introduire opinion personnelle"
    },
    {
      spanish: "Je suis d'avis que...",
      french: "Ich bin der Meinung / Ansicht, dass...",
      category: "III. Développer sa position - Introduire opinion personnelle"
    },
    {
      spanish: "Je suis sous un autre aspect.",
      french: "Ich bin in anderer Hinsicht.",
      category: "III. Développer sa position - Introduire opinion personnelle"
    },
    {
      spanish: "Je suis fermement convaincu que...",
      french: "Ich bin fest davon überzeugt, dass...",
      category: "III. Développer sa position - Introduire opinion personnelle"
    },
    {
      spanish: "Je considère comme nécessaire/indispensable/inéluctable que...",
      french: "Ich halte es für notwendig / unentbehrlich / unumgänglich, dass...",
      category: "III. Développer sa position - Introduire opinion personnelle"
    },
    {
      spanish: "Pour moi, il est important...",
      french: "Für mich ist es wichtig, ...",
      category: "III. Développer sa position - Introduire opinion personnelle"
    },
    {
      spanish: "Il est d'autant plus important que...",
      french: "Umso wichtiger ist es daher, dass...",
      category: "III. Développer sa position - Introduire opinion personnelle"
    },
    {
      spanish: "Je ne pourrais que recommander de faire quelque chose.",
      french: "Ich könnte nur empfehlen, ... zu tun.",
      category: "III. Développer sa position - Introduire opinion personnelle"
    },
    {
      spanish: "Il est grand temps que...",
      french: "Es ist höchste Zeit, dass...",
      category: "III. Développer sa position - Introduire opinion personnelle"
    },
    {
      spanish: "Il faut saisir une telle occasion immédiatement.",
      french: "Eine solche Gelegenheit muss man sofort ergreifen.",
      category: "III. Développer sa position - Introduire opinion personnelle"
    },

    // Introduire une nuance
    {
      spanish: "Je dois admettre que je n'ai rien à objecter à votre proposition.",
      french: "Ich muss zugeben, dass ich gegen Ihren Vorschlag nichts einzuwenden habe.",
      category: "III. Développer sa position - Introduire une nuance"
    },
    {
      spanish: "On devrait peut-être distinguer entre... et...",
      french: "Man sollte vielleicht zwischen (+D) und (+D) unterscheiden.",
      category: "III. Développer sa position - Introduire une nuance"
    },
    {
      spanish: "Cependant, cela dépend si...",
      french: "Allerdings hängt es davon ab, ob...",
      category: "III. Développer sa position - Introduire une nuance"
    },

    // IV. BEISPIELE UND ZAHLEN
    {
      spanish: "L'exemple par excellence est...",
      french: "Das Paradebeispiel dafür ist...",
      category: "IV. Exemples et chiffres - Introduire un exemple"
    },
    {
      spanish: "Un exemple illustratif est...",
      french: "Ein anschauliches Beispiel dafür ist...",
      category: "IV. Exemples et chiffres - Introduire un exemple"
    },
    {
      spanish: "Par exemple...",
      french: "Beispielweise…",
      category: "IV. Exemples et chiffres - Introduire un exemple"
    },
    {
      spanish: "Selon...",
      french: "Laut…",
      category: "IV. Exemples et chiffres - Introduire un exemple"
    },

    // Utiliser des chiffres
    {
      spanish: "Selon les statistiques, 100 à 200 millions d'enfants vivent dans la rue dans le monde.",
      french: "Laut den Statistiken leben weltweit 100 bis 200 Millionen Kinder auf der Straße.",
      category: "IV. Exemples et chiffres - Utiliser des chiffres"
    },
    {
      spanish: "Par rapport à 2008, le nombre de consommateurs a baissé de 20% en 2011.",
      french: "Im Vergleich zu 2008 ist die Zahl der Konsumenten 2011 um 20% niedriger.",
      category: "IV. Exemples et chiffres - Utiliser des chiffres"
    },
    {
      spanish: "Alors que 2016 encore 20% recevaient..., en 2020 ce n'était plus que 10%.",
      french: "Während 2016 noch 20% ... erhielten, waren es 2020 nur noch 10%.",
      category: "IV. Exemples et chiffres - Utiliser des chiffres"
    },
    {
      spanish: "Le nombre de ... a diminué entre 2001 et 2008.",
      french: "Die Zahl der ... ist zwischen 2001 und 2008 gefallen.",
      category: "IV. Exemples et chiffres - Utiliser des chiffres"
    },
    {
      spanish: "Dans la période de 1950 à 2010, le nombre de ... a presque doublé.",
      french: "Im Zeitraum von 1950 bis 2010 hat sich die Zahl der ... fast verdoppelt.",
      category: "IV. Exemples et chiffres - Utiliser des chiffres"
    },
    {
      spanish: "En 2002, il y avait deux fois plus de ... qu'en 2008.",
      french: "2002 gab es doppelt so viele ... wie im Jahr 2008.",
      category: "IV. Exemples et chiffres - Utiliser des chiffres"
    },
    {
      spanish: "La part de ... était de ... % en l'année ...",
      french: "Der Anteil von ... lag im Jahr ... bei ... %.",
      category: "IV. Exemples et chiffres - Utiliser des chiffres"
    },
    {
      spanish: "Il est remarquable que... / Remarquable est... / Surprenant est que...",
      french: "Es fällt auf, dass... / Auffällig ist... / Überraschend ist, dass...",
      category: "IV. Exemples et chiffres - Utiliser des chiffres"
    },

    // V. KRITIK UND KOMMENTAR
    {
      spanish: "La journaliste conteste constamment le point de vue d'Angela Merkel.",
      french: "Die Journalistin bestreitet immer wieder Angela Merkels Standpunkt.",
      category: "V. Critique et commentaire"
    },
    {
      spanish: "Le journaliste critique constamment l'attitude de Merkel.",
      french: "Der Journalist übt ständig Kritik an Merkels Haltung.",
      category: "V. Critique et commentaire"
    },
    {
      spanish: "Je suis d'avis que nous devrions tirer une leçon de cet événement.",
      french: "Ich bin der Meinung, dass wir eine Lehre aus diesem Ereignis ziehen sollten.",
      category: "V. Critique et commentaire"
    },
    {
      spanish: "Dans l'ensemble, on peut constater que...",
      french: "Insgesamt kann man feststellen, dass...",
      category: "V. Critique et commentaire"
    },
    {
      spanish: "Cette tendance est plutôt à la baisse / à la hausse.",
      french: "Diese Tendenz ist eher sinkend / steigend.",
      category: "V. Critique et commentaire"
    },

    // VI. SCHLUSS / CONCLUSION
    {
      spanish: "Pour ces raisons, je suis d'avis que... ne deviendra pas complètement...",
      french: "Aus diesen Gründen bin ich der Ansicht, dass... nicht völlig ... wird.",
      category: "VI. Conclusion - Résumer les arguments"
    },
    {
      spanish: "Des arguments mentionnés ci-dessus, il ressort que...",
      french: "Aus den oben genannten Argumenten ergibt sich, dass...",
      category: "VI. Conclusion - Résumer les arguments"
    },
    {
      spanish: "Tout plaide en faveur du fait que...",
      french: "Alles spricht dafür, dass...",
      category: "VI. Conclusion - Résumer les arguments"
    },

    // Formules de conclusion
    {
      spanish: "En résumé, on peut dire que...",
      french: "Zusammenfassend lässt sich sagen, dass...",
      category: "VI. Conclusion - Formules de clôture"
    },
    {
      spanish: "En résumé, on peut dire que...",
      french: "Zusammenfassend kann man sagen, dass...",
      category: "VI. Conclusion - Formules de clôture"
    },
    {
      spanish: "Dans l'ensemble, on peut constater que...",
      french: "Insgesamt kann festgestellt werden, dass...",
      category: "VI. Conclusion - Formules de clôture"
    },
    {
      spanish: "Finalement, il reste à dire que...",
      french: "Letztlich bleibt zu sagen, dass...",
      category: "VI. Conclusion - Formules de clôture"
    },

    // Conseils pratiques
    {
      spanish: "Conseil : Respectez l'ordre introduction-partie I-partie II-conclusion",
      french: "Tipp: Halten Sie die Reihenfolge Einleitung-Teil I-Teil II-Schluss ein",
      category: "Conseils pratiques"
    },
    {
      spanish: "Conseil : Annoncez votre position dès l'introduction",
      french: "Tipp: Kündigen Sie Ihre Position bereits in der Einleitung an",
      category: "Conseils pratiques"
    },
    {
      spanish: "Conseil : Utilisez des exemples et chiffres pour étayer vos propos",
      french: "Tipp: Verwenden Sie Beispiele und Zahlen, um Ihre Argumente zu untermauern",
      category: "Conseils pratiques"
    },
    {
      spanish: "Conseil : Employez les connecteurs logiques appropriés",
      french: "Tipp: Verwenden Sie die passenden logischen Verbindungen",
      category: "Conseils pratiques"
    }
  ];

  // Filtrer les flashcards selon les sélections
  const filteredEssaiData = essaiData.filter(item => {
    const categoryMatch = selectedCategory === 'toutes' || item.category === selectedCategory;
    const levelMatch = selectedLevel === 'tous' || item.level === selectedLevel;
    return categoryMatch && levelMatch && item.level; // S'assurer que level existe
  });

  return (
    <div className="relative">
      <div className="container mx-auto px-4 pt-8 pb-16 max-w-6xl">

        {/* Header */}
        <div className="mb-8">
          <Link
            to="/formation/allemand/reussir-epreuves"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux épreuves allemandes
          </Link>

          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600 text-white rounded-xl mb-4">
              <BookOpen className="h-8 w-8" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Réussir l'Essai - Expressions Clés
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Maîtrisez les expressions essentielles pour rédiger un essai argumenté en allemand
            </p>
          </div>

          <div className="flex justify-center gap-3">
            <Badge variant="secondary" className="px-3 py-1">Niveau Intermédiaire - Avancé</Badge>
            <Badge variant="outline" className="px-3 py-1 border-gray-300">{filteredEssaiData.length} expressions</Badge>
            <Badge className="bg-orange-600 px-3 py-1">Préparation Bac</Badge>
          </div>
        </div>

        {/* Exam Mode Toggle Button */}
        <div className="flex justify-end mb-4">
          <Button
            variant={examMode ? "default" : "outline"}
            onClick={() => setExamMode(prev => !prev)}
            className={examMode ? "bg-pr-orange hover:bg-pr-orange-dark text-white" : "border-pr-orange text-pr-orange hover:bg-pr-orange-pale"}
          >
            {examMode ? "Désactiver le Mode Révision" : "Activer le Mode Révision"}
          </Button>
        </div>

        {/* Exam Timer and Controls */}
        {examMode && (
          <Card className="mb-8 border-2 border-carnet-red/30 bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardContent className="py-4">
              {!examStarted ? (
                <div className="flex items-center justify-center gap-4">
                  <Button onClick={startExam} className="bg-pr-orange hover:bg-pr-orange-dark text-white px-6 py-2">
                    <CheckCircle className="h-4 w-4 mr-2" />Commencer la révision
                  </Button>
                  <p className="text-sm text-gray-600">⚠️ Mode concentré pour mémoriser les expressions.</p>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-4">
                  <div className="bg-carnet-red/20 rounded-lg px-4 py-2">
                    <span className="text-carnet-red-deep font-mono text-lg">⏱️ {formatTime(examTime)}</span>
                  </div>
                  <Button onClick={finishExam} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2">
                    <CheckCircle className="h-4 w-4 mr-2" />Terminer la révision
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Filtres */}
        <Card className="mb-8 border border-gray-200 bg-white shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg text-gray-900 flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                <Target className="h-4 w-4 text-orange-600" />
              </div>
              Filtrer les expressions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Catégorie</label>
                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" disabled={examStarted}>
                  <option value="toutes">Toutes les catégories</option>
                  <option value="I. Introduction - Présenter le sujet">Introduction - Présenter le sujet</option>
                  <option value="I. Introduction - Énoncer sa thèse">Introduction - Énoncer sa thèse</option>
                  <option value="II. Développement - Arguments">Développement - Arguments</option>
                  <option value="III. Transitions logiques">Transitions logiques</option>
                  <option value="IV. Exemples et citations">Exemples et citations</option>
                  <option value="V. Contre-arguments">Contre-arguments</option>
                  <option value="VI. Conclusion - Résumer les arguments">Conclusion - Résumer</option>
                  <option value="VI. Conclusion - Formules de clôture">Conclusion - Clôture</option>
                  <option value="Conseils pratiques">Conseils pratiques</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Niveau</label>
                <select value={selectedLevel} onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" disabled={examStarted}>
                  <option value="tous">Tous les niveaux</option>
                  <option value="intermédiaire">Intermédiaire</option>
                  <option value="avancé">Avancé</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contenu principal - Flashcards */}
        <div className="mb-8">

          {/* Informations pratiques */}
          <div className="bg-orange-50 rounded-lg p-4 border border-orange-200 mb-8">
            <div className="flex items-center gap-2 mb-2">
              <Target className="h-5 w-5 text-orange-600" />
              <span className="font-medium text-orange-800">Objectif :</span>
            </div>
            <p className="text-gray-700">
              Ces flashcards vous aideront à mémoriser les expressions clés pour structurer et argumenter vos essais.
              Chaque carte présente d'abord l'expression française, puis sa traduction allemande.
            </p>
          </div>
        </div>

        {/* Flashcards */}
        <UnifiedFlashcards
          data={filteredEssaiData}
          title="Flashcards argumentatives pour les essais d'allemand"
        />

        {/* Section récapitulative */}
        <div className="mt-12 bg-white rounded-lg p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">📋 Récapitulatif des sections couvertes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded p-4">
              <h4 className="font-medium text-orange-800 mb-2">I. Introduction</h4>
              <p className="text-sm text-gray-600">Présenter le sujet et énoncer sa thèse</p>
            </div>
            <div className="bg-gray-50 rounded p-4">
              <h4 className="font-medium text-orange-800 mb-2">II. Critique contre-thèse</h4>
              <p className="text-sm text-gray-600">Argumenter contre l'opinion opposée</p>
            </div>
            <div className="bg-gray-50 rounded p-4">
              <h4 className="font-medium text-orange-800 mb-2">III. Développement</h4>
              <p className="text-sm text-gray-600">Développer sa propre position</p>
            </div>
            <div className="bg-gray-50 rounded p-4">
              <h4 className="font-medium text-orange-800 mb-2">IV. Exemples & Chiffres</h4>
              <p className="text-sm text-gray-600">Illustrer ses arguments</p>
            </div>
            <div className="bg-gray-50 rounded p-4">
              <h4 className="font-medium text-orange-800 mb-2">V. Critique & Commentaire</h4>
              <p className="text-sm text-gray-600">Analyser et commenter</p>
            </div>
            <div className="bg-gray-50 rounded p-4">
              <h4 className="font-medium text-orange-800 mb-2">VI. Conclusion</h4>
              <p className="text-sm text-gray-600">Résumer et conclure</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <Link
              to="/formation/allemand/reussir-epreuves"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour aux modules
            </Link>

            <Link
              to="/formation/allemand/reussir-essai"
              className="inline-flex items-center px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-md font-medium transition-colors"
            >
              <BookOpen className="mr-2 h-4 w-4" />
              Méthodologie complète
            </Link>
          </div>
        </div>

        {/* Boutons de contrôle (globaux si pas en mode examen) */}
        {!examMode && (
          <div className="flex justify-center gap-4 mt-10">
            <Button
              onClick={() => setScore(90)}
              className="bg-pr-orange hover:bg-pr-orange-dark text-white px-8 py-3 text-lg flex items-center gap-2"
            >
              <CheckCircle className="h-5 w-5" />
              Terminer la révision
            </Button>
            <Button
              onClick={resetQuiz}
              variant="outline"
              className="px-8 py-3 text-lg flex items-center gap-2 border-pr-orange text-pr-orange hover:bg-pr-orange-pale"
            >
              <X className="h-5 w-5" />
              Réinitialiser
            </Button>
          </div>
        )}

        {/* Score affiché */}
        {showScore && score !== null && (
          <Card className={`mt-10 border-2 ${examMode ? 'border-carnet-red/30 bg-pr-orange-pale' : 'border-orange-200 bg-orange-50'}`}>
            <CardHeader className="text-center">
              <CardTitle className={`text-3xl flex items-center justify-center gap-3 ${examMode ? 'text-carnet-red-deep' : 'text-orange-800'}`}>
                <Award className="h-8 w-8" />
                {examMode ? 'Résultats de la Révision' : 'Votre Score'} : {score}%
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              {examMode && examTime > 0 && (
                <div className="mb-4 p-3 bg-carnet-red/10 rounded-lg border border-carnet-red/30">
                  <p className="text-carnet-red-deep font-medium">
                    ⏱️ Temps total : {formatTime(examTime)}
                  </p>
                </div>
              )}
              <div className={`text-lg ${
                examMode ? 'text-carnet-red' : 'text-orange-700'
              }`}>
                {score >= 80 ? (
                  <div className="flex items-center justify-center gap-2">
                    <Trophy className="h-6 w-6 text-yellow-500" />
                    {examMode ? 'Excellente révision ! Vous maîtrisez parfaitement les expressions d\'essai.' : 'Excellent ! Vous êtes prêt pour l\'épreuve d\'essai.'}
                  </div>
                ) : score >= 50 ? (
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    {examMode ? 'Bonne révision ! Continuez à pratiquer pour perfectionner votre maîtrise.' : 'Bon niveau ! Quelques révisions supplémentaires vous rendront incollable.'}
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <Lightbulb className="h-6 w-6 text-carnet-red" />
                    {examMode ? 'Continuez à travailler ces expressions. La persévérance paiera !' : 'Ne vous découragez pas ! Révisez régulièrement ces expressions clés.'}
                  </div>
                )}
              </div>
              {examMode && (
                <div className="mt-4 p-3 bg-pr-orange-pale rounded-lg border border-carnet-red/30">
                  <p className="text-carnet-red text-sm">
                    💡 Pour l'épreuve d'essai, concentrez-vous sur la structure logique et l'utilisation appropriée des connecteurs.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        )}

      </div>
    </div>
  );
};

export default ReussirEssaiExercicesPage;
