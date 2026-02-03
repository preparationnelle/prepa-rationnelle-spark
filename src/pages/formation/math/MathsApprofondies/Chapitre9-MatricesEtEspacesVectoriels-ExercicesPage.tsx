import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Star, BookOpen, Lightbulb, Crown } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';

const Chapitre9MatricesEtEspacesVectorielsExercicesPage = () => {
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
            <h3 className="font-semibold text-slate-900 text-lg">{title}</h3>
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
      chapterNumber={9}
      chapterTitle="Matrices, systèmes linéaires & espaces vectoriels"
      description="Exercices sur le calcul matriciel, les puissances de matrices et les sous-espaces vectoriels."
      slug="matrices-et-espaces-vectoriels"
      activeSection="exercises"
      titleClassName="text-slate-800"
      showNavigation={true}
      previousChapter={{
        slug: "couple-variables-aleatoires",
        title: "Couples de variables aléatoires"
      }}
      nextChapter={{
        slug: "algebre-bilineaire-espaces-euclidiens",
        title: "Algèbre bilinéaire et espaces euclidiens"
      }}
    >
      <div className="space-y-8">

        {/* Module 1 */}
        <div>
          <DifficultyHeader
            level="Module 1"
            title="Calcul matriciel et puissances"
            icon={BookOpen}
            stars={1}
          />

          <ExerciseCard
            id="ex1"
            title="Exercice 1"
            difficulty="Moyen"
            content={
              <div>
                <p>Soit <LatexRenderer latex="J = \begin{pmatrix} 2 & 2 & 2 \\ 2 & 2 & 2 \\ 2 & 2 & 2 \end{pmatrix}" />.</p>
                <p>Montrer que <LatexRenderer latex="\forall n \in \mathbb{N}^*, J^n = 6^{n-1} J" />.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p><strong>Récurrence:</strong></p>
                <p><LatexRenderer latex="J^2 = 6J" /> en faisant le produit (chaque coeff vaut 4+4+4=12=6*2).</p>
                <p>Hérédité facile : <LatexRenderer latex="J^{n+1} = J^n J = 6^{n-1}J J = 6^{n-1} 6J = 6^n J" />.</p>
              </div>
            }
          />

          <ExerciseCard
            id="ex2"
            title="Exercice 2"
            difficulty="Moyen"
            content={
              <div>
                <p>Soit <LatexRenderer latex="A = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{pmatrix}" />.</p>
                <p>Calculer <LatexRenderer latex="A^n" />.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p><LatexRenderer latex="A^2 = \begin{pmatrix} 1 & 2 & 1 \\ 0 & 1 & 2 \\ 0 & 0 & 1 \end{pmatrix}" />, <LatexRenderer latex="A^3 = \begin{pmatrix} 1 & 3 & 3 \\ 0 & 1 & 3 \\ 0 & 0 & 1 \end{pmatrix}" />.</p>
                <p>On reconnaît les coefficients binomiaux.</p>
                <p>Formule : <LatexRenderer latex="A^n = \begin{pmatrix} 1 & n & \frac{n(n-1)}{2} \\ 0 & 1 & n \\ 0 & 0 & 1 \end{pmatrix}" />.</p>
              </div>
            }
          />

          <ExerciseCard
            id="ex3"
            title="Exercice 3"
            difficulty="Facile"
            content={
              <div>
                <p>Puissances de <LatexRenderer latex="D = \text{diag}(2, -1, 3)" />.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p><LatexRenderer latex="D^n = \text{diag}(2^n, (-1)^n, 3^n)" />.</p>
              </div>
            }
          />

          <ExerciseCard
            id="ex4"
            title="Exercice 4"
            difficulty="Difficile"
            content={
              <div>
                <p>Soit <LatexRenderer latex="M = \begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix}" />. Lien avec Fibonacci ?</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p><LatexRenderer latex="M^n = \begin{pmatrix} F_{n+1} & F_n \\ F_n & F_{n-1} \end{pmatrix}" /> avec <LatexRenderer latex="F_0=0, F_1=1" />.</p>
                <p>Récurrence standard.</p>
              </div>
            }
          />

          <ExerciseCard
            id="ex5"
            title="Exercice 5"
            difficulty="Moyen"
            content={
              <div>
                <p>Calculer <LatexRenderer latex="A^n" /> pour diverses matrices (rotation, nilpotente...).</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>1. <LatexRenderer latex="A" /> (rotation 90°) : <LatexRenderer latex="A^2=-I, A^3=-A, A^4=I" />. Périodique.</p>
                <p>2. Nilpotente ou structure par blocs pour les autres exemples.</p>
              </div>
            }
          />

        </div>

        {/* Module 2 */}
        <div>
          <DifficultyHeader
            level="Module 2"
            title="Espaces Vectoriels"
            icon={Lightbulb}
            stars={2}
          />

          <ExerciseCard
            id="ex6"
            title="Exercice 6"
            difficulty="Moyen"
            content={
              <div>
                <p>Montrer que <LatexRenderer latex="F = \{ (x_1,x_2,x_3)^T \mid 2x_1-5x_2+x_3=0, x_2+x_3=0 \}" /> est un SEV.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>C'est l'intersection de deux hyperplans vectoriels (noyaux de formes linéaires). C'est donc un SEV.</p>
                <p>Ou vérification directe : <LatexRenderer latex="0 \in F" />, stable par combinaison linéaire.</p>
              </div>
            }
          />

          <ExerciseCard
            id="ex7"
            title="Exercice 7"
            difficulty="Moyen"
            content={
              <div>
                <p>Polynômes de degré 2 avec <LatexRenderer latex="P(a)=P(b)=0" />.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>Noyau de l'application linéaire <LatexRenderer latex="P \mapsto (P(a), P(b))" /> restreinte à <LatexRenderer latex="\mathbb{R}_2[X]" />.</p>
                <p>Donc SEV.</p>
              </div>
            }
          />

          <ExerciseCard
            id="ex8"
            title="Exercice 8"
            difficulty="Difficile"
            content={
              <div>
                <p>Suites récurrentes <LatexRenderer latex="u_{n+2} = n u_{n+1} + u_n" />.</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>Vérification de la stabilité par combinaison linéaire. Linéarité de la relation de récurrence.</p>
              </div>
            }
          />

          <ExerciseCard
            id="ex9"
            title="Exercice 9"
            difficulty="Moyen"
            content={
              <div>
                <p>1. Commutant de <LatexRenderer latex="A" />.</p>
                <p>2. Matrices symétriques.</p>
                <p>3. Matrices inversibles ?</p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <p>1. Oui, SEV.</p>
                <p>2. Oui, SEV.</p>
                <p>3. Non, <LatexRenderer latex="0" /> n'est pas inversible. (Et somme d'inversibles pas forcément inversible).</p>
              </div>
            }
          />
        </div>

      </div>
    </MathChapterTemplate>
  );
};

export default Chapitre9MatricesEtEspacesVectorielsExercicesPage;
