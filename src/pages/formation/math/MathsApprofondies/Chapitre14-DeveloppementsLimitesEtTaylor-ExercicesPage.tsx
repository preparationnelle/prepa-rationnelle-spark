import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Star, BookOpen, Crown } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';

const Chapitre14DeveloppementsLimitesEtTaylorExercicesPage = () => {
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
  }: {
    level: string;
    title: string;
    icon: any;
    stars: number;
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
          {[...Array(3 - stars > 0 ? 3 - stars : 0)].map((_, i) => (
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
              {id.replace(/[^0-9.]/g, '')}
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
      chapterNumber={14}
      chapterTitle="Développements Limités & Taylor"
      description="Exercices sur les calculs de DL, la formule de Taylor et les études asymptotiques."
      slug="developpements-limites-formule-de-taylor"
      activeSection="exercises"
      showNavigation={true}
      previousChapter={{
        slug: "series-numeriques",
        title: "Séries Numériques (Ch 13)"
      }}
      nextChapter={{
        slug: "integrales-impropres-et-criteres",
        title: "Intégrales impropres (Ch 15)"
      }}
    >
      <div className="space-y-8">

        {/* Module 1 */}
        <div>
          <DifficultyHeader
            level="Module 1"
            title="Calculs de DLs"
            icon={BookOpen}
            stars={2}
          />

          <ExerciseCard
            id="14.1"
            title="Fonctions usuelles"
            difficulty="Facile"
            content={
              <div className="space-y-4">
                <p>Calculer les DL en 0 à l'ordre 3 de :</p>
                <ul className="list-disc list-inside">
                  <li><LatexRenderer latex="f(x) = \sqrt{1+x}" /></li>
                  <li><LatexRenderer latex="g(x) = \frac{1}{1+e^x}" /></li>
                </ul>
              </div>
            }
            correction={
              <div className="space-y-6">
                <div>
                  <h5 className="font-semibold text-slate-800 mb-2">1. Fonction <LatexRenderer latex="f(x) = \sqrt{1+x}" /></h5>
                  <p className="mb-2">
                    On utilise le développement usuel de <LatexRenderer latex="(1+x)^\alpha" /> en 0 avec <LatexRenderer latex="\alpha = 1/2" />.
                    La formule est :
                  </p>
                  <div className="bg-white border border-slate-200 rounded p-3 mb-2 text-center">
                    <LatexRenderer latex="(1+x)^\alpha = 1 + \alpha x + \frac{\alpha(\alpha-1)}{2}x^2 + \frac{\alpha(\alpha-1)(\alpha-2)}{6}x^3 + o(x^3)" />
                  </div>
                  <p className="mb-2">On calcule les coefficients :</p>
                  <ul className="list-disc list-inside space-y-1 mb-2 ml-2">
                    <li>Ordre 1 : <LatexRenderer latex="\alpha = 1/2" /></li>
                    <li>Ordre 2 : <LatexRenderer latex="\frac{1/2 \times (-1/2)}{2} = -1/8" /></li>
                    <li>Ordre 3 : <LatexRenderer latex="\frac{1/2 \times (-1/2) \times (-3/2)}{6} = \frac{3/8}{6} = 1/16" /></li>
                  </ul>
                  <p className="font-medium">
                    <LatexRenderer latex="\implies \sqrt{1+x} = 1 + \frac{1}{2}x - \frac{1}{8}x^2 + \frac{1}{16}x^3 + o(x^3)" />
                  </p>
                </div>

                <div className="border-t border-slate-200 pt-4">
                  <h5 className="font-semibold text-slate-800 mb-2">2. Fonction <LatexRenderer latex="g(x) = \frac{1}{1+e^x}" /></h5>
                  <p className="mb-2">
                    On commence par le DL de <LatexRenderer latex="e^x" /> à l'ordre 3 :
                    <br />
                    <LatexRenderer latex="e^x = 1 + x + \frac{x^2}{2} + \frac{x^3}{6} + o(x^3)" />
                  </p>
                  <p className="mb-2">
                    Donc <LatexRenderer latex="1+e^x = 2 + x + \frac{x^2}{2} + \frac{x^3}{6} + o(x^3)" />.
                  </p>
                  <p className="mb-2">
                    On factorise par 2 pour se ramener à la forme <LatexRenderer latex="\frac{1}{2(1+u)}" /> :
                  </p>
                  <div className="bg-white border border-slate-200 rounded p-3 mb-2 text-center">
                    <LatexRenderer latex="g(x) = \frac{1}{2} \times \frac{1}{1 + \left(\frac{x}{2} + \frac{x^2}{4} + \frac{x^3}{12} + o(x^3)\right)}" />
                  </div>
                  <p className="mb-2">
                    On pose <LatexRenderer latex="u = \frac{x}{2} + \frac{x^2}{4} + \frac{x^3}{12}" /> et on utilise <LatexRenderer latex="\frac{1}{1+u} = 1 - u + u^2 - u^3 + o(u^3)" /> (attention à ne garder que les termes d'ordre <LatexRenderer latex="\le 3" />).
                  </p>
                  <ul className="list-disc list-inside space-y-1 mb-2 ml-2">
                    <li><LatexRenderer latex="u = \frac{x}{2} + \frac{x^2}{4} + \frac{x^3}{12}" /></li>
                    <li><LatexRenderer latex="u^2 = (\frac{x}{2})^2 + 2(\frac{x}{2})(\frac{x^2}{4}) + \dots = \frac{x^2}{4} + \frac{x^3}{4} + o(x^3)" /></li>
                    <li><LatexRenderer latex="u^3 = (\frac{x}{2})^3 + \dots = \frac{x^3}{8} + o(x^3)" /></li>
                  </ul>
                  <p className="mb-2">
                    En remplaçant (calculs intermédiaires) :
                    <br />
                    <LatexRenderer latex="1 - u + u^2 - u^3 = 1 - (\frac{x}{2} + \frac{x^2}{4} + \frac{x^3}{12}) + (\frac{x^2}{4} + \frac{x^3}{4}) - (\frac{x^3}{8}) + o(x^3)" />
                    <br />
                    Termes en <LatexRenderer latex="x" /> : <LatexRenderer latex="-1/2" />
                    <br />
                    Termes en <LatexRenderer latex="x^2" /> : <LatexRenderer latex="-1/4 + 1/4 = 0" />
                    <br />
                    Termes en <LatexRenderer latex="x^3" /> : <LatexRenderer latex="-1/12 + 1/4 - 1/8 = \frac{-2 + 6 - 3}{24} = \frac{1}{24}" />
                  </p>
                  <p>
                    Enfin, ne pas oublier le facteur <LatexRenderer latex="1/2" /> devant tout :
                    <br />
                    <LatexRenderer latex="g(x) = \frac{1}{2}\left(1 - \frac{1}{2}x + \frac{1}{24}x^3\right) + o(x^3) = \frac{1}{2} - \frac{1}{4}x + \frac{1}{48}x^3 + o(x^3)" />.
                  </p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="14.2"
            title="Limites"
            difficulty="Moyen"
            content={
              <div className="space-y-4">
                <p>Déterminer <LatexRenderer latex="\lim_{x \to 0} \frac{\ln(1+x) - \sin x}{x^2}" />.</p>
              </div>
            }
            correction={
              <div className="space-y-6">
                <p>
                  Pour lever une forme indéterminée du type <LatexRenderer latex="0/0" />, on effectue un développement limité du numérateur.
                  Le dénominateur étant <LatexRenderer latex="x^2" />, nous avons besoin d'un DL à l'ordre 2 (ou plus) pour obtenir une constante non nulle.
                </p>

                <div>
                  <h5 className="font-semibold text-slate-800 mb-1">Étape 1 : DL des termes</h5>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li><LatexRenderer latex="\ln(1+x) = x - \frac{x^2}{2} + o(x^2)" /></li>
                    <li><LatexRenderer latex="\sin(x) = x + o(x^2)" /> (le terme suivant est en <LatexRenderer latex="x^3" />)</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-slate-800 mb-2">Étape 2 : Calcul du numérateur</h5>
                  <p className="mb-3">
                    <LatexRenderer latex="\displaystyle \ln(1+x) - \sin x = \left(x - \frac{x^2}{2} + o(x^2)\right) - \left(x + o(x^2)\right)" />
                    <br />
                    <span className="block mt-1"><LatexRenderer latex="\displaystyle = x - x - \frac{x^2}{2} + o(x^2)" /></span>
                    <br />
                    <span className="block mt-1"><LatexRenderer latex="\displaystyle = -\frac{x^2}{2} + o(x^2)" /></span>
                  </p>
                </div>

                <div>
                  <h5 className="font-semibold text-slate-800 mb-2">Étape 3 : Conclusion</h5>
                  <p>
                    On injecte dans le quotient :
                    <br />
                    <span className="block my-2 text-center bg-white p-3 border border-slate-100 rounded">
                      <LatexRenderer latex="\displaystyle \frac{\ln(1+x) - \sin x}{x^2} = \frac{-\frac{x^2}{2} + o(x^2)}{x^2} = -\frac{1}{2} + o(1)" />
                    </span>
                  </p>
                  <p className="mt-3 font-medium text-emerald-800 flex items-center gap-2">
                    <span>La limite quand <LatexRenderer latex="x \to 0" /> est donc :</span>
                    <span className="text-lg"><LatexRenderer latex="\displaystyle -\frac{1}{2}" /></span>
                  </p>
                </div>
              </div>
            }
          />
        </div>

        {/* Module 2 */}
        <div>
          <DifficultyHeader
            level="Module 2"
            title="Formule de Taylor"
            icon={Crown}
            stars={3}
          />
          <ExerciseCard
            id="14.3"
            title="Inégalité de Taylor-Lagrange"
            difficulty="Avancé"
            content={
              <div className="space-y-4">
                <p>Montrer que pour tout <LatexRenderer latex="x \ge 0" /> : <LatexRenderer latex="x - \frac{x^3}{6} \le \sin x \le x" />.</p>
              </div>
            }
            correction={
              <div className="space-y-6">
                <p>
                  Cette inégalité est un encadrement fin qui provient directement de l'Inégalité de Taylor-Lagrange appliquée à la fonction sinus.
                </p>

                <div>
                  <h5 className="font-semibold text-slate-800 mb-2">Rappel du Théorème</h5>
                  <p className="mb-3 text-base text-slate-700 bg-white p-4 rounded-lg border border-slate-200 shadow-sm text-center">
                    <LatexRenderer latex="\displaystyle \left|f(b) - \sum_{k=0}^n \frac{f^{(k)}(a)}{k!}(b-a)^k\right| \le \sup |f^{(n+1)}| \frac{|b-a|^{n+1}}{(n+1)!}" />
                  </p>
                </div>

                <div>
                  <h5 className="font-semibold text-slate-800 mb-2">1. Majorant (Inégalité de droite)</h5>
                  <p className="mb-2">
                    Appliquons Taylor-Lagrange à l'ordre <LatexRenderer latex="n=1" /> sur l'intervalle <LatexRenderer latex="[0, x]" /> (avec <LatexRenderer latex="x > 0" />).
                    <br />
                    La fonction est <LatexRenderer latex="f(t) = \sin t" />.
                    <br />
                    <LatexRenderer latex="\displaystyle f(0) = 0, f'(0) = 1" />.
                    <br />
                    Le reste fait intervenir <LatexRenderer latex="f''(t) = -\sin t" />.
                  </p>
                  <p className="mb-2">
                    Pour être plus précis, utilisons la <strong>Formule de Taylor avec reste intégral</strong> à l'ordre 1 :
                    <br />
                    <span className="block my-3 text-center bg-white p-2 rounded border border-slate-100">
                      <LatexRenderer latex="\displaystyle \sin x = \sin(0) + x \cos(0) + \int_0^x (x-t)(-\sin t) dt = x - \int_0^x (x-t)\sin t \, dt" />
                    </span>
                  </p>
                  <p>
                    Comme <LatexRenderer latex="t \in [0, x]" /> et <LatexRenderer latex="x \le \pi" /> (si petit), <LatexRenderer latex="\sin t \ge 0" /> et <LatexRenderer latex="x-t \ge 0" />.
                    <br />
                    L'intégrale est positive, donc <LatexRenderer latex="\sin x \le x" />.
                  </p>
                </div>

                <div>
                  <h5 className="font-semibold text-slate-800 mb-2">2. Minorant (Inégalité de gauche)</h5>
                  <p className="mb-2">
                    Poussons le développement à l'ordre 3.
                    <br />
                    <span className="block my-3 text-center bg-white p-2 rounded border border-slate-100">
                      <LatexRenderer latex="\displaystyle \sin x = x - \frac{x^3}{6} + \int_0^x \frac{(x-t)^3}{3!} \sin(t) \, dt" />
                    </span>
                    (Car <LatexRenderer latex="f^{(4)}(t) = \sin t" />).
                  </p>
                  <p>
                    De même, pour <LatexRenderer latex="x \ge 0" /> petit, le terme intégral est positif.
                    <br />
                    Donc <LatexRenderer latex="\displaystyle \sin x \ge x - \frac{x^3}{6}" />.
                  </p>
                </div>

                <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100 text-emerald-900 text-center font-bold text-lg">
                  <LatexRenderer latex="\displaystyle x - \frac{x^3}{6} \le \sin x \le x" />
                </div>
              </div>
            }
          />
        </div>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre14DeveloppementsLimitesEtTaylorExercicesPage;
