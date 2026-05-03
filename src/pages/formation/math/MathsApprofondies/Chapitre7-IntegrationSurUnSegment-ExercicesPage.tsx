import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Star, BookOpen, Target, Crown, Lightbulb } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';

const Chapitre7IntegrationSurUnSegmentExercicesPage = () => {
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
      chapterTitle="Intégration sur un segment"
      description="Exercices sur les primitives, intégrales, sommes de Riemann et techniques de calcul."
      slug="integration-sur-un-segment"
      activeSection="exercises"
      titleClassName="text-slate-800"
      showNavigation={true}
      previousChapter={{
        slug: "derivation",
        title: "Dérivation"
      }}
      nextChapter={{
        slug: "nuplets-variables-aleatoires",
        title: "n-uplets de variables aléatoires"
      }}
    >
      <div className="space-y-8">

        {/* Module 1 */}
        <div>
          <DifficultyHeader
            level="Module 1"
            title="Calculs d'Intégrales & Primitives"
            icon={BookOpen}
            stars={1}
          />

          <ExerciseCard
            id="ex1"
            title="Exercice 1"
            difficulty="Facile"
            content={
              <div>
                <p className="mb-4"><strong>Calculer :</strong></p>
                <div className="text-center">
                  <LatexRenderer latex="\int_{-1}^{2} e^{-|x|} \, dx" />
                </div>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>On utilise la relation de Chasles pour séparer l'intégrale en deux : sur <LatexRenderer latex="[-1, 0]" /> où <LatexRenderer latex="|x| = -x" /> et sur <LatexRenderer latex="[0, 2]" /> où <LatexRenderer latex="|x| = x" />.</p>
                <div className="text-center space-y-2">
                  <LatexRenderer latex="\int_{-1}^{0} e^{x} \, dx + \int_{0}^{2} e^{-x} \, dx = [e^x]_{-1}^0 + [-e^{-x}]_0^2" />
                  <LatexRenderer latex="= (1 - e^{-1}) + (-e^{-2} + 1) = 2 - \frac{1}{e} - \frac{1}{e^2}" />
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
                <p className="mb-4"><strong>Calculer :</strong></p>
                <div className="text-center">
                  <LatexRenderer latex="\int_0^n \lfloor x \rfloor \, dx \quad \text{pour } n \in \mathbb{N}^*" />
                </div>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>On décompose l'intégrale sur chaque intervalle entier <LatexRenderer latex="[k, k+1]" /> où la partie entière est constante et vaut <LatexRenderer latex="k" />.</p>
                <div className="text-center space-y-2">
                  <LatexRenderer latex="\int_0^n \lfloor x \rfloor \, dx = \sum_{k=0}^{n-1} \int_k^{k+1} k \, dx = \sum_{k=0}^{n-1} k" />
                  <LatexRenderer latex="= \frac{n(n-1)}{2}" />
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
                <p className="mb-4">Montrer que pour <LatexRenderer latex="x \in ]0,1[" /> et <LatexRenderer latex="n \in \mathbb{N}" /> :</p>
                <div className="text-center">
                  <LatexRenderer latex="0 \leq \int_0^x \frac{t^n}{1 - t} \, dt \leq -\ln(1 - x)" />
                </div>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>Pour <LatexRenderer latex="t \in [0, x] \subset [0, 1[" />, on a <LatexRenderer latex="0 \leq t^n \leq 1" /> (car <LatexRenderer latex="n \geq 0" /> et <LatexRenderer latex="t \leq 1" />) et <LatexRenderer latex="1-t > 0" />.</p>
                <p>Donc <LatexRenderer latex="0 \leq \frac{t^n}{1-t} \leq \frac{1}{1-t}" />.</p>
                <p>Par croissance de l'intégrale :</p>
                <div className="text-center">
                  <LatexRenderer latex="0 \leq \int_0^x \frac{t^n}{1 - t} \, dt \leq \int_0^x \frac{1}{1 - t} \, dt = [-\ln(1-t)]_0^x = -\ln(1-x)" />
                </div>
              </div>
            }
          />
        </div>

        {/* Module 2 */}
        <div>
          <DifficultyHeader
            level="Module 2"
            title="Propriétés & Suites d'intégrales"
            icon={Target}
            stars={2}
          />

          <ExerciseCard
            id="ex4"
            title="Exercice 4"
            difficulty="Moyen"
            content={
              <div>
                <p className="mb-4">On note <LatexRenderer latex="I_n = \int_0^1 \frac{(-t)^n}{1 + t} \, dt" />. Montrer que :</p>
                <div className="text-center">
                  <LatexRenderer latex="\forall n \in \mathbb{N}, \quad 0 \leq |I_n| \leq \ln(2)" />
                </div>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>Par l'inégalité triangulaire :</p>
                <div className="text-center">
                  <LatexRenderer latex="|I_n| \leq \int_0^1 \left| \frac{(-t)^n}{1+t} \right| dt = \int_0^1 \frac{t^n}{1+t} dt" />
                </div>
                <p>Or <LatexRenderer latex="t^n \leq 1" /> et <LatexRenderer latex="\frac{1}{1+t} \geq 0" /> sur <LatexRenderer latex="[0,1]" />. Une majoration grossière par <LatexRenderer latex="\frac{1}{1+t}" /> suffit :</p>
                <div className="text-center">
                  <LatexRenderer latex="\int_0^1 \frac{t^n}{1+t} dt \leq \int_0^1 \frac{1}{1+t} dt = [\ln(1+t)]_0^1 = \ln(2)" />
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
                <p className="mb-4">Étudier le sens de variation de la suite <LatexRenderer latex="(I_n)" /> définie par :</p>
                <div className="text-center">
                  <LatexRenderer latex="I_n = \int_0^1 \frac{e^{nx}}{e^x + 1} \, dx" />
                </div>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>Calculons <LatexRenderer latex="I_{n+1} - I_n = \int_0^1 \frac{e^{(n+1)x} - e^{nx}}{e^x + 1} dx = \int_0^1 \frac{e^{nx}(e^x - 1)}{e^x + 1} dx" />.</p>
                <p>Sur <LatexRenderer latex="[0, 1]" />, <LatexRenderer latex="e^x \geq 1" /> donc l'intégrande est positif.</p>
                <p>La suite est donc croissante.</p>
              </div>
            }
          />

          <ExerciseCard
            id="ex6"
            title="Exercice 6"
            difficulty="Moyen"
            content={
              <div>
                <p className="mb-4">Déterminer la limite de <LatexRenderer latex="I_n = \int_0^1 x^n \ln(x + 1) \, dx" />.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>On majore l'intégrande : <LatexRenderer latex="0 \leq x^n \ln(x+1) \leq x^n \ln(2)" /> sur <LatexRenderer latex="[0, 1]" />.</p>
                <div className="text-center">
                  <LatexRenderer latex="0 \leq I_n \leq \ln(2) \int_0^1 x^n dx = \frac{\ln(2)}{n+1}" />
                </div>
                <p>Par le théorème des gendarmes, <LatexRenderer latex="I_n \to 0" />.</p>
              </div>
            }
          />
        </div>

        {/* Module 3 */}
        <div>
          <DifficultyHeader
            level="Module 3"
            title="Techniques avancées (IPP & Changement de variable)"
            icon={Crown}
            stars={3}
          />

          <ExerciseCard
            id="ex7"
            title="Exercice 7"
            difficulty="Moyen"
            content={
              <div>
                <p className="mb-4">Calculer par IPP : <LatexRenderer latex="I = \int_1^2 \frac{\ln(x)}{x^2} \, dx" /></p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>IPP avec <LatexRenderer latex="u = \ln x" /> et <LatexRenderer latex="v' = 1/x^2" />. Donc <LatexRenderer latex="u' = 1/x" /> et <LatexRenderer latex="v = -1/x" />.</p>
                <div className="text-center">
                  <LatexRenderer latex="I = [-\frac{\ln x}{x}]_1^2 + \int_1^2 \frac{1}{x^2} dx = -\frac{\ln 2}{2} + [-\frac{1}{x}]_1^2" />
                  <LatexRenderer latex="= -\frac{\ln 2}{2} - \frac{1}{2} + 1 = \frac{1 - \ln 2}{2}" />
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
                <p className="mb-4">Calculer par IPP : <LatexRenderer latex="I = \int_0^1 (x - 1) e^{2x} \, dx" /></p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>IPP avec <LatexRenderer latex="u = x-1, v' = e^{2x}" />. Donc <LatexRenderer latex="u' = 1, v = \frac{1}{2}e^{2x}" />.</p>
                <div className="text-center">
                  <LatexRenderer latex="I = [\frac{1}{2}(x-1)e^{2x}]_0^1 - \frac{1}{2}\int_0^1 e^{2x} dx = (0 - (-\frac{1}{2})) - \frac{1}{4}[e^{2x}]_0^1" />
                  <LatexRenderer latex="= \frac{1}{2} - \frac{e^2 - 1}{4} = \frac{3 - e^2}{4}" />
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
                <p className="mb-4">Calculer <LatexRenderer latex="\int_0^1 \ln(2 + x) \, dx" /> à l'aide d'une IPP judicieuse.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>On utilise l'astuce <LatexRenderer latex="1 \cdot \ln(2+x)" />. <LatexRenderer latex="u = \ln(2+x), v' = 1 \implies u' = \frac{1}{2+x}, v = 2+x" /> (choix astucieux de la constante pour <LatexRenderer latex="v" />).</p>
                <div className="text-center">
                  <LatexRenderer latex="I = [(2+x)\ln(2+x)]_0^1 - \int_0^1 dx = 3\ln 3 - 2\ln 2 - 1" />
                </div>
                <p>Si on avait pris <LatexRenderer latex="v=x" />, on aurait dû calculer <LatexRenderer latex="\int \frac{x}{2+x} dx" /> ensuite.</p>
              </div>
            }
          />

          <ExerciseCard
            id="ex10"
            title="Exercice 10"
            difficulty="Difficile"
            content={
              <div>
                <p className="mb-4">Calculer <LatexRenderer latex="I = \int_0^1 \frac{x}{2x + 1} \, dx" />.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>On écrit <LatexRenderer latex="\frac{x}{2x+1} = \frac{1}{2} \frac{2x+1-1}{2x+1} = \frac{1}{2} (1 - \frac{1}{2x+1})" />.</p>
                <div className="text-center">
                  <LatexRenderer latex="I = \frac{1}{2} [x - \frac{1}{2}\ln(2x+1)]_0^1 = \frac{1}{2} (1 - \frac{\ln 3}{2}) = \frac{2 - \ln 3}{4}" />
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="ex11"
            title="Exercice 11"
            difficulty="Expert"
            content={
              <div>
                <p className="mb-4">En posant <LatexRenderer latex="x = \ln t" />, calculer <LatexRenderer latex="I = \int_0^1 \frac{dx}{1 + e^x}" />.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p><LatexRenderer latex="x = \ln t \iff t = e^x" />. <LatexRenderer latex="dx = \frac{dt}{t}" />. Bornes : <LatexRenderer latex="1 \to e" />.</p>
                <div className="text-center">
                  <LatexRenderer latex="I = \int_1^e \frac{1}{1+t} \frac{dt}{t} = \int_1^e (\frac{1}{t} - \frac{1}{t+1}) dt" />
                  <LatexRenderer latex="= [\ln t - \ln(t+1)]_1^e = 1 - \ln(e+1) + \ln 2 = 1 + \ln(\frac{2}{e+1})" />
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="ex12"
            title="Exercice 12"
            difficulty="Expert"
            content={
              <div>
                <p className="mb-4">Calculer <LatexRenderer latex="\int_0^1 \frac{e^x}{1+e^x} dx" />.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>Forme <LatexRenderer latex="u'/u" />.</p>
                <div className="text-center">
                  <LatexRenderer latex="[\ln(1+e^x)]_0^1 = \ln(1+e) - \ln 2 = \ln(\frac{e+1}{2})" />
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="ex13"
            title="Exercice 13"
            difficulty="Expert"
            content={
              <div>
                <p className="mb-4"><strong>Étude de fonction définie par une intégrale</strong></p>
                <p className="mb-4">Soit <LatexRenderer latex="F(x) = \int_0^1 \frac{e^t}{t+x} dt" /> sur <LatexRenderer latex="\mathbb{R}_+^*" />.</p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Montrer que F est décroissante.</li>
                  <li>Montrer que <LatexRenderer latex="F'(x) + F(x) = \frac{e}{x+1} - \frac{1}{x}" />.</li>
                  <li>Limite en <LatexRenderer latex="+\infty" />.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>1. <LatexRenderer latex="x \mapsto \frac{1}{t+x}" /> décroissante, intégrale conserve l'ordre <LatexRenderer latex="\implies F" /> décroissante.</p>
                <p>2. IPP ou dérivation sous intégrale. <LatexRenderer latex="F'(x) = \int_0^1 \frac{-e^t}{(t+x)^2} dt" />. Puis IPP sur <LatexRenderer latex="F(x)" /> avec <LatexRenderer latex="u=e^t, v'=\frac{1}{t+x}" />...</p>
                <p>3. Majoration : <LatexRenderer latex="0 < F(x) < \frac{1}{x} \int_0^1 e^t dt = \frac{e-1}{x} \to 0" />.</p>
              </div>
            }
          />

        </div>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre7IntegrationSurUnSegmentExercicesPage;