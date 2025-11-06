import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Award, Code2, Database, Cpu, Shield, Zap, Binary, Network, Lock, BarChart3, Target, Brain, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Play, Target as TargetIcon, Brain as BrainIcon, AlertCircle } from 'lucide-react';

// Données des séances Bachelor 2 - Structure préparée pour contenu avancé
const bachelor2Sessions = [
  {
    id: 1,
    title: "Algorithmes avancés & complexité",
    content: "Analyse de complexité algorithmique (Big O, Ω, Θ), Algorithmes de tri avancés, Recherche et optimisation binaire",
    icon: TrendingUp,
    color: "bg-blue-600",
    hasCourse: false,
    hasExercises: false,
    hasQuiz: false,
    hasFlashcards: false,
    comingSoon: true
  },
  {
    id: 2,
    title: "Structures de données avancées",
    content: "Arbres binaires, arbres équilibrés (AVL, Rouge-Noir), Tables de hachage, Graphes et algorithmes associés",
    icon: Database,
    color: "bg-blue-600",
    hasCourse: false,
    hasExercises: false,
    hasQuiz: false,
    hasFlashcards: false,
    comingSoon: true
  },
  {
    id: 3,
    title: "Théorie des graphes",
    content: "Graphes orientés/acycliques, Algorithmes de parcours (DFS, BFS), Plus courts chemins (Dijkstra, Bellman-Ford)",
    icon: Network,
    color: "bg-blue-600",
    hasCourse: false,
    hasExercises: false,
    hasQuiz: false,
    hasFlashcards: false,
    comingSoon: true
  },
  {
    id: 4,
    title: "Cryptographie moderne",
    content: "Chiffrement asymétrique (RSA, ECC), Fonctions de hachage cryptographiques, Protocoles sécurisés (TLS/SSL)",
    icon: Lock,
    color: "bg-blue-600",
    hasCourse: false,
    hasExercises: false,
    hasQuiz: false,
    hasFlashcards: false,
    comingSoon: true
  },
  {
    id: 5,
    title: "Programmation orientée objet avancée",
    content: "Héritage multiple, polymorphisme, design patterns, Architecture logicielle et bonnes pratiques",
    icon: Code2,
    color: "bg-blue-600",
    hasCourse: false,
    hasExercises: false,
    hasQuiz: false,
    hasFlashcards: false,
    comingSoon: true
  },
  {
    id: 6,
    title: "Bases de données & SQL avancé",
    content: "Modélisation relationnelle, Optimisation de requêtes, Transactions, Indexation et performance",
    icon: Database,
    color: "bg-blue-600",
    hasCourse: false,
    hasExercises: false,
    hasQuiz: false,
    hasFlashcards: false,
    comingSoon: true
  },
  {
    id: 7,
    title: "Intelligence artificielle & apprentissage",
    content: "Introduction au machine learning, Algorithmes de classification, Réseaux de neurones de base",
    icon: Brain,
    color: "bg-blue-600",
    hasCourse: false,
    hasExercises: false,
    hasQuiz: false,
    hasFlashcards: false,
    comingSoon: true
  },
  {
    id: 8,
    title: "Sécurité informatique avancée",
    content: "Attaques réseau, Sécurité des applications web, Audit de sécurité, Outils de pentesting",
    icon: Shield,
    color: "bg-blue-600",
    hasCourse: false,
    hasExercises: false,
    hasQuiz: false,
    hasFlashcards: false,
    comingSoon: true
  },
  {
    id: 9,
    title: "Développement web full-stack",
    content: "Frameworks modernes (React, Node.js), API REST, Architecture microservices, Déploiement cloud",
    icon: Code2,
    color: "bg-blue-600",
    hasCourse: false,
    hasExercises: false,
    hasQuiz: false,
    hasFlashcards: false,
    comingSoon: true
  },
  {
    id: 10,
    title: "Mathématiques pour l'informatique avancée",
    content: "Théorie des nombres, Algèbre linéaire avancée, Probabilités continues, Statistiques inférentielles",
    icon: BarChart3,
    color: "bg-blue-600",
    hasCourse: false,
    hasExercises: false,
    hasQuiz: false,
    hasFlashcards: false,
    comingSoon: true
  },
  {
    id: 11,
    title: "Projet de fin d'études - Phase 1",
    content: "Conception et planification d'un projet informatique complet, Méthodologie agile, Gestion de projet",
    icon: Target,
    color: "bg-blue-600",
    hasCourse: false,
    hasExercises: false,
    hasQuiz: false,
    hasFlashcards: false,
    hasMiniProjet: true,
    comingSoon: true
  },
  {
    id: 12,
    title: "Projet de fin d'études - Phase 2",
    content: "Développement du projet, Tests et validation, Documentation technique et utilisateur",
    icon: Code2,
    color: "bg-blue-600",
    hasCourse: false,
    hasExercises: false,
    hasQuiz: false,
    hasFlashcards: false,
    hasMiniProjet: true,
    comingSoon: true
  },
  {
    id: 13,
    title: "Préparation professionnelle",
    content: "CV technique, Entretiens d'embauche, Certifications, Évolution de carrière en cybersécurité/informatique",
    icon: Award,
    color: "bg-blue-600",
    hasCourse: false,
    hasExercises: false,
    hasQuiz: false,
    hasFlashcards: false,
    comingSoon: true
  },
  {
    id: 14,
    title: "Évaluation Finale Bachelor 2",
    content: "Évaluation complète du programme Bachelor 2 : Projet final, QCM avancé, Entretien technique",
    icon: TargetIcon,
    color: "bg-blue-600",
    hasCourse: false,
    hasExercises: false,
    hasQuiz: false,
    hasFlashcards: false,
    comingSoon: true
  }
];

const SessionCard = ({ session }) => {
  return (
    <Card className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-200 h-full flex flex-col">
      <CardHeader className="text-center pb-4">
        <div className={`w-16 h-16 ${session.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg relative`}>
          <session.icon className="h-8 w-8 text-white" />
          <div className="absolute -top-1 -right-1 bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold border-2 border-blue-600 shadow-sm">
            {session.id}
          </div>
          {session.comingSoon && (
            <div className="absolute -bottom-1 -right-1 bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shadow-sm">
              <AlertCircle className="h-3 w-3" />
            </div>
          )}
        </div>
        <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50/50 text-center px-3 py-2 text-sm font-medium w-full flex items-center justify-center">
          Séance {session.id} : {session.title}
        </Badge>
        {session.comingSoon && (
          <Badge variant="outline" className="mt-2 text-orange-600 border-orange-200 bg-orange-50 text-xs">
            Bientôt disponible
          </Badge>
        )}
      </CardHeader>
      <CardContent className="pt-0 flex-1 flex flex-col">
        <p className="text-sm text-gray-600 mb-6 text-center leading-relaxed flex-1">
          {session.content}
        </p>
        <div className="space-y-3 mt-auto">
          {session.comingSoon ? (
            <Button disabled className="w-full bg-gray-300 text-gray-500 cursor-not-allowed">
              <AlertCircle className="mr-2 h-4 w-4" />
              En préparation
            </Button>
          ) : (
            <>
              {session.hasCourse && (
                <Button variant="default" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Cours
                </Button>
              )}

              {session.hasExercises && (
                <Button variant="outline" className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium transition-all duration-300 hover:scale-105">
                  <Play className="mr-2 h-4 w-4" />
                  Exercices
                </Button>
              )}

              {session.hasFlashcards && (
                <Button variant="outline" className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium transition-all duration-300 hover:scale-105">
                  <BrainIcon className="mr-2 h-4 w-4" />
                  Flashcards
                </Button>
              )}

              {session.hasQuiz && (
                <Button variant="outline" className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium transition-all duration-300 hover:scale-105">
                  <TargetIcon className="mr-2 h-4 w-4" />
                  QCM
                </Button>
              )}

              {session.hasMiniProjet && (
                <div className="space-y-2">
                  <Button variant="outline" className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium transition-all duration-300 hover:scale-105">
                    <Code2 className="mr-2 h-4 w-4" />
                    Projet - Phase {session.id === 11 ? '1' : '2'}
                  </Button>
                  <Button variant="outline" className="w-full border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-medium transition-all duration-300 hover:scale-105">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Méthodologie
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const OteriaBachelor2Page = () => {
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
            <Link to="/articles/oteria-cyber-school" className="hover:text-blue-700 transition-colors">
              OTERIA Cyber School
            </Link>
            <ChevronRight className="h-3 w-3 text-blue-400 mx-1" />
            <span className="text-blue-600 font-medium">Bachelor 2</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <Award className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-8 text-blue-900">Programme Bachelor 2</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            MATHÉMATIQUES AVANCÉES, ALGORITHMES ET CYBERSÉCURITÉ APPLIQUÉE
          </p>
          <Badge variant="outline" className="px-4 py-2 text-blue-600 border-blue-200 bg-blue-50">
            Niveau Avancé - 14 Séances
          </Badge>
        </div>

        {/* Note sur le contenu */}
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <AlertCircle className="h-5 w-5 text-orange-600" />
            <span className="font-semibold text-orange-800">Contenu en préparation</span>
          </div>
          <p className="text-sm text-orange-700">
            Le contenu détaillé du programme Bachelor 2 est actuellement en cours de développement.
            Les séances présentées correspondent à la structure pédagogique prévue.
          </p>
        </div>

        {/* Programme Principal */}
        <div className="mb-8">
          <div className="bg-blue-50 rounded-lg p-4 mb-4 text-center border border-blue-200">
            <h2 className="text-xl font-bold mb-2 text-blue-900 flex items-center justify-center gap-2">
              <div className="p-2 rounded-lg bg-blue-600 text-white">
                <Award className="h-5 w-5" />
              </div>
              Programme Bachelor 2 - Concepts Avancés
            </h2>
            <p className="text-sm text-blue-700">
              Approfondissement des concepts et applications pratiques avancées - 14 séances intensives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bachelor2Sessions.map((session) => (
              <SessionCard key={session.id} session={session} />
            ))}
          </div>
        </div>

        {/* Informations complémentaires */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 text-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-blue-800 mb-2">Performance</h3>
            <p className="text-sm text-blue-700">
              Optimisation algorithmique et analyse de complexité pour des applications haute performance
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 text-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-blue-800 mb-2">Sécurité Avancée</h3>
            <p className="text-sm text-blue-700">
              Techniques de cybersécurité de pointe et protection contre les menaces modernes
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 text-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code2 className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-blue-800 mb-2">Innovation</h3>
            <p className="text-sm text-blue-700">
              Exploration des technologies émergentes et développement de solutions innovantes
            </p>
          </div>
        </div>

        {/* Navigation entre programmes */}
        <div className="mt-12 text-center">
          <div className="flex justify-center gap-4">
            <Link to="/articles/oteria-cyber-school">
              <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50">
                ← Retour à OTERIA Cyber School
              </Button>
            </Link>
            <Link to="/articles/oteria-cyber-school/bachelor-1">
              <Button variant="outline" className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50">
                Bachelor 1
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OteriaBachelor2Page;
