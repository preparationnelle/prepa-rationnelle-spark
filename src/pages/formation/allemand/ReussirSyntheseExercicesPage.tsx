import React from 'react';
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Target } from 'lucide-react';
import { UnifiedFlashcards } from "@/components/ui/UnifiedFlashcards";

interface VocabularyItem {
  spanish: string; // Expression française (affichée en premier dans nos flashcards allemandes)
  french: string; // Expression allemande (affichée en second)
  category: string;
}

const ReussirSyntheseExercicesPage = () => {
  const syntheseData = [
    // I. EINLEITUNG / INTRODUCTION
    {
      spanish: "Ces documents donnent un aperçu de...",
      french: "Diese Dokumente geben einen Überblick über...",
      category: "I. Introduction - Présenter les documents"
    },
    {
      spanish: "Ces deux textes traitent de...",
      french: "Diese beiden Texte beschäftigen sich mit...",
      category: "I. Introduction - Présenter les documents"
    },
    {
      spanish: "Les deux textes abordent le thème de...",
      french: "Beide Texte thematisieren...",
      category: "I. Introduction - Présenter les documents"
    },
    {
      spanish: "Dans les articles présentés, il s'agit de...",
      french: "In den vorliegenden Artikeln geht es um...",
      category: "I. Introduction - Présenter les documents"
    },
    {
      spanish: "La question de savoir si... est répondue différemment ici.",
      french: "Die Frage, ob... wird hier unterschiedlich beantwortet.",
      category: "I. Introduction - Situer le débat"
    },
    {
      spanish: "Dans ce contexte, la question se pose de savoir si/dans quelle mesure/pourquoi...",
      french: "In diesem Kontext stellt sich die Frage, ob / inwiefern / warum… ?",
      category: "I. Introduction - Situer le débat"
    },
    {
      spanish: "Les textes soulèvent la question de savoir si...",
      french: "Die Texte werfen die Frage auf, ob… ?",
      category: "I. Introduction - Situer le débat"
    },

    // II. VERGLEICH DER POSITIONEN / COMPARAISON DES POINTS DE VUE
    {
      spanish: "Les auteurs sont d'accord sur le fait que...",
      french: "Die Autoren sind sich darüber einig, dass...",
      category: "II. Comparaison - Accords entre auteurs"
    },
    {
      spanish: "Les deux auteurs défendent l'opinion selon laquelle...",
      french: "Beide Autoren vertreten die Meinung, dass...",
      category: "II. Comparaison - Accords entre auteurs"
    },
    {
      spanish: "Leurs opinions sont très similaires.",
      french: "Ihre Meinungen sind sehr ähnlich.",
      category: "II. Comparaison - Accords entre auteurs"
    },
    {
      spanish: "Les deux articles considèrent... comme...",
      french: "Beide Artikel betrachten ... als...",
      category: "II. Comparaison - Accords entre auteurs"
    },
    {
      spanish: "Les deux textes soulignent/mettent l'accent/soulèvent que...",
      french: "Beide Texte unterstreichen / betonen / heben hervor, dass...",
      category: "II. Comparaison - Accords entre auteurs"
    },
    {
      spanish: "À la fois X et Y pensent que...",
      french: "Sowohl X als auch Y meinen, dass...",
      category: "II. Comparaison - Accords entre auteurs"
    },
    {
      spanish: "... est présenté de la même manière que dans le document 2.",
      french: "... wird auf die gleiche Weise dargestellt wie in Dokument 2.",
      category: "II. Comparaison - Accords entre auteurs"
    },

    // Désaccords entre auteurs
    {
      spanish: "Les auteurs des deux textes ne sont pas complètement d'accord sur la question de...",
      french: "Die Autoren der beiden Texte sind über die Frage (+G) [...] nicht völlig einverstanden.",
      category: "II. Comparaison - Désaccords entre auteurs"
    },
    {
      spanish: "Les opinions divergent sur la question de...",
      french: "Die Meinungen gehen über die Frage (+G)... auseinander.",
      category: "II. Comparaison - Désaccords entre auteurs"
    },
    {
      spanish: "Les opinions divergent en ce qui concerne...",
      french: "Die Meinungen gehen auseinander, was (+Akk)... betrifft.",
      category: "II. Comparaison - Désaccords entre auteurs"
    },
    {
      spanish: "Alors que X accorde beaucoup d'importance à..., Y défend une opinion tout à fait différente sur...",
      french: "Während X großen Wert auf ... legt, vertritt Y eine ganz andere Meinung über...",
      category: "II. Comparaison - Désaccords entre auteurs"
    },
    {
      spanish: "L'auteur accorde de l'importance à..., mais il exprime une opinion tout à fait opposée sur...",
      french: "Der Autor legt Wert auf ..., aber er äußert eine ganz entgegengesetzte Meinung über...",
      category: "II. Comparaison - Désaccords entre auteurs"
    },
    {
      spanish: "X contredit Y en disant que...",
      french: "X widerspricht Y, indem er sagt, dass...",
      category: "II. Comparaison - Désaccords entre auteurs"
    },
    {
      spanish: "Pour X, en revanche, ce n'est pas une bonne idée de...",
      french: "Für X hingegen ist es keine gute Idee, ... zu +Inf.",
      category: "II. Comparaison - Désaccords entre auteurs"
    },
    {
      spanish: "Même si X pense que..., Y croit que...",
      french: "Auch wenn X meint, dass..., glaubt Y, dass...",
      category: "II. Comparaison - Désaccords entre auteurs"
    },

    // III. AUFBAU / STRUCTURE
    {
      spanish: "D'abord, la question de... est prise en compte.",
      french: "Zuerst wird die Frage (+G)... berücksichtigt.",
      category: "III. Structure - Introduction première thèse"
    },
    {
      spanish: "Initialement, on aborde la question de...",
      french: "Zunächst wird auf die Frage (+G)... eingegangen.",
      category: "III. Structure - Introduction première thèse"
    },
    {
      spanish: "L'auteur considère... / établit un parallèle avec...",
      french: "Der Autor betrachtet... / zieht eine Parallele mit...",
      category: "III. Structure - Introduction première thèse"
    },
    {
      spanish: "Comme arguments principaux, (Nom) avance que...",
      french: "Als Hauptargumente führt (Name) an, dass...",
      category: "III. Structure - Introduction première thèse"
    },
    {
      spanish: "Le document 1 met donc en garde contre...",
      french: "Dokument 1 warnt also vor...",
      category: "III. Structure - Introduction première thèse"
    },
    {
      spanish: "Selon (Nom), on devrait...",
      french: " (Name) zufolge sollte man...",
      category: "III. Structure - Introduction première thèse"
    },
    {
      spanish: "X mentionne que... / Selon X...",
      french: "X erwähnt, dass... / Laut X...",
      category: "III. Structure - Introduction première thèse"
    },
    {
      spanish: "Il affirme lui-même que...",
      french: "Er selbst behauptet, dass...",
      category: "III. Structure - Introduction première thèse"
    },
    {
      spanish: "À cet égard, il a raison/tort.",
      french: "In dieser Hinsicht hat er Recht / Unrecht.",
      category: "III. Structure - Introduction première thèse"
    },

    // Transitions
    {
      spanish: "Même si X pense que...",
      french: "Auch wenn X meint, dass...",
      category: "III. Structure - Transitions"
    },
    {
      spanish: "Cependant, c'est une condition pour... selon...",
      french: "Jedoch ist es eine Bedingung für... laut der...",
      category: "III. Structure - Transitions"
    },
    {
      spanish: "En revanche, Y explique que...",
      french: "Im Gegensatz dazu erklärt Y, dass...",
      category: "III. Structure - Transitions"
    },
    {
      spanish: "Y contredit X en affirmant que...",
      french: "Y widerspricht X, indem er behauptet, dass...",
      category: "III. Structure - Transitions"
    },
    {
      spanish: "Y défend une opinion opposée : ...",
      french: "Y vertritt eine entgegengesetzte Meinung: ...",
      category: "III. Structure - Transitions"
    },
    {
      spanish: "Il existe une forte différence entre... et...",
      french: "Es besteht ein starker Unterschied zwischen... und...",
      category: "III. Structure - Transitions"
    },
    {
      spanish: "En revanche, Y souligne que...",
      french: "Hingegen hebt Y hervor, dass...",
      category: "III. Structure - Transitions"
    },

    // Seconds arguments
    {
      spanish: "En outre, on considère...",
      french: "Darüber hinaus wird... betrachtet.",
      category: "III. Structure - Seconds arguments"
    },
    {
      spanish: "En raison de..., on met l'accent sur...",
      french: "Wegen... wird... betont.",
      category: "III. Structure - Seconds arguments"
    },
    {
      spanish: "De plus, cela signifie aussi [quelque chose] que...",
      french: "Außerdem bedeutet auch [etwas], dass...",
      category: "III. Structure - Seconds arguments"
    },
    {
      spanish: "De même, il convient de mentionner que...",
      french: "Ebenso ist zu erwähnen, dass...",
      category: "III. Structure - Seconds arguments"
    },

    // IV. VERBINDUNGEN / LIAISONS UTILES
    {
      spanish: "en raison de",
      french: "aufgrund von (+D)",
      category: "IV. Liaisons - Cause/conséquence"
    },
    {
      spanish: "cela est dû au fait que...",
      french: "es liegt daran, dass...",
      category: "IV. Liaisons - Cause/conséquence"
    },
    {
      spanish: "par conséquent",
      french: "deshalb / folglich",
      category: "IV. Liaisons - Cause/conséquence"
    },
    {
      spanish: "en revanche",
      french: "hingegen / im Gegensatz dazu",
      category: "IV. Liaisons - Opposition"
    },
    {
      spanish: "néanmoins",
      french: "trotzdem / dennoch",
      category: "IV. Liaisons - Opposition"
    },
    {
      spanish: "certes..., mais...",
      french: "zwar..., aber...",
      category: "IV. Liaisons - Opposition"
    },
    {
      spanish: "de même",
      french: "ebenso",
      category: "IV. Liaisons - Ajout"
    },
    {
      spanish: "en outre",
      french: "darüber hinaus",
      category: "IV. Liaisons - Ajout"
    },
    {
      spanish: "non seulement..., mais aussi...",
      french: "nicht nur..., sondern auch...",
      category: "IV. Liaisons - Ajout"
    },
    {
      spanish: "en effet",
      french: "nämlich / in der Tat",
      category: "IV. Liaisons - Explication"
    },

    // V. SCHLUSS / CONCLUSION
    {
      spanish: "Par la comparaison de ces documents, on peut montrer que...",
      french: "Durch den Vergleich dieser Dokumente kann gezeigt werden, dass...",
      category: "V. Conclusion - Formules de conclusion"
    },
    {
      spanish: "En résumé, on peut dire que...",
      french: "Zusammenfassend lässt sich sagen, dass...",
      category: "V. Conclusion - Formules de conclusion"
    },
    {
      spanish: "En résumé, on peut constater que...",
      french: "Zusammenfassend kann festgestellt werden, dass...",
      category: "V. Conclusion - Formules de conclusion"
    },
    {
      spanish: "Dans l'ensemble, on peut dire que...",
      french: "Alles in allem lässt sich sagen, dass...",
      category: "V. Conclusion - Formules de conclusion"
    },
    {
      spanish: "Finalement, il apparaît que...",
      french: "Letztendlich zeigt sich, dass...",
      category: "V. Conclusion - Formules de conclusion"
    },

    // Conseils pratiques
    {
      spanish: "Conseil : Analysez attentivement les deux documents avant de commencer",
      french: "Tipp: Lesen Sie beide Dokumente sorgfältig durch, bevor Sie beginnen",
      category: "Conseils pratiques"
    },
    {
      spanish: "Conseil : Identifiez clairement les positions de chaque auteur",
      french: "Tipp: Identifizieren Sie eindeutig die Positionen jedes Autors",
      category: "Conseils pratiques"
    },
    {
      spanish: "Conseil : Organisez votre synthèse autour des accords et désaccords",
      french: "Tipp: Strukturieren Sie Ihre Synthese um Übereinstimmungen und Meinungsverschiedenheiten",
      category: "Conseils pratiques"
    },
    {
      spanish: "Conseil : Utilisez un vocabulaire neutre et précis",
      french: "Tipp: Verwenden Sie einen neutralen und präzisen Wortschatz",
      category: "Conseils pratiques"
    },
    {
      spanish: "Conseil : Maîtrisez les expressions de liaison pour une parfaite cohérence",
      french: "Tipp: Beherrschen Sie die Verbindungsausdrücke für perfekte Kohärenz",
      category: "Conseils pratiques"
    }
  ];

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

          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center border border-gray-200">
              <BookOpen className="h-6 w-6 text-pr-black" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Exercices - Réussir la synthèse</h1>
          </div>
          <p className="text-lg text-gray-600 text-center mb-8">
            Maîtrisez les expressions méthodologiques essentielles pour réussir vos synthèses d'allemand
          </p>

          {/* Informations pratiques */}
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mb-8">
            <div className="flex items-center gap-2 mb-2">
              <Target className="h-5 w-5 text-pr-black" />
              <span className="font-medium text-gray-800">Objectif :</span>
            </div>
            <p className="text-gray-700">
              Ces flashcards vous aideront à mémoriser les expressions clés pour structurer vos synthèses.
              Chaque carte présente d'abord l'expression française, puis sa traduction allemande.
            </p>
          </div>
        </div>

        {/* Flashcards */}
        <UnifiedFlashcards
          data={syntheseData}
          title="Flashcards méthodologiques pour les synthèses d'allemand"
        />

        {/* Section récapitulative */}
        <div className="mt-12 bg-white rounded-lg p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">📋 Récapitulatif des sections couvertes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded p-4">
              <h4 className="font-medium text-gray-800 mb-2">I. Introduction</h4>
              <p className="text-sm text-gray-600">Présenter les documents et situer le débat</p>
            </div>
            <div className="bg-gray-50 rounded p-4">
              <h4 className="font-medium text-gray-800 mb-2">II. Comparaison</h4>
              <p className="text-sm text-gray-600">Accords et désaccords entre auteurs</p>
            </div>
            <div className="bg-gray-50 rounded p-4">
              <h4 className="font-medium text-gray-800 mb-2">III. Structure</h4>
              <p className="text-sm text-gray-600">Organisation par paragraphes</p>
            </div>
            <div className="bg-gray-50 rounded p-4">
              <h4 className="font-medium text-gray-800 mb-2">IV. Liaisons</h4>
              <p className="text-sm text-gray-600">Connecteurs logiques essentiels</p>
            </div>
            <div className="bg-gray-50 rounded p-4">
              <h4 className="font-medium text-gray-800 mb-2">V. Conclusion</h4>
              <p className="text-sm text-gray-600">Formules de clôture</p>
            </div>
            <div className="bg-gray-50 rounded p-4">
              <h4 className="font-medium text-gray-800 mb-2">Conseils</h4>
              <p className="text-sm text-gray-600">Méthodologie pratique</p>
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
              to="/formation/allemand/reussir-synthese"
              className="inline-flex items-center px-4 py-2 bg-pr-black-dark hover:bg-pr-black-dark text-white rounded-md font-medium transition-colors"
            >
              <BookOpen className="mr-2 h-4 w-4" />
              Méthodologie complète
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ReussirSyntheseExercicesPage;
