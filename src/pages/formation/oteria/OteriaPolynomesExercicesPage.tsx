import React, { useState } from 'react';
import { OteriaChapterTemplate } from '@/components/formation/OteriaChapterTemplate';
import {
  ExerciseBlock,
  CodeBlock,
  WarningBlock
} from '@/components/formation/AcademicBlocks';
import { Badge } from "@/components/ui/badge";
import { LatexRenderer } from '@/components/LatexRenderer';

const OteriaPolynomesExercicesPage = () => {
  return (
    <OteriaChapterTemplate
      sessionNumber={6}
      sessionTitle="Polynômes & dichotomie"
      description="Exercices progressifs pour maîtriser la recherche de racines et la factorisation de polynômes."
      slug="polynomes-approximation"
      duration="4h"
      level="Débutant"
      activeSection="exercises"
      previousChapterLink="/formation/oteria/fonctions-variable-reelle-exercices"
      nextChapterLink="/formation/oteria/denombrement-paradoxes-cours"
    >
      <div className="space-y-8 max-w-none text-slate-700">

        {/* ─── OBJECTIFS ────────────────────────────────────────────── */}
        <div className="bg-slate-50 border border-slate-100 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Objectifs de la séance</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li>Déterminer les racines et factoriser des polynômes</li>
            <li>Utiliser la division euclidienne et le binôme de Newton</li>
            <li>Étudier des suites de polynômes</li>
            <li>Comprendre le lien entre racines et coefficients (relations coefficients-racines simples)</li>
          </ul>
        </div>

        {/* ─── EXERCICE 1 ───────────────────────────────────────────── */}
        <ExerciseBlock
          number="1"
          title="Racines et factorisation"
          solution={
            <div className="space-y-6 text-sm">
              <div>
                <strong className="text-emerald-700 block mb-1">1. <LatexRenderer latex="P(x) = x^3 - 8" inline /></strong>
                <LatexRenderer latex="x = 2" inline /> est racine évidente. <LatexRenderer latex="P(x) = (x-2)(x^2+2x+4)" inline />. Le trinôme n'a pas de racines réelles (<LatexRenderer latex="\Delta < 0" inline />).
              </div>
              <div>
                <strong className="text-emerald-700 block mb-1">2. <LatexRenderer latex="P(x) = x^3 - 3x^2 + 3x - 2" inline /></strong>
                <LatexRenderer latex="x = 2" inline /> est racine. <LatexRenderer latex="P(x) = (x-2)(x^2-x+1)" inline />. Trinôme sans racines réelles.
              </div>
              <div>
                <strong className="text-emerald-700 block mb-1">3. <LatexRenderer latex="P(x) = 2x^3 - x^2 - 2x + 1" inline /></strong>
                <LatexRenderer latex="x = 1" inline /> est racine. <LatexRenderer latex="P(x) = (x-1)(2x^2+x-1)" inline />. Racines du trinôme : <LatexRenderer latex="-1, 1/2" inline />. <br />
                Finalement : <LatexRenderer latex="P(x) = 2(x-1)(x+1)(x-1/2) = (x-1)(x+1)(2x-1)" inline />.
              </div>
              <div>
                <strong className="text-emerald-700 block mb-1">4. <LatexRenderer latex="P(x) = x^3 - 2x^2 - 5x + 6" inline /></strong>
                <LatexRenderer latex="x = 1" inline /> est racine (somme des coeffs nulle). <LatexRenderer latex="P(x) = (x-1)(x^2-x-6)" inline />. <br />
                Racines de <LatexRenderer latex="x^2-x-6" inline /> sont <LatexRenderer latex="-2, 3" inline />. <br />
                Finalement : <LatexRenderer latex="P(x) = (x-1)(x+2)(x-3)" inline />.
              </div>
              <div>
                <strong className="text-emerald-700 block mb-1">5. <LatexRenderer latex="P(x) = x^4 - 5x^3 + 7x^2 - 3x" inline /></strong>
                Factorisation par <LatexRenderer latex="x" inline /> puis <LatexRenderer latex="1" inline /> est racine double. <LatexRenderer latex="P(x) = x(x-1)^2(x-3)" inline />.
              </div>
              <div>
                <strong className="text-emerald-700 block mb-1">6. <LatexRenderer latex="P(x) = x^4 - 2x^2 + 1" inline /></strong>
                Identité remarquable : <LatexRenderer latex="P(x) = (x^2-1)^2 = ((x-1)(x+1))^2 = (x-1)^2(x+1)^2" inline />.
              </div>
            </div>
          }
        >
          <div className="mb-4">
            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 mb-2" variant="secondary">Moyen</Badge>
            <p className="mb-4 text-slate-700">Dans chaque cas, déterminer toutes les racines réelles du polynôme <LatexRenderer latex="P" inline /> et donner la forme factorisée de <LatexRenderer latex="P(x)" inline /> en produit de polynômes de plus petits degrés possibles.</p>
            <ol className="list-decimal list-inside space-y-2 pl-4">
              <li><LatexRenderer latex="P(x) = x^3 - 8" inline /></li>
              <li><LatexRenderer latex="P(x) = x^3 - 3x^2 + 3x - 2" inline /></li>
              <li><LatexRenderer latex="P(x) = 2x^3 - x^2 - 2x + 1" inline /></li>
              <li><LatexRenderer latex="P(x) = x^3 - 2x^2 - 5x + 6" inline /></li>
              <li><LatexRenderer latex="P(x) = x^4 - 5x^3 + 7x^2 - 3x" inline /></li>
              <li><LatexRenderer latex="P(x) = x^4 - 2x^2 + 1" inline /></li>
            </ol>
          </div>
        </ExerciseBlock>

        {/* ─── EXERCICE 2 ───────────────────────────────────────────── */}
        <ExerciseBlock
          number="2"
          title="Périodicité et polynôme nul"
          solution={
            <div className="space-y-4 text-sm">
              <p>Soit <LatexRenderer latex="\alpha" inline /> une racine réelle de <LatexRenderer latex="P" inline />. Par la relation <LatexRenderer latex="P(x+1)=P(x)" inline />, on a <LatexRenderer latex="P(\alpha+1) = P(\alpha) = 0" inline />.</p>
              <p>Par récurrence, <LatexRenderer latex="\forall n \in \mathbb{N}, P(\alpha+n)=0" inline />. Le polynôme <LatexRenderer latex="P" inline /> admet une infinité de racines (les <LatexRenderer latex="\alpha+n" inline /> sont tous distincts car <LatexRenderer latex="\alpha+n \to +\infty" inline />).</p>
              <p>Or un polynôme non nul ne peut avoir qu'un nombre fini de racines (au plus son degré). Donc <LatexRenderer latex="P" inline /> est le polynôme nul.</p>
            </div>
          }
        >
          <div className="mb-4">
            <Badge className="bg-rose-100 text-rose-800 hover:bg-rose-200 mb-2" variant="secondary">Difficile</Badge>
            <p className="mb-2 text-slate-700">Soit <LatexRenderer latex="P" inline /> un polynôme réel tel que pour tout <LatexRenderer latex="x \in \mathbb{R}" inline /> on ait <LatexRenderer latex="P(x+1) = P(x)" inline />.</p>
            <p className="text-slate-700">Montrer que si <LatexRenderer latex="P" inline /> admet (au moins) une racine réelle, alors <LatexRenderer latex="P" inline /> est le polynôme nul.</p>
          </div>
        </ExerciseBlock>

        {/* ─── EXERCICE 3 ───────────────────────────────────────────── */}
        <ExerciseBlock
          number="3"
          title="Suite de polynômes 1"
          solution={
            <div className="space-y-4 text-sm">
              <p><strong>1.</strong> <LatexRenderer latex="P_1(x) = x+1" inline />, <LatexRenderer latex="P_2(x) = x^2+x+1" inline />, <LatexRenderer latex="P_3(x) = x^3+x^2+x+1" inline />.</p>
              <p><strong>2.</strong> On conjecture <LatexRenderer latex="P_n(x) = \sum_{k=0}^n x^k" inline />. Preuve par récurrence :</p>
              <ul className="list-disc list-inside pl-4">
                <li>Initialisation : <LatexRenderer latex="P_0(x)=1" inline /> (ok).</li>
                <li>Hérédité : <LatexRenderer latex="P_{n+1}(x) = x P_n(x) + 1 = x \sum_{k=0}^n x^k + 1 = \sum_{k=0}^n x^{k+1} + 1 = \sum_{j=1}^{n+1} x^j + 1 = \sum_{j=0}^{n+1} x^j" inline />.</li>
              </ul>
              <p>C'est la somme géométrique : <LatexRenderer latex="P_n(x) = \frac{x^{n+1}-1}{x-1}" inline /> pour <LatexRenderer latex="x \neq 1" inline />.</p>
            </div>
          }
        >
          <div className="mb-4">
            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 mb-2" variant="secondary">Moyen</Badge>
            <p className="mb-2 text-slate-700">On considère la suite <LatexRenderer latex="(P_n)" inline /> définie par <LatexRenderer latex="P_0(x) = 1" inline /> et <LatexRenderer latex="P_{n+1}(x) = x P_n(x) + 1" inline />.</p>
            <ol className="list-decimal list-inside space-y-1 pl-4 text-slate-700">
              <li>Déterminer <LatexRenderer latex="P_1, P_2, P_3" inline />.</li>
              <li>Déterminer l'expression de <LatexRenderer latex="P_n" inline /> pour tout <LatexRenderer latex="n" inline />.</li>
            </ol>
          </div>
        </ExerciseBlock>

        {/* ─── EXERCICE 4 ───────────────────────────────────────────── */}
        <ExerciseBlock
          number="4"
          title="Suite de polynômes 2"
          solution={
            <div className="space-y-4 text-sm">
              <p><strong>1.</strong> <LatexRenderer latex="P_1(x) = 2x-1" inline />, <LatexRenderer latex="P_2(x) = (2x-1)^2" inline />, <LatexRenderer latex="P_3(x) = (2x-1)^3" inline />.</p>
              <p><strong>2.</strong> Conjecture : <LatexRenderer latex="P_n(x) = (2x-1)^n" inline />. Preuve par récurrence immédiate.</p>
              <p><strong>3.</strong> <LatexRenderer latex="P_n" inline /> est un polynôme de degré <LatexRenderer latex="n" inline /> (car <LatexRenderer latex="\deg((2x-1)^n) = n \times 1" inline />) et de coefficient dominant <LatexRenderer latex="2^n" inline />.</p>
            </div>
          }
        >
          <div className="mb-4">
            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 mb-2" variant="secondary">Moyen</Badge>
            <p className="mb-2 text-slate-700">On considère la suite définie par <LatexRenderer latex="P_0(x) = 1" inline /> et <LatexRenderer latex="P_{n+1}(x) = (2x-1) P_n(x)" inline />.</p>
            <ol className="list-decimal list-inside space-y-1 pl-4 text-slate-700">
              <li>Déterminer <LatexRenderer latex="P_1, P_2, P_3" inline />.</li>
              <li>Déterminer l'expression de <LatexRenderer latex="P_n" inline />.</li>
              <li>Préciser son degré et son coefficient dominant.</li>
            </ol>
          </div>
        </ExerciseBlock>


        {/* ─── EXERCICE 5 ───────────────────────────────────────────── */}
        <ExerciseBlock
          number="5"
          title="Sommes de carrés et polynômes"
          solution={
            <div className="space-y-4 text-sm">
              <p><strong>Polynôme P :</strong> On cherche <LatexRenderer latex="P(x) = ax^3+bx^2+cx+d" inline /> tel que <LatexRenderer latex="P(x+1)-P(x)=x^2" inline />. <br /> Par identification, on trouve <LatexRenderer latex="a=1/3, b=-1/2, c=1/6" inline />. Donc <LatexRenderer latex="P(x) = \frac{x^3}{3} - \frac{x^2}{2} + \frac{x}{6}" inline /> (à une constante près).</p>
              <p><strong>Somme :</strong> <LatexRenderer latex="\sum_{k=0}^n k^2 = \sum_{k=0}^n (P(k+1)-P(k)) = P(n+1)-P(0)" inline /> (somme télescopique). <br />
                <LatexRenderer latex="= \frac{(n+1)^3}{3} - \frac{(n+1)^2}{2} + \frac{n+1}{6} = \frac{n(n+1)(2n+1)}{6}" inline />.</p>
              <p><strong>Bonus :</strong> Pour <LatexRenderer latex="\sum k^4" inline />, utiliser un polynôme de degré 5.</p>
            </div>
          }
        >
          <div className="mb-4">
            <Badge className="bg-rose-100 text-rose-800 hover:bg-rose-200 mb-2" variant="secondary">Difficile</Badge>
            <p className="mb-2 text-slate-700">Déterminer un polynôme de degré 3 tel que <LatexRenderer latex="\forall x \in \mathbb{R}, P(x+1) - P(x) = x^2" inline />.</p>
            <p className="text-slate-700">En déduire la formule de somme : <LatexRenderer latex="\sum_{k=0}^n k^2 = \frac{n(n+1)(2n+1)}{6}" inline />.</p>
          </div>
        </ExerciseBlock>

        {/* ─── EXERCICE 6 ───────────────────────────────────────────── */}
        <ExerciseBlock
          number="6"
          title="Dérivée et binôme"
          solution={
            <div className="space-y-4 text-sm">
              <p><strong>Méthode 1 :</strong> <LatexRenderer latex="P(x)=(x+1)^n \implies P'(x)=n(x+1)^{n-1}" inline />.</p>
              <p><strong>Méthode 2 :</strong> <LatexRenderer latex="P(x)=\sum_{k=0}^n \binom{n}{k} x^k \implies P'(x)=\sum_{k=1}^n k \binom{n}{k} x^{k-1}" inline />.</p>
              <p><strong>Conclusion :</strong> En évaluant en <LatexRenderer latex="x=1" inline /> : <LatexRenderer latex="n 2^{n-1} = \sum_{k=1}^n k \binom{n}{k}" inline /> (le terme pour <LatexRenderer latex="k=0" inline /> est nul).</p>
            </div>
          }
        >
          <div className="mb-4">
            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 mb-2" variant="secondary">Moyen</Badge>
            <p className="mb-2 text-slate-700">Soit <LatexRenderer latex="P(x) = (x+1)^n" inline />.</p>
            <p className="text-slate-700">Calculer <LatexRenderer latex="P'" inline /> de deux manières et en déduire la valeur de <LatexRenderer latex="\sum_{k=0}^{n} k \binom{n}{k}" inline />.</p>
          </div>
        </ExerciseBlock>
      </div>
    </OteriaChapterTemplate>
  );
};

export default OteriaPolynomesExercicesPage;
