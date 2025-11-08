
import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LatexRenderer } from '@/components/LatexRenderer';

const MathsSeriesPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={13}
      chapterTitle="Séries numériques — convergence et critères"
      description="Sommes partielles, reste ; convergence absolue et séries positives ; séries alternées (critère de Leibniz) ; séries remarquables (géométrique, dérivées géométriques, Riemann, exponentielle) ; critères de convergence : équivalence, comparaison, négligeabilité, d'Alembert (rapport), Cauchy (racine), critère intégral"
    
      
    >
      {/* Section 1: Sommes partielles et convergence */}
      <Card className="border-0 shadow-lg"
      
    >
        <CardHeader
      
    >
          <CardTitle className="text-2xl font-bold text-blue-600"
      
    >
            1. Sommes partielles et convergence
          </CardTitle
      
    >
        </CardHeader
      
    >
        <CardContent className="space-y-6"
      
    >
          <div
      
    >
            <h3 className="text-lg font-semibold mb-3">Définitions</h3
      
    >
            <ul className="list-disc list-inside space-y-2 text-slate-700"
      
    >
              <li
      
    >
                Pour une suite <span className="inline-block align-middle"><LatexRenderer latex="(u_k)" /></span>, la <em>somme partielle</em> <span className="inline-block align-middle"><LatexRenderer latex="S_n" /></span> est définie par :
                <div className="ml-6 mt-2"
      
    >
                  <span className="inline-block align-middle"><LatexRenderer latex="S_n = \sum_{k=0}^{n} u_k" /></span
      
    >
                </div
      
    >
              </li
      
    >
              <li
      
    >
                Une série <span className="inline-block align-middle"><LatexRenderer latex="\sum_{k=0}^{\infty} u_k" /></span> <em>converge</em> si <span className="inline-block align-middle"><LatexRenderer latex="(S_n)" /></span> converge ; sa limite est la somme de la série
              </li
      
    >
            </ul
      
    >
          </div
      
    >

          <div
      
    >
            <h3 className="text-lg font-semibold mb-3">Théorèmes fondamentaux</h3
      
    >
            <ul className="list-disc list-inside space-y-2 text-slate-700"
      
    >
              <li
      
    >
                <strong>Condition nécessaire</strong> : Si <span className="inline-block align-middle"><LatexRenderer latex="\sum_{k=0}^{\infty} u_k" /></span> converge, alors <span className="inline-block align-middle"><LatexRenderer latex="\lim_{n \to +\infty} u_n = 0" /></span
      
    >
              </li
      
    >
              <li
      
    >
                <strong>Somme de la série</strong> : <span className="inline-block align-middle"><LatexRenderer latex="\sum_{k=0}^{\infty} u_k = \lim_{n \to +\infty} \sum_{k=0}^{n} u_k" /></span
      
    >
              </li
      
    >
            </ul
      
    >
          </div
      
    >
        </CardContent
      
    >
      </Card
      
    >

      {/* Section 2: Propriétés et restes */}
      <Card className="border-0 shadow-lg"
      
    >
        <CardHeader
      
    >
          <CardTitle className="text-2xl font-bold text-blue-600"
      
    >
            2. Propriétés et restes
          </CardTitle
      
    >
        </CardHeader
      
    >
        <CardContent className="space-y-6"
      
    >
          <div
      
    >
            <h3 className="text-lg font-semibold mb-3">Définitions et propriétés</h3
      
    >
            <ul className="list-disc list-inside space-y-2 text-slate-700"
      
    >
              <li
      
    >
                <em>Reste d'ordre n</em> : Pour une série convergente <span className="inline-block align-middle"><LatexRenderer latex="\sum_{k=0}^{\infty} u_k" /></span>, le reste est <span className="inline-block align-middle"><LatexRenderer latex="\sum_{k=n+1}^{\infty} u_k" /></span
      
    >
              </li
      
    >
              <li
      
    >
                <strong>Combinaison linéaire</strong> : Si deux séries convergent, alors :
                <div className="ml-6 mt-2"
      
    >
                  <LatexRenderer latex="\sum_{n=0}^{\infty} (a u_n + b v_n) = a \sum_{n=0}^{\infty} u_n + b \sum_{n=0}^{\infty} v_n" /
      
    >
                </div
      
    >
              </li
      
    >
            </ul
      
    >
          </div
      
    >

          <div
      
    >
            <h3 className="text-lg font-semibold mb-3">Théorèmes importants</h3
      
    >
            <ul className="list-disc list-inside space-y-2 text-slate-700"
      
    >
              <li
      
    >
                <strong>Reste</strong> : <span className="inline-block align-middle"><LatexRenderer latex="\lim_{n \to +\infty} \sum_{k=n+1}^{\infty} u_k = 0" /></span> pour une série convergente
              </li
      
    >
              <li
      
    >
                <strong>Série télescopique</strong> : <span className="inline-block align-middle"><LatexRenderer latex="\sum_{k=0}^{n-1} (u_{k+1} - u_k) = u_n - u_0" /></span
      
    >
              </li
      
    >
            </ul
      
    >
          </div
      
    >
        </CardContent
      
    >
      </Card
      
    >

      {/* Section 3: Convergence absolue */}
      <Card className="border-0 shadow-lg"
      
    >
        <CardHeader
      
    >
          <CardTitle className="text-2xl font-bold text-blue-600"
      
    >
            3. Convergence absolue et séries positives
          </CardTitle
      
    >
        </CardHeader
      
    >
        <CardContent className="space-y-6"
      
    >
          <div
      
    >
            <h3 className="text-lg font-semibold mb-3">Définitions</h3
      
    >
            <ul className="list-disc list-inside space-y-2 text-slate-700"
      
    >
              <li
      
    >
                Une série est <em>absolument convergente</em> si <span className="inline-block align-middle"><LatexRenderer latex="\sum_{n=0}^{\infty} |u_n|" /></span> converge
              </li
      
    >
              <li
      
    >
                Pour <span className="inline-block align-middle"><LatexRenderer latex="u_n \ge 0" /></span>, la série converge si <span className="inline-block align-middle"><LatexRenderer latex="(S_n)" /></span> est majorée
              </li
      
    >
            </ul
      
    >
          </div
      
    >

          <div
      
    >
            <h3 className="text-lg font-semibold mb-3">Formules classiques</h3
      
    >
            <ul className="list-disc list-inside space-y-4 text-slate-700"
      
    >
              <li
      
    >
                <strong>Série géométrique</strong> : Pour <span className="inline-block align-middle"><LatexRenderer latex="|q| < 1" /></span
      
    >
                <div className="ml-6 mt-2"
      
    >
                  <LatexRenderer latex="\sum_{k=0}^{\infty} q^k = \frac{1}{1-q}" /
      
    >
                </div
      
    >
              </li
      
    >
              <li
      
    >
                <strong>Dérivées géométriques</strong> : Pour <span className="inline-block align-middle"><LatexRenderer latex="|q| < 1" /></span
      
    >
                <div className="ml-6 mt-2"
      
    >
                  <LatexRenderer latex="\sum_{k=1}^{\infty} k q^{k-1} = \frac{1}{(1-q)^2}" /
      
    >
                </div
      
    >
                <div className="ml-6 mt-2"
      
    >
                  <LatexRenderer latex="\sum_{k=2}^{\infty} k(k-1) q^{k-2} = \frac{2}{(1-q)^3}" /
      
    >
                </div
      
    >
              </li
      
    >
            </ul
      
    >
          </div
      
    >
        </CardContent
      
    >
      </Card
      
    >

      {/* Section 4: Critères de convergence */}
      <Card className="border-0 shadow-lg"
      
    >
        <CardHeader
      
    >
          <CardTitle className="text-2xl font-bold text-blue-600"
      
    >
            4. Critères de convergence
          </CardTitle
      
    >
        </CardHeader
      
    >
        <CardContent className="space-y-6"
      
    >
          <div
      
    >
            <h3 className="text-lg font-semibold mb-3">Séries remarquables</h3
      
    >
            <ul className="list-disc list-inside space-y-4 text-slate-700"
      
    >
              <li
      
    >
                <strong>Série de Riemann</strong> : <span className="inline-block align-middle"><LatexRenderer latex="\sum_{n=1}^{\infty} \frac{1}{n^\alpha}" /></span> converge si <span className="inline-block align-middle"><LatexRenderer latex="\alpha > 1" /></span
      
    >
              </li
      
    >
              <li
      
    >
                <strong>Série exponentielle</strong> : Pour tout <span className="inline-block align-middle"><LatexRenderer latex="x \in \mathbb{R}" /></span
      
    >
                <div className="ml-6 mt-2"
      
    >
                  <LatexRenderer latex="\sum_{n=0}^{\infty} \frac{x^n}{n!} = e^x" /
      
    >
                </div
      
    >
              </li
      
    >
            </ul
      
    >
          </div
      
    >

          <div
      
    >
            <h3 className="text-lg font-semibold mb-3">Théorèmes de comparaison</h3
      
    >
            <ul className="list-disc list-inside space-y-2 text-slate-700"
      
    >
              <li
      
    >
                <strong>Équivalence</strong> : Si <span className="inline-block align-middle"><LatexRenderer latex="u_n \sim v_n" /></span> et séries à termes positifs, elles ont même nature
              </li
      
    >
              <li
      
    >
                <strong>Comparaison</strong> : Si <span className="inline-block align-middle"><LatexRenderer latex="0 \le u_n \le v_n" /></span> et <span className="inline-block align-middle"><LatexRenderer latex="\sum v_n" /></span> converge, alors <span className="inline-block align-middle"><LatexRenderer latex="\sum u_n" /></span> converge
              </li
      
    >
              <li
      
    >
                <strong>Négligeabilité</strong> : Si <span className="inline-block align-middle"><LatexRenderer latex="u_n = o(v_n)" /></span> et <span className="inline-block align-middle"><LatexRenderer latex="\sum v_n" /></span> converge avec <span className="inline-block align-middle"><LatexRenderer latex="v_n \ge 0" /></span>, alors <span className="inline-block align-middle"><LatexRenderer latex="\sum u_n" /></span> converge
              </li
      
    >
            </ul
      
    >
          </div
      
    >
        </CardContent
      
    >
      </Card
      
    >
    </MathChapterTemplate
      
    >
  );
};

export default MathsSeriesPage;
