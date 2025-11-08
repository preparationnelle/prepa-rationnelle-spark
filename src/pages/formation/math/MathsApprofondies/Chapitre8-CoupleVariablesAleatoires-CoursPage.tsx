import React from 'react';
import { Link } from 'react-router-dom';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LatexRenderer } from '@/components/LatexRenderer';
import { BookOpen, Target, PenTool, Brain } from 'lucide-react';

const Chapitre8CoupleVariablesAleatoiresCoursPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={7}
      chapterTitle="Probabilités (Variables aléatoires)"
      description="Indépendance, couples de variables aléatoires réelles, lois marginales et conditionnelles, fonctions de couples discrets"
      slug="
      couple-variables-aleatoires"
      showNavigation={true}
      
    >
      {/* Navigation vers les ressources */}
      <Card className="border-0 shadow-lg bg-blue-50">
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/formation/maths-couple-variables-aleatoires-exercices">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                <PenTool className="mr-2 h-4 w-4" />
                Exercices
              </Button>
            </Link>
            <Link to="/formation/maths-couple-variables-aleatoires-flashcards">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                <Brain className="mr-2 h-4 w-4" />
                Flashcards
              </Button>
            </Link>
            <Link to="/formation/maths-couple-variables-aleatoires-quiz">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                <Target className="mr-2 h-4 w-4" />
                Quiz
              </Button>
            </Link>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <p className="font-semibold">Propriété</p>
            <div className="mt-2 space-y-2">
              <p>Si <LatexRenderer latex="(X_1,Y_1),(X_2,Y_2)" inline /> ont même loi conjointe et <LatexRenderer latex="g" inline /> est continue, alors</p>
              <div className="text-center py-2">
                <LatexRenderer latex="g(X_1,Y_1) \sim g(X_2,Y_2)" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 3 — Variables aléatoires discrètes */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            3. Variables aléatoires discrètes
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-lg">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Propriété</p>
              <div className="mt-2 space-y-2">
                <p>La loi de <LatexRenderer latex="(X,Y)" inline /> est donnée par</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="p_{i,j} = P(X=x_i, Y=y_j), \quad \sum_{i,j} p_{i,j}=1" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Propriété</p>
              <div className="mt-2 space-y-2">
                <p>Toute famille <LatexRenderer latex="(p_{i,j})_{i\in I, j\in J}" inline /> vérifiant</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="p_{i,j}\geq 0,\quad \sum_{i,j}p_{i,j}=1" />
                </div>
                <p>définit une loi jointe d'un couple discret <LatexRenderer latex="(X,Y)" inline />.</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Lois marginales</h3>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Propriété</p>
              <div className="mt-2 space-y-2">
                <p>Pour un couple <LatexRenderer latex="(X,Y)" inline /> :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="p_i = P(X=x_i) = \sum_j p_{i,j}, \quad q_j = P(Y=y_j) = \sum_i p_{i,j}" />
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Lois conditionnelles</h3>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition</p>
              <div className="mt-2 space-y-2">
                <p>Si <LatexRenderer latex="P(X=x_i)\neq 0" inline /> :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="P(Y=y_j \mid X=x_i) = \frac{p_{i,j}}{p_i}" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Propriété</p>
              <div className="mt-2 space-y-2">
                <p>Pour tout <LatexRenderer latex="(i,j)" inline /> :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="P(X=x_i, Y=y_j) = P(X=x_i)P(Y=y_j \mid X=x_i)" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 4 — Fonctions de couples discrets */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            4. Fonctions de couples discrets
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-lg">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Propriété</p>
              <div className="mt-2 space-y-2">
                <p>Si <LatexRenderer latex="Z = g(X,Y)" inline />, alors</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="P(Z=z) = \sum_{(x,y): g(x,y)=z} P(X=x, Y=y)" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Théorème — transfert double</p>
              <div className="mt-2 space-y-2">
                <p>Si <LatexRenderer latex="Z=g(X,Y)" inline /> admet une espérance :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="E(Z) = \sum_{i,j} g(x_i,y_j) P(X=x_i,Y=y_j)" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Corollaire — linéarité de l'espérance</p>
              <div className="mt-2 space-y-2">
                <p>Pour tout <LatexRenderer latex="\lambda,\mu \in \mathbb{R}" inline /> :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="E(\lambda X + \mu Y) = \lambda E(X) + \mu E(Y)" />
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Somme de variables indépendantes</h3>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Propriété — convolution</p>
              <div className="mt-2 space-y-2">
                <p>Si <LatexRenderer latex="Z=X+Y" inline /> :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="P(Z=z) = \sum_{x} P(X=x, Y=z-x)" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Corollaire</p>
              <div className="mt-2 space-y-2">
                <p>Si <LatexRenderer latex="X,Y" inline /> indépendantes à valeurs dans <LatexRenderer latex="\mathbb{N}" inline /> :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="P(X+Y=n) = \sum_{k=0}^n P(X=k)P(Y=n-k)" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 5 — Stabilité de lois classiques */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            5. Stabilité de lois classiques
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-lg">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Propriété — Stabilité des lois de Poisson</p>
              <div className="mt-2 space-y-2">
                <p>Si <LatexRenderer latex="X \sim \mathcal{P}(\lambda)" inline /> et <LatexRenderer latex="Y \sim \mathcal{P}(\mu)" inline /> indépendantes, alors</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="X+Y \sim \mathcal{P}(\lambda+\mu)" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Propriété — Stabilité des lois binomiales</p>
              <div className="mt-2 space-y-2">
                <p>Si <LatexRenderer latex="X \sim \mathcal{B}(m,p)" inline /> et <LatexRenderer latex="Y \sim \mathcal{B}(n,p)" inline /> indépendantes, alors</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="X+Y \sim \mathcal{B}(m+n,p)" />
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Min et Max</h3>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Propriété</p>
              <div className="mt-2 space-y-2">
                <p>Soient <LatexRenderer latex="X,Y" inline /> deux v.a. discrètes, <LatexRenderer latex="Z=\max(X,Y)" inline />. Alors :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="P(Z \leq z) = P(X \leq z, Y \leq z)" />
                </div>
                <p>Si <LatexRenderer latex="X,Y" inline /> sont indépendantes :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="P(Z \leq z) = P(X \leq z)P(Y \leq z)" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Propriété</p>
              <div className="mt-2 space-y-2">
                <p>Soient <LatexRenderer latex="X,Y" inline /> deux v.a. discrètes, <LatexRenderer latex="Z=\min(X,Y)" inline />. Alors :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="P(Z > z) = P(X>z, Y>z)" />
                </div>
                <p>Si <LatexRenderer latex="X,Y" inline /> sont indépendantes :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="P(Z>z) = P(X>z)P(Y>z)" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 6 — Covariance et corrélation */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            6. Covariance et corrélation
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Espérance d'un produit</h3>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Propriété</p>
              <div className="mt-2 space-y-2">
                <p>Si <LatexRenderer latex="X,Y" inline /> admettent une variance, alors</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="E(XY) = \sum_{i,j} x_i y_j P(X=x_i,Y=y_j)" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Propriété</p>
              <div className="mt-2 space-y-2">
                <p>Si <LatexRenderer latex="X,Y" inline /> sont indépendantes et admettent une espérance :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="E(XY) = E(X)E(Y)" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Théorème — Formule de Huygens</p>
              <div className="mt-2 space-y-2">
                <p>Si <LatexRenderer latex="X,Y" inline /> admettent une variance :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="\mathrm{Cov}(X,Y) = E(XY)-E(X)E(Y)" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Propriété</p>
              <div className="mt-2">
                <p>Si <LatexRenderer latex="Y=a" inline /> (constante), alors <LatexRenderer latex="\mathrm{Cov}(X,Y)=0" inline />.</p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Propriété</p>
              <div className="mt-2 space-y-2">
                <p>Pour toutes v.a. <LatexRenderer latex="X,Y,Z,T" inline /> admettant une variance :</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Symétrie : <LatexRenderer latex="\mathrm{Cov}(X,Y)=\mathrm{Cov}(Y,X)" inline />.</li>
                  <li>Bilinéarité : <LatexRenderer latex="\mathrm{Cov}(\lambda X+\mu Y, Z) = \lambda \mathrm{Cov}(X,Z)+\mu \mathrm{Cov}(Y,Z)" inline />.</li>
                  <li>Positivité : <LatexRenderer latex="\mathrm{Cov}(X,X)=V(X)\geq 0" inline />.</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Propriété</p>
              <div className="mt-2 space-y-2">
                <p>Si <LatexRenderer latex="X,Y" inline /> sont indépendantes et admettent une variance :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="\mathrm{Cov}(X,Y)=0" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Théorème — Variance d'une somme</p>
              <div className="mt-2 space-y-2">
                <p>Pour <LatexRenderer latex="X,Y" inline /> deux v.a. :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="V(X+Y) = V(X)+V(Y)+2\mathrm{Cov}(X,Y)" />
                </div>
                <p>Si <LatexRenderer latex="X,Y" inline /> indépendantes :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="V(X+Y)=V(X)+V(Y)" />
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Corrélation linéaire</h3>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Propriété — Inégalité de Cauchy–Schwarz</p>
              <div className="mt-2 space-y-2">
                <p>Si <LatexRenderer latex="X,Y" inline /> admettent une variance :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="|\mathrm{Cov}(X,Y)| \leq \sigma(X)\sigma(Y)" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition — coefficient de corrélation linéaire</p>
              <div className="mt-2 space-y-2">
                <p>Si <LatexRenderer latex="X,Y" inline /> admettent une variance non nulle :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="\rho_{X,Y} = \frac{\mathrm{Cov}(X,Y)}{\sigma(X)\sigma(Y)}" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Propriété</p>
              <div className="mt-2 space-y-2">
                <p>On a <LatexRenderer latex="-1 \leq \rho_{X,Y} \leq 1" inline />.</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li><LatexRenderer latex="\rho_{X,Y}=1 \iff \exists a>0,b,\ Y=aX+b" inline />.</li>
                  <li><LatexRenderer latex="\rho_{X,Y}=-1 \iff \exists a<0,b,\ Y=aX+b" inline />.</li>
                </ul>
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
            <Link to="/formation/maths-couple-variables-aleatoires-exercices">
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

export default Chapitre8CoupleVariablesAleatoiresCoursPage;
