import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Star, Lightbulb, Target, Crown } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';

const Chapitre4SuitesNumeriquesExercicesPage = () => {
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
      chapterNumber={4}
      chapterTitle="Suites numériques"
      description="Exercices progressifs pour maîtriser les suites, la récurrence et la convergence."
      slug="suites-numeriques"
      activeSection="exercises"
      titleClassName="text-slate-800"
      showNavigation={true}
      previousChapter={{
        slug: "sommes-produits-coefficients-binomiaux",
        title: "Sommes, produits & binôme"
      }}
      nextChapter={{
        slug: "fonctions-une-variable-reelle",
        title: "Fonctions d'une variable réelle"
      }}
    >
      <div className="space-y-8">

        {/* Niveau Facile - Récurrences */}
        <div>
          <DifficultyHeader
            level="Module 1"
            title="Raisonnement par récurrence"
            icon={Lightbulb}
            stars={1}
          />

          <ExerciseCard
            id="ex1"
            title="Exercice 1"
            difficulty="Facile"
            content={
              <div>
                <p>Soit <LatexRenderer latex={"(u_n)_{n \\in \\mathbb{N}}"} /> la suite définie par :</p>
                <div className="text-center my-4">
                  <LatexRenderer latex={"u_0 = 2, \\quad u_{n+1} = 5u_n + 4 \\quad \\text{pour tout } n \\in \\mathbb{N}."} />
                </div>
                <p>Montrer que, pour tout <LatexRenderer latex={"n \\in \\mathbb{N}"} />, on a <LatexRenderer latex={"u_n > 0"} />.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <div>
                  <strong className="text-slate-900 font-semibold">Démonstration par récurrence :</strong>
                  <div className="mt-2 text-slate-700">
                    <p><strong>Initialisation (n=0) :</strong> <LatexRenderer latex={"u_0 = 2 > 0"} />. Vrai.</p>
                    <p className="mt-2"><strong>Hérédité :</strong> Supposons <LatexRenderer latex={"u_n > 0"} />. Alors <LatexRenderer latex={"5u_n > 0"} /> donc <LatexRenderer latex={"u_{n+1} = 5u_n + 4 > 4 > 0"} />.</p>
                    <p className="mt-2"><strong>Conclusion :</strong> <LatexRenderer latex={"\\forall n, u_n > 0"} />.</p>
                  </div>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="ex2"
            title="Exercice 2"
            difficulty="Moyen"
            content={
              <div>
                <p>Soit <LatexRenderer latex={"(u_n)_{n \\in \\mathbb{N}}"} /> la suite définie par :</p>
                <div className="text-center my-4">
                  <LatexRenderer latex={"u_0 = -3, \\quad u_{n+1} = 5 - 4u_n."} />
                </div>
                <p>Montrer que <LatexRenderer latex={"u_n = (-4)^{n+1} + 1"} /> pour tout <LatexRenderer latex={"n \\in \\mathbb{N}"} />.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <div>
                  <strong className="text-slate-900 font-semibold">Initialisation :</strong>
                  <p><LatexRenderer latex={"u_0 = -3"} /> et <LatexRenderer latex={"(-4)^{0+1} + 1 = -4 + 1 = -3"} />. Vrai.</p>
                </div>
                <div>
                  <strong className="text-slate-900 font-semibold">Hérédité :</strong>
                  <p>Supposons <LatexRenderer latex={"u_n = (-4)^{n+1} + 1"} />.</p>
                  <p className="mt-2 text-center"><LatexRenderer latex={"u_{n+1} = 5 - 4((-4)^{n+1} + 1) = 5 - 4(-4)^{n+1} - 4 = 1 + (-4)(-4)^{n+1} = 1 + (-4)^{n+2}"} /></p>
                  <p className="mt-2">Ce qui correspond à la formule au rang <LatexRenderer latex={"n+1"} />.</p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="ex3"
            title="Exercice 3"
            difficulty="Moyen"
            content={
              <div>
                <p>Soit <LatexRenderer latex={"(u_n)_{n \\in \\mathbb{N}}"} /> la suite définie par :</p>
                <div className="text-center my-4">
                  <LatexRenderer latex={"u_0 = \\frac{1}{2}, \\quad u_{n+1} = \\sqrt{\\frac{1 + u_n}{2}}."} />
                </div>
                <p>Montrer que <LatexRenderer latex={"0 \\leq u_n \\leq 1"} /> pour tout <LatexRenderer latex={"n \\in \\mathbb{N}"} />.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <div>
                  <strong className="text-slate-900 font-semibold">Récurrence :</strong>
                  <p>Init : <LatexRenderer latex={"1/2 \\in [0,1]"} />. OK.</p>
                  <p className="mt-2">Hérédité : Si <LatexRenderer latex={"0 \\leq u_n \\leq 1"} />, alors <LatexRenderer latex={"1 \\leq 1 + u_n \\leq 2"} />, donc <LatexRenderer latex={"1/2 \\leq \\frac{1+u_n}{2} \\leq 1"} />.
                    En prenant la racine, <LatexRenderer latex={"\\frac{1}{\\sqrt{2}} \\leq u_{n+1} \\leq 1"} />. Comme <LatexRenderer latex={"\\frac{1}{\\sqrt{2}} > 0"} />, on a bien <LatexRenderer latex={"0 \\leq u_{n+1} \\leq 1"} />.</p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="ex4"
            title="Exercice 4"
            difficulty="Difficile"
            content={
              <div>
                <p>Soit <LatexRenderer latex={"(u_n)_{n \\in \\mathbb{N}}"} /> définie par :</p>
                <div className="text-center my-4">
                  <LatexRenderer latex={"u_0 = 1, \\quad u_1 = 1, \\quad u_{n+2} = 2u_{n+1} - u_n - 2"} />
                </div>
                <div className="space-y-2">
                  <p><strong>1.</strong> Calculer <LatexRenderer latex={"u_2"} /> et <LatexRenderer latex={"u_3"} />.</p>
                  <p><strong>2.</strong> Montrer que la suite est décroissante : <LatexRenderer latex={"u_{n+1} \\leq u_n"} />.</p>
                </div>
              </div>
            }
            correction={
              <div className="space-y-4">
                <div>
                  <strong className="text-slate-900 font-semibold">1. Calculs :</strong>
                  <p><LatexRenderer latex={"u_2 = 2(1) - 1 - 2 = -1"} /></p>
                  <p><LatexRenderer latex={"u_3 = 2(-1) - 1 - 2 = -5"} /></p>
                </div>
                <div>
                  <strong className="text-slate-900 font-semibold">2. Décroissance (Récurrence) :</strong>
                  <p>Init : <LatexRenderer latex={"u_1 = 1 \\leq u_0 = 1"} />. Vrai.</p>
                  <p>Hérédité : Supposons <LatexRenderer latex={"u_{n+1} \\leq u_n"} />. On étudie <LatexRenderer latex={"u_{n+2} - u_{n+1}"} />.</p>
                  <p className="text-center mt-2"><LatexRenderer latex={"u_{n+2} - u_{n+1} = (2u_{n+1} - u_n - 2) - u_{n+1} = u_{n+1} - u_n - 2"} /></p>
                  <p>Par hypothèse <LatexRenderer latex={"u_{n+1} - u_n \\leq 0"} />, donc <LatexRenderer latex={"u_{n+2} - u_{n+1} \\leq -2 < 0"} />.</p>
                  <p>D'où la décroissance.</p>
                </div>
              </div>
            }
          />
        </div>

        {/* Module 2 - Suites définies par u_{n+1} = f(u_n) */}
        <div>
          <DifficultyHeader
            level="Module 2"
            title="Étude de suites récurrentes"
            icon={Target}
            stars={2}
          />

          <ExerciseCard
            id="ex5"
            title="Exercice 5 - Suite homographique"
            difficulty="Difficile"
            content={
              <div>
                <p>Soit <LatexRenderer latex={"(u_n)"} /> définie par <LatexRenderer latex={"u_0 = 3, u_{n+1} = \\frac{5u_n - 4}{u_n + 1}"} />.</p>
                <ol className="list-decimal ml-6 mt-4 space-y-2">
                  <li>Montrer que <LatexRenderer latex={"u_n > 2"} /> pour tout <LatexRenderer latex={"n"} />.</li>
                  <li>On pose <LatexRenderer latex={"v_n = \\frac{1}{u_n - 2}"} />. Montrer que <LatexRenderer latex={"(v_n)"} /> est arithmétique.</li>
                  <li>Exprimer <LatexRenderer latex={"u_n"} /> en fonction de <LatexRenderer latex={"n"} />.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p><strong>1. Minoration :</strong> Récurrence facile. <LatexRenderer latex={"u_{n+1} - 2 = \\frac{3(u_n-2)}{u_n+1}"} />. Si <LatexRenderer latex={"u_n > 2"} />, numérateur et dénominateur positifs.</p>
                <p><strong>2. Suite arithmétique :</strong></p>
                <p className="text-center"><LatexRenderer latex={"v_{n+1} - v_n = \\frac{1}{u_{n+1}-2} - \\frac{1}{u_n-2} = \\frac{u_n+1}{3(u_n-2)} - \\frac{3}{3(u_n-2)} = \\frac{u_n-2}{3(u_n-2)} = \\frac{1}{3}"} /></p>
                <p>Donc <LatexRenderer latex={"(v_n)"} /> arithmétique de raison <LatexRenderer latex={"1/3"} /> et premier terme <LatexRenderer latex={"v_0 = 1/(3-2) = 1"} />.</p>
                <p><strong>3. Expression :</strong> <LatexRenderer latex={"v_n = 1 + n/3 = \\frac{n+3}{3}"} />.</p>
                <p>On inverse : <LatexRenderer latex={"u_n = 2 + 1/v_n = 2 + \\frac{3}{n+3} = \\frac{2n+9}{n+3}"} />.</p>
              </div>
            }
          />

          <ExerciseCard
            id="ex6"
            title="Exercice 6 - Suite explicite"
            difficulty="Facile"
            content={
              <div>
                <p>Soit <LatexRenderer latex={"u_n = 2n + 5"} />. Montrer qu'elle est strictement croissante.</p>
              </div>
            }
            correction={
              <div className="text-slate-700">
                <LatexRenderer latex={"u_{n+1} - u_n = (2(n+1)+5) - (2n+5) = 2 > 0"} />. CQFD.
              </div>
            }
          />

          <ExerciseCard
            id="ex7"
            title="Exercice 7 - Suite explicite"
            difficulty="Facile"
            content={
              <div>
                <p>Soit <LatexRenderer latex={"v_n = \\frac{1}{n+2}"} />. Montrer qu'elle est strictement décroissante.</p>
              </div>
            }
            correction={
              <div className="text-slate-700">
                <LatexRenderer latex={"v_{n+1} - v_n = \\frac{1}{n+3} - \\frac{1}{n+2} = \\frac{-1}{(n+2)(n+3)} < 0"} />.
              </div>
            }
          />

          <ExerciseCard
            id="ex8"
            title="Exercice 8"
            difficulty="Moyen"
            content={
              <div>
                <p><LatexRenderer latex={"w_0=1, w_{n+1} = \\frac{w_n+4}{2}"} />. Montrer <LatexRenderer latex={"w_n \\leq 4"} />.</p>
              </div>
            }
            correction={
              <div className="text-slate-700">
                <strong>Récurrence : </strong> <LatexRenderer latex={"w_{n+1} = \\frac{w_n+4}{2} \\leq \\frac{4+4}{2} = 4"} /> si <LatexRenderer latex={"w_n \\leq 4"} />.
              </div>
            }
          />

          <ExerciseCard
            id="ex9"
            title="Exercice 9"
            difficulty="Moyen"
            content={
              <div>
                <p><LatexRenderer latex={"a_1=2, a_{n+1} = \\sqrt{2a_n}"} />.</p>
                <ol className="list-decimal ml-6 mt-2">
                  <li>Montrer <LatexRenderer latex={"a_n > 0"} />.</li>
                  <li>Montrer <LatexRenderer latex={"a_n \\leq 2"} />.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-slate-700">
                <p>1. Racine carrée toujours positive et <LatexRenderer latex={"a_1 > 0"} />.</p>
                <p>2. Si <LatexRenderer latex={"a_n \\leq 2"} />, alors <LatexRenderer latex={"2a_n \\leq 4"} /> et <LatexRenderer latex={"\\sqrt{2a_n} \\leq 2"} />.</p>
              </div>
            }
          />

          <ExerciseCard
            id="ex10"
            title="Exercice 10 - Bornes"
            difficulty="Facile"
            content={
              <div>
                <p><LatexRenderer latex={"u_n = \\frac{3n+1}{n+1}"} />.</p>
                <p>Montrer qu'elle est majorée par 3 et bornée.</p>
              </div>
            }
            correction={
              <div className="space-y-2 text-slate-700">
                <p><LatexRenderer latex={"u_n - 3 = \\frac{3n+1-3n-3}{n+1} = \\frac{-2}{n+1} < 0"} />. Donc majorée par 3.</p>
                <p>De plus <LatexRenderer latex={"u_n \\geq 0"} /> car <LatexRenderer latex={"n \\geq 0"} />. Donc bornée dans <LatexRenderer latex={"[0,3]"} />.</p>
              </div>
            }
          />
        </div>

        {/* Module 3 - Avancé */}
        <div>
          <DifficultyHeader
            level="Module 3"
            title="Exercices Avancés et Problèmes"
            icon={Crown}
            stars={3}
            color="indigo"
          />

          <ExerciseCard
            id="ex11"
            title="Exercice 11 - Homographique suite"
            difficulty="Avancé"
            content={
              <div>
                <p><LatexRenderer latex={"u_0=3, u_{n+1}=\\frac{2u_n+1}{u_n+2}"} />.</p>
                <ol className="list-decimal ml-6 mt-2 space-y-1">
                  <li>Montrer ni arithmétique ni géométrique.</li>
                  <li>Soit <LatexRenderer latex={"v_n = \\frac{1+u_n}{2-2u_n}"} />. Montrer géométrique.</li>
                  <li>Exprimer <LatexRenderer latex={"u_n"} /> en fonction de <LatexRenderer latex={"n"} />.</li>
                </ol>
                <p className="text-xs text-slate-500 mt-2">Indice : utiliser la méthode du point fixe sur l'homographie.</p>
              </div>
            }
            correction={
              <div className="space-y-2">
                <p><strong>1.</strong> Calcul termes : <LatexRenderer latex={"u_0=3, u_1=7/5, u_2=19/12"} />. Raisons non constantes.</p>
                <p><strong>2.</strong> <LatexRenderer latex={"v_{n+1} = \\frac{1+\\frac{2u_n+1}{u_n+2}}{2-2\\frac{2u_n+1}{u_n+2}} = \\dots = 3v_n"} />. <LatexRenderer latex={"v_0 = -1"} />. Donc <LatexRenderer latex={"v_n = -3^n"} />.</p>
                <p><strong>3.</strong> <LatexRenderer latex={"u_n = \\frac{2v_n-1}{2v_n+1} = \\frac{-2\\cdot 3^n - 1}{-2\\cdot 3^n + 1} = \\frac{2\\cdot 3^n + 1}{2\\cdot 3^n - 1}"} />.</p>
              </div>
            }
          />

          <ExerciseCard
            id="ex12"
            title="Exercice 12 - Récurrences linéaires"
            difficulty="Avancé"
            content={
              <div>
                <p>Trouver l'expression explicite :</p>
                <ol className="list-decimal ml-6 mt-2 space-y-2">
                  <li><LatexRenderer latex={"u_{n+2} = -u_{n+1} + 6u_n"} />, <LatexRenderer latex={"u_0=2, u_1=5"} />.</li>
                  <li><LatexRenderer latex={"4u_{n+1} - 4u_n + u_{n-1} = 0"} /> (adapter les indices).</li>
                  <li><LatexRenderer latex={"u_{n+2} - u_{n+1} - u_n = 0"} /> (Fibonacci).</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-4">
                <div>
                  <strong className="text-slate-900">1.</strong> Éq. Carac : <LatexRenderer latex={"r^2+r-6=0"} />. Racines 2 et -3.
                  <br /><LatexRenderer latex={"u_n = \\lambda 2^n + \\mu (-3)^n"} />. En résolvant le système : <LatexRenderer latex={"u_n = \\frac{11}{5} 2^n - \\frac{1}{5} (-3)^n"} />.
                </div>
                <div>
                  <strong className="text-slate-900">2.</strong> Éq. Carac : <LatexRenderer latex={"4r^2-4r+1=0"} />. Racine double 1/2.
                  <br /><LatexRenderer latex={"u_n = (\\lambda n + \\mu)(1/2)^n"} />.
                </div>
                <div>
                  <strong className="text-slate-900">3.</strong> Éq. Carac : <LatexRenderer latex={"r^2-r-1=0"} />. Nombre d'or <LatexRenderer latex={"\\phi"} />.
                  <br />Formule de Binet.
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="ex13"
            title="Exercice 13 - Suite implicite"
            difficulty="Avancé"
            content={
              <div>
                <p>Soit <LatexRenderer latex={"u_n \\in \\mathbb{R}_+^*"} /> l'unique solution de <LatexRenderer latex={"\\sum_{k=1}^n x^k = 1"} />.</p>
                <ol className="list-decimal ml-6 mt-2">
                  <li>Justifier existence et unicité.</li>
                  <li>Montrer que <LatexRenderer latex={"(u_n)"} /> est décroissante et converge.</li>
                  <li>Calculer la limite (<LatexRenderer latex={"1/2"} />).</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-slate-700">
                <p><strong>1.</strong> <LatexRenderer latex={"f_n(x) = \\sum x^k"} /> est continue strictement croissante sur <LatexRenderer latex={"\\mathbb{R}_+"} />. TVI donne unicité de 1.</p>
                <p><strong>2.</strong> <LatexRenderer latex={"f_{n+1}(u_n) > 1 = f_{n+1}(u_{n+1})"} /> donc <LatexRenderer latex={"u_n > u_{n+1}"} />. Minorée par 0, donc converge.</p>
                <p><strong>3.</strong> Limite est <LatexRenderer latex={"1/2"} />.</p>
              </div>
            }
          />
        </div>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre4SuitesNumeriquesExercicesPage;