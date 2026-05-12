import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Target, Home, ChevronRight } from 'lucide-react';

const EpreuvesOralesPage = () => {
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
            <span className="text-foreground font-medium">Épreuves orales</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 max-w-4xl">

        {/* Header */}
        <div className="mb-8">

          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center border border-gray-200">
              <Target className="h-6 w-6 text-pr-black" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Épreuves orales</h1>
          </div>
          <p className="text-lg text-gray-600 mb-8">
            Fiche méthodologique pour réussir la colle d'allemand
          </p>

          {/* Durée estimée */}
          <div className="flex items-center gap-2 text-gray-500 mb-8">
            <Clock className="h-4 w-4" />
            <span className="text-sm">Durée estimée : 10 minutes</span>
          </div>
        </div>

        {/* Contenu de la fiche méthodologique */}
        <div className="space-y-8">

          {/* I. Einleitung – Introduction */}
          <section className="bg-white rounded-lg p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-100 pb-2">
              I. Einleitung – Introduction (0:00 – 1:00)
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">1. Accroche d'actualité (0:00 – 0:20)</h3>
                <div className="bg-gray-50 rounded p-4 mb-3">
                  <p className="text-gray-700 mb-2"><strong>Exemples :</strong></p>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Im Jahre 2023 ist [die Zahl der Arbeitslosen in Ostdeutschland zum ersten Mal seit Jahren gestiegen].</li>
                    <li>• In dieser Ansicht wurde ein Artikel veröffentlicht.</li>
                    <li>• In einem Artikel aus dem Spiegel, der am 3. Oktober 2023 veröffentlicht wurde, befasst sich der Autor mit der Frage [der Ostalgie].</li>
                  </ul>
                </div>
                <p className="text-gray-600 italic">Éviter les détails, rester synthétique.</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">2. Présentation du texte et des enjeux (0:20 – 0:40)</h3>
                <div className="bg-gray-50 rounded p-4 mb-3">
                  <ul className="space-y-1 text-gray-600">
                    <li>• In diesem Artikel geht es um...</li>
                    <li>• Der Journalist thematisiert die Frage nach (+D)...</li>
                    <li>• Einerseits... / Andererseits...</li>
                    <li>• Es ist auffällig, dass... / Es fällt auf, dass...</li>
                  </ul>
                </div>
                <p className="text-gray-600 italic">Souligne une tension ou un paradoxe si possible.</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">3. Problématique (0:40 – 1:00)</h3>
                <div className="bg-gray-50 rounded p-4 mb-3">
                  <ul className="space-y-1 text-gray-600">
                    <li>• Warum ist... ?</li>
                    <li>• Inwiefern kann man sagen, dass... ?</li>
                    <li>• Es wirft die folgende Frage auf: ...</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">4. Annonce du plan (1:15 – 1:30)</h3>
                <div className="bg-gray-50 rounded p-4">
                  <ul className="space-y-1 text-gray-600">
                    <li>• Zuerst erklärt der Journalist anhand mehrerer Beispiele, was... ist.</li>
                    <li>• Dann geht er auf die Ursachen ein.</li>
                    <li>• Schließlich nennt er mögliche Folgen auf die Gesellschaft / Politik / Zukunft Deutschlands.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* II. Résumé structuré du texte */}
          <section className="bg-white rounded-lg p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-100 pb-2">
              II. Résumé structuré du texte (1:00 – 4:00)
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Exprimer ce que l'on apprend du texte :</h3>
                <div className="bg-gray-50 rounded p-4 mb-3">
                  <ul className="space-y-1 text-gray-600">
                    <li>• Wir erfahren, dass...</li>
                    <li>• Der Journalist betont / erwähnt / erklärt, dass...</li>
                    <li>• Laut dem Autor ist... / Dem Autor zufolge...</li>
                    <li>• Wie der Journalist hervorhebt / unterstreicht...</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Commenter un exemple :</h3>
                <div className="bg-gray-50 rounded p-4 mb-3">
                  <ul className="space-y-1 text-gray-600">
                    <li>• Dieses Beispiel ist sehr aufschlussreich.</li>
                    <li>• Die Anspielung auf (+Akk) zeigt, dass...</li>
                    <li>• Er versucht, seine Argumentation mit Beispielen zu rechtfertigen.</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Lire une phrase si nécessaire :</h3>
                <div className="bg-gray-50 rounded p-4 mb-3">
                  <p className="text-gray-600">• Nun möchte ich folgende Textstelle vorlesen, die besonders wichtig ist: „..."</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Annoncer les trois temps du texte :</h3>
                <div className="bg-gray-50 rounded p-4">
                  <ul className="space-y-1 text-gray-600">
                    <li>• Zuerst behandelt der Journalist das Thema...</li>
                    <li>• Danach analysiert er die Gründe...</li>
                    <li>• Am Ende stellt er mögliche Konsequenzen dar.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* III. Übergang zum Kommentar – Transition */}
          <section className="bg-white rounded-lg p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-100 pb-2">
              III. Übergang zum Kommentar – Transition (4:00 – 4:30)
            </h2>

            <div className="bg-gray-50 rounded p-4">
              <p className="text-gray-600 mb-2"><strong>Phrase de bascule :</strong></p>
              <ul className="space-y-1 text-gray-600">
                <li>• Dieser Text ist kommentarwürdig, denn er spricht ein kontroverses Thema an.</li>
                <li>• Nun möchte ich meine persönliche Meinung zu dieser Frage äußern.</li>
              </ul>
            </div>
          </section>

          {/* IV. Kommentar – Commentaire */}
          <section className="bg-white rounded-lg p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-100 pb-2">
              IV. Kommentar – Commentaire (4:30 – 9:30)
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Donner une thèse forte :</h3>
                <div className="bg-gray-50 rounded p-4 mb-3">
                  <ul className="space-y-1 text-gray-600">
                    <li>• Ich halte diese Behauptung für falsch / überzeugend.</li>
                    <li>• Ich kann mir nicht vorstellen, dass...</li>
                    <li>• Ich bin fest davon überzeugt, dass...</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Exprimer ton opinion :</h3>
                <div className="bg-gray-50 rounded p-4 mb-3">
                  <ul className="space-y-1 text-gray-600">
                    <li>• Meiner Meinung / Ansicht nach + V2</li>
                    <li>• Ich bin der Meinung, dass...</li>
                    <li>• Für mich ist es ausgeschlossen, dass...</li>
                    <li>• Ich betrachte es als unwirksam / kontraproduktiv, etwas zu tun.</li>
                    <li>• Für mich ist es eine Schande, dass...</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Exprimer une nuance :</h3>
                <div className="bg-gray-50 rounded p-4 mb-3">
                  <ul className="space-y-1 text-gray-600">
                    <li>• Allerdings hängt es davon ab, ob...</li>
                    <li>• Zwar..., aber...</li>
                    <li>• Man sollte vielleicht zwischen (+D) und (+D) unterscheiden.</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Proposer :</h3>
                <div className="bg-gray-50 rounded p-4">
                  <ul className="space-y-1 text-gray-600">
                    <li>• Meiner Meinung nach sollte man ... statt ... zu + Infinitiv</li>
                    <li>• Ich würde empfehlen, dass...</li>
                    <li>• Es ist höchste Zeit, dass...</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* V. Schluss – Conclusion */}
          <section className="bg-white rounded-lg p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-100 pb-2">
              V. Schluss – Conclusion (9:30 – 10:00)
            </h2>

            <div className="bg-gray-50 rounded p-4">
              <p className="text-gray-600 mb-2"><strong>Clôturer avec une idée claire (pas un résumé) :</strong></p>
              <ul className="space-y-1 text-gray-600">
                <li>• Aus dem Text und aus meinem Kommentar kann man schließen, dass...</li>
                <li>• Zusammenfassend lässt sich sagen, dass...</li>
                <li>• Insgesamt zeigt sich, dass die Frage nach (+D)... bis heute aktuell und umstritten ist.</li>
                <li>• Dieses Thema bleibt zentral für das Verständnis der heutigen deutschen Gesellschaft.</li>
              </ul>
            </div>
          </section>

          {/* Section pratique */}
          <section className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">💡 Conseils pratiques</h3>
            <div className="text-gray-700 space-y-2">
              <p>• <strong>Temps de préparation :</strong> 15-20 minutes maximum</p>
              <p>• <strong>Structure rigoureuse :</strong> Respectez le timing indiqué pour chaque partie</p>
              <p>• <strong>Vocabulaire précis :</strong> Utilisez les connecteurs logiques appropriés</p>
              <p>• <strong>Ton assuré :</strong> Montrez votre maîtrise du sujet</p>
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

export default EpreuvesOralesPage;
