import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';

const Chapitre5FonctionsUneVariableReelleExercicesPage = () => {
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
    icon: React.ComponentType<{ className?: string }>; 
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
            <span className="text-[#2D5BFF] font-bold">Exercices - Chapitre 5</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 mb-8">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Exercices - Chapitre 5 : Fonctions d'une variable réelle
            </h1>
            <p className="text-slate-600 text-lg">
              Exercices progressifs pour maîtriser les fonctions réelles, leur continuité et leurs propriétés.
            </p>
          </div>
        </Card>

        <DifficultyHeader
          level="Module 1"
          title="Fonctions trigonométriques inverses"
          icon={BookOpen}
        />

        <ExerciseCard
          id="ex1"
          title="Exercice 1"
          difficulty="Moyen"
          content={
            <div>
              <p><strong>Énoncé :</strong> Donner le domaine de définition ainsi que l'expression des fonctions <LatexRenderer latex={"f \\circ g"} />, <LatexRenderer latex={"g \\circ f"} />, <LatexRenderer latex={"f \\circ f"} /> et <LatexRenderer latex={"g \\circ g"} /> pour les fonctions <LatexRenderer latex={"f"} /> et <LatexRenderer latex={"g"} /> suivantes :</p>
              <div className="space-y-3 mt-4">
                <div>
                  <strong>1.</strong> <LatexRenderer latex={"f(x) = 2x^2 - x, \\quad g(x) = 3x + 2"} />
                </div>
                <div>
                  <strong>2.</strong> <LatexRenderer latex={"f(x) = 1 - x^3, \\quad g(x) = \\frac{1}{x}"} />
                </div>
                <div>
                  <strong>3.</strong> <LatexRenderer latex={"f(x) = \\sqrt{2x + 3}, \\quad g(x) = x^2 + 2"} />
                </div>
              </div>
            </div>
          }
          correction={
            <div className="space-y-6">
              <div>
                <strong className="text-blue-600">1. f(x) = 2x² - x et g(x) = 3x + 2</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    Ce sont deux fonctions polynomiales, donc définies sur <LatexRenderer latex={"\\mathbb{R}"} />.
                  </div>
                  <div className="space-y-2">
                    <div>• <LatexRenderer latex={"f \\circ g(x) = f(g(x)) = f(3x + 2) = 2(3x + 2)^2 - (3x + 2)"} /></div>
                    <div className="ml-4">
                      <LatexRenderer latex={"= 2(9x^2 + 12x + 4) - 3x - 2 = 18x^2 + 21x + 6"} />
                    </div>
                    <div>• <LatexRenderer latex={"g \\circ f(x) = g(f(x)) = g(2x^2 - x) = 3(2x^2 - x) + 2 = 6x^2 - 3x + 2"} /></div>
                    <div>• <LatexRenderer latex={"f \\circ f(x) = f(f(x)) = f(2x^2 - x) = 2(2x^2 - x)^2 - (2x^2 - x)"} /></div>
                    <div>• <LatexRenderer latex={"g \\circ g(x) = g(g(x)) = g(3x + 2) = 3(3x + 2) + 2 = 9x + 8"} /></div>
                  </div>
                  <div className="bg-blue-50 p-2 rounded">
                    <strong>Domaines :</strong> Tous ces composés sont bien définis sur <LatexRenderer latex={"\\mathbb{R}"} />.
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">2. f(x) = 1 - x³ et g(x) = 1/x</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    • <LatexRenderer latex={"f"} /> est une fonction polynomiale : <LatexRenderer latex={"D_f = \\mathbb{R}"} />
                    <br />
                    • <LatexRenderer latex={"g"} /> est définie sur <LatexRenderer latex={"\\mathbb{R}^* = \\mathbb{R} \\setminus \\{0\\}"} />
                  </div>
                  <div className="space-y-2">
                    <div>• <LatexRenderer latex={"f \\circ g(x) = f(g(x)) = f(1/x) = 1 - (1/x)^3 = 1 - \\frac{1}{x^3}"} /></div>
                    <div className="ml-4 text-sm">Domaine : <LatexRenderer latex={"\\mathbb{R}^*"} /></div>
                    
                    <div>• <LatexRenderer latex={"g \\circ f(x) = g(f(x)) = \\frac{1}{f(x)} = \\frac{1}{1 - x^3}"} /></div>
                    <div className="ml-4 text-sm">Domaine : <LatexRenderer latex={"\\mathbb{R} \\setminus \\{1\\}"} /> (car <LatexRenderer latex={"1 - x^3 \\neq 0 \\Leftrightarrow x \\neq 1"} />)</div>
                    
                    <div>• <LatexRenderer latex={"f \\circ f(x) = f(f(x)) = f(1 - x^3) = 1 - (1 - x^3)^3"} /></div>
                    <div className="ml-4 text-sm">Domaine : <LatexRenderer latex={"\\mathbb{R}"} /></div>
                    
                    <div>• <LatexRenderer latex={"g \\circ g(x) = g(g(x)) = g(1/x) = \\frac{1}{1/x} = x"} /></div>
                    <div className="ml-4 text-sm">Domaine : <LatexRenderer latex={"\\mathbb{R}^*"} /></div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">3. f(x) = √(2x + 3) et g(x) = x² + 2</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    • <LatexRenderer latex={"f"} /> est définie si <LatexRenderer latex={"2x + 3 \\geq 0 \\Rightarrow x \\geq -\\frac{3}{2}"} />, donc <LatexRenderer latex={"D_f = \\left[-\\frac{3}{2}, +\\infty\\right["} />
                    <br />
                    • <LatexRenderer latex={"g"} /> est une fonction polynomiale : <LatexRenderer latex={"D_g = \\mathbb{R}"} />
                  </div>
                  <div className="space-y-2">
                    <div>• <LatexRenderer latex={"f \\circ g(x) = f(g(x)) = f(x^2 + 2) = \\sqrt{2(x^2 + 2) + 3} = \\sqrt{2x^2 + 7}"} /></div>
                    <div className="ml-4 text-sm">Domaine : <LatexRenderer latex={"\\mathbb{R}"} /> (car <LatexRenderer latex={"2x^2 + 7 \\geq 7 > 0"} />)</div>
                    
                    <div>• <LatexRenderer latex={"g \\circ f(x) = g(f(x)) = g(\\sqrt{2x + 3}) = (\\sqrt{2x + 3})^2 + 2 = 2x + 5"} /></div>
                    <div className="ml-4 text-sm">Domaine : <LatexRenderer latex={"\\left[-\\frac{3}{2}, +\\infty\\right["} /></div>
                    
                    <div>• <LatexRenderer latex={"f \\circ f(x) = f(f(x)) = f(\\sqrt{2x + 3}) = \\sqrt{2 \\cdot \\sqrt{2x + 3} + 3}"} /></div>
                    <div className="ml-4 text-sm">Domaine : <LatexRenderer latex={"\\left[-\\frac{3}{2}, +\\infty\\right["} /></div>
                    
                    <div>• <LatexRenderer latex={"g \\circ g(x) = g(g(x)) = g(x^2 + 2) = (x^2 + 2)^2 + 2 = x^4 + 4x^2 + 6"} /></div>
                    <div className="ml-4 text-sm">Domaine : <LatexRenderer latex={"\\mathbb{R}"} /></div>
                  </div>
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
              <p><strong>Énoncé :</strong> Déterminer le domaine de définition puis étudier la parité des fonctions définies par :</p>
              <div className="space-y-3 mt-4">
                <div>
                  <strong>1.</strong> <LatexRenderer latex={"f(x) = x + \\ln|x - 1| - \\ln|x + 1|"} />
                </div>
                <div>
                  <strong>2.</strong> <LatexRenderer latex={"g(x) = x \\cdot \\frac{e^x - 1}{e^x + 1}"} />
                </div>
                <div>
                  <strong>3.</strong> <LatexRenderer latex={"h(x) = x^2 + x + 1"} />
                </div>
                <div>
                  <strong>4.</strong> <LatexRenderer latex={"i(x) = \\cos(5x) - \\ln(1 - x^2)"} />
                </div>
              </div>
            </div>
          }
          correction={
            <div className="space-y-6">
              <div>
                <strong className="text-blue-600">1. Étude de f(x) = x + ln|x - 1| - ln|x + 1|</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <strong>Domaine de définition :</strong>
                    <div className="mt-1 space-y-1">
                      <div>• <LatexRenderer latex={"\\ln|x - 1|"} /> est défini ssi <LatexRenderer latex={"x \\neq 1"} /></div>
                      <div>• <LatexRenderer latex={"\\ln|x + 1|"} /> est défini ssi <LatexRenderer latex={"x \\neq -1"} /></div>
                    </div>
                    <div className="text-center mt-2 bg-blue-50 p-2 rounded">
                      <LatexRenderer latex={"\\mathcal{D}_f = \\mathbb{R} \\setminus \\{-1, 1\\}"} />
                    </div>
                  </div>
                  <div>
                    <strong>Parité :</strong> On calcule <LatexRenderer latex={"f(-x)"} /> :
                    <div className="text-center mt-2 space-y-1">
                      <LatexRenderer latex={"f(-x) = -x + \\ln|-x - 1| - \\ln|-x + 1|"} />
                      <LatexRenderer latex={"= -x + \\ln|x + 1| - \\ln|x - 1| = -f(x)"} />
                    </div>
                    <div className="bg-green-50 p-2 rounded mt-2">
                      Donc <strong>f est impaire</strong>.
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">2. Étude de g(x) = x · (e^x - 1)/(e^x + 1)</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <strong>Domaine :</strong> Les fonctions <LatexRenderer latex={"x \\mapsto e^x"} /> et <LatexRenderer latex={"x \\mapsto \\frac{1}{e^x + 1}"} /> sont bien définies sur <LatexRenderer latex={"\\mathbb{R}"} />, donc :
                    <div className="text-center mt-1 bg-blue-50 p-2 rounded">
                      <LatexRenderer latex={"\\mathcal{D}_g = \\mathbb{R}"} />
                    </div>
                  </div>
                  <div>
                    <strong>Parité :</strong> On calcule <LatexRenderer latex={"g(-x)"} /> :
                    <div className="text-center mt-2 space-y-1">
                      <LatexRenderer latex={"g(-x) = -x \\cdot \\frac{e^{-x} - 1}{e^{-x} + 1}"} />
                      <LatexRenderer latex={"= -x \\cdot \\frac{1/e^x - 1}{1/e^x + 1} = -x \\cdot \\frac{1 - e^x}{1 + e^x}"} />
                      <LatexRenderer latex={"= x \\cdot \\frac{e^x - 1}{e^x + 1} = g(x)"} />
                    </div>
                    <div className="bg-green-50 p-2 rounded mt-2">
                      Donc <strong>g est paire</strong>.
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">3. Étude de h(x) = x² + x + 1</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <strong>Domaine :</strong> <LatexRenderer latex={"\\mathcal{D}_h = \\mathbb{R}"} />
                  </div>
                  <div>
                    <strong>Parité :</strong>
                    <div className="text-center mt-2">
                      <LatexRenderer latex={"h(-x) = (-x)^2 - x + 1 = x^2 - x + 1"} />
                    </div>
                    <div className="mt-2">
                      On a <LatexRenderer latex={"h(-x) \\neq h(x)"} /> et <LatexRenderer latex={"h(-x) \\neq -h(x)"} />
                    </div>
                    <div className="bg-orange-50 p-2 rounded mt-2">
                      Donc <strong>h n'est ni paire, ni impaire</strong>.
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">4. Étude de i(x) = cos(5x) - ln(1 - x²)</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <strong>Domaine :</strong> <LatexRenderer latex={"\\ln(1 - x^2)"} /> est défini ssi <LatexRenderer latex={"1 - x^2 > 0 \\Rightarrow x \\in ]-1, 1["} /> donc :
                    <div className="text-center mt-1 bg-blue-50 p-2 rounded">
                      <LatexRenderer latex={"\\mathcal{D}_i = ]-1, 1["} />
                    </div>
                  </div>
                  <div>
                    <strong>Parité :</strong>
                    <div className="text-center mt-2 space-y-1">
                      <LatexRenderer latex={"i(-x) = \\cos(-5x) - \\ln(1 - (-x)^2)"} />
                      <LatexRenderer latex={"= \\cos(5x) - \\ln(1 - x^2) = i(x)"} />
                    </div>
                    <div className="bg-green-50 p-2 rounded mt-2">
                      Donc <strong>i est paire</strong>.
                    </div>
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
              <p><strong>Énoncé :</strong> Soit <LatexRenderer latex={"m \\in \\mathbb{R}"} /> et <LatexRenderer latex={"(E_m)"} /> l'équation suivante :</p>
              <div className="text-center my-4">
                <LatexRenderer latex={"(m - 1)x^2 + 2mx + m + 2 = 0"} />
              </div>
              <div className="space-y-2">
                <div><strong>1.</strong> Résoudre <LatexRenderer latex={"(E_0)"} /> et <LatexRenderer latex={"(E_1)"} />.</div>
                <div><strong>2.</strong> Pour quelle valeur de <LatexRenderer latex={"m"} /> a-t-on <LatexRenderer latex={"x = 0"} /> solution de <LatexRenderer latex={"(E_m)"} /> ? En déduire l'autre solution.</div>
                <div><strong>3.</strong> Étudier le nombre de solutions réelles de <LatexRenderer latex={"(E_m)"} /> selon les valeurs de <LatexRenderer latex={"m"} /> :</div>
                <div className="ml-4 space-y-1">
                  <div><strong>(a)</strong> une unique solution réelle ?</div>
                  <div><strong>(b)</strong> deux solutions distinctes ?</div>
                  <div><strong>(c)</strong> aucune solution réelle ?</div>
                </div>
              </div>
            </div>
          }
          correction={
            <div className="space-y-6">
              <div>
                <strong className="text-blue-600">1. Cas particuliers</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <strong>Cas m = 0 :</strong>
                    <div className="text-center mt-2">
                      <LatexRenderer latex={"(E_0) : (-1)x^2 + 0x + 2 = 0 \\Rightarrow -x^2 + 2 = 0 \\Rightarrow x^2 = 2"} />
                    </div>
                    <div className="text-center">
                      <LatexRenderer latex={"x = \\pm \\sqrt{2}"} />
                    </div>
                  </div>
                  <div>
                    <strong>Cas m = 1 :</strong>
                    <div className="text-center mt-2">
                      <LatexRenderer latex={"(E_1) : 0 \\cdot x^2 + 2x + 3 = 0 \\Rightarrow 2x + 3 = 0"} />
                    </div>
                    <div className="text-center">
                      <LatexRenderer latex={"x = -\\frac{3}{2}"} />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">2. Recherche de x = 0 comme solution</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    On cherche <LatexRenderer latex={"x = 0"} /> solution de <LatexRenderer latex={"(E_m)"} /> :
                    <div className="text-center mt-2">
                      <LatexRenderer latex={"(m - 1) \\cdot 0 + 0 + m + 2 = 0 \\Rightarrow m + 2 = 0 \\Rightarrow m = -2"} />
                    </div>
                  </div>
                  <div>
                    <strong>Autre solution quand m = -2 :</strong>
                    <div className="text-center mt-2 space-y-1">
                      <LatexRenderer latex={"(E_{-2}) : (-3)x^2 - 4x = 0 \\Rightarrow x((-3)x - 4) = 0"} />
                      <LatexRenderer latex={"x = 0 \\text{ ou } x = -\\frac{4}{3}"} />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">3. Étude générale selon m</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    On réécrit : <LatexRenderer latex={"(E_m) : (m - 1)x^2 + 2mx + m + 2 = 0"} />
                  </div>
                  <div>
                    <strong>Calcul du discriminant :</strong>
                    <div className="text-center mt-2 space-y-1">
                      <LatexRenderer latex={"\\Delta = (2m)^2 - 4(m - 1)(m + 2)"} />
                      <LatexRenderer latex={"= 4m^2 - 4(m^2 + m - 2)"} />
                      <LatexRenderer latex={"= 4m^2 - 4m^2 - 4m + 8 = -4m + 8"} />
                    </div>
                  </div>
                  <div>
                    <strong>Analyse selon le signe du discriminant :</strong>
                    <div className="space-y-2 mt-2">
                      <div>• <LatexRenderer latex={"\\Delta > 0 \\Leftrightarrow -4m + 8 > 0 \\Leftrightarrow m < 2"} /> : deux solutions distinctes</div>
                      <div>• <LatexRenderer latex={"\\Delta = 0 \\Leftrightarrow m = 2"} /> : une solution double</div>
                      <div>• <LatexRenderer latex={"\\Delta < 0 \\Leftrightarrow m > 2"} /> : aucune solution réelle</div>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    <strong>Synthèse :</strong>
                    <div className="space-y-1 mt-2">
                      <div><strong>(a)</strong> <LatexRenderer latex={"m = 2"} /> ⇒ une unique solution réelle</div>
                      <div><strong>(b)</strong> <LatexRenderer latex={"m < 2"} /> ⇒ deux solutions distinctes</div>
                      <div><strong>(c)</strong> <LatexRenderer latex={"m > 2"} /> ⇒ aucune solution réelle</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex4"
          title="Exercice 4"
          difficulty="Avancé"
          content={
            <div>
              <p><strong>Énoncé :</strong> Résoudre dans <LatexRenderer latex={"\\mathbb{R}"} /> les équations suivantes :</p>
              <div className="space-y-3 mt-4">
                <div>
                  <strong>1.</strong> <LatexRenderer latex={"e^{x^2 + x - 1} = 1"} />
                </div>
                <div>
                  <strong>2.</strong> <LatexRenderer latex={"2e^{2x} - e^x - 1 = 0"} />
                </div>
                <div>
                  <strong>3.</strong> <LatexRenderer latex={"\\ln(e^{x+1}) = e^{x+1} + x"} />
                </div>
                <div>
                  <strong>4.</strong> <LatexRenderer latex={"e^{\\ln(x^2 + 1)} - \\ln(e^{1 - x^2}) = \\frac{1}{2}"} />
                </div>
                <div>
                  <strong>5.</strong> <LatexRenderer latex={"\\ln(e^{-x}) + e^{-\\ln x} = 0"} />
                </div>
              </div>
            </div>
          }
          correction={
            <div className="space-y-6">
              <div>
                <strong className="text-blue-600">1. e^(x² + x - 1) = 1</strong>
                <div className="mt-2 space-y-2">
                  <div>
                    <LatexRenderer latex={"e^{x^2 + x - 1} = 1 \\Rightarrow x^2 + x - 1 = 0"} />
                  </div>
                  <div>
                    Discriminant : <LatexRenderer latex={"\\Delta = 1^2 - 4(-1) = 5"} />
                  </div>
                  <div>
                    Racines : <LatexRenderer latex={"x = \\frac{-1 \\pm \\sqrt{5}}{2}"} />
                  </div>
                  <div className="bg-green-50 p-2 rounded text-center">
                    <LatexRenderer latex={"\\mathcal{S} = \\left\\{\\frac{-1 - \\sqrt{5}}{2}, \\frac{-1 + \\sqrt{5}}{2}\\right\\}"} />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">2. 2e^(2x) - e^x - 1 = 0</strong>
                <div className="mt-2 space-y-2">
                  <div>
                    Posons <LatexRenderer latex={"X = e^x"} /> ⇒ <LatexRenderer latex={"2X^2 - X - 1 = 0"} />
                  </div>
                  <div>
                    Discriminant : <LatexRenderer latex={"\\Delta = 1^2 + 8 = 9"} /> ⇒ <LatexRenderer latex={"X = 1"} /> ou <LatexRenderer latex={"X = -\\frac{1}{2}"} />
                  </div>
                  <div>
                    On rejette <LatexRenderer latex={"X = -\\frac{1}{2}"} /> car <LatexRenderer latex={"e^x > 0"} />
                  </div>
                  <div>
                    <LatexRenderer latex={"e^x = 1 \\Rightarrow x = \\ln(1) = 0"} />
                  </div>
                  <div className="bg-green-50 p-2 rounded text-center">
                    <LatexRenderer latex={"\\mathcal{S} = \\{0\\}"} />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">3. ln(e^(x+1)) = e^(x+1) + x</strong>
                <div className="mt-2 space-y-2">
                  <div>
                    À gauche : <LatexRenderer latex={"x+1"} /> ; à droite : <LatexRenderer latex={"e^{x+1} + x"} />
                  </div>
                  <div>
                    <LatexRenderer latex={"x + 1 = e^{x+1} + x \\Rightarrow 1 = e^{x+1}"} />
                  </div>
                  <div>
                    <LatexRenderer latex={"e^{x+1} = 1 \\Rightarrow x + 1 = 0 \\Rightarrow x = -1"} />
                  </div>
                  <div className="bg-green-50 p-2 rounded text-center">
                    <LatexRenderer latex={"\\mathcal{S} = \\{-1\\}"} />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">4. e^(ln(x² + 1)) - ln(e^(1 - x²)) = 1/2</strong>
                <div className="mt-2 space-y-2">
                  <div>
                    <LatexRenderer latex={"e^{\\ln(x^2 + 1)} = x^2 + 1"} />, <LatexRenderer latex={"\\ln(e^{1 - x^2}) = 1 - x^2"} />
                  </div>
                  <div>
                    Équation : <LatexRenderer latex={"x^2 + 1 - (1 - x^2) = \\frac{1}{2}"} />
                  </div>
                  <div>
                    <LatexRenderer latex={"2x^2 = \\frac{1}{2} \\Rightarrow x^2 = \\frac{1}{4}"} />
                  </div>
                  <div>
                    Solutions : <LatexRenderer latex={"x = \\pm \\frac{1}{2}"} />
                  </div>
                  <div className="bg-green-50 p-2 rounded text-center">
                    <LatexRenderer latex={"\\mathcal{S} = \\left\\{-\\frac{1}{2}, \\frac{1}{2}\\right\\}"} />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">5. ln(e^(-x)) + e^(-ln x) = 0</strong>
                <div className="mt-2 space-y-2">
                  <div>
                    Domaine : <LatexRenderer latex={"x > 0"} /> (car <LatexRenderer latex={"\\ln x"} /> et <LatexRenderer latex={"e^{-\\ln x}"} /> impliqués)
                  </div>
                  <div>
                    <LatexRenderer latex={"\\ln(e^{-x}) = -x"} />, <LatexRenderer latex={"e^{-\\ln x} = \\frac{1}{x}"} />
                  </div>
                  <div>
                    <LatexRenderer latex={"-x + \\frac{1}{x} = 0 \\Rightarrow x^2 = 1"} />
                  </div>
                  <div>
                    <LatexRenderer latex={"x = 1"} /> (car <LatexRenderer latex={"x > 0"} />)
                  </div>
                  <div className="bg-green-50 p-2 rounded text-center">
                    <LatexRenderer latex={"\\mathcal{S} = \\{1\\}"} />
                  </div>
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex5"
          title="Exercice 5"
          difficulty="Moyen"
          content={
            <div>
              <p><strong>Énoncé :</strong> Résoudre dans <LatexRenderer latex={"\\mathbb{R}"} /> les inéquations suivantes :</p>
              <div className="space-y-3 mt-4">
                <div>
                  <strong>1.</strong> <LatexRenderer latex={"e^{1/x} \\geq e"} />
                </div>
                <div>
                  <strong>2.</strong> <LatexRenderer latex={"e^{2x} \\leq e^x"} />
                </div>
                <div>
                  <strong>3.</strong> <LatexRenderer latex={"e^{2x} e^{x^2} < 1"} />
                </div>
                <div>
                  <strong>4.</strong> <LatexRenderer latex={"e^{x^2 - 10x + 21} \\geq 1"} />
                </div>
              </div>
            </div>
          }
          correction={
            <div className="space-y-6">
              <div>
                <strong className="text-blue-600">1. e^(1/x) ≥ e</strong>
                <div className="mt-2 space-y-2">
                  <div>
                    <LatexRenderer latex={"e^{1/x} \\geq e \\Rightarrow \\frac{1}{x} \\geq 1"} />
                  </div>
                  <div>
                    On a <LatexRenderer latex={"x \\in \\mathbb{R}^*"} /> et <LatexRenderer latex={"\\frac{1}{x} - 1 \\geq 0"} />
                  </div>
                  <div className="space-y-1">
                    <div>• Si <LatexRenderer latex={"x < 0"} />, alors <LatexRenderer latex={"1/x < 0 < 1"} /> donc <LatexRenderer latex={"1/x < 1"} /> ⇒ <span className="bg-red-100 px-2 py-1 rounded">pas vérifiée</span></div>
                    <div>• Si <LatexRenderer latex={"x > 0"} />, on peut multiplier par <LatexRenderer latex={"x"} /> ⇒ <LatexRenderer latex={"1 \\geq x"} /> ⇒ <LatexRenderer latex={"x \\leq 1"} /></div>
                  </div>
                  <div className="bg-green-50 p-2 rounded text-center">
                    <LatexRenderer latex={"\\mathcal{S} = ]0, 1]"} />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">2. e^(2x) ≤ e^x</strong>
                <div className="mt-2 space-y-2">
                  <div>
                    <LatexRenderer latex={"e^{2x} \\leq e^x \\Rightarrow e^{2x - x} \\leq 1 \\Rightarrow e^x \\leq 1"} />
                  </div>
                  <div>
                    <LatexRenderer latex={"e^x \\leq 1 \\Rightarrow x \\leq 0"} />
                  </div>
                  <div className="bg-green-50 p-2 rounded text-center">
                    <LatexRenderer latex={"\\mathcal{S} = ]-\\infty, 0]"} />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">3. e^(2x) · e^(x²) &lt; 1</strong>
                <div className="mt-2 space-y-2">
                  <div>
                    <LatexRenderer latex={"e^{2x} \\cdot e^{x^2} < 1 \\Rightarrow e^{2x + x^2} < 1 \\Rightarrow 2x + x^2 < 0"} />
                  </div>
                  <div>
                    <LatexRenderer latex={"x(x + 2) < 0"} /> ⇒ signe du produit :
                  </div>
                  <div>
                    Tableau de signe : racines <LatexRenderer latex={"-2"} /> et <LatexRenderer latex={"0"} />
                  </div>
                  <div className="bg-green-50 p-2 rounded text-center">
                    <LatexRenderer latex={"\\mathcal{S} = ]-2, 0["} />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">4. e^(x² - 10x + 21) ≥ 1</strong>
                <div className="mt-2 space-y-2">
                  <div>
                    <LatexRenderer latex={"e^{x^2 - 10x + 21} \\geq 1 \\Rightarrow x^2 - 10x + 21 \\geq 0"} />
                  </div>
                  <div>
                    Discriminant <LatexRenderer latex={"\\Delta = 100 - 84 = 16"} /> ⇒ racines <LatexRenderer latex={"x_1 = 3"} /> et <LatexRenderer latex={"x_2 = 7"} />
                  </div>
                  <div>
                    Signe de <LatexRenderer latex={"x^2 - 10x + 21"} /> : positif hors de <LatexRenderer latex={"[3, 7]"} />
                  </div>
                  <div className="bg-green-50 p-2 rounded text-center">
                    <LatexRenderer latex={"\\mathcal{S} = ]-\\infty, 3] \\cup [7, +\\infty["} />
                  </div>
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex6"
          title="Exercice 6"
          difficulty="Avancé"
          content={
            <div>
              <p><strong>Énoncé :</strong> Montrer que :</p>
              <div className="text-center my-4">
                <LatexRenderer latex={"\\forall n \\in \\mathbb{N}^*, \\ \\forall x \\in \\mathbb{R}, \\quad \\left\\lfloor \\frac{\\lfloor nx \\rfloor}{n} \\right\\rfloor = \\lfloor x \\rfloor"} />
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-blue-600">Méthode :</strong> Soit <LatexRenderer latex={"n \\in \\mathbb{N}^*"} /> et <LatexRenderer latex={"x \\in \\mathbb{R}"} />. 
                <br />Par définition de la partie entière, on sait que :
                <div className="text-center mt-2">
                  <LatexRenderer latex={"\\lfloor nx \\rfloor \\leq nx < \\lfloor nx \\rfloor + 1"} />
                </div>
              </div>

              <div>
                <strong className="text-blue-600">Étape 1 :</strong> Division par n &gt; 0
                <div className="text-center mt-2">
                  <LatexRenderer latex={"\\frac{\\lfloor nx \\rfloor}{n} \\leq x < \\frac{\\lfloor nx \\rfloor + 1}{n}"} />
                </div>
              </div>

              <div>
                <strong className="text-blue-600">Étape 2 :</strong> Justification par encadrement
                <div className="mt-2 space-y-2">
                  <div>
                    Comme <LatexRenderer latex={"\\lfloor x \\rfloor \\leq x < \\lfloor x \\rfloor + 1"} />, on a :
                    <div className="text-center mt-1">
                      <LatexRenderer latex={"n \\lfloor x \\rfloor \\leq nx < n(\\lfloor x \\rfloor + 1)"} />
                    </div>
                  </div>
                  <div>
                    D'où :
                    <div className="text-center mt-1">
                      <LatexRenderer latex={"\\lfloor nx \\rfloor \\geq n \\lfloor x \\rfloor \\Rightarrow \\frac{\\lfloor nx \\rfloor}{n} \\geq \\lfloor x \\rfloor"} />
                    </div>
                  </div>
                  <div>
                    Et aussi :
                    <div className="text-center mt-1">
                      <LatexRenderer latex={"\\lfloor nx \\rfloor < n(\\lfloor x \\rfloor + 1) \\Rightarrow \\frac{\\lfloor nx \\rfloor}{n} < \\lfloor x \\rfloor + 1"} />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">Conclusion :</strong>
                <div className="mt-2 space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex={"\\lfloor x \\rfloor \\leq \\frac{\\lfloor nx \\rfloor}{n} < \\lfloor x \\rfloor + 1"} />
                  </div>
                  <div className="text-center bg-blue-50 p-3 rounded">
                    <LatexRenderer latex={"\\Rightarrow \\left\\lfloor \\frac{\\lfloor nx \\rfloor}{n} \\right\\rfloor = \\lfloor x \\rfloor"} />
                  </div>
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex7"
          title="Exercice 7"
          difficulty="Avancé"
          content={
            <div>
              <p><strong>Énoncé :</strong> Étudier les variations de la fonction <LatexRenderer latex={"g(x) = \\frac{\\sqrt{x}}{\\ln x}"} /> sur <LatexRenderer latex={"\\mathcal{D}_g = ]1, +\\infty["} />.</p>
            </div>
          }
          correction={
            <div className="space-y-6">
              <div>
                <strong className="text-blue-600">1. Domaine de définition</strong>
                <div className="mt-2 space-y-2">
                  <div>• <LatexRenderer latex={"\\sqrt{x}"} /> est défini sur <LatexRenderer latex={"[0, +\\infty["} /></div>
                  <div>• <LatexRenderer latex={"\\ln x"} /> est défini sur <LatexRenderer latex={"\\mathbb{R}_+^*"} /> mais <LatexRenderer latex={"\\ln(1) = 0"} /> donc on exclut <LatexRenderer latex={"x = 1"} /></div>
                  <div className="bg-blue-50 p-2 rounded text-center">
                    <LatexRenderer latex={"\\mathcal{D}_g = ]1, +\\infty["} />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">2. Dérivée de g</strong>
                <div className="mt-2 space-y-2">
                  <div>
                    On utilise la formule de dérivée d'un quotient :
                    <div className="text-center mt-2">
                      <LatexRenderer latex={"g(x) = \\frac{\\sqrt{x}}{\\ln x}, \\quad g'(x) = \\frac{\\frac{1}{2\\sqrt{x}} \\cdot \\ln x - \\sqrt{x} \\cdot \\frac{1}{x}}{(\\ln x)^2}"} />
                    </div>
                  </div>
                  <div>
                    On simplifie :
                    <div className="text-center mt-2">
                      <LatexRenderer latex={"g'(x) = \\frac{\\ln x - 2}{2\\sqrt{x} (\\ln x)^2}"} />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">3. Signe de g'(x)</strong>
                <div className="mt-2 space-y-2">
                  <div>• <LatexRenderer latex={"\\ln x - 2 > 0 \\Leftrightarrow x > e^2"} /></div>
                  <div>• <LatexRenderer latex={"\\ln x - 2 < 0 \\Leftrightarrow x < e^2"} /></div>
                  <div>
                    Comme <LatexRenderer latex={"2\\sqrt{x} (\\ln x)^2 > 0"} /> pour <LatexRenderer latex={"x \\in ]1, +\\infty["} />, le signe de <LatexRenderer latex={"g'(x)"} /> est donné par celui de <LatexRenderer latex={"\\ln x - 2"} />.
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">4. Tableau de variation</strong>
                <div className="mt-2 space-y-3">
                  <div className="bg-gray-50 p-4 rounded">
                    <div className="grid grid-cols-4 gap-4 text-center">
                      <div><strong>x</strong></div>
                      <div><strong>1</strong></div>
                      <div><strong>e²</strong></div>
                      <div><strong>+∞</strong></div>
                      
                      <div><strong>g'(x)</strong></div>
                      <div></div>
                      <div>−</div>
                      <div>+</div>
                      
                      <div><strong>g(x)</strong></div>
                      <div></div>
                      <div>↘</div>
                      <div>↗</div>
                    </div>
                  </div>
                  <div className="text-center">
                    Minimum local : <LatexRenderer latex={"g(e^2) = \\frac{e}{2}"} />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">5. Conclusion</strong>
                <div className="text-center bg-blue-50 p-3 rounded mt-2">
                  <LatexRenderer latex={"g \\text{ décroît sur } ]1, e^2] \\text{ puis croît sur } [e^2, +\\infty["} />
                  <br />
                  <LatexRenderer latex={"\\text{Minimum atteint en } x = e^2 : g(e^2) = \\frac{e}{2}"} />
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex8"
          title="Exercice 8"
          difficulty="Avancé"
          content={
            <div>
              <p><strong>Énoncé :</strong> Soit <LatexRenderer latex={"f"} /> la fonction définie par <LatexRenderer latex={"f(x) = x^{1 + \\frac{1}{x}}"} />.</p>
              <div className="space-y-2 mt-4">
                <div><strong>1.</strong> Déterminer le domaine de définition de <LatexRenderer latex={"f"} />.</div>
                <div><strong>2.</strong> Montrer que pour tout <LatexRenderer latex={"x > 0"} />, <LatexRenderer latex={"\\ln(x) \\leq x - 1"} />.</div>
                <div><strong>3.</strong> Étudier les variations de <LatexRenderer latex={"f"} /> et dresser son tableau de variations.</div>
              </div>
            </div>
          }
          correction={
            <div className="space-y-6">
              <div>
                <strong className="text-blue-600">1. Domaine de définition</strong>
                <div className="mt-2 space-y-2">
                  <div>
                    On écrit :
                    <div className="text-center mt-2">
                      <LatexRenderer latex={"f(x) = x^{1 + \\frac{1}{x}} = e^{(1 + \\frac{1}{x}) \\ln x}"} />
                    </div>
                  </div>
                  <div>
                    Ce qui est défini lorsque <LatexRenderer latex={"x > 0"} />. Donc :
                  </div>
                  <div className="bg-blue-50 p-2 rounded text-center">
                    <LatexRenderer latex={"\\mathcal{D}_f = \\mathbb{R}_+^*"} />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">2. Encadrement du logarithme</strong>
                <div className="mt-2 space-y-2">
                  <div>
                    On pose <LatexRenderer latex={"g(x) = x - 1 - \\ln x"} /> sur <LatexRenderer latex={"\\mathbb{R}_+^*"} />
                    <div className="text-center mt-1">
                      <LatexRenderer latex={"g'(x) = 1 - \\frac{1}{x} = \\frac{x - 1}{x}"} />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div>• <LatexRenderer latex={"g'(x) < 0"} /> ssi <LatexRenderer latex={"x < 1"} />, donc <LatexRenderer latex={"g"} /> décroît sur <LatexRenderer latex={"]0, 1]"} /></div>
                    <div>• <LatexRenderer latex={"g'(x) > 0"} /> ssi <LatexRenderer latex={"x > 1"} />, donc <LatexRenderer latex={"g"} /> croît sur <LatexRenderer latex={"[1, +\\infty["} /></div>
                  </div>
                  <div>
                    <LatexRenderer latex={"g"} /> admet un minimum en <LatexRenderer latex={"x = 1"} /> : <LatexRenderer latex={"g(1) = 0"} /> ⇒ <LatexRenderer latex={"g(x) \\geq 0"} />
                  </div>
                  <div className="bg-green-50 p-2 rounded text-center">
                    <LatexRenderer latex={"\\Rightarrow \\ln x \\leq x - 1 \\text{ pour tout } x > 0"} />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">3. Étude de f</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <div className="text-center">
                      <LatexRenderer latex={"f(x) = e^{(1 + \\frac{1}{x}) \\ln x}, \\quad f'(x) = \\left(- \\frac{1}{x^2} \\ln x + \\left(1 + \\frac{1}{x}\\right) \\cdot \\frac{1}{x}\\right) f(x)"} />
                    </div>
                  </div>
                  <div>
                    <div className="text-center">
                      <LatexRenderer latex={"f'(x) = \\left( -\\frac{\\ln x}{x^2} + \\frac{x + 1}{x^2} \\right) f(x) = \\frac{x + 1 - \\ln x}{x^2} f(x)"} />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div>• <LatexRenderer latex={"f(x) > 0"} /> et <LatexRenderer latex={"x^2 > 0"} /> sur <LatexRenderer latex={"\\mathbb{R}_+^*"} /></div>
                    <div>• <LatexRenderer latex={"f'(x)"} /> a même signe que <LatexRenderer latex={"x + 1 - \\ln x"} /> qui est <LatexRenderer latex={"\\geq 0"} /> d'après la question 2</div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded text-center">
                    <LatexRenderer latex={"f'(x) \\geq 0 \\text{ sur } \\mathbb{R}_+^* \\Rightarrow f \\text{ est croissante sur } \\mathbb{R}_+^*"} />
                  </div>
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex9"
          title="Exercice 9"
          difficulty="Moyen"
          content={
            <div>
              <p><strong>Énoncé :</strong> Montrer que pour tout <LatexRenderer latex={"x \\in \\mathbb{R}^*"} /> :</p>
              <div className="text-center my-4">
                <LatexRenderer latex={"\\arctan(x) + \\arctan\\left(\\frac{1}{x}\\right) = \\begin{cases} \\frac{\\pi}{2} & \\text{si } x > 0 \\\\ -\\frac{\\pi}{2} & \\text{si } x < 0 \\end{cases}"} />
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-blue-600">Méthode :</strong> Posons <LatexRenderer latex={"f(x) = \\arctan(x) + \\arctan\\left(\\frac{1}{x}\\right)"} /> définie sur <LatexRenderer latex={"\\mathbb{R}^*"} />.
              </div>
              
              <div>
                <strong className="text-blue-600">1. Étude de la dérivabilité :</strong>
                <div className="mt-2 space-y-2">
                  <div>• <LatexRenderer latex={"x \\mapsto \\arctan(x)"} /> est dérivable sur <LatexRenderer latex={"\\mathbb{R}"} /></div>
                  <div>• <LatexRenderer latex={"x \\mapsto \\frac{1}{x}"} /> est dérivable sur <LatexRenderer latex={"\\mathbb{R}^*"} /></div>
                  <div>• Par composition et somme, <LatexRenderer latex={"f"} /> est dérivable sur <LatexRenderer latex={"\\mathbb{R}^*"} /></div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">2. Dérivée de f :</strong>
                <div className="space-y-2 mt-2">
                  <div className="text-center">
                    <LatexRenderer latex={"f'(x) = \\frac{1}{1 + x^2} - \\frac{1}{x^2} \\cdot \\frac{1}{1 + (1/x)^2}"} />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex={"= \\frac{1}{1 + x^2} - \\frac{1}{x^2 + 1} = 0"} />
                  </div>
                </div>
                <div className="mt-2">
                  Donc <LatexRenderer latex={"f"} /> est constante sur chacun des intervalles <LatexRenderer latex={"]0, +\\infty["} /> et <LatexRenderer latex={"]-\\infty, 0["} />.
                </div>
              </div>

              <div>
                <strong className="text-blue-600">3. Valeur de la constante sur x &gt; 0 :</strong>
                <div className="text-center mt-2">
                  <LatexRenderer latex={"f(1) = \\arctan(1) + \\arctan(1) = 2 \\cdot \\frac{\\pi}{4} = \\frac{\\pi}{2}"} />
                </div>
              </div>

              <div>
                <strong className="text-blue-600">4. Parité :</strong>
                <div className="mt-2 space-y-2">
                  <div>La fonction <LatexRenderer latex={"\\arctan"} /> est impaire :</div>
                  <div className="text-center">
                    <LatexRenderer latex={"f(-x) = \\arctan(-x) + \\arctan\\left(-\\frac{1}{x}\\right)"} />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex={"= -\\arctan(x) - \\arctan\\left(\\frac{1}{x}\\right) = -f(x)"} />
                  </div>
                  <div>Donc <LatexRenderer latex={"f"} /> est impaire.</div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">Conclusion :</strong>
                <div className="text-center bg-blue-50 p-3 rounded mt-2">
                  <LatexRenderer latex={"f(x) = \\frac{\\pi}{2} \\text{ si } x > 0 \\quad \\text{et} \\quad f(x) = -\\frac{\\pi}{2} \\text{ si } x < 0"} />
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex10"
          title="Exercice 10"
          difficulty="Moyen"
          content={
            <div>
              <p><strong>Énoncé :</strong></p>
              <div className="space-y-4 mt-4">
                <div>
                  <strong>1.</strong> Étudier la parité de chaque fonction <LatexRenderer latex={"f"} /> :
                  <div className="space-y-2 mt-2 ml-4">
                    <div><strong>a.</strong> <LatexRenderer latex={"f(x) = \\frac{x}{x^4 + 1}"} /></div>
                    <div><strong>b.</strong> <LatexRenderer latex={"f(x) = \\frac{x^2}{x^2 + 1}"} /></div>
                    <div><strong>c.</strong> <LatexRenderer latex={"f(x) = e^{x^2}"} /></div>
                    <div><strong>d.</strong> <LatexRenderer latex={"f(x) = \\frac{x-1}{x^2 + 1}"} /></div>
                    <div><strong>e.</strong> <LatexRenderer latex={"f(x) = e^x - e^{-x}"} /></div>
                    <div><strong>f.</strong> <LatexRenderer latex={"f(x) = x^2 \\ln x"} /></div>
                    <div><strong>g.</strong> <LatexRenderer latex={"f(x) = x^3 + \\frac{1}{x}"} /></div>
                  </div>
                </div>
                <div>
                  <strong>2.</strong> Rappeler les propriétés des sommes et produits de fonctions paires/impaires.
                </div>
                <div>
                  <strong>3.</strong> Montrer qu'un polynôme quadratique à racines opposées est paire.
                </div>
              </div>
            </div>
          }
          correction={
            <div className="space-y-6">
              <div>
                <strong className="text-blue-600">1. Parité de chaque fonction f</strong>
                <div className="mt-2 space-y-4">
                  <div>
                    <strong>a.</strong> <LatexRenderer latex={"f(x) = \\frac{x}{x^4 + 1}"} />
                    <div className="mt-1 space-y-1">
                      <div>Domaine : <LatexRenderer latex={"\\mathbb{R}"} /></div>
                      <div><LatexRenderer latex={"f(-x) = \\frac{-x}{(-x)^4 + 1} = \\frac{-x}{x^4 + 1} = -f(x)"} /></div>
                      <div className="bg-green-50 p-2 rounded"><strong>f est impaire</strong></div>
                    </div>
                  </div>
                  
                  <div>
                    <strong>b.</strong> <LatexRenderer latex={"f(x) = \\frac{x^2}{x^2 + 1}"} />
                    <div className="mt-1">
                      <div><LatexRenderer latex={"f(-x) = \\frac{(-x)^2}{(-x)^2 + 1} = \\frac{x^2}{x^2 + 1} = f(x)"} /></div>
                      <div className="bg-green-50 p-2 rounded"><strong>f est paire</strong></div>
                    </div>
                  </div>
                  
                  <div>
                    <strong>c.</strong> <LatexRenderer latex={"f(x) = e^{x^2}"} />
                    <div className="mt-1">
                      <div><LatexRenderer latex={"f(-x) = e^{(-x)^2} = e^{x^2} = f(x)"} /></div>
                      <div className="bg-green-50 p-2 rounded"><strong>f est paire</strong></div>
                    </div>
                  </div>
                  
                  <div>
                    <strong>d.</strong> <LatexRenderer latex={"f(x) = \\frac{x-1}{x^2 + 1}"} />
                    <div className="mt-1">
                      <div><LatexRenderer latex={"f(-x) = \\frac{-x-1}{x^2 + 1} \\neq \\pm f(x)"} /></div>
                      <div className="bg-orange-50 p-2 rounded"><strong>f ni paire ni impaire</strong></div>
                    </div>
                  </div>
                  
                  <div>
                    <strong>e.</strong> <LatexRenderer latex={"f(x) = e^x - e^{-x}"} />
                    <div className="mt-1">
                      <div><LatexRenderer latex={"f(-x) = e^{-x} - e^x = -(e^x - e^{-x}) = -f(x)"} /></div>
                      <div className="bg-green-50 p-2 rounded"><strong>f est impaire</strong></div>
                    </div>
                  </div>
                  
                  <div>
                    <strong>f.</strong> <LatexRenderer latex={"f(x) = x^2 \\ln x"} />
                    <div className="mt-1">
                      <div>Domaine : <LatexRenderer latex={"\\mathbb{R}_+^*"} /> (non symétrique)</div>
                      <div className="bg-orange-50 p-2 rounded"><strong>f ni paire ni impaire</strong></div>
                    </div>
                  </div>
                  
                  <div>
                    <strong>g.</strong> <LatexRenderer latex={"f(x) = x^3 + \\frac{1}{x}"} />
                    <div className="mt-1 space-y-1">
                      <div>Domaine : <LatexRenderer latex={"\\mathbb{R}^*"} /></div>
                      <div><LatexRenderer latex={"f(-x) = (-x)^3 + \\frac{1}{-x} = -x^3 - \\frac{1}{x} = -f(x)"} /></div>
                      <div className="bg-green-50 p-2 rounded"><strong>f est impaire</strong></div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">2. Propriétés des sommes et produits</strong>
                <div className="mt-2 space-y-2">
                  <div>• Somme de deux fonctions paires : <strong>paire</strong></div>
                  <div>• Somme de deux fonctions impaires : <strong>impaire</strong></div>
                  <div>• Produit de deux fonctions paires : <strong>paire</strong></div>
                  <div>• Produit de deux fonctions impaires : <strong>paire</strong></div>
                  <div>• Produit d'une paire et d'une impaire : <strong>impaire</strong></div>
                  <div>• Somme d'une paire et d'une impaire : généralement <strong>ni paire ni impaire</strong></div>
                  <div className="bg-blue-50 p-2 rounded mt-2">
                    <strong>Exemple :</strong> <LatexRenderer latex={"x^2"} /> (paire) et <LatexRenderer latex={"x"} /> (impaire) ⇒ <LatexRenderer latex={"x^2 + x"} /> n'est ni paire ni impaire.
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">3. Polynôme quadratique à racines opposées</strong>
                <div className="mt-2 space-y-2">
                  <div>
                    Soit <LatexRenderer latex={"f(x) = a(x - \\alpha)(x + \\alpha)"} /> de degré 2, avec racines opposées <LatexRenderer latex={"\\pm\\alpha"} /> :
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex={"f(x) = a(x^2 - \\alpha^2)"} />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex={"f(-x) = a((-x)^2 - \\alpha^2) = a(x^2 - \\alpha^2) = f(x)"} />
                  </div>
                  <div className="bg-blue-50 p-3 rounded text-center">
                    <LatexRenderer latex={"\\boxed{\\text{f est paire}}"} />
                  </div>
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex11"
          title="Exercice 11"
          difficulty="Avancé"
          content={
            <div>
              <p><strong>Énoncé :</strong> Montrer que toute fonction <LatexRenderer latex={"f"} /> définie sur <LatexRenderer latex={"\\mathbb{R}"} /> s'écrit de façon unique comme la somme d'une fonction paire et d'une fonction impaire.</p>
            </div>
          }
          correction={
            <div className="space-y-6">
              <div>
                <strong className="text-blue-600">1. Unicité de la décomposition</strong>
                <div className="mt-2 space-y-2">
                  <div>
                    Supposons qu'il existe deux couples de fonctions <LatexRenderer latex={"(g,h)"} /> et <LatexRenderer latex={"(g',h')"} /> telles que, pour tout <LatexRenderer latex={"x \\in \\mathbb{R}"} /> :
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex={"f(x) = g(x) + h(x) = g'(x) + h'(x)"} />
                  </div>
                  <div>
                    avec <LatexRenderer latex={"g, g'"} /> paires et <LatexRenderer latex={"h, h'"} /> impaires.
                  </div>
                  <div>
                    On a alors <LatexRenderer latex={"g(x) - g'(x) = h'(x) - h(x)"} /> pour tout <LatexRenderer latex={"x"} />.
                  </div>
                  <div>
                    Le membre de gauche est paire, celui de droite impaire ; leur différence ne peut être que la fonction nulle.
                  </div>
                  <div>
                    Donc <LatexRenderer latex={"g = g'"} /> et <LatexRenderer latex={"h = h'"} />, prouvant l'unicité.
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">2. Construction explicite de g et h</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    Pour <LatexRenderer latex={"x \\in \\mathbb{R}"} />, posons :
                    <div className="text-center mt-2 space-y-1">
                      <LatexRenderer latex={"g(x) = \\frac{f(x) + f(-x)}{2}, \\quad h(x) = \\frac{f(x) - f(-x)}{2}"} />
                    </div>
                  </div>
                  
                  <div>
                    <strong>Parité :</strong> <LatexRenderer latex={"g(-x) = \\frac{f(-x) + f(x)}{2} = g(x)"} /> → <LatexRenderer latex={"g"} /> est paire
                  </div>
                  
                  <div>
                    <strong>Imparité :</strong> <LatexRenderer latex={"h(-x) = \\frac{f(-x) - f(x)}{2} = -h(x)"} /> → <LatexRenderer latex={"h"} /> est impaire
                  </div>
                  
                  <div>
                    <strong>Somme :</strong> <LatexRenderer latex={"g(x) + h(x) = \\frac{f(x) + f(-x)}{2} + \\frac{f(x) - f(-x)}{2} = f(x)"} />
                  </div>
                  
                  <div>
                    Ainsi, <LatexRenderer latex={"f = g + h"} /> avec <LatexRenderer latex={"g"} /> paire, <LatexRenderer latex={"h"} /> impaire. Par unicité démontrée ci-dessus, cette décomposition est la seule possible.
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">Conclusion</strong>
                <div className="text-center bg-blue-50 p-4 rounded mt-2">
                  <LatexRenderer latex={"f(x) = \\underbrace{\\frac{f(x) + f(-x)}{2}}_{\\text{paire}} + \\underbrace{\\frac{f(x) - f(-x)}{2}}_{\\text{impaire}} \\quad \\forall x \\in \\mathbb{R}"} />
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex12"
          title="Exercice 12"
          difficulty="Avancé"
          content={
            <div>
              <p><strong>Énoncé :</strong> Montrer que, pour tous nombres réels strictement positifs <LatexRenderer latex={"x, y"} />, on a :</p>
              <div className="text-center my-4">
                <LatexRenderer latex={"\\ln\\left(\\frac{x+y}{2}\\right) \\geq \\frac{\\ln x + \\ln y}{2}"} />
              </div>
              <p>Cette inégalité exprime la concavité de la fonction logarithme ; elle est parfois désignée sous le nom d'<em>inégalité de la moyenne logarithmique</em>.</p>
            </div>
          }
          correction={
            <div className="space-y-6">
              <div>
                <strong className="text-blue-600">Preuve par étude d'une fonction auxiliaire</strong>
              </div>

              <div>
                <strong className="text-blue-600">1. Construction</strong>
                <div className="mt-2">
                  Fixons <LatexRenderer latex={"y > 0"} /> et considérons la fonction :
                  <div className="text-center mt-2">
                    <LatexRenderer latex={"f_y : x \\mapsto \\ln\\left(\\frac{x+y}{2}\\right) - \\frac{\\ln x + \\ln y}{2}, \\quad x > 0"} />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">2. Dérivée et signe</strong>
                <div className="mt-2 space-y-2">
                  <div>
                    La fonction <LatexRenderer latex={"f_y"} /> est dérivable sur <LatexRenderer latex={"\\mathbb{R}_+^*"} /> et, pour tout <LatexRenderer latex={"x > 0"} /> :
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex={"f'_y(x) = \\frac{1}{x+y} - \\frac{1}{2x} = \\frac{2x - (x+y)}{2x(x+y)} = \\frac{x-y}{2x(x+y)}"} />
                  </div>
                  <div className="space-y-1">
                    <div>• <LatexRenderer latex={"f'_y(x) < 0"} /> lorsque <LatexRenderer latex={"0 < x < y"} /></div>
                    <div>• <LatexRenderer latex={"f'_y(x) = 0"} /> lorsque <LatexRenderer latex={"x = y"} /></div>
                    <div>• <LatexRenderer latex={"f'_y(x) > 0"} /> lorsque <LatexRenderer latex={"x > y"} /></div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">3. Tableau de variations</strong>
                <div className="mt-2 space-y-2">
                  <div>
                    On en déduit que <LatexRenderer latex={"f_y"} /> admet un minimum en <LatexRenderer latex={"x = y"} />. Or :
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex={"f_y(y) = \\ln\\left(\\frac{y+y}{2}\\right) - \\frac{\\ln y + \\ln y}{2} = \\ln y - \\ln y = 0"} />
                  </div>
                  <div>
                    Ainsi <LatexRenderer latex={"\\forall x > 0, f_y(x) \\geq 0"} />.
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">4. Conclusion</strong>
                <div className="mt-2 space-y-2">
                  <div>Pour tous <LatexRenderer latex={"x, y > 0"} /> :</div>
                  <div className="text-center bg-blue-50 p-3 rounded">
                    <LatexRenderer latex={"\\ln\\left(\\frac{x+y}{2}\\right) \\geq \\frac{\\ln x + \\ln y}{2}"} />
                    <br />
                    <span className="text-sm">avec égalité ssi <LatexRenderer latex={"x = y"} /></span>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">Commentaires</strong>
                <div className="mt-2 space-y-2">
                  <div>
                    • L'inégalité est un cas particulier du fait que <LatexRenderer latex={"\\ln"} /> est <strong>concave</strong> : pour <LatexRenderer latex={"t = \\frac{1}{2}"} />, <LatexRenderer latex={"\\ln(tx + (1-t)y) \\geq t\\ln x + (1-t)\\ln y"} />.
                  </div>
                  <div>
                    • Par exponentiation, on obtient l'inégalité classique entre moyenne géométrique et moyenne arithmétique :
                    <div className="text-center mt-1">
                      <LatexRenderer latex={"\\sqrt{xy} \\leq \\frac{x+y}{2}"} />
                    </div>
                  </div>
                </div>
              </div>
          </div>
          }
        />

        <ExerciseCard
          id="ex8"
          title="Exercice 8"
          difficulty="Avancé"
          content={
            <div>
              <p className="mb-4"><strong>Limites et continuité</strong></p>
              <p className="mb-4">Soient <LatexRenderer latex="a, b > 0" /> deux réels strictement positifs.</p>
              
              <ol className="list-decimal ml-6 space-y-4">
                <li>
                  <p>Calculer la limite de</p>
                  <div className="text-center my-2">
                    <LatexRenderer latex="\left( \frac{a^n + b^n}{2} \right)^{1/n} \quad \text{lorsque } n \to +\infty" />
                  </div>
                </li>
                
                <li>
                  <p>Soit <LatexRenderer latex="x \in \mathbb{R}_+^*" />. Calculer la limite de</p>
                  <div className="text-center my-2">
                    <LatexRenderer latex="n\left(x^{1/n} - 1\right) \quad \text{lorsque } n \to +\infty" />
                  </div>
                  <p>En déduire la limite de</p>
                  <div className="text-center my-2">
                    <LatexRenderer latex="\left( \frac{a^{1/n} + b^{1/n}}{2} \right)^n \quad \text{lorsque } n \to +\infty" />
                  </div>
                </li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-6">
              <div>
                <strong className="text-green-600">1. Étude de la limite</strong> <LatexRenderer latex="\left( \frac{a^n + b^n}{2} \right)^{1/n}" />
              </div>

              <div>
                <strong className="text-green-600">Cas a = b</strong>
                <div className="mt-2">
                  <div className="text-center">
                    <LatexRenderer latex="\left( \frac{a^n + a^n}{2} \right)^{1/n} = a" />
                  </div>
                  <p className="mt-2">La limite est <LatexRenderer latex="a" />.</p>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Cas a &lt; b</strong>
                <div className="mt-2 space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex="\left( \frac{a^n + b^n}{2} \right)^{1/n} = b \left( \frac{a^n/b^n + 1}{2} \right)^{1/n}" />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex="= b \exp\left( \frac{1}{n} \ln\left( \frac{1 + (a/b)^n}{2} \right) \right)" />
                  </div>
                  <p>Comme <LatexRenderer latex="(a/b)^n \to 0" />, on a :</p>
                  <div className="text-center">
                    <LatexRenderer latex="\ln\left( \frac{1 + (a/b)^n}{2} \right) \to \ln\left( \frac{1}{2} \right)" />
                  </div>
                  <p>Donc <LatexRenderer latex="\frac{1}{n} \ln(\cdots) \to 0" /> et la limite est <LatexRenderer latex="b" />.</p>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Cas b &lt; a</strong>
                <p>Identique, en échangeant les rôles.</p>
              </div>

              <div>
                <strong className="text-green-600">Conclusion</strong>
                <div className="text-center bg-green-50 p-4 rounded border-2 border-green-400">
                  <LatexRenderer latex="\left( \frac{a^n + b^n}{2} \right)^{1/n} \longrightarrow \max(a, b)" />
                </div>
              </div>

              <div>
                <strong className="text-green-600">2. Limite de n(x^(1/n) - 1)</strong>
              </div>

              <div>
                <p>On pose :</p>
                <div className="text-center space-y-2">
                  <LatexRenderer latex="x^{1/n} = e^{\frac{1}{n} \ln x}" />
                </div>
                <p>D'où :</p>
                <div className="text-center">
                  <LatexRenderer latex="x^{1/n} - 1 \sim \frac{1}{n} \ln x \quad \text{quand } n \to +\infty" />
                </div>
                <p>Donc :</p>
                <div className="text-center bg-green-50 p-3 rounded">
                  <LatexRenderer latex="n(x^{1/n} - 1) \longrightarrow \ln x" />
                </div>
              </div>

              <div>
                <strong className="text-green-600">Déduction pour la seconde limite</strong>
              </div>

              <div>
                <p>On écrit :</p>
                <div className="text-center">
                  <LatexRenderer latex="\left( \frac{a^{1/n} + b^{1/n}}{2} \right)^n = \exp\left(n \ln\left( \frac{a^{1/n} + b^{1/n}}{2} \right)\right)" />
                </div>
              </div>

              <div>
                <p>Utilisons un développement limité au voisinage de 1 :</p>
                <div className="space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex="a^{1/n} = 1 + \frac{\ln a}{n} + o\left(\frac{1}{n}\right)" />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex="b^{1/n} = 1 + \frac{\ln b}{n} + o\left(\frac{1}{n}\right)" />
                  </div>
                </div>
                <p>D'où :</p>
                <div className="text-center">
                  <LatexRenderer latex="\frac{a^{1/n} + b^{1/n}}{2} = 1 + \frac{\ln a + \ln b}{2n} + o\left(\frac{1}{n}\right)" />
                </div>
              </div>

              <div>
                <p>Donc :</p>
                <div className="text-center">
                  <LatexRenderer latex="n \ln\left( \frac{a^{1/n} + b^{1/n}}{2} \right) \longrightarrow \frac{1}{2}(\ln a + \ln b) = \ln(\sqrt{ab})" />
                </div>
              </div>

              <div>
                <strong className="text-green-600">Résultat final</strong>
                <div className="text-center bg-green-50 p-4 rounded border-2 border-green-400">
                  <LatexRenderer latex="\left( \frac{a^{1/n} + b^{1/n}}{2} \right)^n \longrightarrow \sqrt{ab}" />
                </div>
                <p className="text-center mt-2 text-sm text-gray-600">
                  (Moyenne géométrique des deux nombres)
                </p>
              </div>
            </div>
          }
        />

      </div>
    </div>
  );
};

export default Chapitre5FonctionsUneVariableReelleExercicesPage; 