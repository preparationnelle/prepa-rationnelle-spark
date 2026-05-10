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

const Chapitre2EndomorphismesMatricesAvanceesExercicesPage = () => {
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
    const num = id.split('-')[1].padStart(2, '0');
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
      chapterNumber={2}
      chapterTitle="Éléments propres et réduction des endomorphismes"
      description="Valeurs propres, vecteurs propres, diagonalisation et formes normales des endomorphismes et matrices carrées."
      slug="endomorphismes-matrices-avancees"
      activeSection="exercises"
      showNavigation={true}
      previousChapter={{
        slug: "espaces-vectoriels",
        title: "Espaces vectoriels (Ch 1)"
      }}
      nextChapter={{
        slug: "matrices-et-systemes",
        title: "Matrices et systèmes (Ch 3)"
      }}
    >
      <div className="space-y-2">

        <DifficultyHeader level="Module 1 — Calculs et propriétés fondamentales" />

        <ExerciseCard
          id="2-1"
          title="Polynôme caractéristique et diagonalisation d'une matrice 2×2"
          difficulty="Niveau: Facile"
          content={
            <div className="space-y-3">
              <p>Soit <LatexRenderer latex="A = \begin{pmatrix} 2 & 1 \\ 0 & 3 \end{pmatrix}" />.</p>
              <ol className="list-decimal list-inside space-y-1 ml-2">
                <li>Calculer le polynôme caractéristique de <LatexRenderer latex="A" />.</li>
                <li>Déterminer les valeurs propres de <LatexRenderer latex="A" />.</li>
                <li>Pour chaque valeur propre, déterminer l'espace propre associé.</li>
                <li>La matrice <LatexRenderer latex="A" /> est-elle diagonalisable ?</li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-3">
              <PointMethodo>
                Pour diagonaliser une matrice, calculer le polynôme caractéristique <LatexRenderer latex="\chi_A(X) = \det(A - XI)" />, en déduire les valeurs propres, puis pour chaque valeur propre <LatexRenderer latex="\lambda_i" /> résoudre le système <LatexRenderer latex="(A - \lambda_i I)X = 0" /> pour trouver l'espace propre <LatexRenderer latex="E_{\lambda_i}(A)" />. La matrice est diagonalisable si et seulement si la somme des dimensions des espaces propres égale la taille de la matrice.
              </PointMethodo>

              <p><strong>1. Polynôme caractéristique.</strong></p>
              <p><LatexRenderer latex="\chi_A(X) = \det(A - XI_2) = (2-X)(3-X) = X^2 - 5X + 6" /></p>

              <p><strong>2. Valeurs propres.</strong></p>
              <p>Les racines de <LatexRenderer latex="\chi_A(X) = 0" /> sont <LatexRenderer latex="\lambda_1 = 2" /> et <LatexRenderer latex="\lambda_2 = 3" /> (racines simples).</p>

              <p><strong>3. Espaces propres.</strong></p>
              <p>Pour <LatexRenderer latex="\lambda_1 = 2" /> : <LatexRenderer latex="A - 2I = \begin{pmatrix} 0 & 1 \\ 0 & 1 \end{pmatrix}" />, d'où <LatexRenderer latex="E_2(A) = \text{Vect}\!\begin{pmatrix} 1 \\ 0 \end{pmatrix}" />.</p>
              <p>Pour <LatexRenderer latex="\lambda_2 = 3" /> : <LatexRenderer latex="A - 3I = \begin{pmatrix} -1 & 1 \\ 0 & 0 \end{pmatrix}" />, d'où <LatexRenderer latex="E_3(A) = \text{Vect}\!\begin{pmatrix} 1 \\ 1 \end{pmatrix}" />.</p>

              <p><strong>4. Diagonalisabilité.</strong></p>
              <p><LatexRenderer latex="\dim E_2(A) + \dim E_3(A) = 1 + 1 = 2 = \dim \mathbb{R}^2" />. Donc <LatexRenderer latex="A" /> est diagonalisable.</p>

              <ConclusionBox>
                <p><LatexRenderer latex="\text{Spec}(A) = \{2, 3\}" />. La matrice <LatexRenderer latex="A" /> est diagonalisable : <LatexRenderer latex="A = PDP^{-1}" /> avec <LatexRenderer latex="P = \begin{pmatrix}1 & 1\\0 & 1\end{pmatrix}" /> et <LatexRenderer latex="D = \begin{pmatrix}2&0\\0&3\end{pmatrix}" />.</p>
              </ConclusionBox>
            </div>
          }
        />

        <ExerciseCard
          id="2-2"
          title="Diagonalisation et calcul de puissances — matrice symétrique"
          difficulty="Niveau: Facile"
          content={
            <div className="space-y-3">
              <p>Soit <LatexRenderer latex="B = \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}" />.</p>
              <ol className="list-decimal list-inside space-y-1 ml-2">
                <li>Déterminer les valeurs propres de <LatexRenderer latex="B" />.</li>
                <li>Diagonaliser la matrice <LatexRenderer latex="B" />.</li>
                <li>En déduire une expression de <LatexRenderer latex="B^n" /> pour <LatexRenderer latex="n \in \mathbb{N}" />.</li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-3">
              <PointMethodo>
                Dès qu'une matrice est diagonalisable avec <LatexRenderer latex="B = PDP^{-1}" />, on a <LatexRenderer latex="B^n = PD^nP^{-1}" /> car les puissances d'une matrice diagonale sont immédiates : <LatexRenderer latex="D^n = \text{diag}(\lambda_1^n, \ldots, \lambda_k^n)" />.
              </PointMethodo>

              <p><strong>1. Valeurs propres.</strong></p>
              <p><LatexRenderer latex="\chi_B(X) = (1-X)^2 - 4 = X^2 - 2X - 3 = (X-3)(X+1)" />.</p>
              <p>Ainsi <LatexRenderer latex="\lambda_1 = 3" /> et <LatexRenderer latex="\lambda_2 = -1" />.</p>

              <p><strong>2. Diagonalisation.</strong></p>
              <p>Pour <LatexRenderer latex="\lambda_1 = 3" /> : <LatexRenderer latex="B - 3I = \begin{pmatrix}-2&2\\2&-2\end{pmatrix}" />, d'où <LatexRenderer latex="v_1 = \begin{pmatrix}1\\1\end{pmatrix}" />.</p>
              <p>Pour <LatexRenderer latex="\lambda_2 = -1" /> : <LatexRenderer latex="B + I = \begin{pmatrix}2&2\\2&2\end{pmatrix}" />, d'où <LatexRenderer latex="v_2 = \begin{pmatrix}1\\-1\end{pmatrix}" />.</p>
              <p>Donc <LatexRenderer latex="B = PDP^{-1}" /> avec <LatexRenderer latex="P = \begin{pmatrix}1&1\\1&-1\end{pmatrix}" />, <LatexRenderer latex="D = \begin{pmatrix}3&0\\0&-1\end{pmatrix}" />, <LatexRenderer latex="P^{-1} = \frac{1}{2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}" />.</p>

              <p><strong>3. Puissance <LatexRenderer latex="B^n" />.</strong></p>
              <p><LatexRenderer latex="B^n = PD^nP^{-1} = \frac{1}{2}\begin{pmatrix}3^n + (-1)^n & 3^n - (-1)^n \\ 3^n - (-1)^n & 3^n + (-1)^n\end{pmatrix}" /></p>

              <ConclusionBox>
                <p><LatexRenderer latex="B^n = \frac{1}{2}\begin{pmatrix}3^n + (-1)^n & 3^n - (-1)^n \\ 3^n - (-1)^n & 3^n + (-1)^n\end{pmatrix}" />.</p>
              </ConclusionBox>
            </div>
          }
        />

        <ExerciseCard
          id="2-3"
          title="Non-diagonalisabilité — défaut de l'espace propre"
          difficulty="Niveau: Facile"
          content={
            <div className="space-y-3">
              <p>Soit <LatexRenderer latex="u" /> l'endomorphisme de <LatexRenderer latex="\mathbb{R}^3" /> de matrice dans la base canonique :</p>
              <p className="text-center"><LatexRenderer latex="A = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & 2 \end{pmatrix}" /></p>
              <ol className="list-decimal list-inside space-y-1 ml-2">
                <li>Déterminer les valeurs propres de <LatexRenderer latex="u" />.</li>
                <li>L'endomorphisme <LatexRenderer latex="u" /> est-il diagonalisable ? Justifier.</li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-3">
              <PointMethodo>
                Pour une matrice triangulaire, les valeurs propres sont les coefficients diagonaux. La multiplicité algébrique <LatexRenderer latex="m_a(\lambda)" /> est l'ordre de la racine dans <LatexRenderer latex="\chi_A" /> ; la multiplicité géométrique <LatexRenderer latex="m_g(\lambda) = \dim E_\lambda(A)" />. L'endomorphisme est diagonalisable si et seulement si <LatexRenderer latex="m_g(\lambda) = m_a(\lambda)" /> pour toute valeur propre.
              </PointMethodo>

              <p><strong>1. Valeurs propres.</strong></p>
              <p><LatexRenderer latex="A" /> est triangulaire supérieure. D'où <LatexRenderer latex="\text{Spec}(u) = \{1, 2\}" /> avec multiplicités algébriques <LatexRenderer latex="m_a(1) = 1" /> et <LatexRenderer latex="m_a(2) = 2" />.</p>

              <p><strong>2. Diagonalisabilité.</strong></p>
              <p>Pour <LatexRenderer latex="\lambda = 1" /> : <LatexRenderer latex="A - I = \begin{pmatrix}0&0&0\\0&1&1\\0&0&1\end{pmatrix}" /> de rang 2. Donc <LatexRenderer latex="m_g(1) = 3 - 2 = 1 = m_a(1)" />. OK.</p>
              <p>Pour <LatexRenderer latex="\lambda = 2" /> : <LatexRenderer latex="A - 2I = \begin{pmatrix}-1&0&0\\0&0&1\\0&0&0\end{pmatrix}" /> de rang 2. Donc <LatexRenderer latex="m_g(2) = 3 - 2 = 1 < 2 = m_a(2)" />. Défaut.</p>

              <Astuce>
                Le critère de diagonalisabilité échoue dès qu'une valeur propre a une multiplicité géométrique strictement inférieure à sa multiplicité algébrique.
              </Astuce>

              <ConclusionBox>
                <p><LatexRenderer latex="u" /> n'est pas diagonalisable car <LatexRenderer latex="m_g(2) = 1 < 2 = m_a(2)" />.</p>
              </ConclusionBox>
            </div>
          }
        />

        <DifficultyHeader level="Module 2 — Techniques et applications" />

        <ExerciseCard
          id="2-4"
          title="Diagonalisation d'une matrice 3×3 — valeurs propres complexes"
          difficulty="Niveau: Intermédiaire"
          content={
            <div className="space-y-3">
              <p>On considère la matrice</p>
              <p className="text-center"><LatexRenderer latex="A = \begin{pmatrix} 1 & 2 & -1 \\ 0 & 3 & 0 \\ 2 & -1 & 0 \end{pmatrix}" /></p>
              <ol className="list-decimal list-inside space-y-1 ml-2">
                <li>Calculer le polynôme caractéristique de <LatexRenderer latex="A" />.</li>
                <li>Déterminer les valeurs propres réelles de <LatexRenderer latex="A" />.</li>
                <li>Donner une base de l'espace propre pour la valeur propre réelle.</li>
                <li>La matrice <LatexRenderer latex="A" /> est-elle diagonalisable sur <LatexRenderer latex="\mathbb{R}" /> ?</li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-3">
              <PointMethodo>
                Pour un développement du déterminant, choisir la ligne ou colonne avec le plus de zéros. Ici la deuxième ligne ne contient qu'un coefficient non nul, ce qui simplifie le calcul. Une fois le polynôme caractéristique obtenu, identifier les racines réelles et vérifier si le discriminant des facteurs restants est négatif.
              </PointMethodo>

              <p><strong>1. Polynôme caractéristique.</strong></p>
              <p>En développant par rapport à la deuxième ligne :</p>
              <p><LatexRenderer latex="\chi_A(X) = -(3-X)\det\begin{pmatrix}1-X & -1\\2 & -X\end{pmatrix} = -(3-X)\bigl(X(X-1)+2\bigr) = -(X-3)(X^2-X+2)" /></p>

              <p><strong>2. Valeurs propres réelles.</strong></p>
              <p>Le discriminant de <LatexRenderer latex="X^2 - X + 2" /> est <LatexRenderer latex="\Delta = 1 - 8 = -7 < 0" /> : pas de racines réelles.</p>
              <p>D'où <LatexRenderer latex="\text{Spec}_{\mathbb{R}}(A) = \{3\}" />.</p>

              <p><strong>3. Espace propre pour <LatexRenderer latex="\lambda = 3" />.</strong></p>
              <p><LatexRenderer latex="A - 3I = \begin{pmatrix}-2&2&-1\\0&0&0\\2&-1&-3\end{pmatrix}" />.</p>
              <p>En résolvant <LatexRenderer latex="(A-3I)X = 0" />, on obtient <LatexRenderer latex="E_3(A) = \text{Vect}\!\begin{pmatrix}1\\1\\0\end{pmatrix}" />.</p>

              <p><strong>4. Diagonalisabilité.</strong></p>
              <p><LatexRenderer latex="A" /> n'a qu'une seule valeur propre réelle avec <LatexRenderer latex="\dim E_3(A) = 1 < 3 = \dim \mathbb{R}^3" />.</p>

              <ConclusionBox>
                <p><LatexRenderer latex="A" /> n'est pas diagonalisable sur <LatexRenderer latex="\mathbb{R}" /> : elle ne possède qu'une valeur propre réelle (<LatexRenderer latex="\lambda = 3" />) et son espace propre est de dimension 1.</p>
              </ConclusionBox>
            </div>
          }
        />

        <ExerciseCard
          id="2-5"
          title="Endomorphisme de transposition — valeurs propres dans M₂(ℝ)"
          difficulty="Niveau: Intermédiaire"
          content={
            <div className="space-y-3">
              <p>Soit <LatexRenderer latex="f" /> l'endomorphisme de <LatexRenderer latex="\mathcal{M}_2(\mathbb{R})" /> défini par <LatexRenderer latex="f(M) = {}^t\!M" />.</p>
              <p>Déterminer les valeurs propres et les sous-espaces propres de <LatexRenderer latex="f" />.</p>
            </div>
          }
          correction={
            <div className="space-y-3">
              <PointMethodo>
                Pour trouver les valeurs propres d'un endomorphisme défini par une formule (et non par une matrice), résoudre directement l'équation <LatexRenderer latex="f(M) = \lambda M" />. Utiliser les propriétés de l'opérateur pour contraindre <LatexRenderer latex="\lambda" />, puis décrire les sous-espaces propres géométriquement.
              </PointMethodo>

              <p><strong>Valeurs propres.</strong></p>
              <p>Soit <LatexRenderer latex="M \ne 0" /> avec <LatexRenderer latex="{}^t\!M = \lambda M" />. En transposant : <LatexRenderer latex="M = \lambda {}^t\!M = \lambda^2 M" />. D'où <LatexRenderer latex="\lambda^2 = 1" />, soit <LatexRenderer latex="\lambda \in \{1, -1\}" />.</p>

              <p><strong>Espaces propres.</strong></p>
              <p>Pour <LatexRenderer latex="\lambda = 1" /> : <LatexRenderer latex="E_1(f) = \{M : {}^t\!M = M\}" /> (matrices symétriques).</p>
              <p>Base : <LatexRenderer latex="\left\{\begin{pmatrix}1&0\\0&0\end{pmatrix},\begin{pmatrix}0&1\\1&0\end{pmatrix},\begin{pmatrix}0&0\\0&1\end{pmatrix}\right\}" />. Donc <LatexRenderer latex="\dim E_1(f) = 3" />.</p>
              <p>Pour <LatexRenderer latex="\lambda = -1" /> : <LatexRenderer latex="E_{-1}(f) = \{M : {}^t\!M = -M\}" /> (matrices antisymétriques).</p>
              <p>Base : <LatexRenderer latex="\left\{\begin{pmatrix}0&1\\-1&0\end{pmatrix}\right\}" />. Donc <LatexRenderer latex="\dim E_{-1}(f) = 1" />.</p>

              <Astuce>
                La vérification finale : <LatexRenderer latex="\dim E_1(f) + \dim E_{-1}(f) = 3 + 1 = 4 = \dim \mathcal{M}_2(\mathbb{R})" /> confirme que <LatexRenderer latex="f" /> est diagonalisable.
              </Astuce>

              <ConclusionBox>
                <p><LatexRenderer latex="\text{Spec}(f) = \{1, -1\}" /> avec <LatexRenderer latex="\dim E_1(f) = 3" /> (symétriques) et <LatexRenderer latex="\dim E_{-1}(f) = 1" /> (antisymétriques). <LatexRenderer latex="f" /> est diagonalisable.</p>
              </ConclusionBox>
            </div>
          }
        />

        <ExerciseCard
          id="2-6"
          title="La matrice J_n — valeurs propres par structure"
          difficulty="Niveau: Intermédiaire"
          content={
            <div className="space-y-3">
              <p>Pour <LatexRenderer latex="n \ge 2" />, on considère la matrice <LatexRenderer latex="J_n \in \mathcal{M}_n(\mathbb{R})" /> dont tous les coefficients valent 1.</p>
              <ol className="list-decimal list-inside space-y-1 ml-2">
                <li>Déterminer les valeurs propres de <LatexRenderer latex="J_n" />.</li>
                <li>Pour chaque valeur propre, donner la dimension de l'espace propre.</li>
                <li>La matrice <LatexRenderer latex="J_n" /> est-elle diagonalisable ?</li>
                <li>Calculer <LatexRenderer latex="J_n^k" /> pour tout <LatexRenderer latex="k \ge 1" />.</li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-3">
              <PointMethodo>
                Quand une matrice admet une structure multiplicative (ici <LatexRenderer latex="J_n = \mathbf{1}_n {}^t\!\mathbf{1}_n" />), exploiter cette structure pour calculer directement l'action sur les vecteurs propres, sans développer le polynôme caractéristique.
              </PointMethodo>

              <p><strong>1. Valeurs propres.</strong></p>
              <p>Soit <LatexRenderer latex="\mathbf{1}_n = (1,\ldots,1)^T" />. Or <LatexRenderer latex="J_n \mathbf{1}_n = n\,\mathbf{1}_n" /> : <LatexRenderer latex="\lambda_1 = n" /> est valeur propre. Pour <LatexRenderer latex="v \perp \mathbf{1}_n" /> : <LatexRenderer latex="J_n v = 0" />, donc <LatexRenderer latex="\lambda_2 = 0" /> est valeur propre.</p>

              <p><strong>2. Dimensions.</strong></p>
              <p><LatexRenderer latex="E_n(J_n) = \text{Vect}(\mathbf{1}_n)" /> : <LatexRenderer latex="\dim E_n(J_n) = 1" />.</p>
              <p><LatexRenderer latex="E_0(J_n) = \{v : {}^t\!\mathbf{1}_n v = 0\}" /> (hyperplan orthogonal à <LatexRenderer latex="\mathbf{1}_n" />) : <LatexRenderer latex="\dim E_0(J_n) = n-1" />.</p>

              <p><strong>3. Diagonalisabilité.</strong></p>
              <p><LatexRenderer latex="1 + (n-1) = n" /> : la somme des dimensions vaut <LatexRenderer latex="\dim \mathbb{R}^n" />. Donc <LatexRenderer latex="J_n" /> est diagonalisable.</p>

              <Astuce>
                Pour <LatexRenderer latex="J_n^k" />, utiliser la structure produit : <LatexRenderer latex="J_n^2 = J_n \cdot J_n = \mathbf{1}_n({}^t\!\mathbf{1}_n \mathbf{1}_n){}^t\!\mathbf{1}_n = n J_n" />. Par récurrence, <LatexRenderer latex="J_n^k = n^{k-1} J_n" />.
              </Astuce>

              <p><strong>4. Puissances.</strong></p>
              <p><LatexRenderer latex="J_n^2 = (\mathbf{1}_n {}^t\!\mathbf{1}_n)(\mathbf{1}_n {}^t\!\mathbf{1}_n) = \mathbf{1}_n ({}^t\!\mathbf{1}_n \mathbf{1}_n) {}^t\!\mathbf{1}_n = n J_n" />. D'où par récurrence : <LatexRenderer latex="J_n^k = n^{k-1} J_n" /> pour tout <LatexRenderer latex="k \ge 1" />.</p>

              <ConclusionBox>
                <p><LatexRenderer latex="\text{Spec}(J_n) = \{0, n\}" />. <LatexRenderer latex="J_n" /> est diagonalisable. <LatexRenderer latex="J_n^k = n^{k-1} J_n" /> pour tout <LatexRenderer latex="k \ge 1" />.</p>
              </ConclusionBox>
            </div>
          }
        />

        <ExerciseCard
          id="2-7"
          title="Endomorphismes nilpotents — spectre et indice"
          difficulty="Niveau: Intermédiaire"
          content={
            <div className="space-y-3">
              <p>Soit <LatexRenderer latex="E" /> un espace vectoriel de dimension finie et <LatexRenderer latex="u \in \mathcal{L}(E)" />. On dit que <LatexRenderer latex="u" /> est <em>nilpotent</em> s'il existe <LatexRenderer latex="k \in \mathbb{N}^*" /> tel que <LatexRenderer latex="u^k = 0" />.</p>
              <ol className="list-decimal list-inside space-y-1 ml-2">
                <li>Montrer que si <LatexRenderer latex="u" /> est nilpotent, alors 0 est la seule valeur propre de <LatexRenderer latex="u" />.</li>
                <li>La réciproque est-elle vraie ?</li>
                <li>Soit <LatexRenderer latex="A = \begin{pmatrix}0&1&0\\0&0&1\\0&0&0\end{pmatrix}" />. Montrer que <LatexRenderer latex="A" /> est nilpotente et déterminer son indice.</li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-3">
              <PointMethodo>
                Pour montrer que les seules valeurs propres d'un endomorphisme nilpotent sont nulles, évaluer <LatexRenderer latex="u^k(v) = \lambda^k v" /> sur un vecteur propre <LatexRenderer latex="v \ne 0" />, puis utiliser <LatexRenderer latex="u^k = 0" />.
              </PointMethodo>

              <p><strong>1. Spectre d'un nilpotent.</strong></p>
              <p>Soit <LatexRenderer latex="\lambda" /> une valeur propre de <LatexRenderer latex="u" /> et <LatexRenderer latex="v \ne 0" /> un vecteur propre. Soit <LatexRenderer latex="u^k = 0" />. D'où <LatexRenderer latex="0 = u^k(v) = \lambda^k v" />. Or <LatexRenderer latex="v \ne 0" />, donc <LatexRenderer latex="\lambda^k = 0" />, soit <LatexRenderer latex="\lambda = 0" />.</p>

              <p><strong>2. Réciproque.</strong></p>
              <p>Non. La réciproque est fausse en général. Contre-exemple sur <LatexRenderer latex="\mathbb{R}^2" /> : la matrice nulle <LatexRenderer latex="A = 0" /> est nilpotente, mais la matrice identité <LatexRenderer latex="I" /> a pour unique valeur propre 1 (pas 0). Exemple avec valeur propre 0 non nilpotent : non, en dimension finie si 0 est l'unique valeur propre, un résultat lié au théorème de Cayley-Hamilton donne que la matrice est bien nilpotente. La réciproque est en fait vraie en dimension finie sur un corps algébriquement clos.</p>

              <Astuce>
                Pour déterminer l'indice de nilpotence, calculer successivement <LatexRenderer latex="A, A^2, A^3, \ldots" /> jusqu'à obtenir la matrice nulle. L'indice est le plus petit <LatexRenderer latex="k" /> tel que <LatexRenderer latex="A^k = 0" />.
              </Astuce>

              <p><strong>3. Calcul des puissances de <LatexRenderer latex="A" />.</strong></p>
              <p><LatexRenderer latex="A^2 = \begin{pmatrix}0&0&1\\0&0&0\\0&0&0\end{pmatrix} \ne 0" />.</p>
              <p><LatexRenderer latex="A^3 = 0" />.</p>
              <p>D'où <LatexRenderer latex="A" /> est nilpotente d'indice 3.</p>

              <ConclusionBox>
                <p>Tout endomorphisme nilpotent n'a que 0 pour valeur propre. <LatexRenderer latex="A" /> est nilpotente d'indice 3 (<LatexRenderer latex="A^2 \ne 0" /> et <LatexRenderer latex="A^3 = 0" />).</p>
              </ConclusionBox>
            </div>
          }
        />

        <DifficultyHeader level="Module 3 — Niveau concours" />

        <ExerciseCard
          id="2-8"
          title="Endomorphismes cycliques et polynôme minimal"
          difficulty="Niveau: Concours"
          content={
            <div className="space-y-3">
              <p>Soit <LatexRenderer latex="E" /> un espace vectoriel de dimension finie <LatexRenderer latex="n \ge 1" /> et <LatexRenderer latex="u \in \mathcal{L}(E)" />. On dit que <LatexRenderer latex="u" /> est <em>cyclique</em> s'il existe <LatexRenderer latex="x \in E" /> tel que <LatexRenderer latex="(x, u(x), u^2(x), \ldots, u^{n-1}(x))" /> soit une base de <LatexRenderer latex="E" />.</p>
              <ol className="list-decimal list-inside space-y-1 ml-2">
                <li>Montrer que si <LatexRenderer latex="u" /> est cyclique, alors <LatexRenderer latex="u" /> est diagonalisable si et seulement si son polynôme minimal est scindé à racines simples.</li>
                <li>Construire explicitement un endomorphisme cyclique de polynôme caractéristique prescrit <LatexRenderer latex="P \in \mathbb{K}[X]" /> unitaire de degré <LatexRenderer latex="n" />.</li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-3">
              <PointMethodo>
                Pour un endomorphisme cyclique, le polynôme minimal est égal au polynôme caractéristique (tous deux de degré <LatexRenderer latex="n" />). La diagonalisabilité équivaut alors au polynôme minimal scindé à racines simples, ce qui est le critère général via le théorème de décomposition des noyaux itérés.
              </PointMethodo>

              <p><strong>1. Diagonalisabilité d'un endomorphisme cyclique.</strong></p>
              <p>Soit <LatexRenderer latex="x" /> un vecteur cyclique. Comme <LatexRenderer latex="(x, u(x), \ldots, u^{n-1}(x))" /> est une base, la famille est libre, donc le polynôme minimal <LatexRenderer latex="m_u" /> est de degré <LatexRenderer latex="\ge n" />. Or <LatexRenderer latex="\deg m_u \le \deg \chi_u = n" />. Donc <LatexRenderer latex="m_u = \chi_u" />.</p>
              <p>Or <LatexRenderer latex="u" /> est diagonalisable <LatexRenderer latex="\iff" /> polynôme minimal scindé à racines simples <LatexRenderer latex="\iff" /> polynôme caractéristique scindé à racines simples.</p>

              <p><strong>2. Matrice compagnon.</strong></p>
              <p>Soit <LatexRenderer latex="P(X) = X^n + a_{n-1}X^{n-1} + \cdots + a_0" />. La matrice compagnon de <LatexRenderer latex="P" /> est :</p>
              <p><LatexRenderer latex="C_P = \begin{pmatrix}0&0&\cdots&0&-a_0\\1&0&\cdots&0&-a_1\\0&1&\cdots&0&-a_2\\\vdots&&\ddots&&\vdots\\0&0&\cdots&1&-a_{n-1}\end{pmatrix}" /></p>
              <p>L'endomorphisme de matrice <LatexRenderer latex="C_P" /> dans la base canonique est cyclique (vecteur cyclique <LatexRenderer latex="e_1" />) et a pour polynôme caractéristique <LatexRenderer latex="P" />.</p>

              <ConclusionBox>
                <p>Un endomorphisme cyclique est diagonalisable si et seulement si son polynôme caractéristique est scindé à racines simples. La matrice compagnon fournit un modèle explicite pour tout polynôme unitaire prescrit.</p>
              </ConclusionBox>
            </div>
          }
        />

        <ExerciseCard
          id="2-9"
          title="Endomorphismes qui commutent — D'après ESSEC 2003"
          difficulty="Niveau: Concours"
          content={
            <div className="space-y-3">
              <p>Soit <LatexRenderer latex="E" /> un espace vectoriel de dimension <LatexRenderer latex="n \ge 2" /> et <LatexRenderer latex="u \in \mathcal{L}(E)" /> possédant exactement <LatexRenderer latex="n" /> valeurs propres distinctes <LatexRenderer latex="\lambda_1, \ldots, \lambda_n" />.</p>
              <ol className="list-decimal list-inside space-y-1 ml-2">
                <li>Montrer que <LatexRenderer latex="u" /> est diagonalisable.</li>
                <li>Soit <LatexRenderer latex="v \in \mathcal{L}(E)" /> qui commute avec <LatexRenderer latex="u" />. Montrer que <LatexRenderer latex="v" /> laisse stable chaque sous-espace propre de <LatexRenderer latex="u" />.</li>
                <li>En déduire que <LatexRenderer latex="v" /> est diagonalisable dans la même base que <LatexRenderer latex="u" />.</li>
                <li>Application : déterminer tous les endomorphismes de <LatexRenderer latex="\mathbb{R}^3" /> qui commutent avec <LatexRenderer latex="A = \text{diag}(1, 2, 3)" />.</li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-3">
              <PointMethodo>
                La commutation <LatexRenderer latex="uv = vu" /> se traduit géométriquement par la stabilité des espaces propres : si <LatexRenderer latex="u(x) = \lambda x" />, alors <LatexRenderer latex="u(v(x)) = v(u(x)) = \lambda v(x)" />, ce qui montre que <LatexRenderer latex="v(x)" /> est encore dans le même espace propre de <LatexRenderer latex="u" />.
              </PointMethodo>

              <p><strong>1. Diagonalisabilité de <LatexRenderer latex="u" />.</strong></p>
              <p>Avec <LatexRenderer latex="n" /> valeurs propres distinctes, chaque <LatexRenderer latex="\dim E_{\lambda_i}(u) \ge 1" />. D'où <LatexRenderer latex="\sum \dim E_{\lambda_i}(u) \ge n" />. Or <LatexRenderer latex="\sum \dim E_{\lambda_i}(u) \le n" /> (somme directe). Donc l'égalité tient, <LatexRenderer latex="u" /> est diagonalisable.</p>

              <p><strong>2. Stabilité des espaces propres.</strong></p>
              <p>Soit <LatexRenderer latex="x \in E_{\lambda_i}(u)" />. Or <LatexRenderer latex="uv = vu" /> implique <LatexRenderer latex="u(v(x)) = v(u(x)) = v(\lambda_i x) = \lambda_i v(x)" />. Donc <LatexRenderer latex="v(x) \in E_{\lambda_i}(u)" />.</p>

              <p><strong>3. Diagonalisabilité de <LatexRenderer latex="v" />.</strong></p>
              <p>Chaque <LatexRenderer latex="E_{\lambda_i}(u)" /> est de dimension 1 (car <LatexRenderer latex="n" /> valeurs propres distinctes). Soit <LatexRenderer latex="E_{\lambda_i}(u) = \text{Vect}(e_i)" />. Comme <LatexRenderer latex="v" /> laisse <LatexRenderer latex="E_{\lambda_i}(u)" /> stable, <LatexRenderer latex="v(e_i) = \mu_i e_i" />. Donc <LatexRenderer latex="v" /> est diagonalisable dans la base <LatexRenderer latex="(e_1, \ldots, e_n)" />.</p>

              <Astuce>
                Pour l'application, la condition <LatexRenderer latex="MA = AM" /> donne <LatexRenderer latex="m_{ij}\lambda_j = \lambda_i m_{ij}" /> pour tout <LatexRenderer latex="(i,j)" />. Comme <LatexRenderer latex="\lambda_i \ne \lambda_j" /> pour <LatexRenderer latex="i \ne j" />, on en déduit <LatexRenderer latex="m_{ij} = 0" />.
              </Astuce>

              <p><strong>4. Application.</strong></p>
              <p>Si <LatexRenderer latex="M = (m_{ij})" /> commute avec <LatexRenderer latex="A = \text{diag}(1,2,3)" />, alors <LatexRenderer latex="(MA)_{ij} = m_{ij}\lambda_j" /> et <LatexRenderer latex="(AM)_{ij} = \lambda_i m_{ij}" />. Pour <LatexRenderer latex="i \ne j" />, <LatexRenderer latex="m_{ij}(\lambda_j - \lambda_i) = 0" />, d'où <LatexRenderer latex="m_{ij} = 0" />.</p>

              <ConclusionBox>
                <p>Les endomorphismes qui commutent avec <LatexRenderer latex="A = \text{diag}(1,2,3)" /> sont exactement les matrices diagonales <LatexRenderer latex="\text{diag}(a,b,c)" /> avec <LatexRenderer latex="a, b, c \in \mathbb{R}" />.</p>
              </ConclusionBox>
            </div>
          }
        />

        <ExerciseCard
          id="2-10"
          title="Polynômes annulateurs et diagonalisabilité — D'après EDHEC 2009"
          difficulty="Niveau: Concours"
          content={
            <div className="space-y-3">
              <p>Soit <LatexRenderer latex="E" /> un espace vectoriel de dimension finie et <LatexRenderer latex="u \in \mathcal{L}(E)" />.</p>
              <ol className="list-decimal list-inside space-y-1 ml-2">
                <li>Montrer que toute valeur propre de <LatexRenderer latex="u" /> est racine du polynôme minimal de <LatexRenderer latex="u" />.</li>
                <li>Soit <LatexRenderer latex="P" /> un polynôme annulateur de <LatexRenderer latex="u" />. Montrer que toute valeur propre de <LatexRenderer latex="u" /> est racine de <LatexRenderer latex="P" />.</li>
                <li>Application : soit <LatexRenderer latex="A \in \mathcal{M}_n(\mathbb{K})" /> telle que <LatexRenderer latex="A^k = I" /> pour un certain <LatexRenderer latex="k \ge 1" />. Montrer que <LatexRenderer latex="A" /> est diagonalisable si <LatexRenderer latex="\text{car}(\mathbb{K}) = 0" /> ou <LatexRenderer latex="\text{car}(\mathbb{K}) > k" />.</li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-3">
              <PointMethodo>
                Le lien entre valeurs propres et polynôme annulateur repose sur le fait que si <LatexRenderer latex="P(u) = 0" /> et <LatexRenderer latex="u(v) = \lambda v" /> avec <LatexRenderer latex="v \ne 0" />, alors <LatexRenderer latex="0 = P(u)(v) = P(\lambda)v" />, d'où <LatexRenderer latex="P(\lambda) = 0" />.
              </PointMethodo>

              <p><strong>1 & 2. Valeurs propres et polynômes annulateurs.</strong></p>
              <p>Soit <LatexRenderer latex="\lambda" /> une valeur propre de <LatexRenderer latex="u" />, <LatexRenderer latex="v \ne 0" /> un vecteur propre, et <LatexRenderer latex="P" /> un polynôme tel que <LatexRenderer latex="P(u) = 0" />.</p>
              <p>Or <LatexRenderer latex="0 = P(u)(v) = P(\lambda)\,v" />. D'où, comme <LatexRenderer latex="v \ne 0" /> : <LatexRenderer latex="P(\lambda) = 0" />.</p>
              <p>En particulier, ceci s'applique au polynôme minimal <LatexRenderer latex="m_u" /> (qui est annulateur de <LatexRenderer latex="u" />).</p>

              <Astuce>
                Si <LatexRenderer latex="A^k = I" />, alors <LatexRenderer latex="P(X) = X^k - 1" /> est un polynôme annulateur de <LatexRenderer latex="A" />. Ce polynôme est scindé à racines simples lorsque <LatexRenderer latex="\text{car}(\mathbb{K}) = 0" /> ou <LatexRenderer latex="> k" /> (il n'a alors pas de racines multiples). Le polynôme minimal de <LatexRenderer latex="A" /> divise <LatexRenderer latex="X^k - 1" />, donc est lui aussi scindé à racines simples, ce qui implique la diagonalisabilité.
              </Astuce>

              <p><strong>3. Application.</strong></p>
              <p><LatexRenderer latex="A^k = I \Rightarrow P(X) = X^k - 1" /> annule <LatexRenderer latex="A" />. Si <LatexRenderer latex="\text{car}(\mathbb{K}) = 0" /> ou <LatexRenderer latex="> k" />, alors <LatexRenderer latex="X^k - 1" /> est scindé à racines simples (les racines <LatexRenderer latex="k" />-ièmes de l'unité sont distinctes). D'où <LatexRenderer latex="m_A \mid X^k - 1" /> est scindé à racines simples. Ainsi <LatexRenderer latex="A" /> est diagonalisable.</p>

              <ConclusionBox>
                <p>Toute valeur propre est racine de tout polynôme annulateur. Si <LatexRenderer latex="A^k = I" /> avec <LatexRenderer latex="\text{car}(\mathbb{K}) = 0" /> ou <LatexRenderer latex="> k" />, alors <LatexRenderer latex="A" /> est diagonalisable.</p>
              </ConclusionBox>
            </div>
          }
        />

        <ExerciseCard
          id="2-11"
          title="Matrices non semblables malgré des invariants communs"
          difficulty="Niveau: Concours"
          content={
            <div className="space-y-3">
              <p>Soient</p>
              <div className="flex flex-col sm:flex-row gap-6 my-3 justify-center">
                <div className="text-center">
                  <LatexRenderer latex="A = \begin{pmatrix}2&1&0&0\\0&2&1&0\\0&0&2&0\\0&0&0&2\end{pmatrix}" />
                </div>
                <div className="text-center">
                  <LatexRenderer latex="B = \begin{pmatrix}2&1&0&0\\0&2&0&0\\0&0&2&1\\0&0&0&2\end{pmatrix}" />
                </div>
              </div>
              <ol className="list-decimal list-inside space-y-1 ml-2">
                <li>Vérifier que <LatexRenderer latex="A" /> et <LatexRenderer latex="B" /> ont même rang, même trace, mêmes valeurs propres et <LatexRenderer latex="\dim E_2(A) = \dim E_2(B)" />.</li>
                <li>Calculer <LatexRenderer latex="(A-2I)^2" /> et <LatexRenderer latex="(B-2I)^2" />. Conclure que <LatexRenderer latex="A" /> et <LatexRenderer latex="B" /> ne sont pas semblables.</li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-3">
              <PointMethodo>
                La similitude préserve tous les invariants classiques (trace, rang, valeurs propres, polynôme caractéristique, polynôme minimal). Pour montrer la non-similitude, exhiber un invariant de similitude qui diffère. Ici, les puissances de <LatexRenderer latex="A - 2I" /> et <LatexRenderer latex="B - 2I" /> distinguent les deux structures de Jordan.
              </PointMethodo>

              <p><strong>1. Invariants communs.</strong></p>
              <p>Rang = 4 (coefficients diagonaux non nuls). Trace = 8. <LatexRenderer latex="\text{Spec}(A) = \text{Spec}(B) = \{2\}" /> (multiplicité 4). <LatexRenderer latex="\dim E_2(A) = \dim E_2(B) = 2" /> (noyaux de même rang 2).</p>

              <p><strong>2. Puissances des matrices nilpotentes.</strong></p>
              <p><LatexRenderer latex="A - 2I = \begin{pmatrix}0&1&0&0\\0&0&1&0\\0&0&0&0\\0&0&0&0\end{pmatrix}" />, d'où <LatexRenderer latex="(A-2I)^2 = \begin{pmatrix}0&0&1&0\\0&0&0&0\\0&0&0&0\\0&0&0&0\end{pmatrix} \ne 0" />.</p>
              <p><LatexRenderer latex="B - 2I = \begin{pmatrix}0&1&0&0\\0&0&0&0\\0&0&0&1\\0&0&0&0\end{pmatrix}" />, d'où <LatexRenderer latex="(B-2I)^2 = 0" />.</p>
              <p>Or la similitude préserve les puissances : si <LatexRenderer latex="A = PBP^{-1}" />, alors <LatexRenderer latex="(A-2I)^2 = P(B-2I)^2P^{-1} = 0" />, contradiction.</p>

              <ConclusionBox>
                <p><LatexRenderer latex="(A-2I)^2 \ne 0" /> tandis que <LatexRenderer latex="(B-2I)^2 = 0" /> : les deux matrices ne sont pas semblables, bien qu'elles partagent tous les invariants classiques élémentaires.</p>
              </ConclusionBox>
            </div>
          }
        />

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre2EndomorphismesMatricesAvanceesExercicesPage;
