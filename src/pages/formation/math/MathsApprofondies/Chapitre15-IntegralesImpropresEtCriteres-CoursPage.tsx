
import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LatexRenderer } from '@/components/LatexRenderer';

const MathsIntegrationIntervallePage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={15}
      chapterTitle="Intégrales impropres & critères de convergence"
      description="Nature des intégrales impropres (bornes infinies ou singularités), prolongement par continuité, cas faussement impropre et deux fois impropre ; propriétés : positivité, croissance, parité, convergence absolue, reste ; critères de comparaison (équivalence, comparaison, négligeabilité) ; intégrales de référence : Riemann x^{-\alpha}, (x-a)^{-\alpha}, fonction gamma"
    >
      {/* Section 1: Nature et convergence */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            1. Nature et convergence
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Définitions fondamentales</h3>
            <ul className="list-disc list-inside space-y-4 text-slate-700">
              <li>
                Pour <span className="inline-block align-middle"><LatexRenderer latex="f" /></span> continue sur <span className="inline-block align-middle"><LatexRenderer latex="[a, b[" /></span> avec <span className="inline-block align-middle"><LatexRenderer latex="b \in \mathbb{R} \cup \{+\infty\}" /></span>, l'intégrale <span className="inline-block align-middle"><LatexRenderer latex="\int_{a}^{b} f(t) \, dt" /></span> <em>converge</em> si :
                <div className="ml-6 mt-2">
                  <LatexRenderer latex="\lim_{x \to b^{-}} \int_{a}^{x} f(t) \, dt \text{ existe et est fini}" />
                </div>
              </li>
              <li>
                Pour <span className="inline-block align-middle"><LatexRenderer latex="f" /></span> continue sur <span className="inline-block align-middle"><LatexRenderer latex="[a, b]" /></span> avec <span className="inline-block align-middle"><LatexRenderer latex="a \in \mathbb{R} \cup \{-\infty\}" /></span>, l'intégrale converge si :
                <div className="ml-6 mt-2">
                  <LatexRenderer latex="\lim_{x \to a^{+}} \int_{x}^{b} f(t) \, dt \text{ existe et est fini}" />
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Théorème important</h3>
            <p className="text-slate-700 mb-2">
              <strong>Reste</strong> : Si <span className="inline-block align-middle"><LatexRenderer latex="\int_{a}^{b} f(t) \, dt" /></span> (impropre en <span className="inline-block align-middle"><LatexRenderer latex="b" /></span>) converge, alors :
            </p>
            <div className="my-4 flex justify-center">
              <LatexRenderer latex="\lim_{x \to b^{-}} \int_{x}^{b} f(t) \, dt = 0" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 2: Intégrales spéciales */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            2. Intégrales spéciales
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Types particuliers</h3>
            <ul className="list-disc list-inside space-y-4 text-slate-700">
              <li>
                <strong>Intégrale faussement impropre</strong> : Si <span className="inline-block align-middle"><LatexRenderer latex="f" /></span> est continue sur <span className="inline-block align-middle"><LatexRenderer latex="[a, b[" /></span> et prolongeable par continuité en <span className="inline-block align-middle"><LatexRenderer latex="b" /></span> :
                <div className="ml-6 mt-2">
                  <LatexRenderer latex="\int_{a}^{b} f(t) \, dt = \int_{a}^{b} \widetilde{f}(t) \, dt" />
                </div>
                où <span className="inline-block align-middle"><LatexRenderer latex="\widetilde{f}(b) = \lim_{x \to b^{-}} f(x)" /></span>
              </li>
              <li>
                <strong>Intégrale deux fois impropre</strong> : <span className="inline-block align-middle"><LatexRenderer latex="\int_{a}^{b} f(t) \, dt" /></span> converge si les deux intégrales suivantes convergent :
                <div className="ml-6 mt-2">
                  <LatexRenderer latex="\int_{a}^{c} f(t) \, dt \text{ et } \int_{c}^{b} f(t) \, dt \text{ pour } c \in ]a, b[" />
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Théorèmes fondamentaux</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>
                <strong>Positivité</strong> : Si <span className="inline-block align-middle"><LatexRenderer latex="f \ge 0" /></span> sur <span className="inline-block align-middle"><LatexRenderer latex="[a, b[" /></span> et l'intégrale converge, alors <span className="inline-block align-middle"><LatexRenderer latex="\int_{a}^{b} f \ge 0" /></span>
              </li>
              <li>
                <strong>Croissance</strong> : Si <span className="inline-block align-middle"><LatexRenderer latex="f \le g" /></span> et les intégrales convergent, alors <span className="inline-block align-middle"><LatexRenderer latex="\int_{a}^{b} f \le \int_{a}^{b} g" /></span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Section 3: Propriétés spécifiques */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            3. Propriétés spécifiques
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Formules importantes</h3>
            <ul className="list-disc list-inside space-y-4 text-slate-700">
              <li>
                <strong>Parité</strong> : Si <span className="inline-block align-middle"><LatexRenderer latex="f" /></span> est paire et <span className="inline-block align-middle"><LatexRenderer latex="\int_{0}^{+\infty} f(t) \, dt" /></span> converge :
                <div className="ml-6 mt-2">
                  <LatexRenderer latex="\int_{-\infty}^{+\infty} f(t) \, dt = 2 \int_{0}^{+\infty} f(t) \, dt" />
                </div>
              </li>
              <li>
                <strong>Convergence absolue</strong> : Si <span className="inline-block align-middle"><LatexRenderer latex="\int_{a}^{b} |f(t)| \, dt" /></span> converge, alors :
                <div className="ml-6 mt-2">
                  <LatexRenderer latex="\left| \int_{a}^{b} f(t) \, dt \right| \le \int_{a}^{b} |f(t)| \, dt" />
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Théorèmes importants</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>
                <strong>Fonction positive</strong> : Si <span className="inline-block align-middle"><LatexRenderer latex="f > 0" /></span> sur <span className="inline-block align-middle"><LatexRenderer latex="[a, +\infty[" /></span> et <span className="inline-block align-middle"><LatexRenderer latex="\int_{a}^{+\infty} f(t) \, dt" /></span> converge, alors <span className="inline-block align-middle"><LatexRenderer latex="f" /></span> est bornée
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Section 4: Critères et intégrales de référence */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            4. Critères et intégrales de référence
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Intégrales remarquables</h3>
            <ul className="list-disc list-inside space-y-4 text-slate-700">
              <li>
                <strong>Intégrale de Riemann</strong> :
                <div className="ml-6 mt-2">
                  <LatexRenderer latex="\int_{a}^{+\infty} \frac{1}{x^\alpha} \, dx \text{ converge si } \alpha > 1" />
                </div>
                <div className="ml-6 mt-2">
                  <LatexRenderer latex="\int_{a}^{b} \frac{1}{(x - a)^\alpha} \, dx \text{ converge si } \alpha < 1" />
                </div>
              </li>
              <li>
                <strong>Fonction gamma</strong> :
                <div className="ml-6 mt-2">
                  <LatexRenderer latex="\Gamma(t) = \int_{0}^{+\infty} x^{t-1} e^{-x} \, dx \text{ converge si } t > 0" />
                </div>
                <div className="ml-6 mt-2">
                  <LatexRenderer latex="\Gamma(t + 1) = t \Gamma(t), \quad \Gamma(n) = (n - 1)! \text{ pour } n \in \mathbb{N}^*" />
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Critères de convergence</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>
                <strong>Équivalence</strong> : Si <span className="inline-block align-middle"><LatexRenderer latex="f(t) \sim g(t)" /></span> près de <span className="inline-block align-middle"><LatexRenderer latex="b" /></span> et de signe constant, les intégrales ont même nature
              </li>
              <li>
                <strong>Comparaison</strong> : Si <span className="inline-block align-middle"><LatexRenderer latex="0 \le f \le g" /></span> près de <span className="inline-block align-middle"><LatexRenderer latex="b" /></span>, <span className="inline-block align-middle"><LatexRenderer latex="\int_{a}^{b} g" /></span> converge <span className="inline-block align-middle"><LatexRenderer latex="\Rightarrow \int_{a}^{b} f" /></span> converge
              </li>
              <li>
                <strong>Négligeabilité</strong> : Si <span className="inline-block align-middle"><LatexRenderer latex="f = o(g)" /></span> et <span className="inline-block align-middle"><LatexRenderer latex="\int_{a}^{b} g" /></span> converge avec <span className="inline-block align-middle"><LatexRenderer latex="g \ge 0" /></span>, alors <span className="inline-block align-middle"><LatexRenderer latex="\int_{a}^{b} f" /></span> converge
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </MathChapterTemplate>
  );
};

export default MathsIntegrationIntervallePage;
