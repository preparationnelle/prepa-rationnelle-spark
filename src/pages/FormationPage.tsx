
import React from 'react';
import { VideoAndIntro } from '@/components/VideoAndIntro';
import { PythonQuizGenerator } from '@/components/python/PythonQuizGenerator';
import { PythonAccessGate } from '@/components/python/PythonAccessGate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Play, ArrowRight, Target, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';

const FormationPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent mb-4">
            Formation Python - Prépa ECG
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Maîtrisez Python pour les mathématiques en prépa ECG. 
            Toutes les commandes, fonctions et bibliothèques au programme officiel.
          </p>
        </div>

        {/* Modules de cours avec contrôle d'accès */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">MODULES DE COURS</h2>
          
          <PythonAccessGate>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Module 1 - Les Fondamentaux */}
              <Card className="hover:shadow-lg transition-shadow border border-blue-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                    <div>
                      <CardTitle className="text-lg">Module 1</CardTitle>
                      <Badge variant="secondary" className="mt-1">Disponible</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold text-blue-700 mb-2">Les Fondamentaux</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Variables, types, opérateurs, fonctions et structures de contrôle. 
                    Les bases essentielles pour débuter en Python.
                  </p>
                  <ul className="text-sm space-y-1 mb-4">
                    <li>• Types fondamentaux (int, float, bool, str)</li>
                    <li>• Opérateurs numériques</li>
                    <li>• Fonctions et structures de contrôle</li>
                    <li>• Listes et boucles</li>
                  </ul>
                  <Link to="/formation/python-fondamentaux">
                    <Button className="w-full">
                      <Play className="h-4 w-4 mr-2" />
                      Commencer le module
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Module 2 - Les Matrices NumPy */}
              <Card className="hover:shadow-lg transition-shadow border border-green-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-6 w-6 text-green-600" />
                    <div>
                      <CardTitle className="text-lg">Module 2</CardTitle>
                      <Badge variant="secondary" className="mt-1 bg-green-100 text-green-700">Disponible</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold text-green-700 mb-2">Les Matrices NumPy</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Introduction à NumPy pour le calcul scientifique et les opérations matricielles.
                    Création, manipulation et analyse de matrices.
                  </p>
                  <ul className="text-sm space-y-1 mb-4">
                    <li>• Création de matrices et vecteurs</li>
                    <li>• Opérations matricielles</li>
                    <li>• Fonctions d'analyse statistique</li>
                    <li>• Applications pratiques</li>
                  </ul>
                  <Link to="/formation/python-matrices">
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      <Play className="h-4 w-4 mr-2" />
                      Commencer le module
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Module 3 - Analyse */}
              <Card className="hover:shadow-lg transition-shadow border border-blue-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                    <div>
                      <CardTitle className="text-lg">Module 3</CardTitle>
                      <Badge variant="secondary" className="mt-1 bg-blue-100 text-blue-700">Disponible</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold text-blue-700 mb-2">Analyse</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Méthodes d'analyse numérique : calcul de sommes et produits, 
                    étude des suites, et approximation par dichotomie.
                  </p>
                  <ul className="text-sm space-y-1 mb-4">
                    <li>• Calcul de sommes et produits finis</li>
                    <li>• Suites définies par récurrence</li>
                    <li>• Méthode de dichotomie</li>
                    <li>• Visualisation avec Matplotlib</li>
                  </ul>
                  <Link to="/formation/python-analyse">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <Play className="h-4 w-4 mr-2" />
                      Commencer le module
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Module 4 - Probabilités */}
              <Card className="hover:shadow-lg transition-shadow border border-purple-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-6 w-6 text-purple-600" />
                    <div>
                      <CardTitle className="text-lg">Module 4</CardTitle>
                      <Badge variant="secondary" className="mt-1 bg-purple-100 text-purple-700">Disponible</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold text-purple-700 mb-2">Probabilités</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Simulation et statistiques avec NumPy & Matplotlib. 
                    Lois de probabilité, méthode de Monte-Carlo et visualisations.
                  </p>
                  <ul className="text-sm space-y-1 mb-4">
                    <li>• Génération aléatoire et lois discrètes</li>
                    <li>• Statistiques descriptives</li>
                    <li>• Méthode de Monte-Carlo</li>
                    <li>• Graphiques statistiques</li>
                  </ul>
                  <Link to="/formation/python-probabilites">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      <Play className="h-4 w-4 mr-2" />
                      Commencer le module
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Module 5 - À venir */}
              <Card className="opacity-60">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-6 w-6 text-gray-400" />
                    <div>
                      <CardTitle className="text-lg text-gray-600">Module 5</CardTitle>
                      <Badge variant="outline" className="mt-1">Bientôt disponible</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold text-gray-600 mb-2">Visualisation avec Matplotlib</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Créer des graphiques et visualisations de données avec Matplotlib.
                  </p>
                  <Button disabled className="w-full">
                    Prochainement
                  </Button>
                </CardContent>
              </Card>

            </div>
          </PythonAccessGate>
        </div>

        {/* Modules d'exercices */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">MODULES D'EXERCICES</h2>
          
          <PythonAccessGate>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Module 1 - Exercices Fondamentaux */}
              <Card className="hover:shadow-lg transition-shadow border border-blue-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Calculator className="h-6 w-6 text-blue-600" />
                    <div>
                      <CardTitle className="text-lg">Module 1</CardTitle>
                      <Badge variant="secondary" className="mt-1 bg-blue-100 text-blue-700">Disponible</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold text-blue-700 mb-2">Exercices - Fondamentaux</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Exercices pratiques sur les bases de Python : variables, 
                    types, opérateurs et structures de contrôle.
                  </p>
                  <ul className="text-sm space-y-1 mb-4">
                    <li>• Variables et types de données</li>
                    <li>• Opérateurs et expressions</li>
                    <li>• Structures conditionnelles</li>
                    <li>• Boucles et fonctions</li>
                  </ul>
                  <Link to="/formation/python-fondamentaux-exercices">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <Calculator className="h-4 w-4 mr-2" />
                      Faire les exercices
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Module 2 - Exercices Matrices */}
              <Card className="hover:shadow-lg transition-shadow border border-green-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Calculator className="h-6 w-6 text-green-600" />
                    <div>
                      <CardTitle className="text-lg">Module 2</CardTitle>
                      <Badge variant="secondary" className="mt-1 bg-green-100 text-green-700">Disponible</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold text-green-700 mb-2">Exercices - Matrices</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Exercices pratiques sur NumPy et les matrices : 
                    création, manipulation et opérations matricielles.
                  </p>
                  <ul className="text-sm space-y-1 mb-4">
                    <li>• Création de matrices NumPy</li>
                    <li>• Opérations matricielles</li>
                    <li>• Indexation et slicing</li>
                    <li>• Fonctions statistiques</li>
                  </ul>
                  <Link to="/formation/python-matrices-exercices">
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      <Calculator className="h-4 w-4 mr-2" />
                      Faire les exercices
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Module 3 - Exercices Analyse */}
              <Card className="hover:shadow-lg transition-shadow border border-amber-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Calculator className="h-6 w-6 text-amber-600" />
                    <div>
                      <CardTitle className="text-lg">Module 3</CardTitle>
                      <Badge variant="secondary" className="mt-1 bg-amber-100 text-amber-700">Disponible</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold text-amber-700 mb-2">Exercices - Analyse</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Exercices pratiques sur l'analyse numérique : sommes, produits, 
                    vecteurs et calculs avec NumPy.
                  </p>
                  <ul className="text-sm space-y-1 mb-4">
                    <li>• Création de vecteurs avec NumPy</li>
                    <li>• Calcul de sommes finies</li>
                    <li>• Suites récurrentes</li>
                    <li>• Corrigés détaillés</li>
                  </ul>
                  <Link to="/formation/python-analyse-exercices">
                    <Button className="w-full bg-amber-600 hover:bg-amber-700">
                      <Calculator className="h-4 w-4 mr-2" />
                      Faire les exercices
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Module 4 - Exercices Probabilités */}
              <Card className="hover:shadow-lg transition-shadow border border-purple-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Calculator className="h-6 w-6 text-purple-600" />
                    <div>
                      <CardTitle className="text-lg">Module 4</CardTitle>
                      <Badge variant="secondary" className="mt-1 bg-purple-100 text-purple-700">Disponible</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold text-purple-700 mb-2">Exercices - Probabilités</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Exercices pratiques sur les probabilités et les statistiques 
                    avec NumPy et les méthodes de Monte-Carlo.
                  </p>
                  <ul className="text-sm space-y-1 mb-4">
                    <li>• Génération aléatoire</li>
                    <li>• Lois de probabilité</li>
                    <li>• Méthodes de Monte-Carlo</li>
                    <li>• Visualisations statistiques</li>
                  </ul>
                  <Link to="/formation/python-probabilites-exercices">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      <Calculator className="h-4 w-4 mr-2" />
                      Faire les exercices
                    </Button>
                  </Link>
                </CardContent>
              </Card>

            </div>
          </PythonAccessGate>
        </div>

        {/* Accès rapide à la référence */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">Référence Python ECG</h3>
                  <p className="text-blue-700">
                    Accédez rapidement à toutes les commandes Python au programme
                  </p>
                </div>
                <Link to="/python-reference">
                  <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100">
                    Voir la référence
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Lien vers l'article Python */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="h-6 w-6 text-orange-600" />
                    <Badge variant="destructive" className="bg-orange-600 text-white">
                      +3 à 5 points sûrs
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-orange-800 mb-2">
                    Pourquoi travailler Python en prépa ECG ?
                  </h3>
                  <p className="text-orange-700">
                    Découvrez l'importance stratégique de Python aux concours et comment maximiser vos points
                  </p>
                </div>
                <Link to="/pourquoi-python-prepa-ecg">
                  <Button variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-100">
                    Lire l'article
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Video and Intro Section */}
        <VideoAndIntro />

        {/* Quiz Generator Section */}
        <div className="mt-16">
          <PythonQuizGenerator />
        </div>
      </div>
    </div>
  );
};

export default FormationPage;
