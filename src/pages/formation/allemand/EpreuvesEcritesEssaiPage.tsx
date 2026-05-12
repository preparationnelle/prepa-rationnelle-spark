import React from 'react';
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Target, Home, ChevronRight } from 'lucide-react';

const EpreuvesEcritesEssaiPage = () => {
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
            <span className="text-foreground font-medium">Réussir l'essai</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 max-w-4xl">

        {/* Header */}
        <div className="mb-8">

          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center border border-gray-200">
              <BookOpen className="h-6 w-6 text-pr-black" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Réussir l'essai</h1>
          </div>
          <p className="text-lg text-gray-600 text-center mb-8">
            Guide méthodologique pour rédiger un essai parfait en allemand
          </p>

          {/* Informations pratiques */}
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mb-8">
            <div className="flex items-center gap-2 mb-2">
              <Target className="h-5 w-5 text-pr-black" />
              <span className="font-medium text-gray-800">Objectif :</span>
            </div>
            <p className="text-gray-700">
              Maîtrisez la structure et les expressions essentielles pour réussir votre essai d'allemand.
              Cette méthode vous guidera pas à pas dans la rédaction d'un essai argumenté et convaincant.
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
                <h3 className="text-lg font-medium text-gray-800 mb-3">Accroche…</h3>
                <div className="bg-gray-50 rounded p-4 mb-3">
                  <p className="text-gray-600 italic mb-2">Attirez l'attention du lecteur dès les premières lignes</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Présenter le sujet et poser le problème</h3>
                <div className="bg-gray-50 rounded p-4 mb-3">
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>In dem folgenden Aufsatz werde ich erklären, warum / wie…</strong></li>
                    <li>• <strong>Im folgenden Aufsatz werde ich aufklären, warum Deutschland trotz der heutigen Energiekrise diese Ziele nicht aufgeben wird.</strong></li>
                    <li>• <strong>Diese Frage steht heute im Mittelpunkt vieler Debatten: ...</strong></li>
                    <li>• <strong>Angesichts der aktuellen Entwicklungen stellt sich die Frage, ob...</strong></li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Énoncer sa thèse</h3>
                <div className="bg-gray-50 rounded p-4">
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Ich bin der Überzeugung, dass…</strong></li>
                    <li>• <strong>Ich bin fest davon überzeugt, dass...</strong></li>
                    <li>• <strong>Meiner Meinung nach sollte man...</strong></li>
                    <li>• <strong>Ich möchte darlegen, warum ich der Ansicht bin, dass...</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* TEIL I: Kritik an der Gegenthese */}
          <section className="bg-white rounded-lg p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-100 pb-2">
              TEIL I: Kritik an der Gegenthese / Argumenter contre la position opposée
            </h2>

            <div className="bg-gray-50 rounded p-4">
              <h3 className="text-lg font-medium text-gray-800 mb-3">Rejeter l'opinion contraire</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>Ich kann nur die Leute verurteilen, die...</strong></li>
                <li>• <strong>Ich betrachte es als kontraproduktiv / sinnlos / unwirksam, etwas zu tun.</strong></li>
                <li>• <strong>Ich lehne es ab, ... zu tun / Ich weigere mich, ... zu tun.</strong></li>
                <li>• <strong>Für mich ist es ausgeschlossen, dass... / etwas zu tun.</strong></li>
                <li>• <strong>Für mich kommt es nicht in Frage, ... zu tun.</strong></li>
                <li>• <strong>Ich finde es übertrieben / unvernünftig, ...</strong></li>
                <li>• <strong>Es ist fraglich, ob...</strong></li>
                <li>• <strong>Für mich ist es eine Schande, dass...</strong></li>
              </ul>
            </div>
          </section>

          {/* TEIL II: Eigene Meinung entwickeln */}
          <section className="bg-white rounded-lg p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-100 pb-2">
              TEIL II: Eigene Meinung entwickeln / Développer sa propre position
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Introduire une opinion personnelle</h3>
                <div className="bg-gray-50 rounded p-4 mb-3">
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Meiner Meinung / Ansicht nach + V2</strong></li>
                    <li>• <strong>Ich bin der Meinung / Ansicht, dass...</strong></li>
                    <li>• <strong>Ich bin in anderer Hinsicht.</strong></li>
                    <li>• <strong>Ich bin fest davon überzeugt, dass...</strong></li>
                    <li>• <strong>Ich halte es für notwendig / unentbehrlich / unumgänglich, dass...</strong></li>
                    <li>• <strong>Für mich ist es wichtig, ...</strong></li>
                    <li>• <strong>Umso wichtiger ist es daher, dass...</strong></li>
                    <li>• <strong>Ich könnte nur empfehlen, ... zu tun.</strong></li>
                    <li>• <strong>Es ist höchste Zeit, dass...</strong></li>
                    <li>• <strong>Eine solche Gelegenheit muss man sofort ergreifen.</strong></li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Introduire une nuance</h3>
                <div className="bg-gray-50 rounded p-4">
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Ich muss zugeben, dass ich gegen Ihren Vorschlag nichts einzuwenden habe.</strong></li>
                    <li>• <strong>Man sollte vielleicht zwischen (+D) und (+D) unterscheiden.</strong></li>
                    <li>• <strong>Allerdings hängt es davon ab, ob...</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* BEISPIELE UND ZAHLEN */}
          <section className="bg-white rounded-lg p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-100 pb-2">
              BEISPIELE UND ZAHLEN / EXEMPLES ET CHIFFRES
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Introduire un exemple</h3>
                <div className="bg-gray-50 rounded p-4 mb-3">
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Das Paradebeispiel dafür ist...</strong></li>
                    <li>• <strong>Ein anschauliches Beispiel dafür ist...</strong></li>
                    <li>• <strong>Beispielweise…</strong></li>
                    <li>• <strong>Laut…</strong></li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Utiliser des chiffres</h3>
                <div className="bg-gray-50 rounded p-4">
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Laut den Statistiken leben weltweit 100 bis 200 Millionen Kinder auf der Straße.</strong></li>
                    <li>• <strong>Im Vergleich zu 2008 ist die Zahl der Konsumenten 2011 um 20% niedriger.</strong></li>
                    <li>• <strong>Während 2016 noch 20% ... erhielten, waren es 2020 nur noch 10%.</strong></li>
                    <li>• <strong>Die Zahl der ... ist zwischen 2001 und 2008 gefallen.</strong></li>
                    <li>• <strong>Im Zeitraum von 1950 bis 2010 hat sich die Zahl der ... fast verdoppelt.</strong></li>
                    <li>• <strong>2002 gab es doppelt so viele ... wie im Jahr 2008.</strong></li>
                    <li>• <strong>Der Anteil von ... lag im Jahr ... bei ... %.</strong></li>
                    <li>• <strong>Es fällt auf, dass... / Auffällig ist... / Überraschend ist, dass...</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* KRITIK UND KOMMENTAR */}
          <section className="bg-white rounded-lg p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-100 pb-2">
              KRITIK UND KOMMENTAR / CRITIQUE ET COMMENTAIRE
            </h2>

            <div className="bg-gray-50 rounded p-4">
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>Die Journalistin bestreitet immer wieder Angela Merkels Standpunkt.</strong></li>
                <li>• <strong>Der Journalist übt ständig Kritik an Merkels Haltung.</strong></li>
                <li>• <strong>Ich bin der Meinung, dass wir eine Lehre aus diesem Ereignis ziehen sollten.</strong></li>
                <li>• <strong>Insgesamt kann man feststellen, dass...</strong></li>
                <li>• <strong>Diese Tendenz ist eher sinkend / steigend.</strong></li>
              </ul>
            </div>
          </section>

          {/* SCHLUSS / CONCLUSION */}
          <section className="bg-white rounded-lg p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-100 pb-2">
              SCHLUSS / CONCLUSION
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Résumer les arguments</h3>
                <div className="bg-gray-50 rounded p-4 mb-3">
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Aus diesen Gründen bin ich der Ansicht, dass... nicht völlig ... wird.</strong></li>
                    <li>• <strong>Aus den oben genannten Argumenten ergibt sich, dass...</strong></li>
                    <li>• <strong>Alles spricht dafür, dass...</strong></li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Formules de conclusion</h3>
                <div className="bg-gray-50 rounded p-4">
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Zusammenfassend lässt sich sagen, dass...</strong></li>
                    <li>• <strong>Zusammenfassend kann man sagen, dass...</strong></li>
                    <li>• <strong>Insgesamt kann festgestellt werden, dass...</strong></li>
                    <li>• <strong>Letztlich bleibt zu sagen, dass...</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section pratique */}
          <section className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">💡 Conseils pour l'essai</h3>
            <div className="text-gray-700 space-y-2">
              <p>• <strong>Structure rigoureuse :</strong> Respectez l'ordre introduction-partie I-partie II-conclusion</p>
              <p>• <strong>Thèse claire :</strong> Annoncez votre position dès l'introduction</p>
              <p>• <strong>Arguments solides :</strong> Utilisez des exemples et chiffres pour étayer vos propos</p>
              <p>• <strong>Vocabulaire précis :</strong> Employez les connecteurs logiques appropriés</p>
              <p>• <strong>Longueur adaptée :</strong> 300-400 mots selon les exigences</p>
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

export default EpreuvesEcritesEssaiPage;
