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

const OteriaProbabilitesIntroductionCoursPage: React.FC = () => {
  return (
    <OteriaChapterTemplate
      sessionNumber={8}
      sessionTitle="Introduction aux Probabilités"
      description="Génération d'aléatoire, Règles addition / multiplication, indépendance"
      slug="probabilites-introduction"
      duration="4h"
      level="Intermédiaire"
      activeSection="course"
      previousSession={{ slug: 'denombrement-paradoxes', title: 'Dénombrement & Paradoxes' }}
      nextSession={{ slug: 'variables-aleatoires', title: 'Variables Aléatoires' }}
    >
      <div className="space-y-12 text-slate-700 leading-relaxed max-w-none">

        {/* ─── INTRODUCTION ────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Introduction
          </h2>
          <p className="mb-4">
            Les probabilités permettent de modéliser l'incertitude. Ce chapitre pose les bases mathématiques (espaces probabilisés, axiomes) et explore les notions clés comme l'indépendance et le conditionnement, avec des applications en informatique (génération aléatoire).
          </p>
        </section>

        {/* ─── ESPACES PROBABILISÉS ─────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Espaces probabilisés
          </h2>

          <DefinitionBlock title="Univers et Événements">
            <p className="mb-2">
              Une <strong>épreuve aléatoire</strong> est associée à un univers <LatexRenderer latex="\Omega" /> (ensemble des issues possibles).
            </p>
            <p className="mb-2">
              Un <strong>événement</strong> est un sous-ensemble de <LatexRenderer latex="\Omega" />. L'ensemble des événements, noté <LatexRenderer latex="\mathcal{A}" />, est une tribu (ou $\sigma$-algèbre) vérifiant :
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li><LatexRenderer latex="\Omega \in \mathcal{A}" /></li>
              <li>Stable par passage au complémentaire : <LatexRenderer latex="A \in \mathcal{A} \implies A^c \in \mathcal{A}" /></li>
              <li>Stable par union dénombrable : <LatexRenderer latex="(\forall n, A_n \in \mathcal{A}) \implies \bigcup A_n \in \mathcal{A}" /></li>
            </ul>
          </DefinitionBlock>

          <RemarkBlock title="Événements notables">
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><LatexRenderer latex="\Omega" /> : événement certain.</li>
              <li><LatexRenderer latex="\varnothing" /> : événement impossible.</li>
              <li><LatexRenderer latex="\{\omega\}" /> : événement élémentaire.</li>
            </ul>
          </RemarkBlock>

          <TheoremBlock title="Limites monotones">
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Si la suite <LatexRenderer latex="(A_n)" /> est croissante (<LatexRenderer latex="A_n \subset A_{n+1}" />), alors :
                <div className="text-center py-1"><LatexRenderer latex="P(\bigcup_{n} A_n) = \lim_{n \to \infty} P(A_n)" /></div>
              </li>
              <li>
                Si la suite <LatexRenderer latex="(A_n)" /> est décroissante (<LatexRenderer latex="A_{n+1} \subset A_n" />), alors :
                <div className="text-center py-1"><LatexRenderer latex="P(\bigcap_{n} A_n) = \lim_{n \to \infty} P(A_n)" /></div>
              </li>
            </ul>
          </TheoremBlock>
        </section>

        {/* ─── PROBABILITÉS ET OPÉRATIONS ───────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Définition et Propriétés
          </h2>

          <DefinitionBlock title="Probabilité (Axiomes de Kolmogorov)">
            <p className="mb-2">Une probabilité est une application <LatexRenderer latex="P : \mathcal{A} \to [0, 1]" /> vérifiant :</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li><LatexRenderer latex="P(\Omega) = 1" /></li>
              <li>
                <strong>$\sigma$-additivité :</strong> Pour toute suite <LatexRenderer latex="(A_n)" /> d'événements deux à deux disjoints :
                <div className="text-center py-1"><LatexRenderer latex="P(\bigcup_{n=0}^\infty A_n) = \sum_{n=0}^\infty P(A_n)" /></div>
              </li>
            </ol>
          </DefinitionBlock>

          <TheoremBlock title="Formules fondamentales">
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><LatexRenderer latex="P(A^c) = 1 - P(A)" /></li>
              <li><LatexRenderer latex="A \subset B \implies P(A) \leq P(B)" /> (Croissance)</li>
              <li>
                <strong>Formule du crible (Poincaré) :</strong>
                <div className="text-center py-1"><LatexRenderer latex="P(A \cup B) = P(A) + P(B) - P(A \cap B)" /></div>
              </li>
            </ul>
          </TheoremBlock>

          <DefinitionBlock title="Équiprobabilité">
            <p className="mb-2">Si <LatexRenderer latex="\Omega" /> est fini et que toutes les issues ont la même probabilité (ex: dé équilibré) :</p>
            <div className="text-center font-semibold">
              <LatexRenderer latex="P(A) = \frac{\text{Card}(A)}{\text{Card}(\Omega)} = \frac{\text{Nombre de cas favorables}}{\text{Nombre de cas possibles}}" />
            </div>
          </DefinitionBlock>
        </section>

        {/* ─── CONDITIONNEMENT ET INDÉPENDANCE ──────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Conditionnement et Indépendance
          </h2>

          <DefinitionBlock title="Probabilité conditionnelle">
            <p className="mb-2">Si <LatexRenderer latex="P(B) > 0" />, la probabilité de <LatexRenderer latex="A" /> sachant <LatexRenderer latex="B" /> est :</p>
            <div className="text-center font-semibold mb-2">
              <LatexRenderer latex="P_B(A) = P(A | B) = \frac{P(A \cap B)}{P(B)}" />
            </div>
          </DefinitionBlock>

          <DefinitionBlock title="Indépendance">
            <p className="mb-2">Deux événements <LatexRenderer latex="A" /> et <LatexRenderer latex="B" /> sont indépendants si et seulement si :</p>
            <div className="text-center font-semibold mb-2">
              <LatexRenderer latex="P(A \cap B) = P(A) P(B)" />
            </div>
            <p className="text-sm text-slate-600">
              Cela équivaut à <LatexRenderer latex="P_B(A) = P(A)" /> (si <LatexRenderer latex="P(B)>0" />). L'information que <LatexRenderer latex="B" /> est réalisé ne change pas la probabilité de <LatexRenderer latex="A" />.
            </p>
          </DefinitionBlock>

          <TheoremBlock title="Formules avancées">
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-slate-800 mb-1">Probabilités composées :</p>
                <div className="text-center"><LatexRenderer latex="P(A_1 \cap \dots \cap A_n) = P(A_1) \times P_{A_1}(A_2) \times \dots \times P_{A_1 \cap \dots \cap A_{n-1}}(A_n)" /></div>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-1">Formule des Probabilités Totales :</p>
                <p className="mb-1 text-sm">Si <LatexRenderer latex="(B_n)" /> forme une partition de <LatexRenderer latex="\Omega" /> (avec <LatexRenderer latex="P(B_n)>0" />) :</p>
                <div className="text-center"><LatexRenderer latex="P(A) = \sum_{n} P(A \cap B_n) = \sum_{n} P(B_n) P_{B_n}(A)" /></div>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-1">Formule de Bayes :</p>
                <div className="text-center"><LatexRenderer latex="P_A(B_k) = \frac{P(B_k) P_{B_k}(A)}{\sum_{j} P(B_j) P_{B_j}(A)}" /></div>
              </div>
            </div>
          </TheoremBlock>
        </section>

        {/* ─── GÉNÉRATION DE HASARD ─────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Génération de hasard (Python)
          </h2>

          <p className="mb-4">
            En informatique, on utilise des générateurs <strong>pseudo-aléatoires</strong> (déterministes mais imprévisibles sans la graine) pour simuler le hasard.
          </p>

          <CodeBlock
            language="python"
            title="Module random"
            code={`import random

# Entier entre a et b (inclus)
x = random.randint(1, 6)  # Ex: dé à 6 faces

# Réel uniforme dans [0, 1[
y = random.random()

# Choix dans une liste
couleurs = ['rouge', 'vert', 'bleu']
choix = random.choice(couleurs)

# Mélange d'une liste
random.shuffle(couleurs)`}
          />

          <WarningBlock title="Sécurité">
            <p>
              Le module <code>random</code> de Python n'est pas cryptographiquement sûr (on peut prédire la suite si on connaît l'état interne).
              Pour la cryptographie, utiliser le module <code>secrets</code>.
            </p>
          </WarningBlock>
        </section>

        {/* ─── PARADOXE DE MONTY HALL ──────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Cas pratique : Le paradoxe de Monty Hall
          </h2>

          <ExampleBlock title="Le problème">
            <p className="mb-2">Jeu télévisé avec 3 portes : 1 voiture (gagnant), 2 chèvres (perdant).</p>
            <ol className="list-decimal list-inside space-y-1 ml-4 mb-2">
              <li>Le joueur choisit une porte.</li>
              <li>L'animateur (qui sait où est la voiture) ouvre une <em>autre</em> porte, révélant une chèvre.</li>
              <li>L'animateur propose au joueur de changer son choix pour la porte restante.</li>
            </ol>
            <p className="font-semibold mt-2">Faut-il changer ?</p>
          </ExampleBlock>

          <RemarkBlock title="Solution">
            <p className="mb-2">
              <strong>OUI</strong>, il faut changer. Cela double les chances de gagner (passe de <LatexRenderer latex="1/3" /> à <LatexRenderer latex="2/3" />).
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Si on garde son choix initial : on gagne si on avait bon dès le début (<LatexRenderer latex="1/3" />).</li>
              <li>Si on change : on gagne si on avait tort au début (<LatexRenderer latex="2/3" />), car l'animateur élimine l'autre mauvaise porte.</li>
            </ul>
          </RemarkBlock>
        </section>

      </div>
    </OteriaChapterTemplate>
  );
};

export default OteriaProbabilitesIntroductionCoursPage;
