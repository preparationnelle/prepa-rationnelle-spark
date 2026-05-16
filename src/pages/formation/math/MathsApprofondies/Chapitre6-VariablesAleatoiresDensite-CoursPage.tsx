import React from 'react';
import { Link } from 'react-router-dom';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LatexRenderer } from '@/components/LatexRenderer';
import { BookOpen, Target, Brain, PenTool } from 'lucide-react';
import { ComparisonCard, ComparisonGrid } from '@/components/carnet';

const Chapitre6VariablesAleatoiresDensiteCoursPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={6}
      chapterTitle="Variables aléatoires à densité & lois usuelles"
      description="Définition et caractérisation des densités de probabilité, fonction de répartition, espérance et variance. Lois usuelles : uniforme, exponentielle, gamma, normale."
    
      
    >
      {/* Navigation vers les ressources */}
      <Card className="border-0 shadow-lg bg-pr-gray-bg"
      
    >
        <CardContent className="pt-6"
      
    >
          <div className="flex flex-wrap justify-center gap-3"
      
    >
            <Button className="bg-carnet-red hover:bg-carnet-red-deep text-white"
      
    >
              <BookOpen className="mr-2 h-4 w-4" /
      
    >
              Cours
            </Button
      
    >
            <Link to="/formation/maths-variables-aleatoires-densite-exercices"
      
    >
              <Button variant="outline" className="border-carnet-red/40 text-carnet-red hover:bg-pr-gray-bg"
      
    >
                <PenTool className="mr-2 h-4 w-4" /
      
    >
                Exercices
              </Button
      
    >
            </Link
      
    >
            <Link to="/formation/maths-variables-aleatoires-densite-flashcards"
      
    >
              <Button variant="outline" className="border-carnet-red/40 text-carnet-red hover:bg-pr-gray-bg"
      
    >
                <Brain className="mr-2 h-4 w-4" /
      
    >
                Flashcards
              </Button
      
    >
            </Link
      
    >
            <Link to="/formation/maths-variables-aleatoires-densite-quiz"
      
    >
              <Button variant="outline" className="border-carnet-red/40 text-carnet-red hover:bg-pr-gray-bg"
      
    >
                <Target className="mr-2 h-4 w-4" /
      
    >
                Quiz
              </Button
      
    >
            </Link
      
    >
          </div
      
    >
        </CardContent
      
    >
      </Card
      
    >

      {/* Section 1: Définition */}
      <Card className="border-0 shadow-lg"
      
    >
        <CardHeader
      
    >
          <CardTitle className="text-2xl font-bold text-carnet-red"
      
    >
            1. Définition
          </CardTitle
      
    >
        </CardHeader
      
    >
        <CardContent className="space-y-6"
      
    >
          <div
      
    >
            <p className="text-black mb-4"
      
    >
              Une variable aléatoire <LatexRenderer latex="X" /> est dite <em>à densité</em> lorsque sa
              fonction de répartition <LatexRenderer latex="F_X" /> est continue sur <LatexRenderer latex="\mathbb{R}" /> et
              admet, sauf peut-être en un nombre fini de points, une dérivée continue.
            </p
      
    >
            <div className="bg-pr-gray-bg p-4 rounded-lg"
      
    >
              <p className="text-black mb-3"
      
    >
                Toute fonction positive <LatexRenderer latex="f_X" /> telle que :
              </p
      
    >
              <div className="text-center my-4"
      
    >
                <LatexRenderer latex="\forall x\in\mathbb{R},\quad F_X(x)=\int_{-\infty}^{x}f_X(t)\,dt" /
      
    >
              </div
      
    >
              <p className="text-black text-center"
      
    >
                est alors appelée <strong>densité</strong> de <LatexRenderer latex="X" />.
              </p
      
    >
            </div
      
    >
          </div
      
    >
        </CardContent
      
    >
      </Card
      
    >

      {/* Section 2: Caractérisation d'une densité */}
      <Card className="border-0 shadow-lg"
      
    >
        <CardHeader
      
    >
          <CardTitle className="text-2xl font-bold text-carnet-red"
      
    >
            2. Caractérisation d'une densité
          </CardTitle
      
    >
        </CardHeader
      
    >
        <CardContent className="space-y-6"
      
    >
          <div
      
    >
            <p className="text-black mb-4"
      
    >
              Une fonction <LatexRenderer latex="g:\mathbb{R}\to\mathbb{R}" /> est une densité
              <em> si et seulement si </em> :
            </p
      
    >
            <ul className="list-disc list-inside space-y-3 text-black ml-4"
      
    >
              <li><LatexRenderer latex="g" /> est positive sur <LatexRenderer latex="\mathbb{R}" /> ;</li
      
    >
              <li
      
    >
                <div className="flex items-center gap-2 my-2"
      
    >
                  <LatexRenderer latex="\int_{-\infty}^{+\infty}g(t)\,dt=1" /
      
    >
                </div
      
    >
              </li
      
    >
              <li><LatexRenderer latex="g" /> ne possède qu'un nombre fini de discontinuités.</li
      
    >
            </ul
      
    >
          </div
      
    >
        </CardContent
      
    >
      </Card
      
    >

      {/* Section 3: Probabilités et fonction de répartition */}
      <Card className="border-0 shadow-lg"
      
    >
        <CardHeader
      
    >
          <CardTitle className="text-2xl font-bold text-carnet-red"
      
    >
            3. Probabilités et fonction de répartition
          </CardTitle
      
    >
        </CardHeader
      
    >
        <CardContent className="space-y-6"
      
    >
          <div
      
    >
            <p className="text-black mb-4"
      
    >
              Pour tout <LatexRenderer latex="a<b" /> :
            </p
      
    >
            <div className="bg-pr-gray-bg border-l-4 border-carnet-red/40 p-4 rounded-r-lg"
      
    >
              <div className="text-center"
      
    >
                <LatexRenderer latex="\mathbb{P}(a<X\le b)=F_X(b)-F_X(a)=\int_{a}^{b}f_X(t)\,dt" /
      
    >
              </div
      
    >
            </div
      
    >
            <div className="mt-4 bg-pr-gray-bg p-4 rounded-lg"
      
    >
              <p className="text-black"
      
    >
                <strong>Remarque importante :</strong> Pour une variable aléatoire continue,
                <LatexRenderer latex="\mathbb{P}(X=x)=0" /> pour chaque <LatexRenderer latex="x\in\mathbb{R}" />.
              </p
      
    >
            </div
      
    >
          </div
      
    >
        </CardContent
      
    >
      </Card
      
    >

      {/* Section 4: Espérance et moments */}
      <Card className="border-0 shadow-lg"
      
    >
        <CardHeader
      
    >
          <CardTitle className="text-2xl font-bold text-carnet-red"
      
    >
            4. Espérance et moments
          </CardTitle
      
    >
        </CardHeader
      
    >
        <CardContent className="space-y-6"
      
    >
          <div
      
    >
            <h3 className="text-lg font-semibold mb-3">Espérance</h3
      
    >
            <p className="text-black mb-4"
      
    >
              Lorsque <LatexRenderer latex="\int_{-\infty}^{+\infty}|t|f_X(t)\,dt<\infty" />, on définit :
            </p
      
    >
            <div className="bg-pr-gray-bg border-l-4 border-carnet-red/40 p-4 rounded-r-lg"
      
    >
              <div className="text-center"
      
    >
                <LatexRenderer latex="\mathbb{E}(X)=\int_{-\infty}^{+\infty}t\,f_X(t)\,dt" /
      
    >
              </div
      
    >
            </div
      
    >
          </div
      
    >

          <div
      
    >
            <h3 className="text-lg font-semibold mb-3">Théorème de transfert (version continue)</h3
      
    >
            <p className="text-black mb-4"
      
    >
              Pour toute fonction <LatexRenderer latex="g" /> continue par morceaux sur le support
              <LatexRenderer latex="I=\operatorname{Supp}(X)" /> :
            </p
      
    >
            <div className="bg-pr-gray-bg border-l-4 border-carnet-red/40 p-4 rounded-r-lg"
      
    >
              <div className="text-center"
      
    >
                <LatexRenderer latex="\mathbb{E}\bigl(g(X)\bigr)=\int_{I}g(t)\,f_X(t)\,dt" /
      
    >
              </div
      
    >
              <p className="text-center text-sm text-black mt-2"
      
    >
                (convergence absolue requise)
              </p
      
    >
            </div
      
    >
          </div
      
    >

          <div
      
    >
            <h3 className="text-lg font-semibold mb-3">Moment d'ordre 2</h3
      
    >
            <p className="text-black mb-4"
      
    >
              Sous convergence absolue :
            </p
      
    >
            <div className="bg-pr-gray-bg border-l-4 border-carnet-red/40 p-4 rounded-r-lg"
      
    >
              <div className="text-center"
      
    >
                <LatexRenderer latex="\mathbb{E}(X^{2})=\int_{-\infty}^{+\infty}t^{2}f_X(t)\,dt" /
      
    >
              </div
      
    >
            </div
      
    >
          </div
      
    >
        </CardContent
      
    >
      </Card
      
    >

      {/* Section 5: Variance */}
      <Card className="border-0 shadow-lg"
      
    >
        <CardHeader
      
    >
          <CardTitle className="text-2xl font-bold text-carnet-red"
      
    >
            5. Variance
          </CardTitle
      
    >
        </CardHeader
      
    >
        <CardContent className="space-y-6"
      
    >
          <div
      
    >
            <p className="text-black mb-4"
      
    >
              Lorsque le moment d'ordre 2 existe :
            </p
      
    >
            <div className="bg-pr-gray-bg border-l-4 border-carnet-red/40 p-4 rounded-r-lg"
      
    >
              <div className="text-center"
      
    >
                <LatexRenderer latex="\operatorname{Var}(X)=\int_{-\infty}^{+\infty}\bigl(t-\mathbb{E}(X)\bigr)^{2}f_X(t)\,dt" /
      
    >
              </div
      
    >
            </div
      
    >
          </div
      
    >

          <div
      
    >
            <h3 className="text-lg font-semibold mb-3">Formule de Koenig–Huygens</h3
      
    >
            <div className="bg-pr-gray-bg border-l-4 border-carnet-red/40 p-4 rounded-r-lg"
      
    >
              <div className="text-center"
      
    >
                <LatexRenderer latex="\operatorname{Var}(X)=\mathbb{E}(X^{2})-\bigl(\mathbb{E}(X)\bigr)^{2}" /
      
    >
              </div
      
    >
            </div
      
    >
          </div
      
    >

          <div
      
    >
            <h3 className="text-lg font-semibold mb-3">Compatibilité affine</h3>
            <p className="text-black mb-4">
              Pour <LatexRenderer latex="a,b\in\mathbb{R}" /> :
            </p>
            <ComparisonGrid>
              <ComparisonCard label="Espérance affine">
                <div className="text-center my-2">
                  <LatexRenderer latex="\mathbb{E}(aX+b)=a\,\mathbb{E}(X)+b" />
                </div>
                <p className="text-sm mt-2 italic">Linéarité totale en <LatexRenderer latex="a" /> et <LatexRenderer latex="b" />.</p>
              </ComparisonCard>
              <ComparisonCard label="Variance affine">
                <div className="text-center my-2">
                  <LatexRenderer latex="\operatorname{Var}(aX+b)=a^{2}\operatorname{Var}(X)" />
                </div>
                <p className="text-sm mt-2 italic">Insensible à la translation <LatexRenderer latex="b" /> ; quadratique en <LatexRenderer latex="a" />.</p>
              </ComparisonCard>
            </ComparisonGrid>
          </div
      
    >
        </CardContent
      
    >
      </Card
      
    >

      {/* Section 6: Variable réduite et centrée réduite */}
      <Card className="border-0 shadow-lg"
      
    >
        <CardHeader
      
    >
          <CardTitle className="text-2xl font-bold text-carnet-red"
      
    >
            6. Variable réduite et centrée réduite
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
            <ul className="list-disc list-inside space-y-3 text-black ml-4"
      
    >
              <li
      
    >
                Une variable aléatoire à densité est <em>réduite</em> si <LatexRenderer latex="\operatorname{Var}(X)=1" />.
              </li
      
    >
              <li
      
    >
                Elle est <em>centrée réduite</em> si, en plus, <LatexRenderer latex="\mathbb{E}(X)=0" />.
              </li
      
    >
            </ul
      
    >
          </div
      
    >

          <div
      
    >
            <h3 className="text-lg font-semibold mb-3">Variable centrée réduite associée</h3
      
    >
            <div className="bg-pr-gray-bg border-l-4 border-carnet-red/40 p-4 rounded-r-lg"
      
    >
              <div className="text-center"
      
    >
                <LatexRenderer latex="X^{*}=\frac{X-\mathbb{E}(X)}{\sqrt{\operatorname{Var}(X)}}" /
      
    >
              </div
      
    >
            </div
      
    >
            <p className="text-black mt-4"
      
    >
              est la variable centrée réduite associée à toute <LatexRenderer latex="X" /> possédant une
              espérance et une variance non nulles.
            </p
      
    >
          </div
      
    >
        </CardContent
      
    >
      </Card
      
    >

      {/* Section 7: Loi uniforme */}
      <Card className="border-0 shadow-lg"
      
    >
        <CardHeader
      
    >
          <CardTitle className="text-2xl font-bold text-carnet-red"
      
    >
            7. Loi uniforme sur [a,b] (a&lt;b)
          </CardTitle
      
    >
        </CardHeader
      
    >
        <CardContent className="space-y-6"
      
    >
          <div className="bg-pr-gray-bg border border-carnet-red/30 rounded-lg p-6"
      
    >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"
      
    >
              <div
      
    >
                <h4 className="text-lg font-semibold mb-3 text-black">Densité</h4
      
    >
                <div className="text-center"
      
    >
                  <LatexRenderer latex="f(t)=\begin{cases} \frac{1}{b-a}, & t\in[a,b],\\ 0, & \text{sinon.} \end{cases}" /
      
    >
                </div
      
    >
              </div
      
    >
              <div
      
    >
                <h4 className="text-lg font-semibold mb-3 text-black">Fonction de répartition</h4
      
    >
                <div className="text-center"
      
    >
                  <LatexRenderer latex="F(x)=\begin{cases} 0, & x<a,\\ \frac{x-a}{b-a}, & x\in[a,b],\\ 1, & x>b. \end{cases}" /
      
    >
                </div
      
    >
              </div
      
    >
            </div
      
    >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-carnet-red/30"
      
    >
              <div
      
    >
                <h4 className="text-lg font-semibold mb-3 text-black">Espérance</h4
      
    >
                <div className="text-center"
      
    >
                  <LatexRenderer latex="\mathbb{E}(X)=\frac{a+b}{2}" /
      
    >
                </div
      
    >
              </div
      
    >
              <div
      
    >
                <h4 className="text-lg font-semibold mb-3 text-black">Variance</h4
      
    >
                <div className="text-center"
      
    >
                  <LatexRenderer latex="\operatorname{Var}(X)=\frac{(b-a)^{2}}{12}" /
      
    >
                </div
      
    >
              </div
      
    >
            </div
      
    >
          </div
      
    >
          
          <div
      
    >
            <h3 className="text-lg font-semibold mb-3">Cas particulier</h3
      
    >
            <p className="text-black"
      
    >
              Pour <LatexRenderer latex="[0,1]" /> on obtient <LatexRenderer latex="\mathbb{E}(X)=\frac{1}{2}" /> et <LatexRenderer latex="\operatorname{Var}(X)=\frac{1}{12}" />.
            </p
      
    >
          </div
      
    >

          <div
      
    >
            <h3 className="text-lg font-semibold mb-3">Transformation affine</h3
      
    >
            <p className="text-black"
      
    >
              Si <LatexRenderer latex="Y\sim\mathcal{U}([0,1])" />, alors <LatexRenderer latex="(b-a)Y+a\sim\mathcal{U}([a,b])" />.
            </p
      
    >
          </div
      
    >
        </CardContent
      
    >
      </Card
      
    >

      {/* Section 8: Loi exponentielle */}
      <Card className="border-0 shadow-lg"
      
    >
        <CardHeader
      
    >
          <CardTitle className="text-2xl font-bold text-carnet-red"
      
    >
            8. Loi exponentielle ℰ(λ) (λ&gt;0)
          </CardTitle
      
    >
        </CardHeader
      
    >
        <CardContent className="space-y-6"
      
    >
          <div className="bg-pr-gray-bg border border-carnet-red/30 rounded-lg p-6"
      
    >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"
      
    >
              <div
      
    >
                <h4 className="text-lg font-semibold mb-3 text-black">Densité</h4
      
    >
                <div className="text-center"
      
    >
                  <LatexRenderer latex="f(t)=\begin{cases} 0, & t<0,\\ \lambda e^{-\lambda t}, & t\geq0. \end{cases}" /
      
    >
                </div
      
    >
              </div
      
    >
              <div
      
    >
                <h4 className="text-lg font-semibold mb-3 text-black">Fonction de répartition</h4
      
    >
                <div className="text-center"
      
    >
                  <LatexRenderer latex="F(x)=\begin{cases} 0, & x<0,\\ 1-e^{-\lambda x}, & x\geq0. \end{cases}" /
      
    >
                </div
      
    >
              </div
      
    >
            </div
      
    >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-carnet-red/30"
      
    >
              <div
      
    >
                <h4 className="text-lg font-semibold mb-3 text-black">Espérance</h4
      
    >
                <div className="text-center"
      
    >
                  <LatexRenderer latex="\mathbb{E}(X)=\frac{1}{\lambda}" /
      
    >
                </div
      
    >
              </div
      
    >
              <div
      
    >
                <h4 className="text-lg font-semibold mb-3 text-black">Variance</h4
      
    >
                <div className="text-center"
      
    >
                  <LatexRenderer latex="\operatorname{Var}(X)=\frac{1}{\lambda^{2}}" /
      
    >
                </div
      
    >
              </div
      
    >
            </div
      
    >
          </div
      
    >

          <div
      
    >
            <h3 className="text-lg font-semibold mb-3">Propriété sans mémoire</h3
      
    >
            <p className="text-black mb-3"
      
    >
              Pour tout <LatexRenderer latex="t,h>0" /> :
            </p
      
    >
            <div className="text-center bg-pr-gray-bg p-4 rounded-lg"
      
    >
              <LatexRenderer latex="\mathbb{P}(X>t+h\mid X>h)=\mathbb{P}(X>t)" /
      
    >
            </div
      
    >
          </div
      
    >

          <div
      
    >
            <h3 className="text-lg font-semibold mb-3">Transformations</h3
      
    >
            <div className="text-center bg-pr-gray-bg p-4 rounded-lg"
      
    >
              <LatexRenderer latex="X\sim\mathcal{E}(1)\ \Longleftrightarrow\ \frac{X}{\lambda}\sim\mathcal{E}(\lambda)" /
      
    >
            </div
      
    >
          </div
      
    >
        </CardContent
      
    >
      </Card
      
    >

      {/* Section 9: Loi gamma */}
      <Card className="border-0 shadow-lg"
      
    >
        <CardHeader
      
    >
          <CardTitle className="text-2xl font-bold text-carnet-red"
      
    >
            9. Loi gamma γ(k) (k&gt;0)
          </CardTitle
      
    >
        </CardHeader
      
    >
        <CardContent className="space-y-6"
      
    >
          <div className="bg-pr-gray-bg border border-carnet-red/30 rounded-lg p-6"
      
    >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"
      
    >
              <div
      
    >
                <h4 className="text-lg font-semibold mb-3 text-black">Densité</h4
      
    >
                <div className="text-center"
      
    >
                  <LatexRenderer latex="f(t)=\begin{cases} 0, & t\leq 0,\\ \frac{1}{\Gamma(k)}\,t^{k-1}e^{-t}, & t>0. \end{cases}" /
      
    >
                </div
      
    >
              </div
      
    >
              <div
      
    >
                <h4 className="text-lg font-semibold mb-3 text-black">Fonction de répartition</h4
      
    >
                <div className="text-center"
      
    >
                  <LatexRenderer latex="F(x)=\begin{cases} 0, & x\leq0,\\ \int_{0}^{x}f(u)\,du, & x>0. \end{cases}" /
      
    >
                </div
      
    >
              </div
      
    >
            </div
      
    >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-carnet-red/30"
      
    >
              <div
      
    >
                <h4 className="text-lg font-semibold mb-3 text-black">Espérance</h4
      
    >
                <div className="text-center"
      
    >
                  <LatexRenderer latex="\mathbb{E}(X)=k" /
      
    >
                </div
      
    >
              </div
      
    >
              <div
      
    >
                <h4 className="text-lg font-semibold mb-3 text-black">Variance</h4
      
    >
                <div className="text-center"
      
    >
                  <LatexRenderer latex="\operatorname{Var}(X)=k" /
      
    >
                </div
      
    >
              </div
      
    >
            </div
      
    >
          </div
      
    >

          <div
      
    >
            <h3 className="text-lg font-semibold mb-3">Remarque</h3
      
    >
            <p className="text-black"
      
    >
              Le cas <LatexRenderer latex="k=1" /> donne l'exponentielle de paramètre 1.
              La somme de <LatexRenderer latex="n" /> exponentielles indépendantes de paramètre 1
              suit la loi <LatexRenderer latex="\gamma(n)" />.
            </p
      
    >
          </div
      
    >
        </CardContent
      
    >
      </Card
      
    >

      {/* Section 10: Loi normale */}
      <Card className="border-0 shadow-lg"
      
    >
        <CardHeader
      
    >
          <CardTitle className="text-2xl font-bold text-carnet-red"
      
    >
            10. Loi normale 𝒩(m,σ²) (σ&gt;0)
          </CardTitle
      
    >
        </CardHeader
      
    >
        <CardContent className="space-y-6"
      
    >
          <div className="bg-pr-gray-bg border border-carnet-red/30 rounded-lg p-6"
      
    >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"
      
    >
              <div
      
    >
                <h4 className="text-lg font-semibold mb-3 text-black">Densité</h4
      
    >
                <div className="text-center"
      
    >
                  <LatexRenderer latex="\varphi_{m,\sigma}(t)=\frac{1}{\sigma\sqrt{2\pi}}\exp\!\bigl(-\frac{(t-m)^{2}}{2\sigma^{2}}\bigr)" /
      
    >
                </div
      
    >
              </div
      
    >
              <div
      
    >
                <h4 className="text-lg font-semibold mb-3 text-black">Fonction de répartition</h4
      
    >
                <div className="text-center"
      
    >
                  <LatexRenderer latex="\Phi_{m,\sigma}(x)=\int_{-\infty}^{x}\varphi_{m,\sigma}(t)\,dt" /
      
    >
                </div
      
    >
              </div
      
    >
            </div
      
    >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-carnet-red/30"
      
    >
              <div
      
    >
                <h4 className="text-lg font-semibold mb-3 text-black">Espérance</h4
      
    >
                <div className="text-center"
      
    >
                  <LatexRenderer latex="\mathbb{E}(X)=m" /
      
    >
                </div
      
    >
              </div
      
    >
              <div
      
    >
                <h4 className="text-lg font-semibold mb-3 text-black">Variance</h4
      
    >
                <div className="text-center"
      
    >
                  <LatexRenderer latex="\operatorname{Var}(X)=\sigma^{2}" /
      
    >
                </div
      
    >
              </div
      
    >
            </div
      
    >
          </div
      
    >

          <div
      
    >
            <h3 className="text-lg font-semibold mb-3">Normale centrée réduite 𝒩(0,1)</h3
      
    >
            <div className="bg-pr-gray-bg p-4 rounded-lg"
      
    >
              <div className="text-center space-y-2"
      
    >
                <LatexRenderer latex="\varphi(t)=\frac{1}{\sqrt{2\pi}}e^{-t^{2}/2}" /
      
    >
                <LatexRenderer latex="\Phi(x)=\frac{1}{\sqrt{2\pi}}\int_{-\infty}^{x}e^{-t^{2}/2}\,dt" /
      
    >
              </div
      
    >
            </div
      
    >
          </div
      
    >

          <div
      
    >
            <h3 className="text-lg font-semibold mb-3">Propriétés</h3
      
    >
            <p className="text-black mb-3"
      
    >
              <LatexRenderer latex="\Phi" /> est croissante : <LatexRenderer latex="\Phi(-x)=1-\Phi(x)" />, donc <LatexRenderer latex="\Phi(0)=\frac{1}{2}" />.
            </p
      
    >
          </div
      
    >

          <div
      
    >
            <h3 className="text-lg font-semibold mb-3">Transformations</h3
      
    >
            <div className="space-y-4"
      
    >
              <div className="bg-pr-gray-bg p-4 rounded-lg text-center"
      
    >
                <LatexRenderer latex="X\sim\mathcal{N}(m,\sigma^{2})\;\Longleftrightarrow\;\frac{X-m}{\sigma}\sim\mathcal{N}(0,1)" /
      
    >
              </div
      
    >
              <p className="text-black text-center">Par ailleurs,</p
      
    >
              <div className="bg-pr-gray-bg p-4 rounded-lg text-center"
      
    >
                <LatexRenderer latex="X\sim\mathcal{N}(m,\sigma^{2})\;\Longleftrightarrow\;aX+b\sim\mathcal{N}(am+b,\;a^{2}\sigma^{2})\quad(a\neq0)" /
      
    >
              </div
      
    >
            </div
      
    >
          </div
      
    >
        </CardContent
      
    >
      </Card
      
    >

      {/* Section 11: Loi de Laplace-Gauss */}
      <Card className="border-0 shadow-lg"
      
    >
        <CardHeader
      
    >
          <CardTitle className="text-2xl font-bold text-carnet-red"
      
    >
            11. Loi de Laplace–Gauss
          </CardTitle
      
    >
        </CardHeader
      
    >
        <CardContent
      
    >
          <p className="text-black"
      
    >
            Ce nom est un synonyme historique pour la loi normale.
          </p
      
    >
        </CardContent
      
    >
      </Card
      
    >

      {/* Section 12: Récapitulatif affine */}
      <Card className="border-0 shadow-lg"
      
    >
        <CardHeader
      
    >
          <CardTitle className="text-2xl font-bold text-carnet-red"
      
    >
            12. Récapitulatif affine
          </CardTitle
      
    >
        </CardHeader
      
    >
        <CardContent
      
    >
          <div className="bg-pr-gray-bg border-l-4 border-carnet-red/40 p-4 rounded-r-lg"
      
    >
            <p className="text-black"
      
    >
              Pour toute loi uniforme, exponentielle ou normale, une transformation
              affine de la forme <LatexRenderer latex="aX+b" /> (avec <LatexRenderer latex="a\neq 0" />) conserve la nature de la
              loi, les paramètres étant simplement ajustés.
            </p
      
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

export default Chapitre6VariablesAleatoiresDensiteCoursPage;
