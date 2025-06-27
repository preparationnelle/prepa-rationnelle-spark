
import React from 'react';
import { VideoAndIntro } from '@/components/VideoAndIntro';
import { ProgrammeModule } from '@/components/ProgrammeModule';

const FormationPage = () => {
  // Module complet des commandes Python ECG
  const pythonECGModule = {
    programmeName: "Commandes Python ECG - Référence Complète",
    videoUrl: "https://www.youtube.com/embed/cBG8EJsHkwA",
    corrige: `# Bibliothèques au programme ECG
import numpy as np
import numpy.linalg as al
import numpy.random as rd
import matplotlib.pyplot as plt

# Fonctions mathématiques de base
np.abs()      # valeur absolue
np.cos()      # cosinus
np.sin()      # sinus
np.log()      # logarithme népérien
np.exp()      # exponentielle
np.sqrt()     # racine carrée
np.floor()    # partie entière

# Constantes
np.pi         # π
np.e          # nombre d'Euler

# Création de vecteurs
np.array([u1,...,un])        # créer un vecteur-ligne
np.arange(a,b,r)             # progression arithmétique de raison r
np.linspace(a,b,n)           # n éléments équirépartis de a à b
np.ones(n)                   # vecteur de n éléments égaux à 1
np.zeros(n)                  # vecteur de n éléments égaux à 0

# Création de matrices
np.array([[a1,1,...,a1,p],...,[an,1,...,an,p]])  # matrice
np.ones((n,p))               # matrice n×p de 1
np.zeros((n,p))              # matrice n×p de 0
np.eye(n,p)                  # matrice avec 1 sur la diagonale`,
    explication: `# Guide des Commandes Python ECG

## Bibliothèques Principales
# numpy (np) : calcul mathématique, vecteurs et matrices
# numpy.linalg (al) : calculs d'algèbre linéaire
# numpy.random (rd) : génération de nombres aléatoires
# matplotlib.pyplot (plt) : tracé de courbes

## Opérations sur Matrices/Vecteurs
# +, -, *, /, ** : opérations coefficient par coefficient
# ==, >, <, >=, <=, != : comparaisons
# np.shape(A) : dimensions de la matrice A
# np.dot(A,B) : produit matriciel
# np.transpose(A) : transposée de A
# np.sum(A) : somme de tous les éléments
# np.mean(A) : moyenne
# np.min(A), np.max(A) : minimum/maximum
# np.cumsum(A) : sommes cumulées

## Algèbre Linéaire
# al.inv(A) : inverse de la matrice A
# al.matrix_rank(A) : rang de la matrice A
# al.matrix_power(A,n) : puissance n-ième de A
# al.solve(A,b) : résolution du système Ax = b
# al.eig(A) : valeurs propres et vecteurs propres

## Variables Aléatoires
# rd.uniform(a,b) : loi uniforme sur [a,b]
# rd.randint(a,b) : entier uniforme sur [a,b-1]
# rd.binomial(n,p) : loi binomiale B(n,p)
# rd.geometric(p) : loi géométrique
# rd.exponential(1/lambda) : loi exponentielle
# rd.normal(m,sigma) : loi normale N(m,σ²)
# rd.poisson(lambda) : loi de Poisson P(λ)
# rd.gamma(nu) : loi gamma

## Graphiques
# plt.plot(x,y) : tracer une courbe
# plt.plot(x,y,'x') : nuage de points
# plt.show() : afficher le graphique
# plt.figure(n) : nouvelle figure
# plt.clf() : effacer le contenu
# plt.axis("scaled") : repère orthonormé
# plt.grid() : grille
# plt.xlabel(), plt.ylabel(), plt.title() : légendes`,
    autresVersions: [
      "Aide-mémoire format PDF imprimable",
      "Version avec exemples d'application aux concours",
      "Fiche résumée pour révisions rapides",
      "Version approfondie avec cas d'usage avancés"
    ],
    outils: [
      "python3 script.py - Exécuter un script Python",
      "python3 -i script.py - Mode interactif après exécution",
      "import numpy as np - Importer numpy avec alias",
      "help(np.fonction) - Aide sur une fonction",
      "np.info(fonction) - Documentation détaillée",
      "plt.savefig('nom.png') - Sauvegarder un graphique"
    ]
  };

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

        {/* Video and Intro Section */}
        <VideoAndIntro />

        {/* Programme Modules */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Référence Complète des Commandes
          </h2>
          
          <div className="space-y-8">
            <ProgrammeModule {...pythonECGModule} />
            
            {/* Placeholder pour futurs modules */}
            <div className="border-2 border-dashed border-muted-foreground/20 rounded-lg p-8 text-center">
              <p className="text-muted-foreground">
                D'autres modules Python seront ajoutés ici (exercices pratiques, cas d'usage spécifiques aux concours...)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormationPage;
