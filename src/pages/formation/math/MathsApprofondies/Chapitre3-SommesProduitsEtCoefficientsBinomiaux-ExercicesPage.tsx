import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';

const Chapitre3SommesProduitsEtCoefficientsBinomiauxExercicesPage = () => {
  const [visibleCorrections, setVisibleCorrections] = useState<{[key: string]: boolean}>({});

  const toggleCorrection = (exerciseId: string) => {
    setVisibleCorrections(prev => ({
      ...prev,
      [exerciseId]: !prev[exerciseId]
    }));
  };

  const DifficultyHeader = ({ 
    level, 
    title, 
    icon: Icon, 
  }: { 
    level: string; 
    title: string; 
    icon: any; 
  }) => (
    <div className="bg-gradient-to-r from-blue-100 to-blue-50 border-l-4 border-blue-500 p-6 mb-6 rounded-r-lg shadow-sm">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-blue-500 text-white rounded-lg">
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{level} : {title}</h2>
        </div>
      </div>
    </div>
  );

  const ExerciseCard = ({ 
    id, 
    title, 
    content, 
    correction, 
    difficulty 
  }: { 
    id: string; 
    title: string; 
    content: React.ReactNode; 
    correction: React.ReactNode; 
    difficulty: string; 
  }) => (
    <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex items-start gap-3 mb-4">
          <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
            {title}
          </div>
          <div className="text-xs text-blue-500 bg-blue-50 px-2 py-1 rounded">
            {difficulty}
          </div>
        </div>
        
        <div className="mb-4">
          {content}
        </div>
        
        <Button
          onClick={() => toggleCorrection(id)}
          variant={visibleCorrections[id] ? "secondary" : "default"}
          className="mb-4"
        >
          {visibleCorrections[id] ? "Masquer la correction" : "Afficher la correction"}
        </Button>
        
        {visibleCorrections[id] && (
          <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
            <h4 className="font-semibold text-green-800 mb-2">Corrigé détaillé</h4>
            <div className="text-green-800">
              {correction}
            </div>
          </div>
        )}
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-[#EEF3FC]">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-[#2D5BFF]">
            <Link to="/" className="flex items-center gap-1 hover:text-[#1e3a8a] transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <Link to="/formations" className="hover:text-[#1e3a8a] transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <Link to="/formation/maths-choix" className="hover:text-[#1e3a8a] transition-colors">
              Choix option Maths
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <Link to="/formation/maths-approfondies" className="hover:text-[#1e3a8a] transition-colors">
              Maths Approfondies
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <span className="text-[#2D5BFF] font-bold">Exercices - Chapitre 3</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 mb-8">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Exercices - Chapitre 3 : Sommes, produits & coefficients binomiaux
            </h1>
            <p className="text-slate-600 text-lg">
              Exercices progressifs pour maîtriser les sommes, produits et coefficients binomiaux.
            </p>
          </div>
        </Card>

        <DifficultyHeader
          level="Module 1"
          title="Quelques sommes à calculer"
          icon={BookOpen}
        />

        <ExerciseCard
          id="ex1"
          title="Exercice 1"
          difficulty="Facile"
          content={
            <div>
              <p>Calculer la somme suivante pour <LatexRenderer latex={"n \\geq 3"} /> :</p>
              <div className="text-center my-4">
                <LatexRenderer latex={"\\sum_{k=3}^{n} (2k + 4)"} />
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-blue-600">Décomposition de la somme :</strong>
                <div className="mt-2 text-center">
                  <LatexRenderer latex={"\\sum_{k=3}^{n} (2k + 4) = 2 \\sum_{k=3}^{n} k + \\sum_{k=3}^{n} 4"} />
                </div>
              </div>
              <div>
                <strong className="text-blue-600">Calcul de chaque partie :</strong>
                <div className="mt-2 space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex={"\\sum_{k=3}^{n} k = \\sum_{k=0}^{n} k - (0 + 1 + 2) = \\frac{n(n+1)}{2} - 3"} />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex={"\\sum_{k=3}^{n} 4 = 4(n - 2)"} />
                  </div>
                </div>
              </div>
              <div>
                <strong className="text-blue-600">Résultat final :</strong>
                <div className="mt-2 space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex={"2\\left( \\frac{n(n+1)}{2} - 3 \\right) + 4(n - 2)"} />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex={"= n(n+1) - 6 + 4n - 8"} />
                  </div>
                  <div className="text-center bg-blue-50 p-2 rounded">
                    <LatexRenderer latex={"= n(n + 5) - 14"} />
                  </div>
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex2"
          title="Exercice 2"
          difficulty="Facile"
          content={
            <div>
              <p>Calculer la somme suivante pour <LatexRenderer latex={"n \\in \\mathbb{N}"} /> :</p>
              <div className="text-center my-4">
                <LatexRenderer latex={"\\sum_{k=0}^{n} 3^{k+1}"} />
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-blue-600">Factorisation :</strong>
                <div className="mt-2 text-center">
                  <LatexRenderer latex={"\\sum_{k=0}^{n} 3^{k+1} = 3 \\sum_{k=0}^{n} 3^k"} />
                </div>
              </div>
              <div>
                <strong className="text-blue-600">Somme géométrique :</strong>
                <div className="mt-2 text-center">
                  <LatexRenderer latex={"\\sum_{k=0}^{n} 3^k = \\frac{1 - 3^{n+1}}{1 - 3} = \\frac{3^{n+1} - 1}{2}"} />
                </div>
              </div>
            <div>
                <strong className="text-blue-600">Résultat final :</strong>
                <div className="mt-2 text-center bg-blue-50 p-2 rounded">
                  <LatexRenderer latex={"\\sum_{k=0}^{n} 3^{k+1} = \\frac{3(3^{n+1} - 1)}{2}"} />
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex3"
          title="Exercice 3"
          difficulty="Facile"
          content={
            <div>
              <p>Calculer la somme suivante pour <LatexRenderer latex={"n \\in \\mathbb{N}"} /> :</p>
              <div className="text-center my-4">
                <LatexRenderer latex={"\\sum_{k=0}^{n} 2^{3k+2}"} />
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
            <div>
                <strong className="text-blue-600">Factorisation :</strong>
                <div className="mt-2 text-center">
                  <LatexRenderer latex={"\\sum_{k=0}^{n} 2^{3k+2} = \\sum_{k=0}^{n} 2^2 \\cdot 2^{3k} = 4 \\sum_{k=0}^{n} (2^3)^k = 4 \\sum_{k=0}^{n} 8^k"} />
                </div>
              </div>
                <div>
                <strong className="text-blue-600">Somme géométrique :</strong>
                <div className="mt-2 text-center">
                  <LatexRenderer latex={"\\sum_{k=0}^{n} 8^k = \\frac{1 - 8^{n+1}}{1 - 8} = \\frac{8^{n+1} - 1}{7}"} />
                </div>
                </div>
                <div>
                <strong className="text-blue-600">Résultat final :</strong>
                <div className="mt-2 text-center bg-blue-50 p-2 rounded">
                  <LatexRenderer latex={"\\sum_{k=0}^{n} 2^{3k+2} = \\frac{4(8^{n+1} - 1)}{7}"} />
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex4"
          title="Exercice 4"
          difficulty="Facile"
          content={
            <div>
              <p>Calculer la somme suivante pour <LatexRenderer latex={"n \\in \\mathbb{N}"} /> :</p>
              <div className="text-center my-4">
                <LatexRenderer latex={"\\sum_{k=0}^{n} \\frac{1}{2^{3k+2}}"} />
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-blue-600">Réécriture :</strong>
                <div className="mt-2 text-center">
                  <LatexRenderer latex={"\\frac{1}{2^{3k+2}} = \\frac{1}{2^2 \\cdot 2^{3k}} = \\frac{1}{4} \\cdot \\frac{1}{8^k}"} />
                </div>
              </div>
              <div>
                <strong className="text-blue-600">Factorisation :</strong>
                <div className="mt-2 text-center">
                  <LatexRenderer latex={"\\sum_{k=0}^{n} \\frac{1}{2^{3k+2}} = \\frac{1}{4} \\sum_{k=0}^{n} \\left(\\frac{1}{8}\\right)^k"} />
                </div>
              </div>
              <div>
                <strong className="text-blue-600">Somme géométrique :</strong>
                <div className="mt-2 text-center">
                  <LatexRenderer latex={"\\sum_{k=0}^{n} \\left(\\frac{1}{8}\\right)^k = \\frac{1 - \\left(\\frac{1}{8}\\right)^{n+1}}{1 - \\frac{1}{8}} = \\frac{8}{7}\\left(1 - \\left(\\frac{1}{8}\\right)^{n+1}\\right)"} />
                </div>
              </div>
              <div>
                <strong className="text-blue-600">Résultat final :</strong>
                <div className="mt-2 text-center bg-blue-50 p-2 rounded">
                  <LatexRenderer latex={"\\sum_{k=0}^{n} \\frac{1}{2^{3k+2}} = \\frac{2}{7}\\left(1 - \\left(\\frac{1}{8}\\right)^{n+1}\\right)"} />
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex5"
          title="Exercice 5"
          difficulty="Facile"
          content={
            <div>
              <p>Calculer la somme suivante pour <LatexRenderer latex={"n \\geq 2"} /> :</p>
              <div className="text-center my-4">
                <LatexRenderer latex={"\\sum_{k=2}^{n} \\frac{-1}{3^k}"} />
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-blue-600">Factorisation :</strong>
                <div className="mt-2 text-center">
                  <LatexRenderer latex={"\\sum_{k=2}^{n} \\frac{-1}{3^k} = -\\sum_{k=2}^{n} \\left(\\frac{1}{3}\\right)^k"} />
                </div>
              </div>
              <div>
                <strong className="text-blue-600">Décomposition :</strong>
                <div className="mt-2 text-center">
                  <LatexRenderer latex={"\\sum_{k=2}^{n} \\left(\\frac{1}{3}\\right)^k = \\sum_{k=0}^{n} \\left(\\frac{1}{3}\\right)^k - 1 - \\frac{1}{3}"} />
                </div>
              </div>
              <div>
                <strong className="text-blue-600">Somme géométrique :</strong>
                <div className="mt-2 text-center">
                  <LatexRenderer latex={"\\sum_{k=0}^{n} \\left(\\frac{1}{3}\\right)^k = \\frac{1 - \\left(\\frac{1}{3}\\right)^{n+1}}{1 - \\frac{1}{3}} = \\frac{3}{2}\\left(1 - \\left(\\frac{1}{3}\\right)^{n+1}\\right)"} />
                </div>
              </div>
              <div>
                <strong className="text-blue-600">Résultat final :</strong>
                <div className="mt-2 text-center bg-blue-50 p-2 rounded">
                  <LatexRenderer latex={"\\sum_{k=2}^{n} \\frac{-1}{3^k} = \\frac{1}{6} - \\frac{1}{2} \\left(\\frac{1}{3}\\right)^{n+1}"} />
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex6"
          title="Exercice 6"
          difficulty="Facile"
          content={
            <div>
              <p>Calculer la somme suivante pour <LatexRenderer latex={"n \\in \\mathbb{N}"} /> :</p>
              <div className="text-center my-4">
                <LatexRenderer latex={"\\sum_{k=0}^{2n} 5^{n+k}"} />
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-blue-600">Factorisation :</strong>
                <div className="mt-2 text-center">
                  <LatexRenderer latex={"\\sum_{k=0}^{2n} 5^{n+k} = 5^n \\sum_{k=0}^{2n} 5^k"} />
                </div>
              </div>
              <div>
                <strong className="text-blue-600">Somme géométrique :</strong>
                <div className="mt-2 text-center">
                  <LatexRenderer latex={"\\sum_{k=0}^{2n} 5^k = \\frac{1 - 5^{2n+1}}{1 - 5} = \\frac{5^{2n+1} - 1}{4}"} />
                </div>
              </div>
            <div>
                <strong className="text-blue-600">Résultat final :</strong>
                <div className="mt-2 text-center bg-blue-50 p-2 rounded">
                  <LatexRenderer latex={"\\sum_{k=0}^{2n} 5^{n+k} = \\frac{5^n (5^{2n+1} - 1)}{4}"} />
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex7"
          title="Exercice 7"
          difficulty="Facile"
          content={
            <div>
              <p>Calculer la somme suivante pour <LatexRenderer latex={"n \\in \\mathbb{N}"} /> :</p>
              <div className="text-center my-4">
                <LatexRenderer latex={"\\sum_{k=0}^{n} k(k+1)(k-1)"} />
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-blue-600">Développement :</strong>
                <div className="mt-2 text-center">
                  <LatexRenderer latex={"k(k+1)(k-1) = k(k^2-1) = k^3 - k"} />
                </div>
              </div>
              <div>
                <strong className="text-blue-600">Séparation :</strong>
                <div className="mt-2 text-center">
                  <LatexRenderer latex={"\\sum_{k=0}^{n} (k^3 - k) = \\sum_{k=0}^{n} k^3 - \\sum_{k=0}^{n} k"} />
                </div>
              </div>
              <div>
                <strong className="text-blue-600">Formules classiques :</strong>
                <div className="mt-2 space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex={"\\sum_{k=0}^{n} k^3 = \\left(\\frac{n(n+1)}{2}\\right)^2"} />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex={"\\sum_{k=0}^{n} k = \\frac{n(n+1)}{2}"} />
                  </div>
                </div>
              </div>
              <div>
                <strong className="text-blue-600">Résultat final :</strong>
                <div className="mt-2 text-center bg-blue-50 p-2 rounded">
                  <LatexRenderer latex={"\\sum_{k=0}^{n} k(k+1)(k-1) = \\frac{n(n+1)(n-1)(n+2)}{4}"} />
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex8"
          title="Exercice 8"
          difficulty="Facile"
          content={
            <div>
              <div className="mb-2">
                Montrer : <LatexRenderer latex={"\\forall k \\in \\mathbb{N}, \\quad \\dfrac{1}{(k+1)(k+2)} = \\dfrac{1}{k+1} - \\dfrac{1}{k+2}."} />
              </div>
              <div>
                En déduire : <LatexRenderer latex={"\\sum_{k=0}^{98} \\frac{1}{(k+1)(k+2)}"} />
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-blue-600">1. Par identification :</strong>
                <div className="mt-2 space-y-2">
                  <LatexRenderer latex={"\\frac{1}{k+1} - \\frac{1}{k+2} = \\frac{(k+2)-(k+1)}{(k+1)(k+2)} = \\frac{1}{(k+1)(k+2)}"} />
                  <LatexRenderer latex={"\\frac{1}{(k+1)(k+2)} = \\frac{1}{k+1} - \\frac{1}{k+2}"} />
                </div>
              </div>
              <div>
                <strong className="text-blue-600">2. On applique la linéarité de la somme :</strong>
                <div className="mt-2 space-y-2">
                  <LatexRenderer latex={"\\sum_{k=0}^{98} \\frac{1}{(k+1)(k+2)} = \\sum_{k=0}^{98} \\left( \\frac{1}{k+1} - \\frac{1}{k+2} \\right)"} />
                  <LatexRenderer latex={"= \\left(\\frac{1}{1} - \\frac{1}{2} \\right) + \\left( \\frac{1}{2} - \\frac{1}{3} \\right) + \\cdots + \\left( \\frac{1}{99} - \\frac{1}{100} \\right)"} />
                  <LatexRenderer latex={"= 1 - \\frac{1}{100} = \\frac{99}{100}"} />
              </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex9"
          title="Exercice 9"
          difficulty="Difficile"
          content={
            <div>
              <p>Démontrer par récurrence que pour tout <LatexRenderer latex={"n \\in \\mathbb{N}"} /> :</p>
              <div className="space-y-2">
                <div>1. <LatexRenderer latex={"\\sum_{k=0}^{n} k = \\frac{n(n+1)}{2}"} /></div>
                <div>2. <LatexRenderer latex={"\\sum_{k=0}^{n} k^2 = \\frac{n(n+1)(2n+1)}{6}"} /></div>
                <div>3. <LatexRenderer latex={"\\sum_{k=0}^{n} k^3 = \\frac{n^2(n+1)^2}{4}"} /></div>
              </div>
            </div>
          }
          correction={
            <div className="space-y-6">
              <div>
                <strong className="text-blue-600">1. Somme des entiers :</strong>
                <div className="mt-2 space-y-2">
                  <p><strong>Initialisation :</strong> Pour n = 0, <LatexRenderer latex={"\\sum_{k=0}^{0} k = 0 = \\frac{0(0+1)}{2}"} /></p>
                  <p><strong>Hérédité :</strong> Supposons <LatexRenderer latex={"\\sum_{k=0}^{n} k = \\frac{n(n+1)}{2}"} /> vraie.</p>
                  <LatexRenderer latex={"\\sum_{k=0}^{n+1} k = \\sum_{k=0}^{n} k + (n+1) = \\frac{n(n+1)}{2} + (n+1) = \\frac{n(n+1) + 2(n+1)}{2} = \\frac{(n+1)(n+2)}{2}"} />
                </div>
              </div>
              <div>
                <strong className="text-blue-600">2. Somme des carrés :</strong>
                <div className="mt-2 space-y-2">
                  <p><strong>Initialisation :</strong> Pour n = 0, <LatexRenderer latex={"\\sum_{k=0}^{0} k^2 = 0 = \\frac{0(0+1)(2\\cdot 0+1)}{6}"} /></p>
                  <p><strong>Hérédité :</strong> Supposons <LatexRenderer latex={"\\sum_{k=0}^{n} k^2 = \\frac{n(n+1)(2n+1)}{6}"} /> vraie.</p>
                  <LatexRenderer latex={"\\sum_{k=0}^{n+1} k^2 = \\sum_{k=0}^{n} k^2 + (n+1)^2 = \\frac{n(n+1)(2n+1)}{6} + (n+1)^2"} />
                  <LatexRenderer latex={"= \\frac{n(n+1)(2n+1) + 6(n+1)^2}{6} = \\frac{(n+1)(n(2n+1) + 6(n+1))}{6}"} />
                  <LatexRenderer latex={"= \\frac{(n+1)(2n^2 + n + 6n + 6)}{6} = \\frac{(n+1)(2n^2 + 7n + 6)}{6}"} />
                  <LatexRenderer latex={"= \\frac{(n+1)(n+2)(2n+3)}{6} = \\frac{(n+1)((n+1)+1)(2(n+1)+1)}{6}"} />
                </div>
              </div>
              <div>
                <strong className="text-blue-600">3. Somme des cubes :</strong>
                <div className="mt-2 space-y-2">
                  <p><strong>Initialisation :</strong> Pour n = 0, <LatexRenderer latex={"\\sum_{k=0}^{0} k^3 = 0 = \\frac{0^2(0+1)^2}{4}"} /></p>
                  <p><strong>Hérédité :</strong> Supposons <LatexRenderer latex={"\\sum_{k=0}^{n} k^3 = \\frac{n^2(n+1)^2}{4}"} /> vraie.</p>
                  <LatexRenderer latex={"\\sum_{k=0}^{n+1} k^3 = \\sum_{k=0}^{n} k^3 + (n+1)^3 = \\frac{n^2(n+1)^2}{4} + (n+1)^3"} />
                  <LatexRenderer latex={"= \\frac{n^2(n+1)^2 + 4(n+1)^3}{4} = \\frac{(n+1)^2(n^2 + 4(n+1))}{4}"} />
                  <LatexRenderer latex={"= \\frac{(n+1)^2(n^2 + 4n + 4)}{4} = \\frac{(n+1)^2(n+2)^2}{4} = \\frac{(n+1)^2((n+1)+1)^2}{4}"} />
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex10"
          title="Exercice 10"
          difficulty="Difficile"
          content={
            <div>
              <p>Montrer par récurrence les propriétés suivantes :</p>
              <div className="space-y-2">
                <div>1. <LatexRenderer latex={"\\forall n \\geq 4, \\quad 2^n \\leq n!"} /></div>
                <div>2. <LatexRenderer latex={"\\forall x \\geq 0,\\ \\forall n \\in \\mathbb{N},\\ \\ (1 + x)^n \\geq 1 + nx"} /></div>
              </div>
            </div>
          }
          correction={
            <div className="space-y-6">
              <div>
                <strong className="text-blue-600">1. Inégalité 2^n ≤ n! :</strong>
                <div className="mt-2 space-y-2">
                  <p><strong>Initialisation :</strong> Pour n = 4, <LatexRenderer latex={"2^4 = 16 \\leq 24 = 4!"} /></p>
                  <p><strong>Hérédité :</strong> Supposons <LatexRenderer latex={"2^n \\leq n!"} /> vraie pour n ≥ 4.</p>
                  <LatexRenderer latex={"2^{n+1} = 2 \\cdot 2^n \\leq 2 \\cdot n! \\leq (n+1) \\cdot n! = (n+1)!"} />
                  <p>Car n ≥ 4, donc 2 ≤ n+1.</p>
                </div>
              </div>
              <div>
                <strong className="text-blue-600">2. Inégalité de Bernoulli :</strong>
                <div className="mt-2 space-y-2">
                  <p><strong>Initialisation :</strong> Pour n = 0, <LatexRenderer latex={"1 \\geq 1"} /> (égalité).</p>
                  <p><strong>Hérédité :</strong> Supposons <LatexRenderer latex={"(1 + x)^n \\geq 1 + nx"} /> vraie.</p>
                  <LatexRenderer latex={"(1 + x)^{n+1} = (1 + x)^n \\cdot (1 + x) \\geq (1 + nx)(1 + x)"} />
                  <LatexRenderer latex={"= 1 + x + nx + nx^2 = 1 + (n+1)x + nx^2 \\geq 1 + (n+1)x"} />
                  <p>Car <LatexRenderer latex={"nx^2 \\geq 0"} /> pour x ≥ 0.</p>
                </div>
              </div>
            </div>
          }
        />







      </div>
    </div>
  );
};

export default Chapitre3SommesProduitsEtCoefficientsBinomiauxExercicesPage; 
