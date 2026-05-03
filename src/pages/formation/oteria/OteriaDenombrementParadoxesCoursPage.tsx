import React from 'react';
import { OteriaChapterTemplate } from '@/components/formation/OteriaChapterTemplate';
import { LatexRenderer } from '@/components/LatexRenderer';
import {
  CodeBlock,
  DefinitionBlock,
  TheoremBlock,
  ExampleBlock,
  RemarkBlock,
  WarningBlock
} from '@/components/formation/AcademicBlocks';

const OteriaDenombrementParadoxesCoursPage: React.FC = () => {
  return (
    <OteriaChapterTemplate
      sessionNumber={7}
      sessionTitle="Introduction au dénombrement"
      description="Coefficients binomiaux, binôme de Newton, Paradoxe des anniversaires"
      slug="denombrement-paradoxes"
      duration="4h"
      level="Intermédiaire"
      activeSection="course"
      previousSession={{ slug: 'polynomes-approximation', title: 'Polynômes & Dichotomie' }}
      nextSession={{ slug: 'probabilites-introduction', title: 'Introduction aux Probabilités' }}
    >
      <div className="space-y-12 text-slate-700 leading-relaxed max-w-none">

        {/* ─── INTRODUCTION ────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Introduction
          </h2>
          <p className="mb-4">
            Le dénombrement consiste à calculer le nombre de façons possibles de réaliser une configuration donnée.
          </p>
          <p>
            C'est une base essentielle en probabilités, combinatoire et informatique (analyse d'algorithmes, cryptographie, théorie des codes).
          </p>
        </section>

        {/* ─── FACTORIELLE ET PERMUTATIONS ──────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Factorielle et Permutations
          </h2>

          <DefinitionBlock title="Permutation">
            <p className="mb-2">
              Soit <LatexRenderer latex="E" /> un ensemble fini de <LatexRenderer latex="n" /> éléments.
            </p>
            <p className="mb-2">
              Une permutation de <LatexRenderer latex="E" /> est une bijection de <LatexRenderer latex="E" /> sur lui-même (un ordre total des éléments).
            </p>
            <div className="text-center font-semibold py-2">
              <LatexRenderer latex="\text{Nombre de permutations} = n! = 1 \times 2 \times \dots \times n" />
            </div>
          </DefinitionBlock>

          <RemarkBlock title="Valeurs usuelles">
            <p>
              <LatexRenderer latex="0! = 1, \quad 1! = 1, \quad 2! = 2, \quad 3! = 6, \quad 4! = 24, \quad 5! = 120" />
            </p>
          </RemarkBlock>
        </section>

        {/* ─── DEFINITIONS SIMPLES ──────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Les outils du dénombrement
          </h2>

          {/* Permutation */}
          <DefinitionBlock title="Permutation (Ordre, tout l'ensemble)">
            <p className="mb-2">On utilise tous les éléments, et l'ordre compte.</p>
            <div className="text-center font-semibold mb-2">
              <LatexRenderer latex="P_n = n!" />
            </div>
            <p className="text-sm text-slate-600">
              Exemple : Avec A, B, C <LatexRenderer latex="\to" /> ABC, ACB, BAC, BCA, CAB, CBA (6 possibilités).
            </p>
          </DefinitionBlock>

          {/* Arrangement */}
          <DefinitionBlock title="Arrangement (Ordre, partie de l'ensemble)">
            <p className="mb-2">On choisit <LatexRenderer latex="p" /> éléments parmi <LatexRenderer latex="n" />, et l'ordre compte.</p>
            <div className="text-center font-semibold mb-2">
              <LatexRenderer latex="A_n^p = \frac{n!}{(n-p)!}" />
            </div>
            <p className="text-sm text-slate-600">
              Exemple : Mots de 2 lettres distinctes parmi A, B, C, D <LatexRenderer latex="\to" /> AB, BA, AC... (12 possibilités).
            </p>
          </DefinitionBlock>

          {/* Combinaison */}
          <DefinitionBlock title="Combinaison (Pas d'ordre, partie de l'ensemble)">
            <p className="mb-2">On choisit <LatexRenderer latex="p" /> éléments parmi <LatexRenderer latex="n" />, et l'ordre ne compte pas (sous-ensemble).</p>
            <div className="text-center font-semibold mb-2">
              <LatexRenderer latex="C_n^p = \binom{n}{p} = \frac{n!}{p!(n-p)!}" />
            </div>
            <p className="text-sm text-slate-600">
              Exemple : Paires de lettres parmi A, B, C, D <LatexRenderer latex="\to" /> {`{A,B}`}, {`{A,C}`}... (6 possibilités).
            </p>
          </DefinitionBlock>

          {/* Résumé tableau */}
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse border border-slate-200 rounded-lg">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Type</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Ordre ?</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Tout pris ?</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Formule</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 p-3">Permutation</td>
                  <td className="border border-slate-200 p-3">Oui</td>
                  <td className="border border-slate-200 p-3">Oui</td>
                  <td className="border border-slate-200 p-3"><LatexRenderer latex="n!" /></td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-3">Arrangement</td>
                  <td className="border border-slate-200 p-3">Oui</td>
                  <td className="border border-slate-200 p-3">Non</td>
                  <td className="border border-slate-200 p-3"><LatexRenderer latex="\frac{n!}{(n-p)!}" /></td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-3">Combinaison</td>
                  <td className="border border-slate-200 p-3">Non</td>
                  <td className="border border-slate-200 p-3">Non</td>
                  <td className="border border-slate-200 p-3"><LatexRenderer latex="\binom{n}{p}" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ─── COEFFICIENTS BINOMIAUX ─────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Coefficients binomiaux
          </h2>

          <DefinitionBlock title="Coefficient binomial">
            <p className="mb-2">Le nombre de sous-ensembles de <LatexRenderer latex="p" /> éléments dans un ensemble de <LatexRenderer latex="n" /> éléments est :</p>
            <div className="text-center font-semibold mb-2">
              <LatexRenderer latex="\binom{n}{p} = \frac{n!}{p!(n-p)!}, \quad (0 \leq p \leq n)" />
            </div>
          </DefinitionBlock>

          <TheoremBlock title="Propriétés fondamentales">
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Symétrie :</strong> <LatexRenderer latex="\binom{n}{p} = \binom{n}{n-p}" /></li>
              <li><strong>Formule de Pascal :</strong> <LatexRenderer latex="\binom{n}{p} = \binom{n-1}{p-1} + \binom{n-1}{p}" /></li>
              <li><strong>Relation diagonale :</strong> <LatexRenderer latex="p \binom{n}{p} = n \binom{n-1}{p-1}" /></li>
            </ul>
          </TheoremBlock>

          <ExampleBlock title="Valeurs pratiques">
            <p>
              <LatexRenderer latex="\binom{n}{0} = 1, \quad \binom{n}{1} = n, \quad \binom{n}{n} = 1" />
            </p>
            <p className="mt-2">
              <LatexRenderer latex="\binom{n}{2} = \frac{n(n-1)}{2}" />
            </p>
          </ExampleBlock>
        </section>

        {/* ─── BINÔME DE NEWTON ────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Binôme de Newton
          </h2>

          <TheoremBlock title="Formule du Binôme">
            <p className="mb-2">Pour <LatexRenderer latex="a,b \in \mathbb{R}" /> et <LatexRenderer latex="n \in \mathbb{N}" /> :</p>
            <div className="text-center font-semibold text-lg py-2">
              <LatexRenderer latex="(a+b)^n = \sum_{k=0}^n \binom{n}{k} a^k b^{n-k}" />
            </div>
          </TheoremBlock>

          <RemarkBlock title="Nombre de parties d'un ensemble">
            <p className="mb-2">En posant <LatexRenderer latex="a=b=1" /> :</p>
            <div className="text-center font-semibold">
              <LatexRenderer latex="\sum_{k=0}^n \binom{n}{k} = 2^n" />
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Un ensemble de <LatexRenderer latex="n" /> éléments possède <LatexRenderer latex="2^n" /> sous-ensembles (parties).
            </p>
          </RemarkBlock>
        </section>

        {/* ─── RAISONNEMENTS CLASSIQUES ───────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Raisonnements classiques
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">Principe Multiplicatif</h3>
              <p className="text-sm">
                Choisir successivement <LatexRenderer latex="k" /> objets avec <LatexRenderer latex="n_i" /> choix pour chaque étape donne <LatexRenderer latex="n_1 \times \dots \times n_k" /> possibilités.
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">Principe Additif</h3>
              <p className="text-sm">
                Si des choix sont disjoints (incompatibles), le nombre total est la somme des possibilités de chaque cas.
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">Complémentaire</h3>
              <p className="text-sm">
                Compter le total puis soustraire les cas interdits est souvent plus simple.
              </p>
            </div>
          </div>
        </section>

        {/* ─── PARADOXE DES ANNIVERSAIRES ─────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Paradoxe des Anniversaires
          </h2>

          <DefinitionBlock title="Le problème">
            <p>Dans un groupe de <LatexRenderer latex="k" /> personnes, quelle est la probabilité que deux d'entre elles aient le même anniversaire ?</p>
          </DefinitionBlock>

          <ExampleBlock title="Analyse">
            <p className="mb-2">Nombre total de configurations : <LatexRenderer latex="365^k" />.</p>
            <p className="mb-2">Nombre de configurations <strong>sans collision</strong> (tous anniversaires distincts) :</p>
            <div className="text-center mb-2">
              <LatexRenderer latex="A_{365}^k = 365 \times 364 \times \dots \times (365 - k + 1)" />
            </div>
            <p className="mb-2">Probabilité d'au moins une collision :</p>
            <div className="text-center font-semibold text-lg py-2">
              <LatexRenderer latex="P(\text{collision}) = 1 - \frac{A_{365}^k}{365^k}" />
            </div>
            <div className="mt-4 bg-yellow-50 p-3 rounded border border-yellow-200">
              <p className="font-semibold text-yellow-900">Résultat surprenant :</p>
              <p className="text-yellow-800">
                Dès <LatexRenderer latex="k=23" />, la probabilité dépasse 50%.
                Pour <LatexRenderer latex="k=50" />, elle est de 97%.
              </p>
            </div>
          </ExampleBlock>

          <WarningBlock title="Limites informatiques">
            <p className="mb-2">La factorielle croît extrêmement vite (<LatexRenderer latex="100! \approx 9.3 \times 10^{157}" />).</p>
            <p>
              En informatique et cryptographie, le calcul exact des factorielles est coûteux. On utilise des approximations (Stirling) ou on travaille avec des logarithmes pour les probabilités.
            </p>
          </WarningBlock>
        </section>

      </div>
    </OteriaChapterTemplate>
  );
};

export default OteriaDenombrementParadoxesCoursPage;
