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

const Chapitre9AlgebreBilineaireEspacesEuclidiensExercicesPage = () => {
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
    const num = id.replace(/[^0-9.]/g, '').padStart(2, '0');
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
      chapterNumber={25}
      chapterTitle="Espaces Euclidiens & Projection"
      description="Exercices sur les bases orthonormées, les projections orthogonales et les matrices orthogonales."
      slug="algebre-bilineaire-espaces-euclidiens"
      activeSection="exercises"
      showNavigation={true}
      previousChapter={{
        slug: "algebre-bilineaire",
        title: "Algèbre Bilinéaire (Ch 24)"
      }}
      nextChapter={{
        slug: "reduction-matrices-symetriques",
        title: "Endomorphismes Symétriques (Ch 26)"
      }}
    >
      <div className="space-y-8">

        <div>
          <DifficultyHeader level="Module 1 — Projections orthogonales" />

          <ExerciseCard
            id="25.1"
            title="Projection sur un hyperplan"
            difficulty="Niveau: Facile"
            content={
              <div className="space-y-3">
                <p>Déterminer la projection orthogonale du vecteur <LatexRenderer latex="x=(1,0,0)" /> sur l'hyperplan <LatexRenderer latex="H=\{(a,b,c)\in\mathbb{R}^3 : a+b+c=0\}" />.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  Pour projeter un vecteur sur un hyperplan, on calcule d'abord une base orthonormée de l'hyperplan (ou on utilise le vecteur normal). La projection orthogonale sur <LatexRenderer latex="H" /> vaut <LatexRenderer latex="p_H(x)=x-p_n(x)" /> où <LatexRenderer latex="p_n(x)" /> est la projection sur la droite engendrée par le vecteur normal <LatexRenderer latex="n" />.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="n=(1,1,1)" /> le vecteur normal à <LatexRenderer latex="H" /> (lu sur l'équation <LatexRenderer latex="a+b+c=0" />).</p>
                <p>La projection de <LatexRenderer latex="x" /> sur la droite <LatexRenderer latex="\mathrm{Vect}(n)" /> est :</p>
                <p><LatexRenderer latex="p_n(x)=\frac{\langle x,n\rangle}{\|n\|^2}\,n=\frac{1+0+0}{3}(1,1,1)=\left(\frac{1}{3},\frac{1}{3},\frac{1}{3}\right)" />.</p>
                <p>D'où la projection sur <LatexRenderer latex="H" /> :</p>
                <p><LatexRenderer latex="p_H(x)=x-p_n(x)=(1,0,0)-\left(\frac{1}{3},\frac{1}{3},\frac{1}{3}\right)=\left(\frac{2}{3},-\frac{1}{3},-\frac{1}{3}\right)" />.</p>
                <Astuce>On vérifie que <LatexRenderer latex="p_H(x)\in H" /> : la somme des coordonnées est <LatexRenderer latex="2/3-1/3-1/3=0" />. Correct.</Astuce>
                <ConclusionBox>
                  <LatexRenderer latex="p_H(1,0,0)=\left(\dfrac{2}{3},-\dfrac{1}{3},-\dfrac{1}{3}\right)" />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Module 2 — Matrices orthogonales" />

          <ExerciseCard
            id="25.2"
            title="Déterminant d'une matrice orthogonale"
            difficulty="Niveau: Intermédiaire"
            content={
              <div className="space-y-3">
                <p>Montrer que si <LatexRenderer latex="M\in\mathcal{M}_n(\mathbb{R})" /> est orthogonale (i.e. <LatexRenderer latex="M^T M=I_n" />), alors <LatexRenderer latex="\det(M)\in\{-1,1\}" />.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  On utilise la multiplicativité du déterminant et la propriété <LatexRenderer latex="\det(M^T)=\det(M)" /> pour faire apparaître <LatexRenderer latex="\det(M)^2" />.
                </PointMethodo>
                <p>Soit <LatexRenderer latex="M" /> orthogonale, i.e. <LatexRenderer latex="M^T M=I_n" />.</p>
                <p>Or le déterminant est multiplicatif : <LatexRenderer latex="\det(M^T M)=\det(M^T)\cdot\det(M)=\det(M)^2" /> (car <LatexRenderer latex="\det(M^T)=\det(M)" />).</p>
                <p>D'autre part <LatexRenderer latex="\det(I_n)=1" />.</p>
                <p>Ainsi <LatexRenderer latex="\det(M)^2=1" />, donc <LatexRenderer latex="\det(M)=\pm 1" />.</p>
                <ConclusionBox>
                  Pour toute matrice orthogonale <LatexRenderer latex="M" /> : <LatexRenderer latex="\det(M)\in\{-1,+1\}" />. Les matrices de déterminant <LatexRenderer latex="+1" /> sont les rotations, celles de déterminant <LatexRenderer latex="-1" /> sont les réflexions (en dimension 2).
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Module 3 — Endomorphismes et isométries" />

          <ExerciseCard
            id="25.3"
            title="Classification des isométries de ℝ²"
            difficulty="Niveau: Concours"
            content={
              <div className="space-y-3">
                <p>Classifier les isométries vectorielles de <LatexRenderer latex="\mathbb{R}^2" /> (endomorphismes préservant la norme euclidienne).</p>
                <p>On admet que toute matrice orthogonale <LatexRenderer latex="2\times 2" /> est de l'une des deux formes ci-dessous. Préciser laquelle correspond aux rotations et laquelle aux réflexions.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  Un endomorphisme de <LatexRenderer latex="\mathbb{R}^2" /> est une isométrie si et seulement si sa matrice dans une base orthonormée est orthogonale. On utilise le théorème spectral : toute matrice symétrique réelle est diagonalisable dans une base orthonormée. Pour les matrices orthogonales de taille 2, la classification se fait selon le signe du déterminant.
                </PointMethodo>
                <p>Toute matrice orthogonale <LatexRenderer latex="M\in\mathcal{O}_2(\mathbb{R})" /> vérifie <LatexRenderer latex="\det(M)\in\{-1,+1\}" />.</p>
                <p><strong>Cas det(M) = +1 (rotations).</strong> La matrice est de la forme <LatexRenderer latex="R_\theta=\begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix}" /> pour <LatexRenderer latex="\theta\in[0,2\pi[" />. C'est la rotation d'angle <LatexRenderer latex="\theta" />.</p>
                <p><strong>Cas det(M) = −1 (réflexions).</strong> La matrice est de la forme <LatexRenderer latex="S_\alpha=\begin{pmatrix}\cos 2\alpha&\sin 2\alpha\\\sin 2\alpha&-\cos 2\alpha\end{pmatrix}" /> pour <LatexRenderer latex="\alpha\in[0,\pi[" />. C'est la réflexion par rapport à la droite d'angle <LatexRenderer latex="\alpha" />.</p>
                <Astuce>La vérification que <LatexRenderer latex="S_\alpha^2=I" /> (involution) confirme qu'il s'agit bien d'une symétrie.</Astuce>
                <ConclusionBox>
                  Les isométries de <LatexRenderer latex="\mathbb{R}^2" /> sont les <strong>rotations</strong> (<LatexRenderer latex="\det=+1" />) et les <strong>réflexions</strong> (<LatexRenderer latex="\det=-1" />).
                </ConclusionBox>
              </div>
            }
          />
        </div>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre9AlgebreBilineaireEspacesEuclidiensExercicesPage;
