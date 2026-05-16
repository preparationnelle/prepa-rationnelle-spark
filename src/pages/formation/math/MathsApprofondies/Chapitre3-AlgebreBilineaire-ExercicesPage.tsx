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

const Chapitre3AlgebreBilineaireExercicesPage = () => {
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
      chapterNumber={24}
      chapterTitle="Algèbre Bilinéaire"
      description="Exercices sur le produit scalaire, Cauchy-Schwarz, et l'orthogonalisation de Gram-Schmidt."
      slug="algebre-bilineaire"
      activeSection="exercises"
      showNavigation={true}
      previousChapter={{
        slug: "optimisation",
        title: "Optimisation"
      }}
      nextChapter={{
        slug: "endomorphismes-symetriques",
        title: "Endomorphismes Symétriques"
      }}
    >
      <div className="space-y-8">

        <div>
          <DifficultyHeader level="Module 1 — Inégalités et identités" />

          <ExerciseCard
            id="24.1"
            title="Identité du parallélogramme"
            difficulty="Niveau: Facile"
            content={
              <div className="space-y-3">
                <p>1. Démontrer l'identité du parallélogramme : <LatexRenderer latex="\|x+y\|^2 + \|x-y\|^2 = 2(\|x\|^2 + \|y\|^2)" />.</p>
                <p>2. Montrer que si une norme vérifie cette identité, elle provient d'un produit scalaire (utiliser l'identité de polarisation).</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  Pour démontrer une identité sur les normes issues d'un produit scalaire, on développe <LatexRenderer latex="\|u\|^2=\langle u,u\rangle" /> et on exploite la bilinéarité et la symétrie du produit scalaire.
                </PointMethodo>
                <p><strong>Question 1.</strong> Soit <LatexRenderer latex="\langle\cdot,\cdot\rangle" /> le produit scalaire associé à la norme. On développe :</p>
                <p><LatexRenderer latex="\|x+y\|^2=\|x\|^2+2\langle x,y\rangle+\|y\|^2" /></p>
                <p><LatexRenderer latex="\|x-y\|^2=\|x\|^2-2\langle x,y\rangle+\|y\|^2" /></p>
                <p>D'où, en sommant : <LatexRenderer latex="\|x+y\|^2+\|x-y\|^2=2\|x\|^2+2\|y\|^2=2(\|x\|^2+\|y\|^2)" />.</p>
                <Astuce>L'identité du parallélogramme est la caractérisation des normes hilbertiennes : une norme provient d'un produit scalaire si et seulement si elle la vérifie.</Astuce>
                <p><strong>Question 2.</strong> On définit <LatexRenderer latex="\langle x,y\rangle=\frac{1}{4}(\|x+y\|^2-\|x-y\|^2)" /> (identité de polarisation). En utilisant l'hypothèse que la norme vérifie l'identité du parallélogramme, on vérifie que cette forme est bilinéaire, symétrique et définie positive — donc c'est un produit scalaire engendrant la norme donnée.</p>
                <ConclusionBox>
                  L'identité du parallélogramme est démontrée par développement du produit scalaire. La réciproque s'établit via l'identité de polarisation.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Module 2 — Procédé de Gram-Schmidt" />

          <ExerciseCard
            id="24.2"
            title="Orthonormalisation de Gram-Schmidt dans ℝ³"
            difficulty="Niveau: Intermédiaire"
            content={
              <div className="space-y-3">
                <p>Orthonormaliser la famille libre <LatexRenderer latex="u_1=(1,1,0),\; u_2=(1,0,1),\; u_3=(0,1,1)" /> dans <LatexRenderer latex="\mathbb{R}^3" /> muni du produit scalaire canonique.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  Le procédé de Gram-Schmidt construit une base orthonormée à partir d'une famille libre en trois étapes : (1) normaliser le premier vecteur, (2) soustraire la projection sur les vecteurs déjà orthonormés, (3) normaliser. À chaque étape, vérifier que le vecteur intermédiaire est non nul — ce qui est garanti par la liberté de la famille.
                </PointMethodo>
                <p><strong>Étape 1.</strong> Soit <LatexRenderer latex="e_1=\frac{u_1}{\|u_1\|}=\frac{1}{\sqrt{2}}(1,1,0)" />.</p>
                <p><strong>Étape 2.</strong> On calcule <LatexRenderer latex="w_2=u_2-\langle u_2,e_1\rangle e_1" />. Or <LatexRenderer latex="\langle u_2,e_1\rangle=\frac{1}{\sqrt{2}}(1+0+0)=\frac{1}{\sqrt{2}}" />. D'où :</p>
                <p><LatexRenderer latex="w_2=(1,0,1)-\frac{1}{\sqrt{2}}\cdot\frac{1}{\sqrt{2}}(1,1,0)=(1,0,1)-\frac{1}{2}(1,1,0)=\left(\frac{1}{2},-\frac{1}{2},1\right)" />.</p>
                <p>Ainsi <LatexRenderer latex="\|w_2\|=\sqrt{\frac{1}{4}+\frac{1}{4}+1}=\frac{\sqrt{6}}{2}" />, donc <LatexRenderer latex="e_2=\frac{1}{\sqrt{6}}(1,-1,2)" />.</p>
                <p><strong>Étape 3.</strong> On calcule <LatexRenderer latex="w_3=u_3-\langle u_3,e_1\rangle e_1-\langle u_3,e_2\rangle e_2" />.</p>
                <p>Or <LatexRenderer latex="\langle u_3,e_1\rangle=\frac{1}{\sqrt{2}}(0+1+0)=\frac{1}{\sqrt{2}}" /> et <LatexRenderer latex="\langle u_3,e_2\rangle=\frac{1}{\sqrt{6}}(0-1+2)=\frac{1}{\sqrt{6}}" />.</p>
                <p>D'où <LatexRenderer latex="w_3=(0,1,1)-\frac{1}{2}(1,1,0)-\frac{1}{6}(1,-1,2)=\left(-\frac{2}{3},\frac{2}{3},\frac{2}{3}\right)" />.</p>
                <p>Ainsi <LatexRenderer latex="e_3=\frac{1}{\sqrt{3}}(-1,1,1)" /> (après normalisation).</p>
                <ConclusionBox>
                  Base orthonormée obtenue : <LatexRenderer latex="e_1=\frac{1}{\sqrt{2}}(1,1,0)" />, <LatexRenderer latex="e_2=\frac{1}{\sqrt{6}}(1,-1,2)" />, <LatexRenderer latex="e_3=\frac{1}{\sqrt{3}}(-1,1,1)" />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Module 3 — Projection orthogonale et minimisation" />

          <ExerciseCard
            id="24.3"
            title="Meilleure approximation polynomiale de degré 1"
            difficulty="Niveau: Concours"
            content={
              <div className="space-y-3">
                <p>Trouver les réels <LatexRenderer latex="a,b" /> minimisant <LatexRenderer latex="\displaystyle\int_0^1 (t^2 - at - b)^2\,dt" />.</p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <PointMethodo>
                  Ce problème est équivalent à trouver la projection orthogonale de <LatexRenderer latex="t^2" /> sur le sous-espace <LatexRenderer latex="\mathbb{R}_1[t]" /> pour le produit scalaire <LatexRenderer latex="\langle P,Q\rangle=\int_0^1 P(t)Q(t)\,dt" />. On commence par construire une base orthonormée de <LatexRenderer latex="\mathbb{R}_1[t]" /> par Gram-Schmidt, puis on projette.
                </PointMethodo>
                <p>Soit le produit scalaire <LatexRenderer latex="\langle P,Q\rangle=\int_0^1 PQ" /> sur <LatexRenderer latex="\mathbb{R}[t]" />. On orthonormalise la base <LatexRenderer latex="(1,t)" /> de <LatexRenderer latex="\mathbb{R}_1[t]" /> :</p>
                <p><LatexRenderer latex="e_0=1" /> (déjà normalisé : <LatexRenderer latex="\|1\|^2=1" />).</p>
                <p><LatexRenderer latex="w_1=t-\langle t,1\rangle\cdot 1=t-\frac{1}{2}" />. Or <LatexRenderer latex="\|w_1\|^2=\int_0^1(t-\frac{1}{2})^2dt=\frac{1}{12}" />, donc <LatexRenderer latex="e_1=2\sqrt{3}(t-\frac{1}{2})" />.</p>
                <p>La projection de <LatexRenderer latex="t^2" /> sur <LatexRenderer latex="\mathbb{R}_1[t]" /> est :</p>
                <p><LatexRenderer latex="\text{proj}(t^2)=\langle t^2,e_0\rangle e_0+\langle t^2,e_1\rangle e_1" />.</p>
                <p>Or <LatexRenderer latex="\langle t^2,1\rangle=\int_0^1 t^2 dt=\frac{1}{3}" /> et <LatexRenderer latex="\langle t^2,e_1\rangle=2\sqrt{3}\int_0^1 t^2(t-\frac{1}{2})dt=2\sqrt{3}\cdot\frac{1}{12}=\frac{\sqrt{3}}{6}" />.</p>
                <p>D'où <LatexRenderer latex="\text{proj}(t^2)=\frac{1}{3}+\frac{\sqrt{3}}{6}\cdot 2\sqrt{3}(t-\frac{1}{2})=\frac{1}{3}+t-\frac{1}{2}=t-\frac{1}{6}" />.</p>
                <p>Ainsi la meilleure approximation est <LatexRenderer latex="at+b=t-\frac{1}{6}" />.</p>
                <ConclusionBox>
                  Les valeurs optimales sont <LatexRenderer latex="a=1" /> et <LatexRenderer latex="b=-\dfrac{1}{6}" />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre3AlgebreBilineaireExercicesPage;
