import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Star, Lightbulb, Target, Crown } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';

const Chapitre3SommesProduitsEtCoefficientsBinomiauxExercicesPage = () => {
  const [visibleCorrections, setVisibleCorrections] = useState<{ [key: string]: boolean }>({});

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
    stars,
    color = "slate"
  }: {
    level: string;
    title: string;
    icon: any;
    stars: number;
    color?: string;
  }) => (
    <div className="flex items-center gap-4 mb-6 mt-8 pb-4 border-b border-slate-200">
      <div className={`p-2 bg-slate-50 text-slate-700 rounded-lg border border-slate-200`}>
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h2 className="text-xl font-bold text-slate-800">{level} : {title}</h2>
        <div className="flex gap-1 mt-1">
          {[...Array(stars)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
          {[...Array(4 - stars)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-slate-200" />
          ))}
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
    <Card className="mb-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 bg-white">
      <div className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 font-semibold text-sm">
              {id.split('-')[1]}
            </div>
            <h3 className="font-semibold text-slate-900 text-lg">{title.split(' - ')[1] || title}</h3>
          </div>
          <span className="text-xs font-medium text-slate-500 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
            {difficulty}
          </span>
        </div>

        <div className="mb-6 text-slate-700 leading-relaxed pl-1">
          {content}
        </div>

        <div className="flex flex-col gap-4">
          <Button
            onClick={() => toggleCorrection(id)}
            variant="ghost"
            size="sm"
            className="w-fit text-slate-500 hover:text-slate-900 hover:bg-slate-50 self-start -ml-2"
          >
            {visibleCorrections[id] ? (
              <>
                <ChevronUp className="mr-2 h-4 w-4" />
                Masquer la correction
              </>
            ) : (
              <>
                <ChevronDown className="mr-2 h-4 w-4" />
                Afficher la correction
              </>
            )}
          </Button>

          {visibleCorrections[id] && (
            <div className="bg-slate-50 border-l-2 border-emerald-500 p-6 rounded-r-lg animate-in fade-in slide-in-from-top-2 duration-300">
              <h4 className="font-semibold text-emerald-800 mb-3 text-sm uppercase tracking-wider">Solution détaillée</h4>
              <div className="text-slate-700 leading-relaxed space-y-2">
                {correction}
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );

  return (
    <MathChapterTemplate
      chapterNumber={3}
      chapterTitle="Sommes, produits & coefficients binomiaux"
      description="Formules fermées, manipulations d'indices, produits télescopiques, coefficients « n choisir p » et binôme de Newton"
      slug="sommes-produits-coefficients-binomiaux"
      activeSection="exercises"
      titleClassName="text-slate-800"
      showNavigation={true}
      previousChapter={{
        slug: "ensembles-et-applications",
        title: "Ensembles et applications"
      }}
      nextChapter={{
        slug: "suites-numeriques",
        title: "Suites numériques"
      }}
    >
      <div className="space-y-8">

        {/* Niveau Facile */}
        <div>
          <DifficultyHeader
            level="Niveau Facile"
            title="Quelques sommes à calculer"
            icon={Lightbulb}
            stars={1}
          />

          <ExerciseCard
            id="facile-1"
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
                  <strong className="text-slate-900 font-semibold">Décomposition de la somme :</strong>
                  <div className="mt-2 text-center bg-slate-50 p-2 rounded">
                    <LatexRenderer latex={"\\sum_{k=3}^{n} (2k + 4) = 2 \\sum_{k=3}^{n} k + \\sum_{k=3}^{n} 4"} />
                  </div>
                </div>
                <div>
                  <strong className="text-slate-900 font-semibold">Calcul de chaque partie :</strong>
                  <div className="mt-2 space-y-2">
                    <div className="text-center">
                      <LatexRenderer latex={"\\sum_{k=3}^{n} k = \\sum_{k=0}^{n} k - (0 + 1 + 2) = \\frac{n(n+1)}{2} - 3"} />
                    </div>
                    <div className="text-center">
                      <LatexRenderer latex={"\\sum_{k=3}^{n} 4 = 4(n - 2)"} /> (attention au nombre de termes)
                    </div>
                  </div>
                </div>
                <div>
                  <strong className="text-slate-900 font-semibold">Résultat final :</strong>
                  <div className="mt-2 text-center bg-emerald-50/50 p-2 rounded border border-emerald-100">
                    <LatexRenderer latex={"2\\left( \\frac{n(n+1)}{2} - 3 \\right) + 4(n - 2) = n(n+1) - 6 + 4n - 8 = n^2 + 5n - 14"} />
                  </div>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="facile-2"
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
                  <strong className="text-slate-900 font-semibold">Factorisation :</strong>
                  <div className="mt-2 text-center">
                    <LatexRenderer latex={"\\sum_{k=0}^{n} 3^{k+1} = 3 \\sum_{k=0}^{n} 3^k"} />
                  </div>
                </div>
                <div>
                  <strong className="text-slate-900 font-semibold">Somme géométrique :</strong>
                  <div className="mt-2 text-center">
                    <LatexRenderer latex={"\\sum_{k=0}^{n} 3^k = \\frac{1 - 3^{n+1}}{1 - 3} = \\frac{3^{n+1} - 1}{2}"} />
                  </div>
                </div>
                <div>
                  <strong className="text-slate-900 font-semibold">Résultat final :</strong>
                  <div className="mt-2 text-center bg-emerald-50/50 p-2 rounded border border-emerald-100">
                    <LatexRenderer latex={"\\sum_{k=0}^{n} 3^{k+1} = \\frac{3(3^{n+1} - 1)}{2}"} />
                  </div>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="facile-3"
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
                  <strong className="text-slate-900 font-semibold">Factorisation :</strong>
                  <div className="mt-2 text-center">
                    <LatexRenderer latex={"\\sum_{k=0}^{n} 2^{3k+2} = \\sum_{k=0}^{n} 2^2 \\cdot 2^{3k} = 4 \\sum_{k=0}^{n} (2^3)^k = 4 \\sum_{k=0}^{n} 8^k"} />
                  </div>
                </div>
                <div>
                  <strong className="text-slate-900 font-semibold">Somme géométrique :</strong>
                  <div className="mt-2 text-center">
                    <LatexRenderer latex={"\\sum_{k=0}^{n} 8^k = \\frac{1 - 8^{n+1}}{1 - 8} = \\frac{8^{n+1} - 1}{7}"} />
                  </div>
                </div>
                <div>
                  <strong className="text-slate-900 font-semibold">Résultat final :</strong>
                  <div className="mt-2 text-center bg-emerald-50/50 p-2 rounded border border-emerald-100">
                    <LatexRenderer latex={"\\sum_{k=0}^{n} 2^{3k+2} = \\frac{4(8^{n+1} - 1)}{7}"} />
                  </div>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="facile-4"
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
                  <strong className="text-slate-900 font-semibold">Réécriture :</strong>
                  <div className="mt-2 text-center">
                    <LatexRenderer latex={"\\frac{1}{2^{3k+2}} = \\frac{1}{2^2 \\cdot 2^{3k}} = \\frac{1}{4} \\cdot \\frac{1}{8^k}"} />
                  </div>
                </div>
                <div>
                  <strong className="text-slate-900 font-semibold">Factorisation :</strong>
                  <div className="mt-2 text-center">
                    <LatexRenderer latex={"\\sum_{k=0}^{n} \\frac{1}{2^{3k+2}} = \\frac{1}{4} \\sum_{k=0}^{n} \\left(\\frac{1}{8}\\right)^k"} />
                  </div>
                </div>
                <div>
                  <strong className="text-slate-900 font-semibold">Somme géométrique :</strong>
                  <div className="mt-2 text-center">
                    <LatexRenderer latex={"\\sum_{k=0}^{n} \\left(\\frac{1}{8}\\right)^k = \\frac{1 - \\left(\\frac{1}{8}\\right)^{n+1}}{1 - \\frac{1}{8}} = \\frac{8}{7}\\left(1 - \\left(\\frac{1}{8}\\right)^{n+1}\\right)"} />
                  </div>
                </div>
                <div>
                  <strong className="text-slate-900 font-semibold">Résultat final :</strong>
                  <div className="mt-2 text-center bg-emerald-50/50 p-2 rounded border border-emerald-100">
                    <LatexRenderer latex={"\\sum_{k=0}^{n} \\frac{1}{2^{3k+2}} = \\frac{1}{4} \\cdot \\frac{8}{7}\\left(1 - \\frac{1}{8^{n+1}}\\right) = \\frac{2}{7}\\left(1 - \\frac{1}{8^{n+1}}\\right)"} />
                  </div>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="facile-5"
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
                  <strong className="text-slate-900 font-semibold">Factorisation :</strong>
                  <div className="mt-2 text-center">
                    <LatexRenderer latex={"\\sum_{k=2}^{n} \\frac{-1}{3^k} = -\\sum_{k=2}^{n} \\left(\\frac{1}{3}\\right)^k"} />
                  </div>
                </div>
                <div>
                  <strong className="text-slate-900 font-semibold">Somme partielle (indices 2 à n) :</strong>
                  <div className="mt-2 text-center">
                    <LatexRenderer latex={"\\sum_{k=2}^{n} q^k = q^2 \\frac{1-q^{n-1}}{1-q}"} />
                  </div>
                </div>
                <div>
                  <strong className="text-slate-900 font-semibold">Calcul détaillé :</strong>
                  <div className="mt-2 text-center bg-slate-50 p-2 rounded">
                    <LatexRenderer latex={"-\\left(\\frac{1}{3}\\right)^2 \\frac{1-(1/3)^{n-1}}{1-1/3} = -\\frac{1}{9} \\cdot \\frac{3}{2} \\left(1-\\frac{1}{3^{n-1}}\\right) = -\\frac{1}{6} + \\frac{1}{2 \\cdot 3^n}"} />
                  </div>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="facile-6"
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
                  <strong className="text-slate-900 font-semibold">Factorisation :</strong>
                  <div className="mt-2 text-center">
                    <LatexRenderer latex={"\\sum_{k=0}^{2n} 5^{n+k} = 5^n \\sum_{k=0}^{2n} 5^k"} />
                  </div>
                </div>
                <div>
                  <strong className="text-slate-900 font-semibold">Somme géométrique (2n+1 termes) :</strong>
                  <div className="mt-2 text-center">
                    <LatexRenderer latex={"\\sum_{k=0}^{2n} 5^k = \\frac{1 - 5^{2n+1}}{1 - 5} = \\frac{5^{2n+1} - 1}{4}"} />
                  </div>
                </div>
                <div>
                  <strong className="text-slate-900 font-semibold">Résultat final :</strong>
                  <div className="mt-2 text-center bg-emerald-50/50 p-2 rounded border border-emerald-100">
                    <LatexRenderer latex={"\\sum_{k=0}^{2n} 5^{n+k} = \\frac{5^n (5^{2n+1} - 1)}{4}"} />
                  </div>
                </div>
              </div>
            }
          />
        </div>

        {/* Niveau Intermédiaire */}
        <div>
          <DifficultyHeader
            level="Niveau Intermédiaire"
            title="Calculs un peu plus techniques"
            icon={Target}
            stars={2}
          />

          <ExerciseCard
            id="inter-7"
            title="Exercice 7"
            difficulty="Intermédiaire"
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
                  <strong className="text-slate-900 font-semibold">Développement :</strong>
                  <div className="mt-2 text-center">
                    <LatexRenderer latex={"k(k+1)(k-1) = k(k^2-1) = k^3 - k"} />
                  </div>
                </div>
                <div>
                  <strong className="text-slate-900 font-semibold">Séparation :</strong>
                  <div className="mt-2 text-center">
                    <LatexRenderer latex={"\\sum_{k=0}^{n} (k^3 - k) = \\sum_{k=0}^{n} k^3 - \\sum_{k=0}^{n} k"} />
                  </div>
                </div>
                <div>
                  <strong className="text-slate-900 font-semibold">Formules classiques :</strong>
                  <div className="mt-2 space-y-2 text-center">
                    <LatexRenderer latex={"\\sum_{k=0}^{n} k^3 = \\left(\\frac{n(n+1)}{2}\\right)^2 = \\frac{n^2(n+1)^2}{4}"} />
                    <LatexRenderer latex={"\\sum_{k=0}^{n} k = \\frac{n(n+1)}{2}"} />
                  </div>
                </div>
                <div>
                  <strong className="text-slate-900 font-semibold">Résultat après factorisation :</strong>
                  <div className="mt-2 text-center bg-emerald-50/50 p-2 rounded border border-emerald-100">
                    <LatexRenderer latex={"\\frac{n(n+1)}{2} \\left( \\frac{n(n+1)}{2} - 1 \\right) = \\frac{n(n+1)}{2} \\frac{n^2+n-2}{2} = \\frac{n(n+1)(n-1)(n+2)}{4}"} />
                  </div>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="inter-8"
            title="Exercice 8"
            difficulty="Intermédiaire"
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
                  <strong className="text-slate-900 font-semibold">1. Par identification :</strong>
                  <div className="mt-2 space-y-2 ml-4">
                    <LatexRenderer latex={"\\frac{1}{k+1} - \\frac{1}{k+2} = \\frac{(k+2)-(k+1)}{(k+1)(k+2)} = \\frac{1}{(k+1)(k+2)}"} />
                  </div>
                </div>
                <div>
                  <strong className="text-slate-900 font-semibold">2. Somme télescopique :</strong>
                  <div className="mt-2 space-y-2 ml-4">
                    <LatexRenderer latex={"\\sum_{k=0}^{98} \\frac{1}{(k+1)(k+2)} = \\sum_{k=0}^{98} \\left( \\frac{1}{k+1} - \\frac{1}{k+2} \\right)"} />
                    <LatexRenderer latex={"= \\left(\\frac{1}{1} - \\frac{1}{2} \\right) + \\dots + \\left( \\frac{1}{99} - \\frac{1}{100} \\right)"} />
                    <LatexRenderer latex={"= 1 - \\frac{1}{100} = \\frac{99}{100}"} />
                  </div>
                </div>
              </div>
            }
          />
        </div>

        {/* Niveau Difficile */}
        <div>
          <DifficultyHeader
            level="Niveau Avancé"
            title="Démonstrations"
            icon={Crown}
            stars={3}
            color="indigo"
          />

          <ExerciseCard
            id="diff-9"
            title="Exercice 9 - Récurrences classiques"
            difficulty="Difficile"
            content={
              <div>
                <p>Démontrer par récurrence que pour tout <LatexRenderer latex={"n \\in \\mathbb{N}"} /> :</p>
                <div className="space-y-2 mt-2 ml-4">
                  <div>1. <LatexRenderer latex={"\\sum_{k=0}^{n} k = \\frac{n(n+1)}{2}"} /></div>
                  <div>2. <LatexRenderer latex={"\\sum_{k=0}^{n} k^2 = \\frac{n(n+1)(2n+1)}{6}"} /></div>
                  <div>3. <LatexRenderer latex={"\\sum_{k=0}^{n} k^3 = \\frac{n^2(n+1)^2}{4}"} /></div>
                </div>
              </div>
            }
            correction={
              <div className="space-y-6">
                <div>
                  <strong className="text-slate-900 font-semibold">1. Somme des entiers :</strong>
                  <div className="mt-2 space-y-2 ml-2 border-l-2 border-slate-200 pl-3">
                    <p><strong>Initialisation (n=0) :</strong> <LatexRenderer latex={"0 = \\frac{0(1)}{2}"} />. Vrai.</p>
                    <p><strong>Hérédité :</strong> Supposons la formule vraie au rang n.</p>
                    <LatexRenderer latex={"\\sum_{k=0}^{n+1} k = \\frac{n(n+1)}{2} + (n+1) = (n+1)\\left(\\frac{n}{2} + 1\\right) = \\frac{(n+1)(n+2)}{2}"} />
                  </div>
                </div>
                <div>
                  <strong className="text-slate-900 font-semibold">2. Somme des carrés :</strong>
                  <div className="mt-2 space-y-2 ml-2 border-l-2 border-slate-200 pl-3">
                    <p><strong>Hérédité :</strong></p>
                    <LatexRenderer latex={"\\sum_{k=0}^{n+1} k^2 = \\frac{n(n+1)(2n+1)}{6} + (n+1)^2"} />
                    <LatexRenderer latex={"= \\frac{n(n+1)(2n+1) + 6(n+1)^2}{6} = \\frac{n+1}{6} [n(2n+1) + 6(n+1)]"} />
                    <LatexRenderer latex={"= \\frac{n+1}{6} [2n^2 + 7n + 6]"} />
                    <p>Or <LatexRenderer latex={"(n+2)(2(n+1)+1) = (n+2)(2n+3) = 2n^2 + 7n + 6"} />.</p>
                    <p>La formule est donc vérifiée au rang n+1.</p>
                  </div>
                </div>
                <div>
                  <strong className="text-slate-900 font-semibold">3. Somme des cubes :</strong>
                  <div className="mt-2 space-y-2 ml-2 border-l-2 border-slate-200 pl-3">
                    <p>Se traite de façon analogue. <LatexRenderer latex={"\\frac{n^2(n+1)^2}{4} + (n+1)^3 = \\frac{(n+1)^2}{4} [n^2 + 4(n+1)] = \\frac{(n+1)^2(n+2)^2}{4}"} />.</p>
                  </div>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="diff-10"
            title="Exercice 10 - Inégalités"
            difficulty="Difficile"
            content={
              <div>
                <p>Montrer par récurrence les propriétés suivantes :</p>
                <div className="space-y-2 mt-2 ml-4">
                  <div>1. <LatexRenderer latex={"\\forall n \\geq 4, \\quad 2^n \\leq n!"} /></div>
                  <div>2. <LatexRenderer latex={"\\forall x \\geq 0,\\ \\forall n \\in \\mathbb{N},\\ \\ (1 + x)^n \\geq 1 + nx"} /> (Inégalité de Bernoulli)</div>
                </div>
              </div>
            }
            correction={
              <div className="space-y-6">
                <div>
                  <strong className="text-slate-900 font-semibold">1. <LatexRenderer latex={"2^n \\leq n!"} /> :</strong>
                  <div className="mt-2 space-y-2 ml-2 border-l-2 border-slate-200 pl-3">
                    <p><strong>Init (n=4) :</strong> <LatexRenderer latex={"16 \\leq 24"} />. Vrai.</p>
                    <p><strong>Hérédité :</strong> Supposons <LatexRenderer latex={"2^n \\leq n!"} />.</p>
                    <LatexRenderer latex={"2^{n+1} = 2 \\cdot 2^n \\leq 2 \\cdot n!"} />
                    <p>Comme <LatexRenderer latex={"n \\ge 4"} />, <LatexRenderer latex={"2 \\le n+1"} />. Donc <LatexRenderer latex={"2 \\cdot n! \\le (n+1) \\cdot n! = (n+1)!"} />.</p>
                  </div>
                </div>
                <div>
                  <strong className="text-slate-900 font-semibold">2. Bernoulli :</strong>
                  <div className="mt-2 space-y-2 ml-2 border-l-2 border-slate-200 pl-3">
                    <p><strong>Hérédité :</strong> Supposons <LatexRenderer latex={"(1 + x)^n \\geq 1 + nx"} />.</p>
                    <LatexRenderer latex={"(1 + x)^{n+1} = (1 + x)^n (1+x) \\ge (1+nx)(1+x)"} />
                    <LatexRenderer latex={"= 1 + x + nx + nx^2 = 1 + (n+1)x + nx^2"} />
                    <p>Comme <LatexRenderer latex={"nx^2 \\ge 0"} />, on a bien <LatexRenderer latex={"\\dots \\ge 1 + (n+1)x"} />.</p>
                  </div>
                </div>
              </div>
            }
          />
        </div>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre3SommesProduitsEtCoefficientsBinomiauxExercicesPage;
