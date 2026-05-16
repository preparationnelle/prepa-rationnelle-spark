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

const Chapitre7IntegrationSurUnSegmentExercicesPage = () => {
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
    const num = id.replace(/[^0-9]/g, '').padStart(2, '0');
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

        <div>
          <DifficultyHeader level="Module 1 — Calculs d'intégrales et primitives" />

          <ExerciseCard
            id="ex1"
            title="Exercice 1"
            difficulty="Niveau: Facile"
            content={
              <div>
                <p className="mb-4">Calculer :</p>
                <div className="text-center">
                  <LatexRenderer latex="\int_{-1}^{2} e^{-|x|} \, dx" />
                </div>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Lorsque l'intégrande contient une valeur absolue, on utilise la relation de Chasles pour découper l'intervalle d'intégration aux points où la valeur absolue change de définition.
                </PointMethodo>
                <p>On applique la relation de Chasles en séparant selon le signe de <LatexRenderer latex="x" /> :</p>
                <div className="text-center space-y-2 my-3">
                  <LatexRenderer latex="\int_{-1}^{2} e^{-|x|} \, dx = \int_{-1}^{0} e^{x} \, dx + \int_{0}^{2} e^{-x} \, dx" />
                </div>
                <p>On intègre chaque terme :</p>
                <div className="text-center space-y-2 my-3">
                  <LatexRenderer latex="[e^x]_{-1}^0 + [-e^{-x}]_0^2 = (1 - e^{-1}) + (-e^{-2} + 1) = 2 - \frac{1}{e} - \frac{1}{e^2}" />
                </div>
                <ConclusionBox>
                  <LatexRenderer latex="\int_{-1}^{2} e^{-|x|} \, dx = 2 - \frac{1}{e} - \frac{1}{e^2}" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex2"
            title="Exercice 2"
            difficulty="Niveau: Facile"
            content={
              <div>
                <p className="mb-4">Calculer pour <LatexRenderer latex="n \in \mathbb{N}^*" /> :</p>
                <div className="text-center">
                  <LatexRenderer latex="\int_0^n \lfloor x \rfloor \, dx" />
                </div>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Lorsque l'intégrande est une fonction en escalier, on décompose l'intégrale sur chaque intervalle où la fonction est constante, puis on somme les aires des rectangles ainsi obtenus.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="n \in \mathbb{N}^*" />. Sur chaque intervalle <LatexRenderer latex="[k, k+1[" /> (pour <LatexRenderer latex="k = 0, 1, \ldots, n-1" />), la partie entière vaut <LatexRenderer latex="\lfloor x \rfloor = k" />. Par la relation de Chasles :</p>
                <div className="text-center space-y-2 my-3">
                  <LatexRenderer latex="\int_0^n \lfloor x \rfloor \, dx = \sum_{k=0}^{n-1} \int_k^{k+1} k \, dx = \sum_{k=0}^{n-1} k \cdot 1 = \sum_{k=0}^{n-1} k = \frac{n(n-1)}{2}" />
                </div>
                <ConclusionBox>
                  <LatexRenderer latex="\int_0^n \lfloor x \rfloor \, dx = \frac{n(n-1)}{2}" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex3"
            title="Exercice 3"
            difficulty="Niveau: Intermédiaire"
            content={
              <div>
                <p className="mb-4">Montrer que pour <LatexRenderer latex="x \in ]0,1[" /> et <LatexRenderer latex="n \in \mathbb{N}" /> :</p>
                <div className="text-center">
                  <LatexRenderer latex="0 \leq \int_0^x \frac{t^n}{1 - t} \, dt \leq -\ln(1 - x)" />
                </div>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour encadrer une intégrale, on encadre l'intégrande (qui est ici positif), puis on utilise la croissance de l'intégrale : si <LatexRenderer latex="0 \leq f \leq g" /> sur <LatexRenderer latex="[0,x]" />, alors <LatexRenderer latex="\int_0^x f \leq \int_0^x g" />.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="x \in ]0,1[" /> et <LatexRenderer latex="n \in \mathbb{N}" />. Pour tout <LatexRenderer latex="t \in [0,x]" /> :</p>
                <ul className="ml-4 list-disc my-2 space-y-1">
                  <li><LatexRenderer latex="t^n \geq 0" /> et <LatexRenderer latex="1-t > 0" />, donc l'intégrande est positif. D'où <LatexRenderer latex="\int_0^x \frac{t^n}{1-t}\,dt \geq 0" />.</li>
                  <li><LatexRenderer latex="0 \leq t^n \leq 1" /> (car <LatexRenderer latex="0 \leq t \leq x < 1" />), donc <LatexRenderer latex="\frac{t^n}{1-t} \leq \frac{1}{1-t}" />.</li>
                </ul>
                <p>Par croissance de l'intégrale :</p>
                <div className="text-center my-3">
                  <LatexRenderer latex="\int_0^x \frac{t^n}{1-t}\,dt \leq \int_0^x \frac{1}{1-t}\,dt = [-\ln(1-t)]_0^x = -\ln(1-x)" />
                </div>
                <ConclusionBox>
                  <LatexRenderer latex="0 \leq \int_0^x \frac{t^n}{1-t}\,dt \leq -\ln(1-x)" /> pour tout <LatexRenderer latex="x \in ]0,1[" /> et <LatexRenderer latex="n \in \mathbb{N}" />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Module 2 — Propriétés et suites d'intégrales" />

          <ExerciseCard
            id="ex4"
            title="Exercice 4"
            difficulty="Niveau: Intermédiaire"
            content={
              <div>
                <p className="mb-4">Soit <LatexRenderer latex="I_n = \int_0^1 \frac{(-t)^n}{1 + t} \, dt" />. Montrer que :</p>
                <div className="text-center">
                  <LatexRenderer latex="\forall n \in \mathbb{N}, \quad 0 \leq |I_n| \leq \ln(2)" />
                </div>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour majorer la valeur absolue d'une intégrale, on utilise l'inégalité triangulaire intégrale : <LatexRenderer latex="\left|\int f\right| \leq \int |f|" />, puis on majore l'intégrande par une expression dont la primitive est connue.
                </PointMethodo>
                <p>Par l'inégalité triangulaire intégrale :</p>
                <div className="text-center my-3">
                  <LatexRenderer latex="|I_n| \leq \int_0^1 \left|\frac{(-t)^n}{1+t}\right| dt = \int_0^1 \frac{t^n}{1+t} dt" />
                </div>
                <p>Or pour <LatexRenderer latex="t \in [0,1]" />, <LatexRenderer latex="0 \leq t^n \leq 1" />, donc <LatexRenderer latex="\frac{t^n}{1+t} \leq \frac{1}{1+t}" />. Ainsi :</p>
                <div className="text-center my-3">
                  <LatexRenderer latex="\int_0^1 \frac{t^n}{1+t} dt \leq \int_0^1 \frac{1}{1+t} dt = [\ln(1+t)]_0^1 = \ln(2)" />
                </div>
                <ConclusionBox>
                  <LatexRenderer latex="0 \leq |I_n| \leq \ln(2)" /> pour tout <LatexRenderer latex="n \in \mathbb{N}" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex5"
            title="Exercice 5"
            difficulty="Niveau: Intermédiaire"
            content={
              <div>
                <p className="mb-4">Étudier le sens de variation de la suite <LatexRenderer latex="(I_n)" /> définie par :</p>
                <div className="text-center">
                  <LatexRenderer latex="I_n = \int_0^1 \frac{e^{nx}}{e^x + 1} \, dx" />
                </div>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour étudier la monotonie d'une suite d'intégrales, on calcule <LatexRenderer latex="I_{n+1} - I_n" /> en exprimant la différence comme une seule intégrale, puis on étudie le signe de l'intégrande.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="n \in \mathbb{N}" />. On calcule :</p>
                <div className="text-center my-3">
                  <LatexRenderer latex="I_{n+1} - I_n = \int_0^1 \frac{e^{(n+1)x} - e^{nx}}{e^x + 1} dx = \int_0^1 \frac{e^{nx}(e^x - 1)}{e^x + 1} dx" />
                </div>
                <p>Sur <LatexRenderer latex="[0, 1]" />, on a <LatexRenderer latex="x \geq 0" />, donc <LatexRenderer latex="e^x \geq 1" />, d'où <LatexRenderer latex="e^x - 1 \geq 0" />. De plus <LatexRenderer latex="e^{nx} > 0" /> et <LatexRenderer latex="e^x + 1 > 0" />. L'intégrande est donc positif sur <LatexRenderer latex="[0,1]" />.</p>
                <ConclusionBox>
                  La suite <LatexRenderer latex="(I_n)" /> est croissante.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex6"
            title="Exercice 6"
            difficulty="Niveau: Intermédiaire"
            content={
              <div>
                <p className="mb-4">Déterminer la limite de <LatexRenderer latex="I_n = \int_0^1 x^n \ln(x + 1) \, dx" />.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour montrer qu'une suite d'intégrales tend vers 0, on encadre l'intégrale par une quantité tendant vers 0. La technique habituelle consiste à majorer l'intégrande par <LatexRenderer latex="M \cdot x^n" /> où <LatexRenderer latex="M" /> est une constante, puis à utiliser <LatexRenderer latex="\int_0^1 x^n dx = \frac{1}{n+1} \to 0" />.
                </PointMethodo>
                <p>Pour tout <LatexRenderer latex="x \in [0,1]" />, on a <LatexRenderer latex="0 \leq \ln(x+1) \leq \ln(2)" />, donc :</p>
                <div className="text-center my-3">
                  <LatexRenderer latex="0 \leq I_n = \int_0^1 x^n \ln(x+1)\,dx \leq \ln(2) \int_0^1 x^n\,dx = \frac{\ln 2}{n+1}" />
                </div>
                <p>Or <LatexRenderer latex="\frac{\ln 2}{n+1} \to 0"  /> quand <LatexRenderer latex="n \to +\infty" />. Par le théorème des gendarmes :</p>
                <ConclusionBox>
                  <LatexRenderer latex="I_n \to 0" /> quand <LatexRenderer latex="n \to +\infty" />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Module 3 — Techniques avancées (IPP et changement de variable)" />

          <ExerciseCard
            id="ex7"
            title="Exercice 7"
            difficulty="Niveau: Intermédiaire"
            content={
              <div>
                <p className="mb-4">Calculer par intégration par parties :</p>
                <div className="text-center">
                  <LatexRenderer latex="I = \int_1^2 \frac{\ln(x)}{x^2} \, dx" />
                </div>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour une intégrale du type <LatexRenderer latex="\int \ln(x) \cdot g(x)\,dx" />, on pose <LatexRenderer latex="u = \ln x" /> (qui se dérive en <LatexRenderer latex="1/x" />) et <LatexRenderer latex="v' = g(x)" />. On calcule <LatexRenderer latex="v" /> puis on applique la formule d'intégration par parties.
                </PointMethodo>
                <p>On pose <LatexRenderer latex="u = \ln x" /> et <LatexRenderer latex="v' = 1/x^2" />. Alors <LatexRenderer latex="u' = 1/x" /> et <LatexRenderer latex="v = -1/x" />. Par intégration par parties :</p>
                <div className="text-center space-y-2 my-3">
                  <LatexRenderer latex="I = \left[-\frac{\ln x}{x}\right]_1^2 + \int_1^2 \frac{1}{x^2} dx = -\frac{\ln 2}{2} + \left[-\frac{1}{x}\right]_1^2" />
                  <LatexRenderer latex="= -\frac{\ln 2}{2} + \left(-\frac{1}{2} + 1\right) = -\frac{\ln 2}{2} + \frac{1}{2}" />
                </div>
                <ConclusionBox>
                  <LatexRenderer latex="I = \frac{1 - \ln 2}{2}" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex8"
            title="Exercice 8"
            difficulty="Niveau: Intermédiaire"
            content={
              <div>
                <p className="mb-4">Calculer par intégration par parties :</p>
                <div className="text-center">
                  <LatexRenderer latex="I = \int_0^1 (x - 1) e^{2x} \, dx" />
                </div>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour intégrer un produit polynôme-exponentielle, on pose le polynôme en <LatexRenderer latex="u" /> et l'exponentielle en <LatexRenderer latex="v'" />, de sorte que la dérivation de <LatexRenderer latex="u" /> réduit le degré.
                </PointMethodo>
                <p>On pose <LatexRenderer latex="u = x-1" /> et <LatexRenderer latex="v' = e^{2x}" />. Alors <LatexRenderer latex="u' = 1" /> et <LatexRenderer latex="v = \frac{1}{2}e^{2x}" />. Par intégration par parties :</p>
                <div className="text-center space-y-2 my-3">
                  <LatexRenderer latex="I = \left[\frac{(x-1)e^{2x}}{2}\right]_0^1 - \frac{1}{2}\int_0^1 e^{2x} dx" />
                  <LatexRenderer latex="= \left(0 - \frac{-e^0}{2}\right) - \frac{1}{2} \cdot \frac{1}{2}[e^{2x}]_0^1 = \frac{1}{2} - \frac{e^2 - 1}{4}" />
                </div>
                <ConclusionBox>
                  <LatexRenderer latex="I = \frac{3 - e^2}{4}" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex9"
            title="Exercice 9"
            difficulty="Niveau: Intermédiaire"
            content={
              <div>
                <p className="mb-4">Calculer par intégration par parties :</p>
                <div className="text-center">
                  <LatexRenderer latex="\int_0^1 \ln(2 + x) \, dx" />
                </div>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour intégrer un logarithme seul, on écrit <LatexRenderer latex="\ln(2+x) = 1 \cdot \ln(2+x)" /> et on pose <LatexRenderer latex="u = \ln(2+x)" />, <LatexRenderer latex="v' = 1" />. Le choix judicieux de la constante pour <LatexRenderer latex="v" /> peut simplifier le calcul de l'intégrale restante.
                </PointMethodo>
                <Astuce>
                  En posant <LatexRenderer latex="v = x + 2" /> (au lieu de <LatexRenderer latex="v = x" />), l'intégrale restante vaut <LatexRenderer latex="\int_0^1 \frac{x+2}{x+2} dx = 1" />, ce qui simplifie considérablement.
                </Astuce>
                <p>On pose <LatexRenderer latex="u = \ln(2+x)" /> et <LatexRenderer latex="v' = 1" />, avec le choix <LatexRenderer latex="v = x+2" />. Alors <LatexRenderer latex="u' = \frac{1}{x+2}" />. Par intégration par parties :</p>
                <div className="text-center space-y-2 my-3">
                  <LatexRenderer latex="\int_0^1 \ln(2+x)\,dx = [(x+2)\ln(x+2)]_0^1 - \int_0^1 \frac{x+2}{x+2} dx" />
                  <LatexRenderer latex="= (3\ln 3 - 2\ln 2) - 1" />
                </div>
                <ConclusionBox>
                  <LatexRenderer latex="\int_0^1 \ln(2+x)\,dx = 3\ln 3 - 2\ln 2 - 1" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex10"
            title="Exercice 10"
            difficulty="Niveau: Intermédiaire"
            content={
              <div>
                <p className="mb-4">Calculer :</p>
                <div className="text-center">
                  <LatexRenderer latex="I = \int_0^1 \frac{x}{2x + 1} \, dx" />
                </div>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour intégrer une fraction rationnelle de la forme <LatexRenderer latex="\frac{x}{ax+b}" />, on effectue une division euclidienne (ou une réécriture algébrique) afin de séparer la partie entière de la partie fractionnaire dont la primitive est un logarithme.
                </PointMethodo>
                <Astuce>
                  On écrit <LatexRenderer latex="\frac{x}{2x+1} = \frac{1}{2} \cdot \frac{2x+1-1}{2x+1} = \frac{1}{2}\left(1 - \frac{1}{2x+1}\right)" /> pour faire apparaître une forme <LatexRenderer latex="u'/u" />.
                </Astuce>
                <p>On réécrit :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex="\frac{x}{2x+1} = \frac{1}{2}\left(1 - \frac{1}{2x+1}\right)" />
                </div>
                <p>D'où :</p>
                <div className="text-center space-y-2 my-3">
                  <LatexRenderer latex="I = \frac{1}{2}\left[x - \frac{\ln(2x+1)}{2}\right]_0^1 = \frac{1}{2}\left(1 - \frac{\ln 3}{2}\right)" />
                </div>
                <ConclusionBox>
                  <LatexRenderer latex="I = \frac{2 - \ln 3}{4}" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex11"
            title="Exercice 11"
            difficulty="Niveau: Concours"
            content={
              <div>
                <p className="mb-4">En posant le changement de variable <LatexRenderer latex="x = \ln t" />, calculer :</p>
                <div className="text-center">
                  <LatexRenderer latex="I = \int_0^1 \frac{dx}{1 + e^x}" />
                </div>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour un changement de variable <LatexRenderer latex="x = \phi(t)" />, on calcule <LatexRenderer latex="dx = \phi'(t)\,dt" /> et on convertit les bornes en <LatexRenderer latex="t" />, puis on simplifie l'intégrande.
                </PointMethodo>
                <p>On pose <LatexRenderer latex="x = \ln t" />, donc <LatexRenderer latex="t = e^x" /> et <LatexRenderer latex="dx = \frac{dt}{t}" />. Les bornes deviennent : <LatexRenderer latex="x=0 \Rightarrow t=1" /> et <LatexRenderer latex="x=1 \Rightarrow t=e" />. D'où :</p>
                <div className="text-center space-y-2 my-3">
                  <LatexRenderer latex="I = \int_1^e \frac{1}{1+t} \cdot \frac{dt}{t} = \int_1^e \left(\frac{1}{t} - \frac{1}{t+1}\right) dt" />
                  <LatexRenderer latex="= [\ln t - \ln(t+1)]_1^e = (1 - \ln(e+1)) - (0 - \ln 2) = 1 + \ln\left(\frac{2}{e+1}\right)" />
                </div>
                <ConclusionBox>
                  <LatexRenderer latex="I = 1 + \ln\!\left(\dfrac{2}{e+1}\right)" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex12"
            title="Exercice 12"
            difficulty="Niveau: Facile"
            content={
              <div>
                <p className="mb-4">Calculer :</p>
                <div className="text-center">
                  <LatexRenderer latex="\int_0^1 \frac{e^x}{1+e^x} dx" />
                </div>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Lorsque l'intégrande est de la forme <LatexRenderer latex="\frac{u'(x)}{u(x)}" />, une primitive est <LatexRenderer latex="\ln|u(x)|" />. Il convient de reconnaître cette structure avant de calculer.
                </PointMethodo>
                <Astuce>
                  Le numérateur <LatexRenderer latex="e^x" /> est exactement la dérivée du dénominateur <LatexRenderer latex="1+e^x"  />. L'intégrande est donc de la forme <LatexRenderer latex="u'/u" />.
                </Astuce>
                <p>On reconnaît la forme <LatexRenderer latex="u'/u"  /> avec <LatexRenderer latex="u(x) = 1+e^x" /> et <LatexRenderer latex="u'(x) = e^x" />. Donc :</p>
                <div className="text-center my-3">
                  <LatexRenderer latex="\int_0^1 \frac{e^x}{1+e^x} dx = [\ln(1+e^x)]_0^1 = \ln(1+e) - \ln 2" />
                </div>
                <ConclusionBox>
                  <LatexRenderer latex="\int_0^1 \frac{e^x}{1+e^x} dx = \ln\!\left(\dfrac{e+1}{2}\right)" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex13"
            title="Exercice 13"
            difficulty="Niveau: Difficile"
            content={
              <div>
                <p className="mb-4">Soit <LatexRenderer latex="F(x) = \int_0^1 \frac{e^t}{t+x} dt" /> définie sur <LatexRenderer latex="\mathbb{R}_+^*" />.</p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Montrer que <LatexRenderer latex="F" /> est décroissante.</li>
                  <li>Montrer que <LatexRenderer latex="F'(x) + F(x) = \frac{e}{x+1} - \frac{1}{x}" />.</li>
                  <li>Calculer la limite de <LatexRenderer latex="F" /> en <LatexRenderer latex="+\infty" />.</li>
                </ol>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour une fonction définie par une intégrale à paramètre, on étudie la monotonie en montrant que la dérivée par rapport au paramètre est de signe constant. Pour la relation différentielle, on combine dérivation sous l'intégrale et intégration par parties.
                </PointMethodo>
                <p className="mb-2"><strong>1. Décroissance :</strong> Soit <LatexRenderer latex="0 < x < y" />. Pour tout <LatexRenderer latex="t \in [0,1]" />, <LatexRenderer latex="t+x < t+y" />, donc <LatexRenderer latex="\frac{e^t}{t+x} > \frac{e^t}{t+y} > 0" />. Par croissance de l'intégrale, <LatexRenderer latex="F(x) > F(y)" />. Ainsi <LatexRenderer latex="F" /> est strictement décroissante.</p>
                <p className="mb-2"><strong>2. Relation différentielle :</strong> Par dérivation sous le signe intégrale :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex="F'(x) = \int_0^1 \frac{-e^t}{(t+x)^2} dt" />
                </div>
                <p>On effectue une intégration par parties sur <LatexRenderer latex="F(x) = \int_0^1 \frac{e^t}{t+x} dt" /> en posant <LatexRenderer latex="u = e^t" /> et <LatexRenderer latex="v' = \frac{1}{t+x}" />, soit <LatexRenderer latex="v = \ln(t+x)" /> :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex="F(x) = [e^t \ln(t+x)]_0^1 - \int_0^1 e^t \ln(t+x)\,dt" />
                </div>
                <p>La relation <LatexRenderer latex="F'(x) + F(x) = \frac{e}{x+1} - \frac{1}{x}" /> s'obtient en combinant cette expression avec la dérivée calculée.</p>
                <p className="mb-2"><strong>3. Limite en <LatexRenderer latex="+\infty" /> :</strong> Pour <LatexRenderer latex="x > 0"  /> et <LatexRenderer latex="t \in [0,1]" />, <LatexRenderer latex="0 < \frac{e^t}{t+x} \leq \frac{e}{x}" />. Donc :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex="0 < F(x) \leq \frac{e}{x} \int_0^1 dt = \frac{e}{x} \to 0" />
                </div>
                <p>Par le théorème des gendarmes, <LatexRenderer latex="F(x) \to 0" />.</p>
                <ConclusionBox>
                  <LatexRenderer latex="F" /> est décroissante et <LatexRenderer latex="F(x) \to 0" /> quand <LatexRenderer latex="x \to +\infty" />.
                </ConclusionBox>
              </div>
            }
          />

        </div>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre7IntegrationSurUnSegmentExercicesPage;
