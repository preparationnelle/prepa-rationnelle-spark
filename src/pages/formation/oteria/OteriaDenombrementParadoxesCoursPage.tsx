import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ArrowLeft, BookOpen, Target, Zap, Shield, Calculator } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const OteriaDenombrementParadoxesCoursPage = () => {
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
            <span className="text-teal-600 font-medium">Séance 7 - Cours</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4 text-teal-900">Chapitre 8 : Introduction au dénombrement</h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto mb-6">
            Coefficients binomiaux, binôme de Newton, Paradoxe des anniversaires — Applications en cryptographie et sécurité informatique
          </p>

          {/* Informations de chapitre */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Séance</span>
                  <span className="text-2xl font-bold text-blue-900">7</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Durée estimée</span>
                  <span className="text-2xl font-bold text-blue-900">4h</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Niveau</span>
                  <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    Intermédiaire
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Ressources pédagogiques */}
          <div className="max-w-4xl mx-auto mb-6">
            <div className="bg-white border border-blue-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-blue-900 mb-4 text-center">
                Coefficients binomiaux, binôme de Newton, Paradoxe des anniversaires
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg cursor-default font-medium shadow-md">
                  <BookOpen className="h-5 w-5 mx-auto mb-2" />
                  Cours
                </button>
                <Link to="/formation/oteria/denombrement-exercices" className="group">
                  <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium group-hover:scale-105 shadow-md hover:shadow-lg">
                    <Target className="h-5 w-5 mx-auto mb-2" />
                    Exercices
                  </button>
                </Link>
                <Link to="/formation/oteria/denombrement-flashcards" className="group">
                  <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium group-hover:scale-105 shadow-md hover:shadow-lg">
                    <Calculator className="h-5 w-5 mx-auto mb-2" />
                    Flashcards
                  </button>
                </Link>
                <Link to="/formation/oteria/denombrement-qcm" className="group">
                  <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium group-hover:scale-105 shadow-md hover:shadow-lg">
                    <Zap className="h-5 w-5 mx-auto mb-2" />
                    QCM
                  </button>
                </Link>
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

        {/* Section 1: Introduction */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Shield className="h-6 w-6" />
              1. Introduction
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4 text-lg">
              <p>
                Le dénombrement consiste à calculer le nombre de façons possibles de réaliser une configuration donnée.
              </p>
              <p>
                C'est une base essentielle en probabilités, combinatoire et informatique (analyse d'algorithmes, cryptographie, théorie des codes).
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Factorielle et permutations */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Target className="h-6 w-6" />
              2. Factorielle et permutations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Définition</p>
                <p className="mb-3">
                  Soit <LatexRenderer latex="E" block={false} /> un ensemble fini de <LatexRenderer latex="n" block={false} /> éléments.
                </p>
                <p className="mb-3">
                  Une permutation de <LatexRenderer latex="E" block={false} /> est une bijection de <LatexRenderer latex="E" block={false} /> sur lui-même.
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded my-4">
                  <LatexRenderer latex="\text{Nombre de permutations de } n \text{ éléments} = n! = 1 \times 2 \times \dots \times n" block={true} />
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Valeurs usuelles</p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                  <LatexRenderer latex="0! = 1, \quad 1! = 1, \quad 2! = 2, \quad 3! = 6, \quad 4! = 24, \quad 5! = 120" block={true} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3: Les définitions simples */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Calculator className="h-6 w-6" />
              3. Les définitions simples
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              {/* Permutation */}
              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Permutation</p>
                <p className="mb-3">
                  On utilise tous les éléments, et l'ordre compte. C'est un ordre complet des éléments.
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded my-4">
                  <p className="font-semibold mb-2 text-blue-700">Formule</p>
                  <LatexRenderer latex="P_n = n!" block={true} />
                </div>
                <div className="bg-blue-100 border border-blue-300 rounded p-4">
                  <p className="font-semibold text-blue-900 mb-2">Exemple</p>
                  <p className="mb-2">
                    Avec A, B, C, les permutations sont : ABC, ACB, BAC, BCA, CAB, CBA
                  </p>
                  <p>
                    Il y en a <LatexRenderer latex="3! = 6" block={false} />.
                  </p>
                </div>
              </div>

              {/* Arrangement */}
              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Arrangement</p>
                <p className="mb-3">
                  On choisit <LatexRenderer latex="p" block={false} /> éléments parmi <LatexRenderer latex="n" block={false} />, et l'ordre compte. On ne prend pas tout le monde, mais l'ordre des choisis est important.
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded my-4">
                  <p className="font-semibold mb-2 text-blue-700">Formule</p>
                  <LatexRenderer latex="A_n^p = \frac{n!}{(n-p)!}" block={true} />
                </div>
                <div className="bg-blue-100 border border-blue-300 rounded p-4">
                  <p className="font-semibold text-blue-900 mb-2">Exemple</p>
                  <p className="mb-2">
                    Avec A, B, C, D, former des mots de 2 lettres : AB, AC, AD, BA, BC, BD, CA, CB, CD, DA, DB, DC
                  </p>
                  <p>
                    Il y en a 12.
                  </p>
                </div>
              </div>

              {/* Combinaison */}
              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Combinaison</p>
                <p className="mb-3">
                  On choisit <LatexRenderer latex="p" block={false} /> éléments parmi <LatexRenderer latex="n" block={false} />, et l'ordre ne compte pas. On s'intéresse seulement à qui est choisi, pas à dans quel ordre.
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded my-4">
                  <p className="font-semibold mb-2 text-blue-700">Formule</p>
                  <LatexRenderer latex="C_n^p = \frac{n!}{p!(n-p)!}" block={true} />
                </div>
                <div className="bg-blue-100 border border-blue-300 rounded p-4">
                  <p className="font-semibold text-blue-900 mb-2">Exemple</p>
                  <p className="mb-2">
                    Avec A, B, C, D, former des groupes de 2 lettres : AB, AC, AD, BC, BD, CD
                  </p>
                  <p>
                    Il y en a 6.
                  </p>
                </div>
              </div>

              {/* Résumé visuel */}
              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Résumé visuel</p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b-2 border-blue-300">
                        <th className="text-left py-2 px-3 font-semibold text-blue-900">Type</th>
                        <th className="text-left py-2 px-3 font-semibold text-blue-900">Ordre ?</th>
                        <th className="text-left py-2 px-3 font-semibold text-blue-900">Tout pris ?</th>
                        <th className="text-left py-2 px-3 font-semibold text-blue-900">Formule</th>
                        <th className="text-left py-2 px-3 font-semibold text-blue-900">Exemple (n=4, p=2)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-blue-200">
                        <td className="py-2 px-3">Permutation</td>
                        <td className="py-2 px-3">Oui</td>
                        <td className="py-2 px-3">Oui</td>
                        <td className="py-2 px-3"><LatexRenderer latex="n!" block={false} /></td>
                        <td className="py-2 px-3">ABCD, BACD, ...</td>
                      </tr>
                      <tr className="border-b border-blue-200">
                        <td className="py-2 px-3">Arrangement</td>
                        <td className="py-2 px-3">Oui</td>
                        <td className="py-2 px-3">Non</td>
                        <td className="py-2 px-3"><LatexRenderer latex="\frac{n!}{(n-p)!}" block={false} /></td>
                        <td className="py-2 px-3">AB, AC, AD, BA, ...</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">Combinaison</td>
                        <td className="py-2 px-3">Non</td>
                        <td className="py-2 px-3">Non</td>
                        <td className="py-2 px-3"><LatexRenderer latex="\frac{n!}{p!(n-p)!}" block={false} /></td>
                        <td className="py-2 px-3">AB, AC, AD, BC, BD, CD</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 4: Coefficients binomiaux */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Zap className="h-6 w-6" />
              4. Coefficients binomiaux
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Définition</p>
                <p className="mb-3">
                  Le nombre de sous-ensembles de <LatexRenderer latex="p" block={false} /> éléments dans un ensemble de <LatexRenderer latex="n" block={false} /> éléments est noté :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded my-4">
                  <LatexRenderer latex="\binom{n}{p} = \frac{n!}{p!(n-p)!}, \quad \text{pour } 0 \leq p \leq n" block={true} />
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Propriétés</p>
                <div className="space-y-3">
                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <p className="font-semibold mb-2 text-blue-700">Symétrie</p>
                    <LatexRenderer latex="\binom{n}{p} = \binom{n}{n-p}" block={true} />
                  </div>

                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <p className="font-semibold mb-2 text-blue-700">Relations diagonales</p>
                    <LatexRenderer latex="p \binom{n}{p} = n \binom{n-1}{p-1}" block={true} />
                  </div>

                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <p className="font-semibold mb-2 text-blue-700">Triangle de Pascal</p>
                    <LatexRenderer latex="\binom{n}{p} = \binom{n-1}{p-1} + \binom{n-1}{p}" block={true} />
                  </div>
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Exemples pratiques</p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                  <LatexRenderer latex="\binom{n}{2} = \frac{n(n-1)}{2}, \quad \binom{n}{3} = \frac{n(n-1)(n-2)}{6}" block={true} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 5: Binôme de Newton */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Target className="h-6 w-6" />
              5. Binôme de Newton
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              <div>
                <p className="mb-3">
                  Pour <LatexRenderer latex="a,b \in \mathbb{R}" block={false} /> et <LatexRenderer latex="n \in \mathbb{N}" block={false} /> :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded my-4">
                  <LatexRenderer latex="(a+b)^n = \sum_{k=0}^n \binom{n}{k} a^k b^{n-k}" block={true} />
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Cas particulier</p>
                <p className="mb-3">
                  En posant <LatexRenderer latex="a=b=1" block={false} /> :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded my-4">
                  <LatexRenderer latex="\sum_{k=0}^n \binom{n}{k} = 2^n" block={true} />
                </div>
                <div className="bg-blue-100 border border-blue-300 rounded p-4 mt-4">
                  <p className="font-semibold text-blue-900 mb-2">Interprétation</p>
                  <p>
                    Ainsi, un ensemble de <LatexRenderer latex="n" block={false} /> éléments possède <LatexRenderer latex="2^n" block={false} /> sous-ensembles.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 6: Raisonnements classiques */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <BookOpen className="h-6 w-6" />
              6. Raisonnements classiques de dénombrement
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4 text-lg">
              <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                <p className="font-semibold mb-2 text-blue-700">Principe multiplicatif</p>
                <p>
                  Choisir successivement <LatexRenderer latex="k" block={false} /> objets avec <LatexRenderer latex="n_1,n_2,\dots,n_k" block={false} /> choix possibles donne <LatexRenderer latex="n_1 \times n_2 \times \dots \times n_k" block={false} /> possibilités.
                </p>
              </div>

              <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                <p className="font-semibold mb-2 text-blue-700">Principe additif</p>
                <p>
                  Si deux choix sont incompatibles (disjoints), le nombre total est une somme.
                </p>
              </div>

              <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                <p className="font-semibold mb-2 text-blue-700">Comptage par complémentarité</p>
                <p>
                  Parfois, il est plus simple de compter le nombre total puis de retrancher les cas interdits.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 7: Paradoxe des anniversaires */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Shield className="h-6 w-6" />
              7. Paradoxe des anniversaires
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Énoncé</p>
                <p>
                  Dans un groupe de personnes, quelle est la probabilité que deux d'entre elles aient le même anniversaire ?
                </p>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Analyse</p>
                <p className="mb-3">
                  Nombre total de façons d'attribuer un anniversaire à <LatexRenderer latex="k" block={false} /> personnes : <LatexRenderer latex="365^k" block={false} /> (si l'on suppose 365 jours, sans années bissextiles).
                </p>
                <p className="mb-3">
                  Nombre de façons sans collision (tous les anniversaires distincts) :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded my-4">
                  <LatexRenderer latex="365 \times 364 \times \dots \times (365-k+1) = \frac{365!}{(365-k)!}" block={true} />
                </div>
              </div>

              <div>
                <p className="mb-3">
                  Donc, la probabilité que tous aient des dates différentes :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded my-4">
                  <LatexRenderer latex="P(\text{pas de collision}) = \frac{365 \times 364 \times \dots \times (365-k+1)}{365^k}" block={true} />
                </div>
              </div>

              <div>
                <p className="mb-3">
                  La probabilité qu'il y ait au moins deux personnes avec le même anniversaire :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded my-4">
                  <LatexRenderer latex="P(\text{collision}) = 1 - P(\text{pas de collision})" block={true} />
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Résultat surprenant</p>
                <div className="bg-blue-100 border border-blue-300 rounded p-4">
                  <p className="mb-2">
                    Dès <LatexRenderer latex="k=23" block={false} />, la probabilité dépasse 50%.
                  </p>
                  <p className="font-semibold text-blue-900">
                    C'est le <span className="text-blue-700">paradoxe des anniversaires</span>.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 8: Limites du calcul informatique */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Zap className="h-6 w-6" />
              8. Limites du calcul informatique
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4 text-lg">
              <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                <p>
                  La factorielle croît extrêmement vite : <LatexRenderer latex="100! \approx 9.3 \times 10^{157}" block={false} />
                </p>
              </div>

              <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                <p>
                  Les coefficients binomiaux deviennent énormes, ce qui nécessite l'usage de bibliothèques de calcul symbolique.
                </p>
              </div>

              <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                <p>
                  En informatique, on préfère souvent les approximations (formule de Stirling, méthodes numériques).
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 9: Cas pratique */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Target className="h-6 w-6" />
              9. Cas pratique
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Exemple</p>
                <p className="mb-3">
                  Calcul de la probabilité d'une collision d'anniversaire pour 23 personnes :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded my-4">
                  <LatexRenderer latex="P(\text{collision}) \approx 0.507" block={true} />
                </div>
              </div>

              <div className="bg-blue-100 border border-blue-300 rounded p-4">
                <p className="font-semibold text-blue-900 mb-3">Application en sécurité informatique</p>
                <p>
                  Cette probabilité élevée illustre l'importance du raisonnement combinatoire en sécurité informatique (attaques par collision dans les fonctions de hachage).
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

export default OteriaDenombrementParadoxesCoursPage;

