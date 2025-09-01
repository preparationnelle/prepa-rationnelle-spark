import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';

const Chapitre13SeriesNumeriquesExercicesPage = () => {
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
            <span className="text-[#2D5BFF] font-bold">Exercices - Chapitre 13</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 mb-8">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Exercices - Chapitre 13 : Séries numériques
            </h1>
            <p className="text-slate-600 text-lg">
              Exercices progressifs sur la convergence et le calcul de sommes de séries
            </p>
          </div>
        </Card>

        <DifficultyHeader
          level="Module 1"
          title="Convergence et somme de séries"
          icon={BookOpen}
        />

        <ExerciseCard
          id="ex1"
          title="Exercice 1"
          difficulty="Moyen"
          content={
            <div className="space-y-6">
              <p><strong>Énoncé :</strong> Justifier la convergence et donner la somme des séries suivantes :</p>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-blue-800 mb-4">Séries géométriques :</h4>
                <div className="space-y-3">
                  <div><strong>1.</strong> <LatexRenderer latex={"\\displaystyle \\sum_{n=0}^{\\infty} \\frac{1}{3^n}"} /></div>
                  <div><strong>2.</strong> <LatexRenderer latex={"\\displaystyle \\sum_{n=0}^{\\infty} \\frac{2^{n+1}}{5^n}"} /></div>
                  <div><strong>3.</strong> <LatexRenderer latex={"\\displaystyle \\sum_{n=0}^{\\infty} \\frac{(-1)^{n-1}}{3^{n+1}}"} /></div>
                </div>
                
                <Button
                  onClick={() => toggleCorrection("geo")}
                  variant={visibleCorrections["geo"] ? "secondary" : "default"}
                  className="mt-4"
                >
                  {visibleCorrections["geo"] ? "Masquer les corrections" : "Afficher les corrections"}
                </Button>
                
                {visibleCorrections["geo"] && (
                  <div className="mt-4 space-y-4">
                    <div>
                      <strong className="text-blue-600">1.</strong> <LatexRenderer latex={"\\displaystyle \\sum_{n=0}^{\\infty} \\frac{1}{3^n}"} />
                      <div className="mt-2 space-y-2">
                        <div>Il s'agit d'une série géométrique de raison <LatexRenderer latex={"r = \\frac{1}{3}"} />.</div>
                        <div>Comme <LatexRenderer latex={"|r| = \\frac{1}{3} < 1"} />, la série converge.</div>
                        <div className="text-center bg-blue-50 p-2 rounded">
                          <LatexRenderer latex={"\\sum_{n=0}^{\\infty} \\frac{1}{3^n} = \\frac{1}{1 - \\frac{1}{3}} = \\frac{3}{2}"} />
                        </div>
                      </div>
                    </div>

                    <div>
                      <strong className="text-blue-600">2.</strong> <LatexRenderer latex={"\\displaystyle \\sum_{n=0}^{\\infty} \\frac{2^{n+1}}{5^n}"} />
                      <div className="mt-2 space-y-2">
                        <div>On réécrit : <LatexRenderer latex={"\\frac{2^{n+1}}{5^n} = 2 \\cdot \\frac{2^n}{5^n} = 2 \\left(\\frac{2}{5}\\right)^n"} /></div>
                        <div>Donc : <LatexRenderer latex={"\\sum_{n=0}^{\\infty} \\frac{2^{n+1}}{5^n} = 2 \\sum_{n=0}^{\\infty} \\left(\\frac{2}{5}\\right)^n"} /></div>
                        <div>Comme <LatexRenderer latex={"\\left|\\frac{2}{5}\\right| < 1"} />, la série converge.</div>
                        <div className="text-center bg-blue-50 p-2 rounded">
                          <LatexRenderer latex={"= 2 \\cdot \\frac{1}{1 - \\frac{2}{5}} = 2 \\cdot \\frac{5}{3} = \\frac{10}{3}"} />
                        </div>
                      </div>
                    </div>

                    <div>
                      <strong className="text-blue-600">3.</strong> <LatexRenderer latex={"\\displaystyle \\sum_{n=0}^{\\infty} \\frac{(-1)^{n-1}}{3^{n+1}}"} />
                      <div className="mt-2 space-y-2">
                        <div>On réécrit : <LatexRenderer latex={"\\frac{(-1)^{n-1}}{3^{n+1}} = \\frac{-1}{3} \\cdot \\frac{(-1)^n}{3^n} = \\frac{-1}{3} \\left(\\frac{-1}{3}\\right)^n"} /></div>
                        <div>Donc : <LatexRenderer latex={"\\sum_{n=0}^{\\infty} \\frac{(-1)^{n-1}}{3^{n+1}} = \\frac{-1}{3} \\sum_{n=0}^{\\infty} \\left(\\frac{-1}{3}\\right)^n"} /></div>
                        <div>Comme <LatexRenderer latex={"\\left|\\frac{-1}{3}\\right| = \\frac{1}{3} < 1"} />, la série converge.</div>
                        <div className="text-center bg-blue-50 p-2 rounded">
                          <LatexRenderer latex={"= \\frac{-1}{3} \\cdot \\frac{1}{1 + \\frac{1}{3}} = \\frac{-1}{3} \\cdot \\frac{3}{4} = -\\frac{1}{4}"} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-blue-800 mb-4">Séries exponentielles :</h4>
                <div className="space-y-3">
                  <div><strong>4.</strong> <LatexRenderer latex={"\\displaystyle \\sum_{n=0}^{\\infty} \\frac{1}{n!}"} /></div>
                  <div><strong>5.</strong> <LatexRenderer latex={"\\displaystyle \\sum_{n=0}^{\\infty} \\frac{-1}{n!}"} /></div>
                  <div><strong>6.</strong> <LatexRenderer latex={"\\displaystyle \\sum_{n=0}^{\\infty} \\frac{(-2)^n}{n!}"} /></div>
                  <div><strong>7.</strong> <LatexRenderer latex={"\\displaystyle \\sum_{n=0}^{\\infty} \\frac{3^{n+1}}{n!}"} /></div>
                  <div><strong>8.</strong> <LatexRenderer latex={"\\displaystyle \\sum_{n=0}^{\\infty} \\frac{(-3)^{n-1}}{n!}"} /></div>
                </div>
                
                <Button
                  onClick={() => toggleCorrection("exp")}
                  variant={visibleCorrections["exp"] ? "secondary" : "default"}
                  className="mt-4"
                >
                  {visibleCorrections["exp"] ? "Masquer les corrections" : "Afficher les corrections"}
                </Button>
                
                {visibleCorrections["exp"] && (
                  <div className="mt-4 space-y-4">
                    <div>
                      <strong className="text-blue-600">4.</strong> <LatexRenderer latex={"\\displaystyle \\sum_{n=0}^{\\infty} \\frac{1}{n!}"} />
                      <div className="mt-2 space-y-2">
                        <div>C'est le développement en série de <LatexRenderer latex={"e^x"} /> pour <LatexRenderer latex={"x = 1"} />.</div>
                        <div className="text-center bg-blue-50 p-2 rounded">
                          <LatexRenderer latex={"\\sum_{n=0}^{\\infty} \\frac{1}{n!} = e^1 = e"} />
                        </div>
                      </div>
                    </div>

                    <div>
                      <strong className="text-blue-600">5.</strong> <LatexRenderer latex={"\\displaystyle \\sum_{n=0}^{\\infty} \\frac{-1}{n!}"} />
                      <div className="mt-2 space-y-2">
                        <div>On factorise : <LatexRenderer latex={"\\sum_{n=0}^{\\infty} \\frac{-1}{n!} = -\\sum_{n=0}^{\\infty} \\frac{1}{n!}"} /></div>
                        <div className="text-center bg-blue-50 p-2 rounded">
                          <LatexRenderer latex={"= -e"} />
                        </div>
                      </div>
                    </div>

                    <div>
                      <strong className="text-blue-600">6.</strong> <LatexRenderer latex={"\\displaystyle \\sum_{n=0}^{\\infty} \\frac{(-2)^n}{n!}"} />
                      <div className="mt-2 space-y-2">
                        <div>C'est le développement en série de <LatexRenderer latex={"e^x"} /> pour <LatexRenderer latex={"x = -2"} />.</div>
                        <div className="text-center bg-blue-50 p-2 rounded">
                          <LatexRenderer latex={"\\sum_{n=0}^{\\infty} \\frac{(-2)^n}{n!} = e^{-2}"} />
                        </div>
                      </div>
                    </div>

                    <div>
                      <strong className="text-blue-600">7.</strong> <LatexRenderer latex={"\\displaystyle \\sum_{n=0}^{\\infty} \\frac{3^{n+1}}{n!}"} />
                      <div className="mt-2 space-y-2">
                        <div>On factorise : <LatexRenderer latex={"\\frac{3^{n+1}}{n!} = 3 \\cdot \\frac{3^n}{n!}"} /></div>
                        <div>Donc : <LatexRenderer latex={"\\sum_{n=0}^{\\infty} \\frac{3^{n+1}}{n!} = 3 \\sum_{n=0}^{\\infty} \\frac{3^n}{n!}"} /></div>
                        <div className="text-center bg-blue-50 p-2 rounded">
                          <LatexRenderer latex={"= 3 \\cdot e^3 = 3e^3"} />
                        </div>
                      </div>
                    </div>

                    <div>
                      <strong className="text-blue-600">8.</strong> <LatexRenderer latex={"\\displaystyle \\sum_{n=0}^{\\infty} \\frac{(-3)^{n-1}}{n!}"} />
                      <div className="mt-2 space-y-2">
                        <div>On réécrit : <LatexRenderer latex={"\\frac{(-3)^{n-1}}{n!} = \\frac{1}{-3} \\cdot \\frac{(-3)^n}{n!}"} /></div>
                        <div>Donc : <LatexRenderer latex={"\\sum_{n=0}^{\\infty} \\frac{(-3)^{n-1}}{n!} = \\frac{1}{-3} \\sum_{n=0}^{\\infty} \\frac{(-3)^n}{n!}"} /></div>
                        <div className="text-center bg-blue-50 p-2 rounded">
                          <LatexRenderer latex={"= \\frac{1}{-3} \\cdot e^{-3} = -\\frac{1}{3} e^{-3}"} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-blue-800 mb-4">Séries obtenues par dérivation :</h4>
                <div className="space-y-3">
                  <div><strong>9.</strong> <LatexRenderer latex={"\\displaystyle \\sum_{n=0}^{\\infty} \\frac{n}{3^{n-1}}"} /></div>
                  <div><strong>10.</strong> <LatexRenderer latex={"\\displaystyle \\sum_{n=0}^{\\infty} \\frac{n}{(-2)^n}"} /></div>
                  <div><strong>11.</strong> <LatexRenderer latex={"\\displaystyle \\sum_{n=0}^{\\infty} \\frac{n(n-1) 2^{n-2}}{3^{n-2}}"} /></div>
                  <div><strong>12.</strong> <LatexRenderer latex={"\\displaystyle \\sum_{n=0}^{\\infty} \\frac{n(n-1)2^n}{5^{n-1}}"} /></div>
                  <div><strong>13.</strong> <LatexRenderer latex={"\\displaystyle \\sum_{n=0}^{\\infty} \\frac{n+3}{4^n}"} /></div>
                  <div><strong>14.</strong> <LatexRenderer latex={"\\displaystyle \\sum_{n=0}^{\\infty} \\frac{(-1)^{n+2} n}{3^n}"} /></div>
                  <div><strong>15.</strong> <LatexRenderer latex={"\\displaystyle \\sum_{n=0}^{\\infty} \\frac{n+1}{3^{n+1}}"} /></div>
                </div>
                
                <Button
                  onClick={() => toggleCorrection("deriv")}
                  variant={visibleCorrections["deriv"] ? "secondary" : "default"}
                  className="mt-4"
                >
                  {visibleCorrections["deriv"] ? "Masquer les corrections" : "Afficher les corrections"}
                </Button>
                
                {visibleCorrections["deriv"] && (
                  <div className="mt-4 space-y-4">
                    <div>
                      <strong className="text-blue-600">9.</strong> <LatexRenderer latex={"\\displaystyle \\sum_{n=0}^{\\infty} \\frac{n}{3^{n-1}}"} />
                      <div className="mt-2 space-y-2">
                        <div>On réécrit : <LatexRenderer latex={"\\frac{n}{3^{n-1}} = 3n \\left(\\frac{1}{3}\\right)^n"} /></div>
                        <div>On utilise : <LatexRenderer latex={"\\sum_{n=0}^{\\infty} nx^n = \\frac{x}{(1-x)^2}"} /> pour <LatexRenderer latex={"|x| < 1"} /></div>
                        <div>Avec <LatexRenderer latex={"x = \\frac{1}{3}"} /> :</div>
                        <div className="text-center bg-blue-50 p-2 rounded">
                          <LatexRenderer latex={"\\sum_{n=0}^{\\infty} \\frac{n}{3^{n-1}} = 3 \\cdot \\frac{\\frac{1}{3}}{(1-\\frac{1}{3})^2} = 3 \\cdot \\frac{\\frac{1}{3}}{(\\frac{2}{3})^2} = \\frac{9}{4}"} />
                        </div>
                      </div>
                    </div>

                    <div>
                      <strong className="text-blue-600">10.</strong> <LatexRenderer latex={"\\displaystyle \\sum_{n=0}^{\\infty} \\frac{n}{(-2)^n}"} />
                      <div className="mt-2 space-y-2">
                        <div>On utilise la formule <LatexRenderer latex={"\\sum_{n=0}^{\\infty} nx^n = \\frac{x}{(1-x)^2}"} /> avec <LatexRenderer latex={"x = \\frac{1}{-2} = -\\frac{1}{2}"} /></div>
                        <div>Comme <LatexRenderer latex={"|x| = \\frac{1}{2} < 1"} />, la série converge.</div>
                        <div className="text-center bg-blue-50 p-2 rounded">
                          <LatexRenderer latex={"\\sum_{n=0}^{\\infty} \\frac{n}{(-2)^n} = \\frac{-\\frac{1}{2}}{(1+\\frac{1}{2})^2} = \\frac{-\\frac{1}{2}}{(\\frac{3}{2})^2} = -\\frac{2}{9}"} />
                        </div>
                      </div>
                    </div>

                    <div>
                      <strong className="text-blue-600">11.</strong> <LatexRenderer latex={"\\displaystyle \\sum_{n=0}^{\\infty} \\frac{n(n-1) 2^{n-2}}{3^{n-2}}"} />
                      <div className="mt-2 space-y-2">
                        <div>On réécrit : <LatexRenderer latex={"\\sum_{n=0}^{\\infty} n(n-1) \\left(\\frac{2}{3}\\right)^n"} /></div>
                        <div>On utilise : <LatexRenderer latex={"\\sum_{n=0}^{\\infty} n(n-1)x^n = \\frac{2x^2}{(1-x)^3}"} /></div>
                        <div>Avec <LatexRenderer latex={"x = \\frac{2}{3}"} /> :</div>
                        <div className="text-center bg-blue-50 p-2 rounded">
                          <LatexRenderer latex={"= \\frac{2(\\frac{2}{3})^2}{(1-\\frac{2}{3})^3} = \\frac{2 \\cdot \\frac{4}{9}}{(\\frac{1}{3})^3} = \\frac{\\frac{8}{9}}{\\frac{1}{27}} = 24"} />
                        </div>
                      </div>
                    </div>

                    <div>
                      <strong className="text-blue-600">12.</strong> <LatexRenderer latex={"\\displaystyle \\sum_{n=0}^{\\infty} \\frac{n(n-1)2^n}{5^{n-1}}"} />
                      <div className="mt-2 space-y-2">
                        <div>On réécrit : <LatexRenderer latex={"\\sum_{n=0}^{\\infty} 5 \\cdot n(n-1) \\left(\\frac{2}{5}\\right)^n"} /></div>
                        <div>Avec <LatexRenderer latex={"x = \\frac{2}{5}"} /> :</div>
                        <div className="text-center bg-blue-50 p-2 rounded">
                          <LatexRenderer latex={"= 5 \\cdot \\frac{2(\\frac{2}{5})^2}{(1-\\frac{2}{5})^3} = 5 \\cdot \\frac{2 \\cdot \\frac{4}{25}}{(\\frac{3}{5})^3} = \\frac{200}{27}"} />
                        </div>
                      </div>
                    </div>

                    <div>
                      <strong className="text-blue-600">13.</strong> <LatexRenderer latex={"\\displaystyle \\sum_{n=0}^{\\infty} \\frac{n+3}{4^n}"} />
                      <div className="mt-2 space-y-2">
                        <div>On décompose : <LatexRenderer latex={"\\sum_{n=0}^{\\infty} \\frac{n+3}{4^n} = \\sum_{n=0}^{\\infty} \\frac{n}{4^n} + 3\\sum_{n=0}^{\\infty} \\frac{1}{4^n}"} /></div>
                        <div>Premier terme : <LatexRenderer latex={"\\sum_{n=0}^{\\infty} \\frac{n}{4^n} = \\frac{\\frac{1}{4}}{(1-\\frac{1}{4})^2} = \\frac{4}{9}"} /></div>
                        <div>Second terme : <LatexRenderer latex={"3\\sum_{n=0}^{\\infty} \\frac{1}{4^n} = 3 \\cdot \\frac{1}{1-\\frac{1}{4}} = 4"} /></div>
                        <div className="text-center bg-blue-50 p-2 rounded">
                          <LatexRenderer latex={"= \\frac{4}{9} + 4 = \\frac{40}{9}"} />
                        </div>
                      </div>
                    </div>

                    <div>
                      <strong className="text-blue-600">14.</strong> <LatexRenderer latex={"\\displaystyle \\sum_{n=0}^{\\infty} \\frac{(-1)^{n+2} n}{3^n}"} />
                      <div className="mt-2 space-y-2">
                        <div>On réécrit : <LatexRenderer latex={"(-1)^{n+2} = (-1)^n \\cdot (-1)^2 = (-1)^n"} /></div>
                        <div>Donc : <LatexRenderer latex={"\\sum_{n=0}^{\\infty} \\frac{(-1)^{n+2} n}{3^n} = \\sum_{n=0}^{\\infty} \\frac{(-1)^n n}{3^n}"} /></div>
                        <div>Avec <LatexRenderer latex={"x = -\\frac{1}{3}"} /> dans <LatexRenderer latex={"\\sum_{n=0}^{\\infty} nx^n = \\frac{x}{(1-x)^2}"} /> :</div>
                        <div className="text-center bg-blue-50 p-2 rounded">
                          <LatexRenderer latex={"= \\frac{-\\frac{1}{3}}{(1+\\frac{1}{3})^2} = \\frac{-\\frac{1}{3}}{(\\frac{4}{3})^2} = -\\frac{3}{16}"} />
                        </div>
                      </div>
                    </div>

                    <div>
                      <strong className="text-blue-600">15.</strong> <LatexRenderer latex={"\\displaystyle \\sum_{n=0}^{\\infty} \\frac{n+1}{3^{n+1}}"} />
                      <div className="mt-2 space-y-2">
                        <div>On décompose : <LatexRenderer latex={"\\sum_{n=0}^{\\infty} \\frac{n+1}{3^{n+1}} = \\sum_{n=0}^{\\infty} \\frac{n}{3^{n+1}} + \\sum_{n=0}^{\\infty} \\frac{1}{3^{n+1}}"} /></div>
                        <div>Premier terme : <LatexRenderer latex={"\\sum_{n=0}^{\\infty} \\frac{n}{3^{n+1}} = \\frac{1}{3} \\sum_{n=0}^{\\infty} n\\left(\\frac{1}{3}\\right)^n = \\frac{1}{3} \\cdot \\frac{\\frac{1}{3}}{(\\frac{2}{3})^2} = \\frac{1}{12}"} /></div>
                        <div>Second terme : <LatexRenderer latex={"\\sum_{n=0}^{\\infty} \\frac{1}{3^{n+1}} = \\frac{1}{3} \\sum_{n=0}^{\\infty} \\left(\\frac{1}{3}\\right)^n = \\frac{1}{3} \\cdot \\frac{3}{2} = \\frac{1}{2}"} /></div>
                        <div className="text-center bg-blue-50 p-2 rounded">
                          <LatexRenderer latex={"= \\frac{1}{12} + \\frac{1}{2} = \\frac{7}{12}"} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>


            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-blue-600">Structure de l'exercice :</strong>
                <p className="mt-2">
                  Cet exercice est organisé en 3 sections thématiques avec énoncés et corrections alternés.
                </p>
              </div>
              <div>
                <strong className="text-blue-600">Sections :</strong>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li><strong>Séries géométriques</strong> (Questions 1-3) : Application directe de la formule des séries géométriques</li>
                  <li><strong>Séries exponentielles</strong> (Questions 4-8) : Reconnaissance des développements de la fonction exponentielle</li>
                  <li><strong>Séries par dérivation</strong> (Questions 9-15) : Utilisation des formules obtenues par dérivation de séries géométriques</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-3 rounded">
                <p className="text-blue-800"><strong>Astuce :</strong> Les corrections sont intégrées directement après chaque section d'énoncés pour faciliter l'apprentissage progressif.</p>
              </div>
          </div>
          }
        />
      </div>
    </div>
  );
};

export default Chapitre13SeriesNumeriquesExercicesPage;