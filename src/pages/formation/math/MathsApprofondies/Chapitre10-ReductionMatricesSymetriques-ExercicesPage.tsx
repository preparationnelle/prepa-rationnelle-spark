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

const Chapitre10ReductionMatricesSymetriquesExercicesPage = () => {
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
      chapterNumber={26}
      chapterTitle="Réduction des endomorphismes et matrices symétriques"
      description="Exercices sur la diagonalisation de matrices symétriques, le théorème spectral et les formes quadratiques."
      slug="reduction-matrices-symetriques"
      activeSection="exercises"
      showNavigation={true}
      previousChapter={{
        slug: "algebre-bilineaire-espaces-euclidiens",
        title: "Espaces Euclidiens (Ch 25)"
      }}
      nextChapter={{
        slug: "loi-normale",
        title: "Loi Normale (Ch 27)"
      }}
    >
      <div className="space-y-8">

        {/* Module 1 */}
        <div>
          <DifficultyHeader level="Module 1 — Diagonalisation" />

          <ExerciseCard
            id="26.1"
            title="Diagonalisation orthogonale complète"
            difficulty="Niveau: Concours (Classique)"
            content={
              <div className="space-y-4">
                <p>Soit <LatexRenderer latex="A = \begin{pmatrix} 3 & 2 & 4 \\ 2 & 0 & 2 \\ 4 & 2 & 3 \end{pmatrix}" />.</p>
                <p>Montrer que <LatexRenderer latex="A" /> est diagonalisable dans <LatexRenderer latex="\mathcal{M}_3(\mathbb{R})" />, déterminer ses valeurs propres, puis construire une matrice <LatexRenderer latex="P" /> orthogonale telle que <LatexRenderer latex="P^T A P" /> soit diagonale.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <PointMethodo>
                  Pour diagonaliser une matrice symétrique réelle : (1) vérifier qu'elle est symétrique pour invoquer le théorème spectral ; (2) calculer les valeurs propres via le polynôme caractéristique ; (3) déterminer les sous-espaces propres ; (4) orthonormaliser chaque sous-espace propre par Gram-Schmidt ; (5) construire <LatexRenderer latex="P" /> dont les colonnes sont les vecteurs propres orthonormés.
                </PointMethodo>
                <Astuce>
                  Le théorème spectral garantit que les sous-espaces propres associés à des valeurs propres distinctes sont orthogonaux deux à deux. Il suffit donc d'orthonormaliser chaque sous-espace propre séparément.
                </Astuce>
                <p><strong>Étape 1 — Diagonalisabilité :</strong> La matrice <LatexRenderer latex="A" /> est symétrique réelle (on vérifie <LatexRenderer latex="A^T = A" />). D'après le théorème spectral, toute matrice symétrique réelle est diagonalisable dans <LatexRenderer latex="\mathbb{R}" /> et ses sous-espaces propres sont deux à deux orthogonaux.</p>
                <p><strong>Étape 2 — Valeurs propres :</strong> Le polynôme caractéristique est <LatexRenderer latex="\chi_A(\lambda) = \det(A - \lambda I)" />. Le calcul donne :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex="\chi_A(\lambda) = -(\lambda + 1)^2(\lambda - 8)." />
                </div>
                <p>D'où les valeurs propres sont <LatexRenderer latex="\lambda_1 = -1" /> (multiplicité algébrique 2) et <LatexRenderer latex="\lambda_2 = 8" /> (multiplicité algébrique 1).</p>
                <p><strong>Étape 3 — Sous-espaces propres :</strong></p>
                <p>Pour <LatexRenderer latex="\lambda_1 = -1" /> : résoudre <LatexRenderer latex="(A + I)x = 0" />. Le système se réduit à <LatexRenderer latex="x_1 + x_3 = 0" /> et <LatexRenderer latex="x_2 = 0" /> (à vérifier par le calcul). D'où <LatexRenderer latex="\dim E_{-1} = 2" />. Une base est <LatexRenderer latex="(v_1, v_2)" /> à orthonormaliser par Gram-Schmidt.</p>
                <p>Pour <LatexRenderer latex="\lambda_2 = 8" /> : résoudre <LatexRenderer latex="(A - 8I)x = 0" />. D'où <LatexRenderer latex="\dim E_8 = 1" />. Le vecteur propre normé est <LatexRenderer latex="v_3 = \frac{1}{3}(2, 1, 2)^T" />.</p>
                <p><strong>Étape 4 — Construction de <LatexRenderer latex="P" /> :</strong> Les colonnes de <LatexRenderer latex="P" /> sont les vecteurs propres orthonormés. Par le théorème spectral, <LatexRenderer latex="E_{-1} \perp E_8" />, donc <LatexRenderer latex="P" /> est bien orthogonale.</p>
                <ConclusionBox>
                  <LatexRenderer latex="A" /> est diagonalisable dans <LatexRenderer latex="\mathbb{R}" /> de valeurs propres <LatexRenderer latex="-1" /> (double) et <LatexRenderer latex="8" /> (simple). La matrice <LatexRenderer latex="P" /> orthogonale construite vérifie <LatexRenderer latex="P^T A P = \mathrm{diag}(-1, -1, 8)" />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        {/* Module 2 */}
        <div>
          <DifficultyHeader level="Module 2 — Propriétés Théoriques" />

          <ExerciseCard
            id="26.2"
            title="Symétrie du produit de deux matrices symétriques"
            difficulty="Niveau: Intermédiaire"
            content={
              <div className="space-y-4">
                <p>Soient <LatexRenderer latex="A, B \in \mathcal{S}_n(\mathbb{R})" /> deux matrices symétriques. À quelle condition nécessaire et suffisante le produit <LatexRenderer latex="AB" /> est-il symétrique ?</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <PointMethodo>
                  Pour étudier la symétrie d'un produit matriciel, calculer la transposée du produit à l'aide de la règle <LatexRenderer latex="(AB)^T = B^T A^T" />, puis utiliser les hypothèses de symétrie.
                </PointMethodo>
                <p>Soient <LatexRenderer latex="A, B \in \mathcal{S}_n(\mathbb{R})" />, c'est-à-dire <LatexRenderer latex="A^T = A" /> et <LatexRenderer latex="B^T = B" />.</p>
                <p>D'où <LatexRenderer latex="(AB)^T = B^T A^T = BA" />.</p>
                <p>Ainsi <LatexRenderer latex="AB" /> est symétrique si et seulement si <LatexRenderer latex="(AB)^T = AB" />, soit <LatexRenderer latex="BA = AB" />.</p>
                <ConclusionBox>
                  Le produit <LatexRenderer latex="AB" /> est symétrique si et seulement si <LatexRenderer latex="AB = BA" /> (les matrices commutent).
                </ConclusionBox>
              </div>
            }
          />
        </div>

        {/* Module 3 */}
        <div>
          <DifficultyHeader level="Module 3 — Optimisation quadratique" />

          <ExerciseCard
            id="26.3"
            title="Maximisation d'une forme quadratique sur la sphère unité"
            difficulty="Niveau: Difficile"
            content={
              <div className="space-y-4">
                <p>Soit <LatexRenderer latex="A \in \mathcal{S}_n(\mathbb{R})" /> une matrice symétrique réelle. Déterminer le maximum de <LatexRenderer latex="q(x) = \langle Ax, x \rangle" /> sous la contrainte <LatexRenderer latex="\|x\| = 1" />, et le vecteur en lequel il est atteint.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <PointMethodo>
                  Pour optimiser une forme quadratique sur la sphère unité, diagonaliser la matrice symétrique par le théorème spectral, puis exprimer la forme dans la base propre orthonormée, ce qui ramène le problème à une optimisation d'une combinaison convexe des valeurs propres.
                </PointMethodo>
                <Astuce>
                  L'inégalité de Cauchy-Schwarz peut aussi être utilisée directement : en notant <LatexRenderer latex="\lambda_{\max}" /> la plus grande valeur propre, on a <LatexRenderer latex="\langle Ax, x \rangle \leq \lambda_{\max} \|x\|^2" />, avec égalité pour un vecteur propre associé.
                </Astuce>
                <p>D'après le théorème spectral, il existe une base orthonormée <LatexRenderer latex="(e_1, \ldots, e_n)" /> de <LatexRenderer latex="\mathbb{R}^n" /> composée de vecteurs propres de <LatexRenderer latex="A" />, associés aux valeurs propres <LatexRenderer latex="\lambda_1 \leq \cdots \leq \lambda_n" />.</p>
                <p>Soit <LatexRenderer latex="x = \sum_{i=1}^n \alpha_i e_i" /> avec <LatexRenderer latex="\sum_{i=1}^n \alpha_i^2 = 1" /> (contrainte <LatexRenderer latex="\|x\| = 1" />). Alors :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex="\langle Ax, x \rangle = \sum_{i=1}^n \lambda_i \alpha_i^2 \leq \lambda_n \sum_{i=1}^n \alpha_i^2 = \lambda_n." />
                </div>
                <p>L'égalité est atteinte pour <LatexRenderer latex="x = e_n" /> (vecteur propre associé à <LatexRenderer latex="\lambda_n = \lambda_{\max}" />).</p>
                <p>Ce résultat constitue le <strong>quotient de Rayleigh</strong> (ou principe de Rayleigh–Ritz).</p>
                <ConclusionBox>
                  <LatexRenderer latex="\max_{\|x\|=1} \langle Ax, x \rangle = \lambda_{\max}(A)" />, atteint en tout vecteur propre unitaire associé à la plus grande valeur propre.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        {/* Module 4 */}
        <div>
          <DifficultyHeader level="Module 4 — Diagonalisation pratique" />

          <ExerciseCard
            id="26.4"
            title="Diagonalisation orthogonale d'une matrice 2×2 symétrique"
            difficulty="Niveau: Facile"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="S = \begin{pmatrix} 4 & 2 \\ 2 & 1 \end{pmatrix}" />. Diagonaliser orthogonalement <LatexRenderer latex="S" />.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  Pour une matrice symétrique <LatexRenderer latex="2 \times 2" />, on calcule le polynôme caractéristique <LatexRenderer latex="\chi_S(\lambda) = \lambda^2 - \mathrm{tr}(S)\lambda + \det(S)" />, puis ses racines (les valeurs propres). On détermine ensuite un vecteur propre par sous-espace, qu'on normalise. Le théorème spectral garantit l'orthogonalité automatique des sous-espaces propres associés à des valeurs propres distinctes.
                </PointMethodo>
                <p><strong>Polynôme caractéristique.</strong> Soit <LatexRenderer latex="\mathrm{tr}(S) = 5" /> et <LatexRenderer latex="\det(S) = 4 - 4 = 0" />. D'où :</p>
                <LatexRenderer latex="\chi_S(\lambda) = \lambda^2 - 5\lambda = \lambda(\lambda - 5)." />
                <p className="mt-2">Donc les valeurs propres sont <LatexRenderer latex="\lambda_1 = 0" /> et <LatexRenderer latex="\lambda_2 = 5" />.</p>
                <p className="mt-2"><strong>Sous-espaces propres.</strong> Pour <LatexRenderer latex="\lambda = 0" /> : <LatexRenderer latex="S X = 0" /> donne <LatexRenderer latex="4x + 2y = 0" />, soit <LatexRenderer latex="y = -2x" />. Vecteur propre <LatexRenderer latex="v_1 = (1, -2)" />, normalisé <LatexRenderer latex="e_1 = \tfrac{1}{\sqrt{5}}(1, -2)" />.</p>
                <p>Pour <LatexRenderer latex="\lambda = 5" /> : <LatexRenderer latex="(S - 5I) X = 0" /> donne <LatexRenderer latex="-x + 2y = 0" />, soit <LatexRenderer latex="x = 2y" />. Vecteur propre <LatexRenderer latex="v_2 = (2, 1)" />, normalisé <LatexRenderer latex="e_2 = \tfrac{1}{\sqrt{5}}(2, 1)" />.</p>
                <Astuce>
                  Vérification orthogonalité : <LatexRenderer latex="\langle v_1, v_2\rangle = 1 \cdot 2 + (-2) \cdot 1 = 0" />. ✓ Conforme au théorème spectral.
                </Astuce>
                <p className="mt-2"><strong>Diagonalisation.</strong> Soit <LatexRenderer latex="P = \frac{1}{\sqrt{5}}\begin{pmatrix} 1 & 2 \\ -2 & 1 \end{pmatrix}" />, matrice orthogonale (<LatexRenderer latex="P^T P = I_2" />). Alors <LatexRenderer latex="P^T S P = \mathrm{diag}(0, 5)" />.</p>
                <ConclusionBox>
                  <LatexRenderer latex="S = P\,D\,P^T" /> avec <LatexRenderer latex="D = \mathrm{diag}(0, 5)" /> et <LatexRenderer latex="P = \tfrac{1}{\sqrt{5}}\begin{pmatrix} 1 & 2 \\ -2 & 1 \end{pmatrix}" /> orthogonale.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        {/* Module 5 */}
        <div>
          <DifficultyHeader level="Module 5 — Matrices positives" />

          <ExerciseCard
            id="26.5"
            title="Caractérisation des matrices symétriques positives"
            difficulty="Niveau: Intermédiaire"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="S \in \mathcal{S}_n(\mathbb{R})" /> une matrice symétrique réelle.</p>
                <p>Démontrer que <LatexRenderer latex="S" /> est positive (i.e. <LatexRenderer latex="\langle SX, X\rangle \ge 0" /> pour tout <LatexRenderer latex="X \in \mathbb{R}^n" />) si et seulement si toutes ses valeurs propres sont positives ou nulles.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  La caractérisation par valeurs propres se démontre via le théorème spectral. On diagonalise <LatexRenderer latex="S" /> dans une base orthonormée, ce qui transforme la forme quadratique <LatexRenderer latex="X \mapsto X^T S X" /> en une combinaison <LatexRenderer latex="\sum \lambda_i y_i^2" /> dans les nouvelles coordonnées. Le signe de cette somme est entièrement contrôlé par les valeurs propres.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="S = P D P^T" /> avec <LatexRenderer latex="P" /> orthogonale et <LatexRenderer latex="D = \mathrm{diag}(\lambda_1, \ldots, \lambda_n)" />, par le théorème spectral.</p>
                <p className="mt-2"><strong>Sens 1 : <LatexRenderer latex="S \ge 0 \Rightarrow \lambda_i \ge 0" />.</strong> Soit <LatexRenderer latex="i \in \{1, \ldots, n\}" />, et <LatexRenderer latex="X = P\,e_i" /> (la <LatexRenderer latex="i" />-ème colonne de <LatexRenderer latex="P" />). Alors <LatexRenderer latex="P^T X = e_i" /> et :</p>
                <LatexRenderer latex="\langle SX, X\rangle = X^T S X = X^T P D P^T X = e_i^T D e_i = \lambda_i \ge 0." />
                <p className="mt-2"><strong>Sens 2 : <LatexRenderer latex="\lambda_i \ge 0 \Rightarrow S \ge 0" />.</strong> Soit <LatexRenderer latex="X \in \mathbb{R}^n" /> quelconque, et <LatexRenderer latex="Y = P^T X = (y_1, \ldots, y_n)^T" />. Or :</p>
                <LatexRenderer latex="\langle SX, X\rangle = X^T P D P^T X = Y^T D Y = \sum_{i=1}^n \lambda_i y_i^2." />
                <p className="mt-2">Comme <LatexRenderer latex="\lambda_i \ge 0" /> et <LatexRenderer latex="y_i^2 \ge 0" /> pour tout <LatexRenderer latex="i" />, la somme est positive ou nulle. D'où <LatexRenderer latex="S \ge 0" />.</p>
                <Astuce>
                  Critère analogue : <LatexRenderer latex="S" /> est <strong>définie positive</strong> ssi toutes ses valeurs propres sont strictement positives. Et <LatexRenderer latex="S" /> est <strong>définie positive</strong> ssi <LatexRenderer latex="X^T S X > 0" /> pour tout <LatexRenderer latex="X \ne 0" />.
                </Astuce>
                <ConclusionBox>
                  Pour <LatexRenderer latex="S \in \mathcal{S}_n(\mathbb{R})" /> : <LatexRenderer latex="S \ge 0 \iff \mathrm{Sp}(S) \subset \mathbb{R}_+" />. Cette caractérisation est l'outil-clé pour étudier les formes quadratiques positives.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="26.6"
            title="Matrice du type A^T A est symétrique positive"
            difficulty="Niveau: Intermédiaire"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="A \in \mathcal{M}_{n,p}(\mathbb{R})" /> une matrice réelle. On pose <LatexRenderer latex="S = A^T A \in \mathcal{S}_p(\mathbb{R})" />.</p>
                <p>1. Vérifier que <LatexRenderer latex="S" /> est symétrique.</p>
                <p>2. Démontrer que <LatexRenderer latex="S" /> est positive.</p>
                <p>3. Caractériser le cas où <LatexRenderer latex="S" /> est définie positive.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  Pour montrer qu'une matrice est positive, on revient à la définition : <LatexRenderer latex="\langle SX, X\rangle \ge 0" /> pour tout <LatexRenderer latex="X" />. Ici on exploite l'identité <LatexRenderer latex="X^T A^T A X = (AX)^T (AX) = \|AX\|^2" />, qui donne directement la positivité.
                </PointMethodo>
                <p><strong>1. Symétrie.</strong> Soit <LatexRenderer latex="S = A^T A" />. D'où <LatexRenderer latex="S^T = (A^T A)^T = A^T (A^T)^T = A^T A = S" />. Donc <LatexRenderer latex="S \in \mathcal{S}_p(\mathbb{R})" />.</p>
                <p className="mt-2"><strong>2. Positivité.</strong> Soit <LatexRenderer latex="X \in \mathbb{R}^p" />. Or :</p>
                <LatexRenderer latex="\langle SX, X\rangle = X^T S X = X^T A^T A X = (AX)^T (AX) = \|AX\|^2 \ge 0." />
                <p className="mt-2">Donc <LatexRenderer latex="S" /> est positive.</p>
                <Astuce>
                  Toutes les matrices symétriques positives sont en fait de la forme <LatexRenderer latex="A^T A" /> pour un certain <LatexRenderer latex="A" /> (décomposition de Cholesky). Cette caractérisation est centrale en optimisation et statistiques (matrices de covariance).
                </Astuce>
                <p className="mt-2"><strong>3. Cas définie positive.</strong> <LatexRenderer latex="S" /> est définie positive ssi <LatexRenderer latex="\|AX\|^2 > 0" /> pour tout <LatexRenderer latex="X \ne 0" />, soit <LatexRenderer latex="AX \ne 0" /> pour tout <LatexRenderer latex="X \ne 0" />. Donc ssi <LatexRenderer latex="\ker A = \{0\}" />, c'est-à-dire <LatexRenderer latex="A" /> de rang <LatexRenderer latex="p" /> (injective).</p>
                <ConclusionBox>
                  <LatexRenderer latex="S = A^T A" /> est toujours symétrique positive. Elle est définie positive ssi <LatexRenderer latex="A" /> est injective (i.e. de rang plein <LatexRenderer latex="p" />).
                </ConclusionBox>
              </div>
            }
          />
        </div>

        {/* Module 6 */}
        <div>
          <DifficultyHeader level="Module 6 — Diagonalisation et applications" />

          <ExerciseCard
            id="26.7"
            title="Calcul de A^n via diagonalisation orthogonale"
            difficulty="Niveau: Concours"
            content={
              <div className="space-y-3">
                <p>Soit <LatexRenderer latex="A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}" />.</p>
                <p>1. Diagonaliser <LatexRenderer latex="A" /> dans une base orthonormée.</p>
                <p>2. En déduire l'expression de <LatexRenderer latex="A^n" /> pour <LatexRenderer latex="n \in \mathbb{N}" />.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  La diagonalisation <LatexRenderer latex="A = P D P^T" /> (avec <LatexRenderer latex="P" /> orthogonale) permet de calculer toute puissance entière de <LatexRenderer latex="A" /> via <LatexRenderer latex="A^n = P D^n P^T" />, où <LatexRenderer latex="D^n = \mathrm{diag}(\lambda_1^n, \ldots, \lambda_n^n)" />. C'est le principal intérêt calculatoire de la diagonalisation orthogonale.
                </PointMethodo>
                <p><strong>1. Diagonalisation.</strong> Soit <LatexRenderer latex="\chi_A(\lambda) = (\lambda - 2)^2 - 1 = (\lambda - 1)(\lambda - 3)" />. Donc valeurs propres <LatexRenderer latex="1" /> et <LatexRenderer latex="3" />.</p>
                <p>Vecteurs propres : pour <LatexRenderer latex="\lambda = 1" />, <LatexRenderer latex="(A - I)X = 0" /> donne <LatexRenderer latex="x + y = 0" />, soit <LatexRenderer latex="v_1 = (1, -1)" />, normalisé <LatexRenderer latex="e_1 = \tfrac{1}{\sqrt{2}}(1, -1)" />.</p>
                <p>Pour <LatexRenderer latex="\lambda = 3" />, <LatexRenderer latex="x = y" />, soit <LatexRenderer latex="v_2 = (1, 1)" />, normalisé <LatexRenderer latex="e_2 = \tfrac{1}{\sqrt{2}}(1, 1)" />.</p>
                <p className="mt-2">Soit <LatexRenderer latex="P = \tfrac{1}{\sqrt{2}}\begin{pmatrix} 1 & 1 \\ -1 & 1 \end{pmatrix}" /> orthogonale. Alors <LatexRenderer latex="A = P D P^T" /> avec <LatexRenderer latex="D = \mathrm{diag}(1, 3)" />.</p>
                <p className="mt-2"><strong>2. Calcul de <LatexRenderer latex="A^n" />.</strong> D'où <LatexRenderer latex="A^n = P D^n P^T" /> avec <LatexRenderer latex="D^n = \mathrm{diag}(1, 3^n)" />. Calcul matriciel :</p>
                <LatexRenderer latex="A^n = \frac{1}{2}\begin{pmatrix} 1 & 1 \\ -1 & 1 \end{pmatrix} \begin{pmatrix} 1 & 0 \\ 0 & 3^n \end{pmatrix} \begin{pmatrix} 1 & -1 \\ 1 & 1 \end{pmatrix} = \frac{1}{2}\begin{pmatrix} 1 + 3^n & -1 + 3^n \\ -1 + 3^n & 1 + 3^n \end{pmatrix}." />
                <Astuce>
                  Vérification : pour <LatexRenderer latex="n = 0" />, on a <LatexRenderer latex="A^0 = I_2" /> et la formule donne <LatexRenderer latex="\tfrac{1}{2}\binom{2\ 0}{0\ 2} = I_2" />. ✓ Pour <LatexRenderer latex="n = 1" />, <LatexRenderer latex="\tfrac{1}{2}\binom{4\ 2}{2\ 4} = A" />. ✓
                </Astuce>
                <ConclusionBox>
                  <LatexRenderer latex="A^n = \dfrac{1}{2}\begin{pmatrix} 1 + 3^n & 3^n - 1 \\ 3^n - 1 & 1 + 3^n \end{pmatrix}" /> pour tout <LatexRenderer latex="n \in \mathbb{N}" />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        {/* Module 7 */}
        <div>
          <DifficultyHeader level="Module 7 — Endomorphismes commutants et codiagonalisation" />

          <ExerciseCard
            id="26.8"
            title="Codiagonalisation de deux matrices symétriques commutantes"
            difficulty="Niveau: Difficile"
            content={
              <div className="space-y-3">
                <p>Soient <LatexRenderer latex="A, B \in \mathcal{S}_n(\mathbb{R})" /> deux matrices symétriques réelles.</p>
                <p>Démontrer que si <LatexRenderer latex="AB = BA" />, alors il existe une base orthonormée commune dans laquelle <LatexRenderer latex="A" /> et <LatexRenderer latex="B" /> sont simultanément diagonales.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  L'idée centrale : si <LatexRenderer latex="A" /> et <LatexRenderer latex="B" /> commutent, alors <LatexRenderer latex="B" /> stabilise les sous-espaces propres de <LatexRenderer latex="A" />. Comme <LatexRenderer latex="B" /> est symétrique, sa restriction à chaque sous-espace propre de <LatexRenderer latex="A" /> est encore diagonalisable dans une base orthonormée. On combine ces bases pour obtenir une base commune.
                </PointMethodo>
                <p><strong>Étape 1 : Stabilité des sous-espaces propres.</strong> Soit <LatexRenderer latex="\lambda" /> une valeur propre de <LatexRenderer latex="A" /> et <LatexRenderer latex="E_\lambda = \ker(A - \lambda I_n)" /> le sous-espace propre associé. Soit <LatexRenderer latex="x \in E_\lambda" />, donc <LatexRenderer latex="Ax = \lambda x" />.</p>
                <p>Or <LatexRenderer latex="A(Bx) = (AB)x = (BA)x = B(Ax) = B(\lambda x) = \lambda (Bx)" />.</p>
                <p>D'où <LatexRenderer latex="Bx \in E_\lambda" />, donc <LatexRenderer latex="B" /> stabilise <LatexRenderer latex="E_\lambda" />.</p>
                <p className="mt-2"><strong>Étape 2 : Diagonalisation de la restriction.</strong> La restriction <LatexRenderer latex="B_\lambda := B_{|E_\lambda}" /> est un endomorphisme de <LatexRenderer latex="E_\lambda" />. Sa matrice dans une base orthonormée de <LatexRenderer latex="E_\lambda" /> est encore symétrique (car <LatexRenderer latex="B" /> l'est). Par le théorème spectral, <LatexRenderer latex="B_\lambda" /> est diagonalisable dans une base orthonormée de <LatexRenderer latex="E_\lambda" />.</p>
                <p className="mt-2"><strong>Étape 3 : Base commune.</strong> Par le théorème spectral, <LatexRenderer latex="\mathbb{R}^n = \bigoplus_\lambda E_\lambda" /> en somme directe orthogonale. En concaténant les bases orthonormées de chaque <LatexRenderer latex="E_\lambda" /> (constituées de vecteurs propres de <LatexRenderer latex="B_\lambda" />), on obtient une base orthonormée de <LatexRenderer latex="\mathbb{R}^n" /> formée de vecteurs propres de <LatexRenderer latex="A" /> ET de <LatexRenderer latex="B" />.</p>
                <Astuce>
                  Ce résultat se généralise : toute famille finie d'endomorphismes symétriques 2 à 2 commutants est codiagonalisable dans une base orthonormée commune.
                </Astuce>
                <ConclusionBox>
                  <LatexRenderer latex="A, B \in \mathcal{S}_n(\mathbb{R})" /> commutantes <LatexRenderer latex="\Rightarrow" /> il existe <LatexRenderer latex="P \in \mathcal{O}_n(\mathbb{R})" /> tel que <LatexRenderer latex="P^T A P" /> et <LatexRenderer latex="P^T B P" /> soient simultanément diagonales.
                </ConclusionBox>
              </div>
            }
          />
        </div>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre10ReductionMatricesSymetriquesExercicesPage;
