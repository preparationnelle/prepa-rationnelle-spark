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

const OteriaMatricesStochastiquesCoursPage: React.FC = () => {
  return (
    <OteriaChapterTemplate
      sessionNumber={12}
      sessionTitle="Arithmétique Modulaire & Cryptographie"
      description="Divisibilité, Nombres premiers, Congruences, RSA, Chiffrement Affine"
      slug="matrices-stochastiques"
      duration="3h"
      level="Avancé"
      activeSection="course"
      previousSession={{ slug: 'matrices-markov', title: 'Matrices & Markov' }}
    >
      <div className="space-y-12 text-slate-700 leading-relaxed max-w-none">

        {/* ─── INTRODUCTION ────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Introduction
          </h2>
          <p className="mb-4">
            L'arithmétique modulaire est la base mathématique de la cryptographie moderne (RSA, Elliptic Curves). Ce chapitre explore les propriétés des entiers, les congruences et leurs applications à la sécurité des données.
          </p>
        </section>

        {/* ─── DIVISIBILITÉ ────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Divisibilité et Nombres Premiers
          </h2>

          <DefinitionBlock title="Division Euclidienne">
            <p className="mb-2">
              Pour tout <LatexRenderer latex="a \in \mathbb{Z}" /> et <LatexRenderer latex="b > 0" />, il existe un unique couple <LatexRenderer latex="(q, r)" /> tel que :
            </p>
            <div className="text-center font-semibold mb-2">
              <LatexRenderer latex="a = bq + r \quad \text{avec} \quad 0 \leq r < b" />
            </div>
          </DefinitionBlock>

          <DefinitionBlock title="PGCD et Nombres Premiers">
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>PGCD :</strong> Plus Grand Commun Diviseur. Si <LatexRenderer latex="\gcd(a,b)=1" />, <LatexRenderer latex="a" /> et <LatexRenderer latex="b" /> sont premiers entre eux.</li>
              <li><strong>Nombre Premier :</strong> Entier <LatexRenderer latex="p > 1" /> divisible uniquement par 1 et lui-même.</li>
            </ul>
          </DefinitionBlock>

          <TheoremBlock title="Théorème de Bézout">
            <p className="mb-2">
              <LatexRenderer latex="\gcd(a, b) = d" /> si et seulement s'il existe <LatexRenderer latex="u, v \in \mathbb{Z}" /> tels que :
            </p>
            <div className="text-center font-semibold">
              <LatexRenderer latex="au + bv = d" />
            </div>
            <p className="text-sm mt-2">
              Utile pour trouver l'inverse modulaire (Algorithme d'Euclide Étendu).
            </p>
          </TheoremBlock>
        </section>

        {/* ─── ARITHMÉTIQUE MODULAIRE ──────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Arithmétique Modulaire
          </h2>

          <DefinitionBlock title="Congruence">
            <p className="mb-2">
              On dit que <LatexRenderer latex="a \equiv b \pmod{n}" /> si <LatexRenderer latex="n" /> divise <LatexRenderer latex="a - b" />.
            </p>
            <p className="mb-2">
              Cela équivaut à dire que <LatexRenderer latex="a" /> et <LatexRenderer latex="b" /> ont le même reste dans la division par <LatexRenderer latex="n" />.
            </p>
          </DefinitionBlock>

          <TheoremBlock title="Opérations Modulaires">
            <p className="mb-2">La congruence est compatible avec l'addition et la multiplication :</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><LatexRenderer latex="a \equiv b \implies a+c \equiv b+c \pmod{n}" /></li>
              <li><LatexRenderer latex="a \equiv b \implies ac \equiv bc \pmod{n}" /></li>
              <li><LatexRenderer latex="a \equiv b \implies a^k \equiv b^k \pmod{n}" /></li>
            </ul>
          </TheoremBlock>

          <ExampleBlock title="Exemples">
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><LatexRenderer latex="17 \equiv 5 \pmod{12}" /> (Horloge)</li>
              <li><LatexRenderer latex="100 \equiv 1 \pmod{9}" /></li>
            </ul>
          </ExampleBlock>
        </section>

        {/* ─── INVERSE MODULAIRE ───────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Inverse Modulaire
          </h2>

          <DefinitionBlock title="Inverse modulo n">
            <p className="mb-2">
              Un entier <LatexRenderer latex="a" /> est inversible modulo <LatexRenderer latex="n" /> s'il existe <LatexRenderer latex="u" /> tel que :
            </p>
            <div className="text-center font-semibold mb-2">
              <LatexRenderer latex="au \equiv 1 \pmod{n}" />
            </div>
            <p>
              Condition d'existence : <LatexRenderer latex="\gcd(a, n) = 1" />.
            </p>
          </DefinitionBlock>

          <CodeBlock
            language="python"
            title="Calcul de l'inverse (Euclide étendu)"
            code={`def inversible_modulaire(a, n):
    # Algorithme d'Euclide étendu simplifié
    t, new_t = 0, 1
    r, new_r = n, a
    
    while new_r != 0:
        quotient = r // new_r
        t, new_t = new_t, t - quotient * new_t
        r, new_r = new_r, r - quotient * new_r
        
    if r > 1:
        return None # Pas inversible
    if t < 0:
        t = t + n
        
    return t

print(inversible_modulaire(3, 26)) # Renvoie 9 car 3*9 = 27 = 1 mod 26`}
          />
        </section>

        {/* ─── APPLICATION : CRYPTO AFFINE ─────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Cryptographie Affine
          </h2>

          <DefinitionBlock title="Chiffrement Affine">
            <p className="mb-2">
              Chaque lettre <LatexRenderer latex="x" /> (A=0, B=1...) est chiffrée par la fonction :
            </p>
            <div className="text-center font-semibold mb-2">
              <LatexRenderer latex="E(x) = (ax + b) \pmod{26}" />
            </div>
            <p className="text-sm">
              Clé : <LatexRenderer latex="(a, b)" /> avec <LatexRenderer latex="\gcd(a, 26)=1" />.
            </p>
          </DefinitionBlock>

          <DefinitionBlock title="Déchiffrement">
            <p className="mb-2">
              Fonction inverse :
            </p>
            <div className="text-center font-semibold mb-2">
              <LatexRenderer latex="D(y) = a^{-1}(y - b) \pmod{26}" />
            </div>
          </DefinitionBlock>

          <ExampleBlock title="Exemple (Clé : a=3, b=7)">
            <p className="mb-2">Chiffrer 'H' (7) :</p>
            <p className="ml-4"><LatexRenderer latex="E(7) = (3 \times 7 + 7) \pmod{26} = 28 \pmod{26} = 2" /> → 'C'.</p>
            <p className="mb-2 mt-2">Déchiffrer 'C' (2) :</p>
            <p className="ml-4">Inverse de 3 mod 26 est 9 (car <LatexRenderer latex="3 \times 9 = 27 \equiv 1" />).</p>
            <p className="ml-4"><LatexRenderer latex="D(2) = 9(2 - 7) = 9(-5) = -45 \equiv 7 \pmod{26}" /> → 'H'.</p>
          </ExampleBlock>
        </section>

        {/* ─── CRYPTO ASYMÉTRIQUE : RSA ────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Vers RSA (Rivest-Shamir-Adleman)
          </h2>

          <RemarkBlock title="Principe de RSA">
            <p className="mb-2">
              La sécurité repose sur la difficulté de factoriser un grand nombre <LatexRenderer latex="n = pq" />.
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm ml-2">
              <li><strong>Clé publique <LatexRenderer latex="(n, e)" /> :</strong> Chiffrement <LatexRenderer latex="C \equiv M^e \pmod{n}" />.</li>
              <li><strong>Clé privée <LatexRenderer latex="(d)" /> :</strong> Déchiffrement <LatexRenderer latex="M \equiv C^d \pmod{n}" />.</li>
            </ul>
            <p className="mt-2 text-sm italic">
              L'arithmétique modulaire permet de "verrouiller" des données avec une opération facile à faire dans un sens (puissance) mais difficile à inverser sans la clé (logarithme discret / factorisation).
            </p>
          </RemarkBlock>

          <CodeBlock
            language="python"
            title="Exponentiation Modulaire Rapide"
            code={`# Python le fait nativement
# pow(base, exposant, module)

# Calcul d'une clé RSA (exemple fictif)
M = 42
e = 65537
n = 123456789

# Chiffrement
C = pow(M, e, n)

print(f"Message chiffré : {C}")`}
          />
        </section>

      </div>
    </OteriaChapterTemplate>
  );
};

export default OteriaMatricesStochastiquesCoursPage;
