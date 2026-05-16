import React, { useState } from 'react';
import { Eye, EyeOff, CheckCircle } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';

// ── Blocs structurels du corrigé — style sobre Prépa Rationnelle ──────────────

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

// ── Badge de difficulté ───────────────────────────────────────────────────────

const difficultyLabel: Record<string, string> = {
  'Niveau: Facile': 'FACILE',
  'Niveau: Intermédiaire': 'MOYEN',
  'Niveau: Concours': 'DIFFICILE',
  'Niveau: Concours (Classique)': 'DIFFICILE',
  'Niveau: Difficile': 'HEC',
};

// ── Composants de structure de la page ───────────────────────────────────────

const Chapitre1LogiqueEtRaisonnementFondamentauxExercicesPage = () => {
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
    id,
    title,
    content,
    correction,
    difficulty,
  }: {
    id: string;
    title: string;
    content: React.ReactNode;
    correction: React.ReactNode;
    difficulty: string;
  }) => {
    const num = id.split('-')[1].padStart(2, '0');
    const badge = difficultyLabel[difficulty] ?? difficulty.replace('Niveau: ', '').toUpperCase();
    const isOpen = visibleCorrections[id];

    return (
      <div className="mb-6 border border-stone-200 rounded-xl bg-carnet-paper-2 shadow-sm p-6">
        {/* En-tête de l'exercice */}
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

        {/* Énoncé */}
        <div className="text-stone-700 leading-relaxed mb-6">
          {content}
        </div>

        {/* Bouton */}
        <button
          onClick={() => toggleCorrection(id)}
          className="flex items-center gap-2 text-sm text-stone-600 border border-stone-300 rounded-full px-4 py-1.5 hover:bg-stone-50 transition-colors"
        >
          {isOpen ? (
            <><EyeOff className="w-4 h-4" /> Masquer la correction</>
          ) : (
            <><Eye className="w-4 h-4" /> Afficher la correction</>
          )}
        </button>

        {/* Zone correction */}
        {isOpen && (
          <div className="mt-5 border border-dashed border-stone-300 border-l-[3px] border-l-red-800 rounded-lg p-5 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-4 h-4 text-red-800" />
              <span className="text-xs font-bold text-red-800 uppercase tracking-widest">Corrigé détaillé</span>
            </div>
            <div className="text-stone-700 leading-relaxed space-y-2">
              {correction}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <MathChapterTemplate
      chapterNumber={1}
      chapterTitle="Éléments de logique"
      description="Exercices d'application et d'approfondissement"
      slug="elements-de-logique"
      activeSection="exercises"
      titleClassName="text-slate-800"
      showNavigation={true}
      nextChapter={{
        slug: "ensembles-et-applications",
        title: "Ensembles et applications"
      }}
    >
      <div className="space-y-8">

        {/* ── Niveau Facile ─────────────────────────────────────────────────── */}
        <div>
          <DifficultyHeader level="Niveau Facile — Application directe" />

          <ExerciseCard
            id="facile-1"
            title="Exercice 1 - Négation de phrases"
            difficulty="Niveau: Facile"
            content={
              <div>
                <p className="mb-2">Donner la négation :</p>
                <div className="space-y-2 mt-4">
                  <div className="bg-carnet-paper p-3 rounded border border-slate-100">
                    <span className="font-mono text-xs text-slate-500 mr-2">a)</span>
                    « Tous les élèves de la classe ECG sont grands. »
                  </div>
                  <div className="bg-carnet-paper p-3 rounded border border-slate-100">
                    <span className="font-mono text-xs text-slate-500 mr-2">b)</span>
                    « Il existe un mouton écossais dont au moins un côté est noir. »
                  </div>
                </div>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour nier une proposition quantifiée, on inverse le quantificateur et on nie le prédicat :
                  la négation de <LatexRenderer latex="\forall x,\, P(x)" /> est <LatexRenderer latex="\exists x,\, \lnot P(x)" />,
                  et la négation de <LatexRenderer latex="\exists x,\, P(x)" /> est <LatexRenderer latex="\forall x,\, \lnot P(x)" />.
                  L'ensemble de définition reste inchangé.
                </PointMethodo>

                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-slate-800 mb-1">a)</p>
                    <p>La proposition est : <LatexRenderer latex="\forall" /> élève <LatexRenderer latex="x" /> de la classe ECG, <LatexRenderer latex="x" /> est grand.</p>
                    <p className="mt-1">Sa négation est : <LatexRenderer latex="\exists" /> élève <LatexRenderer latex="x" /> de la classe ECG tel que <LatexRenderer latex="x" /> n'est pas grand.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 mb-1">b)</p>
                    <p>La proposition est : <LatexRenderer latex="\exists" /> mouton écossais <LatexRenderer latex="m" /> tel que <LatexRenderer latex="m" /> a au moins un côté noir.</p>
                    <p className="mt-1">Sa négation est : <LatexRenderer latex="\forall" /> mouton écossais <LatexRenderer latex="m" />, aucun côté de <LatexRenderer latex="m" /> n'est noir.</p>
                  </div>
                </div>

                <ConclusionBox>
                  <p>a) « Il existe au moins un élève de la classe ECG qui n'est pas grand. »</p>
                  <p className="mt-1">b) « Pour tout mouton écossais, aucun de ses côtés n'est noir. »</p>
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="facile-2"
            title="Exercice 2 - Nécessaire / suffisante"
            difficulty="Niveau: Facile"
            content={
              <div>
                <p className="mb-2">Soit <LatexRenderer latex="n \in \mathbb{N}^*" />.</p>
                <div className="flex gap-4 my-4 justify-center">
                  <div className="px-3 py-1 bg-carnet-paper rounded border border-slate-200"><LatexRenderer latex="P" /> : « <LatexRenderer latex="n" /> est multiple de 6 »</div>
                  <div className="px-3 py-1 bg-carnet-paper rounded border border-slate-200"><LatexRenderer latex="Q" /> : « <LatexRenderer latex="n" /> est pair »</div>
                </div>
                <p>Indiquer si <LatexRenderer latex="P" /> est nécessaire, suffisante ou équivalente à <LatexRenderer latex="Q" />.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour déterminer si <LatexRenderer latex="P" /> est CS, CN ou équivalente à <LatexRenderer latex="Q" />, on teste indépendamment les deux implications :
                  <LatexRenderer latex="P \Rightarrow Q" /> (suffisance de <LatexRenderer latex="P" /> pour <LatexRenderer latex="Q" />) et <LatexRenderer latex="Q \Rightarrow P" /> (nécessité de <LatexRenderer latex="P" /> pour <LatexRenderer latex="Q" />).
                  Pour invalider une implication, un seul contre-exemple suffit.
                </PointMethodo>

                <p className="font-semibold text-slate-800 mb-2">Test de <LatexRenderer latex="P \Rightarrow Q" /> (suffisance) :</p>
                <p>
                  Soit <LatexRenderer latex="n \in \mathbb{N}^*" />. Si <LatexRenderer latex="n" /> est multiple de 6, alors <LatexRenderer latex="6 \mid n" />, donc <LatexRenderer latex="2 \mid n" />,
                  d'où <LatexRenderer latex="n" /> est pair. Ainsi <LatexRenderer latex="P \Rightarrow Q" /> : <strong className="text-stone-900 font-semibold">P est suffisante pour Q</strong>.
                </p>

                <p className="font-semibold text-slate-800 mt-3 mb-2">Test de <LatexRenderer latex="Q \Rightarrow P" /> (nécessité) :</p>
                <p>
                  Prenons <LatexRenderer latex="n = 2" />. Or <LatexRenderer latex="2" /> est pair (Q vraie), mais <LatexRenderer latex="6 \nmid 2" /> (P fausse).
                  Donc la réciproque <LatexRenderer latex="Q \Rightarrow P" /> est fausse : <strong className="text-red-700">P n'est pas nécessaire pour Q</strong>.
                </p>

                <ConclusionBox>
                  <LatexRenderer latex="P" /> est une condition <strong>suffisante mais non nécessaire</strong> pour <LatexRenderer latex="Q" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="facile-3"
            title="Exercice 3 - Négation simple"
            difficulty="Niveau: Facile"
            content={
              <p>Nier : « 136 est multiple de 17 et 2 divise 167. »</p>
            }
            correction={
              <div>
                <PointMethodo>
                  La négation d'une conjonction <LatexRenderer latex="A \land B" /> est <LatexRenderer latex="\lnot A \lor \lnot B" /> (première loi de De Morgan).
                  On nie chaque membre et on transforme le « et » en « ou ».
                </PointMethodo>

                <p>
                  Notons <LatexRenderer latex="A" /> : « 136 est multiple de 17 » et <LatexRenderer latex="B" /> : « 2 divise 167 ».
                  La proposition est <LatexRenderer latex="A \land B" />.
                </p>
                <p className="mt-2">
                  Par la première loi de De Morgan, sa négation est <LatexRenderer latex="\lnot A \lor \lnot B" />.
                </p>

                <ConclusionBox>
                  « 136 n'est pas multiple de 17 <strong>ou</strong> 2 ne divise pas 167. »
                  <p className="text-sm font-normal mt-1 text-stone-500">
                    (Vérification : 167 est impair, donc B est fausse, donc <LatexRenderer latex="\lnot B" /> est vraie et la négation est vraie.)
                  </p>
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="facile-4"
            title="Exercice 4 - Traduction basique"
            difficulty="Niveau: Facile"
            content={
              <div>
                <p>Traduire en français la proposition suivante, puis donner sa négation :</p>
                <div className="text-center py-4 my-2 bg-carnet-paper rounded-lg border border-slate-100">
                  <LatexRenderer latex="\forall x \in \mathbb{R},\; x^2 \geq 0" />
                </div>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour nier une proposition de la forme <LatexRenderer latex="\forall x \in E,\, P(x)" />,
                  on inverse le quantificateur et on nie le prédicat :
                  la négation est <LatexRenderer latex="\exists x \in E,\, \lnot P(x)" />.
                  L'ensemble de définition reste inchangé.
                </PointMethodo>

                <p className="font-semibold text-slate-800 mb-1">Traduction :</p>
                <p>« Pour tout nombre réel <LatexRenderer latex="x" />, le carré de <LatexRenderer latex="x" /> est positif ou nul. »</p>

                <p className="font-semibold text-slate-800 mt-3 mb-1">Négation :</p>
                <p>
                  On inverse <LatexRenderer latex="\forall" /> en <LatexRenderer latex="\exists" /> et on nie <LatexRenderer latex="x^2 \geq 0" /> en <LatexRenderer latex="x^2 < 0" />.
                  D'où :
                </p>
                <div className="text-center py-2 my-2">
                  <LatexRenderer latex="\exists x \in \mathbb{R},\; x^2 < 0" />
                </div>

                <ConclusionBox>
                  Négation : <LatexRenderer latex="\exists x \in \mathbb{R},\; x^2 < 0" /> — « Il existe un réel dont le carré est strictement négatif. »
                  <p className="text-sm font-normal mt-1 text-stone-500">(Cette négation est fausse dans <LatexRenderer latex="\mathbb{R}" />, ce qui confirme que la proposition initiale est vraie.)</p>
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="facile-5"
            title="Exercice 5 - Implication simple"
            difficulty="Niveau: Facile"
            content={
              <p>Montrer par contraposée : « Si <LatexRenderer latex="n^2" /> est pair, alors <LatexRenderer latex="n" /> est pair » (pour <LatexRenderer latex="n \in \mathbb{Z}" />).</p>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour prouver <LatexRenderer latex="P \Rightarrow Q" /> par contraposée, on prouve la proposition <LatexRenderer latex="\lnot Q \Rightarrow \lnot P" />,
                  qui lui est logiquement équivalente. Cette méthode est préférable quand l'hypothèse <LatexRenderer latex="\lnot Q" /> est plus facile
                  à exploiter que <LatexRenderer latex="P" /> directement.
                </PointMethodo>

                <p>La contraposée de « <LatexRenderer latex="n^2" /> pair <LatexRenderer latex="\Rightarrow" /> <LatexRenderer latex="n" /> pair » est :</p>
                <p className="pl-4 border-l-2 border-slate-300 my-2">« <LatexRenderer latex="n" /> impair <LatexRenderer latex="\Rightarrow" /> <LatexRenderer latex="n^2" /> impair. »</p>

                <p>Soit <LatexRenderer latex="n \in \mathbb{Z}" /> impair. Il existe <LatexRenderer latex="k \in \mathbb{Z}" /> tel que <LatexRenderer latex="n = 2k + 1" />. On a :</p>
                <div className="text-center py-2 my-2">
                  <LatexRenderer latex="n^2 = (2k+1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1" />
                </div>
                <p>
                  Or <LatexRenderer latex="2(2k^2+2k)+1" /> est de la forme <LatexRenderer latex="2p+1" /> avec <LatexRenderer latex="p = 2k^2 + 2k \in \mathbb{Z}" />,
                  donc <LatexRenderer latex="n^2" /> est impair.
                </p>
                <p className="mt-2">
                  La contraposée est vraie. D'où l'implication initiale est vraie.
                </p>

                <ConclusionBox>
                  Pour tout <LatexRenderer latex="n \in \mathbb{Z}" />, si <LatexRenderer latex="n^2" /> est pair, alors <LatexRenderer latex="n" /> est pair.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="facile-6"
            title="Exercice 6 - Table de vérité"
            difficulty="Niveau: Facile"
            content={
              <div>
                <p className="mb-2">Dresser la table de vérité de la proposition <LatexRenderer latex="\lnot (P \land Q)" />.</p>
                <p>Comparer avec celle de <LatexRenderer latex="\lnot P \lor \lnot Q" />.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour vérifier une équivalence logique, on dresse la table de vérité des deux formules et on compare
                  leurs colonnes pour toutes les combinaisons de valeurs de vérité des variables.
                  Si les colonnes sont identiques, les formules sont équivalentes.
                </PointMethodo>

                <Astuce>
                  Les formules <LatexRenderer latex="\lnot(P \land Q)" /> et <LatexRenderer latex="\lnot P \lor \lnot Q" /> sont reliées par la première loi de De Morgan.
                  Anticiper ce résultat aide à vérifier la table sans erreur.
                </Astuce>

                <div className="overflow-hidden rounded border border-slate-200 mb-4">
                  <table className="w-full text-sm text-center">
                    <thead className="bg-carnet-paper text-slate-700">
                      <tr>
                        <th className="p-2 border-r border-slate-200">P</th>
                        <th className="p-2 border-r border-slate-200">Q</th>
                        <th className="p-2 border-r border-slate-200">P∧Q</th>
                        <th className="p-2 border-r border-slate-200 bg-stone-100 text-stone-700">¬(P∧Q)</th>
                        <th className="p-2 border-r border-slate-200">¬P</th>
                        <th className="p-2 border-r border-slate-200">¬Q</th>
                        <th className="p-2 bg-stone-100 text-stone-700">¬P ∨ ¬Q</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr><td className="p-2">V</td><td className="p-2">V</td><td className="p-2">V</td><td className="p-2 bg-stone-50 font-medium">F</td><td className="p-2">F</td><td className="p-2">F</td><td className="p-2 bg-stone-50 font-medium">F</td></tr>
                      <tr><td className="p-2">V</td><td className="p-2">F</td><td className="p-2">F</td><td className="p-2 bg-stone-50 font-medium">V</td><td className="p-2">F</td><td className="p-2">V</td><td className="p-2 bg-stone-50 font-medium">V</td></tr>
                      <tr><td className="p-2">F</td><td className="p-2">V</td><td className="p-2">F</td><td className="p-2 bg-stone-50 font-medium">V</td><td className="p-2">V</td><td className="p-2">F</td><td className="p-2 bg-stone-50 font-medium">V</td></tr>
                      <tr><td className="p-2">F</td><td className="p-2">F</td><td className="p-2">F</td><td className="p-2 bg-stone-50 font-medium">V</td><td className="p-2">V</td><td className="p-2">V</td><td className="p-2 bg-stone-50 font-medium">V</td></tr>
                    </tbody>
                  </table>
                </div>

                <p>Les deux colonnes surlignées sont identiques.</p>

                <ConclusionBox>
                  <LatexRenderer latex="\lnot(P \land Q) \equiv \lnot P \lor \lnot Q" /> — première loi de De Morgan.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="facile-7"
            title="Exercice 7 - Contre-exemple"
            difficulty="Niveau: Facile"
            content={
              <div>
                <p className="mb-2">La proposition suivante est-elle vraie ?</p>
                <p className="text-center py-2 bg-carnet-paper rounded border border-slate-100 my-2">
                  « Tout nombre premier est impair. »
                </p>
                <p>Si elle est fausse, donner un contre-exemple.</p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour réfuter une proposition universelle <LatexRenderer latex="\forall x,\, P(x)" />,
                  il suffit d'exhiber un élément <LatexRenderer latex="x_0" /> pour lequel <LatexRenderer latex="P(x_0)" /> est fausse.
                  On appelle cet élément un contre-exemple. Un seul contre-exemple suffit.
                </PointMethodo>

                <p>La proposition est <strong className="text-red-600">fausse</strong>.</p>
                <p className="mt-2">
                  Le nombre <strong>2</strong> est un contre-exemple : 2 est premier (ses seuls diviseurs positifs sont 1 et 2) et pair.
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Remarque : 2 est le seul nombre premier pair. Tout nombre premier <LatexRenderer latex="p \geq 3" /> est bien impair.
                </p>

                <ConclusionBox>
                  Fausse. Contre-exemple : 2 est premier et pair.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="facile-8"
            title="Exercice 8 - Traduction de logique"
            difficulty="Niveau: Facile"
            content={
              <div>
                <p className="mb-2">Soit <LatexRenderer latex="f" /> une fonction de <LatexRenderer latex="\mathbb{R}" /> dans <LatexRenderer latex="\mathbb{R}" />. Traduire en symboles logiques :</p>
                <p className="my-2 pl-4 border-l-2 border-slate-200 py-1">
                  « La fonction <LatexRenderer latex="f" /> s'annule au moins une fois, mais ne s'annule pas toujours. »
                </p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour traduire une phrase complexe, on décompose en propositions élémentaires reliées par des connecteurs logiques.
                  Ici, « au moins une fois » traduit l'existence (<LatexRenderer latex="\exists" />),
                  « toujours » traduit l'universalité (<LatexRenderer latex="\forall" />),
                  et « mais » est une conjonction (<LatexRenderer latex="\land" />).
                </PointMethodo>

                <p>On décompose la phrase en deux parties liées par un « et » :</p>

                <div className="space-y-3 mt-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-700">A : « <LatexRenderer latex="f" /> s'annule au moins une fois »</p>
                    <p className="ml-2">Il existe un réel <LatexRenderer latex="x" /> tel que <LatexRenderer latex="f(x) = 0" />.</p>
                    <div className="ml-2 mt-1"><LatexRenderer latex="\exists x \in \mathbb{R},\; f(x) = 0" /></div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-700">B : « <LatexRenderer latex="f" /> ne s'annule pas toujours »</p>
                    <p className="ml-2">Ce n'est pas vrai que <LatexRenderer latex="f(x) = 0" /> pour tout <LatexRenderer latex="x" />, c'est-à-dire il existe <LatexRenderer latex="x" /> tel que <LatexRenderer latex="f(x) \neq 0" />.</p>
                    <div className="ml-2 mt-1"><LatexRenderer latex="\exists x \in \mathbb{R},\; f(x) \neq 0" /></div>
                  </div>
                </div>

                <ConclusionBox>
                  <LatexRenderer latex="\bigl(\exists x \in \mathbb{R},\; f(x) = 0\bigr) \;\land\; \bigl(\exists x \in \mathbb{R},\; f(x) \neq 0\bigr)" />
                </ConclusionBox>
              </div>
            }
          />
        </div>

        {/* ── Niveau Intermédiaire ──────────────────────────────────────────── */}
        <div>
          <DifficultyHeader level="Niveau Intermédiaire — Techniques combinées" />

          <ExerciseCard
            id="inter-9"
            title="Exercice 9 - Quantificateurs imbriqués"
            difficulty="Niveau: Intermédiaire"
            content={
              <div>
                <p className="mb-2">Décider la vérité de la proposition suivante. Si elle est fausse, écrire sa négation.</p>
                <p className="text-center py-4 bg-carnet-paper rounded border border-slate-100 my-3">
                  <LatexRenderer latex="\forall x \in \mathbb{R},\; \exists y \in \mathbb{R},\; x^2 - y^2 = 1" />
                </p>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour décider la vérité d'une proposition universelle, on cherche un contre-exemple.
                  La méthode consiste à fixer une valeur particulière de <LatexRenderer latex="x" /> et à montrer qu'aucun <LatexRenderer latex="y" /> ne convient.
                  L'ordre des quantificateurs est crucial : <LatexRenderer latex="\forall x\, \exists y" /> autorise <LatexRenderer latex="y" /> à dépendre de <LatexRenderer latex="x" />.
                </PointMethodo>

                <p>Testons <LatexRenderer latex="x = 0" />. L'équation devient :</p>
                <div className="text-center py-2 my-2">
                  <LatexRenderer latex="0^2 - y^2 = 1 \;\Longrightarrow\; y^2 = -1" />
                </div>
                <p>
                  Or <LatexRenderer latex="y^2 \geq 0" /> pour tout <LatexRenderer latex="y \in \mathbb{R}" />, donc aucun réel ne vérifie <LatexRenderer latex="y^2 = -1" />.
                  La proposition est donc <strong>fausse</strong>.
                </p>

                <p className="mt-3 font-semibold text-slate-800">Négation :</p>
                <p>On inverse les quantificateurs et on nie le prédicat :</p>
                <div className="text-center py-2 my-2">
                  <LatexRenderer latex="\exists x \in \mathbb{R},\; \forall y \in \mathbb{R},\; x^2 - y^2 \neq 1" />
                </div>
                <p className="text-sm text-slate-600">La valeur <LatexRenderer latex="x = 0" /> en est un témoin.</p>

                <ConclusionBox>
                  La proposition est <strong>fausse</strong>. Négation :&nbsp;
                  <LatexRenderer latex="\exists x \in \mathbb{R},\; \forall y \in \mathbb{R},\; x^2 - y^2 \neq 1" />&nbsp;(témoin : <LatexRenderer latex="x = 0" />).
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="inter-10"
            title="Exercice 10 - Implication et contraposée"
            difficulty="Niveau: Intermédiaire"
            content={
              <p>Prouver l'équivalence logique : <LatexRenderer latex="\lnot(P \Rightarrow Q) \;\Longleftrightarrow\; P \land \lnot Q" />.</p>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour établir une équivalence logique, on peut procéder par chaîne d'équivalences algébriques
                  en utilisant les réécriture connues, puis vérifier par table de vérité.
                </PointMethodo>

                <Astuce>
                  L'implication <LatexRenderer latex="P \Rightarrow Q" /> est équivalente à <LatexRenderer latex="\lnot P \lor Q" />.
                  Cette réécriture permet d'appliquer les lois de De Morgan pour calculer la négation.
                </Astuce>

                <p>On a :</p>
                <div className="text-center py-2 my-2 space-y-1">
                  <p><LatexRenderer latex="\lnot(P \Rightarrow Q) \equiv \lnot(\lnot P \lor Q)" /></p>
                  <p><LatexRenderer latex="\equiv \lnot(\lnot P) \land \lnot Q \quad \text{(loi de De Morgan)}" /></p>
                  <p><LatexRenderer latex="\equiv P \land \lnot Q" /></p>
                </div>

                <p className="mt-2 mb-3 text-sm text-slate-600">Vérification par table de vérité :</p>
                <div className="overflow-hidden rounded border border-slate-200">
                  <table className="w-full text-sm text-center">
                    <thead className="bg-carnet-paper text-slate-700">
                      <tr>
                        <th className="p-2 border-r border-slate-200">P</th>
                        <th className="p-2 border-r border-slate-200">Q</th>
                        <th className="p-2 border-r border-slate-200">P⇒Q</th>
                        <th className="p-2 border-r border-slate-200 bg-stone-100 text-stone-700">¬(P⇒Q)</th>
                        <th className="p-2 bg-stone-100 text-stone-700">P∧¬Q</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr><td className="p-2">V</td><td className="p-2">V</td><td className="p-2">V</td><td className="p-2 bg-stone-50 font-medium text-red-700">F</td><td className="p-2 bg-stone-50 font-medium text-red-700">F</td></tr>
                      <tr><td className="p-2">V</td><td className="p-2">F</td><td className="p-2">F</td><td className="p-2 bg-stone-50 font-medium text-stone-700">V</td><td className="p-2 bg-stone-50 font-medium text-stone-700">V</td></tr>
                      <tr><td className="p-2">F</td><td className="p-2">V</td><td className="p-2">V</td><td className="p-2 bg-stone-50 font-medium text-red-700">F</td><td className="p-2 bg-stone-50 font-medium text-red-700">F</td></tr>
                      <tr><td className="p-2">F</td><td className="p-2">F</td><td className="p-2">V</td><td className="p-2 bg-stone-50 font-medium text-red-700">F</td><td className="p-2 bg-stone-50 font-medium text-red-700">F</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm mt-2 text-slate-600">Les deux colonnes surlignées sont identiques.</p>

                <ConclusionBox>
                  <LatexRenderer latex="\lnot(P \Rightarrow Q) \;\equiv\; P \land \lnot Q" />
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="inter-11"
            title="Exercice 11 - Preuve directe vs contraposée"
            difficulty="Niveau: Intermédiaire"
            content={
              <div>
                <p className="mb-2">Montrer que <LatexRenderer latex="x^2 \geq 4 \Rightarrow |x| \geq 2" />.</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>a) par raisonnement direct</li>
                  <li>b) par contraposée</li>
                </ul>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  Deux méthodes sont disponibles pour prouver une implication. Le raisonnement direct part de l'hypothèse et en déduit la conclusion.
                  La contraposée prouve <LatexRenderer latex="\lnot Q \Rightarrow \lnot P" /> (logiquement équivalent). Choisir la méthode selon laquelle
                  l'hypothèse de départ est la plus exploitable.
                </PointMethodo>

                <div className="space-y-5">
                  <div>
                    <p className="font-semibold text-slate-800 mb-2">a) Raisonnement direct</p>
                    <p>Soit <LatexRenderer latex="x \in \mathbb{R}" /> tel que <LatexRenderer latex="x^2 \geq 4" />.</p>
                    <p className="mt-1">
                      On a <LatexRenderer latex="|x| = \sqrt{x^2}" />. Or la fonction racine carrée est croissante sur <LatexRenderer latex="\mathbb{R}^+" />.
                      D'où <LatexRenderer latex="\sqrt{x^2} \geq \sqrt{4} = 2" />, c'est-à-dire <LatexRenderer latex="|x| \geq 2" />.
                    </p>
                  </div>

                  <div className="border-t border-slate-200 pt-4">
                    <p className="font-semibold text-slate-800 mb-2">b) Par contraposée</p>
                    <p>La contraposée est : « Si <LatexRenderer latex="|x| < 2" />, alors <LatexRenderer latex="x^2 < 4" />. »</p>
                    <p className="mt-2">
                      Soit <LatexRenderer latex="x \in \mathbb{R}" /> tel que <LatexRenderer latex="|x| < 2" />.
                      Or <LatexRenderer latex="|x| \geq 0" />, donc <LatexRenderer latex="|x| \in [0, 2[" />.
                      La fonction carré est croissante sur <LatexRenderer latex="\mathbb{R}^+" />, donc <LatexRenderer latex="|x|^2 < 2^2 = 4" />.
                      D'où <LatexRenderer latex="x^2 = |x|^2 < 4" />.
                    </p>
                    <p className="mt-2">La contraposée est vraie, donc l'implication initiale est vraie.</p>
                  </div>
                </div>

                <ConclusionBox>
                  Pour tout <LatexRenderer latex="x \in \mathbb{R}" /> : <LatexRenderer latex="x^2 \geq 4 \Rightarrow |x| \geq 2" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="inter-12"
            title="Exercice 12 - Ordre des quantificateurs"
            difficulty="Niveau: Intermédiaire"
            content={
              <div>
                <p className="mb-2">Comparer et décider la vérité de :</p>
                <div className="space-y-2 mt-4">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-slate-400">a)</span>
                    <LatexRenderer latex="\forall x \in \mathbb{R},\; \exists y \in \mathbb{R},\; x + y = 0" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-slate-400">b)</span>
                    <LatexRenderer latex="\exists y \in \mathbb{R},\; \forall x \in \mathbb{R},\; x + y = 0" />
                  </div>
                </div>
              </div>
            }
            correction={
              <div>
                <PointMethodo>
                  L'ordre des quantificateurs est fondamental. Dans <LatexRenderer latex="\forall x\, \exists y\, P(x,y)" />,
                  on peut choisir <LatexRenderer latex="y" /> en fonction de <LatexRenderer latex="x" />.
                  Dans <LatexRenderer latex="\exists y\, \forall x\, P(x,y)" />, un même <LatexRenderer latex="y" /> fixe doit convenir
                  à tous les <LatexRenderer latex="x" /> simultanément — contrainte beaucoup plus forte.
                </PointMethodo>

                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-stone-900 mb-1">a) Vraie</p>
                    <p>
                      Soit <LatexRenderer latex="x \in \mathbb{R}" />. On choisit <LatexRenderer latex="y = -x \in \mathbb{R}" /> (ce choix dépend de <LatexRenderer latex="x" />, permis ici
                      car <LatexRenderer latex="\exists" /> est après <LatexRenderer latex="\forall" />).
                      On a <LatexRenderer latex="x + y = x + (-x) = 0" />.
                    </p>
                  </div>

                  <div className="border-t border-slate-200 pt-4">
                    <p className="font-semibold text-stone-900 mb-1">b) Fausse</p>
                    <p>
                      La proposition affirme qu'il existe un réel <LatexRenderer latex="y" /> fixe tel que <LatexRenderer latex="x + y = 0" /> pour tout <LatexRenderer latex="x \in \mathbb{R}" />.
                    </p>
                    <p className="mt-1">
                      Si <LatexRenderer latex="x = 0" />, la relation donne <LatexRenderer latex="y = 0" />. Si <LatexRenderer latex="x = 1" />, la relation donne <LatexRenderer latex="y = -1" />.
                      Un même <LatexRenderer latex="y" /> ne peut valoir simultanément 0 et <LatexRenderer latex="-1" />. Contradiction.
                    </p>
                  </div>
                </div>

                <ConclusionBox>
                  a) <strong>Vraie</strong> — b) <strong>Fausse</strong>.
                  L'inversion des quantificateurs change fondamentalement la signification.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="inter-13"
            title="Exercice 13 - Récurrence (Bernoulli)"
            difficulty="Niveau: Intermédiaire"
            content={
              <p>Prouver par récurrence que pour tout entier <LatexRenderer latex="n \geq 0" />, <LatexRenderer latex="2^n \geq 1 + n" />.</p>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour une démonstration par récurrence, le squelette obligatoire est :
                  (1) Initialisation : vérifier la propriété au rang de départ.
                  (2) Hérédité : supposer la propriété vraie au rang <LatexRenderer latex="n" />, montrer qu'elle est vraie au rang <LatexRenderer latex="n+1" />.
                  (3) Conclusion : invoquer le principe de récurrence.
                  Ne jamais sauter une étape.
                </PointMethodo>

                <p>Soit <LatexRenderer latex="P(n)" /> la propriété : <LatexRenderer latex="2^n \geq 1 + n" />.</p>

                <div className="space-y-4 mt-3 pl-4 border-l-2 border-slate-200">
                  <div>
                    <p className="text-xs font-bold uppercase text-slate-500 mb-1">Initialisation (n = 0)</p>
                    <p>On a <LatexRenderer latex="2^0 = 1" /> et <LatexRenderer latex="1 + 0 = 1" />. Donc <LatexRenderer latex="1 \geq 1" />. <LatexRenderer latex="P(0)" /> est vraie.</p>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase text-slate-500 mb-1">Hérédité</p>
                    <p>Soit <LatexRenderer latex="n \geq 0" />. Supposons <LatexRenderer latex="P(n)" /> vraie, c'est-à-dire <LatexRenderer latex="2^n \geq 1 + n" />. Montrons <LatexRenderer latex="P(n+1)" /> : <LatexRenderer latex="2^{n+1} \geq 2 + n" />.</p>
                    <p className="mt-2">On a :</p>
                    <div className="text-center py-1 my-1">
                      <LatexRenderer latex="2^{n+1} = 2 \times 2^n \geq 2(1+n) = 2 + 2n" />
                    </div>
                    <p>Or <LatexRenderer latex="2 + 2n \geq 2 + n" /> car <LatexRenderer latex="n \geq 0" />. D'où <LatexRenderer latex="2^{n+1} \geq n + 2 = 1 + (n+1)" />.</p>
                    <p className="mt-1"><LatexRenderer latex="P(n+1)" /> est vraie.</p>
                  </div>
                </div>

                <ConclusionBox>
                  Par le principe de récurrence, pour tout <LatexRenderer latex="n \in \mathbb{N}" />,&nbsp;
                  <LatexRenderer latex="2^n \geq 1 + n" />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        {/* ── Niveau Concours ───────────────────────────────────────────────── */}
        <div>
          <DifficultyHeader level="Niveau Concours — Type BCE/Ecricome" />

          <ExerciseCard
            id="concours-14"
            title="Exercice 14 - Absurde : l'irrationnel classique"
            difficulty="Niveau: Concours"
            content={
              <p>Montrer qu'il n'existe pas de rationnel <LatexRenderer latex="q" /> tel que <LatexRenderer latex="q^2 = 2" />.</p>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour montrer par l'absurde qu'un objet n'existe pas, on suppose son existence et on en déduit une contradiction.
                  Ici : supposer <LatexRenderer latex="q \in \mathbb{Q}" /> avec <LatexRenderer latex="q^2 = 2" />, écrire <LatexRenderer latex="q" /> sous forme irréductible,
                  puis montrer que numérateur et dénominateur sont tous deux pairs — contredisant l'irréductibilité.
                </PointMethodo>

                <Astuce>
                  Le fait clé : si <LatexRenderer latex="m^2" /> est pair alors <LatexRenderer latex="m" /> est pair
                  (prouvé par contraposée : <LatexRenderer latex="m" /> impair <LatexRenderer latex="\Rightarrow" /> <LatexRenderer latex="m^2" /> impair).
                  Cet argument s'applique deux fois de suite pour obtenir la contradiction.
                </Astuce>

                <p>Supposons par l'absurde qu'il existe <LatexRenderer latex="q \in \mathbb{Q}" /> tel que <LatexRenderer latex="q^2 = 2" />.</p>
                <p className="mt-1">Écrivons <LatexRenderer latex="q = p/r" /> avec <LatexRenderer latex="p \in \mathbb{Z}" />, <LatexRenderer latex="r \in \mathbb{N}^*" /> et <LatexRenderer latex="\mathrm{pgcd}(p, r) = 1" />.</p>

                <div className="pl-4 border-l-2 border-slate-300 mt-3 space-y-2">
                  <p>Alors <LatexRenderer latex="p^2 = 2r^2" />. Ainsi <LatexRenderer latex="p^2" /> est pair. Or si <LatexRenderer latex="p" /> était impair, <LatexRenderer latex="p^2 = (2k+1)^2 = 4k^2+4k+1" /> serait impair. Donc <LatexRenderer latex="p" /> est pair : il existe <LatexRenderer latex="k \in \mathbb{Z}" /> tel que <LatexRenderer latex="p = 2k" />.</p>
                  <p>On substitue : <LatexRenderer latex="(2k)^2 = 2r^2" />, soit <LatexRenderer latex="4k^2 = 2r^2" />, d'où <LatexRenderer latex="r^2 = 2k^2" />. Ainsi <LatexRenderer latex="r^2" /> est pair, donc <LatexRenderer latex="r" /> est pair (même argument).</p>
                </div>

                <p className="mt-3">
                  Ainsi <LatexRenderer latex="p" /> et <LatexRenderer latex="r" /> sont tous deux pairs, ce qui contredit <LatexRenderer latex="\mathrm{pgcd}(p,r) = 1" />.
                  L'hypothèse est absurde.
                </p>

                <ConclusionBox>
                  <LatexRenderer latex="\sqrt{2} \notin \mathbb{Q}" /> : il n'existe aucun rationnel dont le carré vaut 2.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="concours-15"
            title="Exercice 15 - Récurrence sur inégalité puissance"
            difficulty="Niveau: Concours"
            content={
              <p>Prouver que pour tout <LatexRenderer latex="n \geq 4" />, <LatexRenderer latex="2^n \geq n^2" />.</p>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour montrer une inégalité par récurrence, l'hérédité consiste à relier <LatexRenderer latex="2^{n+1} = 2 \times 2^n" /> à <LatexRenderer latex="2^n" />,
                  appliquer l'hypothèse de récurrence, puis montrer une inégalité intermédiaire (<LatexRenderer latex="2n^2 \geq (n+1)^2" />)
                  par une étude de signe séparée.
                </PointMethodo>

                <Astuce>
                  Pour montrer <LatexRenderer latex="2n^2 \geq (n+1)^2" />, on étudie le signe de <LatexRenderer latex="n^2 - 2n - 1" />.
                  Ce trinôme a pour racines <LatexRenderer latex="1 \pm \sqrt{2} \approx 2{,}41" />, donc il est positif pour tout <LatexRenderer latex="n \geq 3" />,
                  ce qui couvre notre cas <LatexRenderer latex="n \geq 4" />.
                </Astuce>

                <div className="space-y-4 mt-2 pl-4 border-l-2 border-slate-200">
                  <div>
                    <p className="text-xs font-bold uppercase text-slate-500 mb-1">Initialisation (n = 4)</p>
                    <p><LatexRenderer latex="2^4 = 16" /> et <LatexRenderer latex="4^2 = 16" />. On a bien <LatexRenderer latex="16 \geq 16" />. <LatexRenderer latex="P(4)" /> est vraie.</p>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase text-slate-500 mb-1">Hérédité</p>
                    <p>Soit <LatexRenderer latex="n \geq 4" />. Supposons <LatexRenderer latex="2^n \geq n^2" />. Montrons <LatexRenderer latex="2^{n+1} \geq (n+1)^2" />.</p>
                    <p className="mt-2">On a <LatexRenderer latex="2^{n+1} = 2 \times 2^n \geq 2n^2" /> par hypothèse de récurrence.</p>
                    <p className="mt-1">Il suffit donc de montrer que <LatexRenderer latex="2n^2 \geq (n+1)^2 = n^2 + 2n + 1" />, c'est-à-dire <LatexRenderer latex="n^2 - 2n - 1 \geq 0" />.</p>
                    <p className="mt-1">
                      Les racines du trinôme <LatexRenderer latex="X^2 - 2X - 1" /> sont <LatexRenderer latex="1 \pm \sqrt{2}" />, dont la plus grande est <LatexRenderer latex="1 + \sqrt{2} \approx 2{,}41" />.
                      Pour <LatexRenderer latex="n \geq 4 > 1 + \sqrt{2}" />, le trinôme est positif. D'où <LatexRenderer latex="2n^2 \geq (n+1)^2" />.
                    </p>
                    <p className="mt-2">Ainsi <LatexRenderer latex="2^{n+1} \geq 2n^2 \geq (n+1)^2" />. <LatexRenderer latex="P(n+1)" /> est vraie.</p>
                  </div>
                </div>

                <ConclusionBox>
                  Par le principe de récurrence, pour tout <LatexRenderer latex="n \geq 4" />,&nbsp;
                  <LatexRenderer latex="2^n \geq n^2" />.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="concours-16"
            title="Exercice 16 - Récurrence et somme des carrés"
            difficulty="Niveau: Concours (Classique)"
            content={
              <p>Prouver par récurrence : <LatexRenderer latex="\displaystyle\sum_{k=1}^n k^2 = \frac{n(n+1)(2n+1)}{6}" />.</p>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour prouver une formule de sommation par récurrence, l'hérédité consiste à séparer
                  le dernier terme de la somme, appliquer l'hypothèse, puis factoriser pour retrouver
                  la formule au rang suivant.
                </PointMethodo>

                <Astuce>
                  Factoriser par <LatexRenderer latex="(n+1)" /> dans l'expression <LatexRenderer latex="\frac{n(n+1)(2n+1)}{6} + (n+1)^2" />,
                  puis développer <LatexRenderer latex="(n+2)(2n+3)" /> pour reconnaître la formule visée.
                </Astuce>

                <div className="space-y-4 mt-2 pl-4 border-l-2 border-slate-200">
                  <div>
                    <p className="text-xs font-bold uppercase text-slate-500 mb-1">Initialisation (n = 1)</p>
                    <p><LatexRenderer latex="\sum_{k=1}^{1} k^2 = 1" /> et <LatexRenderer latex="\frac{1 \times 2 \times 3}{6} = 1" />. Vrai.</p>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase text-slate-500 mb-1">Hérédité</p>
                    <p>Soit <LatexRenderer latex="n \geq 1" />. Supposons la formule vraie au rang <LatexRenderer latex="n" />. On a :</p>
                    <div className="text-center py-1 mt-2 space-y-1">
                      <p><LatexRenderer latex="\sum_{k=1}^{n+1} k^2 = \left(\sum_{k=1}^{n} k^2\right) + (n+1)^2 = \frac{n(n+1)(2n+1)}{6} + (n+1)^2" /></p>
                      <p><LatexRenderer latex="= (n+1)\left[\frac{n(2n+1)}{6} + (n+1)\right] = \frac{n+1}{6}\bigl(2n^2 + n + 6n + 6\bigr)" /></p>
                      <p><LatexRenderer latex="= \frac{(n+1)(2n^2+7n+6)}{6}" /></p>
                    </div>
                    <p className="mt-2">
                      Or <LatexRenderer latex="(n+2)(2n+3) = 2n^2 + 3n + 4n + 6 = 2n^2 + 7n + 6" />. D'où :
                    </p>
                    <div className="text-center py-1 my-1">
                      <LatexRenderer latex="\sum_{k=1}^{n+1} k^2 = \frac{(n+1)(n+2)(2n+3)}{6}" />
                    </div>
                    <p>C'est exactement la formule au rang <LatexRenderer latex="n+1" />.</p>
                  </div>
                </div>

                <ConclusionBox>
                  Par le principe de récurrence, pour tout <LatexRenderer latex="n \geq 1" />,&nbsp;
                  <LatexRenderer latex="\displaystyle\sum_{k=1}^{n} k^2 = \frac{n(n+1)(2n+1)}{6}" />.
                </ConclusionBox>
              </div>
            }
          />
        </div>

        {/* ── Niveau Dur ────────────────────────────────────────────────────── */}
        <div>
          <DifficultyHeader level="Niveau Difficile — Approfondissement" />

          <ExerciseCard
            id="dur-18"
            title="Exercice 18 - Analyse-synthèse (équation de Cauchy)"
            difficulty="Niveau: Difficile"
            content={
              <p>Déterminer toutes les applications <LatexRenderer latex="f : \mathbb{Q} \to \mathbb{Q}" /> telles que <LatexRenderer latex="f(x+y) = f(x) + f(y)" /> pour tout <LatexRenderer latex="x, y \in \mathbb{Q}" />.</p>
            }
            correction={
              <div>
                <PointMethodo>
                  Pour caractériser les solutions d'une équation fonctionnelle par analyse-synthèse :
                  (1) Analyse — supposer <LatexRenderer latex="f" /> solution et déterminer ses propriétés nécessaires en testant des valeurs particulières
                  (0, 1, entiers, puis rationnels).
                  (2) Synthèse — vérifier que les fonctions trouvées sont effectivement solutions.
                </PointMethodo>

                <Astuce>
                  L'additivité <LatexRenderer latex="f(x+y) = f(x)+f(y)" /> implique <LatexRenderer latex="f(0) = 0" /> en posant <LatexRenderer latex="x = y = 0" />,
                  puis s'étend de <LatexRenderer latex="\mathbb{N}" /> à <LatexRenderer latex="\mathbb{Z}" /> par <LatexRenderer latex="f(-n) = -f(n)" />,
                  et à <LatexRenderer latex="\mathbb{Q}" /> via <LatexRenderer latex="f(p/q) = p \cdot f(1/q) = (p/q) \cdot f(1)" />.
                </Astuce>

                <p className="font-semibold text-slate-800 mb-2">Analyse</p>
                <p>Posons <LatexRenderer latex="a = f(1)" />. Supposons <LatexRenderer latex="f" /> solution.</p>

                <div className="pl-4 border-l-2 border-slate-300 mt-2 space-y-2">
                  <p>En posant <LatexRenderer latex="x = y = 0" /> : <LatexRenderer latex="f(0) = 2f(0)" />, d'où <LatexRenderer latex="f(0) = 0" />.</p>
                  <p>Par additivité répétée, pour tout <LatexRenderer latex="n \in \mathbb{N}" /> : <LatexRenderer latex="f(n) = n \cdot a" />.</p>
                  <p>En posant <LatexRenderer latex="y = -x" /> : <LatexRenderer latex="0 = f(0) = f(x) + f(-x)" />, donc <LatexRenderer latex="f(-x) = -f(x)" />. Ainsi <LatexRenderer latex="f(n) = na" /> pour tout <LatexRenderer latex="n \in \mathbb{Z}" />.</p>
                  <p>Soit <LatexRenderer latex="r = p/q" /> avec <LatexRenderer latex="p \in \mathbb{Z}" />, <LatexRenderer latex="q \in \mathbb{N}^*" />. Par additivité : <LatexRenderer latex="f(q \cdot r) = q \cdot f(r)" />. Or <LatexRenderer latex="f(qr) = f(p) = pa" />. D'où <LatexRenderer latex="q \cdot f(r) = pa" />, soit <LatexRenderer latex="f(r) = a \cdot (p/q) = ar" />.</p>
                </div>

                <p className="font-semibold text-slate-800 mt-4 mb-2">Synthèse</p>
                <p>
                  Pour tout <LatexRenderer latex="a \in \mathbb{Q}" />, la fonction <LatexRenderer latex="f : x \mapsto ax" /> vérifie
                  <LatexRenderer latex="f(x+y) = a(x+y) = ax + ay = f(x)+f(y)" /> et envoie bien <LatexRenderer latex="\mathbb{Q}" /> dans <LatexRenderer latex="\mathbb{Q}" />.
                </p>

                <ConclusionBox>
                  Les solutions sont exactement les applications <LatexRenderer latex="f : x \mapsto ax" />,
                  avec <LatexRenderer latex="a = f(1) \in \mathbb{Q}" /> quelconque.
                </ConclusionBox>
              </div>
            }
          />

          <ExerciseCard
            id="dur-19"
            title="Exercice 19 - Récurrence forte"
            difficulty="Niveau: Difficile"
            content={
              <p>Prouver que tout entier <LatexRenderer latex="n \geq 2" /> admet au moins un diviseur premier.</p>
            }
            correction={
              <div>
                <PointMethodo>
                  La récurrence forte (ou récurrence complète) suppose la propriété vraie pour <em>tous</em> les rangs
                  de 2 à <LatexRenderer latex="n" /> (et non seulement pour <LatexRenderer latex="n" />) pour démontrer la propriété au rang <LatexRenderer latex="n+1" />.
                  Elle est adaptée aux situations où la structure de <LatexRenderer latex="n+1" /> fait intervenir un rang inférieur quelconque,
                  pas forcément <LatexRenderer latex="n" />.
                </PointMethodo>

                <p>Soit <LatexRenderer latex="P(n)" /> la propriété : « tout entier <LatexRenderer latex="k" /> avec <LatexRenderer latex="2 \leq k \leq n" /> admet au moins un diviseur premier ».</p>

                <div className="space-y-4 mt-3 pl-4 border-l-2 border-slate-200">
                  <div>
                    <p className="text-xs font-bold uppercase text-slate-500 mb-1">Initialisation (n = 2)</p>
                    <p>2 est lui-même premier, donc il est son propre diviseur premier. <LatexRenderer latex="P(2)" /> est vraie.</p>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase text-slate-500 mb-1">Hérédité</p>
                    <p>Soit <LatexRenderer latex="n \geq 2" />. Supposons <LatexRenderer latex="P(n)" /> vraie (tout <LatexRenderer latex="k" /> avec <LatexRenderer latex="2 \leq k \leq n" /> a un diviseur premier). Montrons que <LatexRenderer latex="n+1" /> admet un diviseur premier.</p>
                    <div className="mt-2 space-y-2">
                      <p><strong>Cas 1 :</strong> <LatexRenderer latex="n+1" /> est premier. Alors <LatexRenderer latex="n+1" /> est son propre diviseur premier.</p>
                      <p>
                        <strong>Cas 2 :</strong> <LatexRenderer latex="n+1" /> n'est pas premier. Il existe <LatexRenderer latex="a, b \in \mathbb{N}" /> avec <LatexRenderer latex="a \geq 2" />, <LatexRenderer latex="b \geq 2" /> et <LatexRenderer latex="n+1 = ab" />.
                        En particulier, <LatexRenderer latex="2 \leq a \leq n" />.
                        Par hypothèse de récurrence forte, <LatexRenderer latex="a" /> admet un diviseur premier <LatexRenderer latex="p" />.
                        Or <LatexRenderer latex="p \mid a" /> et <LatexRenderer latex="a \mid n+1" />, donc <LatexRenderer latex="p \mid n+1" />.
                      </p>
                    </div>
                    <p className="mt-2">Dans les deux cas, <LatexRenderer latex="n+1" /> admet un diviseur premier. <LatexRenderer latex="P(n+1)" /> est vraie.</p>
                  </div>
                </div>

                <ConclusionBox>
                  Par le principe de récurrence forte, tout entier <LatexRenderer latex="n \geq 2" /> admet au moins un diviseur premier.
                </ConclusionBox>
              </div>
            }
          />
        </div>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre1LogiqueEtRaisonnementFondamentauxExercicesPage;
