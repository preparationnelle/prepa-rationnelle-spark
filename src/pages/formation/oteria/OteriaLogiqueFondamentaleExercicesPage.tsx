import React from 'react';
import { OteriaChapterTemplate } from '@/components/formation/OteriaChapterTemplate';
import { LatexRenderer } from '@/components/LatexRenderer';
import {
  ExerciseBlock,
  CodeBlock,
  TruthTable,
  WarningBlock
} from '@/components/formation/AcademicBlocks';

const OteriaLogiqueFondamentaleExercicesPage: React.FC = () => {
  return (
    <OteriaChapterTemplate
      sessionNumber={1}
      sessionTitle="Logique fondamentale & booléens en Python"
      description="Exercices pratiques pour maîtriser les concepts de logique, les connecteurs, les quantificateurs et les méthodes de raisonnement."
      slug="logique-fondamentale"
      duration="3h"
      level="Débutant"
      activeSection="exercises"
    >
      <div className="space-y-8 max-w-none text-slate-700">

        {/* ─── OBJECTIFS ────────────────────────────────────────────── */}
        <div className="bg-slate-50 border border-slate-100 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Objectifs de la séance</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li>Identifier et manipuler les propositions logiques</li>
            <li>Maîtriser les connecteurs et construire des tables de vérité</li>
            <li>Utiliser correctement les quantificateurs (<LatexRenderer latex="\forall, \exists" inline />)</li>
            <li>Savoir démontrer par contraposée et par l'absurde</li>
            <li>Manipuler les booléens en Python</li>
          </ul>
        </div>

        {/* ─── EXERCICE 1 ───────────────────────────────────────────── */}
        <ExerciseBlock
          number="1"
          title="Traductions en quantificateurs"
          solution={
            <div className="space-y-2">
              <p>1. <LatexRenderer latex="\forall x \in \mathbb{R}, f(x) = 0" /></p>
              <p>2. <LatexRenderer latex="\exists x \in \mathbb{R}, D(x) = 0" /></p>
              <p>3. <LatexRenderer latex="\forall x \in \mathbb{R}, f(x) = x" /></p>
              <p>4. <LatexRenderer latex="\exists x \in \mathbb{R}, f(x) = x" /> (Interprétation : le graphe coupe la droite <LatexRenderer latex="y=x" inline />)</p>
              <p>5. <LatexRenderer latex="\forall (x,y) \in \mathbb{R}^2, x \le y \Rightarrow f(x) \le f(y)" /></p>
              <p>6. <LatexRenderer latex="\exists ! x \in \mathbb{R}, \sin(x) = x" /></p>
              <p>7. <LatexRenderer latex="\forall M \in \mathcal{P}, (M \in \mathcal{C} \iff \Omega M = R)" /></p>
            </div>
          }
        >
          <p className="mb-4">Traduire les phrases suivantes à l'aide de quantificateurs et de connecteurs logiques :</p>
          <ol className="list-decimal list-inside space-y-2 pl-2">
            <li><LatexRenderer latex="f" inline /> est la fonction nulle (sur <LatexRenderer latex="\mathbb{R}" inline />).</li>
            <li>Le dénominateur <LatexRenderer latex="D" inline /> de <LatexRenderer latex="f" inline /> s'annule au moins une fois sur <LatexRenderer latex="\mathbb{R}" inline />.</li>
            <li><LatexRenderer latex="f" inline /> est l'identité de <LatexRenderer latex="\mathbb{R}" inline />.</li>
            <li>Le graphe de <LatexRenderer latex="f" inline /> coupe la droite d'équation <LatexRenderer latex="y = x" inline />.</li>
            <li><LatexRenderer latex="f" inline /> est croissante sur <LatexRenderer latex="\mathbb{R}" inline />.</li>
            <li>L'équation <LatexRenderer latex="\sin(x) = x" inline /> a une et une seule solution dans <LatexRenderer latex="\mathbb{R}" inline />.</li>
            <li>Pour tout point <LatexRenderer latex="M" inline /> du plan <LatexRenderer latex="\mathcal{P}" inline />, <LatexRenderer latex="M" inline /> est sur le cercle <LatexRenderer latex="\mathcal{C}" inline /> de centre <LatexRenderer latex="\Omega" inline /> et de rayon <LatexRenderer latex="R" inline /> si et seulement si la distance <LatexRenderer latex="\Omega M" inline /> vaut <LatexRenderer latex="R" inline />.</li>
          </ol>
        </ExerciseBlock>

        {/* ─── EXERCICE 2 ───────────────────────────────────────────── */}
        <ExerciseBlock
          number="2"
          title="Finesse des quantificateurs"
          solution={
            <div className="space-y-4">
              <div>
                <strong className="text-slate-900">1. Entiers</strong>
                <ul className="list-disc list-inside mt-1 pl-2">
                  <li>a) <LatexRenderer latex="\forall n \in \mathbb{N}, (n \text{ est pair } \lor n \text{ est impair})" /> (Vrai)</li>
                  <li>b) <LatexRenderer latex="(\forall n \in \mathbb{N}, n \text{ est pair}) \lor (\forall n \in \mathbb{N}, n \text{ est impair})" /> (Faux, car il y a des pairs et des impairs)</li>
                </ul>
              </div>
              <div>
                <strong className="text-slate-900">2. Monotonie</strong>
                <ul className="list-disc list-inside mt-1 pl-2">
                  <li>a) <LatexRenderer latex="(\forall (a,b)\in\mathbb{R}^2, a<b \Rightarrow f(a)<f(b)) \lor (\forall (a,b)\in\mathbb{R}^2, a<b \Rightarrow f(a)>f(b))" /></li>
                  <li>b) Négation de a) : <LatexRenderer latex="f" inline /> n'est PAS (strictement croissante OU strictement décroissante). C'est-à-dire qu'elle n'est ni l'un ni l'autre.</li>
                </ul>
              </div>
            </div>
          }
        >
          <p className="mb-4">Écrire avec des quantificateurs les propositions suivantes :</p>
          <div className="space-y-4">
            <div>
              <strong className="text-slate-800">1) Entiers naturels</strong>
              <ul className="list-none space-y-1 pl-4 mt-1 border-l-2 border-slate-100">
                <li>a) Tout entier naturel est pair ou impair.</li>
                <li>b) Tout entier naturel est pair ou tout entier naturel est impair.</li>
              </ul>
            </div>
            <div>
              <strong className="text-slate-800">2) Fonctions</strong>
              <ul className="list-none space-y-1 pl-4 mt-1 border-l-2 border-slate-100">
                <li>a) <LatexRenderer latex="f" inline /> est strictement monotone sur <LatexRenderer latex="\mathbb{R}" inline />.</li>
                <li>b) <LatexRenderer latex="f" inline /> n'est pas strictement monotone sur <LatexRenderer latex="\mathbb{R}" inline />.</li>
              </ul>
            </div>
          </div>
        </ExerciseBlock>

        {/* ─── EXERCICE 3 (Propositions) ────────────────────────────── */}
        <ExerciseBlock
          number="3"
          title="Vrai, Faux ou Proposition ?"
          solution={
            <ul className="list-disc list-inside">
              <li><LatexRenderer latex="2+3=5" inline /> : Proposition <strong>VRAIE</strong>.</li>
              <li><LatexRenderer latex="x+1=3" inline /> : Ce n'est pas une proposition fermée (c'est un prédicat), sa vérité dépend de <LatexRenderer latex="x" inline />.</li>
              <li><LatexRenderer latex="5" inline /> est premier : Proposition <strong>VRAIE</strong>.</li>
              <li>Paris est la capitale de l'Italie : Proposition <strong>FAUSSE</strong>.</li>
            </ul>
          }
        >
          <p className="mb-2">Les phrases suivantes sont-elles des propositions logiques ? Si oui, donner leur valeur de vérité.</p>
          <ol className="list-decimal list-inside space-y-1 pl-2">
            <li><LatexRenderer latex="2+3=5" inline /></li>
            <li><LatexRenderer latex="x+1=3" inline /></li>
            <li>5 est un nombre premier</li>
            <li>Paris est la capitale de l'Italie</li>
          </ol>
        </ExerciseBlock>

        {/* ─── EXERCICE 4 (Négation) ────────────────────────────────── */}
        <ExerciseBlock
          number="4"
          title="Négations"
          solution={
            <ol className="list-decimal list-inside space-y-2">
              <li>Il existe au moins un étudiant qui n'a pas réussi l'examen.</li>
              <li><LatexRenderer latex="\forall n \in \mathbb{N}, (n > 2 \land n \text{ pair}) \Rightarrow n \text{ non premier}" /> (Tout entier pair strictement supérieur à 2 est composé).</li>
              <li><LatexRenderer latex="n" inline /> est impair OU <LatexRenderer latex="n" inline /> n'est pas multiple de 3.</li>
              <li><LatexRenderer latex="n" inline /> est pair ET <LatexRenderer latex="n \le 10" inline />.</li>
            </ol>
          }
        >
          <p className="mb-2">Donner la négation des propositions suivantes :</p>
          <ol className="list-decimal list-inside space-y-1 pl-2">
            <li>« Tous les étudiants ont réussi l'examen »</li>
            <li>« Il existe un entier pair supérieur à 2 qui est premier »</li>
            <li>« <LatexRenderer latex="n" inline /> est pair et <LatexRenderer latex="n" inline /> est multiple de 3 »</li>
            <li>« <LatexRenderer latex="n" inline /> est impair ou <LatexRenderer latex="n > 10" inline /> »</li>
          </ol>
        </ExerciseBlock>

        {/* ─── EXERCICE 5 (Tables de vérité) ────────────────────────── */}
        <ExerciseBlock
          number="5"
          title="Tables de vérité"
          solution={
            <div>
              <p className="mb-4 text-sm text-slate-600">Table de vérité comparée pour la loi de Morgan : <LatexRenderer latex="\neg(P \lor Q) \iff (\neg P \land \neg Q)" inline /></p>
              <TruthTable
                headers={[
                  <LatexRenderer latex="P" />,
                  <LatexRenderer latex="Q" />,
                  <LatexRenderer latex="P \lor Q" />,
                  <LatexRenderer latex="\neg(P \lor Q)" />,
                  <LatexRenderer latex="\neg P" />,
                  <LatexRenderer latex="\neg Q" />,
                  <LatexRenderer latex="\neg P \land \neg Q" />
                ]}
                rows={[
                  ['V', 'V', 'V', 'F', 'F', 'F', 'F'],
                  ['V', 'F', 'V', 'F', 'F', 'V', 'F'],
                  ['F', 'V', 'V', 'F', 'V', 'F', 'F'],
                  ['F', 'F', 'F', 'V', 'V', 'V', 'V'],
                ]}
                caption="On constate que les colonnes 4 et 7 sont identiques."
              />
            </div>
          }
        >
          <p className="mb-4">Dresser les tables de vérité et comparer les expressions suivantes :</p>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="list-disc list-inside space-y-1">
              <li><LatexRenderer latex="P \land Q" inline /></li>
              <li><LatexRenderer latex="P \lor Q" inline /></li>
              <li><LatexRenderer latex="P \Rightarrow Q" inline /></li>
            </ul>
            <ul className="list-disc list-inside space-y-1">
              <li>Comparer <LatexRenderer latex="\neg(P \lor Q)" inline /> et <LatexRenderer latex="(\neg P) \land (\neg Q)" inline /></li>
              <li>Vérifier <LatexRenderer latex="(P \Rightarrow Q) \iff (\neg Q \Rightarrow \neg P)" inline /></li>
            </ul>
          </div>
        </ExerciseBlock>

        {/* ─── EXERCICE 6 (Contraposée) ─────────────────────────────── */}
        <ExerciseBlock
          number="6"
          title="Raisonnement par Contraposée"
          solution={
            <div className="space-y-4">
              <div>
                <strong className="text-slate-900">1. Pair/Impair</strong>
                <p className="mt-1">Contraposée : « Si <LatexRenderer latex="n" inline /> est impair, alors <LatexRenderer latex="n^2" inline /> est impair. »</p>
                <p className="text-sm italic text-slate-600">Démontré dans le cours.</p>
              </div>
              <div>
                <strong className="text-slate-900">2. Divisibilité</strong>
                <p className="mt-1">Phrase : <LatexRenderer latex="6|n \Rightarrow 3|n" inline />.</p>
                <p className="mt-1">Contraposée : « Si <LatexRenderer latex="n" inline /> n'est pas divisible par 3, alors <LatexRenderer latex="n" inline /> n'est pas divisible par 6. »</p>
                <p className="mt-1">Preuve : Si <LatexRenderer latex="n" inline /> n'est pas multiple de 3, il ne peut pas s'écrire <LatexRenderer latex="3k" inline />. Or si <LatexRenderer latex="n" inline /> était multiple de 6, on aurait <LatexRenderer latex="n=6k = 3(2k)" inline />, donc <LatexRenderer latex="n" inline /> serait multiple de 3. Contradiction. Donc si non multiple de 3, alors non multiple de 6.</p>
              </div>
            </div>
          }
        >
          <ol className="list-decimal list-inside space-y-4">
            <li>Démontrer par la contraposée : « Si <LatexRenderer latex="n^2" inline /> est pair, alors <LatexRenderer latex="n" inline /> est pair ».</li>
            <li>Démontrer par la contraposée : « Si <LatexRenderer latex="n" inline /> est divisible par 6, alors <LatexRenderer latex="n" inline /> est divisible par 3 ».</li>
          </ol>
        </ExerciseBlock>

        {/* ─── EXERCICE 7 (Absurde) ────────────────────────────────── */}
        <ExerciseBlock
          number="7"
          title="Raisonnement par l'Absurde"
          solution={
            <div>
              <p>Supposons <LatexRenderer latex="\sqrt{2} \in \mathbb{Q}" inline />. Alors <LatexRenderer latex="\sqrt{2} = p/q" inline /> irréductible.</p>
              <p className="mt-2 text-sm italic">Voir le cours pour la démonstration complète.</p>
            </div>
          }
        >
          <p>Redémontrer que <LatexRenderer latex="\sqrt{2}" inline /> est irrationnel en détaillant toutes les étapes.</p>
        </ExerciseBlock>

        {/* ─── EXERCICE 8 (Python) ──────────────────────────────────── */}
        <ExerciseBlock
          number="8"
          title="Logique & Python"
          solution={
            <div className="space-y-4">
              <CodeBlock
                code={`# 12.2 Programme de parité
n = int(input("Entrez un entier : "))
if n % 2 == 0:
    print("pair")
else:
    print("impair")`}
                title="Solution : Parité"
              />
              <CodeBlock
                code={`# 12.3 Table de vérité AND
print("p", "q", "p and q")
for p in [True, False]:
    for q in [True, False]:
        print(int(p), int(q), int(p and q)) # int() pour afficher 0/1 plus lisible`}
                title="Solution : Table de vérité"
              />
            </div>
          }
        >
          <div className="space-y-6">
            <div>
              <strong className="text-slate-800 block mb-2">1. Prédire le résultat :</strong>
              <code className="block bg-slate-100 p-2 rounded text-sm mb-1">True and False</code>
              <code className="block bg-slate-100 p-2 rounded text-sm mb-1">not (True or False)</code>
            </div>

            <div>
              <strong className="text-slate-800 block mb-2">2. Écrire un programme :</strong>
              <p className="mb-2 text-sm">Demande un entier <LatexRenderer latex="n" inline /> et affiche "pair" ou "impair".</p>
            </div>

            <div>
              <strong className="text-slate-800 block mb-2">3. Compléter le code (Table de vérité) :</strong>
              <CodeBlock
                code={`for p in [True, False]:
    for q in [True, False]:
        print(p, q, ??? )`}
                language="python"
              />
            </div>
          </div>
        </ExerciseBlock>

        {/* ─── WARNINGS ─────────────────────────────────────────────── */}
        <WarningBlock title="Erreurs classiques à éviter">
          <ul className="list-none space-y-3">
            <li className="flex gap-2">
              <span className="text-red-500 font-bold">×</span>
              <span>
                Ne croyez pas que le contraire de <LatexRenderer latex="x \ge 0" inline /> est <LatexRenderer latex="x \le 0" inline />. Non ! C'est <LatexRenderer latex="x < 0" inline />.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-500 font-bold">×</span>
              <span>
                Ne confondez pas <LatexRenderer latex="\Rightarrow" inline /> (implication) et <LatexRenderer latex="\iff" inline /> (équivalence).
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-500 font-bold">×</span>
              <span>
                L'ordre des quantificateurs compte ! <LatexRenderer latex="\forall x \exists y" inline /> n'est pas <LatexRenderer latex="\exists y \forall x" inline />.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-500 font-bold">×</span>
              <span>
                <LatexRenderer latex="\forall" inline /> ne se distribue pas sur le OU. <LatexRenderer latex="\forall x, (P(x) \lor Q(x))" inline /> est différent de <LatexRenderer latex="(\forall x, P(x)) \lor (\forall x, Q(x))" inline />.
              </span>
            </li>
          </ul>
        </WarningBlock>

      </div>
    </OteriaChapterTemplate>
  );
};

export default OteriaLogiqueFondamentaleExercicesPage;
