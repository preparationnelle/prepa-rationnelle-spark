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

const Chapitre11ApplicationsLineairesEtStructuresVectoriellesExercicesPage = () => {
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
      chapterNumber={11}
      chapterTitle="Applications linéaires & structures vectorielles"
      description="Exercices sur les applications linéaires, le noyau, l'image, et les projecteurs."
      slug="applications-lineaires-structures-vectorielles"
      activeSection="exercises"
      titleClassName="text-slate-800"
      showNavigation={true}
      previousChapter={{
        slug: "probabilites-conditionnement",
        title: "Probabilités et Conditionnement"
      }}
      nextChapter={{
        slug: "optimisation-multivariee-avancee",
        title: "Optimisation Multivariée Avancée"
      }}
    >
      <div className="space-y-8">

        {/* Module 1 */}
        <div>
          <DifficultyHeader level="Module 1 — Noyau et Image — Théorie" />

          <ExerciseCard
            id="ex20"
            title="Inclusion Im(f) dans Ker(f)"
            difficulty="Niveau: Intermédiaire"
            content={
              <div>
                <p>Soit <LatexRenderer latex="E" /> un espace vectoriel et <LatexRenderer latex="f \in \mathcal{L}(E)" />. Démontrer que :</p>
                <div className="text-center my-4">
                  <LatexRenderer latex="f^2 = 0_{\mathcal{L}(E)} \iff \operatorname{Im}(f) \subset \operatorname{Ker}(f)." />
                </div>
              </div>
            }
            correction={
              <div className="space-y-4">
                <PointMethodo>
                  Pour montrer une équivalence, traiter les deux implications séparément. Pour chaque sens, partir de l'hypothèse et transformer l'expression en utilisant la définition de l'image et du noyau.
                </PointMethodo>
                <p><strong>Sens direct (<LatexRenderer latex="f^2 = 0 \Rightarrow \operatorname{Im}(f) \subset \operatorname{Ker}(f)" />) :</strong></p>
                <p>Soit <LatexRenderer latex="y \in \operatorname{Im}(f)" />. Il existe <LatexRenderer latex="x \in E" /> tel que <LatexRenderer latex="y = f(x)" />. Or <LatexRenderer latex="f^2 = 0" />, donc :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex="f(y) = f(f(x)) = f^2(x) = 0." />
                </div>
                <p>Ainsi <LatexRenderer latex="y \in \operatorname{Ker}(f)" />. D'où <LatexRenderer latex="\operatorname{Im}(f) \subset \operatorname{Ker}(f)" />.</p>
                <p><strong>Sens réciproque (<LatexRenderer latex="\operatorname{Im}(f) \subset \operatorname{Ker}(f) \Rightarrow f^2 = 0" />) :</strong></p>
                <p>Soit <LatexRenderer latex="x \in E" />. Alors <LatexRenderer latex="f(x) \in \operatorname{Im}(f) \subset \operatorname{Ker}(f)" />, donc <LatexRenderer latex="f(f(x)) = 0" />.</p>
                <p>Ainsi <LatexRenderer latex="f^2(x) = 0" /> pour tout <LatexRenderer latex="x \in E" />, soit <LatexRenderer latex="f^2 = 0_{\mathcal{L}(E)}" />.</p>
                <ConclusionBox>
                  <LatexRenderer latex="f^2 = 0_{\mathcal{L}(E)} \iff \operatorname{Im}(f) \subset \operatorname{Ker}(f)" />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        {/* Module 2 */}
        <div>
          <DifficultyHeader level="Module 2 — Projecteurs et Sommes Directes" />

          <ExerciseCard
            id="ex6"
            title="Décomposition par polynôme annulateur"
            difficulty="Niveau: Difficile"
            content={
              <div>
                <p>Soit <LatexRenderer latex="E" /> un espace vectoriel de dimension finie, <LatexRenderer latex="f \in \mathcal{L}(E)" /> et <LatexRenderer latex="a \neq b \in \mathbb{R}" /> tels que <LatexRenderer latex="(f - a\operatorname{Id})(f - b\operatorname{Id}) = 0" />.</p>
                <p className="mt-2">1. Montrer que <LatexRenderer latex="E = E_a(f) \oplus E_b(f)" /> (somme directe des sous-espaces propres associés).</p>
                <p className="mt-2">2. Exprimer le projecteur <LatexRenderer latex="p" /> sur <LatexRenderer latex="E_a(f)" /> parallèlement à <LatexRenderer latex="E_b(f)" />.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <PointMethodo>
                  Lorsqu'un endomorphisme admet un polynôme annulateur scindé à racines simples, utiliser la décomposition par fractions partielles (ou une combinaison explicite) pour écrire l'identité comme somme de projecteurs sur les sous-espaces propres.
                </PointMethodo>
                <Astuce>
                  La relation <LatexRenderer latex="(f-aI)(f-bI)=0" /> signifie que le polynôme <LatexRenderer latex="(X-a)(X-b)" /> annule <LatexRenderer latex="f" />. Comme ce polynôme est scindé à racines simples, <LatexRenderer latex="f" /> est diagonalisable sur <LatexRenderer latex="\{a, b\}" />.
                </Astuce>
                <p><strong>Question 1 — Décomposition :</strong></p>
                <p>Soit <LatexRenderer latex="x \in E" />. Posons :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex="u = \frac{1}{a-b}(f - bI)(x), \quad v = \frac{1}{b-a}(f - aI)(x)." />
                </div>
                <p><strong>Synthèse :</strong> <LatexRenderer latex="u + v = \frac{(f-bI)(x) - (f-aI)(x)}{a-b} = \frac{(a-b)x}{a-b} = x" />.</p>
                <p><strong>Appartenance :</strong> <LatexRenderer latex="(f-aI)(u) = \frac{1}{a-b}(f-aI)(f-bI)(x) = 0" />, donc <LatexRenderer latex="u \in E_a(f)" />. De même <LatexRenderer latex="v \in E_b(f)" />.</p>
                <p><strong>Unicité :</strong> Si <LatexRenderer latex="x = u' + v'" /> avec <LatexRenderer latex="u' \in E_a(f), v' \in E_b(f)" />, appliquer <LatexRenderer latex="(f-aI)" /> donne <LatexRenderer latex="(b-a)v' = (f-aI)(x)" />, d'où <LatexRenderer latex="v' = v" />, et de même <LatexRenderer latex="u' = u" />.</p>
                <p>Donc <LatexRenderer latex="E = E_a(f) \oplus E_b(f)" />.</p>
                <p><strong>Question 2 — Projecteur :</strong></p>
                <p>D'après la décomposition, le projecteur sur <LatexRenderer latex="E_a(f)" /> parallèlement à <LatexRenderer latex="E_b(f)" /> est :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex="p = \frac{1}{a-b}(f - bI)." />
                </div>
                <p>Vérification : <LatexRenderer latex="p^2 = \frac{1}{(a-b)^2}(f-bI)^2" />. Or <LatexRenderer latex="(f-aI)(f-bI) = 0" /> donne <LatexRenderer latex="(f-bI)^2 = (a-b)(f-bI)" />, donc <LatexRenderer latex="p^2 = p" />.</p>
                <ConclusionBox>
                  <LatexRenderer latex="E = E_a(f) \oplus E_b(f)" /> et le projecteur sur <LatexRenderer latex="E_a(f)" /> parallèlement à <LatexRenderer latex="E_b(f)" /> est <LatexRenderer latex="p = \dfrac{f - bI}{a - b}" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex5"
            title="Projection dans R³ sur une droite parallèlement à un plan"
            difficulty="Niveau: Intermédiaire"
            content={
              <div>
                <p>Soit <LatexRenderer latex="u = (1, 2, -1)" />, <LatexRenderer latex="F = \operatorname{Vect}(u)" /> et <LatexRenderer latex="G = \{(x, y, z) \in \mathbb{R}^3 \mid 2x + y + z = 0\}" />.</p>
                <p className="mt-2">Vérifier que <LatexRenderer latex="\mathbb{R}^3 = F \oplus G" />, puis exprimer la projection sur <LatexRenderer latex="F" /> parallèlement à <LatexRenderer latex="G" />.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <PointMethodo>
                  Pour déterminer un projecteur sur une droite parallèlement à un hyperplan, décomposer un vecteur quelconque en somme d'un multiple de la direction de la droite et d'un vecteur du plan, en exploitant la forme linéaire qui définit le plan.
                </PointMethodo>
                <p><strong>Vérification de la somme directe :</strong> <LatexRenderer latex="\dim F = 1" />, <LatexRenderer latex="\dim G = 2" /> (hyperplan de <LatexRenderer latex="\mathbb{R}^3" />). Or <LatexRenderer latex="2 \cdot 1 + 1 \cdot 2 + 1 \cdot (-1) = 3 \neq 0" />, donc <LatexRenderer latex="u \notin G" />, d'où <LatexRenderer latex="F \cap G = \{0\}" />. Ainsi <LatexRenderer latex="\mathbb{R}^3 = F \oplus G" />.</p>
                <p><strong>Expression du projecteur :</strong> Soit <LatexRenderer latex="a = (x, y, z) \in \mathbb{R}^3" />. On cherche <LatexRenderer latex="\lambda \in \mathbb{R}" /> et <LatexRenderer latex="c \in G" /> tels que <LatexRenderer latex="a = \lambda u + c" />.</p>
                <p>En appliquant la forme linéaire <LatexRenderer latex="\varphi : (x,y,z) \mapsto 2x+y+z" /> (qui s'annule sur <LatexRenderer latex="G" />) :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex="\varphi(a) = \lambda \varphi(u) = \lambda(2+2-1) = 3\lambda." />
                </div>
                <p>D'où <LatexRenderer latex="\lambda = \dfrac{2x+y+z}{3}" /> et :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex="p(x,y,z) = \lambda u = \frac{2x+y+z}{3}(1, 2, -1)." />
                </div>
                <ConclusionBox>
                  Le projecteur sur <LatexRenderer latex="F = \operatorname{Vect}(1,2,-1)" /> parallèlement à <LatexRenderer latex="G" /> est <LatexRenderer latex="p(x,y,z) = \dfrac{2x+y+z}{3}(1, 2, -1)" />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        {/* Module 3 */}
        <div>
          <DifficultyHeader level="Module 3 — Matrices et Endomorphismes" />

          <ExerciseCard
            id="ex13"
            title="Endomorphisme cyclique : polynôme annulateur et inverse"
            difficulty="Niveau: Intermédiaire"
            content={
              <div>
                <p>Soit <LatexRenderer latex="E = \mathbb{R}^3" /> de base <LatexRenderer latex="(e_1, e_2, e_3)" /> et <LatexRenderer latex="f \in \mathcal{L}(E)" /> défini par <LatexRenderer latex="f(e_1) = e_2,\ f(e_2) = e_3,\ f(e_3) = e_1" />.</p>
                <p className="mt-2">Déterminer un polynôme annulateur de <LatexRenderer latex="f" />, puis exprimer <LatexRenderer latex="f^{-1}" />.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <PointMethodo>
                  Pour trouver un polynôme annulateur d'un endomorphisme cyclique, calculer les itérées jusqu'à retomber sur l'identité. L'existence d'un polynôme annulateur sans racine nulle garantit l'inversibilité, et l'inverse s'exprime comme polynôme en <LatexRenderer latex="f" />.
                </PointMethodo>
                <p>On calcule : <LatexRenderer latex="f(e_1) = e_2" />, <LatexRenderer latex="f^2(e_1) = e_3" />, <LatexRenderer latex="f^3(e_1) = e_1" />. De même pour <LatexRenderer latex="e_2" /> et <LatexRenderer latex="e_3" />. D'où <LatexRenderer latex="f^3 = \operatorname{Id}_E" />.</p>
                <p>Ainsi le polynôme <LatexRenderer latex="X^3 - 1" /> annule <LatexRenderer latex="f" />.</p>
                <p><strong>Inversibilité :</strong> De <LatexRenderer latex="f^3 = \operatorname{Id}" /> on déduit <LatexRenderer latex="f \circ f^2 = \operatorname{Id}" />, donc <LatexRenderer latex="f" /> est inversible et <LatexRenderer latex="f^{-1} = f^2" />.</p>
                <p><strong>Expression explicite de <LatexRenderer latex="f^{-1}" /> :</strong> <LatexRenderer latex="f^2(e_1) = e_3" />, <LatexRenderer latex="f^2(e_2) = e_1" />, <LatexRenderer latex="f^2(e_3) = e_2" />.</p>
                <ConclusionBox>
                  Le polynôme <LatexRenderer latex="X^3 - 1" /> annule <LatexRenderer latex="f" />. L'endomorphisme est inversible et <LatexRenderer latex="f^{-1} = f^2" />, défini par <LatexRenderer latex="f^{-1}(e_1) = e_3,\ f^{-1}(e_2) = e_1,\ f^{-1}(e_3) = e_2" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex7"
            title="Multiplication à gauche dans M₂(ℝ)"
            difficulty="Niveau: Intermédiaire"
            content={
              <div>
                <p>Soit <LatexRenderer latex="A = \begin{pmatrix} 1 & 0 \\ 1 & 0 \end{pmatrix}" /> et <LatexRenderer latex="f : M \mapsto AM" /> dans <LatexRenderer latex="\mathcal{M}_2(\mathbb{R})" />.</p>
                <p className="mt-2">Déterminer <LatexRenderer latex="\operatorname{Ker}(f)" />, <LatexRenderer latex="\operatorname{Im}(f)" /> et leurs dimensions.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <PointMethodo>
                  Pour déterminer le noyau et l'image d'une multiplication à gauche par une matrice, interpréter colonne par colonne : le noyau est l'ensemble des matrices dont les colonnes sont dans <LatexRenderer latex="\ker(A)" />, et l'image est l'ensemble des matrices dont les colonnes sont dans <LatexRenderer latex="\operatorname{Im}(A)" />. Appliquer ensuite le théorème du rang pour vérifier les dimensions.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="M = (c_1 \mid c_2) \in \mathcal{M}_2(\mathbb{R})" /> où <LatexRenderer latex="c_1, c_2 \in \mathbb{R}^2" /> sont les colonnes de <LatexRenderer latex="M" />. Alors <LatexRenderer latex="f(M) = AM = (Ac_1 \mid Ac_2)" />.</p>
                <p><strong>Noyau :</strong> <LatexRenderer latex="f(M) = 0 \iff Ac_1 = 0 \text{ et } Ac_2 = 0 \iff c_1, c_2 \in \ker(A)" />.</p>
                <p>Or <LatexRenderer latex="\ker(A) = \operatorname{Vect}\!\begin{pmatrix}0\\1\end{pmatrix}" /> (dimension 1). D'où <LatexRenderer latex="\dim \ker(f) = 1 \times 2 = 2" />.</p>
                <p><strong>Image :</strong> <LatexRenderer latex="\operatorname{Im}(f) = \{ (Ac_1 \mid Ac_2) \mid c_1, c_2 \in \mathbb{R}^2 \}" />. Comme <LatexRenderer latex="\operatorname{Im}(A) = \operatorname{Vect}\!\begin{pmatrix}1\\1\end{pmatrix}" />, les matrices de <LatexRenderer latex="\operatorname{Im}(f)" /> ont leurs colonnes dans <LatexRenderer latex="\operatorname{Im}(A)" />. D'où <LatexRenderer latex="\dim \operatorname{Im}(f) = 2" />.</p>
                <p><strong>Vérification par le théorème du rang :</strong> <LatexRenderer latex="\dim \ker(f) + \dim \operatorname{Im}(f) = 2 + 2 = 4 = \dim \mathcal{M}_2(\mathbb{R})" />. Cohérent.</p>
                <ConclusionBox>
                  <LatexRenderer latex="\dim \ker(f) = 2" /> et <LatexRenderer latex="\dim \operatorname{Im}(f) = 2" />, vérifié par le théorème du rang.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="ex22"
            title="Endomorphisme nilpotent : borne sur l'indice de nilpotence"
            difficulty="Niveau: Difficile"
            content={
              <div>
                <p>Soit <LatexRenderer latex="E" /> un espace vectoriel de dimension <LatexRenderer latex="n" /> et <LatexRenderer latex="f \in \mathcal{L}(E)" /> tel que <LatexRenderer latex="f^{k-1} \neq 0" /> et <LatexRenderer latex="f^k = 0" />.</p>
                <p className="mt-2">Montrer que <LatexRenderer latex="k \leq n" />.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <PointMethodo>
                  Pour majorer l'indice de nilpotence d'un endomorphisme, construire une famille libre d'éléments du cardinal voulu. La stratégie consiste à partir d'un vecteur que les itérées de <LatexRenderer latex="f" /> ne rendent pas nul trop tôt, et à montrer que les itérées forment une famille libre.
                </PointMethodo>
                <p>Puisque <LatexRenderer latex="f^{k-1} \neq 0" />, il existe <LatexRenderer latex="x \in E" /> tel que <LatexRenderer latex="f^{k-1}(x) \neq 0" />.</p>
                <p><strong>Claim :</strong> La famille <LatexRenderer latex="\mathcal{F} = (x, f(x), f^2(x), \ldots, f^{k-1}(x))" /> est libre.</p>
                <p><strong>Démonstration :</strong> Soit <LatexRenderer latex="\sum_{i=0}^{k-1} \alpha_i f^i(x) = 0" />. On applique <LatexRenderer latex="f^{k-1}" /> à cette relation :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex="\sum_{i=0}^{k-1} \alpha_i f^{k-1+i}(x) = 0." />
                </div>
                <p>Or <LatexRenderer latex="f^k = 0" />, donc pour <LatexRenderer latex="i \geq 1" />, <LatexRenderer latex="f^{k-1+i}(x) = f^{i-1}(f^k(x)) = 0" />. Il reste <LatexRenderer latex="\alpha_0 f^{k-1}(x) = 0" />. Comme <LatexRenderer latex="f^{k-1}(x) \neq 0" />, on obtient <LatexRenderer latex="\alpha_0 = 0" />.</p>
                <p>En appliquant successivement <LatexRenderer latex="f^{k-2}, \ldots, f^0" />, on obtient de même <LatexRenderer latex="\alpha_1 = \cdots = \alpha_{k-1} = 0" />.</p>
                <p>D'où <LatexRenderer latex="\mathcal{F}" /> est une famille libre de <LatexRenderer latex="k" /> vecteurs de <LatexRenderer latex="E" />.</p>
                <ConclusionBox>
                  Toute famille libre a un cardinal au plus <LatexRenderer latex="\dim E = n" />. Donc <LatexRenderer latex="k \leq n" />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre11ApplicationsLineairesEtStructuresVectoriellesExercicesPage;
