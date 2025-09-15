import React from 'react';
import { Link } from 'react-router-dom';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LatexRenderer } from '@/components/LatexRenderer';
import { BookOpen, Target, PenTool, Brain } from 'lucide-react';

const Chapitre7NupletsVariablesAleatoiresCoursPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={6}
      chapterTitle="n-uplets de variables aléatoires réelles"
      description="Vecteurs aléatoires, lois conjointes discrètes, espérance de sommes, indépendance multiple et sommes de variables indépendantes"
      slug="n-uplets-variables-aleatoires"
      showNavigation={true}
    >
      {/* Navigation vers les ressources */}
      <Card className="border-0 shadow-lg bg-blue-50">
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/formation/maths-n-uplets-variables-aleatoires-exercices">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                <PenTool className="mr-2 h-4 w-4" />
                Exercices
              </Button>
            </Link>
            <Link to="/formation/maths-n-uplets-variables-aleatoires-flashcards">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                <Brain className="mr-2 h-4 w-4" />
                Flashcards
              </Button>
            </Link>
            <Link to="/formation/maths-n-uplets-variables-aleatoires-quiz">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                <Target className="mr-2 h-4 w-4" />
                Quiz
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Section 1 — Vecteurs aléatoires */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            1. Vecteurs aléatoires
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-lg">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition — vecteur aléatoire</p>
              <div className="mt-2 space-y-2">
                <p>Soient <LatexRenderer latex="X_1,\dots,X_n" inline /> des v.a. réelles définies sur <LatexRenderer latex="(\Omega,\mathcal{A},P)" inline />.</p>
                <p>Le vecteur aléatoire est</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="X=(X_1,\dots,X_n):\Omega \to \mathbb{R}^n" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition — loi d'un vecteur aléatoire</p>
              <div className="mt-2 space-y-2">
                <p>La loi de <LatexRenderer latex="X=(X_1,\dots,X_n)" inline /> est donnée par la fonction de répartition :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="F_X(x_1,\dots,x_n) = P(X_1\leq x_1,\dots,X_n\leq x_n)" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Théorème</p>
              <div className="mt-2 space-y-2">
                <p>Si <LatexRenderer latex="X=(X_1,\dots,X_n)" inline /> et <LatexRenderer latex="Y=(Y_1,\dots,Y_n)" inline /> ont même loi et <LatexRenderer latex="g" inline /> est continue <LatexRenderer latex="\mathbb{R}^n \to \mathbb{R}^m" inline />, alors <LatexRenderer latex="g(X)" inline /> et <LatexRenderer latex="g(Y)" inline /> ont même loi.</p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition — loi marginale</p>
              <div className="mt-2">
                <p>La loi de <LatexRenderer latex="X_k" inline /> est la loi marginale de la loi conjointe de <LatexRenderer latex="(X_1,\dots,X_n)" inline />.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 2 — Loi conjointe discrète */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            2. Loi conjointe discrète
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-lg">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition</p>
              <div className="mt-2 space-y-2">
                <p>On appelle loi de probabilité d'un vecteur aléatoire discret <LatexRenderer latex="(X_1,\dots,X_n)" inline /> l'application</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="p(x_1,\dots,x_n) = P(X_1=x_1,\dots,X_n=x_n)" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Propriété</p>
              <div className="mt-2">
                <div className="text-center py-2">
                  <LatexRenderer latex="\sum_{(x_1,\dots,x_n)} P(X_1=x_1,\dots,X_n=x_n)=1" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Propriété — marginales</p>
              <div className="mt-2">
                <div className="text-center py-2">
                  <LatexRenderer latex="P(X_k=x_k) = \sum_{\text{tous les autres indices}} P(X_1=x_1,\dots,X_n=x_n)" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 3 — Espérance de sommes */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            3. Espérance de sommes
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-lg">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Théorème</p>
              <div className="mt-2 space-y-2">
                <p>Si <LatexRenderer latex="X,Y" inline /> admettent une espérance :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="E(X+Y) = E(X)+E(Y)" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Théorème — linéarité pour n v.a.</p>
              <div className="mt-2 space-y-2">
                <p>Si <LatexRenderer latex="X_1,\dots,X_n" inline /> admettent chacun une espérance :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="E\!\left(\sum_{k=1}^n X_k\right) = \sum_{k=1}^n E(X_k)" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Théorème — croissance de l'espérance</p>
              <div className="mt-2 space-y-2">
                <p>Si <LatexRenderer latex="X \leq Y" inline /> p.s. et <LatexRenderer latex="X,Y" inline /> admettent une espérance :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="E(X) \leq E(Y)" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Théorème — domination</p>
              <div className="mt-2 space-y-2">
                <p>Si <LatexRenderer latex="0 \leq |X|\leq Y" inline /> p.s. et <LatexRenderer latex="Y" inline /> admet une espérance, alors <LatexRenderer latex="X" inline /> aussi et <LatexRenderer latex="|E(X)| \leq E(Y)" inline />.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 4 — Indépendance multiple */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            4. Indépendance multiple
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-lg">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition — indépendance mutuelle</p>
              <div className="mt-2 space-y-2">
                <p><LatexRenderer latex="X_1,\dots,X_n" inline /> sont mutuellement indépendantes si</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="F_{X_1,\dots,X_n}(x_1,\dots,x_n) = \prod_{k=1}^n F_{X_k}(x_k)" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Théorème</p>
              <div className="mt-2 space-y-2">
                <p><LatexRenderer latex="X_1,\dots,X_n" inline /> mutuellement indépendantes <LatexRenderer latex="\iff" inline /></p>
                <div className="text-center py-2">
                  <LatexRenderer latex="P(X_1\in I_1,\dots,X_n\in I_n) = \prod_{k=1}^n P(X_k\in I_k)" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Théorème — cas discret</p>
              <div className="mt-2 space-y-2">
                <p>Pour <LatexRenderer latex="X_1,\dots,X_n" inline /> discrètes :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="P(X_1=x_1,\dots,X_n=x_n) = \prod_{k=1}^n P(X_k=x_k)" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Théorème — lemme des coalitions</p>
              <div className="mt-2">
                <p>Si <LatexRenderer latex="X_1,\dots,X_n" inline /> sont indépendantes, alors toute fonction des premières est indépendante de toute fonction des autres.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 5 — Sommes de variables indépendantes */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            5. Sommes de variables indépendantes
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-lg">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Théorème — espérance du produit</p>
              <div className="mt-2 space-y-2">
                <p>Si <LatexRenderer latex="X,Y" inline /> indépendantes et admettent une espérance :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="E(XY)=E(X)E(Y)" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Théorème — espérance produit généralisée</p>
              <div className="mt-2 space-y-2">
                <p>Si <LatexRenderer latex="X_1,\dots,X_n" inline /> indépendantes et admettent une espérance :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="E\!\left(\prod_{k=1}^n X_k\right) = \prod_{k=1}^n E(X_k)" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Théorème — variance d'une somme</p>
              <div className="mt-2 space-y-2">
                <p>Si <LatexRenderer latex="X_1,\dots,X_n" inline /> indépendantes et admettent une variance :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="V\!\left(\sum_{k=1}^n X_k\right) = \sum_{k=1}^n V(X_k)" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Théorème — loi de la somme de Bernoulli indépendantes</p>
              <div className="mt-2 space-y-2">
                <p>Si <LatexRenderer latex="X_i \sim \mathcal{B}(p)" inline /> indépendantes :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="\sum_{i=1}^n X_i \sim \mathcal{B}(n,p)" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Théorème — loi de la somme de Poisson</p>
              <div className="mt-2 space-y-2">
                <p>Si <LatexRenderer latex="X_i \sim \mathcal{P}(\lambda_i)" inline /> indépendantes :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="\sum_{i=1}^n X_i \sim \mathcal{P}\!\left(\sum \lambda_i\right)" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Théorème — loi de la somme binomiale</p>
              <div className="mt-2 space-y-2">
                <p>Si <LatexRenderer latex="X_i \sim \mathcal{B}(n_i,p)" inline /> indépendantes :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="\sum_{i=1}^n X_i \sim \mathcal{B}\!\left(\sum n_i,p\right)" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Théorème — loi de la somme normale</p>
              <div className="mt-2 space-y-2">
                <p>Si <LatexRenderer latex="X_i \sim \mathcal{N}(m_i,\sigma_i^2)" inline /> indépendantes :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="\sum_{i=1}^n X_i \sim \mathcal{N}\!\left(\sum m_i,\sum \sigma_i^2\right)" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Théorème — variance d'une somme discrète</p>
              <div className="mt-2 space-y-2">
                <p>Pour <LatexRenderer latex="X_1,\dots,X_n" inline /> discrètes :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="V\!\left(\sum_{k=1}^n X_k\right) = \sum_{k=1}^n V(X_k) + 2\sum_{1\leq i<j\leq n}\mathrm{Cov}(X_i,X_j)" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation secondaire */}
      <Card className="border-0 shadow-lg bg-gray-50">
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/formation/maths-approfondies-2e-annee">
              <Button variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-50">
                Retour aux chapitres
              </Button>
            </Link>
            <Link to="/formation/maths-n-uplets-variables-aleatoires-exercices">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <PenTool className="mr-2 h-4 w-4" />
                Exercices
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </MathChapterTemplate>
  );
};

export default Chapitre7NupletsVariablesAleatoiresCoursPage;
