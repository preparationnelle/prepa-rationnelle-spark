import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ArrowLeft, BookOpen, Target, Zap, Shield, Code, Network, Database } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const OteriaMatricesMarkovCoursPage = () => {
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
            <span className="text-teal-600 font-medium">Séance 11 - Cours</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4 text-teal-900">Chapitre 11 : Matrices et chaînes de Markov</h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto mb-6">
            Opérations, inversion, résolution Ax = b (numpy.linalg) — Modélisation de processus stochastiques
          </p>

          {/* Informations de chapitre */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Séance</span>
                  <span className="text-2xl font-bold text-blue-900">11</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Durée estimée</span>
                  <span className="text-2xl font-bold text-blue-900">4h</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Niveau</span>
                  <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    Avancé
                  </span>
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

        {/* Informations de cours */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <BookOpen className="h-6 w-6" />
              Informations du cours
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3 text-lg">
              <p className="font-semibold text-blue-900">
                Professeur : Dimitar Dimitrov
              </p>
              <p className="text-blue-800">
                Oteria Cyber School, Bachelor 2 — 2025
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 1: Matrices - Définitions et opérations */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Database className="h-6 w-6" />
              1. Matrices : Définitions et opérations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Définition</p>
                <p className="mb-3">
                  Une matrice <LatexRenderer latex="A = (a_{i,j})" block={false} /> est un tableau de <LatexRenderer latex="n" block={false} /> lignes et <LatexRenderer latex="p" block={false} /> colonnes :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded my-4">
                  <LatexRenderer latex="A = \begin{pmatrix} a_{1,1} & \cdots & a_{1,p} \\ \vdots & \ddots & \vdots \\ a_{n,1} & \cdots & a_{n,p} \end{pmatrix}" block={true} />
                </div>
                <p>
                  On note <LatexRenderer latex="M_{n,p}(\mathbb{R})" block={false} /> l'ensemble des matrices réelles <LatexRenderer latex="n\times p" block={false} />.
                </p>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Opérations élémentaires</p>
                <div className="space-y-4">
                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <p className="font-semibold mb-2 text-blue-700">Addition et multiplication scalaire</p>
                    <LatexRenderer latex="(A+B)_{i,j} = a_{i,j} + b_{i,j}, \quad (\lambda A)_{i,j} = \lambda a_{i,j}" block={true} />
                  </div>

                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <p className="font-semibold mb-2 text-blue-700">Produit matriciel</p>
                    <LatexRenderer latex="(AB)_{i,j} = \sum_{k=1}^p a_{i,k} b_{k,j}" block={true} />
                  </div>
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Propriétés</p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded mb-4">
                  <LatexRenderer latex="A(BC) = (AB)C, \quad A(B+C)=AB+AC, \quad AI_n = I_n A = A" block={true} />
                </div>
                <p>
                  La transposée est définie par <LatexRenderer latex="A^T = (a_{j,i})" block={false} />.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 1.5: Types particuliers de matrices */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Database className="h-6 w-6" />
              1.5. Types particuliers de matrices
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Matrice diagonale</p>
                <p className="mb-3">
                  Une matrice diagonale a tous ses éléments nuls en dehors de la diagonale principale :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded my-4">
                  <LatexRenderer latex="D = \begin{pmatrix} d_1 & 0 & \cdots & 0 \\ 0 & d_2 & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & d_n \end{pmatrix}" block={true} />
                </div>
                <p>
                  Notation : <LatexRenderer latex="D = \diag(d_1, d_2, \dots, d_n)" block={false} />.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded p-4 mt-4">
                  <p className="font-semibold text-blue-900 mb-2">Exemple</p>
                  <LatexRenderer latex="D = \begin{pmatrix} 3 & 0 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & 2 \end{pmatrix} = \diag(3, -1, 2)" block={true} />
                </div>

                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mt-4">
                  <pre>{`import numpy as np

def est_diagonale(A):
    return np.allclose(A, np.diag(np.diag(A)))

# Test
D = np.array([[3, 0, 0], [0, -1, 0], [0, 0, 2]])
print("Diagonale:", est_diagonale(D))  # True

B = np.array([[1, 2, 0], [0, 3, 0], [0, 0, 4]])
print("Non diagonale:", est_diagonale(B))  # False`}</pre>
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Matrice triangulaire supérieure</p>
                <p className="mb-3">
                  Tous les éléments sous la diagonale principale sont nuls :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded my-4">
                  <LatexRenderer latex="U = \begin{pmatrix} u_{1,1} & u_{1,2} & \cdots & u_{1,n} \\ 0 & u_{2,2} & \cdots & u_{2,n} \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & u_{n,n} \end{pmatrix}" block={true} />
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded p-4 mt-4">
                  <p className="font-semibold text-blue-900 mb-2">Exemple</p>
                  <LatexRenderer latex="U = \begin{pmatrix} 2 & 3 & 1 \\ 0 & -1 & 4 \\ 0 & 0 & 5 \end{pmatrix}" block={true} />
                </div>

                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mt-4">
                  <pre>{`import numpy as np

def est_triangulaire_superieure(A):
    return np.allclose(A, np.triu(A))

# Test
U = np.array([[2, 3, 1], [0, -1, 4], [0, 0, 5]])
print("Triangulaire sup:", est_triangulaire_superieure(U))  # True

C = np.array([[1, 2, 3], [4, 5, 6], [0, 0, 7]])
print("Non triangulaire:", est_triangulaire_superieure(C))  # False`}</pre>
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Matrice triangulaire inférieure</p>
                <p className="mb-3">
                  Tous les éléments au-dessus de la diagonale principale sont nuls :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded my-4">
                  <LatexRenderer latex="L = \begin{pmatrix} l_{1,1} & 0 & \cdots & 0 \\ l_{2,1} & l_{2,2} & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ l_{n,1} & l_{n,2} & \cdots & l_{n,n} \end{pmatrix}" block={true} />
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded p-4 mt-4">
                  <p className="font-semibold text-blue-900 mb-2">Exemple</p>
                  <LatexRenderer latex="L = \begin{pmatrix} 2 & 0 & 0 \\ 1 & -1 & 0 \\ 3 & 4 & 5 \end{pmatrix}" block={true} />
                </div>

                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mt-4">
                  <pre>{`import numpy as np

def est_triangulaire_inferieure(A):
    return np.allclose(A, np.tril(A))

# Test
L = np.array([[2, 0, 0], [1, -1, 0], [3, 4, 5]])
print("Triangulaire inf:", est_triangulaire_inferieure(L))  # True

C = np.array([[1, 0, 0], [4, 5, 6], [0, 7, 8]])
print("Non triangulaire:", est_triangulaire_inferieure(C))  # False`}</pre>
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Matrice symétrique</p>
                <p className="mb-3">
                  Une matrice carrée est symétrique si elle est égale à sa transposée :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded my-4">
                  <LatexRenderer latex="A^T = A \quad \iff \quad a_{i,j} = a_{j,i} \quad \forall i,j" block={true} />
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded p-4 mt-4">
                  <p className="font-semibold text-blue-900 mb-2">Exemple</p>
                  <LatexRenderer latex="A = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 5 \\ 3 & 5 & 6 \end{pmatrix}" block={true} />
                  <p className="text-blue-800 mt-2">est symétrique car <LatexRenderer latex="a_{1,2} = a_{2,1} = 2" block={false} />, etc.</p>
                </div>

                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mt-4">
                  <pre>{`import numpy as np

def est_symetrique(A):
    return np.allclose(A, A.T)

# Test
A = np.array([[1, 2, 3], [2, 4, 5], [3, 5, 6]])
print("Symétrique:", est_symetrique(A))  # True

B = np.array([[1, 2, 3], [4, 5, 6], [3, 5, 7]])
print("Non symétrique:", est_symetrique(B))  # False`}</pre>
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Matrice antisymétrique (ou skew-symétrique)</p>
                <p className="mb-3">
                  Une matrice carrée est antisymétrique si elle est opposée à sa transposée :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded my-4">
                  <LatexRenderer latex="A^T = -A \quad \iff \quad a_{i,j} = -a_{j,i} \quad \forall i,j" block={true} />
                </div>
                <p className="mb-3">
                  La diagonale d'une matrice antisymétrique est nulle.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded p-4 mt-4">
                  <p className="font-semibold text-blue-900 mb-2">Exemple</p>
                  <LatexRenderer latex="A = \begin{pmatrix} 0 & 2 & -1 \\ -2 & 0 & 3 \\ 1 & -3 & 0 \end{pmatrix}" block={true} />
                  <p className="text-blue-800 mt-2">est antisymétrique car <LatexRenderer latex="a_{1,2} = -a_{2,1} = -(-2) = 2" block={false} />, etc.</p>
                </div>

                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mt-4">
                  <pre>{`import numpy as np

def est_antisymetrique(A):
    return np.allclose(A, -A.T) and np.allclose(np.diag(A), 0)

# Test
A = np.array([[0, 2, -1], [-2, 0, 3], [1, -3, 0]])
print("Antisymétrique:", est_antisymetrique(A))  # True

B = np.array([[1, 2, -1], [-2, 0, 3], [1, -3, 0]])
print("Non antisymétrique:", est_antisymetrique(B))  # False`}</pre>
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Matrice orthogonale</p>
                <p className="mb-3">
                  Une matrice carrée est orthogonale si son inverse est égale à sa transposée :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded my-4">
                  <LatexRenderer latex="A^T = A^{-1} \quad \iff \quad A^T A = I_n" block={true} />
                </div>
                <p className="mb-3">
                  Les colonnes (ou lignes) d'une matrice orthogonale forment une base orthonormée.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded p-4 mt-4">
                  <p className="font-semibold text-blue-900 mb-2">Exemple (matrice de rotation)</p>
                  <LatexRenderer latex="R = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}" block={true} />
                  <p className="text-blue-800 mt-2">est orthogonale car <LatexRenderer latex="R^T R = I_2" block={false} />.</p>
                </div>

                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mt-4">
                  <pre>{`import numpy as np

def est_orthogonale(A):
    return np.allclose(A.T @ A, np.eye(len(A)))

# Test avec matrice de rotation
theta = np.pi/6  # 30 degrés
R = np.array([[np.cos(theta), -np.sin(theta)],
              [np.sin(theta), np.cos(theta)]])
print("Orthogonale:", est_orthogonale(R))  # True

B = np.array([[1, 2], [3, 4]])
print("Non orthogonale:", est_orthogonale(B))  # False`}</pre>
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">La trace d'une matrice</p>
                <p className="mb-3">
                  La trace d'une matrice carrée est la somme des éléments de sa diagonale principale :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded my-4">
                  <LatexRenderer latex="\tr(A) = \sum_{i=1}^n a_{i,i}" block={true} />
                </div>
                <div className="space-y-3">
                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <p className="font-semibold mb-2 text-blue-700">Propriétés de la trace</p>
                    <LatexRenderer latex="\tr(A + B) = \tr(A) + \tr(B)" block={true} />
                    <LatexRenderer latex="\tr(cA) = c \tr(A) \quad (c \in \mathbb{R})" block={true} />
                    <LatexRenderer latex="\tr(AB) = \tr(BA)" block={true} />
                    <LatexRenderer latex="\tr(A^T) = \tr(A)" block={true} />
                  </div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded p-4 mt-4">
                  <p className="font-semibold text-blue-900 mb-2">Exemple</p>
                  <LatexRenderer latex="A = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{pmatrix} \quad \implies \quad \tr(A) = 1 + 5 + 9 = 15" block={true} />
                </div>

                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mt-4">
                  <pre>{`import numpy as np

# Trace d'une matrice = somme des éléments diagonaux
A = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print("Trace de A:", np.trace(A))  # 1+5+9 = 15

# Propriété: tr(A+B) = tr(A) + tr(B)
B = np.array([[2, 0], [1, 3]])
C = np.array([[1, 2], [0, 1]])
print("tr(B+C):", np.trace(B+C))
print("tr(B)+tr(C):", np.trace(B)+np.trace(C))

# Propriété: tr(AB) = tr(BA)
print("tr(BC):", np.trace(B@C))
print("tr(CB):", np.trace(C@B))`}</pre>
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Déterminant d'une matrice</p>
                <p className="mb-3">
                  Le déterminant est une fonction qui associe à chaque matrice carrée un scalaire :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded my-4">
                  <p className="font-semibold mb-2 text-blue-700">Pour une matrice 2×2 :</p>
                  <LatexRenderer latex="\det\begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc" block={true} />
                </div>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded mb-4">
                  <p className="font-semibold mb-2 text-blue-700">Propriétés importantes :</p>
                  <LatexRenderer latex="\det(A^T) = \det(A)" block={true} />
                  <LatexRenderer latex="\det(AB) = \det(A) \det(B)" block={true} />
                  <LatexRenderer latex="\det(A^{-1}) = \frac{1}{\det(A)} \quad \text{si } A \text{ inversible}" block={true} />
                  <LatexRenderer latex="A \text{ inversible } \iff \det(A) \neq 0" block={true} />
                </div>

                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mt-4">
                  <pre>{`import numpy as np

# Déterminant 2x2: ad - bc
A = np.array([[3, 1], [2, 4]])
print("det(A) =", np.linalg.det(A))  # 3*4 - 1*2 = 10

# Propriété: det(AB) = det(A) * det(B)
B = np.array([[2, 1], [3, 2]])
C = np.array([[1, 0], [1, 1]])
print("det(B@C):", np.linalg.det(B@C))
print("det(B)*det(C):", np.linalg.det(B)*np.linalg.det(C))

# Inversibilité: det(A) ≠ 0
print("A inversible?", np.linalg.det(A) != 0)  # True`}</pre>
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Valeurs propres et vecteurs propres</p>
                <p className="mb-3">
                  Un scalaire <LatexRenderer latex="\lambda" block={false} /> est une valeur propre de <LatexRenderer latex="A" block={false} /> si existe un vecteur non nul <LatexRenderer latex="v" block={false} /> tel que :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded my-4">
                  <LatexRenderer latex="A v = \lambda v" block={true} />
                </div>
                <p className="mb-3">
                  Ce qui équivaut à résoudre <LatexRenderer latex="(A - \lambda I)v = 0" block={false} />, donc <LatexRenderer latex="\det(A - \lambda I) = 0" block={false} />.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded p-4 mt-4">
                  <p className="font-semibold text-blue-900 mb-2">Exemple</p>
                  <LatexRenderer latex="A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}" block={true} />
                  <p className="text-blue-800 mt-2">
                    Valeurs propres : <LatexRenderer latex="\lambda_1 = 3, \lambda_2 = 1" block={false} /> (résoudre <LatexRenderer latex="\det(A - \lambda I) = (2-\lambda)^2 - 1 = 0" block={false} />)
                  </p>
                </div>

                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mt-4">
                  <pre>{`import numpy as np

# Exemple avec la matrice symétrique
A = np.array([[2, 1],
              [1, 2]])

print("Matrice A :")
print(A)

# Calcul des valeurs propres et vecteurs propres
valeurs_propres, vecteurs_propres = np.linalg.eig(A)

print("\\nValeurs propres :", valeurs_propres)
print("Vecteurs propres :")
print(vecteurs_propres)

# Vérification A*v = λ*v
for i, (vp, vec) in enumerate(zip(valeurs_propres, vecteurs_propres.T)):
    print(f"\\nValeur propre {i+1}: λ = {vp}")
    print(f"Vecteur propre: {vec}")
    print(f"A*v = {A @ vec}")
    print(f"λ*v = {vp * vec}")
    print(f"Égalité A*v == λ*v : {np.allclose(A @ vec, vp * vec)}")

# Calcul du polynôme caractéristique
def polynome_caracteristique(A):
    """
    Calcule les coefficients du polynôme caractéristique
    """
    return np.poly(A)  # Coefficients du polynôme

coeffs = polynome_caracteristique(A)
print(f"\\nCoefficients du polynôme caractéristique: {coeffs}")
print("Racines (valeurs propres):", np.roots(coeffs))`}</pre>
                </div>
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Section 2: Matrices inversibles */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Target className="h-6 w-6" />
              2. Matrices inversibles
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Définition</p>
                <p className="mb-3">
                  Une matrice <LatexRenderer latex="A\in M_n(\mathbb{R})" block={false} /> est inversible si <LatexRenderer latex="\exists A^{-1}" block={false} /> tel que <LatexRenderer latex="AA^{-1}=I_n" block={false} />.
                </p>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Inverse d'une matrice 2×2</p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded mb-4">
                  <LatexRenderer latex="A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}, \quad \det(A) = ad - bc \neq 0" block={true} />
                </div>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                  <LatexRenderer latex="A^{-1} = \frac{1}{ad-bc} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}" block={true} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3: Systèmes linéaires */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Code className="h-6 w-6" />
              3. Systèmes linéaires
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Définition</p>
                <p className="mb-3">
                  Un système linéaire <LatexRenderer latex="AX=B" block={false} /> se résout en cherchant <LatexRenderer latex="X \in \mathbb{R}^p" block={false} /> tel que <LatexRenderer latex="A\in M_{n,p}(\mathbb{R})" block={false} />, <LatexRenderer latex="B\in \mathbb{R}^n" block={false} />.
                </p>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Méthodes</p>
                <div className="space-y-3">
                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <p className="font-semibold mb-2 text-blue-700">Pivot de Gauss</p>
                    <p>Réduction par étapes pour mettre <LatexRenderer latex="A" block={false} /> en forme échelonnée.</p>
                  </div>

                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <p className="font-semibold mb-2 text-blue-700">Méthode de Gauss-Jordan</p>
                    <p>Réduction complète de <LatexRenderer latex="A" block={false} /> en <LatexRenderer latex="I_n" block={false} />, obtenant directement <LatexRenderer latex="A^{-1}" block={false} /> si elle existe.</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 4: Espaces vectoriels et rang */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Zap className="h-6 w-6" />
              4. Espaces vectoriels et rang
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4 text-lg">
              <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                <p className="font-semibold mb-2 text-blue-700">Famille libre</p>
                <p>
                  Une famille <LatexRenderer latex="(v_1,\dots,v_k)" block={false} /> est <strong>libre</strong> si <LatexRenderer latex="\sum \lambda_i v_i = 0 \implies \lambda_i=0" block={false} />.
                </p>
              </div>

              <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                <p className="font-semibold mb-2 text-blue-700">Base</p>
                <p>Une <strong>base</strong> est une famille libre et génératrice.</p>
              </div>

              <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                <p className="font-semibold mb-2 text-blue-700">Dimension</p>
                <p>La <strong>dimension</strong> est le cardinal d'une base.</p>
              </div>

              <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                <p className="font-semibold mb-2 text-blue-700">Rang</p>
                <p>Le <strong>rang</strong> d'une matrice est la dimension de l'espace engendré par ses colonnes.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 5: Chaînes de Markov */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Network className="h-6 w-6" />
              5. Chaînes de Markov
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Définition</p>
                <p className="mb-3">
                  Une chaîne de Markov est un processus aléatoire <LatexRenderer latex="(X_n)_{n\geq 0}" block={false} /> tel que :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded my-4">
                  <LatexRenderer latex="P(X_{n+1}=j \mid X_n=i, X_{n-1},\dots,X_0) = P(X_{n+1}=j \mid X_n=i)" block={true} />
                </div>
                <p>La probabilité ne dépend que de l'état présent.</p>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Matrice de transition</p>
                <p className="mb-3">
                  On regroupe les probabilités <LatexRenderer latex="P_{i,j}=P(X_{n+1}=j \mid X_n=i)" block={false} /> dans une matrice <LatexRenderer latex="P" block={false} /> telle que :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                  <LatexRenderer latex="P = (P_{i,j}), \quad P_{i,j} \geq 0, \quad \sum_j P_{i,j} = 1" block={true} />
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Évolution d'une chaîne</p>
                <p className="mb-3">
                  Si <LatexRenderer latex="\pi^{(0)}" block={false} /> est la loi initiale (vecteur ligne), alors :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                  <LatexRenderer latex="\pi^{(n)} = \pi^{(0)} P^n" block={true} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 6: Cas pratique - Changement météo */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Target className="h-6 w-6" />
              6. Cas pratique : Changement météo
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              <div>
                <p className="mb-3">
                  On modélise la météo avec deux états : <em>Soleil</em> (S) et <em>Pluie</em> (P).
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded my-4">
                  <LatexRenderer latex="P = \begin{pmatrix} 0.8 & 0.2 \\ 0.4 & 0.6 \end{pmatrix}" block={true} />
                </div>
                <p className="mb-3">
                  où <LatexRenderer latex="P_{S,S}=0.8" block={false} />, <LatexRenderer latex="P_{S,P}=0.2" block={false} />, etc.
                </p>
              </div>

              <div>
                <p className="mb-3">
                  Si on part avec <LatexRenderer latex="\pi^{(0)} = (1,0)" block={false} /> (jour initial ensoleillé) :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                  <LatexRenderer latex="\pi^{(n)} = \pi^{(0)} P^n" block={true} />
                </div>
                <p className="mt-3">
                  donne la loi de la météo au jour <LatexRenderer latex="n" block={false} />.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 7: Cas pratique - Navigation web */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Shield className="h-6 w-6" />
              7. Cas pratique : Navigation web
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              <div>
                <p className="mb-3">
                  Chaque page est un état, et les liens entre pages définissent une matrice de transition.
                </p>
                <div className="bg-blue-100 border border-blue-300 rounded p-4">
                  <p className="font-semibold text-blue-900 mb-3">Application en informatique</p>
                  <p>
                    Ce modèle est à la base de l'algorithme <strong>PageRank</strong> de Google.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 8: Matrices stochastiques */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Network className="h-6 w-6" />
              8. Matrices stochastiques
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Définition</p>
                <p className="mb-3">
                  Une matrice <LatexRenderer latex="P=(p_{i,j})" block={false} /> est dite stochastique si :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded my-4">
                  <LatexRenderer latex="p_{i,j} \geq 0 \quad \text{et} \quad \sum_j p_{i,j} = 1 \quad \forall i" block={true} />
                </div>
                <p>
                  Chaque ligne représente une distribution de probabilité sur l'ensemble des états.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded p-4 mt-4">
                  <p className="font-semibold text-blue-900 mb-2">Exemple</p>
                  <LatexRenderer latex="P = \begin{pmatrix} 0.7 & 0.3 \\ 0.4 & 0.6 \end{pmatrix}" block={true} />
                  <p className="text-blue-800 mt-2">
                    est une matrice stochastique car les lignes somment à 1.
                  </p>
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Propriétés</p>
                <div className="space-y-4">
                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <p className="font-semibold mb-2 text-blue-700">Produit de matrices stochastiques</p>
                    <p>Si <LatexRenderer latex="P" block={false} /> et <LatexRenderer latex="Q" block={false} /> sont stochastiques, alors <LatexRenderer latex="PQ" block={false} /> est stochastique.</p>
                  </div>

                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <p className="font-semibold mb-2 text-blue-700">Puissance</p>
                    <LatexRenderer latex="P^n" block={true} />
                    <p className="mt-2">est stochastique pour tout <LatexRenderer latex="n \geq 1" block={false} />.</p>
                  </div>

                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <p className="font-semibold mb-2 text-blue-700">Évolution des probabilités</p>
                    <p className="mb-2">Si <LatexRenderer latex="\pi^{(0)}" block={false} /> est une loi de probabilité initiale, alors après <LatexRenderer latex="n" block={false} /> étapes :</p>
                    <LatexRenderer latex="\pi^{(n)} = \pi^{(0)} P^n" block={true} />
                  </div>
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Lien avec les probabilités</p>
                <p className="mb-3">
                  Les matrices stochastiques décrivent des processus de Markov.
                </p>
                <div className="space-y-3">
                  <p>Les lignes sont les lois conditionnelles <LatexRenderer latex="P(X_{n+1}=j|X_n=i)" block={false} />.</p>
                  <p>L'état du système évolue en multipliant la loi initiale par la matrice de transition.</p>

                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <p className="font-semibold mb-2 text-blue-700">Vecteur stationnaire</p>
                    <p>Un vecteur <LatexRenderer latex="\pi" block={false} /> est dit stationnaire si :</p>
                    <LatexRenderer latex="\pi P = \pi" block={true} />
                    <p className="mt-2">Il représente un équilibre du système.</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 9: Implémentation en Python */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Code className="h-6 w-6" />
              9. Implémentation en Python
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Exemple simple</p>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                  <pre>{`import numpy as np

# Matrice stochastique
P = np.array([[0.7, 0.3],
              [0.4, 0.6]])

# Loi initiale
pi0 = np.array([1, 0])  # état initial 100% en position 1

# Après n étapes
n = 5
pi_n = pi0.dot(np.linalg.matrix_power(P, n))
print(pi_n)`}</pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 10: Cas pratique - File d'attente */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Target className="h-6 w-6" />
              10. Cas pratique : File d'attente
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              <div>
                <p className="mb-3">
                  On modélise un système de file d'attente (ex. supermarché) par une chaîne de Markov :
                </p>
                <div className="space-y-4">
                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <p className="font-semibold mb-2 text-blue-700">États</p>
                    <p>Taille de la file (0, 1, 2, …).</p>
                  </div>

                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <p className="font-semibold mb-2 text-blue-700">Transition</p>
                    <p>Arrivée d'un client avec probabilité <LatexRenderer latex="p" block={false} />, départ d'un client avec probabilité <LatexRenderer latex="q" block={false} />.</p>
                  </div>

                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <p className="font-semibold mb-2 text-blue-700">Matrice de transition (exemple simplifié à 3 états)</p>
                    <LatexRenderer latex="P = \begin{pmatrix} 1-p & p & 0 \\ q & 1-p-q & p \\ 0 & q & 1-q \end{pmatrix}" block={true} />
                  </div>
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Simulation Python</p>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                  <pre>{`import numpy as np
import random

P = np.array([[0.8, 0.2, 0.0],
              [0.3, 0.4, 0.3],
              [0.0, 0.5, 0.5]])

etat = 0  # file vide au départ
n = 20
trajet = [etat]

for _ in range(n):
    etat = random.choices([0,1,2], weights=P[etat])[0]
    trajet.append(etat)

print("Evolution de la file :", trajet)`}</pre>
                </div>
              </div>

              <div className="bg-blue-100 border border-blue-300 rounded p-4">
                <p className="font-semibold text-blue-900 mb-2">Conclusion</p>
                <p>
                  Les matrices stochastiques offrent un cadre puissant pour modéliser des systèmes aléatoires évolutifs (météo, navigation web, files d'attente, etc.).
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 11: Exercices pratiques - Matrices stochastiques */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-orange-50 to-orange-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-orange-600 flex items-center gap-2">
              <Code className="h-6 w-6" />
              11. Exercices pratiques - Matrices stochastiques
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="space-y-8 text-lg">

              {/* Exercice 1 */}
              <div className="border-2 border-orange-200 rounded-lg p-6 bg-white">
                <h3 className="text-xl font-bold text-orange-800 mb-4">Exercice 1 : Vérification d'une matrice stochastique</h3>
                <p className="mb-4">
                  Écrivez une fonction Python qui vérifie si une matrice donnée est stochastique.
                  Une matrice est stochastique si toutes ses lignes somment à 1 et tous ses éléments sont ≥ 0.
                </p>

                <div className="bg-orange-50 border border-orange-200 rounded p-4 mb-4">
                  <p className="font-semibold text-orange-900 mb-2">Matrice à tester :</p>
                  <LatexRenderer latex="A = \begin{pmatrix} 0.5 & 0.3 & 0.2 \\ 0.1 & 0.7 & 0.2 \\ 0.4 & 0.4 & 0.2 \end{pmatrix}" block={true} />
                </div>

                <details className="bg-gray-50 border border-gray-200 rounded p-4">
                  <summary className="font-semibold text-gray-800 cursor-pointer hover:text-gray-600">
                    Corrigé - Exercice 1
                  </summary>
                  <div className="mt-4 space-y-4">
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                      <pre>{`import numpy as np

def est_stochastique(P):
    """
    Vérifie si une matrice est stochastique
    """
    # Vérifier que tous les éléments sont >= 0
    if np.any(P < 0):
        return False

    # Vérifier que chaque ligne somme à 1 (avec tolérance numérique)
    sommes_lignes = np.sum(P, axis=1)
    return np.allclose(sommes_lignes, 1.0)

# Test de la matrice
A = np.array([[0.5, 0.3, 0.2],
              [0.1, 0.7, 0.2],
              [0.4, 0.4, 0.2]])

print("Matrice A :")
print(A)
print("Est stochastique :", est_stochastique(A))

# Test avec une matrice non stochastique
B = np.array([[0.5, 0.6, 0.2],  # ligne somme > 1
              [0.1, 0.7, 0.2],
              [0.4, 0.4, 0.2]])

print("\\nMatrice B :")
print(B)
print("Est stochastique :", est_stochastique(B))`}</pre>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded p-3">
                      <p className="text-green-800">
                        <strong>Explication :</strong> La fonction utilise <code>np.any(P &lt; 0)</code> pour vérifier les valeurs négatives
                        et <code>np.allclose()</code> pour comparer les sommes de lignes à 1 avec une tolérance numérique.
                      </p>
                    </div>
                  </div>
                </details>
              </div>

              {/* Exercice 2 */}
              <div className="border-2 border-orange-200 rounded-lg p-6 bg-white">
                <h3 className="text-xl font-bold text-orange-800 mb-4">Exercice 2 : Évolution d'une chaîne de Markov</h3>
                <p className="mb-4">
                  Considérez une chaîne de Markov avec 3 états et la matrice de transition suivante.
                  Si l'état initial est <LatexRenderer latex="\pi^{(0)} = (1, 0, 0)" block={false} />, calculez la loi de probabilité après 10 étapes.
                </p>

                <div className="bg-orange-50 border border-orange-200 rounded p-4 mb-4">
                  <p className="font-semibold text-orange-900 mb-2">Matrice de transition :</p>
                  <LatexRenderer latex="P = \begin{pmatrix} 0.8 & 0.1 & 0.1 \\ 0.2 & 0.7 & 0.1 \\ 0.3 & 0.2 & 0.5 \end{pmatrix}" block={true} />
                </div>

                <details className="bg-gray-50 border border-gray-200 rounded p-4">
                  <summary className="font-semibold text-gray-800 cursor-pointer hover:text-gray-600">
                    Corrigé - Exercice 2
                  </summary>
                  <div className="mt-4 space-y-4">
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                      <pre>{`import numpy as np

# Matrice de transition
P = np.array([[0.8, 0.1, 0.1],
              [0.2, 0.7, 0.1],
              [0.3, 0.2, 0.5]])

# État initial
pi0 = np.array([1.0, 0.0, 0.0])

# Nombre d'étapes
n = 10

print("État initial :", pi0)

# Calcul de l'évolution étape par étape
pi_current = pi0.copy()
for i in range(1, n+1):
    pi_current = pi_current.dot(P)
    if i <= 5 or i == n:  # Afficher seulement quelques étapes
        print(f"Après {i} étape(s) :", pi_current)

# Méthode directe avec matrix_power
pi_n = pi0.dot(np.linalg.matrix_power(P, n))
print(f"\\nAprès {n} étapes (méthode directe) :", pi_n)`}</pre>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded p-3">
                      <p className="text-green-800">
                        <strong>Résultat attendu :</strong> Après 10 étapes, la distribution de probabilité devrait converger
                        vers un état stationnaire où les probabilités sont approximativement équilibrées entre les états.
                      </p>
                    </div>
                  </div>
                </details>
              </div>

              {/* Exercice 3 */}
              <div className="border-2 border-orange-200 rounded-lg p-6 bg-white">
                <h3 className="text-xl font-bold text-orange-800 mb-4">Exercice 3 : Vecteur stationnaire</h3>
                <p className="mb-4">
                  Trouvez le vecteur stationnaire de la matrice de transition suivante.
                  Un vecteur stationnaire <LatexRenderer latex="\pi" block={false} /> satisfait <LatexRenderer latex="\pi P = \pi" block={false} /> et <LatexRenderer latex="\sum \pi_i = 1" block={false} />.
                </p>

                <div className="bg-orange-50 border border-orange-200 rounded p-4 mb-4">
                  <p className="font-semibold text-orange-900 mb-2">Matrice de transition :</p>
                  <LatexRenderer latex="P = \begin{pmatrix} 0.7 & 0.3 \\ 0.4 & 0.6 \end{pmatrix}" block={true} />
                </div>

                <details className="bg-gray-50 border border-gray-200 rounded p-4">
                  <summary className="font-semibold text-gray-800 cursor-pointer hover:text-gray-600">
                    Corrigé - Exercice 3
                  </summary>
                  <div className="mt-4 space-y-4">
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                      <pre>{`import numpy as np

# Matrice de transition
P = np.array([[0.7, 0.3],
              [0.4, 0.6]])

print("Matrice de transition P :")
print(P)

# Méthode 1: Résolution du système (P^T - I)π^T = 0 avec ∑π = 1
# On résout π(P - I) = 0 avec ∑π = 1

# Calculer P - I
P_minus_I = P - np.eye(2)
print("\\nP - I :")
print(P_minus_I)

# Résoudre le système pour les deux premières équations
# On sait que π2 = 1 - π1, donc:
# π1 * (P[0,0] - 1) + π2 * P[0,1] = 0
# π1 * P[1,0] + π2 * (P[1,1] - 1) = 0

# De la première équation:
# π1 * (0.7 - 1) + (1 - π1) * 0.3 = 0
# π1 * (-0.3) + 0.3 - 0.3*π1 = 0
# -0.6*π1 + 0.3 = 0
# -0.6*π1 = -0.3
# π1 = 0.3 / 0.6 = 0.5

pi1 = 0.5
pi2 = 1 - pi1

print(f"\\nVecteur stationnaire : [{pi1}, {pi2}]")

# Vérification
pi = np.array([pi1, pi2])
print("Vérification πP =", pi.dot(P))
print("Vérification πP == π :", np.allclose(pi.dot(P), pi))

# Méthode 2: Calcul par puissance itérée
print("\\nMéthode par puissance itérée :")
pi_init = np.array([0.5, 0.5])  # distribution uniforme initiale
for i in range(50):
    pi_init = pi_init.dot(P)
    if i in [9, 19, 49]:
        print(f"Itération {i+1} :", pi_init)`}</pre>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded p-3">
                      <p className="text-green-800">
                        <strong>Solution :</strong> Le vecteur stationnaire est <LatexRenderer latex="\pi = (0.5, 0.5)" block={false} />.
                        Cela signifie que dans l'équilibre, chaque état a une probabilité de 50%.
                      </p>
                    </div>
                  </div>
                </details>
              </div>

              {/* Exercice 4 */}
              <div className="border-2 border-orange-200 rounded-lg p-6 bg-white">
                <h3 className="text-xl font-bold text-orange-800 mb-4">Exercice 4 : Simulation d'une chaîne de Markov</h3>
                <p className="mb-4">
                  Simulez 1000 trajectoires d'une chaîne de Markov avec 3 états pendant 50 étapes.
                  Calculez la fréquence empirique des états à la dernière étape.
                </p>

                <div className="bg-orange-50 border border-orange-200 rounded p-4 mb-4">
                  <p className="font-semibold text-orange-900 mb-2">Matrice de transition :</p>
                  <LatexRenderer latex="P = \begin{pmatrix} 0.6 & 0.3 & 0.1 \\ 0.2 & 0.5 & 0.3 \\ 0.4 & 0.2 & 0.4 \end{pmatrix}" block={true} />
                  <p className="mt-2 text-orange-800">État initial : état 0</p>
                </div>

                <details className="bg-gray-50 border border-gray-200 rounded p-4">
                  <summary className="font-semibold text-gray-800 cursor-pointer hover:text-gray-600">
                    Corrigé - Exercice 4
                  </summary>
                  <div className="mt-4 space-y-4">
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                      <pre>{`import numpy as np
import random

# Matrice de transition
P = np.array([[0.6, 0.3, 0.1],
              [0.2, 0.5, 0.3],
              [0.4, 0.2, 0.4]])

print("Matrice de transition P :")
print(P)

# Paramètres de simulation
n_trajectoires = 1000
n_etapes = 50
etat_initial = 0

# Simulation
derniers_etats = []

for _ in range(n_trajectoires):
    etat = etat_initial
    for _ in range(n_etapes):
        etat = random.choices([0, 1, 2], weights=P[etat])[0]
    derniers_etats.append(etat)

# Calcul des fréquences empiriques
frequences = np.bincount(derniers_etats, minlength=3) / n_trajectoires

print(f"\\nSur {n_trajectoires} trajectoires de {n_etapes} étapes :")
print(f"Fréquence état 0 : {frequences[0]:.3f}")
print(f"Fréquence état 1 : {frequences[1]:.3f}")
print(f"Fréquence état 2 : {frequences[2]:.3f}")

# Comparaison avec le vecteur stationnaire théorique
print("\\nVecteur stationnaire théorique (calculé par simulation) :")
pi_theorique = np.array([1/3, 1/3, 1/3])  # approximation pour cette matrice
for i in range(100):
    pi_theorique = pi_theorique.dot(P)

print("Vecteur stationnaire :", pi_theorique)
print("Fréquences observées :", frequences)
print("Écart relatif :", np.abs(pi_theorique - frequences) / pi_theorique)`}</pre>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded p-3">
                      <p className="text-green-800">
                        <strong>Observation :</strong> Les fréquences empiriques devraient converger vers le vecteur stationnaire
                        de la chaîne. Plus le nombre de trajectoires et d'étapes est grand, plus l'approximation est précise.
                      </p>
                    </div>
                  </div>
                </details>
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Retour */}
        <div className="text-center mt-8">
          <Link to="/articles/oteria-cyber-school">
            <button className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors text-lg">
              <ArrowLeft className="h-5 w-5" />
              Retour au programme OTERIA
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OteriaMatricesMarkovCoursPage;

