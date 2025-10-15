import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ArrowLeft, BookOpen, Target, Zap, Shield, Code, Network, Lock } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const OteriaMatricesStochastiquesCoursPage = () => {
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
            <span className="text-teal-600 font-medium">Séance 12 - Cours</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4 text-teal-900">Chapitre 12 : Matrices stochastiques</h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto mb-6">
            Arithmétique modulaire & crypto affine — Diviseurs, nombres premiers, modulo, inverses
          </p>

          {/* Informations de chapitre */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Séance</span>
                  <span className="text-2xl font-bold text-blue-900">12</span>
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
                Oteria Cyber School, Bachelor 1 — 2025
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 1: Définition */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Target className="h-6 w-6" />
              1. Définition
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              <div>
                <p className="mb-3">
                  Une matrice <LatexRenderer latex="P = (p_{i,j})_{1\leq i,j\leq n}" block={false} /> est dite <strong>stochastique</strong> si :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded my-4">
                  <LatexRenderer latex="p_{i,j} \geq 0 \quad \text{et} \quad \sum_{j=1}^n p_{i,j} = 1 \quad \forall i" block={true} />
                </div>
                <p>
                  Chaque ligne représente une distribution de probabilité sur l'ensemble des états.
                </p>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Exemple</p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded mb-3">
                  <LatexRenderer latex="P = \begin{pmatrix} 0.7 & 0.3 \\ 0.4 & 0.6 \end{pmatrix}" block={true} />
                </div>
                <p>
                  est une matrice stochastique car les lignes somment à 1.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Propriétés */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Zap className="h-6 w-6" />
              2. Propriétés
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4 text-lg">
              <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                <p className="font-semibold mb-2 text-blue-700">Produit de matrices stochastiques</p>
                <p>
                  Si <LatexRenderer latex="P" block={false} /> et <LatexRenderer latex="Q" block={false} /> sont stochastiques, alors <LatexRenderer latex="PQ" block={false} /> est stochastique.
                </p>
              </div>

              <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                <p className="font-semibold mb-2 text-blue-700">Puissance</p>
                <p>
                  <LatexRenderer latex="P^n" block={false} /> est stochastique pour tout <LatexRenderer latex="n\geq 1" block={false} />.
                </p>
              </div>

              <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                <p className="font-semibold mb-2 text-blue-700">Évolution des probabilités</p>
                <p className="mb-2">
                  Si <LatexRenderer latex="\pi^{(0)}" block={false} /> est une loi de probabilité initiale, alors après <LatexRenderer latex="n" block={false} /> étapes :
                </p>
                <LatexRenderer latex="\pi^{(n)} = \pi^{(0)} P^n" block={true} />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3: Lien avec les probabilités */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Network className="h-6 w-6" />
              3. Lien avec les probabilités
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              <div>
                <p className="mb-3">
                  Les matrices stochastiques décrivent des processus de Markov.
                </p>
                <div className="space-y-3">
                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <p>
                      Les lignes sont les <strong>lois conditionnelles</strong> <LatexRenderer latex="P(X_{t+1}=j \mid X_t=i)" block={false} />.
                    </p>
                  </div>

                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <p>
                      L'état du système évolue en multipliant la loi initiale par la matrice de transition.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Vecteur stationnaire</p>
                <p className="mb-3">
                  Un vecteur <LatexRenderer latex="\pi" block={false} /> est dit <strong>stationnaire</strong> si :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded mb-3">
                  <LatexRenderer latex="\pi P = \pi" block={true} />
                </div>
                <p>
                  Il représente un équilibre du système.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 4: Implémentation en Python */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Code className="h-6 w-6" />
              4. Implémentation en Python
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Exemple simple</p>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm">
{`import numpy as np

# Matrice stochastique
P = np.array([[0.7, 0.3],
              [0.4, 0.6]])

# Loi initiale
pi0 = np.array([1, 0])  # état initial 100% en position 1

# Après n étapes
n = 5
pi_n = pi0.dot(np.linalg.matrix_power(P, n))
print(pi_n)`}
                  </pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 5: Cas pratique - File d'attente */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Shield className="h-6 w-6" />
              5. Cas pratique : File d'attente
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              <div>
                <p className="mb-3">
                  On modélise un système de file d'attente (ex. supermarché) par une chaîne de Markov :
                </p>
                <div className="space-y-3">
                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <p className="font-semibold mb-2 text-blue-700">États</p>
                    <p>Taille de la file (0, 1, 2, …).</p>
                  </div>

                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <p className="font-semibold mb-2 text-blue-700">Transition</p>
                    <p>
                      Arrivée d'un client avec probabilité <LatexRenderer latex="p" block={false} />, départ d'un client avec probabilité <LatexRenderer latex="q" block={false} />.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Matrice de transition (exemple simplifié à 3 états)</p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                  <LatexRenderer latex="P = \begin{pmatrix} 1-p & p & 0 \\ q & 1-(p+q) & p \\ 0 & q & 1-q \end{pmatrix}" block={true} />
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Simulation Python</p>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm">
{`import numpy as np
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

print("Evolution de la file :", trajet)`}
                  </pre>
                </div>
              </div>

              <div className="bg-blue-100 border border-blue-300 rounded p-4">
                <p className="font-semibold text-blue-900 mb-3">Conclusion</p>
                <p>
                  Les matrices stochastiques offrent un cadre puissant pour modéliser des systèmes aléatoires évolutifs (météo, navigation web, files d'attente, etc.).
                </p>
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

export default OteriaMatricesStochastiquesCoursPage;

