import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';

const Chapitre6DerivationExercicesPage = () => {
  const [visibleCorrections, setVisibleCorrections] = useState<{[key: string]: boolean}>({});

  const toggleCorrection = (exerciseId: string) => {
    setVisibleCorrections(prev => ({
      ...prev,
      [exerciseId]: !prev[exerciseId]
    }));
  };

  const DifficultyHeader = ({ level, title, icon: Icon }) => (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
          <Icon className="w-5 h-5 text-blue-600" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">{level}</h2>
          <p className="text-gray-600">{title}</p>
        </div>
      </div>
    </div>
  );

  const ExerciseCard = ({ id, title, content, correction, difficulty }) => (
    <Card className="border-0 shadow-lg mb-6 overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            difficulty === 'Facile' ? 'bg-green-100 text-green-700' :
            difficulty === 'Moyen' ? 'bg-yellow-100 text-yellow-700' :
            difficulty === 'Difficile' ? 'bg-orange-100 text-orange-700' :
            difficulty === 'Avancé' ? 'bg-red-100 text-red-700' :
            'bg-blue-100 text-blue-700'
          }`}>
            {difficulty}
          </span>
        </div>
        
        <div className="prose max-w-none mb-6">
          {content}
        </div>

        <div className="flex gap-3">
          <Button
            onClick={() => toggleCorrection(id)}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            {visibleCorrections[id] ? 'Masquer la correction' : 'Voir la correction'}
          </Button>
        </div>

        {visibleCorrections[id] && (
          <div className="mt-6 p-6 bg-gray-50 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="text-blue-600">📝</span>
              Correction détaillée
            </h4>
            <div className="prose max-w-none">
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
            <span className="text-[#2D5BFF] font-bold">Exercices - Chapitre 6</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 mb-8">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Exercices - Chapitre 6 : Dérivation
            </h1>
            <p className="text-slate-600 text-lg">
              Exercices progressifs pour maîtriser la dérivation et ses applications.
            </p>
          </div>
        </Card>

        <DifficultyHeader
          level="Module 1"
          title="Fonctions trigonométriques inverses et limites"
          icon={BookOpen}
        />

        <ExerciseCard
          id="ex1"
          title="Exercice 1"
          difficulty="Moyen"
          content={
            <div>
              <p><strong>Énoncé :</strong> On définit l'application <LatexRenderer latex={"f : \\mathbb{R}^* \\to \\mathbb{R}"} /> par :</p>
              <div className="text-center my-4">
                <LatexRenderer latex={"\\forall x \\in \\mathbb{R}^*, \\quad f(x) = \\arctan(x) + \\arctan\\left(\\frac{1}{x}\\right)"} />
              </div>
              <div className="space-y-2 mt-4">
                <div><strong>1.</strong> Déterminer <LatexRenderer latex={"\\lim_{x \\to +\\infty} f(x)"} /> et <LatexRenderer latex={"\\lim_{x \\to -\\infty} f(x)"} />.</div>
                <div><strong>2.</strong> Montrer que l'application <LatexRenderer latex={"f"} /> est constante sur <LatexRenderer latex={"]0, +\\infty["} /> et sur <LatexRenderer latex={"]-\\infty, 0["} />.</div>
                <div><strong>3.</strong> En déduire que : <LatexRenderer latex={"\\forall x \\in \\mathbb{R}^+, f(x) = \\frac{\\pi}{2}"} /> et pour tout <LatexRenderer latex={"x \\in \\mathbb{R}^-, f(x) = -\\frac{\\pi}{2}"} />.</div>
              </div>
            </div>
          }
          correction={
            <div className="space-y-6">
              <div>
                <strong className="text-blue-600">1. Limites de f(x)</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    On a :
                    <div className="text-center mt-2">
                      <LatexRenderer latex={"\\lim_{x \\to +\\infty} \\arctan(x) = \\frac{\\pi}{2} \\quad \\text{et} \\quad \\lim_{x \\to +\\infty} \\frac{1}{x} = 0"} />
                    </div>
                    <div className="text-center mt-1">
                      <LatexRenderer latex={"\\text{donc par composition} \\quad \\lim_{x \\to +\\infty} f(x) = \\frac{\\pi}{2} + 0 = \\frac{\\pi}{2}"} />
                    </div>
                  </div>
                  <div>
                    On a :
                    <div className="text-center mt-2">
                      <LatexRenderer latex={"\\lim_{x \\to -\\infty} \\arctan(x) = -\\frac{\\pi}{2} \\quad \\text{et} \\quad \\lim_{x \\to -\\infty} \\frac{1}{x} = 0"} />
                    </div>
                    <div className="text-center mt-1">
                      <LatexRenderer latex={"\\text{donc par composition} \\quad \\lim_{x \\to -\\infty} f(x) = -\\frac{\\pi}{2} + 0 = -\\frac{\\pi}{2}"} />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">2. Constante sur ]0, +∞[ et ]-∞, 0[</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    Pour tout <LatexRenderer latex={"x \\in \\mathbb{R}^*"} />, posons <LatexRenderer latex={"f(x) = \\arctan(x) + \\arctan\\left(\\frac{1}{x}\\right)"} />.
                  </div>
                  <div>
                    La fonction <LatexRenderer latex={"f"} /> est définie et dérivable sur <LatexRenderer latex={"\\mathbb{R}^*"} /> car <LatexRenderer latex={"\\arctan(x)"} /> est dérivable sur <LatexRenderer latex={"\\mathbb{R}"} /> et <LatexRenderer latex={"\\arctan\\left(\\frac{1}{x}\\right)"} /> est dérivable sur <LatexRenderer latex={"\\mathbb{R}^*"} /> par composition puis somme.
                  </div>
                  <div>
                    On a pour tout réel <LatexRenderer latex={"x"} /> non nul :
                    <div className="text-center mt-2 space-y-1">
                      <LatexRenderer latex={"f'(x) = \\frac{1}{1 + x^2} - \\frac{1}{x^2} \\cdot \\frac{1}{1 + \\left(\\frac{1}{x}\\right)^2}"} />
                      <LatexRenderer latex={"= \\frac{1}{1 + x^2} - \\frac{1}{x^2 + 1} = 0"} />
                    </div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    La fonction <LatexRenderer latex={"f"} /> est donc constante sur <LatexRenderer latex={"]0, +\\infty["} /> et sur <LatexRenderer latex={"]-\\infty, 0["} />.
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">3. Valeurs de f(x)</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    Puisque <LatexRenderer latex={"f"} /> est constante sur <LatexRenderer latex={"]0, +\\infty["} /> et sur <LatexRenderer latex={"]-\\infty, 0["} />, et en utilisant les limites trouvées, il existe donc <LatexRenderer latex={"(C_1, C_2) \\in \\mathbb{R}^2"} /> tel que :
                    <div className="text-center mt-2">
                      <LatexRenderer latex={"\\forall x \\in ]-\\infty, 0[, f(x) = C_1 \\quad \\text{et} \\quad \\forall x \\in ]0, +\\infty[, f(x) = C_2"} />
                    </div>
                  </div>
                  <div>
                    Or <LatexRenderer latex={"\\lim_{x \\to +\\infty} f(x) = \\frac{\\pi}{2}"} /> donc <LatexRenderer latex={"C_2 = \\frac{\\pi}{2}"} /> et <LatexRenderer latex={"\\lim_{x \\to -\\infty} f(x) = -\\frac{\\pi}{2}"} /> donc <LatexRenderer latex={"C_1 = -\\frac{\\pi}{2}"} />.
                  </div>
                  <div className="bg-blue-50 p-3 rounded text-center">
                    <strong>Ainsi :</strong>
                    <div className="mt-2">
                      <LatexRenderer latex={"\\forall x \\in \\mathbb{R}^+, f(x) = \\frac{\\pi}{2} \\quad \\text{et} \\quad \\forall x \\in \\mathbb{R}^-, f(x) = -\\frac{\\pi}{2}"} />
                    </div>
                  </div>
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
              <p><strong>Énoncé :</strong> Établir les inégalités suivantes :</p>
              <div className="space-y-3 mt-4">
                <div><strong>1.</strong> <LatexRenderer latex={"\\forall x \\in ]-1; +\\infty[, \\frac{x}{1 + x} \\leq \\ln(1 + x) \\leq x"} /></div>
                <div><strong>2.</strong> <LatexRenderer latex={"\\forall x > 0, \\frac{x}{1 + x^2} \\leq \\arctan(x) \\leq x"} /></div>
                <div><strong>3.</strong> <LatexRenderer latex={"(\\clubsuit) \\forall x \\in \\mathbb{R}_+, e^x \\geq 1 + x + \\frac{x^2}{2}"} /></div>
              </div>
            </div>
          }
          correction={
            <div className="space-y-6">
              <div>
                <strong className="text-blue-600">1. Inégalité pour ln(1+x)</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    Soit <LatexRenderer latex={"x \\in ]-1; +\\infty["} />, on définit pour <LatexRenderer latex={"t \\in ]-1; +\\infty["} /> la fonction <LatexRenderer latex={"f"} /> par <LatexRenderer latex={"f(t) = \\ln(1 + t)"} />. La fonction <LatexRenderer latex={"f"} /> est continue et dérivable sur <LatexRenderer latex={"]-1; +\\infty["} /> avec :
                    <div className="text-center mt-2">
                      <LatexRenderer latex={"f'(t) = \\frac{1}{1 + t}"} />
                    </div>
                  </div>
                  
                  <div>
                    <strong>Cas (a) :</strong> <LatexRenderer latex={"x > 0"} />
                    <div className="mt-2">
                      On travaille sur le segment <LatexRenderer latex={"[0, x]"} />. Soit <LatexRenderer latex={"t \\in [0, x]"} /> alors <LatexRenderer latex={"1 \\leq 1 + t \\leq 1 + x"} />, par décroissance de la fonction inverse :
                      <div className="text-center mt-2">
                        <LatexRenderer latex={"\\frac{1}{1 + x} \\leq f'(t) \\leq 1"} />
                      </div>
                      D'après l'inégalité des accroissements finis sur <LatexRenderer latex={"[0, x]"} /> :
                      <div className="text-center mt-2">
                        <LatexRenderer latex={"\\frac{x}{1 + x} \\leq \\ln(1 + x) \\leq x"} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <strong>Cas (b) :</strong> <LatexRenderer latex={"x \\in ]-1, 0]"} />
                    <div className="mt-2">
                      On travaille sur le segment <LatexRenderer latex={"[x, 0]"} />. Soit <LatexRenderer latex={"t \\in [x, 0]"} /> alors <LatexRenderer latex={"1 + x \\leq 1 + t \\leq 1"} />, par décroissance de la fonction inverse :
                      <div className="text-center mt-2">
                        <LatexRenderer latex={"1 \\leq f'(t) \\leq \\frac{1}{1 + x}"} />
                      </div>
                      D'après l'inégalité des accroissements finis sur <LatexRenderer latex={"[x, 0]"} /> :
                      <div className="text-center mt-2">
                        <LatexRenderer latex={"-x \\leq -\\ln(1 + x) \\leq -\\frac{x}{1 + x}"} />
                      </div>
                      Ce qui donne encore :
                      <div className="text-center mt-2">
                        <LatexRenderer latex={"\\frac{x}{1 + x} \\leq \\ln(1 + x) \\leq x"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">2. Inégalité pour arctan(x)</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    Soit <LatexRenderer latex={"x \\in ]0, +\\infty["} /> fixé, on définit pour <LatexRenderer latex={"t \\in [0, +\\infty["} /> la fonction <LatexRenderer latex={"f"} /> par <LatexRenderer latex={"f(t) = \\arctan(t)"} />. On a :
                    <div className="text-center mt-2">
                      <LatexRenderer latex={"f'(t) = \\frac{1}{1 + t^2}"} />
                    </div>
                  </div>
                  <div>
                    Soit <LatexRenderer latex={"t \\in [0, x]"} /> alors par croissance de la fonction carré sur <LatexRenderer latex={"\\mathbb{R}_+"} /> :
                    <div className="text-center mt-2">
                      <LatexRenderer latex={"1 \\leq 1 + t^2 \\leq 1 + x^2"} />
                    </div>
                    Par décroissance de la fonction inverse :
                    <div className="text-center mt-2">
                      <LatexRenderer latex={"\\frac{1}{1 + x^2} \\leq f'(t) \\leq 1"} />
                    </div>
                  </div>
                  <div>
                    D'après l'inégalité des accroissements finis sur <LatexRenderer latex={"[0, x]"} /> :
                    <div className="text-center mt-2 bg-blue-50 p-3 rounded">
                      <LatexRenderer latex={"\\frac{x}{1 + x^2} \\leq \\arctan(x) \\leq x"} />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">3. Inégalité pour l'exponentielle</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    Posons pour <LatexRenderer latex={"x \\in \\mathbb{R}_+"} /> la fonction <LatexRenderer latex={"f(x) = e^x - 1 - x - \\frac{x^2}{2}"} />. Montrons qu'elle est toujours positive.
                  </div>
                  <div>
                    Elle est dérivable sur <LatexRenderer latex={"\\mathbb{R}_+"} /> et <LatexRenderer latex={"f'(x) = e^x - 1 - x"} />.
                  </div>
                  <div>
                    Étudions le signe de <LatexRenderer latex={"f'(x)"} />. Fixons <LatexRenderer latex={"x \\in \\mathbb{R}_+"} /> et posons <LatexRenderer latex={"g(t) = e^t"} /> pour <LatexRenderer latex={"t \\in \\mathbb{R}_+"} />. On a <LatexRenderer latex={"g'(t) = e^t"} />.
                  </div>
                  <div>
                    Soit <LatexRenderer latex={"t \\in [0, x]"} />, on a par croissance de exp : <LatexRenderer latex={"1 \\leq g'(t) \\leq e^x"} /> donc d'après l'inégalité des accroissements finis :
                    <div className="text-center mt-2">
                      <LatexRenderer latex={"x \\leq e^x - 1"} />
                    </div>
                    Ainsi <LatexRenderer latex={"f'(x) = e^x - 1 - x \\geq 0"} />.
                  </div>
                  <div>
                    On en déduit que <LatexRenderer latex={"f"} /> est croissante sur <LatexRenderer latex={"\\mathbb{R}_+"} />. De plus, <LatexRenderer latex={"f(0) = 0"} /> ainsi <LatexRenderer latex={"f"} /> est positive sur <LatexRenderer latex={"\\mathbb{R}_+"} />.
                  </div>
                  <div className="bg-blue-50 p-3 rounded text-center">
                    <strong>Conclusion :</strong>
                    <div className="mt-2">
                      <LatexRenderer latex={"\\forall x \\in \\mathbb{R}_+, e^x \\geq 1 + x + \\frac{x^2}{2}"} />
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
          difficulty="Avancé"
          content={
            <div>
              <p><strong>Énoncé :</strong> On considère la fonction <LatexRenderer latex={"f"} /> définie sur <LatexRenderer latex={"]-1; +\\infty["} /> par</p>
              <div className="text-center my-4">
                <LatexRenderer latex={"f(x) = \\frac{3}{2} \\ln(x + 1)"} />
              </div>
              <div className="space-y-2 mt-4">
                <div><strong>1.</strong> Étudier les variations de <LatexRenderer latex={"f"} /> sur <LatexRenderer latex={"]-1; +\\infty["} />.</div>
                <div><strong>2.</strong> Montrer que l'équation <LatexRenderer latex={"f(x) = x"} /> admet une unique solution <LatexRenderer latex={"\\alpha"} /> dans <LatexRenderer latex={"[1; 2]"} />. On rappelle que <LatexRenderer latex={"7 < e^2 < 8"} />.</div>
                <div><strong>3.</strong> On pose <LatexRenderer latex={"u_0 = 3"} /> et <LatexRenderer latex={"\\forall n \\in \\mathbb{N} : u_{n+1} = f(u_n)"} />. Montrer que pour tout entier <LatexRenderer latex={"n \\geq 0, u_n \\geq \\alpha"} />.</div>
                <div><strong>4.</strong> Montrer que <LatexRenderer latex={"\\forall x \\in [1; +\\infty[, 0 \\leq f'(x) \\leq \\frac{3}{4}"} />.</div>
                <div><strong>5.</strong> Montrer que pour tout entier naturel <LatexRenderer latex={"n"} /> : <LatexRenderer latex={"0 \\leq u_{n+1} - \\alpha \\leq \\frac{3}{4} (u_n - \\alpha)"} />.</div>
                <div><strong>6.</strong> Montrer que pour tout entier <LatexRenderer latex={"n \\in \\mathbb{N}"} /> : <LatexRenderer latex={"0 \\leq u_n - \\alpha \\leq \\left(\\frac{3}{4}\\right)^n (u_0 - \\alpha)"} />.</div>
                <div><strong>7.</strong> En déduire la convergence de la suite <LatexRenderer latex={"(u_n)_{n \\in \\mathbb{N}}"} />.</div>
              </div>
            </div>
          }
          correction={
            <div className="space-y-6">
              <div>
                <strong className="text-blue-600">1. Variations de f</strong>
                <div className="mt-2 space-y-2">
                  <div>
                    La fonction <LatexRenderer latex={"f"} /> est dérivable sur <LatexRenderer latex={"]-1; +\\infty["} /> et pour <LatexRenderer latex={"x \\in ]-1; +\\infty["} /> :
                    <div className="text-center mt-2">
                      <LatexRenderer latex={"f'(x) = \\frac{3}{2(x + 1)}"} />
                    </div>
                  </div>
                  <div>
                    Ainsi <LatexRenderer latex={"\\forall x \\in ]-1; +\\infty[, f'(x) > 0"} />. La fonction <LatexRenderer latex={"f"} /> est donc <strong>strictement croissante</strong> sur <LatexRenderer latex={"]-1; +\\infty["} />.
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">2. Existence et unicité de α</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    Posons <LatexRenderer latex={"g(x) = f(x) - x"} />. On a <LatexRenderer latex={"g'(x) = f'(x) - 1 = \\frac{3}{2(x + 1)} - 1 = \\frac{1 - 2x}{2(x + 1)}"} />.
                  </div>
                  <div>
                    Pour <LatexRenderer latex={"x \\in [1; 2], g'(x) < 0"} /> donc <LatexRenderer latex={"g"} /> est strictement décroissante sur <LatexRenderer latex={"[1; 2]"} />.
                  </div>
                  <div>
                    On a :
                    <div className="text-center mt-2">
                      <LatexRenderer latex={"g(1) = \\frac{3}{2} \\ln(2) - 1 > 0"} />
                    </div>
                    <div className="text-center">
                      <LatexRenderer latex={"g(2) = \\frac{3}{2} \\ln(3) - 2 < 0"} />
                    </div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    Par le théorème des valeurs intermédiaires, <LatexRenderer latex={"g"} /> s'annule une unique fois sur <LatexRenderer latex={"[1; 2]"} /> en un point <LatexRenderer latex={"\\alpha"} />.
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">3. Propriété de la suite</strong>
                <div className="mt-2 space-y-2">
                  <div>
                    <strong>Par récurrence :</strong> Posons <LatexRenderer latex={"\\mathcal{P}(n) : u_n \\geq \\alpha"} />.
                  </div>
                  <div>
                    <strong>Initialisation :</strong> <LatexRenderer latex={"u_0 = 3"} /> et <LatexRenderer latex={"\\alpha \\in [1; 2]"} /> donc <LatexRenderer latex={"u_0 \\geq \\alpha"} />.
                  </div>
                  <div>
                    <strong>Hérédité :</strong> Si <LatexRenderer latex={"u_n \\geq \\alpha"} />, alors par croissance de <LatexRenderer latex={"f"} /> : <LatexRenderer latex={"f(u_n) \\geq f(\\alpha) = \\alpha"} />, donc <LatexRenderer latex={"u_{n+1} \\geq \\alpha"} />.
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">4. Majoration de f'</strong>
                <div className="mt-2 space-y-2">
                  <div>
                    Soit <LatexRenderer latex={"x \\in [1; +\\infty["} />, alors <LatexRenderer latex={"x + 1 \\geq 2"} /> et donc :
                    <div className="text-center mt-2">
                      <LatexRenderer latex={"0 \\leq f'(x) = \\frac{3}{2(x + 1)} \\leq \\frac{3}{2} \\cdot \\frac{1}{2} = \\frac{3}{4}"} />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">5. Majoration de l'écart</strong>
                <div className="mt-2 space-y-2">
                  <div>
                    Comme <LatexRenderer latex={"u_n \\geq \\alpha"} /> et <LatexRenderer latex={"f"} /> est croissante, par l'inégalité des accroissements finis :
                    <div className="text-center mt-2 bg-blue-50 p-3 rounded">
                      <LatexRenderer latex={"0 \\leq u_{n+1} - \\alpha = f(u_n) - f(\\alpha) \\leq \\frac{3}{4} (u_n - \\alpha)"} />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">6. Majoration géométrique</strong>
                <div className="mt-2 space-y-2">
                  <div>
                    <strong>Par récurrence :</strong> En combinant les inégalités précédentes :
                    <div className="text-center mt-2">
                      <LatexRenderer latex={"0 \\leq u_n - \\alpha \\leq \\left(\\frac{3}{4}\\right)^n (u_0 - \\alpha)"} />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">7. Convergence</strong>
                <div className="mt-2 space-y-2">
                  <div>
                    Comme <LatexRenderer latex={"\\frac{3}{4} \\in ]-1; 1[, \\lim_{n \\to \\infty} \\left(\\frac{3}{4}\\right)^n = 0"} />.
                  </div>
                  <div className="bg-blue-50 p-3 rounded text-center">
                    <strong>Par le théorème d'encadrement :</strong>
                    <div className="mt-2">
                      <LatexRenderer latex={"\\lim_{n \\to \\infty} u_n = \\alpha"} />
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
              <p><strong>Énoncé :</strong></p>
              <div className="space-y-3 mt-4">
                <div><strong>1.</strong> Soit <LatexRenderer latex={"k \\in \\mathbb{N} \\setminus \\{0; 1\\}"} />. En appliquant l'inégalité des accroissements finis sur <LatexRenderer latex={"[k-1; k]"} /> à la fonction <LatexRenderer latex={"f"} /> définie par <LatexRenderer latex={"f(x) = -\\frac{1}{x}"} />, montrer que</div>
                <div className="text-center ml-8">
                  <LatexRenderer latex={"\\frac{1}{k^2} \\leq f(k) - f(k-1) \\leq \\frac{1}{(k-1)^2}"} />
                </div>
                <div><strong>2.</strong> En déduire que, pour tout entier <LatexRenderer latex={"n \\geq 2"} /></div>
                <div className="text-center ml-8">
                  <LatexRenderer latex={"\\sum_{k=2}^n \\frac{1}{k^2} \\leq f(n) - f(1)"} />
                </div>
                <div><strong>3.</strong> Soit <LatexRenderer latex={"(S_n)"} /> la suite définie pour tout entier <LatexRenderer latex={"n \\geq 1"} /> par</div>
                <div className="text-center ml-8">
                  <LatexRenderer latex={"S_n = \\sum_{k=1}^n \\frac{1}{k^2}"} />
                </div>
                <div className="ml-8">Montrer que <LatexRenderer latex={"(S_n)"} /> est croissante et majorée.</div>
                <div><strong>4.</strong> En déduire que la suite <LatexRenderer latex={"(S_n)"} /> converge.</div>
              </div>
            </div>
          }
          correction={
            <div className="space-y-6">
              <div>
                <strong className="text-blue-600">1. Inégalité des accroissements finis</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    Soit <LatexRenderer latex={"k \\in \\mathbb{N} \\setminus \\{0; 1\\} \\geq 2"} />, la fonction <LatexRenderer latex={"f"} /> est dérivable sur <LatexRenderer latex={"\\mathbb{R}^*"} /> donc sur <LatexRenderer latex={"[k-1; k]"} />, avec :
                    <div className="text-center mt-2">
                      <LatexRenderer latex={"f'(x) = \\frac{1}{x^2}"} />
                    </div>
                  </div>
                  <div>
                    Pour <LatexRenderer latex={"x \\in [k-1; k]"} />, par croissance de la fonction carré sur <LatexRenderer latex={"\\mathbb{R}_+"} /> :
                    <div className="text-center mt-2">
                      <LatexRenderer latex={"(k-1)^2 \\leq x^2 \\leq k^2"} />
                    </div>
                    Par décroissance de la fonction inverse :
                    <div className="text-center mt-2">
                      <LatexRenderer latex={"\\frac{1}{k^2} \\leq f'(x) \\leq \\frac{1}{(k-1)^2}"} />
                    </div>
                  </div>
                  <div>
                    D'après l'inégalité des accroissements finis :
                    <div className="text-center mt-2 bg-blue-50 p-3 rounded">
                      <LatexRenderer latex={"\\frac{1}{k^2} \\leq f(k) - f(k-1) \\leq \\frac{1}{(k-1)^2}"} />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">2. Somme télescopique</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    Sommons l'inégalité de gauche pour <LatexRenderer latex={"k"} /> variant de 2 à <LatexRenderer latex={"n"} /> :
                    <div className="text-center mt-2">
                      <LatexRenderer latex={"\\sum_{k=2}^n \\frac{1}{k^2} \\leq \\sum_{k=2}^n (f(k) - f(k-1))"} />
                    </div>
                  </div>
                  <div>
                    La somme de droite est télescopique :
                    <div className="text-center mt-2">
                      <LatexRenderer latex={"\\sum_{k=2}^n (f(k) - f(k-1)) = f(n) - f(1)"} />
                    </div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded text-center">
                    <strong>Donc :</strong>
                    <div className="mt-2">
                      <LatexRenderer latex={"\\sum_{k=2}^n \\frac{1}{k^2} \\leq f(n) - f(1)"} />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">3. Croissance et majoration</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <strong>Croissance :</strong> Soit <LatexRenderer latex={"n \\in \\mathbb{N}^*"} /> :
                    <div className="text-center mt-2">
                      <LatexRenderer latex={"S_{n+1} - S_n = \\frac{1}{(n+1)^2} > 0"} />
                    </div>
                    La suite <LatexRenderer latex={"(S_n)"} /> est strictement croissante.
                  </div>
                  <div>
                    <strong>Majoration :</strong> D'après la question précédente pour <LatexRenderer latex={"n \\geq 2"} /> :
                    <div className="text-center mt-2">
                      <LatexRenderer latex={"\\sum_{k=2}^n \\frac{1}{k^2} \\leq \\frac{1}{n} - 1"} />
                    </div>
                    Donc :
                    <div className="text-center mt-2">
                      <LatexRenderer latex={"S_n = 1 + \\sum_{k=2}^n \\frac{1}{k^2} \\leq 1 + \\frac{1}{n} \\leq 2"} />
                    </div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    La suite <LatexRenderer latex={"(S_n)"} /> est croissante et majorée par 2.
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">4. Convergence</strong>
                <div className="mt-2 space-y-2">
                  <div className="bg-blue-50 p-3 rounded text-center">
                    <strong>Théorème de convergence monotone :</strong>
                    <div className="mt-2">
                      La suite <LatexRenderer latex={"(S_n)"} /> est croissante et majorée, donc elle converge.
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 text-center mt-2">
                    <em>Note : Cette série converge vers <LatexRenderer latex={"\\frac{\\pi^2}{6}"} /> (problème de Bâle).</em>
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

export default Chapitre6DerivationExercicesPage;
