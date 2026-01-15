import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ArrowLeft, BookOpen, Target, Zap, Shield, Code, Calculator } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const OteriaProbabilitesIntroductionCoursPage = () => {
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
            <span className="text-teal-600 font-medium">Séance 8 - Cours</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4 text-teal-900">Chapitre 8 : Introduction aux probabilités</h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto mb-6">
            Génération d'aléatoire, Règles addition / multiplication, indépendance — Applications en simulation et sécurité
          </p>

          {/* Informations de chapitre */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Séance</span>
                  <span className="text-2xl font-bold text-blue-900">8</span>
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
                Génération d'aléatoire, Règles addition / multiplication, indépendance
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg cursor-default font-medium shadow-md">
                  <BookOpen className="h-5 w-5 mx-auto mb-2" />
                  Cours
                </button>
                <Link to="/formation/oteria/probabilites-exercices" className="group">
                  <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium group-hover:scale-105 shadow-md hover:shadow-lg">
                    <Target className="h-5 w-5 mx-auto mb-2" />
                    Exercices
                  </button>
                </Link>
                <Link to="/formation/oteria/probabilites-flashcards" className="group">
                  <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium group-hover:scale-105 shadow-md hover:shadow-lg">
                    <Calculator className="h-5 w-5 mx-auto mb-2" />
                    Flashcards
                  </button>
                </Link>
                <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg cursor-not-allowed opacity-50 font-medium shadow-md">
                  <Zap className="h-5 w-5 mx-auto mb-2" />
                  QCM
                </button>
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

        {/* Section 1: Espaces probabilisés */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Target className="h-6 w-6" />
              1. Espaces probabilisés : Fondements
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Définition</p>
                <p className="mb-3">
                  Une <strong>épreuve aléatoire</strong> a un univers <LatexRenderer latex="\Omega" block={false} /> d'issues possibles.
                </p>
                <p className="mb-3">
                  Un <strong>système d'événements</strong> <LatexRenderer latex="A \subset \mathcal{P}(\Omega)" block={false} /> satisfait :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded my-4">
                  <LatexRenderer latex="\Omega \in A, \quad A \in A \implies A^c \in A, \quad \bigcup_{k\in I} A_k \in A" block={true} />
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Événements notables</p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                  <LatexRenderer latex="\Omega \; (\text{certain}), \quad \varnothing \; (\text{impossible}), \quad \{\omega\} \; (\text{élémentaire})" block={true} />
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Théorèmes de limite monotone</p>
                <div className="space-y-4">
                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <p className="font-semibold mb-2 text-blue-700">Si <LatexRenderer latex="A_n \uparrow" block={false} /></p>
                    <LatexRenderer latex="P\!\left(\bigcup_{k=0}^\infty A_k\right) = \lim_{n\to\infty} P(A_n)" block={true} />
                  </div>

                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <p className="font-semibold mb-2 text-blue-700">Si <LatexRenderer latex="A_n \downarrow" block={false} /></p>
                    <LatexRenderer latex="P\!\left(\bigcap_{k=0}^\infty A_k\right) = \lim_{n\to\infty} P(A_n)" block={true} />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Probabilités et opérations */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Zap className="h-6 w-6" />
              2. Probabilités et opérations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Axiomes de Kolmogorov</p>
                <p className="mb-3">
                  Une probabilité <LatexRenderer latex="P : A \to [0,1]" block={false} /> vérifie :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded my-4">
                  <LatexRenderer latex="P(\Omega)=1, \qquad P\!\left(\bigcup_{i\in I} A_i\right)=\sum_{i\in I} P(A_i) \quad \text{si } (A_i) \text{ incompatibles}" block={true} />
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Formules fondamentales</p>
                <div className="space-y-4">
                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <p className="font-semibold mb-2 text-blue-700">Formule du crible</p>
                    <LatexRenderer latex="P(A\cup B) = P(A) + P(B) - P(A\cap B)" block={true} />
                  </div>

                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <p className="font-semibold mb-2 text-blue-700">Propriétés</p>
                    <LatexRenderer latex="P(\varnothing)=0, \quad 0 \leq P(A) \leq 1, \quad A\subset B \implies P(A)\leq P(B)" block={true} />
                  </div>
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Équiprobabilité</p>
                <p className="mb-3">
                  Si <LatexRenderer latex="\Omega" block={false} /> est fini et toutes les issues sont équiprobables :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                  <LatexRenderer latex="P(A) = \frac{|A|}{|\Omega|}" block={true} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3: Conditionnement et indépendance */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Shield className="h-6 w-6" />
              3. Conditionnement et indépendance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Probabilité conditionnelle</p>
                <p className="mb-3">
                  Si <LatexRenderer latex="P(B)>0" block={false} />, alors :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded my-4">
                  <LatexRenderer latex="P_B(A) = \frac{P(A\cap B)}{P(B)}" block={true} />
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Indépendance</p>
                <p className="mb-3">
                  Deux événements <LatexRenderer latex="A,B" block={false} /> sont indépendants si :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded my-4">
                  <LatexRenderer latex="P(A\cap B) = P(A)P(B)" block={true} />
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Formules essentielles</p>
                <div className="space-y-4">
                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <p className="font-semibold mb-2 text-blue-700">Probabilités composées</p>
                    <LatexRenderer latex="P\!\left(\bigcap_{k=1}^n A_k\right) = P(A_1)P_{A_1}(A_2)\cdots P_{A_1\cap\dots\cap A_{n-1}}(A_n)" block={true} />
                  </div>

                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <p className="font-semibold mb-2 text-blue-700">Formule des probabilités totales</p>
                    <LatexRenderer latex="P(C) = \sum_{k\in I} P(B_k)P_{B_k}(C), \quad \text{où } (B_k) \text{ forme une partition de } \Omega" block={true} />
                  </div>

                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <p className="font-semibold mb-2 text-blue-700">Formule de Bayes</p>
                    <LatexRenderer latex="P_B(A) = \frac{P(A)P_A(B)}{P(B)}" block={true} />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 4: Génération de hasard et informatique */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Code className="h-6 w-6" />
              4. Génération de hasard et informatique
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Simulation en pratique</p>
                <p className="mb-3">
                  En Python, le module <code className="bg-gray-100 px-2 py-1 rounded">random</code> permet de simuler des expériences aléatoires :
                </p>
                <div className="space-y-3">
                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <code className="text-blue-700">random.randint(a,b)</code>
                    <p className="text-base mt-1">Tire un entier entre <LatexRenderer latex="a" block={false} /> et <LatexRenderer latex="b" block={false} />.</p>
                  </div>

                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <code className="text-blue-700">random.random()</code>
                    <p className="text-base mt-1">Tire un réel uniforme dans <LatexRenderer latex="[0,1[" block={false} />.</p>
                  </div>

                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <code className="text-blue-700">random.choice(L)</code>
                    <p className="text-base mt-1">Choisit un élément d'une liste <LatexRenderer latex="L" block={false} />.</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Limites</p>
                <div className="space-y-3">
                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <p>Les générateurs sont pseudo-aléatoires, basés sur des algorithmes déterministes.</p>
                  </div>

                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <p>En sécurité, on préfère des générateurs cryptographiquement sûrs.</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 5: Cas pratique - Paradoxe de Monty Hall */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Target className="h-6 w-6" />
              5. Cas pratique : Le paradoxe de Monty Hall
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Énoncé</p>
                <p className="mb-3">Un jeu télévisé propose 3 portes :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>derrière l'une, une voiture (gain),</li>
                  <li>derrière les deux autres, des chèvres (perte).</li>
                </ul>
                <p className="mt-4 mb-3">Le joueur choisit une porte.</p>
                <p className="mb-3">
                  L'animateur, qui connaît l'emplacement du gain, ouvre une autre porte contenant une chèvre.
                </p>
                <p className="mb-3">
                  Le joueur a alors le choix : garder sa porte ou changer.
                </p>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Analyse probabiliste</p>
                <div className="space-y-4">
                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <p className="font-semibold mb-2 text-blue-700">Stratégie 1 : garder sa porte</p>
                    <p>
                      La probabilité de gagner est <LatexRenderer latex="\frac{1}{3}" block={false} />.
                    </p>
                  </div>

                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <p className="font-semibold mb-2 text-blue-700">Stratégie 2 : changer de porte</p>
                    <p>
                      La probabilité de gagner est <LatexRenderer latex="\frac{2}{3}" block={false} />.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Conclusion</p>
                <div className="bg-blue-100 border border-blue-300 rounded p-4">
                  <p className="mb-3">
                    Le paradoxe montre que <strong>changer de choix double les chances de gagner</strong>.
                  </p>
                  <p className="text-blue-900">
                    Il illustre l'importance de bien raisonner avec les probabilités conditionnelles.
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

export default OteriaProbabilitesIntroductionCoursPage;

