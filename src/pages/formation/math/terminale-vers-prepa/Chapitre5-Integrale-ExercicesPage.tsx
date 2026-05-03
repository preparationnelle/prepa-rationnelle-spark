import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';

const Chapitre5IntegraleExercicesPage = () => {
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
            <Link to="/formation/math/terminale-vers-prepa" className="hover:text-[#1e3a8a] transition-colors">
              Terminale vers la prépa
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <span className="text-[#2D5BFF] font-bold">Exercices - Chapitre 5</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 mb-8">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Exercices - Chapitre 5 : Intégrale
            </h1>
            <p className="text-slate-600 text-lg">
              Exercices progressifs pour maîtriser les primitives et le calcul intégral.
            </p>
          </div>
        </Card>

        <DifficultyHeader
          level="Module 1"
          title="Primitives et calcul intégral"
          icon={BookOpen}
        />

        <ExerciseCard
          id="ex1"
          title="Exercice 1"
          difficulty="Facile"
          content={
            <div>
              <p className="mb-4"><strong>Calculer l'intégrale suivante :</strong></p>
              
              <div className="text-center my-4">
                <LatexRenderer latex={"A = \\int_0^1 \\frac{1}{1 + 2t} \\, dt"} />
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-yellow-800 mb-3">🔍 Reconnaissance de forme</h4>
                <p className="text-yellow-800">On reconnaît une fonction de la forme <span className="inline-block align-middle"><LatexRenderer latex={"\\frac{u'}{u}"} /></span> avec <span className="inline-block align-middle"><LatexRenderer latex={"u \\neq 0"} /></span>. Il manque simplement le coefficient 2 au numérateur.</p>
              </div>

              <div>
                <strong className="text-green-600">Méthode : Faire apparaître la dérivée du dénominateur</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <p className="mb-2">On identifie : <span className="inline-block align-middle"><LatexRenderer latex={"u(t) = 1 + 2t"} /></span>, donc <span className="inline-block align-middle"><LatexRenderer latex={"u'(t) = 2"} /></span></p>
                  </div>
                  
                  <div>
                    <p className="mb-2">On fait apparaître la dérivée en multipliant par <span className="inline-block align-middle"><LatexRenderer latex={"\\frac{2}{2}"} /></span> :</p>
                    <div className="text-center">
                      <LatexRenderer latex={"A = \\int_0^1 \\frac{1}{1 + 2t} \\, dt = \\int_0^1 \\frac{1}{2} \\cdot \\frac{2}{1 + 2t} \\, dt"} />
                    </div>
                  </div>

                  <div>
                    <p className="mb-2">On reconnaît la primitive de <span className="inline-block align-middle"><LatexRenderer latex={"\\frac{u'}{u}"} /></span> qui est <span className="inline-block align-middle"><LatexRenderer latex={"\\ln|u|"} /></span> :</p>
                    <div className="text-center">
                      <LatexRenderer latex={"A = \\frac{1}{2} \\int_0^1 \\frac{2}{1 + 2t} \\, dt = \\left[ \\frac{1}{2} \\ln|1 + 2t| \\right]_0^1"} />
                    </div>
                  </div>

                  <div>
                    <p className="mb-2">Évaluation aux bornes :</p>
                    <div className="space-y-2">
                      <div className="text-center">
                        <LatexRenderer latex={"A = \\frac{1}{2} \\left( \\ln|1 + 2 \\times 1| - \\ln|1 + 2 \\times 0| \\right)"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= \\frac{1}{2} \\left( \\ln(3) - \\ln(1) \\right)"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= \\frac{1}{2} \\left( \\ln(3) - 0 \\right)"} />
                      </div>
                      <div className="text-center bg-green-50 p-3 rounded border-2 border-green-200">
                        <LatexRenderer latex={"A = \\frac{1}{2} \\ln 3"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-orange-800 mb-3">💡 Technique générale</h4>
                <div className="space-y-2 text-orange-800">
                  <div>• <strong>Forme générale :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\int \\frac{1}{ax + b} \\, dx = \\frac{1}{a} \\ln|ax + b| + C"} /></span></div>
                  <div>• <strong>Ici :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"a = 2"} /></span> et <span className="inline-block align-middle"><LatexRenderer latex={"b = 1"} /></span></div>
                  <div>• <strong>Astuce :</strong> Faire apparaître la dérivée du dénominateur au numérateur</div>
                  <div>• <strong>Vérification :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\left(\\frac{1}{2} \\ln|1 + 2t|\\right)' = \\frac{1}{2} \\cdot \\frac{2}{1 + 2t} = \\frac{1}{1 + 2t}"} /></span> ✓</div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-blue-800 mb-3">📚 Rappels sur les primitives usuelles</h4>
                <div className="space-y-2 text-blue-800">
                  <div>• <span className="inline-block align-middle"><LatexRenderer latex={"\\int \\frac{1}{x} \\, dx = \\ln|x| + C"} /></span></div>
                  <div>• <span className="inline-block align-middle"><LatexRenderer latex={"\\int \\frac{u'}{u} \\, dx = \\ln|u| + C"} /></span></div>
                  <div>• <span className="inline-block align-middle"><LatexRenderer latex={"\\int \\frac{1}{ax + b} \\, dx = \\frac{1}{a} \\ln|ax + b| + C"} /></span></div>
                  <div>• <strong>Important :</strong> Ne pas oublier la valeur absolue dans <span className="inline-block align-middle"><LatexRenderer latex={"\\ln|u|"} /></span></div>
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
              <p className="mb-4"><strong>Calculer l'intégrale définie suivante :</strong></p>
              
              <div className="text-center my-4">
                <LatexRenderer latex={"\\forall x \\geq 2, \\quad B(x) = \\int_2^x \\frac{1}{u \\sqrt{2u}} \\, du"} />
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-blue-800 mb-3">🔧 Stratégie</h4>
                <p className="text-blue-800">Simplifier l'expression sous l'intégrale en utilisant les propriétés des puissances et des racines pour faire apparaître une fonction de la forme <span className="inline-block align-middle"><LatexRenderer latex={"ax^\\beta"} /></span>.</p>
              </div>

              <div>
                <strong className="text-green-600">Étape 1 : Simplification de l'intégrande</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <p className="mb-2">On commence par réécrire <span className="inline-block align-middle"><LatexRenderer latex={"\\frac{1}{u \\sqrt{2u}}"} /></span> sous une forme plus exploitable :</p>
                    <div className="text-center">
                      <LatexRenderer latex={"\\frac{1}{u \\sqrt{2u}} = \\frac{1}{u \\sqrt{2} \\sqrt{u}} = \\frac{1}{\\sqrt{2}} \\cdot \\frac{1}{u \\sqrt{u}} = \\frac{1}{\\sqrt{2}} \\cdot \\frac{1}{u^{1 + \\frac{1}{2}}} = \\frac{1}{\\sqrt{2}} \\cdot u^{-\\frac{3}{2}}"} />
                    </div>
                  </div>

                  <div>
                    <p className="mb-2">L'intégrale devient :</p>
                    <div className="text-center bg-blue-50 p-2 rounded">
                      <LatexRenderer latex={"B(x) = \\int_2^x \\frac{1}{\\sqrt{2}} u^{-\\frac{3}{2}} \\, du"} />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Étape 2 : Calcul de la primitive</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <p className="mb-2">On utilise la formule <span className="inline-block align-middle"><LatexRenderer latex={"\\int u^\\alpha \\, du = \\frac{u^{\\alpha + 1}}{\\alpha + 1} + C"} /></span> avec <span className="inline-block align-middle"><LatexRenderer latex={"\\alpha = -\\frac{3}{2}"} /></span> :</p>
                    <div className="space-y-2">
                      <div className="text-center">
                        <LatexRenderer latex={"B(x) = \\left[ \\frac{1}{\\sqrt{2}} \\cdot \\frac{u^{-\\frac{3}{2} + 1}}{-\\frac{3}{2} + 1} \\right]_2^x"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= \\left[ \\frac{1}{\\sqrt{2}} \\cdot \\frac{u^{-\\frac{1}{2}}}{-\\frac{1}{2}} \\right]_2^x"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= \\left[ -\\frac{2}{\\sqrt{2}} u^{-\\frac{1}{2}} \\right]_2^x"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= \\left[ -\\frac{2}{\\sqrt{2}} \\cdot \\frac{1}{\\sqrt{u}} \\right]_2^x"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Étape 3 : Évaluation aux bornes</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <p className="mb-2">On évalue la primitive entre les bornes 2 et x :</p>
                    <div className="space-y-2">
                      <div className="text-center">
                        <LatexRenderer latex={"B(x) = -\\frac{2}{\\sqrt{2x}} - \\left( -\\frac{2}{\\sqrt{2 \\cdot 2}} \\right)"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= -\\frac{2}{\\sqrt{2x}} + \\frac{2}{\\sqrt{4}}"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= -\\frac{2}{\\sqrt{2x}} + \\frac{2}{2}"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= -\\frac{2}{\\sqrt{2x}} + 1"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= 1 - \\frac{2}{\\sqrt{2x}}"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Étape 4 : Simplification finale</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <p className="mb-2">On peut simplifier davantage en rationalisant :</p>
                    <div className="space-y-2">
                      <div className="text-center">
                        <LatexRenderer latex={"\\frac{2}{\\sqrt{2x}} = \\frac{2}{\\sqrt{2} \\sqrt{x}} = \\frac{2}{\\sqrt{2}} \\cdot \\frac{1}{\\sqrt{x}} = \\frac{2\\sqrt{2}}{2} \\cdot \\frac{1}{\\sqrt{x}} = \\frac{\\sqrt{2}}{\\sqrt{x}}"} />
                      </div>
                      <div className="text-center bg-green-50 p-3 rounded border-2 border-green-200">
                        <LatexRenderer latex={"B(x) = 1 - \\frac{\\sqrt{2}}{\\sqrt{x}}"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-yellow-800 mb-3">💡 Rappels importants</h4>
                <div className="space-y-2 text-yellow-800">
                  <div>• <strong>Propriétés des racines :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\sqrt{ab} = \\sqrt{a} \\cdot \\sqrt{b}"} /></span></div>
                  <div>• <strong>Notation exponentielle :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\sqrt{a} = a^{1/2}"} /></span> et <span className="inline-block align-middle"><LatexRenderer latex={"\\frac{1}{\\sqrt{a}} = a^{-1/2}"} /></span></div>
                  <div>• <strong>Primitive de puissance :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\int u^\\alpha \\, du = \\frac{u^{\\alpha + 1}}{\\alpha + 1} + C"} /></span> (avec <span className="inline-block align-middle"><LatexRenderer latex={"\\alpha \\neq -1"} /></span>)</div>
                  <div>• <strong>Opérations avec les exposants :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"u^a \\cdot u^b = u^{a+b}"} /></span></div>
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-orange-800 mb-3">🎯 Méthode générale</h4>
                <div className="space-y-2 text-orange-800">
                  <div>• <strong>Simplifier d'abord :</strong> Transformer l'intégrande sous la forme <span className="inline-block align-middle"><LatexRenderer latex={"ax^\\beta"} /></span></div>
                  <div>• <strong>Utiliser les puissances :</strong> Convertir racines et fractions en exposants</div>
                  <div>• <strong>Appliquer la formule :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\int ax^\\beta \\, dx = a \\cdot \\frac{x^{\\beta + 1}}{\\beta + 1} + C"} /></span></div>
                  <div>• <strong>Évaluer aux bornes :</strong> Calculer <span className="inline-block align-middle"><LatexRenderer latex={"F(b) - F(a)"} /></span> sans se hâter</div>
                  <div>• <strong>Simplifier le résultat :</strong> Rationaliser si nécessaire</div>
                </div>
              </div>

              <div className="bg-teal-50 border-l-4 border-teal-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-teal-800 mb-3">✅ Vérification</h4>
                <div className="space-y-2 text-teal-800">
                  <p>On peut vérifier le résultat en dérivant :</p>
                  <div className="text-center">
                    <LatexRenderer latex={"\\frac{d}{dx}\\left[1 - \\frac{\\sqrt{2}}{\\sqrt{x}}\\right] = \\frac{d}{dx}\\left[1 - \\sqrt{2} \\cdot x^{-1/2}\\right] = \\sqrt{2} \\cdot \\frac{1}{2} x^{-3/2} = \\frac{\\sqrt{2}}{2x^{3/2}}"} />
                  </div>
                  <p>Et on retrouve bien <span className="inline-block align-middle"><LatexRenderer latex={"\\frac{1}{x\\sqrt{2x}} = \\frac{1}{\\sqrt{2}} \\cdot x^{-3/2}"} /></span> ✓</p>
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
              <p className="mb-4"><strong>Calculer l'intégrale paramétrée suivante :</strong></p>
              
              <div className="text-center my-4">
                <LatexRenderer latex={"\\forall x \\geq b, \\quad C(x) = \\int_b^x \\frac{b^a}{t^{a+1}} \\, dt"} />
              </div>
              
              <p className="text-center text-sm text-gray-600 mt-2">
                avec <span className="inline-block align-middle"><LatexRenderer latex={"(a,b) \\in (\\mathbb{R}_+^*)^2"} /></span>
              </p>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-red-800 mb-3">⚠️ Attention</h4>
                <p className="text-red-800">La variable d'intégration est ici <strong>t</strong> et non pas <strong>a</strong> ou <strong>b</strong> qui sont donc des <strong>constantes</strong>. Il s'agit d'une intégrale paramétrée.</p>
              </div>

              <div>
                <strong className="text-green-600">Identification des paramètres</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <p className="mb-2">Dans cette intégrale :</p>
                    <div className="space-y-1">
                      <div>• <strong>Variable d'intégration :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"t"} /></span></div>
                      <div>• <strong>Paramètres constants :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"a"} /></span> et <span className="inline-block align-middle"><LatexRenderer latex={"b"} /></span> avec <span className="inline-block align-middle"><LatexRenderer latex={"a, b > 0"} /></span></div>
                      <div>• <strong>Borne supérieure variable :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"x \\geq b"} /></span></div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Étape 1 : Réécriture de l'intégrande</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <p className="mb-2">On transforme <span className="inline-block align-middle"><LatexRenderer latex={"\\frac{b^a}{t^{a+1}}"} /></span> sous une forme plus exploitable :</p>
                    <div className="text-center">
                      <LatexRenderer latex={"\\frac{b^a}{t^{a+1}} = b^a \\cdot t^{-(a+1)} = b^a \\cdot t^{-a-1}"} />
                    </div>
                  </div>

                  <div>
                    <p className="mb-2">L'intégrale devient :</p>
                    <div className="text-center bg-blue-50 p-2 rounded">
                      <LatexRenderer latex={"C(x) = \\int_b^x b^a \\cdot t^{-a-1} \\, dt"} />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Étape 2 : Calcul de la primitive</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <p className="mb-2">On utilise la formule <span className="inline-block align-middle"><LatexRenderer latex={"\\int t^\\alpha \\, dt = \\frac{t^{\\alpha + 1}}{\\alpha + 1} + C"} /></span> avec <span className="inline-block align-middle"><LatexRenderer latex={"\\alpha = -a-1"} /></span> :</p>
                    <div className="space-y-2">
                      <div className="text-center">
                        <LatexRenderer latex={"C(x) = \\left[ b^a \\cdot \\frac{t^{-a-1+1}}{-a-1+1} \\right]_b^x"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= \\left[ b^a \\cdot \\frac{t^{-a}}{-a} \\right]_b^x"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= \\left[ -\\frac{b^a}{a} \\cdot t^{-a} \\right]_b^x"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= \\left[ -\\frac{b^a}{a} \\cdot \\frac{1}{t^a} \\right]_b^x"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Étape 3 : Évaluation aux bornes</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <p className="mb-2">On évalue la primitive entre les bornes b et x :</p>
                    <div className="space-y-2">
                      <div className="text-center">
                        <LatexRenderer latex={"C(x) = -\\frac{b^a}{a} \\cdot \\frac{1}{x^a} - \\left( -\\frac{b^a}{a} \\cdot \\frac{1}{b^a} \\right)"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= -\\frac{b^a}{a \\cdot x^a} + \\frac{b^a}{a \\cdot b^a}"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= -\\frac{b^a}{a \\cdot x^a} + \\frac{1}{a}"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Étape 4 : Simplification finale</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <p className="mb-2">On peut factoriser et simplifier :</p>
                    <div className="space-y-2">
                      <div className="text-center">
                        <LatexRenderer latex={"C(x) = \\frac{1}{a} \\left( 1 - \\frac{b^a}{x^a} \\right)"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= \\frac{1}{a} \\left( 1 - \\left(\\frac{b}{x}\\right)^a \\right)"} />
                      </div>
                      <div className="text-center bg-green-50 p-3 rounded border-2 border-green-200">
                        <LatexRenderer latex={"C(x) = \\frac{1}{a} \\left[ 1 - \\left(\\frac{b}{x}\\right)^a \\right]"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-yellow-800 mb-3">💡 Points clés</h4>
                <div className="space-y-2 text-yellow-800">
                  <div>• <strong>Intégrale paramétrée :</strong> Les paramètres <span className="inline-block align-middle"><LatexRenderer latex={"a"} /></span> et <span className="inline-block align-middle"><LatexRenderer latex={"b"} /></span> sont constants</div>
                  <div>• <strong>Variable d'intégration :</strong> Seul <span className="inline-block align-middle"><LatexRenderer latex={"t"} /></span> varie dans l'intégration</div>
                  <div>• <strong>Forme obtenue :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\alpha t^\\beta"} /></span> avec <span className="inline-block align-middle"><LatexRenderer latex={"\\alpha = b^a"} /></span> et <span className="inline-block align-middle"><LatexRenderer latex={"\\beta = -a-1"} /></span></div>
                  <div>• <strong>Condition :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\beta \\neq -1"} /></span>, soit <span className="inline-block align-middle"><LatexRenderer latex={"-a-1 \\neq -1"} /></span>, donc <span className="inline-block align-middle"><LatexRenderer latex={"a \\neq 0"} /></span> ✓</div>
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-orange-800 mb-3">🎯 Méthode pour les intégrales paramétrées</h4>
                <div className="space-y-2 text-orange-800">
                  <div>• <strong>Identifier :</strong> Variable d'intégration vs paramètres constants</div>
                  <div>• <strong>Traiter les paramètres :</strong> Comme des constantes multiplicatives</div>
                  <div>• <strong>Appliquer les formules :</strong> Règles usuelles de primitivation</div>
                  <div>• <strong>Évaluer aux bornes :</strong> En fonction des paramètres</div>
                  <div>• <strong>Simplifier :</strong> Factoriser et regrouper les termes</div>
                </div>
              </div>

              <div className="bg-teal-50 border-l-4 border-teal-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-teal-800 mb-3">✅ Vérification et interprétation</h4>
                <div className="space-y-2 text-teal-800">
                  <p><strong>Cas particuliers :</strong></p>
                  <div>• Si <span className="inline-block align-middle"><LatexRenderer latex={"x = b"} /></span> : <span className="inline-block align-middle"><LatexRenderer latex={"C(b) = \\frac{1}{a}(1 - 1) = 0"} /></span> ✓</div>
                  <div>• Si <span className="inline-block align-middle"><LatexRenderer latex={"x \\to +\\infty"} /></span> : <span className="inline-block align-middle"><LatexRenderer latex={"C(x) \\to \\frac{1}{a}"} /></span> (car <span className="inline-block align-middle"><LatexRenderer latex={"\\frac{b}{x} \\to 0"} /></span>)</div>
                  <p><strong>Cohérence :</strong> La fonction <span className="inline-block align-middle"><LatexRenderer latex={"C(x)"} /></span> est croissante pour <span className="inline-block align-middle"><LatexRenderer latex={"x \\geq b"} /></span> car l'intégrande est positive.</p>
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
              <p className="mb-4"><strong>Calculer l'intégrale suivante :</strong></p>
              
              <div className="text-center my-4">
                <LatexRenderer latex={"D = \\int_2^3 \\frac{1}{3^x} \\, dx"} />
              </div>
              
              <p className="text-center text-sm text-gray-500 mt-2">(EML 2004)</p>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-blue-800 mb-3">🔍 Reconnaissance de forme</h4>
                <p className="text-blue-800">On reconnaît la forme <span className="inline-block align-middle"><LatexRenderer latex={"\\int a^x \\, dx"} /></span> avec <span className="inline-block align-middle"><LatexRenderer latex={"a = \\frac{1}{3}"} /></span>, puisque <span className="inline-block align-middle"><LatexRenderer latex={"\\frac{1}{3^x} = \\left( \\frac{1}{3} \\right)^x"} /></span>.</p>
              </div>

              <div>
                <strong className="text-green-600">Étape 1 : Transformation de l'expression</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <p className="mb-2">On réécrit l'intégrande sous une forme exploitable :</p>
                    <div className="text-center">
                      <LatexRenderer latex={"\\frac{1}{3^x} = (3^{-1})^x = \\left( \\frac{1}{3} \\right)^x"} />
                    </div>
                  </div>

                  <div>
                    <p className="mb-2">L'intégrale devient :</p>
                    <div className="text-center bg-blue-50 p-2 rounded">
                      <LatexRenderer latex={"D = \\int_2^3 \\left( \\frac{1}{3} \\right)^x \\, dx"} />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Étape 2 : Application de la formule des primitives exponentielles</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <p className="mb-2">On utilise la formule générale :</p>
                    <div className="text-center bg-yellow-50 p-2 rounded border border-yellow-200">
                      <LatexRenderer latex={"\\int a^x \\, dx = \\frac{a^x}{\\ln a} + C \\quad \\text{pour } a > 0, a \\neq 1"} />
                    </div>
                  </div>

                  <div>
                    <p className="mb-2">Avec <span className="inline-block align-middle"><LatexRenderer latex={"a = \\frac{1}{3}"} /></span> :</p>
                    <div className="space-y-2">
                      <div className="text-center">
                        <LatexRenderer latex={"D = \\left[ \\frac{\\left( \\frac{1}{3} \\right)^x}{\\ln \\left( \\frac{1}{3} \\right)} \\right]_2^3"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Étape 3 : Évaluation aux bornes</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <p className="mb-2">On calcule la différence entre les bornes :</p>
                    <div className="space-y-2">
                      <div className="text-center">
                        <LatexRenderer latex={"D = \\frac{1}{\\ln \\left( \\frac{1}{3} \\right)} \\left[ \\left( \\frac{1}{3} \\right)^3 - \\left( \\frac{1}{3} \\right)^2 \\right]"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= \\frac{1}{\\ln \\left( \\frac{1}{3} \\right)} \\left( \\frac{1}{27} - \\frac{1}{9} \\right)"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= \\frac{1}{\\ln \\left( \\frac{1}{3} \\right)} \\left( \\frac{1 - 3}{27} \\right)"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= \\frac{1}{\\ln \\left( \\frac{1}{3} \\right)} \\cdot \\left( -\\frac{2}{27} \\right)"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= -\\frac{2}{27 \\ln \\left( \\frac{1}{3} \\right)}"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Étape 4 : Simplification finale</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <p className="mb-2">On utilise la propriété <span className="inline-block align-middle"><LatexRenderer latex={"\\ln \\left( \\frac{1}{a} \\right) = -\\ln a"} /></span> :</p>
                    <div className="space-y-2">
                      <div className="text-center">
                        <LatexRenderer latex={"\\ln \\left( \\frac{1}{3} \\right) = \\ln(3^{-1}) = -\\ln 3"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"D = -\\frac{2}{27 \\cdot (-\\ln 3)} = \\frac{2}{27 \\ln 3}"} />
                      </div>
                      <div className="text-center bg-green-50 p-3 rounded border-2 border-green-200">
                        <LatexRenderer latex={"D = \\frac{2}{27 \\ln 3}"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-yellow-800 mb-3">💡 Points techniques importants</h4>
                <div className="space-y-2 text-yellow-800">
                  <div>• <strong>Transformation clé :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\frac{1}{3^x} = \\left( \\frac{1}{3} \\right)^x"} /></span> pour utiliser la primitive connue</div>
                  <div>• <strong>Propriété logarithmique :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\ln \\left( \\frac{1}{a} \\right) = -\\ln a"} /></span></div>
                  <div>• <strong>Calcul fractionnaire :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\frac{1}{27} - \\frac{1}{9} = \\frac{1-3}{27} = -\\frac{2}{27}"} /></span></div>
                  <div>• <strong>Simplification :</strong> Ne calculer les valeurs numériques qu'à la fin</div>
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-orange-800 mb-3">📚 Formules essentielles pour les exponentielles</h4>
                <div className="space-y-2 text-orange-800">
                  <div>• <strong>Primitive générale :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\int a^x \\, dx = \\frac{a^x}{\\ln a} + C"} /></span> (avec <span className="inline-block align-middle"><LatexRenderer latex={"a > 0, a \\neq 1"} /></span>)</div>
                  <div>• <strong>Cas particulier e :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\int e^x \\, dx = e^x + C"} /></span> (car <span className="inline-block align-middle"><LatexRenderer latex={"\\ln e = 1"} /></span>)</div>
                  <div>• <strong>Transformation utile :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\frac{1}{a^x} = a^{-x} = \\left(\\frac{1}{a}\\right)^x"} /></span></div>
                  <div>• <strong>Propriété log :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\ln(a^{-1}) = -\\ln a"} /></span></div>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-purple-800 mb-3">🎯 Méthode générale pour ∫ 1/a^x dx</h4>
                <div className="space-y-2 text-purple-800">
                  <div><strong>1. Transformer :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\frac{1}{a^x} = \\left(\\frac{1}{a}\\right)^x"} /></span></div>
                  <div><strong>2. Appliquer :</strong> La formule <span className="inline-block align-middle"><LatexRenderer latex={"\\int b^x \\, dx = \\frac{b^x}{\\ln b}"} /></span> avec <span className="inline-block align-middle"><LatexRenderer latex={"b = \\frac{1}{a}"} /></span></div>
                  <div><strong>3. Évaluer :</strong> Aux bornes données</div>
                  <div><strong>4. Simplifier :</strong> En utilisant <span className="inline-block align-middle"><LatexRenderer latex={"\\ln\\left(\\frac{1}{a}\\right) = -\\ln a"} /></span></div>
                </div>
              </div>


            </div>
          }
        />

        <ExerciseCard
          id="ex5"
          title="Exercice 5"
          difficulty="Difficile"
          content={
            <div>
              <p className="mb-4"><strong>Calculer l'intégrale suivante :</strong></p>
              
              <div className="text-center my-4">
                <LatexRenderer latex={"E = \\int_0^1 n\\lambda (1 - e^{-\\lambda t})^{n-1} e^{-\\lambda t} \\, dt"} />
              </div>
              
              <p className="text-center text-sm text-gray-600 mt-2">
                avec <span className="inline-block align-middle"><LatexRenderer latex={"n \\in \\mathbb{N}^*, \\; \\lambda \\in \\mathbb{R}_+^*"} /></span>
              </p>
              
              <p className="text-center text-sm text-gray-500 mt-2">(ECRICOME 2001)</p>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-purple-800 mb-3">🔄 Stratégie</h4>
                <p className="text-purple-800">Utiliser un <strong>changement de variable</strong> pour transformer l'expression exponentielle complexe en une puissance simple. On remarque la structure <span className="inline-block align-middle"><LatexRenderer latex={"u^{n-1} \\cdot u'"} /></span>.</p>
              </div>

              <div>
                <strong className="text-green-600">Étape 1 : Choix du changement de variable</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <p className="mb-2">On pose :</p>
                    <div className="text-center bg-blue-50 p-2 rounded">
                      <LatexRenderer latex={"u = 1 - e^{-\\lambda t}"} />
                    </div>
                  </div>

                  <div>
                    <p className="mb-2">On calcule la différentielle :</p>
                    <div className="text-center">
                      <LatexRenderer latex={"du = \\frac{d}{dt}(1 - e^{-\\lambda t}) \\, dt = \\lambda e^{-\\lambda t} \\, dt"} />
                    </div>
                  </div>

                  <div>
                    <p className="mb-2">D'où :</p>
                    <div className="text-center">
                      <LatexRenderer latex={"\\lambda e^{-\\lambda t} \\, dt = du"} />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Étape 2 : Transformation des bornes</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <p className="mb-2">On détermine les nouvelles bornes d'intégration :</p>
                    <div className="space-y-2">
                      <div className="flex justify-center gap-8">
                        <div className="text-center">
                          <div>Pour <span className="inline-block align-middle"><LatexRenderer latex={"t = 0"} /></span> :</div>
                          <div><span className="inline-block align-middle"><LatexRenderer latex={"u = 1 - e^{-\\lambda \\cdot 0} = 1 - 1 = 0"} /></span></div>
                        </div>
                        <div className="text-center">
                          <div>Pour <span className="inline-block align-middle"><LatexRenderer latex={"t = 1"} /></span> :</div>
                          <div><span className="inline-block align-middle"><LatexRenderer latex={"u = 1 - e^{-\\lambda \\cdot 1} = 1 - e^{-\\lambda}"} /></span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Étape 3 : Substitution dans l'intégrale</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <p className="mb-2">On remplace dans l'intégrale originale :</p>
                    <div className="space-y-2">
                      <div className="text-center">
                        <LatexRenderer latex={"E = \\int_0^1 n\\lambda (1 - e^{-\\lambda t})^{n-1} e^{-\\lambda t} \\, dt"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= \\int_0^{1 - e^{-\\lambda}} n u^{n-1} \\, du"} />
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-r-lg">
                    <p className="text-yellow-800"><strong>🔍 Observation :</strong> Le facteur <span className="inline-block align-middle"><LatexRenderer latex={"\\lambda e^{-\\lambda t}"} /></span> est exactement <span className="inline-block align-middle"><LatexRenderer latex={"du"} /></span>, ce qui simplifie grandement l'intégrale !</p>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Étape 4 : Calcul de la primitive</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <p className="mb-2">On reconnaît une primitive de puissance :</p>
                    <div className="space-y-2">
                      <div className="text-center">
                        <LatexRenderer latex={"E = \\int_0^{1 - e^{-\\lambda}} n u^{n-1} \\, du = n \\int_0^{1 - e^{-\\lambda}} u^{n-1} \\, du"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= n \\left[ \\frac{u^n}{n} \\right]_0^{1 - e^{-\\lambda}}"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= \\left[ u^n \\right]_0^{1 - e^{-\\lambda}}"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Étape 5 : Évaluation finale</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <p className="mb-2">On évalue aux bornes :</p>
                    <div className="space-y-2">
                      <div className="text-center">
                        <LatexRenderer latex={"E = (1 - e^{-\\lambda})^n - 0^n"} />
                      </div>
                      <div className="text-center bg-green-50 p-3 rounded border-2 border-green-200">
                        <LatexRenderer latex={"E = (1 - e^{-\\lambda})^n"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-blue-800 mb-3">🎯 Technique du changement de variable</h4>
                <div className="space-y-2 text-blue-800">
                  <div>• <strong>Identifier la structure :</strong> Chercher <span className="inline-block align-middle"><LatexRenderer latex={"f(u(x)) \\cdot u'(x)"} /></span></div>
                  <div>• <strong>Poser u :</strong> Choisir <span className="inline-block align-middle"><LatexRenderer latex={"u = 1 - e^{-\\lambda t}"} /></span> pour simplifier l'expression</div>
                  <div>• <strong>Calculer du :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"du = \\lambda e^{-\\lambda t} \\, dt"} /></span></div>
                  <div>• <strong>Transformer les bornes :</strong> De <span className="inline-block align-middle"><LatexRenderer latex={"[0,1]"} /></span> vers <span className="inline-block align-middle"><LatexRenderer latex={"[0, 1-e^{-\\lambda}]"} /></span></div>
                  <div>• <strong>Substituer :</strong> L'intégrale se simplifie en <span className="inline-block align-middle"><LatexRenderer latex={"\\int u^{n-1} \\, du"} /></span></div>
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-orange-800 mb-3">💡 Points clés de cet exercice</h4>
                <div className="space-y-2 text-orange-800">
                  <div>• <strong>Reconnaissance de forme :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"(1 - e^{-\\lambda t})^{n-1}"} /></span> accompagné de <span className="inline-block align-middle"><LatexRenderer latex={"\\lambda e^{-\\lambda t}"} /></span></div>
                  <div>• <strong>Facteur magique :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\lambda e^{-\\lambda t}"} /></span> est exactement la dérivée de <span className="inline-block align-middle"><LatexRenderer latex={"1 - e^{-\\lambda t}"} /></span></div>
                  <div>• <strong>Simplification :</strong> Le coefficient <span className="inline-block align-middle"><LatexRenderer latex={"n"} /></span> se simplifie avec la primitive</div>
                  <div>• <strong>Niveau concours :</strong> Exercice typique ECRICOME nécessitant une bonne maîtrise technique</div>
                </div>
              </div>

              <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-indigo-800 mb-3">🔬 Interprétation probabiliste</h4>
                <div className="space-y-2 text-indigo-800">
                  <p>Cette intégrale représente en fait la <strong>fonction de répartition</strong> du maximum de <span className="inline-block align-middle"><LatexRenderer latex={"n"} /></span> échantillons indépendants suivant une loi exponentielle de paramètre <span className="inline-block align-middle"><LatexRenderer latex={"\\lambda"} /></span>.</p>
                  <p>En probabilités : <span className="inline-block align-middle"><LatexRenderer latex={"P(\\max(X_1, \\ldots, X_n) \\leq 1) = (1 - e^{-\\lambda})^n"} /></span></p>
                </div>
              </div>
            </div>
          }
        />

      </div>
    </div>
  );
};

export default Chapitre5IntegraleExercicesPage;