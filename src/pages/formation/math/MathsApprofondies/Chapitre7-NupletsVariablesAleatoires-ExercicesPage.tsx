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

const Chapitre7NupletsVariablesAleatoiresExercicesPage = () => {
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
      chapterNumber={7}
      chapterTitle="n-uplets de variables aléatoires"
      description="Exercices sur les vecteurs aléatoires, lois conjointes, espérance et indépendance."
      slug="nuplets-variables-aleatoires"
      activeSection="exercises"
      showNavigation={true}
      previousChapter={{
        slug: "maths-variables-aleatoires-densite",
        title: "Variables aléatoires à densité"
      }}
      nextChapter={{
        slug: "polynomes",
        title: "Polynômes"
      }}
    >
      <div className="space-y-8">

        <section id="lois-conjointes">
          <DifficultyHeader level="Lois conjointes et marginales" />

          <ExerciseCard
            id="ex-01"
            title="Loi conjointe — Marginales et indépendance"
            difficulty="Niveau: Facile"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="(X, Y)" /> un couple de variables aléatoires discrètes. On donne la loi conjointe :</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-center border-collapse text-sm">
                    <thead>
                      <tr className="bg-stone-50 border-b border-stone-200">
                        <th className="p-2 border border-stone-200 font-semibold">X \ Y</th>
                        <th className="p-2 border border-stone-200">0</th>
                        <th className="p-2 border border-stone-200">1</th>
                        <th className="p-2 border border-stone-200">2</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 font-bold border border-stone-200 bg-stone-50">1</td>
                        <td className="p-2 border border-stone-200">0,1</td>
                        <td className="p-2 border border-stone-200">0,2</td>
                        <td className="p-2 border border-stone-200">0,1</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold border border-stone-200 bg-stone-50">2</td>
                        <td className="p-2 border border-stone-200">0,15</td>
                        <td className="p-2 border border-stone-200">0,25</td>
                        <td className="p-2 border border-stone-200">0,2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>1. Déterminer les lois marginales de <LatexRenderer latex="X" /> et <LatexRenderer latex="Y" />.</p>
                <p>2. <LatexRenderer latex="X" /> et <LatexRenderer latex="Y" /> sont-elles indépendantes ?</p>
                <p>3. Calculer <LatexRenderer latex="E(X)" />, <LatexRenderer latex="E(Y)" /> et <LatexRenderer latex="E(XY)" />.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Les lois marginales s'obtiennent en sommant les lignes (pour <LatexRenderer latex="X" />) et les colonnes (pour <LatexRenderer latex="Y" />) du tableau. L'indépendance se vérifie en comparant <LatexRenderer latex="P(X=i, Y=j)" /> avec le produit <LatexRenderer latex="P(X=i)P(Y=j)" /> pour chaque couple. Les espérances se calculent par le théorème de transfert.
                </PointMethodo>
                <p><strong>1. Lois marginales.</strong> Soit <LatexRenderer latex="X(\Omega) = \{1, 2\}" /> et <LatexRenderer latex="Y(\Omega) = \{0, 1, 2\}" />.</p>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li>Loi de <LatexRenderer latex="X" /> : <LatexRenderer latex="P(X=1) = 0{,}1 + 0{,}2 + 0{,}1 = 0{,}4" />, <LatexRenderer latex="P(X=2) = 0{,}6" />.</li>
                  <li>Loi de <LatexRenderer latex="Y" /> : <LatexRenderer latex="P(Y=0) = 0{,}25" />, <LatexRenderer latex="P(Y=1) = 0{,}45" />, <LatexRenderer latex="P(Y=2) = 0{,}30" />.</li>
                </ul>
                <p className="mt-2"><strong>2. Indépendance.</strong> Pour démontrer ou réfuter l'indépendance, il suffit de trouver un couple <LatexRenderer latex="(i,j)" /> où <LatexRenderer latex="P(X=i, Y=j) \ne P(X=i)P(Y=j)" />. Testons <LatexRenderer latex="(X=1, Y=1)" /> :</p>
                <LatexRenderer latex="P(X=1)P(Y=1) = 0{,}4 \times 0{,}45 = 0{,}18 \ne 0{,}20 = P(X=1, Y=1)." />
                <p className="mt-2">Donc <strong><LatexRenderer latex="X" /> et <LatexRenderer latex="Y" /> ne sont pas indépendantes</strong>.</p>
                <p className="mt-2"><strong>3. Espérances.</strong> Par le <strong>théorème de transfert</strong> :</p>
                <LatexRenderer latex="E(X) = 1 \times 0{,}4 + 2 \times 0{,}6 = 1{,}6." />
                <LatexRenderer latex="E(Y) = 0 \times 0{,}25 + 1 \times 0{,}45 + 2 \times 0{,}30 = 1{,}05." />
                <LatexRenderer latex="\displaystyle E(XY) = \sum_{i,j} ij\,P(X=i, Y=j) = 1(0{,}2)+2(0{,}1)+2(0{,}25)+4(0{,}2) = 0{,}2+0{,}2+0{,}5+0{,}8 = 1{,}7." />
                <ConclusionBox>
                  <LatexRenderer latex="E(X) = 1{,}6" />, <LatexRenderer latex="E(Y) = 1{,}05" />, <LatexRenderer latex="E(XY) = 1{,}7" />. <LatexRenderer latex="X" /> et <LatexRenderer latex="Y" /> ne sont pas indépendantes.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex-02"
            title="Somme de variables de Bernoulli indépendantes"
            difficulty="Niveau: Facile"
            content={
              <div className="space-y-3">
                <p>Soient <LatexRenderer latex="X_1, X_2, X_3" /> trois variables aléatoires indépendantes suivant <LatexRenderer latex="\mathcal{B}(0{,}3)" />.</p>
                <p>1. Déterminer la loi de <LatexRenderer latex="S = X_1 + X_2 + X_3" />.</p>
                <p>2. Calculer <LatexRenderer latex="P(S = 2)" />.</p>
                <p>3. Calculer <LatexRenderer latex="E(S)" /> et <LatexRenderer latex="V(S)" />.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  La somme de <LatexRenderer latex="n" /> variables de Bernoulli indépendantes de même paramètre <LatexRenderer latex="p" /> suit une loi binomiale <LatexRenderer latex="\mathcal{B}(n, p)" />. L'espérance et la variance de la somme découlent des formules de la loi binomiale, ou de la linéarité et de l'additivité de la variance pour des variables indépendantes.
                </PointMethodo>
                <p><strong>1.</strong> Les <LatexRenderer latex="X_i \sim \mathcal{B}(0{,}3)" /> sont indépendantes (donné), donc par stabilité de la loi binomiale par somme :</p>
                <LatexRenderer latex="S = X_1 + X_2 + X_3 \sim \mathcal{B}(3,\, 0{,}3)." />
                <p className="mt-2">Ainsi <LatexRenderer latex="S(\Omega) = \{0, 1, 2, 3\}" />.</p>
                <p className="mt-2"><strong>2.</strong> Par la formule de la loi binomiale :</p>
                <LatexRenderer latex="P(S=2) = \binom{3}{2}(0{,}3)^2(0{,}7)^1 = 3 \times 0{,}09 \times 0{,}7 = 0{,}189." />
                <p className="mt-2"><strong>3.</strong> Par les formules de <LatexRenderer latex="\mathcal{B}(n, p)" /> :</p>
                <LatexRenderer latex="E(S) = np = 3 \times 0{,}3 = 0{,}9." />
                <LatexRenderer latex="V(S) = np(1-p) = 3 \times 0{,}3 \times 0{,}7 = 0{,}63." />
                <ConclusionBox>
                  <LatexRenderer latex="S \sim \mathcal{B}(3,\, 0{,}3)" />. <LatexRenderer latex="P(S=2) = 0{,}189" />, <LatexRenderer latex="E(S) = 0{,}9" />, <LatexRenderer latex="V(S) = 0{,}63" />.
                </ConclusionBox>
              </div>
            }
          />
        </section>

        <section id="esperance-sommes">
          <DifficultyHeader level="Espérance de somme et moyenne empirique" />

          <ExerciseCard
            id="ex-03"
            title="Moyenne empirique — Espérance et variance"
            difficulty="Niveau: Intermédiaire"
            content={
              <div className="space-y-3">
                <p>Soient <LatexRenderer latex="X_i" /> i.i.d. avec <LatexRenderer latex="E(X_i) = \mu" /> et <LatexRenderer latex="V(X_i) = \sigma^2" />. On pose <LatexRenderer latex="\bar{X}_n = \dfrac{1}{n}\sum_{i=1}^n X_i" />.</p>
                <p>Calculer <LatexRenderer latex="E(\bar{X}_n)" /> et <LatexRenderer latex="V(\bar{X}_n)" />.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  L'espérance de la moyenne empirique s'obtient par linéarité de l'espérance. La variance se calcule en utilisant l'additivité de la variance pour des variables indépendantes.
                </PointMethodo>
                <p>Par linéarité de l'espérance et i.i.d. (donné) :</p>
                <LatexRenderer latex="\displaystyle E(\bar{X}_n) = \frac{1}{n}\sum_{i=1}^n E(X_i) = \frac{n\mu}{n} = \mu." />
                <p className="mt-2">Par indépendance (additivité de la variance pour des variables indépendantes) :</p>
                <LatexRenderer latex="\displaystyle V(\bar{X}_n) = \frac{1}{n^2}\sum_{i=1}^n V(X_i) = \frac{n\sigma^2}{n^2} = \frac{\sigma^2}{n}." />
                <ConclusionBox>
                  <LatexRenderer latex="E(\bar{X}_n) = \mu" /> (estimateur sans biais) et <LatexRenderer latex="V(\bar{X}_n) = \dfrac{\sigma^2}{n}" /> (décroît en <LatexRenderer latex="1/n" />).
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex-04"
            title="Somme de variables de Poisson — Loi conditionnelle"
            difficulty="Niveau: Intermédiaire"
            content={
              <div className="space-y-3">
                <p>Soient <LatexRenderer latex="X \sim \mathcal{P}(2)" />, <LatexRenderer latex="Y \sim \mathcal{P}(3)" />, <LatexRenderer latex="Z \sim \mathcal{P}(1)" /> indépendantes.</p>
                <p>1. Déterminer la loi de <LatexRenderer latex="S = X + Y + Z" />.</p>
                <p>2. Calculer <LatexRenderer latex="P(X = 2 \mid S = 5)" />.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  La somme de variables de Poisson indépendantes est une variable de Poisson de paramètre la somme des paramètres. Pour la probabilité conditionnelle, on utilise la définition et l'indépendance de <LatexRenderer latex="X" /> et <LatexRenderer latex="Y + Z" />.
                </PointMethodo>
                <p><strong>1.</strong> Les variables sont indépendantes (donné). Par stabilité de la loi de Poisson par somme :</p>
                <LatexRenderer latex="S = X + Y + Z \sim \mathcal{P}(2 + 3 + 1) = \mathcal{P}(6)." />
                <p className="mt-2"><strong>2.</strong> Soit <LatexRenderer latex="P(X = 2 \mid S = 5)" />. Par définition :</p>
                <LatexRenderer latex="\displaystyle P(X=2 \mid S=5) = \frac{P(X=2,\, S=5)}{P(S=5)} = \frac{P(X=2,\, Y+Z=3)}{P(S=5)}." />
                <p className="mt-2">Par indépendance de <LatexRenderer latex="X" /> et <LatexRenderer latex="(Y, Z)" />, et sachant que <LatexRenderer latex="Y + Z \sim \mathcal{P}(4)" /> :</p>
                <LatexRenderer latex="\displaystyle P(X=2,\, Y+Z=3) = P(X=2)\,P(Y+Z=3) = \frac{2^2}{2!}e^{-2} \times \frac{4^3}{3!}e^{-4}." />
                <LatexRenderer latex="\displaystyle P(S=5) = \frac{6^5}{5!}e^{-6}." />
                <p className="mt-2">D'où :</p>
                <LatexRenderer latex="\displaystyle P(X=2 \mid S=5) = \frac{\frac{4}{2}\cdot\frac{64}{6}}{\frac{7776}{120}} = \binom{5}{2}\left(\frac{2}{6}\right)^2\!\left(\frac{4}{6}\right)^3 \approx 0{,}329." />
                <ConclusionBox>
                  <LatexRenderer latex="S \sim \mathcal{P}(6)" />. La loi conditionnelle de <LatexRenderer latex="X" /> sachant <LatexRenderer latex="S = 5" /> suit une loi binomiale <LatexRenderer latex="\mathcal{B}(5,\, 1/3)" />, et <LatexRenderer latex="P(X=2 \mid S=5) \approx 0{,}329" />.
                </ConclusionBox>
              </div>
            }
          />
        </section>

        <section id="synthese">
          <DifficultyHeader level="Problèmes de synthèse" />

          <ExerciseCard
            id="ex-05"
            title="Approximation normale de la somme — Lot de pièces défectueuses"
            difficulty="Niveau: Concours"
            content={
              <div className="space-y-3">
                <p>Une usine produit des pièces avec une probabilité de défaut <LatexRenderer latex="p = 0{,}02" />. On contrôle 10 lots de 100 pièces chacun. Soit <LatexRenderer latex="T" /> le nombre total de pièces défectueuses.</p>
                <p>1. Donner la loi de <LatexRenderer latex="X" /> (nombre de défauts dans un lot) et son approximation.</p>
                <p>2. Estimer <LatexRenderer latex="P(T \le 15)" /> par approximation normale.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour un lot, identifier la loi de <LatexRenderer latex="X" /> et l'approcher par une loi de Poisson. La somme de 10 variables de Poisson indépendantes est une variable de Poisson de la somme des paramètres. Pour l'approximation normale du TCL, vérifier que les variables sont i.i.d., puis standardiser.
                </PointMethodo>
                <Astuce>
                  Le TCL (approximation) stipule que pour <LatexRenderer latex="n" /> grand, <LatexRenderer latex="\dfrac{T - E(T)}{\sqrt{V(T)}} \approx \mathcal{N}(0,1)" />. C'est une approximation, on le précise toujours.
                </Astuce>
                <p><strong>1.</strong> Soit <LatexRenderer latex="X" /> le nombre de défauts dans un lot. Les pièces sont indépendantes avec probabilité de défaut <LatexRenderer latex="p = 0{,}02" />, donc <LatexRenderer latex="X \sim \mathcal{B}(100,\, 0{,}02)" />. <LatexRenderer latex="X(\Omega) = \{0, 1, \dots, 100\}" />.</p>
                <p className="mt-2">Or <LatexRenderer latex="n = 100" /> grand, <LatexRenderer latex="p = 0{,}02" /> petit, <LatexRenderer latex="\lambda = np = 2" /> modéré, donc <LatexRenderer latex="X \approx \mathcal{P}(2)" />.</p>
                <p className="mt-2"><strong>2.</strong> Soit <LatexRenderer latex="T = \sum_{i=1}^{10} X_i" /> où les <LatexRenderer latex="X_i" /> sont i.i.d. <LatexRenderer latex="\mathcal{P}(2)" /> (indépendance des lots, donné). D'où <LatexRenderer latex="T \sim \mathcal{P}(20)" />, et :</p>
                <LatexRenderer latex="E(T) = 20, \qquad V(T) = 20." />
                <p className="mt-2">Par le <strong>TCL (approximation)</strong>, les <LatexRenderer latex="X_i" /> sont i.i.d. de variance finie, donc :</p>
                <LatexRenderer latex="\displaystyle P(T \le 15) \approx P\!\left(Z \le \frac{15 - 20}{\sqrt{20}}\right) = P(Z \le -1{,}118) \approx 1 - \Phi(1{,}118) \approx 0{,}132." />
                <ConclusionBox>
                  <LatexRenderer latex="X \sim \mathcal{B}(100,\, 0{,}02) \approx \mathcal{P}(2)" />. <LatexRenderer latex="T \approx \mathcal{N}(20, 20)" /> par approximation du TCL, et <LatexRenderer latex="P(T \le 15) \approx 0{,}132" />.
                </ConclusionBox>
              </div>
            }
          />
        </section>

        <section id="approfondissements">
          <DifficultyHeader level="Niveau : Facile — Linéarité et indépendance" />

          <ExerciseCard
            id="ex-06"
            title="Espérance et variance d'une somme de n VA iid"
            difficulty="Niveau: Facile"
            content={
              <div className="space-y-2">
                <p>Soient <LatexRenderer latex="X_1, \ldots, X_n" /> des VA iid d'espérance <LatexRenderer latex="m" /> et de variance <LatexRenderer latex="\sigma^2" />. Calculer <LatexRenderer latex="E(S_n)" /> et <LatexRenderer latex="V(S_n)" /> où <LatexRenderer latex="S_n = X_1 + \ldots + X_n" />.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  La linéarité de l'espérance est universelle (vraie sans hypothèse d'indépendance). Pour la variance d'une somme, l'indépendance permet d'annuler les covariances : <LatexRenderer latex="V(\sum X_i) = \sum V(X_i) + 2 \sum_{i<j} \mathrm{Cov}(X_i, X_j)" />.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="(X_i)" /> iid avec <LatexRenderer latex="E(X_i) = m" />, <LatexRenderer latex="V(X_i) = \sigma^2" />.</p>
                <p className="mt-2">Or, par linéarité : <LatexRenderer latex="E(S_n) = \sum_{i=1}^n E(X_i) = nm" />.</p>
                <p className="mt-2">Par indépendance, <LatexRenderer latex="\mathrm{Cov}(X_i, X_j) = 0" /> pour <LatexRenderer latex="i \ne j" />. D'où :</p>
                <LatexRenderer latex="V(S_n) = \sum_{i=1}^n V(X_i) = n\sigma^2." />
                <ConclusionBox>
                  <LatexRenderer latex="E(S_n) = nm" />, <LatexRenderer latex="V(S_n) = n\sigma^2" />. La variance croît linéairement avec <LatexRenderer latex="n" />.
                </ConclusionBox>
              </div>
            }
          />

          <DifficultyHeader level="Niveau : Intermédiaire — Stabilité par addition" />

          <ExerciseCard
            id="ex-07"
            title="Somme de n VA binomiales indépendantes"
            difficulty="Niveau: Intermédiaire"
            content={
              <div className="space-y-2">
                <p>Soient <LatexRenderer latex="X_1, \ldots, X_n" /> indépendantes avec <LatexRenderer latex="X_i \sim \mathcal{B}(m_i, p)" /> (même paramètre <LatexRenderer latex="p" />).</p>
                <p>Démontrer que <LatexRenderer latex="S = X_1 + \ldots + X_n \sim \mathcal{B}(m_1 + \ldots + m_n,\, p)" />.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  La stabilité de la loi binomiale par addition (sous indépendance et même paramètre <LatexRenderer latex="p" />) se démontre par récurrence sur <LatexRenderer latex="n" />, en utilisant la formule de convolution discrète.
                </PointMethodo>
                <p><strong>Récurrence sur n.</strong> Pour <LatexRenderer latex="n = 1" /> : <LatexRenderer latex="S_1 = X_1 \sim \mathcal{B}(m_1, p)" />. ✓</p>
                <p className="mt-2"><strong>Hérédité.</strong> Supposons <LatexRenderer latex="S_n \sim \mathcal{B}(M_n, p)" /> avec <LatexRenderer latex="M_n = m_1 + \ldots + m_n" />. Soit <LatexRenderer latex="X_{n+1} \sim \mathcal{B}(m_{n+1}, p)" /> indépendante de <LatexRenderer latex="S_n" />.</p>
                <p className="mt-2">Or pour <LatexRenderer latex="k \in \{0, \ldots, M_n + m_{n+1}\}" />, par convolution :</p>
                <LatexRenderer latex="P(S_{n+1} = k) = \sum_{j=0}^k P(S_n = j) P(X_{n+1} = k - j) = \sum_{j=0}^k \binom{M_n}{j} \binom{m_{n+1}}{k-j} p^k (1-p)^{M_n + m_{n+1} - k}." />
                <Astuce>
                  La somme <LatexRenderer latex="\sum_j \binom{M_n}{j}\binom{m_{n+1}}{k-j}" /> est exactement l'identité de Vandermonde, qui vaut <LatexRenderer latex="\binom{M_n + m_{n+1}}{k}" />.
                </Astuce>
                <p className="mt-2">D'où <LatexRenderer latex="P(S_{n+1} = k) = \binom{M_n + m_{n+1}}{k} p^k (1-p)^{M_n + m_{n+1} - k}" />, soit <LatexRenderer latex="S_{n+1} \sim \mathcal{B}(M_n + m_{n+1}, p)" />.</p>
                <ConclusionBox>
                  Stabilité : <LatexRenderer latex="X_i \sim \mathcal{B}(m_i, p)" /> indépendantes <LatexRenderer latex="\Rightarrow S = \sum X_i \sim \mathcal{B}(\sum m_i, p)" />. Cette propriété définit la loi binomiale comme somme de Bernoulli indépendantes.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex-08"
            title="Inégalité de Bienaymé-Tchebychev pour une moyenne"
            difficulty="Niveau: Intermédiaire"
            content={
              <div className="space-y-2">
                <p>Soient <LatexRenderer latex="X_1, \ldots, X_n" /> iid d'espérance <LatexRenderer latex="\mu" /> et de variance <LatexRenderer latex="\sigma^2" /> finies. Soit <LatexRenderer latex="\overline{X}_n = S_n / n" />.</p>
                <p>Montrer que pour tout <LatexRenderer latex="\varepsilon > 0" />, <LatexRenderer latex="P(|\overline{X}_n - \mu| \ge \varepsilon) \le \sigma^2 / (n \varepsilon^2)" />.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  L'inégalité de Bienaymé-Tchebychev : pour <LatexRenderer latex="Y" /> de variance finie, <LatexRenderer latex="P(|Y - E(Y)| \ge \varepsilon) \le V(Y) / \varepsilon^2" />. Pour la moyenne empirique, on calcule d'abord <LatexRenderer latex="E(\overline{X}_n)" /> et <LatexRenderer latex="V(\overline{X}_n)" /> par linéarité et indépendance.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="(X_i)" /> iid. Or, par linéarité et indépendance :</p>
                <LatexRenderer latex="E(\overline{X}_n) = \mu, \quad V(\overline{X}_n) = \sigma^2 / n." />
                <p className="mt-2">D'où, par Bienaymé-Tchebychev appliquée à <LatexRenderer latex="\overline{X}_n" /> :</p>
                <LatexRenderer latex="P(|\overline{X}_n - \mu| \ge \varepsilon) \le \frac{V(\overline{X}_n)}{\varepsilon^2} = \frac{\sigma^2}{n \varepsilon^2}." />
                <Astuce>
                  C'est l'inégalité-clé qui démontre la loi faible des grands nombres : la borne tend vers 0 quand <LatexRenderer latex="n \to +\infty" />.
                </Astuce>
                <ConclusionBox>
                  <LatexRenderer latex="P(|\overline{X}_n - \mu| \ge \varepsilon) \le \sigma^2 / (n\varepsilon^2)" />. La vitesse de concentration est en <LatexRenderer latex="1/n" />.
                </ConclusionBox>
              </div>
            }
          />

          <DifficultyHeader level="Niveau : Difficile — Variance d'une somme dépendante" />

          <ExerciseCard
            id="ex-09"
            title="Variance d'une moyenne sans indépendance"
            difficulty="Niveau: Concours"
            content={
              <div className="space-y-2">
                <p>Soient <LatexRenderer latex="X_1, \ldots, X_n" /> des VA non nécessairement indépendantes, de variance commune <LatexRenderer latex="\sigma^2" /> et de covariance commune <LatexRenderer latex="\mathrm{Cov}(X_i, X_j) = c" /> pour <LatexRenderer latex="i \ne j" />.</p>
                <p>1. Calculer <LatexRenderer latex="V(\overline{X}_n)" />.</p>
                <p>2. À quelle condition <LatexRenderer latex="V(\overline{X}_n) \to 0" /> quand <LatexRenderer latex="n \to +\infty" /> ?</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour une somme de variables corrélées, utiliser la formule générale <LatexRenderer latex="V(\sum X_i) = \sum V(X_i) + 2 \sum_{i < j} \mathrm{Cov}(X_i, X_j)" />. Le nombre de paires <LatexRenderer latex="(i, j)" /> avec <LatexRenderer latex="i < j" /> est <LatexRenderer latex="n(n-1)/2" />.
                </PointMethodo>
                <p><strong>1. Calcul.</strong> Or :</p>
                <LatexRenderer latex="V(S_n) = \sum_{i=1}^n V(X_i) + 2 \sum_{1 \le i < j \le n} \mathrm{Cov}(X_i, X_j) = n \sigma^2 + 2 \cdot \binom{n}{2} c = n\sigma^2 + n(n-1) c." />
                <p className="mt-2">D'où :</p>
                <LatexRenderer latex="V(\overline{X}_n) = \frac{V(S_n)}{n^2} = \frac{\sigma^2}{n} + \frac{(n-1)c}{n}." />
                <p className="mt-2"><strong>2. Limite.</strong> Or <LatexRenderer latex="\sigma^2/n \to 0" /> et <LatexRenderer latex="(n-1)c/n \to c" />. Donc <LatexRenderer latex="V(\overline{X}_n) \to c" />.</p>
                <Astuce>
                  La variance asymptotique vaut <LatexRenderer latex="c" /> (la covariance commune). Si <LatexRenderer latex="c > 0" /> (corrélation positive), la moyenne empirique ne se concentre pas : pas de "loi des grands nombres" dans ce cas.
                </Astuce>
                <p className="mt-2"><strong>Condition.</strong> <LatexRenderer latex="V(\overline{X}_n) \to 0 \iff c = 0" />. C'est-à-dire que les variables doivent être non corrélées 2 à 2.</p>
                <ConclusionBox>
                  <LatexRenderer latex="V(\overline{X}_n) = \sigma^2/n + (n-1)c/n \to c" /> quand <LatexRenderer latex="n \to +\infty" />. La concentration vers la moyenne nécessite <LatexRenderer latex="c = 0" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex-10"
            title="Loi du minimum de n VA exponentielles indépendantes"
            difficulty="Niveau: Difficile"
            content={
              <div className="space-y-2">
                <p>Soient <LatexRenderer latex="X_1, \ldots, X_n" /> indépendantes avec <LatexRenderer latex="X_i \sim \mathcal{E}(\lambda_i)" /> (paramètres positifs).</p>
                <p>Déterminer la loi de <LatexRenderer latex="M = \min(X_1, \ldots, X_n)" />.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour la loi d'un minimum (ou maximum) de VA indépendantes, calculer la fonction de répartition via l'événement complémentaire : <LatexRenderer latex="\{M > t\} = \{X_1 > t, \ldots, X_n > t\}" />, qui par indépendance se factorise en produit de probabilités.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="t \ge 0" />. Or :</p>
                <LatexRenderer latex="P(M > t) = P(X_1 > t, \ldots, X_n > t) = \prod_{i=1}^n P(X_i > t)" />
                <p className="mt-2">par indépendance des <LatexRenderer latex="X_i" />.</p>
                <p className="mt-2">Or pour <LatexRenderer latex="X_i \sim \mathcal{E}(\lambda_i)" />, <LatexRenderer latex="P(X_i > t) = e^{-\lambda_i t}" />. D'où :</p>
                <LatexRenderer latex="P(M > t) = \prod_{i=1}^n e^{-\lambda_i t} = e^{-(\lambda_1 + \ldots + \lambda_n) t}." />
                <Astuce>
                  Cette propriété est caractéristique de la loi exponentielle : le minimum de exponentielles indépendantes est encore exponentiel, avec paramètre la somme.
                </Astuce>
                <p className="mt-2">Ainsi <LatexRenderer latex="P(M \le t) = 1 - e^{-\Lambda t}" /> avec <LatexRenderer latex="\Lambda = \sum_{i=1}^n \lambda_i" />, ce qui est la FdR de <LatexRenderer latex="\mathcal{E}(\Lambda)" />.</p>
                <ConclusionBox>
                  <LatexRenderer latex="M = \min(X_1, \ldots, X_n) \sim \mathcal{E}(\lambda_1 + \ldots + \lambda_n)" />. Application : c'est le temps de la première occurrence parmi plusieurs processus de Poisson indépendants.
                </ConclusionBox>
              </div>
            }
          />
        </section>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre7NupletsVariablesAleatoiresExercicesPage;
