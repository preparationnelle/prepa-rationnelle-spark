import React from 'react';
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Target, AlertTriangle, CheckCircle, Zap, Clock, Lightbulb, Home, ChevronRight } from 'lucide-react';

const MethodologieTravailPage = () => {
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
            <span className="text-foreground font-medium">Comment travailler l'allemand en prépa</span>
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
            <h1 className="text-3xl font-bold text-gray-900">Comment travailler l'allemand en prépa</h1>
          </div>
          <p className="text-lg text-gray-600 text-center mb-8">
            Méthode complète d'allemand en prépa ECG - Techniques efficaces pour réussir les épreuves
          </p>

          {/* Avertissement */}
          <div className="bg-orange-50 rounded-lg p-4 border border-orange-200 mb-8">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              <span className="font-medium text-orange-800">⚠️ Attention :</span>
            </div>
            <p className="text-gray-700">
              Ceci n'est pas une méthode pour apprendre l'allemand, c'est une méthode pour réussir les épreuves d'allemand en prépa HEC/ECG.
            </p>
          </div>
        </div>

        {/* Section 1 - Traduction et Grammaire */}
        <section className="bg-white rounded-lg p-6 border border-gray-200 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
              <span className="font-bold text-orange-600 text-sm">1</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Traduction et Grammaire</h2>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-orange-800 mb-3">Pourquoi est-ce crucial ?</h3>
            <p className="text-gray-700 mb-4">
              La traduction est non seulement une épreuve des concours, c'est aussi un moyen efficace de maîtriser la grammaire allemande !
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-orange-800 mb-3">Comment s'y prendre efficacement ?</h3>
            <p className="text-gray-700 mb-4">
              Pratiquez régulièrement des phrases de thème, en utilisant les sujets vus en cours ou disponibles dans les annales des concours comme Ecricome LV2. Les corrigés sont détaillés et présentent souvent plein d'options de traduction.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Exemples concrets :</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-orange-200 pl-4 bg-gray-50 p-4 rounded">
                <p className="text-lg text-gray-900 font-medium mb-2">
                  Depuis le début des années 90, le Japon se bat contre la déflation et une croissance faible.
                </p>
                <p className="text-blue-700 font-medium mb-2">
                  Seit Anfang der 90er Jahre kämpft Japan gegen die Deflation und ein schwaches Wachstum.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Grammaire :</strong> Seit + D (depuis), kämpfen gegen + A (se battre contre), schwaches Wachstum (adjectif épithète)
                </p>
              </div>

              <div className="border-l-4 border-orange-200 pl-4 bg-gray-50 p-4 rounded">
                <p className="text-lg text-gray-900 font-medium mb-2">
                  Si la reprise économique n'avait pas été si timide, il n'y aurait pas eu tant de fermetures d'usines.
                </p>
                <p className="text-blue-700 font-medium mb-2">
                  Hätte die wirtschaftliche Erholung nicht so zaghaft gewesen, hätte es nicht so viele Betriebsschließungen gegeben.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Grammaire :</strong> Irréel du passé (Konjunktiv II Perfekt), hätte + Participe II, es gibt (il y a)
                </p>
              </div>

              <div className="border-l-4 border-orange-200 pl-4 bg-gray-50 p-4 rounded">
                <p className="text-lg text-gray-900 font-medium mb-2">
                  Moins vous passerez de temps sur les réseaux sociaux, plus vous vous rapprocherez de vos vrais amis.
                </p>
                <p className="text-blue-700 font-medium mb-2">
                  Je weniger Zeit Sie in sozialen Netzwerken verbringen, desto näher kommen Sie Ihren wahren Freunden.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Grammaire :</strong> Comparatif de supériorité avec je...desto, verbe de modalité (kommen), datif (Ihren Freunden)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="h-5 w-5 text-orange-600" />
              <span className="font-medium text-orange-800">🚀 Ce que je propose :</span>
            </div>
            <p className="text-gray-700 text-sm">
              Vous pouvez accéder à mon fichier Quizlet avec des centaines de phrases de thème corrigées.
            </p>
          </div>
        </section>

        {/* Section 2 - Gérer vos erreurs */}
        <section className="bg-white rounded-lg p-6 border border-gray-200 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
              <span className="font-bold text-orange-600 text-sm">2</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Gérer vos erreurs</h2>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-orange-800 mb-3">Pourquoi ?</h3>
            <p className="text-gray-700 mb-4">
              Prendre des notes structurées sur vos erreurs, vocabulaire et nouvelles structures rencontrées vous aide à progresser plus vite. Cela vous permet aussi de réviser efficacement sans repartir de zéro. Ceci est valable pour la traduction, et aussi pour les essais.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-orange-800 mb-3">1. Gérer vos erreurs en Trois Points</h3>
            <p className="text-gray-700 mb-4">
              Identifiez vos erreurs fréquentes : par exemple un problème d'accord ("The informations are not reliable" au lieu de "The information is not reliable").
            </p>

            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-gray-800 mb-3">Carnet d'erreurs :</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-700"><strong>Erreur :</strong> "Er hat mir vorgeschlagen härter zu arbeiten."</p>
                  <p className="text-gray-700"><strong>Correction :</strong> "Er hat mir vorgeschlagen, härter zu arbeiten."</p>
                  <p className="text-sm text-gray-600"><strong>Explication :</strong> Le verbe vorschlagen prend une virgule devant l'infinitif.</p>
                </div>

                <div>
                  <p className="text-gray-700"><strong>Erreur :</strong> "Die Information sind nicht zuverlässig."</p>
                  <p className="text-gray-700"><strong>Correction :</strong> "Die Information ist nicht zuverlässig."</p>
                  <p className="text-sm text-gray-600"><strong>Explication :</strong> Information est féminin singulier (die Information).</p>
                </div>

                <div>
                  <p className="text-gray-700"><strong>Erreur :</strong> "Ich habe keine Zeit für das Treffen."</p>
                  <p className="text-gray-700"><strong>Correction :</strong> "Ich habe keine Zeit für das Meeting."</p>
                  <p className="text-sm text-gray-600"><strong>Explication :</strong> Utiliser "Meeting" pour les réunions professionnelles, "Treffen" pour les rencontres informelles.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-orange-800 mb-3">2. Vocabulaire</h3>
            <p className="text-gray-700 mb-4">
              Créer un carnet thématique :
            </p>

            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-gray-800 mb-3">• Classez les mots par thèmes (environnement, économie, politique, société…)</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-700"><strong>"Schwaches Wachstum"</strong> → synonymes : schwache Konjunktur, geringes Wirtschaftswachstum</p>
                  <p className="text-sm text-gray-600">Exemple : "Deutschland kämpft seit Jahren mit schwachem Wachstum."</p>
                </div>

                <div>
                  <p className="text-gray-700"><strong>"Umweltbelastung"</strong> → synonymes : Umweltverschmutzung, ökologische Belastung</p>
                  <p className="text-sm text-gray-600">Exemple : "Die Umweltbelastung durch Industrieabfälle nimmt zu."</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-gray-800 mb-3">• Focus sur l'orthographe :</h4>
              <p className="text-gray-700">
                <strong>Deutsche, Ökonomie, Universität, Gesellschaft, Entwicklung, Wirtschaft, Politik, Wissenschaft, Technologie</strong>
              </p>
            </div>

            <div className="bg-orange-50 rounded-lg p-3 border border-orange-200">
              <p className="text-gray-700 text-sm">
                <strong>Flashcards :</strong> Utilisez une appli comme Anki pour mémoriser vos mots clés.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 - Approfondir les Thèmes */}
        <section className="bg-white rounded-lg p-6 border border-gray-200 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
              <span className="font-bold text-orange-600 text-sm">3</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Approfondir les Thèmes qui tombent aux concours</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-orange-800">Thèmes fréquents :</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Économie allemande :</strong> Industrie 4.0, exportations, euro</li>
                <li>• <strong>Politique européenne :</strong> UE, migrations, environnement</li>
                <li>• <strong>Société :</strong> vieillissement, éducation, numérique</li>
                <li>• <strong>Écologie :</strong> transition énergétique, climat</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-orange-800">Stratégie :</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Lire Der Spiegel, Die Zeit régulièrement</li>
                <li>• Suivre l'actualité allemande sur France 24</li>
                <li>• Constituer un dossier thématique par sujet</li>
                <li>• Maîtriser le vocabulaire spécialisé</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4 - Préparation Structurée des Colles */}
        <section className="bg-white rounded-lg p-6 border border-gray-200 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
              <span className="font-bold text-orange-600 text-sm">4</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Préparation Structurée des Colles</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-orange-800 mb-3">Méthode de préparation :</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>15 minutes de préparation :</strong> lire le texte attentivement</li>
                <li>• <strong>Structure :</strong> Introduction + Résumé + Transition + Commentaire + Conclusion</li>
                <li>• <strong>Timing :</strong> Respecter les 10 minutes de passage</li>
                <li>• <strong>Vocabulaire :</strong> préparer des expressions clés</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-800 mb-3">Expressions essentielles :</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Introduction :</strong> "In diesem Artikel geht es um..."</li>
                <li>• <strong>Transition :</strong> "Nun möchte ich meine Meinung äußern"</li>
                <li>• <strong>Opinion :</strong> "Meiner Meinung nach..."</li>
                <li>• <strong>Conclusion :</strong> "Zusammenfassend lässt sich sagen..."</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5 - Réussir Essais et Synthèses */}
        <section className="bg-white rounded-lg p-6 border border-gray-200 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
              <span className="font-bold text-orange-600 text-sm">5</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Réussir Essais et Synthèses</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-orange-800 mb-3">Essai argumentatif :</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Introduction :</strong> Thèse + annonce du plan</li>
                <li>• <strong>Partie I :</strong> Critique de la contre-thèse</li>
                <li>• <strong>Partie II :</strong> Développement de sa propre opinion</li>
                <li>• <strong>Conclusion :</strong> Résumé des arguments</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-800 mb-3">Synthèse :</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Introduction :</strong> Présenter les documents</li>
                <li>• <strong>Comparaison :</strong> Points communs et différences</li>
                <li>• <strong>Structure :</strong> Paragraphes thématiques</li>
                <li>• <strong>Liaisons :</strong> Utiliser les connecteurs logiques</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 6 - Organisation du temps */}
        <section className="bg-white rounded-lg p-6 border border-gray-200 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
              <span className="font-bold text-orange-600 text-sm">6</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Organisation du temps</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-5 w-5 text-orange-600" />
                <h4 className="font-semibold text-gray-800">Préparation (Sept-Oct)</h4>
              </div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Révision grammaire de base</li>
                <li>• Constitution du vocabulaire</li>
                <li>• Lecture d'articles simples</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-5 w-5 text-orange-600" />
                <h4 className="font-semibold text-gray-800">Intensif (Nov-Jan)</h4>
              </div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Entraînement aux épreuves</li>
                <li>• Simulation de concours</li>
                <li>• Gestion des erreurs</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-5 w-5 text-orange-600" />
                <h4 className="font-semibold text-gray-800">Finalisation (Fév-Mars)</h4>
              </div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Révision intensive</li>
                <li>• Derniers entraînements</li>
                <li>• Gestion du stress</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bonus Section */}
        <section className="bg-orange-50 rounded-lg p-6 border border-orange-200 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-orange-600" />
            </div>
            <h2 className="text-2xl font-bold text-orange-800">🎁 Bonus - Méthodes Complémentaires</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Pour te récompenser d'être arrivé jusqu'ici :</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Méthode de traduction efficace</strong></li>
                <li>• <strong>Méthode de l'essai argumentatif</strong></li>
                <li>• <strong>Méthode pour faire une synthèse réussie</strong></li>
                <li>• <strong>Méthodologie de la Colle d'allemand</strong></li>
                <li>• <strong>Gestion du stress avant les épreuves</strong></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Ressources recommandées :</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Annales ECRICOME LV2</strong> allemand</li>
                <li>• <strong>Der Spiegel</strong> pour l'actualité</li>
                <li>• <strong>Anki</strong> pour les flashcards</li>
                <li>• <strong>Quizlet</strong> pour le vocabulaire</li>
                <li>• <strong>France 24 allemand</strong> pour l'info</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bouton retour en bas de page */}
        <div className="flex justify-center mt-12 pb-8">
          <Link to="/formation/allemand/epreuves">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium flex items-center gap-2 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Retour aux épreuves allemandes
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default MethodologieTravailPage;
