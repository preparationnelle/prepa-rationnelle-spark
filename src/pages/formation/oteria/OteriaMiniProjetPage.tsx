import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ArrowLeft, Code2, Users, CheckSquare, Presentation, Target, Calendar, Award, FileText } from 'lucide-react';

const OteriaMiniProjetPage = () => {
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
            <span className="text-blue-600 font-medium">Séance 13 - Mini Projet</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <Code2 className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-blue-900">Séance 13 : Mini-projet – ateliers & répétitions</h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto mb-6">
            Le projet de groupe : articulation et déroulement
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
                  <span className="text-sm text-blue-600 font-medium mb-1">Type</span>
                  <span className="text-lg font-semibold text-blue-900">Mini Projet</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Durée</span>
                  <span className="text-lg font-semibold text-blue-900">Séance entière</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation entre séances */}
        <div className="flex justify-between items-center mb-8 max-w-4xl mx-auto">
          <Link
            to="/articles/oteria-cyber-school"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux séances
          </Link>
        </div>

        {/* Contenu du projet de groupe */}
        <div className="max-w-4xl mx-auto space-y-8">

          {/* Introduction */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            <p className="text-gray-700 leading-relaxed text-lg">
              Dans le cadre du cours de mathématiques, logique et algorithmique appliqués à l'informatique, les étudiants réalisent un projet de groupe qui constitue un fil conducteur tout au long du semestre. Ce projet vise à relier directement les notions théoriques étudiées en cours avec des applications concrètes et programmables en Python.
            </p>
          </div>

          {/* Objectifs pédagogiques */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-3">
              <Target className="h-6 w-6 text-blue-600" />
              Objectifs pédagogiques
            </h2>
            <p className="text-blue-800 mb-4">
              Ce travail collectif poursuit trois grands objectifs :
            </p>
            <ul className="space-y-2 text-blue-700">
              <li>• Approfondir la maîtrise des outils mathématiques (probabilités, récurrence, combinatoire, polynômes, arithmétique modulaire, matrices)</li>
              <li>• Développer des compétences pratiques en algorithmique et en programmation Python</li>
              <li>• Comprendre l'intérêt des mathématiques dans la vie réelle, notamment dans des domaines tels que la cybersécurité, la science des données, la finance, ou la modélisation scientifique</li>
            </ul>
            <p className="text-blue-800 mt-4">
              L'enjeu n'est donc pas uniquement d'apprendre des formules ou d'écrire juste du code, mais de donner du sens à ces savoirs en les reliant à des problématiques concrètes.
            </p>
          </div>

          {/* Organisation et calendrier */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-3">
              <Calendar className="h-6 w-6 text-blue-600" />
              Organisation et calendrier
            </h2>
            <p className="text-gray-700 mb-6">
              Le projet s'organise en plusieurs étapes intégrées au déroulement des séances.
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-blue-400 pl-4">
                <h3 className="font-semibold text-blue-900">Annonce et présentation (séance 1)</h3>
                <p className="text-gray-700 mt-1">
                  Dès la première séance, le projet est présenté aux étudiants. L'enseignant explique le cadre : chaque groupe (2 à 4 étudiants) devra choisir un sujet concret en lien avec le cours, produire un rapport écrit (5 pages) et présenter ses résultats lors d'un oral en fin de semestre. Des exemples de sujets leur sont proposés, mais les étudiants peuvent également suggérer leur propre problématique, à condition qu'elle respecte les critères : application réelle, fondement mathématique et implémentation Python possible.
                </p>
              </div>

              <div className="border-l-4 border-blue-400 pl-4">
                <h3 className="font-semibold text-blue-900">Formation des groupes et choix des sujets (séances 2-3)</h3>
                <p className="text-gray-700 mt-1">
                  Les étudiants se répartissent en groupes et commencent à explorer différentes pistes. Chaque équipe doit soumettre une idée de sujet qui sera validée, ajustée ou redirigée par l'enseignant afin de garantir la pertinence et la faisabilité du projet.
                </p>
              </div>

              <div className="border-l-4 border-blue-400 pl-4">
                <h3 className="font-semibold text-blue-900">Suivi régulier de l'avancement</h3>
                <p className="text-gray-700 mt-1">
                  À la fin de certaines séances, une dizaine de minutes est consacrée au suivi des projets. Les étudiants échangent sur leurs difficultés et leurs avancées, tandis que l'enseignant joue un rôle de guide : aide aux calculs mathématiques, validation de raisonnements, vérification d'extraits de code Python, conseils pour relier le projet à un usage concret.
                </p>
              </div>

              <div className="border-l-4 border-blue-400 pl-4">
                <h3 className="font-semibold text-blue-900">Atelier projet (séance 13)</h3>
                <p className="text-gray-700 mt-1">
                  Une séance entière est dédiée à la finalisation. Les groupes avancent sur leur rapport écrit, leur code et leur présentation orale. L'enseignant circule entre les équipes pour accompagner, clarifier les notions encore floues et s'assurer que chaque étudiant participe activement.
                </p>
              </div>

              <div className="border-l-4 border-blue-400 pl-4">
                <h3 className="font-semibold text-blue-900">Présentation finale (séance 14)</h3>
                <p className="text-gray-700 mt-1">
                  Chaque groupe dispose de 10 minutes pour présenter son travail. Tous les membres doivent prendre la parole. L'évaluation porte sur la clarté de l'introduction, la rigueur mathématique, la pertinence du code Python et la mise en avant d'applications concrètes. L'enseignant apporte un retour à la fois sur la solidité scientifique et sur la qualité pédagogique de la présentation.
                </p>
              </div>
            </div>
          </div>

          {/* Consignes de réalisation */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-3">
              <CheckSquare className="h-6 w-6 text-blue-600" />
              Consignes de réalisation
            </h2>
            <p className="text-blue-800 mb-4">
              Le projet comporte deux volets complémentaires :
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-2">Rapport écrit (maximum 5 pages par groupe)</h3>
                <p className="text-blue-800">
                  Le rapport doit présenter le problème choisi, détailler les outils mathématiques utilisés, inclure un extrait de code Python, illustrer les résultats par des exemples chiffrés et expliquer en quoi ce problème a un intérêt concret dans la vie réelle.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-2">Présentation orale (10 minutes)</h3>
                <p className="text-blue-800">
                  L'oral permet de mettre en valeur le travail accompli. Les critères d'évaluation sont : clarté du problème et de son intérêt, pertinence des explications mathématiques, qualité de la démonstration Python, capacité à montrer l'utilité concrète du sujet, et dynamisme de la présentation. Tous les membres du groupe doivent intervenir.
                </p>
              </div>
            </div>
          </div>

          {/* Critères d'évaluation */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-xl border-2 border-blue-300 p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-3">
              <Award className="h-6 w-6 text-blue-600" />
              Critères d'évaluation
            </h2>
            <p className="text-gray-700 mb-6 font-medium">
              L'évaluation du projet repose sur deux parties égales :
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-blue-200 rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-blue-900 mb-3 text-lg">Rapport écrit (50 points)</h3>
                <ul className="text-blue-800 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Pertinence du sujet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Rigueur des explications mathématiques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Qualité du code Python</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Lien avec des applications réelles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Qualité de la présentation et structure</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white border-2 border-blue-200 rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-blue-900 mb-3 text-lg">Présentation orale (50 points)</h3>
                <ul className="text-blue-800 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Clarté de l'introduction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Qualité de la vulgarisation mathématique</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Démonstration pratique en Python</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Pertinence des exemples concrets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Répartition équitable de la parole</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Dynamisme global</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Exemples de sujets */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-3">
              <Users className="h-6 w-6 text-blue-600" />
              Exemples de sujets proposés
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-blue-700">
                <li>• Probabilité de gagner au Loto : calcul exact et simulation Python</li>
                <li>• Paradoxe des anniversaires : probabilité de collisions et application aux fonctions de hachage</li>
                <li>• Problème du collectionneur de coupons : temps moyen pour compléter une collection</li>
                <li>• Paradoxe de Monty Hall : probabilités conditionnelles et prise de décision</li>
                <li>• Suite de Fibonacci et nombre d'or : applications à la nature et modélisation</li>
              </ul>
              <ul className="space-y-2 text-blue-700">
                <li>• Estimation de π par Monte-Carlo : méthode de simulation numérique</li>
                <li>• Croissance logistique d'une population : modélisation biologique et informatique</li>
                <li>• Chaînes de Markov : prévision météo simplifiée ou propagation d'un virus informatique</li>
                <li>• Algorithme de dichotomie : résolution numérique d'équations</li>
                <li>• Cryptographie modulaire : chiffrement affine ou RSA simplifié</li>
              </ul>
            </div>
          </div>

          {/* Rôle de l'enseignant */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-3">
              <Presentation className="h-6 w-6 text-blue-600" />
              Rôle de l'enseignant
            </h2>
            <p className="text-gray-700">
              Tout au long du projet, l'enseignant agit comme un accompagnateur. Son rôle est d'aider les groupes à choisir un sujet pertinent, de vérifier la rigueur mathématique, de soutenir la mise en œuvre Python et d'assurer une bonne dynamique de groupe où chacun participe activement.
            </p>
          </div>

        </div>

        {/* Navigation vers les ressources */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white border border-blue-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-blue-900 mb-4 text-center">
              Ressources pour le Mini Projet - Séance 13
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button className="w-full bg-orange-600 text-white px-4 py-3 rounded-lg cursor-default font-medium shadow-md">
                <Target className="h-5 w-5 mx-auto mb-2" />
                Mini Projet - Ateliers & Répétitions
              </button>
              <Link to="/formation/oteria/mini-projet-deroulement" className="group">
                <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium group-hover:scale-105 shadow-md hover:shadow-lg">
                  <FileText className="h-5 w-5 mx-auto mb-2" />
                  Déroulement du projet de groupe
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center bg-blue-50 p-6 rounded-lg">
          <Link to="/formation/oteria/recurrence-recursivite-qcm">
            <div className="text-blue-600 hover:text-blue-700">← Séance précédente</div>
          </Link>
          <div className="flex gap-3">
            <Link to="/formation/oteria/mini-projet-deroulement">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Guide méthodologique
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
  );
};

export default OteriaMiniProjetPage;
