import React from 'react';
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Target, Home, ChevronRight } from 'lucide-react';

const EpreuvesEcritesSynthesePage = () => {
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
            <Link to="/formation/allemand" className="hover:text-foreground transition-colors">
              Formation Allemand ECG
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formation/allemand/epreuves" className="hover:text-foreground transition-colors">
              Réussir les épreuves allemandes
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Réussir la synthèse</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 max-w-4xl">

        {/* Header */}
        <div className="mb-8">

          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center border border-orange-200">
              <BookOpen className="h-6 w-6 text-pr-orange-dark" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Réussir la synthèse</h1>
          </div>
          <p className="text-lg text-gray-600 text-center mb-8">
            Guide méthodologique pour maîtriser l'épreuve de synthèse en allemand
          </p>

          {/* Informations pratiques */}
          <div className="bg-orange-50 rounded-lg p-4 border border-orange-200 mb-8">
            <div className="flex items-center gap-2 mb-2">
              <Target className="h-5 w-5 text-pr-orange-dark" />
              <span className="font-medium text-orange-800">Objectif :</span>
            </div>
            <p className="text-gray-700">
              Maîtrisez les techniques essentielles pour réussir votre synthèse d'allemand.
              Cette méthode vous guidera pour analyser, comparer et synthétiser efficacement les documents.
            </p>
          </div>
        </div>

        {/* Contenu méthodologique */}
        <div className="space-y-8">

          {/* EINLEITUNG / INTRODUCTION */}
          <section className="bg-white rounded-lg p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-100 pb-2">
              EINLEITUNG / INTRODUCTION
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Présenter les documents</h3>
                <div className="bg-gray-50 rounded p-4 mb-3">
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Diese Dokumente geben einen Überblick über...</strong></li>
                    <li>• <strong>Diese beiden Texte beschäftigen sich mit...</strong></li>
                    <li>• <strong>Beide Texte thematisieren...</strong></li>
                    <li>• <strong>In den vorliegenden Artikeln geht es um...</strong></li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Situer le débat / la question</h3>
                <div className="bg-gray-50 rounded p-4">
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Die Frage, ob... wird hier unterschiedlich beantwortet.</strong></li>
                    <li>• <strong>In diesem Kontext stellt sich die Frage, ob / inwiefern / warum… ?</strong></li>
                    <li>• <strong>Die Texte werfen die Frage auf, ob… ?</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* VERGLEICH DER POSITIONEN */}
          <section className="bg-white rounded-lg p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-100 pb-2">
              VERGLEICH DER POSITIONEN / COMPARAISON DES POINTS DE VUE
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Accord entre les auteurs</h3>
                <div className="bg-gray-50 rounded p-4 mb-3">
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Die Autoren sind sich darüber einig, dass...</strong></li>
                    <li>• <strong>Beide Autoren vertreten die Meinung, dass...</strong></li>
                    <li>• <strong>Ihre Meinungen sind sehr ähnlich.</strong></li>
                    <li>• <strong>Beide Artikel betrachten ... als...</strong></li>
                    <li>• <strong>Beide Texte unterstreichen / betonen / heben hervor, dass...</strong></li>
                    <li>• <strong>Sowohl X als auch Y meinen, dass...</strong></li>
                    <li>• <strong>... wird auf die gleiche Weise dargestellt wie in Dokument 2.</strong></li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Désaccord entre les auteurs</h3>
                <div className="bg-gray-50 rounded p-4">
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Die Autoren der beiden Texte sind über die Frage (+G) [...] nicht völlig einverstanden.</strong></li>
                    <li>• <strong>Die Meinungen gehen über die Frage (+G)... auseinander.</strong></li>
                    <li>• <strong>Die Meinungen gehen auseinander, was (+Akk)... betrifft.</strong></li>
                    <li>• <strong>Während X großen Wert auf ... legt, vertritt Y eine ganz andere Meinung über...</strong></li>
                    <li>• <strong>Der Autor legt Wert auf ..., aber er äußert eine ganz entgegengesetzte Meinung über...</strong></li>
                    <li>• <strong>X widerspricht Y, indem er sagt, dass...</strong></li>
                    <li>• <strong>Für X hingegen ist es keine gute Idee, ... zu +Inf.</strong></li>
                    <li>• <strong>Auch wenn X meint, dass..., glaubt Y, dass...</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* AUFBAU / STRUCTURE */}
          <section className="bg-white rounded-lg p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-100 pb-2">
              AUFBAU / STRUCTURE (par paragraphes)
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Paragraphe 1 : introduction de la première thèse</h3>
                <div className="bg-gray-50 rounded p-4 mb-3">
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Zuerst wird die Frage (+G)... berücksichtigt.</strong></li>
                    <li>• <strong>Zunächst wird auf die Frage (+G)... eingegangen.</strong></li>
                    <li>• <strong>Der Autor betrachtet... / zieht eine Parallele mit...</strong></li>
                    <li>• <strong>Als Hauptargumente führt (Name) an, dass...</strong></li>
                    <li>• <strong>Dokument 1 warnt also vor...</strong></li>
                    <li>• <strong>(Name) zufolge sollte man...</strong></li>
                    <li>• <strong>X erwähnt, dass... / Laut X...</strong></li>
                    <li>• <strong>Er selbst behauptet, dass...</strong></li>
                    <li>• <strong>In dieser Hinsicht hat er Recht / Unrecht.</strong></li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Transition vers le deuxième texte (opposition ou nuance)</h3>
                <div className="bg-gray-50 rounded p-4 mb-3">
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Auch wenn X meint, dass...</strong></li>
                    <li>• <strong>Jedoch ist es eine Bedingung für... laut der...</strong></li>
                    <li>• <strong>Im Gegensatz dazu erklärt Y, dass...</strong></li>
                    <li>• <strong>Y widerspricht X, indem er behauptet, dass...</strong></li>
                    <li>• <strong>Y vertritt eine entgegengesetzte Meinung: ...</strong></li>
                    <li>• <strong>Es besteht ein starker Unterschied zwischen... und...</strong></li>
                    <li>• <strong>Hingegen hebt Y hervor, dass...</strong></li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Ajouter un second argument</h3>
                <div className="bg-gray-50 rounded p-4">
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Darüber hinaus wird... betrachtet.</strong></li>
                    <li>• <strong>Wegen... wird... betont.</strong></li>
                    <li>• <strong>Außerdem bedeutet auch [etwas], dass...</strong></li>
                    <li>• <strong>Ebenso ist zu erwähnen, dass...</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* VERBINDUNGEN / LIAISONS UTILES */}
          <section className="bg-white rounded-lg p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-100 pb-2">
              VERBINDUNGEN / LIAISONS UTILES
            </h2>

            <div className="bg-gray-50 rounded p-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Expressions de cause/conséquence</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>aufgrund von (+D)</strong> = en raison de</li>
                    <li>• <strong>es liegt daran, dass...</strong> = cela est dû au fait que</li>
                    <li>• <strong>deshalb / folglich</strong> = par conséquent</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Expressions d'opposition</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>hingegen / im Gegensatz dazu</strong> = en revanche</li>
                    <li>• <strong>trotzdem / dennoch</strong> = néanmoins</li>
                    <li>• <strong>zwar..., aber...</strong> = certes..., mais...</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Expressions d'ajout</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>ebenso</strong> = de même</li>
                    <li>• <strong>darüber hinaus</strong> = en outre</li>
                    <li>• <strong>nicht nur..., sondern auch...</strong> = non seulement..., mais aussi...</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Expressions d'explication</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>nämlich / in der Tat</strong> = en effet</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* SCHLUSS / CONCLUSION */}
          <section className="bg-white rounded-lg p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-100 pb-2">
              SCHLUSS / CONCLUSION
            </h2>

            <div className="bg-gray-50 rounded p-4">
              <h3 className="text-lg font-medium text-gray-800 mb-3">Formules de conclusion</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>Durch den Vergleich dieser Dokumente kann gezeigt werden, dass...</strong></li>
                <li>• <strong>Zusammenfassend lässt sich sagen, dass...</strong></li>
                <li>• <strong>Zusammenfassend kann festgestellt werden, dass...</strong></li>
                <li>• <strong>Alles in allem lässt sich sagen, dass...</strong></li>
                <li>• <strong>Letztendlich zeigt sich, dass...</strong></li>
              </ul>
            </div>
          </section>

          {/* Section pratique */}
          <section className="bg-orange-50 rounded-lg p-6 border border-orange-200">
            <h3 className="text-lg font-semibold text-orange-800 mb-3">💡 Conseils pour la synthèse</h3>
            <div className="text-gray-700 space-y-2">
              <p>• <strong>Analyse préalable :</strong> Lisez attentivement les deux documents avant de commencer</p>
              <p>• <strong>Identification des thèses :</strong> Repérez clairement les positions de chaque auteur</p>
              <p>• <strong>Comparaison structurée :</strong> Organisez votre synthèse autour des accords et désaccords</p>
              <p>• <strong>Langage objectif :</strong> Utilisez un vocabulaire neutre et précis</p>
              <p>• <strong>Connecteurs logiques :</strong> Maîtrisez les expressions de liaison pour une cohérence parfaite</p>
              <p>• <strong>Longueur adaptée :</strong> 250-350 mots selon les exigences</p>
            </div>
          </section>

        </div>

        {/* Bouton retour en bas de page */}
        <div className="flex justify-center mt-12 pb-8">
          <Link to="/formation/allemand/epreuves">
            <button className="bg-carnet-red hover:bg-carnet-red-deep text-white px-6 py-3 rounded-md font-medium flex items-center gap-2 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Retour aux épreuves allemandes
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default EpreuvesEcritesSynthesePage;
