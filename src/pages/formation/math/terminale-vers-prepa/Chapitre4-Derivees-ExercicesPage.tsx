import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';

const Chapitre4DeriveesExercicesPage = () => {
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
    <div className="min-h-screen carnet-paper carnet-cours-skin">
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
            <Link to="/formation/math/terminale-vers-prepa" className="hover:text-[#1e3a8a] transition-colors">
              Terminale vers la prépa
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <span className="text-[#2D5BFF] font-bold">Exercices - Chapitre 4</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 mb-8">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Exercices - Chapitre 4 : Dérivées
            </h1>
            <p className="text-slate-600 text-lg">
              Exercices progressifs pour maîtriser les techniques de dérivation.
            </p>
          </div>
        </Card>

        <DifficultyHeader
          level="Module 1"
          title="Techniques de dérivation"
          icon={BookOpen}
        />

        <ExerciseCard
          id="ex1"
          title="Exercice 1"
          difficulty="Facile"
          content={
            <div>
              <p className="mb-4"><strong>On considère les fonctions <span className="inline-block align-middle"><LatexRenderer latex={"f"} /></span> dérivables sur l'intervalle <span className="inline-block align-middle"><LatexRenderer latex={"I"} /></span> indiqué. Déterminer <span className="inline-block align-middle"><LatexRenderer latex={"f'(x)"} /></span> dans chaque cas.</strong></p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="font-semibold">1.</span>
                  <div className="flex-1">
                    <span className="inline-block align-middle"><LatexRenderer latex={"f(x) = -4x^2 + 56x - 96"} /></span>
                    <span className="text-sm text-gray-500 ml-4"><span className="inline-block align-middle"><LatexRenderer latex={"I = \\mathbb{R}"} /></span></span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="font-semibold">2.</span>
                  <div className="flex-1">
                    <span className="inline-block align-middle"><LatexRenderer latex={"f(x) = (4x + 7)(7x + 10)"} /></span>
                    <span className="text-sm text-gray-500 ml-4"><span className="inline-block align-middle"><LatexRenderer latex={"I = \\mathbb{R}"} /></span></span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="font-semibold">3.</span>
                  <div className="flex-1">
                    <span className="inline-block align-middle"><LatexRenderer latex={"f(x) = \\frac{3x - 4}{2x + 1}"} /></span>
                    <span className="text-sm text-gray-500 ml-4"><span className="inline-block align-middle"><LatexRenderer latex={"I = \\mathbb{R} \\setminus \\left\\{-\\frac{1}{2} \\right\\}"} /></span></span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="font-semibold">4.</span>
                  <div className="flex-1">
                    <span className="inline-block align-middle"><LatexRenderer latex={"f(x) = \\frac{8 + 3x}{1 - 6x}"} /></span>
                    <span className="text-sm text-gray-500 ml-4"><span className="inline-block align-middle"><LatexRenderer latex={"I = \\mathbb{R} \\setminus \\left\\{ \\frac{1}{6} \\right\\}"} /></span></span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="font-semibold">5.</span>
                  <div className="flex-1">
                    <span className="inline-block align-middle"><LatexRenderer latex={"f(x) = \\frac{\\sqrt{x}}{2x - 8}"} /></span>
                    <span className="text-sm text-gray-500 ml-4"><span className="inline-block align-middle"><LatexRenderer latex={"I = \\mathbb{R}^+ \\setminus \\{4\\}"} /></span></span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="font-semibold">6.</span>
                  <div className="flex-1">
                    <span className="inline-block align-middle"><LatexRenderer latex={"f(x) = \\frac{x^2 + 18x}{6x + 4}"} /></span>
                    <span className="text-sm text-gray-500 ml-4"><span className="inline-block align-middle"><LatexRenderer latex={"I = \\mathbb{R} \\setminus \\left\\{-\\frac{2}{3}\\right\\}"} /></span></span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="font-semibold">7.</span>
                  <div className="flex-1">
                    <span className="inline-block align-middle"><LatexRenderer latex={"f(x) = \\frac{3x - 2}{2x^2 - 3x + 5}"} /></span>
                    <span className="text-sm text-gray-500 ml-4"><span className="inline-block align-middle"><LatexRenderer latex={"I = \\mathbb{R}"} /></span></span>
                  </div>
                </div>
              </div>
            </div>
          }
          correction={
            <div className="space-y-6">
              <div>
                <strong className="text-green-600">1. Fonction polynomiale</strong>
                <div className="mt-2">
                  <p className="mb-2"><span className="inline-block align-middle"><LatexRenderer latex={"f(x) = -4x^2 + 56x - 96"} /></span></p>
                  <p className="mb-2">Dérivée terme par terme :</p>
                  <div className="text-center bg-green-50 p-2 rounded">
                    <LatexRenderer latex={"f'(x) = -8x + 56"} />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">2. Produit de fonctions</strong>
                <div className="mt-2">
                  <p className="mb-2"><span className="inline-block align-middle"><LatexRenderer latex={"f(x) = (4x + 7)(7x + 10)"} /></span></p>
                  <p className="mb-2">Application de la règle du produit : <span className="inline-block align-middle"><LatexRenderer latex={"(uv)' = u'v + uv'"} /></span></p>
                  <div className="space-y-2">
                    <div className="text-center">
                      <LatexRenderer latex={"f'(x) = 4(7x + 10) + 7(4x + 7)"} />
                    </div>
                    <div className="text-center">
                      <LatexRenderer latex={"= 28x + 40 + 28x + 49"} />
                    </div>
                    <div className="text-center bg-green-50 p-2 rounded">
                      <LatexRenderer latex={"f'(x) = 56x + 89"} />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">3. Quotient de fonctions linéaires</strong>
                <div className="mt-2">
                  <p className="mb-2"><span className="inline-block align-middle"><LatexRenderer latex={"f(x) = \\frac{3x - 4}{2x + 1}"} /></span></p>
                  <p className="mb-2">Application de la règle du quotient : <span className="inline-block align-middle"><LatexRenderer latex={"\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}"} /></span></p>
                  <div className="space-y-2">
                    <div className="text-center">
                      <LatexRenderer latex={"f'(x) = \\frac{3(2x + 1) - 2(3x - 4)}{(2x + 1)^2}"} />
                    </div>
                    <div className="text-center">
                      <LatexRenderer latex={"= \\frac{6x + 3 - 6x + 8}{(2x + 1)^2}"} />
                    </div>
                    <div className="text-center bg-green-50 p-2 rounded">
                      <LatexRenderer latex={"f'(x) = \\frac{11}{(2x + 1)^2}"} />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">4. Quotient avec coefficient négatif</strong>
                <div className="mt-2">
                  <p className="mb-2"><span className="inline-block align-middle"><LatexRenderer latex={"f(x) = \\frac{8 + 3x}{1 - 6x}"} /></span></p>
                  <div className="space-y-2">
                    <div className="text-center">
                      <LatexRenderer latex={"f'(x) = \\frac{3(1 - 6x) - (-6)(8 + 3x)}{(1 - 6x)^2}"} />
                    </div>
                    <div className="text-center">
                      <LatexRenderer latex={"= \\frac{3 - 18x + 48 + 18x}{(1 - 6x)^2}"} />
                    </div>
                    <div className="text-center bg-green-50 p-2 rounded">
                      <LatexRenderer latex={"f'(x) = \\frac{51}{(1 - 6x)^2}"} />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">5. Quotient avec racine carrée</strong>
                <div className="mt-2">
                  <p className="mb-2"><span className="inline-block align-middle"><LatexRenderer latex={"f(x) = \\frac{\\sqrt{x}}{2x - 8}"} /></span></p>
                  <p className="mb-2">Avec <span className="inline-block align-middle"><LatexRenderer latex={"(\\sqrt{x})' = \\frac{1}{2\\sqrt{x}}"} /></span></p>
                  <div className="space-y-2">
                    <div className="text-center">
                      <LatexRenderer latex={"f'(x) = \\frac{\\frac{1}{2\\sqrt{x}}(2x - 8) - 2\\sqrt{x}}{(2x - 8)^2}"} />
                    </div>
                    <div className="text-center">
                      <LatexRenderer latex={"= \\frac{2x - 8 - 4x}{2\\sqrt{x}(2x - 8)^2}"} />
                    </div>
                    <div className="text-center bg-green-50 p-2 rounded">
                      <LatexRenderer latex={"f'(x) = \\frac{-2x - 8}{2\\sqrt{x}(2x - 8)^2} = \\frac{-(x + 4)}{\\sqrt{x}(2x - 8)^2}"} />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">6. Quotient polynomial</strong>
                <div className="mt-2">
                  <p className="mb-2"><span className="inline-block align-middle"><LatexRenderer latex={"f(x) = \\frac{x^2 + 18x}{6x + 4}"} /></span></p>
                  <div className="space-y-2">
                    <div className="text-center">
                      <LatexRenderer latex={"f'(x) = \\frac{(2x + 18)(6x + 4) - 6(x^2 + 18x)}{(6x + 4)^2}"} />
                    </div>
                    <div className="text-center">
                      <LatexRenderer latex={"= \\frac{12x^2 + 8x + 108x + 72 - 6x^2 - 108x}{(6x + 4)^2}"} />
                    </div>
                    <div className="text-center bg-green-50 p-2 rounded">
                      <LatexRenderer latex={"f'(x) = \\frac{6x^2 + 8x + 72}{(6x + 4)^2}"} />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">7. Quotient avec dénominateur quadratique</strong>
                <div className="mt-2">
                  <p className="mb-2"><span className="inline-block align-middle"><LatexRenderer latex={"f(x) = \\frac{3x - 2}{2x^2 - 3x + 5}"} /></span></p>
                  <div className="space-y-2">
                    <div className="text-center">
                      <LatexRenderer latex={"f'(x) = \\frac{3(2x^2 - 3x + 5) - (4x - 3)(3x - 2)}{(2x^2 - 3x + 5)^2}"} />
                    </div>
                    <p className="text-center text-sm">Développement du numérateur :</p>
                    <div className="text-center">
                      <LatexRenderer latex={"6x^2 - 9x + 15 - (12x^2 - 8x - 9x + 6) = -6x^2 + 8x + 9"} />
                    </div>
                    <div className="text-center bg-green-50 p-2 rounded">
                      <LatexRenderer latex={"f'(x) = \\frac{-6x^2 + 8x + 9}{(2x^2 - 3x + 5)^2}"} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-blue-800 mb-3">💡 Rappels des règles de dérivation</h4>
                <div className="space-y-2 text-blue-800">
                  <div>• <strong>Polynômes :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"(x^n)' = nx^{n-1}"} /></span></div>
                  <div>• <strong>Produit :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"(uv)' = u'v + uv'"} /></span></div>
                  <div>• <strong>Quotient :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}"} /></span></div>
                  <div>• <strong>Racine :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"(\\sqrt{x})' = \\frac{1}{2\\sqrt{x}}"} /></span></div>
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex2"
          title="Exercice 2"
          difficulty="Difficile"
          content={
            <div>
              <p className="mb-4"><strong>On définit, pour tout <span className="inline-block align-middle"><LatexRenderer latex={"x > 0"} /></span> :</strong></p>
              
              <div className="text-center my-4">
                <LatexRenderer latex={"f(x) = \\ln\\left(\\frac{x}{1+x}\\right) - \\frac{\\ln(1+x)}{x}"} />
              </div>
              
              <p className="mt-4"><strong>Calculer <span className="inline-block align-middle"><LatexRenderer latex={"f'(x)"} /></span>.</strong></p>
            </div>
          }
          correction={
            <div className="space-y-6">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-yellow-800 mb-3">⚠️ Attention</h4>
                <p className="text-yellow-800">Cet exercice illustre deux méthodes différentes pour calculer la même dérivée. La première utilise les propriétés des logarithmes pour simplifier l'expression avant de dériver.</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-green-600 mb-3">Méthode 1 : Astuce avec propriétés des logarithmes</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="mb-2">On remarque que :</p>
                    <div className="text-center bg-blue-50 p-2 rounded">
                      <LatexRenderer latex={"\\ln\\left(\\frac{x}{1+x}\\right) = \\ln(x) - \\ln(1+x)"} />
                    </div>
                  </div>

                  <div>
                    <p className="mb-2">Donc :</p>
                    <div className="text-center">
                      <LatexRenderer latex={"f(x) = \\ln(x) - \\ln(1+x) - \\frac{\\ln(1+x)}{x}"} />
                    </div>
                  </div>

                  <div>
                    <p className="mb-2">On dérive chaque terme :</p>
                    <div className="space-y-2">
                      <div className="text-center">
                        <LatexRenderer latex={"f'(x) = \\frac{1}{x} - \\frac{1}{1+x} - \\left( \\frac{x \\cdot \\frac{1}{1+x} - \\ln(1+x)}{x^2} \\right)"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= \\frac{1}{x} - \\frac{1}{1+x} - \\frac{\\frac{x}{1+x} - \\ln(1+x)}{x^2}"} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="mb-2">On met tout au même dénominateur <span className="inline-block align-middle"><LatexRenderer latex={"x^2(1+x)"} /></span> :</p>
                    <div className="space-y-2">
                      <div className="text-center">
                        <LatexRenderer latex={"f'(x) = \\frac{x(1+x) - x^2 - x + (1+x)\\ln(1+x)}{x^2(1+x)}"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= \\frac{x + x^2 - x^2 - x + (1+x)\\ln(1+x)}{x^2(1+x)}"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= \\frac{(1+x)\\ln(1+x)}{x^2(1+x)}"} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="mb-2">Finalement :</p>
                    <div className="text-center bg-green-50 p-3 rounded border-2 border-green-200">
                      <LatexRenderer latex={"f'(x) = \\frac{\\ln(1+x)}{x^2}"} />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-green-600 mb-3">Méthode 2 : Directement sur l'expression initiale</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="mb-2">On réécrit la fonction sous la forme :</p>
                    <div className="text-center">
                      <LatexRenderer latex={"f(x) = \\frac{\\ln\\left( \\frac{x}{1+x} \\right) - \\ln(1+x)}{x}"} />
                    </div>
                  </div>

                  <div>
                    <p className="mb-2">On applique la règle du quotient <span className="inline-block align-middle"><LatexRenderer latex={"\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}"} /></span> avec :</p>
                    <div className="space-y-1">
                      <div>• <span className="inline-block align-middle"><LatexRenderer latex={"u(x) = \\ln\\left( \\frac{x}{1+x} \\right) - \\ln(1+x)"} /></span></div>
                      <div>• <span className="inline-block align-middle"><LatexRenderer latex={"v(x) = x"} /></span></div>
                    </div>
                  </div>

                  <div>
                    <p className="mb-2">Calculons <span className="inline-block align-middle"><LatexRenderer latex={"u'(x)"} /></span> :</p>
                    <div className="space-y-2">
                      <div className="text-center">
                        <LatexRenderer latex={"u'(x) = \\frac{1}{\\frac{x}{1+x}} \\cdot \\frac{(1+x) - x}{(1+x)^2} - \\frac{1}{1+x}"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= \\frac{1+x}{x} \\cdot \\frac{1}{(1+x)^2} - \\frac{1}{1+x}"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= \\frac{1}{x(1+x)} - \\frac{1}{1+x} = \\frac{1 - x}{x(1+x)}"} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="mb-2">Application de la règle du quotient :</p>
                    <div className="space-y-2">
                      <div className="text-center">
                        <LatexRenderer latex={"f'(x) = \\frac{\\frac{1-x}{x(1+x)} \\cdot x - \\left( \\ln\\left( \\frac{x}{1+x} \\right) - \\ln(1+x) \\right) \\cdot 1}{x^2}"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= \\frac{\\frac{1-x}{1+x} - \\ln\\left( \\frac{x}{1+x} \\right) + \\ln(1+x)}{x^2}"} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="mb-2">En utilisant <span className="inline-block align-middle"><LatexRenderer latex={"\\ln\\left( \\frac{x}{1+x} \\right) = \\ln(x) - \\ln(1+x)"} /></span> :</p>
                    <div className="space-y-2">
                      <div className="text-center">
                        <LatexRenderer latex={"f'(x) = \\frac{\\frac{1-x}{1+x} - \\ln(x) + \\ln(1+x) + \\ln(1+x)}{x^2}"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= \\frac{\\frac{1-x}{1+x} - \\ln(x) + 2\\ln(1+x)}{x^2}"} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="mb-2">Après calculs et simplifications :</p>
                    <div className="text-center bg-green-50 p-3 rounded border-2 border-green-200">
                      <LatexRenderer latex={"f'(x) = \\frac{\\ln(1+x)}{x^2}"} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-indigo-800 mb-3">🎯 Méthode générale</h4>
                <div className="space-y-2 text-indigo-800">
                  <div>• <strong>Méthode 1 :</strong> Toujours chercher à simplifier l'expression avant de dériver</div>
                  <div>• <strong>Propriétés des logarithmes :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\ln\\left(\\frac{a}{b}\\right) = \\ln(a) - \\ln(b)"} /></span></div>
                  <div>• <strong>Dérivée du quotient :</strong> Applicable mais plus laborieuse ici</div>
                  <div>• <strong>Vérification :</strong> Les deux méthodes donnent le même résultat !</div>
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex3"
          title="Exercice 3"
          difficulty="Très difficile"
          content={
            <div>
              <p className="mb-4"><strong>Soit la fonction :</strong></p>
              
              <div className="text-center my-4">
                <LatexRenderer latex={"\\forall u \\geq 0, \\quad m(u) = (1 + \\sqrt{u})^{\\sqrt{u}}"} />
              </div>
              
              <p className="mt-4"><strong>Calculer <span className="inline-block align-middle"><LatexRenderer latex={"m'(u)"} /></span>.</strong></p>
            </div>
          }
          correction={
            <div className="space-y-6">
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-red-800 mb-3">🔥 Défi</h4>
                <p className="text-red-800">Cet exercice traite d'une <strong>fonction puissance-variable</strong> de la forme <span className="inline-block align-middle"><LatexRenderer latex={"f(x) = g(x)^{h(x)}"} /></span>. La technique consiste à passer par l'exponentielle et le logarithme.</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-green-600 mb-3">Étape 1 : Passage à l'exponentielle</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="mb-2">On remarque que pour tout <span className="inline-block align-middle"><LatexRenderer latex={"u \\geq 0"} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={"1 + \\sqrt{u} > 0"} /></span>, donc on peut écrire :</p>
                    <div className="text-center bg-blue-50 p-3 rounded">
                      <LatexRenderer latex={"m(u) = e^{\\sqrt{u} \\ln(1 + \\sqrt{u})}"} />
                    </div>
                  </div>

                  <div className="bg-orange-50 border-l-4 border-orange-400 p-3 rounded-r-lg">
                    <p className="text-orange-800">
                      <strong>💡 Rappel :</strong> Pour toute fonction <span className="inline-block align-middle"><LatexRenderer latex={"f(x) = g(x)^{h(x)}"} /></span> avec <span className="inline-block align-middle"><LatexRenderer latex={"g(x) > 0"} /></span>, on peut écrire <span className="inline-block align-middle"><LatexRenderer latex={"f(x) = e^{h(x) \\ln(g(x))}"} /></span>
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-green-600 mb-3">Étape 2 : Définition de la fonction auxiliaire</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="mb-2">Posons :</p>
                    <div className="text-center bg-blue-50 p-3 rounded">
                      <LatexRenderer latex={"f(u) = \\sqrt{u} \\ln(1 + \\sqrt{u})"} />
                    </div>
                  </div>

                  <div>
                    <p className="mb-2">La fonction <span className="inline-block align-middle"><LatexRenderer latex={"f"} /></span> est dérivable sur <span className="inline-block align-middle"><LatexRenderer latex={"\\mathbb{R}_+^*"} /></span>. Calculons <span className="inline-block align-middle"><LatexRenderer latex={"f'(u)"} /></span> :</p>
                    
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm mb-2">Application de la règle du produit : <span className="inline-block align-middle"><LatexRenderer latex={"(uv)' = u'v + uv'"} /></span></p>
                        <div className="text-center">
                          <LatexRenderer latex={"f'(u) = (\\sqrt{u})' \\cdot \\ln(1 + \\sqrt{u}) + \\sqrt{u} \\cdot (\\ln(1 + \\sqrt{u}))'"} />
                        </div>
                      </div>

                      <div>
                        <p className="text-sm mb-2">Avec <span className="inline-block align-middle"><LatexRenderer latex={"(\\sqrt{u})' = \\frac{1}{2\\sqrt{u}}"} /></span> et <span className="inline-block align-middle"><LatexRenderer latex={"(\\ln(1 + \\sqrt{u}))' = \\frac{1}{1 + \\sqrt{u}} \\cdot \\frac{1}{2\\sqrt{u}}"} /></span> :</p>
                        <div className="text-center">
                          <LatexRenderer latex={"f'(u) = \\frac{1}{2\\sqrt{u}} \\ln(1 + \\sqrt{u}) + \\sqrt{u} \\cdot \\frac{1}{1 + \\sqrt{u}} \\cdot \\frac{1}{2\\sqrt{u}}"} />
                        </div>
                      </div>

                      <div>
                        <p className="text-sm mb-2">Simplification du second terme :</p>
                        <div className="text-center">
                          <LatexRenderer latex={"f'(u) = \\frac{1}{2\\sqrt{u}} \\ln(1 + \\sqrt{u}) + \\frac{1}{2(1 + \\sqrt{u})}"} />
                        </div>
                      </div>

                      <div>
                        <p className="text-sm mb-2">Factorisation par <span className="inline-block align-middle"><LatexRenderer latex={"\\frac{1}{2}"} /></span> :</p>
                        <div className="text-center bg-green-50 p-3 rounded border-2 border-green-200">
                          <LatexRenderer latex={"f'(u) = \\frac{1}{2} \\left[ \\frac{\\ln(1 + \\sqrt{u})}{\\sqrt{u}} + \\frac{1}{1 + \\sqrt{u}} \\right]"} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-green-600 mb-3">Étape 3 : Dérivée de m(u)</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="mb-2">Puisque <span className="inline-block align-middle"><LatexRenderer latex={"m(u) = e^{f(u)}"} /></span>, on applique la formule de la dérivée d'une exponentielle :</p>
                    <div className="text-center bg-blue-50 p-2 rounded">
                      <LatexRenderer latex={"m'(u) = f'(u) \\cdot e^{f(u)} = f'(u) \\cdot m(u)"} />
                    </div>
                  </div>

                  <div>
                    <p className="mb-2">En substituant les expressions trouvées :</p>
                    <div className="space-y-2">
                      <div className="text-center">
                        <LatexRenderer latex={"m'(u) = \\frac{1}{2} \\left[ \\frac{\\ln(1 + \\sqrt{u})}{\\sqrt{u}} + \\frac{1}{1 + \\sqrt{u}} \\right] \\cdot (1 + \\sqrt{u})^{\\sqrt{u}}"} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="mb-2"><strong>Résultat final :</strong></p>
                    <div className="text-center bg-green-50 p-4 rounded border-2 border-green-200">
                      <LatexRenderer latex={"m'(u) = \\frac{1}{2} \\left[ \\frac{\\ln(1 + \\sqrt{u})}{\\sqrt{u}} + \\frac{1}{1 + \\sqrt{u}} \\right] (1 + \\sqrt{u})^{\\sqrt{u}}"} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-purple-800 mb-3">🎯 Technique générale pour f(x) = g(x)^h(x)</h4>
                <div className="space-y-2 text-purple-800">
                  <div><strong>1. Passage à l'exponentielle :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"f(x) = e^{h(x) \\ln(g(x))}"} /></span></div>
                  <div><strong>2. Poser :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"F(x) = h(x) \\ln(g(x))"} /></span></div>
                  <div><strong>3. Calculer :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"F'(x)"} /></span> (produit + composée)</div>
                  <div><strong>4. Résultat :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"f'(x) = F'(x) \\cdot e^{F(x)} = F'(x) \\cdot f(x)"} /></span></div>
                  <div><strong>5. Condition :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"g(x) > 0"} /></span> sur le domaine</div>
                </div>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-emerald-800 mb-3">💎 Points clés de cet exercice</h4>
                <div className="space-y-2 text-emerald-800">
                  <div>• <strong>Domaine :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"u \\geq 0"} /></span> (à cause de <span className="inline-block align-middle"><LatexRenderer latex={"\\sqrt{u}"} /></span>)</div>
                  <div>• <strong>Dérivée en 0 :</strong> Nécessite une étude de limite particulière</div>
                  <div>• <strong>Composée :</strong> Dérivée de <span className="inline-block align-middle"><LatexRenderer latex={"\\ln(1 + \\sqrt{u})"} /></span> par la règle de la chaîne</div>
                  <div>• <strong>Factorisation :</strong> Simplification algébrique finale</div>
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex4"
          title="Exercice 4"
          difficulty="Difficile"
          content={
            <div>
              <p className="mb-4"><strong>Pour chacune des fonctions suivantes, définies et deux fois dérivables sur <span className="inline-block align-middle"><LatexRenderer latex={"\\mathbb{R}"} /></span>, donner une expression de la dérivée seconde :</strong></p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="font-semibold">1.</span>
                  <div className="flex-1">
                    <span className="inline-block align-middle"><LatexRenderer latex={"f(x) = e^{x^2 + 2x - 5}"} /></span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="font-semibold">2.</span>
                  <div className="flex-1">
                    <span className="inline-block align-middle"><LatexRenderer latex={"g(x) = \\left( \\frac{x^2 - 2x - 3}{2} \\right)^2"} /></span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="font-semibold">3.</span>
                  <div className="flex-1">
                    <span className="inline-block align-middle"><LatexRenderer latex={"h(x) = \\frac{1}{x^2 + 1}"} /></span>
                  </div>
                </div>
              </div>
            </div>
          }
          correction={
            <div className="space-y-6">
              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-orange-800 mb-3">💡 Méthode</h4>
                <p className="text-orange-800">Pour calculer la <strong>dérivée seconde</strong> d'une fonction composée, on applique d'abord les règles de dérivation pour obtenir <span className="inline-block align-middle"><LatexRenderer latex={"f'(x)"} /></span>, puis on dérive à nouveau pour obtenir <span className="inline-block align-middle"><LatexRenderer latex={"f''(x)"} /></span>.</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-green-600 mb-3">1. Fonction f(x) = e^(x² + 2x - 5)</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="mb-2">On pose <span className="inline-block align-middle"><LatexRenderer latex={"u(x) = x^2 + 2x - 5"} /></span>, alors <span className="inline-block align-middle"><LatexRenderer latex={"f(x) = e^{u(x)}"} /></span>.</p>
                  </div>

                  <div>
                    <p className="mb-2"><strong>Calcul de la dérivée première :</strong></p>
                    <div className="space-y-2">
                      <div>• <span className="inline-block align-middle"><LatexRenderer latex={"u'(x) = 2x + 2"} /></span></div>
                      <div>• Par la règle de la chaîne : <span className="inline-block align-middle"><LatexRenderer latex={"f'(x) = u'(x) \\cdot e^{u(x)}"} /></span></div>
                      <div className="text-center bg-blue-50 p-2 rounded">
                        <LatexRenderer latex={"f'(x) = (2x + 2) e^{x^2 + 2x - 5}"} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="mb-2"><strong>Calcul de la dérivée seconde :</strong></p>
                    <div className="space-y-2">
                      <div>On applique la règle du produit à <span className="inline-block align-middle"><LatexRenderer latex={"f'(x) = (2x + 2) e^{x^2 + 2x - 5}"} /></span> :</div>
                      <div className="text-center">
                        <LatexRenderer latex={"f''(x) = (2x + 2)' \\cdot e^{x^2 + 2x - 5} + (2x + 2) \\cdot (e^{x^2 + 2x - 5})'"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= 2 \\cdot e^{x^2 + 2x - 5} + (2x + 2) \\cdot (2x + 2) e^{x^2 + 2x - 5}"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= 2 e^{x^2 + 2x - 5} + (2x + 2)^2 e^{x^2 + 2x - 5}"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= [2 + (2x + 2)^2] e^{x^2 + 2x - 5}"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= [2 + 4x^2 + 8x + 4] e^{x^2 + 2x - 5}"} />
                      </div>
                      <div className="text-center bg-green-50 p-3 rounded border-2 border-green-200">
                        <LatexRenderer latex={"f''(x) = (4x^2 + 8x + 6) e^{x^2 + 2x - 5}"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-green-600 mb-3">2. Fonction g(x) = ((x² - 2x - 3)/2)²</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="mb-2">On pose <span className="inline-block align-middle"><LatexRenderer latex={"u(x) = \\frac{x^2 - 2x - 3}{2}"} /></span>, donc <span className="inline-block align-middle"><LatexRenderer latex={"g(x) = u(x)^2"} /></span>.</p>
                  </div>

                  <div>
                    <p className="mb-2"><strong>Calcul de la dérivée première :</strong></p>
                    <div className="space-y-2">
                      <div>• <span className="inline-block align-middle"><LatexRenderer latex={"u'(x) = \\frac{2x - 2}{2} = x - 1"} /></span></div>
                      <div>• Par la règle de la chaîne : <span className="inline-block align-middle"><LatexRenderer latex={"g'(x) = 2u(x) \\cdot u'(x)"} /></span></div>
                      <div className="text-center">
                        <LatexRenderer latex={"g'(x) = 2 \\cdot \\frac{x^2 - 2x - 3}{2} \\cdot (x - 1)"} />
                      </div>
                      <div className="text-center bg-blue-50 p-2 rounded">
                        <LatexRenderer latex={"g'(x) = (x^2 - 2x - 3)(x - 1)"} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="mb-2"><strong>Calcul de la dérivée seconde :</strong></p>
                    <div className="space-y-2">
                      <div>On applique la règle du produit à <span className="inline-block align-middle"><LatexRenderer latex={"g'(x) = (x^2 - 2x - 3)(x - 1)"} /></span> :</div>
                      <div className="text-center">
                        <LatexRenderer latex={"g''(x) = (x^2 - 2x - 3)' \\cdot (x - 1) + (x^2 - 2x - 3) \\cdot (x - 1)'"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= (2x - 2)(x - 1) + (x^2 - 2x - 3) \\cdot 1"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= 2(x - 1)^2 + (x^2 - 2x - 3)"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= 2(x^2 - 2x + 1) + x^2 - 2x - 3"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= 2x^2 - 4x + 2 + x^2 - 2x - 3"} />
                      </div>
                      <div className="text-center bg-green-50 p-3 rounded border-2 border-green-200">
                        <LatexRenderer latex={"g''(x) = 3x^2 - 6x - 1"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-green-600 mb-3">3. Fonction h(x) = 1/(x² + 1)</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="mb-2">On pose <span className="inline-block align-middle"><LatexRenderer latex={"u(x) = x^2 + 1"} /></span>, donc <span className="inline-block align-middle"><LatexRenderer latex={"h(x) = \\frac{1}{u(x)}"} /></span>.</p>
                  </div>

                  <div>
                    <p className="mb-2"><strong>Calcul de la dérivée première :</strong></p>
                    <div className="space-y-2">
                      <div>• <span className="inline-block align-middle"><LatexRenderer latex={"u'(x) = 2x"} /></span></div>
                      <div>• Par la règle de dérivation : <span className="inline-block align-middle"><LatexRenderer latex={"h'(x) = -\\frac{u'(x)}{u(x)^2}"} /></span></div>
                      <div className="text-center bg-blue-50 p-2 rounded">
                        <LatexRenderer latex={"h'(x) = -\\frac{2x}{(x^2 + 1)^2}"} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="mb-2"><strong>Calcul de la dérivée seconde :</strong></p>
                    <div className="space-y-2">
                      <div>On applique la règle du quotient à <span className="inline-block align-middle"><LatexRenderer latex={"h'(x) = -\\frac{2x}{(x^2 + 1)^2}"} /></span> :</div>
                      <div>• Numérateur : <span className="inline-block align-middle"><LatexRenderer latex={"v(x) = -2x"} /></span>, donc <span className="inline-block align-middle"><LatexRenderer latex={"v'(x) = -2"} /></span></div>
                      <div>• Dénominateur : <span className="inline-block align-middle"><LatexRenderer latex={"w(x) = (x^2 + 1)^2"} /></span>, donc <span className="inline-block align-middle"><LatexRenderer latex={"w'(x) = 2(x^2 + 1) \\cdot 2x = 4x(x^2 + 1)"} /></span></div>
                      <div className="text-center">
                        <LatexRenderer latex={"h''(x) = \\frac{v'(x) \\cdot w(x) - v(x) \\cdot w'(x)}{w(x)^2}"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= \\frac{-2 \\cdot (x^2 + 1)^2 - (-2x) \\cdot 4x(x^2 + 1)}{(x^2 + 1)^4}"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= \\frac{-2(x^2 + 1)^2 + 8x^2(x^2 + 1)}{(x^2 + 1)^4}"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= \\frac{(x^2 + 1)[-2(x^2 + 1) + 8x^2]}{(x^2 + 1)^4}"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= \\frac{-2x^2 - 2 + 8x^2}{(x^2 + 1)^3}"} />
                      </div>
                      <div className="text-center bg-green-50 p-3 rounded border-2 border-green-200">
                        <LatexRenderer latex={"h''(x) = \\frac{6x^2 - 2}{(x^2 + 1)^3}"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-indigo-800 mb-3">📚 Rappels pour les dérivées secondes</h4>
                <div className="space-y-2 text-indigo-800">
                  <div>• <strong>Fonction composée :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"(f \\circ g)'' = (f' \\circ g) \\cdot (g')^2 + (f \\circ g) \\cdot g''"} /></span></div>
                  <div>• <strong>Produit :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"(uv)'' = u''v + 2u'v' + uv''"} /></span></div>
                  <div>• <strong>Quotient :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\left(\\frac{u}{v}\\right)'' = \\frac{u''v^2 - 2u'v'v + 2uv'^2 - uv''v}{v^3}"} /></span></div>
                  <div>• <strong>Exponentielle :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"(e^u)'' = (u')^2 e^u + u'' e^u"} /></span></div>
                </div>
              </div>

              <div className="bg-teal-50 border-l-4 border-teal-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-teal-800 mb-3">🎯 Stratégies de calcul</h4>
                <div className="space-y-2 text-teal-800">
                  <div>• <strong>Simplifier d'abord :</strong> Factoriser ou développer selon le contexte</div>
                  <div>• <strong>Identifier la structure :</strong> Composée, produit, quotient ?</div>
                  <div>• <strong>Calculer méthodiquement :</strong> f'(x) puis f''(x)</div>
                  <div>• <strong>Vérifier :</strong> Les dérivées successives doivent être cohérentes</div>
                </div>
              </div>
            </div>
          }
        />

      </div>
    </div>
  );
};

export default Chapitre4DeriveesExercicesPage;