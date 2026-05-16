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

const Chapitre3SommesProduitsEtCoefficientsBinomiauxExercicesPage = () => {
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
      chapterNumber={3}
      chapterTitle="Sommes, produits & coefficients binomiaux"
      description="Formules fermées, manipulations d'indices, produits télescopiques, coefficients « n choisir p » et binôme de Newton"
      slug="sommes-produits-coefficients-binomiaux"
      activeSection="exercises"
      titleClassName="text-slate-800"
      showNavigation={true}
      previousChapter={{
        slug: "ensembles-et-applications",
        title: "Ensembles et applications"
      }}
      nextChapter={{
        slug: "suites-numeriques",
        title: "Suites numériques"
      }}
    >
      <div className="space-y-8">

        <div>
          <DifficultyHeader level="Niveau Facile — Sommes géométriques et arithmétiques" />

          <ExerciseCard
            id="facile-1"
            title="Exercice 1"
            difficulty="Niveau: Facile"
            content={
              <div>
                <p>Calculer la somme suivante pour <LatexRenderer latex={"n \\geq 3"} /> :</p>
                <div className="text-center my-4">
                  <LatexRenderer latex={"\\sum_{k=3}^{n} (2k + 4)"} />
                </div>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour calculer une somme de la forme <LatexRenderer latex={"\\sum (ak+b)"} />, on décompose par linéarité, on ramène les indices à partir de 0 en soustrayant les premiers termes, puis on applique les formules <LatexRenderer latex={"\\sum_{k=0}^n k = \\frac{n(n+1)}{2}"} />.
                </PointMethodo>
                <Astuce>
                  Pour passer des indices <LatexRenderer latex={"k=3"} /> à <LatexRenderer latex={"n"} /> à une somme depuis 0, écrire <LatexRenderer latex={"\\sum_{k=3}^n k = \\sum_{k=0}^n k - (0+1+2)"} />.
                </Astuce>
                <p>Soit <LatexRenderer latex={"n \\geq 3"} />. Par linéarité :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex={"\\sum_{k=3}^{n} (2k + 4) = 2\\sum_{k=3}^{n} k + 4(n-2)"} />
                </div>
                <p>Or <LatexRenderer latex={"\\sum_{k=3}^{n} k = \\frac{n(n+1)}{2} - 3"} />. D'où :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex={"2\\left(\\frac{n(n+1)}{2} - 3\\right) + 4(n-2) = n(n+1) - 6 + 4n - 8 = n^2 + 5n - 14"} />
                </div>
                <ConclusionBox>
                  <LatexRenderer latex={"\\sum_{k=3}^{n} (2k+4) = n^2 + 5n - 14"} />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="facile-2"
            title="Exercice 2"
            difficulty="Niveau: Facile"
            content={
              <div>
                <p>Calculer la somme suivante pour <LatexRenderer latex={"n \\in \\mathbb{N}"} /> :</p>
                <div className="text-center my-4">
                  <LatexRenderer latex={"\\sum_{k=0}^{n} 3^{k+1}"} />
                </div>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour ramener une somme géométrique à la forme standard <LatexRenderer latex={"\\sum_{k=0}^n q^k = \\frac{1-q^{n+1}}{1-q}"} />, on factorise la constante devant la somme.
                </PointMethodo>
                <p>Soit <LatexRenderer latex={"n \\in \\mathbb{N}"} />. On factorise :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex={"\\sum_{k=0}^{n} 3^{k+1} = 3\\sum_{k=0}^{n} 3^k"} />
                </div>
                <p>Or c'est une somme géométrique de raison <LatexRenderer latex={"q = 3 \\neq 1"} />. Ainsi :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex={"\\sum_{k=0}^{n} 3^k = \\frac{3^{n+1} - 1}{3 - 1} = \\frac{3^{n+1}-1}{2}"} />
                </div>
                <ConclusionBox>
                  <LatexRenderer latex={"\\sum_{k=0}^{n} 3^{k+1} = \\frac{3(3^{n+1}-1)}{2}"} />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="facile-3"
            title="Exercice 3"
            difficulty="Niveau: Facile"
            content={
              <div>
                <p>Calculer la somme suivante pour <LatexRenderer latex={"n \\in \\mathbb{N}"} /> :</p>
                <div className="text-center my-4">
                  <LatexRenderer latex={"\\sum_{k=0}^{n} 2^{3k+2}"} />
                </div>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Lorsque l'exposant est de la forme <LatexRenderer latex={"ak+b"} />, on factorise <LatexRenderer latex={"2^b"} /> et on regroupe <LatexRenderer latex={"2^{ak} = (2^a)^k"} /> pour obtenir une somme géométrique de raison <LatexRenderer latex={"2^a"} />.
                </PointMethodo>
                <p>Soit <LatexRenderer latex={"n \\in \\mathbb{N}"} />. On réécrit l'exposant :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex={"2^{3k+2} = 4 \\cdot (2^3)^k = 4 \\cdot 8^k"} />
                </div>
                <p>D'où :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex={"\\sum_{k=0}^{n} 2^{3k+2} = 4\\sum_{k=0}^{n} 8^k = 4 \\cdot \\frac{8^{n+1}-1}{7}"} />
                </div>
                <ConclusionBox>
                  <LatexRenderer latex={"\\sum_{k=0}^{n} 2^{3k+2} = \\frac{4(8^{n+1}-1)}{7}"} />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="facile-4"
            title="Exercice 4"
            difficulty="Niveau: Facile"
            content={
              <div>
                <p>Calculer la somme suivante pour <LatexRenderer latex={"n \\in \\mathbb{N}"} /> :</p>
                <div className="text-center my-4">
                  <LatexRenderer latex={"\\sum_{k=0}^{n} \\frac{1}{2^{3k+2}}"} />
                </div>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  On réécrit le terme général comme un produit d'une constante et d'une puissance d'une raison inférieure à 1, puis on applique la formule de la somme géométrique.
                </PointMethodo>
                <p>Soit <LatexRenderer latex={"n \\in \\mathbb{N}"} />. On réécrit :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex={"\\frac{1}{2^{3k+2}} = \\frac{1}{4} \\cdot \\left(\\frac{1}{8}\\right)^k"} />
                </div>
                <p>D'où :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex={"\\sum_{k=0}^{n} \\frac{1}{2^{3k+2}} = \\frac{1}{4}\\sum_{k=0}^{n}\\left(\\frac{1}{8}\\right)^k = \\frac{1}{4} \\cdot \\frac{1-(1/8)^{n+1}}{1-1/8} = \\frac{1}{4} \\cdot \\frac{8}{7}\\left(1 - \\frac{1}{8^{n+1}}\\right)"} />
                </div>
                <ConclusionBox>
                  <LatexRenderer latex={"\\sum_{k=0}^{n} \\frac{1}{2^{3k+2}} = \\frac{2}{7}\\left(1 - \\frac{1}{8^{n+1}}\\right)"} />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="facile-5"
            title="Exercice 5"
            difficulty="Niveau: Facile"
            content={
              <div>
                <p>Calculer la somme suivante pour <LatexRenderer latex={"n \\geq 2"} /> :</p>
                <div className="text-center my-4">
                  <LatexRenderer latex={"\\sum_{k=2}^{n} \\frac{-1}{3^k}"} />
                </div>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour une somme géométrique ne commençant pas à <LatexRenderer latex={"k=0"} />, on factorise <LatexRenderer latex={"q^2"} /> pour ramener l'indice à 0, ou on soustrait les premiers termes à la somme complète.
                </PointMethodo>
                <p>Soit <LatexRenderer latex={"n \\geq 2"} />. On écrit :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex={"\\sum_{k=2}^{n} \\frac{-1}{3^k} = -\\sum_{k=2}^{n}\\left(\\frac{1}{3}\\right)^k = -\\left(\\frac{1}{3}\\right)^2 \\sum_{k=0}^{n-2}\\left(\\frac{1}{3}\\right)^k"} />
                </div>
                <p>D'où :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex={"-\\frac{1}{9} \\cdot \\frac{1-(1/3)^{n-1}}{1-1/3} = -\\frac{1}{9} \\cdot \\frac{3}{2}\\left(1 - \\frac{1}{3^{n-1}}\\right) = -\\frac{1}{6} + \\frac{1}{2 \\cdot 3^n}"} />
                </div>
                <ConclusionBox>
                  <LatexRenderer latex={"\\sum_{k=2}^{n} \\frac{-1}{3^k} = -\\frac{1}{6} + \\frac{1}{2 \\cdot 3^n}"} />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="facile-6"
            title="Exercice 6"
            difficulty="Niveau: Facile"
            content={
              <div>
                <p>Calculer la somme suivante pour <LatexRenderer latex={"n \\in \\mathbb{N}"} /> :</p>
                <div className="text-center my-4">
                  <LatexRenderer latex={"\\sum_{k=0}^{2n} 5^{n+k}"} />
                </div>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Lorsque la borne supérieure dépend du paramètre <LatexRenderer latex={"n"} />, on factorise le terme constant et on compte soigneusement le nombre de termes.
                </PointMethodo>
                <p>Soit <LatexRenderer latex={"n \\in \\mathbb{N}"} />. On factorise <LatexRenderer latex={"5^n"} /> :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex={"\\sum_{k=0}^{2n} 5^{n+k} = 5^n \\sum_{k=0}^{2n} 5^k"} />
                </div>
                <p>La somme intérieure est géométrique de raison 5, avec <LatexRenderer latex={"2n+1"} /> termes :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex={"\\sum_{k=0}^{2n} 5^k = \\frac{5^{2n+1}-1}{4}"} />
                </div>
                <ConclusionBox>
                  <LatexRenderer latex={"\\sum_{k=0}^{2n} 5^{n+k} = \\frac{5^n(5^{2n+1}-1)}{4}"} />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Niveau Intermédiaire — Calculs plus techniques" />

          <ExerciseCard
            id="inter-7"
            title="Exercice 7"
            difficulty="Niveau: Intermédiaire"
            content={
              <div>
                <p>Calculer la somme suivante pour <LatexRenderer latex={"n \\in \\mathbb{N}"} /> :</p>
                <div className="text-center my-4">
                  <LatexRenderer latex={"\\sum_{k=0}^{n} k(k+1)(k-1)"} />
                </div>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour calculer une somme d'un polynôme en <LatexRenderer latex={"k"} />, on développe le terme général, on décompose la somme par linéarité, puis on applique les formules classiques pour <LatexRenderer latex={"\\sum k"} />, <LatexRenderer latex={"\\sum k^2"} /> et <LatexRenderer latex={"\\sum k^3"} />.
                </PointMethodo>
                <Astuce>
                  L'identité <LatexRenderer latex={"k(k+1)(k-1) = k(k^2-1) = k^3 - k"} /> réduit le calcul à deux sommes classiques.
                </Astuce>
                <p>Soit <LatexRenderer latex={"n \\in \\mathbb{N}"} />. On développe :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex={"k(k+1)(k-1) = k^3 - k"} />
                </div>
                <p>D'où par linéarité :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex={"\\sum_{k=0}^{n}(k^3-k) = \\frac{n^2(n+1)^2}{4} - \\frac{n(n+1)}{2} = \\frac{n(n+1)}{2}\\left(\\frac{n(n+1)}{2}-1\\right)"} />
                </div>
                <p>Or <LatexRenderer latex={"\\frac{n(n+1)}{2}-1 = \\frac{n^2+n-2}{2} = \\frac{(n-1)(n+2)}{2}"} />.</p>
                <ConclusionBox>
                  <LatexRenderer latex={"\\sum_{k=0}^{n} k(k+1)(k-1) = \\frac{n(n+1)(n-1)(n+2)}{4}"} />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="inter-8"
            title="Exercice 8"
            difficulty="Niveau: Intermédiaire"
            content={
              <div>
                <div className="mb-2">
                  Montrer : <LatexRenderer latex={"\\forall k \\in \\mathbb{N}, \\quad \\dfrac{1}{(k+1)(k+2)} = \\dfrac{1}{k+1} - \\dfrac{1}{k+2}."} />
                </div>
                <div>
                  En déduire la valeur de : <LatexRenderer latex={"\\sum_{k=0}^{98} \\frac{1}{(k+1)(k+2)}"} />
                </div>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour une somme télescopique, on commence par établir une décomposition en éléments simples du terme général, puis on observe que les termes intermédiaires se simplifient deux à deux.
                </PointMethodo>
                <p className="mb-2"><strong>1. Décomposition :</strong> Soit <LatexRenderer latex={"k \\in \\mathbb{N}"} />. Par calcul direct :</p>
                <div className="text-center my-2">
                  <LatexRenderer latex={"\\frac{1}{k+1} - \\frac{1}{k+2} = \\frac{(k+2)-(k+1)}{(k+1)(k+2)} = \\frac{1}{(k+1)(k+2)}"} />
                </div>
                <p className="mb-2"><strong>2. Somme télescopique :</strong></p>
                <div className="text-center my-2">
                  <LatexRenderer latex={"\\sum_{k=0}^{98} \\frac{1}{(k+1)(k+2)} = \\sum_{k=0}^{98}\\left(\\frac{1}{k+1} - \\frac{1}{k+2}\\right) = \\frac{1}{1} - \\frac{1}{100}"} />
                </div>
                <ConclusionBox>
                  <LatexRenderer latex={"\\sum_{k=0}^{98} \\frac{1}{(k+1)(k+2)} = 1 - \\frac{1}{100} = \\frac{99}{100}"} />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        <div>
          <DifficultyHeader level="Niveau Difficile — Démonstrations par récurrence" />

          <ExerciseCard
            id="diff-9"
            title="Exercice 9 - Récurrences classiques"
            difficulty="Niveau: Difficile"
            content={
              <div>
                <p>Démontrer par récurrence que pour tout <LatexRenderer latex={"n \\in \\mathbb{N}"} /> :</p>
                <div className="space-y-2 mt-2 ml-4">
                  <div>1. <LatexRenderer latex={"\\sum_{k=0}^{n} k = \\frac{n(n+1)}{2}"} /></div>
                  <div>2. <LatexRenderer latex={"\\sum_{k=0}^{n} k^2 = \\frac{n(n+1)(2n+1)}{6}"} /></div>
                  <div>3. <LatexRenderer latex={"\\sum_{k=0}^{n} k^3 = \\frac{n^2(n+1)^2}{4}"} /></div>
                </div>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Une démonstration par récurrence comporte trois blocs obligatoires : initialisation (vérifier la propriété au rang de départ), hérédité (supposer la propriété vraie au rang <LatexRenderer latex={"n"} /> et la déduire au rang <LatexRenderer latex={"n+1"} />), conclusion par le principe de récurrence.
                </PointMethodo>

                <p className="mb-3"><strong>1. Somme des entiers :</strong></p>
                <div className="ml-3 border-l-2 border-stone-200 pl-3 space-y-2">
                  <p><strong>Initialisation (n=0) :</strong> <LatexRenderer latex={"0 = \\frac{0 \\cdot 1}{2} = 0"} />. Vrai.</p>
                  <p><strong>Hérédité :</strong> Supposons la formule vraie au rang <LatexRenderer latex={"n"} />. Alors :</p>
                  <div className="text-center my-1">
                    <LatexRenderer latex={"\\sum_{k=0}^{n+1} k = \\frac{n(n+1)}{2} + (n+1) = (n+1)\\left(\\frac{n}{2}+1\\right) = \\frac{(n+1)(n+2)}{2}"} />
                  </div>
                  <p>C'est bien la formule au rang <LatexRenderer latex={"n+1"} />.</p>
                  <p><strong>Conclusion :</strong> Par le principe de récurrence, la propriété est vraie pour tout <LatexRenderer latex={"n \\in \\mathbb{N}"} />.</p>
                </div>

                <p className="mt-4 mb-3"><strong>2. Somme des carrés :</strong></p>
                <div className="ml-3 border-l-2 border-stone-200 pl-3 space-y-2">
                  <p><strong>Initialisation (n=0) :</strong> <LatexRenderer latex={"0 = \\frac{0 \\cdot 1 \\cdot 1}{6} = 0"} />. Vrai.</p>
                  <p><strong>Hérédité :</strong> Supposons la formule vraie au rang <LatexRenderer latex={"n"} />. Alors :</p>
                  <div className="text-center my-1">
                    <LatexRenderer latex={"\\sum_{k=0}^{n+1} k^2 = \\frac{n(n+1)(2n+1)}{6} + (n+1)^2 = \\frac{(n+1)}{6}\\left[n(2n+1) + 6(n+1)\\right]"} />
                  </div>
                  <p>Or <LatexRenderer latex={"n(2n+1)+6(n+1) = 2n^2+7n+6 = (n+2)(2n+3) = (n+2)(2(n+1)+1)"} />. Ainsi la formule est vérifiée au rang <LatexRenderer latex={"n+1"} />.</p>
                  <p><strong>Conclusion :</strong> Par le principe de récurrence, la propriété est vraie pour tout <LatexRenderer latex={"n \\in \\mathbb{N}"} />.</p>
                </div>

                <p className="mt-4 mb-3"><strong>3. Somme des cubes :</strong></p>
                <div className="ml-3 border-l-2 border-stone-200 pl-3 space-y-2">
                  <p><strong>Initialisation (n=0) :</strong> vérifiée comme précédemment.</p>
                  <p><strong>Hérédité :</strong> On calcule :</p>
                  <div className="text-center my-1">
                    <LatexRenderer latex={"\\frac{n^2(n+1)^2}{4} + (n+1)^3 = \\frac{(n+1)^2}{4}\\left[n^2 + 4(n+1)\\right] = \\frac{(n+1)^2(n+2)^2}{4}"} />
                  </div>
                  <p>C'est bien la formule au rang <LatexRenderer latex={"n+1"} />.</p>
                  <p><strong>Conclusion :</strong> Par le principe de récurrence, la propriété est vraie pour tout <LatexRenderer latex={"n \\in \\mathbb{N}"} />.</p>
                </div>
                <ConclusionBox>
                  Les trois formules sont démontrées par récurrence pour tout <LatexRenderer latex={"n \\in \\mathbb{N}"} />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="diff-10"
            title="Exercice 10 - Inégalités"
            difficulty="Niveau: Difficile"
            content={
              <div>
                <p>Montrer par récurrence les propriétés suivantes :</p>
                <div className="space-y-2 mt-2 ml-4">
                  <div>1. Pour tout <LatexRenderer latex={"n \\geq 4"} />, <LatexRenderer latex={"2^n \\leq n!"} /></div>
                  <div>2. Pour tout <LatexRenderer latex={"x \\geq 0"} /> et tout <LatexRenderer latex={"n \\in \\mathbb{N}"} />, <LatexRenderer latex={"(1 + x)^n \\geq 1 + nx"} /> (inégalité de Bernoulli)</div>
                </div>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour chaque inégalité, on suit les trois blocs de la récurrence. À l'étape d'hérédité, on multiplie les deux membres par un facteur positif et on majore.
                </PointMethodo>

                <p className="mb-3"><strong>1. <LatexRenderer latex={"2^n \\leq n!"} /> pour <LatexRenderer latex={"n \\geq 4"} /> :</strong></p>
                <div className="ml-3 border-l-2 border-stone-200 pl-3 space-y-2">
                  <p><strong>Initialisation (n=4) :</strong> <LatexRenderer latex={"2^4 = 16 \\leq 24 = 4!"} />. Vrai.</p>
                  <p><strong>Hérédité :</strong> Supposons <LatexRenderer latex={"2^n \\leq n!"} /> pour un certain <LatexRenderer latex={"n \\geq 4"} />. Alors :</p>
                  <div className="text-center my-1">
                    <LatexRenderer latex={"2^{n+1} = 2 \\cdot 2^n \\leq 2 \\cdot n!"} />
                  </div>
                  <p>Comme <LatexRenderer latex={"n \\geq 4 \\geq 2"} />, on a <LatexRenderer latex={"2 \\leq n+1"} />, donc <LatexRenderer latex={"2 \\cdot n! \\leq (n+1) \\cdot n! = (n+1)!"} />.</p>
                  <p><strong>Conclusion :</strong> Par le principe de récurrence, <LatexRenderer latex={"2^n \\leq n!"} /> pour tout <LatexRenderer latex={"n \\geq 4"} />.</p>
                </div>

                <p className="mt-4 mb-3"><strong>2. Inégalité de Bernoulli :</strong></p>
                <div className="ml-3 border-l-2 border-stone-200 pl-3 space-y-2">
                  <p><strong>Initialisation (n=0) :</strong> <LatexRenderer latex={"(1+x)^0 = 1 \\geq 1 + 0 \\cdot x = 1"} />. Vrai.</p>
                  <p><strong>Hérédité :</strong> Supposons <LatexRenderer latex={"(1+x)^n \\geq 1 + nx"} /> pour <LatexRenderer latex={"x \\geq 0"} />. Comme <LatexRenderer latex={"1+x \\geq 1 > 0"} /> :</p>
                  <div className="text-center my-1">
                    <LatexRenderer latex={"(1+x)^{n+1} = (1+x)^n(1+x) \\geq (1+nx)(1+x) = 1+(n+1)x+nx^2 \\geq 1+(n+1)x"} />
                  </div>
                  <p>car <LatexRenderer latex={"nx^2 \\geq 0"} />.</p>
                  <p><strong>Conclusion :</strong> Par le principe de récurrence, l'inégalité de Bernoulli est vraie pour tout <LatexRenderer latex={"n \\in \\mathbb{N}"} /> et <LatexRenderer latex={"x \\geq 0"} />.</p>
                </div>
                <ConclusionBox>
                  Les deux inégalités sont établies par récurrence.
                </ConclusionBox>
              </div>
            }
          />
        </div>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre3SommesProduitsEtCoefficientsBinomiauxExercicesPage;
