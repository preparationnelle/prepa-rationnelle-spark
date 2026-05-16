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

const Chapitre6VariablesAleatoiresDensiteExercicesPage = () => {
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
    const num = id.split('-')[1]?.padStart(2, '0') ?? id.replace(/[^0-9]/g, '').padStart(2, '0');
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
      chapterNumber={6}
      chapterTitle="Variables aléatoires à densité"
      description="Exercices progressifs sur les densités de probabilité, fonctions de répartition et transformations de variables."
      slug="maths-variables-aleatoires-densite"
      activeSection="exercises"
      showNavigation={true}
      previousChapter={{
        slug: "maths-complements-variables-aleatoires",
        title: "Compléments sur les variables aléatoires"
      }}
      nextChapter={{
        slug: "nuplets-variables-aleatoires",
        title: "n-uplets de variables aléatoires"
      }}
    >
      <div className="space-y-8">

        <section id="lois-classiques">
          <DifficultyHeader level="Lois classiques" />

          <ExerciseCard
            id="ex-01"
            title="Loi de −ln(U) — HEC 2010"
            difficulty="Niveau: Intermédiaire"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="U \sim \mathcal{U}(]0,1])" />. Déterminer la loi de la variable aléatoire <LatexRenderer latex="Y = -\ln(U)" />.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour déterminer la loi d'une transformation d'une variable à densité, on calcule la fonction de répartition de la nouvelle variable en exprimant l'événement <LatexRenderer latex="\{Y \le x\}" /> en fonction de <LatexRenderer latex="U" />, puis on utilise la loi de <LatexRenderer latex="U" />. On reconnaît ensuite une loi usuelle.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="Y = -\ln(U)" />. Comme <LatexRenderer latex="U > 0" /> p.s., on a <LatexRenderer latex="Y \ge 0" /> p.s., donc <LatexRenderer latex="F_Y(x) = 0" /> pour <LatexRenderer latex="x < 0" />.</p>
                <p className="mt-2">Pour <LatexRenderer latex="x \ge 0" /> :</p>
                <LatexRenderer latex="\displaystyle F_Y(x) = P(-\ln U \le x) = P(\ln U \ge -x) = P(U \ge e^{-x})." />
                <p className="mt-2">Or <LatexRenderer latex="U \sim \mathcal{U}(]0,1])" />, donc pour <LatexRenderer latex="e^{-x} \in [0,1]" /> :</p>
                <LatexRenderer latex="\displaystyle F_Y(x) = 1 - P(U \le e^{-x}) = 1 - e^{-x}." />
                <p className="mt-2">On reconnaît la fonction de répartition d'une loi exponentielle de paramètre 1. Vérifions <LatexRenderer latex="\int_0^{+\infty} e^{-x}\,dx = 1" /> : la densité est bien normalisée.</p>
                <ConclusionBox>
                  <LatexRenderer latex="Y = -\ln(U) \sim \mathrm{Exp}(1)" />, de densité <LatexRenderer latex="f(x) = e^{-x}\,\mathbf{1}_{x \ge 0}" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex-02"
            title="Densité de probabilité — HEC 2015"
            difficulty="Niveau: Intermédiaire"
            content={
              <div className="space-y-3">
                <p>1. Trouver <LatexRenderer latex="(c, d) \in \mathbb{R}^2" /> tel que <LatexRenderer latex="\dfrac{1}{(x+1)(x+2)} = \dfrac{c}{x+1} + \dfrac{d}{x+2}" /> pour <LatexRenderer latex="x \ge 0" />.</p>
                <p>2. Soit <LatexRenderer latex="f(x) = \dfrac{1}{(x+1)(x+2)\ln 2}" /> pour <LatexRenderer latex="x \ge 0" /> et <LatexRenderer latex="f(x) = 0" /> sinon. Montrer que <LatexRenderer latex="f" /> est une densité.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Avant tout calcul sur une densité, vérifier <LatexRenderer latex="\int f = 1" />. La décomposition en éléments simples facilite le calcul de l'intégrale impropre en transformant le problème en une intégrale de logarithme.
                </PointMethodo>
                <p><strong>1.</strong> Par réduction au même dénominateur : <LatexRenderer latex="c(x+2) + d(x+1) = 1" />. En identifiant : <LatexRenderer latex="c + d = 0" /> et <LatexRenderer latex="2c + d = 1" />, d'où <LatexRenderer latex="c = 1" />, <LatexRenderer latex="d = -1" />.</p>
                <LatexRenderer latex="\displaystyle \frac{1}{(x+1)(x+2)} = \frac{1}{x+1} - \frac{1}{x+2}." />
                <p className="mt-2"><strong>2.</strong> La fonction <LatexRenderer latex="f" /> est positive. Vérifions <LatexRenderer latex="\int_{-\infty}^{+\infty} f = 1" /> :</p>
                <LatexRenderer latex="\displaystyle \int_0^{+\infty} \frac{dx}{(x+1)(x+2)\ln 2} = \frac{1}{\ln 2}\int_0^{+\infty}\!\left(\frac{1}{x+1} - \frac{1}{x+2}\right)dx." />
                <p className="mt-2">Soit, en passant à la limite :</p>
                <LatexRenderer latex="\displaystyle = \frac{1}{\ln 2}\Bigl[\ln(x+1) - \ln(x+2)\Bigr]_0^{+\infty} = \frac{1}{\ln 2}\Bigl(0 - \ln\tfrac{1}{2}\Bigr) = \frac{\ln 2}{\ln 2} = 1." />
                <ConclusionBox>
                  <LatexRenderer latex="f" /> est bien une densité de probabilité.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex-03"
            title="Transformation uniforme vers exponentielle"
            difficulty="Niveau: Facile"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="U \sim \mathcal{U}([0,1[)" /> et <LatexRenderer latex="\lambda > 0" />. On pose <LatexRenderer latex="X = -\dfrac{1}{\lambda}\ln(1-U)" />.</p>
                <p>Déterminer la loi de <LatexRenderer latex="X" />.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Calculer la fonction de répartition de <LatexRenderer latex="X" /> en exprimant <LatexRenderer latex="\{X \le x\}" /> en fonction de <LatexRenderer latex="U" />, puis utiliser <LatexRenderer latex="F_U(u) = u" /> sur <LatexRenderer latex="[0,1[" />. Reconnaître une loi usuelle.
                </PointMethodo>
                <p>Comme <LatexRenderer latex="U \in [0,1[" />, on a <LatexRenderer latex="X \ge 0" /> p.s., donc <LatexRenderer latex="F_X(x) = 0" /> pour <LatexRenderer latex="x < 0" />.</p>
                <p className="mt-2">Pour <LatexRenderer latex="x \ge 0" /> :</p>
                <LatexRenderer latex="\displaystyle F_X(x) = P\!\left(-\frac{\ln(1-U)}{\lambda} \le x\right) = P(\ln(1-U) \ge -\lambda x) = P(1-U \ge e^{-\lambda x}) = P(U \le 1-e^{-\lambda x})." />
                <p className="mt-2">Or <LatexRenderer latex="1 - e^{-\lambda x} \in [0,1[" /> pour <LatexRenderer latex="x \ge 0" />, d'où :</p>
                <LatexRenderer latex="\displaystyle F_X(x) = F_U(1-e^{-\lambda x}) = 1 - e^{-\lambda x}." />
                <p className="mt-2">On reconnaît la fonction de répartition d'une loi exponentielle. La densité <LatexRenderer latex="\lambda e^{-\lambda x}\,\mathbf{1}_{x \ge 0}" /> vérifie bien <LatexRenderer latex="\int_0^{+\infty} \lambda e^{-\lambda x}\,dx = 1" />.</p>
                <ConclusionBox>
                  <LatexRenderer latex="X \sim \mathrm{Exp}(\lambda)" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex-04"
            title="Densité avec logarithme — ECRICOME 2015"
            difficulty="Niveau: Intermédiaire"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="f(x) = \dfrac{a}{x(\ln x)^2}" /> pour <LatexRenderer latex="x \ge 2" />, et <LatexRenderer latex="f(x) = 0" /> pour <LatexRenderer latex="x < 2" />.</p>
                <p>1. Déterminer <LatexRenderer latex="a" /> pour que <LatexRenderer latex="f" /> soit une densité.</p>
                <p>2. Déterminer la fonction de répartition <LatexRenderer latex="F" /> de <LatexRenderer latex="X" />.</p>
                <p>3. <LatexRenderer latex="X" /> admet-elle une espérance ?</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Avant tout calcul, vérifier <LatexRenderer latex="\int f = 1" /> avec le changement de variable <LatexRenderer latex="t = \ln x" />. La fonction de répartition s'obtient par intégration de <LatexRenderer latex="f" />. L'existence de l'espérance équivaut à la convergence de <LatexRenderer latex="\int x\,f(x)\,dx" />, que l'on étudie par le même changement de variable.
                </PointMethodo>
                <Astuce>
                  Le changement de variable <LatexRenderer latex="t = \ln x" /> transforme <LatexRenderer latex="\int \frac{a}{x(\ln x)^2}\,dx" /> en <LatexRenderer latex="\int \frac{a}{t^2}\,dt" />, une primitive classique.
                </Astuce>
                <p><strong>1.</strong> Avec <LatexRenderer latex="t = \ln x" />, <LatexRenderer latex="dt = dx/x" />, et <LatexRenderer latex="x \ge 2 \Leftrightarrow t \ge \ln 2" /> :</p>
                <LatexRenderer latex="\displaystyle \int_2^{+\infty} \frac{a}{x(\ln x)^2}\,dx = a\int_{\ln 2}^{+\infty} \frac{dt}{t^2} = a\!\left[-\frac{1}{t}\right]_{\ln 2}^{+\infty} = \frac{a}{\ln 2}." />
                <p className="mt-2">On impose <LatexRenderer latex="\dfrac{a}{\ln 2} = 1" />, soit <LatexRenderer latex="a = \ln 2" />.</p>
                <p className="mt-2"><strong>2.</strong> Pour <LatexRenderer latex="x < 2" />, <LatexRenderer latex="F(x) = 0" />. Pour <LatexRenderer latex="x \ge 2" />, par le même changement de variable :</p>
                <LatexRenderer latex="\displaystyle F(x) = \ln 2\int_{\ln 2}^{\ln x} \frac{du}{u^2} = \ln 2\!\left[-\frac{1}{u}\right]_{\ln 2}^{\ln x} = 1 - \frac{\ln 2}{\ln x}." />
                <p className="mt-2"><strong>3.</strong> On étudie <LatexRenderer latex="\int_2^{+\infty} x\,f(x)\,dx = \ln 2 \int_2^{+\infty} \frac{dx}{(\ln x)^2}" />. Avec <LatexRenderer latex="t = \ln x" /> :</p>
                <LatexRenderer latex="\displaystyle = \ln 2\int_{\ln 2}^{+\infty} \frac{e^t}{t^2}\,dt = +\infty," />
                <p className="mt-1">car <LatexRenderer latex="e^t/t^2 \to +\infty" />.</p>
                <ConclusionBox>
                  <LatexRenderer latex="a = \ln 2" />. <LatexRenderer latex="F(x) = 1 - \dfrac{\ln 2}{\ln x}" /> pour <LatexRenderer latex="x \ge 2" />. <LatexRenderer latex="X" /> n'admet pas d'espérance.
                </ConclusionBox>
              </div>
            }
          />
        </section>

        <section id="transformations">
          <DifficultyHeader level="Transformations de variables" />

          <ExerciseCard
            id="ex-05"
            title="Transformation Y = X²"
            difficulty="Niveau: Intermédiaire"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="X \sim \mathcal{U}([-1,1])" />. Montrer que <LatexRenderer latex="Y = X^2" /> est une variable à densité et déterminer cette densité.</p>
                <p>Mêmes questions si <LatexRenderer latex="X \sim \mathrm{Exp}(\lambda)" />.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour trouver la densité d'une transformation, calculer la fonction de répartition de <LatexRenderer latex="Y" /> en exprimant <LatexRenderer latex="\{Y \le y\}" /> en fonction de <LatexRenderer latex="X" />, puis dériver pour obtenir la densité. Vérifier <LatexRenderer latex="\int f_Y = 1" /> avant de conclure.
                </PointMethodo>
                <p><strong>Cas 1 : <LatexRenderer latex="X \sim \mathcal{U}([-1,1])" />.</strong> Soit <LatexRenderer latex="Y = X^2" />, <LatexRenderer latex="Y(\Omega) = [0,1]" />. Pour <LatexRenderer latex="0 \le y \le 1" /> :</p>
                <LatexRenderer latex="\displaystyle F_Y(y) = P(X^2 \le y) = P(-\sqrt{y} \le X \le \sqrt{y}) = \frac{2\sqrt{y}}{2} = \sqrt{y}." />
                <p className="mt-2">D'où, par dérivation sur <LatexRenderer latex="]0,1[" /> :</p>
                <LatexRenderer latex="\displaystyle f_Y(y) = \frac{1}{2\sqrt{y}}\,\mathbf{1}_{0 < y < 1}." />
                <p className="mt-2">Vérifions : <LatexRenderer latex="\int_0^1 \frac{dy}{2\sqrt{y}} = [\sqrt{y}]_0^1 = 1" />. La densité est normalisée.</p>
                <p className="mt-4"><strong>Cas 2 : <LatexRenderer latex="X \sim \mathrm{Exp}(\lambda)" />.</strong> Soit <LatexRenderer latex="Y = X^2" />, <LatexRenderer latex="Y(\Omega) = [0,+\infty[" />. Pour <LatexRenderer latex="y \ge 0" /> :</p>
                <LatexRenderer latex="\displaystyle F_Y(y) = P(X \le \sqrt{y}) = 1 - e^{-\lambda\sqrt{y}}." />
                <p className="mt-2">Par dérivation :</p>
                <LatexRenderer latex="\displaystyle f_Y(y) = \frac{\lambda}{2\sqrt{y}}\,e^{-\lambda\sqrt{y}}\,\mathbf{1}_{y > 0}." />
                <ConclusionBox>
                  Si <LatexRenderer latex="X \sim \mathcal{U}([-1,1])" /> : <LatexRenderer latex="f_Y(y) = \dfrac{1}{2\sqrt{y}}\,\mathbf{1}_{0 < y < 1}" />. Si <LatexRenderer latex="X \sim \mathrm{Exp}(\lambda)" /> : <LatexRenderer latex="f_Y(y) = \dfrac{\lambda}{2\sqrt{y}}e^{-\lambda\sqrt{y}}\,\mathbf{1}_{y > 0}" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex-06"
            title="Moments de la loi exponentielle"
            difficulty="Niveau: Intermédiaire"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="X \sim \mathrm{Exp}(\lambda)" />. Montrer que <LatexRenderer latex="X" /> admet des moments de tout ordre et les calculer.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour calculer <LatexRenderer latex="E(X^k)" /> d'une variable à densité, utiliser la formule intégrale et opérer un changement de variable <LatexRenderer latex="t = \lambda x" /> pour faire apparaître la fonction Gamma.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="k \in \mathbb{N}^*" />. Par définition et le <strong>théorème de transfert</strong> :</p>
                <LatexRenderer latex="\displaystyle E(X^k) = \int_0^{+\infty} x^k\,\lambda e^{-\lambda x}\,dx." />
                <p className="mt-2">Changement de variable <LatexRenderer latex="t = \lambda x" />, <LatexRenderer latex="dx = dt/\lambda" /> :</p>
                <LatexRenderer latex="\displaystyle E(X^k) = \frac{1}{\lambda^k}\int_0^{+\infty} t^k e^{-t}\,dt = \frac{\Gamma(k+1)}{\lambda^k} = \frac{k!}{\lambda^k}." />
                <p className="mt-2">L'intégrale converge pour tout <LatexRenderer latex="k \ge 0" />, donc <LatexRenderer latex="X" /> admet des moments de tout ordre.</p>
                <ConclusionBox>
                  <LatexRenderer latex="E(X^k) = \dfrac{k!}{\lambda^k}" /> pour tout <LatexRenderer latex="k \in \mathbb{N}^*" />. En particulier <LatexRenderer latex="E(X) = 1/\lambda" /> et <LatexRenderer latex="V(X) = E(X^2) - E(X)^2 = \dfrac{2}{\lambda^2} - \dfrac{1}{\lambda^2} = \dfrac{1}{\lambda^2}" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex-07"
            title="Loi logistique"
            difficulty="Niveau: Difficile"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="F(x) = \dfrac{1}{1+e^{-x}}" /> définie sur <LatexRenderer latex="\mathbb{R}" />.</p>
                <p>1. Montrer que <LatexRenderer latex="F" /> est la fonction de répartition d'une variable à densité <LatexRenderer latex="X" />. Déterminer une densité de <LatexRenderer latex="X" />.</p>
                <p>2. Soient <LatexRenderer latex="X" /> et <LatexRenderer latex="Y" /> indépendantes de même fonction de répartition <LatexRenderer latex="F" />. On pose <LatexRenderer latex="Z = \max(X, Y)" />.</p>
                <p>a. Déterminer la loi de <LatexRenderer latex="Z" />. b. En déduire une densité de <LatexRenderer latex="Z" />.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour vérifier qu'une fonction est une fonction de répartition : montrer qu'elle est croissante, continue à droite, de limites 0 en <LatexRenderer latex="-\infty" /> et 1 en <LatexRenderer latex="+\infty" />. La densité est la dérivée si elle est de classe <LatexRenderer latex="\mathcal{C}^1" />. La loi du maximum de variables indépendantes est le produit des fonctions de répartition.
                </PointMethodo>
                <p><strong>1.</strong> <LatexRenderer latex="F" /> est de classe <LatexRenderer latex="\mathcal{C}^\infty" /> sur <LatexRenderer latex="\mathbb{R}" />, strictement croissante (<LatexRenderer latex="F'(x) = e^{-x}/(1+e^{-x})^2 > 0" />), et :</p>
                <LatexRenderer latex="\lim_{x \to -\infty} F(x) = 0, \qquad \lim_{x \to +\infty} F(x) = 1." />
                <p className="mt-2">Donc <LatexRenderer latex="F" /> est bien une fonction de répartition. La densité associée est :</p>
                <LatexRenderer latex="\displaystyle f(x) = F'(x) = \frac{e^{-x}}{(1+e^{-x})^2}, \quad x \in \mathbb{R}." />
                <p className="mt-2">Vérifions <LatexRenderer latex="\int_{-\infty}^{+\infty} f = [F]_{-\infty}^{+\infty} = 1" />.</p>
                <p className="mt-2"><strong>2.a.</strong> <LatexRenderer latex="X" /> et <LatexRenderer latex="Y" /> sont indépendantes (donné), donc :</p>
                <LatexRenderer latex="\displaystyle F_Z(x) = P(\max(X,Y) \le x) = P(X \le x)P(Y \le x) = F(x)^2 = \frac{1}{(1+e^{-x})^2}." />
                <p className="mt-2"><strong>2.b.</strong> Par dérivation :</p>
                <LatexRenderer latex="\displaystyle f_Z(x) = 2F(x)F'(x) = \frac{2e^{-x}}{(1+e^{-x})^3}." />
                <ConclusionBox>
                  <LatexRenderer latex="f(x) = \dfrac{e^{-x}}{(1+e^{-x})^2}" /> (loi logistique). <LatexRenderer latex="F_Z(x) = \dfrac{1}{(1+e^{-x})^2}" />, de densité <LatexRenderer latex="f_Z(x) = \dfrac{2e^{-x}}{(1+e^{-x})^3}" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex-08"
            title="Loi de Pareto"
            difficulty="Niveau: Difficile"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="a > 0" /> et <LatexRenderer latex="f_a(t) = a\,t^{-a-1}\,\mathbf{1}_{t \ge 1}" />.</p>
                <p>1. Montrer que <LatexRenderer latex="f_a" /> est une densité.</p>
                <p>2. Soit <LatexRenderer latex="X" /> de densité <LatexRenderer latex="f_a" />. a. Déterminer <LatexRenderer latex="F_X" />. b. Pour quelles valeurs de <LatexRenderer latex="a" /> <LatexRenderer latex="X" /> admet-elle une espérance ? une variance ? c. Déterminer la loi de <LatexRenderer latex="Y = \ln X" />.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Vérifier <LatexRenderer latex="\int f_a = 1" /> par calcul direct. Pour les moments, étudier la convergence des intégrales <LatexRenderer latex="\int_1^{+\infty} x\,f_a(x)\,dx" /> et <LatexRenderer latex="\int_1^{+\infty} x^2\,f_a(x)\,dx" />. Pour <LatexRenderer latex="Y = \ln X" />, calculer la fonction de répartition de <LatexRenderer latex="Y" /> et reconnaître une loi usuelle.
                </PointMethodo>
                <p><strong>1.</strong> <LatexRenderer latex="f_a \ge 0" /> et :</p>
                <LatexRenderer latex="\displaystyle \int_1^{+\infty} a\,t^{-a-1}\,dt = a\!\left[-\frac{1}{a}t^{-a}\right]_1^{+\infty} = 1." />
                <p className="mt-2">Donc <LatexRenderer latex="f_a" /> est une densité.</p>
                <p className="mt-2"><strong>2.a.</strong> <LatexRenderer latex="X(\Omega) = [1, +\infty[" />. Pour <LatexRenderer latex="x \ge 1" /> :</p>
                <LatexRenderer latex="\displaystyle F_X(x) = \int_1^x a\,t^{-a-1}\,dt = 1 - x^{-a}." />
                <p className="mt-2"><strong>2.b.</strong> <LatexRenderer latex="E(X) = \int_1^{+\infty} a\,t^{-a}\,dt = \dfrac{a}{a-1}" /> si <LatexRenderer latex="a > 1" />, sinon <LatexRenderer latex="+\infty" />. Par la formule de König-Huygens <LatexRenderer latex="V(X) = E(X^2) - E(X)^2" />, avec <LatexRenderer latex="E(X^2) = \dfrac{a}{a-2}" /> si <LatexRenderer latex="a > 2" /> :</p>
                <LatexRenderer latex="\displaystyle V(X) = \frac{a}{a-2} - \left(\frac{a}{a-1}\right)^2 = \frac{a}{(a-1)^2(a-2)} \quad (a > 2)." />
                <p className="mt-2"><strong>2.c.</strong> Soit <LatexRenderer latex="Y = \ln X" />, <LatexRenderer latex="Y(\Omega) = [0, +\infty[" />. Pour <LatexRenderer latex="y \ge 0" /> :</p>
                <LatexRenderer latex="\displaystyle F_Y(y) = P(\ln X \le y) = P(X \le e^y) = 1 - e^{-ay}." />
                <p className="mt-2">On reconnaît la fonction de répartition d'une loi exponentielle.</p>
                <ConclusionBox>
                  <LatexRenderer latex="F_X(x) = 1 - x^{-a}" /> pour <LatexRenderer latex="x \ge 1" />. <LatexRenderer latex="E(X) = \dfrac{a}{a-1}" /> si <LatexRenderer latex="a > 1" />. <LatexRenderer latex="V(X) = \dfrac{a}{(a-1)^2(a-2)}" /> si <LatexRenderer latex="a > 2" />. <LatexRenderer latex="Y = \ln X \sim \mathrm{Exp}(a)" />.
                </ConclusionBox>
              </div>
            }
          />
        </section>

        <section id="avance">
          <DifficultyHeader level="Avancé" />

          <ExerciseCard
            id="ex-09"
            title="Partie entière d'une variable uniforme"
            difficulty="Niveau: Intermédiaire"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="n \in \mathbb{N}^*" /> et <LatexRenderer latex="X \sim \mathcal{U}([0, n])" />. Déterminer la loi de <LatexRenderer latex="\lfloor X \rfloor" /> (partie entière de <LatexRenderer latex="X" />).</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Identifier d'abord <LatexRenderer latex="\lfloor X \rfloor(\Omega) = \{0, 1, \dots, n-1\}" /> (en notant que <LatexRenderer latex="P(X = n) = 0" /> pour une variable continue). Calculer chaque probabilité <LatexRenderer latex="P(\lfloor X \rfloor = k)" /> en utilisant la loi uniforme.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="X \sim \mathcal{U}([0,n])" />. Comme <LatexRenderer latex="X" /> est continue, <LatexRenderer latex="P(X = n) = 0" />, donc <LatexRenderer latex="\lfloor X \rfloor(\Omega) = \{0, 1, \dots, n-1\}" />.</p>
                <p className="mt-2">Pour <LatexRenderer latex="k \in \{0, 1, \dots, n-1\}" /> :</p>
                <LatexRenderer latex="\displaystyle P(\lfloor X \rfloor = k) = P(k \le X < k+1) = \frac{(k+1) - k}{n} = \frac{1}{n}." />
                <p className="mt-2">Toutes les valeurs sont équiprobables.</p>
                <ConclusionBox>
                  <LatexRenderer latex="\lfloor X \rfloor \sim \mathcal{U}(\{0, 1, \dots, n-1\})" /> (loi uniforme discrète sur <LatexRenderer latex="n" /> valeurs).
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex-10"
            title="Minimum de deux lois exponentielles"
            difficulty="Niveau: Intermédiaire"
            content={
              <div className="space-y-3">
                <p>Soient <LatexRenderer latex="X \sim \mathrm{Exp}(\lambda)" /> et <LatexRenderer latex="Y \sim \mathrm{Exp}(\mu)" /> indépendantes. Déterminer la loi de <LatexRenderer latex="Z = \min(X, Y)" />.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  La loi du minimum se traite via la fonction de survie : <LatexRenderer latex="P(Z > x) = P(X > x)P(Y > x)" /> par indépendance. On reconnaît une loi exponentielle.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="Z = \min(X, Y)" />, <LatexRenderer latex="Z(\Omega) = [0, +\infty[" />. Pour <LatexRenderer latex="x \ge 0" /> :</p>
                <LatexRenderer latex="\displaystyle P(Z > x) = P(X > x,\, Y > x)." />
                <p className="mt-2"><LatexRenderer latex="X" /> et <LatexRenderer latex="Y" /> sont indépendantes (donné), donc :</p>
                <LatexRenderer latex="\displaystyle P(Z > x) = P(X > x)\,P(Y > x) = e^{-\lambda x}\,e^{-\mu x} = e^{-(\lambda + \mu)x}." />
                <p className="mt-2">D'où <LatexRenderer latex="F_Z(x) = 1 - e^{-(\lambda+\mu)x}" /> pour <LatexRenderer latex="x \ge 0" />. La densité <LatexRenderer latex="(\lambda + \mu)e^{-(\lambda+\mu)x}" /> vérifie bien <LatexRenderer latex="\int_0^{+\infty} (\lambda+\mu)e^{-(\lambda+\mu)x}\,dx = 1" />.</p>
                <ConclusionBox>
                  <LatexRenderer latex="Z = \min(X, Y) \sim \mathrm{Exp}(\lambda + \mu)" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex-11"
            title="Densité de probabilité et espérance nulle"
            difficulty="Niveau: Difficile"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="f(t) = \dfrac{2}{\pi(e^t + e^{-t})}" /> définie sur <LatexRenderer latex="\mathbb{R}" />.</p>
                <p>1. Montrer que <LatexRenderer latex="f" /> est une densité de probabilité.</p>
                <p>2. Montrer que la variable <LatexRenderer latex="X" /> de densité <LatexRenderer latex="f" /> admet une espérance nulle.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Vérifier <LatexRenderer latex="\int f = 1" /> par un changement de variable <LatexRenderer latex="u = e^t" /> qui transforme l'intégrale en une intégrale d'arctangente. Pour l'espérance, exploiter la parité de l'intégrande et justifier la convergence avant de conclure.
                </PointMethodo>
                <p><strong>1.</strong> <LatexRenderer latex="f(t) > 0" /> pour tout <LatexRenderer latex="t \in \mathbb{R}" />. Changement de variable <LatexRenderer latex="u = e^t" />, <LatexRenderer latex="du = e^t\,dt" />, <LatexRenderer latex="dt = du/u" /> :</p>
                <LatexRenderer latex="\displaystyle I = \frac{2}{\pi}\int_{-\infty}^{+\infty} \frac{dt}{e^t + e^{-t}} = \frac{2}{\pi}\int_0^{+\infty} \frac{du}{u(u + 1/u)} = \frac{2}{\pi}\int_0^{+\infty} \frac{du}{u^2 + 1} = \frac{2}{\pi} \cdot \frac{\pi}{2} = 1." />
                <p className="mt-2">Donc <LatexRenderer latex="\int f = 1" /> et <LatexRenderer latex="f" /> est bien une densité.</p>
                <p className="mt-2"><strong>2.</strong> La fonction <LatexRenderer latex="t \mapsto t\,f(t)" /> est impaire, car <LatexRenderer latex="e^t + e^{-t}" /> est pair. Pour justifier la convergence : pour <LatexRenderer latex="t \to +\infty" />, <LatexRenderer latex="\dfrac{t\,f(t)}{1} \sim \dfrac{2t}{\pi e^t} \to 0" /> et <LatexRenderer latex="\int_0^{+\infty} \dfrac{t}{e^t}\,dt = \Gamma(2) = 1 < +\infty" />. Ainsi l'intégrale converge, et par imparité :</p>
                <LatexRenderer latex="\displaystyle E(X) = \int_{-\infty}^{+\infty} t\,f(t)\,dt = 0." />
                <ConclusionBox>
                  <LatexRenderer latex="f" /> est une densité de probabilité et <LatexRenderer latex="E(X) = 0" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex-12"
            title="Densité logarithmique et transformations"
            difficulty="Niveau: Difficile"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="f(x) = \dfrac{1}{\ln 2} \cdot \dfrac{1}{1+x}" /> pour <LatexRenderer latex="x \in [0,1]" />, et <LatexRenderer latex="f(x) = 0" /> sinon.</p>
                <p>1. Montrer que <LatexRenderer latex="f" /> est une densité et calculer <LatexRenderer latex="F_X" />.</p>
                <p>2. On pose <LatexRenderer latex="Y = 1/X" /> et <LatexRenderer latex="Z = \lfloor Y \rfloor" />. Trouver les lois de <LatexRenderer latex="Y" /> et <LatexRenderer latex="Z" />. Admettent-elles une espérance ?</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Vérifier <LatexRenderer latex="\int f = 1" /> par calcul direct. La loi de <LatexRenderer latex="Y = 1/X" /> s'obtient en exprimant <LatexRenderer latex="F_Y" /> en fonction de <LatexRenderer latex="F_X" />, puis on dérive. Pour la loi de <LatexRenderer latex="Z = \lfloor Y \rfloor" /> (discrète), on calcule <LatexRenderer latex="P(Z = k) = P(k \le Y < k+1)" /> pour chaque entier.
                </PointMethodo>
                <p><strong>1.</strong> Vérifions <LatexRenderer latex="\int f = 1" /> :</p>
                <LatexRenderer latex="\displaystyle \frac{1}{\ln 2}\int_0^1 \frac{dx}{1+x} = \frac{1}{\ln 2}[\ln(1+x)]_0^1 = \frac{\ln 2}{\ln 2} = 1." />
                <p className="mt-2">Pour <LatexRenderer latex="x \in [0,1]" /> : <LatexRenderer latex="F_X(x) = \dfrac{\ln(1+x)}{\ln 2}" />.</p>
                <p className="mt-2"><strong>2. Loi de <LatexRenderer latex="Y = 1/X" />.</strong> <LatexRenderer latex="X(\Omega) = [0,1]" /> donc <LatexRenderer latex="Y(\Omega) = [1,+\infty[" />. Pour <LatexRenderer latex="y > 1" /> :</p>
                <LatexRenderer latex="\displaystyle F_Y(y) = P\!\left(X \ge \frac{1}{y}\right) = 1 - F_X\!\left(\frac{1}{y}\right) = 1 - \frac{\ln(1 + 1/y)}{\ln 2}." />
                <p className="mt-2">D'où la densité de <LatexRenderer latex="Y" /> : <LatexRenderer latex="f_Y(y) = \dfrac{1}{\ln 2} \cdot \dfrac{1}{y(1+y)}" /> pour <LatexRenderer latex="y > 1" />.</p>
                <p className="mt-2">Existence de <LatexRenderer latex="E(Y)" /> : <LatexRenderer latex="\int_1^{+\infty} \dfrac{dy}{1+y} = +\infty" />, donc <strong><LatexRenderer latex="Y" /> n'admet pas d'espérance</strong>.</p>
                <p className="mt-2"><strong>Loi de <LatexRenderer latex="Z = \lfloor Y \rfloor" />.</strong> <LatexRenderer latex="Z(\Omega) = \mathbb{N}^*" />. Pour <LatexRenderer latex="k \ge 1" /> :</p>
                <LatexRenderer latex="\displaystyle P(Z=k) = P(k \le Y < k+1) = F_Y(k+1) - F_Y(k) = \frac{1}{\ln 2}\ln\!\frac{(k+1)^2}{k(k+2)}." />
                <p className="mt-2">Pour <LatexRenderer latex="k" /> grand, <LatexRenderer latex="k\,P(Z=k) \sim \dfrac{1}{k\ln 2}" />, donc la série diverge et <strong><LatexRenderer latex="Z" /> n'admet pas d'espérance</strong>.</p>
                <ConclusionBox>
                  <LatexRenderer latex="F_X(x) = \dfrac{\ln(1+x)}{\ln 2}" /> sur <LatexRenderer latex="[0,1]" />. <LatexRenderer latex="Y" /> et <LatexRenderer latex="Z" /> n'admettent pas d'espérance.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex-13"
            title="Loi logistique et supremum — Généralisation"
            difficulty="Niveau: Difficile"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="F(x) = \dfrac{1}{1+e^{-x}}" /> sur <LatexRenderer latex="\mathbb{R}" />.</p>
                <p>1. Vérifier que <LatexRenderer latex="F" /> est une fonction de répartition.</p>
                <p>2. Soient <LatexRenderer latex="X_1, \dots, X_n" /> i.i.d. de fonction de répartition <LatexRenderer latex="F" />. Déterminer la loi de <LatexRenderer latex="Z_n = \sup(X_1,\dots,X_n)" /> et sa densité. Donner le cas <LatexRenderer latex="n = 2" />.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour le maximum de <LatexRenderer latex="n" /> variables indépendantes de même loi, la fonction de répartition est la puissance <LatexRenderer latex="n" />-ième de la fonction de répartition commune. La densité s'obtient par dérivation.
                </PointMethodo>
                <p><strong>1.</strong> <LatexRenderer latex="F" /> est de classe <LatexRenderer latex="\mathcal{C}^\infty" />, strictement croissante (<LatexRenderer latex="F'(x) > 0" />), avec <LatexRenderer latex="\lim_{-\infty} F = 0" /> et <LatexRenderer latex="\lim_{+\infty} F = 1" />. Donc <LatexRenderer latex="F" /> est une fonction de répartition (loi logistique).</p>
                <p className="mt-2"><strong>2.</strong> Les <LatexRenderer latex="X_i" /> sont i.i.d. (donné), donc :</p>
                <LatexRenderer latex="\displaystyle F_{Z_n}(x) = P(Z_n \le x) = \prod_{i=1}^n P(X_i \le x) = F(x)^n = \frac{1}{(1+e^{-x})^n}." />
                <p className="mt-2">La densité de <LatexRenderer latex="Z_n" /> est obtenue par dérivation :</p>
                <LatexRenderer latex="\displaystyle f_{Z_n}(x) = n\,F(x)^{n-1}F'(x) = \frac{n\,e^{-x}}{(1+e^{-x})^{n+1}}." />
                <p className="mt-2">Pour <LatexRenderer latex="n = 2" /> : <LatexRenderer latex="F_{Z_2}(x) = \dfrac{1}{(1+e^{-x})^2}" /> et <LatexRenderer latex="f_{Z_2}(x) = \dfrac{2e^{-x}}{(1+e^{-x})^3}" />.</p>
                <ConclusionBox>
                  <LatexRenderer latex="F_{Z_n}(x) = \dfrac{1}{(1+e^{-x})^n}" />, de densité <LatexRenderer latex="f_{Z_n}(x) = \dfrac{n\,e^{-x}}{(1+e^{-x})^{n+1}}" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex-14"
            title="Loi de Pareto — Minimum et transformation"
            difficulty="Niveau: Concours"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="f(t) = \dfrac{a}{t^{a+1}}\,\mathbf{1}_{t \ge 1}" /> avec <LatexRenderer latex="a > 0" />.</p>
                <p>1. Montrer que <LatexRenderer latex="f" /> est une densité et calculer <LatexRenderer latex="F_X" />. Pour quelles valeurs de <LatexRenderer latex="a" /> <LatexRenderer latex="X" /> admet-elle une espérance ?</p>
                <p>2. Soient <LatexRenderer latex="X_1,\dots,X_n" /> i.i.d. de densité <LatexRenderer latex="f" />. Déterminer la loi de <LatexRenderer latex="T_n = \inf(X_1,\dots,X_n)" />.</p>
                <p>3. On pose <LatexRenderer latex="Z = \ln X" />. Déterminer la loi de <LatexRenderer latex="Z" />, son espérance et sa variance.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Vérifier <LatexRenderer latex="\int f = 1" /> par intégration directe. Pour le minimum de variables indépendantes, la fonction de survie est le produit des fonctions de survie. Pour <LatexRenderer latex="Z = \ln X" />, calculer <LatexRenderer latex="F_Z" /> et reconnaître une loi usuelle.
                </PointMethodo>
                <p><strong>1.</strong> <LatexRenderer latex="\int_1^{+\infty} a\,t^{-a-1}\,dt = 1" /> (calcul direct). <LatexRenderer latex="X(\Omega) = [1,+\infty[" /> et <LatexRenderer latex="F_X(x) = 1 - x^{-a}" /> pour <LatexRenderer latex="x \ge 1" />.</p>
                <p className="mt-2"><LatexRenderer latex="E(X) = a\int_1^{+\infty} t^{-a}\,dt" /> converge si et seulement si <LatexRenderer latex="a > 1" />, auquel cas <LatexRenderer latex="E(X) = \dfrac{a}{a-1}" />.</p>
                <p className="mt-2"><strong>2.</strong> Les <LatexRenderer latex="X_i" /> sont i.i.d. (donné). La fonction de survie du minimum :</p>
                <LatexRenderer latex="\displaystyle P(T_n > x) = \prod_{i=1}^n P(X_i > x) = (x^{-a})^n = x^{-an}, \quad x \ge 1." />
                <p className="mt-2">Donc <LatexRenderer latex="F_{T_n}(x) = 1 - x^{-an}" /> pour <LatexRenderer latex="x \ge 1" />, et <LatexRenderer latex="T_n" /> suit une loi de Pareto de paramètre <LatexRenderer latex="an" />.</p>
                <p className="mt-2"><strong>3.</strong> Soit <LatexRenderer latex="Z = \ln X" />, <LatexRenderer latex="Z(\Omega) = [0,+\infty[" />. Pour <LatexRenderer latex="y \ge 0" /> :</p>
                <LatexRenderer latex="\displaystyle F_Z(y) = P(X \le e^y) = 1 - e^{-ay}." />
                <p className="mt-2">On reconnaît la loi exponentielle de paramètre <LatexRenderer latex="a" />. Par la formule de König-Huygens : <LatexRenderer latex="V(Z) = E(Z^2) - E(Z)^2 = \dfrac{2}{a^2} - \dfrac{1}{a^2} = \dfrac{1}{a^2}" />.</p>
                <ConclusionBox>
                  <LatexRenderer latex="T_n" /> est de Pareto de paramètre <LatexRenderer latex="an" />. <LatexRenderer latex="Z = \ln X \sim \mathrm{Exp}(a)" />, <LatexRenderer latex="E(Z) = 1/a" />, <LatexRenderer latex="V(Z) = 1/a^2" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex-15"
            title="Moments et espérance via la fonction de répartition"
            difficulty="Niveau: Concours"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="X" /> une variable à densité de fonction de répartition <LatexRenderer latex="F \in \mathcal{C}^1(\mathbb{R})" />, admettant une espérance et vérifiant <LatexRenderer latex="\displaystyle\lim_{x \to +\infty} x[1 - F(x) - F(-x)] = 0" />.</p>
                <p>Montrer que <LatexRenderer latex="\displaystyle E(X) = \int_0^{+\infty} [1 - F(x) - F(-x)]\,dx" />.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Intégrer par parties l'expression <LatexRenderer latex="\int_0^a [1-F(x)-F(-x)]\,dx" /> en posant <LatexRenderer latex="u = 1-F(x)-F(-x)" /> et <LatexRenderer latex="v = x" />. Les termes aux bords sont traités par l'hypothèse de décroissance. On regroupe ensuite les deux intégrales obtenues pour retrouver <LatexRenderer latex="E(X)" />.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="a > 0" />. Intégration par parties sur <LatexRenderer latex="[0,a]" /> avec <LatexRenderer latex="u = 1-F(x)-F(-x)" /> et <LatexRenderer latex="v' = 1" /> :</p>
                <LatexRenderer latex="\displaystyle \int_0^a [1-F(x)-F(-x)]\,dx = \bigl[x(1-F(x)-F(-x))\bigr]_0^a + \int_0^a x\,f(x)\,dx - \int_0^a x\,f(-x)\,dx." />
                <p className="mt-2">Changement de variable <LatexRenderer latex="u = -x" /> dans la dernière intégrale : <LatexRenderer latex="-\int_0^a x\,f(-x)\,dx = \int_{-a}^0 u\,f(u)\,du" />. D'où :</p>
                <LatexRenderer latex="\displaystyle \int_0^a [1-F(x)-F(-x)]\,dx = a\bigl[1-F(a)-F(-a)\bigr] + \int_{-a}^a x\,f(x)\,dx." />
                <p className="mt-2">En faisant <LatexRenderer latex="a \to +\infty" /> : par hypothèse le premier terme tend vers 0, et le second tend vers <LatexRenderer latex="E(X)" />.</p>
                <ConclusionBox>
                  <LatexRenderer latex="\displaystyle E(X) = \int_0^{+\infty} [1-F(x)-F(-x)]\,dx" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex-16"
            title="Espérance et anti-répartition"
            difficulty="Niveau: Intermédiaire"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="X" /> une variable aléatoire réelle positive à densité, de fonction de répartition <LatexRenderer latex="F" />, admettant une espérance.</p>
                <p>1. Justifier que <LatexRenderer latex="\displaystyle\lim_{x \to +\infty} x\,P(X \ge x) = 0" />.</p>
                <p>2. Montrer que <LatexRenderer latex="\displaystyle E(X) = \int_0^{+\infty} P(X > x)\,dx = \int_0^{+\infty} [1-F(x)]\,dx" />.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour la question 1, encadrer <LatexRenderer latex="x\,P(X \ge x)" /> par le reste de l'intégrale définissant <LatexRenderer latex="E(X)" />. Pour la question 2, intégrer par parties en exploitant le résultat précédent.
                </PointMethodo>
                <p><strong>1.</strong> Pour <LatexRenderer latex="x \ge 0" /> :</p>
                <LatexRenderer latex="\displaystyle 0 \le x\,P(X \ge x) = x\int_x^{+\infty} f(t)\,dt \le \int_x^{+\infty} t\,f(t)\,dt." />
                <p className="mt-2">Comme <LatexRenderer latex="E(X) = \int_0^{+\infty} t\,f(t)\,dt < +\infty" />, le reste tend vers 0 quand <LatexRenderer latex="x \to +\infty" />. D'où <LatexRenderer latex="\lim_{x \to +\infty} x\,P(X \ge x) = 0" />.</p>
                <p className="mt-2"><strong>2.</strong> Intégration par parties sur <LatexRenderer latex="[0,x]" /> avec <LatexRenderer latex="u = t" /> et <LatexRenderer latex="v' = f(t)" /> :</p>
                <LatexRenderer latex="\displaystyle \int_0^x t\,f(t)\,dt = \bigl[t(F(t)-1)\bigr]_0^x - \int_0^x (F(t)-1)\,dt = x(F(x)-1) + \int_0^x [1-F(t)]\,dt." />
                <p className="mt-2">Or <LatexRenderer latex="x(F(x)-1) = -x\,P(X \ge x) \to 0" /> (question 1). En faisant <LatexRenderer latex="x \to +\infty" /> :</p>
                <LatexRenderer latex="\displaystyle E(X) = \int_0^{+\infty} [1-F(t)]\,dt." />
                <ConclusionBox>
                  <LatexRenderer latex="\displaystyle E(X) = \int_0^{+\infty} P(X > x)\,dx" /> pour toute variable positive admettant une espérance.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex-17"
            title="Espérance d'une transformation logarithmique"
            difficulty="Niveau: Difficile"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="\theta \in [-2, 2]" />. Soit <LatexRenderer latex="X" /> de densité <LatexRenderer latex="f_\theta(x) = \left(\theta x + 1 - \dfrac{\theta}{2}\right)\mathbf{1}_{x \in [0,1]}" />.</p>
                <p>On pose <LatexRenderer latex="Y = -\ln X" />. Montrer que <LatexRenderer latex="Y" /> admet une espérance et la calculer.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Par le <strong>théorème de transfert</strong>, <LatexRenderer latex="E(Y) = E(-\ln X) = \int_0^1 (-\ln x)\,f_\theta(x)\,dx" />. La convergence se justifie en comparant à <LatexRenderer latex="\int_0^1 (-\ln x)\,dx" />. Les intégrales <LatexRenderer latex="\int_0^1 \ln x\,dx" /> et <LatexRenderer latex="\int_0^1 x\ln x\,dx" /> sont des intégrales classiques.
                </PointMethodo>
                <Astuce>
                  Rappels : <LatexRenderer latex="\int_0^1 \ln x\,dx = -1" /> et <LatexRenderer latex="\int_0^1 x\ln x\,dx = -\dfrac{1}{4}" /> (intégration par parties).
                </Astuce>
                <p>D'après le <strong>théorème de transfert</strong>, <LatexRenderer latex="E(Y)" /> existe si et seulement si <LatexRenderer latex="\int_0^1 (-\ln x)\,f_\theta(x)\,dx < +\infty" />. Or pour <LatexRenderer latex="x \to 0^+" /> :</p>
                <LatexRenderer latex="(-\ln x)\,f_\theta(x) \sim -\ln x \cdot \left(1 - \frac{\theta}{2}\right)." />
                <p className="mt-2">Comme <LatexRenderer latex="\int_0^1 (-\ln x)\,dx = 1 < +\infty" />, l'intégrale converge et <LatexRenderer latex="Y" /> admet une espérance.</p>
                <p className="mt-2">Calcul :</p>
                <LatexRenderer latex="\displaystyle E(Y) = -\theta\int_0^1 x\ln x\,dx - \left(1-\frac{\theta}{2}\right)\int_0^1 \ln x\,dx = -\theta\!\left(-\frac{1}{4}\right) - \left(1-\frac{\theta}{2}\right)(-1)." />
                <LatexRenderer latex="\displaystyle = \frac{\theta}{4} + 1 - \frac{\theta}{2} = 1 - \frac{\theta}{4}." />
                <ConclusionBox>
                  <LatexRenderer latex="Y = -\ln X" /> admet une espérance et <LatexRenderer latex="E(Y) = 1 - \dfrac{\theta}{4}" />.
                </ConclusionBox>
              </div>
            }
          />
        </section>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre6VariablesAleatoiresDensiteExercicesPage;
