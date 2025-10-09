import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ArrowLeft, Users, Target, Calendar, CheckSquare, Presentation, Lightbulb, Search, FileText, Cog, Award } from 'lucide-react';

const OteriaMiniProjetDeroulementPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-blue-600">
            <Link to="/" className="flex items-center gap-1 hover:text-blue-700 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-blue-400 mx-1" />
            <Link to="/articles" className="hover:text-blue-700 transition-colors">
              Niveau
            </Link>
            <ChevronRight className="h-3 w-3 text-blue-400 mx-1" />
            <Link to="/articles/oteria-cyber-school" className="hover:text-blue-700 transition-colors">
              OTERIA Cyber School
            </Link>
            <ChevronRight className="h-3 w-3 text-blue-400 mx-1" />
            <span className="text-blue-600 font-medium">Séance 13 - Déroulement du projet</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-blue-900">Séance 13 : Déroulement du projet de groupe</h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto mb-6">
            Guide méthodologique pour mener à bien votre projet de groupe
          </p>

          {/* Informations de séance */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Numéro de séance</span>
                  <span className="text-2xl font-bold text-blue-900">13</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Durée estimée</span>
                  <span className="text-2xl font-bold text-blue-900">2h</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Niveau</span>
                  <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    🟢 Débutant
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation vers autres ressources */}
          <div className="max-w-4xl mx-auto mb-6">
            <div className="bg-white border border-blue-200 rounded-lg p-6 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link to="/formation/oteria/mini-projet" className="group">
                  <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium group-hover:scale-105 shadow-md hover:shadow-lg">
                    <Target className="h-5 w-5 mx-auto mb-2" />
                    Mini Projet - Ateliers
                  </button>
                </Link>
                <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg cursor-default font-medium shadow-md">
                  <FileText className="h-5 w-5 mx-auto mb-2" />
                  Déroulement du projet
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contenu du guide méthodologique */}
        <div className="max-w-4xl mx-auto">

          {/* Section 1: Choix de la thématique */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-900 font-bold text-lg">1</span>
              </div>
              <h2 className="text-2xl font-bold text-blue-900">Choix de la thématique</h2>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5" />
                  Quels sont les domaines ou sujets qui nous intéressent tous ?
                </h3>
                <p className="text-blue-800">
                  Discutez des centres d'intérêt de chaque membre du groupe. Identifiez les thèmes communs
                  qui suscitent l'enthousiasme de tous. Un projet réussi commence par une motivation partagée.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  En quoi ce sujet est pertinent par rapport au cours ou à nos objectifs ?
                </h3>
                <p className="text-blue-800">
                  Vérifiez l'alignement avec le programme d'études et les objectifs pédagogiques.
                  Le sujet doit permettre d'appliquer les concepts vus en cours.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Est-il faisable dans le temps et avec les ressources disponibles ?
                </h3>
                <p className="text-blue-800">
                  Évaluez la complexité technique, les ressources nécessaires (matériel, logiciels, données)
                  et le temps disponible pour la réalisation.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <Cog className="h-5 w-5" />
                  Apporte-t-il une dimension originale (innovation, approche différente) ?
                </h3>
                <p className="text-blue-800">
                  Cherchez ce qui rendra votre projet unique : nouvelle approche méthodologique,
                  angle original, innovation technique, ou perspective inédite.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Quels sont les résultats attendus (rapport, présentation, prototype…) ?
                </h3>
                <p className="text-blue-800">
                  Définissez clairement les livrables : rapport écrit, présentation orale, prototype fonctionnel,
                  démonstration, analyse de données, etc.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Recherche et cadrage */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-900 font-bold text-lg">2</span>
              </div>
              <h2 className="text-2xl font-bold text-blue-900">Recherche et cadrage</h2>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Quelles informations devons-nous collecter (sources, données, études) ?
                </h3>
                <p className="text-blue-800">
                  Identifiez les sources fiables : articles scientifiques, rapports officiels, bases de données,
                  enquêtes, interviews d'experts, etc.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Quelles sont les références ou projets similaires déjà existants ?
                </h3>
                <p className="text-blue-800">
                  Effectuez une revue de littérature et d'exemples similaires. Analysez ce qui a fonctionné
                  ou échoué dans des projets comparables.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Quel problème voulons-nous résoudre ou quelle question voulons-nous explorer ?
                </h3>
                <p className="text-blue-800">
                  Formulez clairement la problématique centrale. Définissez les objectifs spécifiques
                  et les questions de recherche.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <Cog className="h-5 w-5" />
                  Quels outils allons-nous utiliser (logiciels, bibliographie, enquêtes) ?
                </h3>
                <p className="text-blue-800">
                  Sélectionnez les outils adaptés : logiciels d'analyse, plateformes de collaboration,
                  méthodes de collecte de données, frameworks de développement, etc.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <CheckSquare className="h-5 w-5" />
                  Quels critères permettront de juger la qualité de notre travail ?
                </h3>
                <p className="text-blue-800">
                  Définissez des critères d'évaluation : rigueur scientifique, originalité, faisabilité,
                  impact potentiel, qualité de présentation, etc.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Planification et organisation */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-900 font-bold text-lg">3</span>
              </div>
              <h2 className="text-2xl font-bold text-blue-900">Planification et organisation</h2>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Quel est notre calendrier (étapes clés, deadlines intermédiaires) ?
                </h3>
                <p className="text-blue-800">
                  Établissez un planning réaliste avec des jalons intermédiaires. Prévoyez du temps
                  pour les imprévus et les révisions.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Comment allons-nous suivre l'avancement (tableau Trello, Gantt, réunions) ?
                </h3>
                <p className="text-blue-800">
                  Choisissez des outils de suivi adaptés : tableaux Kanban, diagrammes de Gantt,
                  points hebdomadaires, rapports d'avancement.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Qui est responsable de quoi (rédaction, recherche, oral, design…) ?
                </h3>
                <p className="text-blue-800">
                  Attribuez clairement les rôles et responsabilités. Assurez-vous que chaque membre
                  contribue de manière équilibrée au projet.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <CheckSquare className="h-5 w-5" />
                  Comment valider les étapes avant de passer à la suivante ?
                </h3>
                <p className="text-blue-800">
                  Définissez des critères de validation pour chaque étape : relecture croisée,
                  validation par l'encadrant, tests de qualité, etc.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Avons-nous prévu un plan B si un élément bloque ?
                </h3>
                <p className="text-blue-800">
                  Anticipez les risques et préparez des solutions alternatives : changement de méthode,
                  réduction du périmètre, réaffectation des ressources, etc.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: Réalisation */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-900 font-bold text-lg">4</span>
              </div>
              <h2 className="text-2xl font-bold text-blue-900">Réalisation</h2>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <CheckSquare className="h-5 w-5" />
                  Le travail respecte-t-il le plan et le cahier des charges ?
                </h3>
                <p className="text-blue-800">
                  Vérifiez régulièrement l'alignement avec les spécifications initiales.
                  Adaptez le plan si nécessaire tout en maintenant la cohérence globale.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Nos décisions sont-elles justifiées par des sources ou arguments solides ?
                </h3>
                <p className="text-blue-800">
                  Chaque choix méthodologique ou décision doit être étayé par des références
                  scientifiques ou des arguments rationnels.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Est-ce que la charge de travail est équitablement répartie ?
                </h3>
                <p className="text-blue-800">
                  Surveillez la contribution de chaque membre et rééquilibrez si nécessaire.
                  La réussite du groupe dépend de l'engagement de tous.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Comment testons-nous et corrigeons-nous nos livrables ?
                </h3>
                <p className="text-blue-800">
                  Mettez en place des procédures de test et de relecture : tests fonctionnels,
                  relecture croisée, validation par des pairs, corrections itératives.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5: Finalisation et présentation */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-900 font-bold text-lg">5</span>
              </div>
              <h2 className="text-2xl font-bold text-blue-900">Finalisation et présentation</h2>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Avons-nous respecté le format demandé (longueur, support, délai) ?
                </h3>
                <p className="text-blue-800">
                  Vérifiez la conformité aux spécifications : longueur du rapport, format des slides,
                  délais de remise, normes de présentation.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Notre projet est-il clair et compréhensible pour un public extérieur ?
                </h3>
                <p className="text-blue-800">
                  Testez la présentation sur des personnes extérieures au projet. Éliminez le jargon
                  technique non expliqué et clarifiez les concepts complexes.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <CheckSquare className="h-5 w-5" />
                  Avons-nous vérifié la cohérence entre toutes les parties (forme et fond) ?
                </h3>
                <p className="text-blue-800">
                  Assurez-vous de la cohérence interne : terminologie uniforme, style visuel cohérent,
                  arguments logiques, absence de contradictions.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <Presentation className="h-5 w-5" />
                  Qui présente quoi à l'oral, et avec quel support (slides, démo) ?
                </h3>
                <p className="text-blue-800">
                  Préparez la répartition des rôles pour l'oral : qui présente quelle partie,
                  qui gère les questions, qui s'occupe des démonstrations techniques.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5" />
                  Quelles questions anticipons-nous du jury/professeur ?
                </h3>
                <p className="text-blue-800">
                  Préparez-vous aux questions critiques : méthodologie, limites du travail,
                  perspectives d'amélioration, implications pratiques, questions techniques.
                </p>
              </div>
            </div>
          </div>

          {/* Checklist finale */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-lg p-8 mb-8 border-2 border-blue-300">
            <div className="flex items-center gap-3 mb-6">
              <Award className="h-8 w-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-blue-900">Checklist de validation finale</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckSquare className="h-5 w-5 text-blue-600" />
                  <span className="text-blue-800">Toutes les sources sont citées</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckSquare className="h-5 w-5 text-blue-600" />
                  <span className="text-blue-800">Le rapport est relu et corrigé</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckSquare className="h-5 w-5 text-blue-600" />
                  <span className="text-blue-800">Les slides sont préparés</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckSquare className="h-5 w-5 text-blue-600" />
                  <span className="text-blue-800">Les démos fonctionnent</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckSquare className="h-5 w-5 text-blue-600" />
                  <span className="text-blue-800">L'équipe maîtrise le sujet</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckSquare className="h-5 w-5 text-blue-600" />
                  <span className="text-blue-800">Le temps de présentation est respecté</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckSquare className="h-5 w-5 text-blue-600" />
                  <span className="text-blue-800">Les questions sont anticipées</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckSquare className="h-5 w-5 text-blue-600" />
                  <span className="text-blue-800">L'ambiance du groupe est positive</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center bg-blue-50 p-6 rounded-lg">
            <Link to="/formation/oteria/recurrence-recursivite-qcm">
              <div className="text-blue-600 hover:text-blue-700">← Séance précédente</div>
            </Link>
            <div className="flex gap-3">
              <Link to="/formation/oteria/mini-projet">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Mini Projet - Ateliers
                </button>
              </Link>
              <Link to="/articles/oteria-cyber-school">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Retour au programme
                </button>
              </Link>
            </div>
            <div className="text-blue-600 font-medium">Fin du programme →</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OteriaMiniProjetDeroulementPage;
