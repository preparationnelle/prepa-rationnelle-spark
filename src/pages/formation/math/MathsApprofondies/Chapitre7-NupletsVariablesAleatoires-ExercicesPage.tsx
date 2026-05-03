import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Star, BookOpen, Lightbulb, Crown } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';

const Chapitre7NupletsVariablesAleatoiresExercicesPage = () => {
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
              {id.replace(/[^0-9]/g, '')}
            </div>
            <h3 className="font-semibold text-slate-900 text-lg">{title}</h3>
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
      chapterNumber={7}
      chapterTitle="n-uplets de variables aléatoires"
      description="Exercices sur les vecteurs aléatoires, lois conjointes, espérance et indépendance."
      slug="nuplets-variables-aleatoires"
      activeSection="exercises"
      titleClassName="text-slate-800"
      showNavigation={true}
      previousChapter={{
        slug: "integration-sur-un-segment",
        title: "Intégration sur un segment"
      }}
      nextChapter={{
        slug: "polynomes",
        title: "Polynômes"
      }}
    >
      <div className="space-y-8">

        {/* Module 1 */}
        <div>
          <DifficultyHeader
            level="Module 1"
            title="Lois conjointes & Marginales"
            icon={BookOpen}
            stars={1}
          />

          <ExerciseCard
            id="ex1-1"
            title="Exercice 1.1"
            difficulty="Fondamental"
            content={
              <div className="space-y-4">
                <p>Soit <LatexRenderer latex="(X, Y)" /> un couple de variables aléatoires discrètes. On donne la loi conjointe :</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-center border-collapse text-sm">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200">
                        <th className="p-2 border border-slate-200">X \ Y</th>
                        <th className="p-2 border border-slate-200">0</th>
                        <th className="p-2 border border-slate-200">1</th>
                        <th className="p-2 border border-slate-200">2</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 font-bold border border-slate-200 bg-slate-50">1</td>
                        <td className="p-2 border border-slate-200">0,1</td>
                        <td className="p-2 border border-slate-200">0,2</td>
                        <td className="p-2 border border-slate-200">0,1</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold border border-slate-200 bg-slate-50">2</td>
                        <td className="p-2 border border-slate-200">0,15</td>
                        <td className="p-2 border border-slate-200">0,25</td>
                        <td className="p-2 border border-slate-200">0,2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>1. Déterminer les lois marginales.</p>
                <p>2. Sont-elles indépendantes ?</p>
                <p>3. Calculer <LatexRenderer latex="E(X), E(Y), E(XY)" />.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p><strong>1. Marginales :</strong> On somme les lignes/colonnes.</p>
                <ul className="list-disc list-inside">
                  <li>Loi de X : <LatexRenderer latex="P(X=1) = 0,4" />, <LatexRenderer latex="P(X=2) = 0,6" />.</li>
                  <li>Loi de Y : <LatexRenderer latex="P(Y=0) = 0,25" />, <LatexRenderer latex="P(Y=1) = 0,45" />, <LatexRenderer latex="P(Y=2) = 0,3" />.</li>
                </ul>
                <p><strong>2. Indépendance :</strong> Testons <LatexRenderer latex="P(X=1, Y=0)" />.</p>
                <p><LatexRenderer latex="P(X=1)P(Y=0) = 0,4 \times 0,25 = 0,1" />. Ça marche. Mais testons <LatexRenderer latex="P(X=1, Y=1) = 0,2" /> vs <LatexRenderer latex="P(X=1)P(Y=1) = 0,4 \times 0,45 = 0,18" />. Différent ! Donc <strong>pas indépendantes</strong>.</p>
                <p><strong>3. Espérances :</strong></p>
                <p><LatexRenderer latex="E(X) = 1(0,4)+2(0,6) = 1,6" />.</p>
                <p><LatexRenderer latex="E(Y) = 1(0,45)+2(0,3) = 1,05" />.</p>
                <p><LatexRenderer latex="E(XY) = \\sum xy P(X=x, Y=y) = 1(1)(0,2)+1(2)(0,1)+2(1)(0,25)+2(2)(0,2) = 0,2+0,2+0,5+0,8 = 1,7" />.</p>
              </div>
            }
          />

          <ExerciseCard
            id="ex1-2"
            title="Exercice 1.2"
            difficulty="Fondamental"
            content={
              <div className="space-y-4">
                <p>Soient <LatexRenderer latex="X_1, X_2, X_3" /> trois v.a. indépendantes suivant <LatexRenderer latex="\\mathcal{B}(0,3)" />.</p>
                <p>1. Loi de <LatexRenderer latex="S = X_1 + X_2 + X_3" />.</p>
                <p>2. Calculer <LatexRenderer latex="P(S=2)" />.</p>
                <p>3. Calculer <LatexRenderer latex="E(S)" /> et <LatexRenderer latex="V(S)" />.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>1. Somme de Bernoulli indépendantes = Binomiale. <LatexRenderer latex="S \\sim \\mathcal{B}(3, 0,3)" />.</p>
                <p>2. <LatexRenderer latex="P(S=2) = \\binom{3}{2} (0,3)^2 (0,7)^1 = 3 \\times 0,09 \\times 0,7 = 0,189" />.</p>
                <p>3. <LatexRenderer latex="E(S) = 3 \\times 0,3 = 0,9" />. <LatexRenderer latex="V(S) = 3 \\times 0,3 \\times 0,7 = 0,63" />.</p>
              </div>
            }
          />
        </div>

        {/* Module 2 */}
        <div>
          <DifficultyHeader
            level="Module 2"
            title="Espérance de somme & Moyenne empirique"
            icon={Lightbulb}
            stars={2}
          />

          <ExerciseCard
            id="ex2-1"
            title="Exercice 2.1"
            difficulty="Moyen"
            content={
              <div>
                <p>Soient <LatexRenderer latex="X_i" /> i.i.d avec <LatexRenderer latex="E(X_i)=\\mu, V(X_i)=\\sigma^2" />. On pose <LatexRenderer latex="\\bar{X}_n = \\frac{1}{n} \\sum X_i" />.</p>
                <p>Calculer <LatexRenderer latex="E(\\bar{X}_n)" /> et <LatexRenderer latex="V(\\bar{X}_n)" />.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p><LatexRenderer latex="E(\\bar{X}_n) = \\frac{1}{n} \\sum E(X_i) = \\frac{1}{n} n\\mu = \\mu" />.</p>
                <p><LatexRenderer latex="V(\\bar{X}_n) = \\frac{1}{n^2} V(\\sum X_i)" /> (car indép) <LatexRenderer latex="= \\frac{1}{n^2} n\\sigma^2 = \\frac{\\sigma^2}{n}" />.</p>
              </div>
            }
          />

          <ExerciseCard
            id="ex2-2"
            title="Exercice 2.2"
            difficulty="Moyen"
            content={
              <div>
                <p><LatexRenderer latex="X \\sim \\mathcal{P}(2), Y \\sim \\mathcal{P}(3), Z \\sim \\mathcal{P}(1)" /> indépendantes.</p>
                <p>1. Loi de <LatexRenderer latex="S = X+Y+Z" />.</p>
                <p>2. <LatexRenderer latex="P(X=2 | S=5)" />.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>1. Somme de Poisson indép = Poisson de la somme. <LatexRenderer latex="S \\sim \\mathcal{P}(6)" />.</p>
                <p>2. <LatexRenderer latex="P(X=2 | S=5) = \\frac{P(X=2, Y+Z=3)}{P(S=5)}" />.</p>
                <p>Numérateur : <LatexRenderer latex="P(X=2)P(Y+Z=3)" /> avec <LatexRenderer latex="Y+Z \\sim \\mathcal{P}(4)" />.</p>
                <p>Calcul : <LatexRenderer latex="\\frac{\\frac{2^2}{2!}e^{-2} \\times \\frac{4^3}{3!}e^{-4}}{\\frac{6^5}{5!}e^{-6}} \\approx 0,329" />.</p>
              </div>
            }
          />
        </div>

        {/* Module 3 */}
        <div>
          <DifficultyHeader
            level="Module 3"
            title="Problèmes de synthèse"
            icon={Crown}
            stars={3}
          />

          <ExerciseCard
            id="ex3-1"
            title="Exercice 3.1"
            difficulty="Avancé"
            content={
              <div>
                <p>Production de pièces : proba défaut <LatexRenderer latex="p=0,02" />. Lot de <LatexRenderer latex="n=100" /> pièces.</p>
                <p>On contrôle 10 lots. <LatexRenderer latex="T" /> = total défauts.</p>
                <p>1. Loi de <LatexRenderer latex="X" /> (1 lot) et approximation.</p>
                <p>2. Estimer <LatexRenderer latex="P(T \\leq 15)" /> (approx normale).</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>1. <LatexRenderer latex="X \\sim \\mathcal{B}(100, 0,02)" />. Approx Poisson <LatexRenderer latex="\\mathcal{P}(2)" />.</p>
                <p>2. <LatexRenderer latex="T = \\sum X_i \\approx \\sum \\mathcal{P}(2) = \\mathcal{P}(20)" />. Espérance 20, Variance 20.</p>
                <p>Approximation Normale : <LatexRenderer latex="T \\sim \\mathcal{N}(20, 20)" />.</p>
                <p><LatexRenderer latex="P(T \\leq 15) = P(Z \\leq \\frac{15-20}{\\sqrt{20}}) = P(Z \\leq -1,11) \\approx 0,13" />.</p>
              </div>
            }
          />
        </div>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre7NupletsVariablesAleatoiresExercicesPage;
