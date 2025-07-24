
import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LatexRenderer } from '@/components/LatexRenderer';

const MathsVariablesAleatoiresPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={18}
      chapterTitle="Variables aléatoires discrètes et lois de probabilité"
      description="Étude des variables aléatoires discrètes, leurs lois et caractéristiques"
    >
      {/* Section 1: Généralités */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            1. Généralités sur les variables aléatoires
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Définitions fondamentales</h3>
            <ul className="list-disc list-inside space-y-4 text-slate-700">
              <li>
                Une <em>variable aléatoire réelle</em> <span className="inline-block align-middle"><LatexRenderer latex="X: \Omega \to \mathbb{R}" /></span> sur <span className="inline-block align-middle"><LatexRenderer latex="(\Omega, \mathcal{A}, \mathbb{P})" /></span> satisfait :
                <div className="ml-6 mt-2">
                  <LatexRenderer latex="\{\omega \mid X(\omega) \le x\} \in \mathcal{A} \text{ pour tout } x \in \mathbb{R}" />
                </div>
              </li>
              <li>
                Le <em>support</em> <span className="inline-block align-middle"><LatexRenderer latex="\operatorname{Supp}(X) = X(\Omega)" /></span> est l'ensemble des valeurs atteintes
              </li>
              <li>
                Une variable est <em>discrète</em> si son support est fini ou dénombrable
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Fonction de répartition</h3>
            <div className="space-y-4">
              <div>
                <p className="text-slate-700 mb-2">Définition :</p>
                <div className="ml-6">
                  <LatexRenderer latex="F(x) = \mathbb{P}(X \le x), \quad x \in \mathbb{R}" />
                </div>
              </div>
              <div>
                <p className="text-slate-700 mb-2">Probabilité d'un intervalle :</p>
                <div className="ml-6">
                  <LatexRenderer latex="\mathbb{P}(a < X \le b) = F(b) - F(a), \quad a < b" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 2: Lois et fonctions de répartition */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            2. Lois et fonctions de répartition
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Définitions et propriétés</h3>
            <ul className="list-disc list-inside space-y-4 text-slate-700">
              <li>
                La <em>loi</em> de <span className="inline-block align-middle"><LatexRenderer latex="Y" /></span> discrète est donnée par <span className="inline-block align-middle"><LatexRenderer latex="\mathbb{P}(Y = x)" /></span> pour <span className="inline-block align-middle"><LatexRenderer latex="x \in Y(\Omega)" /></span>, avec :
                <div className="ml-6 mt-2">
                  <LatexRenderer latex="\sum_{x \in Y(\Omega)} \mathbb{P}(Y = x) = 1" />
                </div>
              </li>
              <li>
                Pour <span className="inline-block align-middle"><LatexRenderer latex="Y" /></span> à valeurs dans <span className="inline-block align-middle"><LatexRenderer latex="\mathbb{N}" /></span> :
                <div className="ml-6 mt-2">
                  <LatexRenderer latex="F(m) = \sum_{k=0}^{m} \mathbb{P}(Y = k)" />
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Formule importante</h3>
            <p className="text-slate-700 mb-2">Pour tout <span className="inline-block align-middle"><LatexRenderer latex="m \ge 1" /></span> :</p>
            <div className="ml-6">
              <LatexRenderer latex="\mathbb{P}(Y = m) = F(m) - F(m - 1)" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 3: Espérance et variance */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            3. Espérance et variance
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Définitions</h3>
            <ul className="list-disc list-inside space-y-4 text-slate-700">
              <li>
                <strong>Espérance</strong> :
                <div className="ml-6 mt-2">
                  <LatexRenderer latex="\mathbb{E}(X) = \sum_{x \in X(\Omega)} x \mathbb{P}(X = x)" />
                </div>
                si la série converge absolument
              </li>
              <li>
                <strong>Variance</strong> :
                <div className="ml-6 mt-2">
                  <LatexRenderer latex="\operatorname{Var}(X) = \mathbb{E}((X - \mathbb{E}(X))^2)" />
                </div>
              </li>
              <li>
                <strong>Variable réduite</strong> :
                <div className="ml-6 mt-2">
                  <LatexRenderer latex="X^* = \frac{X - \mathbb{E}(X)}{\sqrt{\operatorname{Var}(X)}}" />
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Formules essentielles</h3>
            <ul className="list-disc list-inside space-y-4 text-slate-700">
              <li>
                <strong>Koenig-Huygens</strong> :
                <div className="ml-6 mt-2">
                  <LatexRenderer latex="\operatorname{Var}(X) = \mathbb{E}(X^2) - (\mathbb{E}(X))^2" />
                </div>
              </li>
              <li>
                <strong>Transformation affine</strong> :
                <div className="ml-6 mt-2">
                  <LatexRenderer latex="\operatorname{Var}(aX + b) = a^2 \operatorname{Var}(X)" />
                </div>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Section 4: Lois discrètes classiques */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            4. Lois discrètes classiques
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Lois usuelles</h3>
            <ul className="list-disc list-inside space-y-4 text-slate-700">
              <li>
                <strong>Bernoulli</strong> <span className="inline-block align-middle"><LatexRenderer latex="\mathcal{B}(p)" /></span> :
                <div className="ml-6 mt-2">
                  <LatexRenderer latex="\mathbb{P}(X = 1) = p, \quad \mathbb{E}(X) = p, \quad \operatorname{Var}(X) = p(1-p)" />
                </div>
              </li>
              <li>
                <strong>Binomiale</strong> <span className="inline-block align-middle"><LatexRenderer latex="\mathcal{B}(n,p)" /></span> :
                <div className="ml-6 mt-2">
                  <LatexRenderer latex="\mathbb{P}(X = k) = \binom{n}{k} p^k (1-p)^{n-k}, \quad \mathbb{E}(X) = np, \quad \operatorname{Var}(X) = np(1-p)" />
                </div>
              </li>
              <li>
                <strong>Géométrique</strong> <span className="inline-block align-middle"><LatexRenderer latex="\mathcal{G}(p)" /></span> :
                <div className="ml-6 mt-2">
                  <LatexRenderer latex="\mathbb{P}(X = k) = (1-p)^{k-1}p, \quad \mathbb{E}(X) = \frac{1}{p}, \quad \operatorname{Var}(X) = \frac{1-p}{p^2}" />
                </div>
              </li>
              <li>
                <strong>Poisson</strong> <span className="inline-block align-middle"><LatexRenderer latex="\mathcal{P}(\lambda)" /></span> :
                <div className="ml-6 mt-2">
                  <LatexRenderer latex="\mathbb{P}(X = k) = \frac{\lambda^k e^{-\lambda}}{k!}, \quad \mathbb{E}(X) = \lambda, \quad \operatorname{Var}(X) = \lambda" />
                </div>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </MathChapterTemplate>
  );
};

export default MathsVariablesAleatoiresPage;
