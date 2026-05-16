import React, { useState } from 'react';
import { Eye, EyeOff, CheckCircle } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[11px] font-bold text-red-800 uppercase tracking-widest mb-2 mt-4 first:mt-0">
    {children}
  </p>
);

const PointMethodo = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-3">
    <SectionLabel>Méthode</SectionLabel>
    <div className="text-stone-700 text-sm leading-relaxed">{children}</div>
  </div>
);

const Astuce = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-3">
    <SectionLabel>Astuce</SectionLabel>
    <div className="text-stone-700 text-sm leading-relaxed">{children}</div>
  </div>
);

const ConclusionBox = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-4">
    <SectionLabel>Conclusion</SectionLabel>
    <div className="text-stone-800 leading-relaxed">{children}</div>
  </div>
);

const difficultyLabel: Record<string, string> = {
  'Niveau: Facile': 'FACILE',
  'Niveau: Intermédiaire': 'MOYEN',
  'Niveau: Concours': 'DIFFICILE',
  'Niveau: Concours (Classique)': 'DIFFICILE',
  'Niveau: Difficile': 'HEC',
};

const Chapitre4FonctionsMultivariees_CalculDifferentielExercicesPage = () => {
  const [visibleCorrections, setVisibleCorrections] = useState<{ [key: string]: boolean }>({});

  const toggleCorrection = (exerciseId: string) => {
    setVisibleCorrections(prev => ({
      ...prev,
      [exerciseId]: !prev[exerciseId]
    }));
  };

  const DifficultyHeader = ({ level }: { level: string }) => (
    <div className="flex items-center gap-3 mb-4 mt-10">
      <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest whitespace-nowrap">
        {level}
      </span>
      <div className="flex-1 border-t border-stone-200" />
    </div>
  );

  const ExerciseCard = ({
    id, title, content, correction, difficulty,
  }: {
    id: string; title: string; content: React.ReactNode;
    correction: React.ReactNode; difficulty: string;
  }) => {
    const num = id.replace(/[^0-9.]/g, '').padStart(2, '0');
    const badge = difficultyLabel[difficulty] ?? difficulty.replace('Niveau: ', '').toUpperCase();
    const isOpen = visibleCorrections[id];
    return (
      <div className="mb-6 border border-stone-200 rounded-xl bg-carnet-paper-2 shadow-sm p-6">
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="flex items-baseline gap-3">
            <span className="text-2xl font-bold italic text-red-800 leading-none">{num}</span>
            <span className="text-stone-300 font-light text-xl leading-none">—</span>
            <h3 className="font-medium text-stone-900 text-base leading-snug">
              {title.replace(/^Exercice \d+ - /, '')}
            </h3>
          </div>
          <span className="shrink-0 text-[11px] font-semibold text-red-800 border border-red-200 rounded-full px-3 py-0.5 tracking-wider">
            {badge}
          </span>
        </div>
        <div className="text-stone-700 leading-relaxed mb-6">{content}</div>
        <button
          onClick={() => toggleCorrection(id)}
          className="flex items-center gap-2 text-sm text-stone-600 border border-stone-300 rounded-full px-4 py-1.5 hover:bg-stone-50 transition-colors"
        >
          {isOpen ? (<><EyeOff className="w-4 h-4" /> Masquer la correction</>) : (<><Eye className="w-4 h-4" /> Afficher la correction</>)}
        </button>
        {isOpen && (
          <div className="mt-5 border border-dashed border-stone-300 border-l-[3px] border-l-red-800 rounded-lg p-5 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-4 h-4 text-red-800" />
              <span className="text-xs font-bold text-red-800 uppercase tracking-widest">Corrigé détaillé</span>
            </div>
            <div className="text-stone-700 leading-relaxed space-y-2">{correction}</div>
          </div>
        )}
      </div>
    );
  };

  return (
    <MathChapterTemplate
      chapterNumber={21}
      chapterTitle="Fonctions multivariées & calcul différentiel"
      description="Exercices sur la continuité, le calcul de gradients et les extrema."
      slug="fonctions-multivariees-calcul-differentiel"
      activeSection="exercises"
      showNavigation={true}
      previousChapter={{
        slug: "statistiques-estimation",
        title: "Statistiques"
      }}
      nextChapter={{
        slug: "optimisation",
        title: "Optimisation"
      }}
    >
      <div className="space-y-8">

        <div>
          <DifficultyHeader level="Module 1 — Calcul de gradients" />

          <ExerciseCard
            id="21.1"
            title="Gradients de fonctions usuelles"
            difficulty="Niveau: Facile"
            content={
              <div className="space-y-3">
                <p>Calculer le gradient des fonctions suivantes :</p>
                <ol className="list-decimal list-inside space-y-2">
                  <li><LatexRenderer latex="f(x,y) = x^2 + y^2 + 2xy" /></li>
                  <li><LatexRenderer latex="g(x,y) = e^{x+y}" /></li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  Le gradient <LatexRenderer latex="\nabla f(x,y)=\left(\frac{\partial f}{\partial x},\frac{\partial f}{\partial y}\right)" /> s'obtient en dérivant partiellement par rapport à chaque variable, en traitant l'autre comme une constante. Par le théorème de Schwarz, les dérivées partielles croisées sont égales si <LatexRenderer latex="f" /> est de classe <LatexRenderer latex="\mathcal{C}^2" />.
                </PointMethodo>
                <p><strong>Fonction f.</strong> Soit <LatexRenderer latex="f(x,y)=x^2+y^2+2xy=(x+y)^2" />.</p>
                <p><LatexRenderer latex="\frac{\partial f}{\partial x}=2x+2y" /> et <LatexRenderer latex="\frac{\partial f}{\partial y}=2y+2x" />.</p>
                <p>D'où <LatexRenderer latex="\nabla f(x,y)=(2x+2y,\;2x+2y)=2(x+y)(1,1)" />.</p>
                <p><strong>Fonction g.</strong> Soit <LatexRenderer latex="g(x,y)=e^{x+y}" />.</p>
                <p><LatexRenderer latex="\frac{\partial g}{\partial x}=e^{x+y}" /> et <LatexRenderer latex="\frac{\partial g}{\partial y}=e^{x+y}" />.</p>
                <p>D'où <LatexRenderer latex="\nabla g(x,y)=(e^{x+y},e^{x+y})=e^{x+y}(1,1)" />.</p>
                <ConclusionBox>
                  <LatexRenderer latex="\nabla f(x,y)=2(x+y)(1,1)" /> et <LatexRenderer latex="\nabla g(x,y)=e^{x+y}(1,1)" />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Module 2 — Extrema locaux et Hessienne" />

          <ExerciseCard
            id="21.2"
            title="Nature du point critique de h(x,y) = x² − y²"
            difficulty="Niveau: Intermédiaire"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="h(x,y)=x^2-y^2" />.</p>
                <p>1. Trouver les points critiques de <LatexRenderer latex="h" />.</p>
                <p>2. Analyser la nature de ces points à l'aide de la Hessienne.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  Pour chercher un extremum local : (1) annuler le gradient pour trouver les points critiques, (2) calculer la Hessienne en chaque point critique, (3) appliquer le critère <LatexRenderer latex="rt-s^2" /> où <LatexRenderer latex="r=\partial^2 h/\partial x^2" />, <LatexRenderer latex="s=\partial^2 h/\partial x\partial y" />, <LatexRenderer latex="t=\partial^2 h/\partial y^2" />. Ne jamais conclure sans analyser la Hessienne.
                </PointMethodo>
                <p><strong>Points critiques.</strong> On calcule <LatexRenderer latex="\nabla h(x,y)=(2x,-2y)" />.</p>
                <p>Le gradient s'annule en <LatexRenderer latex="(0,0)" />. C'est l'unique point critique.</p>
                <p><strong>Hessienne en (0,0).</strong> Par le théorème de Schwarz, les dérivées partielles secondes commutent. On calcule :</p>
                <p><LatexRenderer latex="r=\frac{\partial^2 h}{\partial x^2}=2,\quad s=\frac{\partial^2 h}{\partial x\partial y}=0,\quad t=\frac{\partial^2 h}{\partial y^2}=-2" />.</p>
                <p>Ainsi le discriminant vaut <LatexRenderer latex="rt-s^2=2\times(-2)-0=-4<0" />.</p>
                <p>D'où, d'après le critère de la Hessienne, <LatexRenderer latex="(0,0)" /> est un <strong>point selle</strong> : ce n'est ni un maximum ni un minimum local.</p>
                <Astuce>On peut le voir directement : <LatexRenderer latex="h(x,0)=x^2\geq 0" /> et <LatexRenderer latex="h(0,y)=-y^2\leq 0" />, donc <LatexRenderer latex="h" /> prend des valeurs de signes contraires au voisinage de <LatexRenderer latex="(0,0)" />.</Astuce>
                <ConclusionBox>
                  <LatexRenderer latex="(0,0)" /> est l'unique point critique de <LatexRenderer latex="h" /> ; c'est un <strong>point selle</strong> (<LatexRenderer latex="rt-s^2=-4<0" />).
                </ConclusionBox>
              </div>
            }
          />
        </div>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre4FonctionsMultivariees_CalculDifferentielExercicesPage;
