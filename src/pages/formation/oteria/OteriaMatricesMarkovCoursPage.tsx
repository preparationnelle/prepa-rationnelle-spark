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
                Oteria Cyber School, Bachelor 1 — 2025
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

