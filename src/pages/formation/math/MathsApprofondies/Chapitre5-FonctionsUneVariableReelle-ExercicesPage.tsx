import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Star, Lightbulb, Target, Crown, BookOpen } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';

const Chapitre5FonctionsUneVariableReelleExercicesPage = () => {
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
              {id.replace(/[^0-9]/g, '')}
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
      chapterNumber={5}
      chapterTitle="Fonctions d'une variable réelle"
      description="Exercices sur les domaines de définition, la parité, les variations, les limites et la continuité."
      slug="fonctions-d-une-variable-reelle"
      activeSection="exercises"
      titleClassName="text-slate-800"
      showNavigation={true}
      previousChapter={{
        slug: "suites-numeriques",
        title: "Suites numériques"
      }}
      nextChapter={{
        slug: "continuite-derivabilite",
        title: "Continuité & Dérivabilité"
      }}
    >
      <div className="space-y-8">

        {/* Module 1 */}
        <div>
          <DifficultyHeader
            level="Module 1"
            title="Domaines et Compositions"
            icon={BookOpen}
            stars={1}
          />

          <ExerciseCard
            id="ex1"
            title="Exercice 1 - Compositions"
            difficulty="Moyen"
            content={
              <div>
                <p>Déterminer le domaine et l'expression de <LatexRenderer latex={"f \\circ g"} />, <LatexRenderer latex={"g \\circ f"} /> :</p>
                <div className="space-y-2 mt-4 ml-4">
                  <p><strong>1.</strong> <LatexRenderer latex={"f(x) = 2x^2 - x, \\quad g(x) = 3x + 2"} /></p>
                  <p><strong>2.</strong> <LatexRenderer latex={"f(x) = 1 - x^3, \\quad g(x) = 1/x"} /></p>
                  <p><strong>3.</strong> <LatexRenderer latex={"f(x) = \\sqrt{2x + 3}, \\quad g(x) = x^2 + 2"} /></p>
                </div>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p><strong>1.</strong> Polynômes sur <LatexRenderer latex={"\\mathbb{R}"} />. <LatexRenderer latex={"f(g(x)) = 18x^2+21x+6"} />. <LatexRenderer latex={"g(f(x)) = 6x^2-3x+2"} />.</p>
                <p><strong>2.</strong> <LatexRenderer latex={"f(g(x)) = 1 - 1/x^3"} /> sur <LatexRenderer latex={"\\mathbb{R}^*"} />. <LatexRenderer latex={"g(f(x)) = 1/(1-x^3)"} /> sur <LatexRenderer latex={"\\mathbb{R} \\setminus \\{1\\}"} />.</p>
                <p><strong>3.</strong> <LatexRenderer latex={"f(g(x)) = \\sqrt{2x^2+7}"} /> sur <LatexRenderer latex={"\\mathbb{R}"} />. <LatexRenderer latex={"g(f(x)) = 2x+5"} /> sur <LatexRenderer latex={"[-3/2, +\\infty["} />.</p>
              </div>
            }
          />

          <ExerciseCard
            id="ex2"
            title="Exercice 2 - Parité"
            difficulty="Moyen"
            content={
              <div>
                <p>Déterminer domaine et parité :</p>
                <div className="space-y-2 mt-4 ml-4">
                  <p><strong>1.</strong> <LatexRenderer latex={"f(x) = x + \\ln|x - 1| - \\ln|x + 1|"} /></p>
                  <p><strong>2.</strong> <LatexRenderer latex={"g(x) = x \\frac{e^x - 1}{e^x + 1}"} /></p>
                  <p><strong>3.</strong> <LatexRenderer latex={"h(x) = x^2 + x + 1"} /></p>
                  <p><strong>4.</strong> <LatexRenderer latex={"i(x) = \\cos(5x) - \\ln(1 - x^2)"} /></p>
                </div>
              </div>
            }
            correction={
              <div className="space-y-2">
                <p><strong>1.</strong> Impaire sur <LatexRenderer latex={"\\mathbb{R} \\setminus \\{\\pm 1\\}"} />.</p>
                <p><strong>2.</strong> Paire sur <LatexRenderer latex={"\\mathbb{R}"} />.</p>
                <p><strong>3.</strong> Ni l'un ni l'autre (0 n'est pas centre de symétrie si on regarde les images, ou juste contre-exemple).</p>
                <p><strong>4.</strong> Paire sur <LatexRenderer latex={"]-1, 1["} />.</p>
              </div>
            }
          />
        </div>

        {/* Module 2 */}
        <div>
          <DifficultyHeader
            level="Module 2"
            title="Équations et Inéquations"
            icon={Target}
            stars={2}
          />

          <ExerciseCard
            id="ex3"
            title="Exercice 3 - Équation paramétrique"
            difficulty="Moyen"
            content={
              <div>
                <p>Soit <LatexRenderer latex={"(E_m) : (m - 1)x^2 + 2mx + m + 2 = 0"} />.</p>
                <ol className="list-decimal ml-6 mt-2 space-y-1">
                  <li>Résoudre <LatexRenderer latex={"(E_0)"} /> et <LatexRenderer latex={"(E_1)"} />.</li>
                  <li>Pour quel <LatexRenderer latex={"m"} />, <LatexRenderer latex={"x=0"} /> est solution ?</li>
                  <li>Discuter du nombre de solutions selon <LatexRenderer latex={"m"} />.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2">
                <p><strong>1.</strong> <LatexRenderer latex={"m=0 \\implies x^2=2"} />. <LatexRenderer latex={"m=1 \\implies x=-3/2"} />.</p>
                <p><strong>2.</strong> <LatexRenderer latex={"x=0"} /> racine ssi <LatexRenderer latex={"m=-2"} />.</p>
                <p><strong>3.</strong> <LatexRenderer latex={"\\Delta = -4m+8"} />. 2 solutions si <LatexRenderer latex={"m < 2"} /> (et <LatexRenderer latex={"m \\neq 1"} />), 1 solution si <LatexRenderer latex={"m=2"} /> ou <LatexRenderer latex={"m=1"} />, 0 si <LatexRenderer latex={"m > 2"} />.</p>
              </div>
            }
          />

          <ExerciseCard
            id="ex4"
            title="Exercice 4 - Équations Exp/Ln"
            difficulty="Avancé"
            content={
              <div>
                <p>Résoudre :</p>
                <div className="ml-4 mt-2 grid grid-cols-1 gap-2">
                  <p>1. <LatexRenderer latex={"e^{x^2 + x - 1} = 1"} /></p>
                  <p>2. <LatexRenderer latex={"2e^{2x} - e^x - 1 = 0"} /></p>
                  <p>3. <LatexRenderer latex={"\\ln(e^{x+1}) = e^{x+1} + x"} /></p>
                  <p>4. <LatexRenderer latex={"e^{\\ln(x^2 + 1)} - \\ln(e^{1 - x^2}) = 1/2"} /></p>
                </div>
              </div>
            }
            correction={
              <div className="space-y-2">
                <p><strong>1.</strong> <LatexRenderer latex={"x^2+x-1=0"} />. Racines <LatexRenderer latex={"(-1 \\pm \\sqrt{5})/2"} />.</p>
                <p><strong>2.</strong> <LatexRenderer latex={"2X^2-X-1=0"} /> avec <LatexRenderer latex={"X=e^x"} />. <LatexRenderer latex={"X=1"} /> (donc <LatexRenderer latex={"x=0"} />) ou <LatexRenderer latex={"X=-1/2"} /> (impossible).</p>
                <p><strong>3.</strong> <LatexRenderer latex={"x+1 = e^{x+1}+x \\implies e^{x+1}=1 \\implies x=-1"} />.</p>
                <p><strong>4.</strong> <LatexRenderer latex={"x^2+1 - (1-x^2) = 1/2 \\implies 2x^2=1/2 \\implies x=\\pm 1/2"} />.</p>
              </div>
            }
          />

          <ExerciseCard
            id="ex5"
            title="Exercice 5 - Inéquations"
            difficulty="Moyen"
            content={
              <div>
                <p>Résoudre :</p>
                <p className="mt-2 ml-4">1. <LatexRenderer latex={"e^{1/x} \\geq e"} /> ; 2. <LatexRenderer latex={"e^{2x} \\leq e^x"} /> ; 3. <LatexRenderer latex={"e^{2x}e^{x^2} < 1"} /></p>
              </div>
            }
            correction={
              <div className="space-y-2">
                <p><strong>1.</strong> <LatexRenderer latex={"1/x \\geq 1 \\Leftrightarrow \\frac{1-x}{x} \\geq 0"} />. <LatexRenderer latex={"S = ]0, 1]"} />.</p>
                <p><strong>2.</strong> <LatexRenderer latex={"2x \\leq x \\implies x \\leq 0"} />.</p>
                <p><strong>3.</strong> <LatexRenderer latex={"2x+x^2 < 0 \\implies x(x+2) < 0"} />. <LatexRenderer latex={"S = ]-2, 0["} />.</p>
              </div>
            }
          />
        </div>

        {/* Module 3 - Approfondissement */}
        <div>
          <DifficultyHeader
            level="Module 3"
            title="Étude de Fonctions & Théorèmes"
            icon={Crown}
            stars={3}
            color="indigo"
          />

          <ExerciseCard
            id="ex6"
            title="Exercice 6 - Partie entière"
            difficulty="Avancé"
            content={
              <p>Montrer que <LatexRenderer latex={"\\forall n \\in \\mathbb{N}^*, \\forall x \\in \\mathbb{R}, \\lfloor \\frac{\\lfloor nx \\rfloor}{n} \\rfloor = \\lfloor x \\rfloor"} />.</p>
            }
            correction={
              <p>Par encadrement : <LatexRenderer latex={"\\lfloor x \\rfloor \\leq x < \\frac{\\lfloor nx \\rfloor + 1}{n}"} /> et <LatexRenderer latex={"\\frac{\\lfloor nx \\rfloor}{n} \\geq \\lfloor x \\rfloor"} />. On utilise la définition <LatexRenderer latex={"\\lfloor T \\rfloor = k \\iff k \\leq T < k+1"} /> avec <LatexRenderer latex={"k = \\lfloor x \\rfloor"} />.</p>
            }
          />

          <ExerciseCard
            id="ex7"
            title="Exercice 7 - Étude complète"
            difficulty="Avancé"
            content={
              <p>Étudier <LatexRenderer latex={"g(x) = \\frac{\\sqrt{x}}{\\ln x}"} /> sur <LatexRenderer latex={"]1, +\\infty["} />.</p>
            }
            correction={
              <p>Dérivée <LatexRenderer latex={"g'(x) = \\frac{\\ln x - 2}{2\\sqrt{x}(\\ln x)^2}"} />. S'annule en <LatexRenderer latex={"e^2"} />. Décroit puis croit. Min global <LatexRenderer latex={"e/2"} />.</p>
            }
          />

          <ExerciseCard
            id="ex8"
            title="Exercice 8 - Fonction puissance"
            difficulty="Avancé"
            content={
              <div>
                <p>Étudier <LatexRenderer latex={"f(x) = x^{1+1/x}"} /> sur <LatexRenderer latex={"\\mathbb{R}_+^*"} />.</p>
                <p>1. Domaine ? 2. Montrer <LatexRenderer latex={"\\ln x \\leq x-1"} />. 3. Variations.</p>
              </div>
            }
            correction={
              <div className="space-y-2">
                <p>Dérivée de <LatexRenderer latex={"\\ln f(x)"} /> ou directement <LatexRenderer latex={"f'(x) = f(x) \\frac{x+1-\\ln x}{x^2}"} />. Positive partout grâce à l'inégalité <LatexRenderer latex={"\\ln x \\leq x-1"} />. Fonction strictement croissante.</p>
              </div>
            }
          />

          <ExerciseCard
            id="ex9"
            title="Exercice 9 - Fonction constante"
            difficulty="Moyen"
            content={
              <p>Montrer que <LatexRenderer latex={"\\arctan(x) + \\arctan(1/x)"} /> est constante sur <LatexRenderer latex={"\\mathbb{R}_+^*"} /> et <LatexRenderer latex={"\\mathbb{R}_-^*"} />. Calculer les valeurs.</p>
            }
            correction={
              <p>Dérivée nulle. Valeur en 1 : <LatexRenderer latex={"\\pi/2"} />. Valeur en -1 : <LatexRenderer latex={"-\\pi/2"} />.</p>
            }
          />

          <ExerciseCard
            id="ex10"
            title="Exercice 10 - Parité (Approfondissement)"
            difficulty="Avancé"
            content={
              <div>
                <p>1. Propriétés sommes/produits fcts paires/impaires.</p>
                <p>2. Un polynôme quadratique à racines opposées est-il pair ?</p>
              </div>
            }
            correction={
              <div>
                <p>1. P+P=P, I+I=I, P*P=P, I*I=P, P*I=I.</p>
                <p>2. Oui, <LatexRenderer latex={"a(x-r)(x+r) = a(x^2-r^2)"} /> qui est pair.</p>
              </div>
            }
          />

          <ExerciseCard
            id="ex11"
            title="Exercice 11 - Décomposition unique"
            difficulty="Difficile"
            content={
              <p>Montrer toute fonction de <LatexRenderer latex={"\\mathbb{R}"} /> dans <LatexRenderer latex={"\\mathbb{R}"} /> se décompose de manière unique en somme d'une paire et d'une impaire.</p>
            }
            correction={
              <p><LatexRenderer latex={"f(x) = \\frac{f(x)+f(-x)}{2} + \\frac{f(x)-f(-x)}{2}"} />. La première est paire, la seconde impaire. Unicité par système linéaire.</p>
            }
          />

          <ExerciseCard
            id="ex12"
            title="Exercice 12 - Inégalité Logarithmique"
            difficulty="Difficile"
            content={
              <p>Montrer pour <LatexRenderer latex={"x,y > 0"} /> : <LatexRenderer latex={"\\ln(\\frac{x+y}{2}) \\geq \\frac{\\ln x + \\ln y}{2}"} />.</p>
            }
            correction={
              <p>Concavité de la fonction logarithme (Jensen) ou étude de fonction à une variable (fixer y).</p>
            }
          />

          <ExerciseCard
            id="ex13"
            title="Exercice 13 - Limites complexes"
            difficulty="Challenge"
            content={
              <div>
                <p>1. Limite de <LatexRenderer latex={"(\\frac{a^n+b^n}{2})^{1/n}"} />.</p>
                <p>2. En déduire la limite de <LatexRenderer latex={"(\\frac{a^{1/n}+b^{1/n}}{2})^n"} />.</p>
              </div>
            }
            correction={
              <div className="space-y-2">
                <p>1. Tend vers <LatexRenderer latex={"\\max(a,b)"} />.</p>
                <p>2. Tend vers <LatexRenderer latex={"\\sqrt{ab}"} /> (moyenne géométrique) via DL de l'exponentielle/ln.</p>
              </div>
            }
          />

        </div>
      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre5FonctionsUneVariableReelleExercicesPage;