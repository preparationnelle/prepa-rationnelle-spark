import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';

const Chapitre3FonctionsExercicesPage = () => {
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
    <div className="bg-gradient-to-r from-purple-100 to-purple-50 border-l-4 border-purple-500 p-6 mb-6 rounded-r-lg shadow-sm">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-purple-500 text-white rounded-lg">
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
          <div className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">
            {title}
          </div>
          <div className="text-xs text-purple-500 bg-purple-50 px-2 py-1 rounded">
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
            <Link to="/formation/math/terminale-vers-prepa" className="hover:text-[#1e3a8a] transition-colors">
              Terminale vers la prépa
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <span className="text-[#2D5BFF] font-bold">Exercices - Chapitre 3</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 mb-8">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Exercices - Chapitre 3 : Fonctions
            </h1>
            <p className="text-slate-600 text-lg">
              Exercices sur le calcul de dérivées et l'analyse de fonctions.
            </p>
          </div>
        </Card>

        <DifficultyHeader
          level="Module 1"
          title="Calcul de dérivées"
          icon={BookOpen}
        />

        <ExerciseCard
          id="ex1"
          title="Exercice 1"
          difficulty="Moyen"
          content={
            <div>
              <p className="mb-4"><strong>Calculer la dérivée des fonctions suivantes :</strong></p>
              <p className="text-sm text-gray-600 mb-4 italic">
                (On supposera ici que les fonctions sont toutes dérivables sur leur domaine de définition ou sur les intervalles donnés)
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="font-semibold">1.</span>
                  <div className="flex-1">
                    <span className="inline-block align-middle"><LatexRenderer latex={"\\forall x > 0,\\quad f(x) = \\dfrac{\\ln\\left( \\dfrac{x}{1+x} \\right) - \\ln(1 + x)}{x}"} /></span>
                    <span className="text-sm text-gray-500 ml-4">(ECRICOME 1998)</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="font-semibold">2.</span>
                  <div className="flex-1">
                    <span className="inline-block align-middle"><LatexRenderer latex={"\\forall x \\in D_{f_n},\\quad f_n(x) = x e^{-\\frac{n}{x}} \\quad \\text{avec } n \\in \\mathbb{N}^*"} /></span>
                    <span className="text-sm text-gray-500 ml-4">(EDHEC 2004)</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="font-semibold">3.</span>
                  <div className="flex-1">
                    <span className="inline-block align-middle"><LatexRenderer latex={"\\forall x \\in D_h,\\quad h(x) = \\dfrac{e^x}{(1 + e^x)^2}"} /></span>
                    <span className="text-sm text-gray-500 ml-4">(ESSEC 2005)</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="font-semibold">4.</span>
                  <div className="flex-1">
                    <span className="inline-block align-middle"><LatexRenderer latex={"\\forall u \\geq 0,\\quad m(u) = (1 + \\sqrt{u}) \\sqrt{u}"} /></span>
                  </div>
                </div>
              </div>
            </div>
          }
          correction={
            <div className="space-y-6">
              <div>
                <strong className="text-green-600">1. Fonction f(x)</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <p className="mb-2">Simplifions d'abord l'expression :</p>
                    <div className="text-center">
                      <LatexRenderer latex={"f(x) = \\frac{\\ln\\left(\\frac{x}{1+x}\\right) - \\ln(1+x)}{x} = \\frac{\\ln(x) - \\ln(1+x) - \\ln(1+x)}{x}"} />
                    </div>
                    <div className="text-center mt-2">
                      <LatexRenderer latex={"f(x) = \\frac{\\ln(x) - 2\\ln(1+x)}{x}"} />
                    </div>
                  </div>
                  <div>
                    <p className="mb-2">Appliquons la règle de dérivation du quotient :</p>
                    <div className="text-center">
                      <LatexRenderer latex={"f'(x) = \\frac{x \\cdot \\left(\\frac{1}{x} - \\frac{2}{1+x}\\right) - (\\ln(x) - 2\\ln(1+x)) \\cdot 1}{x^2}"} />
                    </div>
                    <div className="text-center mt-2">
                      <LatexRenderer latex={"f'(x) = \\frac{1 - \\frac{2x}{1+x} - \\ln(x) + 2\\ln(1+x)}{x^2}"} />
                    </div>
                    <div className="text-center mt-2 bg-green-50 p-2 rounded">
                      <LatexRenderer latex={"f'(x) = \\frac{\\frac{1-x}{1+x} - \\ln(x) + 2\\ln(1+x)}{x^2}"} />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">2. Fonction f_n(x)</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <p className="mb-2">Appliquons la règle de dérivation du produit :</p>
                    <div className="text-center">
                      <LatexRenderer latex={"f_n'(x) = 1 \\cdot e^{-\\frac{n}{x}} + x \\cdot e^{-\\frac{n}{x}} \\cdot \\frac{n}{x^2}"} />
                    </div>
                    <div className="text-center mt-2">
                      <LatexRenderer latex={"f_n'(x) = e^{-\\frac{n}{x}} + \\frac{n}{x} \\cdot e^{-\\frac{n}{x}}"} />
                    </div>
                    <div className="text-center mt-2 bg-green-50 p-2 rounded">
                      <LatexRenderer latex={"f_n'(x) = e^{-\\frac{n}{x}}\\left(1 + \\frac{n}{x}\\right)"} />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">3. Fonction h(x)</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <p className="mb-2">Appliquons la règle de dérivation du quotient :</p>
                    <div className="text-center">
                      <LatexRenderer latex={"h'(x) = \\frac{e^x \\cdot (1+e^x)^2 - e^x \\cdot 2(1+e^x) \\cdot e^x}{(1+e^x)^4}"} />
                    </div>
                    <div className="text-center mt-2">
                      <LatexRenderer latex={"h'(x) = \\frac{e^x(1+e^x) - 2e^{2x}}{(1+e^x)^3}"} />
                    </div>
                    <div className="text-center mt-2">
                      <LatexRenderer latex={"h'(x) = \\frac{e^x + e^{2x} - 2e^{2x}}{(1+e^x)^3}"} />
                    </div>
                    <div className="text-center mt-2 bg-green-50 p-2 rounded">
                      <LatexRenderer latex={"h'(x) = \\frac{e^x(1 - e^x)}{(1+e^x)^3}"} />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">4. Fonction m(u)</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <p className="mb-2">Développons d'abord :</p>
                    <div className="text-center">
                      <LatexRenderer latex={"m(u) = (1 + \\sqrt{u})\\sqrt{u} = \\sqrt{u} + u"} />
                    </div>
                  </div>
                  <div>
                    <p className="mb-2">Dérivons terme par terme :</p>
                    <div className="text-center bg-green-50 p-2 rounded">
                      <LatexRenderer latex={"m'(u) = \\frac{1}{2\\sqrt{u}} + 1 = \\frac{1 + 2\\sqrt{u}}{2\\sqrt{u}}"} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-blue-800 mb-3">💡 Rappels des règles de dérivation</h4>
                <div className="space-y-2 text-blue-800">
                  <div>• <strong>Règle du quotient :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}"} /></span></div>
                  <div>• <strong>Règle du produit :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"(uv)' = u'v + uv'"} /></span></div>
                  <div>• <strong>Dérivée composée :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"(f \\circ g)'(x) = f'(g(x)) \\cdot g'(x)"} /></span></div>
                  <div>• <strong>Dérivées usuelles :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"(\\ln x)' = \\frac{1}{x}, \\quad (e^x)' = e^x, \\quad (\\sqrt{x})' = \\frac{1}{2\\sqrt{x}}"} /></span></div>
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex2"
          title="Exercice 2"
          difficulty="Moyen"
          content={
            <div>
              <p className="mb-4"><strong>Dériver une fonction définie avec une valeur absolue</strong></p>
              <p className="mb-4">Soit la fonction <span className="inline-block align-middle"><LatexRenderer latex={"f"} /></span> définie par :</p>
              <div className="text-center my-4">
                <LatexRenderer latex={"\\forall t \\in \\mathbb{R}, \\quad f(t) = e^{|t+1|}"} />
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-green-600">Étape 1 : Analyse de la valeur absolue</strong>
                <p className="mt-2">On remarque que :</p>
                <div className="mt-2 text-center">
                  <LatexRenderer latex={"|t+1| \\geq 0 \\Longleftrightarrow t \\geq -1"} />
                </div>
                <p className="mt-2">Donc :</p>
                <div className="mt-2 text-center">
                  <LatexRenderer latex={"|t+1| = \\begin{cases} t+1 & \\text{si } t \\geq -1 \\\\ -(t+1) = -t -1 & \\text{si } t < -1 \\end{cases}"} />
                </div>
              </div>
              
              <div>
                <strong className="text-green-600">Étape 2 : Distinction de cas</strong>
                <p className="mt-2 font-semibold">Distinguons deux cas :</p>
                
                <div className="mt-4 space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="font-semibold text-blue-800">1er cas : si <span className="inline-block align-middle"><LatexRenderer latex={"t < -1"} /></span></p>
                    <p className="mt-2 text-blue-800">Alors :</p>
                    <div className="mt-2 text-center">
                      <LatexRenderer latex={"f(t) = e^{-(t+1)} = e^{-t - 1}"} />
                    </div>
                    <p className="mt-2 text-blue-800">Par dérivation :</p>
                    <div className="mt-2 text-center">
                      <LatexRenderer latex={"f'(t) = \\frac{d}{dt} e^{-t-1} = -e^{-t-1}"} />
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="font-semibold text-purple-800">2ème cas : si <span className="inline-block align-middle"><LatexRenderer latex={"t \\geq -1"} /></span></p>
                    <p className="mt-2 text-purple-800">Alors :</p>
                    <div className="mt-2 text-center">
                      <LatexRenderer latex={"f(t) = e^{t+1}"} />
                    </div>
                    <p className="mt-2 text-purple-800">Par dérivation :</p>
                    <div className="mt-2 text-center">
                      <LatexRenderer latex={"f'(t) = e^{t+1}"} />
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <strong className="text-green-600">Résultat final :</strong>
                <p className="mt-2">Ainsi :</p>
                <div className="mt-2 text-center bg-green-50 p-3 rounded border">
                  <LatexRenderer latex={"f'(t) = \\begin{cases} -e^{-t-1} & \\text{si } t < -1 \\\\ e^{t+1} & \\text{si } t \\geq -1 \\end{cases}"} />
                </div>
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-yellow-800 mb-3">⚠️ Points d'attention</h4>
                <div className="space-y-2 text-yellow-800">
                  <div className="flex items-start gap-2">
                    <span className="text-sm">•</span>
                    <span><strong>Dérivabilité en t = -1 :</strong> Il faut vérifier si la fonction est dérivable au point de changement <span className="inline-block align-middle"><LatexRenderer latex={"t = -1"} /></span>.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sm">•</span>
                    <span><strong>Continuité :</strong> Vérifier d'abord que la fonction est continue en <span className="inline-block align-middle"><LatexRenderer latex={"t = -1"} /></span>.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sm">•</span>
                    <span><strong>Méthode générale :</strong> Pour une fonction avec valeur absolue, toujours étudier les différents cas selon le signe de l'expression à l'intérieur de la valeur absolue.</span>
                  </div>
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex3"
          title="Exercice 3"
          difficulty="Moyen"
          content={
            <div>
              <p className="mb-4">Pour tout réel <span className="inline-block align-middle"><LatexRenderer latex={"x \\neq -1"} /></span>, on pose :</p>
              <div className="text-center my-4">
                <LatexRenderer latex={"f(x) = \\frac{e^x}{1 + x}"} />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="font-semibold">1.</span>
                  <div className="flex-1">
                    <p>Justifier que <span className="inline-block align-middle"><LatexRenderer latex={"f"} /></span> est dérivable sur <span className="inline-block align-middle"><LatexRenderer latex={"]-\\infty ; -1["} /></span> et sur <span className="inline-block align-middle"><LatexRenderer latex={"]-1 ; +\\infty["} /></span>, et que pour tout réel <span className="inline-block align-middle"><LatexRenderer latex={"x"} /></span> dans ces intervalles :</p>
                    <div className="text-center my-3">
                      <LatexRenderer latex={"f'(x) = \\frac{x e^x}{(1 + x)^2}"} />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="font-semibold">2.</span>
                  <div className="flex-1">
                    <p>Étudier le signe de <span className="inline-block align-middle"><LatexRenderer latex={"f'(x)"} /></span> et en déduire le tableau de variations de <span className="inline-block align-middle"><LatexRenderer latex={"f"} /></span>.</p>
                  </div>
                </div>
              </div>
            </div>
          }
          correction={
            <div className="space-y-6">
              <div>
                <strong className="text-green-600">1. Dérivabilité et calcul de f'(x)</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <p className="mb-2"><strong>Justification de la dérivabilité :</strong></p>
                    <div className="ml-4 space-y-2">
                      <p>• La fonction <span className="inline-block align-middle"><LatexRenderer latex={"e^x"} /></span> est dérivable sur <span className="inline-block align-middle"><LatexRenderer latex={"\\mathbb{R}"} /></span></p>
                      <p>• La fonction <span className="inline-block align-middle"><LatexRenderer latex={"1 + x"} /></span> est dérivable sur <span className="inline-block align-middle"><LatexRenderer latex={"\\mathbb{R}"} /></span> et ne s'annule pas sur <span className="inline-block align-middle"><LatexRenderer latex={"]-\\infty ; -1[ \\cup ]-1 ; +\\infty["} /></span></p>
                      <p>• Par quotient de fonctions dérivables, <span className="inline-block align-middle"><LatexRenderer latex={"f"} /></span> est dérivable sur chacun des intervalles <span className="inline-block align-middle"><LatexRenderer latex={"]-\\infty ; -1["} /></span> et <span className="inline-block align-middle"><LatexRenderer latex={"]-1 ; +\\infty["} /></span></p>
                    </div>
                  </div>
                  <div>
                    <p className="mb-2"><strong>Calcul de la dérivée :</strong></p>
                    <p className="mb-2">On applique la règle de dérivation du quotient : <span className="inline-block align-middle"><LatexRenderer latex={"\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}"} /></span></p>
                    <div className="ml-4 space-y-2">
                      <p>Avec <span className="inline-block align-middle"><LatexRenderer latex={"u(x) = e^x"} /></span> donc <span className="inline-block align-middle"><LatexRenderer latex={"u'(x) = e^x"} /></span></p>
                      <p>Et <span className="inline-block align-middle"><LatexRenderer latex={"v(x) = 1 + x"} /></span> donc <span className="inline-block align-middle"><LatexRenderer latex={"v'(x) = 1"} /></span></p>
                    </div>
                    <div className="mt-3 space-y-2">
                      <div className="text-center">
                        <LatexRenderer latex={"f'(x) = \\frac{e^x \\cdot (1+x) - e^x \\cdot 1}{(1+x)^2}"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"f'(x) = \\frac{e^x(1+x) - e^x}{(1+x)^2}"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"f'(x) = \\frac{e^x(1+x-1)}{(1+x)^2}"} />
                      </div>
                      <div className="text-center bg-green-50 p-2 rounded">
                        <LatexRenderer latex={"f'(x) = \\frac{x e^x}{(1+x)^2}"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">2. Étude du signe de f'(x) et tableau de variations</strong>
                <div className="mt-2 space-y-4">
                  <div>
                    <p className="mb-2"><strong>Étude du signe :</strong></p>
                    <div className="text-center mb-3">
                      <LatexRenderer latex={"f'(x) = \\frac{x e^x}{(1+x)^2}"} />
                    </div>
                    <div className="ml-4 space-y-2">
                      <p>• <span className="inline-block align-middle"><LatexRenderer latex={"e^x > 0"} /></span> pour tout <span className="inline-block align-middle"><LatexRenderer latex={"x \\in \\mathbb{R}"} /></span></p>
                      <p>• <span className="inline-block align-middle"><LatexRenderer latex={"(1+x)^2 > 0"} /></span> pour tout <span className="inline-block align-middle"><LatexRenderer latex={"x \\neq -1"} /></span></p>
                      <p>• Le signe de <span className="inline-block align-middle"><LatexRenderer latex={"f'(x)"} /></span> est donc celui de <span className="inline-block align-middle"><LatexRenderer latex={"x"} /></span></p>
                    </div>
                    <div className="mt-3">
                      <p>Ainsi :</p>
                      <div className="ml-4 space-y-1">
                        <p>• <span className="inline-block align-middle"><LatexRenderer latex={"f'(x) < 0"} /></span> si <span className="inline-block align-middle"><LatexRenderer latex={"x < 0"} /></span> (et <span className="inline-block align-middle"><LatexRenderer latex={"x \\neq -1"} /></span>)</p>
                        <p>• <span className="inline-block align-middle"><LatexRenderer latex={"f'(x) = 0"} /></span> si <span className="inline-block align-middle"><LatexRenderer latex={"x = 0"} /></span></p>
                        <p>• <span className="inline-block align-middle"><LatexRenderer latex={"f'(x) > 0"} /></span> si <span className="inline-block align-middle"><LatexRenderer latex={"x > 0"} /></span></p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <p className="mb-3"><strong>Tableau de variations :</strong></p>
                    <div className="overflow-x-auto">
                      <div className="flex justify-center">
                        <table className="border-collapse border border-gray-400 text-center text-sm">
                          <tbody>
                            <tr className="border border-gray-400">
                              <td className="border border-gray-400 px-4 py-2 font-semibold"><LatexRenderer latex={"x"} /></td>
                              <td className="border border-gray-400 px-4 py-2"><LatexRenderer latex={"-\\infty"} /></td>
                              <td className="border border-gray-400 px-4 py-2"><LatexRenderer latex={"-1"} /></td>
                              <td className="border border-gray-400 px-4 py-2"><LatexRenderer latex={"0"} /></td>
                              <td className="border border-gray-400 px-4 py-2"><LatexRenderer latex={"+\\infty"} /></td>
                            </tr>
                            <tr className="border border-gray-400">
                              <td className="border border-gray-400 px-4 py-2 font-semibold"><LatexRenderer latex={"f'(x)"} /></td>
                              <td className="border border-gray-400 px-4 py-2">-</td>
                              <td className="border border-gray-400 px-4 py-2">||</td>
                              <td className="border border-gray-400 px-4 py-2">0</td>
                              <td className="border border-gray-400 px-4 py-2">+</td>
                            </tr>
                            <tr className="border border-gray-400">
                              <td className="border border-gray-400 px-4 py-2 font-semibold"><LatexRenderer latex={"f(x)"} /></td>
                              <td className="border border-gray-400 px-4 py-2">↘</td>
                              <td className="border border-gray-400 px-4 py-2">||</td>
                              <td className="border border-gray-400 px-4 py-2">
                                <div className="flex flex-col items-center">
                                  <span>↘</span>
                                  <span><LatexRenderer latex={"1"} /></span>
                                  <span>↗</span>
                                </div>
                              </td>
                              <td className="border border-gray-400 px-4 py-2">↗</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="mt-3 text-sm text-gray-600">
                      <p><strong>Remarques :</strong></p>
                      <div className="ml-4 space-y-1">
                        <p>• <span className="inline-block align-middle"><LatexRenderer latex={"f(0) = \\frac{e^0}{1+0} = 1"} /></span> (minimum local)</p>
                        <p>• La fonction présente une asymptote verticale en <span className="inline-block align-middle"><LatexRenderer latex={"x = -1"} /></span></p>
                        <p>• <span className="inline-block align-middle"><LatexRenderer latex={"f"} /></span> est décroissante sur <span className="inline-block align-middle"><LatexRenderer latex={"]-\\infty ; -1["} /></span> et sur <span className="inline-block align-middle"><LatexRenderer latex={"]-1 ; 0]"} /></span></p>
                        <p>• <span className="inline-block align-middle"><LatexRenderer latex={"f"} /></span> est croissante sur <span className="inline-block align-middle"><LatexRenderer latex={"[0 ; +\\infty["} /></span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-indigo-800 mb-3">📊 Méthode générale pour l'étude de fonction</h4>
                <div className="space-y-2 text-indigo-800">
                  <div className="flex items-start gap-2">
                    <span className="text-sm">1.</span>
                    <span><strong>Domaine de définition :</strong> Identifier les valeurs interdites</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sm">2.</span>
                    <span><strong>Dérivabilité :</strong> Justifier sur les intervalles du domaine</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sm">3.</span>
                    <span><strong>Calcul de f'(x) :</strong> Appliquer les règles de dérivation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sm">4.</span>
                    <span><strong>Signe de f'(x) :</strong> Factoriser et étudier chaque facteur</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sm">5.</span>
                    <span><strong>Tableau de variations :</strong> Synthétiser les résultats</span>
                  </div>
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex4"
          title="Exercice 4"
          difficulty="Moyen"
          content={
            <div>
              <p className="mb-4"><strong>Pour tout réel <span className="inline-block align-middle"><LatexRenderer latex={"x \\neq -1"} /></span>, on pose :</strong></p>
              <div className="text-center my-4">
                <LatexRenderer latex={"f(x) = \\frac{e^x}{1 + x}"} />
              </div>
            </div>
          }
          correction={
            <div className="space-y-6">
              <div>
                <strong className="text-green-600">1. Justification de la dérivabilité de f sur ]-∞ ; -1[ et ]-1 ; +∞[</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <p className="mb-2">On pose :</p>
                    <div className="text-center space-y-2">
                      <LatexRenderer latex={"u(x) = e^x \\quad \\text{et} \\quad v(x) = 1 + x"} />
                    </div>
                  </div>
                  <div className="ml-4 space-y-2">
                    <p>• <span className="inline-block align-middle"><LatexRenderer latex={"u"} /></span> est dérivable sur <span className="inline-block align-middle"><LatexRenderer latex={"\\mathbb{R}"} /></span>, donc sur <span className="inline-block align-middle"><LatexRenderer latex={"]-\\infty ; -1["} /></span> et <span className="inline-block align-middle"><LatexRenderer latex={"]-1 ; +\\infty["} /></span></p>
                    <p>• <span className="inline-block align-middle"><LatexRenderer latex={"v"} /></span> est dérivable sur <span className="inline-block align-middle"><LatexRenderer latex={"\\mathbb{R}"} /></span> et <span className="inline-block align-middle"><LatexRenderer latex={"v(x) \\neq 0"} /></span> pour tout <span className="inline-block align-middle"><LatexRenderer latex={"x \\neq -1"} /></span></p>
                  </div>
                  <div>
                    <p className="mb-2">Ainsi, <span className="inline-block align-middle"><LatexRenderer latex={"f(x) = \\frac{u(x)}{v(x)}"} /></span> est dérivable sur <span className="inline-block align-middle"><LatexRenderer latex={"]-\\infty ; -1[ \\cup ]-1 ; +\\infty["} /></span></p>
                  </div>
                  <div>
                    <p className="mb-2">Par la formule de dérivation du quotient :</p>
                    <div className="text-center space-y-2">
                      <LatexRenderer latex={"f'(x) = \\frac{u'v - uv'}{v^2} = \\frac{e^x(1 + x) - e^x \\cdot 1}{(1 + x)^2} = \\frac{xe^x}{(1 + x)^2}"} />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">2. Étude du signe de f'(x) et tableau de variations</strong>
                <div className="mt-2 space-y-4">
                  <div>
                    <p className="mb-2">On sait que :</p>
                    <div className="ml-4 space-y-1">
                      <p>• <span className="inline-block align-middle"><LatexRenderer latex={"e^x > 0"} /></span> pour tout réel <span className="inline-block align-middle"><LatexRenderer latex={"x"} /></span></p>
                      <p>• <span className="inline-block align-middle"><LatexRenderer latex={"(1 + x)^2 > 0"} /></span> pour tout <span className="inline-block align-middle"><LatexRenderer latex={"x \\neq -1"} /></span></p>
                    </div>
                    <p className="mt-2">Donc le signe de <span className="inline-block align-middle"><LatexRenderer latex={"f'(x) = \\frac{xe^x}{(1 + x)^2}"} /></span> dépend uniquement du signe de <span className="inline-block align-middle"><LatexRenderer latex={"x"} /></span>.</p>
                  </div>
                  
                  <div>
                    <p className="mb-3">On obtient le tableau de variations suivant :</p>
                    <div className="overflow-x-auto">
                      <div className="flex justify-center">
                        <table className="border-collapse border border-gray-400 text-center text-sm">
                          <tbody>
                            <tr className="border border-gray-400">
                              <td className="border border-gray-400 px-4 py-2 font-semibold"><LatexRenderer latex={"x"} /></td>
                              <td className="border border-gray-400 px-4 py-2"><LatexRenderer latex={"-\\infty"} /></td>
                              <td className="border border-gray-400 px-4 py-2"><LatexRenderer latex={"-1"} /></td>
                              <td className="border border-gray-400 px-4 py-2"><LatexRenderer latex={"0"} /></td>
                              <td className="border border-gray-400 px-4 py-2"><LatexRenderer latex={"+\\infty"} /></td>
                            </tr>
                            <tr className="border border-gray-400">
                              <td className="border border-gray-400 px-4 py-2 font-semibold"><LatexRenderer latex={"f'(x)"} /></td>
                              <td className="border border-gray-400 px-4 py-2">-</td>
                              <td className="border border-gray-400 px-4 py-2 text-gray-500">non défini</td>
                              <td className="border border-gray-400 px-4 py-2">0</td>
                              <td className="border border-gray-400 px-4 py-2">+</td>
                            </tr>
                            <tr className="border border-gray-400">
                              <td className="border border-gray-400 px-4 py-2 font-semibold"><LatexRenderer latex={"f(x)"} /></td>
                              <td className="border border-gray-400 px-4 py-2">↘</td>
                              <td className="border border-gray-400 px-4 py-2 text-red-600">asymptote</td>
                              <td className="border border-gray-400 px-4 py-2">
                                <div className="flex flex-col items-center">
                                  <span>min = 1</span>
                                </div>
                              </td>
                              <td className="border border-gray-400 px-4 py-2">↗</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <p className="mb-2"><strong>Remarques :</strong></p>
                    <div className="ml-4 space-y-1">
                      <p>• <span className="inline-block align-middle"><LatexRenderer latex={"f"} /></span> admet une asymptote verticale en <span className="inline-block align-middle"><LatexRenderer latex={"x = -1"} /></span></p>
                      <p>• <span className="inline-block align-middle"><LatexRenderer latex={"f"} /></span> atteint un minimum en <span className="inline-block align-middle"><LatexRenderer latex={"x = 0"} /></span> avec <span className="inline-block align-middle"><LatexRenderer latex={"f(0) = 1"} /></span></p>
                      <p>• <span className="inline-block align-middle"><LatexRenderer latex={"f"} /></span> est décroissante sur <span className="inline-block align-middle"><LatexRenderer latex={"]-\\infty ; 0["} /></span>, croissante sur <span className="inline-block align-middle"><LatexRenderer latex={"[0 ; +\\infty["} /></span></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-emerald-800 mb-3">✅ Points clés de la méthode</h4>
                <div className="space-y-2 text-emerald-800">
                  <div className="flex items-start gap-2">
                    <span className="text-sm">•</span>
                    <span><strong>Décomposition :</strong> Identifier u(x) et v(x) pour appliquer la règle du quotient</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sm">•</span>
                    <span><strong>Domaine :</strong> Exclure les valeurs qui annulent le dénominateur</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sm">•</span>
                    <span><strong>Signe de f'(x) :</strong> Analyser chaque facteur séparément</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sm">•</span>
                    <span><strong>Asymptotes :</strong> Identifier les discontinuités du domaine</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sm">•</span>
                    <span><strong>Extrema :</strong> Localiser où f'(x) = 0 et calculer f(x)</span>
                  </div>
                </div>
              </div>
            </div>
          }
        />

      </div>
    </div>
  );
};

export default Chapitre3FonctionsExercicesPage;