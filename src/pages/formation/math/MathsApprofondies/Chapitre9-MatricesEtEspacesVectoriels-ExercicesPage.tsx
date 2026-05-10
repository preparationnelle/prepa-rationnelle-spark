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

const Chapitre9MatricesEtEspacesVectorielsExercicesPage = () => {
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
      chapterNumber={9}
      chapterTitle="Matrices, systèmes linéaires & espaces vectoriels"
      description="Exercices sur le calcul matriciel, les puissances de matrices et les sous-espaces vectoriels."
      slug="matrices-et-espaces-vectoriels"
      activeSection="exercises"
      titleClassName="text-slate-800"
      showNavigation={true}
      previousChapter={{
        slug: "couple-variables-aleatoires",
        title: "Couples de variables aléatoires"
      }}
      nextChapter={{
        slug: "algebre-bilineaire-espaces-euclidiens",
        title: "Algèbre bilinéaire et espaces euclidiens"
      }}
    >
      <div className="space-y-8">

        {/* Module 1 */}
        <div>
          <DifficultyHeader level="Module 1 — Calcul matriciel et puissances" />

          <ExerciseCard
            id="ex1"
            title="Exercice 1 — Puissances d'une matrice de rang 1"
            difficulty="Niveau: Intermédiaire"
            content={
              <div>
                <p>Soit <LatexRenderer latex="J = \begin{pmatrix} 2 & 2 & 2 \\ 2 & 2 & 2 \\ 2 & 2 & 2 \end{pmatrix}" />.</p>
                <p>Montrer que <LatexRenderer latex="\forall n \in \mathbb{N}^*,\ J^n = 6^{n-1} J" />.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <PointMethodo>
                  Pour calculer les puissances d'une matrice de rang 1, calculer d'abord <LatexRenderer latex="J^2" /> en produit matriciel, identifier une relation de la forme <LatexRenderer latex="J^2 = \lambda J" />, puis démontrer la formule générale par récurrence.
                </PointMethodo>
                <p><strong>Initialisation :</strong> Soit <LatexRenderer latex="n = 1" />. <LatexRenderer latex="J^1 = J = 6^0 J" />. La formule est vérifiée.</p>
                <p><strong>Calcul de <LatexRenderer latex="J^2" /> :</strong> Le coefficient <LatexRenderer latex="(i,j)" /> de <LatexRenderer latex="J^2" /> vaut <LatexRenderer latex="\sum_{k=1}^3 J_{ik} J_{kj} = \sum_{k=1}^3 2 \cdot 2 = 3 \times 4 = 12" />. D'où <LatexRenderer latex="J^2 = 12 J_1" /> où <LatexRenderer latex="J_1" /> est la matrice dont tous les coefficients valent 1. Or <LatexRenderer latex="J = 2 J_1" />, donc <LatexRenderer latex="J^2 = 6J" />.</p>
                <p><strong>Hérédité :</strong> Supposons <LatexRenderer latex="J^n = 6^{n-1} J" /> pour un certain <LatexRenderer latex="n \geq 1" />. Alors</p>
                <div className="text-center my-2">
                  <LatexRenderer latex="J^{n+1} = J^n \cdot J = 6^{n-1} J \cdot J = 6^{n-1} \cdot 6J = 6^n J." />
                </div>
                <p>La formule est héréditaire.</p>
                <ConclusionBox>
                  Par récurrence, <LatexRenderer latex="\forall n \in \mathbb{N}^*,\ J^n = 6^{n-1} J" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex2"
            title="Exercice 2 — Puissance d'une matrice triangulaire supérieure"
            difficulty="Niveau: Intermédiaire"
            content={
              <div>
                <p>Soit <LatexRenderer latex="A = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{pmatrix}" />. Calculer <LatexRenderer latex="A^n" /> pour tout <LatexRenderer latex="n \in \mathbb{N}" />.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <PointMethodo>
                  Pour une matrice de la forme <LatexRenderer latex="I + N" /> avec <LatexRenderer latex="N" /> nilpotente, utiliser la formule du binôme de Newton matriciel, qui est finie dès que <LatexRenderer latex="N^k = 0" />.
                </PointMethodo>
                <Astuce>
                  Poser <LatexRenderer latex="N = A - I" />, de sorte que <LatexRenderer latex="A = I + N" />. Comme <LatexRenderer latex="N" /> est nilpotente d'indice 3, le binôme de Newton donne <LatexRenderer latex="A^n = I + nN + \binom{n}{2} N^2" />.
                </Astuce>
                <p>Soit <LatexRenderer latex="N = A - I = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix}" />. On calcule :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex="N^2 = \begin{pmatrix} 0 & 0 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix},\quad N^3 = 0." />
                </div>
                <p>Or <LatexRenderer latex="I" /> et <LatexRenderer latex="N" /> commutent, donc le binôme de Newton s'applique :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex="A^n = (I+N)^n = I + nN + \binom{n}{2} N^2." />
                </div>
                <ConclusionBox>
                  <LatexRenderer latex="A^n = \begin{pmatrix} 1 & n & \dfrac{n(n-1)}{2} \\ 0 & 1 & n \\ 0 & 0 & 1 \end{pmatrix}" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex3"
            title="Exercice 3 — Puissances d'une matrice diagonale"
            difficulty="Niveau: Facile"
            content={
              <div>
                <p>Calculer <LatexRenderer latex="D^n" /> pour <LatexRenderer latex="D = \mathrm{diag}(2, -1, 3)" /> et tout <LatexRenderer latex="n \in \mathbb{N}" />.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <PointMethodo>
                  La puissance d'une matrice diagonale s'obtient en élevant chaque terme diagonal à la puissance correspondante.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="n \in \mathbb{N}" />. Le produit de matrices diagonales étant diagonal, une récurrence immédiate donne :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex="D^n = \mathrm{diag}(2^n,\, (-1)^n,\, 3^n)." />
                </div>
                <ConclusionBox>
                  <LatexRenderer latex="D^n = \mathrm{diag}(2^n,\, (-1)^n,\, 3^n)" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex4"
            title="Exercice 4 — Matrice de Fibonacci"
            difficulty="Niveau: Difficile"
            content={
              <div>
                <p>Soit <LatexRenderer latex="M = \begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix}" />. Montrer que <LatexRenderer latex="M^n = \begin{pmatrix} F_{n+1} & F_n \\ F_n & F_{n-1} \end{pmatrix}" /> où <LatexRenderer latex="(F_n)" /> est la suite de Fibonacci avec <LatexRenderer latex="F_0 = 0,\ F_1 = 1" />.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <PointMethodo>
                  Pour relier la puissance d'une matrice à une suite récurrente, poser la formule comme conjecture et la démontrer par récurrence, en utilisant la relation de récurrence de la suite dans l'étape d'hérédité.
                </PointMethodo>
                <p><strong>Initialisation :</strong> <LatexRenderer latex="M^1 = \begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} F_2 & F_1 \\ F_1 & F_0 \end{pmatrix}" />. Vérifié.</p>
                <p><strong>Hérédité :</strong> Supposons <LatexRenderer latex="M^n = \begin{pmatrix} F_{n+1} & F_n \\ F_n & F_{n-1} \end{pmatrix}" />. Alors :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex="M^{n+1} = M^n \cdot M = \begin{pmatrix} F_{n+1} & F_n \\ F_n & F_{n-1} \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} F_{n+1}+F_n & F_{n+1} \\ F_n+F_{n-1} & F_n \end{pmatrix}." />
                </div>
                <p>Or <LatexRenderer latex="F_{n+1} + F_n = F_{n+2}" /> et <LatexRenderer latex="F_n + F_{n-1} = F_{n+1}" /> par définition de la suite de Fibonacci.</p>
                <ConclusionBox>
                  Par récurrence, <LatexRenderer latex="M^n = \begin{pmatrix} F_{n+1} & F_n \\ F_n & F_{n-1} \end{pmatrix}" /> pour tout <LatexRenderer latex="n \geq 1" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex5"
            title="Exercice 5 — Puissances : matrice de rotation et nilpotente"
            difficulty="Niveau: Intermédiaire"
            content={
              <div>
                <p>Calculer <LatexRenderer latex="A^n" /> pour chacune des matrices suivantes :</p>
                <p className="mt-2">1. <LatexRenderer latex="A = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}" /> (rotation de <LatexRenderer latex="90°" />).</p>
                <p className="mt-2">2. <LatexRenderer latex="B = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}" /> (nilpotente).</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <PointMethodo>
                  Pour une matrice de rotation, détecter la périodicité en calculant les premières puissances jusqu'au retour à l'identité. Pour une matrice nilpotente, la série de puissances est finie.
                </PointMethodo>
                <p><strong>1. Rotation :</strong> On calcule <LatexRenderer latex="A^2 = -I" />, <LatexRenderer latex="A^3 = -A" />, <LatexRenderer latex="A^4 = I" />. La suite est 4-périodique. Soit <LatexRenderer latex="n = 4q + r" /> avec <LatexRenderer latex="r \in \{0,1,2,3\}" />.</p>
                <div className="text-center my-2">
                  <LatexRenderer latex="A^n = A^r \in \left\{ I,\ A,\ -I,\ -A \right\}." />
                </div>
                <p><strong>2. Nilpotente :</strong> <LatexRenderer latex="B^2 = 0" />. D'où pour tout <LatexRenderer latex="n \geq 2" />, <LatexRenderer latex="B^n = 0" />. Pour <LatexRenderer latex="n = 0" />, <LatexRenderer latex="B^0 = I" /> ; pour <LatexRenderer latex="n = 1" />, <LatexRenderer latex="B^1 = B" />.</p>
                <ConclusionBox>
                  Pour <LatexRenderer latex="A" /> : <LatexRenderer latex="A^n" /> est périodique de période 4. Pour <LatexRenderer latex="B" /> : <LatexRenderer latex="B^n = 0" /> pour tout <LatexRenderer latex="n \geq 2" />.
                </ConclusionBox>
              </div>
            }
          />

        </div>

        {/* Module 2 */}
        <div>
          <DifficultyHeader level="Module 2 — Espaces Vectoriels" />

          <ExerciseCard
            id="ex6"
            title="Exercice 6 — Intersection de noyaux de formes linéaires"
            difficulty="Niveau: Intermédiaire"
            content={
              <div>
                <p>Montrer que <LatexRenderer latex="F = \{ (x_1,x_2,x_3)^T \in \mathbb{R}^3 \mid 2x_1-5x_2+x_3=0,\ x_2+x_3=0 \}" /> est un sous-espace vectoriel de <LatexRenderer latex="\mathbb{R}^3" />.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <PointMethodo>
                  Pour montrer qu'un ensemble défini par des équations linéaires homogènes est un sous-espace vectoriel, l'identifier comme intersection de noyaux d'applications linéaires, ou effectuer directement la vérification des trois propriétés (non-vide, stabilité par addition, stabilité par multiplication scalaire).
                </PointMethodo>
                <p>Soient <LatexRenderer latex="\varphi_1 : (x_1,x_2,x_3) \mapsto 2x_1 - 5x_2 + x_3" /> et <LatexRenderer latex="\varphi_2 : (x_1,x_2,x_3) \mapsto x_2 + x_3" />. Ces deux applications sont linéaires de <LatexRenderer latex="\mathbb{R}^3" /> dans <LatexRenderer latex="\mathbb{R}" />.</p>
                <p>D'où <LatexRenderer latex="F = \ker(\varphi_1) \cap \ker(\varphi_2)" />.</p>
                <p>Or le noyau d'une application linéaire est un sous-espace vectoriel, et l'intersection de sous-espaces vectoriels est un sous-espace vectoriel.</p>
                <ConclusionBox>
                  <LatexRenderer latex="F" /> est un sous-espace vectoriel de <LatexRenderer latex="\mathbb{R}^3" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex7"
            title="Exercice 7 — Polynômes s'annulant en deux points"
            difficulty="Niveau: Intermédiaire"
            content={
              <div>
                <p>Soit <LatexRenderer latex="a \neq b" /> deux réels. Montrer que <LatexRenderer latex="F = \{ P \in \mathbb{R}_2[X] \mid P(a) = P(b) = 0 \}" /> est un sous-espace vectoriel de <LatexRenderer latex="\mathbb{R}_2[X]" />.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <PointMethodo>
                  Pour identifier un ensemble de polynômes vérifiant des conditions d'évaluation comme un sous-espace vectoriel, l'exprimer comme le noyau d'une application linéaire de dimension finie.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="\Phi : \mathbb{R}_2[X] \to \mathbb{R}^2" /> définie par <LatexRenderer latex="\Phi(P) = (P(a), P(b))" />. L'évaluation en un point est une forme linéaire, donc <LatexRenderer latex="\Phi" /> est bien linéaire.</p>
                <p>D'où <LatexRenderer latex="F = \ker(\Phi)" />.</p>
                <p>Or le noyau de toute application linéaire est un sous-espace vectoriel.</p>
                <ConclusionBox>
                  <LatexRenderer latex="F = \ker(\Phi)" /> est un sous-espace vectoriel de <LatexRenderer latex="\mathbb{R}_2[X]" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex8"
            title="Exercice 8 — Suites vérifiant une relation de récurrence linéaire"
            difficulty="Niveau: Difficile"
            content={
              <div>
                <p>Soit <LatexRenderer latex="F" /> l'ensemble des suites réelles <LatexRenderer latex="(u_n)_{n \geq 0}" /> vérifiant <LatexRenderer latex="u_{n+2} = u_{n+1} + u_n" /> pour tout <LatexRenderer latex="n \geq 0" />. Montrer que <LatexRenderer latex="F" /> est un sous-espace vectoriel de <LatexRenderer latex="\mathbb{R}^\mathbb{N}" />.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <PointMethodo>
                  Pour montrer qu'un ensemble de suites satisfaisant une relation de récurrence linéaire homogène est un sous-espace vectoriel, vérifier que la relation est linéaire (c'est-à-dire que toute combinaison linéaire de solutions est encore solution).
                </PointMethodo>
                <p><strong>Non-vide :</strong> La suite nulle <LatexRenderer latex="u_n = 0" /> vérifie la relation. Donc <LatexRenderer latex="F \neq \emptyset" />.</p>
                <p><strong>Stabilité par combinaison linéaire :</strong> Soient <LatexRenderer latex="(u_n), (v_n) \in F" /> et <LatexRenderer latex="\lambda, \mu \in \mathbb{R}" />. Soit <LatexRenderer latex="w_n = \lambda u_n + \mu v_n" />. Alors :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex="w_{n+2} = \lambda u_{n+2} + \mu v_{n+2} = \lambda(u_{n+1}+u_n) + \mu(v_{n+1}+v_n) = w_{n+1} + w_n." />
                </div>
                <p>Ainsi <LatexRenderer latex="(w_n) \in F" />.</p>
                <ConclusionBox>
                  <LatexRenderer latex="F" /> est un sous-espace vectoriel de <LatexRenderer latex="\mathbb{R}^\mathbb{N}" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex9"
            title="Exercice 9 — Sous-espaces vectoriels dans les matrices"
            difficulty="Niveau: Intermédiaire"
            content={
              <div>
                <p>Pour une matrice <LatexRenderer latex="A \in \mathcal{M}_n(\mathbb{R})" /> fixée, lesquels des ensembles suivants sont des sous-espaces vectoriels de <LatexRenderer latex="\mathcal{M}_n(\mathbb{R})" /> ?</p>
                <p className="mt-2">1. Le commutant de <LatexRenderer latex="A" /> : <LatexRenderer latex="\mathcal{C}(A) = \{ M \in \mathcal{M}_n(\mathbb{R}) \mid AM = MA \}" />.</p>
                <p className="mt-2">2. L'ensemble des matrices symétriques.</p>
                <p className="mt-2">3. L'ensemble des matrices inversibles.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <PointMethodo>
                  Pour chaque ensemble, vérifier les trois propriétés (vecteur nul, stabilité par addition, stabilité par multiplication scalaire) — ou trouver un contre-exemple pour les ensembles qui ne sont pas des sous-espaces.
                </PointMethodo>
                <p><strong>1. Commutant :</strong> Soit <LatexRenderer latex="\varphi(M) = AM - MA" />. Alors <LatexRenderer latex="\varphi" /> est linéaire et <LatexRenderer latex="\mathcal{C}(A) = \ker(\varphi)" />. D'où <LatexRenderer latex="\mathcal{C}(A)" /> est un sous-espace vectoriel.</p>
                <p><strong>2. Matrices symétriques :</strong> <LatexRenderer latex="\mathcal{S}_n(\mathbb{R}) = \ker(M \mapsto M - M^T)" />. L'application <LatexRenderer latex="M \mapsto M^T" /> est linéaire, donc <LatexRenderer latex="\mathcal{S}_n(\mathbb{R})" /> est un sous-espace vectoriel.</p>
                <p><strong>3. Matrices inversibles :</strong> Non. La matrice nulle <LatexRenderer latex="0" /> n'est pas inversible, donc l'ensemble des matrices inversibles ne contient pas le vecteur nul. Ce n'est pas un sous-espace vectoriel.</p>
                <ConclusionBox>
                  Le commutant et les matrices symétriques sont des sous-espaces vectoriels. L'ensemble des matrices inversibles ne l'est pas.
                </ConclusionBox>
              </div>
            }
          />
        </div>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre9MatricesEtEspacesVectorielsExercicesPage;
