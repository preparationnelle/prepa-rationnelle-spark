import React from 'react';
import { OteriaChapterTemplate } from '@/components/formation/OteriaChapterTemplate';
import { ExerciseBlock } from '@/components/formation/AcademicBlocks';
import { Badge } from "@/components/ui/badge";
import { LatexRenderer } from '@/components/LatexRenderer';

const OteriaMatricesStochastiquesExercicesPage = () => {
  const exercises = [
    {
      id: 1,
      title: "Suites et divisibilité",
      difficulty: "Facile",
      statement: (
        <div className="space-y-4">
          <p>On définit, pour tout entier relatif <LatexRenderer latex="n" inline />, les suites :</p>
          <LatexRenderer latex="A_n=(n+3)(2n+5)+17 \quad \text{et} \quad B_n=n+3" block={true} />
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Développer et réduire <LatexRenderer latex="A_n" inline />.</li>
            <li>Déterminer tous les entiers <LatexRenderer latex="n \neq -3" inline /> tels que <LatexRenderer latex="B_n" inline /> divise <LatexRenderer latex="A_n" inline />.</li>
          </ol>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <div>
            <p className="font-semibold mb-2">1. Développement</p>
            <LatexRenderer latex="(n+3)(2n+5)+17 = 2n^2 + 5n + 6n + 15 + 17 = 2n^2 + 11n + 32" block={true} />
          </div>
          <div>
            <p className="font-semibold mb-2">2. Divisibilité</p>
            <p className="mb-2">On cherche <LatexRenderer latex="n \neq -3" inline /> tel que <LatexRenderer latex="B_n \mid A_n" inline />.</p>
            <LatexRenderer latex="\frac{A_n}{B_n} = \frac{(n+3)(2n+5)+17}{n+3} = 2n+5 + \frac{17}{n+3}" block={true} />
            <p className="mt-2 text-sm text-slate-600">Pour que le quotient soit entier, <LatexRenderer latex="n+3" inline /> doit diviser 17.</p>
            <p className="text-sm text-slate-600">Comme 17 est premier, les diviseurs sont <LatexRenderer latex="\{-17, -1, 1, 17\}" inline />.</p>
            <ul className="list-disc list-inside mt-2 text-sm">
              <li><LatexRenderer latex="n+3 = 1 \implies n = -2" inline /></li>
              <li><LatexRenderer latex="n+3 = -1 \implies n = -4" inline /></li>
              <li><LatexRenderer latex="n+3 = 17 \implies n = 14" inline /></li>
              <li><LatexRenderer latex="n+3 = -17 \implies n = -20" inline /></li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Divisibilité par 4",
      difficulty: "Moyen",
      statement: (
        <div className="space-y-4">
          <p>Montrer que, pour tout <LatexRenderer latex="n \in \mathbb{N}" inline />, le nombre <LatexRenderer latex="5^n+19" inline /> est divisible par 4.</p>
          <div className="bg-slate-50 p-4 rounded text-sm mb-2">
            <p className="font-medium text-slate-700 mb-2">Indication :</p>
            <p>Utilisez la somme géométrique <LatexRenderer latex="S_n=1+5+5^2+\cdots+5^{n-1}" inline /> ou les congruences.</p>
          </div>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <div>
            <p className="font-semibold mb-2">Méthode 1 : Somme géométrique</p>
            <LatexRenderer latex="S_n = \frac{1-5^n}{1-5} = \frac{5^n - 1}{4} \implies 5^n - 1 = 4S_n" block={true} />
            <p className="mt-2 text-sm text-slate-600"><LatexRenderer latex="5^n - 1" inline /> est multiple de 4.</p>
            <LatexRenderer latex="5^n + 19 = (5^n - 1) + 20 = 4S_n + 4 \times 5 = 4(S_n + 5)" block={true} />
            <p className="text-sm text-slate-600">Donc divisible par 4.</p>
          </div>
          <div>
            <p className="font-semibold mb-2">Méthode 2 : Congruences</p>
            <LatexRenderer latex="5 \equiv 1 \pmod{4} \implies 5^n \equiv 1^n \equiv 1 \pmod{4}" block={true} />
            <LatexRenderer latex="19 \equiv 3 \pmod{4}" block={true} />
            <LatexRenderer latex="5^n + 19 \equiv 1 + 3 \equiv 4 \equiv 0 \pmod{4}" block={true} />
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Divisibilité par 2 et 3",
      difficulty: "Moyen",
      statement: (
        <div className="space-y-4">
          <p>Démontrer que, pour tout entier relatif <LatexRenderer latex="p" inline />, le nombre <LatexRenderer latex="p(p^2-1)" inline /> est divisible par 2 et par 3.</p>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <p className="mb-2">Factorisation : <LatexRenderer latex="p(p^2-1) = (p-1)p(p+1)" inline />.</p>
          <p className="text-sm text-slate-600 mb-2">C'est le produit de 3 entiers consécutifs.</p>
          <div>
            <p className="font-semibold mb-2">Divisibilité par 2</p>
            <p className="text-sm text-slate-600">Parmi deux entiers consécutifs, l'un est pair. Donc le produit est divisible par 2.</p>
          </div>
          <div>
            <p className="font-semibold mb-2">Divisibilité par 3</p>
            <p className="text-sm text-slate-600">Parmi trois entiers consécutifs, l'un est multiple de 3. Donc le produit est divisible par 3.</p>
            <p className="mt-2 text-sm text-slate-600">Comme 2 et 3 sont premiers entre eux, le nombre est divisible par 6.</p>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Divisibilité par 8",
      difficulty: "Moyen",
      statement: (
        <div className="space-y-4">
          <p>Montrer que, pour tout entier naturel <strong>impair</strong> <LatexRenderer latex="n" inline />, le nombre <LatexRenderer latex="n^2-1" inline /> est divisible par 8.</p>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <p className="mb-2">Soit <LatexRenderer latex="n = 2k + 1" inline /> (n impair).</p>
          <LatexRenderer latex="n^2 - 1 = (2k+1)^2 - 1 = 4k^2 + 4k + 1 - 1 = 4k^2 + 4k = 4k(k+1)" block={true} />
          <p className="mt-2 text-sm text-slate-600">Or <LatexRenderer latex="k(k+1)" inline /> est le produit de deux entiers consécutifs, donc pair (<LatexRenderer latex="= 2q" inline />).</p>
          <LatexRenderer latex="n^2 - 1 = 4 \times 2q = 8q" block={true} />
          <p className="text-sm text-slate-600">Donc divisible par 8.</p>
        </div>
      )
    },
    {
      id: 5,
      title: "Congruence et reste",
      difficulty: "Moyen",
      statement: (
        <div className="space-y-4">
          <p>Déterminer le reste de la division euclidienne de <LatexRenderer latex="10^n" inline /> par 11 selon la parité de <LatexRenderer latex="n" inline />.</p>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <p className="mb-2">On a <LatexRenderer latex="10 \equiv -1 \pmod{11}" inline />.</p>
          <LatexRenderer latex="10^n \equiv (-1)^n \pmod{11}" block={true} />
          <div className="mt-2 space-y-2">
            <p className="text-sm text-slate-600"><strong>Si n est pair :</strong> <LatexRenderer latex="10^n \equiv 1 \pmod{11}" inline />. Le reste est 1.</p>
            <p className="text-sm text-slate-600"><strong>Si n est impair :</strong> <LatexRenderer latex="10^n \equiv -1 \equiv 10 \pmod{11}" inline />. Le reste est 10.</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <OteriaChapterTemplate
      sessionNumber={12}
      sessionTitle="Arithmétique modulaire & crypto affine"
      description="Divisibilité, congruences, théorèmes de base et applications en cryptographie"
      slug="matrices-stochastiques"
      duration="4h"
      level="Avancé"
      activeSection="exercises"
      previousChapterLink="/formation/oteria/matrices-markov-exercices"
      nextChapterLink="/articles/oteria-cyber-school"
    >
      <div className="space-y-8 max-w-none text-slate-700">
        {/* ─── OBJECTIFS ────────────────────────────────────────────── */}
        <div className="bg-slate-50 border border-slate-100 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Objectifs de la séance</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li>Maîtriser les critères de divisibilité et la division euclidienne</li>
            <li>Calculer avec des congruences (modulo n)</li>
            <li>Résoudre des problèmes d'arithmétique classiques</li>
            <li>Applications à la cryptographie (chiffrement affine, RSA simplifié)</li>
          </ul>
        </div>

        {/* ─── EXERCICES ────────────────────────────────────────────── */}
        {exercises.map((exercise) => (
          <ExerciseBlock
            key={exercise.id}
            number={exercise.id.toString()}
            title={exercise.title}
            solution={exercise.solution}
          >
            <div className="mb-4">
              <Badge
                className={`${exercise.difficulty === 'Facile' ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200' :
                  exercise.difficulty === 'Moyen' ? 'bg-amber-100 text-amber-800 hover:bg-amber-200' :
                    'bg-rose-100 text-rose-800 hover:bg-rose-200'
                  } mb-2`}
                variant="secondary"
              >
                {exercise.difficulty}
              </Badge>
              <div className="text-slate-700 leading-relaxed">
                {exercise.statement}
              </div>
            </div>
          </ExerciseBlock>
        ))}
      </div>
    </OteriaChapterTemplate>
  );
};

export default OteriaMatricesStochastiquesExercicesPage;
