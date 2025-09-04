import React from 'react';
import { Link } from 'react-router-dom';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LatexRenderer } from '@/components/LatexRenderer';
import { BookOpen, Target, Brain, PenTool } from 'lucide-react';

const Chapitre12ConvergencesApproximationsCoursPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={12}
      chapterTitle="Convergences et approximations"
      description="Convergence en probabilité et convergence en loi"
      slug="convergences-approximations"
      showNavigation={true}
    >
      {/* Navigation vers les ressources */}
      <Card className="border-0 shadow-lg bg-blue-50">
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/formation/maths-convergences-approximations-exercices">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                <PenTool className="mr-2 h-4 w-4" />
                Exercices
              </Button>
            </Link>
            <Link to="/formation/maths-convergences-approximations-quiz">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                <Target className="mr-2 h-4 w-4" />
                Quiz
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Section 1 - Inégalités fondamentales */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            1. Inégalités fondamentales
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">• Inégalité de Markov</h3>
            <p className="text-lg mb-4">
              Soit <LatexRenderer latex="Z" inline /> une variable aléatoire positive, d'espérance <LatexRenderer latex="\mathbb E(Z)" inline />. Pour tout réel <LatexRenderer latex="a>0" inline /> :
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
              <div className="text-center">
                <LatexRenderer latex="\forall a>0,\quad \mathbb P(Z\ge a)\le \dfrac{\mathbb E(Z)}{a}" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">• Inégalité de Bienaymé–Tchebychev</h3>
            <p className="text-lg mb-4">
              Lorsque <LatexRenderer latex="Z" inline /> possède une variance <LatexRenderer latex="\mathrm V(Z)" inline />, on obtient, pour tout <LatexRenderer latex="\varepsilon>0" inline /> :
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
              <div className="text-center">
                <LatexRenderer latex="\forall\varepsilon>0,\quad \mathbb P\bigl(|Z-\mathbb E(Z)|\ge \varepsilon\bigr)\le \dfrac{\mathrm V(Z)}{\varepsilon^{2}}" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 2 - Convergence en probabilité */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            2. Convergence en probabilité
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Définition</h3>
            <p className="text-lg mb-4">
              Une suite <LatexRenderer latex="(Z_n)_{n\ge1}" inline /> converge en probabilité vers une variable <LatexRenderer latex="Z" inline />,
              notation <LatexRenderer latex="Z_n \xrightarrow{\mathbb P} Z" inline />, si :
            </p>
            <div className="text-center py-4">
              <LatexRenderer latex="\forall\varepsilon>0,\quad \lim_{n\to\infty}\mathbb P\bigl(|Z_n-Z|\ge\varepsilon\bigr)=0." />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 3 - Loi faible des grands nombres */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            3. Loi faible des grands nombres (LFGN)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="text-lg mb-4">
              Soit <LatexRenderer latex="(Y_k)_{k\ge1}" inline /> une suite de variables indépendantes, équiprobables,
              de même espérance <LatexRenderer latex="m" inline /> et de même variance. On pose la moyenne empirique
              <LatexRenderer latex="\displaystyle \overline Y_n=\frac1n\sum_{k=1}^{n}Y_k" inline />. Alors :
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
              <div className="text-center">
                <LatexRenderer latex="\forall\varepsilon>0,\quad \lim_{n\to\infty}\mathbb P\bigl(|\overline Y_n-m|\ge\varepsilon\bigr)=0." />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 4 - Propriétés de la convergence en probabilité */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            4. Propriétés de la convergence en probabilité
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">• Composition par une fonction continue</h3>
            <p className="text-lg">
              Si <LatexRenderer latex="Z_n\xrightarrow{\mathbb P}Z" inline /> et <LatexRenderer latex="g:\mathbb R\to\mathbb R" inline /> est continue,
              alors <LatexRenderer latex="g(Z_n)\xrightarrow{\mathbb P}g(Z)" inline />.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">• Addition</h3>
            <p className="text-lg">
              Si <LatexRenderer latex="Z_n\xrightarrow{\mathbb P}Z" inline /> et <LatexRenderer latex="T_n\xrightarrow{\mathbb P}T" inline />, alors
              <LatexRenderer latex="Z_n+T_n\xrightarrow{\mathbb P}Z+T" inline />.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Section 5 - Convergence en loi */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            5. Convergence en loi
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Définition générale</h3>
            <p className="text-lg mb-4">
              Pour des fonctions de répartition <LatexRenderer latex="F_{Z_n}" inline /> et <LatexRenderer latex="F_Z" inline /> :
            </p>
            <div className="text-center py-4">
              <LatexRenderer latex="Z_n \xrightarrow{\mathcal L} Z \quad\Longleftrightarrow\quad \forall x\text{ point de continuité de }F_Z" />
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
              <div className="text-center">
                <LatexRenderer latex="\lim_{n\to\infty}F_{Z_n}(x)=F_Z(x)" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Cas discret</h3>
            <p className="text-lg mb-4">
              Pour des variables à valeurs dans <LatexRenderer latex="\mathbb N" inline /> :
            </p>
            <div className="text-center py-4">
              <LatexRenderer latex="Z_n \xrightarrow{\mathcal L} Z \quad\Longleftrightarrow\quad \forall k\in\mathbb N" />
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
              <div className="text-center">
                <LatexRenderer latex="\lim_{n\to\infty}\mathbb P(Z_n=k)=\mathbb P(Z=k)" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 6 - Théorème central limite */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            6. Théorème central limite (TCL)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="text-lg mb-4">
              Sous les mêmes hypothèses que la LFGN et <LatexRenderer latex="\mathrm V(Y_1)=\sigma^{2}>0" inline />,
              on définit la moyenne centrée réduite :
            </p>
            <div className="text-center py-4">
              <LatexRenderer latex="Z_n^{*}=\frac{\overline Y_n-\mathbb E(\overline Y_n)}{\sqrt{\mathrm V(\overline Y_n)}} =\sqrt{n}\,\frac{\overline Y_n-m}{\sigma}" />
            </div>
            <p className="text-lg mb-4">
              On a alors la convergence en loi vers la normale centrée réduite :
            </p>
            <div className="text-center py-4">
              <LatexRenderer latex="Z_n^{*}\xrightarrow{\mathcal L}\mathcal N(0,1)" />
            </div>
            <p className="text-lg">
              En particulier :
            </p>
            <div className="text-center py-4">
              <LatexRenderer latex="\forall x\in\mathbb R,\quad \lim_{n\to\infty}\mathbb P(Z_n^{*}\le x)=\Phi(x)" />
            </div>
            <p className="text-sm text-gray-600 text-center mt-2">
              où <LatexRenderer latex="\Phi" inline /> désigne la fonction de répartition de <LatexRenderer latex="\mathcal N(0,1)" inline />.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Section 7 - Approximations classiques */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            7. Approximations classiques
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <ul className="list-disc list-inside space-y-4 text-lg">
            <li>
              Pour <LatexRenderer latex="n\ge 20" inline /> et une probabilité <LatexRenderer latex="p" inline /> proche de <LatexRenderer latex="0{,}5" inline /> :
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4 ml-6">
                <div className="text-center">
                  <LatexRenderer latex="\mathcal B(n,p)\approx \mathcal N\bigl(np,\;npq\bigr) \quad\bigl(q=1-p\bigr)" />
                </div>
              </div>
            </li>
            <li>
              Lorsque <LatexRenderer latex="\lambda\ge 10" inline /> :
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4 ml-6">
                <div className="text-center">
                  <LatexRenderer latex="\mathcal P(\lambda)\approx \mathcal N(\lambda,\lambda)" />
                </div>
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Section 8 - Cas particulier : binomiale → Poisson */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            8. Cas particulier : binomiale → Poisson
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="text-lg mb-4">
              Pour <LatexRenderer latex="\lambda>0" inline />, si <LatexRenderer latex="(B_n)_{n\ge1}" inline /> suit la loi
              <LatexRenderer latex="\mathcal B\!\bigl(n,\tfrac{\lambda}{n}\bigr)" inline />, alors :
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
              <div className="text-center">
                <LatexRenderer latex="B_n \xrightarrow{\mathcal L} \mathcal P(\lambda)" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 9 - Composition par une fonction continue */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            9. Composition par une fonction continue (convergence en loi)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="text-lg">
              Si <LatexRenderer latex="Z_n\xrightarrow{\mathcal L}Z" inline /> et <LatexRenderer latex="g" inline /> est continue sur <LatexRenderer latex="\mathbb R" inline />,
              alors <LatexRenderer latex="g(Z_n)\xrightarrow{\mathcal L}g(Z)" inline />.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <Card className="border-0 shadow-lg bg-gray-50">
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/formation/maths-approfondies-2e-annee">
              <Button variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-50">
                Retour aux chapitres
              </Button>
            </Link>
            <Link to="/formation/maths-convergences-approximations-exercices">
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

export default Chapitre12ConvergencesApproximationsCoursPage;
