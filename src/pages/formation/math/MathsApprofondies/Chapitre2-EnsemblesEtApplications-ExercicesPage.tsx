import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Star, Lightbulb, Target, Crown } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';

const Chapitre2EnsemblesEtApplicationsExercicesPage = () => {
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
      chapterNumber={2}
      chapterTitle="Ensembles et applications"
      description="Opérations ensemblistes, relations, injections–surjections–bijections"
      slug="ensembles-et-applications"
      activeSection="exercises"
      titleClassName="text-slate-800"
      showNavigation={true}
      previousChapter={{
        slug: "elements-de-logique",
        title: "Éléments de logique"
      }}
      nextChapter={{
        slug: "sommes-produits-coefficients-binomiaux",
        title: "Sommes, produits & coefficients binomiaux"
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
            title="Exercice 1 - Inclusion et parties"
            difficulty="Niveau: Facile"
            content={
              <div>
                <p className="mb-2">Soient <LatexRenderer latex="A = \{2, 4, 6\}" /> et <LatexRenderer latex="B = \{2, 3, 4, 5\}" />.</p>
                <p className="mb-1">a) Vérifier si <LatexRenderer latex="A" /> est inclus dans <LatexRenderer latex="B" /> et si <LatexRenderer latex="B" /> est inclus dans <LatexRenderer latex="A" />.</p>
                <p>b) Donner l'ensemble des parties de <LatexRenderer latex="A" />.</p>
              </div>
            }
            correction={
              <div>
                <p className="mb-3">Nous rappelons qu'un ensemble A est inclus dans un ensemble B si chaque élément de A appartient également à B.</p>
                <p className="mb-2"><strong>a)</strong> Pour vérifier si A est inclus dans B, nous examinons chaque élément de A :</p>
                <ul className="mb-3 ml-4 list-disc space-y-1">
                  <li>L'élément 2 appartient à B ✓</li>
                  <li>L'élément 4 appartient à B ✓</li>
                  <li>L'élément 6 n'appartient pas à B ✗</li>
                </ul>
                <p className="mb-3">Par conséquent, A n'est pas inclus dans B.</p>
                <p className="mb-2">Pour B inclus dans A : 3 et 5 n'appartiennent pas à A, donc B n'est pas inclus dans A.</p>
                <p className="mb-2"><strong>b)</strong> L'ensemble des parties de A (avec 3 éléments, donc <LatexRenderer latex="2^3 = 8" /> parties) :</p>
                <div className="bg-slate-50 p-3 rounded border border-slate-100">
                  <p><LatexRenderer latex="\varnothing" /></p>
                  <p><LatexRenderer latex="\{2\}, \{4\}, \{6\}" /></p>
                  <p><LatexRenderer latex="\{2,4\}, \{2,6\}, \{4,6\}" /></p>
                  <p><LatexRenderer latex="\{2,4,6\}" /></p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="facile-2"
            title="Exercice 2 - Égalité ensembles"
            difficulty="Niveau: Facile"
            content={
              <div>
                <p className="mb-2">Soient <LatexRenderer latex="C = \{x \in \mathbb{N} : x^2 \leq 9\}" /> et <LatexRenderer latex="D = \{0, 1, 2, 3\}" />.</p>
                <p className="mb-1">a) Écrire explicitement C et comparer avec D.</p>
                <p>b) Ces ensembles sont-ils égaux ?</p>
              </div>
            }
            correction={
              <div>
                <p className="mb-2"><strong>a)</strong> Pour déterminer les éléments de C, nous résolvons <LatexRenderer latex="x^2 \leq 9" /> où <LatexRenderer latex="x \in \mathbb{N}" /> :</p>
                <ul className="mb-3 ml-4 list-disc space-y-1">
                  <li><LatexRenderer latex="x = 0 \Rightarrow 0^2 = 0 \leq 9" /> ✓</li>
                  <li><LatexRenderer latex="x = 1 \Rightarrow 1^2 = 1 \leq 9" /> ✓</li>
                  <li><LatexRenderer latex="x = 2 \Rightarrow 2^2 = 4 \leq 9" /> ✓</li>
                  <li><LatexRenderer latex="x = 3 \Rightarrow 3^2 = 9 \leq 9" /> ✓</li>
                  <li><LatexRenderer latex="x = 4 \Rightarrow 4^2 = 16 > 9" /> ✗</li>
                </ul>
                <p className="mb-3">Par conséquent, <LatexRenderer latex="C = \{0, 1, 2, 3\}" />.</p>
                <p><strong>b)</strong> Deux ensembles sont égaux s'ils contiennent exactement les mêmes éléments. Puisque C et D ont les mêmes éléments, ils sont égaux : <LatexRenderer latex="C = D" />.</p>
              </div>
            }
          />

          <ExerciseCard
            id="facile-3"
            title="Exercice 3 - Opérations basiques"
            difficulty="Niveau: Facile"
            content={
              <div>
                <p className="mb-2">Soient <LatexRenderer latex="A = \{1, 3, 5\}" /> et <LatexRenderer latex="B = \{3, 4, 5, 6\}" />.</p>
                <p className="mb-1">a) Calculer <LatexRenderer latex="A \cap B" />, <LatexRenderer latex="A \cup B" />, et <LatexRenderer latex="A \setminus B" />.</p>
                <p>b) Calculer le complémentaire de A dans <LatexRenderer latex="E = \{1,2,3,4,5,6\}" />.</p>
              </div>
            }
            correction={
              <div>
                <p className="mb-2"><strong>a)</strong></p>
                <ul className="mb-3 ml-4 list-disc space-y-1">
                  <li><LatexRenderer latex="A \cap B = \{3, 5\}" /> (éléments communs)</li>
                  <li><LatexRenderer latex="A \cup B = \{1, 3, 4, 5, 6\}" /> (tous les éléments)</li>
                  <li><LatexRenderer latex="A \setminus B = \{1\}" /> (éléments de A non dans B)</li>
                </ul>
                <p className="mb-2"><strong>b)</strong> Le complémentaire de A dans E :</p>
                <p className="bg-slate-50 p-2 rounded border border-slate-100 inline-block"><LatexRenderer latex="\overline{A} = E \setminus A = \{2, 4, 6\}" /></p>
              </div>
            }
          />

          <ExerciseCard
            id="facile-4"
            title="Exercice 4 - Produit cartésien simple"
            difficulty="Niveau: Facile"
            content={
              <p>Soient <LatexRenderer latex="X = \{a, b\}" /> et <LatexRenderer latex="Y = \{1, 2, 3\}" />. Lister les éléments de <LatexRenderer latex="X \times Y" /> et donner son cardinal.</p>
            }
            correction={
              <div>
                <p className="mb-2">Le produit cartésien <LatexRenderer latex="X \times Y" /> est l'ensemble de tous les couples ordonnés <LatexRenderer latex="(x, y)" /> où <LatexRenderer latex="x \in X" /> et <LatexRenderer latex="y \in Y" />.</p>
                <p className="mb-2">Éléments de <LatexRenderer latex="X \times Y" /> :</p>
                <div className="bg-slate-50 p-3 rounded border border-slate-100 mb-2">
                  <p><LatexRenderer latex="(a, 1), (a, 2), (a, 3)" /></p>
                  <p><LatexRenderer latex="(b, 1), (b, 2), (b, 3)" /></p>
                </div>
                <p>Le cardinal est <LatexRenderer latex="|X| \times |Y| = 2 \times 3 = 6" />.</p>
              </div>
            }
          />

          <ExerciseCard
            id="facile-5"
            title="Exercice 5 - Complémentaire basique"
            difficulty="Niveau: Facile"
            content={
              <p>Dans l'ensemble <LatexRenderer latex="E = \{1, 2, 3, 4\}" />, avec <LatexRenderer latex="A = \{1, 3\}" />. Calculer le complémentaire de A.</p>
            }
            correction={
              <div>
                <p className="mb-2">Le complémentaire de A dans E est l'ensemble des éléments de E qui ne sont pas dans A.</p>
                <p className="font-medium"><LatexRenderer latex="\overline{A} = E \setminus A = \{2, 4\}" /></p>
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
            id="inter-1"
            title="Exercice 6 - Distributivité"
            difficulty="Niveau: Intermédiaire"
            content={
              <p>Montrer que <LatexRenderer latex="A \cap (B \cup C) = (A \cap B) \cup (A \cap C)" />.</p>
            }
            correction={
              <div>
                <p className="mb-3">Nous prouvons cette égalité par double inclusion.</p>
                <div className="space-y-4">
                  <div>
                    <p className="mb-1 font-semibold text-slate-800">1) Montrons que <LatexRenderer latex="A \cap (B \cup C) \subset (A \cap B) \cup (A \cap C)" /></p>
                    <p className="text-sm">Soit <LatexRenderer latex="x \in A \cap (B \cup C)" />. Alors <LatexRenderer latex="x \in A" /> et <LatexRenderer latex="x \in B \cup C" />. Donc <LatexRenderer latex="x \in B" /> ou <LatexRenderer latex="x \in C" />.</p>
                    <ul className="list-disc pl-5 mt-1 text-sm bg-slate-50 p-2 rounded">
                      <li>Si <LatexRenderer latex="x \in B" />, alors <LatexRenderer latex="x \in A \cap B" />.</li>
                      <li>Si <LatexRenderer latex="x \in C" />, alors <LatexRenderer latex="x \in A \cap C" />.</li>
                    </ul>
                    <p className="mt-1 text-sm">Dans les deux cas, <LatexRenderer latex="x \in (A \cap B) \cup (A \cap C)" />.</p>
                  </div>
                  <div className="border-t border-slate-100 pt-2">
                    <p className="mb-1 font-semibold text-slate-800">2) Montrons que <LatexRenderer latex="(A \cap B) \cup (A \cap C) \subset A \cap (B \cup C)" /></p>
                    <p className="text-sm">Soit <LatexRenderer latex="x \in (A \cap B) \cup (A \cap C)" />. Alors <LatexRenderer latex="x \in A \cap B" /> ou <LatexRenderer latex="x \in A \cap C" />.</p>
                    <p className="text-sm mt-1">Dans les deux cas, <LatexRenderer latex="x \in A" /> et (<LatexRenderer latex="x \in B" /> ou <LatexRenderer latex="x \in C" />), donc <LatexRenderer latex="x \in B \cup C" />.</p>
                    <p className="text-sm mt-1">Par conséquent, <LatexRenderer latex="x \in A \cap (B \cup C)" />.</p>
                  </div>
                </div>
                <p className="mt-3 font-medium text-emerald-700">Les deux inclusions étant démontrées, l'égalité est établie.</p>
              </div>
            }
          />

          <ExerciseCard
            id="inter-2"
            title="Exercice 7 - Applications basiques"
            difficulty="Niveau: Intermédiaire"
            content={
              <div>
                <p className="mb-2">Soit la fonction <LatexRenderer latex="f : \mathbb{R} \to \mathbb{R}" /> définie par <LatexRenderer latex="f(x) = 3x + 2" />.</p>
                <p className="mb-1">a) Calculer <LatexRenderer latex="f(-1)" />, <LatexRenderer latex="f(0)" /> et <LatexRenderer latex="f(2)" />.</p>
                <p>b) Montrer que f est injective et surjective.</p>
              </div>
            }
            correction={
              <div>
                <p className="mb-2"><strong>a)</strong> Calculs :</p>
                <div className="flex gap-4 mb-3 bg-slate-50 p-2 rounded justify-around">
                  <span><LatexRenderer latex="f(-1) = -1" /></span>
                  <span><LatexRenderer latex="f(0) = 2" /></span>
                  <span><LatexRenderer latex="f(2) = 8" /></span>
                </div>
                <div className="space-y-2">
                  <p><strong>b) Injectivité :</strong> Supposons <LatexRenderer latex="f(x) = f(y)" />. Alors <LatexRenderer latex="3x + 2 = 3y + 2 \Rightarrow 3x = 3y \Rightarrow x = y" />. Donc f est injective.</p>
                  <p><strong>Surjectivité :</strong> Soit <LatexRenderer latex="y \in \mathbb{R}" /> quelconque. Résolvons <LatexRenderer latex="f(x) = y" /> : <LatexRenderer latex="3x + 2 = y \Rightarrow 3x = y - 2 \Rightarrow x = \frac{y-2}{3}" />.</p>
                  <p>Cette solution est bien dans <LatexRenderer latex="\mathbb{R}" />. Tout y a un antécédent, donc f est surjective.</p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="inter-3"
            title="Exercice 8 - Composition"
            difficulty="Niveau: Intermédiaire"
            content={
              <div>
                <p className="mb-2">Soient <LatexRenderer latex="f : \mathbb{R} \to \mathbb{R}" /> définie par <LatexRenderer latex="f(x) = x + 2" />, et <LatexRenderer latex="g : \mathbb{R} \to \mathbb{R}" /> définie par <LatexRenderer latex="g(x) = 2x - 1" />.</p>
                <p className="mb-1">a) Calculer <LatexRenderer latex="f \circ g" /> et <LatexRenderer latex="g \circ f" />.</p>
                <p>b) Ces compositions sont-elles égales ?</p>
              </div>
            }
            correction={
              <div>
                <p className="mb-2"><strong>a)</strong> Calculs des compositions :</p>
                <div className="bg-slate-50 p-3 rounded border border-slate-100 mb-3 space-y-2">
                  <p><LatexRenderer latex="(f \circ g)(x) = f(g(x)) = f(2x-1) = (2x-1) + 2 = 2x + 1" /></p>
                  <p><LatexRenderer latex="(g \circ f)(x) = g(f(x)) = g(x+2) = 2(x+2) - 1 = 2x + 3" /></p>
                </div>
                <p><strong>b)</strong> Les expressions sont différentes (<LatexRenderer latex="2x + 1 \neq 2x + 3" />). Par conséquent, <LatexRenderer latex="f \circ g \neq g \circ f" />.</p>
              </div>
            }
          />

          <ExerciseCard
            id="inter-4"
            title="Exercice 9 - Lois de Morgan"
            difficulty="Niveau: Intermédiaire"
            content={
              <p>Montrer que <LatexRenderer latex="\overline{A \cup B} = \overline{A} \cap \overline{B}" />.</p>
            }
            correction={
              <div>
                <p className="mb-3">Nous supposons un univers E fixe. Nous prouvons par double inclusion.</p>
                <p className="mb-2"><strong>1) Montrons que <LatexRenderer latex="\overline{A \cup B} \subset \overline{A} \cap \overline{B}" /></strong></p>
                <p className="mb-3 text-sm">Soit <LatexRenderer latex="x \in \overline{A \cup B}" />. Alors <LatexRenderer latex="x \notin A \cup B" />, donc <LatexRenderer latex="x \notin A" /> et <LatexRenderer latex="x \notin B" />. Par conséquent, <LatexRenderer latex="x \in \overline{A}" /> et <LatexRenderer latex="x \in \overline{B}" />, soit <LatexRenderer latex="x \in \overline{A} \cap \overline{B}" />.</p>
                <p className="mb-2"><strong>2) Montrons que <LatexRenderer latex="\overline{A} \cap \overline{B} \subset \overline{A \cup B}" /></strong></p>
                <p className="mb-3 text-sm">Soit <LatexRenderer latex="x \in \overline{A} \cap \overline{B}" />. Alors <LatexRenderer latex="x \notin A" /> et <LatexRenderer latex="x \notin B" />, donc <LatexRenderer latex="x \notin A \cup B" /> (il n'est ni dans l'un ni dans l'autre), soit <LatexRenderer latex="x \in \overline{A \cup B}" />.</p>
                <p className="font-bold text-emerald-700">Les deux inclusions démontrent l'égalité.</p>
              </div>
            }
          />
        </div>

        {/* Niveau Concours */}
        <div>
          <DifficultyHeader
            level="Niveau Concours"
            title="Type concours BCE/Ecricome"
            icon={Target}
            stars={3}
            color="amber"
          />

          <ExerciseCard
            id="concours-1"
            title="Exercice 10 - Cardinal applications"
            difficulty="Niveau: Concours"
            content={
              <p>Soient <LatexRenderer latex="E = \{1,2\}" /> et <LatexRenderer latex="F = \{a,b,c\}" />. Quel est le nombre d'applications de E dans F ? Quel est le nombre d'injections ?</p>
            }
            correction={
              <div>
                <p className="mb-2"><strong>Applications :</strong> Pour chaque élément de E (2 éléments), nous devons choisir une image dans F (3 choix).</p>
                <p className="mb-3">Total : <LatexRenderer latex="3 \times 3 = 3^2 = 9" /> applications.</p>
                <p className="mb-2"><strong>Injections :</strong> Les images doivent être distinctes.</p>
                <ul className="list-disc pl-5 mb-2">
                  <li>Pour l'image de 1 : 3 choix.</li>
                  <li>Pour l'image de 2 : 2 choix restants (car distinct de l'image de 1).</li>
                </ul>
                <p>Total : <LatexRenderer latex="3 \times 2 = 6" /> injections.</p>
              </div>
            }
          />

          <ExerciseCard
            id="concours-2"
            title="Exercice 11 - Bijection dénombrable"
            difficulty="Niveau: Concours"
            content={
              <p>Montrer qu'il existe une bijection entre <LatexRenderer latex="\mathbb{N}" /> et l'ensemble des multiples de 4 dans <LatexRenderer latex="\mathbb{N}" />. Donner un exemple.</p>
            }
            correction={
              <div>
                <p className="mb-2">Soit <LatexRenderer latex="f : \mathbb{N} \to 4\mathbb{N}" /> définie par <LatexRenderer latex="f(n) = 4n" />.</p>
                <div className="bg-slate-50 p-3 rounded border border-slate-100 my-2">
                  <p className="mb-2"><strong>Injectivité :</strong> Supposons <LatexRenderer latex="4n = 4m" />. En divisant par 4, cela implique <LatexRenderer latex="n = m" />.</p>
                  <p><strong>Surjectivité :</strong> Tout multiple de 4 s'écrit <LatexRenderer latex="y = 4k" />. Il a bien un antécédent <LatexRenderer latex="k" /> dans <LatexRenderer latex="\mathbb{N}" />.</p>
                </div>
                <p>Par conséquent, f est bijective.</p>
                <p className="mt-2 text-sm text-slate-500">Exemple : <LatexRenderer latex="0 \mapsto 0, 1 \mapsto 4, 2 \mapsto 8..." /></p>
              </div>
            }
          />

          <ExerciseCard
            id="concours-3"
            title="Exercice 12 - Bijection monotone"
            difficulty="Niveau: Concours"
            content={
              <p>Montrer que si f est continue et strictement monotone sur un intervalle I, alors f est une bijection sur son image <LatexRenderer latex="f(I)" />.</p>
            }
            correction={
              <div>
                <p className="mb-2"><strong>Injectivité :</strong> Supposons <LatexRenderer latex="f(x) = f(y)" /> avec <LatexRenderer latex="x \neq y" />. Si <LatexRenderer latex="x < y" /> (par exemple), la stricte monotonie impose <LatexRenderer latex="f(x) < f(y)" /> (ou l'inverse), ce qui contredit l'égalité. Donc <LatexRenderer latex="x = y" />.</p>
                <p className="mb-2"><strong>Surjectivité sur <LatexRenderer latex="f(I)" /> :</strong> Par définition de l'image <LatexRenderer latex="f(I)" />, tout élément <LatexRenderer latex="z \in f(I)" /> possède un antécédent dans I.</p>
                <p className="text-sm italic text-slate-500">Note: Le théorème des valeurs intermédiaires assure que l'image est bien un intervalle.</p>
              </div>
            }
          />

          <ExerciseCard
            id="concours-4"
            title="Exercice 13 - Dénombrabilité Q"
            difficulty="Niveau: Concours"
            content={
              <p>Montrer que l'ensemble des rationnels <LatexRenderer latex="\mathbb{Q}" /> est dénombrable, c'est-à-dire qu'il existe une bijection avec <LatexRenderer latex="\mathbb{N}" />.</p>
            }
            correction={
              <div>
                <p className="mb-2">Les rationnels sont l'union des positifs, négatifs et zéro. Nous construisons une énumération "en diagonale" (argument de Cantor) :</p>
                <p className="mb-2">Listons les fractions irréductibles <LatexRenderer latex="p/q" /> par somme <LatexRenderer latex="p+q" /> croissante :</p>
                <ul className="mb-3 ml-4 list-disc space-y-1 bg-slate-50 p-2 rounded">
                  <li>Somme 2 : <LatexRenderer latex="1/1" /> (1)</li>
                  <li>Somme 3 : <LatexRenderer latex="1/2, 2/1" /> (2)</li>
                  <li>Somme 4 : <LatexRenderer latex="1/3, 3/1" /> (2)</li>
                </ul>
                <p>En ajoutant les signes et 0, on peut numéroter tous les rationnels, définissant ainsi une bijection avec <LatexRenderer latex="\mathbb{N}" />.</p>
              </div>
            }
          />
        </div>

        {/* Niveau Dur */}
        <div>
          <DifficultyHeader
            level="Niveau Dur"
            title="Niveau parisienne"
            icon={Crown}
            stars={4}
            color="purple"
          />

          <ExerciseCard
            id="dur-1"
            title="Exercice 14 - Non-dénombrabilité de R"
            difficulty="Niveau: Dur"
            content={
              <p>Montrer qu'il n'existe pas de bijection entre <LatexRenderer latex="\mathbb{N}" /> et <LatexRenderer latex="\mathbb{R}" />, en utilisant l'argument de la diagonale de Cantor.</p>
            }
            correction={
              <div>
                <p className="mb-2">Supposons par absurde qu'il existe une bijection énumérant les réels de <LatexRenderer latex="[0,1]" /> : <LatexRenderer latex="x_1, x_2, x_3..." />.</p>
                <p className="mb-2">Chaque <LatexRenderer latex="x_n" /> a un développement décimal <LatexRenderer latex="0.d_{n,1}d_{n,2}d_{n,3}..." />.</p>
                <p className="mb-2">Construisons un nombre <LatexRenderer latex="y = 0.y_1y_2y_3..." /> tel que :</p>
                <div className="bg-slate-50 p-2 rounded border border-slate-100 mb-2">
                  <p><LatexRenderer latex="y_n = 1" /> si <LatexRenderer latex="d_{n,n} \ne 1" /></p>
                  <p><LatexRenderer latex="y_n = 2" /> si <LatexRenderer latex="d_{n,n} = 1" /></p>
                </div>
                <p>Alors <LatexRenderer latex="y" /> diffère de <LatexRenderer latex="x_n" /> par au moins sa <LatexRenderer latex="n" />-ième décimale. Donc <LatexRenderer latex="y" /> n'est dans la liste. Contradiction.</p>
              </div>
            }
          />

          <ExerciseCard
            id="dur-2"
            title="Exercice 15 - Puissance P(N)"
            difficulty="Niveau: Dur"
            content={
              <p>Montrer que le cardinal de l'ensemble des parties de <LatexRenderer latex="\mathbb{N}" /> est strictement supérieur au cardinal de <LatexRenderer latex="\mathbb{N}" />.</p>
            }
            correction={
              <div>
                <p className="mb-2">Supposons par absurde une bijection <LatexRenderer latex="f : \mathbb{N} \to \mathcal{P}(\mathbb{N})" />.</p>
                <p className="mb-2">Considérons l'ensemble "menteur" : <LatexRenderer latex="S = \{n \in \mathbb{N} : n \notin f(n)\}" />.</p>
                <p className="mb-2"><LatexRenderer latex="S" /> est une partie de <LatexRenderer latex="\mathbb{N}" />, donc elle doit avoir un antécédent <LatexRenderer latex="m" /> par <LatexRenderer latex="f" /> (i.e <LatexRenderer latex="f(m) = S" />).</p>
                <div className="border-l-2 border-red-200 pl-3 my-2">
                  <p>Si <LatexRenderer latex="m \in S" /> : alors par définition de S, <LatexRenderer latex="m \notin f(m) = S" />. Contradiction.</p>
                  <p>Si <LatexRenderer latex="m \notin S" /> : alors par définition de S, <LatexRenderer latex="m \in S" />. Contradiction.</p>
                </div>
                <p>Donc <LatexRenderer latex="S" /> n'a pas d'antécédent. <LatexRenderer latex="\mathcal{P}(\mathbb{N})" /> est "plus grand" que <LatexRenderer latex="\mathbb{N}" />.</p>
              </div>
            }
          />
        </div>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre2EnsemblesEtApplicationsExercicesPage;