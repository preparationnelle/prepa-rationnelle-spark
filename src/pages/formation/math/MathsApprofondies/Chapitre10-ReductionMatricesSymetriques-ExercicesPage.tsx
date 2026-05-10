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
      <div className="mb-6 border border-stone-200 rounded-xl bg-white shadow-sm p-6">
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

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre10ReductionMatricesSymetriquesExercicesPage;
