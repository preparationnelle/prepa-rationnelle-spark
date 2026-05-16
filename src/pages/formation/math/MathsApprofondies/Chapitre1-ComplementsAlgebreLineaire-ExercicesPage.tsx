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

const Chapitre1ComplementsAlgebreLineaireExercicesPage = () => {
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
      chapterNumber={1}
      chapterTitle="Compléments d'algèbre linéaire"
      description="Endomorphismes, matrices de passage et propriétés de la trace."
      slug="complements-algebre-lineaire"
      activeSection="exercises"
      titleClassName="text-slate-800"
      showNavigation={true}
      previousChapter={{
        slug: "maths-approfondies-2e-annee",
        title: "Maths Approfondies — 2ème année"
      }}
      nextChapter={{
        slug: "polynomes",
        title: "Polynômes"
      }}
    >
      <div className="space-y-8">

        {/* Module 1 */}
        <div>
          <DifficultyHeader level="Module 1 — Polynômes de Lagrange et matrice de passage" />

          <ExerciseCard
            id="ex1"
            title="Polynômes de Lagrange et matrice de passage (HEC 2017)"
            difficulty="Niveau: Concours (Classique)"
            content={
              <div className="space-y-3">
                <p>Soient <LatexRenderer latex="n \geq 1" /> et <LatexRenderer latex="x_0, x_1, \ldots, x_n" /> des réels deux à deux distincts. On note <LatexRenderer latex="\mathcal{C}" /> la base canonique de <LatexRenderer latex="\mathbb{R}_n[X]" />.</p>
                <p>Pour <LatexRenderer latex="i \in \llbracket 0,n \rrbracket" />, on note :</p>
                <div className="text-center my-4">
                  <LatexRenderer latex="L_i = \prod_{\substack{k=0 \\ k \neq i}}^{n} \frac{X - x_k}{x_i - x_k}." />
                </div>
                <p>On admet que <LatexRenderer latex="\mathcal{B} = (L_0, L_1, \ldots, L_n)" /> est une base de <LatexRenderer latex="\mathbb{R}_n[X]" />.</p>
                <ol className="list-decimal list-inside space-y-2 pl-4 mt-4">
                  <li>Déterminer <LatexRenderer latex="L_i(x_j)" /> pour <LatexRenderer latex="(i,j) \in \llbracket 0,n \rrbracket^2" />.</li>
                  <li>Expliciter la matrice de passage de <LatexRenderer latex="\mathcal{B}" /> à <LatexRenderer latex="\mathcal{C}" />.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-4">
                <PointMethodo>
                  Pour calculer <LatexRenderer latex="L_i(x_j)" />, distinguer les cas <LatexRenderer latex="i = j" /> et <LatexRenderer latex="i \neq j" /> en exploitant la structure du produit. Pour la matrice de passage, exprimer chaque vecteur de <LatexRenderer latex="\mathcal{B}" /> dans <LatexRenderer latex="\mathcal{C}" /> en utilisant la décomposition d'un polynôme quelconque sur <LatexRenderer latex="\mathcal{B}" />.
                </PointMethodo>
                <Astuce>
                  Le facteur <LatexRenderer latex="\dfrac{x_j - x_j}{x_i - x_j}" /> apparaît dans le produit définissant <LatexRenderer latex="L_i(x_j)" /> dès que <LatexRenderer latex="i \neq j" /> (en prenant <LatexRenderer latex="k = j" /> dans le produit), ce qui annule immédiatement l'expression.
                </Astuce>
                <p><strong>Question 1 — Calcul de <LatexRenderer latex="L_i(x_j)" /> :</strong></p>
                <p>Soit <LatexRenderer latex="(i,j) \in (\llbracket 0,n \rrbracket)^2" />.</p>
                <p><strong>Cas <LatexRenderer latex="i = j" /> :</strong></p>
                <div className="text-center my-2">
                  <LatexRenderer latex="L_i(x_i) = \prod_{\substack{k=0 \\ k \neq i}}^{n} \frac{x_i - x_k}{x_i - x_k} = \prod_{\substack{k=0 \\ k \neq i}}^{n} 1 = 1." />
                </div>
                <p><strong>Cas <LatexRenderer latex="i \neq j" /> :</strong> Le produit contient le facteur correspondant à <LatexRenderer latex="k = j" /> :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex="L_i(x_j) = \frac{x_j - x_j}{x_i - x_j} \cdot \prod_{\substack{k=0 \\ k \neq i,\, k \neq j}}^{n} \frac{x_j - x_k}{x_i - x_k} = 0." />
                </div>
                <p>D'où :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex="\forall (i,j) \in (\llbracket 0,n \rrbracket)^2,\quad L_i(x_j) = \delta_{ij} = \begin{cases} 1 & \text{si } i = j, \\ 0 & \text{si } i \neq j. \end{cases}" />
                </div>
                <p><strong>Question 2 — Matrice de passage de <LatexRenderer latex="\mathcal{B}" /> à <LatexRenderer latex="\mathcal{C}" /> :</strong></p>
                <p>Soit <LatexRenderer latex="P \in \mathbb{R}_n[X]" />. Comme <LatexRenderer latex="(L_0, \ldots, L_n)" /> est une base de <LatexRenderer latex="\mathbb{R}_n[X]" />, il existe des coefficients uniques tels que <LatexRenderer latex="P = \sum_{i=0}^n a_i L_i" />.</p>
                <p>Or pour <LatexRenderer latex="j \in \llbracket 0,n \rrbracket" /> :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex="P(x_j) = \sum_{i=0}^n a_i L_i(x_j) = a_j." />
                </div>
                <p>Ainsi <LatexRenderer latex="a_j = P(x_j)" /> pour tout <LatexRenderer latex="j" />. En posant <LatexRenderer latex="P = X^k" /> avec <LatexRenderer latex="k \in \llbracket 0,n \rrbracket" /> :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex="X^k = \sum_{i=0}^n x_i^k L_i." />
                </div>
                <p>La colonne <LatexRenderer latex="i" /> de la matrice de passage <LatexRenderer latex="P_{\mathcal{B} \to \mathcal{C}}" /> est le vecteur des coordonnées de <LatexRenderer latex="L_i" /> dans <LatexRenderer latex="\mathcal{C}" />, c'est-à-dire <LatexRenderer latex="(x_i^0, x_i^1, \ldots, x_i^n)^T" />. D'où :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex="P_{\mathcal{B},\mathcal{C}} = \begin{pmatrix} 1 & 1 & \cdots & 1 \\ x_0 & x_1 & \cdots & x_n \\ x_0^2 & x_1^2 & \cdots & x_n^2 \\ \vdots & \vdots & \ddots & \vdots \\ x_0^n & x_1^n & \cdots & x_n^n \end{pmatrix}." />
                </div>
                <ConclusionBox>
                  <LatexRenderer latex="L_i(x_j) = \delta_{ij}" />. La matrice de passage de <LatexRenderer latex="\mathcal{B}" /> à <LatexRenderer latex="\mathcal{C}" /> est la matrice de Vandermonde <LatexRenderer latex="(x_j^i)_{0 \leq i,j \leq n}" />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        {/* Module 2 */}
        <div>
          <DifficultyHeader level="Module 2 — Endomorphismes et matrices représentatives" />

          <ExerciseCard
            id="ex2"
            title="Endomorphisme de ℝₙ[X] et matrice représentative (EM Lyon 2018)"
            difficulty="Niveau: Concours"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="n \geq 2" /> et <LatexRenderer latex="\varphi \in \mathcal{L}(\mathbb{R}_n[X])" /> définie par :</p>
                <div className="text-center my-4">
                  <LatexRenderer latex="\forall P \in \mathbb{R}_n[X],\quad \varphi(P) = \frac{1}{n} X(1-X)P' + XP." />
                </div>
                <p>Déterminer la matrice représentative <LatexRenderer latex="A" /> de <LatexRenderer latex="\varphi" /> dans la base canonique <LatexRenderer latex="\mathcal{C} = (1, X, X^2, \ldots, X^n)" /> de <LatexRenderer latex="\mathbb{R}_n[X]" />.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <PointMethodo>
                  Pour déterminer la matrice d'un endomorphisme dans une base, calculer l'image de chaque vecteur de base et exprimer le résultat comme combinaison linéaire des vecteurs de la même base. Les coordonnées obtenues forment les colonnes de la matrice.
                </PointMethodo>
                <p><strong>Image de <LatexRenderer latex="P = 1" /> :</strong> <LatexRenderer latex="P' = 0" />, donc <LatexRenderer latex="\varphi(1) = \frac{1}{n} X(1-X) \cdot 0 + X \cdot 1 = X" />.</p>
                <p><strong>Image de <LatexRenderer latex="P = X^n" /> :</strong> <LatexRenderer latex="P' = nX^{n-1}" />, donc :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex="\varphi(X^n) = \frac{1}{n} X(1-X) \cdot nX^{n-1} + X \cdot X^n = X^n(1-X) + X^{n+1} = X^n." />
                </div>
                <p><strong>Image de <LatexRenderer latex="P = X^k" /> pour <LatexRenderer latex="k \in \llbracket 1, n-1 \rrbracket" /> :</strong> <LatexRenderer latex="P' = kX^{k-1}" />, donc :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex="\varphi(X^k) = \frac{k}{n} X^k(1-X) + X^{k+1} = \frac{k}{n} X^k + \left(1 - \frac{k}{n}\right) X^{k+1} = \frac{k}{n} X^k + \frac{n-k}{n} X^{k+1}." />
                </div>
                <p>Ainsi la colonne de <LatexRenderer latex="A" /> correspondant à <LatexRenderer latex="X^k" /> a les coordonnées <LatexRenderer latex="\frac{k}{n}" /> sur <LatexRenderer latex="X^k" /> et <LatexRenderer latex="\frac{n-k}{n}" /> sur <LatexRenderer latex="X^{k+1}" />, zéro ailleurs.</p>
                <ConclusionBox>
                  <LatexRenderer latex="A = \begin{pmatrix} 0 & 0 & 0 & \cdots & 0 \\ 1 & \tfrac{1}{n} & 0 & \cdots & 0 \\ 0 & \tfrac{n-1}{n} & \tfrac{2}{n} & \cdots & 0 \\ \vdots & & \ddots & \ddots & \vdots \\ 0 & \cdots & 0 & \tfrac{1}{n} & 1 \end{pmatrix}" />, matrice bidiagonale inférieure.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        {/* Module 3 */}
        <div>
          <DifficultyHeader level="Module 3 — Propriétés de la trace" />

          <ExerciseCard
            id="ex3"
            title="Cyclicité de la trace (EM Lyon 2013)"
            difficulty="Niveau: Intermédiaire"
            content={
              <div>
                <p>Montrer que pour toutes matrices <LatexRenderer latex="A, B \in \mathcal{M}_n(\mathbb{R})" />, on a <LatexRenderer latex="\mathrm{Tr}(AB) = \mathrm{Tr}(BA)" />.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <PointMethodo>
                  Pour prouver une égalité sur la trace d'un produit, développer les deux membres terme à terme en utilisant la formule du coefficient diagonal d'un produit matriciel, puis réindexer la double somme pour conclure.
                </PointMethodo>
                <p>Soient <LatexRenderer latex="A = (a_{i,j})_{1 \leq i,j \leq n}" /> et <LatexRenderer latex="B = (b_{i,j})_{1 \leq i,j \leq n}" /> deux matrices de <LatexRenderer latex="\mathcal{M}_n(\mathbb{R})" />.</p>
                <p>Soit <LatexRenderer latex="C = AB" /> et <LatexRenderer latex="D = BA" />. La formule du produit matriciel donne :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex="c_{i,i} = \sum_{k=1}^n a_{i,k} b_{k,i},\quad d_{i,i} = \sum_{k=1}^n b_{i,k} a_{k,i}." />
                </div>
                <p>D'où :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex="\mathrm{Tr}(AB) = \sum_{i=1}^n c_{i,i} = \sum_{i=1}^n \sum_{k=1}^n a_{i,k} b_{k,i}." />
                </div>
                <p>Or :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex="\mathrm{Tr}(BA) = \sum_{i=1}^n d_{i,i} = \sum_{i=1}^n \sum_{k=1}^n b_{i,k} a_{k,i}." />
                </div>
                <p>En échangeant les noms des indices <LatexRenderer latex="i" /> et <LatexRenderer latex="k" /> dans la dernière somme :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex="\mathrm{Tr}(BA) = \sum_{k=1}^n \sum_{i=1}^n b_{k,i} a_{i,k} = \sum_{i=1}^n \sum_{k=1}^n a_{i,k} b_{k,i} = \mathrm{Tr}(AB)." />
                </div>
                <ConclusionBox>
                  <LatexRenderer latex="\mathrm{Tr}(AB) = \mathrm{Tr}(BA)" /> pour toutes <LatexRenderer latex="A, B \in \mathcal{M}_n(\mathbb{R})" />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        {/* Module 4 */}
        <div>
          <DifficultyHeader level="Module 4 — Supplémentarité et somme directe" />

          <ExerciseCard
            id="ex4"
            title="Supplémentarité dans ℝ³"
            difficulty="Niveau: Facile"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="H = \{(x, y, z) \in \mathbb{R}^3 : x + y + z = 0\}" /> et <LatexRenderer latex="D = \mathrm{Vect}((1, 1, 1))" />.</p>
                <p>Démontrer que <LatexRenderer latex="\mathbb{R}^3 = H \oplus D" />.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  Pour démontrer une somme directe <LatexRenderer latex="E = F \oplus G" /> via la dimension, on vérifie : (i) <LatexRenderer latex="F \cap G = \{0\}" />, et (ii) <LatexRenderer latex="\dim F + \dim G = \dim E" />. La formule de Grassmann donne alors <LatexRenderer latex="\dim(F + G) = \dim F + \dim G - \dim(F \cap G) = \dim E" />, donc <LatexRenderer latex="F + G = E" />.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="H" /> un hyperplan de <LatexRenderer latex="\mathbb{R}^3" /> (équation linéaire non triviale), donc <LatexRenderer latex="\dim H = 2" />. Et <LatexRenderer latex="D = \mathrm{Vect}((1, 1, 1))" /> est une droite (vecteur non nul), donc <LatexRenderer latex="\dim D = 1" />.</p>
                <p className="mt-2"><strong>Intersection.</strong> Soit <LatexRenderer latex="v \in H \cap D" />. Alors <LatexRenderer latex="v = t(1, 1, 1)" /> pour un <LatexRenderer latex="t \in \mathbb{R}" />, et <LatexRenderer latex="t + t + t = 3t = 0" />. D'où <LatexRenderer latex="t = 0" /> et <LatexRenderer latex="v = 0" />. Donc <LatexRenderer latex="H \cap D = \{0\}" />.</p>
                <Astuce>
                  Méthode équivalente : le vecteur <LatexRenderer latex="(1, 1, 1)" /> ne vérifie pas l'équation <LatexRenderer latex="x + y + z = 0" /> (somme = 3 ≠ 0), donc <LatexRenderer latex="(1, 1, 1) \notin H" />. Ceci suffit pour conclure que <LatexRenderer latex="H \cap D = \{0\}" />.
                </Astuce>
                <p className="mt-2"><strong>Dimensions.</strong> Or <LatexRenderer latex="\dim H + \dim D = 2 + 1 = 3 = \dim \mathbb{R}^3" />.</p>
                <p className="mt-2">D'où, par caractérisation : <LatexRenderer latex="\mathbb{R}^3 = H \oplus D" />.</p>
                <ConclusionBox>
                  <LatexRenderer latex="\mathbb{R}^3 = H \oplus D" />. Tout vecteur de <LatexRenderer latex="\mathbb{R}^3" /> s'écrit de manière unique comme somme d'un élément de <LatexRenderer latex="H" /> et d'un multiple de <LatexRenderer latex="(1, 1, 1)" />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        {/* Module 5 */}
        <div>
          <DifficultyHeader level="Module 5 — Théorème du rang et applications" />

          <ExerciseCard
            id="ex5"
            title="Théorème du rang sur une application R⁴ → R³"
            difficulty="Niveau: Intermédiaire"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="u : \mathbb{R}^4 \to \mathbb{R}^3" /> définie par <LatexRenderer latex="u(x_1, x_2, x_3, x_4) = (x_1 + x_2,\; x_2 + x_3,\; x_3 + x_4)" />.</p>
                <p>1. Déterminer <LatexRenderer latex="\ker(u)" /> et sa dimension.</p>
                <p>2. En déduire le rang de <LatexRenderer latex="u" /> par le théorème du rang. <LatexRenderer latex="u" /> est-elle surjective ?</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  Le théorème du rang stipule <LatexRenderer latex="\dim \ker(u) + \mathrm{rg}(u) = \dim E" /> pour <LatexRenderer latex="u : E \to F" /> linéaire. On calcule d'abord <LatexRenderer latex="\dim \ker u" /> en résolvant <LatexRenderer latex="u(x) = 0" />, puis on en déduit le rang. <LatexRenderer latex="u" /> est surjective ssi <LatexRenderer latex="\mathrm{rg}(u) = \dim F" />.
                </PointMethodo>
                <p><strong>1. Noyau.</strong> Soit <LatexRenderer latex="x = (x_1, x_2, x_3, x_4) \in \ker u" />, soit :</p>
                <LatexRenderer latex="x_1 + x_2 = 0, \quad x_2 + x_3 = 0, \quad x_3 + x_4 = 0." />
                <p className="mt-2">D'où <LatexRenderer latex="x_2 = -x_1" />, <LatexRenderer latex="x_3 = -x_2 = x_1" />, <LatexRenderer latex="x_4 = -x_3 = -x_1" />. Ainsi <LatexRenderer latex="x = x_1(1, -1, 1, -1)" />.</p>
                <p className="mt-2">Donc <LatexRenderer latex="\ker u = \mathrm{Vect}((1, -1, 1, -1))" />, soit <LatexRenderer latex="\dim \ker u = 1" />.</p>
                <p className="mt-2"><strong>2. Rang.</strong> Par le théorème du rang :</p>
                <LatexRenderer latex="\mathrm{rg}(u) = \dim \mathbb{R}^4 - \dim \ker u = 4 - 1 = 3." />
                <p className="mt-2">Or <LatexRenderer latex="\mathrm{rg}(u) = 3 = \dim \mathbb{R}^3" />, donc <LatexRenderer latex="\mathrm{Im}(u) = \mathbb{R}^3" /> et <LatexRenderer latex="u" /> est surjective.</p>
                <Astuce>
                  Pour une application linéaire <LatexRenderer latex="u : E \to F" /> avec <LatexRenderer latex="\dim E > \dim F" />, <LatexRenderer latex="u" /> ne peut pas être injective (par le théorème du rang) ; mais elle peut être surjective.
                </Astuce>
                <ConclusionBox>
                  <LatexRenderer latex="\dim \ker u = 1" />, <LatexRenderer latex="\mathrm{rg}(u) = 3" /> : <LatexRenderer latex="u" /> est surjective mais non injective.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex6"
            title="Formule de Grassmann"
            difficulty="Niveau: Intermédiaire"
            content={
              <div className="space-y-3">
                <p>Soient <LatexRenderer latex="F" /> et <LatexRenderer latex="G" /> deux sous-espaces de <LatexRenderer latex="\mathbb{R}^n" /> de dimensions respectives <LatexRenderer latex="p" /> et <LatexRenderer latex="q" />.</p>
                <p>1. Démontrer que si <LatexRenderer latex="p + q > n" />, alors <LatexRenderer latex="F \cap G \ne \{0\}" />.</p>
                <p>2. Application : montrer que dans <LatexRenderer latex="\mathbb{R}^5" />, deux sous-espaces de dimension 3 ont une intersection de dimension au moins 1.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  La formule de Grassmann : <LatexRenderer latex="\dim(F + G) = \dim F + \dim G - \dim(F \cap G)" />. Combinée à <LatexRenderer latex="\dim(F + G) \le \dim E" />, on obtient une minoration de <LatexRenderer latex="\dim(F \cap G)" />.
                </PointMethodo>
                <p><strong>1. Démonstration.</strong> Soit <LatexRenderer latex="F, G \subset \mathbb{R}^n" /> avec <LatexRenderer latex="\dim F = p" />, <LatexRenderer latex="\dim G = q" />. Or par la formule de Grassmann :</p>
                <LatexRenderer latex="\dim(F + G) = \dim F + \dim G - \dim(F \cap G) = p + q - \dim(F \cap G)." />
                <p className="mt-2">Or <LatexRenderer latex="F + G \subset \mathbb{R}^n" />, donc <LatexRenderer latex="\dim(F + G) \le n" />. D'où :</p>
                <LatexRenderer latex="p + q - \dim(F \cap G) \le n \iff \dim(F \cap G) \ge p + q - n." />
                <p className="mt-2">Si <LatexRenderer latex="p + q > n" />, alors <LatexRenderer latex="\dim(F \cap G) \ge p + q - n \ge 1 > 0" />, donc <LatexRenderer latex="F \cap G \ne \{0\}" />.</p>
                <Astuce>
                  Ce résultat est le <strong>principe des tiroirs vectoriel</strong> : "trop de dimensions" implique l'existence d'une direction commune.
                </Astuce>
                <p className="mt-2"><strong>2. Application.</strong> Dans <LatexRenderer latex="\mathbb{R}^5" />, soient <LatexRenderer latex="F, G" /> avec <LatexRenderer latex="\dim F = \dim G = 3" />. Alors <LatexRenderer latex="p + q = 6 > 5 = n" />. D'où <LatexRenderer latex="\dim(F \cap G) \ge 6 - 5 = 1" />.</p>
                <ConclusionBox>
                  Formule de Grassmann : <LatexRenderer latex="\dim(F \cap G) \ge p + q - n" />, donc <LatexRenderer latex="p + q > n \Rightarrow F \cap G \ne \{0\}" />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        {/* Module 6 */}
        <div>
          <DifficultyHeader level="Module 6 — Caractérisation d'un projecteur" />

          <ExerciseCard
            id="ex7"
            title="Projecteur — caractérisation par image et noyau"
            difficulty="Niveau: Concours"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="E" /> un espace vectoriel de dimension finie et <LatexRenderer latex="p \in \mathcal{L}(E)" />.</p>
                <p>Démontrer que <LatexRenderer latex="p" /> est un projecteur (i.e. <LatexRenderer latex="p \circ p = p" />) si et seulement si <LatexRenderer latex="E = \ker p \oplus \mathrm{Im}\,p" /> et <LatexRenderer latex="p" /> est l'identité sur <LatexRenderer latex="\mathrm{Im}\,p" />.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  La caractérisation des projecteurs combine deux propriétés algébriques (idempotence <LatexRenderer latex="p^2 = p" />) et géométrique (décomposition de l'espace en noyau et image, avec <LatexRenderer latex="p" /> identité sur l'image). L'équivalence se démontre par double implication.
                </PointMethodo>
                <p><strong>Sens 1 : <LatexRenderer latex="p^2 = p \Rightarrow" /> décomposition.</strong> Soit <LatexRenderer latex="x \in E" />. Écrivons <LatexRenderer latex="x = (x - p(x)) + p(x)" />.</p>
                <p className="mt-2">Or <LatexRenderer latex="p(x - p(x)) = p(x) - p^2(x) = p(x) - p(x) = 0" />, donc <LatexRenderer latex="x - p(x) \in \ker p" />. Et trivialement <LatexRenderer latex="p(x) \in \mathrm{Im}\,p" />.</p>
                <p className="mt-2"><strong>Intersection nulle.</strong> Soit <LatexRenderer latex="y \in \ker p \cap \mathrm{Im}\,p" />. Alors <LatexRenderer latex="p(y) = 0" /> et <LatexRenderer latex="y = p(z)" /> pour un <LatexRenderer latex="z \in E" />. Or :</p>
                <LatexRenderer latex="y = p(z) = p^2(z) = p(p(z)) = p(y) = 0." />
                <p className="mt-2">D'où <LatexRenderer latex="\ker p \cap \mathrm{Im}\,p = \{0\}" />, et la décomposition <LatexRenderer latex="E = \ker p \oplus \mathrm{Im}\,p" />.</p>
                <Astuce>
                  L'identité <LatexRenderer latex="y = p(z) \Rightarrow p(y) = p^2(z) = p(z) = y" /> est la clé : pour un projecteur, <LatexRenderer latex="p" /> agit comme l'identité sur son image.
                </Astuce>
                <p className="mt-2"><strong>Identité sur Im p.</strong> Soit <LatexRenderer latex="y \in \mathrm{Im}\,p" />, donc <LatexRenderer latex="y = p(z)" />. Alors <LatexRenderer latex="p(y) = p^2(z) = p(z) = y" />.</p>
                <p className="mt-2"><strong>Sens 2 : décomposition + identité <LatexRenderer latex="\Rightarrow p^2 = p" />.</strong> Soit <LatexRenderer latex="x \in E" />, écrit comme <LatexRenderer latex="x = k + y" /> avec <LatexRenderer latex="k \in \ker p" /> et <LatexRenderer latex="y \in \mathrm{Im}\,p" />.</p>
                <p>Alors <LatexRenderer latex="p(x) = p(k) + p(y) = 0 + y = y" />, et <LatexRenderer latex="p^2(x) = p(y) = y = p(x)" />.</p>
                <ConclusionBox>
                  <LatexRenderer latex="p" /> projecteur <LatexRenderer latex="\iff E = \ker p \oplus \mathrm{Im}\,p" /> avec <LatexRenderer latex="p_{|\mathrm{Im}\,p} = \mathrm{id}" />. <LatexRenderer latex="p" /> est alors la projection sur <LatexRenderer latex="\mathrm{Im}\,p" /> parallèlement à <LatexRenderer latex="\ker p" />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        {/* Module 7 */}
        <div>
          <DifficultyHeader level="Module 7 — Inégalité de Sylvester sur le rang" />

          <ExerciseCard
            id="ex8"
            title="Inégalité de Sylvester sur le rang d'un produit"
            difficulty="Niveau: Difficile"
            content={
              <div className="space-y-3">
                <p>Soient <LatexRenderer latex="u : E \to F" /> et <LatexRenderer latex="v : F \to G" /> deux applications linéaires entre espaces de dimensions finies.</p>
                <p>Démontrer l'inégalité de Sylvester : <LatexRenderer latex="\mathrm{rg}(v \circ u) \ge \mathrm{rg}(u) + \mathrm{rg}(v) - \dim F" />.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  Cette inégalité s'obtient en restreignant <LatexRenderer latex="v" /> à <LatexRenderer latex="\mathrm{Im}\,u" /> et en appliquant le théorème du rang sur la restriction. L'argument-clé est que <LatexRenderer latex="\ker(v_{|\mathrm{Im}\,u}) \subset \ker v" />, ce qui donne une majoration de la dimension du noyau de la restriction.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="v_1 : \mathrm{Im}\,u \to G" /> la restriction de <LatexRenderer latex="v" /> à <LatexRenderer latex="\mathrm{Im}\,u" />. Par construction :</p>
                <LatexRenderer latex="\mathrm{Im}(v_1) = v(\mathrm{Im}\,u) = \mathrm{Im}(v \circ u)." />
                <p className="mt-2"><strong>Théorème du rang appliqué à <LatexRenderer latex="v_1" />.</strong> Or :</p>
                <LatexRenderer latex="\dim \ker v_1 + \mathrm{rg}\,v_1 = \dim(\mathrm{Im}\,u) = \mathrm{rg}\,u." />
                <p className="mt-2">D'où <LatexRenderer latex="\mathrm{rg}(v \circ u) = \mathrm{rg}\,u - \dim \ker v_1" />.</p>
                <p className="mt-2"><strong>Majoration de <LatexRenderer latex="\dim \ker v_1" />.</strong> Or <LatexRenderer latex="\ker v_1 = \ker v \cap \mathrm{Im}\,u \subset \ker v" />, donc :</p>
                <LatexRenderer latex="\dim \ker v_1 \le \dim \ker v = \dim F - \mathrm{rg}\,v." />
                <Astuce>
                  L'argument géométrique sous-jacent : la dimension de l'image du composé est égale à la dimension de l'image de <LatexRenderer latex="u" />, moins ce qui se fait "tuer" par <LatexRenderer latex="v" /> dans <LatexRenderer latex="\mathrm{Im}\,u" />.
                </Astuce>
                <p className="mt-2">D'où :</p>
                <LatexRenderer latex="\mathrm{rg}(v \circ u) \ge \mathrm{rg}\,u - (\dim F - \mathrm{rg}\,v) = \mathrm{rg}\,u + \mathrm{rg}\,v - \dim F." />
                <ConclusionBox>
                  Inégalité de Sylvester : <LatexRenderer latex="\mathrm{rg}(v \circ u) \ge \mathrm{rg}\,u + \mathrm{rg}\,v - \dim F" />. Conséquence : <LatexRenderer latex="\mathrm{rg}(AB) \ge \mathrm{rg}\,A + \mathrm{rg}\,B - n" /> pour <LatexRenderer latex="A, B \in \mathcal{M}_n(\mathbb{R})" />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre1ComplementsAlgebreLineaireExercicesPage;
