
import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LatexRenderer } from '@/components/LatexRenderer';

const MathsInegalitesPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={19}
      chapterTitle="Convergences et théorèmes limites"
      description="Modes de convergence des variables aléatoires et théorèmes fondamentaux"
    >
      {/* Section 1: Inégalités fondamentales */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            1. Inégalités fondamentales
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Inégalités classiques</h3>
            <ul className="list-disc list-inside space-y-4 text-slate-700">
              <li>
                <strong>Inégalité de Markov</strong> : Pour <span className="inline-block align-middle"><LatexRenderer latex="Z" /></span> variable aléatoire positive et <span className="inline-block align-middle"><LatexRenderer latex="a > 0" /></span> :
                <div className="ml-6 mt-2">
                  <LatexRenderer latex="\mathbb{P}(Z \ge a) \le \frac{\mathbb{E}(Z)}{a}" />
                </div>
              </li>
              <li>
                <strong>Inégalité de Bienaymé-Tchebychev</strong> : Pour <span className="inline-block align-middle"><LatexRenderer latex="\varepsilon > 0" /></span> :
                <div className="ml-6 mt-2">
                  <LatexRenderer latex="\mathbb{P}(|Z - \mathbb{E}(Z)| \ge \varepsilon) \le \frac{\mathrm{V}(Z)}{\varepsilon^2}" />
                </div>
                si <span className="inline-block align-middle"><LatexRenderer latex="\mathrm{V}(Z)" /></span> existe
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Section 2: Convergence en probabilité */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            2. Convergence en probabilité
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Définition</h3>
            <p className="text-slate-700 mb-4">
              Une suite <span className="inline-block align-middle"><LatexRenderer latex="(Z_n)_{n \ge 1}" /></span> converge en probabilité vers <span className="inline-block align-middle"><LatexRenderer latex="Z" /></span>, notée <span className="inline-block align-middle"><LatexRenderer latex="Z_n \xrightarrow{\mathbb{P}} Z" /></span>, si :
            </p>
            <div className="ml-6">
              <LatexRenderer latex="\forall \varepsilon > 0, \quad \lim_{n \to \infty} \mathbb{P}(|Z_n - Z| \ge \varepsilon) = 0" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Théorèmes fondamentaux</h3>
            <ul className="list-disc list-inside space-y-4 text-slate-700">
              <li>
                <strong>Loi faible des grands nombres (LFGN)</strong> : Pour <span className="inline-block align-middle"><LatexRenderer latex="(Y_k)_{k \ge 1}" /></span> indépendantes, équiprobables :
                <div className="ml-6 mt-2">
                  <LatexRenderer latex="\forall \varepsilon > 0, \quad \lim_{n \to \infty} \mathbb{P}(|\overline{Y}_n - m| \ge \varepsilon) = 0" />
                </div>
                où <span className="inline-block align-middle"><LatexRenderer latex="\overline{Y}_n = \frac{1}{n} \sum_{k=1}^{n} Y_k" /></span>
              </li>
              <li>
                <strong>Composition</strong> : Si <span className="inline-block align-middle"><LatexRenderer latex="Z_n \xrightarrow{\mathbb{P}} Z" /></span> et <span className="inline-block align-middle"><LatexRenderer latex="g" /></span> continue, alors <span className="inline-block align-middle"><LatexRenderer latex="g(Z_n) \xrightarrow{\mathbb{P}} g(Z)" /></span>
              </li>
              <li>
                <strong>Addition</strong> : Si <span className="inline-block align-middle"><LatexRenderer latex="Z_n \xrightarrow{\mathbb{P}} Z" /></span> et <span className="inline-block align-middle"><LatexRenderer latex="T_n \xrightarrow{\mathbb{P}} T" /></span>, alors <span className="inline-block align-middle"><LatexRenderer latex="Z_n + T_n \xrightarrow{\mathbb{P}} Z + T" /></span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Section 3: Convergence en loi */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            3. Convergence en loi
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Définitions</h3>
            <ul className="list-disc list-inside space-y-4 text-slate-700">
              <li>
                <span className="inline-block align-middle"><LatexRenderer latex="Z_n \xrightarrow{\mathcal{L}} Z" /></span> si, pour tout <span className="inline-block align-middle"><LatexRenderer latex="x" /></span> continu de <span className="inline-block align-middle"><LatexRenderer latex="F_Z" /></span> :
                <div className="ml-6 mt-2">
                  <LatexRenderer latex="\lim_{n \to \infty} F_{Z_n}(x) = F_Z(x)" />
                </div>
              </li>
              <li>
                Pour variables à valeurs dans <span className="inline-block align-middle"><LatexRenderer latex="\mathbb{N}" /></span> :
                <div className="ml-6 mt-2">
                  <LatexRenderer latex="\lim_{n \to \infty} \mathbb{P}(Z_n = k) = \mathbb{P}(Z = k)" />
                </div>
                pour tout <span className="inline-block align-middle"><LatexRenderer latex="k \in \mathbb{N}" /></span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Théorèmes limites</h3>
            <ul className="list-disc list-inside space-y-4 text-slate-700">
              <li>
                <strong>Théorème central limite (TCL)</strong> : Pour <span className="inline-block align-middle"><LatexRenderer latex="(Y_k)_{k \ge 1}" /></span> indépendantes :
                <div className="ml-6 mt-2">
                  <LatexRenderer latex="Z_n^* = \sqrt{n} \frac{\overline{Y}_n - m}{\sigma} \xrightarrow{\mathcal{L}} \mathcal{N}(0, 1)" />
                </div>
              </li>
              <li>
                <strong>Approximations</strong> :
                <ul className="list-disc list-inside ml-6 mt-2">
                  <li><span className="inline-block align-middle"><LatexRenderer latex="\mathcal{B}(n, p) \approx \mathcal{N}(np, np(1 - p))" /></span> pour <span className="inline-block align-middle"><LatexRenderer latex="n \ge 20" /></span></li>
                  <li><span className="inline-block align-middle"><LatexRenderer latex="\mathcal{P}(\lambda) \approx \mathcal{N}(\lambda, \lambda)" /></span> pour <span className="inline-block align-middle"><LatexRenderer latex="\lambda \ge 10" /></span></li>
                </ul>
              </li>
              <li>
                <strong>Binomiale vers Poisson</strong> :
                <div className="ml-6 mt-2">
                  <LatexRenderer latex="B_n \sim \mathcal{B}(n, \frac{\lambda}{n}) \xrightarrow{\mathcal{L}} \mathcal{P}(\lambda)" />
                </div>
                pour <span className="inline-block align-middle"><LatexRenderer latex="\lambda > 0" /></span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </MathChapterTemplate>
  );
};

export default MathsInegalitesPage;
