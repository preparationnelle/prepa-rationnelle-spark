import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Star, BookOpen, Lightbulb, Target, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';

const Chapitre1LogiqueEtRaisonnementFondamentauxExercicesPage = () => {
  const [visibleCorrections, setVisibleCorrections] = useState<{ [key: string]: boolean }>({});

  const toggleCorrection = (exerciseId: string) => {
    setVisibleCorrections(prev => ({
      ...prev,
      [exerciseId]: !prev[exerciseId]
    }));
  };

  const DifficultyHeader = ({
    level,
    title,
    icon: Icon,
    stars,
    color = "slate"
  }: {
    level: string;
    title: string;
    icon: any;
    stars: number;
    color?: string;
  }) => (
    <div className="flex items-center gap-4 mb-6 mt-8 pb-4 border-b border-slate-200">
      <div className={`p-2 bg-slate-50 text-slate-700 rounded-lg border border-slate-200`}>
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h2 className="text-xl font-bold text-slate-800">{level} : {title}</h2>
        <div className="flex gap-1 mt-1">
          {[...Array(stars)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
          {[...Array(4 - stars)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-slate-200" />
          ))}
        </div>
      </div>
    </div>
  );

  const ExerciseCard = ({
    id,
    title,
    content,
    correction,
    difficulty
  }: {
    id: string;
    title: string;
    content: React.ReactNode;
    correction: React.ReactNode;
    difficulty: string;
  }) => (
    <Card className="mb-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 bg-white">
      <div className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 font-semibold text-sm">
              {id.split('-')[1]}
            </div>
            <h3 className="font-semibold text-slate-900 text-lg">{title.split(' - ')[1] || title}</h3>
          </div>
          <span className="text-xs font-medium text-slate-500 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
            {difficulty}
          </span>
        </div>

        <div className="mb-6 text-slate-700 leading-relaxed pl-1">
          {content}
        </div>

        <div className="flex flex-col gap-4">
          <Button
            onClick={() => toggleCorrection(id)}
            variant="ghost"
            size="sm"
            className="w-fit text-slate-500 hover:text-slate-900 hover:bg-slate-50 self-start -ml-2"
          >
            {visibleCorrections[id] ? (
              <>
                <ChevronUp className="mr-2 h-4 w-4" />
                Masquer la correction
              </>
            ) : (
              <>
                <ChevronDown className="mr-2 h-4 w-4" />
                Afficher la correction
              </>
            )}
          </Button>

          {visibleCorrections[id] && (
            <div className="bg-slate-50 border-l-2 border-emerald-500 p-6 rounded-r-lg animate-in fade-in slide-in-from-top-2 duration-300">
              <h4 className="font-semibold text-emerald-800 mb-3 text-sm uppercase tracking-wider">Solution détaillée</h4>
              <div className="text-slate-700 leading-relaxed space-y-2">
                {correction}
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );

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



        {/* Niveau Facile */}
        <div>
          <DifficultyHeader
            level="Niveau Facile"
            title="Application directe"
            icon={Lightbulb}
            stars={1}
          />

          <ExerciseCard
            id="facile-1"
            title="Exercice 1 - Négation de phrases"
            difficulty="Niveau: Facile"
            content={
              <div>
                <p className="mb-2">Donner la négation :</p>
                <div className="space-y-2 mt-4">
                  <div className="bg-slate-50 p-3 rounded border border-slate-100">
                    <span className="font-mono text-xs text-slate-500 mr-2">a)</span>
                    « Tous les élèves de la classe ECG sont grands. »
                  </div>
                  <div className="bg-slate-50 p-3 rounded border border-slate-100">
                    <span className="font-mono text-xs text-slate-500 mr-2">b)</span>
                    « Il existe un mouton écossais dont au moins un côté est noir. »
                  </div>
                </div>
              </div>
            }
            correction={
              <div>
                <p className="mb-3">Pour nier une proposition, on inverse les quantificateurs et on nie le prédicat.</p>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-slate-800 text-sm mb-1">a) La proposition est :</p>
                    <p><LatexRenderer latex="\forall" /> élèves en ECG, grand.</p>
                    <p className="mt-1"><strong className="text-slate-800">Négation :</strong> <LatexRenderer latex="\exists" /> un élève en ECG qui n'est pas grand.</p>
                    <p className="mt-1 italic text-slate-600">« Il existe au moins un élève de la classe ECG qui n'est pas grand. »</p>
                  </div>
                  <div className="border-t border-emerald-500/10 pt-3">
                    <p className="font-medium text-slate-800 text-sm mb-1">b) La proposition est :</p>
                    <p><LatexRenderer latex="\exists" /> mouton écossais tel que au moins un côté noir.</p>
                    <p className="mt-1"><strong className="text-slate-800">Négation :</strong> <LatexRenderer latex="\forall" /> moutons écossais, aucun côté noir.</p>
                    <p className="mt-1 italic text-slate-600">« Pour tout mouton écossais, aucun de ses côtés n'est noir. »</p>
                  </div>
                </div>
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
                  <div className="px-3 py-1 bg-slate-50 rounded border border-slate-200"><LatexRenderer latex="P" /> : « <LatexRenderer latex="n" /> est multiple de 6 »</div>
                  <div className="px-3 py-1 bg-slate-50 rounded border border-slate-200"><LatexRenderer latex="Q" /> : « <LatexRenderer latex="n" /> est pair »</div>
                </div>
                <p>Indiquer si <LatexRenderer latex="P" /> est nécessaire, suffisante ou équivalente à <LatexRenderer latex="Q" />.</p>
              </div>
            }
            correction={
              <div>
                <div className="bg-emerald-50/50 p-3 rounded border border-emerald-100 mb-3 text-sm">
                  <strong>Rappel :</strong> <LatexRenderer latex="P" /> est suffisante pour <LatexRenderer latex="Q" /> si <LatexRenderer latex="P \Rightarrow Q" />. Nécessaire si <LatexRenderer latex="Q \Rightarrow P" />. Équivalente si les deux.
                </div>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Si <LatexRenderer latex="n" /> est multiple de 6 (ex: 6, 12...), alors il est pair (divisible par 2).<br />
                    Donc <LatexRenderer latex="P \Rightarrow Q" /> : <strong className="text-emerald-700">suffisante</strong>.
                  </li>
                  <li>
                    Réciproque : si <LatexRenderer latex="n" /> est pair (ex: 2), il n'est pas forcément multiple de 6 (2 n'est pas divisible par 3).<br />
                    Donc on n'a pas <LatexRenderer latex="Q \Rightarrow P" /> : <strong className="text-slate-700">non nécessaire</strong>.
                  </li>
                </ul>
                <p className="mt-2 text-sm text-slate-500">Pas équivalente.</p>
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
                <p className="mb-2">La proposition est de la forme <LatexRenderer latex="A \land B" />.</p>
                <ul className="list-disc pl-5 mb-2 text-sm text-slate-600">
                  <li><LatexRenderer latex="A" /> : 136 multiple de 17</li>
                  <li><LatexRenderer latex="B" /> : 2 divise 167</li>
                </ul>
                <p className="mb-2">Sa négation est <LatexRenderer latex="\lnot A \lor \lnot B" />.</p>
                <div className="bg-slate-50 p-3 rounded border border-slate-200 mt-2">
                  <p>« 136 n'est pas multiple de 17 <strong>ou</strong> 2 ne divise pas 167 »</p>
                </div>
                <p className="mt-2 text-xs text-slate-400">Note : La proposition initiale est fausse car 167 est impair (donc B faux), donc la négation est vraie.</p>
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
                <div className="text-center py-4 my-2 bg-slate-50 rounded-lg border border-slate-100">
                  <LatexRenderer latex="\forall x \in \mathbb{R}, x^2 \geq 0" />
                </div>
              </div>
            }
            correction={
              <div>
                <p className="mb-2"><strong>Traduction :</strong> « Pour tout nombre réel <LatexRenderer latex="x" />, son carré <LatexRenderer latex="x^2" /> est supérieur ou égal à 0 (positif ou nul). »</p>
                <div className="mt-4 pt-4 border-t border-emerald-500/10">
                  <p className="mb-2"><strong>Négation :</strong> On inverse le quantificateur et le prédicat.</p>
                  <p className="text-center py-2"><LatexRenderer latex="\exists x \in \mathbb{R}, x^2 < 0" /></p>
                  <p className="text-sm italic text-slate-600">« Il existe un réel dont le carré est strictement négatif. »</p>
                  <p className="text-xs text-slate-400 mt-1">(Cette négation est bien sûr fausse dans R).</p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="facile-5"
            title="Exercice 5 - Implication simple"
            difficulty="Niveau: Facile"
            content={
              <p>Montrer par contraposée : « Si <LatexRenderer latex="n^2" /> est pair, alors <LatexRenderer latex="n" /> est pair » (pour <LatexRenderer latex="n" /> entier).</p>
            }
            correction={
              <div>
                <p className="mb-2"><strong>Contraposée :</strong> « Si <LatexRenderer latex="n" /> est impair, alors <LatexRenderer latex="n^2" /> est impair. »</p>
                <div className="pl-4 border-l-2 border-slate-200 mt-2">
                  <p>Preuve : Si <LatexRenderer latex="n" /> est impair, il s'écrit <LatexRenderer latex="n = 2k + 1" /> (avec <LatexRenderer latex="k \in \mathbb{Z}" />).</p>
                  <p className="my-1">Alors :</p>
                  <p><LatexRenderer latex="n^2 = (2k+1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1" /></p>
                  <p className="mt-1">C'est la forme d'un nombre impair.</p>
                </div>
                <p className="mt-2">La contraposée est vraie, donc l'implication initiale est vraie.</p>
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
                <div className="overflow-hidden rounded border border-slate-200 mb-4">
                  <table className="w-full text-sm text-center">
                    <thead className="bg-slate-50 text-slate-700">
                      <tr>
                        <th className="p-2 border-r border-slate-200">P</th>
                        <th className="p-2 border-r border-slate-200">Q</th>
                        <th className="p-2 border-r border-slate-200">P∧Q</th>
                        <th className="p-2 border-r border-slate-200 bg-emerald-50 text-emerald-700">¬(P∧Q)</th>
                        <th className="p-2 border-r border-slate-200">¬P</th>
                        <th className="p-2 border-r border-slate-200">¬Q</th>
                        <th className="p-2 bg-emerald-50 text-emerald-700">¬P ∨ ¬Q</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr><td>V</td><td>V</td><td>V</td><td className="bg-emerald-50 font-medium">F</td><td>F</td><td>F</td><td className="bg-emerald-50 font-medium">F</td></tr>
                      <tr><td>V</td><td>F</td><td>F</td><td className="bg-emerald-50 font-medium">V</td><td>F</td><td>V</td><td className="bg-emerald-50 font-medium">V</td></tr>
                      <tr><td>F</td><td>V</td><td>F</td><td className="bg-emerald-50 font-medium">V</td><td>V</td><td>F</td><td className="bg-emerald-50 font-medium">V</td></tr>
                      <tr><td>F</td><td>F</td><td>F</td><td className="bg-emerald-50 font-medium">V</td><td>V</td><td>V</td><td className="bg-emerald-50 font-medium">V</td></tr>
                    </tbody>
                  </table>
                </div>
                <p>Les deux colonnes colorées sont identiques. C'est la première loi de De Morgan.</p>
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
                <p className="text-center py-2 bg-slate-50 rounded border border-slate-100 my-2">
                  « Tout nombre premier est impair. »
                </p>
                <p>Si elle est fausse, donner un contre-exemple.</p>
              </div>
            }
            correction={
              <div>
                <p className="mb-2"><strong className="text-red-600">Faux.</strong></p>
                <p className="mb-2">Il existe un contre-exemple unique mais fondamental : le nombre <strong>2</strong>.</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li>2 est un nombre premier (divisible seulement par 1 et lui-même).</li>
                  <li>2 est pair.</li>
                </ul>
                <p className="mt-2 text-sm italic">C'est le seul nombre premier pair. Tous les autres (3, 5, 7, 11...) sont impairs.</p>
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
                <p className="mb-3">On décompose la phrase en deux parties liées par un « et » (conjonction) :</p>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-700">1. « f s'annule au moins une fois »</p>
                    <p className="ml-2">Cela signifie qu'il existe un réel <LatexRenderer latex="x" /> tel que <LatexRenderer latex="f(x)=0" />.</p>
                    <p className="ml-2 bg-slate-50 inline-block px-2 py-1 rounded mt-1 border border-slate-100"><LatexRenderer latex="\exists x \in \mathbb{R}, f(x) = 0" /></p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-700">2. « f ne s'annule pas toujours »</p>
                    <p className="ml-2">Cela signifie que ce n'est pas pour tout <LatexRenderer latex="x" /> que <LatexRenderer latex="f(x)=0" />. Donc il existe un <LatexRenderer latex="x" /> où ce n'est pas 0.</p>
                    <p className="ml-2 bg-slate-50 inline-block px-2 py-1 rounded mt-1 border border-slate-100"><LatexRenderer latex="\exists x \in \mathbb{R}, f(x) \neq 0" /></p>
                    <p className="ml-2 text-xs text-slate-500 mt-1">(Ou : <LatexRenderer latex="\lnot (\forall x \in \mathbb{R}, f(x)=0)" />)</p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <p className="font-bold text-slate-800 mb-1">Traduction complète :</p>
                  <p className="text-center"><LatexRenderer latex="(\exists x \in \mathbb{R}, f(x) = 0) \land (\exists x \in \mathbb{R}, f(x) \neq 0)" /></p>
                </div>
              </div>
            }
          />
        </div>

        {/* Niveau Intermédiaire */}
        <div>
          <DifficultyHeader
            level="Niveau Intermédiaire"
            title="Techniques combinées"
            icon={Target}
            stars={2}
          />

          <ExerciseCard
            id="inter-9"
            title="Exercice 9 - Quantificateurs imbriqués"
            difficulty="Niveau: Intermédiaire"
            content={
              <div>
                <p className="mb-2">Décider la vérité de la proposition suivante. Si elle est fausse, écrire sa négation.</p>
                <p className="text-center py-4 bg-slate-50 rounded border border-slate-100 my-3"><LatexRenderer latex="\forall x \in \mathbb{R}, \exists y \in \mathbb{R}, x^2 - y^2 = 1" /></p>
              </div>
            }
            correction={
              <div>
                <p className="mb-2">La proposition affirme : « Pour tout <LatexRenderer latex="x" />, on peut trouver un <LatexRenderer latex="y" /> tel que <LatexRenderer latex="x^2 - y^2 = 1" /> ».</p>
                <p className="mb-2">Testons pour <LatexRenderer latex="x = 0" /> :</p>
                <div className="bg-slate-50 p-2 rounded text-center mb-2 font-mono text-sm">
                  0² - y² = 1  ⇒  -y² = 1  ⇒  y² = -1
                </div>
                <p className="mb-3">Impossible dans <LatexRenderer latex="\mathbb{R}" />. La proposition est donc <strong>fausse</strong>.</p>

                <div className="pt-3 border-t border-emerald-500/10">
                  <p className="mb-2 font-semibold text-emerald-800">Négation :</p>
                  <p className="text-center mb-2"><LatexRenderer latex="\exists x \in \mathbb{R}, \forall y \in \mathbb{R}, x^2 - y^2 \neq 1" /></p>
                  <p className="text-sm text-slate-600">On a prouvé que <LatexRenderer latex="x=0" /> était un tel contre-exemple.</p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="inter-10"
            title="Exercice 10 - Implication et contraposée"
            difficulty="Niveau: Intermédiaire"
            content={
              <p>Prouver l'équivalence logique : <LatexRenderer latex="\lnot(P \Rightarrow Q) \Longleftrightarrow P \land \lnot Q" />.</p>
            }
            correction={
              <div>
                <p className="mb-2">On sait que l'implication <LatexRenderer latex="P \Rightarrow Q" /> équivaut à <LatexRenderer latex="\lnot P \lor Q" />.</p>
                <p className="mb-3">Donc sa négation est :</p>
                <div className="text-center py-2 bg-slate-50 rounded border border-slate-100 mb-3">
                  <LatexRenderer latex="\lnot(P \Rightarrow Q) \equiv \lnot(\lnot P \lor Q) \equiv \lnot(\lnot P) \land \lnot Q \equiv P \land \lnot Q" />
                </div>
                <p className="text-sm text-slate-600 mb-2">C'est la loi de De Morgan.</p>

                <div className="mt-4">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Vérification par table de vérité</p>
                  <div className="overflow-hidden rounded border border-slate-200">
                    <table className="w-full text-sm text-center">
                      <thead className="bg-slate-50 text-slate-700">
                        <tr>
                          <th className="p-2 border-r border-slate-200">P</th>
                          <th className="p-2 border-r border-slate-200">Q</th>
                          <th className="p-2 border-r border-slate-200">P⇒Q</th>
                          <th className="p-2 border-r border-slate-200">¬(P⇒Q)</th>
                          <th className="p-2">P∧¬Q</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr><td>V</td><td>V</td><td>V</td><td className="bg-slate-50 font-medium text-red-500">F</td><td className="bg-slate-50 font-medium text-red-500">F</td></tr>
                        <tr><td>V</td><td>F</td><td>F</td><td className="bg-emerald-50 font-medium text-emerald-600">V</td><td className="bg-emerald-50 font-medium text-emerald-600">V</td></tr>
                        <tr><td>F</td><td>V</td><td>V</td><td className="bg-slate-50 font-medium text-red-500">F</td><td className="bg-slate-50 font-medium text-red-500">F</td></tr>
                        <tr><td>F</td><td>F</td><td>V</td><td className="bg-slate-50 font-medium text-red-500">F</td><td className="bg-slate-50 font-medium text-red-500">F</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
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
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-slate-800 mb-1">a) Raisonnement Direct</h5>
                  <p>Si <LatexRenderer latex="x^2 \geq 4" />.</p>
                  <p>On sait que <LatexRenderer latex="|x| = \sqrt{x^2}" />.</p>
                  <p>La fonction racine carrée étant croissante sur <LatexRenderer latex="\mathbb{R}^+" />, on a <LatexRenderer latex="\sqrt{x^2} \geq \sqrt{4}" />.</p>
                  <p>Donc <LatexRenderer latex="|x| \geq 2" />. <span className="text-emerald-600 font-bold">CQFD.</span></p>
                </div>
                <div className="border-t border-emerald-500/10 pt-4">
                  <h5 className="font-semibold text-slate-800 mb-1">b) Par Contraposée</h5>
                  <p>La contraposée est : « Si <LatexRenderer latex="|x| < 2" />, alors <LatexRenderer latex="x^2 < 4" /> ».</p>
                  <p className="mt-1">Hypothèse : <LatexRenderer latex="|x| < 2" /> signifie <LatexRenderer latex="-2 < x < 2" />.</p>
                  <p>En élevant au carré (sur <LatexRenderer latex="[0, 2[" /> c'est clair, et <LatexRenderer latex="(-2)^2 = 4" />), on obtient bien <LatexRenderer latex="x^2 < 4" />.</p>
                  <p className="mt-1">La contraposée est vraie, donc l'implication est vraie.</p>
                </div>
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
                    <LatexRenderer latex="\forall x \in \mathbb{R}, \exists y \in \mathbb{R}, x + y = 0" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-slate-400">b)</span>
                    <LatexRenderer latex="\exists y \in \mathbb{R}, \forall x \in \mathbb{R}, x + y = 0" />
                  </div>
                </div>
              </div>
            }
            correction={
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-emerald-700 mb-1">a) est VRAIE</p>
                  <p className="text-sm">Pour tout <LatexRenderer latex="x" />, on peut choisir <LatexRenderer latex="y = -x" />. Alors <LatexRenderer latex="x+y=0" />. Le <LatexRenderer latex="y" /> dépend du <LatexRenderer latex="x" />, ce qui est permis ici (le <LatexRenderer latex="\exists" /> est après le <LatexRenderer latex="\forall" />).</p>
                </div>
                <div className="border-t border-emerald-500/10 pt-4">
                  <p className="font-medium text-red-700 mb-1">b) est FAUSSE</p>
                  <p className="text-sm">Elle dit qu'il existe un <LatexRenderer latex="y" /> <em>unique et fixe</em> qui annule tous les nombres <LatexRenderer latex="x" /> possibles. C'est impossible (il faudrait que ce <LatexRenderer latex="y" /> vaille à la fois 0 si x=0, et -1 si x=1...).</p>
                </div>
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
                <p className="mb-2">Soit <LatexRenderer latex="P(n)" /> la propriété : <LatexRenderer latex="2^n \geq 1 + n" />.</p>

                <div className="pl-4 border-l-2 border-slate-200 space-y-3 mt-3">
                  <div>
                    <span className="text-xs font-bold uppercase text-slate-500 block mb-1">Initialisation</span>
                    <p>Pour <LatexRenderer latex="n = 0" /> : <LatexRenderer latex="2^0 = 1" /> et <LatexRenderer latex="1+0 = 1" />. On a bien <LatexRenderer latex="1 \geq 1" />. <LatexRenderer latex="P(0)" /> est vraie.</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-slate-500 block mb-1">Hérédité</span>
                    <p>Supposons <LatexRenderer latex="P(n)" /> vraie pour un <LatexRenderer latex="n \geq 0" /> fixé : <LatexRenderer latex="2^n \geq 1+n" />.</p>
                    <p className="mt-1">Montrons <LatexRenderer latex="P(n+1)" /> : <LatexRenderer latex="2^{n+1} \geq 1+(n+1)" />.</p>
                    <div className="my-2 bg-slate-50 p-2 rounded text-sm">
                      <p><LatexRenderer latex="2^{n+1} = 2 \times 2^n" /></p>
                      <p>Par hypothèse : <LatexRenderer latex="2 \times 2^n \geq 2(1+n) = 2 + 2n" /></p>
                      <p>Or <LatexRenderer latex="2 + 2n = (n + 2) + n" />.</p>
                      <p>Comme <LatexRenderer latex="n \geq 0" />, <LatexRenderer latex="n + 2 \geq 2" /> (donc <LatexRenderer latex="\geq 1+(n+1)" /> est large, mais vérifions plus simplement :)</p>
                      <p className="mt-1">On veut <LatexRenderer latex="2+2n \geq n+2" />. C'est vrai car <LatexRenderer latex="n \geq 0" />.</p>
                    </div>
                    <p>Donc <LatexRenderer latex="2^{n+1} \geq n+2" />. Hérédité validée.</p>
                  </div>
                </div>
                <p className="mt-3 font-medium">Conclusion : La propriété est vraie pour tout <LatexRenderer latex="n \geq 0" />.</p>
              </div>
            }
          />
        </div>

        {/* Niveau Concours */}
        <div>
          <DifficultyHeader
            level="Niveau Concours"
            title="Type BCE/Ecricome"
            icon={Target}
            stars={3}
            color="amber"
          />

          <ExerciseCard
            id="concours-14"
            title="Exercice 14 - Absurde : L'irrationnel classique"
            difficulty="Niveau: Concours"
            content={
              <p>Montrer qu'il n'existe pas de rationnel <LatexRenderer latex="q" /> tel que <LatexRenderer latex="q^2 = 2" />.</p>
            }
            correction={
              <div>
                <p className="italic text-sm text-slate-500 mb-3">C'est la preuve classique de l'irrationalité de <LatexRenderer latex="\sqrt{2}" />.</p>
                <p>Par l'absurde, supposons qu'il existe <LatexRenderer latex="q \in \mathbb{Q}" /> tel que <LatexRenderer latex="q^2 = 2" />.</p>
                <p>On écrit <LatexRenderer latex="q = \frac{p}{r}" /> sous forme irréductible (pgcd(p,r) = 1).</p>
                <div className="pl-4 border-l-2 border-emerald-200 my-3 space-y-2">
                  <p>1. <LatexRenderer latex="p^2 = 2r^2" />. Donc <LatexRenderer latex="p^2" /> est pair. Cela implique que <LatexRenderer latex="p" /> est pair (car le carré d'un impair est impair).</p>
                  <p>2. On écrit <LatexRenderer latex="p = 2k" />.</p>
                  <p>3. L'équation devient <LatexRenderer latex="(2k)^2 = 2r^2 \Rightarrow 4k^2 = 2r^2 \Rightarrow 2k^2 = r^2" />.</p>
                  <p>4. Donc <LatexRenderer latex="r^2" /> est pair, ce qui implique que <LatexRenderer latex="r" /> est pair.</p>
                </div>
                <p><strong>Contradiction :</strong> <LatexRenderer latex="p" /> et <LatexRenderer latex="r" /> sont tous deux pairs, donc la fraction n'était pas irréductible. L'hypothèse est fausse.</p>
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
                <p className="mb-2"><strong>Initialisation :</strong> Pour <LatexRenderer latex="n=4" />, <LatexRenderer latex="2^4 = 16" /> et <LatexRenderer latex="4^2 = 16" />. Vrai.</p>
                <p className="mb-2"><strong>Hérédité :</strong> Supposons <LatexRenderer latex="2^n \geq n^2" />. Montrons <LatexRenderer latex="2^{n+1} \geq (n+1)^2" />.</p>
                <div className="bg-slate-50 p-3 rounded mb-2">
                  <p><LatexRenderer latex="2^{n+1} = 2 \times 2^n \geq 2n^2" /> (par HR).</p>
                  <p>Il suffit de montrer que <LatexRenderer latex="2n^2 \geq (n+1)^2" />.</p>
                  <p><LatexRenderer latex="2n^2 \geq n^2 + 2n + 1 \iff n^2 - 2n - 1 \geq 0" />.</p>
                </div>
                <p className="mb-2">Étudions le trinôme <LatexRenderer latex="X^2 - 2X - 1" />. Ses racines sont <LatexRenderer latex="1 \pm \sqrt{2}" /> (<LatexRenderer latex="\approx 2.41" />).</p>
                <p>Pour <LatexRenderer latex="n \geq 4" />, nous sommes à l'extérieur des racines, donc le trinôme est positif. L'inégalité est vérifiée.</p>
              </div>
            }
          />

          <ExerciseCard
            id="concours-16"
            title="Exercice 16 - Récurrence et somme"
            difficulty="Niveau: Concours (Classique)"
            content={
              <p>Prouver <LatexRenderer latex="\sum_{k=1}^n k^2 = \frac{n(n+1)(2n+1)}{6}" /> par récurrence.</p>
            }
            correction={
              <div>
                <p className="text-sm mb-2 text-slate-500">Une classique absolue à savoir refaire les yeux fermés.</p>
                <p className="mb-2"><strong>Hérédité seule (le point clé) :</strong></p>
                <p>Supposons la formule vraie pour <LatexRenderer latex="n" />.</p>
                <div className="my-2 overflow-x-auto">
                  <p><LatexRenderer latex="\sum_{k=1}^{n+1} k^2 = \left(\sum_{k=1}^n k^2\right) + (n+1)^2" /></p>
                  <p className="my-1"><LatexRenderer latex="= \frac{n(n+1)(2n+1)}{6} + (n+1)^2" /></p>
                  <p className="my-1">Facteur <LatexRenderer latex="(n+1)" /> : <LatexRenderer latex="= (n+1) \left[ \frac{n(2n+1)}{6} + \frac{6(n+1)}{6} \right]" /></p>
                  <p className="my-1"><LatexRenderer latex="= \frac{n+1}{6} (2n^2 + n + 6n + 6) = \frac{n+1}{6} (2n^2 + 7n + 6)" /></p>
                </div>
                <p>Or, pour <LatexRenderer latex="n+1" />, la formule cible est <LatexRenderer latex="\frac{(n+1)(n+2)(2(n+1)+1)}{6} = \frac{(n+1)(n+2)(2n+3)}{6}" />.</p>
                <p>Développons <LatexRenderer latex="(n+2)(2n+3) = 2n^2 + 3n + 4n + 6 = 2n^2 + 7n + 6" />.</p>
                <p className="font-bold text-emerald-700 mt-2">Ça correspond !</p>
              </div>
            }
          />
        </div>

        {/* Niveau Dur */}
        <div>
          <DifficultyHeader
            level="Niveau Dur"
            title="Approfondissement"
            icon={Crown}
            stars={4}
            color="purple"
          />

          <ExerciseCard
            id="dur-18"
            title="Exercice 18 - Analyse-synthèse (Cauchy)"
            difficulty="Niveau: Difficile"
            content={
              <p>Déterminer les applications <LatexRenderer latex="f: \mathbb{Q} \to \mathbb{Q}" /> telles que <LatexRenderer latex="f(x+y) = f(x) + f(y)" />.</p>
            }
            correction={
              <div>
                <p className="mb-2"><strong>Analyse :</strong></p>
                <ul className="list-disc pl-5 space-y-1 mb-3">
                  <li><LatexRenderer latex="f(0) = f(0+0) = 2f(0) \Rightarrow f(0) = 0" />.</li>
                  <li><LatexRenderer latex="f(1) = a" />. Par récurrence, <LatexRenderer latex="f(n) = n \cdot a" /> pour <LatexRenderer latex="n \in \mathbb{N}" />.</li>
                  <li><LatexRenderer latex="f(0) = f(n-n) \Rightarrow 0 = f(n) + f(-n) \Rightarrow f(-n) = -an" />. Donc vrai sur <LatexRenderer latex="\mathbb{Z}" />.</li>
                  <li>Pour <LatexRenderer latex="r = p/q" />, <LatexRenderer latex="f(q \cdot r) = q f(r)" /> (additivité). Or <LatexRenderer latex="f(qr) = f(p) = ap" />.</li>
                  <li>Donc <LatexRenderer latex="q f(r) = ap \Rightarrow f(r) = a \frac{p}{q} = ax" />.</li>
                </ul>
                <p><strong>Synthèse :</strong> Les fonctions linéaires <LatexRenderer latex="f(x) = ax" /> sont bien solutions.</p>
                <p className="text-xs text-slate-500 mt-2">Note: Sur R sans continuité, c'est beaucoup plus complexe (base de Hamel).</p>
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
                <p>On utilise une <strong>récurrence forte</strong>.</p>
                <p className="mb-2">Soit <LatexRenderer latex="P(n)" /> : « tout entier <LatexRenderer latex="k" /> tel que <LatexRenderer latex="2 \leq k \leq n" /> a un diviseur premier ».</p>
                <p className="mb-2"><strong>Hérédité :</strong> Soit <LatexRenderer latex="n+1" />.</p>
                <ul className="list-disc pl-5 mt-1">
                  <li>Cas 1 : <LatexRenderer latex="n+1" /> est premier. Il est son propre diviseur premier. OK.</li>
                  <li>Cas 2 : <LatexRenderer latex="n+1" /> n'est pas premier. Alors il s'écrit <LatexRenderer latex="a \times b" /> avec <LatexRenderer latex="1 < a < n+1" />.</li>
                </ul>
                <p className="mt-2 text-sm">Comme <LatexRenderer latex="a \leq n" />, par hypothèse de récurrence forte, <LatexRenderer latex="a" /> admet un diviseur premier <LatexRenderer latex="p" />. Comme <LatexRenderer latex="p|a" /> et <LatexRenderer latex="a|n+1" />, alors <LatexRenderer latex="p|n+1" />.</p>
                <p className="font-bold text-emerald-700 mt-2">Dans tous les cas, n+1 a un diviseur premier.</p>
              </div>
            }
          />
        </div>


      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre1LogiqueEtRaisonnementFondamentauxExercicesPage;