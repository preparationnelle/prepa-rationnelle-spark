import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ArrowLeft, Code, BookOpen, Target, Calculator, Zap, BarChart3, Database } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';

const OteriaPythonReferencesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-teal-600">
            <Link to="/" className="flex items-center gap-1 hover:text-teal-700 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-teal-400 mx-1" />
            <Link to="/articles" className="hover:text-teal-700 transition-colors">
              Niveau
            </Link>
            <ChevronRight className="h-3 w-3 text-teal-400 mx-1" />
            <Link to="/articles/oteria-cyber-school" className="hover:text-teal-700 transition-colors">
              OTERIA Cyber School
            </Link>
            <ChevronRight className="h-3 w-3 text-teal-400 mx-1" />
            <span className="text-teal-600 font-medium">Références Python</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4 text-teal-900">Références Python</h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto mb-6">
            Guide complet des fonctions et modules NumPy, Matplotlib essentiels pour le programme Bachelor 1
          </p>

          {/* Informations de référence */}
          <div className="max-w-xl mx-auto mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Modules</span>
                  <span className="text-xl font-bold text-blue-900">10</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Fonctions</span>
                  <span className="text-xl font-bold text-blue-900">50+</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 justify-center flex-wrap">
            <Link to="/articles/oteria-cyber-school">
              <button className="inline-flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Retour au programme
              </button>
            </Link>
          </div>
        </div>

        {/* Section 1: Importation des modules */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Code className="h-6 w-6" />
              Importation des modules
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                <code className="text-blue-700 font-semibold">import numpy as np</code>
                <p className="text-sm mt-1">NumPy principal pour le calcul mathématique</p>
              </div>
              <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                <code className="text-blue-700 font-semibold">import numpy.linalg as al</code>
                <p className="text-sm mt-1">Sous-module algèbre linéaire</p>
              </div>
              <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                <code className="text-blue-700 font-semibold">import numpy.random as rd</code>
                <p className="text-sm mt-1">Génération de nombres aléatoires</p>
              </div>
              <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                <code className="text-blue-700 font-semibold">import matplotlib.pyplot as plt</code>
                <p className="text-sm mt-1">Tracé de courbes et graphiques</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Fonctions mathématiques de base */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Calculator className="h-6 w-6" />
              Fonctions mathématiques de base
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                <code className="text-blue-700 font-semibold">np.abs()</code>
                <p className="text-xs mt-1">Valeur absolue</p>
              </div>
              <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                <code className="text-blue-700 font-semibold">np.cos()</code>
                <p className="text-xs mt-1">Cosinus</p>
              </div>
              <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                <code className="text-blue-700 font-semibold">np.sin()</code>
                <p className="text-xs mt-1">Sinus</p>
              </div>
              <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                <code className="text-blue-700 font-semibold">np.log()</code>
                <p className="text-xs mt-1">Logarithme népérien</p>
              </div>
              <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                <code className="text-blue-700 font-semibold">np.exp()</code>
                <p className="text-xs mt-1">Exponentielle</p>
              </div>
              <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                <code className="text-blue-700 font-semibold">np.sqrt()</code>
                <p className="text-xs mt-1">Racine carrée</p>
              </div>
              <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                <code className="text-blue-700 font-semibold">np.floor()</code>
                <p className="text-xs mt-1">Partie entière</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3: Constantes */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Target className="h-6 w-6" />
              Constantes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                <code className="text-blue-700 font-semibold">np.pi</code>
                <p className="text-sm mt-1">π (pi)</p>
              </div>
              <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                <code className="text-blue-700 font-semibold">np.e</code>
                <p className="text-sm mt-1">e (nombre d'Euler)</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 4: Création de vecteurs */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Database className="h-6 w-6" />
              Création de vecteurs
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                <code className="text-blue-700 font-semibold text-xs">np.array([u1,...,un])</code>
                <p className="text-xs mt-1">Créer un vecteur-ligne</p>
              </div>
              <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                <code className="text-blue-700 font-semibold">np.arange(a,b,r)</code>
                <p className="text-xs mt-1">Progression arithmétique de raison r</p>
              </div>
              <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                <code className="text-blue-700 font-semibold">np.linspace(a,b,n)</code>
                <p className="text-xs mt-1">n éléments équirépartis de a à b</p>
              </div>
              <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                <code className="text-blue-700 font-semibold">np.ones(n)</code>
                <p className="text-xs mt-1">Vecteur de n éléments égaux à 1</p>
              </div>
              <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                <code className="text-blue-700 font-semibold">np.zeros(n)</code>
                <p className="text-xs mt-1">Vecteur de n éléments égaux à 0</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 5: Création de matrices */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Database className="h-6 w-6" />
              Création de matrices
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                <code className="text-blue-700 font-semibold text-sm">np.array([[a1,1,...,a1,p],...,[an,1,...,an,p]])</code>
                <p className="text-sm mt-1">Création d'une matrice</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                  <code className="text-blue-700 font-semibold">np.ones((n,p))</code>
                  <p className="text-xs mt-1">Matrice n×p de 1</p>
                </div>
                <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                  <code className="text-blue-700 font-semibold">np.zeros((n,p))</code>
                  <p className="text-xs mt-1">Matrice n×p de 0</p>
                </div>
                <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                  <code className="text-blue-700 font-semibold">np.eye(n,p)</code>
                  <p className="text-xs mt-1">Matrice avec 1 sur la diagonale</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 6: Opérations sur matrices/vecteurs */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Zap className="h-6 w-6" />
              Opérations sur matrices/vecteurs
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                <code className="text-blue-700 font-semibold">np.shape(A)</code>
                <p className="text-xs mt-1">Dimensions de la matrice A</p>
              </div>
              <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                <code className="text-blue-700 font-semibold">np.dot(A,B)</code>
                <p className="text-xs mt-1">Produit matriciel</p>
              </div>
              <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                <code className="text-blue-700 font-semibold">np.transpose(A)</code>
                <p className="text-xs mt-1">Transposée de A</p>
              </div>
              <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                <code className="text-blue-700 font-semibold">np.sum(A)</code>
                <p className="text-xs mt-1">Somme de tous les éléments</p>
              </div>
              <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                <code className="text-blue-700 font-semibold">np.mean(A)</code>
                <p className="text-xs mt-1">Moyenne de tous les éléments</p>
              </div>
              <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                <code className="text-blue-700 font-semibold">np.min(A)</code>
                <p className="text-xs mt-1">Minimum des éléments</p>
              </div>
              <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                <code className="text-blue-700 font-semibold">np.max(A)</code>
                <p className="text-xs mt-1">Maximum des éléments</p>
              </div>
              <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                <code className="text-blue-700 font-semibold">np.cumsum(A)</code>
                <p className="text-xs mt-1">Sommes cumulées</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 7: Algèbre linéaire */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Calculator className="h-6 w-6" />
              Algèbre linéaire
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                <code className="text-blue-700 font-semibold">al.inv(A)</code>
                <p className="text-xs mt-1">Inverse de la matrice A</p>
              </div>
              <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                <code className="text-blue-700 font-semibold">al.matrix_rank(A)</code>
                <p className="text-xs mt-1">Rang de la matrice A</p>
              </div>
              <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                <code className="text-blue-700 font-semibold">al.matrix_power(A,n)</code>
                <p className="text-xs mt-1">Puissance n-ième de A</p>
              </div>
              <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                <code className="text-blue-700 font-semibold">al.solve(A,b)</code>
                <p className="text-xs mt-1">Résolution du système Ax = b</p>
              </div>
              <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                <code className="text-blue-700 font-semibold">al.eig(A)</code>
                <p className="text-xs mt-1">Valeurs propres et vecteurs propres</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 8: Variables aléatoires */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Target className="h-6 w-6" />
              Variables aléatoires
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                <code className="text-blue-700 font-semibold">rd.uniform(a,b)</code>
                <p className="text-xs mt-1">Loi uniforme sur [a,b]</p>
              </div>
              <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                <code className="text-blue-700 font-semibold">rd.randint(a,b)</code>
                <p className="text-xs mt-1">Entier uniforme sur [a,b-1]</p>
              </div>
              <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                <code className="text-blue-700 font-semibold">rd.binomial(n,p)</code>
                <p className="text-xs mt-1">Loi binomiale B(n,p)</p>
              </div>
              <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                <code className="text-blue-700 font-semibold">rd.geometric(p)</code>
                <p className="text-xs mt-1">Loi géométrique de paramètre p</p>
              </div>
              <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                <code className="text-blue-700 font-semibold">rd.exponential(1/lambda)</code>
                <p className="text-xs mt-1">Loi exponentielle</p>
              </div>
              <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                <code className="text-blue-700 font-semibold">rd.normal(m,sigma)</code>
                <p className="text-xs mt-1">Loi normale N(m,σ²)</p>
              </div>
              <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                <code className="text-blue-700 font-semibold">rd.poisson(lambda)</code>
                <p className="text-xs mt-1">Loi de Poisson P(λ)</p>
              </div>
              <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                <code className="text-blue-700 font-semibold">rd.gamma(nu)</code>
                <p className="text-xs mt-1">Loi gamma de paramètre ν</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 9: Représentations graphiques */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <BarChart3 className="h-6 w-6" />
              Représentations graphiques
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                <code className="text-blue-700 font-semibold">plt.plot(x,y)</code>
                <p className="text-xs mt-1">Tracer une courbe</p>
              </div>
              <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                <code className="text-blue-700 font-semibold">plt.plot(x,y,'x')</code>
                <p className="text-xs mt-1">Nuage de points avec des croix</p>
              </div>
              <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                <code className="text-blue-700 font-semibold">plt.show()</code>
                <p className="text-xs mt-1">Afficher le graphique</p>
              </div>
              <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                <code className="text-blue-700 font-semibold">plt.figure(n)</code>
                <p className="text-xs mt-1">Créer une nouvelle figure</p>
              </div>
              <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                <code className="text-blue-700 font-semibold">plt.clf()</code>
                <p className="text-xs mt-1">Effacer le contenu</p>
              </div>
              <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                <code className="text-blue-700 font-semibold">plt.axis('scaled')</code>
                <p className="text-xs mt-1">Repère orthonormé</p>
              </div>
              <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                <code className="text-blue-700 font-semibold">plt.grid()</code>
                <p className="text-xs mt-1">Ajouter une grille</p>
              </div>
              <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                <code className="text-blue-700 font-semibold">plt.xlabel('texte')</code>
                <p className="text-xs mt-1">Légende axe x</p>
              </div>
              <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                <code className="text-blue-700 font-semibold">plt.ylabel('texte')</code>
                <p className="text-xs mt-1">Légende axe y</p>
              </div>
              <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                <code className="text-blue-700 font-semibold">plt.title('texte')</code>
                <p className="text-xs mt-1">Titre du graphique</p>
              </div>
              <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                <code className="text-blue-700 font-semibold">plt.hist(data)</code>
                <p className="text-xs mt-1">Histogramme</p>
              </div>
              <div className="bg-white border-l-4 border-blue-400 p-3 rounded">
                <code className="text-blue-700 font-semibold">plt.scatter(x,y)</code>
                <p className="text-xs mt-1">Nuage de points</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 10: Conseils d'utilisation */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <BookOpen className="h-6 w-6" />
              Conseils d'utilisation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 mb-3">Bonnes pratiques :</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• <strong>Importez toujours</strong> numpy as np en début de programme</li>
                <li>• <strong>Vérifiez les dimensions</strong> des matrices avec np.shape()</li>
                <li>• <strong>Utilisez des graines</strong> (np.random.seed()) pour la reproductibilité</li>
                <li>• <strong>Documentez vos graphiques</strong> avec des légendes et titres</li>
                <li>• <strong>Testez vos fonctions</strong> avec des exemples simples</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h4 className="font-semibold text-green-900 mb-3">Erreurs communes à éviter :</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Confusion entre <strong>*</strong> (produit terme à terme) et <strong>np.dot()</strong> (produit matriciel)</li>
                <li>• Oublier que <strong>np.random</strong> génère des nombres pseudo-aléatoires</li>
                <li>• Ne pas gérer les <strong>dimensions incompatibles</strong> dans les opérations</li>
                <li>• Oublier <strong>plt.show()</strong> pour afficher les graphiques</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center">
          <div className="flex gap-3 justify-center flex-wrap">
            <Link to="/formation/oteria/python-bases-qcm">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Target className="h-4 w-4" />
                Testez vos connaissances
              </button>
            </Link>
            <Link to="/articles/oteria-cyber-school">
              <button className="inline-flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Retour au programme
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OteriaPythonReferencesPage;
