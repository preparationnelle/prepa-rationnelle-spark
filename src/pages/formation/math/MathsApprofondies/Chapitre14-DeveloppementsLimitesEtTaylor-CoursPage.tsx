
import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LatexRenderer } from '@/components/LatexRenderer';

const MathsDeveloppementsLimitesPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={14}
      chapterTitle="Développements limités & formule de Taylor"
      description="Formule de Taylor (reste intégral, inégalité de Taylor–Lagrange), DL d'ordre n (Taylor–Young), unicité et dérivabilité ; règles de calcul des DL (combinaisons linéaires, produit, composition, réciproque locale) ; équivalents issus des DL ; DL usuels près de 0 (exp, \ln(1+u), \sin, \cos, puissances, racines)"
    >
      {/* Section 1: Formule de Taylor */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            1. Formule de Taylor
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Définitions</h3>
            <p className="text-slate-700 mb-4">
              Pour <span className="inline-block align-middle"><LatexRenderer latex="f \in \mathcal{C}^{n+1}(I)" /></span> et <span className="inline-block align-middle"><LatexRenderer latex="a, b \in I" /></span>, la <em>formule de Taylor avec reste intégral</em> exprime <span className="inline-block align-middle"><LatexRenderer latex="f(b)" /></span> comme une somme de dérivées évaluées en <span className="inline-block align-middle"><LatexRenderer latex="a" /></span>.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Formule fondamentale</h3>
            <div className="my-4 flex justify-center">
              <LatexRenderer latex="f(b) = \sum_{k=0}^{n} \frac{f^{(k)}(a)}{k!} (b - a)^k + \frac{(b - a)^{n+1}}{n!} \int_{t=0}^{1} (1 - t)^n f^{(n+1)}(a + t (b - a)) \, dt" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Théorème important</h3>
            <p className="text-slate-700 mb-2">
              <strong>Inégalité de Taylor-Lagrange</strong> : Si <span className="inline-block align-middle"><LatexRenderer latex="|f^{(n+1)}(x)| \le M" /></span> sur <span className="inline-block align-middle"><LatexRenderer latex="I" /></span>, alors :
            </p>
            <div className="my-4 flex justify-center">
              <LatexRenderer latex="\left| f(b) - \sum_{k=0}^{n} \frac{f^{(k)}(a)}{k!} (b - a)^k \right| \le \frac{M |b - a|^{n+1}}{(n+1)!}" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 2: Développements limités */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            2. Développements limités d'ordre n
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Définitions</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>
                Un <em>développement limité (DL) d'ordre n</em> de <span className="inline-block align-middle"><LatexRenderer latex="f" /></span> près de <span className="inline-block align-middle"><LatexRenderer latex="x_0" /></span> s'écrit :
                <div className="ml-6 mt-2">
                  <LatexRenderer latex="f(x) = \sum_{k=0}^{n} a_k (x - x_0)^k + o((x - x_0)^n)" />
                </div>
              </li>
              <li>
                Si <span className="inline-block align-middle"><LatexRenderer latex="f \in \mathcal{C}^n" /></span> près de <span className="inline-block align-middle"><LatexRenderer latex="x_0" /></span>, le DL est donné par Taylor-Young :
                <div className="ml-6 mt-2">
                  <LatexRenderer latex="f(x) = \sum_{k=0}^{n} \frac{f^{(k)}(x_0)}{k!} (x - x_0)^k + o((x - x_0)^n)" />
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Théorèmes fondamentaux</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li><strong>Unicité</strong> : Le DL, s'il existe, est unique</li>
              <li>
                <strong>Dérivabilité</strong> : Si <span className="inline-block align-middle"><LatexRenderer latex="f(x) = f(x_0) + a (x - x_0) + o(x - x_0)" /></span>, alors <span className="inline-block align-middle"><LatexRenderer latex="f" /></span> est dérivable en <span className="inline-block align-middle"><LatexRenderer latex="x_0" /></span> et <span className="inline-block align-middle"><LatexRenderer latex="a = f'(x_0)" /></span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Section 3: Propriétés et combinaisons */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            3. Propriétés et combinaisons
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Formules de calcul</h3>
            <ul className="list-disc list-inside space-y-4 text-slate-700">
              <li>
                <strong>Combinaisons linéaires</strong> : <span className="inline-block align-middle"><LatexRenderer latex="af + bg" /></span> a partie régulière <span className="inline-block align-middle"><LatexRenderer latex="aP_f + bP_g" /></span>
              </li>
              <li>
                <strong>Produit</strong> : Le DL de <span className="inline-block align-middle"><LatexRenderer latex="fg" /></span> a pour partie régulière :
                <div className="ml-6 mt-2">
                  <LatexRenderer latex="\sum_{k=0}^{n} (\sum_{i=0}^{k} a_i b_{k-i}) (x - x_0)^k + o((x - x_0)^n)" />
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Théorème important</h3>
            <p className="text-slate-700">
              <strong>Équivalents</strong> : Si <span className="inline-block align-middle"><LatexRenderer latex="f(x) = a_p x^p + o(x^p)" /></span> avec <span className="inline-block align-middle"><LatexRenderer latex="a_p \neq 0" /></span>, alors <span className="inline-block align-middle"><LatexRenderer latex="f(x) \sim a_p x^p (x \to 0)" /></span>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Section 4: Développements usuels */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            4. Développements limités usuels
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Formules essentielles près de 0</h3>
            <ul className="list-disc list-inside space-y-4 text-slate-700">
              <li>
                <strong>Exponentielle</strong> :
                <div className="ml-6 mt-2">
                  <LatexRenderer latex="e^u = 1 + u + \frac{u^2}{2!} + \dots + \frac{u^n}{n!} + o(u^n)" />
                </div>
              </li>
              <li>
                <strong>Logarithme</strong> :
                <div className="ml-6 mt-2">
                  <LatexRenderer latex="\ln(1 + u) = u - \frac{u^2}{2} + \frac{u^3}{3} - \dots + (-1)^{n+1} \frac{u^n}{n} + o(u^n)" />
                </div>
              </li>
              <li>
                <strong>Sinus et cosinus</strong> :
                <div className="ml-6 mt-2">
                  <LatexRenderer latex="\sin u = u - \frac{u^3}{3!} + \dots + (-1)^n \frac{u^{2n+1}}{(2n+1)!} + o(u^{2n+1})" />
                </div>
                <div className="ml-6 mt-2">
                  <LatexRenderer latex="\cos u = 1 - \frac{u^2}{2!} + \dots + (-1)^n \frac{u^{2n}}{(2n)!} + o(u^{2n})" />
                </div>
              </li>
              <li>
                <strong>Puissance et racine</strong> :
                <div className="ml-6 mt-2">
                  <LatexRenderer latex="\frac{1}{1 + u} = 1 - u + u^2 - \dots + (-1)^n u^n + o(u^n)" />
                </div>
                <div className="ml-6 mt-2">
                  <LatexRenderer latex="\sqrt{1 + u} = 1 + \frac{u}{2} - \frac{u^2}{8} + o(u^2)" />
                </div>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </MathChapterTemplate>
  );
};

export default MathsDeveloppementsLimitesPage;
