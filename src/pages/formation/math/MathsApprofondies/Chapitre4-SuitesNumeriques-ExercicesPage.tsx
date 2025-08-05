import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';

const Chapitre4SuitesNumeriquesExercicesPage = () => {
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
            <span className="text-[#2D5BFF] font-bold">Exercices - Chapitre 4</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 mb-8">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Exercices - Chapitre 4 : Suites numériques et récurrence
            </h1>
            <p className="text-slate-600 text-lg">
              Exercices progressifs pour maîtriser les suites et les démonstrations par récurrence.
            </p>
          </div>
        </Card>

        <DifficultyHeader
          level="Module 1"
          title="Raisonnement par récurrence et propriétés des suites"
          icon={BookOpen}
        />

        <ExerciseCard
          id="ex1"
          title="Exercice 1"
          difficulty="Facile"
          content={
            <div>
              <p><strong>Énoncé :</strong> Soit <LatexRenderer latex={"(u_n)_{n \\in \\mathbb{N}}"} /> la suite définie par :</p>
              <div className="text-center my-4">
                <LatexRenderer latex={"u_0 = 2, \\quad u_{n+1} = 5u_n + 4 \\quad \\text{pour tout } n \\in \\mathbb{N}."} />
              </div>
              <p>Montrer que, pour tout <LatexRenderer latex={"n \\in \\mathbb{N}"} />, on a <LatexRenderer latex={"u_n > 0"} />.</p>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-blue-600">Démonstration par récurrence :</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <strong>• Initialisation :</strong> <LatexRenderer latex={"u_0 = 2 > 0"} /> donc la propriété est vraie au rang initial.
                  </div>
                  <div>
                    <strong>• Hérédité :</strong> Supposons que pour un certain <LatexRenderer latex={"n \\in \\mathbb{N}"} />, on a <LatexRenderer latex={"u_n > 0"} />. Alors :
                    <div className="text-center mt-2">
                      <LatexRenderer latex={"u_{n+1} = 5u_n + 4 > 0 \\quad \\text{car } 5u_n > 0 \\text{ et } 4 > 0."} />
                    </div>
                  </div>
                  <div>
                    <strong>• Conclusion :</strong> La propriété est initialisée et héréditaire. Donc, par le principe de récurrence :
                    <div className="text-center bg-blue-50 p-2 rounded mt-2">
                      <LatexRenderer latex={"\\forall n \\in \\mathbb{N}, \\quad u_n > 0."} />
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
          difficulty="Moyen"
          content={
            <div>
              <p><strong>Énoncé :</strong> Soit <LatexRenderer latex={"(u_n)_{n \\in \\mathbb{N}}"} /> la suite définie par :</p>
              <div className="text-center my-4">
                <LatexRenderer latex={"u_0 = -3, \\quad u_{n+1} = 5 - 4u_n."} />
              </div>
              <p>Montrer que <LatexRenderer latex={"u_n = (-4)^{n+1} + 1"} /> pour tout <LatexRenderer latex={"n \\in \\mathbb{N}"} />.</p>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-blue-600">Démonstration par récurrence :</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <strong>• Initialisation :</strong>
                    <div className="text-center mt-2">
                      <LatexRenderer latex={"u_0 = -3, \\quad (-4)^{0+1} + 1 = -4 + 1 = -3."} />
                    </div>
                    La propriété est donc vraie au rang 0.
                  </div>
                  <div>
                    <strong>• Hérédité :</strong> Supposons que <LatexRenderer latex={"u_n = (-4)^{n+1} + 1"} /> est vraie pour un certain <LatexRenderer latex={"n"} />. Alors :
                    <div className="space-y-2 mt-2">
                      <div className="text-center">
                        <LatexRenderer latex={"u_{n+1} = 5 - 4u_n = 5 - 4((-4)^{n+1} + 1)"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= 5 - 4(-4)^{n+1} - 4 = 1 + 4 \\cdot 4^{n+1}"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= 1 + (-4)^{n+2} = (-4)^{n+2} + 1"} />
                      </div>
                    </div>
                  </div>
                  <div>
                    <strong>• Conclusion :</strong> La propriété est démontrée par récurrence :
                    <div className="text-center bg-blue-50 p-2 rounded mt-2">
                      <LatexRenderer latex={"\\forall n \\in \\mathbb{N}, \\quad u_n = (-4)^{n+1} + 1."} />
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
              <p><strong>Énoncé :</strong> Soit <LatexRenderer latex={"(u_n)_{n \\in \\mathbb{N}}"} /> la suite définie par :</p>
              <div className="text-center my-4">
                <LatexRenderer latex={"u_0 = \\frac{1}{2}, \\quad u_{n+1} = \\sqrt{\\frac{1 + u_n}{2}}."} />
              </div>
              <p>Montrer que <LatexRenderer latex={"0 \\leq u_n \\leq 1"} /> pour tout <LatexRenderer latex={"n \\in \\mathbb{N}"} />.</p>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-blue-600">Démonstration par récurrence :</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <strong>• Initialisation :</strong>
                    <div className="text-center mt-2">
                      <LatexRenderer latex={"u_0 = \\frac{1}{2} \\in [0,1]."} />
                    </div>
                  </div>
                  <div>
                    <strong>• Hérédité :</strong> Supposons <LatexRenderer latex={"u_n \\in [0,1]"} />. 
                    <div className="mt-2">
                      Comme la fonction <LatexRenderer latex={"x \\mapsto \\sqrt{\\frac{1 + x}{2}}"} /> est croissante et continue sur <LatexRenderer latex={"[0,1]"} />, on a :
                    </div>
                    <div className="space-y-2 mt-2">
                      <div className="text-center">
                        <LatexRenderer latex={"0 \\leq u_n \\leq 1 \\Rightarrow \\sqrt{\\frac{1 + 0}{2}} \\leq u_{n+1} \\leq \\sqrt{\\frac{1 + 1}{2}}"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"\\Rightarrow \\frac{1}{\\sqrt{2}} \\leq u_{n+1} \\leq 1"} />
                      </div>
                    </div>
                    En particulier <LatexRenderer latex={"u_{n+1} \\in [0,1]"} />.
                  </div>
                  <div>
                    <strong>• Conclusion :</strong> Par récurrence :
                    <div className="text-center bg-blue-50 p-2 rounded mt-2">
                      <LatexRenderer latex={"\\forall n \\in \\mathbb{N}, \\quad 0 \\leq u_n \\leq 1."} />
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
          difficulty="Difficile"
          content={
            <div>
              <p><strong>Énoncé :</strong> Soit <LatexRenderer latex={"(u_n)_{n \\in \\mathbb{N}}"} /> définie par :</p>
              <div className="text-center my-4">
                <LatexRenderer latex={"u_0 = 1, \\quad u_1 = 1, \\quad u_{n+2} = 2u_{n+1} - u_n - 2 \\quad \\text{pour tout } n \\in \\mathbb{N}."} />
              </div>
              <div className="space-y-2">
                <p><strong>1.</strong> Calculer <LatexRenderer latex={"u_2"} /> et <LatexRenderer latex={"u_3"} />.</p>
                <p><strong>2.</strong> Montrer que la suite est décroissante : <LatexRenderer latex={"u_{n+1} \\leq u_n"} /> pour tout <LatexRenderer latex={"n"} />.</p>
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-blue-600">1. Calcul de u₂ et u₃ :</strong>
                <div className="mt-2 space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex={"u_2 = 2u_1 - u_0 - 2 = 2 \\cdot 1 - 1 - 2 = -1"} />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex={"u_3 = 2u_2 - u_1 - 2 = 2 \\cdot (-1) - 1 - 2 = -5"} />
                  </div>
                </div>
              </div>
              <div>
                <strong className="text-blue-600">2. Démonstration que la suite est décroissante :</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <strong>• Initialisation :</strong> <LatexRenderer latex={"u_1 = 1 \\leq u_0 = 1"} /> (égalité).
                  </div>
                  <div>
                    <strong>• Hérédité :</strong> Supposons <LatexRenderer latex={"u_{n+1} \\leq u_n"} />. 
                    <div className="mt-2">
                      Nous devons montrer que <LatexRenderer latex={"u_{n+2} \\leq u_{n+1}"} />.
                    </div>
                    <div className="space-y-2 mt-2">
                      <div className="text-center">
                        <LatexRenderer latex={"u_{n+2} = 2u_{n+1} - u_n - 2"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"u_{n+2} \\leq u_{n+1} \\Leftrightarrow 2u_{n+1} - u_n - 2 \\leq u_{n+1}"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"\\Leftrightarrow u_{n+1} - u_n \\leq 2"} />
                      </div>
                    </div>
                    <div className="mt-2">
                      Or par hypothèse de récurrence, <LatexRenderer latex={"u_{n+1} \\leq u_n"} />, donc <LatexRenderer latex={"u_{n+1} - u_n \\leq 0 \\leq 2"} />.
                    </div>
                    <div className="mt-2">
                      Donc <LatexRenderer latex={"u_{n+2} \\leq u_{n+1}"} />.
                  </div>
                  </div>
                  <div>
                    <strong>• Conclusion :</strong> Par récurrence :
                    <div className="text-center bg-blue-50 p-2 rounded mt-2">
                      <LatexRenderer latex={"\\forall n \\in \\mathbb{N}, \\quad u_{n+1} \\leq u_n."} />
                    </div>
                  </div>
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
              <p><strong>Énoncé complet :</strong> Soit <LatexRenderer latex={"(u_n)_{n \\in \\mathbb{N}}"} /> la suite définie par :</p>
              <div className="text-center my-4">
                <LatexRenderer latex={"u_0 = 3, \\quad u_{n+1} = \\frac{5u_n - 4}{u_n + 1} \\quad \\text{pour tout } n \\in \\mathbb{N}."} />
              </div>
              <div className="space-y-2">
                <p><strong>1.</strong> Montrer que pour tout <LatexRenderer latex={"n \\in \\mathbb{N}"} />, <LatexRenderer latex={"u_n"} /> existe et <LatexRenderer latex={"u_n > 2"} />.</p>
                <p><strong>2.</strong> On pose <LatexRenderer latex={"v_n = \\frac{1}{u_n - 2}"} />. Justifier que <LatexRenderer latex={"v_n"} /> est bien défini pour tout <LatexRenderer latex={"n"} />.</p>
                <p><strong>3.</strong> Montrer que la suite <LatexRenderer latex={"(v_n)"} /> est arithmétique.</p>
                <p><strong>4.</strong> En déduire une expression explicite de <LatexRenderer latex={"v_n"} /> en fonction de <LatexRenderer latex={"n"} />.</p>
                <p><strong>5.</strong> En déduire une expression explicite de <LatexRenderer latex={"u_n"} /> en fonction de <LatexRenderer latex={"n"} />.</p>
              </div>
            </div>
          }
          correction={
            <div className="space-y-6">
              <div>
                <strong className="text-blue-600">Question 1 : Existence et minoration de (uₙ)</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <strong>• Initialisation :</strong> <LatexRenderer latex={"u_0 = 3 > 2"} /> donc <LatexRenderer latex={"\\mathcal{P}(0)"} /> est vraie.
                  </div>
                  <div>
                    <strong>• Hérédité :</strong> Supposons <LatexRenderer latex={"u_n > 2"} /> et montrons <LatexRenderer latex={"u_{n+1} > 2"} />.
                    <div className="space-y-2 mt-2">
                      <div className="text-center">
                        <LatexRenderer latex={"u_{n+1} - 2 = \\frac{5u_n - 4}{u_n + 1} - 2 = \\frac{5u_n - 4 - 2(u_n + 1)}{u_n + 1}"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= \\frac{3u_n - 6}{u_n + 1} = \\frac{3(u_n - 2)}{u_n + 1}"} />
                      </div>
                    </div>
                    <div className="mt-2">
                      Comme <LatexRenderer latex={"u_n > 2"} />, on a <LatexRenderer latex={"u_n - 2 > 0"} /> et <LatexRenderer latex={"u_n + 1 > 0"} />, donc <LatexRenderer latex={"u_{n+1} - 2 > 0"} />, soit <LatexRenderer latex={"u_{n+1} > 2"} />.
                    </div>
                  </div>
                  <div>
                    <strong>• Conclusion :</strong> Par récurrence, <LatexRenderer latex={"u_n > 2"} /> pour tout <LatexRenderer latex={"n \\in \\mathbb{N}"} />.
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">Question 2 : Définition de vₙ</strong>
                <div className="mt-2">
                  On pose <LatexRenderer latex={"v_n = \\frac{1}{u_n - 2}"} />.
                  <div className="mt-2">
                    <strong>Justification :</strong> D'après la question 1, <LatexRenderer latex={"u_n > 2"} /> donc <LatexRenderer latex={"u_n - 2 > 0"} />. La fraction est bien définie pour tout <LatexRenderer latex={"n \\in \\mathbb{N}"} />.
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">Question 3 : (vₙ) est arithmétique</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    On calcule <LatexRenderer latex={"v_{n+1} - v_n"} /> :
                  </div>
                  <div className="space-y-2">
                    <div className="text-center">
                      <LatexRenderer latex={"v_{n+1} - v_n = \\frac{1}{u_{n+1} - 2} - \\frac{1}{u_n - 2}"} />
                    </div>
                    <div className="text-center">
                      <LatexRenderer latex={"= \\frac{1}{\\frac{3u_n - 6}{u_n + 1}} - \\frac{1}{u_n - 2} = \\frac{u_n + 1}{3(u_n - 2)} - \\frac{1}{u_n - 2}"} />
                    </div>
                    <div className="text-center">
                      <LatexRenderer latex={"= \\frac{u_n + 1 - 3}{3(u_n - 2)} = \\frac{u_n - 2}{3(u_n - 2)} = \\frac{1}{3}"} />
                    </div>
                  </div>
                  <div>
                    <strong>Conclusion :</strong> La suite <LatexRenderer latex={"(v_n)"} /> est arithmétique de raison <LatexRenderer latex={"\\frac{1}{3}"} />.
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">Question 4 : Expression explicite de (vₙ)</strong>
                <div className="mt-2 space-y-2">
                  <div>
                    La suite <LatexRenderer latex={"(v_n)"} /> est arithmétique de premier terme <LatexRenderer latex={"v_0 = \\frac{1}{3 - 2} = 1"} /> et de raison <LatexRenderer latex={"\\frac{1}{3}"} />.
                  </div>
                  <div className="text-center bg-blue-50 p-2 rounded">
                    <LatexRenderer latex={"v_n = v_0 + \\frac{n}{3} = 1 + \\frac{n}{3} = \\frac{n + 3}{3}"} />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">Question 5 : Expression explicite de (uₙ)</strong>
                <div className="mt-2 space-y-2">
                  <div>
                    On a <LatexRenderer latex={"v_n = \\frac{1}{u_n - 2} \\Rightarrow u_n = 2 + \\frac{1}{v_n}"} />.
                  </div>
                  <div className="space-y-2">
                    <div className="text-center">
                      <LatexRenderer latex={"u_n = 2 + \\frac{1}{\\frac{n+3}{3}} = 2 + \\frac{3}{n+3}"} />
                    </div>
                    <div className="text-center bg-blue-50 p-2 rounded">
                      <LatexRenderer latex={"u_n = \\frac{2(n+3) + 3}{n + 3} = \\frac{2n + 9}{n + 3}"} />
                    </div>
                  </div>
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
              <p>Soit <LatexRenderer latex={"(u_n)_{n \\in \\mathbb{N}}"} /> une suite telle que <LatexRenderer latex={"u_n = 2n + 5"} /> pour tout <LatexRenderer latex={"n \\in \\mathbb{N}"} />.</p>
              <p>Montrer que cette suite est strictement croissante.</p>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-blue-600">Méthode :</strong> Pour montrer qu'une suite est strictement croissante, on montre que <LatexRenderer latex={"u_{n+1} > u_n"} /> pour tout <LatexRenderer latex={"n"} />.
              </div>
              <div>
                <strong className="text-blue-600">Calcul :</strong>
                <div className="space-y-2 mt-2">
                  <div className="text-center">
                    <LatexRenderer latex={"u_{n+1} - u_n = (2(n+1) + 5) - (2n + 5)"} />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex={"= 2n + 2 + 5 - 2n - 5 = 2"} />
                  </div>
                </div>
              </div>
              <div>
                <strong className="text-blue-600">Conclusion :</strong>
                <div className="text-center bg-blue-50 p-2 rounded mt-2">
                  Comme <LatexRenderer latex={"u_{n+1} - u_n = 2 > 0"} /> pour tout <LatexRenderer latex={"n \\in \\mathbb{N}"} />, la suite est strictement croissante.
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
              <p>Soit <LatexRenderer latex={"(v_n)_{n \\in \\mathbb{N}}"} /> une suite telle que <LatexRenderer latex={"v_n = \\frac{1}{n+2}"} /> pour tout <LatexRenderer latex={"n \\in \\mathbb{N}"} />.</p>
              <p>Montrer que cette suite est strictement décroissante.</p>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-blue-600">Méthode :</strong> Pour montrer qu'une suite est strictement décroissante, on montre que <LatexRenderer latex={"v_{n+1} < v_n"} /> pour tout <LatexRenderer latex={"n"} />.
              </div>
              <div>
                <strong className="text-blue-600">Calcul :</strong>
                <div className="space-y-2 mt-2">
                  <div className="text-center">
                    <LatexRenderer latex={"v_{n+1} - v_n = \\frac{1}{(n+1)+2} - \\frac{1}{n+2} = \\frac{1}{n+3} - \\frac{1}{n+2}"} />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex={"= \\frac{(n+2) - (n+3)}{(n+3)(n+2)} = \\frac{-1}{(n+3)(n+2)}"} />
                  </div>
                </div>
              </div>
              <div>
                <strong className="text-blue-600">Conclusion :</strong>
                <div className="text-center bg-blue-50 p-2 rounded mt-2">
                  Comme <LatexRenderer latex={"v_{n+1} - v_n = \\frac{-1}{(n+3)(n+2)} < 0"} /> pour tout <LatexRenderer latex={"n \\in \\mathbb{N}"} />, la suite est strictement décroissante.
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex8"
          title="Exercice 8"
          difficulty="Moyen"
          content={
            <div>
              <p>Soit <LatexRenderer latex={"(w_n)_{n \\in \\mathbb{N}}"} /> une suite définie par <LatexRenderer latex={"w_0 = 1"} /> et <LatexRenderer latex={"w_{n+1} = \\frac{w_n + 4}{2}"} /> pour tout <LatexRenderer latex={"n \\in \\mathbb{N}"} />.</p>
              <p>Montrer que pour tout <LatexRenderer latex={"n \\in \\mathbb{N}"} />, on a <LatexRenderer latex={"w_n \\leq 4"} />.</p>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-blue-600">Démonstration par récurrence :</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <strong>• Initialisation :</strong> <LatexRenderer latex={"w_0 = 1 \\leq 4"} /> donc la propriété est vraie au rang 0.
                  </div>
                  <div>
                    <strong>• Hérédité :</strong> Supposons <LatexRenderer latex={"w_n \\leq 4"} />. Montrons que <LatexRenderer latex={"w_{n+1} \\leq 4"} />.
                    <div className="space-y-2 mt-2">
                      <div className="text-center">
                        <LatexRenderer latex={"w_{n+1} = \\frac{w_n + 4}{2} \\leq \\frac{4 + 4}{2} = \\frac{8}{2} = 4"} />
                      </div>
                    </div>
                    Donc <LatexRenderer latex={"w_{n+1} \\leq 4"} />.
                  </div>
                  <div>
                    <strong>• Conclusion :</strong> Par récurrence :
                    <div className="text-center bg-blue-50 p-2 rounded mt-2">
                      <LatexRenderer latex={"\\forall n \\in \\mathbb{N}, \\quad w_n \\leq 4"} />
                    </div>
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
              <p>Soit <LatexRenderer latex={"(a_n)_{n \\geq 1}"} /> une suite définie par <LatexRenderer latex={"a_1 = 2"} /> et <LatexRenderer latex={"a_{n+1} = \\sqrt{2a_n}"} /> pour tout <LatexRenderer latex={"n \\geq 1"} />.</p>
              <div className="space-y-2">
                <p><strong>1.</strong> Montrer que <LatexRenderer latex={"a_n > 0"} /> pour tout <LatexRenderer latex={"n \\geq 1"} />.</p>
                <p><strong>2.</strong> Montrer que <LatexRenderer latex={"a_n \\leq 2"} /> pour tout <LatexRenderer latex={"n \\geq 1"} />.</p>
              </div>
            </div>
          }
          correction={
            <div className="space-y-6">
              <div>
                <strong className="text-blue-600">Question 1 : Positivité de la suite</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <strong>• Initialisation :</strong> <LatexRenderer latex={"a_1 = 2 > 0"} /> donc la propriété est vraie au rang 1.
                  </div>
                  <div>
                    <strong>• Hérédité :</strong> Supposons <LatexRenderer latex={"a_n > 0"} />. Alors :
                    <div className="text-center mt-2">
                      <LatexRenderer latex={"a_{n+1} = \\sqrt{2a_n} > 0"} />
                    </div>
                    car la racine carrée d'un nombre positif est positive.
                  </div>
                  <div>
                    <strong>• Conclusion :</strong> Par récurrence, <LatexRenderer latex={"a_n > 0"} /> pour tout <LatexRenderer latex={"n \\geq 1"} />.
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">Question 2 : Majoration par 2</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <strong>• Initialisation :</strong> <LatexRenderer latex={"a_1 = 2 \\leq 2"} /> donc la propriété est vraie au rang 1.
                  </div>
                  <div>
                    <strong>• Hérédité :</strong> Supposons <LatexRenderer latex={"a_n \\leq 2"} />. Montrons que <LatexRenderer latex={"a_{n+1} \\leq 2"} />.
                    <div className="space-y-2 mt-2">
                      <div>
                        Comme <LatexRenderer latex={"a_n \\leq 2"} />, on a <LatexRenderer latex={"2a_n \\leq 4"} />.
                      </div>
                      <div>
                        En prenant la racine carrée (fonction croissante sur <LatexRenderer latex={"\\mathbb{R}_+"} />) :
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"a_{n+1} = \\sqrt{2a_n} \\leq \\sqrt{4} = 2"} />
                      </div>
                    </div>
                  </div>
                  <div>
                    <strong>• Conclusion :</strong> Par récurrence :
                    <div className="text-center bg-blue-50 p-2 rounded mt-2">
                      <LatexRenderer latex={"\\forall n \\geq 1, \\quad a_n \\leq 2"} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex10"
          title="Exercice 10"
          difficulty="Facile"
          content={
            <div>
              <div className="mb-2">
                On considère la suite <LatexRenderer latex={"(u_n)_{n \\in \\mathbb{N}}"} /> définie par
                <LatexRenderer latex={"u_n = \\frac{3n+1}{n+1}"} /> pour tout <LatexRenderer latex={"n \\in \\mathbb{N}"} />.
              </div>
              <ol className="list-decimal ml-6">
                <li>Montrer que <LatexRenderer latex={"(u_n)_{n \\in \\mathbb{N}}"}/> est majorée par 3.</li>
                <li>En déduire qu'elle est bornée.</li>
              </ol>
            </div>
          }
          correction={
            <div>
              <ol className="list-decimal ml-6 mb-2">
                <li>
                  <span>
                    On veut montrer que pour tout <LatexRenderer latex={"n"} />, <LatexRenderer latex={"u_n \\leq 3"} />.
                    <br />
                    Calculons :
                  </span>
                  <LatexRenderer latex={
                    "u_n - 3 = \\frac{3n+1}{n+1} - 3 = \\frac{3n+1 - 3(n+1)}{n+1} = \\frac{3n+1-3n-3}{n+1} = \\frac{-2}{n+1} \\leq 0"
                  } />
                  <span>
                    Donc pour tout <LatexRenderer latex={"n \\in \\mathbb{N}"} />, <LatexRenderer latex={"u_n \\leq 3"} />.
                  </span>
                </li>
                <li>
                  <span>
                    On sait déjà que la suite est majorée par 3. Cherchons une minoration.
                    <br />
                    Pour tout <LatexRenderer latex={"n \\in \\mathbb{N}"} />, <LatexRenderer latex={"3n+1 \\geq 1"} /> et <LatexRenderer latex={"n+1 \\geq 1"} />, donc
                    <LatexRenderer latex={"u_n = \\frac{3n+1}{n+1} \\geq 0"} />.
                    <br />
                    On a donc <LatexRenderer latex={"0 \\leq u_n \\leq 3"} /> pour tout <LatexRenderer latex={"n \\in \\mathbb{N}"} />.
                    <br />
                    Conclusion : la suite <LatexRenderer latex={"(u_n)_{n \\in \\mathbb{N}}"}/> est bornée.
                  </span>
                </li>
              </ol>
            </div>
          }
        />

        <ExerciseCard
          id="ex11"
          title="Exercice 11"
          difficulty="Avancé"
          content={
            <>
              <div>
                Soit <LatexRenderer latex={"(u_n)_{n\\in\\mathbb{N}}"} /> la suite définie sur <LatexRenderer latex={"\\mathbb{N}"} /> par :<br />
                <LatexRenderer latex={"u_0 = 3 \\quad \\text{et}\\quad \\forall n \\in \\mathbb{N} \\quad u_{n+1} = \\frac{2u_n + 1}{u_n + 2}"} />
              </div>
              <div className="mt-2">
                Le but de l'exercice est d'exprimer <LatexRenderer latex={"u_n"} /> en fonction de <LatexRenderer latex={"n"} />.<br />
                <ol className="mt-2 space-y-1 list-decimal ml-5">
                  <li>
                    Montrer que la suite <LatexRenderer latex={"(u_n)"} /> n'est ni arithmétique, ni géométrique.
                  </li>
                  <li>
                    Soit <LatexRenderer latex={"(v_n)_{n\\in\\mathbb{N}}"} /> définie par
                    <LatexRenderer latex={"\\forall n \\in \\mathbb{N},\\quad v_n = \\frac{1 + u_n}{2 - 2u_n}"} /><br />
                    Montrer que <LatexRenderer latex={"(v_n)"} /> est géométrique. En déduire l'expression de <LatexRenderer latex={"v_n"} /> en fonction de <LatexRenderer latex={"n"} />.
                  </li>
                  <li>
                    Montrer que <LatexRenderer latex={"\\forall n \\in \\mathbb{N},\\quad v_n \\neq -\\frac{1}{2}"} /> puis exprimer <LatexRenderer latex={"u_n"} /> en fonction de <LatexRenderer latex={"v_n"} />.
                  </li>
                  <li>
                    En déduire l'expression de <LatexRenderer latex={"u_n"} /> en fonction de <LatexRenderer latex={"n"} />.
                  </li>
                </ol>
              </div>
              <div className="mt-2 italic text-slate-600 text-sm">
                Remarque : on admet provisoirement que les suites <LatexRenderer latex={"(u_n)"} /> et <LatexRenderer latex={"(v_n)"} /> sont définies pour tout <LatexRenderer latex={"n \\in \\mathbb{N}"} />.
              </div>
            </>
          }
          correction={
            <>
              <div className="mb-2 font-semibold">1. Calcul des premiers termes et nature de la suite :</div>
              <div>
                <LatexRenderer latex={"u_1 = \\frac{2 \\times 3 + 1}{3 + 2} = \\frac{7}{5},\\quad u_2 = \\frac{2 \\times \\frac{7}{5} + 1}{\\frac{7}{5} + 2} = \\frac{19}{12}"} />
                <br />
                Calculons la raison éventuelle (arithmétique) :<br />
                <LatexRenderer latex={"u_1 - u_0 = \\frac{7}{5} - 3 = -\\frac{8}{5} \\neq u_2 - u_1 = \\frac{19}{12} - \\frac{7}{5} = \\frac{11}{60}"} />
                Donc la suite n'est pas arithmétique.<br />
                Calculons la raison éventuelle (géométrique) :<br />
                <LatexRenderer latex={"\\frac{u_1}{u_0} = \\frac{7}{15}, \\quad \\frac{u_2}{u_1} = \\frac{19}{12} \\div \\frac{7}{5} = \\frac{95}{84}"} />
                Donc la suite n'est pas géométrique.
              </div>

              <div className="mb-2 mt-4 font-semibold">2. Étude de la suite <LatexRenderer latex={"(v_n)"} /> :</div>
              <div>
                On pose <LatexRenderer latex={"v_n = \\frac{1 + u_n}{2 - 2u_n}"} />.<br />
                Montrons que <LatexRenderer latex={"(v_n)"} /> est géométrique :
                <br />
                <LatexRenderer latex={
                  "v_{n+1} = \\frac{1 + u_{n+1}}{2 - 2u_{n+1}}"
                } /><br />
                On remplace <LatexRenderer latex={"u_{n+1} = \\frac{2u_n + 1}{u_n + 2}"} /> et on simplifie (détails omis ici pour compacité) pour obtenir :
                <br />
                <LatexRenderer latex={"v_{n+1} = 3v_n"} />
                <br />
                Donc <LatexRenderer latex={"(v_n)"} /> est géométrique de raison 3 et de premier terme <LatexRenderer latex={"v_0 = \\frac{1 + 3}{2 - 2 \\times 3} = \\frac{4}{-4} = -1"} />.<br />
                Donc <LatexRenderer latex={"v_n = -3^n"} />.
              </div>

              <div className="mb-2 mt-4 font-semibold">3. Étude des valeurs interdites :</div>
              <div>
                Pour tout <LatexRenderer latex={"n \\in \\mathbb{N}"} />, <LatexRenderer latex={"v_n = -3^n \\neq -\\frac{1}{2}"} />.
              </div>

              <div className="mb-2 mt-4 font-semibold">4. Expression explicite de <LatexRenderer latex={"u_n"} /> :</div>
              <div>
                Inversion de la formule : <LatexRenderer latex={"v_n = \\frac{1 + u_n}{2 - 2u_n}"} /><br />
                <LatexRenderer latex={"\\Rightarrow (2 - 2v_n) v_n = 1 + u_n"} /> <br />
                Après simplification et résolution : <LatexRenderer latex={"u_n = \\frac{2v_n - 1}{1 + 2v_n}"} />
                <br />
                On remplace <LatexRenderer latex={"v_n = -3^n"} /> :<br />
                <LatexRenderer latex={
                  "u_n = \\frac{2 \\times (-3^n) - 1}{1 + 2 \\times (-3^n)} = \\frac{-2 \\times 3^n - 1}{1 - 2 \\times 3^n}"
                } />
                <br />
                Ou bien, on peut écrire aussi : <LatexRenderer latex={"u_n = \\frac{2 \\times 3^n + 1}{2 \\times 3^n - 1}"} /> en factorisant par <LatexRenderer latex={"-1"} />.
              </div>
            </>
          }
        />

        <ExerciseCard
          id="ex12"
          title="Exercice 12"
          difficulty="Avancé"
          content={
            <div>
              <p><strong>Énoncé :</strong> Dans chacun des cas suivants, on cherche à exprimer <LatexRenderer latex={"u_n"} /> en fonction de <LatexRenderer latex={"n"} />.</p>
              <div className="space-y-3 mt-4">
                <div>
                  <strong>1.</strong> <LatexRenderer latex={"u_0 = 2, u_1 = 5, \\quad \\forall n \\in \\mathbb{N}, u_{n+2} = -u_{n+1} + 6u_n"} />
                </div>
                <div>
                  <strong>2.</strong> <LatexRenderer latex={"u_0 = 1, u_1 = 2, \\quad \\forall n \\in \\mathbb{N}^*, 4u_{n+1} = 4u_n - u_{n-1}"} />
                </div>
                <div>
                  <strong>3.</strong> <LatexRenderer latex={"u_0 = 0, u_1 = 1, \\quad \\forall n \\in \\mathbb{N}, u_{n+2} - u_{n+1} - u_n = 0"} />
                </div>
              </div>
            </div>
          }
          correction={
            <div className="space-y-6">
              <div>
                <strong className="text-blue-600">1. Première suite :</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    On reconnaît une relation de récurrence d'ordre 2 à coefficients constants.
                    L'équation caractéristique associée est :
                    <div className="text-center mt-2">
                      <LatexRenderer latex={"r^2 + r - 6 = 0"} />
                    </div>
                    Ses racines sont : <LatexRenderer latex={"r_1 = -3, r_2 = 2"} />
                  </div>
                  <div>
                    La solution générale est donc :
                    <div className="text-center mt-2">
                      <LatexRenderer latex={"u_n = \\lambda (-3)^n + \\mu \\cdot 2^n"} />
                    </div>
                  </div>
                  <div>
                    On utilise les conditions initiales :
                    <div className="text-center mt-2">
                      <LatexRenderer latex={"\\begin{cases} \\lambda + \\mu = 2 \\\\ -3\\lambda + 2\\mu = 5 \\end{cases} \\quad \\Rightarrow \\quad \\lambda = -\\frac{1}{5}, \\mu = \\frac{11}{5}"} />
                    </div>
                  </div>
                  <div>
                    <strong>Conclusion :</strong>
                    <div className="text-center bg-blue-50 p-2 rounded mt-2">
                      <LatexRenderer latex={"\\forall n \\in \\mathbb{N}, \\quad u_n = \\frac{-(-3)^n + 11 \\cdot 2^n}{5}"} />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">2. Deuxième suite :</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    On commence par réécrire la récurrence :
                    <div className="text-center mt-2">
                      <LatexRenderer latex={"4u_{n+1} = 4u_n - u_{n-1} \\Rightarrow 4u_{n+1} - 4u_n + u_{n-1} = 0"} />
                    </div>
                  </div>
                  <div>
                    L'équation caractéristique devient :
                    <div className="text-center mt-2">
                      <LatexRenderer latex={"4r^2 - 4r + 1 = 0 \\Rightarrow r = \\frac{1}{2} \\text{ (racine double)}"} />
                    </div>
                  </div>
                  <div>
                    Donc :
                    <div className="text-center mt-2">
                      <LatexRenderer latex={"u_n = (\\lambda + n\\mu) \\cdot \\left(\\frac{1}{2}\\right)^n"} />
                    </div>
                  </div>
                  <div>
                    Avec les conditions initiales :
                    <div className="text-center mt-2">
                      <LatexRenderer latex={"\\begin{cases} u_0 = \\lambda = 1 \\\\ u_1 = (\\lambda + \\mu) \\cdot \\frac{1}{2} = 2 \\Rightarrow \\mu = 3 \\end{cases}"} />
                    </div>
                  </div>
                  <div>
                    <strong>Conclusion :</strong>
                    <div className="text-center bg-blue-50 p-2 rounded mt-2">
                      <LatexRenderer latex={"\\forall n \\in \\mathbb{N}, \\quad u_n = (1 + 3n) \\cdot \\left(\\frac{1}{2}\\right)^n"} />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">3. Troisième suite :</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    On pose :
                    <div className="text-center mt-2">
                      <LatexRenderer latex={"u_{n+2} = u_{n+1} + u_n \\Rightarrow \\text{équation caractéristique } r^2 - r - 1 = 0"} />
                    </div>
                  </div>
                  <div>
                    Ses racines sont :
                    <div className="text-center mt-2">
                      <LatexRenderer latex={"r_1 = \\frac{1 - \\sqrt{5}}{2}, \\quad r_2 = \\frac{1 + \\sqrt{5}}{2}"} />
                    </div>
                  </div>
                  <div>
                    La solution générale est donc :
                    <div className="text-center mt-2">
                      <LatexRenderer latex={"u_n = \\lambda \\cdot r_1^n + \\mu \\cdot r_2^n"} />
                    </div>
                  </div>
                  <div>
                    Avec :
                    <div className="text-center mt-2">
                      <LatexRenderer latex={"\\begin{cases} \\lambda + \\mu = 0 \\\\ \\lambda r_1 + \\mu r_2 = 1 \\end{cases} \\Rightarrow \\lambda = -\\frac{\\sqrt{5}}{5}, \\mu = \\frac{\\sqrt{5}}{5}"} />
                    </div>
                  </div>
                  <div>
                    <strong>Conclusion :</strong>
                    <div className="text-center bg-blue-50 p-2 rounded mt-2">
                      <LatexRenderer latex={"u_n = \\frac{\\sqrt{5}}{5} \\left( \\left(\\frac{1 + \\sqrt{5}}{2}\\right)^n - \\left(\\frac{1 - \\sqrt{5}}{2}\\right)^n \\right)"} />
                    </div>
                    <div className="text-center text-sm text-slate-600 mt-2">
                      C'est exactement la formule de Binet associée à la suite de Fibonacci.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex10"
          title="Exercice 10"
          difficulty="Avancé"
          content={
            <div>
              <p className="mb-4"><strong>Suite implicite</strong></p>
              <p className="mb-4">Soit <LatexRenderer latex="n \in \mathbb{N}^*" />. On considère la fonction :</p>
              <div className="text-center mb-4">
                <LatexRenderer latex="f_n(x) = x + x^2 + \cdots + x^n = \sum_{k=1}^n x^k" />
              </div>
              <p className="mb-4">On note <LatexRenderer latex="u_n \in \mathbb{R}_+^*" /> l'unique solution de <LatexRenderer latex="f_n(x) = 1" />, c'est-à-dire :</p>
              <div className="text-center mb-6">
                <LatexRenderer latex="x + x^2 + \cdots + x^n = 1" />
              </div>
              
              <ol className="list-decimal ml-6 space-y-3">
                <li>Justifier l'existence et l'unicité de la solution positive.</li>
                <li>Calculer <LatexRenderer latex="u_1" /> et <LatexRenderer latex="u_2" />.</li>
                <li>Montrer que la suite <LatexRenderer latex="(u_n)" /> est décroissante.</li>
                <li>Étudier la convergence de <LatexRenderer latex="(u_n)" />.</li>
                <li>Déterminer la limite de <LatexRenderer latex="u_n^n" />.</li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-6">
              <div>
                <strong className="text-green-600">1. Existence et unicité de la solution positive</strong>
                <div className="mt-2 space-y-2">
                  <p>La fonction <LatexRenderer latex="f_n(x)" /> est un polynôme continu sur <LatexRenderer latex="\mathbb{R}_+" />, avec :</p>
                  <div className="text-center">
                    <LatexRenderer latex="f_n(0) = 0 \quad \text{et} \quad \lim_{x \to +\infty} f_n(x) = +\infty" />
                  </div>
                  <p>Par le théorème des valeurs intermédiaires, il existe au moins une solution positive.</p>
                  <p>De plus, <LatexRenderer latex="f_n'(x) = 1 + 2x + \cdots + nx^{n-1} > 0" /> pour <LatexRenderer latex="x > 0" />, donc <LatexRenderer latex="f_n" /> est strictement croissante sur <LatexRenderer latex="\mathbb{R}_+" />.</p>
                  <div className="text-center bg-green-50 p-3 rounded">
                    <strong>Il y a donc une unique solution positive.</strong>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">2. Calcul de u₁ et u₂</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <strong>Pour n = 1 :</strong>
                    <div className="text-center">
                      <LatexRenderer latex="f_1(x) = x = 1 \Rightarrow u_1 = 1" />
                    </div>
                  </div>
                  <div>
                    <strong>Pour n = 2 :</strong>
                    <div className="space-y-2">
                      <div className="text-center">
                        <LatexRenderer latex="f_2(x) = x + x^2 = 1 \Rightarrow x^2 + x - 1 = 0" />
                      </div>
                      <p>Le discriminant est <LatexRenderer latex="\Delta = 1 + 4 = 5" />. La solution positive est :</p>
                      <div className="text-center bg-green-50 p-2 rounded">
                        <LatexRenderer latex="u_2 = \frac{-1 + \sqrt{5}}{2}" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">3. La suite (uₙ) est décroissante</strong>
                <div className="mt-2 space-y-2">
                  <p>On a :</p>
                  <div className="text-center">
                    <LatexRenderer latex="f_n(u_n) = 1 \quad \text{et} \quad f_{n+1}(u_{n+1}) = f_n(u_{n+1}) + u_{n+1}^{n+1} = 1" />
                  </div>
                  <p>Donc :</p>
                  <div className="text-center">
                    <LatexRenderer latex="f_n(u_{n+1}) = 1 - u_{n+1}^{n+1} < 1 = f_n(u_n)" />
                  </div>
                  <p>Or <LatexRenderer latex="f_n" /> est strictement croissante, donc :</p>
                  <div className="text-center bg-green-50 p-3 rounded">
                    <LatexRenderer latex="u_{n+1} < u_n \Rightarrow (u_n) \text{ est décroissante}" />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">4. Convergence de (uₙ)</strong>
                <div className="mt-2 space-y-3">
                  <p>La suite est décroissante et minorée par 0, donc elle converge. Notons <LatexRenderer latex="\ell = \lim u_n" />.</p>
                  
                  <p>En utilisant la formule de la somme géométrique :</p>
                  <div className="text-center">
                    <LatexRenderer latex="f_n(u_n) = u_n \cdot \frac{1 - u_n^n}{1 - u_n} = 1" />
                  </div>
                  
                  <p>D'où :</p>
                  <div className="text-center">
                    <LatexRenderer latex="u_n(1 - u_n^n) = 1 - u_n \Rightarrow u_n - u_n^{n+1} = 1 - u_n" />
                  </div>
                  
                  <p>Comme <LatexRenderer latex="u_n \leq u_2 < 1" />, on a <LatexRenderer latex="u_n^{n+1} \to 0" />.</p>
                  
                  <p>En passant à la limite :</p>
                  <div className="text-center">
                    <LatexRenderer latex="\ell - 0 = 1 - \ell \Rightarrow 2\ell = 1" />
                  </div>
                  
                  <div className="text-center bg-green-50 p-3 rounded">
                    <LatexRenderer latex="u_n \longrightarrow \frac{1}{2}" />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">5. Limite de uₙⁿ</strong>
                <div className="mt-2 space-y-2">
                  <p>Comme <LatexRenderer latex="0 < u_n < 1" /> pour tout <LatexRenderer latex="n \geq 1" />, et que <LatexRenderer latex="u_n \leq u_2 < 1" />, on a :</p>
                  <div className="text-center">
                    <LatexRenderer latex="0 < u_n^n \leq u_2^n" />
                  </div>
                  <p>Or <LatexRenderer latex="u_2 = \frac{-1 + \sqrt{5}}{2} \approx 0.618 < 1" />, donc <LatexRenderer latex="u_2^n \to 0" />.</p>
                  <p>Par le théorème des gendarmes :</p>
                  <div className="text-center bg-green-50 p-3 rounded">
                    <LatexRenderer latex="u_n^n \longrightarrow 0" />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Remarque</strong>
                <p className="mt-2 text-sm text-gray-600">
                  Cet exercice illustre l'étude d'une suite définie implicitement et met en œuvre plusieurs techniques : 
                  théorème des valeurs intermédiaires, monotonie, convergence, et passage à la limite.
                </p>
              </div>
            </div>
          }
        />

      </div>
    </div>
  );
};

export default Chapitre4SuitesNumeriquesExercicesPage; 