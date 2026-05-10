import React from 'react';
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Target } from 'lucide-react';
import { UnifiedFlashcards } from "@/components/ui/UnifiedFlashcards";

interface VocabularyItem {
  spanish: string; // Expression française (affichée en premier dans nos flashcards allemandes)
  french: string; // Expression allemande (affichée en second)
  category: string;
}

const EpreuvesOralesExercicesPage = () => {

  const methodologieData = [
    // I. Einleitung – Introduction (0:00 – 1:00)
    {
      spanish: "En 2023, le nombre de chômeurs en Allemagne de l'Est a augmenté pour la première fois depuis des années.",
      french: "Im Jahre 2023 ist [die Zahl der Arbeitslosen in Ostdeutschland zum ersten Mal seit Jahren gestiegen].",
      category: "I. Introduction - Accroches d'actualité"
    },
    {
      spanish: "Dans cette perspective, un article a été publié.",
      french: "In dieser Ansicht wurde ein Artikel veröffentlicht.",
      category: "I. Introduction - Accroches d'actualité"
    },
    {
      spanish: "Dans un article du Spiegel publié le 3 octobre 2023, l'auteur s'occupe de la question [de la nostalgie de l'Est].",
      french: "In einem Artikel aus dem Spiegel, der am 3. Oktober 2023 veröffentlicht wurde, befasst sich der Autor mit der Frage [der Ostalgie].",
      category: "I. Introduction - Accroches d'actualité"
    },
    {
      spanish: "Conseil : Pour l'accroche d'actualité, évitez les détails et restez synthétique.",
      french: "Éviter les détails, rester synthétique.",
      category: "I. Introduction - Conseils"
    },
    {
      spanish: "Dans cet article, il s'agit de...",
      french: "In diesem Artikel geht es um...",
      category: "I. Introduction - Présentation du texte"
    },
    {
      spanish: "Le journaliste aborde la question de (+D)...",
      french: "Der Journalist thematisiert die Frage nach (+D)...",
      category: "I. Introduction - Présentation du texte"
    },
    {
      spanish: "D'une part... / D'autre part...",
      french: "Einerseits... / Andererseits...",
      category: "I. Introduction - Présentation du texte"
    },
    {
      spanish: "Il est frappant que... / On remarque que...",
      french: "Es ist auffällig, dass... / Es fällt auf, dass...",
      category: "I. Introduction - Présentation du texte"
    },
    {
      spanish: "Conseil : Soulignez une tension ou un paradoxe si possible dans la présentation du texte.",
      french: "Souligne une tension ou un paradoxe si possible.",
      category: "I. Introduction - Conseils"
    },
    {
      spanish: "Pourquoi est... ?",
      french: "Warum ist... ?",
      category: "I. Introduction - Problématique"
    },
    {
      spanish: "Dans quelle mesure peut-on dire que... ?",
      french: "Inwiefern kann man sagen, dass... ?",
      category: "I. Introduction - Problématique"
    },
    {
      spanish: "Cela soulève la question suivante : ...",
      french: "Es wirft die folgende Frage auf: ...",
      category: "I. Introduction - Problématique"
    },
    {
      spanish: "D'abord, le journaliste explique à l'aide de plusieurs exemples ce qu'est...",
      french: "Zuerst erklärt der Journalist anhand mehrerer Beispiele, was... ist.",
      category: "I. Introduction - Annonce du plan"
    },
    {
      spanish: "Ensuite, il aborde les causes.",
      french: "Dann geht er auf die Ursachen ein.",
      category: "I. Introduction - Annonce du plan"
    },
    {
      spanish: "Enfin, il cite les conséquences possibles sur la société / politique / avenir de l'Allemagne.",
      french: "Schließlich nennt er mögliche Folgen auf die Gesellschaft / Politik / Zukunft Deutschlands.",
      category: "I. Introduction - Annonce du plan"
    },

    // II. Résumé structuré du texte (1:00 – 4:00)
    {
      spanish: "Nous apprenons que...",
      french: "Wir erfahren, dass...",
      category: "II. Résumé - Ce qu'on apprend"
    },
    {
      spanish: "Le journaliste souligne / mentionne / explique que...",
      french: "Der Journalist betont / erwähnt / erklärt, dass...",
      category: "II. Résumé - Ce qu'on apprend"
    },
    {
      spanish: "Selon l'auteur... / D'après l'auteur...",
      french: "Laut dem Autor ist... / Dem Autor zufolge...",
      category: "II. Résumé - Ce qu'on apprend"
    },
    {
      spanish: "Comme le journaliste le souligne / met en évidence...",
      french: "Wie der Journalist hervorhebt / unterstreicht...",
      category: "II. Résumé - Ce qu'on apprend"
    },
    {
      spanish: "Cet exemple est très révélateur.",
      french: "Dieses Beispiel ist sehr aufschlussreich.",
      category: "II. Résumé - Commenter un exemple"
    },
    {
      spanish: "L'allusion à (+Akk) montre que...",
      french: "Die Anspielung auf (+Akk) zeigt, dass...",
      category: "II. Résumé - Commenter un exemple"
    },
    {
      spanish: "Il essaie de justifier son argumentation avec des exemples.",
      french: "Er versucht, seine Argumentation mit Beispielen zu rechtfertigen.",
      category: "II. Résumé - Commenter un exemple"
    },
    {
      spanish: "Maintenant je voudrais lire le passage suivant qui est particulièrement important : „...\"",
      french: "Nun möchte ich folgende Textstelle vorlesen, die besonders wichtig ist: „...\"",
      category: "II. Résumé - Lire une phrase"
    },
    {
      spanish: "D'abord, le journaliste traite le thème...",
      french: "Zuerst behandelt der Journalist das Thema...",
      category: "II. Résumé - Structure temporelle"
    },
    {
      spanish: "Ensuite, il analyse les raisons...",
      french: "Danach analysiert er die Gründe...",
      category: "II. Résumé - Structure temporelle"
    },
    {
      spanish: "À la fin, il présente les conséquences possibles.",
      french: "Am Ende stellt er mögliche Konsequenzen dar.",
      category: "II. Résumé - Structure temporelle"
    },

    // III. Übergang zum Kommentar – Transition (4:00 – 4:30)
    {
      spanish: "Ce texte mérite d'être commenté, car il aborde un sujet controversé.",
      french: "Dieser Text ist kommentarwürdig, denn er spricht ein kontroverses Thema an.",
      category: "III. Transition - Phrases de bascule"
    },
    {
      spanish: "Maintenant je voudrais exprimer mon opinion personnelle sur cette question.",
      french: "Nun möchte ich meine persönliche Meinung zu dieser Frage äußern.",
      category: "III. Transition - Phrases de bascule"
    },

    // IV. Kommentar – Commentaire (4:30 – 9:30)
    {
      spanish: "Je considère cette affirmation comme fausse / convaincante.",
      french: "Ich halte diese Behauptung für falsch / überzeugend.",
      category: "IV. Commentaire - Thèse forte"
    },
    {
      spanish: "Je ne peux pas m'imaginer que...",
      french: "Ich kann mir nicht vorstellen, dass...",
      category: "IV. Commentaire - Thèse forte"
    },
    {
      spanish: "Je suis fermement convaincu que...",
      french: "Ich bin fest davon überzeugt, dass...",
      category: "IV. Commentaire - Thèse forte"
    },
    {
      spanish: "À mon avis / Selon moi + verbe en position 2",
      french: "Meiner Meinung / Ansicht nach + V2",
      category: "IV. Commentaire - Exprimer son opinion"
    },
    {
      spanish: "Je suis d'avis que...",
      french: "Ich bin der Meinung, dass...",
      category: "IV. Commentaire - Exprimer son opinion"
    },
    {
      spanish: "Pour moi, il est exclu que...",
      french: "Für mich ist es ausgeschlossen, dass...",
      category: "IV. Commentaire - Exprimer son opinion"
    },
    {
      spanish: "Je considère cela comme inefficace / contre-productif de faire quelque chose.",
      french: "Ich betrachte es als unwirksam / kontraproduktiv, etwas zu tun.",
      category: "IV. Commentaire - Exprimer son opinion"
    },
    {
      spanish: "Pour moi, c'est une honte que...",
      french: "Für mich ist es eine Schande, dass...",
      category: "IV. Commentaire - Exprimer son opinion"
    },
    {
      spanish: "Cependant, cela dépend si...",
      french: "Allerdings hängt es davon ab, ob...",
      category: "IV. Commentaire - Nuances"
    },
    {
      spanish: "Certes..., mais...",
      french: "Zwar..., aber...",
      category: "IV. Commentaire - Nuances"
    },
    {
      spanish: "On devrait peut-être distinguer entre (+D) et (+D).",
      french: "Man sollte vielleicht zwischen (+D) und (+D) unterscheiden.",
      category: "IV. Commentaire - Nuances"
    },
    {
      spanish: "À mon avis, on devrait ... au lieu de ... à l'infinitif",
      french: "Meiner Meinung nach sollte man ... statt ... zu + Infinitiv",
      category: "IV. Commentaire - Propositions"
    },
    {
      spanish: "Je recommanderais que...",
      french: "Ich würde empfehlen, dass...",
      category: "IV. Commentaire - Propositions"
    },
    {
      spanish: "Il est grand temps que...",
      french: "Es ist höchste Zeit, dass...",
      category: "IV. Commentaire - Propositions"
    },

    // V. Schluss – Conclusion (9:30 – 10:00)
    {
      spanish: "Du texte et de mon commentaire, on peut conclure que...",
      french: "Aus dem Text und aus meinem Kommentar kann man schließen, dass...",
      category: "V. Conclusion - Idées claires"
    },
    {
      spanish: "En résumé, on peut dire que...",
      french: "Zusammenfassend lässt sich sagen, dass...",
      category: "V. Conclusion - Idées claires"
    },
    {
      spanish: "Dans l'ensemble, on voit que la question de (+D)... reste d'actualité et controversée aujourd'hui.",
      french: "Insgesamt zeigt sich, dass die Frage nach (+D)... bis heute aktuell und umstritten ist.",
      category: "V. Conclusion - Idées claires"
    },
    {
      spanish: "Ce thème reste central pour la compréhension de la société allemande contemporaine.",
      french: "Dieses Thema bleibt zentral für das Verständnis der heutigen deutschen Gesellschaft.",
      category: "V. Conclusion - Idées claires"
    },

    // Conseils pratiques
    {
      spanish: "Conseil : Limitez le temps de préparation à 15-20 minutes maximum pour rester efficace.",
      french: "15-20 minutes maximum",
      category: "Conseils pratiques - Temps"
    },
    {
      spanish: "Conseil : Suivez scrupuleusement le timing prévu pour chaque partie de l'exposé.",
      french: "Respectez le timing indiqué pour chaque partie",
      category: "Conseils pratiques - Structure"
    },
    {
      spanish: "Conseil : Employez des connecteurs logiques adaptés pour structurer votre argumentation.",
      french: "Utilisez les connecteurs logiques appropriés",
      category: "Conseils pratiques - Vocabulaire"
    },
    {
      spanish: "Conseil : Démontrez votre parfaite connaissance du sujet par une attitude assurée.",
      french: "Montrez votre maîtrise du sujet",
      category: "Conseils pratiques - Attitude"
    }
  ];

  return (
    <div className="relative">
      <div className="container mx-auto px-4 pt-8 pb-16 max-w-6xl">

        {/* Header */}
        <div className="mb-8">
          <Link
            to="/formation/allemand/epreuves-orales"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à la fiche méthodologique
          </Link>

          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center border border-orange-200">
              <BookOpen className="h-6 w-6 text-pr-orange-dark" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Exercices - Épreuves orales</h1>
          </div>
          <p className="text-lg text-gray-600 text-center mb-8">
            Expressions françaises essentielles avec leurs traductions allemandes pour les épreuves orales
          </p>

          {/* Informations pratiques */}
          <div className="bg-orange-50 rounded-lg p-4 border border-orange-200 mb-8">
            <div className="flex items-center gap-2 mb-2">
              <Target className="h-5 w-5 text-pr-orange-dark" />
              <span className="font-medium text-orange-800">Objectif :</span>
            </div>
                          <p className="text-gray-700">
              Maîtrisez les expressions méthodologiques essentielles pour réussir vos épreuves orales d'allemand.
              Chaque flashcard présente l'expression française, suivie de sa traduction et formulation exacte en allemand.
            </p>
          </div>
        </div>

        {/* Flashcards */}
        <div className="max-w-4xl mx-auto">
          <UnifiedFlashcards
            data={methodologieData}
            title="Expressions méthodologiques allemand-français"
          />
        </div>

        {/* Section pratique */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 mt-12 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">💡 Comment utiliser ces flashcards</h3>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h4 className="font-medium mb-2">Phase d'apprentissage :</h4>
              <ul className="space-y-1 text-sm">
                <li>• Lisez d'abord le français</li>
                <li>• Essayez de deviner l'allemand</li>
                <li>• Retournez la carte pour vérifier</li>
                <li>• Répétez jusqu'à mémorisation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Phase de révision :</h4>
              <ul className="space-y-1 text-sm">
                <li>• Testez-vous sans regarder</li>
                <li>• Concentrez-vous sur les difficultés</li>
                <li>• Utilisez le système de catégories</li>
                <li>• Revenez régulièrement</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/formation/allemand/epreuves-orales"
            className="inline-flex items-center px-6 py-3 bg-pr-orange-dark hover:bg-pr-orange-dark text-white font-medium rounded-lg transition-all duration-300"
          >
            Retour à la fiche méthodologique
          </Link>
        </div>

      </div>
    </div>
  );
};

export default EpreuvesOralesExercicesPage;
