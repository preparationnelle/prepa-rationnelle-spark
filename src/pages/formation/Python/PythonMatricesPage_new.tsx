import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calculator, CheckCircle, Target, Lightbulb, BookOpen, Code, Database, Grid3X3, BarChart3 } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { PythonModuleQuiz } from '@/components/python/PythonModuleQuiz';
import { matricesQuizQuestions } from '@/data/pythonQuizQuestions';
import PythonModuleLayout from '@/components/formation/PythonModuleLayout';
import ModuleNavigationCards from '@/components/formation/ModuleNavigationCards';

const PythonMatricesPage = () => {
  return (
    <PythonModuleLayout>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-lg bg-blue-100 text-blue-700 border border-blue-300">
            <Calculator className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              Module 1 - Les Matrices NumPy
            </h1>
            <Badge variant="secondary" className="mt-3 bg-blue-100 text-blue-800 border border-blue-300 font-semibold px-4 py-2">Module 1</Badge>
          </div>
        </div>
      </div>

      {/* Objectifs du module */}
      <Card className="border-0 shadow-lg mb-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
            <Target className="h-6 w-6" />
            Objectifs du module
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">Maîtriser la création et manipulation de matrices avec NumPy.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">Comprendre l'indexation et le slicing des matrices.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">Effectuer des opérations matricielles essentielles.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">Utiliser les fonctions NumPy pour l'analyse de données.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">Appliquer NumPy dans des contextes pratiques de prépa ECG.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notion 1 - Introduction à NumPy */}
      <Card className="border-0 shadow-lg mb-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
            <Lightbulb className="h-6 w-6" />
            Notion 1 - Introduction à NumPy pour les matrices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <h4 className="text-lg font-semibold text-gray-700 mb-3">Découvrir la puissance de NumPy</h4>
          <div className="space-y-6">
            <div>
              <h5 className="font-semibold text-blue-700 mb-2">Qu'est-ce que NumPy ?</h5>
              <p className="text-gray-700 mb-4">
                NumPy (Numerical Python) est la bibliothèque fondamentale pour le calcul scientifique en Python. 
                Elle fournit un objet tableau multidimensionnel performant et un ensemble d'outils pour travailler efficacement avec ces tableaux.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r">
                <p className="text-blue-800 font-medium">
                  💡 <strong>Astuce concours :</strong> NumPy est essentiel pour les épreuves d'informatique ECG. 
                  Sa maîtrise vous permettra de résoudre rapidement les exercices de calcul matriciel.
                </p>
              </div>
            </div>

            <div>
              <h5 className="font-semibold text-blue-700 mb-2">Importation standard</h5>
              <div className="bg-blue-900 text-blue-100 rounded-lg p-4 overflow-x-auto border border-blue-300">
                <pre className="text-blue-100 text-sm font-mono">
                  <code>import numpy as np</code>
                </pre>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Cette convention d'importation avec l'alias 'np' est universellement adoptée dans la communauté Python.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-blue-700 mb-2">Avantages de NumPy</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h6 className="font-semibold text-blue-800 mb-2">Performance</h6>
                  <p className="text-sm text-blue-700">
                    Calculs jusqu'à 100x plus rapides que les listes Python natives grâce à l'implémentation en C.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h6 className="font-semibold text-blue-800 mb-2">Syntaxe intuitive</h6>
                  <p className="text-sm text-blue-700">
                    Operations vectorisées permettant d'écrire du code concis et lisible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notion 2 - Création de matrices */}
      <Card className="border-0 shadow-lg mb-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
            <Grid3X3 className="h-6 w-6" />
            Notion 2 - Création de matrices avec NumPy
          </CardTitle>
        </CardHeader>
        <CardContent>
          <h4 className="text-lg font-semibold text-gray-700 mb-3">Maîtriser les différentes méthodes de création</h4>
          <div className="space-y-6">
            <div>
              <h5 className="font-semibold text-blue-700 mb-2">Création directe avec np.array()</h5>
              <p className="text-gray-700 mb-4">
                La fonction <code className="bg-blue-100 px-2 py-1 rounded text-blue-800">np.array()</code> permet de créer une matrice à partir de listes Python.
              </p>
              <div className="bg-blue-900 text-blue-100 rounded-lg p-4 overflow-x-auto border border-blue-300 mb-4">
                <pre className="text-blue-100 text-sm font-mono">
                  <code>{`# Syntaxe générale
A = np.array([[1, 2, 3], [4, 5, 6]])  # Matrice 2×3

# Cas particuliers
vecteur_ligne = np.array([1, 2, 3])           # Vecteur ligne
vecteur_colonne = np.array([[1], [2], [3]])   # Vecteur colonne`}</code>
                </pre>
              </div>
            </div>

            <div>
              <h5 className="font-semibold text-blue-700 mb-2">Matrices spéciales</h5>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-blue-50">
                      <TableHead className="text-blue-800">Type</TableHead>
                      <TableHead className="text-blue-800">Syntaxe</TableHead>
                      <TableHead className="text-blue-800">Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-semibold">Matrice nulle</TableCell>
                      <TableCell className="font-mono bg-blue-50">np.zeros([n, m])</TableCell>
                      <TableCell>Crée une matrice de dimensions n×m remplie de zéros</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">Matrice unité</TableCell>
                      <TableCell className="font-mono bg-blue-50">np.ones([n, m])</TableCell>
                      <TableCell>Crée une matrice de dimensions n×m remplie de uns</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">Matrice identité</TableCell>
                      <TableCell className="font-mono bg-blue-50">np.eye(n)</TableCell>
                      <TableCell>Crée la matrice identité de dimension n×n</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>

            <div>
              <h5 className="font-semibold text-blue-700 mb-2">Création de vecteurs</h5>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-blue-50">
                      <TableHead className="text-blue-800">Fonction</TableHead>
                      <TableHead className="text-blue-800">Syntaxe</TableHead>
                      <TableHead className="text-blue-800">Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-semibold">arange</TableCell>
                      <TableCell className="font-mono bg-blue-50">np.arange(début, fin, pas)</TableCell>
                      <TableCell>Vecteur de valeurs régulièrement espacées</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">linspace</TableCell>
                      <TableCell className="font-mono bg-blue-50">np.linspace(début, fin, nb_points)</TableCell>
                      <TableCell>Vecteur de nb_points valeurs uniformément réparties</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notion 3 - Indexation et accès */}
      <Card className="border-0 shadow-lg mb-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
            <Database className="h-6 w-6" />
            Notion 3 - Indexation et accès aux éléments
          </CardTitle>
        </CardHeader>
        <CardContent>
          <h4 className="text-lg font-semibold text-gray-700 mb-3">Comprendre l'indexation des matrices</h4>
          <div className="space-y-6">
            <div>
              <h5 className="font-semibold text-blue-700 mb-2">Système d'indexation</h5>
              <p className="text-gray-700 mb-4">
                Les matrices NumPy utilisent un système d'indexation commençant à 0. Pour une matrice A de dimensions n×m :
              </p>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li>• Les lignes sont numérotées de 0 à n-1</li>
                <li>• Les colonnes sont numérotées de 0 à m-1</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-blue-700 mb-2">Accès aux éléments et lignes/colonnes</h5>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-blue-50">
                      <TableHead className="text-blue-800">Opération</TableHead>
                      <TableHead className="text-blue-800">Syntaxe</TableHead>
                      <TableHead className="text-blue-800">Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-semibold">Élément</TableCell>
                      <TableCell className="font-mono bg-blue-50">A[i, j]</TableCell>
                      <TableCell>Accès à l'élément ligne i, colonne j</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">Ligne</TableCell>
                      <TableCell className="font-mono bg-blue-50">A[i, :]</TableCell>
                      <TableCell>Accès à la ligne i complète</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">Colonne</TableCell>
                      <TableCell className="font-mono bg-blue-50">A[:, j]</TableCell>
                      <TableCell>Accès à la colonne j complète</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">Sous-matrice</TableCell>
                      <TableCell className="font-mono bg-blue-50">A[i1:i2, j1:j2]</TableCell>
                      <TableCell>Extraction d'une sous-matrice</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notion 4 - Opérations matricielles */}
      <Card className="border-0 shadow-lg mb-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
            <Calculator className="h-6 w-6" />
            Notion 4 - Opérations matricielles essentielles
          </CardTitle>
        </CardHeader>
        <CardContent>
          <h4 className="text-lg font-semibold text-gray-700 mb-3">Effectuer des calculs sur les matrices</h4>
          <div className="space-y-6">
            <div>
              <h5 className="font-semibold text-blue-700 mb-2">Opérations arithmétiques élémentaires</h5>
              <p className="text-gray-700 mb-4">Pour deux matrices A et B de mêmes dimensions :</p>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-blue-50">
                      <TableHead className="text-blue-800">Opération</TableHead>
                      <TableHead className="text-blue-800">Syntaxe</TableHead>
                      <TableHead className="text-blue-800">Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-semibold">Addition</TableCell>
                      <TableCell className="font-mono bg-blue-50">A + B</TableCell>
                      <TableCell>Addition élément par élément</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">Soustraction</TableCell>
                      <TableCell className="font-mono bg-blue-50">A - B</TableCell>
                      <TableCell>Soustraction élément par élément</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>

            <div>
              <h5 className="font-semibold text-blue-700 mb-2">Multiplication</h5>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-blue-50">
                      <TableHead className="text-blue-800">Type</TableHead>
                      <TableHead className="text-blue-800">Syntaxe</TableHead>
                      <TableHead className="text-blue-800">Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-semibold">Terme à terme</TableCell>
                      <TableCell className="font-mono bg-blue-50">A * B</TableCell>
                      <TableCell>Multiplication élément par élément</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">Matricielle</TableCell>
                      <TableCell className="font-mono bg-blue-50">np.dot(A, B)</TableCell>
                      <TableCell>Produit matriciel classique</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">Par scalaire</TableCell>
                      <TableCell className="font-mono bg-blue-50">k * A</TableCell>
                      <TableCell>Multiplication par un scalaire k</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded">
                <p className="text-blue-800 font-semibold">⚠️ Attention : Il est crucial de ne pas confondre ces deux types de multiplication.</p>
              </div>
            </div>

            <div>
              <h5 className="font-semibold text-blue-700 mb-2">Division et transposition</h5>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-blue-50">
                      <TableHead className="text-blue-800">Opération</TableHead>
                      <TableHead className="text-blue-800">Syntaxe</TableHead>
                      <TableHead className="text-blue-800">Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-semibold">Division</TableCell>
                      <TableCell className="font-mono bg-blue-50">A / B</TableCell>
                      <TableCell>Division élément par élément</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">Transposition</TableCell>
                      <TableCell className="font-mono bg-blue-50">A.T</TableCell>
                      <TableCell>Transposée de la matrice A</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notion 5 - Fonctions d'analyse */}
      <Card className="border-0 shadow-lg mb-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
            <BarChart3 className="h-6 w-6" />
            Notion 5 - Fonctions d'analyse et statistiques
          </CardTitle>
        </CardHeader>
        <CardContent>
          <h4 className="text-lg font-semibold text-gray-700 mb-3">Analyser les données matricielles</h4>
          <div className="space-y-6">
            <div>
              <h5 className="font-semibold text-blue-700 mb-2">Fonctions globales</h5>
              <p className="text-gray-700 mb-4">Ces fonctions s'appliquent à tous les éléments de la matrice :</p>
              <div className="bg-blue-900 text-blue-100 rounded-lg p-4 overflow-x-auto border border-blue-300">
                <pre className="text-blue-100 text-sm font-mono">
                  <code>{`np.sum(A)      # Somme de tous les éléments
np.min(A)      # Valeur minimale
np.max(A)      # Valeur maximale
np.mean(A)     # Moyenne arithmétique
np.median(A)   # Médiane
np.std(A)      # Écart-type
np.prod(A)     # Produit de tous les éléments`}</code>
                </pre>
              </div>
            </div>

            <div>
              <h5 className="font-semibold text-blue-700 mb-2">Fonctions par axe</h5>
              <p className="text-gray-700 mb-4">Ces fonctions peuvent être appliquées ligne par ligne ou colonne par colonne :</p>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h6 className="font-semibold text-blue-800 mb-2">Par ligne (axis=1)</h6>
                    <div className="bg-blue-900 text-blue-100 rounded p-2 text-sm font-mono">
                      <code>np.sum(A, axis=1)</code>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h6 className="font-semibold text-blue-800 mb-2">Par colonne (axis=0)</h6>
                    <div className="bg-blue-900 text-blue-100 rounded p-2 text-sm font-mono">
                      <code>np.sum(A, axis=0)</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-semibold text-blue-700 mb-2">Fonctions mathématiques</h5>
              <p className="text-gray-700 mb-4">Les fonctions mathématiques s'appliquent élément par élément :</p>
              <div className="bg-blue-900 text-blue-100 rounded-lg p-4 overflow-x-auto border border-blue-300">
                <pre className="text-blue-100 text-sm font-mono">
                  <code>{`np.exp(A)      # Exponentielle de chaque élément
np.log(A)      # Logarithme de chaque élément
np.abs(A)      # Valeur absolue de chaque élément
np.sqrt(A)     # Racine carrée de chaque élément`}</code>
                </pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quiz Section */}
      <Card className="border-0 shadow-lg mb-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
            <CheckCircle className="h-6 w-6" />
            Quiz d'auto-évaluation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-4">
            Testez vos connaissances sur les matrices NumPy avec ce quiz interactif.
          </p>
          <PythonModuleQuiz questions={matricesQuizQuestions} />
        </CardContent>
      </Card>

      {/* Navigation */}
      <ModuleNavigationCards
        currentModule={{
          id: 1,
          title: "Matrices",
          slug: "matrices",
          color: "blue"
        }}
        isExercisePage={false}
      />
    </PythonModuleLayout>
  );
};

export default PythonMatricesPage;
