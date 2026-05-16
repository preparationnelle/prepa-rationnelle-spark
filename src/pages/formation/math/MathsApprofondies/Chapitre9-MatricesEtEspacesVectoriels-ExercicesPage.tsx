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

        <div>
          <DifficultyHeader level="Module 4 — Trace et propriétés algébriques" />

          <ExerciseCard
            id="ex10"
            title="Trace d'une matrice nilpotente"
            difficulty="Niveau: Facile"
            content={
              <div>
                <p>Soit <LatexRenderer latex="A \in \mathcal{M}_n(\mathbb{R})" /> nilpotente (i.e. <LatexRenderer latex="A^k = 0" /> pour un certain <LatexRenderer latex="k \ge 1" />).</p>
                <p>Démontrer que <LatexRenderer latex="\mathrm{Tr}(A) = 0" />.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  Pour une matrice nilpotente, le polynôme caractéristique est nécessairement <LatexRenderer latex="\chi_A(X) = X^n" /> (toutes les valeurs propres sont nulles). Or la somme des valeurs propres (avec multiplicité) est la trace.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="A" /> nilpotente avec <LatexRenderer latex="A^k = 0" />. Or si <LatexRenderer latex="\lambda" /> est une valeur propre complexe de <LatexRenderer latex="A" /> avec vecteur propre <LatexRenderer latex="x \ne 0" />, alors <LatexRenderer latex="A^k x = \lambda^k x" />.</p>
                <p className="mt-2">Comme <LatexRenderer latex="A^k = 0" />, on a <LatexRenderer latex="\lambda^k x = 0" />, donc <LatexRenderer latex="\lambda^k = 0" /> (car <LatexRenderer latex="x \ne 0" />), soit <LatexRenderer latex="\lambda = 0" />.</p>
                <p className="mt-2">D'où toutes les valeurs propres de <LatexRenderer latex="A" /> sont nulles. Le polynôme caractéristique <LatexRenderer latex="\chi_A(X) = X^n" />.</p>
                <Astuce>
                  La trace est la somme des valeurs propres comptées avec multiplicité. Pour une matrice nilpotente, toutes les valeurs propres sont 0, donc la trace est 0.
                </Astuce>
                <p className="mt-2">Or <LatexRenderer latex="\mathrm{Tr}(A) = \sum_i \lambda_i = 0" />.</p>
                <ConclusionBox>
                  Pour <LatexRenderer latex="A" /> nilpotente : <LatexRenderer latex="\mathrm{Tr}(A) = 0" />. Plus généralement <LatexRenderer latex="\mathrm{Tr}(A^k) = 0" /> pour tout <LatexRenderer latex="k \ge 1" />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Module 5 — Calcul d'inverse" />

          <ExerciseCard
            id="ex11"
            title="Inverse par polynôme annulateur"
            difficulty="Niveau: Intermédiaire"
            content={
              <div>
                <p>Soit <LatexRenderer latex="A \in \mathcal{M}_n(\mathbb{R})" /> telle que <LatexRenderer latex="A^2 - 3A + 2I_n = 0" />.</p>
                <p>1. Démontrer que <LatexRenderer latex="A" /> est inversible.</p>
                <p>2. Calculer <LatexRenderer latex="A^{-1}" /> en fonction de <LatexRenderer latex="A" /> et <LatexRenderer latex="I_n" />.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  Un polynôme annulateur <LatexRenderer latex="P(A) = 0" /> avec <LatexRenderer latex="P(0) \ne 0" /> permet d'isoler <LatexRenderer latex="I_n" /> dans une combinaison de puissances de <LatexRenderer latex="A" />, donnant directement <LatexRenderer latex="A^{-1}" />.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="A^2 - 3A + 2I_n = 0" />, soit <LatexRenderer latex="A^2 - 3A = -2 I_n" />.</p>
                <p className="mt-2"><strong>1. Inversibilité.</strong> Factorisons : <LatexRenderer latex="A(A - 3I_n) = -2 I_n" />, soit <LatexRenderer latex="A \cdot \left[-\frac{1}{2}(A - 3I_n)\right] = I_n" />.</p>
                <p className="mt-2">D'où <LatexRenderer latex="A" /> est inversible (car elle admet un inverse à droite), et :</p>
                <LatexRenderer latex="A^{-1} = -\frac{1}{2}(A - 3I_n) = \frac{3 I_n - A}{2}." />
                <Astuce>
                  Vérification : <LatexRenderer latex="A \cdot A^{-1} = -\frac{1}{2}(A^2 - 3A) = -\frac{1}{2}(-2 I_n) = I_n" />. ✓
                </Astuce>
                <p className="mt-2">Cette méthode généralise : si <LatexRenderer latex="P(A) = 0" /> avec <LatexRenderer latex="P(X) = \sum a_k X^k" />, alors <LatexRenderer latex="A^{-1} = -(1/a_0) \sum_{k \ge 1} a_k A^{k-1}" /> (sous condition <LatexRenderer latex="a_0 \ne 0" />).</p>
                <ConclusionBox>
                  <LatexRenderer latex="A^{-1} = (3 I_n - A)/2" />. Méthode-clé : un polynôme annulateur avec <LatexRenderer latex="P(0) \ne 0" /> donne directement <LatexRenderer latex="A^{-1}" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex12"
            title="Rang d'une matrice par opérations élémentaires"
            difficulty="Niveau: Intermédiaire"
            content={
              <div>
                <p>Calculer le rang de <LatexRenderer latex="A = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\ 1 & 1 & 1 \end{pmatrix}" /> par échelonnement.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  Le rang d'une matrice est invariant par opérations élémentaires sur les lignes (ou colonnes). On échelonne la matrice par pivot de Gauss : le rang est le nombre de pivots non nuls (ou de lignes non nulles dans la forme échelonnée).
                </PointMethodo>
                <p>Soit <LatexRenderer latex="A" />. Effectuons les opérations élémentaires sur les lignes.</p>
                <p className="mt-2"><LatexRenderer latex="L_2 \leftarrow L_2 - 2 L_1" /> : <LatexRenderer latex="(2, 4, 6) - 2(1, 2, 3) = (0, 0, 0)" />. La 2e ligne devient nulle.</p>
                <p className="mt-2"><LatexRenderer latex="L_3 \leftarrow L_3 - L_1" /> : <LatexRenderer latex="(1, 1, 1) - (1, 2, 3) = (0, -1, -2)" />.</p>
                <p className="mt-2">Matrice échelonnée :</p>
                <LatexRenderer latex="\begin{pmatrix} 1 & 2 & 3 \\ 0 & 0 & 0 \\ 0 & -1 & -2 \end{pmatrix} \to \begin{pmatrix} 1 & 2 & 3 \\ 0 & -1 & -2 \\ 0 & 0 & 0 \end{pmatrix}" />
                <p className="mt-2">(après réordonnement). Il y a <strong>2 lignes non nulles</strong>, donc <LatexRenderer latex="\mathrm{rg}(A) = 2" />.</p>
                <Astuce>
                  Vérification directe : la 2e ligne est <LatexRenderer latex="2 \times" /> la 1re. Donc les lignes sont liées, et le rang est au plus 2. Les lignes 1 et 3 ne sont pas colinéaires, donc le rang est au moins 2.
                </Astuce>
                <ConclusionBox>
                  <LatexRenderer latex="\mathrm{rg}(A) = 2" />. La matrice <LatexRenderer latex="A" /> n'est pas inversible (<LatexRenderer latex="\mathrm{rg} < n = 3" />).
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Module 6 — Théorème du rang matriciel" />

          <ExerciseCard
            id="ex13"
            title="Inégalité de rang et théorème du rang"
            difficulty="Niveau: Concours"
            content={
              <div>
                <p>Soient <LatexRenderer latex="A \in \mathcal{M}_{n, p}(\mathbb{R})" /> et <LatexRenderer latex="B \in \mathcal{M}_{p, q}(\mathbb{R})" />.</p>
                <p>Démontrer que <LatexRenderer latex="\mathrm{rg}(AB) \le \min(\mathrm{rg}\,A, \mathrm{rg}\,B)" />.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  Le rang d'un produit est borné par les rangs individuels. Les deux inégalités <LatexRenderer latex="\mathrm{rg}(AB) \le \mathrm{rg}\,A" /> et <LatexRenderer latex="\mathrm{rg}(AB) \le \mathrm{rg}\,B" /> se démontrent géométriquement via les images de matrices.
                </PointMethodo>
                <p><strong>Inégalité <LatexRenderer latex="\mathrm{rg}(AB) \le \mathrm{rg}\,A" />.</strong> Soit <LatexRenderer latex="x \in \mathbb{R}^q" />. Alors <LatexRenderer latex="ABx = A(Bx)" />, donc <LatexRenderer latex="\mathrm{Im}(AB) = A(\mathrm{Im}\,B) \subset \mathrm{Im}\,A" />.</p>
                <p className="mt-2">D'où <LatexRenderer latex="\mathrm{rg}(AB) = \dim \mathrm{Im}(AB) \le \dim \mathrm{Im}\,A = \mathrm{rg}\,A" />.</p>
                <p className="mt-2"><strong>Inégalité <LatexRenderer latex="\mathrm{rg}(AB) \le \mathrm{rg}\,B" />.</strong> Or <LatexRenderer latex="\mathrm{Im}(AB) = A(\mathrm{Im}\,B)" />. Soit <LatexRenderer latex="A_{|\mathrm{Im}\,B}" /> la restriction de <LatexRenderer latex="A" /> à <LatexRenderer latex="\mathrm{Im}\,B" />. Alors :</p>
                <LatexRenderer latex="\mathrm{rg}(AB) = \dim A(\mathrm{Im}\,B) \le \dim \mathrm{Im}\,B = \mathrm{rg}\,B," />
                <p className="mt-2">car une application linéaire ne peut pas augmenter la dimension de l'image.</p>
                <Astuce>
                  L'inégalité réciproque (Sylvester) est <LatexRenderer latex="\mathrm{rg}(AB) \ge \mathrm{rg}\,A + \mathrm{rg}\,B - p" /> (déjà vue au chapitre 1 dans cet exemple) — ce qui borne par le bas.
                </Astuce>
                <ConclusionBox>
                  <LatexRenderer latex="\mathrm{rg}(AB) \le \min(\mathrm{rg}\,A, \mathrm{rg}\,B)" />. La multiplication ne peut qu'éroder le rang.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Module 7 — Matrices et systèmes" />

          <ExerciseCard
            id="ex14"
            title="Calcul de A^n pour une matrice diagonalisable 2×2"
            difficulty="Niveau: Difficile"
            content={
              <div>
                <p>Soit <LatexRenderer latex="A = \begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix}" /> (matrice de la suite de Fibonacci).</p>
                <p>1. Diagonaliser <LatexRenderer latex="A" />.</p>
                <p>2. En déduire l'expression explicite de la suite de Fibonacci <LatexRenderer latex="F_n" /> définie par <LatexRenderer latex="F_0 = 0, F_1 = 1, F_{n+2} = F_{n+1} + F_n" /> (formule de Binet).</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  Pour une suite récurrente linéaire d'ordre 2, on peut l'écrire matriciellement <LatexRenderer latex="(F_{n+1}, F_n)^T = A^n (F_1, F_0)^T" />. La diagonalisation de <LatexRenderer latex="A" /> donne ensuite l'expression explicite des <LatexRenderer latex="A^n" />, donc des <LatexRenderer latex="F_n" />.
                </PointMethodo>
                <p><strong>1. Diagonalisation.</strong> Le polynôme caractéristique : <LatexRenderer latex="\chi_A(\lambda) = \lambda^2 - \lambda - 1" />, de racines <LatexRenderer latex="\varphi = (1 + \sqrt{5})/2" /> (nombre d'or) et <LatexRenderer latex="\psi = (1 - \sqrt{5})/2" />.</p>
                <p className="mt-2">Vecteurs propres : pour <LatexRenderer latex="\varphi" />, résoudre <LatexRenderer latex="(A - \varphi I) X = 0" /> donne <LatexRenderer latex="X = (\varphi, 1)^T" />. Pour <LatexRenderer latex="\psi" /> : <LatexRenderer latex="(\psi, 1)^T" />.</p>
                <Astuce>
                  Le nombre d'or vérifie <LatexRenderer latex="\varphi^2 = \varphi + 1" /> ; c'est exactement le polynôme caractéristique annulé en <LatexRenderer latex="\varphi" />.
                </Astuce>
                <p className="mt-2">Soit <LatexRenderer latex="P = \begin{pmatrix} \varphi & \psi \\ 1 & 1 \end{pmatrix}" />, <LatexRenderer latex="D = \mathrm{diag}(\varphi, \psi)" />. Alors <LatexRenderer latex="A = P D P^{-1}" />.</p>
                <p className="mt-2"><strong>2. Formule de Binet.</strong> Or <LatexRenderer latex="\binom{F_{n+1}}{F_n} = A^n \binom{F_1}{F_0} = P D^n P^{-1} \binom{1}{0}" />.</p>
                <p className="mt-2">Le calcul donne, après simplification :</p>
                <LatexRenderer latex="F_n = \frac{\varphi^n - \psi^n}{\varphi - \psi} = \frac{1}{\sqrt{5}}\left(\left(\frac{1 + \sqrt{5}}{2}\right)^n - \left(\frac{1 - \sqrt{5}}{2}\right)^n\right)." />
                <ConclusionBox>
                  Formule de Binet : <LatexRenderer latex="F_n = (\varphi^n - \psi^n)/\sqrt{5}" /> où <LatexRenderer latex="\varphi = (1+\sqrt{5})/2" /> (nombre d'or). Méthode-clé pour résoudre toute récurrence linéaire d'ordre constant.
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
