import React from 'react';
import { OteriaChapterTemplate } from '@/components/formation/OteriaChapterTemplate';
import { LatexRenderer } from '@/components/LatexRenderer';
import {
  DefinitionBlock,
  TheoremBlock,
  ExampleBlock,
  ProofBlock,
  RemarkBlock,
  WarningBlock,
  CodeBlock,
  TruthTable,
} from '@/components/formation/AcademicBlocks';

const OteriaLogiqueFondamentaleCoursPage: React.FC = () => {
  return (
    <OteriaChapterTemplate
      sessionNumber={1}
      sessionTitle="Logique fondamentale & booléens"
      description="Les bases du raisonnement mathématique : connecteurs logiques, quantificateurs et méthodes de démonstration, avec application directe en Python."
      slug="logique-fondamentale"
      duration="3h"
      level="Débutant"
    >
      <div className="space-y-12 text-slate-700 leading-relaxed max-w-none">
        {/* ─── INTRODUCTION ────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Introduction
          </h2>
          <p className="mb-4">
            La logique est la grammaire des mathématiques. Elle permet de construire des phrases (assertions) précises et de valider des raisonnements. En informatique, elle est le fondement du fonctionnement des processeurs et des conditions dans les programmes.
          </p>

          <RemarkBlock title="Le Paradoxe du Barbier (Russell, 1901)">
            <p className="mb-2">
              Imaginez un village avec une règle stricte : <br />
              <em>« Le barbier rase tous les hommes du village qui ne se rasent pas eux-mêmes, et seulement ceux-là. »</em>
            </p>
            <p>
              <strong>Question :</strong> Qui rase le barbier ?
            </p>
            <ul className="list-disc list-inside mt-2 ml-2 space-y-1">
              <li>S'il se rase lui-même, il ne doit pas se raser (car il ne rase que ceux qui ne se rasent pas eux-mêmes).</li>
              <li>S'il ne se rase pas lui-même, il doit se raser (car il rase tous ceux qui ne se rasent pas eux-mêmes).</li>
            </ul>
            <p className="mt-2 text-sm italic">
              Ce paradoxe montre que le langage naturel est ambigu. La logique formelle sert à lever ces ambiguïtés.
            </p>
          </RemarkBlock>
        </section>

        {/* ─── PARTIE A : ÉLÉMENTS DE LOGIQUE ────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            A. Éléments de logique
          </h2>

          {/* A.1 Assertions */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-slate-800 flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-slate-300 rounded-full"></span>
              A.1. Assertions (ou Propositions)
            </h3>

            <DefinitionBlock title="Assertion">
              Une <strong>assertion</strong> (ou proposition) est une phrase mathématique qui est soit <strong className="text-emerald-700">VRAIE</strong>, soit <strong className="text-red-700">FAUSSE</strong>, mais jamais les deux en même temps.
            </DefinitionBlock>

            <ExampleBlock>
              <ul className="list-disc list-inside space-y-1">
                <li><LatexRenderer latex="2 + 2 = 4" /> (Vrai)</li>
                <li><LatexRenderer latex="3 \times 6 = 10" /> (Faux)</li>
                <li><LatexRenderer latex="\text{Pour tout } x \in \mathbb{R}, x^2 \geq 0" /> (Vrai)</li>
              </ul>
              <p className="mt-2 text-slate-500 text-sm">
                Contre-exemple (ce n'est pas une assertion) : « Cette phrase est fausse » (Paradoxe).
              </p>
            </ExampleBlock>
          </div>

          {/* A.2 Négation */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-slate-800 flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-slate-300 rounded-full"></span>
              A.2. La Négation (NON)
            </h3>

            <DefinitionBlock title="Négation">
              La négation d'une assertion <LatexRenderer latex="P" />, notée <LatexRenderer latex="\neg P" /> (ou <LatexRenderer latex="\text{non} P" />), est l'assertion qui est vraie si <LatexRenderer latex="P" /> est fausse, et fausse si <LatexRenderer latex="P" /> est vraie.
            </DefinitionBlock>

            <TruthTable
              headers={[<LatexRenderer latex="P" />, <LatexRenderer latex="\neg P" />]}
              rows={[
                ['V', 'F'],
                ['F', 'V']
              ]}
              className="max-w-xs"
            />

            <WarningBlock title="Piège classique">
              La négation de <em>« Tout le monde aime les maths »</em> n'est pas <em>« Personne n'aime les maths »</em>.<br />
              C'est : <em>« <strong>Au moins une</strong> personne n'aime pas les maths »</em>.
            </WarningBlock>
          </div>

          {/* A.3 ET / OU */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-slate-800 flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-slate-300 rounded-full"></span>
              A.3. Conjonction (ET) et Disjonction (OU)
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <DefinitionBlock title="Conjonction (ET)">
                  L'assertion <LatexRenderer latex="P \wedge Q" /> est vraie si <strong>P et Q sont VRAIES en même temps.</strong>
                </DefinitionBlock>
                <TruthTable
                  headers={[<LatexRenderer latex="P" />, <LatexRenderer latex="Q" />, <LatexRenderer latex="P \wedge Q" />]}
                  rows={[
                    ['V', 'V', 'V'],
                    ['V', 'F', 'F'],
                    ['F', 'V', 'F'],
                    ['F', 'F', 'F']
                  ]}
                  caption="Table de vérité du ET"
                />
              </div>
              <div>
                <DefinitionBlock title="Disjonction (OU)">
                  L'assertion <LatexRenderer latex="P \vee Q" /> est vraie si <strong>au moins l'une</strong> des deux est VRAIE.
                </DefinitionBlock>
                <TruthTable
                  headers={[<LatexRenderer latex="P" />, <LatexRenderer latex="Q" />, <LatexRenderer latex="P \vee Q" />]}
                  rows={[
                    ['V', 'V', 'V'],
                    ['V', 'F', 'V'],
                    ['F', 'V', 'V'],
                    ['F', 'F', 'F']
                  ]}
                  caption="Table de vérité du OU (inclusif)"
                />
              </div>
            </div>

            <WarningBlock title="Attention au 'OU' français">
              En maths, le « ou » est <strong>inclusif</strong>. « fromage ou dessert » signifie qu'on peut prendre les deux.<br />
              Le « ou exclusif » (l'un ou l'autre mais pas les deux) existe mais est plus rare.
            </WarningBlock>
          </div>

          {/* A.4 Implication */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-slate-800 flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-slate-300 rounded-full"></span>
              A.4. L'Implication (Si... Alors...)
            </h3>

            <DefinitionBlock title="Implication">
              L'assertion <LatexRenderer latex="P \Rightarrow Q" /> est fausse <strong>uniquement</strong> si <LatexRenderer latex="P" /> est Vraie et <LatexRenderer latex="Q" /> est Fausse.
              Dans tous les autres cas, elle est vraie.
            </DefinitionBlock>

            <TruthTable
              headers={[<LatexRenderer latex="P" />, <LatexRenderer latex="Q" />, <LatexRenderer latex="P \Rightarrow Q" />]}
              rows={[
                ['V', 'V', 'V'],
                ['V', 'F', 'F'],
                ['F', 'V', 'V'],
                ['F', 'F', 'V']
              ]}
              caption="Notez les deux dernières lignes : le Faux implique n'importe quoi !"
            />

            <ExampleBlock title="Exemple contre-intuitif">
              L'assertion : <br />
              <em>« Si 1+1=3, alors je suis le Pape »</em> <br />
              est mathématiquement <strong>VRAIE</strong>. Pourquoi ? Car l'hypothèse « 1+1=3 » est fausse.
            </ExampleBlock>

            <TheoremBlock title="Contraposée" variant="theorem">
              L'implication <LatexRenderer latex="P \Rightarrow Q" /> est logiquement équivalente à sa <strong>contraposée</strong> :
              <div className="text-center my-2 text-lg">
                <LatexRenderer latex="\neg Q \Rightarrow \neg P" />
              </div>
            </TheoremBlock>

            <WarningBlock title="Ne pas confondre !">
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Implication : </strong> <LatexRenderer latex="P \Rightarrow Q" /> (S'il pleut, le sol est mouillé)</li>
                <li><strong>Réciproque : </strong> <LatexRenderer latex="Q \Rightarrow P" /> (Si le sol est mouillé, il pleut — FAUX, on a pu arroser)</li>
                <li><strong>Contraposée : </strong> <LatexRenderer latex="\neg Q \Rightarrow \neg P" /> (Si le sol n'est pas mouillé, il ne pleut pas — VRAI)</li>
              </ul>
            </WarningBlock>
          </div>

          {/* A.5 Quantificateurs */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-slate-800 flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-slate-300 rounded-full"></span>
              A.5. Les Quantificateurs
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <DefinitionBlock title="Quantificateur UNIVERSEL (∀)">
                <LatexRenderer latex="\forall x \in E, P(x)" /><br />
                « Pour tout x appartenant à E... »<br />
                Vrai si P(x) est vrai pour <strong>tous</strong> les éléments.
              </DefinitionBlock>

              <DefinitionBlock title="Quantificateur EXISTENTIEL (∃)">
                <LatexRenderer latex="\exists x \in E, P(x)" /><br />
                « Il existe au moins un x appartenant à E... »<br />
                Vrai si P(x) est vrai pour <strong>au moins un</strong> élément.
              </DefinitionBlock>
            </div>

            <ExampleBlock title="Ordre des quantificateurs (CRUCIAL)">
              L'ordre change le sens !
              <ul className="mt-2 space-y-2">
                <li>
                  1. <LatexRenderer latex="\forall x \in \mathbb{R}, \exists y \in \mathbb{R}, x + y = 0" /> <br />
                  <em>« Pour chaque nombre x, on peut trouver un y qui l'annule. »</em> (Vrai, y = -x)
                </li>
                <li>
                  2. <LatexRenderer latex="\exists y \in \mathbb{R}, \forall x \in \mathbb{R}, x + y = 0" /> <br />
                  <em>« Il existe un nombre magique y qui annule tous les x possibles en même temps. »</em> (Faux)
                </li>
              </ul>
            </ExampleBlock>

            <TheoremBlock title="Négation des quantificateurs">
              La négation inverse le quantificateur :
              <ul className="mt-2 space-y-2 text-center">
                <li><LatexRenderer latex="\neg (\forall x, P(x)) \iff \exists x, \neg P(x)" /></li>
                <li><LatexRenderer latex="\neg (\exists x, P(x)) \iff \forall x, \neg P(x)" /></li>
              </ul>
            </TheoremBlock>
          </div>
        </section>

        {/* ─── PARTIE B : MÉTHODES DE RAISONNEMENT ───────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            B. Méthodes de raisonnement
          </h2>

          <p className="mb-6">Voici les structures de base pour démontrer des théorèmes.</p>

          <div className="grid gap-6">
            {/* B.1 Raisonnement direct */}
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">B.1. Raisonnement direct (Modus Ponens)</h3>
              <p className="text-sm mb-2">Pour montrer <LatexRenderer latex="P \Rightarrow Q" />, on suppose <LatexRenderer latex="P" /> vrai, et on en déduit <LatexRenderer latex="Q" />.</p>
            </div>

            {/* B.2 Cas par cas */}
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">B.2. Disjonction de cas</h3>
              <ExampleBlock title="Exemple">
                Montrer que pour tout entier <LatexRenderer latex="n" />, <LatexRenderer latex="n(n+1)" /> est pair.
                <ProofBlock title="Preuve par disjonction de cas">
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>Cas 1 : n est pair.</strong> Alors <LatexRenderer latex="n = 2k" />. Donc <LatexRenderer latex="n(n+1) = 2k(2k+1) = 2[k(2k+1)]" />, ce qui est pair.</li>
                    <li><strong>Cas 2 : n est impair.</strong> Alors <LatexRenderer latex="n = 2k+1" />. Donc <LatexRenderer latex="n+1 = 2k+2" /> est pair. Le produit d'un pair et d'un impair est pair.</li>
                  </ul>
                  Dans tous les cas, le résultat est pair.
                </ProofBlock>
              </ExampleBlock>
            </div>

            {/* B.3 Contraposée */}
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">B.3. Par contraposée</h3>
              <p className="text-sm mb-2">Au lieu de montrer <LatexRenderer latex="P \Rightarrow Q" />, on montre <LatexRenderer latex="\neg Q \Rightarrow \neg P" />.</p>
              <ExampleBlock>
                Montrer : Si <LatexRenderer latex="n^2" /> est impair, alors <LatexRenderer latex="n" /> est impair.
                <br />
                <strong>Par contraposée :</strong> Montrons que si <LatexRenderer latex="n" /> est pair, alors <LatexRenderer latex="n^2" /> est pair.
                <br />
                Si <LatexRenderer latex="n=2k" />, alors <LatexRenderer latex="n^2 = (2k)^2 = 4k^2 = 2(2k^2)" />, qui est bien pair.
              </ExampleBlock>
            </div>

            {/* B.4 Absurde */}
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">B.4. Raisonnement par l'absurde</h3>
              <p className="text-sm mb-2">Pour montrer <LatexRenderer latex="P" />, on suppose <LatexRenderer latex="\neg P" /> et on cherche une contradiction.</p>

              <TheoremBlock title="Irrationalité de √2" variant="theorem">
                <LatexRenderer latex="\sqrt{2}" /> n'est pas un nombre rationnel (<LatexRenderer latex="\sqrt{2} \notin \mathbb{Q}" />).
              </TheoremBlock>

              <ProofBlock title="Preuve classique par l'absurde">
                Supposons par l'absurde que <LatexRenderer latex="\sqrt{2} \in \mathbb{Q}" />.
                On peut donc écrire <LatexRenderer latex="\sqrt{2} = \frac{p}{q}" /> avec <LatexRenderer latex="p, q" /> entiers premiers entre eux (fraction irréductible).
                <br /><br />
                1. Élevons au carré : <LatexRenderer latex="2 = \frac{p ^ 2}{q ^ 2} \implies p^2 = 2q^2" />.
                <br />
                2. Donc <LatexRenderer latex="p^2" /> est pair, ce qui implique que <LatexRenderer latex="p" /> est pair (voir plus haut).
                <br />
                3. Écrivons <LatexRenderer latex="p = 2k" />. L'équation devient <LatexRenderer latex="(2k)^2 = 2q^2 \implies 4k^2 = 2q^2 \implies 2k^2 = q^2" />.
                <br />
                4. Donc <LatexRenderer latex="q^2" /> est pair, ce qui implique que <LatexRenderer latex="q" /> est pair.
                <br /><br />
                <strong>Contradiction :</strong> Si <LatexRenderer latex="p" /> et <LatexRenderer latex="q" /> sont tous deux pairs, la fraction n'était pas irréductible (on peut diviser par 2).
                L'hypothèse de départ est donc fausse.
              </ProofBlock>
            </div>
          </div>
        </section>

        {/* ─── PARTIE C : APPLICATIONS PYTHON ────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            C. Applications en Python
          </h2>

          <p className="mb-4">
            En programmation, la logique booléenne est omniprésente. Python utilise les mots-clés anglais : <code>and</code>, <code>or</code>, <code>not</code>.
          </p>

          <CodeBlock
            title="Bases booléennes"
            code={`# Les booléens en Python (True / False)
x = True
y = False

# Négation
print(not x)        # False

# Conjonction (ET)
print(x and y)      # False (car y est faux)

# Disjonction (OU)
print(x or y)       # True (car x est vrai)

# Assertions complexes
age = 20
has_permis = True
can_drive = (age >= 18) and has_permis 
print(can_drive)    # True`}
          />

          <WarningBlock title="Pièces à éviter">
            En Python, <code>1</code> vaut <code>True</code> et <code>0</code> vaut <code>False</code> dans un contexte booléen, mais il vaut mieux être explicite.
            <br />
            Attention : <code>bool("Faux")</code> renvoie <strong>True</strong> car la chaîne n'est pas vide !
          </WarningBlock>

          <h3 className="text-lg font-semibold mt-8 mb-4">Exercice d'application</h3>
          <p className="mb-2">Écrire une fonction qui vérifie si une année est bissextile.</p>
          <DefinitionBlock title="Règle bissextile">
            Une année est bissextile si :
            <ul className="list-disc list-inside mt-1">
              <li>Elle est divisible par 4</li>
              <li>ET (elle n'est pas divisible par 100 OU elle est divisible par 400).</li>
            </ul>
          </DefinitionBlock>

          <CodeBlock
            title="Solution : Année bissextile"
            code={`def est_bissextile(annee):
    """
    Renvoie True si l'année est bissextile, False sinon.
    Logique : (Divisible par 4) ET ((Pas divisible par 100) OU (Divisible par 400))
    """
    div_4 = (annee % 4 == 0)
    div_100 = (annee % 100 == 0)
    div_400 = (annee % 400 == 0)
    
    return div_4 and (not div_100 or div_400)

# Tests
print(est_bissextile(2024)) # True (div 4, pas 100)
print(est_bissextile(1900)) # False (div 4, div 100 mais pas 400)
print(est_bissextile(2000)) # True (div 400)`}
          />
        </section>
      </div>
    </OteriaChapterTemplate>
  );
};

export default OteriaLogiqueFondamentaleCoursPage;
