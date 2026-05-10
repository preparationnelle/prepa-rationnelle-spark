import React from 'react';
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Target, Home, ChevronRight } from 'lucide-react';

const GrammaireAvanceePage = () => {
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
            <span className="text-foreground font-medium">Grammaire avancée</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 max-w-4xl">

        {/* Header */}
        <div className="mb-8">

          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center border border-orange-200">
              <BookOpen className="h-6 w-6 text-orange-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Grammaire avancée</h1>
          </div>
          <p className="text-lg text-gray-600 text-center mb-8">
            Points grammaticaux avancés pour l'expression écrite et orale en allemand
          </p>

          {/* Informations pratiques */}
          <div className="bg-orange-50 rounded-lg p-4 border border-orange-200 mb-8">
            <div className="flex items-center gap-2 mb-2">
              <Target className="h-5 w-5 text-orange-600" />
              <span className="font-medium text-orange-800">Objectif :</span>
            </div>
            <p className="text-gray-700">
              Maîtrisez les structures grammaticales complexes essentielles pour réussir vos épreuves d'allemand.
              Ces exemples illustrent les points grammaticaux les plus fréquents aux concours.
            </p>
          </div>
        </div>

        {/* Contenu grammatical */}
        <div className="space-y-6">

          {/* Exemple 1 - Interrogation avec wann */}
          <section className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="space-y-4">
              <div className="border-l-4 border-orange-200 pl-4">
                <p className="text-lg text-gray-900 font-medium mb-2">
                  Quand veux-tu visiter ce célèbre musée : demain ou seulement dimanche ?
                </p>
                <p className="text-carnet-red font-medium mb-3">
                  Wann willst du dieses berühmte Museum besichtigen: morgen oder erst am Sonntag?
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-orange-800 mb-2">GRAMMAIRE</h4>
                  <p className="text-gray-700 text-sm">
                    Inversion sujet-verbe avec l'interrogatif "wann", verbe de modalité au présent (willst), infinitif en fin de phrase.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-orange-800 mb-2">VOCABULAIRE</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• <strong>wollen</strong> = vouloir (modal)</li>
                    <li>• <strong>besichtigen</strong> = visiter (un lieu culturel)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Exemple 2 - Construction impersonnelle */}
          <section className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="space-y-4">
              <div className="border-l-4 border-orange-200 pl-4">
                <p className="text-lg text-gray-900 font-medium mb-2">
                  Aujourd'hui, on constate que beaucoup de gens font de moins en moins confiance aux hommes politiques.
                </p>
                <p className="text-carnet-red font-medium mb-3">
                  Heutzutage stellt man fest, dass viele Menschen den Politikern immer weniger vertrauen.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-orange-800 mb-2">GRAMMAIRE</h4>
                  <p className="text-gray-700 text-sm">
                    Construction impersonnelle "man stellt fest", subordonnée introduite par dass, vertrauen suivi du datif.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-orange-800 mb-2">VOCABULAIRE</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• <strong>feststellen</strong> = constater</li>
                    <li>• <strong>vertrauen + D</strong> = faire confiance</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Exemple 3 - Proposition relative */}
          <section className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="space-y-4">
              <div className="border-l-4 border-orange-200 pl-4">
                <p className="text-lg text-gray-900 font-medium mb-2">
                  Nos amis, qui ont passé quatre jours en Autriche, s'intéressent à l'histoire de ce pays.
                </p>
                <p className="text-carnet-red font-medium mb-3">
                  Unsere Freunde, die vier Tage in Österreich verbracht haben, interessieren sich für die Geschichte dieses Landes.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-orange-800 mb-2">GRAMMAIRE</h4>
                  <p className="text-gray-700 text-sm">
                    Proposition relative au passé composé (haben verbracht), sich interessieren für suivi de l'accusatif.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-orange-800 mb-2">VOCABULAIRE</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• <strong>sich interessieren für</strong> = s'intéresser à</li>
                    <li>• <strong>Geschichte</strong> = histoire</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Exemple 4 - Parfait avec modalité */}
          <section className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="space-y-4">
              <div className="border-l-4 border-orange-200 pl-4">
                <p className="text-lg text-gray-900 font-medium mb-2">
                  Après leur stage, ils ont voulu travailler dans une grande entreprise de Stuttgart.
                </p>
                <p className="text-carnet-red font-medium mb-3">
                  Nach ihrem Praktikum haben sie in einer großen Stuttgarter Firma arbeiten wollen.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-orange-800 mb-2">GRAMMAIRE</h4>
                  <p className="text-gray-700 text-sm">
                    Parfait avec modalité (haben arbeiten wollen), complément de lieu avec in + D.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-orange-800 mb-2">VOCABULAIRE</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• <strong>arbeiten wollen</strong> = vouloir travailler</li>
                    <li>• <strong>Praktikum</strong> = stage</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Exemple 5 - Irréel du passé */}
          <section className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="space-y-4">
              <div className="border-l-4 border-orange-200 pl-4">
                <p className="text-lg text-gray-900 font-medium mb-2">
                  Si elle avait eu plus de temps, elle serait restée à la mer tout le week-end.
                </p>
                <p className="text-carnet-red font-medium mb-3">
                  Wenn sie mehr Zeit gehabt hätte, wäre sie das ganze Wochenende am Meer geblieben.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-orange-800 mb-2">GRAMMAIRE</h4>
                  <p className="text-gray-700 text-sm">
                    Irréel du passé en Konjunktiv II Perfekt (hätte gehabt, wäre geblieben), wenn en tête ou possibilité d'inversion.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-orange-800 mb-2">VOCABULAIRE</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• <strong>Konjunktiv II</strong> = irréel du passé</li>
                    <li>• <strong>bleiben</strong> = rester</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Exemple 6 - Inversion sujet-verbe */}
          <section className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="space-y-4">
              <div className="border-l-4 border-orange-200 pl-4">
                <p className="text-lg text-gray-900 font-medium mb-2">
                  Mon mari et moi avons rencontré une famille allemande dans l'avion pour Munich au mois de juillet.
                </p>
                <p className="text-carnet-red font-medium mb-3">
                  Im Juli haben mein Mann und ich im Flugzeug nach München eine deutsche Familie getroffen.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-orange-800 mb-2">GRAMMAIRE</h4>
                  <p className="text-gray-700 text-sm">
                    Complément circonstanciel de temps en tête, ordre sujet-verbe inversé (haben mein Mann und ich), treffen conjugué au parfait.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-orange-800 mb-2">VOCABULAIRE</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• <strong>treffen</strong> = rencontrer</li>
                    <li>• <strong>im Juli</strong> = en juillet</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Exemple 7 - Verbe pronominal réfléchi */}
          <section className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="space-y-4">
              <div className="border-l-4 border-orange-200 pl-4">
                <p className="text-lg text-gray-900 font-medium mb-2">
                  Te souviens-tu que les enfants ne sont pas allés à l'école pendant des semaines l'année dernière ?
                </p>
                <p className="text-carnet-red font-medium mb-3">
                  Erinnerst du dich daran, dass die Kinder letztes Jahr wochenlang nicht zur Schule gegangen sind?
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-orange-800 mb-2">GRAMMAIRE</h4>
                  <p className="text-gray-700 text-sm">
                    Verbe pronominal réfléchi avec sich erinnern an, usage du pronom daran pour introduire une subordonnée, parfait avec sein.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-orange-800 mb-2">VOCABULAIRE</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• <strong>sich erinnern an</strong> = se souvenir de</li>
                    <li>• <strong>wochenlang</strong> = pendant des semaines</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Exemple 8 - Génitif avec trotz */}
          <section className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="space-y-4">
              <div className="border-l-4 border-orange-200 pl-4">
                <p className="text-lg text-gray-900 font-medium mb-2">
                  Malgré le confinement et les difficultés, les étudiants sérieux ont réussi l'examen.
                </p>
                <p className="text-carnet-red font-medium mb-3">
                  Trotz des Lockdowns und der Schwierigkeiten haben die fleißigen Studenten die Prüfung bestanden.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-orange-800 mb-2">GRAMMAIRE</h4>
                  <p className="text-gray-700 text-sm">
                    trotz suivi du génitif, parfait avec haben, adjectif épithète accordé (fleißigen Studenten).
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-orange-800 mb-2">VOCABULAIRE</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• <strong>trotz + G</strong> = malgré</li>
                    <li>• <strong>bestehen</strong> = réussir</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Exemple 9 - Passif parfait */}
          <section className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="space-y-4">
              <div className="border-l-4 border-orange-200 pl-4">
                <p className="text-lg text-gray-900 font-medium mb-2">
                  Cette très belle maison a été louée par des touristes américains qu'il connaît bien.
                </p>
                <p className="text-carnet-red font-medium mb-3">
                  Dieses sehr schöne Haus ist von amerikanischen Touristen, die er gut kennt, gemietet worden.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-orange-800 mb-2">GRAMMAIRE</h4>
                  <p className="text-gray-700 text-sm">
                    Passif parfait avec ist … worden, proposition relative insérée, adjectifs épithètes.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-orange-800 mb-2">VOCABULAIRE</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• <strong>gemietet worden</strong> = passif au parfait</li>
                    <li>• <strong>kennen</strong> = connaître</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Exemple 10 - Subordonnée causale */}
          <section className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="space-y-4">
              <div className="border-l-4 border-orange-200 pl-4">
                <p className="text-lg text-gray-900 font-medium mb-2">
                  Comme j'habite maintenant dans le centre-ville, je n'ai plus besoin de voiture.
                </p>
                <p className="text-carnet-red font-medium mb-3">
                  Da ich nun in der Innenstadt wohne, brauche ich kein Auto mehr.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-orange-800 mb-2">GRAMMAIRE</h4>
                  <p className="text-gray-700 text-sm">
                    Subordonnée causale en tête (da), inversion sujet-verbe dans la principale (brauche ich), négation avec kein mehr.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-orange-800 mb-2">VOCABULAIRE</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• <strong>da</strong> = comme (cause)</li>
                    <li>• <strong>kein Auto mehr</strong> = plus besoin de voiture</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* Section pratique */}
        <section className="bg-orange-50 rounded-lg p-6 border border-orange-200 mt-8 mb-8">
          <h3 className="text-lg font-semibold text-orange-800 mb-3">💡 Points grammaticaux à maîtriser</h3>
          <div className="text-gray-700 space-y-2">
            <p>• <strong>Structures complexes :</strong> Inversion sujet-verbe, propositions relatives, subordonnées</p>
            <p>• <strong>Temps composés :</strong> Parfait avec modalité, irréel du passé, passif parfait</p>
            <p>• <strong>Cas allemands :</strong> Génitif avec trotz, datif avec vertrauen, accusatif avec sich interessieren</p>
            <p>• <strong>Verbes pronominaux :</strong> sich erinnern, sich interessieren</p>
            <p>• <strong>Constructions impersonnelles :</strong> man stellt fest, es liegt daran</p>
          </div>
        </section>

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

export default GrammaireAvanceePage;
